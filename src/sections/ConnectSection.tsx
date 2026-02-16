'use client'

import { Mail, Twitter, MessageSquare, ArrowRight } from 'lucide-react'
import { GlassCard, GlassCardContent } from '@/components/GlassCard'
import { StaggerContainer, StaggerItem } from '@/components/ScrollReveal'
import { SectionHeading } from '@/components/SectionHeading'

const contactMethods = [
  {
    icon: Twitter,
    label: 'X (Twitter)',
    handle: '@HopeTheory__',
    description: 'DM me for quick questions or say hi',
    href: 'https://twitter.com/HopeTheory__',
    cta: 'Send a DM',
  },
  {
    icon: Mail,
    label: 'Email',
    handle: 'hello@hopetheory.io',
    description: 'For consulting inquiries or partnerships',
    href: 'mailto:hello@hopetheory.io',
    cta: 'Send Email',
  },
  {
    icon: MessageSquare,
    label: 'Discord',
    handle: 'HopeTheory',
    description: 'Join the community for live discussions',
    href: '#',
    cta: 'Join Server',
  },
]

export function ConnectSection() {
  return (
    <section className="section-py section-padding" aria-label="Connect">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Let's Connect"
          subtitle="Whether you need consulting, want to collaborate, or just want to chat about markets — reach out."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactMethods.map((method) => (
            <StaggerItem key={method.label}>
              <GlassCard hover glow="green" className="h-full">
                <GlassCardContent className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-xl bg-ht-green/10 flex items-center justify-center mb-4">
                    <method.icon className="w-7 h-7 text-ht-green" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{method.label}</h3>
                  <p className="text-sm font-mono text-ht-green mb-2">{method.handle}</p>
                  <p className="text-sm text-white/60 mb-6 flex-1">{method.description}</p>
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm w-full"
                  >
                    {method.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </GlassCardContent>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
