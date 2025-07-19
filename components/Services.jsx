import React from 'react'
import { frontendSkillsData, backendSkillsData, toolsSkillsData } from '@/assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"

const Services = ({isDarkMode}) => {
  return (
    <motion.div 
    initial={{ opacity: 0 }} 
    whileInView={{ opacity: 1 }} 
    transition={{ duration: 1 }}
    id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
      
      <motion.h4 
      initial={{ y: -20, opacity: 0 }} 
      whileInView={{ y: 0, opacity: 1 }} 
      transition={{ delay: 0.1, duration: 0.5 }}
      className='text-center mb-2 text-lg font-Ovo'>
        Technologies I Use
      </motion.h4>
      
      <motion.h2 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className='text-center text-5xl font-Ovo'>
        My Tech Stack
      </motion.h2>

      <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Here are the technologies and tools I use to bring ideas to life. I'm constantly learning and expanding my skill set.
      </motion.p>

      {/* Frontend & Language */}
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.6 }}
      className='mb-16'>
        <motion.h3 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center text-2xl font-Ovo mb-8 text-gray-700 dark:text-white'>
          Frontend & Language
        </motion.h3>
        
        <div className='flex flex-wrap justify-center gap-6'>
          {frontendSkillsData.map((skill, index) => (
            <motion.div 
            initial={{y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
            className='w-32 h-32 border border-gray-400 rounded-lg flex flex-col items-center justify-center hover:shadow-black hover:bg-lightHover hover:-translate-y-1 hover:scale-105 duration-500 dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
            key={index}>
              <div className='flex items-center justify-center mb-3'>
                <Image 
                  src={skill.icon} 
                  alt={skill.title} 
                  className={`w-8 h-8 object-contain ${
                    skill.title === 'Next.js' ? 'dark:invert' : ''
                  }`}
                  width={32}
                  height={32}
                />
              </div>

              <h4 className='text-sm font-semibold font-Ovo text-gray-700 dark:text-white text-center leading-tight'>
                {skill.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Backend & Database */}
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.6 }}
      className='mb-16'>
        <motion.h3 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className='text-center text-2xl font-Ovo mb-8 text-gray-700 dark:text-white'>
          Backend & Database
        </motion.h3>
        
        <div className='flex flex-wrap justify-center gap-6'>
          {backendSkillsData.map((skill, index) => (
            <motion.div 
            initial={{y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
            className='w-32 h-32 border border-gray-400 rounded-lg flex flex-col items-center justify-center hover:shadow-black hover:bg-lightHover hover:-translate-y-1 hover:scale-105 duration-500 dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
            key={index}>
              <div className='flex items-center justify-center mb-3'>
                <Image 
                  src={skill.icon} 
                  alt={skill.title} 
                  className={`w-8 h-8 object-contain ${
                    skill.title === 'Express' ? 'dark:invert' : ''
                  }`}
                  width={32}
                  height={32}
                />
              </div>

              <h4 className='text-sm font-semibold font-Ovo text-gray-700 dark:text-white text-center leading-tight'>
                {skill.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tools & DevOps */}
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className='mb-16'>
        <motion.h3 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center text-2xl font-Ovo mb-8 text-gray-700 dark:text-white'>
          Tools & DevOps
        </motion.h3>
        
        <div className='flex flex-wrap justify-center gap-6'>
          {toolsSkillsData.map((skill, index) => (
            <motion.div 
            initial={{y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
            className='w-32 h-32 border border-gray-400 rounded-lg flex flex-col items-center justify-center hover:shadow-black hover:bg-lightHover hover:-translate-y-1 hover:scale-105 duration-500 dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
            key={index}>
              <div className='flex items-center justify-center mb-3'>
                <Image 
                  src={skill.icon} 
                  alt={skill.title} 
                  className={`w-8 h-8 object-contain ${skill.title === 'GitHub' ? 'dark:invert' : ''}`}
                  width={32}
                  height={32}
                />
              </div>

              <h4 className='text-sm font-semibold font-Ovo text-gray-700 dark:text-white text-center leading-tight'>
                {skill.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </motion.div>
  )
}

export default Services