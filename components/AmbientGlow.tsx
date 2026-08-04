'use client'

import { motion, useReducedMotion } from 'motion/react'

type AmbientGlowVariant = 'hero' | 'section' | 'wash' | 'dark'
type AmbientGlowIntensity = 'soft' | 'visible'

type AmbientGlowProps = {
  variant: AmbientGlowVariant
  intensity?: AmbientGlowIntensity
  className?: string
  animated?: boolean
}

const glowConfig: Record<
  AmbientGlowVariant,
  {
    className: string
    duration: number
    opacity: number[]
    x: number[]
    y: number[]
    scale: number[]
    rotate: number[]
  }
> = {
  hero: {
    className:
      'bg-[radial-gradient(circle_at_26%_32%,rgba(59,130,246,0.32),transparent_34%),radial-gradient(circle_at_72%_36%,rgba(168,85,247,0.24),transparent_32%),radial-gradient(circle_at_48%_76%,rgba(250,204,21,0.16),transparent_34%)] dark:bg-[radial-gradient(circle_at_24%_30%,rgba(96,165,250,0.34),transparent_34%),radial-gradient(circle_at_74%_36%,rgba(168,85,247,0.28),transparent_32%),radial-gradient(circle_at_50%_78%,rgba(14,165,233,0.14),transparent_34%)]',
    duration: 7.5,
    opacity: [0.78, 1, 0.82],
    x: [0, 108, -68, 0],
    y: [0, -62, 78, 0],
    scale: [1, 1.28, 0.9, 1],
    rotate: [0, 10, -8, 0],
  },
  section: {
    className:
      'bg-[radial-gradient(circle_at_28%_30%,rgba(59,130,246,0.22),transparent_36%),radial-gradient(circle_at_72%_44%,rgba(168,85,247,0.16),transparent_34%),radial-gradient(circle_at_46%_78%,rgba(250,204,21,0.10),transparent_36%)] dark:bg-[radial-gradient(circle_at_30%_32%,rgba(168,85,247,0.22),transparent_36%),radial-gradient(circle_at_70%_42%,rgba(59,130,246,0.18),transparent_34%),radial-gradient(circle_at_48%_78%,rgba(14,165,233,0.10),transparent_36%)]',
    duration: 8.5,
    opacity: [0.58, 0.88, 0.62],
    x: [0, -86, 68, 0],
    y: [0, 70, -56, 0],
    scale: [0.94, 1.24, 0.98, 0.94],
    rotate: [0, -9, 7, 0],
  },
  wash: {
    className:
      'bg-[radial-gradient(ellipse_at_34%_42%,rgba(59,130,246,0.16),transparent_38%),radial-gradient(ellipse_at_68%_46%,rgba(168,85,247,0.11),transparent_42%),radial-gradient(ellipse_at_52%_64%,rgba(250,204,21,0.08),transparent_44%)] dark:bg-[radial-gradient(ellipse_at_34%_42%,rgba(96,165,250,0.18),transparent_40%),radial-gradient(ellipse_at_68%_46%,rgba(168,85,247,0.14),transparent_42%),radial-gradient(ellipse_at_52%_64%,rgba(14,165,233,0.08),transparent_44%)]',
    duration: 10,
    opacity: [0.5, 0.76, 0.56],
    x: [0, 64, -54, 0],
    y: [0, -38, 46, 0],
    scale: [1, 1.16, 0.96, 1],
    rotate: [0, 5, -4, 0],
  },
  dark: {
    className:
      'bg-[radial-gradient(circle_at_28%_32%,rgba(96,165,250,0.28),transparent_34%),radial-gradient(circle_at_74%_44%,rgba(168,85,247,0.22),transparent_34%),radial-gradient(circle_at_48%_78%,rgba(14,165,233,0.12),transparent_36%)]',
    duration: 9.5,
    opacity: [0.5, 0.8, 0.54],
    x: [0, 88, -68, 0],
    y: [0, 64, -50, 0],
    scale: [1, 1.22, 0.94, 1],
    rotate: [0, 8, -7, 0],
  },
}

const intensityClass: Record<AmbientGlowIntensity, string> = {
  soft: 'blur-3xl',
  visible: 'blur-2xl saturate-150',
}

const AmbientGlow = ({
  variant,
  intensity = 'soft',
  className = '',
  animated = true,
}: AmbientGlowProps) => {
  const shouldReduceMotion = useReducedMotion()
  const config = glowConfig[variant]
  const shouldAnimate = animated && !shouldReduceMotion
  const glowClassName = `pointer-events-none absolute z-0 rounded-full ${intensityClass[intensity]} ${config.className} ${className}`

  if (!shouldAnimate) {
    return <div aria-hidden="true" data-ambient-glow className={glowClassName} />
  }

  return (
    <motion.div
      aria-hidden="true"
      data-ambient-glow
      className={`${glowClassName} will-change-transform`}
      animate={{
        x: config.x,
        y: config.y,
        scale: config.scale,
        rotate: config.rotate,
        opacity: config.opacity,
      }}
      transition={{
        duration: config.duration,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'mirror',
      }}
    />
  )
}

export default AmbientGlow
