import fs from 'node:fs/promises'
import path from 'node:path'

const rootDir = process.cwd()
const assetIndexPath = path.join(rootDir, 'assets/index.ts')
const scanDirs = ['app', 'components', 'content', 'types', 'scripts', 'README.md']
const textExtensions = new Set([
  '.js',
  '.jsx',
  '.ts',
  '.tsx',
  '.mjs',
  '.cjs',
  '.css',
  '.md',
  '.json',
])
const mediaExtensions = new Set(['.png', '.jpg', '.jpeg', '.svg', '.webp', '.gif', '.pdf', '.ico'])

async function walk(dirPath: string): Promise<string[]> {
  const entries = await fs.readdir(dirPath, { withFileTypes: true })
  const files: string[] = []

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)))
    } else {
      files.push(fullPath)
    }
  }

  return files
}

async function getScanFiles() {
  const files: string[] = []

  for (const target of scanDirs) {
    const fullPath = path.join(rootDir, target)
    const stat = await fs.stat(fullPath)
    if (stat.isDirectory()) {
      const nestedFiles = await walk(fullPath)
      files.push(...nestedFiles.filter((filePath) => textExtensions.has(path.extname(filePath))))
    } else {
      files.push(fullPath)
    }
  }

  return files
}

async function getAssetExportMap(): Promise<Map<string, string>> {
  const assetIndex = await fs.readFile(assetIndexPath, 'utf8')
  const importMap = new Map<string, string>()
  const assetExportMap = new Map<string, string>()
  const importPattern = /import\s+(\w+)\s+from\s+['"]\.\/([^'"]+)['"]/g

  for (const match of assetIndex.matchAll(importPattern)) {
    const [, importName, importPath] = match
    if (!importName || !importPath) continue
    importMap.set(importName, toUnixPath(path.join('assets', importPath)))
  }

  const exportMatch = assetIndex.match(/export const assets = \{([\s\S]*?)\n\}/)
  if (!exportMatch?.[1]) {
    return assetExportMap
  }

  const exportEntries = exportMatch[1].split('\n')
  for (const entry of exportEntries) {
    const cleanedEntry = entry.trim().replace(/,$/, '')
    if (!cleanedEntry) continue

    const [rawKey, rawImportName] = cleanedEntry.split(':').map((part) => part.trim())
    const exportKey = rawKey
    const importName = rawImportName || rawKey
    const relPath = importMap.get(importName)

    if (exportKey && relPath) {
      assetExportMap.set(exportKey, relPath)
    }
  }

  return assetExportMap
}

async function getMediaFiles(baseDir: string): Promise<string[]> {
  const fullBaseDir = path.join(rootDir, baseDir)
  const allFiles = await walk(fullBaseDir)
  return allFiles.filter((filePath) => mediaExtensions.has(path.extname(filePath)))
}

function hasAnyReference(textCorpus: string, probes: string[]): boolean {
  return probes.some((probe) => probe.length > 0 && textCorpus.includes(probe))
}

function getDirectAssetReferences(scanFiles: string[], scanTexts: string[]): Set<string> {
  const directReferences = new Set<string>()
  const importPattern = /from\s+['"]([^'"]+)['"]|import\s*\(\s*['"]([^'"]+)['"]\s*\)/g

  for (const [index, text] of scanTexts.entries()) {
    const scanFile = scanFiles[index]
    if (!scanFile) continue

    for (const match of text.matchAll(importPattern)) {
      const importPath = match[1] || match[2]
      if (!importPath) continue

      let resolvedPath = ''
      if (importPath.startsWith('@/assets/')) {
        resolvedPath = importPath.replace('@/', '')
      } else if (importPath.startsWith('.')) {
        resolvedPath = toUnixPath(
          path.relative(rootDir, path.resolve(path.dirname(scanFile), importPath))
        )
      }

      if (resolvedPath.startsWith('assets/') && mediaExtensions.has(path.extname(resolvedPath))) {
        directReferences.add(resolvedPath)
      }
    }
  }

  return directReferences
}

function getUsedAssetExportPaths(
  textCorpus: string,
  assetExportMap: Map<string, string>
): Set<string> {
  const usedAssetPaths = new Set<string>()
  const assetKeyPattern = /assets\.([A-Za-z0-9_]+)/g

  for (const match of textCorpus.matchAll(assetKeyPattern)) {
    const assetKey = match[1]
    if (!assetKey) continue

    const relPath = assetExportMap.get(assetKey)
    if (relPath) {
      usedAssetPaths.add(relPath)
    }
  }

  return usedAssetPaths
}

function toUnixPath(inputPath: string): string {
  return inputPath.split(path.sep).join('/')
}

async function main(): Promise<void> {
  const scanFiles = await getScanFiles()
  const scanTexts = await Promise.all(scanFiles.map((filePath) => fs.readFile(filePath, 'utf8')))
  const textCorpus = scanTexts.join('\n')
  const directAssetReferences = getDirectAssetReferences(scanFiles, scanTexts)
  const assetExportMap = await getAssetExportMap()
  const usedAssetExportPaths = getUsedAssetExportPaths(textCorpus, assetExportMap)

  const assetMediaFiles = await getMediaFiles('assets')
  const publicMediaFiles = await getMediaFiles('public')

  const unusedAssets = assetMediaFiles
    .map((filePath) => toUnixPath(path.relative(rootDir, filePath)))
    .filter((relPath) => {
      if (directAssetReferences.has(relPath) || usedAssetExportPaths.has(relPath)) {
        return false
      }

      const aliasRef = `@/${relPath}`

      return !hasAnyReference(textCorpus, [aliasRef])
    })

  const unusedPublic = publicMediaFiles
    .map((filePath) => toUnixPath(path.relative(path.join(rootDir, 'public'), filePath)))
    .filter((relPath) => {
      const normalizedRef = `/${relPath}`
      const fileNameRef = path.basename(relPath)
      return !hasAnyReference(textCorpus, [normalizedRef, fileNameRef])
    })

  console.log('Asset audit report')
  console.log('==================')
  console.log(`Total scanned source files: ${scanFiles.length}`)
  console.log(`Total media files in assets/: ${assetMediaFiles.length}`)
  console.log(`Total media files in public/: ${publicMediaFiles.length}`)
  console.log('')

  if (unusedAssets.length === 0) {
    console.log('No unused files found in assets/.')
  } else {
    console.log('Potentially unused files in assets/:')
    for (const file of unusedAssets.sort()) {
      console.log(`- ${file}`)
    }
  }

  console.log('')

  if (unusedPublic.length === 0) {
    console.log('No unused files found in public/.')
  } else {
    console.log('Potentially unused files in public/:')
    for (const file of unusedPublic.sort()) {
      console.log(`- public/${file}`)
    }
  }
}

main().catch((error: unknown) => {
  console.error('assets:audit failed')
  console.error(error)
  process.exit(1)
})
