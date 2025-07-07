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
import { Brain as BrainIcon, Lightning, ShieldCheck, UsersThree, ChartBar, Scales } from 'phosphor-react'
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
                <div className="text-sm uppercase tracking-wider text-black font-medium mb-4">
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
                  <span className="text-xl font-medium text-gammalex-orange">Open Source Data Foundation: </span>
                  <span className="text-black text-xl">Builds and fine-tunes LLMs using a diverse set of </span>
                  <span className="text-black font-medium underline text-xl">open source datasets</span>
                  <span className="text-black text-xl">, including insurance, legal, and clinical corpora.</span>
                </div>
                <div>
                  <span className="text-xl font-medium text-gammalex-orange">Transparent Data Lineage: </span>
                  <span className="text-black text-xl">Provides clear documentation and traceability of all source datasets used for model training with advances such as </span>
                  <span className="text-black font-medium underline text-xl">audit trails</span>
                  <span className="text-black text-xl">.</span>
                </div>
              </div>
            </div>

            {/* Row 2: Multi-Domain Integration */}
            <div className="flex flex-col lg:flex-row border-b border-slate-300">
              <div className="lg:w-1/3 p-6 lg:p-8 border-r border-slate-300 bg-slate-50">
                <div className="text-sm uppercase tracking-wider text-black font-medium mb-4">
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
                  <span className="text-xl font-medium text-gammalex-orange">Multi-Domain Integration: </span>
                  <span className="text-black text-xl">Combines open source </span>
                  <span className="text-black font-medium underline text-xl">clinical</span>
                  <span className="text-black text-xl">, </span>
                  <span className="text-black font-medium underline text-xl">legal</span>
                  <span className="text-black text-xl">, and </span>
                  <span className="text-black font-medium underline text-xl">insurance data</span>
                  <span className="text-black text-xl"> for holistic decision support.</span>
                </div>
                <div>
                  <span className="text-xl font-medium text-gammalex-orange">Continuous Model Updating: </span>
                  <span className="text-black text-xl">Regularly incorporates new </span>
                  <span className="text-black font-medium underline text-xl">open datasets</span>
                  <span className="text-black text-xl"> and </span>
                  <span className="text-black font-medium underline text-xl">payer policy updates</span>
                  <span className="text-black text-xl"> to stay current with industry changes.</span>
                </div>
              </div>
            </div>

            {/* Row 3: Payer-Specific Adaptation */}
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3 p-6 lg:p-8 border-r border-slate-300 bg-slate-50">
                <div className="text-sm uppercase tracking-wider text-black font-medium mb-4">
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
                  <span className="text-xl font-medium text-gammalex-orange">Payer-Specific Policy Adaptation: </span>
                  <span className="text-black text-xl">Fine-tunes models on datasets relevant to </span>
                  <span className="text-black font-medium underline text-xl">major payer policies</span>
                  <span className="text-black text-xl"> (e.g., Aetna, UnitedHealthcare), ensuring up-to-date, </span>
                  <span className="text-black font-medium underline text-xl">payer-aligned recommendations</span>
                  <span className="text-black text-xl">.</span>
                </div>
              </div>
            </div>

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

      {/* Legal Heat Index Section */}
      <LegalHeatIndex />

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
            ? "bg-white shadow-md border-b border-gray-200 backdrop-blur-md"
            : "bg-white/90 backdrop-blur-sm"
        } font-inter`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-none px-8 lg:px-16">
          <div className="flex items-center h-20 justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center cursor-pointer"
              onClick={() => scrollToSection("hero")}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/gammalexlogo.png"
                alt="GammaLex Logo"
                className="h-24"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-32">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className="text-2xl font-medium text-gray-700 hover:text-sage-600 transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button className="lg:hidden p-2 ml-auto" onClick={() => setIsOpen(!isOpen)} whileTap={{ scale: 0.95 }}>
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              className="lg:hidden py-6 border-t border-gray-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className="block w-full text-left text-xl font-medium text-gray-700 hover:text-sage-600 py-2"
                  >
                    {item.label}
                  </button>
                ))}
                <JoinWaitlistModal
                  trigger={
                    <Button className="bg-sage-600 hover:bg-sage-700 text-white font-bold w-full py-4 text-lg rounded-xl mt-4">
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
      icon: <BrainIcon className="text-gammalex-orange" size={56} weight="regular" />,
      title: "Top-Tier LLMs for Healthcare",
      description: "GammaLex leverages the latest large language models, fine-tuned for medical and legal data, ensuring accuracy and compliance for every payer and policy.",
    },
    {
      icon: <Lightning className="text-gammalex-orange" size={56} weight="regular" />,
      title: "Accelerated Pre-Auth Decisions",
      description: "AI-powered justifications and instant policy matching reduce delays, denials, and manual work for clinicians and legal teams.",
    },
    {
      icon: <ShieldCheck className="text-gammalex-orange" size={56} weight="regular" />,
      title: "Built for Real-World Risk",
      description: "GammaLex flags legal and clinical vulnerabilities before they become denials or liability, supporting faster, stronger appeals.",
    },
    {
      icon: <UsersThree className="text-gammalex-orange" size={56} weight="regular" />,
      title: "Expert-Built, Always Evolving",
      description: "Our platform is built by AI researchers—constantly learning from new payer rules and real-world outcomes.",
    },
    {
      icon: <ChartBar className="text-gammalex-orange" size={56} weight="regular" />,
      title: "Highly Scalable & Reliable",
      description: "From solo practices to health systems, GammaLex scales securely with 99.9% uptime and enterprise-grade compliance.",
    },
    {
      icon: <Scales className="text-gammalex-orange" size={56} weight="regular" />,
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
              <div className="mb-6">{React.cloneElement(f.icon, { className: 'text-gammalex-orange', width: 56, height: 56 })}</div>
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

  return (
    <section className="w-full bg-white py-24 px-4 font-inter">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-slate-900 mb-4">
            <span className="text-gammalex-orange">When denials become lawsuits</span>
          </h2>
          <p className="text-2xl sm:text-3xl font-inter font-normal text-slate-900 text-center mb-8 leading-tight">
            The warning signs <span className="text-gammalex-orange font-semibold">GammaLex</span> is built to catch—before it's too late.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-gammalex-orange/30 hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col h-full"
              whileHover={{ y: -4, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-gammalex-orange transition-colors">
                  {caseItem.caseName}
                </h3>
                <span className="text-sm font-medium text-gammalex-orange bg-gammalex-orange/10 px-3 py-1 rounded-full">
                  {caseItem.tag}
                </span>
              </div>
              
              <div className="text-sm text-slate-600 mb-3">
                {caseItem.year}, {caseItem.jurisdiction}
              </div>
              
              <p className="text-slate-900 text-sm sm:text-base leading-relaxed mb-4">
                {caseItem.summary}
              </p>
              
              <a
                href={caseItem.source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-gammalex-orange hover:text-gammalex-orange/80 transition-colors group/link"
              >
                Read Source ↗
              </a>
            </motion.div>
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
