import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"

const Footer = ({isDarkMode}) => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className='mt-15'>
      <div className='text-center'>
        {/* Logo动画 */}
        <motion.a 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        href="#top">
          <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='logo' className='w-36 mx-auto mb-2'/>
        </motion.a>

        {/* 社交媒体链接区域 */}
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10'>
          {/* LinkedIn */}
          <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className='flex items-center'>
            <motion.a 
              href="https://www.linkedin.com/in/wenduo-wang-1b766b2a8/" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex items-center ml-2 hover:text-blue-800 hover:underline transition-colors dark:hover:text-blue-400"
            >
              <Image src={isDarkMode ? assets.linkedin_dark : assets.linkedin} alt='linkedin icon' className='w-6 mr-2'/>
              LinkedIn
            </motion.a>
          </motion.div>

          {/* Email */}
          <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className='flex items-center'>
            <motion.a 
              href="mailto:wenduohb@gmail.com" 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex items-center ml-2 hover:text-blue-800 hover:underline transition-colors dark:hover:text-blue-400"
            >
              <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='mail icon' className='w-6 mr-2'/>
              wenduohb@gmail.com
            </motion.a>
          </motion.div>

          {/* GitHub */}
          <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className='flex items-center'>
            <motion.a 
              href="https://github.com/shuttle666" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex items-center ml-2 hover:text-blue-800 hover:underline transition-colors dark:hover:text-blue-400"
            >
              <Image src={isDarkMode ? assets.github_dark : assets.github} alt='github icon' className='w-6 mr-2'/>
              GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* 底部版权信息动画 */}
      <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.1 }}
      className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-2 py-2'>
        <p className='text-sm text-gray-600 font-Ovo dark:text-white/40'>
          © 2024 Wenduo Wang. All rights reserved.
        </p>

        <p className='text-sm text-gray-600 font-Ovo sm:mt-0 dark:text-white/40'>
          "Code with passion, create with purpose."
        </p>
      </motion.div>
    </motion.div>
  )
}

export default Footer