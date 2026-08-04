'use client'

import AmbientGlow from '@/components/AmbientGlow'
import { useEffect, useState } from 'react'

const DESKTOP_GLOW_QUERY = '(min-width: 640px)'

const PortfolioBackdrop = () => {
  const [animateDesktopGlows, setAnimateDesktopGlows] = useState(false)

  useEffect(() => {
    const desktopMediaQuery = window.matchMedia(DESKTOP_GLOW_QUERY)
    const syncDesktopGlowAnimation = (): void => {
      setAnimateDesktopGlows(desktopMediaQuery.matches)
    }

    syncDesktopGlowAnimation()
    desktopMediaQuery.addEventListener('change', syncDesktopGlowAnimation)

    return () => {
      desktopMediaQuery.removeEventListener('change', syncDesktopGlowAnimation)
    }
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_50%_9%,rgba(59,130,246,0.12),transparent_34rem),radial-gradient(circle_at_48%_47%,rgba(250,204,21,0.08),transparent_42rem),radial-gradient(circle_at_52%_82%,rgba(168,85,247,0.08),transparent_40rem)] sm:block dark:bg-[radial-gradient(circle_at_50%_9%,rgba(96,165,250,0.16),transparent_34rem),radial-gradient(circle_at_48%_47%,rgba(168,85,247,0.12),transparent_42rem),radial-gradient(circle_at_52%_82%,rgba(14,165,233,0.08),transparent_40rem)]" />

      <div className="absolute top-2 left-[-7rem] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.24),transparent_70%)] sm:hidden dark:bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.22),transparent_70%)]" />
      <div className="absolute top-[48%] right-[-6rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.14),transparent_70%)] sm:hidden dark:bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.16),transparent_70%)]" />

      <AmbientGlow
        variant="hero"
        intensity="visible"
        animated={animateDesktopGlows}
        className="top-4 left-[-12rem] hidden h-[44rem] w-[44rem] opacity-90 sm:block"
      />
      <AmbientGlow
        variant="wash"
        intensity="visible"
        animated={animateDesktopGlows}
        className="top-[8%] left-[7%] hidden h-[38rem] w-[86%] opacity-65 sm:block"
      />
      <AmbientGlow
        variant="section"
        intensity="visible"
        animated={animateDesktopGlows}
        className="top-[24%] right-[-15rem] hidden h-[36rem] w-[36rem] opacity-62 sm:block"
      />
      <AmbientGlow
        variant="wash"
        intensity="visible"
        animated={animateDesktopGlows}
        className="top-[43%] left-[4%] hidden h-[40rem] w-[90%] opacity-58 sm:block"
      />
      <AmbientGlow
        variant="section"
        intensity="visible"
        animated={animateDesktopGlows}
        className="top-[61%] left-[-14rem] hidden h-[34rem] w-[34rem] opacity-56 sm:block"
      />
      <AmbientGlow
        variant="wash"
        intensity="visible"
        animated={animateDesktopGlows}
        className="bottom-[6%] left-[8%] hidden h-[38rem] w-[84%] opacity-52 sm:block"
      />
    </div>
  )
}

export default PortfolioBackdrop
