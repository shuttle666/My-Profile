'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { infoList } from '@/content/skills'
import { motion, type Variants } from 'motion/react'
import myself from '@/assets/images/profile/myself.jpg'

const workingPrinciples = [
  'Turn ambiguous requirements into usable product flows.',
  'Keep UI, API, and data models understandable as the app grows.',
  'Ship in small, reviewable pieces with production behavior in mind.',
]

const profileNotes = [
  { label: 'Education', value: 'Master of Computing and Innovation' },
  { label: 'Practice', value: 'Frontend, backend, database, deployment' },
  { label: 'Interest', value: 'Workflow tools, dashboards, API-backed apps' },
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

const About = () => {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [hasUserScrolled, setHasUserScrolled] = useState(false)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 8) {
        setHasUserScrolled(true)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const section = sectionRef.current

    if (!section) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting && entry.intersectionRatio >= 0.12)
      },
      { threshold: [0, 0.12, 0.25] },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const shouldReveal = hasUserScrolled && isInView

  return (
    <motion.section
      ref={sectionRef}
      id="about"
      className="relative w-full scroll-mt-20 px-6 py-24 sm:px-10 lg:px-[8%]"
      initial={false}
      animate={shouldReveal ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.42, ease: 'easeOut' }}
      style={{ pointerEvents: shouldReveal ? 'auto' : 'none' }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-[linear-gradient(135deg,rgba(59,130,246,0.10),rgba(250,204,21,0.12))] dark:bg-[linear-gradient(135deg,rgba(96,165,250,0.16),rgba(168,85,247,0.12))]" />

            <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-4 shadow-2xl shadow-gray-900/[0.08] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/20">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gray-100 dark:bg-white/5">
                <Image
                  src={myself}
                  alt="Wenduo Wang portrait"
                  fill
                  sizes="(min-width: 1024px) 38vw, 90vw"
                  className="object-cover object-[47%_center]"
                />
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {profileNotes.map((note) => (
                  <div key={note.label} className="rounded-2xl bg-gray-50 p-4 dark:bg-black/20">
                    <p className="text-xs font-semibold tracking-[0.14em] text-gray-500 uppercase dark:text-white/40">
                      {note.label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-gray-800 dark:text-white/75">
                      {note.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold tracking-[0.22em] text-blue-700 uppercase dark:text-blue-300">
              Introduction
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl leading-tight font-semibold text-gray-950 sm:text-5xl dark:text-white">
              A full-stack developer who thinks in product flows.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg dark:text-white/68">
              I am a Full Stack Developer based in Australia, with a Master of Computing and
              Innovation from the University of Adelaide and hands-on experience building
              production-grade web applications. I enjoy working across the stack because the best
              user experience usually depends on the interface, API, data model, and deployment all
              fitting together.
            </p>

            <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg shadow-gray-900/5 dark:border-white/10 dark:bg-white/[0.04]">
              <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-gray-500 uppercase dark:text-white/40">
                How I work
              </p>
              <ul className="grid gap-3">
                {workingPrinciples.map((principle) => (
                  <li
                    key={principle}
                    className="flex gap-3 text-sm leading-7 text-gray-700 dark:text-white/70"
                  >
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                    {principle}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {infoList.map(({ id, icon, iconDark, title, description }) => (
            <motion.li
              variants={cardReveal}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg shadow-gray-900/5 transition duration-500 hover:shadow-xl hover:shadow-gray-900/10 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/20"
              key={id}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 dark:bg-white/[0.08]">
                <Image src={icon} alt={title} className="w-7 dark:hidden" />
                <Image src={iconDark} alt={title} className="hidden w-7 dark:block" />
              </div>
              <h3 className="text-lg font-semibold text-gray-950 dark:text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-white/65">
                {description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  )
}

export default About
