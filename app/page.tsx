"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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

      {/* LegalTech Trends Bar */}
      <TrendsBar />

      {/* Hero Section */}
      <motion.section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <Badge className="bg-sage-100 text-sage-800 border-sage-200 text-sm px-4 py-2 mb-8">
              Pre-Seed • Stanford CodeX Partnership
            </Badge>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold text-charcoal-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The Malpractice Engine for <span className="text-sage-600">Modern Litigators</span>
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-charcoal-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Purpose-built AI to evaluate, draft, and accelerate your caseload with confidence and precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button size="lg" className="bg-sage-600 hover:bg-sage-700 text-white px-12 py-6 text-xl rounded-full">
              Join the Waitlist
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <ProductSection />
      <ProblemSection />
      <ResearchSection />
      <VisionSection />
      <TeamSection />
      <JoinSection />
    </div>
  )
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  const navItems = [
    { id: "hero", label: "About" },
    { id: "product", label: "Product" },
    { id: "problem", label: "Problem" },
    { id: "research", label: "Research" },
    { id: "vision", label: "Vision" },
    { id: "team", label: "Team" },
    { id: "join", label: "Join" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
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

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-sage-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold text-charcoal-900">
            Gamma<span className="text-sage-600">Lex</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-lg transition-colors ${
                  activeSection === item.id ? "text-sage-600 font-medium" : "text-charcoal-600 hover:text-sage-600"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden py-4 border-t border-sage-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 text-lg text-charcoal-600 hover:text-sage-600"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

function TrendsBar() {
  const stats = [
    { label: "LegalTech Market", value: "$28B by 2025" },
    { label: "AI Adoption in Law", value: "+340% YoY" },
    { label: "Malpractice Claims", value: "85K annually" },
  ]

  return (
    <motion.div
      className="bg-charcoal-900 text-white py-4 mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center space-x-12 text-sm">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <span className="text-terracotta-400 font-semibold">{stat.value}</span>
              <span className="text-white/70 ml-2">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
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
    <section id="research" className="py-32 bg-white">
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

function VisionSection() {
  return (
    <section id="vision" className="py-32 bg-sage-600 text-white">
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

function TeamSection() {
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
    <section id="team" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-charcoal-900 mb-8">
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
