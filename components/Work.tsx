import { assets } from '@/assets'
import { workData } from '@/content/projects'
import { workExperienceData } from '@/content/internship'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'motion/react'

type WorkProps = {
  isDarkMode: boolean
}

const Work = ({ isDarkMode }: WorkProps) => {
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My experience
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Work and Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Discover my professional journey through internship experiences and development projects
        that showcase my technical skills and growth.
      </motion.p>

      {/* Work part */}
      {/* Internship Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-Ovo mb-8 text-center">Work Experience</h3>

        <div className="flex flex-col gap-8">
          {workExperienceData.map((experience) => (
            <motion.div
              key={experience.company}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-darkTheme/20 rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              {/* Company Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6">
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <Image
                    src={experience.logo}
                    alt={experience.company}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-Ovo text-gray-900 dark:text-white">
                    {experience.company}
                  </h4>
                  <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
                    {experience.position}
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                    <span>{experience.duration}</span>
                    <span className="">•</span>
                    <span>{experience.workType}</span>
                  </div>
                </div>
              </div>

              {/* Key Responsibilities */}
              <div className="mb-6">
                <h5 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  Key Responsibilities:
                </h5>
                <ul className="space-y-2">
                  {experience.responsibilities.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Experience Description */}
              <div className="mb-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {experience.description}
                </p>
              </div>

              {/* Technology Stack */}
              <div>
                <h5 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  Technology Stack:
                </h5>
                <div className="flex flex-wrap gap-3">
                  {experience.technologies.map((tech) => (
                    <div
                      key={tech.id}
                      className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg"
                    >
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Projects part */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="my-16"
      >
        <h3 className="text-2xl font-Ovo mb-8 text-center dark:text-white">Projects</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workData.map((project) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={project.id}
              className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group shadow-lg hover:shadow-xl transition-shadow duration-300 border-1"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              <div className="bg-white dark:bg-gray-800 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 border-1">
                <div>
                  <h2 className="font-semibold text-gray-900 dark:text-white">{project.title}</h2>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{project.description}</p>
                </div>
                <div
                  className="relative"
                  onMouseEnter={() => setHoveredProjectId(project.id)}
                  onMouseLeave={() => setHoveredProjectId(null)}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border rounded-full border-black dark:border-white flex-shrink-0 w-12 h-12 flex items-center justify-center shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#fff] group-hover:bg-lime-300 transition-all duration-300 hover:scale-110 relative z-10"
                  >
                    <Image
                      src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
                      alt="Visit site"
                      className="w-6 h-6"
                      width={24}
                      height={24}
                    />
                  </a>

                  {/* 即时显示的提示 */}
                  {hoveredProjectId === project.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded-lg whitespace-nowrap z-20 shadow-lg font-medium"
                    >
                      Click to visit live site.
                    </motion.div>
                  )}
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
