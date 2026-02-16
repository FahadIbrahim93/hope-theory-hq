'use client'

import { TrendingUp, Twitter, Github, Mail, AlertTriangle } from 'lucide-react'

const footerLinks = {
  navigation: [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#insights', label: 'Insights' },
    { href: '#services', label: 'Services' },
  ],
  resources: [
    { href: '#dev', label: 'Dev Work' },
    { href: '#now', label: 'Now' },
    { href: '#connect', label: 'Connect' },
  ],
  social: [
    { href: 'https://twitter.com/HopeTheory__', label: 'X (Twitter)', icon: Twitter },
    { href: 'https://github.com', label: 'GitHub', icon: Github },
    { href: 'mailto:hello@hopetheory.io', label: 'Email', icon: Mail },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="relative border-t border-white/5 bg-ht-navy-900/50">
      {/* NFA Disclaimer Banner */}
      <div className="bg-ht-amber/10 border-b border-ht-amber/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-ht-amber flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-sm text-ht-amber font-medium">
                Not Financial Advice (NFA) / Do Your Own Research (DYOR)
              </p>
              <p className="text-xs text-ht-amber/70 mt-1">
                All content on this site is for educational and informational purposes only. 
                Trading involves substantial risk of loss. Past performance does not guarantee future results. 
                Always conduct your own research and consult with qualified financial advisors before making investment decisions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-ht-green/20 to-ht-green/5 border border-ht-green/30">
                <TrendingUp className="w-5 h-5 text-ht-green" aria-hidden="true" />
              </div>
              <div>
                <span className="text-lg font-bold text-white">Hope Theory</span>
                <span className="text-xs text-ht-green block -mt-1">HQ</span>
              </div>
            </a>
            <p className="text-sm text-white/60 mb-4">
              Edge. Resilience. Never GIVE UP. A digital headquarters blending trading precision, 
              dev craftsmanship, and hope-driven optimism.
            </p>
            <div className="flex items-center gap-3">
              {footerLinks.social.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-ht-green hover:border-ht-green/30 transition-colors focus-ring"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-white/60 hover:text-ht-green transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-white/60 hover:text-ht-green transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-sm text-white/60 mb-4">
              Get weekly insights on trading, markets, and building in public.
            </p>
            <form 
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault()
                alert('Newsletter signup coming soon!')
              }}
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-ht-green/50 focus-ring"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-ht-green text-ht-navy-900 text-sm font-semibold rounded-lg hover:glow-green transition-all"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            \u00A9 {currentYear} Hope Theory HQ. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-white/40 hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/40 hover:text-white/60 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
