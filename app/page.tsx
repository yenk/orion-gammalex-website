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
      <TeamSection />
    </section>
  )
}

function TeamSection() {
  const [expandedMember, setExpandedMember] = useState<number | null>(null)
  const [modalMember, setModalMember] = useState<number | null>(null)
  const [visibleSections, setVisibleSections] = useState<number[]>([])

  const team = [
    {
      name: "Yen Kha",
      role: "Founder & CEO",
      snippet:
        "Reimagining justice at the intersection of medicine, law, and AI. Former Fortune 500 AI leader turned legal tech founder with a mission to make justice accessible to everyone.",
      bioSections: [
        {
          title: "The Mission",
          content:
            "Yen Kha didn't set out to build a company—she set out to build what she wished existed. As the founder of GammaLex and co-founder of Justice For All (J4ALL), Yen is reimagining justice at the intersection of medicine, law, and artificial intelligence.",
        },
        {
          title: "The Vision",
          content:
            "Her work is driven by a belief that technology shouldn't just streamline systems—it should make them more human, more equitable, and more accessible. Yen's career spans both nimble ventures and Fortune 500 companies, where she led transformative AI efforts across healthcare, legal tech, and enterprise platforms.",
        },
        {
          title: "The Journey",
          content:
            "Over time, she grew increasingly frustrated that the systems most in need of innovation were often the most resistant to change. With the courage to leave behind stability and the conviction that technology should serve people—not just institutions—Yen took a different path.",
        },
        {
          title: "The Impact",
          content:
            "She co-founded J4ALL to bring legal access to communities long left behind, then launched GammaLex to tackle one of America's most complex and inequitable systems: medical malpractice. Her multidisciplinary background—combining AI, healthcare, and law—shapes a systems-level approach to building tools that restore trust, empower professionals, and center real people.",
        },
        {
          title: "Beyond Work",
          content:
            "Outside of work, Yen looks for challenge and calm in equal measure. She travels to remote places, climbs big mountains, cycles long distances, and runs trails that push her limits. 'Mountains,' she likes to say, 'might as well be my other last name.' She also finds joy in stillness—baking intricate pastries and sketching quiet scenes that feel like home.",
        },
        {
          title: "The Purpose",
          content:
            "GammaLex isn't just a platform. It's a mission—born from lived experience, powered by purpose, and grounded in the belief that justice should belong to everyone.",
        },
      ],
      image: "/images/yenkha.jpg",
      linkedin: "https://www.linkedin.com/in/yenkha/",
      portfolio: "http://yenkha.com/",
    },
    {
      name: "Bruce Cahan",
      role: "Strategic Advisor",
      snippet:
        "Recovering Wall Street lawyer, Stanford lecturer, and 9/11 emergency responder. Leading expert in legal innovation, design thinking, and institutional transformation at the intersection of law and technology.",
      bioSections: [
        {
          title: "Background",
          content:
            "Bruce Cahan is a recovering Wall Street lawyer (Weil Gotshal & Manges), HK merchant banker, geospatial technology finance pioneer, 9/11 emergency responder and lecturer at Stanford University's School of Engineering.",
        },
        {
          title: "Stanford Leadership",
          content:
            "Since 2013, Bruce created and taught four courses at Stanford: Understanding Wall Street on the Buy Side (MS&E 449), Redesigning Finance (DESIGN 245), Sustainable Banking (CEE 244A), and the Ethics of Finance & Financial Engineering (MS&E 148).",
        },
        {
          title: "Research & Innovation",
          content:
            "He is a member of the Center for Legal Informatics (CodeX) at Stanford Law School, the Corporations and Society Initiative at Stanford's Graduate School of Business, and the Center for Human Rights & International Justice.",
        },
        {
          title: "Current Work",
          content:
            "As CEO of Reimagineering Corporation and Urban Logic, Inc., Bruce focuses on using design, finance and organizational theories to anticipate how large institutions must change to achieve functional innovation and diversify meaningful inclusion of diverse innovators.",
        },
        {
          title: "Client Impact",
          content:
            "Urban Logic's clients include Apple, the U.S. Department of Defense, the Federal Geographic Data Committee, the Environmental Protection Agency and other large organizations requiring institutional transformation.",
        },
        {
          title: "Education & Family",
          content:
            "Bruce graduated with a B.S. in Economics and International Business from The Wharton School and a J.D. from Temple Law School. He is licensed as an attorney in CA, NY and PA. He has twin sons: Jacob (Jake) Cahan, a financial technologist, and Dr. Eli Cahan, a neonatal pediatrician and investigative journalist.",
        },
      ],
      image: "/images/brucecahan.jpg",
      linkedin: "https://www.linkedin.com/in/brucecahan/",
    },
  ]

  const handleMemberClick = (index: number) => {
    setExpandedMember(expandedMember === index ? null : index)
  }

  const openModal = (index: number) => {
    setModalMember(index)
    setVisibleSections([])
    // Progressive reveal of sections
    setTimeout(() => {
      const member = team[index]
      member.bioSections.forEach((_, sectionIndex) => {
        setTimeout(() => {
          setVisibleSections((prev) => [...prev, sectionIndex])
        }, sectionIndex * 800) // 800ms delay between each section
      })
    }, 300)
  }

  const closeModal = () => {
    setModalMember(null)
    setVisibleSections([])
  }

  return (
    <>
      <div id="team" className="max-w-6xl mx-auto px-6 pt-32">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal-900 mb-6">The Minds Behind GammaLex</h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            Building the future of legal AI with deep expertise in law, technology, and healthcare.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Profile Card */}
              <div className="text-center">
                {/* Photo */}
                <motion.div
                  className="relative mb-6 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  onClick={() => handleMemberClick(index)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 mx-auto w-64 h-64">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>

                {/* Name and Title */}
                <div className="mb-6">
                  <motion.button
                    onClick={() => handleMemberClick(index)}
                    className="text-center w-full group/button"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-charcoal-900 mb-2 group-hover/button:text-sage-600 transition-colors duration-200">
                      {member.name}
                    </h3>
                    <p className="text-lg text-sage-600 font-medium group-hover/button:text-sage-700 transition-colors duration-200">
                      {member.role}
                    </p>
                  </motion.button>

                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-3 mt-4">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 bg-sage-100 hover:bg-sage-200 rounded-full transition-colors duration-200"
                      >
                        <svg className="w-5 h-5 text-sage-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    )}
                    {member.portfolio && (
                      <a
                        href={member.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-charcoal-900 hover:bg-charcoal-800 text-white text-sm font-medium rounded-full transition-colors duration-200"
                      >
                        Portfolio
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Short Bio Snippet */}
              <motion.div
                className="overflow-hidden"
                initial={false}
                animate={{
                  height: expandedMember === index ? "auto" : 0,
                  opacity: expandedMember === index ? 1 : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="bg-sage-50 rounded-xl p-6 border border-sage-100 mt-4"
                  initial={{ y: -20 }}
                  animate={{ y: expandedMember === index ? 0 : -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <p className="text-charcoal-700 leading-relaxed mb-4">{member.snippet}</p>
                  <button
                    onClick={() => openModal(index)}
                    className="inline-flex items-center text-sage-600 hover:text-sage-700 font-medium transition-colors duration-200"
                  >
                    Read Full Story
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Expand Hint */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-sage-600 text-sm">Click on names to learn more about our team</p>
        </motion.div>
      </div>

      {/* Bio Modal */}
      {modalMember !== null && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-start justify-center p-4 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="bg-white rounded-2xl w-full max-w-4xl my-8 relative shadow-2xl"
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header - Fixed */}
            <div className="sticky top-0 bg-white border-b border-sage-100 p-6 rounded-t-2xl z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                    <img
                      src={team[modalMember].image || "/placeholder.svg"}
                      alt={team[modalMember].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-charcoal-900">{team[modalMember].name}</h3>
                    <p className="text-sage-600 font-medium">{team[modalMember].role}</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-sage-50 rounded-full transition-colors duration-200 flex-shrink-0"
                >
                  <X className="w-6 h-6 text-charcoal-600" />
                </button>
              </div>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="p-6 space-y-8 max-h-[70vh] overflow-y-auto">
              {team[modalMember].bioSections.map((section, sectionIndex) => (
                <motion.div
                  key={sectionIndex}
                  className="opacity-0"
                  animate={{
                    opacity: visibleSections.includes(sectionIndex) ? 1 : 0,
                    y: visibleSections.includes(sectionIndex) ? 0 : 20,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="border-l-4 border-sage-200 pl-6">
                    <h4 className="text-xl font-semibold text-sage-600 mb-3">{section.title}</h4>
                    <p className="text-charcoal-700 leading-relaxed text-lg">{section.content}</p>
                  </div>
                </motion.div>
              ))}

              {/* Social Links in Modal */}
              <motion.div
                className="pt-6 border-t border-sage-100 flex items-center gap-4"
                animate={{
                  opacity: visibleSections.length === team[modalMember].bioSections.length ? 1 : 0,
                }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="text-sm font-medium text-charcoal-600">Connect:</span>
                {team[modalMember].linkedin && (
                  <a
                    href={team[modalMember].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-sage-100 hover:bg-sage-200 text-sage-700 rounded-full transition-colors duration-200"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                )}
                {team[modalMember].portfolio && (
                  <a
                    href={team[modalMember].portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-charcoal-900 hover:bg-charcoal-800 text-white rounded-full transition-colors duration-200"
                  >
                    Portfolio
                  </a>
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
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
  const problemStats = [
    {
      stat: "60%",
      title: "of medmal cases don't meet viability thresholds",
      description: "Yet lawyers spend weeks evaluating each one manually",
      source: "NBER, 2020",
      sourceUrl: "https://www.nber.org/papers/w27177",
      icon: Target,
    },
    {
      stat: "31 months",
      title: "Average case resolution time",
      description: "Slow drafting and buried insights extend timelines",
      source: "JAMA, 2017",
      sourceUrl: "https://jamanetwork.com/journals/jama/fullarticle/2654093",
      icon: Clock,
    },
    {
      stat: "Only 23%",
      title: "of claims result in payout",
      description: "Despite $4.2B paid annually",
      source: "NPDB, 2024",
      sourceUrl: "https://www.npdb.hrsa.gov/resources/reports/annualReports.jsp",
      icon: DollarSign,
    },
  ]

  const stakesStats = [
    {
      emoji: "🧠",
      stat: "$469,000",
      title: "Avg. payout per neurosurgery malpractice claim",
      source: "PMC, 2021",
      sourceUrl: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8425643/",
    },
    {
      emoji: "👶",
      stat: "$488,852",
      title: "Avg. settlement per OB/GYN malpractice case",
      source: "JAMA HF, 2023",
      sourceUrl: "https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2801234",
    },
    {
      emoji: "💰",
      stat: "$1B+",
      title: "Total malpractice payouts per year (across specialties)",
      source: "AJHE, 2020",
      sourceUrl: "https://www.ajmc.com/view/medical-malpractice-costs-continue-to-rise",
    },
  ]

  return (
    <section id="problem" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* SECTION 1: The Problem */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold text-charcoal-900 mb-8 leading-tight">
              Medical Malpractice is <span className="text-terracotta-500">Broken</span>
            </h2>
            <p className="text-xl md:text-2xl text-charcoal-600 max-w-4xl mx-auto leading-relaxed">
              Litigators face time sinks, dropped claims, and manual triage — while justice hangs in the balance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {problemStats.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-sage-50 border-0 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="bg-terracotta-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <problem.icon className="w-8 h-8 text-terracotta-600" />
                    </div>

                    <div className="text-4xl md:text-5xl font-bold text-terracotta-600 mb-4">{problem.stat}</div>

                    <h3 className="text-xl font-semibold text-charcoal-900 mb-4 leading-tight">{problem.title}</h3>

                    <p className="text-charcoal-600 leading-relaxed mb-4">{problem.description}</p>

                    <a
                      href={problem.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-terracotta-600 font-medium hover:text-terracotta-700 hover:underline transition-colors duration-200 inline-flex items-center"
                    >
                      → Source: {problem.source}
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SECTION 2: The Stakes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold text-charcoal-900 mb-8 leading-tight">
              High Stakes. High Pressure. <span className="text-sage-600">No Room for Error.</span>
            </h2>
            <p className="text-xl md:text-2xl text-charcoal-600 max-w-4xl mx-auto leading-relaxed">
              Neurosurgeons and OB/GYNs face career-defining litigation. GammaLex helps lawyers rise to the moment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stakesStats.map((stake, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-white border-2 border-sage-100 shadow-lg hover:shadow-2xl hover:border-sage-300 transition-all duration-500 group-hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="text-5xl mb-6">{stake.emoji}</div>

                    <div className="text-4xl md:text-5xl font-bold text-sage-600 mb-4">{stake.stat}</div>

                    <h3 className="text-lg font-semibold text-charcoal-900 mb-4 leading-tight">{stake.title}</h3>

                    <a
                      href={stake.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-sage-600 font-medium hover:text-sage-700 hover:underline transition-colors duration-200 inline-flex items-center"
                    >
                      → {stake.source}
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-sage-600 to-sage-700 text-white rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                When millions are on the line, every decision matters.
              </h3>
              <p className="text-sage-100 text-lg mb-6">
                GammaLex transforms how you evaluate, triage, and build medical malpractice cases.
              </p>
              <motion.button
                className="bg-white text-sage-700 px-8 py-3 rounded-lg font-semibold hover:bg-sage-50 transition-colors inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See How GammaLex Helps
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
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
