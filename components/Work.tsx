'use client'

import { assets } from '@/assets'
import { workData } from '@/content/projects'
import { workExperienceData } from '@/content/internship'
import Image from 'next/image'
import { motion, type Variants } from 'motion/react'

const techIconMap: Record<string, { icon: typeof assets.react; invertInDark?: boolean }> = {
  'Node.js': { icon: assets.nodejs },
  PostgreSQL: { icon: assets.postgresql },
  Docker: { icon: assets.docker },
  JWT: { icon: assets.code_icon, invertInDark: true },
  React: { icon: assets.react },
  TypeScript: { icon: assets.typescript },
  Express: { icon: assets.express, invertInDark: true },
  Prisma: { icon: assets.prisma, invertInDark: true },
  AWS: { icon: assets.aws },
  'UI design': { icon: assets.figma },
  'State management': { icon: assets.code_icon, invertInDark: true },
  'Component state': { icon: assets.react },
  Props: { icon: assets.code_icon, invertInDark: true },
  Sass: { icon: assets.css },
  'Next.js': { icon: assets.nextjs, invertInDark: true },
  'Responsive UI': { icon: assets.tailwindcss },
  'Three.js': { icon: assets.threejs, invertInDark: true },
  Controls: { icon: assets.cursor },
  Canvas: { icon: assets.javascript },
}

const projectDetails: Record<string, { role: string; result: string; stack: string[] }> = {
  opsflow: {
    role: 'Full-stack SaaS platform',
    result:
      'Tenant-scoped dispatch operations with RBAC, job lifecycle flows, evidence capture, audit activity, notifications, and AI-assisted planning.',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'AWS'],
  },
  'login-register': {
    role: 'Full-stack build',
    result: 'Authentication, protected flows, PostgreSQL persistence, and Vercel services deployment.',
    stack: ['Node.js', 'PostgreSQL', 'Docker', 'JWT'],
  },
  'recipes-book': {
    role: 'React fundamentals',
    result:
      'Component-based recipe manager with add, edit, delete, selection state, and nested ingredient/instruction updates.',
    stack: ['React', 'Component state', 'Props', 'Sass'],
  },
  'threejs-demo': {
    role: 'Interactive prototype',
    result: '3D viewer with orbit controls and a GUI panel for experimenting with scene settings.',
    stack: ['Three.js', 'Controls', 'Canvas'],
  },
}

const getProjectImageClass = (projectId: string) => {
  if (projectId === 'opsflow') return 'object-cover object-[58%_50%]'
  if (projectId === 'login-register') return 'object-cover object-[78%_50%]'
  return 'object-cover'
}

const [featuredProject, ...secondaryProjects] = workData

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

