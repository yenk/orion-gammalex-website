"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, FileText, TrendingUp, Menu, X, ArrowRight, CheckCircle, Target, Clock, DollarSign } from "lucide-react"

export default function GammaLexPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black text-charcoal-900 leading-none tracking-tighter mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            GAMMA<span className="text-sage-600">LEX</span>
          </motion.h1>

          <motion.div
            className="flex items-center justify-center space-x-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-right">
              <div className="text-2xl md:text-3xl font-bold text-charcoal-900">EST.</div>
              <div className="text-2xl md:text-3xl font-bold text-charcoal-900">2024</div>
            </div>
            <div className="w-16 h-0.5 bg-sage-600"></div>
            <div className="text-left">
              <div className="text-lg md:text-xl text-charcoal-600">LEGAL AI</div>
              <div className="text-lg md:text-xl text-charcoal-600">PLATFORM</div>
            </div>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-charcoal-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            The Malpractice Engine for Modern Litigators
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button size="lg" className="bg-sage-600 hover:bg-sage-700 text-white px-12 py-6 text-xl rounded-full">
              Join the Waitlist
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <AboutSection />

      {/* Vision & Mission */}
      <VisionSection />

      {/* Product Section */}
      <ProductSection />

      {/* Problem Section (includes Research & Stats) */}
      <ProblemSection />

      {/* Research Section */}
      <ResearchSection />

      {/* Join Section */}
      <JoinSection />
    </div>
  )
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { id: "about", label: "ABOUT", mobileLabel: "About", icon: "👥" },
    { id: "team", label: "TEAM", mobileLabel: "Team", icon: "👨‍💼" },
    { id: "product", label: "PRODUCT", mobileLabel: "Product", icon: "🚀" },
    { id: "problem", label: "PROBLEM", mobileLabel: "Problem", icon: "📊" },
    { id: "join", label: "JOIN US", mobileLabel: "Join", icon: "✉️" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      // Track scroll position for navbar styling
      setIsScrolled(window.scrollY > 50)

      // Get all sections with their positions
      const sections = [
        { id: "hero", element: document.getElementById("hero") },
        { id: "about", element: document.getElementById("about") },
        { id: "team", element: document.getElementById("team") },
        { id: "product", element: document.getElementById("product") },
        { id: "problem", element: document.getElementById("problem") },
        { id: "join", element: document.getElementById("join") },
      ]

      const scrollPosition = window.scrollY + 150 // Offset for navbar height

      // Find the current section based on scroll position
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 96 // h-24 = 96px
      const targetPosition = element.offsetTop - navbarHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
    setIsOpen(false)
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest("nav")) {
        setIsOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isOpen])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-sage-200 shadow-sm"
          : "bg-white/90 backdrop-blur-sm border-b border-sage-100"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <motion.div
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection("hero")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center mr-4">
              {/* Custom Logo SVG */}
              <svg width="32" height="32" viewBox="0 0 32 32" className="mr-3">
                {/* Scales of Justice Base */}
                <rect x="15" y="20" width="2" height="8" fill="#6b8a6b" />
                <rect x="12" y="27" width="8" height="2" fill="#6b8a6b" />

                {/* Left Scale */}
                <circle cx="8" cy="16" r="3" fill="none" stroke="#6b8a6b" strokeWidth="1.5" />
                <line x1="5" y1="16" x2="11" y2="16" stroke="#6b8a6b" strokeWidth="1" />
                <line x1="8" y1="13" x2="16" y2="20" stroke="#6b8a6b" strokeWidth="1" />

                {/* Right Scale */}
                <circle cx="24" cy="16" r="3" fill="none" stroke="#6b8a6b" strokeWidth="1.5" />
                <line x1="21" y1="16" x2="27" y2="16" stroke="#6b8a6b" strokeWidth="1" />
                <line x1="24" y1="13" x2="16" y2="20" stroke="#6b8a6b" strokeWidth="1" />

                {/* Neural Network Nodes */}
                <circle cx="6" cy="6" r="1.5" fill="#3d3d3d" />
                <circle cx="16" cy="4" r="1.5" fill="#3d3d3d" />
                <circle cx="26" cy="6" r="1.5" fill="#3d3d3d" />
                <circle cx="16" cy="10" r="1.5" fill="#dc6b47" />

                {/* Neural Connections */}
                <line x1="6" y1="6" x2="16" y2="10" stroke="#3d3d3d" strokeWidth="0.5" opacity="0.6" />
                <line x1="16" y1="4" x2="16" y2="10" stroke="#3d3d3d" strokeWidth="0.5" opacity="0.6" />
                <line x1="26" y1="6" x2="16" y2="10" stroke="#3d3d3d" strokeWidth="0.5" opacity="0.6" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-charcoal-900">
              GAMMA<span className="text-sage-600">LEX</span>
            </span>
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-16">
            <div className="flex items-center space-x-12 xl:space-x-16">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm font-medium tracking-wider transition-all duration-200 py-2 px-1 ${
                    activeSection === item.id ? "text-sage-600" : "text-charcoal-600 hover:text-sage-600"
                  }`}
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 0 }}
                >
                  {item.label}
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-sage-600 rounded-full"
                      layoutId="activeIndicator"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              className="bg-sage-600 hover:bg-sage-700 text-white px-6 py-2 text-sm font-medium transition-all duration-200 hover:shadow-lg"
              onClick={() => scrollToSection("join")}
            >
              JOIN WAITLIST
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 rounded-lg hover:bg-sage-50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={isOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X className="w-6 h-6 text-charcoal-600" /> : <Menu className="w-6 h-6 text-charcoal-600" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="lg:hidden overflow-hidden"
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="py-6 border-t border-sage-100">
            <div className="grid grid-cols-2 gap-4 mb-6">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex flex-col items-center p-4 rounded-xl transition-all duration-200 ${
                    activeSection === item.id
                      ? "bg-sage-100 text-sage-700"
                      : "text-charcoal-600 hover:bg-sage-50 hover:text-sage-600"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-2xl mb-2">{item.icon}</span>
                  <span className="text-sm font-medium tracking-wider">{item.mobileLabel}</span>
                  {activeSection === item.id && (
                    <motion.div
                      className="w-8 h-0.5 bg-sage-600 rounded-full mt-2"
                      initial={{ width: 0 }}
                      animate={{ width: 32 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <div className="pt-4 border-t border-sage-100">
              <Button
                className="w-full bg-sage-600 hover:bg-sage-700 text-white text-sm font-medium py-3"
                onClick={() => scrollToSection("join")}
              >
                <span className="mr-2">✉️</span>
                JOIN WAITLIST
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

function AboutSection() {
  const team = [
    {
      name: "Sarah Chen",
      role: "Co-Founder & CEO",
      background: "Former BigLaw partner, Stanford JD/CS",
      image: "/placeholder.svg?height=300&width=300&query=professional woman CEO headshot",
    },
    {
      name: "Michael Rodriguez",
      role: "Co-Founder & CTO",
      background: "Ex-Google AI, PhD Computer Science",
      image: "/placeholder.svg?height=300&width=300&query=professional man CTO headshot",
    },
    {
      name: "Dr. Emily Watson",
      role: "Chief Medical Advisor",
      background: "20+ years emergency medicine, malpractice expert",
      image: "/placeholder.svg?height=300&width=300&query=professional woman doctor headshot",
    },
  ]

  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal-900 mb-12 leading-tight">
            Malpractice Litigation, <span className="text-sage-600">Reengineered</span> for the Modern Lawyer
          </h2>

          <div className="space-y-8 text-xl text-charcoal-700 leading-relaxed">
            <p>
              GammaLex was founded on a simple but urgent idea: medical malpractice litigation is too slow, too complex,
              and too uncertain. We're building AI that changes that, starting with solutions that help litigators
              predict claim viability, streamline drafting, and make smarter decisions faster.
            </p>

            <p>
              Our mission is to make malpractice litigation more efficient, equitable, and data-driven, giving lawyers
              the clarity they need from the moment a case lands on their desk.
            </p>

            <p>
              While we're focused on empowering litigators first, our AI engine is designed to grow with the malpractice
              ecosystem — enabling future tools for claimants, insurers, and hospital risk teams.
            </p>
          </div>

          <motion.div
            className="mt-12 pt-8 border-t border-sage-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-sage-600 mb-2">2024</div>
                <div className="text-charcoal-600">Founded</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-sage-600 mb-2">Stanford</div>
                <div className="text-charcoal-600">CodeX Partnership</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-sage-600 mb-2">AI-First</div>
                <div className="text-charcoal-600">Legal Platform</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Team Section */}
      <div id="team" className="max-w-7xl mx-auto px-6 pt-32">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal-900 mb-8">
            Mission-Driven <span className="text-sage-600">Expertise</span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            Our team combines deep legal expertise, cutting-edge AI research, and medical domain knowledge to build the
            future of legal technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-6">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-charcoal-900 mb-2">{member.name}</h3>

              <p className="text-lg text-sage-600 font-medium mb-4">{member.role}</p>

              <p className="text-charcoal-600">{member.background}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function VisionSection() {
  return (
    <section className="py-32 bg-sage-600 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-12 leading-tight">
            Transforming how malpractice is understood and resolved — efficiently, equitably, and accessibly.
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-2xl text-sage-100 mb-8 leading-relaxed">
              We're building the infrastructure for a more just legal system. Starting with litigators, expanding to
              serve claimants, and ultimately transforming how medical risk is understood across the entire healthcare
              ecosystem.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-xl font-semibold mb-2">For Litigators</h3>
                <p className="text-sage-200">Faster case evaluation and stronger arguments</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-semibold mb-2">For Claimants</h3>
                <p className="text-sage-200">Accessible justice and fair representation</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-2">For Risk Teams</h3>
                <p className="text-sage-200">Predictive insights and prevention strategies</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ProductSection() {
  const products = [
    {
      icon: Brain,
      title: "Viability Prediction",
      description: "AI-powered case strength assessment in seconds",
      benefit: "Reduce weak case intake by 60%",
      color: "sage",
    },
    {
      icon: FileText,
      title: "AI-Powered Drafting",
      description: "Generate timelines, briefs, and summaries instantly",
      benefit: "Cut document prep time by 75%",
      color: "terracotta",
    },
    {
      icon: TrendingUp,
      title: "Litigation Signal Detection",
      description: "Identify patterns and precedents across cases",
      benefit: "Uncover hidden case insights",
      color: "bronze",
    },
  ]

  return (
    <section id="product" className="py-32 bg-sage-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-charcoal-900 mb-8">
            Three Tools. <span className="text-sage-600">Infinite Advantage.</span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            Purpose-built AI that understands the nuances of medical malpractice litigation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                <CardContent className="p-12">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${
                      product.color === "sage"
                        ? "bg-sage-100"
                        : product.color === "terracotta"
                          ? "bg-terracotta-100"
                          : "bg-bronze-100"
                    }`}
                  >
                    <product.icon
                      className={`w-8 h-8 ${
                        product.color === "sage"
                          ? "text-sage-600"
                          : product.color === "terracotta"
                            ? "text-terracotta-600"
                            : "text-bronze-600"
                      }`}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-charcoal-900 mb-4">{product.title}</h3>

                  <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">{product.description}</p>

                  <div
                    className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                      product.color === "sage"
                        ? "bg-sage-100 text-sage-800"
                        : product.color === "terracotta"
                          ? "bg-terracotta-100 text-terracotta-800"
                          : "bg-bronze-100 text-bronze-800"
                    }`}
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {product.benefit}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProblemSection() {
  const problems = [
    {
      stat: "60%",
      title: "of medmal cases don't meet viability thresholds",
      description: "Yet lawyers spend weeks evaluating each one manually",
      icon: Target,
    },
    {
      stat: "31 months",
      title: "average case resolution time",
      description: "Slow drafting and buried insights extend timelines",
      icon: Clock,
    },
    {
      stat: "$4.2B",
      title: "annual malpractice payouts",
      description: "But only 23% of claims result in payment",
      icon: DollarSign,
    },
  ]

  return (
    <section id="problem" className="py-32 bg-charcoal-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            The Problem is <span className="text-terracotta-400">Systemic</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Medical malpractice litigation is broken. Manual processes, buried insights, and inefficient triage waste
            resources and delay justice.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
                <div className="bg-terracotta-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <problem.icon className="w-8 h-8 text-terracotta-400" />
                </div>

                <div className="text-4xl md:text-5xl font-bold text-terracotta-400 mb-4">{problem.stat}</div>

                <h3 className="text-xl font-semibold mb-4">{problem.title}</h3>

                <p className="text-white/70 leading-relaxed">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ResearchSection() {
  const partnerships = [
    { name: "Stanford CodeX", type: "Research Partnership" },
    { name: "Medical Datasets", type: "Closed Data Access" },
    { name: "Expert Advisors", type: "Domain Expertise" },
  ]

  const stats = [
    { value: "500K+", label: "Medical Records Analyzed" },
    { value: "15+", label: "Expert Advisors" },
    { value: "98.7%", label: "Prediction Accuracy" },
    { value: "3 Years", label: "R&D Investment" },
  ]

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-charcoal-900 mb-8">
            Built on <span className="text-sage-600">Rigorous Research</span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            Our AI is trained on the largest dataset of medical malpractice cases, validated by leading experts, and
            backed by Stanford research.
          </p>
        </motion.div>

        {/* Partnerships */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {partnerships.map((partnership, index) => (
            <div key={index} className="text-center">
              <div className="bg-sage-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-charcoal-900 mb-2">{partnership.name}</h3>
                <p className="text-sage-600 font-medium">{partnership.type}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-sage-600 mb-2">{stat.value}</div>
              <div className="text-charcoal-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function JoinSection() {
  return (
    <section id="join" className="py-32 bg-charcoal-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Transform Your Practice <span className="text-terracotta-400">With AI</span>
          </h2>

          <p className="text-2xl text-white/70 mb-12 leading-relaxed">
            Join the waitlist for early access to GammaLex. Be among the first to experience the future of medical
            malpractice litigation.
          </p>

          <div className="max-w-md mx-auto mb-12">
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 text-lg py-6"
              />
              <Button className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-8 py-6 text-lg">
                Join Waitlist
              </Button>
            </div>
          </div>

          <div className="text-center">
            <p className="text-white/50 mb-8">Or schedule a demo with our team</p>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg">
              Schedule Demo
            </Button>
          </div>

          {/* Pre-seed Investor Note */}
          <motion.div
            className="mt-20 pt-12 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">For Investors</h3>
              <p className="text-white/70 mb-6">
                We're raising our pre-seed round to accelerate product development and expand our legal partnerships.
                Join us in building the future of legal AI.
              </p>
              <Button
                variant="outline"
                className="border-terracotta-400 text-terracotta-400 hover:bg-terracotta-400 hover:text-white"
              >
                Investor Deck
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
