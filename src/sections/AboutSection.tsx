'use client'

import { ScrollReveal } from '@/components/ScrollReveal'
import { SectionHeading } from '@/components/SectionHeading'

export function AboutSection() {
  return (
    <section className="section-py section-padding" aria-label="About">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="The Story"
          subtitle="From competitive gaming arenas to trading floors — a journey of resilience."
        />

        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <div className="glass-card p-8 space-y-6">
              <p className="text-white/80 text-lg leading-relaxed">
                I started as a competitive gamer, spending thousands of hours mastering pattern recognition, 
                quick decision-making under pressure, and the discipline to review every loss objectively. 
                When I transitioned into trading, those same skills became my edge.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                Today, I trade crypto and money markets with a systematic approach — combining technical analysis, 
                macro research, and the psychological frameworks from Hope Theory. I also build software tools 
                that automate my workflow and help other traders level up.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                My philosophy is simple: <span className="text-ht-green font-semibold">Edge. Resilience. Never GIVE UP.</span> 
                Markets, like games, reward those who prepare, adapt, and persist.
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-white/40 italic">
                  "The only way to lose is to quit. Everything else is a learning opportunity."
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
