'use client'

import { motion, Variants } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-ht-navy-900/50 to-ht-navy-900"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {prefersReducedMotion ? (
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ht-green/10 border border-ht-green/30">
              <span className="w-2 h-2 rounded-full bg-ht-green animate-pulse" />
              <span className="text-sm text-ht-green font-mono">@HopeTheory__</span>
            </div>
            <h1 className="heading-xl text-white">
              Hope Theory <span className="text-ht-green">HQ</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 font-medium">
              Edge. Resilience. <span className="text-ht-green">Never GIVE UP.</span>
            </p>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Ex-pro gamer turned developer, crypto/money-market trader, and solo entrepreneur. 
              I blend pattern recognition from esports, code discipline, trading edge, and hope theory 
              to never give up in volatile domains.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => handleScrollTo('#services')} className="btn-primary w-full sm:w-auto">
                Explore Services
                <ArrowRight className="w-4 h-4 ml-2 inline" />
              </button>
              <button onClick={() => handleScrollTo('#about')} className="btn-secondary w-full sm:w-auto">
                My Story
              </button>
            </div>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ht-green/10 border border-ht-green/30">
                <span className="w-2 h-2 rounded-full bg-ht-green animate-pulse" />
                <span className="text-sm text-ht-green font-mono">@HopeTheory__</span>
              </div>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="heading-xl text-white"
            >
              Hope Theory <span className="text-ht-green">HQ</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl sm:text-2xl text-white/80 font-medium"
            >
              Edge. Resilience. <span className="text-ht-green">Never GIVE UP.</span>
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-white/60 max-w-2xl mx-auto"
            >
              Ex-pro gamer turned developer, crypto/money-market trader, and solo entrepreneur. 
              I blend pattern recognition from esports, code discipline, trading edge, and hope theory 
              to never give up in volatile domains.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button onClick={() => handleScrollTo('#services')} className="btn-primary w-full sm:w-auto">
                Explore Services
                <ArrowRight className="w-4 h-4 ml-2 inline" />
              </button>
              <button onClick={() => handleScrollTo('#about')} className="btn-secondary w-full sm:w-auto">
                My Story
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Scroll Indicator */}
      {!prefersReducedMotion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="text-white/40"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
