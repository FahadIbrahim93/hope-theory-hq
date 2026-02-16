'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  tilt?: boolean
  glow?: 'none' | 'green' | 'amber' | 'gold'
  onClick?: () => void
}

export function GlassCard({
  children,
  className,
  hover = true,
  tilt = false,
  glow = 'none',
  onClick,
}: GlassCardProps) {
  const prefersReducedMotion = useReducedMotion()

  const glowStyles = {
    none: '',
    green: 'hover:shadow-[0_0_30px_rgba(0,255,157,0.15)]',
    amber: 'hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]',
    gold: 'hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]',
  }

  const baseClasses = cn(
    'relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden',
    'transition-all duration-300 ease-out',
    hover && 'hover:bg-white/10 hover:border-white/20 hover:-translate-y-1',
    glowStyles[glow],
    className
  )

  if (prefersReducedMotion || !tilt) {
    return (
      <div className={baseClasses} onClick={onClick}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      className={baseClasses}
      onClick={onClick}
      whileHover={{ 
        rotateX: 2, 
        rotateY: -2,
        transition: { duration: 0.2 }
      }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
    >
      {children}
    </motion.div>
  )
}

interface GlassCardHeaderProps {
  children: React.ReactNode
  className?: string
}

export function GlassCardHeader({ children, className }: GlassCardHeaderProps) {
  return (
    <div className={cn('px-6 py-4 border-b border-white/5', className)}>
      {children}
    </div>
  )
}

interface GlassCardContentProps {
  children: React.ReactNode
  className?: string
}

export function GlassCardContent({ children, className }: GlassCardContentProps) {
  return <div className={cn('p-6', className)}>{children}</div>
}

interface GlassCardFooterProps {
  children: React.ReactNode
  className?: string
}

export function GlassCardFooter({ children, className }: GlassCardFooterProps) {
  return (
    <div className={cn('px-6 py-4 border-t border-white/5', className)}>
      {children}
    </div>
  )
}
