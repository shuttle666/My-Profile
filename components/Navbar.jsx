import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar = ({isDarkMode, setIsDarkMode}) => {

  const sideMenuRef = React.useRef();

  const [isScroll, setIsScroll] = React.useState(false)

  const openMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  React.useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(scrollY > 50){
        setIsScroll(true)
      }else{
        setIsScroll(false)
      }
    })
  },[])

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-50 translate-y-[-80%] dark:hidden'>
      <Image src={assets.header_bg_color} alt='header_bg_color' className='w-full'/> 
    </div>

    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
      <a href="#top">
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="logo" 
        className='w-28 cursor-pointer mr-14 mt-1'/>
      </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white/50 shadow-sm"} dark:border dark:border-white/50 dark:bg-transparent`}>
          <li><a className='font-Ovo' href="#top">Home</a></li>
          <li><a className='font-Ovo' href="#about">About me</a></li>
          <li><a className='font-Ovo' href="#services">Tech Stack</a></li>
          <li><a className='font-Ovo' href="#work">My Works</a></li>
          <li><a className='font-Ovo' href="#contact">Contact me</a></li>
        </ul>

        <div className='flex items-center gap-4'>

          <button onClick={()=>setIsDarkMode(!isDarkMode)}>
            <Image 
            src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='moon_icon' 
            className='w-6 cursor-pointer'/>
          </button>

          <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>Contact 
          <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="contact" className='w-3'/> 
          </a>

          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='menu_black' className='w-6'/>
          </button>

        </div>

        {/* Mobile Menu */}
        {/* <div className=''> */}
          
          <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 px-10 py-20 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>

            <div className='absolute right-6 top-6' onClick={closeMenu}>
                <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='close_icon' className='w-5 cursor-pointer'/>
            </div>
            
            <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#about">About me</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#services">Tech Stack</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#work">My Works</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact me</a></li>

          </ul>

        {/* </div> */}
    </nav>
    </>
  )
}

export default Navbar