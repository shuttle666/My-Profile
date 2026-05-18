'use client'

import { frontendSkillsData, backendSkillsData, toolsSkillsData } from '@/content/skills'
import Image from 'next/image'
import { motion, type Variants } from 'motion/react'

const capabilityCards = [
  {
    title: 'Frontend product delivery',
    summary:
      'Responsive React interfaces, stateful workflows, accessibility-minded components, and polished product pages.',
    tools: frontendSkillsData.filter((skill) =>
      ['react', 'nextjs', 'typescript', 'tailwindcss'].includes(skill.id)
    ),
  },
  {
    title: 'Backend systems and APIs',
    summary:
      'RESTful services, authentication flows, ORM-backed data models, and production-oriented business logic.',
    tools: backendSkillsData.filter((skill) =>
      ['nodejs', 'express', 'django', 'prisma'].includes(skill.id)
    ),
  },
  {
    title: 'Data and deployment',
    summary:
      'Database design, Docker-based environments, CI/CD collaboration, and cloud-hosted application delivery.',
    tools: [
      ...backendSkillsData.filter((skill) => ['postgresql', 'mysql'].includes(skill.id)),
      ...toolsSkillsData.filter((skill) => ['docker', 'aws-ec2'].includes(skill.id)),
    ],
  },
  {
    title: 'Builder workflow',
    summary:
      'Fast iteration with Git, pnpm, Postman, Cursor, and AI-assisted development while keeping code reviewable.',
    tools: toolsSkillsData.filter((skill) =>
      ['git', 'github', 'pnpm', 'postman', 'cursor'].includes(skill.id)
    ),
  },
]

const supportingStack = [
  ...frontendSkillsData.filter((skill) =>
    ['javascript', 'python', 'html', 'css', 'threejs'].includes(skill.id)
  ),
  ...backendSkillsData.filter((skill) => ['nestjs', 'mongodb'].includes(skill.id)),
  ...toolsSkillsData.filter((skill) => ['figma', 'sealos', 'claude'].includes(skill.id)),
]

const revealViewport = { once: false, amount: 0.18 }

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
}

const cardReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 26,
    scale: 0.98,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
}

const chipReveal: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
}

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      id="services"
      className="relative w-full scroll-mt-20 px-6 py-24 sm:px-10 lg:px-[8%]"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <motion.p
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.3 }}
              className="text-sm font-semibold tracking-[0.22em] text-blue-700 uppercase dark:text-blue-300"
            >
              Capabilities
            </motion.p>

            <motion.h2
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.35 }}
              className="mt-4 max-w-xl text-4xl leading-tight font-semibold text-gray-950 sm:text-5xl dark:text-white"
            >
              A stack organized around shipping useful software.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.35 }}
            className="max-w-2xl text-base leading-8 text-gray-600 lg:justify-self-end dark:text-white/65"
          >
            Instead of treating technologies as badges, I use them as a delivery system: product UI,
            API design, database modeling, deployment, and daily engineering workflow.
          </motion.p>
        </div>

        <motion.div
          className="mt-14 grid gap-5 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
        >
          {capabilityCards.map((capability, index) => (
            <motion.article
              key={capability.title}
              variants={cardReveal}
              className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-xl shadow-gray-900/[0.07] backdrop-blur dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/10"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-gray-500 uppercase dark:text-white/40">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-2xl leading-tight font-semibold text-gray-950 dark:text-white">
                    {capability.title}
                  </h3>
                </div>
                <div className="h-12 w-12 rounded-full border border-gray-200 bg-white/70 dark:border-white/20 dark:bg-white/[0.06]" />
              </div>

              <p className="mt-5 min-h-24 text-sm leading-7 text-gray-600 dark:text-white/60">
                {capability.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {capability.tools.map((skill) => (
                  <span
                    key={skill.id}
                    className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-white/80"
                  >
                    <Image
                      src={skill.icon}
                      alt=""
                      width={18}
                      height={18}
                      className={`h-5 w-5 object-contain ${
                        ['nextjs', 'express', 'github'].includes(skill.id) ? 'dark:invert' : ''
                      }`}
                    />
                    {skill.title}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          variants={cardReveal}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-8 rounded-2xl border border-gray-200 bg-white/70 p-5 shadow-lg shadow-gray-900/[0.04] backdrop-blur dark:border-white/10 dark:bg-white/[0.03]"
        >
          <p className="mb-4 text-sm font-medium text-gray-600 dark:text-white/60">
            Also comfortable with
          </p>
          <motion.div
            className="flex flex-wrap gap-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
          >
            {supportingStack.map((skill) => (
              <motion.span
                key={skill.id}
                variants={chipReveal}
                className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-700 dark:bg-white/[0.06] dark:text-white/70"
              >
                <Image
                  src={skill.icon}
                  alt=""
                  width={16}
                  height={16}
                  className={`h-4 w-4 object-contain ${
                    skill.id === 'threejs' ? 'dark:invert' : ''
                  }`}
                />
                {skill.title}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Services
