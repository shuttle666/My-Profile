'use client'

import React from 'react'

const THEME_STORAGE_KEY = 'theme'
const DARK_SCHEME_QUERY = '(prefers-color-scheme: dark)'

const applyTheme = (isDark: boolean): void => {
  document.documentElement.classList.toggle('dark', isDark)
  document.documentElement.style.colorScheme = isDark ? 'dark' : 'light'
}

const getStoredTheme = (): string | null => localStorage.getItem(THEME_STORAGE_KEY)

const ThemeSync = () => {
  React.useEffect(() => {
    const mediaQuery = window.matchMedia(DARK_SCHEME_QUERY)

    const syncWithSystemTheme = (): void => {
      const storedTheme = getStoredTheme()

      if (storedTheme === 'dark' || storedTheme === 'light') {
        applyTheme(storedTheme === 'dark')
        return
      }

      applyTheme(mediaQuery.matches)
    }

    syncWithSystemTheme()
    mediaQuery.addEventListener('change', syncWithSystemTheme)

    return () => mediaQuery.removeEventListener('change', syncWithSystemTheme)
  }, [])

  return null
}

export default ThemeSync
