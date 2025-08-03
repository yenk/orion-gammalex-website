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
    { word: "AI", orange: false },
    { word: "that", orange: false },
    { word: "prevents", orange: false },
    { word: "denials", orange: false },
    { word: "before", orange: false },
    { word: "they", orange: false },
    { word: "happen.", orange: false },
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
        paddingTop: '5rem', // Account for fixed navigation
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
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-normal font-inter leading-[1.1] text-white max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
            {headingLines[0].map((item, j) => (
              <motion.span
                key={j}
                className={`inline-block ${j !== headingLines[0].length - 1 ? 'mr-1 sm:mr-2 md:mr-3 lg:mr-4' : ''} text-white`}
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
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-inter font-light text-white leading-[1.4] sm:leading-[1.5] md:leading-[1.6] tracking-wide max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="mb-2 sm:mb-3 md:mb-4">
              <span className="inline-block mr-1 sm:mr-2">GammaLex</span>
              <span className="inline-block mr-1 sm:mr-2">uses</span>
              <span className="inline-block mr-1 sm:mr-2">real-time</span>
              <span className="inline-block mr-1 sm:mr-2">AI</span>
              <span className="inline-block mr-1 sm:mr-2">to</span>
              <span className="inline-block mr-1 sm:mr-2">predict</span>
              <span className="inline-block mr-1 sm:mr-2">and</span>
              <span className="inline-block mr-1 sm:mr-2">prevent</span>
              <span className="inline-block mr-1 sm:mr-2">claim</span>
              <span className="inline-block mr-1 sm:mr-2">denials,</span>
              <span className="inline-block mr-1 sm:mr-2">protecting</span>
              <span className="inline-block mr-1 sm:mr-2">revenue</span>
              <span className="inline-block mr-1 sm:mr-2">and</span>
              <span className="inline-block mr-1 sm:mr-2">patient</span>
              <span className="inline-block mr-1 sm:mr-2">access.</span>
            </div>
          </h2>
        </div>
        

        
        <div className="flex flex-col gap-4 items-center px-4 sm:px-6 md:px-8 lg:px-12 mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28">
          <a
            href="https://cal.com/yenkha"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-gammalex-purple to-gammalex-purple-light text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg lg:text-xl font-bold rounded-xl w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-gammalex-purple shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 neon-glow hover:neon-glow"
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            See it in Action
          </a>
        </div>

        {/* Three Column Section */}
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
            {/* Column 1: Predict Denials */}
            <motion.div
              className="text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-white mb-4">
                Predict denials before they happen
              </h3>
              <a
                href="/problemswesolve"
                className="text-blue-400 underline hover:text-blue-300 transition-colors text-sm"
              >
                How it works
              </a>
            </motion.div>

            {/* Column 2: Protect Revenue */}
            <motion.div
              className="text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-white mb-4">
                Protect revenue and patient access
              </h3>
              <a
                href="/impact"
                className="text-blue-400 underline hover:text-blue-300 transition-colors text-sm"
              >
                See the impact
              </a>
            </motion.div>

            {/* Column 3: Stay Compliant */}
            <motion.div
              className="text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-white mb-4">
                Stay compliant as rules evolve
              </h3>
              <a
                href="/ethical-ai"
                className="text-blue-400 underline hover:text-blue-300 transition-colors text-sm"
              >
                Our approach
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 