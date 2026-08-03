'use client'

import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const menuTriggerRef = React.useRef<HTMLButtonElement>(null)
  const menuDialogRef = React.useRef<HTMLDivElement>(null)
  const closeMenuButtonRef = React.useRef<HTMLButtonElement>(null)

  const openMenu = React.useCallback((): void => {
    setIsMenuOpen(true)
  }, [])

  const closeMenu = React.useCallback((): void => {
    setIsMenuOpen(false)

    window.requestAnimationFrame(() => {
      menuTriggerRef.current?.focus()
    })
  }, [])

  const toggleDarkMode = (): void => {
    const shouldUseDarkMode = !document.documentElement.classList.contains('dark')
    document.documentElement.classList.toggle('dark', shouldUseDarkMode)
    document.documentElement.style.colorScheme = shouldUseDarkMode ? 'dark' : 'light'
    localStorage.setItem('theme', shouldUseDarkMode ? 'dark' : 'light')
  }

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  React.useEffect(() => {
    const desktopMediaQuery = window.matchMedia('(min-width: 768px)')

    const closeMenuAtDesktopBreakpoint = (event: MediaQueryListEvent): void => {
      if (event.matches) {
        setIsMenuOpen(false)
      }
    }

    desktopMediaQuery.addEventListener('change', closeMenuAtDesktopBreakpoint)

    return () => {
      desktopMediaQuery.removeEventListener('change', closeMenuAtDesktopBreakpoint)
    }
  }, [])

  React.useEffect(() => {
    if (!isMenuOpen) {
      return
    }

    const menuDialog = menuDialogRef.current
    if (!menuDialog) {
      return
    }

    const previousBodyOverflow = document.body.style.overflow
    const previousDocumentOverflow = document.documentElement.style.overflow
    const backgroundElements = [
      menuTriggerRef.current?.closest('nav'),
      document.querySelector('main'),
      document.querySelector('footer'),
    ].filter((element): element is HTMLElement => element instanceof HTMLElement)
    const previousInertStates = backgroundElements.map((element) => element.inert)

    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    backgroundElements.forEach((element) => {
      element.inert = true
    })

    const focusTimer = window.requestAnimationFrame(() => {
      closeMenuButtonRef.current?.focus()
    })

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeMenu()
        return
      }

      if (event.key !== 'Tab') {
        return
      }

      const focusableElements = Array.from(
        menuDialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]):not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((element) => element.getClientRects().length > 0)
      const firstFocusableElement = focusableElements[0]
      const lastFocusableElement = focusableElements.at(-1)

      if (!firstFocusableElement || !lastFocusableElement) {
        event.preventDefault()
        return
      }

      if (event.shiftKey && document.activeElement === firstFocusableElement) {
        event.preventDefault()
        lastFocusableElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastFocusableElement) {
        event.preventDefault()
        firstFocusableElement.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      window.cancelAnimationFrame(focusTimer)
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.overflow = previousDocumentOverflow
      backgroundElements.forEach((element, index) => {
        element.inert = previousInertStates[index] ?? false
      })
    }
  }, [closeMenu, isMenuOpen])

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScrolled ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20' : ''}`}
      >
        <a href="#top">
          <Image
            src={assets.logo}
            alt="Wenduo Wang"
            className="w-28 cursor-pointer mr-14 mt-1 dark:hidden"
          />
          <Image
            src={assets.logo_dark}
            alt="Wenduo Wang"
            className="hidden w-28 cursor-pointer mr-14 mt-1 dark:block"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScrolled ? '' : 'bg-white/50 shadow-sm'} dark:border dark:border-white/50 dark:bg-transparent`}
        >
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#services">Capabilities</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button type="button" onClick={toggleDarkMode} aria-label="Toggle dark mode">
            <Image src={assets.moon_icon} alt="" className="w-6 cursor-pointer dark:hidden" />
            <Image src={assets.sun_icon} alt="" className="hidden w-6 cursor-pointer dark:block" />
          </button>

          <a
            href="#contact"
            className="ml-4 hidden items-center gap-3 rounded-full border border-gray-500 px-10 py-2.5 lg:flex dark:border-white/50"
          >
            Contact
            <Image src={assets.arrow_icon} alt="" className="w-3 dark:hidden" />
            <Image src={assets.arrow_icon_dark} alt="" className="hidden w-3 dark:block" />
          </a>

          <button
            ref={menuTriggerRef}
            type="button"
            className="ml-3 flex h-11 w-11 items-center justify-center rounded-full md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:focus-visible:ring-blue-300 dark:focus-visible:ring-offset-darkTheme"
            onClick={openMenu}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label="Open menu"
          >
            <Image src={assets.menu_black} alt="" className="w-6 dark:hidden" />
            <Image src={assets.menu_white} alt="" className="hidden w-6 dark:block" />
          </button>
        </div>
      </nav>

      <div
        ref={menuDialogRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={isMenuOpen ? undefined : true}
        inert={isMenuOpen ? undefined : true}
        className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'visible opacity-100' : 'invisible pointer-events-none opacity-0'
        }`}
      >
        <button
          type="button"
          tabIndex={-1}
          aria-label="Close mobile menu"
          className="absolute inset-0 cursor-default bg-black/40 backdrop-blur-sm"
          onClick={closeMenu}
        />

        <div
          className={`absolute top-0 right-0 h-dvh w-72 max-w-[85vw] bg-rose-50 px-8 py-20 shadow-2xl transition-transform duration-300 dark:bg-darkHover dark:text-white ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            ref={closeMenuButtonRef}
            type="button"
            className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-rose-50 dark:focus-visible:ring-blue-300 dark:focus-visible:ring-offset-darkHover"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <Image src={assets.close_black} alt="" className="w-5 cursor-pointer dark:hidden" />
            <Image
              src={assets.close_white}
              alt=""
              className="hidden w-5 cursor-pointer dark:block"
            />
          </button>

          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  className="block rounded-md px-2 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 dark:focus-visible:ring-blue-300"
                  onClick={closeMenu}
                  href="#top"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="block rounded-md px-2 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 dark:focus-visible:ring-blue-300"
                  onClick={closeMenu}
                  href="#about"
                >
                  About me
                </a>
              </li>
              <li>
                <a
                  className="block rounded-md px-2 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 dark:focus-visible:ring-blue-300"
                  onClick={closeMenu}
                  href="#services"
                >
                  Capabilities
                </a>
              </li>
              <li>
                <a
                  className="block rounded-md px-2 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 dark:focus-visible:ring-blue-300"
                  onClick={closeMenu}
                  href="#work"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  className="block rounded-md px-2 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 dark:focus-visible:ring-blue-300"
                  onClick={closeMenu}
                  href="#contact"
                >
                  Contact me
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar
