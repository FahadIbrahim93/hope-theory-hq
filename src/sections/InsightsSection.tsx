'use client'

import { ArrowRight, Clock, TrendingUp, TrendingDown } from 'lucide-react'
import { GlassCard, GlassCardContent } from '@/components/GlassCard'
import { StaggerContainer, StaggerItem } from '@/components/ScrollReveal'
import { SectionHeading } from '@/components/SectionHeading'
import { cn, formatPercentage } from '@/lib/utils'

const insights = [
  {
    title: 'BTC Breakout Setup: Key Levels to Watch',
    category: 'Technical Analysis',
    date: 'Feb 14, 2026',
    excerpt: 'Analyzing the ascending triangle formation with volume confirmation. Key resistance at $52K, support at $48.5K.',
    pnl: '+12.4%',
    readTime: '5 min',
  },
  {
    title: 'Fed Policy Pivot: Implications for Risk Assets',
    category: 'Macro',
    date: 'Feb 10, 2026',
    excerpt: 'Breaking down the latest FOMC minutes and what they mean for crypto and equities in Q1 2026.',
    pnl: null,
    readTime: '8 min',
  },
  {
    title: 'The Psychology of Cutting Losses',
    category: 'Trading Psychology',
    date: 'Feb 5, 2026',
    excerpt: 'Why the hardest trade is often the right one. Lessons from 100+ hours of screen time.',
    pnl: null,
    readTime: '6 min',
  },
]

function InsightCard({ insight }: { insight: typeof insights[0] }) {
  const isPositive = insight.pnl && parseFloat(insight.pnl) > 0
  const isNegative = insight.pnl && parseFloat(insight.pnl) < 0

  return (
    <GlassCard hover glow="green" className="h-full flex flex-col">
      <GlassCardContent className="flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono text-ht-green">{insight.category}</span>
          <span className="text-xs text-white/40">{insight.date}</span>
        </div>

        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
          {insight.title}
        </h3>

        <p className="text-sm text-white/60 mb-4 line-clamp-3 flex-1">
          {insight.excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex items-center gap-3">
            {insight.pnl && (
              <span className={cn(
                'text-sm font-mono flex items-center gap-1',
                isPositive && 'text-ht-green',
                isNegative && 'text-red-500'
              )}>
                {isPositive && <TrendingUp className="w-3 h-3" />}
                {isNegative && <TrendingDown className="w-3 h-3" />}
                {formatPercentage(parseFloat(insight.pnl))}
              </span>
            )}
            <span className="text-xs text-white/40 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {insight.readTime} read
            </span>
          </div>
          <button className="text-sm text-ht-green hover:underline flex items-center gap-1">
            Read <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </GlassCardContent>
    </GlassCard>
  )
}

export function InsightsSection() {
  return (
    <section className="section-py section-padding" aria-label="Recent insights">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Latest Insights"
          subtitle="Trade setups, macro analysis, and psychological frameworks from the front lines."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight) => (
            <StaggerItem key={insight.title}>
              <InsightCard insight={insight} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-8 text-center">
          <button className="btn-secondary inline-flex items-center gap-2">
            View All Insights
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
