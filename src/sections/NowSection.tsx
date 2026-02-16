'use client'

import { ScrollReveal } from '@/components/ScrollReveal'
import { SectionHeading } from '@/components/SectionHeading'
import { GlassCard, GlassCardContent } from '@/components/GlassCard'

export function NowSection() {
  return (
    <section className="section-py section-padding" aria-label="What I'm doing now">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Now"
          subtitle="What I'm focused on right now. Updated regularly."
        />

        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <GlassCard>
              <GlassCardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">🎯 Focus Areas</h3>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex items-start gap-2">
                      <span className="text-ht-green mt-1">•</span>
                      <span>Building Hope Theory HQ — the digital headquarters for my brand</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ht-green mt-1">•</span>
                      <span>Trading BTC/ETH with focus on swing trades and macro positioning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ht-green mt-1">•</span>
                      <span>Developing TradeBot v3 with improved risk management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ht-green mt-1">•</span>
                      <span>Learning Rust for performance-critical trading systems</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <h3 className="text-lg font-semibold text-white mb-2">📚 Reading</h3>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex items-start gap-2">
                      <span className="text-ht-amber mt-1">•</span>
                      <span>"Market Wizards" by Jack Schwager (re-read)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ht-amber mt-1">•</span>
                      <span>"The Psychology of Money" by Morgan Housel</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <p className="text-xs text-white/40">
                    Last updated: February 2026 • Inspired by <a href="https://nownownow.com" className="text-ht-green hover:underline" target="_blank" rel="noopener noreferrer">nownownow.com</a>
                  </p>
                </div>
              </GlassCardContent>
            </GlassCard>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
