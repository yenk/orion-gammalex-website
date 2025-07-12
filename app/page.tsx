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
  BarChart2,
  BrainCircuit,
  UserRound,
  BarChart3,
  Eye,
  Code2,
  Users,
  HeartHandshake,
  Lightbulb,
  Star,
  Lock,
  ThumbsUp,
  UserCheck,
} from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { JoinWaitlistModal } from "@/components/JoinWaitlistModal"
import WaitlistGrowth from '@/components/WaitlistGrowth'
import WaitlistLiveCount from '@/components/WaitlistLiveCount'
import Image from 'next/image'
import Link from 'next/link'
import { CopilotHero } from "@/components/CopilotHero"
import { FeatureHighlights } from "@/components/FeatureHighlights"
import { ProductFeaturesDemo, ViabilityScoring, PreAuthWriter, ComplyDraft, PolicyLookup, AskGamma, FlaggingOverlay } from "@/components/ProductFeaturesDemo"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import AnimatedText from "@/components/ui/AnimatedText"
import { Progress } from '@/components/ui/progress'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip'
import React from 'react'
import { Brain as BrainIcon, Lightning, ShieldCheck, ChartBar, Scales } from 'phosphor-react'
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
      <section id="why-gammalex" className="py-32 px-4 sm:px-8 font-inter relative">
        {/* Futuristic background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-purple-900/20 to-black/50 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(139,92,246,0.1),transparent_50%)] pointer-events-none" />
        
        <div className="w-full max-w-7xl mx-auto relative z-10">
          
          {/* Anchor: What We Do */}
          <div id="what-we-do" className="absolute -top-32" aria-hidden="true" />
          {/* Main Section Heading */}
          <div className="text-center mb-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-inter font-normal text-white leading-tight mb-6">
              Forge the <span className="gradient-text">AI frontier.</span>
              <br />
              Trained on Care. Tuned for Coverage. Built for Defense.
            </h1>
          </div>

          {/* Anchor: Problems We Solve */}
          <div id="problems-we-solve" className="absolute -top-32" aria-hidden="true" />
          {/* Why It Matters Subsection */}
          <div className="mb-24">
            <div className="flex flex-col lg:flex-row items-start justify-between mb-0 pb-0">
              <div className="lg:w-1/3 mb-6 lg:mb-0">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-inter font-normal text-white leading-tight">
                  Why It Matters
                </h2>
              </div>
              <div className="lg:w-2/3 lg:pl-16">
                <div className="glass rounded-2xl p-8 border border-white/10 hover:border-gammalex-purple/30 transition-all duration-300">
                  <p className="text-lg sm:text-xl text-white/90 leading-[1.5] sm:leading-[1.6] md:leading-[1.7] mb-6 font-inter">
                    Prior authorization isn't just paperwork — it's a leading cause of delayed care, denied coverage, and systemic harm across healthcare.
                  </p>
                  <ul className="text-lg sm:text-xl text-white/80 leading-[1.5] sm:leading-[1.6] mb-6 space-y-3 font-inter">
                    <li className="flex items-start">
                      <span className="text-gammalex-orange mr-3 animate-pulse">•</span>
                      <span><span className="text-gammalex-orange font-medium">92% of care delays</span> are tied to prior authorization problems, often driven by policy-based coverage denials that cause patients to abandon treatment and worsen health outcomes.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gammalex-orange mr-3 animate-pulse">•</span>
                      <span>Physicians and staff spend up to <span className="text-gammalex-orange font-medium">15 hours per week</span> wrangling prior auth requests, with many practices assigning full-time employees just to manage approvals.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gammalex-orange mr-3 animate-pulse">•</span>
                      <span>The result: <span className="text-gammalex-orange font-medium">higher costs, overwhelmed clinicians</span>, and in some cases, <span className="text-gammalex-orange font-medium">serious adverse events or preventable hospitalizations</span> when care gets blocked.</span>
                    </li>
                  </ul>
                  <p className="text-lg sm:text-xl text-white/90 leading-[1.5] sm:leading-[1.6] md:leading-[1.7] mb-4 font-inter">
                    Fixing prior authorization means more than efficiency — it means <span className="text-gammalex-orange font-medium">restoring access to care</span>, <span className="text-gammalex-orange font-medium">reducing denied coverage</span>, and <span className="text-gammalex-orange font-medium">protecting patients and providers from legal and medical risk</span>.
                  </p>
                  <p className="text-sm text-white/60 font-normal">
                    Source: <a href="https://www.ama-assn.org/practice-management/prior-authorization/fixing-prior-auth-nearly-40-prior-authorizations-week-way" target="_blank" rel="noopener noreferrer" className="underline hover:text-gammalex-orange transition-colors">AMA 2024 Prior Authorization Physician Survey</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Anchor: How We Do It */}
          <div id="how-we-do-it" className="absolute -top-32" aria-hidden="true" />
          {/* Why GammaLex Subsection */}
          <div className="mb-24">
            <div className="flex flex-col lg:flex-row items-start justify-between mb-16 pb-8 border-b border-white/20">
              <div className="lg:w-1/3 mb-6 lg:mb-0">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-inter font-normal text-white leading-tight">
                  Why GammaLex
                </h2>
              </div>
              <div className="lg:w-2/3 lg:pl-16">
                <div className="glass rounded-2xl p-8 border border-white/10 hover:border-gammalex-purple/30 transition-all duration-300">
                  <p className="text-lg sm:text-xl text-white/90 leading-[1.5] sm:leading-[1.6] md:leading-[1.7] mb-6 font-inter">
                    GammaLex is the first clinical-legal AI built to defend care before it's denied — using source-backed, <span className="text-gammalex-orange font-medium">policy-aware intelligence</span> to eliminate pre-auth delays, prevent harmful triage failures, and stop denials at the root.
                  </p>
                  <p className="text-lg sm:text-xl text-white/90 leading-[1.5] sm:leading-[1.6] md:leading-[1.7] mb-6 font-inter">
                    GammaLex parses and interprets <span className="text-gammalex-orange font-medium">medical billing codes</span>, <span className="text-gammalex-orange font-medium">payer policies</span>, and <span className="text-gammalex-orange font-medium">physician documentation</span> to create defensible care rationales for providers, surface risk to patients early, and equip payers with insights to reduce avoidable denials and legal exposure.
                  </p>
                  <p className="text-lg sm:text-xl text-white/90 leading-[1.5] sm:leading-[1.6] md:leading-[1.7] font-inter">
                    By bridging <span className="text-gammalex-orange font-medium">medicine, law, and policy</span>, GammaLex protects all three sides of the care equation — ensuring care is delivered, not denied.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values Row */}
            <section className="w-full py-20 px-4 sm:px-8 bg-gradient-to-br from-[#1a102a] via-[#2d1850] to-[#1a102a] rounded-3xl shadow-2xl border border-gammalex-purple/40 mb-16 relative overflow-hidden font-inter">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[60vw] h-32 bg-gradient-to-r from-gammalex-purple/40 via-transparent to-gammalex-orange/30 blur-2xl opacity-40 pointer-events-none" />
              <div className="max-w-4xl mx-auto flex flex-col items-center z-10 relative">
                <h2 className="text-4xl sm:text-5xl font-inter font-normal text-white leading-tight mb-4 uppercase tracking-widest text-center drop-shadow-lg relative">
                  OUR CORE VALUES
                  <span className="block h-1 w-24 mx-auto mt-3 bg-gradient-to-r from-gammalex-orange via-gammalex-purple to-gammalex-orange rounded-full animate-pulse" />
                </h2>
                <p className="text-lg sm:text-2xl text-white/90 text-center mb-8 max-w-2xl drop-shadow-md font-inter">
                  GammaLex is built on values that drive every decision, every model, and every outcome. <span className="text-gammalex-orange font-inter">Radically transparent. Relentlessly accurate. Always accountable.</span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-4 font-inter">
                  {/* Transparency */}
                  <div className="flex flex-col items-center bg-white/5 glass-dark border border-gammalex-purple/40 rounded-2xl px-6 py-6 shadow-xl neon-glow hover:scale-105 transition-transform font-inter">
                    <span className="bg-gammalex-purple/80 text-white rounded-full p-4 mb-2 shadow-lg flex items-center justify-center">
                      <Eye size={24} strokeWidth={2} color="currentColor" />
                    </span>
                    <span className="font-bold text-lg sm:text-xl text-white mt-1 font-inter">Transparency</span>
                  </div>
                  {/* Accuracy */}
                  <div className="flex flex-col items-center bg-white/5 glass-dark border border-gammalex-orange/40 rounded-2xl px-6 py-6 shadow-xl neon-glow hover:scale-105 transition-transform font-inter">
                    <span className="bg-gammalex-orange/80 text-white rounded-full p-4 mb-2 shadow-lg flex items-center justify-center">
                      <Target size={24} strokeWidth={2} color="currentColor" />
                    </span>
                    <span className="font-bold text-lg sm:text-xl text-white mt-1 font-inter">Accuracy</span>
                  </div>
                  {/* Open Innovation */}
                  <div className="flex flex-col items-center bg-white/5 glass-dark border border-gammalex-purple/40 rounded-2xl px-6 py-6 shadow-xl neon-glow hover:scale-105 transition-transform font-inter">
                    <span className="bg-gammalex-purple/80 text-white rounded-full p-4 mb-2 shadow-lg flex items-center justify-center">
                      <Code2 size={24} strokeWidth={2} color="currentColor" />
                    </span>
                    <span className="font-bold text-lg sm:text-xl text-white mt-1 font-inter">Open Innovation</span>
                  </div>
                  {/* Trust */}
                  <div className="flex flex-col items-center bg-white/5 glass-dark border border-gammalex-purple/40 rounded-2xl px-6 py-6 shadow-xl neon-glow hover:scale-105 transition-transform font-inter">
                    <span className="bg-gammalex-purple/80 text-white rounded-full p-4 mb-2 shadow-lg flex items-center justify-center">
                      <Shield size={24} strokeWidth={2} color="currentColor" />
                    </span>
                    <span className="font-bold text-lg sm:text-xl text-white mt-1 font-inter">Trust</span>
                  </div>
                  {/* Accountability */}
                  <div className="flex flex-col items-center bg-white/5 glass-dark border border-gammalex-orange/40 rounded-2xl px-6 py-6 shadow-xl neon-glow hover:scale-105 transition-transform font-inter">
                    <span className="bg-gammalex-orange/80 text-white rounded-full p-4 mb-2 shadow-lg flex items-center justify-center">
                      <CheckCircle size={24} strokeWidth={2} color="currentColor" />
                    </span>
                    <span className="font-bold text-lg sm:text-xl text-white mt-1 font-inter">Accountability</span>
                  </div>
                  {/* Empowerment */}
                  <div className="flex flex-col items-center bg-white/5 glass-dark border border-gammalex-orange/40 rounded-2xl px-6 py-6 shadow-xl neon-glow hover:scale-105 transition-transform font-inter">
                    <span className="bg-gammalex-orange/80 text-white rounded-full p-4 mb-2 shadow-lg flex items-center justify-center">
                      <UserCheck size={24} strokeWidth={2} color="currentColor" />
                    </span>
                    <span className="font-bold text-lg sm:text-xl text-white mt-1 font-inter">Empowerment</span>
                  </div>
                </div>
              </div>
            </section>

            {/* What Makes Us Different Section */}
            <div className="my-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-inter font-normal text-white leading-tight mb-4">
                  What Makes Us <span className="gradient-text">Different</span>
                </h3>
                <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-[1.5] sm:leading-[1.6] px-4 sm:px-0">
                  Built on transparency, policy-aware precision, and open innovation.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div 
                  className="group glass rounded-2xl p-8 border border-white/10 hover:border-gammalex-purple/50 hover:shadow-lg hover-glow transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gammalex-purple/20 to-gammalex-purple/10 flex items-center justify-center group-hover:from-gammalex-purple/30 group-hover:to-gammalex-purple/20 transition-all">
                      <Eye className="w-6 h-6 text-gammalex-purple" />
                    </div>
                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold font-inter group-hover:text-gammalex-purple-light transition-colors">Transparent Policy Intelligence</h4>
                  </div>
                  <p className="text-base sm:text-lg md:text-xl font-inter text-white/80 leading-relaxed">Users can see which payer policies, coverage rules, and medical guidelines inform GammaLex's predictions — ensuring explainable AI, regulatory alignment, and stakeholder trust.</p>
                </motion.div>

                <motion.div 
                  className="group glass rounded-2xl p-8 border border-white/10 hover:border-gammalex-purple/50 hover:shadow-lg hover-glow transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gammalex-purple/20 to-gammalex-purple/10 flex items-center justify-center group-hover:from-gammalex-purple/30 group-hover:to-gammalex-purple/20 transition-all">
                      <Target className="w-6 h-6 text-gammalex-purple" />
                    </div>
                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold font-inter group-hover:text-gammalex-purple-light transition-colors">Payer-Specific Coverage Prediction</h4>
                  </div>
                  <p className="text-base sm:text-lg md:text-xl font-inter text-white/80 leading-relaxed">GammaLex is fine-tuned on real-world, payer-specific coverage criteria (e.g., Aetna, Cigna, Medicare LCDs), enabling accurate, policy-aligned denial prediction and actionable insights for coverage justification and litigation avoidance.</p>
                </motion.div>

                <motion.div 
                  className="group glass rounded-2xl p-8 border border-white/10 hover:border-gammalex-purple/50 hover:shadow-lg hover-glow transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gammalex-purple/20 to-gammalex-purple/10 flex items-center justify-center group-hover:from-gammalex-purple/30 group-hover:to-gammalex-purple/20 transition-all">
                      <Code2 className="w-6 h-6 text-gammalex-purple" />
                    </div>
                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold font-inter group-hover:text-gammalex-purple-light transition-colors">Open-Source, Explainable by Design</h4>
                  </div>
                  <p className="text-base sm:text-lg md:text-xl font-inter text-white/80 leading-relaxed">GammaLex champions open models and open data — combining public medical datasets, legal sources, and transparent logic chains to stand apart from black-box systems that obscure the basis for coverage decisions.</p>
                </motion.div>
              </div>
            </div>

            {/* Main Content Grid - Matching Reference Image */}
            <div className="space-y-0">
            
            {/* Row 1: Open Source Data Foundation */}
            <div className="flex flex-col lg:flex-row border-b border-white/20">
              <div className="lg:w-1/3 p-6 lg:p-8 border-r border-white/20 glass-dark">
                <div className="text-sm uppercase tracking-wider text-white font-medium mb-4">
                  POWERED BY OPEN SOURCE<br />DATA FOUNDATION
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gammalex-purple animate-pulse-glow"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                </div>
              </div>
              <div className="lg:w-2/3 p-6 lg:p-8 space-y-4">
                <div>
                  <span className="text-lg sm:text-xl font-medium text-gammalex-orange">Open Source Data Foundation: </span>
                  <span className="text-white text-lg sm:text-xl">Builds and fine-tunes LLMs using a diverse set of </span>
                  <span className="text-white font-medium underline text-lg sm:text-xl">open source datasets</span>
                  <span className="text-white text-lg sm:text-xl">, including insurance, legal, and clinical corpora.</span>
                </div>
                <div>
                  <span className="text-lg sm:text-xl font-medium text-gammalex-orange">Transparent Data Lineage: </span>
                  <span className="text-white text-lg sm:text-xl">Provides clear documentation and traceability of all source datasets used for model training with advances such as </span>
                  <span className="text-white font-medium underline text-lg sm:text-xl">audit trails</span>
                  <span className="text-white text-lg sm:text-xl">.</span>
                </div>
              </div>
            </div>

            {/* Row 2: Multi-Domain Integration */}
            <div className="flex flex-col lg:flex-row border-b border-white/20">
              <div className="lg:w-1/3 p-6 lg:p-8 border-r border-white/20 glass-dark">
                <div className="text-sm uppercase tracking-wider text-white font-medium mb-4">
                  CLINICAL-LEGAL-PAYER<br />INTELLIGENCE INTEGRATION
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-gammalex-purple animate-pulse-glow"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-gammalex-purple animate-pulse-glow"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                </div>
              </div>
              <div className="lg:w-2/3 p-6 lg:p-8 space-y-4">
                <div>
                  <span className="text-lg sm:text-xl font-medium text-gammalex-orange">Multi-Domain Integration: </span>
                  <span className="text-white text-lg sm:text-xl">Combines open source </span>
                  <span className="text-white font-medium underline text-lg sm:text-xl">clinical</span>
                  <span className="text-white text-lg sm:text-xl">, </span>
                  <span className="text-white font-medium underline text-lg sm:text-xl">legal</span>
                  <span className="text-white text-lg sm:text-xl">, and </span>
                  <span className="text-white font-medium underline text-lg sm:text-xl">insurance data</span>
                  <span className="text-white text-lg sm:text-xl"> for holistic decision support.</span>
                </div>
                <div>
                  <span className="text-lg sm:text-xl font-medium text-gammalex-orange">Continuous Model Updating: </span>
                  <span className="text-white text-lg sm:text-xl">Regularly incorporates new </span>
                  <span className="text-white font-medium underline text-lg sm:text-xl">open datasets</span>
                  <span className="text-white text-lg sm:text-xl"> and </span>
                  <span className="text-white font-medium underline text-lg sm:text-xl">payer policy updates</span>
                  <span className="text-white text-lg sm:text-xl"> to stay current with industry changes.</span>
                </div>
              </div>
            </div>

            {/* Row 3: Payer-Specific Adaptation */}
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3 p-6 lg:p-8 border-r border-white/20 glass-dark">
                <div className="text-sm uppercase tracking-wider text-white font-medium mb-4">
                  ENTERPRISE-GRADE PAYER<br />POLICY ADAPTATION
                </div>
                <div className="grid grid-cols-5 gap-1">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-gammalex-purple animate-pulse-glow"></div>
                  <div className="w-3 h-3 rounded-full bg-gammalex-purple animate-pulse-glow"></div>
                  <div className="w-3 h-3 rounded-full bg-gammalex-purple animate-pulse-glow"></div>
                  <div className="w-3 h-3 rounded-full bg-gammalex-purple animate-pulse-glow"></div>
                  <div className="w-3 h-3 rounded-full bg-gammalex-purple animate-pulse-glow"></div>
                  <div className="w-3 h-3 rounded-full bg-gammalex-purple animate-pulse-glow"></div>
                  <div className="w-3 h-3 rounded-full bg-gammalex-purple animate-pulse-glow"></div>
                  <div className="w-3 h-3 rounded-full bg-gammalex-purple animate-pulse-glow"></div>
                  <div className="w-3 h-3 rounded-full bg-gammalex-purple animate-pulse-glow"></div>
                  <div className="w-3 h-3 rounded-full bg-gammalex-purple animate-pulse-glow"></div>
                  <div className="w-3 h-3 rounded-full bg-gammalex-purple animate-pulse-glow"></div>
                  <div className="w-3 h-3 rounded-full bg-gammalex-purple animate-pulse-glow"></div>
                  <div className="w-3 h-3 rounded-full bg-gammalex-purple animate-pulse-glow"></div>
                  <div className="w-3 h-3 rounded-full bg-gammalex-purple animate-pulse-glow"></div>
                  <div className="w-3 h-3 rounded-full bg-gammalex-purple animate-pulse-glow"></div>
                </div>
              </div>
              <div className="lg:w-2/3 p-6 lg:p-8 space-y-4">
                <div>
                  <span className="text-lg sm:text-xl font-medium text-gammalex-orange">Payer-Specific Policy Adaptation: </span>
                  <span className="text-white text-lg sm:text-xl">Fine-tunes models on datasets relevant to </span>
                  <span className="text-white font-medium underline text-lg sm:text-xl">major payer policies</span>
                  <span className="text-white text-lg sm:text-xl"> (e.g., Aetna, UnitedHealthcare), ensuring up-to-date, </span>
                  <span className="text-white font-medium underline text-lg sm:text-xl">payer-aligned recommendations</span>
                  <span className="text-white text-lg sm:text-xl">.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Anchor: Impact */}
          <div id="impact" className="absolute -top-32" aria-hidden="true" />
          {/* Competitive Differentiation Section */}
          <div className="mt-24 mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-inter font-normal text-white leading-tight mb-4">
                Beyond automation. <span className="gradient-text">Beyond compliance.</span>
                </h3>
              <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto leading-[1.4] sm:leading-[1.5] px-4 sm:px-0">
                While others focus on efficiency, <span className="gradient-text">GammaLex protects lives</span> — preventing care denials that lead to tragedy and legal action.
              </p>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl border border-white/20 glass neon-glow">
              {/* Header */}
              <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/20">
                <div className="p-8 lg:p-12 border-r-0 md:border-r border-white/20 glass-dark border-b md:border-b-0">
                  <div className="mb-3">
                    <h4 className="text-2xl lg:text-3xl font-semibold text-white font-inter neon-text">Competitors</h4>
                  </div>
                  <p className="text-lg lg:text-xl text-white/80 font-inter">Traditional pre-auth automation</p>
                </div>
                <div className="p-8 lg:p-12 bg-gradient-to-r from-gammalex-purple/20 to-gammalex-purple/30 border-l border-gammalex-purple/30">
                  <div className="mb-3">
                    <h4 className="text-2xl lg:text-3xl font-semibold text-gammalex-purple font-inter neon-text">GammaLex</h4>
                  </div>
                  <p className="text-lg lg:text-xl text-white/90 font-inter">Clinical-legal AI for risk prevention</p>
                </div>
              </div>

              {/* Comparison Rows */}
              <div className="divide-y divide-white/20">
                {[
                  {
                    competitor: "Automate prior auth forms and workflows",
                    gammalex: "Interprets pre-auths with legal-grade precision"
                  },
                  {
                    competitor: "Focus on throughput and payer compliance",
                    gammalex: "Focuses on defensibility, approval, and litigation prevention"
                  },
                  {
                    competitor: "Use basic rules or standard LLMs",
                    gammalex: "Combines billing codes, medical records, and coverage rules with expert-trained models"
                  },
                  {
                    competitor: "Focus primarily on workflow efficiency",
                    gammalex: "Flags contract breaches, policy violations, and lawsuit triggers in real time"
                  },
                  {
                    competitor: "Serve payer operations or revenue cycle teams",
                    gammalex: "Empowers providers, plaintiff-side litigators, and progressive payers alike"
                  },
                  {
                    competitor: "Offer static policy libraries or appeals toolkits",
                    gammalex: "Runs a dynamic clinical-legal engine that predicts denials and drafts source-backed justifications"
                  }
                ].map((row, index) => (
                  <motion.div 
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-8 lg:p-12 border-r-0 md:border-r border-white/20 glass border-b md:border-b-0">
                      <p className="text-lg lg:text-xl text-white/90 leading-relaxed font-inter">{row.competitor}</p>
                    </div>
                    <div className="p-8 lg:p-12 bg-gradient-to-r from-gammalex-purple/20 to-gammalex-purple/30 relative border-l border-gammalex-purple/30">
                      <p className="text-lg lg:text-xl text-white font-medium leading-relaxed font-inter">{row.gammalex}</p>
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gammalex-purple neon-glow"></div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom highlight */}
              <div className="p-8 lg:p-12 bg-gradient-to-r from-gammalex-purple/30 to-gammalex-purple/40 text-center border-t border-gammalex-purple/30">
                <p className="text-xl lg:text-2xl font-medium text-white font-inter neon-text">
                  The difference: <span className="text-gammalex-purple font-bold neon-text">Legal foresight</span> prevents what automation can't fix.
                </p>
              </div>
            </div>

          </div>

          <div className="w-full flex justify-center mt-10 sm:mt-12">
            <JoinWaitlistModal
              trigger={
                <button className="inline-block bg-gradient-to-r from-gammalex-purple to-gammalex-purple-light text-white text-lg font-bold rounded-2xl px-10 py-4 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gammalex-purple focus:ring-offset-2 transition-all duration-300 neon-glow hover:neon-glow transform hover:scale-105">
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

      {/* Legal Heat Index Section */}
      <LegalHeatIndex />

      {/* Legal Foresight Bridge Section */}
      <section className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 font-inter relative">
        {/* Futuristic background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-purple-900/15 to-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.12),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-white mb-6 sm:mb-8 px-2">
              From <span className="gradient-text">legal risk</span> to <span className="gradient-text">legal foresight</span>
            </h2>
            <AnimatedText
              text="Lawsuits show the pattern: denials become liability when clinical evidence or policy coverage is ignored. GammaLex anticipates legal and policy risk before it escalates."
              className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-inter font-normal text-white/90 text-center max-w-5xl mx-auto leading-tight px-2"
            />
            <div className="flex justify-center my-8">
              <FlaggingOverlay />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <motion.div 
              className="glass rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col items-start hover:border-gammalex-purple/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3 sm:gap-5 mb-4 sm:mb-6">
                <Zap className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-gammalex-purple group-hover:text-gammalex-purple-light transition-colors" />
                <span className="text-lg sm:text-xl md:text-2xl font-bold font-inter text-gammalex-purple group-hover:text-gammalex-purple-light transition-colors">Pattern Recognition</span>
              </div>
              <div className="text-base sm:text-lg md:text-xl font-inter text-white/90 leading-relaxed">AI analyzes thousands of denial patterns to identify legal vulnerabilities before they become lawsuits—from unqualified reviewers to templated rejections.</div>
            </motion.div>
            <motion.div 
              className="glass rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col items-start hover:border-gammalex-purple/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3 sm:gap-5 mb-4 sm:mb-6">
                <Scale className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-gammalex-purple group-hover:text-gammalex-purple-light transition-colors" />
                <span className="text-lg sm:text-xl md:text-2xl font-bold font-inter text-gammalex-purple group-hover:text-gammalex-purple-light transition-colors">Legal Compliance</span>
              </div>
              <div className="text-base sm:text-lg md:text-xl font-inter text-white/90 leading-relaxed">Ensures every pre-auth submission meets both clinical standards and legal requirements, preventing the compliance gaps that lead to successful appeals.</div>
            </motion.div>
            <motion.div 
              className="glass rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col items-start hover:border-gammalex-purple/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3 sm:gap-5 mb-4 sm:mb-6">
                <Shield className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-gammalex-purple group-hover:text-gammalex-purple-light transition-colors" />
                <span className="text-lg sm:text-xl md:text-2xl font-bold font-inter text-gammalex-purple group-hover:text-gammalex-purple-light transition-colors">Risk Mitigation</span>
              </div>
              <div className="text-base sm:text-lg md:text-xl font-inter text-white/90 leading-relaxed">Flags potential legal issues in real-time, allowing teams to strengthen justifications before submission rather than defending them in court later.</div>
            </motion.div>
          </div>
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-lg xs:text-xl sm:text-2xl font-inter text-white/70 italic mb-6 sm:mb-8 px-2"
            >
              The best defense is foresight. GammaLex doesn't just respond to denials—it flags risk early, so you can avoid them altogether.
            </motion.p>
          </div>
        </div>
      </section>

      <div className="w-full bg-sage-50 border-b border-sage-100">
        <ProductFeaturesDemo />
      </div>

      {/* About Section */}
      <AboutSection />

      {/* GammaLex AI Copilot Cloud Section */}
      <section id="copilot-cloud" className="w-full min-h-[80vh] flex flex-col justify-center items-center bg-gradient-to-br from-black via-[#1a102a] to-black py-32 px-2 sm:px-4 md:px-8 font-inter">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-0 lg:gap-64">
          <div className="flex-1 flex flex-col justify-center items-start">
            <h2 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-normal text-left font-inter leading-tight text-white break-words">
              AI ENGINE <br /> FOR PRE-AUTH AND COMPLIANCE
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
        <section id="join" className="min-h-screen flex items-center bg-gradient-to-br from-[#181028] via-[#221a36] to-[#23232b] text-white">
          <div className="max-w-none w-full px-8 lg:px-16 py-8">
            <div className="flex flex-col items-center max-w-3xl mx-auto">
              <span className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-inter text-center break-words tracking-tight mb-4 text-white">
                Be the first to experience GammaLex.
              </span>
              <span className="text-2xl sm:text-3xl font-inter text-center break-words tracking-tight mb-8 text-white/80">
                AI-built for transparency, accuracy and outcomes that matter.
              </span>
              <div className="glass rounded-3xl shadow-lg border border-gammalex-purple/30 p-6 sm:p-14 w-full flex flex-col items-center font-inter">
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

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { id: "why-gammalex", label: "WHY GAMMALEX" },
    { id: "product", label: "SOLUTION" },
    { id: "about", label: "ABOUT" },
    { id: "join", label: "PARTNER WITH US" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const handleNavClick = (item: any) => {
    if (item.external) {
      window.location.href = `/${item.id}`
    } else {
      scrollToSection(item.id)
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Actual Navigation Bar */}
      <motion.nav
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "glass border-b border-white/10 backdrop-blur-md"
            : "glass-dark backdrop-blur-sm"
        } font-inter`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-none px-8 lg:px-16">
          <div className="flex items-center h-16 sm:h-20 justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center cursor-pointer"
              onClick={() => scrollToSection("hero")}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/gammalexlogo-transparent.png"
                alt="GammaLex Logo"
                style={{ filter: 'brightness(0) invert(1)' }}
                className={`transition-all duration-300 h-24 sm:h-32 max-w-none`}
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-32">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className="text-2xl font-medium text-white font-inter transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button className="lg:hidden p-2 ml-auto text-white" onClick={() => setIsOpen(!isOpen)} whileTap={{ scale: 0.95 }}>
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              className="lg:hidden py-6 border-t border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className="block w-full text-left text-xl font-medium text-white font-inter py-2 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <JoinWaitlistModal
                  trigger={
                    <Button className="bg-gammalex-purple hover:bg-gammalex-purple-light text-white font-bold w-full py-4 text-lg rounded-xl mt-4 hover-glow transition-all">
                      Request a Demo
                    </Button>
                  }
                />
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </>
  )
}

function AboutSection() {
  const features = [
    {
      icon: <BrainCircuit className="text-white" size={32} />, // Top-Tier LLMs for Healthcare
      title: "Top-Tier LLMs for Healthcare",
      description: "GammaLex leverages the latest large language models, fine-tuned for medical and legal data, ensuring accuracy and compliance for every payer and policy.",
    },
    {
      icon: <Zap className="text-white" size={32} />, // Accelerated Pre-Auth Decisions
      title: "Accelerated Pre-Auth Decisions",
      description: "AI-powered justifications and instant policy matching reduce delays, denials, and manual work for clinicians and legal teams.",
    },
    {
      icon: <Shield className="text-white" size={32} />, // Built for Real-World Risk
      title: "Built for Real-World Risk",
      description: "GammaLex flags legal and clinical vulnerabilities before they become denials or liability, supporting faster, stronger appeals.",
    },
    {
      icon: <UserRound className="text-white" size={32} />, // Expert-Built, Always Evolving
      title: "Expert-Built, Always Evolving",
      description: "Our platform is built by AI researchers—constantly learning from new payer rules and real-world outcomes.",
    },
    {
      icon: <BarChart3 className="text-white" size={32} />, // Highly Scalable & Reliable
      title: "Highly Scalable & Reliable",
      description: "From solo practices to health systems, GammaLex scales securely with 99.9% uptime and enterprise-grade compliance.",
    },
    {
      icon: <Scale className="text-white" size={32} />, // Uniquely GammaLex
      title: "Uniquely GammaLex",
      description: "Purpose-built for the intersection of medicine, law, and policy—no other platform brings together clinical, legal, and payer expertise like GammaLex.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 font-inter relative">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-purple-900/10 to-black/30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.08),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-center leading-tight mb-6 sm:mb-8 px-2">
          Forge the <span className="multi-gradient-text">AI frontier.</span><br />
          Trained on care. Tuned for coverage. Built for defense.
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-inter text-center text-white max-w-4xl mx-auto leading-[1.4] sm:leading-[1.5] md:leading-[1.6] mb-12 sm:mb-16 md:mb-20 px-2">
          Because coverage decisions shouldn't be a black box.<br />
          We're building GammaLex to bring clarity to coverage, predict denials before they happen, and protect patients, providers, and payers from the downstream risks of broken authorization systems.
        </p>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="flex flex-col flex-1 h-full max-w-lg w-full p-8 rounded-3xl mx-auto group bg-[#181028]/80 backdrop-blur-lg border border-white/10 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-gammalex-orange/60 hover:neon-glow min-h-[260px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-gammalex-orange to-gammalex-purple shadow-lg mb-6">
                {React.cloneElement(f.icon, { className: 'text-white drop-shadow-lg', width: 32, height: 32 })}
              </div>
              <div className="text-2xl font-bold font-inter mb-2 text-white text-left leading-tight group-hover:text-gammalex-orange transition-colors">
                {f.title}
              </div>
              <div className="text-base sm:text-lg md:text-xl font-inter text-left text-white/80 leading-[1.5] sm:leading-[1.6]">
                {f.description}
              </div>
            </motion.div>
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
      <div className="text-lg xs:text-xl sm:text-2xl font-medium text-white/90 mb-1 font-inter leading-snug text-left">
        {stat.label}
      </div>
      <div className="text-base xs:text-lg sm:text-lg text-white/80 font-inter leading-normal text-left">
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
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
    <section className="w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 font-inter flex justify-center items-center relative overflow-hidden bg-gradient-to-br from-black via-gammalex-purple/20 to-black">
      {/* Futuristic animated radial gradient background */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.18, scale: [0.9, 1.05, 0.95, 1] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        style={{ width: 900, height: 900, borderRadius: '50%', background: 'radial-gradient(circle, #8b5cf6 0%, #23232b 100%)' }}
      />
      <div className="w-full max-w-5xl px-0 sm:px-0 py-0 flex flex-col gap-16 items-center relative z-10">
        <div className="flex flex-col items-center mb-8">
          <motion.div
            className="mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.1, 1], opacity: [0, 1, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          >
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none"><circle cx="28" cy="28" r="28" fill="#8b5cf6" opacity="0.15"/><path d="M28 16v12" stroke="#8b5cf6" strokeWidth="3.5" strokeLinecap="round"/><circle cx="28" cy="38" r="2.5" fill="#8b5cf6"/></svg>
          </motion.div>
          <motion.h2
            className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-white text-center leading-tight mb-3 sm:mb-4 px-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Pre-auth is a healthcare <span className="gradient-text">crisis</span>
          </motion.h2>
          <motion.p
            className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-inter font-normal text-white text-center mb-6 sm:mb-8 leading-tight px-2"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            The data is clear: delays, burnout, <br /> and denials are symptoms of a broken system.
          </motion.p>
          <motion.div
            className="text-sm text-white/60 text-center mb-4"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            Source: <a href="https://www.ama-assn.org/system/files/prior-authorization-survey.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-gammalex-purple transition-colors">AMA 2024 Prior Authorization Physician Survey</a>
          </motion.div>
        </div>
        <div className="w-full flex flex-col items-center gap-8">
          <div className="w-full flex flex-col gap-10 sm:grid sm:grid-cols-[minmax(10rem,14rem)_1fr_1fr] sm:gap-x-10 sm:gap-y-0 items-stretch">
            {categories.map((cat, catIdx) => (
              <div key={cat.title} className="flex flex-col sm:contents w-full">
                <div className="flex flex-col items-start sm:items-end pr-0 sm:pr-4 justify-center mb-2 sm:mb-0">
                  <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gammalex-purple uppercase tracking-wide text-left sm:text-right">
                    {cat.title}
                  </h3>
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

function LegalHeatIndex() {
  const cases = [
    {
      caseName: "Dwyer v. UnitedHealthcare",
      year: "2023",
      jurisdiction: "5th U.S. Circuit Court of Appeals",
      summary: "Denial of mental health care overturned. Court found denial \"unsupported by medical evidence\" and \"contradicted by the record.\"",
      tag: "Mental Health",
      source: "https://www.propublica.org/article/mental-health-insurance-denials-unitedhealthcare-cigna-doctors"
    },
    {
      caseName: "Cunningham v. Aetna",
      year: "2023",
      jurisdiction: "Oklahoma",
      summary: "$92K cancer treatment denied. Patient died. Court exposed rushed reviews and unqualified reviewers.",
      tag: "Oncology, Malpractice",
      source: "https://www.propublica.org/article/malpractice-settlements-doctors-working-for-insurance-companies"
    },
    {
      caseName: "Salim v. Blue Cross and Blue Shield",
      year: "2023",
      jurisdiction: "Federal Court",
      summary: "Proton therapy for cancer denied. Attorney-patient sued BCBS; spotlight on insurer bias against advanced treatment.",
      tag: "Advanced Care",
      source: "https://www.propublica.org/article/blue-cross-proton-therapy-cancer-lawyer-denial"
    },
    {
      caseName: "UnitedHealthcare & Cigna",
      year: "2022–2024",
      jurisdiction: "Multiple Federal Courts",
      summary: "Dozens of cases found wrongful mental health denials using \"dishonest\" reviews. Courts ruled this violated federal parity law.",
      tag: "Mental Health Parity",
      source: "https://news.wttw.com/2025/01/03/insurers-continue-rely-doctors-whose-judgments-have-been-criticized-courts"
    },
    {
      caseName: "Class Action: Algorithmic Denials by UnitedHealthcare",
      year: "2024–2025",
      jurisdiction: "National Class Action",
      summary: "AI-driven auto-denials triggered a national class-action lawsuit and federal scrutiny. Patients denied without human review.",
      tag: "AI Denial",
      source: "https://www.nbcnews.com/health/health-care/prior-authorization-insurance-denials-patients-treatment-rcna212068"
    }
  ];

  const caseHeadlines = [
    "Mental Health Denied, Justice Delivered",
    "Cancer Patient Dies After $92K Denial",
    "Advanced Care Blocked, Lawsuit Follows",
    "Dozens of Mental Health Denials Ruled Dishonest",
    "AI Auto-Denials Spark National Class Action",
  ];

  return (
    <section className="w-full py-24 px-4 font-inter bg-gradient-to-br from-black via-gammalex-purple/20 to-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-white text-center mb-4">
            When denials become <span className="gradient-text">lawsuits</span>
          </h2>
          <p className="text-2xl sm:text-3xl font-inter font-normal text-white text-center mb-8 leading-tight">
            The warning signs GammaLex is built to catch—before it's too late.
          </p>
        </div>
        <div className="relative flex flex-col gap-20 pl-8 sm:pl-12">
          {/* Vertical timeline line */}
          <div className="absolute left-3 sm:left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-gammalex-purple/40 via-gammalex-purple/60 to-gammalex-orange/40 rounded-full z-0" />
          {cases.map((c, idx) => (
            <div key={c.caseName} className="relative flex items-start gap-6">
              {/* Timeline dot */}
              <div className="flex flex-col items-center z-10">
                <span className={`w-5 h-5 rounded-full border-4 border-white ${idx === 0 ? 'bg-gammalex-orange' : 'bg-gammalex-purple'}`}></span>
                {idx < cases.length - 1 && (
                  <span className="flex-1 w-px bg-gradient-to-b from-gammalex-purple/60 to-gammalex-orange/30" />
                )}
              </div>
              {/* Event content */}
              <div className="flex-1 pb-2">
                <div className="mb-2">
                  <span className="block text-2xl sm:text-3xl md:text-4xl font-bold font-inter text-white mb-1">
                    {caseHeadlines[idx]}
                  </span>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-lg sm:text-xl font-semibold font-inter text-white/80 mr-2">
                      {c.caseName}
                    </span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gammalex-purple/30 text-gammalex-purple uppercase tracking-wide">
                      {c.tag}
                    </span>
                  </div>
                  <div className="text-sm text-white/60 font-inter mt-1">
                    {c.year}, {c.jurisdiction}
                  </div>
                </div>
                <div className="text-lg sm:text-xl font-inter text-white/90 mb-2 mt-2">
                  {c.summary}
                </div>
                <a href={c.source} target="_blank" rel="noopener noreferrer" className="text-gammalex-purple underline underline-offset-2 text-base font-inter hover:text-gammalex-orange transition-colors">
                  Read Source ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FooterGV() {
  return (
    <footer className="w-full bg-[#f9f9f7] text-sm text-black font-inter py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8 ml-4 md:ml-16">
        {/* Logo */}
        <div className="w-fit -mt-4">
          <Link href="/">
            <Image
              src="/gammalexlogo-transparent.png"
              alt="GammaLex"
              width={96}
              height={96}
              className="h-24 relative z-10"
              priority
            />
          </Link>
        </div>
        {/* All content in one column */}
        <div className="flex flex-col gap-2 md:ml-12">
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link href="/terms" className="hover:underline">Terms of Use</Link>
          <Link href="/gdpr-ccpa-compliance" className="hover:underline">GDPR / CCPA Compliance</Link>
          <Link href="/" className="hover:underline">News and Press</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <a href="https://linkedin.com/company/gammalex" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
          <div className="text-xs md:text-sm whitespace-nowrap mt-2">
            ©{new Date().getFullYear()} GammaLex AI Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

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
