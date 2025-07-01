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
      <section id="why-gammalex" className="py-20 px-4 font-satoshi flex justify-center items-center bg-white">
        <div className="w-full max-w-6xl bg-slate-50 rounded-3xl shadow-xl px-6 sm:px-12 py-16 flex flex-col gap-10 items-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 leading-tight text-center">Because Denials Are Just the Symptom —<br className='hidden sm:inline'/> We're Solving the Root Cause.</h1>
          <p className="text-lg sm:text-xl text-slate-600 text-center max-w-3xl mb-6">GammaLex exists to address the real reasons behind medical denials—by empowering clinicians and legal teams with AI that understands both the clinical and legal landscape.</p>
          <div className="w-full flex flex-col md:flex-row gap-10 md:gap-16">
            {/* Why It Matters */}
            <div className="flex-1 bg-white rounded-2xl shadow p-8 flex flex-col gap-6 items-start border border-slate-100">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🧩</span>
                <h3 className="text-2xl font-bold text-slate-900">Why It Matters</h3>
              </div>
              <ul className="space-y-4">
                <li className="text-slate-700">Pre-authorization isn't just paperwork—it's the root cause of delays, burnout, and legal risk in healthcare. Fixing it means better care, less stress, and fewer denials for everyone.</li>
              </ul>
            </div>
            {/* Solution */}
            <div className="flex-1 bg-white rounded-2xl shadow p-8 flex flex-col gap-6 items-start border border-slate-100">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">💡</span>
                <h3 className="text-2xl font-bold text-slate-900">The Solution</h3>
              </div>
              <ul className="space-y-4">
                <li className="text-slate-700"><span className="font-bold text-slate-900">GammaLex</span> is the world's first clinical-legal AI built to defend care before it's denied.</li>
                <li className="text-slate-700">Understands pre-auths, CPT codes, coverage policies, and clinical documentation.</li>
                <li className="text-slate-700">Generates real-time, evidence-backed justification and flags legal risk before care is denied.</li>
              </ul>
            </div>
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
      <ProblemStatStrips />

      <div className="w-full bg-sage-50 border-b border-sage-100">
        <ProductFeaturesDemo />
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Team Section */}
      <TeamSection />

      {/* Join Section (Partner With Us) */}
      <div ref={ctaRef}>
        <section id="join" className="min-h-screen flex items-center bg-black text-white">
          <div className="max-w-none w-full px-8 lg:px-16 py-32">
            <div className="flex flex-col items-center max-w-3xl mx-auto">
              <AnimatedText
                text={[
                  "The future of clinical and legal risk starts here—with GammaLex."
                ]}
                className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 sm:mb-12 leading-tight font-satoshi text-center break-words tracking-tight"
              />
              <p className="text-lg xs:text-xl sm:text-2xl text-gray-300 mb-10 sm:mb-14 leading-relaxed text-center font-satoshi">
                Be the first to experience GammaLex. AI-built for speed, accuracy, and outcomes that matter.
              </p>
              <div className="bg-black rounded-3xl shadow-lg border border-terracotta-300 p-6 sm:p-14 w-full flex flex-col items-center font-satoshi">
                <JoinWaitlistModal
                  trigger={
                    <button className="text-2xl sm:text-4xl font-extrabold text-terracotta-400 text-center w-full font-satoshi focus:outline-none">
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
    { id: "product", label: "PRODUCT" },
    { id: "about", label: "ABOUT" },
    { id: "team", label: "TEAM" },
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
        } font-satoshi`}
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
  return (
    <section id="about" className="min-h-screen flex items-center bg-white font-satoshi">
      <div className="max-w-none w-full px-8 lg:px-16 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <AnimatedText
              text={[
                "The Future of Pre-Auth & Legal Risk Intelligence.",
                "Starts Here."
              ]}
              className="text-6xl lg:text-7xl font-bold text-gray-900 mb-12 leading-tight font-satoshi transition-colors duration-200 hover:text-terracotta-400 font-satoshi"
            />
            <motion.p
              className="text-2xl text-gray-600 leading-relaxed break-words text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Building AI that transforms medical pre-authorization, denial risk, and legal justification from the ground up.
            </motion.p>
          </div>

          <div className="space-y-2 text-2xl text-gray-700 leading-relaxed">
            <motion.p
              className="text-2xl text-gray-600 leading-relaxed mb-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              GammaLex is the AI Copilot for Medical Pre-Auth and Denial Risk. We automate the paperwork battle—matching CPT codes to payer policy, surfacing clinical and legal gaps, and generating compliant justifications in real time.
            </motion.p>

            <motion.p
              className="text-2xl text-gray-600 leading-relaxed mb-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Our mission: help clinicians, billers, and legal professionals beat denials, reduce malpractice risk, and get patients the care they need—faster and with less friction.
            </motion.p>

            <motion.p
              className="text-2xl text-gray-600 leading-relaxed mb-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              GammaLex combines LLM intelligence, legal context, and policy understanding into one platform. Our AI reviews clinical documentation, flags missing evidence, scores denial and malpractice risk, and drafts legal-ready notes—so you can focus on care, not paperwork.
            </motion.p>

            <motion.p
              className="text-2xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Built for the entire pre-auth ecosystem, GammaLex empowers clinicians, billers, legal teams, and payers to work smarter, reduce risk, and deliver better outcomes—one authorization at a time.
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
    {
      name: "MeiMei Kha",
      role: "Chief Adventure Officer",
      snippet:
        "11-year-old explorer, athlete, and survivor. From hiking Yosemite peaks to surfing Ocean Beach waves, living life to the fullest and inspiring others to do the same.",
      bioSections: [
        {
          title: "The Introduction",
          content:
            "Hi, I'm MeiMei. I'm 11 years old, and I've lived more lives than most humans. At just 3 months old, I scaled my very first summit — the highest peak above 8,000 feet at Crater Lake. No baby steps for me. I was born for adventure.",
        },
        {
          title: "The Explorer",
          content:
            "I've flown across the world — a full 10-hour flight to Europe — and landed in Geneva like a pro. No stress, no drama, just ready to play. I've strolled the banks of the Seine in Paris and taken trains from Geneva to Basel to Lyon to Paris to Barcelona (I almost got an EU Pet Passport — but apparently I'm too fabulous for red tape).",
        },
        {
          title: "The Athlete",
          content:
            "I've hiked legendary peaks in Yosemite and Squamish (The Chief? Crushed it), and run 10-mile trails with my mom all the way up to 11,000 feet like it's no big deal. I've surfed waves at Ocean Beach that towered over me and swam in cold, wild ocean water just because my heart told me to. No fear. Just joy.",
        },
        {
          title: "The Survivor",
          content:
            "I've survived three pit bull attacks — not because I provoked them, but because I was just too adorable and they were clearly jealous of my life of adventure. I came out of it with over 20 stitches, and even more grit.",
        },
        {
          title: "The Foodie",
          content:
            "I once ate an entire raw frozen pie dough and 75% of a bag of Hershey's Kisses. Dangerous? Maybe. Regrets? None. I'm still here, still standing, still thriving.",
        },
        {
          title: "The Inspiration",
          content:
            "At 11, I walk several miles a day, healthy, sound, and full of life. I don't just go places — I live them. And I believe everyone deserves the chance to live fully, just like me.",
        },
        {
          title: "The Purpose",
          content:
            "That's why I'm proud my mom is building GammaLex — using AI to help people hurt by medical malpractice get the justice they deserve. Because no one should be left behind when life gets hard. I'm MeiMei. I'm just here for the adventure, the love, and whatever snack might fall off the counter next. Dog. Explorer. Survivor. Athlete. Queen. Let's go live a little.",
        },
      ],
      image: "/images/meigirl_purpleshirt.jpg",
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
      <section id="team" className="min-h-screen flex items-center bg-gray-50 font-satoshi">
        <div className="max-w-none w-full px-8 lg:px-16 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <AnimatedText
                text={"The Minds Behind<br />the Future."}
                className="text-6xl lg:text-7xl font-bold text-gray-900 mb-12 leading-tight font-satoshi transition-colors duration-200 hover:text-terracotta-400"
              />
              <motion.p
                className="text-2xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Redefining legal AI with real-world expertise in law, healthcare, and technology.
              </motion.p>
            </div>
            <div className="space-y-12">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  className="group relative p-8 bg-white rounded-2xl hover:bg-gray-50 transition-all duration-300 cursor-pointer overflow-hidden shadow-lg hover:shadow-xl font-satoshi"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openModal(index)}
                >
                  {/* Background Animation */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-sage-100 to-sage-200 opacity-0"
                    animate={{
                      opacity: index === 0 ? 0.3 : 0, // You can add hover state logic here if needed
                      scale: index === 0 ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
                      <motion.div
                        className="relative overflow-hidden rounded-2xl w-full sm:w-[200px] h-[200px] flex-shrink-0 mx-auto sm:mx-0"
                        animate={{
                          scale: index === 0 ? 1.05 : 1, // You can add hover state logic here if needed
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>

                      <div className="flex-1 space-y-4">
                        <h3 className="text-3xl font-bold text-gray-900 group-hover:text-sage-600 transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-lg text-sage-600 font-medium">{member.role}</p>
                        <p className="text-base text-gray-600 leading-relaxed">{member.snippet}</p>

                        <div className="flex items-center gap-4 pt-4 justify-center sm:justify-start">
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
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bio Modal */}
      {modalMember !== null && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-start justify-center p-2 sm:p-4 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="bg-white rounded-3xl w-full max-w-full sm:max-w-2xl my-8 relative shadow-2xl p-4 sm:p-8 font-satoshi"
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 sm:p-8 rounded-t-3xl z-10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mr-4 sm:mr-6">
                    <img
                      src={team[modalMember].image || "/placeholder.svg"}
                      alt={team[modalMember].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{team[modalMember].name}</h3>
                    <p className="text-lg sm:text-xl text-sage-600 font-medium">{team[modalMember].role}</p>
                  </div>
                </div>
                <button onClick={closeModal} className="p-3 hover:bg-gray-100 rounded-full transition-colors">
                  <X className="w-7 h-7 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="p-2 sm:p-8 space-y-8 sm:space-y-12 max-h-[80vh] overflow-y-auto">
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
                  <div className="border-l-4 border-sage-200 pl-4 sm:pl-8">
                    <h4 className="text-xl sm:text-2xl font-semibold text-sage-600 mb-2 sm:mb-4 break-words">{section.title}</h4>
                    <div className="text-gray-700 leading-relaxed text-base sm:text-lg break-words font-satoshi">{section.content}</div>
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

function ProblemStatStrips() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
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
  return (
    <section className="w-full bg-sage-50 py-20 px-2 sm:px-6 font-satoshi">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 text-center">How Pre-Auth Became a Systemic Risk.</h2>
        <p className="text-lg sm:text-xl text-slate-600 text-center mb-12 max-w-2xl mx-auto">Pre-authorizations are creating a crisis of delays, burnout, and legal risk.</p>
        <TooltipProvider>
          <div ref={ref} className="flex flex-col divide-y divide-slate-200 rounded-2xl overflow-hidden shadow-md">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-8 py-8 px-4 sm:px-8 transition-colors duration-200 ${i % 2 === 0 ? 'bg-white' : 'bg-sage-100'}`}
              >
                <span className="text-3xl sm:text-4xl flex-shrink-0">{s.icon}</span>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 flex-1 w-full">
                  <div className="flex items-end gap-2 min-w-[90px]">
                    <span className="text-4xl sm:text-5xl font-extrabold text-slate-900">
                      {isInView ? (
                        s.statDisplay ? (
                          <span>{s.statDisplay}</span>
                        ) : (
                          <AnimatedNumber value={s.stat} suffix={s.statSuffix} />
                        )
                      ) : (
                        s.statDisplay ? <span>--</span> : <span>--</span>
                      )}
                    </span>
                  </div>
                  <div className="flex flex-col items-start sm:items-start flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg font-bold text-slate-900 leading-tight">{s.label}</span>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a href={s.source} target="_blank" rel="noopener noreferrer" className="ml-1 text-slate-400 hover:text-slate-600">
                            <Info className="w-4 h-4 inline align-text-bottom" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent side="top">
                          <span className="text-xs font-medium">Source: {s.sourceLabel}</span>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <div className="text-base text-slate-600 font-medium">{s.subtext}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TooltipProvider>
        <div className="flex justify-center mt-12">
          <a href="#cta" className="inline-block bg-sage-600 text-white text-lg font-bold rounded-2xl px-10 py-4 shadow hover:bg-sage-700 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:ring-offset-2 transition">See how GammaLex helps prevent this</a>
        </div>
      </div>
    </section>
  )
}

// Animated number component
function AnimatedNumber({ value, suffix }: { value: number, suffix?: string }) {
  const [display, setDisplay] = useState(0)
  useEffect(() => {
    let start = 0
    let end = value
    let duration = 900
    let startTime: number | null = null
    function animate(ts: number) {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      setDisplay(Math.floor(progress * (end - start) + start))
      if (progress < 1) requestAnimationFrame(animate)
      else setDisplay(end)
    }
    requestAnimationFrame(animate)
    // eslint-disable-next-line
  }, [value])
  return <span>{display}{suffix}</span>
}

function FooterGV() {
  return (
    <footer className="w-full bg-[#f9f9f7] text-sm text-black font-satoshi py-12">
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
