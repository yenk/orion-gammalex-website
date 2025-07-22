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

      {/* Crisis & Numbers Section */}
      <section id="crisis-numbers" className="w-full flex flex-col items-center justify-center py-20 px-4 sm:px-8 font-inter">
        <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-center leading-tight mb-10 multi-gradient-text">
          Pre-Authorizations Are a Clinical Crisis
        </h2>
        <AccordionCrisis />
      </section>

      {/* Systemic Risk Stats Section (Denials are a financial crisis) */}
      <SystemicRiskStats />

      {/* Legal Heat Index Section (When denials become lawsuits) */}
      <LegalHeatIndex />

      {/* Legal Foresight Bridge Section (From legal risk to legal foresight) */}
      <section id="predict-protect" className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 font-inter relative">
        {/* Futuristic background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-purple-900/15 to-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.12),transparent_50%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-white mb-6 sm:mb-8 px-2">
              From <span className="gradient-text">legal risk</span> to <span className="gradient-text">legal foresight</span>
            </h2>
            <AnimatedText
              text="Denials become liability when evidence is ignored. GammaLex anticipates risk before it escalates."
              className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-inter font-normal text-white/90 text-center max-w-5xl mx-auto leading-tight px-2"
            />
            <div className="flex justify-center my-8">
              <FlaggingOverlay />
            </div>
          </div>
          {/* Creative horizontal flow for the 3 concepts */}
          <div className="relative flex flex-col items-center mb-12">
            <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-2 z-0">
              {/* Animated connector line */}
              <motion.div
                className="w-full h-full bg-gradient-to-r from-gammalex-purple via-gammalex-orange to-gammalex-purple rounded-full blur-md opacity-60"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
              />
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0 w-full relative z-10">
              {/* Pattern Recognition */}
              <motion.div
                className="flex flex-col items-center text-center px-4 lg:w-1/3 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-4">
                  <div className="absolute -inset-2 bg-gammalex-purple/20 rounded-full blur-lg animate-pulse" />
                  <Zap className="w-14 h-14 text-gammalex-purple neon-text" />
                </div>
                <div className="text-xl md:text-2xl font-bold font-inter text-gammalex-purple mb-2">Pattern Recognition</div>
                <div className="text-base md:text-lg font-inter text-white/90 leading-relaxed">Identifies legal vulnerabilities before they become lawsuits.</div>
              </motion.div>
              {/* Connector Dot */}
              <div className="hidden lg:flex flex-col items-center justify-center h-full">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gammalex-orange to-gammalex-purple shadow-lg border-4 border-white/10 animate-pulse" />
              </div>
              {/* Legal Compliance */}
              <motion.div
                className="flex flex-col items-center text-center px-4 lg:w-1/3 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-4">
                  <div className="absolute -inset-2 bg-gammalex-purple/20 rounded-full blur-lg animate-pulse" />
                  <Scale className="w-14 h-14 text-gammalex-purple neon-text" />
                </div>
                <div className="text-xl md:text-2xl font-bold font-inter text-gammalex-purple mb-2">Legal Compliance</div>
                <div className="text-base md:text-lg font-inter text-white/90 leading-relaxed">Prevents compliance gaps that lead to successful appeals.</div>
              </motion.div>
              {/* Connector Dot */}
              <div className="hidden lg:flex flex-col items-center justify-center h-full">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gammalex-orange to-gammalex-purple shadow-lg border-4 border-white/10 animate-pulse" />
              </div>
              {/* Risk Mitigation */}
              <motion.div
                className="flex flex-col items-center text-center px-4 lg:w-1/3 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-4">
                  <div className="absolute -inset-2 bg-gammalex-purple/20 rounded-full blur-lg animate-pulse" />
                  <Shield className="w-14 h-14 text-gammalex-purple neon-text" />
                </div>
                <div className="text-xl md:text-2xl font-bold font-inter text-gammalex-purple mb-2">Risk Mitigation</div>
                <div className="text-base md:text-lg font-inter text-white/90 leading-relaxed">Strengthens justifications before submission, not in court.</div>
              </motion.div>
            </div>
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
            <h2 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-inter font-normal text-white text-center leading-tight mb-8">
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
                                <p className="text-xl sm:text-2xl md:text-3xl font-inter text-white/90 leading-relaxed text-center">
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

          {/* Three Pillars Interactive */}
          <motion.div 
            className="mb-20 sm:mb-24"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-inter font-normal text-white text-center mb-12">
              The Three <span className="gradient-text">Pillars</span>
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

          {/* What GammaLex Delivers - Floating Statement */}
                    <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-inter font-normal text-white text-center mb-8">
              What <span className="gradient-text">GammaLex Delivers</span>
            </h3>
            <motion.div 
              className="glass rounded-3xl p-8 sm:p-12 border border-white/10 max-w-4xl mx-auto relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated background elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-gammalex-purple/5 via-gammalex-orange/5 to-gammalex-purple/5" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gammalex-purple via-gammalex-orange to-gammalex-purple" />
              
              <p className="text-lg sm:text-xl md:text-2xl font-inter text-white/90 leading-relaxed relative z-10">
                        By bridging <span className="text-gammalex-orange font-medium">medicine, law, and policy</span>, GammaLex protects all three sides of the care equation — ensuring care is delivered, not denied.
                      </p>
            </motion.div>
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
          <section id="core-values" className="w-full py-20 px-4 sm:px-8 bg-gradient-to-br from-[#1a102a] via-[#2d1850] to-[#1a102a] rounded-3xl shadow-2xl border border-gammalex-purple/40 mb-16 relative overflow-hidden font-inter">
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

            {/* Main Content Grid - Matching Reference Image */}
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-inter font-normal gradient-text leading-tight mb-4 px-4">
              Built on transparency and open innovation
            </h3>
          </div>
            <div className="space-y-0">
            
            {/* Row 1: Open Source Data Foundation */}
            <div className="flex flex-col lg:flex-row border-b border-white/20">
              <div className="lg:w-1/3 p-4 sm:p-6 lg:p-8 border-r border-white/20 glass-dark">
                <div className="text-xs sm:text-sm uppercase tracking-wider text-white font-medium mb-4 text-left">
                  POWERED BY OPEN SOURCE<br />DATA FOUNDATION
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gammalex-purple animate-pulse-glow"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                </div>
              </div>
              <div className="lg:w-2/3 p-4 sm:p-6 lg:p-8 space-y-3 sm:space-y-4">
                <div className="text-left">
                  <span className="text-base sm:text-lg lg:text-xl font-medium text-gammalex-orange">Open Source Ethos: </span>
                  <span className="text-white text-base sm:text-lg lg:text-xl">GammaLex is built on open, community-driven data and models. Transparency, reproducibility, and collective progress are core values—our LLMs are fine-tuned on openly available insurance, legal, and clinical datasets.</span>
                </div>
                <div className="text-left">
                  <span className="text-base sm:text-lg lg:text-xl font-medium text-gammalex-orange">Transparent Data Lineage: </span>
                  <span className="text-white text-base sm:text-lg lg:text-xl">Every model decision is traceable. We provide full audit trails and documentation, so users can verify sources and logic at every step.</span>
                </div>
              </div>
            </div>

            {/* Row 2: Multi-Domain Integration */}
            <div className="flex flex-col lg:flex-row border-b border-white/20">
              <div className="lg:w-1/3 p-4 sm:p-6 lg:p-8 border-r border-white/20 glass-dark">
                <div className="text-xs sm:text-sm uppercase tracking-wider text-white font-medium mb-4 text-left">
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
              <div className="lg:w-2/3 p-4 sm:p-6 lg:p-8 space-y-3 sm:space-y-4">
                <div className="text-left">
                  <span className="text-base sm:text-lg lg:text-xl font-medium text-gammalex-orange">Collaborative Intelligence: </span>
                  <span className="text-white text-base sm:text-lg lg:text-xl">We integrate open clinical, legal, and insurance data, fostering a shared ecosystem for better, more holistic decision-making.</span>
                </div>
                <div className="text-left">
                  <span className="text-base sm:text-lg lg:text-xl font-medium text-gammalex-orange">Community-Driven Updates: </span>
                  <span className="text-white text-base sm:text-lg lg:text-xl">Real-time updates from open datasets and policy changes, with contributions and feedback from the broader community.</span>
                </div>
              </div>
            </div>

            {/* Row 3: Payer-Specific Adaptation */}
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3 p-4 sm:p-6 lg:p-8 border-r border-white/20 glass-dark">
                <div className="text-xs sm:text-sm uppercase tracking-wider text-white font-medium mb-4 text-left">
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
                </div>
              </div>
              <div className="lg:w-2/3 p-4 sm:p-6 lg:p-8 space-y-3 sm:space-y-4">
                <div className="text-left">
                  <span className="text-base sm:text-lg lg:text-xl font-medium text-gammalex-orange">Open Adaptation Framework: </span>
                  <span className="text-white text-base sm:text-lg lg:text-xl">GammaLex adapts to payer policies using open source data and extensible frameworks—leveraging transparency and interoperability, while remaining a proprietary, for-profit platform.</span>
                </div>
                <div className="text-left">
                  <span className="text-base sm:text-lg lg:text-xl font-medium text-gammalex-orange">Aligned, Transparent Recommendations: </span>
                  <span className="text-white text-base sm:text-lg lg:text-xl">All recommendations are explainable, with clear links to open policy sources and adaptation logic.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Anchor: Impact */}
          <div id="impact" className="absolute -top-32" aria-hidden="true" />
          {/* Competitive Differentiation Section */}
        <div id="automation-alignment" className="mt-24 mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-inter font-normal text-white leading-tight mb-4">
                Beyond automation. <span className="gradient-text">Beyond compliance.</span>
                </h3>

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
                  },
                  {
                    competitor: "Provide basic coverage verification",
                    gammalex: "Delivers advanced coverage and treatment predictions with clinical-legal precision"
                  }
                ].map((row, index) => (
                  <motion.div 
                    key={`comparison-${index}`}
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

          {/* What Sets GammaLex Apart Section */}
          <div id="what-sets-apart" className="mt-20 mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-inter font-normal text-white leading-tight mb-6">
                What Sets <span className="gradient-text">GammaLex Apart</span>
              </h3>
              <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto leading-[1.4] sm:leading-[1.5] px-4 sm:px-0">
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
                            <h5 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover/item:text-gammalex-purple transition-colors duration-300">Instant Policy Decoding</h5>
                            <p className="text-xl sm:text-2xl text-white/80">Adapts to evolving payer rules in real time.</p>
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          className="flex items-start gap-4 group/item"
                          whileHover={{ x: 8 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <div className="w-2 h-2 bg-gammalex-purple rounded-full mt-3 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                          <div>
                            <h5 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover/item:text-gammalex-purple transition-colors duration-300">Denial Prevention</h5>
                            <p className="text-xl sm:text-2xl text-white/80">Stops denials before they happen.</p>
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
                            <h5 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover/item:text-gammalex-purple-light transition-colors duration-300">Gray Area Navigation</h5>
                            <p className="text-xl sm:text-2xl text-white/80">Interprets complex requirements bots miss.</p>
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          className="flex items-start gap-4 group/item"
                          whileHover={{ x: 8 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <div className="w-2 h-2 bg-gammalex-purple-light rounded-full mt-3 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                          <div>
                            <h5 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover/item:text-gammalex-purple-light transition-colors duration-300">Risk Detection</h5>
                            <p className="text-xl sm:text-2xl text-white/80">Flags issues before they escalate.</p>
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
                            <h5 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover/item:text-gammalex-purple transition-colors duration-300">Expert Judgment</h5>
                            <p className="text-xl sm:text-2xl text-white/80">Empowers, not replaces, human decision-making.</p>
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          className="flex items-start gap-4 group/item"
                          whileHover={{ x: 8 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <div className="w-2 h-2 bg-gammalex-purple rounded-full mt-3 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                          <div>
                            <h5 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover/item:text-gammalex-purple transition-colors duration-300">Data-Driven Insights</h5>
                            <p className="text-xl sm:text-2xl text-white/80">Surfaces what matters, fast.</p>
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
                            <h5 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover/item:text-gammalex-purple-light transition-colors duration-300">Triple Integration</h5>
                            <p className="text-xl sm:text-2xl text-white/80">Compliance, clinical, and legal at the point of care.</p>
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          className="flex items-start gap-4 group/item"
                          whileHover={{ x: 8 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <div className="w-2 h-2 bg-gammalex-purple-light rounded-full mt-3 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                          <div>
                            <h5 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover/item:text-gammalex-purple-light transition-colors duration-300">Seamless Workflow</h5>
                            <p className="text-xl sm:text-2xl text-white/80">Real-time support without disruption.</p>
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
                    <p className="text-2xl lg:text-3xl font-bold text-white font-inter">
                      GammaLex goes beyond automation—delivering expert-grade support that generic bots cannot match.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="w-full bg-sage-50 border-b border-sage-100">
        <ProductFeaturesDemo />
      </div>

      {/* About Section */}
      <AboutSection />

    {/* Vertical AI Platform Section */}
    <section id="forge-ai-frontier" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 font-inter relative">
        {/* Futuristic background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-purple-900/10 to-black/30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.08),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        <h2 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-inter font-normal text-center leading-tight mb-12 sm:mb-16 px-2">
          The <span className="multi-gradient-text">Vertical AI</span> built to defend
        </h2>

        {/* Technical Narrative Flow */}
        <div className="w-full space-y-20">
          {/* Core AI Architecture */}
          <motion.div 
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex-1">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gammalex-orange to-gammalex-purple flex items-center justify-center shadow-2xl">
                  <BrainCircuit className="text-white" size={40} />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white">Clinical-Legal Foundation Models</h3>
              </div>
              <p className="text-xl sm:text-2xl text-white/90 leading-relaxed mb-6">
                GammaLex's models are purpose-built for the intersection of medicine, law, and healthcare economics—trained on proprietary, domain-specific corpora for unmatched accuracy in clinical-legal reasoning.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gammalex-orange rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-xl text-white/80">Multi-modal understanding of medical records, legal documents, and policy language—engineered for healthcare's unique regulatory and payer landscape.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gammalex-orange rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-xl text-white/80">Real-time, context-aware policy decoding and interpretation, not just generic text analysis.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gammalex-orange rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-xl text-white/80">Continuous learning from new regulations, payer rules, and case law—always up to date.</p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-8">
              <div className="bg-gradient-to-r from-gammalex-purple/20 to-transparent rounded-2xl p-8 border border-gammalex-purple/30">
                <div className="flex items-center gap-4 mb-4">
                  <Zap className="text-gammalex-orange" size={32} />
                  <h4 className="text-2xl font-bold text-white">Policy Intelligence Engine</h4>
                </div>
                <p className="text-xl text-white/80 mb-4">
                  AI-powered policy intelligence that proactively eliminates or reduces the need for pre-authorizations and minimizes denials—enabling faster, frictionless access to care while maintaining compliance.
                </p>
                <div className="text-sm text-white/60">
                  <span className="font-semibold">Technical Stack:</span> Fine-tuned LLMs, RAG architecture, real-time policy databases
                </div>
              </div>
              <div className="bg-gradient-to-r from-gammalex-orange/20 to-transparent rounded-2xl p-8 border border-gammalex-orange/30">
                <div className="flex items-center gap-4 mb-4">
                  <Shield className="text-gammalex-purple" size={32} />
                  <h4 className="text-2xl font-bold text-white">Risk Intelligence System</h4>
                </div>
                <p className="text-xl text-white/80 mb-4">
                  Proactive vulnerability detection using pattern recognition across denial cases and legal precedents—surfacing risks unique to healthcare's regulatory environment.
                </p>
                <div className="text-sm text-white/60">
                  <span className="font-semibold">Technical Stack:</span> Anomaly detection, legal corpus analysis, predictive modeling
                </div>
              </div>
            </div>
          </motion.div>

          {/* Platform Architecture */}
          <motion.div 
            className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex-1">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gammalex-purple to-gammalex-orange flex items-center justify-center shadow-2xl">
                  <UserRound className="text-white" size={40} />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white">Enterprise-Grade Platform</h3>
              </div>
              <p className="text-xl sm:text-2xl text-white/90 leading-relaxed mb-6">
                Built to support everything from solo practices to national networks, with robust, secure, and compliant cloud-native architecture.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gammalex-purple rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-xl text-white/80">SOC 2 Type II compliance with end-to-end encryption and 99.9% uptime.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gammalex-purple rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-xl text-white/80">API-first architecture with seamless EHR integration and automatic failover.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gammalex-purple rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-xl text-white/80">Proactive compliance monitoring and auditability—ensuring your organization stays ahead of evolving regulations.</p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-8">
              <div className="bg-gradient-to-r from-gammalex-purple/20 to-transparent rounded-2xl p-8 border border-gammalex-purple/30">
                <div className="flex items-center gap-4 mb-4">
                  <BarChart3 className="text-gammalex-orange" size={32} />
                  <h4 className="text-2xl font-bold text-white">Scalable Infrastructure</h4>
                </div>
                <p className="text-xl text-white/80 mb-4">
                  Cloud-native microservices scale from solo practices to enterprise systems.
                </p>
                <div className="text-sm text-white/60">
                  <span className="font-semibold">Technical Stack:</span> Kubernetes, microservices, auto-scaling, load balancing
                </div>
              </div>
              <div className="bg-gradient-to-r from-gammalex-orange/20 to-transparent rounded-2xl p-8 border border-gammalex-orange/30">
                <div className="flex items-center gap-4 mb-4">
                  <Scale className="text-gammalex-purple" size={32} />
                  <h4 className="text-2xl font-bold text-white">Legal Intelligence</h4>
                </div>
                <p className="text-xl text-white/80 mb-4">
                  Proactively prevents and mitigates legal exposure—ensuring compliance with regulations and ethical standards so care is always provided.
                </p>
                <div className="text-sm text-white/60">
                  <span className="font-semibold">Technical Stack:</span> Regulatory APIs, automated compliance testing, audit trails
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technical Differentiation */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">Vertical by Nature. Relentless by Design.</h3>
              <p className="text-xl sm:text-2xl text-white/90 leading-relaxed mb-8">
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
            <h2 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-normal text-left font-inter leading-tight text-white break-words">
              AI ENGINE FOR COVERAGE, COMPLIANCE, AND <span className="gradient-text">CARE</span>
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

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolled, setIsScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  // Separate dropdown state for each nav item
  const [isWhatWereSolvingDropdownOpen, setIsWhatWereSolvingDropdownOpen] = useState(false);
  const [isWhyWeWinDropdownOpen, setWhyWeWinDropdownOpen] = useState(false);
  const [isWhyGammaLexDropdownOpen, setIsWhyGammaLexDropdownOpen] = useState(false);
  
  // Mobile dropdown states
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

  const navItems = [
    { id: "the-mission", label: "WHY GAMMALEX", hasDropdown: true },
    { id: "crisis-numbers", label: "WHAT WE'RE SOLVING", hasDropdown: true },
    { id: "how-we-do-it", label: "WHY WE WIN", hasDropdown: true },
    { id: "product", label: "THE GAMMALEX METHOD", hasDropdown: true },
    { id: "about", label: "ABOUT" },
    { id: "join", label: "PARTNER WITH US" },
  ];

  const whyGammaLexDropdown = [
    { id: "the-mission", label: "Our Three Pillars", description: "Our purpose and vision for healthcare transformation" },
    { id: "what-sets-apart", label: "Holistic By Design", description: "Comprehensive clinical-legal intelligence" },
  ];

  const whatWereSolvingDropdown = [
    { id: "crisis-numbers", label: "The Hidden Crisis in Care", description: "Why prior authorization breaks the system" },
    { id: "systemic-risk-stats", label: "Proof of a Broken System", description: "Financial impact of accelerating denials" },
    { id: "legal-heat-index", label: "From Denial to Courtroom", description: "How denials turn into lawsuits" },
  ];

  const gammalexMethodDropdown = [
    { id: "forge-ai-frontier", label: "Our Vertical AI", description: "Vertical AI pioneer at the intersection of clinical and legal" },
    { id: "product", label: "End-to-End AI in Action", description: "How GammaLex unifies clinical, legal, and compliance intelligence" },
    { id: "gammalex-engine", label: "Inside the GammaLex Engine", description: "Source-grounded models for real-world care and coverage" },
  ];

  const dropdownItems = [
    { id: "core-values", label: "Our Core Principles", description: "Transparency, accuracy, and open innovation" },
    { id: "predict-protect", label: "Protect What Matters", description: "Defending care before it's questioned or denied" },
    { id: "automation-alignment", label: "Built Different", description: "Beyond automation. Beyond compliance." },
  ];

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
    setMobileDropdownOpen(null)
  }

  const handleNavClick = (item: any) => {
    if (item.external) {
      window.location.href = `/${item.id}`
    } else {
      scrollToSection(item.id)
    }
    setIsOpen(false)
  }

  const toggleMobileDropdown = (itemId: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === itemId ? null : itemId)
  }

  const getDropdownItems = (itemId: string) => {
    switch (itemId) {
      case 'the-mission':
        return whyGammaLexDropdown
      case 'crisis-numbers':
        return whatWereSolvingDropdown
      case 'how-we-do-it':
        return dropdownItems
      case 'product':
        return gammalexMethodDropdown
      default:
        return []
    }
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
        <div className="max-w-none px-4 sm:px-8 lg:px-16">
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
                className={`transition-all duration-300 h-20 sm:h-24 lg:h-32 max-w-none`}
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8 xl:space-x-16 2xl:space-x-32">
                {navItems.map((item) => (
                  <div key={item.id} className="relative">
                    {item.hasDropdown ? (
                      <div
                        className="relative"
                        onMouseEnter={() => {
                          if (item.id === 'the-mission') setIsWhyGammaLexDropdownOpen(true);
                          if (item.id === 'crisis-numbers') setIsWhatWereSolvingDropdownOpen(true);
                          if (item.id === 'how-we-do-it') setWhyWeWinDropdownOpen(true);
                          if (item.id === 'product') setDropdownOpen(true);
                        }}
                        onMouseLeave={() => {
                          if (item.id === 'the-mission') setIsWhyGammaLexDropdownOpen(false);
                          if (item.id === 'crisis-numbers') setIsWhatWereSolvingDropdownOpen(false);
                          if (item.id === 'how-we-do-it') setWhyWeWinDropdownOpen(false);
                          if (item.id === 'product') setDropdownOpen(false);
                        }}
                      >
                  <motion.button
                          onClick={() => scrollToSection(item.id)}
                          className="text-lg xl:text-xl 2xl:text-2xl font-medium text-white font-inter transition-colors flex items-center gap-2"
                          whileHover={{ y: -2 }}
                        >
                          {item.label}
                          <motion.div
                            animate={{ rotate: (item.id === 'the-mission' ? isWhyGammaLexDropdownOpen : item.id === 'crisis-numbers' ? isWhatWereSolvingDropdownOpen : isWhyWeWinDropdownOpen) ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </motion.div>
                        </motion.button>
                        {/* Dropdown Menu */}
                        <AnimatePresence key={`dropdown-${item.id}`}>
                          {item.id === 'crisis-numbers' && isWhatWereSolvingDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -10, scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                              className="absolute top-full left-0 mt-2 w-72 xl:w-80 bg-black/90 backdrop-blur-md border border-white/30 rounded-xl shadow-2xl z-50"
                            >
                              <div className="p-4 space-y-2">
                                {whatWereSolvingDropdown.map((dropdownItem) => (
                                  <motion.button
                                    key={`what-were-solving-${dropdownItem.id}`}
                                    onClick={() => {
                                      scrollToSection(dropdownItem.id)
                                      setIsWhatWereSolvingDropdownOpen(false)
                                    }}
                                    className="w-full text-left p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                                    whileHover={{ x: 4 }}
                                  >
                                    <div className="flex items-center justify-between">
                                      <div className="flex-1">
                                        <div className="text-white font-medium text-base xl:text-lg group-hover:text-gammalex-orange transition-colors">
                                          {dropdownItem.label}
                                        </div>
                                        <div className="text-white/60 text-xs xl:text-sm mt-1 group-hover:text-white/80 transition-colors">
                                          {dropdownItem.description}
                                        </div>
                                      </div>
                                      <div className="text-white/40 group-hover:text-gammalex-orange transition-colors">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                      </div>
                                    </div>
                                  </motion.button>
                                ))}
                              </div>
                            </motion.div>
                          )}
                          {item.id === 'how-we-do-it' && isWhyWeWinDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -10, scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                              className="absolute top-full left-0 mt-2 w-72 xl:w-80 bg-black/90 backdrop-blur-md border border-white/30 rounded-xl shadow-2xl z-50"
                            >
                              <div className="p-4 space-y-2">
                                {dropdownItems.map((dropdownItem) => (
                                  <motion.button
                                    key={`why-we-win-${dropdownItem.id}`}
                                    onClick={() => {
                                      scrollToSection(dropdownItem.id)
                                      setWhyWeWinDropdownOpen(false)
                                    }}
                                    className="w-full text-left p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                                    whileHover={{ x: 4 }}
                                  >
                                    <div className="flex items-center justify-between">
                                      <div className="flex-1">
                                        <div className="text-white font-medium text-base xl:text-lg group-hover:text-gammalex-orange transition-colors">
                                          {dropdownItem.label}
                                        </div>
                                        <div className="text-white/60 text-xs xl:text-sm mt-1 group-hover:text-white/80 transition-colors">
                                          {dropdownItem.description}
                                        </div>
                                      </div>
                                      <div className="text-white/40 group-hover:text-gammalex-orange transition-colors">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                      </div>
                                    </div>
                                  </motion.button>
                                ))}
                              </div>
                            </motion.div>
                          )}
                          {item.id === 'product' && dropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -10, scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                              className="absolute top-full left-0 mt-2 w-72 xl:w-80 bg-black/90 backdrop-blur-md border border-white/30 rounded-xl shadow-2xl z-50"
                            >
                              <div className="p-4 space-y-2">
                                {gammalexMethodDropdown.map((dropdownItem) => (
                                  <motion.button
                                    key={`gammalex-method-${dropdownItem.id}`}
                                    onClick={() => {
                                      scrollToSection(dropdownItem.id)
                                      setDropdownOpen(false)
                                    }}
                                    className="w-full text-left p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                                    whileHover={{ x: 4 }}
                                  >
                                    <div className="flex items-center justify-between">
                                      <div className="flex-1">
                                        <div className="text-white font-medium text-base xl:text-lg group-hover:text-gammalex-orange transition-colors">
                                          {dropdownItem.label}
                                        </div>
                                        <div className="text-white/60 text-xs xl:text-sm mt-1 group-hover:text-white/80 transition-colors">
                                          {dropdownItem.description}
                                        </div>
                                      </div>
                                      <div className="text-white/40 group-hover:text-gammalex-orange transition-colors">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                      </div>
                                    </div>
                                  </motion.button>
                                ))}
                              </div>
                            </motion.div>
                          )}
                          {item.id === 'the-mission' && isWhyGammaLexDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -10, scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                              className="absolute top-full left-0 mt-2 w-72 xl:w-80 bg-black/90 backdrop-blur-md border border-white/30 rounded-xl shadow-2xl z-50"
                            >
                              <div className="p-4 space-y-2">
                                {whyGammaLexDropdown.map((dropdownItem) => (
                                  <motion.button
                                    key={`why-gammalex-${dropdownItem.id}`}
                                    onClick={() => {
                                      scrollToSection(dropdownItem.id)
                                      setIsWhyGammaLexDropdownOpen(false)
                                    }}
                                    className="w-full text-left p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                                    whileHover={{ x: 4 }}
                                  >
                                    <div className="flex items-center justify-between">
                                      <div className="flex-1">
                                        <div className="text-white font-medium text-base xl:text-lg group-hover:text-gammalex-orange transition-colors">
                                          {dropdownItem.label}
                                        </div>
                                        <div className="text-white/60 text-xs xl:text-sm mt-1 group-hover:text-white/80 transition-colors">
                                          {dropdownItem.description}
                                        </div>
                                      </div>
                                      <div className="text-white/40 group-hover:text-gammalex-orange transition-colors">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                      </div>
                                    </div>
                                  </motion.button>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <motion.button
                    onClick={() => handleNavClick(item)}
                    className="text-lg xl:text-xl 2xl:text-2xl font-medium text-white font-inter transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    {item.label}
                  </motion.button>
                    )}
                  </div>
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
              <div className="space-y-2">
                {navItems.map((item) => (
                  <div key={item.id}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => toggleMobileDropdown(item.id)}
                          className="block w-full text-left text-lg font-medium text-white font-inter py-3 px-4 transition-colors flex items-center justify-between"
                        >
                          {item.label}
                          <motion.div
                            animate={{ rotate: mobileDropdownOpen === item.id ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {mobileDropdownOpen === item.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-4 border-l border-white/20"
                            >
                              <div className="space-y-1 py-2">
                                {getDropdownItems(item.id).map((dropdownItem) => (
                                  <button
                                    key={`mobile-${item.id}-${dropdownItem.id}`}
                                    onClick={() => scrollToSection(dropdownItem.id)}
                                    className="block w-full text-left text-base font-medium text-white/80 font-inter py-2 px-4 transition-colors hover:text-white"
                                  >
                                    <div className="text-sm">{dropdownItem.label}</div>
                                    <div className="text-xs text-white/60 mt-1">{dropdownItem.description}</div>
                                  </button>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleNavClick(item)}
                        className="block w-full text-left text-lg font-medium text-white font-inter py-3 px-4 transition-colors"
                      >
                        {item.label}
                      </button>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-white/20 mt-4">
                  <JoinWaitlistModal
                    trigger={
                      <Button className="bg-gammalex-purple hover:bg-gammalex-purple-light text-white font-bold w-full py-4 text-lg rounded-xl hover-glow transition-all">
                        Request a Demo
                      </Button>
                    }
                  />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </>
  )
}

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

function AboutSection() {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    { id: "origin", label: "Our Origin", icon: <Target className="w-6 h-6" /> },
    { id: "what-we-do", label: "What We Do", icon: <Zap className="w-6 h-6" /> },
    { id: "what-sets-us-apart", label: "What Sets Us Apart", icon: <Star className="w-6 h-6" /> }
  ];

  const content = {
    origin: {
      title: "Born from the Front Lines",
      subtitle: "Why should revenue and patient care hinge on a system no one can fully decode?",
      description: "We spent years fighting for approvals, watching innovation stall. So we built the engine we always wished existed. GammaLex fuses AI with clinical and legal expertise to make reimbursement as precise as medicine itself.",
      highlight: "We built the engine we always wished existed."
    },
    "what-we-do": {
      title: "",
      subtitle: "",
      items: [
        {
          icon: <FileText className="w-8 h-8 text-gammalex-purple" />,
          title: "Translate & Automate",
          description: "Translates medical records and legal standards into bulletproof documentation."
        },
        {
          icon: <Shield className="w-8 h-8 text-gammalex-orange" />,
          title: "Predict & Protect",
          description: "Predicts denial risk and cuts waste to unlock revenue."
        },
        {
          icon: <Brain className="w-8 h-8 text-gammalex-purple" />,
          title: "Learn & Adapt",
          description: "Updates intelligence with latest rules to keep systems ahead."
        }
      ]
    },
    "what-sets-us-apart": {
      title: "",
      subtitle: "",
      items: [
        {
          icon: <Users className="w-8 h-8 text-gammalex-orange" />,
          title: "Founder-Led Team",
          description: "Founder-led team solving problems others ignore."
        },
        {
          icon: <Eye className="w-8 h-8 text-gammalex-purple" />,
          title: "Relentless Pursuit",
          description: "Open, auditable models that regulators and providers trust."
        },
        {
          icon: <Heart className="w-8 h-8 text-gammalex-orange" />,
          title: "Dedicated to Impact",
          description: "Restoring billions in lost revenue and patient access to care."
        }
      ]
    }
  };

  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 font-inter relative bg-gradient-to-br from-black/30 via-purple-900/10 to-black/30">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-inter font-normal text-center leading-tight mb-8 px-2">
            <span className="multi-gradient-text">Defensible care</span>, by design.
          </h2>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-white/90 font-inter mb-8 max-w-5xl mx-auto leading-relaxed">
            We're building GammaLex to reset the rules—where clarity and defensibility are the default.
          </p>
        </motion.div>

        {/* Interactive Tab Navigation */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex bg-white/5 rounded-2xl p-3 border border-white/10">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-4 px-8 py-4 rounded-xl font-inter font-medium text-lg sm:text-xl transition-all duration-300 ${
                  activeTab === index 
                    ? 'bg-gammalex-purple/20 text-gammalex-orange border border-gammalex-purple/30' 
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content Area */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-[400px]"
        >
          {activeTab === 0 && (
            <motion.div 
              className="text-center max-w-4xl mx-auto px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                {content.origin.title}
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gammalex-orange font-semibold mb-6 sm:mb-8">
                {content.origin.subtitle}
              </p>
              <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 mb-6 sm:mb-8">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed mb-4 sm:mb-6">
                  {content.origin.description}
                </p>
                <div className="bg-gradient-to-r from-gammalex-purple/20 to-gammalex-orange/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gammalex-purple/30">
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gammalex-orange">
                    "{content.origin.highlight}"
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="px-4"
            >
              <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  {content["what-we-do"].title}
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 max-w-4xl mx-auto">
                  {content["what-we-do"].subtitle}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {content["what-we-do"].items.map((item, index) => (
                  <motion.div
                    key={index}
                    className="glass rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-gammalex-purple/30 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-center gap-4 mb-4 sm:mb-6">
                      {item.icon}
                      <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-gammalex-orange transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="px-4"
            >
              <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  {content["what-sets-us-apart"].title}
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 max-w-4xl mx-auto">
                  {content["what-sets-us-apart"].subtitle}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {content["what-sets-us-apart"].items.map((item, index) => (
                  <motion.div
                    key={index}
                    className="glass rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-gammalex-purple/30 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-center gap-4 mb-4 sm:mb-6">
                      {item.icon}
                      <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-gammalex-orange transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
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
  // Updated statistics reflecting the current crisis
  const stats = [
    {
      value: '19%',
      label: 'In-network claims denied',
      description: 'Denials are accelerating in 2025',
    },
    {
      value: '37%',
      label: 'Out-of-network claims denied',
      description: 'Even higher denial rates',
    },
    {
      value: '$19.7B',
      label: 'Hospitals lose annually',
      description: 'Fighting denials across major payers',
    },
    {
      value: '22%',
      label: 'Providers lose over $500K/year',
      description: 'To denial-related write-offs',
    },
    {
      value: '20%+',
      label: 'Denials surged since 2020',
      description: 'Despite billions in healthcare AI',
    },
    {
      value: '99%',
      label: 'Appeals upheld for insurers',
      description: 'Most appeals favor the insurer, not the patient',
    },

  ];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  }

  // Group stats by category (for rows)
  const categories = [
    {
      title: "Denial Crisis",
      stats: [stats[0], stats[1]],
    },
    {
      title: "Financial Impact",
      stats: [stats[2], stats[3]],
    },
    {
      title: "System Failure",
      stats: [stats[4], stats[5]],
    },
  ];

  return (
    <section id="systemic-risk-stats" className="w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 font-inter flex justify-center items-center relative overflow-hidden bg-gradient-to-br from-black via-gammalex-purple/20 to-black">
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
            Denials are a <span className="gradient-text">financial crisis</span>
          </motion.h2>
          <motion.p
            className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-inter font-normal text-white text-center mb-6 sm:mb-8 leading-tight px-2"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            The data is clear: accelerating denials, massive losses, <br /> and failed appeals are symptoms of a broken system.
          </motion.p>
          <motion.div
            className="text-sm text-white/60 text-center mb-4 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            <div className="mb-3 text-white/70">Sources:</div>
            <div className="flex flex-wrap justify-center items-center gap-3 text-xs">
              <a href="https://www.kff.org/private-insurance/issue-brief/claims-denials-and-appeals-in-aca-marketplace-plans-in-2023/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gammalex-purple transition-colors whitespace-nowrap">
                KFF Claims Denials Report 2023
              </a>
              <span className="text-white/40">•</span>
              <a href="https://blog.healthjobsnationwide.com/healthcare-denials-are-skyrocketing-in-2025-hidden-reasons-revealed/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gammalex-purple transition-colors whitespace-nowrap">
                Healthcare Denials Skyrocketing 2025
              </a>
              <span className="text-white/40">•</span>
              <a href="https://www.os-healthcare.com/news-and-blog/denial-rates-are-climbing-what-healthcare-revenue-cycle-leaders-should-be-watching-in-2025" target="_blank" rel="noopener noreferrer" className="underline hover:text-gammalex-purple transition-colors whitespace-nowrap">
                Denial Rates Climbing 2025
              </a>
            </div>
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
    <section id="legal-heat-index" className="w-full py-24 px-4 font-inter bg-gradient-to-br from-black via-gammalex-purple/20 to-black">
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

function AccordionCrisis() {
  const [open, setOpen] = React.useState(0);
  const panels = [
    {
      id: 'crisis',
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />, color: 'red-500',
      heading: 'The Crisis',
      content: (
        <p className="text-lg sm:text-xl text-white/90 font-inter">
          Prior authorizations and claim denials are breaking healthcare. They delay care, drain revenue, and bury clinicians in paperwork—yet they're governed by complex, opaque, and constantly shifting medical policies that no human can navigate at scale.<br /><br />
          <span className="text-gammalex-orange font-bold">The real problem? A $500B+ blind spot</span> where clinical decisions collide with inconsistent payer rules, outdated workflows, and zero legal defensibility—leaving providers unarmed and patients at risk.
        </p>
      )
    },
    {
      id: 'numbers',
      icon: <BarChart2 className="w-6 h-6 text-gammalex-orange" />, color: 'gammalex-orange',
      heading: 'The Numbers',
      content: (
        <>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 mt-2">
            {[{
              stat: '92%', label: 'of care delays', desc: 'are tied to prior authorization problems' },
              { stat: '15', label: 'hours per week', desc: 'physicians spend on prior auth requests' },
              { stat: '78%', label: 'of patients', desc: 'abandon treatment due to PA barriers' },
              { stat: '43', label: 'requests per week', desc: 'average per physician' },
            ].map((item, idx) => (
              <div key={`stats-${idx}`} className="bg-white/5 rounded-2xl p-8 border border-gammalex-orange/30 flex flex-col justify-center min-h-[170px] group transition-all duration-200 hover:border-gammalex-orange hover:shadow-lg">
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gammalex-orange mb-3">
                  <AnimatedCounter value={item.stat} inView={open === 1} />
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl font-semibold text-white/80 mb-2">{item.label}</div>
                <div className="text-base sm:text-lg lg:text-xl text-white/60">{item.desc}</div>
              </div>
            ))}
          </div>
          <div className="text-sm sm:text-base text-white/60 mt-6">
            Source: <a href="https://www.ama-assn.org/system/files/prior-authorization-survey.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-gammalex-orange transition-colors">AMA 2024 Prior Authorization Physician Survey</a>
          </div>
        </>
      )
    },
    {
      id: 'impact',
      icon: <Activity className="w-6 h-6 text-gammalex-purple" />, color: 'gammalex-purple',
      heading: 'The Impact',
      content: (
        <ul className="space-y-6 mt-2">
          {[
            'Higher costs and overwhelmed clinicians',
            'Serious adverse events when care gets blocked',
            'Preventable hospitalizations due to delays',
            'Legal and medical risk for providers',
          ].map((point, idx) => (
            <li key={`impact-${idx}`} className="flex items-start gap-4 text-white/90 text-xl sm:text-2xl font-inter">
              <span className="w-4 h-4 mt-2 rounded-full bg-gammalex-purple inline-block flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )
    },
    {
      id: 'solution',
      icon: <ShieldCheck className="w-6 h-6 text-gammalex-orange" />, color: 'green-500',
      heading: 'Why It Breaks Down',
      content: (
        <div className="text-white/90 font-inter max-w-2xl mx-auto mt-2">
          <ul className="mb-6 text-base sm:text-lg lg:text-xl list-disc pl-6">
            <li>Clinical systems weren't designed to reason about policy.</li>
            <li>Legal teams weren't built to interpret medical data.</li>
            <li>AI tools today weren't built for either.</li>
          </ul>
          <div className="font-bold text-lg sm:text-xl lg:text-2xl text-gammalex-orange mb-3">This Is Why GammaLex Exists</div>
          <div className="text-lg sm:text-xl lg:text-2xl leading-relaxed">
            We're not solving workflows.<br/>
            We're building infrastructure that understands the law behind every denial, the logic within every policy, and the care at stake in every claim.
          </div>
        </div>
      )
    },
  ];
  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-4">
      {panels.map((panel, idx) => (
        <div key={panel.heading} className="rounded-2xl overflow-hidden shadow-xl" id={panel.id}>
          <button
            className={`w-full flex items-center gap-4 px-8 py-6 text-left font-bold font-inter text-2xl sm:text-3xl transition-all duration-200 focus:outline-none glass-dark border-b-2 border-transparent ${open === idx ? 'bg-white/10 border-gammalex-orange' : 'bg-white/5 hover:bg-white/10'}`}
            onClick={() => setOpen(open === idx ? -1 : idx)}
            aria-expanded={open === idx}
            aria-controls={`accordion-panel-${idx}`}
          >
            <span>{panel.icon}</span>
            <span>{panel.heading}</span>
            <span className={`ml-auto transition-transform ${open === idx ? 'rotate-90' : ''}`}>▶</span>
          </button>
          <div
            id={`accordion-panel-${idx}`}
            className={`transition-all duration-300 bg-gradient-to-br from-[#1a102a]/80 via-[#2d1850]/80 to-[#1a102a]/80 px-8 ${open === idx ? 'py-8 max-h-[1000px] opacity-100' : 'py-0 max-h-0 opacity-0 pointer-events-none'} overflow-hidden`}
            style={{ borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }}
          >
            {open === idx && (
              <div className="animate-fadein-up">
                {panel.content}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
