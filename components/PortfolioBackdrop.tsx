'use client'

import AmbientGlow from '@/components/AmbientGlow'

const PortfolioBackdrop = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_9%,rgba(59,130,246,0.12),transparent_34rem),radial-gradient(circle_at_48%_47%,rgba(250,204,21,0.08),transparent_42rem),radial-gradient(circle_at_52%_82%,rgba(168,85,247,0.08),transparent_40rem)] dark:bg-[radial-gradient(circle_at_50%_9%,rgba(96,165,250,0.16),transparent_34rem),radial-gradient(circle_at_48%_47%,rgba(168,85,247,0.12),transparent_42rem),radial-gradient(circle_at_52%_82%,rgba(14,165,233,0.08),transparent_40rem)]" />

      <AmbientGlow
        variant="hero"
        intensity="visible"
        className="top-4 left-[-12rem] h-[30rem] w-[30rem] opacity-90 sm:h-[44rem] sm:w-[44rem]"
      />
      <AmbientGlow
        variant="wash"
        intensity="visible"
        className="top-[8%] left-[7%] h-[28rem] w-[86%] opacity-65 sm:h-[38rem]"
      />
      <AmbientGlow
        variant="section"
        intensity="visible"
        className="top-[24%] right-[-15rem] h-[26rem] w-[26rem] opacity-62 sm:h-[36rem] sm:w-[36rem]"
      />
      <AmbientGlow
        variant="wash"
        intensity="visible"
        className="top-[43%] left-[4%] h-[30rem] w-[90%] opacity-58 sm:h-[40rem]"
      />
      <AmbientGlow
        variant="section"
        intensity="visible"
        className="top-[61%] left-[-14rem] h-[24rem] w-[24rem] opacity-56 sm:h-[34rem] sm:w-[34rem]"
      />
      <AmbientGlow
        variant="wash"
        intensity="visible"
        className="bottom-[6%] left-[8%] h-[28rem] w-[84%] opacity-52 sm:h-[38rem]"
      />
    </div>
  )
}

export default PortfolioBackdrop
