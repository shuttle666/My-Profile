import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col justify-center items-center gap-4'>
      <motion.div
      initial={{scale: 0}}
      whileInView={{scale: 1}}
      transition={{duration: 0.8, type: 'spring', stiffness: 100}}
      >
        <Image 
        src={'/myface.jpg'}
        width={200}
        height={200}
        alt='profile_img' 
        className='rounded-full w-54 aspect-[1/1] object-cover'/>
      </motion.div>

      <motion.h3 
      initial={{y: -15, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.6, delay: 0.1}}
      className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
          Hello, I am Wenduo Wang
          <Image src={assets.hand_icon} alt='hand_icon' className='w-6'/>
      </motion.h3>

      <motion.h1 
      initial={{y: -30, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.8, delay: 0.3}}
      className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
        Aspiring Full-stack Developer in Australia.
      </motion.h1>

      <motion.p 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.6, delay: 0.5}}
      className='max-w-2xl mx-auto font-Ovo'>
        Passionate about creating innovative web solutions and continuously learning new technologies.
      </motion.p>

      {/* contact me and download resume buttons */}
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'> 

        <motion.a 
        initial={{y: 30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 0.7}}
        href="#contact" className='px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2 dark:bg-transparent'>
        Contact me
        <Image src={assets.right_arrow_white} alt='right_arrow' className='w-4'/>
        </motion.a>

        <motion.a 
        initial={{y: 30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 0.9}}
        href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>
        My resume
        <Image src={assets.download_icon} alt='download_icon' className='w-4'/>
        </motion.a>
      </div>


    </div>
  )
}

export default Header