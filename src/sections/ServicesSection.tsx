'use client'

import { ArrowRight, Zap, BookOpen, Wrench, Check } from 'lucide-react'
import { GlassCard, GlassCardContent } from '@/components/GlassCard'
import { StaggerContainer, StaggerItem } from '@/components/ScrollReveal'
import { SectionHeading } from '@/components/SectionHeading'
import { cn } from '@/lib/utils'

const services = [
  {
    id: 'consulting',
    icon: Zap,
    title: '1:1 Consulting',
    description: 'Personalized mentorship and strategy sessions tailored to your goals.',
    price: '$200',
    priceUnit: '/hour',
    popular: false,
    features: [
      'Strategy Review & Optimization',
      'Risk Management Frameworks',
      'Psychology & Mindset Coaching',
      'Market Structure Analysis',
    ],
  },
  {
    id: 'mentorship',
    icon: BookOpen,
    title: 'Monthly Mentorship',
    description: 'Ongoing guidance with weekly calls, trade reviews, and homework.',
    price: '$800',
    priceUnit: '/month',
    popular: true,
    features: [
      'Weekly 1-on-1 Sessions',
      'Daily Trade Journal Reviews',
      'Custom Trading Plan',
      'Priority Discord Access',
      'Monthly Performance Report',
    ],
  },
  {
    id: 'tools',
    icon: Wrench,
    title: 'Custom Trading Tools',
    description: 'Bespoke indicators, bots, and dashboards built to your specs.',
    price: '$2,500',
    priceUnit: '+',
    popular: false,
    features: [
      'Custom Indicators (Pine/Python)',
      'Automated Trading Bots',
      'Portfolio Tracking Dashboard',
      'API Integrations',
    ],
  },
]

function ServiceCard({ service }: { service: typeof services[0] }) {
  const handleScrollToConnect = () => {
    const element = document.querySelector('#connect')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <GlassCard
      hover
      glow={service.popular ? 'green' : 'none'}
      className={cn(
        'h-full flex flex-col relative',
        service.popular && 'border-ht-green/30'
      )}
    >
      {service.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-3 py-1 text-xs font-semibold bg-ht-green text-ht-navy-900 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      <GlassCardContent className="flex-1 flex flex-col">
        <div className="w-14 h-14 rounded-xl bg-ht-green/10 flex items-center justify-center mb-6">
          <service.icon className="w-7 h-7 text-ht-green" />
        </div>
        <h3 className="text-2xl font-semibold text-white mb-2">{service.title}</h3>
        <p className="text-white/60 mb-4 flex-1">{service.description}</p>
        <div className="mb-4">
          <span className="text-3xl font-bold text-ht-green font-mono">{service.price}</span>
          <span className="text-white/40">{service.priceUnit}</span>
        </div>
        <ul className="space-y-3 mb-8">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-white/70">
              <Check className="w-4 h-4 text-ht-green flex-shrink-0 mt-0.5" />
              {feature}
            </li>
          ))}
        </ul>
        <button
          onClick={handleScrollToConnect}
          className={cn(
            'w-full py-3 px-4 rounded-lg font-semibold text-center transition-all flex items-center justify-center gap-2',
            service.popular
              ? 'bg-ht-green text-ht-navy-900 hover:glow-green'
              : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20'
          )}
        >
          Get Started
          <ArrowRight className="w-4 h-4" />
        </button>
      </GlassCardContent>
    </GlassCard>
  )
}

export function ServicesSection() {
  return (
    <section className="section-py section-padding" aria-label="Services">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Services"
          subtitle="From 1:1 mentorship to custom trading tools — built to help you find your edge."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
