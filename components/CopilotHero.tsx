"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { JoinWaitlistModal } from "@/components/JoinWaitlistModal"
import { useEffect, useRef, useState } from "react"
import React from "react"

/**
 * CopilotHero - Homepage hero section for GammaLex AI Copilot for Medical Pre-Auth and Denial Risk.
 * Displays main heading, subheading, and CTA with subtle motion.
 */

const headingLines = [
  [
    { word: "Built", orange: false },
    { word: "to", orange: false },
    { word: "Defend", orange: false },
    { word: "What", orange: false },
    { word: "Matters", orange: false },
  ],
];


export function CopilotHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative w-full overflow-hidden min-h-screen flex flex-col items-center justify-center py-4 sm:py-8 md:py-12 lg:py-16 px-0"
      style={{ 
        paddingTop: 'max(4vh, 2rem)', 
        paddingBottom: 'max(4vh, 2rem)',
        minHeight: 'calc(100vh - 5rem)', // Account for potential header/footer
      }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/main-page/hero-background.png)',
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Futuristic background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-purple-900/30 to-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.15),transparent_70%)] pointer-events-none" />

      {/* Hero section main container */}
      <div className="relative w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 z-10 py-2 sm:py-4 md:py-6 lg:py-8">
        {/* Main Hero Heading */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 xl:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal font-inter leading-[1.1] text-white max-w-6xl mx-auto px-2 sm:px-0 whitespace-nowrap">
            {headingLines[0].map((item, j) => (
              <motion.span
                key={j}
                className={`inline-block ${j !== headingLines[0].length - 1 ? 'mr-2 sm:mr-3 md:mr-4' : ''} text-white`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: j * 0.2, // Stagger each word by 0.2 seconds
                  ease: "easeOut"
                }}
              >
                {item.word}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Subhero Heading */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-inter font-light text-white leading-[1.4] sm:leading-[1.5] md:leading-[1.6] tracking-wide max-w-4xl mx-auto px-2 sm:px-0">
            <div className="mb-1 sm:mb-2 md:mb-3">
              <span className="inline-block mr-1 sm:mr-2">Reimagining</span>
              <span className="inline-block mr-1 sm:mr-2">how</span>
              <span className="inline-block mr-1 sm:mr-2">healthcare</span>
              <span className="inline-block mr-1 sm:mr-2">is</span>
              <span className="inline-block mr-1 sm:mr-2">protected</span>
              <span className="inline-block mr-1 sm:mr-2">—</span>
              <span className="inline-block mr-1 sm:mr-2">one</span>
              <span className="inline-block mr-1 sm:mr-2">denial</span>
              <span className="inline-block mr-1 sm:mr-2">at</span>
              <span className="inline-block mr-1 sm:mr-2">a</span>
              <span className="inline-block mr-1 sm:mr-2">time.</span>
            </div>
          </h2>
        </div>
        

        
        <div className="flex flex-col gap-4 items-center px-4 sm:px-0 mb-16 sm:mb-20 md:mb-24 lg:mb-32">
          <a
            href="https://cal.com/yenkha"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-gammalex-purple to-gammalex-purple-light text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-xl font-bold rounded-xl w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-gammalex-purple shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 neon-glow hover:neon-glow"
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            See it in Action
          </a>
        </div>

        {/* Three Column Section */}
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
            {/* Column 1: Vertical AI transformation */}
            <motion.div
              className="text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm sm:text-base md:text-lg font-normal text-white mb-4">
                Vertical AI transformation starting with denial prediction
              </h3>
              <a
                href="/problemswesolve"
                className="text-blue-400 underline hover:text-blue-300 transition-colors text-sm"
              >
                AI for denials
              </a>
            </motion.div>

            {/* Column 2: Ethical and compliant transformation */}
            <motion.div
              className="text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm sm:text-base md:text-lg font-normal text-white mb-4">
                Ethical and compliant transformation.
              </h3>
              <a
                href="/ethical-ai"
                className="text-blue-400 underline hover:text-blue-300 transition-colors text-sm"
              >
                How we keep everything secured
              </a>
            </motion.div>

            {/* Column 3: Working together */}
            <motion.div
              className="text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm sm:text-base md:text-lg font-normal text-white mb-4">
                Working together to succeed.
              </h3>
              <a
                href="/application"
                className="text-blue-400 underline hover:text-blue-300 transition-colors text-sm"
              >
                Join our community
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 