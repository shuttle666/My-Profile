'use client'

import { assets } from '@/assets'
import Image from 'next/image'
import { motion } from 'motion/react'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="mt-15"
    >
      <div className="text-center">
        {/* Logo动画 */}
        <motion.a
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          href="#top"
        >
          <Image src={assets.logo} alt="Wenduo Wang" className="w-36 mx-auto mb-2 dark:hidden" />
          <Image
            src={assets.logo_dark}
            alt="Wenduo Wang"
            className="hidden w-36 mx-auto mb-2 dark:block"
          />
        </motion.a>

        {/* 社交媒体链接区域 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10"
        >
          {/* LinkedIn */}
          <motion.div
            initial={{ y: 8, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.12 }}
            className="flex items-center"
          >
            <motion.a
              href="https://www.linkedin.com/in/wenduo-wang-cs"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="flex items-center ml-2 hover:text-blue-800 hover:underline transition-colors dark:hover:text-blue-400"
            >
              <Image src={assets.linkedin} alt="" className="w-6 mr-2 dark:hidden" />
              <Image src={assets.linkedin_dark} alt="" className="hidden w-6 mr-2 dark:block" />
              LinkedIn
            </motion.a>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ y: 8, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.16 }}
            className="flex items-center"
          >
            <motion.a
              href="mailto:wenduohb@gmail.com"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="flex items-center ml-2 hover:text-blue-800 hover:underline transition-colors dark:hover:text-blue-400"
            >
              <Image src={assets.mail_icon} alt="" className="w-6 mr-2 dark:hidden" />
              <Image src={assets.mail_icon_dark} alt="" className="hidden w-6 mr-2 dark:block" />
              wenduohb@gmail.com
            </motion.a>
          </motion.div>

          {/* GitHub */}
          <motion.div
            initial={{ y: 8, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.2 }}
            className="flex items-center"
          >
            <motion.a
              href="https://github.com/shuttle666"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="flex items-center ml-2 hover:text-blue-800 hover:underline transition-colors dark:hover:text-blue-400"
            >
              <Image src={assets.github} alt="" className="w-6 mr-2 dark:hidden" />
              <Image src={assets.github_dark} alt="" className="hidden w-6 mr-2 dark:block" />
              GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* 底部版权信息动画 */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.24 }}
        className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-2 py-2"
      >
        <p className="text-sm text-gray-600 dark:text-white/40">
          © {currentYear} Wenduo Wang. Built with Next.js.
        </p>

        <p className="text-sm text-gray-600 sm:mt-0 dark:text-white/40">
          &quot;Code with passion, create with purpose.&quot;
        </p>
      </motion.div>
    </motion.footer>
  )
}

export default Footer
