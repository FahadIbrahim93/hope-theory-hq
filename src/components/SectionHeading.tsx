'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  className?: string
  titleClassName?: string
  subtitleClassName?: string
}

export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeadingProps) {
  const prefersReducedMotion = useReducedMotion()

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  if (prefersReducedMotion) {
    return (
      <div className={cn('mb-12', alignClasses[align], className)}>
        <h2 className={cn('heading-lg text-white mb-4', align === 'center' && 'mx-auto max-w-3xl', titleClassName)}>
          {title}
        </h2>
        {subtitle && (
          <p className={cn('text-lg text-white/60 max-w-2xl', align === 'center' && 'mx-auto', subtitleClassName)}>
            {subtitle}
          </p>
        )}
      </div>
    )
  }

  return (
    <div className={cn('mb-12', alignClasses[align], className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <h2 className={cn('heading-lg text-white mb-4', align === 'center' && 'mx-auto max-w-3xl', titleClassName)}>
          {title}
        </h2>
      </motion.div>

      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <p className={cn('text-lg text-white/60 max-w-2xl', align === 'center' && 'mx-auto', subtitleClassName)}>
            {subtitle}
          </p>
        </motion.div>
      )}
    </div>
  )
}
