"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { JoinWaitlistModal } from "@/components/JoinWaitlistModal"
import { useEffect, useRef } from "react"

/**
 * CopilotHero - Homepage hero section for GammaLex AI Copilot for Medical Pre-Auth and Denial Risk.
 * Displays main heading, subheading, and CTA with subtle motion.
 */

const heading = "AI Copilot\nfor Pre-Auth &\nCompliance"
const subheading = "Smarter pre-auth.\nSafer care.\nLegal foresight."

// Split by space, but keep multi-word orange phrases
function splitWithPhrases(str: string, phrases: string[]): {word: string, orange: boolean}[] {
  let result: {word: string, orange: boolean}[] = []
  let rest = str
  while (rest.length > 0) {
    let found = false
    for (const phrase of phrases) {
      if (rest.startsWith(phrase)) {
        result.push({word: phrase, orange: true})
        rest = rest.slice(phrase.length).replace(/^\s+/, "")
        found = true
        break
      }
    }
    if (!found) {
      const match = rest.match(/^\S+/)
      if (match) {
        result.push({word: match[0], orange: false})
        rest = rest.slice(match[0].length).replace(/^\s+/, "")
      } else {
        break
      }
    }
  }
  return result
}

function RevealWords({ text, className = "", delay = 0, orangeWords = [] }: { text: string; className?: string; delay?: number; orangeWords?: string[] }) {
  const controls = useAnimation()
  const ref = useRef(null)
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (prefersReducedMotion) return
    controls.start(i => ({
      opacity: 1,
      x: 0,
      color: orangeWords.includes(i) ? '#FF6B00' : '#1a1a1a',
      transition: {
        delay: delay + i * 0.12,
        duration: 0.5,
        color: { delay: delay + i * 0.12, duration: 0.5 },
      }
    }))
  }, [controls, delay, prefersReducedMotion, orangeWords])

  // Split by line, then by word, preserving multi-word orange phrases
  const lines = text.split(/\n|<br\s*\/?>/i)

  return (
    <div ref={ref} className={className} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', overflow: 'visible'}}>
      {lines.map((line, lineIdx) => {
        const words = splitWithPhrases(line, orangeWords)
        return (
          <span key={lineIdx} style={{display: 'flex', flexWrap: 'wrap', gap: '0.5ch', width: '100%', justifyContent: 'center'}}>
            {words.map(({word, orange}: {word: string, orange: boolean}, i: number) => (
              <motion.span
                key={i}
                custom={i + lineIdx * 100}
                initial={{ opacity: 0, x: -20, color: orange ? '#FF6B00' : '#1a1a1a' }}
                animate={prefersReducedMotion ? { opacity: 1, x: 0, color: orange ? '#FF6B00' : '#1a1a1a' } : controls}
                className={orange ? "text-gammalex-orange" : ""}
                style={{ display: 'inline-block', whiteSpace: 'pre', fontWeight: 'inherit' }}
              >
                {word + ' '}
              </motion.span>
            ))}
          </span>
        )
      })}
    </div>
  )
}

export function CopilotHero() {
  return (
    <section id="hero" className="w-full bg-gradient-to-br from-gray-50 to-white py-10 md:py-16 px-0">
      <div className="w-full flex flex-col px-8 md:px-16 break-words overflow-visible items-center">
        <RevealWords
          text={heading}
          className="w-full text-5xl sm:text-6xl lg:text-7xl font-normal text-center mb-8 font-satoshi leading-tight text-slate-900"
          orangeWords={[]}
        />
        <RevealWords
          text={subheading}
          className="w-full text-3xl sm:text-4xl font-inter text-center mb-20 max-w-4xl mx-auto text-black leading-snug"
          delay={0.8}
          orangeWords={[]}
        />
        <div className="flex flex-col gap-4 items-center mt-2">
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