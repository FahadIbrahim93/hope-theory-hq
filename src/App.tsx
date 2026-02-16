'use client'

import { useLenis } from '@/hooks/useLenis'
import { ParticleBg } from '@/components/ParticleBg'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/sections/HeroSection'
import { IdentitySection } from '@/sections/IdentitySection'
import { InsightsSection } from '@/sections/InsightsSection'
import { ServicesSection } from '@/sections/ServicesSection'
import { StatsSection } from '@/sections/StatsSection'
import { AboutSection } from '@/sections/AboutSection'
import { DevSection } from '@/sections/DevSection'
import { NowSection } from '@/sections/NowSection'
import { ConnectSection } from '@/sections/ConnectSection'

function App() {
  useLenis()

  return (
    <div className="relative min-h-screen">
      {/* Particle Background */}
      <ParticleBg />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <section id="home">
          <HeroSection />
        </section>
        
        <IdentitySection />
        
        <section id="insights">
          <InsightsSection />
        </section>
        
        <section id="services">
          <ServicesSection />
        </section>
        
        <StatsSection />
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="dev">
          <DevSection />
        </section>
        
        <section id="now">
          <NowSection />
        </section>
        
        <section id="connect">
          <ConnectSection />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
