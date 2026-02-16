'use client'

import { useEffect, useMemo } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import type { ISourceOptions, Engine } from '@tsparticles/engine'

export function ParticleBg() {
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine)
    })
  }, [])

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: false,
      detectRetina: true,
      fpsLimit: 30,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'grab',
          },
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.5,
            },
          },
        },
      },
      particles: {
        color: {
          value: '#00ff9d',
        },
        links: {
          color: '#00ff9d',
          distance: 150,
          enable: true,
          opacity: 0.15,
          width: 1,
        },
        move: {
          direction: 'top',
          enable: true,
          outModes: {
            default: 'out',
          },
          random: false,
          speed: 0.3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 60,
        },
        opacity: {
          value: 0.4,
          animation: {
            enable: true,
            speed: 0.5,
            sync: false,
          },
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 3 },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
        },
      },
      background: {
        color: 'transparent',
      },
    }),
    []
  )

  if (prefersReducedMotion) {
    return (
      <div 
        className="fixed inset-0 -z-10"
        style={{
          background: 'radial-gradient(ellipse at center, #111827 0%, #0a0e17 70%)',
        }}
        aria-hidden="true"
      />
    )
  }

  return (
    <div className="particle-canvas" aria-hidden="true">
      <Particles
        id="tsparticles"
        options={options}
        className="w-full h-full"
      />
    </div>
  )
}
