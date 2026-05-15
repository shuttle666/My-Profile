'use client'

import { assets } from '@/assets'
import Image from 'next/image'
import { motion } from 'motion/react'
import myface from '@/assets/images/profile/myface.jpg'

const Header = () => {
  return (
    <section className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col justify-center items-center gap-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.45, type: 'spring', stiffness: 140, damping: 18 }}
      >
        <Image
          src={myface}
          width={200}
          height={200}
          alt="Wenduo Wang profile photo"
          className="rounded-full w-54 aspect-[1/1] object-cover"
        />
      </motion.div>

      <motion.h3
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.05 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hello, I am Wenduo Wang
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>

      <motion.h1
        initial={{ y: -18, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.12 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        Full-stack Developer in Australia.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.35, delay: 0.18 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        Full Stack Developer specializing in JavaScript, TypeScript, React, and Node.js. Passionate
        about building production-grade web applications and continuously learning new technologies.
      </motion.p>

      {/* contact me and download resume buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 14, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.24 }}
          href="#contact"
          className="px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          Contact me
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>

        <motion.a
          initial={{ y: 14, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.28 }}
          href="/downloads/wenduoResume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          My resume
          <Image src={assets.download_icon} alt="" className="w-4" />
        </motion.a>
      </div>
    </section>
  )
}

export default Header
