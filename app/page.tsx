'use client'

import { useRef, useState, useEffect } from 'react'
import type { ThemeMode } from '@/types/domain'

import Navbar from '../components/Navbar'
import Header from '../components/Header'
import About from '../components/About'
import Services from '../components/Services'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
  const isManualChange = useRef(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const storedTheme = localStorage.theme as string | undefined
    const prefersDark = storedTheme === 'dark' || (storedTheme !== 'light' && mediaQuery.matches)

    setIsDarkMode(prefersDark)
    document.documentElement.classList.toggle('dark', prefersDark)

    const handleSystemChange = (e: MediaQueryListEvent) => {
      const stored = localStorage.theme as string | undefined
      // Only follow system change when user hasn't set a manual preference
      if (stored !== 'dark' && stored !== 'light') {
        setIsDarkMode(e.matches)
        document.documentElement.classList.toggle('dark', e.matches)
      }
    }

    mediaQuery.addEventListener('change', handleSystemChange)
    return () => mediaQuery.removeEventListener('change', handleSystemChange)
  }, [])

  useEffect(() => {
    // Only persist to localStorage when the user manually toggles the theme
    if (!isManualChange.current) return
    isManualChange.current = false

    const nextTheme: ThemeMode = isDarkMode ? 'dark' : 'light'
    document.documentElement.classList.toggle('dark', isDarkMode)
    localStorage.theme = nextTheme
  }, [isDarkMode])

  const handleSetIsDarkMode: React.Dispatch<React.SetStateAction<boolean>> = (action) => {
    isManualChange.current = true
    setIsDarkMode(action)
  }

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={handleSetIsDarkMode} />
      <Header />
      <About isDarkMode={isDarkMode} />
      <Services />
      <Work isDarkMode={isDarkMode} />
      <Contact />
      <Footer isDarkMode={isDarkMode} />
    </>
  )
}
