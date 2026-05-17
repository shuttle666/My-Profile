'use client'

import { frontendSkillsData, backendSkillsData, toolsSkillsData } from '@/content/skills'
import Image from 'next/image'
import { motion } from 'motion/react'

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

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      id="services"
      className="w-full scroll-mt-20 bg-gray-950 px-6 py-24 text-white sm:px-10 lg:px-[8%]"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <motion.p
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.3 }}
              className="text-sm font-semibold tracking-[0.22em] text-blue-200 uppercase"
            >
              Capabilities
            </motion.p>

            <motion.h2
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.35 }}
              className="mt-4 max-w-xl text-4xl leading-tight font-semibold sm:text-5xl"
            >
              A stack organized around shipping useful software.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.35 }}
            className="max-w-2xl text-base leading-8 text-white/70 lg:justify-self-end"
          >
            Instead of treating technologies as badges, I use them as a delivery system: product UI,
            API design, database modeling, deployment, and daily engineering workflow.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {capabilityCards.map((capability, index) => (
            <motion.article
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: Math.min(index * 0.05, 0.2), duration: 0.35 }}
              viewport={{ once: true }}
              key={capability.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/10"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-white/40 uppercase">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-2xl leading-tight font-semibold">{capability.title}</h3>
                </div>
                <div className="h-12 w-12 rounded-full border border-white/20 bg-white/[0.06]" />
              </div>

              <p className="mt-5 min-h-24 text-sm leading-7 text-white/60">{capability.summary}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {capability.tools.map((skill) => (
                  <span
                    key={skill.id}
                    className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-white/80"
                  >
                    <Image
                      src={skill.icon}
                      alt=""
                      width={18}
                      height={18}
                      className={`h-5 w-5 object-contain ${
                        ['nextjs', 'express', 'github'].includes(skill.id) ? 'invert' : ''
                      }`}
                    />
                    {skill.title}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ y: 12, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.18, duration: 0.35 }}
          viewport={{ once: true }}
          className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
        >
          <p className="mb-4 text-sm font-medium text-white/60">Also comfortable with</p>
          <div className="flex flex-wrap gap-3">
            {supportingStack.map((skill) => (
              <span
                key={skill.id}
                className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1.5 text-sm text-white/70"
              >
                <Image
                  src={skill.icon}
                  alt=""
                  width={16}
                  height={16}
                  className={`h-4 w-4 object-contain ${skill.id === 'threejs' ? 'invert' : ''}`}
                />
                {skill.title}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Services
