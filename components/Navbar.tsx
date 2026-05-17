'use client'

import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  const openMenu = (): void => {
    setIsMenuOpen(true)
  }

  const closeMenu = (): void => {
    setIsMenuOpen(false)
  }

  const toggleDarkMode = (): void => {
    const shouldUseDarkMode = !document.documentElement.classList.contains('dark')
    document.documentElement.classList.toggle('dark', shouldUseDarkMode)
    localStorage.setItem('theme', shouldUseDarkMode ? 'dark' : 'light')
  }

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-50 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

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
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              Capabilities
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">
              Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button type="button" onClick={toggleDarkMode} aria-label="Toggle dark mode">
            <Image src={assets.moon_icon} alt="" className="w-6 cursor-pointer dark:hidden" />
            <Image src={assets.sun_icon} alt="" className="hidden w-6 cursor-pointer dark:block" />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
          >
            Contact
            <Image src={assets.arrow_icon} alt="" className="w-3 dark:hidden" />
            <Image src={assets.arrow_icon_dark} alt="" className="hidden w-3 dark:block" />
          </a>

          <button
            type="button"
            className="block md:hidden ml-3"
            onClick={openMenu}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label="Open menu"
          >
            <Image src={assets.menu_black} alt="" className="w-6 dark:hidden" />
            <Image src={assets.menu_white} alt="" className="hidden w-6 dark:block" />
          </button>
        </div>

        {/* Mobile Menu */}
        {/* <div className=''> */}

        <ul
          id="mobile-menu"
          className={`flex md:hidden flex-col gap-4 px-10 py-20 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-64'
          }`}
        >
          <button
            type="button"
            className="absolute right-6 top-6"
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

          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#services">
              Capabilities
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#work">
              Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#contact">
              Contact me
            </a>
          </li>
        </ul>

        {/* </div> */}
      </nav>
    </>
  )
}

export default Navbar
