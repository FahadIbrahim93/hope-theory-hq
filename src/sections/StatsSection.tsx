'use client'

import { GlassCard, GlassCardContent } from '@/components/GlassCard'
import { ScrollReveal } from '@/components/ScrollReveal'

const stats = [
  { label: 'Years Trading', value: '5+' },
  { label: 'Win Rate', value: '62%' },
  { label: 'Projects Built', value: '20+' },
  { label: 'Clients Helped', value: '50+' },
]

export function StatsSection() {
  return (
    <section className="section-py section-padding" aria-label="Statistics">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <GlassCard className="border-ht-green/20">
            <GlassCardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-ht-green font-mono mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </GlassCardContent>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  )
}
