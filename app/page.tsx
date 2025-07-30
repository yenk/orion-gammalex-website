"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { JoinWaitlistModal } from "@/components/JoinWaitlistModal"
import Navigation from '@/components/Navigation'
import { CopilotHero } from "@/components/CopilotHero"
import FooterGV from "@/components/FooterGV"
import { RevenueOptimizationSection, AIApplicationsSection, EnterpriseSecurityPrivacySection } from "@/components/main-page"
import React from 'react'

/**
 * GammaLexPage - Homepage for GammaLex: Your AI Copilot for Medical Pre-Auth and Denial Risk.
 * Uses modular hero and toolkit sections, keeping layout, navigation, and request a demo CTA.
 */
export default function GammaLexPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const isFooterVisible = useInView(ctaRef, { once: false, margin: "0px 0px -40% 0px" })

  useEffect(() => {
    // (Removed scroll snap setup for smoother scrolling)
  }, [])

  return (
    <div
      ref={containerRef}
      className="min-h-screen lg:h-screen overflow-y-scroll"
    >
      <Navigation />

      {/* Hero Section */}
      <CopilotHero />



      {/* Revenue Optimization Section */}
      <RevenueOptimizationSection />



      {/* AI Applications Section */}
              <AIApplicationsSection />

        {/* Enterprise Security & Privacy Section */}
        <EnterpriseSecurityPrivacySection />

        {/* Join Section (Partner With Us) */}
      <div ref={ctaRef} className="mt-0">
        <section id="join" className="min-h-screen flex items-center bg-sage-100 text-black">
          <div className="max-w-none w-full px-8 lg:px-16 py-8">
            <div className="flex flex-col items-center max-w-3xl mx-auto">
              <span className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-inter text-center break-words tracking-tight mb-4">
                Be the first to experience GammaLex.
              </span>
              <span className="text-2xl sm:text-3xl font-inter text-center break-words tracking-tight mb-8">
                AI-built for transparency, accuracy and outcomes that matter.
              </span>
              <div className="bg-white rounded-3xl shadow-lg border border-terracotta-300 p-6 sm:p-14 w-full flex flex-col items-center font-inter">
                <JoinWaitlistModal
                  trigger={
                    <button className="text-2xl sm:text-4xl text-gammalex-purple text-center w-full font-inter focus:outline-none">
                      Join as an Early Partner
                    </button>
                  }
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Always show footer for testing */}
      <FooterGV />
    </div>
  )
}