const renderStackTag = (item: string, size: 'base' | 'small' = 'base') => {
  const tech = techIconMap[item] ?? { icon: assets.code_icon, invertInDark: true }
  const isSmall = size === 'small'

  return (
    <span
      key={item}
      className={`inline-flex items-center gap-2 rounded-md bg-gray-100 text-gray-700 dark:bg-white/[0.08] dark:text-white/70 ${
        isSmall ? 'px-2.5 py-1.5 text-xs' : 'px-3 py-2 text-sm'
      }`}
    >
      <Image
        src={tech.icon}
        alt=""
        width={isSmall ? 14 : 16}
        height={isSmall ? 14 : 16}
        className={`${isSmall ? 'h-3.5 w-3.5' : 'h-4 w-4'} object-contain ${
          tech.invertInDark ? 'dark:invert' : ''
        }`}
      />
      {item}
    </span>
  )
}

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      id="work"
      className="relative w-full scroll-mt-20 px-6 py-24 sm:px-10 lg:px-[8%]"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <motion.p
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.3 }}
              className="text-sm font-semibold tracking-[0.22em] text-blue-700 uppercase dark:text-blue-300"
            >
              Selected work
            </motion.p>

            <motion.h2
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.35 }}
              className="mt-4 text-4xl leading-tight font-semibold text-gray-950 sm:text-5xl dark:text-white"
            >
              Projects that show how I think, build, and ship.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.35 }}
            className="max-w-2xl text-base leading-8 text-gray-600 lg:justify-self-end dark:text-white/60"
          >
            These are not just screenshots. Each project points to a part of my engineering range:
            auth systems, product UI, responsive implementation, and interactive frontend work.
          </motion.p>
        </div>

        {featuredProject && (
          <motion.article
            variants={cardReveal}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="mt-14 grid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl shadow-gray-900/[0.08] lg:grid-cols-[1.08fr_0.92fr] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/20"
          >
            <a
              href={featuredProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block min-h-[360px] overflow-hidden bg-gray-100 dark:bg-white/5"
              aria-label={`Visit ${featuredProject.title}`}
            >
              <Image
                src={featuredProject.bgImage}
                alt={`${featuredProject.title} project preview`}
                fill
                sizes="(min-width: 1024px) 56vw, 100vw"
                className={getProjectImageClass(featuredProject.id)}
                priority
              />
            </a>

            <div className="flex flex-col justify-between p-7 sm:p-10">
              <div>
                <div className="mb-5 inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-200">
                  Featured case
                </div>

                <h3 className="text-3xl leading-tight font-semibold text-gray-950 dark:text-white">
                  {featuredProject.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-gray-600 dark:text-white/60">
                  {featuredProject.description}
                </p>

                <div className="mt-7 grid gap-4">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.18em] text-gray-500 uppercase dark:text-white/40">
                      Role
                    </p>
                    <p className="mt-2 text-gray-900 dark:text-white/80">
                      {projectDetails[featuredProject.id]?.role}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-[0.18em] text-gray-500 uppercase dark:text-white/40">
                      Outcome
                    </p>
                    <p className="mt-2 text-gray-700 dark:text-white/60">
                      {projectDetails[featuredProject.id]?.result}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-1 flex-wrap gap-2">
                  {projectDetails[featuredProject.id]?.stack.map((item) => renderStackTag(item))}
                </div>

                <a
                  href={featuredProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-max shrink-0 items-center justify-center gap-3 rounded-md bg-gray-950 px-5 py-3 font-medium text-white shadow-lg shadow-gray-950/10 transition-colors duration-300 hover:bg-[#e7eef5] hover:text-gray-950 dark:bg-white dark:text-gray-950 dark:shadow-black/20 dark:hover:bg-[#e7eef5]"
                >
                  View live project
                  <Image
                    src={assets.right_arrow_white}
                    alt=""
                    className="w-4 transition duration-300 group-hover:translate-x-1 group-hover:invert dark:invert"
                  />
                </a>
              </div>
            </div>
          </motion.article>
        )}

        <motion.div
          className="mt-8 grid gap-5 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
        >
          {secondaryProjects.map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title}`}
              variants={cardReveal}
              className="group relative block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg shadow-gray-900/5 outline-none transition duration-300 hover:shadow-xl hover:shadow-gray-900/10 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 dark:border-white/10 dark:bg-white/[0.04] dark:focus-visible:ring-offset-darkTheme"
            >
              <div className="relative block aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-white/5">
                <Image
                  src={project.bgImage}
                  alt={`${project.title} project preview`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className={getProjectImageClass(project.id)}
                />
              </div>

              <div className="p-6">
                <p className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  {projectDetails[project.id]?.role}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-gray-950 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-white/60">
                  {projectDetails[project.id]?.result || project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {projectDetails[project.id]?.stack.map((item) => renderStackTag(item, 'small'))}
                </div>
              </div>

              <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/55 opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 dark:bg-gray-950/55">
                <span className="rounded-full bg-gray-950 px-6 py-3 text-sm font-semibold tracking-[0.08em] text-white uppercase shadow-xl shadow-gray-950/20 dark:bg-white dark:text-gray-950">
                  View Project
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <div className="mt-24 grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.22em] text-blue-700 uppercase dark:text-blue-300">
              Experience
            </p>
            <h3 className="mt-4 text-3xl leading-tight font-semibold text-gray-950 dark:text-white">
              A practical path through product teams and client work.
            </h3>
            <p className="mt-5 text-base leading-8 text-gray-600 dark:text-white/60">
              My experience spans campaign platforms, recruitment workflows, enterprise software,
              and the everyday habits of shipping in teams.
            </p>
          </div>

          <motion.div
            className="relative border-l border-gray-200 pl-6 dark:border-white/10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
          >
            {workExperienceData.map((experience) => (
              <motion.article
                key={experience.company}
                variants={cardReveal}
                className="relative pb-10 last:pb-0"
              >
                <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-white bg-blue-600 dark:border-darkTheme" />

                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg shadow-gray-900/5 dark:border-white/10 dark:bg-white/[0.04]">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gray-50 p-2 dark:bg-white/[0.08]">
                      <Image
                        src={experience.logo}
                        alt={experience.company}
                        width={48}
                        height={48}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                          <h4 className="text-xl font-semibold text-gray-950 dark:text-white">
                            {experience.position}
                          </h4>
                          <p className="mt-1 text-gray-700 dark:text-white/60">
                            {experience.company}
                          </p>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-white/40">
                          {experience.duration} / {experience.workType}
                        </p>
                      </div>

                      <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-white/60">
                        {experience.description}
                      </p>

                      <ul className="mt-5 grid gap-2">
                        {experience.responsibilities.slice(0, 3).map((item) => (
                          <li
                            key={item.id}
                            className="flex gap-3 text-sm leading-7 text-gray-700 dark:text-white/70"
                          >
                            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                            {item.text}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech.id}
                            className="inline-flex items-center gap-2 rounded-md bg-gray-100 px-2.5 py-1.5 text-xs text-gray-700 dark:bg-white/[0.08] dark:text-white/70"
                          >
                            <Image
                              src={tech.icon}
                              alt=""
                              width={16}
                              height={16}
                              className={`h-4 w-4 object-contain ${
                                ['express', 'github'].includes(tech.id) ? 'dark:invert' : ''
                              }`}
                            />
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
