import fs from 'node:fs/promises'
import path from 'node:path'

const rootDir = process.cwd()
const scanDirs = ['app', 'components', 'content', 'assets', 'types', 'scripts', 'README.md']
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

async function walk(dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true })
  const files = []

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
  const files = []

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

async function getMediaFiles(baseDir) {
  const fullBaseDir = path.join(rootDir, baseDir)
  const allFiles = await walk(fullBaseDir)
  return allFiles.filter((filePath) => mediaExtensions.has(path.extname(filePath)))
}

function hasAnyReference(textCorpus, probes) {
  return probes.some((probe) => probe.length > 0 && textCorpus.includes(probe))
}

function toUnixPath(inputPath) {
  return inputPath.split(path.sep).join('/')
}

async function main() {
  const scanFiles = await getScanFiles()
  const scanTexts = await Promise.all(scanFiles.map((filePath) => fs.readFile(filePath, 'utf8')))
  const textCorpus = scanTexts.join('\n')

  const assetMediaFiles = await getMediaFiles('assets')
  const publicMediaFiles = await getMediaFiles('public')

  const ignoredAssetFiles = new Set([
    'assets/images/profile/myface.jpg',
    'assets/images/profile/myself.jpg',
  ])

  const unusedAssets = assetMediaFiles
    .map((filePath) => toUnixPath(path.relative(rootDir, filePath)))
    .filter((relPath) => {
      if (ignoredAssetFiles.has(relPath)) {
        return false
      }

      const baseName = path.basename(relPath)
      const aliasRef = `@/${relPath}`
      const relativeImportRef = `./${baseName}`

      return !hasAnyReference(textCorpus, [baseName, aliasRef, relativeImportRef])
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

main().catch((error) => {
  console.error('assets:audit failed')
  console.error(error)
  process.exit(1)
})
