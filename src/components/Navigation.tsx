'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { Menu, X, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#insights', label: 'Insights' },
  { href: '#services', label: 'Services' },
  { href: '#dev', label: 'Dev' },
  { href: '#now', label: 'Now' },
  { href: '#connect', label: 'Connect' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const navVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={prefersReducedMotion ? {} : navVariants}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'glass-nav-scrolled py-3'
            : 'bg-transparent py-5'
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2 group focus-ring rounded-lg"
              aria-label="Hope Theory HQ - Home"
            >
              <div className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-ht-green/20 to-ht-green/5 border border-ht-green/30 group-hover:border-ht-green/50 transition-colors">
                <TrendingUp className="w-5 h-5 text-ht-green" aria-hidden="true" />
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-bold text-white">Hope Theory</span>
                <span className="text-xs text-ht-green block -mt-1">HQ</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative px-4 py-2 text-sm text-white/70 hover:text-white transition-colors focus-ring rounded-lg group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-ht-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="#connect"
                onClick={(e) => handleNavClick(e, '#connect')}
                className="btn-primary text-sm focus-ring"
              >
                Work With Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white/70 hover:text-white focus-ring rounded-lg"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            id="mobile-menu"
            className="fixed inset-x-0 top-[60px] z-40 md:hidden"
            role="dialog"
            aria-label="Mobile navigation"
          >
            <div className="glass-nav mx-4 rounded-2xl overflow-hidden">
              <div className="py-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: prefersReducedMotion ? 0 : index * 0.05,
                      duration: prefersReducedMotion ? 0 : 0.2,
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="block px-6 py-3 text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {link.label}
                    </a>
                  </motion.div>
                ))}
                <div className="px-6 pt-4 pb-2">
                  <a
                    href="#connect"
                    onClick={(e) => handleNavClick(e, '#connect')}
                    className="btn-primary block text-center text-sm"
                  >
                    Work With Me
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
