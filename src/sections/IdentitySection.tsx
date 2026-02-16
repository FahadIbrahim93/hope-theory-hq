'use client'

import { TrendingUp, Code2, Gamepad2, Briefcase } from 'lucide-react'
import { GlassCard, GlassCardContent } from '@/components/GlassCard'
import { StaggerContainer, StaggerItem } from '@/components/ScrollReveal'

const identities = [
  {
    icon: TrendingUp,
    label: 'Trader',
    description: 'Crypto & Money Markets',
    color: 'green',
  },
  {
    icon: Code2,
    label: 'Developer',
    description: 'Full-Stack & Trading Bots',
    color: 'amber',
  },
  {
    icon: Briefcase,
    label: 'Entrepreneur',
    description: 'Solo Builder & Consultant',
    color: 'gold',
  },
  {
    icon: Gamepad2,
    label: 'Ex-Pro Gamer',
    description: 'Pattern Recognition Expert',
    color: 'green',
  },
]

export function IdentitySection() {
  return (
    <section className="section-py section-padding" aria-label="Identity pillars">
      <div className="max-w-7xl mx-auto">
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {identities.map((identity) => (
            <StaggerItem key={identity.label}>
              <GlassCard hover glow="green">
                <GlassCardContent className="flex items-start gap-4">
                  <div className={`
                    w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
                    ${identity.color === 'green' ? 'bg-ht-green/10 text-ht-green' : ''}
                    ${identity.color === 'amber' ? 'bg-ht-amber/10 text-ht-amber' : ''}
                    ${identity.color === 'gold' ? 'bg-ht-gold/10 text-ht-gold' : ''}
                  `}>
                    <identity.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{identity.label}</h3>
                    <p className="text-sm text-white/60">{identity.description}</p>
                  </div>
                </GlassCardContent>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
