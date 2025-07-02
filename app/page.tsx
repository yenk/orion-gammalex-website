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
import { ProductFeaturesDemo, ViabilityScoring, PreAuthWriter, ComplyDraft, PolicyLookup, AskGamma } from "@/components/ProductFeaturesDemo"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import AnimatedText from "@/components/ui/AnimatedText"
import { Progress } from '@/components/ui/progress'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip'
import React from 'react'
import { Brain as BrainIcon, Lightning, ShieldCheck, UsersThree, ChartBar, Scales } from 'phosphor-react'

/**
 * GammaLexPage - Homepage for GammaLex: Your AI Copilot for Medical Pre-Auth and Denial Risk.
 * Uses modular hero and toolkit sections, keeping layout, navigation, and join waitlist CTA.
 */
export default function GammaLexPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const isFooterVisible = useInView(ctaRef, { once: false, margin: "0px 0px -40% 0px" })

  useEffect(() => {
    // Snap scroll setup
    const sections = document.querySelectorAll(".snap-section")
    sections.forEach((section) => {
      section.classList.add("snap-start")
    })
  }, [])

  return (
    <div
      ref={containerRef}
      className="min-h-screen lg:h-screen overflow-y-scroll"
    >
      <Navigation />

      {/* Hero Section */}
      <CopilotHero />

      {/* Why GammaLex Section */}
      <section id="why-gammalex" className="py-24 px-2 sm:px-0 font-inter flex justify-center items-center bg-slate-100">
        <div className="w-full max-w-6xl px-0 sm:px-0 py-0 flex flex-col gap-16 items-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-inter font-normal leading-tight text-center mb-8 pt-8">
            Because real <span className="text-orange-500">prior auth decisions</span> live at the intersection of medicine, policy, and law <br />
          </h1>
          <p className="text-2xl sm:text-3xl font-inter text-center text-black max-w-4xl mx-auto leading-snug mb-20">
            GammaLex exists to address the real reasons behind medical denials—by empowering clinicians and legal teams with AI that understands both the clinical and legal landscape.
          </p>
          <div className="w-full flex flex-col gap-0">
            {/* Why It Matters Row */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-between py-20 gap-16">
              {/* Left: Heading */}
              <div className="w-full sm:w-1/2 flex justify-center sm:justify-end px-4 sm:px-0">
                <h3 className="text-4xl sm:text-5xl font-normal font-inter text-slate-900 text-center sm:text-right leading-tight">
                  Why <span className="text-gammalex-orange">It Matters</span>
                </h3>
              </div>
              {/* Right: Supporting Text */}
              <div className="w-full sm:w-1/2 flex items-center justify-center px-4 sm:px-0">
                <p className="text-2xl sm:text-3xl text-slate-700 font-inter text-center sm:text-left leading-relaxed max-w-2xl">
                  Pre-authorization isn't just paperwork—it's the root cause of <span className="text-gammalex-orange font-semibold">delays</span>, <span className="text-gammalex-orange font-semibold">burnout</span>, and <span className="text-gammalex-orange font-semibold">legal risk</span> in healthcare. Fixing it means <span className="text-gammalex-orange font-semibold">better care</span>, <span className="text-gammalex-orange font-semibold">less stress</span>, and <span className="text-gammalex-orange font-semibold">fewer denials</span> for everyone.
                </p>
              </div>
            </div>
            <div className="w-full border-t border-slate-100" />
            {/* The Solution Row */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-between py-20 gap-16">
              {/* Left: Heading */}
              <div className="w-full sm:w-1/2 flex justify-center sm:justify-end px-4 sm:px-0">
                <h3 className="text-4xl sm:text-5xl font-normal font-inter text-slate-900 text-center sm:text-right leading-tight">
                  The <span className="text-gammalex-orange">Solution</span>
                </h3>
              </div>
              {/* Right: Supporting Text */}
              <div className="w-full sm:w-1/2 flex items-center justify-center px-4 sm:px-0">
                <ul className="space-y-6 max-w-2xl">
                  <li className="text-2xl sm:text-3xl text-slate-700 font-inter text-center sm:text-left leading-relaxed"><span className="font-bold text-slate-900">GammaLex</span> is the world's first clinical-legal AI built to defend care before it's denied.</li>
                  <li className="text-2xl sm:text-3xl text-slate-700 font-inter text-center sm:text-left leading-relaxed">
                    Understands <span className="text-gammalex-orange font-semibold">pre-auths</span>. It deciphers medical billing codes, coverage rules, and physician notes to generate <span className="text-gammalex-orange font-semibold">bulletproof justifications</span>—and it flags legal vulnerabilities before they become <span className="text-gammalex-orange font-semibold">liability</span>.
                  </li>
              </ul>
              </div>
            </div>
            <div className="w-full border-t border-slate-100" />
          </div>
          <div className="w-full flex flex-col items-center gap-6 mt-6">
            <div className="flex flex-wrap justify-center gap-4 mb-2">
              <span className="bg-sage-100 rounded-2xl px-6 py-2 text-sage-700 font-bold text-base">Less denial</span>
              <span className="bg-sage-100 rounded-2xl px-6 py-2 text-sage-700 font-bold text-base">Less burnout</span>
              <span className="bg-sage-100 rounded-2xl px-6 py-2 text-sage-700 font-bold text-base">Reduced legal risk</span>
              <span className="bg-sage-100 rounded-2xl px-6 py-2 text-sage-700 font-bold text-base">Faster care</span>
            </div>
            <a href="#cta" className="inline-block bg-sage-600 text-white text-lg font-bold rounded-2xl px-10 py-4 shadow hover:bg-sage-700 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:ring-offset-2 transition">See GammaLex in Action</a>
          </div>
        </div>
      </section>

      {/* The Problem Stat Strips Section */}
      <SystemicRiskStats />

      <div className="w-full bg-sage-50 border-b border-sage-100">
        <ProductFeaturesDemo />
      </div>

      {/* About Section */}
      <AboutSection />

      {/* GammaLex AI Copilot Cloud Section */}
      <section id="copilot-cloud" className="w-full min-h-[80vh] flex flex-col justify-center items-center bg-black py-32 px-2 sm:px-0 font-inter">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-0 lg:gap-64">
          <div className="flex-1 flex flex-col justify-center items-start">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-normal text-left font-inter leading-tight text-white">
              AI COPILOT<br />FOR PRE-AUTH AND <br />COMPLIANCE
            </h2>
          </div>
          <div className="flex-1 flex flex-col justify-center items-end mt-48 lg:mt-64">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-normal text-right font-inter leading-tight text-gammalex-orange">
              BUILT ON THE<br />FRONTIER OF<br />CLINICAL-LEGAL<br />INTELLIGENCE.
            </h2>
          </div>
        </div>
        {/* Bottom row: left and right, spaced further from above */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-row items-start justify-between mt-20 mb-20 gap-64">
          <div className="text-4xl font-inter text-white font-normal text-left">Innovations</div>
          <div className="text-4xl font-inter text-white font-normal text-left max-w-4xl">
            AI models, datasets, and compliance tools—built for the complexity of real-world care and coverage.
          </div>
        </div>
      </section>

      {/* Join Section (Partner With Us) */}
      <div ref={ctaRef}>
        <section id="join" className="min-h-screen flex items- bg-black text-white">
          <div className="max-w-none w-full px-8 lg:px-16 py-8">
            <div className="flex flex-col items-center max-w-3xl mx-auto">
              <div className="flex flex-col items-center gap-4 w-full mb-8 sm:mb-12">
                <span className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight font-inter text-center break-words tracking-tight">
                  Be the first to experience GammaLex.
                </span>
                <span className="text-2xl sm:text-3xl font-bold leading-tight font-inter text-center break-words tracking-tight">
                  AI-built for speed, accuracy, and outcomes that matter.
                </span>
              </div>
              <div className="bg-black rounded-3xl shadow-lg border border-terracotta-300 p-6 sm:p-14 w-full flex flex-col items-center font-inter">
                <JoinWaitlistModal
                  trigger={
                    <button className="text-2xl sm:text-4xl font-extrabold text-terracotta-400 text-center w-full font-inter focus:outline-none">
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
    { id: "product", label: "SOLUTIONS" },
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
              className="flex items-center cursor-pointer relative overflow-hidden"
              onClick={() => scrollToSection("hero")}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                {/* Logo Image */}
                <motion.img
                  src="/gammalexlogo-transparent.png"
                  alt="GammaLex Logo"
                  className="h-24 relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.8 }}
                />

                {/* Sliding Block Overlay */}
                <motion.div
                  className="absolute inset-0 bg-sage-600 z-20"
                  initial={{ x: "0%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 1.8,
                    ease: [0.76, 0, 0.24, 1],
                    delay: 0.3,
                  }}
                />

                {/* Logo Reveal Mask */}
                <motion.div
                  className="absolute inset-0 z-30"
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={{ clipPath: "inset(0 0% 0 0)" }}
                  transition={{
                    duration: 1.8,
                    ease: [0.76, 0, 0.24, 1],
                    delay: 0.3,
                  }}
                >
                  <img src="/gammalexlogo-transparent.png" alt="GammaLex Logo" className="h-24" />
                </motion.div>
              </div>
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
                      Join the Waitlist
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
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-inter font-normal text-center leading-tight mb-8">
          <span className="text-slate-900">Forge the </span>
          <span className="text-gammalex-orange">AI frontier</span>
          <span className="text-slate-900">. Train on </span>
          <span className="text-gammalex-orange">expert-built</span>
          <span className="text-slate-900"> healthcare LLMs</span>
        </h2>
        <p className="text-2xl sm:text-3xl font-inter text-center text-black max-w-4xl mx-auto leading-snug mb-20">
          GammaLex delivers payer-specific, policy-aware AI built for medical pre-auth and denial risk. <br />
          <br />
          Our platform fine-tunes large language models to reflect real-world data, payer rules, and compliance demands—empowering care and compliance teams to outsmart denials and accelerate treatment.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16 w-full mt-4">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center px-6">
              <div className="mb-6">{React.cloneElement(f.icon, { className: 'text-gammalex-orange', width: 56, height: 56 })}</div>
              <div className="text-2xl sm:text-3xl mb-3 text-gammalex-orange font-inter">{f.title}</div>
              <div className="text-base sm:text-lg text-slate-700 leading-relaxed font-inter">{f.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SystemicRiskStats() {
  // Most urgent, deduplicated stats
  const stats = [
    {
      value: '93%',
      label: 'Physicians report care delays',
      description: 'Prior auth delays patient care',
    },
    {
      value: '89%',
      label: 'Physicians: burnout',
      description: 'Prior auth contributes to burnout',
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

  return (
    <section className="w-full bg-sage-100 py-32 px-2 sm:px-0 font-inter flex justify-center items-center">
      <div className="w-full max-w-6xl px-0 sm:px-0 py-0 flex flex-col gap-16 items-center">
        <div className="flex flex-col items-center mb-8">
          <div className="mb-6">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none"><circle cx="28" cy="28" r="28" fill="#FF8800" opacity="0.15"/><path d="M28 16v12" stroke="#FF8800" strokeWidth="3.5" strokeLinecap="round"/><circle cx="28" cy="38" r="2.5" fill="#FF8800"/></svg>
          </div>
          <h2 className="text-5xl sm:text-6xl font-normal text-gammalex-orange text-center mb-4 leading-tight">
            Pre-Auth is a Healthcare Crisis
          </h2>
          <p className="text-3xl sm:text-4xl font-inter font-normal text-slate-900 text-center mb-8 leading-tight">
            The data is clear: delays, burnout, <br /> and denials are symptoms of a broken system.
    
          </p>
        
          <div className="text-sm text-slate-500 text-center mb-4">
            Source: <a href="https://www.ama-assn.org/system/files/prior-authorization-survey.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-gammalex-orange">AMA 2024 Prior Authorization Physician Survey</a>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-24 gap-y-14 w-full max-w-4xl mb-12">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-start">
              <div className="text-5xl sm:text-6xl font-black text-gammalex-orange mb-2 font-inter leading-tight">{s.value}</div>
              <div className="text-2xl font-bold text-slate-900 mb-1 font-inter leading-snug">{s.label}</div>
              <div className="text-lg text-slate-700 font-inter leading-normal">{s.description}</div>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col items-center mt-2">
          <div className="inline-block bg-gammalex-orange text-white text-2xl font-bold rounded-2xl px-10 py-4 shadow font-inter tracking-wide">GammaLex exists to fix this.</div>
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
            ©{new Date().getFullYear()} GammaLex. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

// Move stats array to module scope for reuse
  const stats = [
    {
      icon: '📄',
      label: 'Avg. Pre-Auths per Physician per Week',
      stat: 40,
      subtext: 'Pre-authorization requests weekly',
      source: 'https://www.ajmc.com/view/ama-survey-highlights-growing-burden-of-prior-authorization-on-physicians-patients?utm_source=chatgpt.com',
      sourceLabel: 'AJMC',
    },
    {
      icon: '⏱️',
      label: 'Hours Spent on Pre-Auth per Week',
      stat: 13,
      statSuffix: '+',
      subtext: 'Hours physicians & staff spend weekly',
      source: 'https://www.ajmc.com/view/ama-survey-highlights-growing-burden-of-prior-authorization-on-physicians-patients?utm_source=chatgpt.com',
      sourceLabel: 'AJMC',
    },
    {
      icon: '🚫',
      label: 'Care Delays Due to Pre-Auth',
      stat: 93,
      statSuffix: '%',
      subtext: 'Physicians report delayed patient care',
      source: 'https://www.ama-assn.org/system/files/prior-authorization-survey.pdf?utm_source=chatgpt.com',
      sourceLabel: 'AMA',
    },
    {
      icon: '💥',
      label: 'Burnout Linked to Pre-Auth',
      stat: 89,
      statSuffix: '%',
      subtext: 'Physicians say PA contributes to burnout',
      source: 'https://www.azmed.org/news/694951/AMA-Releases-its-2024-Prior-Authorization-Physician-Survey-.htm?utm_source=chatgpt.com',
      sourceLabel: 'AZMed',
    },
    {
      icon: '⚠️',
      label: 'Treatment Abandonment or Harm',
      stat: 94,
      statDisplay: '82–94%',
      subtext: 'PAs linked to serious adverse events',
      source: 'https://www.ama-assn.org/system/files/prior-authorization-survey.pdf?utm_source=chatgpt.com',
      sourceLabel: 'AMA',
    },
  ]
