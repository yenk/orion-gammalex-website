"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Menu,
  X,
  ArrowRight,
  Target,
  Clock,
  DollarSign,
  Brain,
  FileText,
  TrendingUp,
  CheckCircle,
  Scale,
  User,
  Briefcase,
  Shield,
  Zap,
  MessageCircle,
  Info,
  Database,
  Globe,
  AlertTriangle,
} from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { JoinWaitlistModal } from "@/components/JoinWaitlistModal"
import Navigation from '@/components/Navigation'
import WaitlistGrowth from '@/components/WaitlistGrowth'
import WaitlistLiveCount from '@/components/WaitlistLiveCount'
import Image from 'next/image'
import Link from 'next/link'
import { CopilotHero } from "@/components/CopilotHero"
import { FeatureHighlights } from "@/components/FeatureHighlights"
import { ProductFeaturesDemo, ViabilityScoring, PreAuthWriter, ComplyDraft, PolicyLookup, AskGamma, FlaggingOverlay } from "@/components/ProductFeaturesDemo"


import FooterGV from "@/components/FooterGV"
import UnifiedCrisisSection from "@/components/UnifiedCrisisSection"
import GammaLexIllustration from "@/components/GammaLexIllustration"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import AnimatedText from "@/components/ui/AnimatedText"
import { Progress } from '@/components/ui/progress'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip'
import React from 'react'
import { useAnimation, useMotionValue, useMotionValueEvent } from "framer-motion"

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

      {/* Main Section: Pre-Auth at the Intersection */}
      <section id="pre-auth-intersection" className="py-32 px-4 sm:px-8 font-inter bg-white">
        <div className="w-full max-w-7xl mx-auto">
          
          {/* Main Section Heading */}
          <div className="text-center mb-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-inter font-normal text-slate-900 leading-tight mb-6">
              Because real <span className="text-gammalex-orange">pre-auth decisions</span> live at the intersection of medicine, policy, and law
            </h1>
          </div>

          {/* Why It Matters Subsection */}
          <div className="mb-24">
            <div className="flex flex-col lg:flex-row items-start justify-between mb-0 pb-0">
              <div className="lg:w-1/3 mb-6 lg:mb-0">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-inter font-normal text-slate-900 leading-tight">
                  Why It Matters
                </h2>
              </div>
              <div className="lg:w-2/3 lg:pl-16">
                <p className="text-xl text-slate-700 leading-relaxed mb-6">
                  Prior authorization isn't just administrative paperwork—it's a major driver of care delays, patient harm, and provider burnout across healthcare.
                </p>
                <ul className="text-lg text-slate-700 leading-relaxed mb-6 space-y-3">
                  <li className="flex items-start">
                    <span className="text-gammalex-orange mr-3">•</span>
                    <span><span className="text-gammalex-orange font-medium">92% of care delays</span> are linked to prior authorization issues, leading many patients to abandon treatment and experience worse health outcomes.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gammalex-orange mr-3">•</span>
                    <span>Physicians and staff spend up to <span className="text-gammalex-orange font-medium">15 hours per week</span> on prior authorization requests, with many practices dedicating full-time employees solely to managing these tasks.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gammalex-orange mr-3">•</span>
                    <span>The process fuels frustration, increases costs, and in some cases, leads to <span className="text-gammalex-orange font-medium">serious adverse events or hospitalizations</span> for patients.</span>
                  </li>
                </ul>
                <p className="text-xl text-slate-700 leading-relaxed mb-4">
                  Fixing prior authorization means <span className="text-gammalex-orange font-medium">faster access to care</span>, <span className="text-gammalex-orange font-medium">reduced administrative burden</span>, and <span className="text-gammalex-orange font-medium">fewer denials and legal risks</span> for everyone involved.
                </p>
                <p className="text-sm text-slate-400 font-normal">
                  Source: <a href="https://www.ama-assn.org/practice-management/prior-authorization/fixing-prior-auth-nearly-40-prior-authorizations-week-way" target="_blank" rel="noopener noreferrer" className="underline hover:text-gammalex-orange">AMA 2024 Prior Authorization Physician Survey</a>
                </p>
              </div>
            </div>
          </div>

          {/* Why GammaLex Subsection */}
          <div className="mb-24">
            <div className="flex flex-col lg:flex-row items-start justify-between mb-16 pb-8 border-b border-slate-300">
              <div className="lg:w-1/3 mb-6 lg:mb-0">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-inter font-normal text-slate-900 leading-tight">
                  Why GammaLex
                </h2>
              </div>
              <div className="lg:w-2/3 lg:pl-16">
                <p className="text-xl text-black leading-relaxed mb-6 font-inter">
                  <span className="text-gammalex-orange font-bold">GammaLex</span> is the first clinical-legal AI built to defend care before it's denied—using <span className="text-gammalex-orange">source-backed intelligence</span> to stop pre-auth delays and denials at the root.
                </p>
                <p className="text-xl text-black leading-relaxed font-inter">
                  Understands pre-auths. It deciphers <span className="text-gammalex-orange">medical billing codes, coverage rules, and physician notes</span> to generate bulletproof justifications—and it flags <span className="text-gammalex-orange">legal vulnerabilities</span> before they become liability.
                </p>
              </div>
            </div>

            {/* Main Content Grid - Matching Reference Image */}
            <div className="space-y-0">
            
            {/* Row 1: Open Source Data Foundation */}
            <div className="flex flex-col lg:flex-row border-b border-slate-300">
              <div className="lg:w-1/3 p-6 lg:p-8 border-r border-slate-300 bg-slate-50">
                <div className="text-xs uppercase tracking-wider text-slate-600 font-medium mb-4">
                  POWERED BY OPEN SOURCE<br />DATA FOUNDATION
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gammalex-orange"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                </div>
              </div>
              <div className="lg:w-2/3 p-6 lg:p-8 space-y-4">
                <div>
                  <span className="text-lg font-medium text-gammalex-orange">Open Source Data Foundation: </span>
                  <span className="text-slate-700 text-lg">Builds and fine-tunes LLMs using a diverse set of </span>
                  <span className="text-slate-900 font-medium underline">open source datasets</span>
                  <span className="text-slate-700 text-lg">, including insurance, legal, and clinical corpora.</span>
                </div>
                <div>
                  <span className="text-lg font-medium text-gammalex-orange">Transparent Data Lineage: </span>
                  <span className="text-slate-700 text-lg">Provides clear documentation and traceability of all source datasets used for model training with advances such as </span>
                  <span className="text-slate-900 font-medium underline">audit trails</span>
                  <span className="text-slate-700 text-lg">.</span>
                </div>
              </div>
            </div>

            {/* Row 2: Multi-Domain Integration */}
            <div className="flex flex-col lg:flex-row border-b border-slate-300">
              <div className="lg:w-1/3 p-6 lg:p-8 border-r border-slate-300 bg-slate-50">
                <div className="text-xs uppercase tracking-wider text-slate-600 font-medium mb-4">
                  CLINICAL-LEGAL-PAYER<br />INTELLIGENCE INTEGRATION
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-gammalex-orange"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-gammalex-orange"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                </div>
              </div>
              <div className="lg:w-2/3 p-6 lg:p-8 space-y-4">
                <div>
                  <span className="text-lg font-medium text-gammalex-orange">Multi-Domain Integration: </span>
                  <span className="text-slate-700 text-lg">Combines open source </span>
                  <span className="text-slate-900 font-medium underline">clinical</span>
                  <span className="text-slate-700 text-lg">, </span>
                  <span className="text-slate-900 font-medium underline">legal</span>
                  <span className="text-slate-700 text-lg">, and </span>
                  <span className="text-slate-900 font-medium underline">insurance data</span>
                  <span className="text-slate-700 text-lg"> for holistic decision support.</span>
                </div>
                <div>
                  <span className="text-lg font-medium text-gammalex-orange">Continuous Model Updating: </span>
                  <span className="text-slate-700 text-lg">Regularly incorporates new </span>
                  <span className="text-slate-900 font-medium underline">open datasets</span>
                  <span className="text-slate-700 text-lg"> and </span>
                  <span className="text-slate-900 font-medium underline">payer policy updates</span>
                  <span className="text-slate-700 text-lg"> to stay current with industry changes.</span>
                </div>
              </div>
            </div>

            {/* Row 3: Payer-Specific Adaptation */}
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3 p-6 lg:p-8 border-r border-slate-300 bg-slate-50">
                <div className="text-xs uppercase tracking-wider text-slate-600 font-medium mb-4">
                  ENTERPRISE-GRADE PAYER<br />POLICY ADAPTATION
                </div>
                <div className="grid grid-cols-5 gap-1">
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 radius-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-gammalex-orange"></div>
                  <div className="w-3 h-3 rounded-full bg-gammalex-orange"></div>
                  <div className="w-3 h-3 rounded-full bg-gammalex-orange"></div>
                  <div className="w-3 h-3 rounded-full bg-gammalex-orange"></div>
                  <div className="w-3 h-3 rounded-full bg-gammalex-orange"></div>
                  <div className="w-3 h-3 rounded-full bg-gammalex-orange"></div>
                  <div className="w-3 h-3 rounded-full bg-gammalex-orange"></div>
                  <div className="w-3 h-3 rounded-full bg-gammalex-orange"></div>
                  <div className="w-3 h-3 rounded-full bg-gammalex-orange"></div>
                  <div className="w-3 h-3 rounded-full bg-gammalex-orange"></div>
                </div>
              </div>
              <div className="lg:w-2/3 p-6 lg:p-8 space-y-4">
                <div>
                  <span className="text-lg font-medium text-gammalex-orange">Payer-Specific Policy Adaptation: </span>
                  <span className="text-slate-700 text-lg">Fine-tunes models on datasets relevant to </span>
                  <span className="text-slate-900 font-medium underline">major payer policies</span>
                  <span className="text-slate-700 text-lg"> (e.g., Aetna, UnitedHealthcare), ensuring up-to-date, </span>
                  <span className="text-slate-900 font-medium underline">payer-aligned recommendations</span>
                  <span className="text-slate-700 text-lg">.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Benefits Bar */}
          <div className="mt-16">
            <InteractiveBenefitsBar />
          </div>
          
          <div className="w-full flex justify-center mt-10 sm:mt-12">
            <JoinWaitlistModal
              trigger={
                <button className="inline-block bg-sage-600 text-white text-lg font-bold rounded-2xl px-10 py-4 shadow hover:bg-sage-700 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:ring-offset-2 transition">
                  See GammaLex in Action
                </button>
              }
            />
          </div>
          </div>

        </div>
      </section>

      {/* The Problem Stat Strips Section */}
      <SystemicRiskStats />



      {/* Legal Foresight Bridge Section */}
      <section className="w-full bg-white py-24 px-4 font-inter">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-slate-900 mb-6">
              <span className="text-slate-900">From </span>
              <span className="text-gammalex-orange">legal risk</span>
              <span className="text-slate-900"> to </span>
              <span className="text-gammalex-orange">legal foresight</span>
            </h2>
            <AnimatedText
              text="Lawsuits show the pattern: denials become liability when clinical evidence is ignored. GammaLex anticipates legal risk <br /> before it escalates."
              className="text-2xl sm:text-3xl font-inter text-center text-slate-700 max-w-5xl mx-auto leading-relaxed"
            />
            <div className="flex justify-center my-8">
              <FlaggingOverlay />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <motion.div 
              className="bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-5 mb-6">
                <Zap className="w-12 h-12 sm:w-14 sm:h-14 text-slate-400" />
                <span className="text-2xl sm:text-3xl font-inter text-gammalex-orange">Pattern Recognition</span>
              </div>
              <p className="text-slate-900 leading-relaxed text-base sm:text-lg">
                AI analyzes thousands of denial patterns to identify legal vulnerabilities before they become lawsuits—from unqualified reviewers to templated rejections.
              </p>
            </motion.div>
            <motion.div 
              className="bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-5 mb-6">
                <Scale className="w-12 h-12 sm:w-14 sm:h-14 text-slate-400" />
                <span className="text-2xl sm:text-3xl font-inter text-gammalex-orange">Legal Compliance</span>
              </div>
              <p className="text-slate-900 leading-relaxed text-base sm:text-lg">
                Ensures every pre-auth submission meets both clinical standards and legal requirements, preventing the compliance gaps that lead to successful appeals.
              </p>
            </motion.div>
            <motion.div 
              className="bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-5 mb-6">
                <Shield className="w-12 h-12 sm:w-14 sm:h-14 text-slate-400" />
                <span className="text-2xl sm:text-3xl font-inter text-gammalex-orange">Risk Mitigation</span>
              </div>
              <p className="text-slate-900 leading-relaxed text-base sm:text-lg">
                Flags potential legal issues in real-time, allowing teams to strengthen justifications before submission rather than defending them in court later.
              </p>
            </motion.div>
          </div>
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl font-inter text-slate-600 italic mb-8"
            >
              The best defense is foresight. GammaLex doesn't just respond to denials—it flags risk early, so you can avoid them altogether.
            </motion.p>
          </div>
        </div>
      </section>

      <div className="w-full bg-sage-50 border-b border-sage-100">
        <ProductFeaturesDemo />
      </div>

      {/* Vertical AI That Understands Risk, Rights, and Remedy Section */}
      <section id="vertical-ai-risk-rights-remedy" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 font-inter relative">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-purple-900/20 to-black/50 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(139,92,246,0.1),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-white text-center leading-tight mb-8">
              Vertical AI That Understands <span className="gradient-text">Risk, Rights, and Remedy</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 text-center max-w-5xl mx-auto leading-relaxed">
              GammaLex's AI models are uniquely trained on deep, specialty-specific clinical and payer data—starting with radiology—enabling unmatched accuracy in predicting claim denials and verifying coverage.
            </p>
          </motion.div>

          {/* Workflow Steps */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-12">
              Specialty-Specific AI Model Training Workflow
            </h3>
            
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gammalex-purple/40 via-gammalex-orange/60 to-gammalex-purple/40 rounded-full z-0 hidden lg:block" />
              
              <div className="space-y-12 lg:space-y-16">
                {[
                  {
                    step: "01",
                    title: "Deep Specialty Data Collection",
                    description: "Aggregating comprehensive clinical, legal, and payer data specific to radiology—including denial patterns, coverage policies, and regulatory requirements.",
                    icon: <Database className="w-8 h-8 lg:w-10 lg:h-10 text-white" />,
                    delay: 0.3
                  },
                  {
                    step: "02", 
                    title: "Multi-Domain Model Training",
                    description: "Training AI models on the intersection of clinical expertise, legal precedent, and payer behavior—not just generic text analysis.",
                    icon: <Brain className="w-8 h-8 lg:w-10 lg:h-10 text-white" />,
                    delay: 0.5
                  },
                  {
                    step: "03",
                    title: "Specialty-Specific Optimization",
                    description: "Fine-tuning models for radiology's unique challenges—from imaging protocols to medical necessity documentation.",
                    icon: <Target className="w-8 h-8 lg:w-10 lg:h-10 text-white" />,
                    delay: 0.7
                  },
                  {
                    step: "04",
                    title: "Continuous Learning & Validation",
                    description: "Real-time updates from new regulations, payer policies, and case outcomes—ensuring models stay current and accurate.",
                    icon: <TrendingUp className="w-8 h-8 lg:w-10 lg:h-10 text-white" />,
                    delay: 0.9
                  },
                  {
                    step: "05",
                    title: "Scalable Specialty Expansion",
                    description: "Proven methodology for expanding into oncology, cardiology, transplant, and other high-stakes specialties.",
                    icon: <Globe className="w-8 h-8 lg:w-10 lg:h-10 text-white" />,
                    delay: 1.1
                  }
                ].map((workflowStep, index) => (
                  <motion.div
                    key={`workflow-${index}`}
                    className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 group cursor-pointer ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: workflowStep.delay }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Step Circle */}
                    <div className="relative z-10">
                      <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-gammalex-purple/20 to-gammalex-orange/20 flex items-center justify-center group-hover:from-gammalex-purple/40 group-hover:to-gammalex-orange/40 transition-all duration-300 border border-white/10 group-hover:border-gammalex-purple/30">
                        {workflowStep.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gammalex-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {workflowStep.step}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left max-w-2xl">
                      <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-gammalex-orange transition-colors mb-3">
                        {workflowStep.title}
                      </h4>
                      <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                        {workflowStep.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Mockups Section */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-12">
              Radiology-First AI Training Platform
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Training Interface Mockup */}
              <motion.div 
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <img
                        src="/gammalexlogo-transparent.png"
                        alt="GammaLex Logo"
                        style={{ filter: 'brightness(0) invert(1)' }}
                        className="h-10 w-auto"
                      />
                      <h4 className="text-xl font-bold text-white">Radiology AI Training Interface</h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-white/60">Training Active</span>
                    </div>
                  </div>
                  
                  {/* Training Configuration */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Specialty Focus</label>
                      <div className="bg-gammalex-orange/20 border border-gammalex-orange/30 rounded-lg p-3">
                        <span className="text-gammalex-orange font-semibold">Radiology - Primary Focus</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Training Data Sources</label>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white/10 border border-white/20 rounded p-2">
                          <span className="text-white text-sm">ACR Guidelines</span>
                        </div>
                        <div className="bg-white/10 border border-white/20 rounded p-2">
                          <span className="text-white text-sm">CMS Policies</span>
                        </div>
                        <div className="bg-white/10 border border-white/20 rounded p-2">
                          <span className="text-white text-sm">Denial Patterns</span>
                        </div>
                        <div className="bg-white/10 border border-white/20 rounded p-2">
                          <span className="text-white text-sm">Case Law</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Model Performance</label>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-white text-sm">Denial Prediction Accuracy</span>
                          <span className="text-gammalex-orange font-bold">94.2%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white text-sm">Coverage Verification</span>
                          <span className="text-gammalex-orange font-bold">91.8%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white text-sm">Policy Compliance</span>
                          <span className="text-gammalex-orange font-bold">96.7%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Next Specialties</label>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-white/10 border border-white/20 rounded p-2 text-center">
                          <span className="text-white text-xs">Oncology</span>
                          <div className="text-gammalex-orange text-sm font-bold">Q2 2024</div>
                        </div>
                        <div className="bg-white/10 border border-white/20 rounded p-2 text-center">
                          <span className="text-white text-xs">Cardiology</span>
                          <div className="text-gammalex-orange text-sm font-bold">Q3 2024</div>
                        </div>
                        <div className="bg-white/10 border border-white/20 rounded p-2 text-center">
                          <span className="text-white text-xs">Transplant</span>
                          <div className="text-gammalex-orange text-sm font-bold">Q4 2024</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Results Dashboard Mockup */}
              <motion.div 
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <img
                        src="/gammalexlogo-transparent.png"
                        alt="GammaLex Logo"
                        style={{ filter: 'brightness(0) invert(1)' }}
                        className="h-10 w-auto"
                      />
                      <h4 className="text-xl font-bold text-white">Radiology Performance Dashboard</h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-white/60">Live Data</span>
                    </div>
                  </div>
                  
                  {/* Performance Metrics */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Key Performance Indicators</label>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-green-500/20 border border-green-500/30 rounded p-3 text-center">
                          <div className="text-green-400 text-lg font-bold">87%</div>
                          <div className="text-white text-xs">Denial Prevention Rate</div>
                        </div>
                        <div className="bg-blue-500/20 border border-blue-500/30 rounded p-3 text-center">
                          <div className="text-blue-400 text-lg font-bold">$2.4M</div>
                          <div className="text-white text-xs">Revenue Protected</div>
                        </div>
                        <div className="bg-purple-500/20 border border-purple-500/30 rounded p-3 text-center">
                          <div className="text-purple-400 text-lg font-bold">94%</div>
                          <div className="text-white text-xs">Claim Approval Rate</div>
                        </div>
                        <div className="bg-orange-500/20 border border-orange-500/30 rounded p-3 text-center">
                          <div className="text-orange-400 text-lg font-bold">3.2x</div>
                          <div className="text-white text-xs">ROI Multiplier</div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Specialty Comparison</label>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-white text-sm">Radiology (Current)</span>
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-2 bg-gray-600 rounded-full">
                              <div className="w-12 h-2 bg-gammalex-orange rounded-full"></div>
                            </div>
                            <span className="text-gammalex-orange font-bold">94%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-white text-sm">Oncology (Planned)</span>
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-2 bg-gray-600 rounded-full">
                              <div className="w-8 h-2 bg-gammalex-purple rounded-full"></div>
                            </div>
                            <span className="text-gammalex-purple font-bold">In Development</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-white text-sm">Cardiology (Planned)</span>
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-2 bg-gray-600 rounded-full">
                              <div className="w-6 h-2 bg-gammalex-purple rounded-full"></div>
                            </div>
                            <span className="text-gammalex-purple font-bold">In Development</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Recent Achievements</label>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-white text-sm">Reduced radiology denials by 87%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-white text-sm">Protected $2.4M in revenue</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-white text-sm">Achieved 94% claim approval rate</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Sources Section */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-12">
              Trusted Data Sources & Research
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "American College of Radiology",
                  description: "ACR Appropriateness Criteria® and clinical practice guidelines for radiology imaging protocols and medical necessity standards.",
                  logo: "/images/logos/acr-logo.png",
                  category: "Clinical Guidelines"
                },
                {
                  title: "Centers for Medicare & Medicaid Services",
                  description: "CMS Manual System, Local Coverage Determinations (LCDs), and Medicare Claims Processing Manual for coverage policies.",
                  logo: "/images/logos/cms-logo.png",
                  category: "Government Policy"
                },
                {
                  title: "Harvard Medical School Case Law",
                  description: "Comprehensive database of medical malpractice cases and legal precedents affecting radiology practice and coverage decisions.",
                  logo: "/images/logos/caselaw-harvard-logo.png",
                  category: "Legal Precedent"
                },
                {
                  title: "National Institutes of Health",
                  description: "NIH clinical research data and evidence-based medicine guidelines for radiology diagnostic accuracy and treatment protocols.",
                  logo: "/images/logos/nlm-nih-logo.png",
                  category: "Research Data"
                },
                {
                  title: "CourtListener Legal Database",
                  description: "Real-time access to federal and state court decisions affecting healthcare coverage and medical necessity standards.",
                  logo: "/images/logos/courtlistener-logo.png",
                  category: "Legal Database"
                },
                {
                  title: "WHO ICD-11 Classification",
                  description: "International Classification of Diseases for accurate diagnosis coding and medical necessity documentation in radiology.",
                  logo: "/images/logos/who-icd11-logo.png",
                  category: "Diagnostic Standards"
                }
              ].map((source, index) => (
                <motion.div
                  key={`source-${index}`}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative overflow-hidden rounded-xl border border-white/10 backdrop-blur-sm p-6 hover:border-gammalex-purple/30 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-gammalex-purple/5 to-transparent rounded-xl group-hover:from-gammalex-purple/15 transition-all duration-500" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                          <img
                            src={source.logo}
                            alt={`${source.title} Logo`}
                            className="h-8 w-auto"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white group-hover:text-gammalex-orange transition-colors">
                            {source.title}
                          </h4>
                          <span className="text-xs text-gammalex-orange font-medium">
                            {source.category}
                          </span>
                        </div>
                      </div>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {source.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Real-Time Payer Policy Landscape Mockup */}
          <motion.div
            className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex-1">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gammalex-purple to-gammalex-orange flex items-center justify-center shadow-2xl">
                  <Globe className="text-white" size={40} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Real-Time Payer Policy Landscape</h3>
              </div>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-6">
                Continuously monitors and adapts to evolving payer policies across all major insurance networks, ensuring your claims stay compliant and approved.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gammalex-purple rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-white/80">Real-time policy updates from CMS, commercial payers, and specialty guidelines.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gammalex-purple rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-white/80">Predictive analytics for policy changes and their impact on claim approval rates.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gammalex-purple rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-white/80">Automated compliance monitoring across multiple payer networks and specialties.</p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              {/* Real-Time Payer Policy Landscape Mockup */}
              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <img
                      src="/gammalexlogo-transparent.png"
                      alt="GammaLex Logo"
                      style={{ filter: 'brightness(0) invert(1)' }}
                      className="h-10 w-auto"
                    />
                    <h4 className="text-xl font-bold text-white">Real-Time Policy Intelligence</h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-white/60">Live</span>
                  </div>
                </div>
                
                {/* Policy Landscape Panel */}
                <div className="space-y-4">
                  {/* Active Payer Networks */}
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Active Payer Networks</label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-gammalex-orange/20 border border-gammalex-orange/30 rounded p-2">
                        <span className="text-gammalex-orange text-xs font-semibold">Medicare</span>
                        <div className="text-white text-sm">Updated 2 min ago</div>
                      </div>
                      <div className="bg-blue-500/20 border border-blue-500/30 rounded p-2">
                        <span className="text-blue-400 text-xs font-semibold">Blue Cross</span>
                        <div className="text-white text-sm">Updated 5 min ago</div>
                      </div>
                      <div className="bg-green-500/20 border border-green-500/30 rounded p-2">
                        <span className="text-green-400 text-xs font-semibold">Aetna</span>
                        <div className="text-white text-sm">Updated 8 min ago</div>
                      </div>
                      <div className="bg-purple-500/20 border border-purple-500/30 rounded p-2">
                        <span className="text-purple-400 text-xs font-semibold">UnitedHealth</span>
                        <div className="text-white text-sm">Updated 12 min ago</div>
                      </div>
                    </div>
                  </div>

                  {/* Policy Change Alerts */}
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Recent Policy Changes</label>
                    <div className="space-y-2">
                      <div className="bg-yellow-500/20 border border-yellow-500/30 rounded p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <AlertTriangle className="text-yellow-400" size={14} />
                          <span className="text-yellow-400 text-xs font-medium">CMS Update</span>
                        </div>
                        <p className="text-white text-sm">Medicare LCD L34876 updated - New medical necessity criteria for CT chest</p>
                      </div>
                      <div className="bg-blue-500/20 border border-blue-500/30 rounded p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Info className="text-blue-400" size={14} />
                          <span className="text-blue-400 text-xs font-medium">ACR Guidelines</span>
                        </div>
                        <p className="text-white text-sm">Updated appropriateness criteria for radiology imaging procedures</p>
                      </div>
                    </div>
                  </div>

                  {/* Coverage Predictions */}
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Coverage Predictions</label>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-green-500/20 border border-green-500/30 rounded p-2 text-center">
                        <span className="text-green-400 text-xs font-medium">High Approval</span>
                        <div className="text-white text-lg font-bold">92%</div>
                      </div>
                      <div className="bg-yellow-500/20 border border-yellow-500/30 rounded p-2 text-center">
                        <span className="text-yellow-400 text-xs font-medium">Medium Risk</span>
                        <div className="text-white text-lg font-bold">68%</div>
                      </div>
                      <div className="bg-red-500/20 border border-red-500/30 rounded p-2 text-center">
                        <span className="text-red-400 text-xs font-medium">High Risk</span>
                        <div className="text-white text-lg font-bold">23%</div>
                      </div>
                    </div>
                  </div>

                  {/* Specialty Policy Status */}
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Specialty Policy Status</label>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm">Radiology</span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-green-400 text-xs">Compliant</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm">Oncology</span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span className="text-yellow-400 text-xs">Review Required</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm">Cardiology</span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-green-400 text-xs">Compliant</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm">Transplant</span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-blue-400 text-xs">Monitoring</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Policy Sources */}
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-white/80">Policy Sources</span>
                      <button className="text-xs text-gammalex-orange hover:text-gammalex-orange-light">View All</button>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded p-3 space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gammalex-orange rounded-full"></div>
                        <span className="text-gammalex-orange font-semibold text-sm">CMS Manual System §100-02</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-white text-sm">Medicare Claims Processing Manual</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-white text-sm">ACR Appropriateness Criteria® 2023</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-white text-sm">Commercial Payer Policy Database</span>
                      </div>
                    </div>
                  </div>

                  {/* Real-Time Updates */}
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-white/80">Real-Time Updates</span>
                      <button className="text-xs text-gammalex-orange hover:text-gammalex-orange-light">View All</button>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded p-3 space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-white text-sm">CMS policy update processed - 2 min ago</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-white text-sm">Blue Cross guidelines synced - 5 min ago</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-white text-sm">ACR criteria updated - 15 min ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Unified AI Workflow - Step 5: Automated Claims Scrubbing & Authorization */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">5: Automated Claims Scrubbing & Authorization</h3>
              <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
                Automate claims scrubbing and authorization checks to ensure claims comply with payer rules. GammaLex flags errors and guides teams through prior authorizations, reducing manual work and preventing costly payment delays.
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="flex-1">
                <div className="inline-flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gammalex-orange to-gammalex-purple flex items-center justify-center shadow-2xl">
                    <FileText className="text-white" size={40} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Claims Processing Automation</h3>
                </div>
                <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-6">
                  Automated claims scrubbing with intelligent error detection and authorization guidance for radiology procedures.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gammalex-orange rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-white/80">Batch claim upload with automated error detection and validation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gammalex-orange rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-white/80">Intelligent authorization checklists for radiology procedures</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gammalex-orange rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-white/80">Automated fixes and guided workflows to prevent payment delays</p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                {/* Automated Claims Scrubbing Mockup */}
                <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <img
                        src="/gammalexlogo-transparent.png"
                        alt="GammaLex Logo"
                        style={{ filter: 'brightness(0) invert(1)' }}
                        className="h-12 w-auto"
                      />
                      <h4 className="text-2xl font-bold text-white">Claims Scrubbing & Authorization</h4>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-white/60">Processing</span>
                    </div>
                  </div>
                  
                  {/* Batch Upload Status */}
                  <div className="mb-6">
                    <label className="block text-lg font-medium text-white/80 mb-3">Batch Upload Status</label>
                    <div className="bg-white/10 border border-white/20 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white text-sm">Radiology Claims Batch #2024-001</span>
                        <span className="text-green-400 text-sm font-medium">Processing</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-3 mb-2">
                        <div className="bg-green-500 h-3 rounded-full" style={{width: '75%'}}></div>
                      </div>
                      <div className="flex justify-between text-xs text-white/60">
                        <span>47 of 63 claims processed</span>
                        <span>75% complete</span>
                      </div>
                    </div>
                  </div>

                  {/* Error Detection & Fixes */}
                  <div className="mb-6">
                    <label className="block text-lg font-medium text-white/80 mb-3">Error Detection & Suggested Fixes</label>
                    <div className="space-y-3">
                      <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className="text-red-400" size={16} />
                          <span className="text-red-400 text-sm font-medium">Claim #12345 - Missing Authorization</span>
                        </div>
                        <p className="text-white text-sm mb-3">CT Chest with contrast requires prior authorization for Medicare patients.</p>
                        <div className="flex gap-2">
                          <button className="text-xs bg-red-500 text-white px-3 py-1 rounded">Request Auth</button>
                          <button className="text-xs bg-white/10 text-white px-3 py-1 rounded">View Details</button>
                        </div>
                      </div>
                      <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Info className="text-yellow-400" size={16} />
                          <span className="text-yellow-400 text-sm font-medium">Claim #12346 - Documentation Issue</span>
                        </div>
                        <p className="text-white text-sm mb-3">Missing clinical indication for MRI brain without contrast.</p>
                        <div className="flex gap-2">
                          <button className="text-xs bg-yellow-500 text-white px-3 py-1 rounded">Add Indication</button>
                          <button className="text-xs bg-white/10 text-white px-3 py-1 rounded">View Details</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Authorization Checklist */}
                  <div className="mb-6">
                    <label className="block text-lg font-medium text-white/80 mb-3">Authorization Checklist - Radiology</label>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm">CT Chest with Contrast</span>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                          <span className="text-red-400 text-xs">Required</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm">MRI Brain without Contrast</span>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                          <span className="text-yellow-400 text-xs">Conditional</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm">X-Ray Chest 2 Views</span>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                          <span className="text-green-400 text-xs">Not Required</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm">CT Abdomen with Contrast</span>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                          <span className="text-red-400 text-xs">Required</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Processing Summary */}
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-medium text-white/80">Processing Summary</span>
                      <button className="text-sm text-gammalex-orange hover:text-gammalex-orange-light">View Report</button>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3 text-center">
                        <span className="text-green-400 text-xs font-medium">Clean Claims</span>
                        <div className="text-white text-lg font-bold">41</div>
                      </div>
                      <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-3 text-center">
                        <span className="text-yellow-400 text-xs font-medium">Needs Fix</span>
                        <div className="text-white text-lg font-bold">12</div>
                      </div>
                      <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-3 text-center">
                        <span className="text-red-400 text-xs font-medium">Auth Required</span>
                        <div className="text-white text-lg font-bold">10</div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-medium text-white/80">Quick Actions</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="bg-gammalex-orange/20 border border-gammalex-orange/30 rounded-lg p-3 text-gammalex-orange text-sm font-medium hover:bg-gammalex-orange/30 transition-colors">
                        Request All Authorizations
                      </button>
                      <button className="bg-white/10 border border-white/20 rounded-lg p-3 text-white text-sm font-medium hover:bg-white/20 transition-colors">
                        Apply Suggested Fixes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto p-8 lg:p-12 rounded-3xl border border-gammalex-purple/30 bg-gradient-to-br from-gammalex-purple/10 to-gammalex-purple/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gammalex-purple to-gammalex-orange"></div>
              <div className="relative">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  Ready to Experience Vertical AI That Understands Your Specialty?
                </h3>
                <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8">
                  Join the waitlist to be among the first to access GammaLex's specialty-specific AI training platform—starting with radiology and expanding to oncology, cardiology, and transplant.
                </p>
                <Button 
                  className="bg-gradient-to-r from-gammalex-orange to-gammalex-purple text-white font-semibold px-8 py-4 text-lg rounded-xl hover:from-gammalex-orange/90 hover:to-gammalex-purple/90 transition-all duration-300"
                  onClick={() => {
                    const element = document.getElementById('hero');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Join the Waitlist
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* GammaLex AI Copilot Cloud Section */}
      <section id="copilot-cloud" className="w-full min-h-[80vh] flex flex-col justify-center items-center bg-black py-32 px-2 sm:px-4 md:px-8 font-inter">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-0 lg:gap-64">
          <div className="flex-1 flex flex-col justify-center items-start">
            <h2 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-normal text-left font-inter leading-tight text-white break-words">
              AI COPILOT <br /> FOR PRE-AUTH AND COMPLIANCE
            </h2>
          </div>
          <div className="flex-1 flex flex-col justify-center items-end mt-12 sm:mt-24 md:mt-36 lg:mt-64">
            <h2 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-normal text-right font-inter leading-tight text-gammalex-orange break-words">
              BUILT ON THE <br /> FRONTIER OF <br /> <span className="whitespace-nowrap">CLINICAL-LEGAL</span> <br /> INTELLIGENCE.
            </h2>
          </div>
        </div>
        {/* Bottom row: left and right, spaced further from above */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between mt-10 md:mt-20 mb-10 md:mb-20 gap-8 md:gap-64">
          <div className="text-2xl sm:text-3xl md:text-4xl font-inter text-white font-normal text-left">
            <span className="whitespace-nowrap">Innovations</span>
          </div>
          <div className="text-2xl sm:text-3xl md:text-4xl font-inter text-white font-normal text-left md:text-right max-w-4xl">
            Source-grounded AI models and datasets<span className="whitespace-nowrap">—</span>designed for the complex realities of care, coverage, and compliance.
          </div>
        </div>
      </section>

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
                    <button className="text-2xl sm:text-4xl text-gammalex-orange text-center w-full font-inter focus:outline-none">
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



function AboutSection() {
  const features = [
    {
      title: "Top-Tier LLMs for Healthcare",
      description: "GammaLex leverages the latest large language models, fine-tuned for medical and legal data, ensuring accuracy and compliance for every payer and policy.",
    },
    {
      title: "Accelerated Pre-Auth Decisions",
      description: "AI-powered justifications and instant policy matching reduce delays, denials, and manual work for clinicians and legal teams.",
    },
    {
      title: "Built for Real-World Risk",
      description: "GammaLex flags legal and clinical vulnerabilities before they become denials or liability, supporting faster, stronger appeals.",
    },
    {
      title: "Expert-Built, Always Evolving",
      description: "Our platform is built by AI researchers—constantly learning from new payer rules and real-world outcomes.",
    },
    {
      title: "Highly Scalable & Reliable",
      description: "From solo practices to health systems, GammaLex scales securely with 99.9% uptime and enterprise-grade compliance.",
    },
    {
      title: "Uniquely GammaLex",
      description: "Purpose-built for the intersection of medicine, law, and policy—no other platform brings together clinical, legal, and payer expertise like GammaLex.",
    },
  ];

  return (
    <section id="about" className="py-28 px-4 bg-white font-inter text-slate-900">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-center leading-tight mb-8">
          <span className="text-slate-900">Forge the </span>
          <span className="text-gammalex-orange">AI frontier.</span> <br />
          <span className="text-slate-900">Train on </span>
          <span className="text-gammalex-orange">expert-built</span>
          <span className="text-slate-900"> healthcare LLMs.</span>
        </h2>
        <p className="text-2xl sm:text-3xl font-inter text-center text-black max-w-4xl mx-auto leading-snug mb-20">
          GammaLex delivers payer-specific, policy-aware AI recommendations built to improve medical pre-auths, and reduce pre-auth denial risks. <br />
          <br />
          Our platform fine-tunes large language models to reflect real-world data, payer rules, and compliance demands—empowering care and compliance teams to outsmart denials and accelerate treatment.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16 w-full mt-4">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-start text-left px-6">
              <div className="text-2xl sm:text-3xl mb-3 text-gammalex-orange font-inter text-left">{f.title}</div>
              <div className="text-lg sm:text-xl text-slate-900 leading-relaxed font-inter text-left">{f.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({ value, inView }: { value: string, inView: boolean }) {
  const [display, setDisplay] = useState(value.startsWith('0') ? 0 : 0)
  const isPercent = value.includes('%')
  const num = parseInt(value.replace(/[^0-9]/g, ''))
  useEffect(() => {
    let raf: number | null = null
    if (inView) {
      let start = 0
      let end = num
      let duration = 1200
      let startTime: number | null = null
      function animateCounter(ts: number) {
        if (!startTime) startTime = ts
        const progress = Math.min((ts - startTime) / duration, 1)
        setDisplay(Math.floor(progress * (end - start) + start))
        if (progress < 1) raf = requestAnimationFrame(animateCounter)
        else setDisplay(end)
      }
      raf = requestAnimationFrame(animateCounter)
    } else {
      setDisplay(0)
    }
    return () => {
      if (raf) cancelAnimationFrame(raf)
    }
  }, [inView, value])
  return <span>{display}{isPercent ? '%' : ''}</span>
}

function StatBlock({ stat, i, fadeUp }: { stat: { value: string, label: string, description: string }, i: number, fadeUp: any }) {
  const statRef = useRef(null)
  const inView = useInView(statRef, { once: false, margin: "-20% 0px" })
  return (
    <motion.div
      key={i}
      ref={statRef}
      className="flex flex-col items-start px-2 py-6 sm:px-4 transition-all cursor-pointer group text-left"
      whileHover={{ scale: 1.06 }}
      variants={fadeUp}
      style={{ borderBottom: (i === 1 || i === 3) ? '1px solid #e5e7eb' : 'none' }}
    >
      <div className="text-4xl xs:text-5xl sm:text-6xl font-semibold mb-2 font-inter leading-tight group-hover:text-orange-500 transition-colors text-left">
        <AnimatedCounter value={stat.value} inView={inView} />
      </div>
      <div className="text-lg xs:text-xl sm:text-2xl font-medium text-slate-900 mb-1 font-inter leading-snug group-hover:text-gammalex-orange transition-colors text-left">
        {stat.label}
      </div>
      <div className="text-base xs:text-lg sm:text-lg text-slate-700 font-inter leading-normal group-hover:text-slate-900 transition-colors text-left">
        {stat.description}
      </div>
    </motion.div>
  )
}

function SystemicRiskStats() {
  // Most urgent, deduplicated stats
  const stats = [
    {
      value: '93%',
      label: 'Physicians report care delays',
      description: 'Pre-auth delays patient care',
    },
    {
      value: '89%',
      label: 'Physicians: burnout',
      description: 'Pre-auth contributes to burnout',
    },
    {
      value: '43',
      label: 'Avg. PA requests/week',
      description: 'Per physician',
    },
    {
      value: '16',
      label: 'Avg. hours/week on PA',
      description: 'Physicians & staff',
    },
    {
      value: '94%',
      label: 'Physicians: PA delays care',
      description: 'PA leads to care delays',
    },
    {
      value: '78%',
      label: 'Patients abandon treatment',
      description: 'Due to PA barriers',
    },
  ];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
  }

  // Group stats by category (for rows)
  const categories = [
    {
      title: "Systemic Risk",
      stats: [stats[0], stats[1]],
    },
    {
      title: "Delays and Burden",
      stats: [stats[2], stats[3]],
    },
    {
      title: "Patient Impact",
      stats: [stats[4], stats[5]],
    },
  ];

  return (
    <section className="w-full bg-sage-100 py-32 px-2 sm:px-0 font-inter flex justify-center items-center relative overflow-hidden">
      {/* Subtle animated radial gradient background */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.18, scale: [0.9, 1.05, 0.95, 1] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        style={{ width: 900, height: 900, borderRadius: '50%', background: 'radial-gradient(circle, #FF8800 0%, #fffbe6 60%, #f6faf6 100%)' }}
      />
      <div className="w-full max-w-5xl px-0 sm:px-0 py-0 flex flex-col gap-16 items-center relative z-10">
        <div className="flex flex-col items-center mb-8">
          <motion.div
            className="mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.1, 1], opacity: [0, 1, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          >
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none"><circle cx="28" cy="28" r="28" fill="#FF8800" opacity="0.15"/><path d="M28 16v12" stroke="#FF8800" strokeWidth="3.5" strokeLinecap="round"/><circle cx="28" cy="38" r="2.5" fill="#FF8800"/></svg>
          </motion.div>
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-normal text-gammalex-orange text-center mb-4 leading-tight"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Pre-auth is a healthcare crisis
          </motion.h2>
          <motion.p
            className="text-2xl sm:text-3xl font-inter font-normal text-slate-900 text-center mb-8 leading-tight"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            The data is clear: delays, burnout, <br /> and denials are symptoms of a broken system.
          </motion.p>
          <motion.div
            className="text-sm text-slate-500 text-center mb-4"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            Source: <a href="https://www.ama-assn.org/system/files/prior-authorization-survey.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-gammalex-orange">AMA 2024 Prior Authorization Physician Survey</a>
          </motion.div>
        </div>
        <div className="w-full flex flex-col items-center gap-8">
          <div className="w-full flex flex-col gap-10 sm:grid sm:grid-cols-[minmax(10rem,14rem)_1fr_1fr] sm:gap-x-10 sm:gap-y-0 items-stretch">
            {categories.map((cat, catIdx) => (
              <div key={cat.title} className="flex flex-col sm:contents w-full">
                <div className="flex flex-col items-start sm:items-end pr-0 sm:pr-4 justify-center mb-2 sm:mb-0">
                  <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-slate-700 uppercase tracking-wide text-left sm:text-right whitespace-nowrap">{cat.title}</h3>
                </div>
                <div className="flex flex-col sm:col-start-2">
                  <StatBlock stat={cat.stats[0]} i={catIdx * 2} fadeUp={fadeUp} />
                </div>
                <div className="flex flex-col sm:col-start-3">
                  <StatBlock stat={cat.stats[1]} i={catIdx * 2 + 1} fadeUp={fadeUp} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col items-center mt-2">
          {/* Button removed as requested */}
        </div>
      </div>
    </section>
  );
}



// FooterGV component extracted to components/FooterGV.tsx

// SectionBlock: DRY, bold, adaptive block for heading + content
function SectionBlock({ heading, highlight, content, renderHeading }: { heading: string, highlight: string, content: React.ReactNode, renderHeading?: () => React.ReactNode }) {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between py-10 gap-16">
      {/* Left: Heading */}
      <div className="w-full sm:w-1/2 flex justify-center sm:justify-end px-4 sm:px-0">
        {renderHeading ? renderHeading() : (
          <h3 className="text-3xl sm:text-4xl font-normal font-inter text-slate-900 text-center sm:text-right leading-tight">
            {heading.split(highlight)[0]}
            <span className="text-gammalex-orange font-bold">{highlight}</span>
            {heading.split(highlight)[1]}
          </h3>
        )}
      </div>
      {/* Right: Supporting Text */}
      <div className="w-full sm:w-1/2 flex items-center justify-center px-4 sm:px-0">
        <div className="text-lg sm:text-xl text-slate-700 font-inter text-center sm:text-left leading-relaxed max-w-2xl">
          {content}
        </div>
      </div>
    </div>
  );
}

const benefits = [
  {
    label: "Less denial",
    icon: CheckCircle,
    description: "Fewer denials with proactive AI."
  },
  {
    label: "Less burnout",
    icon: Brain,
    description: "Reduce staff burnout."
  },
  {
    label: "Reduced legal risk",
    icon: Scale,
    description: "Spot legal risks early."
  },
  {
    label: "Faster care",
    icon: Zap,
    description: "Accelerate approvals."
  }
]

function InteractiveBenefitsBar() {
  const [active, setActive] = React.useState(0)
  // Responsive check for mobile
  const [isMobile, setIsMobile] = React.useState(false)
  React.useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 640)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center px-4 sm:px-2 lg:px-0 pb-12">
      {/* Horizontal bar with labels */}
      <div className="relative w-full">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 bg-black rounded-full z-0" style={{height: isMobile ? 3 : 4}} />
        {/* Animated dot */}
        <motion.div
          className="absolute z-10 top-1/2 -translate-y-1/2"
          animate={{ left: `calc(${active * 25}% + 12.5%)` }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          style={{ 
            width: isMobile ? 20 : 24, 
            height: isMobile ? 20 : 24, 
            background: '#FF8800', 
            borderRadius: '50%', 
            boxShadow: '0 2px 8px #ff880033' 
          }}
        />

      </div>
      {/* Segments - Icons only */}
      <div className="relative z-20 w-full flex flex-row justify-between items-center mt-6 sm:mt-8">
        {benefits.map((b, i) => {
          const Icon = b.icon
          const isActive = i === active
          return (
            <button
              key={b.label}
              className="flex flex-col items-center flex-1 focus:outline-none group bg-transparent border-none cursor-pointer py-3 sm:py-2 px-1 transition-all duration-200 min-h-[48px] sm:min-h-auto"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              tabIndex={0}
              aria-label={b.label}
              style={{ position: 'relative' }}
            >
              <motion.div
                animate={isActive ? { scale: isMobile ? 1.15 : 1.25, color: '#FF8800' } : { scale: 1, color: '#23232B' }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <Icon className={`w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 ${isActive ? 'text-gammalex-orange' : 'text-gammalex-orange/70'} transition-colors`} />
              </motion.div>
              {/* Tooltip/description */}
              <AnimatePresence>
                {isActive && (
                  isMobile ? (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="fixed left-1/2 top-28 -translate-x-1/2 bg-white shadow-xl rounded-xl px-3 py-2 text-sm text-slate-700 font-inter z-[100] border border-slate-200 max-w-[280px] w-[85vw] text-center break-words whitespace-normal"
                    >
                      {b.description}
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-1/2 -translate-x-1/2 -top-16 bg-white shadow-lg rounded-xl px-3 py-2 text-base text-slate-700 font-inter z-30 border border-slate-200 break-words whitespace-normal text-left"
                      style={{ minWidth: '140px', maxWidth: '200px' }}
                    >
                      <div className="relative">
                        {b.description}
                        <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white" />
                      </div>
                    </motion.div>
                  )
                )}
              </AnimatePresence>
            </button>
          )
        })}
      </div>
    </div>
  )
}
