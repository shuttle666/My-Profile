import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <a href="#top">
          <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='logo' className='w-36 mx-auto mb-2'/>
        </a>

        {/* <div className='flex items-center justify-center'>
          <Image src={assets.mail_icon} alt='mail icon' className='w-6'/>

          <a 
            href="mailto:wenduohb@gmail.com" 
            className="ml-2 hover:text-blue-800 hover:underline transition-colors"
          >
          Wenduohb@gmail.com
          </a>
        </div> */}
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-2 py-2'>
        <p className='text-sm text-gray-600 font-Ovo dark:text-white/40'>
          © 2024 Wenduo Wang. All rights reserved.
        </p>

        <p className='text-sm text-gray-600 font-Ovo sm:mt-0 dark:text-white/40'>
          "Code with passion, create with purpose."
        </p>
      </div>
    </div>
  )
}

export default Footer