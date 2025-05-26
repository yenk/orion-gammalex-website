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
  Baby,
} from "lucide-react"

export default function GammaLexPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Snap scroll setup
    const sections = document.querySelectorAll(".snap-section")
    sections.forEach((section) => {
      section.classList.add("snap-start")
    })
  }, [])

  return (
    <div ref={containerRef} className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Team Section */}
      <TeamSection />

      {/* Product Section */}
      <ProductSection />

      {/* Problem Section */}
      <ProblemSection />

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
    { id: "about", label: "ABOUT" },
    { id: "team", label: "TEAM" },
    { id: "product", label: "PRODUCT" },
    { id: "join", label: "JOIN THE WAITLIST" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm" : "bg-white/90 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-none px-8 lg:px-16">
        <div className="flex items-center h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center cursor-pointer relative overflow-hidden"
            onClick={() => scrollToSection("hero")}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              {/* Logo Image */}
              <motion.img
                src="/images/gammalex-logo-glx-final.png"
                alt="GammaLex Logo"
                className="h-20 relative z-10"
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
                  duration: 1.8, // Changed from 1.2 to 1.8
                  ease: [0.76, 0, 0.24, 1], // Custom cubic-bezier for smooth motion
                  delay: 0.3,
                }}
              />

              {/* Logo Reveal Mask */}
              <motion.div
                className="absolute inset-0 z-30"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{
                  duration: 1.8, // Changed from 1.2 to 1.8
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.3,
                }}
              >
                <img src="/images/gammalex-logo-glx-final.png" alt="GammaLex Logo" className="h-20" />
              </motion.div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-16">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-xl font-medium text-gray-700 hover:text-sage-600 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)} whileTap={{ scale: 0.95 }}>
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
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-xl font-medium text-gray-700 hover:text-sage-600 py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

