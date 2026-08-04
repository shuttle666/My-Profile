import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import {
  opsflowArchitecture,
  opsflowDecisions,
  opsflowEvidence,
  opsflowLifecycle,
  opsflowLinks,
  opsflowOwnership,
} from '@/content/opsflow'
import { opsflowProject } from '@/content/projects'

const pageDescription =
  'How I designed and shipped OpsFlow: a multi-tenant field-operations platform with role-based workflows, evidence review, tenant-boundary testing, and human-approved AI changes.'

export const metadata: Metadata = {
  title: 'OpsFlow Case Study | Wenduo Wang',
  description: pageDescription,
  alternates: {
    canonical: '/work/opsflow',
  },
  openGraph: {
    title: 'OpsFlow Case Study | Wenduo Wang',
    description: pageDescription,
    url: '/work/opsflow',
    siteName: 'Wenduo Wang Portfolio',
    locale: 'en_AU',
    type: 'article',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Wenduo Wang portfolio preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpsFlow Case Study | Wenduo Wang',
    description: pageDescription,
    images: ['/og-image.png'],
  },
}

const externalLinkClass =
  'inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-5 py-3 font-medium text-gray-900 transition-colors hover:border-gray-950 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:border-white/20 dark:bg-transparent dark:text-white dark:hover:border-white/50 dark:hover:bg-white/[0.06] dark:focus-visible:ring-offset-darkTheme'

