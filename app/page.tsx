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



      {/* Always show footer for testing */}
      <FooterGV />
    </div>
  )
}