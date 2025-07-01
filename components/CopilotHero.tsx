"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { JoinWaitlistModal } from "@/components/JoinWaitlistModal"
import { useEffect, useRef } from "react"

/**
 * CopilotHero - Homepage hero section for GammaLex AI Copilot for Medical Pre-Auth and Denial Risk.
 * Displays main heading, subheading, and CTA with subtle motion.
 */

const heading = "Creating the first clinical-legal AI to predict and prevent medical denial risk."
const subheading = "The AI that understands medical pre-authorizations, CPTs, coverage policies, and clinical documentation — to justify care and surface legal risk before it escalates."

function RevealWords({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(" ")
  const controls = useAnimation()
  const ref = useRef(null)
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (prefersReducedMotion) return
    controls.start(i => ({
      opacity: 1,
      x: 0,
      color: ["#FF6B00", "#1a1a1a"],
      transition: {
        delay: delay + i * 0.12,
        duration: 0.5,
        color: { delay: delay + i * 0.12, duration: 0.5 },
      }
    }))
  }, [controls, delay, prefersReducedMotion])

  return (
    <span ref={ref} className={className} style={{display: 'flex', flexWrap: 'wrap', gap: '0.5ch', overflow: 'visible'}}>
      {words.map((word: string, i: number) => (
        <motion.span
          key={i}
          custom={i}
          initial={{ opacity: 0, x: -20, color: '#FF6B00' }}
          animate={prefersReducedMotion ? { opacity: 1, x: 0, color: '#1a1a1a' } : controls}
          style={{ display: 'inline-block', whiteSpace: 'pre', fontWeight: 'inherit' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

export function CopilotHero() {
  return (
    <section id="hero" className="w-full bg-gradient-to-br from-gray-50 to-white py-20 md:py-32 px-0">
      <div className="w-full flex flex-col gap-8 px-8 md:px-16 break-words overflow-visible">
        <RevealWords
          text={heading}
          className="w-full text-5xl xs:text-6xl sm:text-7xl md:text-8xl font-bold text-gray-900 leading-tight mb-6 md:mb-10 font-satoshi text-left break-words whitespace-normal"
        />
        <RevealWords
          text={subheading}
          className="w-full text-2xl sm:text-4xl text-gray-600 font-normal mb-8 md:mb-12 font-satoshi text-left break-words whitespace-normal"
          delay={0.8}
        />
        <div className="flex flex-col gap-4 items-start mt-2">
          <JoinWaitlistModal
            trigger={
              <Button size="lg" className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-6 py-3 text-base sm:text-xl font-bold rounded-xl transition-colors w-fit">
                Launch the Copilot
              </Button>
            }
          />
        </div>
      </div>
    </section>
  )
} 