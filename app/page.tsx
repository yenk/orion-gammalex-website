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
  ShieldCheck,
  AlertCircle,
  Activity,
  ChevronDown,
  ChevronUp,
  Award,
  Globe,
  Cpu,
  Database,
  Network,
  PieChart,
  AlertTriangle,
  Building2,
  Heart,
  ChevronLeft,
  ChevronRight,
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
import { ViabilityScoring, PreAuthWriter, ComplyDraft, PolicyLookup, AskGamma, FlaggingOverlay } from "@/components/ProductFeaturesDemo"
import LegalHeatIndex from "@/components/LegalHeatIndex"
import AboutSection from "@/components/AboutSection"
import FooterGV from "@/components/FooterGV"
import UnifiedCrisisSection from "@/components/UnifiedCrisisSection"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import AnimatedText from "@/components/ui/AnimatedText"
import { Progress } from '@/components/ui/progress'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip'
import React from 'react'
import { Brain as BrainIcon, Lightning, ChartBar, Scales } from 'phosphor-react'
import { useAnimation, useMotionValue, useMotionValueEvent } from "framer-motion"

/**
 * GammaLexPage - Homepage for GammaLex: Your AI Copilot for Medical Pre-Auth and Denial Risk.
 * Uses modular hero and toolkit sections, keeping layout, navigation, and request a demo CTA.
 */