function AnimatedText({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const words = text.split(" ")

  return (
    <div ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: delay + i * 0.1 }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="snap-section h-screen flex items-center bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      <div className="max-w-none w-full px-8 lg:px-16">
        <div className="max-w-6xl">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sage-600 font-semibold text-xl tracking-wide">MALPRACTICE RE-ENGINEERED™</span>
          </motion.div>

          <div className="text-8xl lg:text-[12rem] font-black text-gray-900 leading-none mb-8 font-satoshi">
            <AnimatedText text="GAMMALEX" className="inline" delay={0.3} />
            <span className="text-4xl lg:text-6xl align-top">™</span>
          </div>

          <AnimatedText
            text="Where Malpractice Litigation Meets Modern Intelligence."
            className="text-3xl lg:text-5xl text-gray-600 mb-12 leading-tight max-w-4xl font-satoshi"
            delay={0.8}
          />

          <motion.div
            className="flex flex-col sm:flex-row gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button size="lg" className="bg-sage-600 hover:bg-sage-700 text-white px-12 py-6 text-xl">
              Join the Waitlist
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="snap-section min-h-screen flex items-center bg-white">
      <div className="max-w-none w-full px-8 lg:px-16 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <AnimatedText
              text="The Future of Malpractice Litigation. Starts Here."
              className="text-6xl lg:text-7xl font-bold text-gray-900 mb-12 leading-tight font-satoshi"
            />
            <motion.p
              className="text-2xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Building AI that transforms medical malpractice litigation from the ground up.
            </motion.p>
          </div>

          <div className="space-y-12 text-2xl text-gray-700 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              GammaLex was founded on a simple but urgent idea: medical malpractice litigation is too slow, too complex,
              and too uncertain. We're building AI that changes that, starting with tools that help litigators predict
              claim viability, streamline drafting, and make smarter decisions, faster.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our mission is to make malpractice litigation more efficient, equitable, and data-driven, giving lawyers
              the clarity they need from first intake to an informed outcome.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              GammaLex is powered by agentic AI — autonomous, adaptive legal intelligence designed to operate like a
              litigation teammate. Unlike static automation, our system understands malpractice cases, reasons through
              medical-legal complexity, and improves with expert feedback. It evaluates viability using precedent,
              structured and unstructured data, triages by merit and specialty, drafts tailored documents, and surfaces
              hidden risks — all in minutes, not weeks.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              While we're focused on empowering litigators first, our AI engine is built to scale with the malpractice
              ecosystem — enabling future tools for claimants, insurers, and hospital risk teams.
            </motion.p>
          </div>
        </div>
      </div>
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

  const openModal = (index: number) => {
    setModalMember(index)
    setVisibleSections([])
    setTimeout(() => {
      const member = team[index]
      member.bioSections.forEach((_, sectionIndex) => {
        setTimeout(() => {
          setVisibleSections((prev) => [...prev, sectionIndex])
        }, sectionIndex * 800)
      })
    }, 300)
  }

  const closeModal = () => {
    setModalMember(null)
    setVisibleSections([])
  }

  return (
    <>
      <section id="team" className="snap-section min-h-screen flex items-center bg-gray-50">
        <div className="max-w-none w-full px-8 lg:px-16 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-20">
            <div>
              <AnimatedText
                text="The Minds Behind GammaLex"
                className="text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight font-satoshi"
              />
              <motion.p
                className="text-2xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Building the future of legal AI with deep expertise in law, technology, and healthcare.
              </motion.p>
            </div>
            <div></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                onClick={() => openModal(index)}
              >
                <div className="relative overflow-hidden rounded-3xl mb-8 w-[400px] h-[400px]">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-4xl font-bold text-gray-900 group-hover:text-sage-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xl text-sage-600 font-medium">{member.role}</p>
                  <p className="text-lg text-gray-600 leading-relaxed">{member.snippet}</p>

                  <div className="flex items-center gap-4 pt-4">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sage-600 hover:text-sage-700 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        LinkedIn →
                      </a>
                    )}
                    {member.portfolio && (
                      <a
                        href={member.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sage-600 hover:text-sage-700 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Portfolio →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
            className="bg-white rounded-3xl w-full max-w-4xl my-8 relative shadow-2xl"
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-8 rounded-t-3xl z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mr-6">
                    <img
                      src={team[modalMember].image || "/placeholder.svg"}
                      alt={team[modalMember].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">{team[modalMember].name}</h3>
                    <p className="text-xl text-sage-600 font-medium">{team[modalMember].role}</p>
                  </div>
                </div>
                <button onClick={closeModal} className="p-3 hover:bg-gray-100 rounded-full transition-colors">
                  <X className="w-7 h-7 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="p-8 space-y-12 max-h-[70vh] overflow-y-auto">
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
                  <div className="border-l-4 border-sage-200 pl-8">
                    <h4 className="text-2xl font-semibold text-sage-600 mb-4">{section.title}</h4>
                    <p className="text-gray-700 leading-relaxed text-lg">{section.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

function ProductSection() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const [demoProgress, setDemoProgress] = useState(0)

  const products = [
    {
      icon: Brain,
      title: "Viability Prediction",
      description: "AI-powered case strength assessment in seconds",
      benefit: "Reduce weak case intake by 60%",
      demoSteps: [
        { label: "Analyzing medical records...", progress: 25 },
        { label: "Evaluating liability factors...", progress: 50 },
        { label: "Calculating settlement probability...", progress: 75 },
        { label: "Viability Score: 87% - High Merit", progress: 100 },
      ],
      mockData: {
        caseType: "Surgical Error",
        score: "87%",
        timeline: "18-24 months",
        settlement: "85% probability",
      },
    },
    {
      icon: FileText,
      title: "AI-Powered Drafting",
      description: "Generate timelines, briefs, and summaries instantly",
      benefit: "Cut document prep time by 75%",
      demoSteps: [
        { label: "Processing case facts...", progress: 20 },
        { label: "Structuring timeline...", progress: 40 },
        { label: "Generating legal arguments...", progress: 70 },
        { label: "Document ready for review", progress: 100 },
      ],
      mockData: {
        docType: "Medical Timeline",
        pages: "12 pages",
        time: "3.2 seconds",
        accuracy: "98% complete",
      },
    },
    {
      icon: TrendingUp,
      title: "Litigation Signal Detection",
      description: "Identify patterns and precedents across cases",
      benefit: "Uncover hidden case insights",
      demoSteps: [
        { label: "Scanning case database...", progress: 30 },
        { label: "Identifying patterns...", progress: 60 },
        { label: "Matching precedents...", progress: 85 },
        { label: "Found 23 similar cases", progress: 100 },
      ],
      mockData: {
        patterns: "23 matches",
        precedents: "15 favorable",
        insights: "3 key factors",
        confidence: "94% match",
      },
    },
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (hoveredProduct !== null) {
      setDemoProgress(0)
      interval = setInterval(() => {
        setDemoProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return prev + 2
        })
      }, 50)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [hoveredProduct])

  const getCurrentStep = (productIndex: number) => {
    if (hoveredProduct !== productIndex) return null
    const steps = products[productIndex].demoSteps
    return steps.find((step) => demoProgress <= step.progress) || steps[steps.length - 1]
  }

  return (
    <section id="product" className="snap-section min-h-screen flex items-center bg-white">
      <div className="max-w-none w-full px-8 lg:px-16 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <AnimatedText
              text="Three Tools. Infinite Advantage."
              className="text-6xl lg:text-7xl font-bold text-gray-900 mb-12 leading-tight font-satoshi"
            />
            <motion.p
              className="text-2xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Purpose-built AI that understands the nuances of medical malpractice litigation.
            </motion.p>

            <motion.p
              className="text-2xl text-gray-600 leading-relaxed mt-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              This isn't automation. It's augmentation with precision at scale.
            </motion.p>
          </div>

          <div className="space-y-12">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="group relative p-8 bg-gray-50 rounded-2xl hover:bg-sage-50 transition-all duration-300 cursor-pointer overflow-hidden"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                onMouseEnter={() => setHoveredProduct(index)}
                onMouseLeave={() => {
                  setHoveredProduct(null)
                  setDemoProgress(0)
                }}
              >
                {/* Background Animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-sage-100 to-sage-200 opacity-0"
                  animate={{
                    opacity: hoveredProduct === index ? 0.3 : 0,
                    scale: hoveredProduct === index ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  <div className="flex items-start space-x-6">
                    <motion.div
                      className="bg-sage-100 p-4 rounded-xl group-hover:bg-sage-200 transition-colors"
                      animate={{
                        scale: hoveredProduct === index ? 1.1 : 1,
                        rotate: hoveredProduct === index ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <product.icon className="w-8 h-8 text-sage-600" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.title}</h3>
                      <p className="text-lg text-gray-600 mb-4 leading-relaxed">{product.description}</p>

                      {/* Demo Interface */}
                      <AnimatePresence>
                        {hoveredProduct === index && (
                          <motion.div
                            className="bg-white rounded-lg p-4 mb-4 border border-sage-200 shadow-lg"
                            initial={{ opacity: 0, height: 0, y: -20 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                          >
                            {/* Demo Header */}
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-gray-700">Live Demo</span>
                              </div>
                              <span className="text-xs text-gray-500">AI Processing</span>
                            </div>

                            {/* Progress Bar */}
                            <div className="mb-3">
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-sm text-gray-600">
                                  {getCurrentStep(index)?.label || "Initializing..."}
                                </span>
                                <span className="text-sm font-medium text-sage-600">{Math.round(demoProgress)}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <motion.div
                                  className="bg-gradient-to-r from-sage-500 to-sage-600 h-2 rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: `${demoProgress}%` }}
                                  transition={{ duration: 0.1 }}
                                />
                              </div>
                            </div>

                            {/* Mock Results */}
                            {demoProgress === 100 && (
                              <motion.div
                                className="grid grid-cols-2 gap-3 mt-4"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                              >
                                {Object.entries(product.mockData).map(([key, value], i) => (
                                  <motion.div
                                    key={key}
                                    className="bg-sage-50 p-2 rounded text-center"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.1 * i }}
                                  >
                                    <div className="text-xs text-gray-600 capitalize">
                                      {key.replace(/([A-Z])/g, " $1")}
                                    </div>
                                    <div className="text-sm font-semibold text-sage-700">{value}</div>
                                  </motion.div>
                                ))}
                              </motion.div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <motion.div
                        className="inline-flex items-center px-4 py-2 bg-sage-100 text-sage-800 rounded-full text-sm font-medium"
                        animate={{
                          scale: hoveredProduct === index ? 1.05 : 1,
                          backgroundColor: hoveredProduct === index ? "#10b981" : undefined,
                          color: hoveredProduct === index ? "#ffffff" : undefined,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        {product.benefit}
                      </motion.div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <AnimatePresence>
                    {hoveredProduct === index && (
                      <>
                        <motion.div
                          className="absolute top-4 right-4 w-2 h-2 bg-sage-400 rounded-full"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ delay: 0.1 }}
                        />
                        <motion.div
                          className="absolute bottom-4 right-8 w-1 h-1 bg-sage-300 rounded-full"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ delay: 0.2 }}
                        />
                        <motion.div
                          className="absolute top-8 right-12 w-1.5 h-1.5 bg-sage-500 rounded-full"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ delay: 0.3 }}
                        />
                      </>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProblemSection() {
  const problemStats = [
    {
      stat: "60%",
      title: "of medical malpractice cases fail viability checks",
      description: "Yet lawyers spend weeks evaluating each one manually",
      source: "NEJM, 2006",
      sourceUrl: "https://www.nejm.org/doi/full/10.1056/NEJMsa054479",
      icon: Target,
    },
    {
      stat: "31 months",
      title: "Average time to resolve a case",
      description: "Slow drafting and buried insights extend timelines",
      source: "Health Affairs, 2013",
      sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/23297278/",
      icon: Clock,
    },
    {
      stat: "Only 23%",
      title: "of claims result in payout",
      description: "Despite billions paid annually",
      source: "JAMA Internal Medicine, 2016",
      sourceUrl: "https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2612118",
      icon: DollarSign,
    },
    {
      stat: "$469,000",
      title: "Avg. payout per neurosurgery malpractice claim",
      description: "~$525K today (inflation adjusted)",
      source: "PMC, 2021",
      sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8156516/",
      icon: Brain,
      specialty: "Neurosurgery",
    },
    {
      stat: "$488,852",
      title: "Avg. settlement per OB/GYN malpractice case",
      description: "~$517K today (inflation adjusted)",
      source: "JAMA HF, 2023",
      sourceUrl: "https://jamanetwork.com/journals/jama-health-forum/fullarticle/2801227",
      icon: Baby,
      specialty: "OB/GYN",
    },
    {
      stat: "$1B+",
      title: "Total malpractice payouts per year (system-wide)",
      description: "Billions paid annually across all specialties",
      source: "AJHE, 2020",
      sourceUrl: "https://www.journals.uchicago.edu/doi/10.1162/AJHE_a_00069",
      icon: Scale,
      specialty: "System-Wide",
    },
  ]

  return (
    <section id="problem" className="snap-section min-h-screen flex items-center bg-gray-900 text-white">
      <div className="max-w-none w-full px-8 lg:px-16 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-20">
          <div>
            <AnimatedText
              text="Malpractice Litigation Is Broken. Stakes Have Never Been Higher."
              className="text-6xl lg:text-7xl font-bold mb-12 leading-tight font-satoshi"
            />
            <motion.p
              className="text-2xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Litigators face time sinks, dropped claims, and endless manual triage, while justice hangs in the balance.
            </motion.p>
          </div>
          <div></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {problemStats.map((problem, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-all duration-300 h-full">
                <div className="flex items-center mb-8">
                  <div className="bg-terracotta-500 p-4 rounded-xl mr-6">
                    <problem.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-5xl font-black text-terracotta-400">{problem.stat}</div>
                </div>

                {problem.specialty && (
                  <div className="text-sm font-semibold text-gray-400 mb-2">{problem.specialty}</div>
                )}

                <h3 className="text-2xl font-bold mb-4 leading-tight">{problem.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">{problem.description}</p>

                <a
                  href={problem.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-terracotta-400 font-medium hover:text-terracotta-300 transition-colors"
                >
                  → {problem.source}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function JoinSection() {
  return (
    <section id="join" className="snap-section min-h-screen flex items-center bg-gray-900 text-white">
      <div className="max-w-none w-full px-8 lg:px-16 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <AnimatedText
              text="Transform Your Practice With AI"
              className="text-6xl lg:text-7xl font-bold mb-12 leading-tight font-satoshi"
            />

            <motion.p
              className="text-2xl text-gray-300 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Join the waitlist for early access to GammaLex. Be among the first to experience the future of medical
              malpractice litigation.
            </motion.p>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 text-lg py-6 flex-1"
                />
                <Button className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-8 py-6 text-lg">
                  Join Waitlist
                </Button>
              </div>

              <div className="text-center">
                <p className="text-white/50 mb-4">Or schedule a demo with our team</p>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg">
                  Schedule Demo
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold mb-6">For Investors</h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We're raising our pre-seed round to accelerate product development and expand our legal partnerships. Join
              us in building the future of legal AI.
            </p>
            <Button
              variant="outline"
              className="border-terracotta-400 text-terracotta-400 hover:bg-terracotta-400 hover:text-white px-8 py-4 text-lg"
            >
              Investor Deck
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
