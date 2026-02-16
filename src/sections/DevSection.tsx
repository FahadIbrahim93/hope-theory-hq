'use client'

import { ExternalLink, Github, Code2 } from 'lucide-react'
import { GlassCard, GlassCardContent } from '@/components/GlassCard'
import { StaggerContainer, StaggerItem } from '@/components/ScrollReveal'
import { SectionHeading } from '@/components/SectionHeading'

const projects = [
  {
    title: 'TradeBot v3',
    description: 'Automated trading system for crypto markets with custom risk management and position sizing.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis'],
    status: 'Active',
    link: '#',
  },
  {
    title: 'Portfolio Tracker',
    description: 'Real-time portfolio tracking dashboard with P&L visualization and performance metrics.',
    tech: ['React', 'TypeScript', 'D3.js', 'WebSocket'],
    status: 'Beta',
    link: '#',
  },
  {
    title: 'Market Scanner',
    description: 'Multi-exchange scanner for identifying high-probability setups across crypto pairs.',
    tech: ['Node.js', 'TailwindCSS', 'ccxt', 'TradingView'],
    status: 'In Development',
    link: '#',
  },
]

export function DevSection() {
  return (
    <section className="section-py section-padding" aria-label="Development projects">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Dev Work"
          subtitle="Building tools and systems at the intersection of trading and technology."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <GlassCard hover glow="green" className="h-full">
                <GlassCardContent className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-ht-green/10 flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-ht-green" />
                    </div>
                    <span className="text-xs font-mono px-2 py-1 rounded-full bg-ht-green/10 text-ht-green border border-ht-green/20">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-white/60 mb-4 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded bg-white/5 text-white/60 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <a
                      href={project.link}
                      className="text-sm text-ht-green hover:underline flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" /> Source
                    </a>
                    <a
                      href={project.link}
                      className="text-sm text-white/60 hover:text-white flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" /> Demo
                    </a>
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
