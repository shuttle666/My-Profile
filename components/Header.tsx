'use client'

import { assets } from '@/assets'
import Image from 'next/image'
import { motion } from 'motion/react'
import myface from '@/assets/images/profile/myface.jpg'

const highlights = [
  { label: 'Focus', value: 'Production-ready full-stack apps' },
  { label: 'Stack', value: 'React / Node.js / Django / PostgreSQL' },
  { label: 'Based in', value: 'Australia, open to software roles' },
]

const proofPoints = [
  { value: '3+', label: 'industry experiences' },
  { value: '4', label: 'featured projects' },
  { value: 'Full-stack', label: 'frontend to deployment' },
]

const Header = () => {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-32 pb-20 sm:px-10 lg:px-[8%]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(69,123,157,0.18),transparent_34%),radial-gradient(circle_at_86%_18%,rgba(250,204,21,0.10),transparent_30%)] dark:bg-[radial-gradient(circle_at_18%_18%,rgba(59,130,246,0.24),transparent_34%),radial-gradient(circle_at_86%_18%,rgba(168,85,247,0.16),transparent_30%)]" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ y: 18, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/75 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm backdrop-blur dark:border-white/15 dark:bg-white/5 dark:text-white/80">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Available for full-stack opportunities
          </div>

          <p className="mb-4 flex items-center gap-2 text-lg text-gray-700 font-Ovo dark:text-white/75">
            Hello, I am Wenduo Wang
            <Image src={assets.hand_icon} alt="" className="w-5" />
          </p>

          <h1 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-normal text-gray-950 sm:text-6xl lg:text-[74px] dark:text-white">
            I build reliable web apps from interface to deployment.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-700 sm:text-lg dark:text-white/70">
            Full-stack developer with hands-on experience across React, TypeScript, Django, Node.js,
            databases, CI/CD, and cloud deployment. I care about clean product flows, maintainable
            code, and software that feels calm to use.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <motion.a
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              href="#work"
              className="inline-flex items-center justify-center gap-3 rounded-md bg-gray-950 px-6 py-3 font-medium text-white shadow-lg shadow-gray-950/10 dark:bg-white dark:text-gray-950"
            >
              View selected work
              <Image src={assets.right_arrow_white} alt="" className="w-4 dark:invert" />
            </motion.a>

            <motion.a
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              href="/downloads/wenduoResume.pdf"
              download
              className="inline-flex items-center justify-center gap-3 rounded-md border border-gray-300 bg-white px-6 py-3 font-medium text-gray-900 dark:border-white/20 dark:bg-white/5 dark:text-white"
            >
              Download resume
              <Image src={assets.download_icon} alt="" className="w-4 dark:invert" />
            </motion.a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="border-l border-gray-300 pl-4 dark:border-white/20">
                <p className="text-xs font-semibold tracking-[0.18em] text-gray-500 uppercase dark:text-white/40">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-800 dark:text-white/80">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-[2rem] border border-gray-200 bg-white p-4 shadow-2xl shadow-gray-900/10 dark:border-white/10 dark:bg-white/5 dark:shadow-black/30">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gray-100 dark:bg-white/5">
              <Image
                src={myface}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                alt="Wenduo Wang profile photo"
                className="object-cover object-[48%_center]"
                priority
              />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {proofPoints.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-gray-50 px-3 py-4 text-center dark:bg-black/20"
                >
                  <p className="text-lg font-semibold text-gray-950 dark:text-white">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-gray-600 dark:text-white/60">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute right-6 -bottom-6 left-6 rounded-2xl border border-gray-200 bg-white/95 p-5 shadow-xl shadow-gray-900/10 backdrop-blur dark:border-white/10 dark:bg-[#17101f]/95">
            <p className="text-xs font-semibold tracking-[0.18em] text-gray-500 uppercase dark:text-white/40">
              Featured direction
            </p>
            <p className="mt-2 text-sm leading-6 text-gray-800 dark:text-white/75">
              Product-minded engineering for dashboards, workflow tools, API-backed apps, and
              deployment-ready web systems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Header
