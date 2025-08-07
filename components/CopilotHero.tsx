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
    { word: "Vertical", orange: false },
    { word: "AI", orange: false },
    { word: "to", orange: false },
    { word: "align", orange: false },
    { word: "care,", orange: false },
    { word: "policy,", orange: false },
    { word: "and", orange: false },
    { word: "compliance", orange: false },
  ],
];


export function CopilotHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative w-full overflow-hidden min-h-screen flex flex-col items-center justify-center"
      style={{ 
        minHeight: '100vh',
        paddingTop: '4rem',
        paddingBottom: '2rem',
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
      <div className="relative w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 z-10 h-full">
        {/* Main Hero Heading */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal font-inter leading-[1.1] text-white max-w-6xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6">
              {headingLines[0].map((item, j) => (
                <motion.span
                  key={j}
                  className="inline-block text-white tracking-tight sm:tracking-normal md:tracking-wide lg:tracking-wider xl:tracking-widest"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: j * 0.2,
                    ease: 'easeOut'
                  }}
                >
                  {item.word}
                </motion.span>
              ))}
            </div>
          </h1>
        </div>

        {/* Subhero Heading */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20">
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-inter font-light text-white leading-[1.4] sm:leading-[1.5] md:leading-[1.6] tracking-wide max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="mb-2 sm:mb-3 md:mb-4">
              <span className="inline-block mr-1 sm:mr-2">Predict</span>
              <span className="inline-block mr-1 sm:mr-2">risks,</span>
              <span className="inline-block mr-1 sm:mr-2">validate</span>
              <span className="inline-block mr-1 sm:mr-2">care,</span>
              <span className="inline-block mr-1 sm:mr-2">ensure</span>
              <span className="inline-block mr-1 sm:mr-2">audit</span>
              <span className="inline-block mr-1 sm:mr-2">readiness,</span>
              <span className="inline-block mr-1 sm:mr-2">and</span>
              <span className="inline-block mr-1 sm:mr-2">optimize</span>
              <span className="inline-block mr-1 sm:mr-2">revenue</span>
              <span className="inline-block mr-1 sm:mr-2">growth</span>
            </div>
          </h2>
        </div>
        

        
        <div className="flex flex-col gap-4 items-center px-4 sm:px-6 md:px-8 lg:px-12 mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          <a
            href="https://cal.com/yenkha"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-gammalex-purple to-gammalex-purple-light text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold rounded-xl w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-gammalex-purple shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 neon-glow hover:neon-glow"
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            See it in Action
          </a>
        </div>

        {/* Three Column Section */}
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            {/* Column 1: Smart Prevention */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-normal text-white mb-2 sm:mb-3 md:mb-4">
                Stop denials before they start
              </h3>
              <a
                href="/problemswesolve"
                className="text-blue-400 underline hover:text-blue-300 transition-colors text-xs sm:text-sm"
              >
                Learn how
              </a>
            </motion.div>

            {/* Column 2: Revenue Protection */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-normal text-white mb-2 sm:mb-3 md:mb-4">
                Secure margins and patient care
              </h3>
              <a
                href="/impact"
                className="text-blue-400 underline hover:text-blue-300 transition-colors text-xs sm:text-sm"
              >
                View results
              </a>
            </motion.div>

            {/* Column 3: Adaptive Compliance */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-normal text-white mb-2 sm:mb-3 md:mb-4">
                Adapt to changing regulations
              </h3>
              <a
                href="/ethical-ai"
                className="text-blue-400 underline hover:text-blue-300 transition-colors text-xs sm:text-sm"
              >
                Discover our method
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}