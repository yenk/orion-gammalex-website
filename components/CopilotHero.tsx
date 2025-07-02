"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { JoinWaitlistModal } from "@/components/JoinWaitlistModal"
import { useEffect, useRef } from "react"

/**
 * CopilotHero - Homepage hero section for GammaLex AI Copilot for Medical Pre-Auth and Denial Risk.
 * Displays main heading, subheading, and CTA with subtle motion.
 */

const headingWords = [
  { word: "The", orange: false },
  { word: "AI", orange: true },
  { word: "Copilot", orange: true },
  { word: "for", orange: false },
  { word: "Pre-Auth", orange: true },
  { word: "and", orange: false },
  { word: "Compliance", orange: true },
];

const subheading = "Smarter pre-auth.\nSafer care.\nLegal foresight."

const subheadingWords = subheading.split(/\s+/);

export function CopilotHero() {
  return (
    <section id="hero" className="relative w-full bg-black overflow-hidden py-32 md:py-48 px-0 flex items-center justify-center min-h-[80vh]">
      {/* Centered dense orange dot grid background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <svg width="900" height="900" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animated-dotgrid" style={{zIndex:1}}>
          <defs>
            <pattern id="dotgrid-heavy" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="2" fill="#FF8800" />
            </pattern>
            <clipPath id="dotgrid-circle">
              <circle cx="450" cy="450" r="400" />
            </clipPath>
          </defs>
          <rect width="900" height="900" fill="url(#dotgrid-heavy)" clipPath="url(#dotgrid-circle)" />
        </svg>
      </div>
      <div className="relative z-10 w-full flex flex-col px-8 md:px-16 break-words overflow-visible items-center">
        <h1 className="w-full text-5xl sm:text-7xl lg:text-8xl xl:text-8xl font-normal text-center mb-24 font-inter leading-tight text-white whitespace-pre-line">
          {headingWords.map((item, i) => (
            <motion.span
              key={i}
              className={item.orange ? "text-gammalex-orange" : ""}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.35, duration: 0.7, ease: "easeOut" }}
              style={{ display: "inline-block", marginRight: item.word === "for" ? 12 : 8 }}
            >
              {item.word + (i === 3 ? "\n" : " ")}
            </motion.span>
          ))}
        </h1>
        <h2 className="w-full text-3xl sm:text-4xl lg:text-5xl font-inter text-center mb-20 max-w-4xl mx-auto text-white leading-snug whitespace-pre-line font-normal">
          {subheadingWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + i * 0.18, duration: 0.6, ease: "easeOut" }}
              style={{ display: "inline-block", marginRight: 6 }}
            >
              {word + " "}
            </motion.span>
          ))}
        </h2>
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