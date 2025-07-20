import { assets, workData, internshipData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Work = ({isDarkMode}) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id='work' className='w-full px-[12%] py-10 scroll-mt-20'>

      <motion.h4 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      className='text-center mb-2 text-lg font-Ovo'>
      My experience</motion.h4>

      <motion.h2
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className='text-center text-5xl font-Ovo'>
      Work and Projects</motion.h2>

      <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
      Discover my professional journey through internship experiences and development projects that showcase my technical skills and growth.</motion.p>

    {/* Work part */}
    {/* Internship Experience Section */}
    <motion.div
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.6 }}
    className='mb-16'>
      <h3 className='text-2xl font-Ovo mb-8 text-center'>Work Experience</h3>
      
      <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className='bg-white dark:bg-darkTheme/20 rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-200 dark:border-gray-700'>
        
        {/* Company Header - 改进版 */}
        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6'>
          <div className='w-20 h-20 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center'>
            <Image 
              src={internshipData.logo} 
              alt={internshipData.company}
              width={64}
              height={64}
              className='object-contain'
            />
          </div>
          <div className='flex-1'>
            <h4 className='text-xl font-Ovo text-gray-900 dark:text-white'>
              {internshipData.company}
            </h4>
            <p className='text-lg text-gray-700 dark:text-gray-300 font-medium'>
              {internshipData.position}
            </p>
            <div className='flex items-center gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400'>
              <span>{internshipData.duration}</span>
              <span className=''>•</span>
              <span>{internshipData.workType}</span>
            </div>
          </div>
        </div>

        {/* Key Responsibilities */}
        <div className='mb-6'>
          <h5 className='text-lg font-medium text-gray-900 dark:text-white mb-3'>Key Responsibilities:</h5>
          <ul className='space-y-2'>
            {internshipData.responsibilities.map((item, index) => (
              <li key={index} className='flex items-start gap-3 text-gray-700 dark:text-gray-300'>
                <span className='w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0'></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Experience Insights */}
        <div className='mb-6'>
          <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
            {internshipData.description}
          </p>
        </div>

        {/* Technology Stack */}
        <div>
          <h5 className='text-lg font-medium text-gray-900 dark:text-white mb-3'>Technology Stack:</h5>
          <div className='flex flex-wrap gap-3'>
            {internshipData.technologies.map((tech, index) => (
              <div key={index} className='flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg'>
                <Image 
                  src={tech.icon} 
                  alt={tech.name}
                  width={20}
                  height={20}
                  className='object-contain'
                />
                <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>

    {/* Projects part */}
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.9, duration: 0.6 }}
    className='my-16'>
      
      <h3 className='text-2xl font-Ovo mb-8 text-center dark:text-white'>Projects</h3>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {workData.map((project, index)=>(
            <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            key={index}
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group shadow-lg hover:shadow-xl transition-shadow duration-300'
            style={{backgroundImage: `url(${project.bgImage})`}}>
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                    <div>
                        <h2 className='font-semibold'>{project.title}</h2>
                        <p className='text-sm text-gray-700'>{project.description}</p>
                    </div>
                    <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                        <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                    </div>
                </div>
            </motion.div>
        ))}
      </div>
    </motion.div>

    </motion.div>
  )
}

export default Work