export default function OpsFlowCaseStudy() {
  return (
    <>
      <Navbar />

      <main id="top" className="relative isolate overflow-hidden">
        <div className="relative z-10">
          <section
            aria-labelledby="opsflow-title"
            className="px-6 pt-36 pb-20 sm:px-10 sm:pt-40 lg:px-[8%] lg:pb-28"
          >
            <div className="mx-auto max-w-6xl">
              <div className="hero-copy-enter max-w-4xl">
                <Link
                  href="/#work"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 dark:text-white/60 dark:hover:text-blue-300 dark:focus-visible:ring-offset-darkTheme"
                >
                  <span aria-hidden="true">←</span>
                  Back to selected work
                </Link>

                <p className="mt-10 text-sm font-semibold tracking-[0.22em] text-blue-700 uppercase dark:text-blue-300">
                  Featured engineering case study
                </p>
                <h1
                  id="opsflow-title"
                  className="mt-4 text-5xl leading-[1.05] font-semibold text-gray-950 font-ovo sm:text-6xl lg:text-7xl dark:text-white"
                >
                  OpsFlow
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 sm:text-xl sm:leading-9 dark:text-white/65">
                  {opsflowProject.description}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={opsflowLinks.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-950 px-6 py-3 font-medium text-white shadow-lg shadow-gray-950/10 transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:bg-white dark:text-gray-950 dark:shadow-black/20 dark:hover:bg-blue-200 dark:focus-visible:ring-offset-darkTheme"
                  >
                    Open live demo
                    <span className="sr-only"> (opens in a new tab)</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                  <a
                    href={opsflowLinks.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={externalLinkClass}
                  >
                    View source
                    <span className="sr-only"> (opens in a new tab)</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>

              <div className="hero-visual-enter mt-14 overflow-hidden rounded-3xl border border-gray-200 bg-white p-2 shadow-2xl shadow-gray-900/[0.1] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/30">
                <Image
                  src={opsflowProject.bgImage}
                  alt="Stylized preview of the OpsFlow dispatch dashboard"
                  width={1280}
                  height={720}
                  preload
                  sizes="(min-width: 1280px) 1152px, calc(100vw - 48px)"
                  className="h-auto w-full rounded-[1.15rem]"
                />
              </div>

              <dl className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-gray-200 bg-white/75 p-5 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.04]">
                  <dt className="text-xs font-semibold tracking-[0.18em] text-gray-500 uppercase dark:text-white/60">
                    My role
                  </dt>
                  <dd className="mt-2 font-medium text-gray-950 dark:text-white">
                    {opsflowProject.details.role}
                  </dd>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white/75 p-5 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.04]">
                  <dt className="text-xs font-semibold tracking-[0.18em] text-gray-500 uppercase dark:text-white/60">
                    Architecture
                  </dt>
                  <dd className="mt-2 font-medium text-gray-950 dark:text-white">
                    TypeScript modular monolith
                  </dd>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white/75 p-5 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.04]">
                  <dt className="text-xs font-semibold tracking-[0.18em] text-gray-500 uppercase dark:text-white/60">
                    Delivery
                  </dt>
                  <dd className="mt-2 font-medium text-gray-950 dark:text-white">
                    Live demo, public source, CI-gated deploy
                  </dd>
                </div>
              </dl>
            </div>
          </section>

          <section
            aria-labelledby="product-challenge-title"
            className="px-6 py-20 sm:px-10 lg:px-[8%] lg:py-28"
          >
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
                <div>
                  <p className="text-sm font-semibold tracking-[0.22em] text-blue-700 uppercase dark:text-blue-300">
                    Product challenge
                  </p>
                  <h2
                    id="product-challenge-title"
                    className="mt-4 text-4xl leading-tight font-semibold text-gray-950 font-ovo sm:text-5xl dark:text-white"
                  >
                    Keep every hand-off visible—and every write authorised.
                  </h2>
                </div>

                <div className="space-y-5 text-base leading-8 text-gray-600 dark:text-white/65">
                  <p>
                    Field-service work moves from customer intake to scheduling, assignment, on-site
                    evidence, and final review. OpsFlow brings those hand-offs into one
                    tenant-scoped workflow so the current owner, status, and operational history
                    stay visible.
                  </p>
                  <p>
                    The harder engineering constraint was AI safety: an AI suggestion can be useful,
                    but it should never bypass tenancy, permissions, or lifecycle rules. OpsFlow
                    therefore treats AI output as a proposal that an authorised person must review
                    before it can change operational data.
                  </p>
                </div>
              </div>

              <div className="mt-14 rounded-3xl border border-gray-200 bg-white/80 p-6 shadow-xl shadow-gray-900/[0.05] backdrop-blur-sm sm:p-8 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/20">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.18em] text-blue-700 uppercase dark:text-blue-300">
                      Job lifecycle
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-gray-950 dark:text-white">
                      One traceable path from request to completion
                    </h3>
                  </div>
                  <p className="max-w-xl text-sm leading-7 text-gray-600 dark:text-white/55">
                    Owner and Manager roles plan and review; Staff completes the work and attaches
                    evidence.
                  </p>
                </div>

                <ol className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                  {opsflowLifecycle.map((stage, index) => (
                    <li key={stage} className="relative">
                      <div className="h-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 dark:border-white/10 dark:bg-black/15">
                        <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">
                          0{index + 1}
                        </span>
                        <p className="mt-1 text-sm font-medium text-gray-950 dark:text-white">
                          {stage}
                        </p>
                      </div>
                      {index < opsflowLifecycle.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="absolute top-1/2 -right-2.5 z-10 hidden -translate-y-1/2 rounded-full bg-white px-1 text-gray-400 lg:block dark:bg-[#17111f] dark:text-white/35"
                        >
                          →
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          <section
            aria-labelledby="architecture-title"
            className="px-6 py-20 sm:px-10 lg:px-[8%] lg:py-28"
          >
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-8">
                <section
                  aria-labelledby="ownership-title"
                  className="rounded-3xl bg-gray-950 p-7 text-white shadow-2xl shadow-gray-950/15 sm:p-9 dark:bg-white dark:text-gray-950"
                >
                  <p className="text-xs font-semibold tracking-[0.18em] text-blue-300 uppercase dark:text-blue-700">
                    My ownership
                  </p>
                  <h2
                    id="ownership-title"
                    className="mt-3 text-3xl leading-tight font-semibold font-ovo"
                  >
                    Independent product and engineering delivery
                  </h2>
                  <ul className="mt-7 space-y-3">
                    {opsflowOwnership.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-7 text-white/75 dark:text-gray-700"
                      >
                        <span aria-hidden="true" className="text-blue-300 dark:text-blue-700">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <div className="rounded-3xl border border-gray-200 bg-white/80 p-7 shadow-xl shadow-gray-900/[0.05] backdrop-blur-sm sm:p-9 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/20">
                  <p className="text-sm font-semibold tracking-[0.22em] text-blue-700 uppercase dark:text-blue-300">
                    Technical foundation
                  </p>
                  <h2
                    id="architecture-title"
                    className="mt-4 text-4xl leading-tight font-semibold text-gray-950 font-ovo dark:text-white"
                  >
                    A pragmatic modular monolith
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-gray-600 dark:text-white/60">
                    Clear application boundaries without the operational cost of splitting an
                    evolving portfolio product into distributed services.
                  </p>

                  <ol className="mt-8 grid gap-3 sm:grid-cols-2">
                    {opsflowArchitecture.map((layer, index) => (
                      <li
                        key={layer.title}
                        className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-white/10 dark:bg-black/15"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <p className="text-xs font-semibold tracking-[0.16em] text-blue-700 uppercase dark:text-blue-300">
                            {layer.label}
                          </p>
                          <span
                            aria-hidden="true"
                            className="text-xs font-medium text-gray-400 dark:text-white/50"
                          >
                            0{index + 1}
                          </span>
                        </div>
                        <h3 className="mt-3 text-lg font-semibold text-gray-950 dark:text-white">
                          {layer.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-white/55">
                          {layer.detail}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </section>

          <section
            aria-labelledby="decisions-title"
            className="px-6 py-20 sm:px-10 lg:px-[8%] lg:py-28"
          >
            <div className="mx-auto max-w-6xl">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold tracking-[0.22em] text-blue-700 uppercase dark:text-blue-300">
                  Decisions and trade-offs
                </p>
                <h2
                  id="decisions-title"
                  className="mt-4 text-4xl leading-tight font-semibold text-gray-950 font-ovo sm:text-5xl dark:text-white"
                >
                  The decisions behind the feature list
                </h2>
                <p className="mt-5 text-base leading-8 text-gray-600 dark:text-white/60">
                  The value of the project is not just what it does, but why its boundaries were
                  designed this way.
                </p>
              </div>

              <div className="mt-12 grid gap-5 lg:grid-cols-3">
                {opsflowDecisions.map((item) => (
                  <article
                    key={item.number}
                    className="rounded-3xl border border-gray-200 bg-white/80 p-7 shadow-lg shadow-gray-900/[0.04] backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/15"
                  >
                    <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                      {item.number}
                    </span>
                    <h3 className="mt-4 text-xl font-semibold text-gray-950 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-white/60">
                      {item.decision}
                    </p>
                    <p className="mt-5 border-t border-gray-200 pt-5 text-sm leading-7 text-gray-600 dark:border-white/10 dark:text-white/55">
                      <span className="font-semibold text-gray-900 dark:text-white/80">
                        Trade-off:
                      </span>{' '}
                      {item.tradeoff}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            aria-labelledby="evidence-title"
            className="px-6 py-20 sm:px-10 lg:px-[8%] lg:py-28"
          >
            <div className="mx-auto max-w-6xl rounded-[2rem] border border-gray-200 bg-white/85 p-7 shadow-2xl shadow-gray-900/[0.06] backdrop-blur-sm sm:p-10 lg:p-14 dark:border-white/10 dark:bg-white/[0.05] dark:shadow-black/20">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                <div>
                  <p className="text-sm font-semibold tracking-[0.22em] text-blue-700 uppercase dark:text-blue-300">
                    Engineering evidence
                  </p>
                  <h2
                    id="evidence-title"
                    className="mt-4 text-4xl leading-tight font-semibold text-gray-950 font-ovo sm:text-5xl dark:text-white"
                  >
                    Inspectable engineering evidence
                  </h2>
                  <p className="mt-5 text-base leading-8 text-gray-600 dark:text-white/60">
                    The source, boundary tests, end-to-end journeys, and delivery workflow make the
                    engineering claims below directly inspectable.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {opsflowEvidence.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-white/10 dark:bg-black/15"
                    >
                      <h3 className="font-semibold text-gray-950 dark:text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-white/55">
                        {item.detail}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-3 border-t border-gray-200 pt-8 sm:flex-row sm:flex-wrap dark:border-white/10">
                <a
                  href={opsflowLinks.caseStudy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={externalLinkClass}
                >
                  Engineering write-up
                  <span className="sr-only"> (opens in a new tab)</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  href={opsflowLinks.architecture}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={externalLinkClass}
                >
                  Architecture notes
                  <span className="sr-only"> (opens in a new tab)</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  href={opsflowLinks.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={externalLinkClass}
                >
                  Browse repository
                  <span className="sr-only"> (opens in a new tab)</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </section>

          <section className="px-6 pt-12 pb-24 sm:px-10 lg:px-[8%] lg:pb-32">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-3xl bg-gray-950 p-8 text-white shadow-2xl shadow-gray-950/15 sm:p-10 lg:flex-row lg:items-center lg:justify-between dark:bg-white dark:text-gray-950">
              <div>
                <p className="text-sm font-semibold tracking-[0.18em] text-blue-300 uppercase dark:text-blue-700">
                  Explore the product
                </p>
                <h2 className="mt-3 text-3xl font-semibold font-ovo sm:text-4xl">
                  See the workflow in the live demo.
                </h2>
              </div>
              <a
                href={opsflowLinks.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-white px-6 py-3 font-medium text-gray-950 transition-colors hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 dark:bg-gray-950 dark:text-white dark:hover:bg-blue-700 dark:focus-visible:ring-blue-600 dark:focus-visible:ring-offset-white"
              >
                Open OpsFlow
                <span className="sr-only"> (opens in a new tab)</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