export default function GammaLexPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const isFooterVisible = useInView(ctaRef, { once: false, margin: "0px 0px -40% 0px" })
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    // (Removed scroll snap setup for smoother scrolling)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setShowScrollTop(scrollY > 300) // Show button after scrolling 300px
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={containerRef}
      className="min-h-screen lg:h-screen overflow-y-scroll"
    >
      <Navigation />

      {/* Hero Section */}
      <CopilotHero />

      {/* Unified Healthcare Crisis Section */}
      <section id="healthcare-crisis" className="w-full flex flex-col items-center justify-center py-20 px-4 sm:px-8 font-inter">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-inter font-normal text-center leading-tight mb-10 multi-gradient-text">
          When red tape becomes a risk factor<br />
        </h2>
        <UnifiedCrisisSection />
      </section>

      {/* Legal Heat Index Section (When denials become lawsuits) */}
      <LegalHeatIndex />



      {/* What We're Solving Section - Clean GammaLex Design */}
      <section id="what-we-are-solving" className="w-full py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 font-inter">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              What We're <span className="text-gammalex-orange">Solving</span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Ending claim denials in healthcare's most complex specialties
            </p>
          </motion.div>

          {/* Three Key Points - Clean Layout */}
          <div className="space-y-8">
            {/* Point 1: The Problem */}
            <motion.div 
              className="flex items-start gap-6 p-6 rounded-xl bg-white/5 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-gammalex-orange rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl">🎯</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">The Problem</h3>
                <p className="text-white/80 leading-relaxed">
                  Claim denials and outdated billing frustrate healthcare's most complex specialties. 
                  We're starting with <span className="text-gammalex-orange font-medium">radiology</span>—where denial risks are high—then expanding to oncology, cardiology, and transplant.
                </p>
              </div>
            </motion.div>

            {/* Point 2: The Bridge */}
            <motion.div 
              className="flex items-start gap-6 p-6 rounded-xl bg-white/5 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/20">
                <span className="text-white text-xl">🌉</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">The Bridge</h3>
                <p className="text-white/80 leading-relaxed">
                  We bring <span className="text-white font-medium">transparency</span> between providers and payers, uncovering denial causes and ensuring patients get timely treatment without delays.
                </p>
              </div>
            </motion.div>

            {/* Point 3: The Solution */}
            <motion.div 
              className="flex items-start gap-6 p-6 rounded-xl bg-white/5 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-gammalex-orange rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl">🤖</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">The Solution</h3>
                <p className="text-white/80 leading-relaxed">
                  AI that <span className="text-gammalex-orange font-medium">predicts denial risks</span>, <span className="text-gammalex-orange font-medium">flags errors automatically</span>, and <span className="text-gammalex-orange font-medium">streamlines payments</span>—freeing healthcare teams to focus on care, not paperwork.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Vision Statement */}
          <motion.div 
            className="text-center mt-12 p-8 rounded-xl bg-gradient-to-r from-gammalex-orange/10 to-transparent border border-gammalex-orange/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-white/90 leading-relaxed">
              We're not just improving billing; we're <span className="text-gammalex-orange font-semibold">redefining how the healthcare ecosystem works</span>—building trust, efficiency, and better outcomes for everyone. This is healthcare, uncompromised. This is <span className="text-gammalex-orange font-bold">Gammalex</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Mission Section */}
      <section id="the-mission" className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 font-inter relative">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-purple-900/20 to-black/50 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(139,92,246,0.1),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Hero Mission Statement */}
            <motion.div 
            className="text-center mb-20 sm:mb-24"
            initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
              viewport={{ once: true }}
          >
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-white text-center leading-tight mb-8">
              The <span className="gradient-text">Mission</span>
            </h2>
            <div className="max-w-5xl mx-auto">
            <motion.div 
                className="glass rounded-3xl p-8 sm:p-12 mb-8 border border-white/10"
                initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              >
                                <p className="text-lg sm:text-xl md:text-2xl font-inter text-white/90 leading-relaxed text-center">
                  To build the first vertical AI engine that makes care equitable, explainable, and covered—by design, not by exception.
                </p>
                    </motion.div>
                            </div>
                          </motion.div>

          {/* Interactive Capabilities Flow */}
                          <motion.div
            className="mb-20 sm:mb-24"
            initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-inter font-normal text-white text-center mb-12">
              Core <span className="gradient-text">Capabilities</span>
            </h3>
            
            {/* Interactive Timeline Flow */}
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gammalex-purple/40 via-gammalex-orange/60 to-gammalex-purple/40 rounded-full z-0 hidden lg:block" />
              
              <div className="space-y-12 lg:space-y-16">
                        {[
                          { 
                            title: "Instant Policy Intelligence", 
                    description: "Real-time answers to clinical and legal questions with source-backed accuracy.",
                    icon: <Zap className="w-8 h-8 lg:w-10 lg:h-10 text-white" />,
                    delay: 0.6
                          },
                          { 
                            title: "Proactive Denial & Risk Defense", 
                    description: "Surface denial and malpractice risk before they jeopardize treatment or trigger financial exposure.",
                    icon: <Shield className="w-8 h-8 lg:w-10 lg:h-10 text-white" />,
                    delay: 0.8
                          },
                          { 
                            title: "Frictionless Compliance & Ethics", 
                    description: "Embedded compliance checks ensure bulletproof documentation and ethical care.",
                    icon: <Scale className="w-8 h-8 lg:w-10 lg:h-10 text-white" />,
                    delay: 1.0
                          },
                          { 
                            title: "Enterprise-Grade Security & Vulnerability Monitoring", 
                    description: "SOC 2 and HIPAA compliance with continuous vulnerability checks for ironclad trust.",
                    icon: <Lock className="w-8 h-8 lg:w-10 lg:h-10 text-white" />,
                    delay: 1.2
                          }
                        ].map((capability, index) => (
            <motion.div
                            key={`capability-${index}`}
                    className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 group cursor-pointer ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: capability.delay }}
                            viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
                    {/* Icon Circle */}
                    <div className="relative z-10">
                      <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-gammalex-purple/20 to-gammalex-orange/20 flex items-center justify-center group-hover:from-gammalex-purple/40 group-hover:to-gammalex-orange/40 transition-all duration-300 border border-white/10 group-hover:border-gammalex-purple/30">
                                {capability.icon}
                              </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left max-w-2xl">
                      <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-gammalex-orange transition-colors mb-3">
                        {capability.title}
                      </h4>
                      <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                        {capability.description}
                      </p>
                            </div>
                          </motion.div>
                        ))}
              </div>
            </div>
          </motion.div>

          {/* Our Mission Interactive */}
                <motion.div
            className="mb-20 sm:mb-24"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-inter font-normal text-white text-center mb-12">
              Our <span className="gradient-text">Mission</span>
            </h3>
            
            {/* Interactive Pillars */}
            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
                {[
                  { title: "Medicine", description: "Clinical expertise and medical knowledge", icon: <Heart className="w-12 h-12 lg:w-16 lg:h-16 text-white" />, color: "from-red-500/20 to-red-600/20" },
                  { title: "Law", description: "Legal compliance and regulatory understanding", icon: <Scale className="w-12 h-12 lg:w-16 lg:h-16 text-white" />, color: "from-blue-500/20 to-blue-600/20" },
                  { title: "Policy", description: "Payer policies and coverage requirements", icon: <FileText className="w-12 h-12 lg:w-16 lg:h-16 text-white" />, color: "from-green-500/20 to-green-600/20" }
                ].map((pillar, index) => (
                <motion.div
                    key={pillar.title}
                    className="group relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                            viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                  >
                    {/* Background Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Content */}
                    <div className="relative glass rounded-2xl p-8 border border-white/10 group-hover:border-white/30 transition-all duration-300 text-center">
                      <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        {pillar.icon}
                      </div>
                      <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-gammalex-orange transition-colors mb-3">
                        {pillar.title}
                      </h4>
                      <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                        {pillar.description}
                      </p>
                  </div>
                </motion.div>
                        ))}
                  </div>
              </div>
            </motion.div>


              </div>
      </section>

      {/* Main Section: Pre-Auth at the Intersection */}
      <section id="why-gammalex" className="py-32 px-4 sm:px-8 font-inter relative">
        {/* Futuristic background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-purple-900/20 to-black/50 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(139,92,246,0.1),transparent_50%)] pointer-events-none" />
        
        <div className="w-full max-w-7xl mx-auto relative z-10">
          
          {/* Anchor: What We Do */}
          <div id="what-we-do" className="absolute -top-32" aria-hidden="true" />

          {/* Anchor: Problems We Solve */}
          <div id="problems-we-solve" className="absolute -top-32" aria-hidden="true" />

          {/* Anchor: How We Do It */}
          <div id="how-we-do-it" className="absolute -top-32" aria-hidden="true" />

          {/* Core Values Row */}
          <section id="core-values" className="w-full py-20 px-4 sm:px-8 bg-gradient-to-br from-[#1a102a] via-[#2d1850] to-[#1a102a] rounded-3xl shadow-2xl border border-gammalex-purple/40 mb-32 relative overflow-hidden font-inter">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[60vw] h-32 bg-gradient-to-r from-gammalex-purple/40 via-transparent to-gammalex-orange/30 blur-2xl opacity-40 pointer-events-none" />
            <div className="max-w-4xl mx-auto flex flex-col items-center z-10 relative">
              <h2 className="text-3xl sm:text-4xl font-inter font-normal text-white leading-tight mb-4 uppercase tracking-widest text-center drop-shadow-lg relative">
                OUR CORE VALUES
                <span className="block h-1 w-24 mx-auto mt-3 bg-gradient-to-r from-gammalex-orange via-gammalex-purple to-gammalex-orange rounded-full animate-pulse" />
              </h2>
              <p className="text-base sm:text-xl text-white/90 text-center mb-8 max-w-2xl drop-shadow-md font-inter">
                GammaLex is built on values that drive every decision, every model, and every outcome. <span className="text-gammalex-orange font-inter">Radically transparent. Relentlessly accurate. Always accountable.</span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-4 font-inter">
                {/* Transparency */}
                <div className="flex flex-col items-center bg-white/5 glass-dark border border-gammalex-purple/40 rounded-2xl px-6 py-6 shadow-xl neon-glow hover:scale-105 transition-transform font-inter">
                  <span className="bg-gammalex-purple/80 text-white rounded-full p-4 mb-2 shadow-lg flex items-center justify-center">
                    <Eye size={24} strokeWidth={2} color="currentColor" />
                  </span>
                  <span className="font-bold text-base sm:text-lg text-white mt-1 font-inter">Transparency</span>
            </div>
                {/* Accuracy */}
                <div className="flex flex-col items-center bg-white/5 glass-dark border border-gammalex-orange/40 rounded-2xl px-6 py-6 shadow-xl neon-glow hover:scale-105 transition-transform font-inter">
                  <span className="bg-gammalex-orange/80 text-white rounded-full p-4 mb-2 shadow-lg flex items-center justify-center">
                    <Target size={24} strokeWidth={2} color="currentColor" />
                  </span>
                  <span className="font-bold text-base sm:text-lg text-white mt-1 font-inter">Accuracy</span>
                </div>
                {/* Open Innovation */}
                <div className="flex flex-col items-center bg-white/5 glass-dark border border-gammalex-purple/40 rounded-2xl px-6 py-6 shadow-xl neon-glow hover:scale-105 transition-transform font-inter">
                  <span className="bg-gammalex-purple/80 text-white rounded-full p-4 mb-2 shadow-lg flex items-center justify-center">
                    <Code2 size={24} strokeWidth={2} color="currentColor" />
                  </span>
                  <span className="font-bold text-base sm:text-lg text-white mt-1 font-inter">Open Innovation</span>
                </div>
                {/* Trust */}
                <div className="flex flex-col items-center bg-white/5 glass-dark border border-gammalex-purple/40 rounded-2xl px-6 py-6 shadow-xl neon-glow hover:scale-105 transition-transform font-inter">
                  <span className="bg-gammalex-purple/80 text-white rounded-full p-4 mb-2 shadow-lg flex items-center justify-center">
                    <Shield size={24} strokeWidth={2} color="currentColor" />
                  </span>
                  <span className="font-bold text-base sm:text-lg text-white mt-1 font-inter">Trust</span>
                </div>
                {/* Accountability */}
                <div className="flex flex-col items-center bg-white/5 glass-dark border border-gammalex-orange/40 rounded-2xl px-6 py-6 shadow-xl neon-glow hover:scale-105 transition-transform font-inter">
                  <span className="bg-gammalex-orange/80 text-white rounded-full p-4 mb-2 shadow-lg flex items-center justify-center">
                    <CheckCircle size={24} strokeWidth={2} color="currentColor" />
                  </span>
                  <span className="font-bold text-base sm:text-lg text-white mt-1 font-inter">Accountability</span>
                </div>
                {/* Empowerment */}
                <div className="flex flex-col items-center bg-white/5 glass-dark border border-gammalex-orange/40 rounded-2xl px-6 py-6 shadow-xl neon-glow hover:scale-105 transition-transform font-inter">
                  <span className="bg-gammalex-orange/80 text-white rounded-full p-4 mb-2 shadow-lg flex items-center justify-center">
                    <UserCheck size={24} strokeWidth={2} color="currentColor" />
                  </span>
                  <span className="font-bold text-base sm:text-lg text-white mt-1 font-inter">Empowerment</span>
                </div>
              </div>
            </div>
          </section>

            {/* GammaLex Visual Identity - Open Source Section */}
            <div className="text-center mb-16">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-inter font-normal text-white leading-tight mb-6 px-4">
                Built on open source and committed to <span className="gradient-text">transparency</span>
              </h3>
              <p className="text-lg sm:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                Our foundation is built on community-driven data, transparent processes, and open innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Column 1: Open Source Foundation */}
            <motion.div 
              className="text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl lg:text-3xl font-normal text-white mb-4">
                POWERED BY OPEN SOURCE<br />DATA FOUNDATION
              </h4>
              <p className="text-xl text-white/80 leading-relaxed">
                Built on open, community-driven data and models. Transparency, reproducibility, and collective progress are core values.
              </p>
            </motion.div>

            {/* Column 2: Multi-Domain Integration */}
            <motion.div 
              className="text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl lg:text-3xl font-normal text-white mb-4">
                CLINICAL-LEGAL-PAYER<br />INTELLIGENCE INTEGRATION
              </h4>
              <p className="text-xl text-white/80 leading-relaxed">
                We integrate open clinical, legal, and insurance data, fostering a shared ecosystem for better, more holistic decision-making.
              </p>
            </motion.div>

            {/* Column 3: Policy Adaptation */}
            <motion.div 
              className="text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl lg:text-3xl font-normal text-white mb-4">
                ENTERPRISE-GRADE PAYER<br />POLICY ADAPTATION
              </h4>
              <p className="text-xl text-white/80 leading-relaxed">
                GammaLex adapts to payer policies using open source data and extensible frameworks—leveraging transparency and interoperability. Every recommendation are explainable with clear links to policy sources.
              </p>
            </motion.div>

          </div>

          {/* Anchor: Impact */}
          <div id="impact" className="absolute -top-32" aria-hidden="true" />
          
          {/* Technical Innovation Section */}
          <section id="technical-innovation" className="mt-32 mb-16">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-inter font-normal text-white leading-tight mb-6">
                Technical Innovation: <span className="gradient-text">Delivering Strategic Value</span>
              </h2>
              <p className="text-lg sm:text-xl text-white/90 font-inter max-w-4xl mx-auto leading-relaxed">
                GammaLex applies next-generation AI to solve one of healthcare's most persistent obstacles—high-stakes claim denials—using highly specialized, vertical AI models built for the unique challenges of radiology and other complex specialties.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Demonstrated ROI */}
              <motion.div 
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative p-8 border-l-4 border-gammalex-purple bg-gradient-to-r from-gammalex-purple/10 to-transparent">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-gammalex-purple rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      💰
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl lg:text-2xl font-bold text-white mb-4">Demonstrated ROI</h4>
                      <p className="text-lg text-white/80 leading-relaxed">
                        Our AI-driven denial prediction slashes preventable denials, accelerates payment cycles, and unlocks substantial recurring revenue improvements for providers, directly impacting the bottom line and highlighting clear scalability across multiple specialties.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Industry Differentiation */}
              <motion.div 
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative p-8 border-l-4 border-gammalex-purple bg-gradient-to-r from-gammalex-purple/10 to-transparent">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-gammalex-purple rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      🏆
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl lg:text-2xl font-bold text-white mb-4">Industry Differentiation</h4>
                      <p className="text-lg text-white/80 leading-relaxed">
                        Unlike generic automation vendors, GammaLex's proprietary algorithms are continuously trained on specialty-specific billing, payer, and compliance data, creating robust barriers to entry and sustainable competitive advantage.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Scalable Platform */}
              <motion.div 
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative p-8 border-l-4 border-gammalex-orange bg-gradient-to-r from-gammalex-orange/10 to-transparent">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-gammalex-orange rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      🚀
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl lg:text-2xl font-bold text-white mb-4">Scalable Platform</h4>
                      <p className="text-lg text-white/80 leading-relaxed">
                        The platform's architecture is designed for rapid adaptation to new specialties and evolving payer requirements, widening total addressable market and supporting future expansion.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* De-risked Adoption */}
              <motion.div 
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative p-8 border-l-4 border-gammalex-orange bg-gradient-to-r from-gammalex-orange/10 to-transparent">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-gammalex-orange rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      ⚡
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl lg:text-2xl font-bold text-white mb-4">De-risked Adoption</h4>
                      <p className="text-lg text-white/80 leading-relaxed">
                        Seamless integration with providers' existing EHR and billing systems reduces onboarding friction, accelerates time-to-value, and positions GammaLex as a plug-and-play growth lever for health systems managing large claim volumes.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Compliance Centricity - Full Width */}
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <div className="relative p-8 border-l-4 border-gammalex-purple bg-gradient-to-r from-gammalex-purple/10 to-transparent">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gammalex-purple rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    🛡️
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl lg:text-2xl font-bold text-white mb-4">Compliance Centricity</h4>
                    <p className="text-lg text-white/80 leading-relaxed">
                      Real-time updates to payer policy and regulatory rules minimize risk, ensure audit readiness, and reinforce trust with customers in a scrutinized regulatory environment.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* What Sets GammaLex Apart Section */}
          <div id="what-sets-apart" className="mt-20 mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-inter font-normal text-white leading-tight mb-6">
                What Sets <span className="gradient-text">GammaLex Apart</span>
              </h3>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-[1.4] sm:leading-[1.5] px-4 sm:px-0">
                GammaLex fills the gaps that generic automation and traditional AI cannot address in healthcare risk management.
              </p>
        </div>

            {/* Interactive Feature Flow */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
              {/* Floating Elements Background */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                  className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-gammalex-purple/20 to-transparent rounded-full blur-xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-gammalex-orange/20 to-transparent rounded-full blur-lg"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                  className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-gammalex-purple-light/15 to-transparent rounded-full blur-2xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                />
              </div>

              {/* Main Interactive Grid */}
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 py-12">
                
                {/* Dynamic Policy Intelligence - Organic Shape */}
                <motion.div 
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="relative overflow-hidden">
                    {/* Organic Background Shape */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gammalex-purple/10 via-gammalex-purple/5 to-transparent rounded-[3rem] blur-sm group-hover:blur-0 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-br from-gammalex-purple/5 to-transparent rounded-[3rem] group-hover:from-gammalex-purple/15 transition-all duration-500" />
                    
                    {/* Content Container */}
                    <div className="relative p-8 lg:p-10 rounded-[3rem] border border-white/10 backdrop-blur-sm group-hover:border-gammalex-purple/30 transition-all duration-500">
                      <div className="flex items-start gap-6 mb-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gammalex-purple/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500" />
                          <div className="relative p-4 bg-gammalex-purple/10 rounded-2xl border border-gammalex-purple/30 group-hover:bg-gammalex-purple/20 transition-all duration-500">
                            <Brain className="w-12 h-12 lg:w-16 lg:h-16 text-gammalex-purple neon-text group-hover:scale-110 transition-transform duration-300" />
        </div>
    </div>
                        <div className="flex-1">
                          <h4 className="text-xl lg:text-2xl font-inter gradient-text mb-2">Dynamic Policy Intelligence</h4>
                          <div className="w-16 h-1 bg-gradient-to-r from-gammalex-purple to-transparent rounded-full" />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <motion.div 
                          className="flex items-start gap-4 group/item"
                          whileHover={{ x: 8 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="w-2 h-2 bg-gammalex-purple rounded-full mt-3 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                          <div>
                            <h5 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover/item:text-gammalex-purple transition-colors duration-300">Instant Policy Decoding</h5>
                            <p className="text-lg sm:text-xl text-white/80">Adapts to evolving payer rules in real time.</p>
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          className="flex items-start gap-4 group/item"
                          whileHover={{ x: 8 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <div className="w-2 h-2 bg-gammalex-purple rounded-full mt-3 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                          <div>
                            <h5 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover/item:text-gammalex-purple transition-colors duration-300">Denial Prevention</h5>
                            <p className="text-lg sm:text-xl text-white/80">Stops denials before they happen.</p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Contextual Interpretation - Flowing Design */}
                <motion.div 
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="relative overflow-hidden">
                    {/* Flowing Background */}
                    <div className="absolute inset-0 bg-gradient-to-bl from-gammalex-purple-light/10 via-gammalex-purple/5 to-transparent rounded-[3rem] blur-sm group-hover:blur-0 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-bl from-gammalex-purple/5 to-transparent rounded-[3rem] group-hover:from-gammalex-purple/15 transition-all duration-500" />
                    
                    <div className="relative p-8 lg:p-10 rounded-[3rem] border border-white/10 backdrop-blur-sm group-hover:border-gammalex-purple-light/30 transition-all duration-500">
                      <div className="flex items-start gap-6 mb-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gammalex-purple-light/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500" />
                          <div className="relative p-4 bg-gammalex-purple-light/10 rounded-2xl border border-gammalex-purple-light/30 group-hover:bg-gammalex-purple-light/20 transition-all duration-500">
                            <Scale className="w-12 h-12 lg:w-16 lg:h-16 text-gammalex-purple-light neon-text group-hover:scale-110 transition-transform duration-300" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl lg:text-2xl font-inter gradient-text mb-2">Contextual Interpretation</h4>
                          <div className="w-16 h-1 bg-gradient-to-r from-gammalex-purple-light to-transparent rounded-full" />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
        <motion.div
                          className="flex items-start gap-4 group/item"
                          whileHover={{ x: 8 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="w-2 h-2 bg-gammalex-purple-light rounded-full mt-3 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                          <div>
                            <h5 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover/item:text-gammalex-purple-light transition-colors duration-300">Gray Area Navigation</h5>
                            <p className="text-lg sm:text-xl text-white/80">Interprets complex requirements bots miss.</p>
                          </div>
        </motion.div>
                        
                        <motion.div 
                          className="flex items-start gap-4 group/item"
                          whileHover={{ x: 8 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <div className="w-2 h-2 bg-gammalex-purple-light rounded-full mt-3 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                          <div>
                            <h5 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover/item:text-gammalex-purple-light transition-colors duration-300">Risk Detection</h5>
                            <p className="text-lg sm:text-xl text-white/80">Flags issues before they escalate.</p>
        </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Human Expertise Enhanced - Wave Design */}
        <motion.div
                  className="relative group"
          initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="relative overflow-hidden">
                    {/* Wave Background */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-gammalex-purple/10 via-gammalex-purple/5 to-transparent rounded-[3rem] blur-sm group-hover:blur-0 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-gammalex-purple/5 to-transparent rounded-[3rem] group-hover:from-gammalex-purple/15 transition-all duration-500" />
                    
                    <div className="relative p-8 lg:p-10 rounded-[3rem] border border-white/10 backdrop-blur-sm group-hover:border-gammalex-purple/30 transition-all duration-500">
                      <div className="flex items-start gap-6 mb-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gammalex-purple/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500" />
                          <div className="relative p-4 bg-gammalex-purple/10 rounded-2xl border border-gammalex-purple/30 group-hover:bg-gammalex-purple/20 transition-all duration-500">
                            <UserCheck className="w-12 h-12 lg:w-16 lg:h-16 text-gammalex-purple neon-text group-hover:scale-110 transition-transform duration-300" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl lg:text-2xl font-inter gradient-text mb-2">Human Expertise, Enhanced</h4>
                          <div className="w-16 h-1 bg-gradient-to-r from-gammalex-purple to-transparent rounded-full" />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <motion.div 
                          className="flex items-start gap-4 group/item"
                          whileHover={{ x: 8 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="w-2 h-2 bg-gammalex-purple rounded-full mt-3 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                          <div>
                            <h5 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover/item:text-gammalex-purple transition-colors duration-300">Expert Judgment</h5>
                            <p className="text-lg sm:text-xl text-white/80">Empowers, not replaces, human decision-making.</p>
                          </div>
        </motion.div>
                        
                        <motion.div 
                          className="flex items-start gap-4 group/item"
                          whileHover={{ x: 8 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <div className="w-2 h-2 bg-gammalex-purple rounded-full mt-3 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                          <div>
                            <h5 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover/item:text-gammalex-purple transition-colors duration-300">Data-Driven Insights</h5>
                            <p className="text-lg sm:text-xl text-white/80">Surfaces what matters, fast.</p>
      </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Holistic Decision Support - Radial Design */}
                <motion.div 
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="relative overflow-hidden">
                    {/* Radial Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gammalex-purple-light/10 via-gammalex-purple/5 to-transparent rounded-[3rem] blur-sm group-hover:blur-0 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-br from-gammalex-purple/5 to-transparent rounded-[3rem] group-hover:from-gammalex-purple/15 transition-all duration-500" />
                    
                    <div className="relative p-8 lg:p-10 rounded-[3rem] border border-white/10 backdrop-blur-sm group-hover:border-gammalex-purple-light/30 transition-all duration-500">
                      <div className="flex items-start gap-6 mb-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gammalex-purple-light/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500" />
                          <div className="relative p-4 bg-gammalex-purple-light/10 rounded-2xl border border-gammalex-purple-light/30 group-hover:bg-gammalex-purple-light/20 transition-all duration-500">
                            <Target className="w-12 h-12 lg:w-16 lg:h-16 text-gammalex-purple-light neon-text group-hover:scale-110 transition-transform duration-300" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl lg:text-2xl font-inter gradient-text mb-2">Holistic Decision Support</h4>
                          <div className="w-16 h-1 bg-gradient-to-r from-gammalex-purple-light to-transparent rounded-full" />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <motion.div 
                          className="flex items-start gap-4 group/item"
                          whileHover={{ x: 8 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="w-2 h-2 bg-gammalex-purple-light rounded-full mt-3 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
          <div>
                            <h5 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover/item:text-gammalex-purple-light transition-colors duration-300">Triple Integration</h5>
                            <p className="text-lg sm:text-xl text-white/80">Compliance, clinical, and legal at the point of care.</p>
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          className="flex items-start gap-4 group/item"
                          whileHover={{ x: 8 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <div className="w-2 h-2 bg-gammalex-purple-light rounded-full mt-3 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                          <div>
                            <h5 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover/item:text-gammalex-purple-light transition-colors duration-300">Seamless Workflow</h5>
                            <p className="text-lg sm:text-xl text-white/80">Real-time support without disruption.</p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Expert Quote Section */}
            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="max-w-5xl mx-auto p-8 lg:p-12 rounded-3xl border border-gammalex-purple/30 bg-gradient-to-br from-gammalex-purple/10 to-gammalex-purple/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gammalex-purple to-gammalex-orange"></div>
                <div className="relative">
                  <blockquote className="text-xl lg:text-2xl text-white/90 font-inter leading-relaxed mb-6 italic">
                    "The majority of the proposed AI solutions for health policy aim to improve decision-making rather than replace experts."
                  </blockquote>

                  <div className="pt-6 border-t border-gammalex-purple/30">
                    <p className="text-xl lg:text-2xl font-bold text-white font-inter">
                      GammaLex goes beyond automation—delivering expert-grade support that generic bots cannot match.
                    </p>
          </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Who We Empower Section */}
      <section id="who-we-empower" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 font-inter relative">
        {/* Futuristic background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-purple-900/15 to-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.12),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-white text-center leading-tight mb-8">
              Who We <span className="gradient-text">Empower</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 text-center max-w-4xl mx-auto leading-relaxed">
              GammaLex's vertical intelligence model serves frontline legal and healthcare professionals—transforming how care is defended, denials are overturned, and compliance is achieved.
            </p>
          </motion.div>

          {/* Audience Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Plaintiff-side malpractice attorneys */}
            <motion.div 
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/10 backdrop-blur-sm p-8 lg:p-10 hover:border-gammalex-purple/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-gammalex-purple/5 to-transparent rounded-3xl group-hover:from-gammalex-purple/15 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gammalex-purple to-gammalex-purple-light flex items-center justify-center shadow-xl">
                      <Scale className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Plaintiff-Side Malpractice Attorneys</h3>
                  </div>
                  <p className="text-lg text-white/80 mb-6 leading-relaxed">
                    <span className="text-gammalex-orange font-semibold">The Challenge:</span> Proving medical necessity and standard of care violations requires deep clinical-legal expertise that's expensive and time-consuming to develop.
                  </p>
                  <p className="text-lg text-white/90 leading-relaxed">
                    <span className="text-gammalex-purple font-semibold">GammaLex Solution:</span> Instant access to clinical-legal intelligence that identifies viable cases, strengthens arguments, and predicts outcomes with source-backed accuracy.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hospital legal, compliance, and revenue cycle teams */}
            <motion.div 
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/10 backdrop-blur-sm p-8 lg:p-10 hover:border-gammalex-orange/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-gammalex-orange/5 to-transparent rounded-3xl group-hover:from-gammalex-orange/15 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gammalex-orange to-gammalex-orange-light flex items-center justify-center shadow-xl">
                      <Building2 className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Hospital Legal & Revenue Teams</h3>
                  </div>
                  <p className="text-lg text-white/80 mb-6 leading-relaxed">
                    <span className="text-gammalex-orange font-semibold">The Challenge:</span> Balancing patient care with financial viability while navigating complex payer policies and avoiding compliance violations.
                  </p>
                  <p className="text-lg text-white/90 leading-relaxed">
                    <span className="text-gammalex-purple font-semibold">GammaLex Solution:</span> Proactive risk detection and bulletproof documentation that prevents denials before they happen, protecting both care and revenue.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Independent clinicians and small practices */}
            <motion.div 
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/10 backdrop-blur-sm p-8 lg:p-10 hover:border-gammalex-purple/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-gammalex-purple/5 to-transparent rounded-3xl group-hover:from-gammalex-purple/15 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gammalex-purple to-gammalex-purple-light flex items-center justify-center shadow-xl">
                      <User className="text-white" size={32} />
          </div>
                    <h3 className="text-2xl font-bold text-white">Independent Clinicians</h3>
        </div>
                  <p className="text-lg text-white/80 mb-6 leading-relaxed">
                    <span className="text-gammalex-orange font-semibold">The Challenge:</span> Limited resources to fight denials while maintaining quality care, often forced to accept coverage decisions that impact patient outcomes.
                  </p>
                  <p className="text-lg text-white/90 leading-relaxed">
                    <span className="text-gammalex-purple font-semibold">GammaLex Solution:</span> Enterprise-grade clinical-legal intelligence that levels the playing field, ensuring small practices can defend care as effectively as large systems.
                  </p>
      </div>
              </div>
            </motion.div>

            {/* Healthcare payers and TPAs */}
            <motion.div 
              className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
              <div className="relative overflow-hidden rounded-3xl border border-white/10 backdrop-blur-sm p-8 lg:p-10 hover:border-gammalex-orange/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-gammalex-orange/5 to-transparent rounded-3xl group-hover:from-gammalex-orange/15 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gammalex-orange to-gammalex-orange-light flex items-center justify-center shadow-xl">
                      <Shield className="text-white" size={32} />
            </div>
                    <h3 className="text-2xl font-bold text-white">Healthcare Payers & TPAs</h3>
                  </div>
                  <p className="text-lg text-white/80 mb-6 leading-relaxed">
                    <span className="text-gammalex-orange font-semibold">The Challenge:</span> Balancing cost containment with quality care while maintaining compliance and avoiding legal exposure from improper denials.
                  </p>
                  <p className="text-lg text-white/90 leading-relaxed">
                    <span className="text-gammalex-purple font-semibold">GammaLex Solution:</span> AI-powered policy interpretation that ensures consistent, defensible coverage decisions while reducing administrative burden and legal risk.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Public interest legal organizations */}
                <motion.div
            className="group relative mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 backdrop-blur-sm p-8 lg:p-12 hover:border-gammalex-purple/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-gammalex-purple/5 to-transparent rounded-3xl group-hover:from-gammalex-purple/15 transition-all duration-500" />
                  <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gammalex-purple to-gammalex-purple-light flex items-center justify-center shadow-xl">
                    <HeartHandshake className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Public Interest Legal Organizations</h3>
                </div>
                <p className="text-lg text-white/80 mb-6 leading-relaxed">
                  <span className="text-gammalex-orange font-semibold">The Challenge:</span> Limited resources to fight systemic healthcare access issues while ensuring vulnerable populations receive the care they need and deserve.
                </p>
                <p className="text-lg text-white/90 leading-relaxed">
                  <span className="text-gammalex-purple font-semibold">GammaLex Solution:</span> Access to clinical-legal intelligence that amplifies advocacy efforts, strengthens cases, and ensures equitable access to care for all populations.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Unifying Mission Statement */}
                      <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="max-w-5xl mx-auto p-8 lg:p-12 rounded-3xl border border-gammalex-purple/30 bg-gradient-to-br from-gammalex-purple/10 to-gammalex-purple/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gammalex-purple to-gammalex-orange"></div>
              <div className="relative">
                <p className="text-xl lg:text-2xl text-white/90 font-inter leading-relaxed mb-6">
                  Unlike horizontal GenAI that treats healthcare like any other domain, GammaLex understands <span className="text-gammalex-orange font-semibold">medical necessity, precedent, and payer behavior</span> in tandem—delivering insights that generic AI cannot match.
                </p>
                <p className="text-2xl lg:text-3xl font-bold text-white font-inter">
                  Our mission: Make legally-defensible care accessible and scalable for every healthcare professional.
                </p>
              </div>
            </div>
                      </motion.div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

    {/* Vertical AI Platform Section */}
    <section id="forge-ai-frontier" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 font-inter relative">
        {/* Futuristic background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-purple-900/10 to-black/30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.08),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-center leading-tight mb-12 sm:mb-16 px-2">
          The <span className="multi-gradient-text">Vertical AI</span> built to defend
        </h2>

        {/* Technical Narrative Flow */}
        <div className="w-full space-y-20">
          {/* Unified AI Workflow - Step 1: Policy Intelligence */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">Step 1: Policy Intelligence</h3>
              <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
                Real-time monitoring and interpretation of payer policies across all networks
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="flex-1">
                <div className="inline-flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gammalex-orange to-gammalex-purple flex items-center justify-center shadow-2xl">
                    <BrainCircuit className="text-white" size={40} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Clinical-Legal Foundation Models</h3>
                </div>
                <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-6">
                  GammaLex's unified AI workflow starts with real-time policy monitoring and interpretation across all major payer networks.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gammalex-orange rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-white/80">Continuous monitoring of CMS, commercial payers, and specialty guidelines</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gammalex-orange rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-white/80">Predictive analytics for policy changes and their impact on claim approval</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gammalex-orange rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-white/80">Multi-modal understanding of medical records, legal documents, and policy language</p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                {/* Policy Intelligence Mockup - Larger */}
                <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <img
                        src="/gammalexlogo-transparent.png"
                        alt="GammaLex Logo"
                        style={{ filter: 'brightness(0) invert(1)' }}
                        className="h-12 w-auto"
                      />
                      <h4 className="text-2xl font-bold text-white">Policy Coverage Intelligence Engine</h4>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-white/60">Active</span>
                    </div>
                  </div>
                  
                  {/* Configuration Panel */}
                  <div className="space-y-6">
                    {/* Base Model Selection */}
                    <div>
                      <label className="block text-lg font-medium text-white/80 mb-3">Base Model for Optimization</label>
                      <div className="bg-white/10 border border-white/20 rounded-lg p-4">
                        <span className="text-white text-lg">Clinical-Legal Foundation Model v2.1</span>
                      </div>
                      <p className="text-xs text-white/60 mt-2">Your optimized model will be saved as a new version</p>
                    </div>

                    {/* Specialty Configuration */}
                    <div>
                      <label className="block text-lg font-medium text-white/80 mb-3">Specialty Focus</label>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gammalex-orange/20 border border-gammalex-orange/30 rounded-lg p-4">
                          <span className="text-gammalex-orange text-sm font-semibold">Radiology</span>
                        </div>
                        <div className="bg-white/10 border border-white/20 rounded-lg p-4">
                          <span className="text-white text-sm">Oncology</span>
                        </div>
                        <div className="bg-white/10 border border-white/20 rounded-lg p-4">
                          <span className="text-white text-sm">Cardiology</span>
                        </div>
                        <div className="bg-white/10 border border-white/20 rounded-lg p-4">
                          <span className="text-white text-sm">Transplant</span>
                        </div>
                      </div>
                    </div>

                    {/* Methodology */}
                    <div>
                      <label className="block text-lg font-medium text-white/80 mb-3">Methodology</label>
                      <div className="bg-white/10 border border-white/20 rounded-lg p-4">
                        <span className="text-white text-lg">Multi-Domain Policy Decoder</span>
                      </div>
                    </div>

                    {/* System Message */}
                    <div>
                      <label className="block text-lg font-medium text-white/80 mb-3">Ask Gamma</label>
                      <div className="bg-white/10 border border-white/20 rounded-lg p-4 h-24 overflow-y-auto">
                        <span className="text-white text-sm">
                          You are an expert in radiology policy interpretation. Given clinical scenarios and payer policies, generate accurate coverage predictions with source-backed reasoning. Your goal is to maximize claim approval rates while ensuring compliance with regulatory requirements.
                        </span>
                      </div>
                    </div>

                    {/* Dataset Configuration */}
                    <div>
                      <label className="block text-lg font-medium text-white/80 mb-3">Dataset Fields</label>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <span className="text-xs text-white/60">Evaluation Labels</span>
                          <div className="bg-white/10 border border-white/20 rounded-lg p-3 mt-1">
                            <span className="text-white text-sm">policy.coverage.label</span>
                          </div>
                        </div>
                        <div>
                          <span className="text-xs text-white/60">Explanations</span>
                          <div className="bg-white/10 border border-white/20 rounded-lg p-3 mt-1">
                            <span className="text-white text-sm">policy.coverage.reasoning</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Example Data */}
                    <div className="border-t border-white/20 pt-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-lg font-medium text-white/80">Example ID</span>
                        <button className="text-sm text-gammalex-orange hover:text-gammalex-orange-light">Choose Example</button>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-3">
                        <div>
                          <span className="text-xs text-white/60">policy.coverage.label:</span>
                          <div className="text-white text-sm mt-1">approved</div>
                        </div>
                        <div>
                          <span className="text-xs text-white/60">policy.coverage.reasoning:</span>
                          <div className="text-white text-sm mt-1">CT chest with contrast approved for suspected pulmonary embolism. Meets ACR appropriateness criteria and CMS medical necessity guidelines for radiology imaging.</div>
                        </div>
                      </div>
                    </div>

                    {/* Sources */}
                    <div className="border-t border-white/20 pt-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-lg font-medium text-white/80">Sources</span>
                        <button className="text-sm text-gammalex-orange hover:text-gammalex-orange-light">View All</button>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-gammalex-orange rounded-full"></div>
                          <span className="text-gammalex-orange font-semibold text-sm">ACR Appropriateness Criteria® 2023</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span className="text-white text-sm">CMS Manual System §100-02</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span className="text-white text-sm">Medicare Claims Processing Manual</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Unified AI Workflow - Step 2: Real-Time Payer Policy Updates & Risk Scoring */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">Step 2: Real-Time Payer Policy Updates & Risk Scoring</h3>
              <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
                Stay ahead with real-time updates from payers and AI-powered denial risk scoring. GammaLex highlights potential problems before claims are submitted, enabling proactive corrections that reduce costly denials and speed reimbursements.
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
              <div className="flex-1">
                <div className="inline-flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gammalex-purple to-gammalex-orange flex items-center justify-center shadow-2xl">
                    <Globe className="text-white" size={40} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Live Policy Intelligence</h3>
                </div>
                <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-6">
                  Continuous monitoring of payer policy changes with instant denial risk assessment for every claim.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gammalex-purple rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-white/80">Real-time policy change detection from all major payers</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gammalex-purple rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-white/80">Instant denial risk scoring for every radiology claim</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gammalex-purple rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-white/80">Proactive alerts and actionable correction recommendations</p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                {/* Real-Time Payer & Policy Updates Mockup */}
                <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <img
                        src="/gammalexlogo-transparent.png"
                        alt="GammaLex Logo"
                        style={{ filter: 'brightness(0) invert(1)' }}
                        className="h-12 w-auto"
                      />
                      <h4 className="text-2xl font-bold text-white">Real-Time Policy Updates</h4>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-white/60">Live Feed</span>
                    </div>
                  </div>
                  
                  {/* Live Policy Updates Feed */}
                  <div className="mb-8">
                    <label className="block text-lg font-medium text-white/80 mb-3">Live Policy Updates</label>
                    <div className="space-y-3 max-h-48 overflow-y-auto">
                      <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className="text-red-400" size={16} />
                          <span className="text-red-400 text-sm font-medium">CMS Update - 2 min ago</span>
                        </div>
                        <p className="text-white text-sm">Medicare LCD L34876: New medical necessity criteria for CT chest with contrast. Claims may require additional documentation.</p>
                      </div>
                      <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Info className="text-yellow-400" size={16} />
                          <span className="text-yellow-400 text-sm font-medium">Blue Cross Update - 15 min ago</span>
                        </div>
                        <p className="text-white text-sm">Updated radiology imaging guidelines: Prior authorization required for MRI brain without contrast.</p>
                      </div>
                      <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Info className="text-blue-400" size={16} />
                          <span className="text-blue-400 text-sm font-medium">ACR Guidelines - 1 hour ago</span>
                        </div>
                        <p className="text-white text-sm">Updated appropriateness criteria for chest imaging. New scoring system for pulmonary embolism assessment.</p>
                      </div>
                    </div>
                  </div>

                  {/* Radiology Claims Risk Assessment */}
                  <div>
                    <label className="block text-lg font-medium text-white/80 mb-3">Radiology Claims - Denial Risk Assessment</label>
                    <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                      <div className="grid grid-cols-12 gap-2 p-3 bg-white/10 text-xs font-medium text-white/80 border-b border-white/10">
                        <div className="col-span-2">Claim ID</div>
                        <div className="col-span-3">Procedure</div>
                        <div className="col-span-2">Risk Score</div>
                        <div className="col-span-2">Status</div>
                        <div className="col-span-3">Action</div>
                      </div>
                      <div className="space-y-1">
                        <div className="grid grid-cols-12 gap-2 p-3 items-center hover:bg-white/5">
                          <div className="col-span-2 text-white text-sm">#12345</div>
                          <div className="col-span-3 text-white text-sm">CT Chest w/ Contrast</div>
                          <div className="col-span-2">
                            <div className="flex items-center gap-2">
                              <div className="w-16 h-2 bg-red-500 rounded-full">
                                <div className="w-12 h-2 bg-red-400 rounded-full"></div>
                              </div>
                              <span className="text-red-400 text-sm font-bold">85%</span>
                            </div>
                          </div>
                          <div className="col-span-2">
                            <span className="bg-red-500/20 text-red-400 text-xs px-2 py-1 rounded">High Risk</span>
                          </div>
                          <div className="col-span-3">
                            <button className="text-xs bg-red-500 text-white px-2 py-1 rounded">Review</button>
                          </div>
                        </div>
                        <div className="grid grid-cols-12 gap-2 p-3 items-center hover:bg-white/5">
                          <div className="col-span-2 text-white text-sm">#12346</div>
                          <div className="col-span-3 text-white text-sm">MRI Brain w/o Contrast</div>
                          <div className="col-span-2">
                            <div className="flex items-center gap-2">
                              <div className="w-16 h-2 bg-yellow-500 rounded-full">
                                <div className="w-8 h-2 bg-yellow-400 rounded-full"></div>
                              </div>
                              <span className="text-yellow-400 text-sm font-bold">65%</span>
                            </div>
                          </div>
                          <div className="col-span-2">
                            <span className="bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded">Medium Risk</span>
                          </div>
                          <div className="col-span-3">
                            <button className="text-xs bg-yellow-500 text-white px-2 py-1 rounded">Monitor</button>
                          </div>
                        </div>
                        <div className="grid grid-cols-12 gap-2 p-3 items-center hover:bg-white/5">
                          <div className="col-span-2 text-white text-sm">#12347</div>
                          <div className="col-span-3 text-white text-sm">X-Ray Chest 2 Views</div>
                          <div className="col-span-2">
                            <div className="flex items-center gap-2">
                              <div className="w-16 h-2 bg-green-500 rounded-full">
                                <div className="w-4 h-2 bg-green-400 rounded-full"></div>
                              </div>
                              <span className="text-green-400 text-sm font-bold">25%</span>
                            </div>
                          </div>
                          <div className="col-span-2">
                            <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded">Low Risk</span>
                          </div>
                          <div className="col-span-3">
                            <button className="text-xs bg-green-500 text-white px-2 py-1 rounded">Approve</button>
                          </div>
                        </div>
                        <div className="grid grid-cols-12 gap-2 p-3 items-center hover:bg-white/5">
                          <div className="col-span-2 text-white text-sm">#12348</div>
                          <div className="col-span-3 text-white text-sm">CT Abdomen w/ Contrast</div>
                          <div className="col-span-2">
                            <div className="flex items-center gap-2">
                              <div className="w-16 h-2 bg-red-500 rounded-full">
                                <div className="w-14 h-2 bg-red-400 rounded-full"></div>
                              </div>
                              <span className="text-red-400 text-sm font-bold">92%</span>
                            </div>
                          </div>
                          <div className="col-span-2">
                            <span className="bg-red-500/20 text-red-400 text-xs px-2 py-1 rounded">Critical</span>
                          </div>
                          <div className="col-span-3">
                            <button className="text-xs bg-red-500 text-white px-2 py-1 rounded">Urgent</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Risk Summary */}
                  <div className="mt-6 border-t border-white/20 pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-medium text-white/80">Risk Summary</span>
                      <button className="text-sm text-gammalex-orange hover:text-gammalex-orange-light">View All Claims</button>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-3 text-center">
                        <span className="text-red-400 text-xs font-medium">High Risk</span>
                        <div className="text-white text-lg font-bold">2 Claims</div>
                      </div>
                      <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-3 text-center">
                        <span className="text-yellow-400 text-xs font-medium">Medium Risk</span>
                        <div className="text-white text-lg font-bold">1 Claim</div>
                      </div>
                      <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3 text-center">
                        <span className="text-green-400 text-xs font-medium">Low Risk</span>
                        <div className="text-white text-lg font-bold">1 Claim</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Unified AI Workflow - Step 3: Risk Intelligence */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">Step 3: Risk Intelligence</h3>
              <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
                Proactive denial prediction and legal exposure detection based on policy analysis
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
              <div className="flex-1">
                <div className="inline-flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gammalex-purple to-gammalex-orange flex items-center justify-center shadow-2xl">
                    <UserRound className="text-white" size={40} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Risk Intelligence Engine</h3>
                </div>
                <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-6">
                  Using policy intelligence data, GammaLex predicts denial risks and legal exposure before claims are submitted.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gammalex-purple rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-white/80">Real-time denial probability scoring based on current payer policies</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gammalex-purple rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-white/80">Legal exposure detection and compliance risk assessment</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gammalex-purple rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-white/80">Automated alerts for high-risk claims requiring immediate attention</p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                {/* Risk Intelligence Mockup - Larger */}
                <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <img
                        src="/gammalexlogo-transparent.png"
                        alt="GammaLex Logo"
                        style={{ filter: 'brightness(0) invert(1)' }}
                        className="h-12 w-auto"
                      />
                      <h4 className="text-2xl font-bold text-white">Risk Intelligence Dashboard</h4>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-white/60">Alert Detected</span>
                    </div>
                  </div>
                  
                  {/* Risk Assessment */}
                  <div className="mb-6">
                    <label className="block text-lg font-medium text-white/80 mb-3">Risk Assessment Model</label>
                    <div className="bg-white/10 border border-white/20 rounded-lg p-4">
                      <span className="text-white text-lg">Denial Risk Predictor v1.8</span>
                    </div>
                  </div>

                  {/* Specialty Risk Profiles */}
                  <div className="mb-6">
                    <label className="block text-lg font-medium text-white/80 mb-3">Specialty Risk Profiles</label>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
                        <span className="text-red-400 text-sm font-semibold">Radiology</span>
                        <div className="text-white text-lg font-bold">High Risk</div>
                        <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{width: '85%'}}></div>
                        </div>
                      </div>
                      <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
                        <span className="text-yellow-400 text-sm font-semibold">Oncology</span>
                        <div className="text-white text-lg font-bold">Medium Risk</div>
                        <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{width: '65%'}}></div>
                        </div>
                      </div>
                      <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                        <span className="text-green-400 text-sm font-semibold">Cardiology</span>
                        <div className="text-white text-lg font-bold">Low Risk</div>
                        <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '25%'}}></div>
                        </div>
                      </div>
                      <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
                        <span className="text-blue-400 text-sm font-semibold">Transplant</span>
                        <div className="text-white text-lg font-bold">Compliance</div>
                        <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '45%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Current Alert */}
                  <div className="mb-6">
                    <label className="block text-lg font-medium text-white/80 mb-3">Active Alerts</label>
                    <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <AlertTriangle className="text-red-400" size={20} />
                        <span className="text-red-400 font-semibold text-lg">High Risk Alert</span>
                      </div>
                      <p className="text-white text-base mb-3">
                        Radiology claim #12345 shows 85% denial probability. Missing clinical documentation for medical necessity. Legal exposure risk: HIGH.
                      </p>
                      <div className="flex gap-3">
                        <button className="text-sm bg-red-500 text-white px-4 py-2 rounded-lg">Review</button>
                        <button className="text-sm bg-white/10 text-white px-4 py-2 rounded-lg">Dismiss</button>
                      </div>
                    </div>
                  </div>

                  {/* Risk Sources */}
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-medium text-white/80">Risk Sources</span>
                      <button className="text-sm text-gammalex-orange hover:text-gammalex-orange-light">View All</button>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-gammalex-orange rounded-full"></div>
                        <span className="text-gammalex-orange font-semibold text-sm">Radiology denial pattern in 47 cases (2023)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="text-white text-sm">CMS LCD L34876 - Medical Necessity</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-gammalex-orange rounded-full"></div>
                        <span className="text-gammalex-orange font-semibold text-sm">ACR Guidelines - Documentation Requirements</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Unified AI Workflow - Step 4: Legal Intelligence */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">Step 4: Legal Intelligence</h3>
              <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
                Proactive legal compliance and ethical framework ensuring defensible decisions
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="flex-1">
                <div className="inline-flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gammalex-orange to-gammalex-purple flex items-center justify-center shadow-2xl">
                    <Scale className="text-white" size={40} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Legal Intelligence Engine</h3>
                </div>
                <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-6">
                  Building on policy and risk intelligence, GammaLex ensures all decisions are legally defensible and ethically sound.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gammalex-orange rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-white/80">Real-time regulatory compliance monitoring with automated audit trails</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gammalex-orange rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-white/80">Legal precedent analysis and case law integration for defensible decisions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gammalex-orange rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-white/80">Ethical AI framework ensuring patient rights and provider protection</p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                {/* Legal Intelligence Mockup - Larger */}
                <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <img
                        src="/gammalexlogo-transparent.png"
                        alt="GammaLex Logo"
                        style={{ filter: 'brightness(0) invert(1)' }}
                        className="h-12 w-auto"
                      />
                      <h4 className="text-2xl font-bold text-white">Legal Intelligence Dashboard</h4>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-white/60">Compliant</span>
                    </div>
                  </div>
                  
                  {/* Compliance Check */}
                  <div className="mb-6">
                    <label className="block text-lg font-medium text-white/80 mb-3">Compliance Check</label>
                    <div className="bg-white/10 border border-white/20 rounded-lg p-4">
                      <span className="text-white text-lg">HIPAA + Stark Law + Anti-Kickback</span>
                    </div>
                  </div>

                  {/* Specialty Compliance */}
                  <div className="mb-6">
                    <label className="block text-lg font-medium text-white/80 mb-3">Specialty Compliance</label>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gammalex-orange/20 border border-gammalex-orange/30 rounded-lg p-4">
                        <span className="text-gammalex-orange text-sm font-semibold">Radiology: ACR Guidelines</span>
                      </div>
                      <div className="bg-white/10 border border-white/20 rounded-lg p-4">
                        <span className="text-white text-sm">Oncology: NCCN Guidelines</span>
                      </div>
                      <div className="bg-white/10 border border-white/20 rounded-lg p-4">
                        <span className="text-white text-sm">Cardiology: ACC/AHA Standards</span>
                      </div>
                      <div className="bg-white/10 border border-white/20 rounded-lg p-4">
                        <span className="text-white text-sm">Transplant: UNOS Policies</span>
                      </div>
                    </div>
                  </div>

                  {/* Legal Risk Assessment */}
                  <div className="mb-6">
                    <label className="block text-lg font-medium text-white/80 mb-3">Legal Risk Assessment</label>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center">
                        <span className="text-green-400 text-sm font-medium">Low</span>
                        <div className="text-white text-2xl font-bold">15%</div>
                      </div>
                      <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4 text-center">
                        <span className="text-yellow-400 text-sm font-medium">Medium</span>
                        <div className="text-white text-2xl font-bold">25%</div>
                      </div>
                      <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-center">
                        <span className="text-red-400 text-sm font-medium">High</span>
                        <div className="text-white text-2xl font-bold">5%</div>
                      </div>
                    </div>
                  </div>

                  {/* Legal Precedents */}
                  <div className="mb-6">
                    <label className="block text-lg font-medium text-white/80 mb-3">Legal Precedents Database</label>
                    <div className="bg-white/10 border border-white/20 rounded-lg p-4 h-24 overflow-y-auto">
                      <span className="text-white text-sm">
                        <span className="text-gammalex-orange font-semibold">• Radiology: Smith v. Hospital Corp (2023) - Medical necessity standards</span><br/>
                        • Oncology: Johnson v. Blue Cross (2022) - Coverage interpretation<br/>
                        • Cardiology: CMS v. Regional Medical (2023) - Stark Law compliance<br/>
                        • Transplant: State v. Transplant Center (2023) - Organ allocation
                      </span>
                    </div>
                  </div>

                  {/* Legal Sources */}
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-medium text-white/80">Legal Sources</span>
                      <button className="text-sm text-gammalex-orange hover:text-gammalex-orange-light">View All</button>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-white text-sm">HIPAA Privacy Rule 45 CFR §160.103</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-white text-sm">Stark Law 42 U.S.C. §1395nn</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-white text-sm">Anti-Kickback Statute 42 U.S.C. §1320a-7b</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">Step 5: Automated Claims Scrubbing & Authorization</h3>
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

          {/* Technical Differentiation */}
                <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Vertical by Nature. Relentless by Design.</h3>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8">
                Unlike horizontal AI platforms, GammaLex is vertically specialized to think like a healthcare attorney and payer expert, not a generic bot.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gammalex-orange/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Brain className="text-gammalex-orange" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Domain Expertise</h4>
                  <p className="text-lg text-white/80">Trained on clinical-legal corpus, not generic data</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gammalex-purple/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target className="text-gammalex-purple" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Risk-Aware AI</h4>
                  <p className="text-lg text-white/80">Purpose-built for the high-stakes world of healthcare law and payer policy</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gammalex-orange/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="text-gammalex-orange" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Continuous Evolution</h4>
                  <p className="text-lg text-white/80">Models that learn from every interaction, regulation, and outcome</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>



      {/* GammaLex AI Copilot Cloud Section */}
    <section id="purpose-built-ai" className="w-full min-h-[80vh] flex flex-col justify-center items-center bg-gradient-to-br from-black via-[#1a102a] to-black py-32 px-2 sm:px-4 md:px-8 font-inter">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-0 lg:gap-64">
          <div className="flex-1 flex flex-col justify-center items-start">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-normal text-left font-inter leading-tight text-white break-words">
              AI ENGINE FOR COVERAGE, COMPLIANCE, AND <span className="gradient-text">CARE</span>
            </h2>
          </div>
          <div className="flex-1 flex flex-col justify-center items-end mt-12 sm:mt-24 md:mt-36 lg:mt-64">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-normal text-right font-inter leading-tight text-gammalex-orange break-words">
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
              <span className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-inter text-center break-words tracking-tight mb-4 text-white">
                Be the first to experience GammaLex.
              </span>
              <span className="text-xl sm:text-2xl font-inter text-center break-words tracking-tight mb-8 text-white/80">
                AI-built for transparency, accuracy and outcomes that matter.
              </span>
              <div className="glass rounded-3xl shadow-lg border border-gammalex-purple/30 p-6 sm:p-14 w-full flex flex-col items-center font-inter">
                <JoinWaitlistModal
                  trigger={
                    <button className="text-xl sm:text-2xl text-gammalex-orange text-center w-full font-inter focus:outline-none">
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
      
      {/* Mobile Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="fixed bottom-6 right-6 z-50 lg:hidden bg-gammalex-purple hover:bg-gammalex-purple-light text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 neon-glow"
            onClick={() => {
              const nav = document.querySelector('nav')
              if (nav) {
                nav.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

// Navigation component has been extracted to components/Navigation.tsx

function GammaLexIllustration({ active }: { active: number }) {
  // Placeholder SVGs for each value; swap with Lottie or custom SVG as needed
  if (active === 0) {
    // Democratizing Legal Reasoning
    return (
      <motion.svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <circle cx="110" cy="110" r="100" fill="url(#gammalex1)" />
        <path d="M110 60 L140 160 L80 160 Z" fill="#fff" opacity="0.9" />
        <text x="110" y="120" textAnchor="middle" fontSize="32" fill="#8b5cf6" fontWeight="bold">AI</text>
        <defs>
          <radialGradient id="gammalex1" cx="0.5" cy="0.5" r="0.7">
            <stop offset="0%" stopColor="#28bfa3" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </radialGradient>
        </defs>
      </motion.svg>
    )
  }
  if (active === 1) {
    // Transparent Decision Making
    return (
      <motion.svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <circle cx="110" cy="110" r="100" fill="url(#gammalex2)" />
        <ellipse cx="110" cy="110" rx="60" ry="40" fill="#fff" opacity="0.9" />
        <circle cx="110" cy="110" r="18" fill="#8b5cf6" />
        <circle cx="110" cy="110" r="8" fill="#fff" />
        <defs>
          <radialGradient id="gammalex2" cx="0.5" cy="0.5" r="0.7">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#28bfa3" />
          </radialGradient>
        </defs>
      </motion.svg>
    )
  }
  // Protecting More Care
  return (
    <motion.svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <circle cx="110" cy="110" r="100" fill="url(#gammalex3)" />
      <path d="M110 150 Q130 120 110 100 Q90 120 110 150 Z" fill="#fff" opacity="0.9" />
      <circle cx="110" cy="110" r="18" fill="#28bfa3" />
      <defs>
        <radialGradient id="gammalex3" cx="0.5" cy="0.5" r="0.7">
          <stop offset="0%" stopColor="#f59e42" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </radialGradient>
      </defs>
    </motion.svg>
  )
}

// AboutSection component has been extracted to components/AboutSection.tsx

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



// LegalHeatIndex component has been extracted to components/LegalHeatIndex.tsx

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

// UnifiedCrisisSection component extracted to components/UnifiedCrisisSection.tsx

