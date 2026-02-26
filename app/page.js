'use client'

import { useState, useEffect } from 'react';

import Navbar from '../components/Navbar'
import Header from '../components/Header'
import About from '../components/About'
import Services from '../components/Services'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

/** @typedef {import('@/types/domain').ThemeMode} ThemeMode */

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(()=>{
    const prefersDarkMode =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)

    if (prefersDarkMode) {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  },[])

  useEffect(()=>{
    /** @type {ThemeMode} */
    const nextTheme = isDarkMode ? 'dark' : 'light'

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.theme = nextTheme
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = ''
    }
  },[isDarkMode])

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Header />
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contact />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
