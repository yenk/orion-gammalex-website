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

        {/* CTA Section */}
        <div ref={ctaRef} className="mt-0">
          <section id="cta" className="py-24 sm:py-32 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-inter break-words tracking-tight mb-6">
                  Book a demo of AI-powered breast imaging.
                </span>
                <span className="text-lg sm:text-xl lg:text-2xl font-inter break-words tracking-tight mb-8 text-slate-300">
                  Experience how AI, AR, and voice reduce missed cancers and false positives in real time.
                </span>
                <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 sm:p-8 w-full max-w-md">
                  <JoinWaitlistModal
                    trigger={
                        <button className="text-lg sm:text-xl text-blue-900 text-center w-full font-inter focus:outline-none hover:text-blue-700 transition-colors duration-300">
                        Request a Demo
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