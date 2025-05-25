"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Brain, FileText, Target, ArrowRight, CheckCircle, Clock, DollarSign, AlertTriangle } from "lucide-react"
import { StatisticsSection } from "@/components/statistics-section"
import { ViabilityPredictionDemo, SmartTriageDemo, AIDraftingDemo } from "@/components/feature-demos"
import {
  MedicalBackgroundPattern,
  LegalBackgroundPattern,
  DataVisualizationPattern,
  FloatingMedicalIcons,
} from "@/components/background-elements"
import { DidYouKnowCallout, InlineFact, StatsBanner } from "@/components/stat-callouts"

export default function CounselPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  return (
    <div ref={containerRef} className="min-h-screen bg-neutral-50 relative">
      {/* Global floating medical icons */}
      <FloatingMedicalIcons />

      {/* Sticky CTA Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 bg-olive-700 text-white py-3 px-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 2 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-sm font-medium">Early Access Now Open</span>
          <Button size="sm" className="bg-white text-olive-700 hover:bg-neutral-100">
            Request Access
          </Button>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.section
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cream-100 to-olive-50" />

        {/* Medical background pattern for hero */}
        <MedicalBackgroundPattern />

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <motion.h1
            className="font-serif text-hero-mobile md:text-hero text-charcoal-900 mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            The First AI Engine for <span className="text-olive-600">Medical Malpractice</span> Lawyers
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-charcoal-700 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Predict claim strength. Triage faster. Build stronger cases.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" className="bg-olive-600 hover:bg-olive-700 text-white px-8 py-4 text-lg">
              Request Early Access
            </Button>
            <Button size="lg" variant="outline" className="border-charcoal-300 text-charcoal-700 px-8 py-4 text-lg">
              See How It Works
            </Button>
          </motion.div>

          {/* Hero Stat Callout */}
          <motion.div
            className="max-w-2xl mx-auto mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <DidYouKnowCallout
              fact="Only 23% of medical malpractice claims result in payment to plaintiffs — yet lawyers spend extensive time evaluating every case that comes through the door."
              source="National Practitioner Data Bank"
              citation="U.S. Department of Health and Human Services, NPDB 2023 Annual Report"
              sourceUrl="https://www.npdb.hrsa.gov/resources/reports/annualReports.jsp"
              icon={AlertTriangle}
            />
          </motion.div>
        </div>

        {/* Animated background elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-olive-200 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </motion.section>

      {/* Problem Section */}
      <ProblemSection />

      {/* Stats Banner */}
      <StatsBanner />

      {/* Statistics Section */}
      <StatisticsSection />

      {/* Core Features */}
      <FeaturesSection />

      {/* Interactive Preview */}
      <InteractiveSection />

      {/* Social Proof */}
      <SocialProofSection />

      {/* Vision Section */}
      <VisionSection />

      {/* Final CTA */}
      <FinalCTASection />
    </div>
  )
}

function ProblemSection() {
  const problems = [
    "Too many weak claims waste time.",
    "Triage is manual and slow.",
    "Case building takes weeks.",
    "GammaLex changes everything.",
  ]

  return (
    <section className="min-h-screen bg-charcoal-900 text-white flex items-center relative overflow-hidden">
      {/* Legal background pattern */}
      <LegalBackgroundPattern />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2
          className="font-serif text-4xl md:text-6xl mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          The Problem with Medical Malpractice Litigation
        </motion.h2>

        <div className="space-y-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <p
                className={`text-2xl md:text-4xl font-light ${
                  index === problems.length - 1 ? "text-olive-300 font-medium" : ""
                }`}
              >
                {problem}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Inline Facts in Problem Section */}
        <motion.div
          className="mt-20 grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <InlineFact
            label="Average Case Duration"
            value="31 months"
            description="From initial filing to final resolution, cases tie up resources for nearly three years"
            source="Diederich Healthcare Medical Malpractice Analysis, 2022"
            icon={Clock}
            delay={0.1}
          />
          <InlineFact
            label="Median Successful Payout"
            value="$348,000"
            description="Median amount paid for successful medical malpractice claims in 2023"
            source="National Practitioner Data Bank, 2023 Annual Report"
            icon={DollarSign}
            delay={0.2}
          />
        </motion.div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "Viability Prediction",
      description: "Risk scoring with AI in seconds",
      detail: "Advanced ML models analyze case factors to predict claim strength and settlement probability instantly.",
      accent: "bg-copper-500",
      gradient: "from-copper-50 to-orange-50",
      demo: <ViabilityPredictionDemo />,
    },
    {
      icon: Target,
      title: "Smart Triage",
      description: "Intake + specialty-based claim routing",
      detail:
        "Automated intake processing routes cases to the right specialists based on medical complexity and case type.",
      accent: "bg-olive-500",
      gradient: "from-olive-50 to-green-50",
      demo: <SmartTriageDemo />,
    },
    {
      icon: FileText,
      title: "AI Drafting",
      description: "Timelines, outlines, and summaries auto-generated",
      detail:
        "Generate comprehensive case documents, medical timelines, and legal summaries with AI-powered automation.",
      accent: "bg-charcoal-600",
      gradient: "from-charcoal-50 to-slate-50",
      demo: <AIDraftingDemo />,
    },
  ]

  return (
    <section className="min-h-screen bg-cream-50 py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-olive-200 rounded-full opacity-20 blur-xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-copper-200 rounded-full opacity-20 blur-xl" />

      {/* Data visualization pattern */}
      <DataVisualizationPattern />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-6xl text-charcoal-900 mb-6">Core Features</h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            Powerful AI tools designed specifically for medical malpractice litigation
          </p>
        </motion.div>

        {/* Key Stat Before Features */}
        <div className="mb-16">
          <DidYouKnowCallout
            fact="$4.2 billion was paid out in medical malpractice claims in 2023, yet most law firms still rely on manual case evaluation processes that can take weeks."
            source="National Practitioner Data Bank"
            citation="U.S. Department of Health and Human Services, NPDB 2023 Annual Report"
            sourceUrl="https://www.npdb.hrsa.gov/resources/reports/annualReports.jsp"
            icon={DollarSign}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative h-full">
                {/* Main Card */}
                <div className="bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 relative overflow-hidden border border-neutral-100">
                  {/* Gradient Background Accent */}
                  <div
                    className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${feature.gradient} rounded-bl-3xl opacity-60`}
                  />

                  {/* Icon Container */}
                  <div className="relative z-10 mb-6">
                    <div
                      className={`w-16 h-16 ${feature.accent} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Accent Line */}
                    <div className={`w-12 h-1 ${feature.accent} rounded-full opacity-60`} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="font-serif text-2xl text-charcoal-900 mb-4 leading-tight">{feature.title}</h3>

                    <p className="text-lg text-charcoal-700 mb-6 leading-relaxed">{feature.description}</p>

                    {/* Expandable Detail */}
                    <div className="overflow-hidden">
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        whileInView={{ height: "auto", opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                        className="border-t border-neutral-200 pt-4"
                      >
                        <p className="text-neutral-600 leading-relaxed">{feature.detail}</p>
                      </motion.div>
                    </div>

                    {/* Interactive Demo */}
                    <div className="mt-6 border-t border-neutral-200 pt-6">
                      <h4 className="font-semibold text-charcoal-900 mb-4 text-sm">Try It Live:</h4>
                      {feature.demo}
                    </div>

                    {/* Learn More Link */}
                    <motion.div
                      className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                    >
                      <button className="text-olive-600 font-medium flex items-center hover:text-olive-700 transition-colors">
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </motion.div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-olive-500/5 to-copper-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Shadow Card for Depth */}
                <div
                  className={`absolute inset-0 ${feature.accent} rounded-2xl opacity-10 translate-x-2 translate-y-2 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200 max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl text-charcoal-900 mb-4">Ready to transform your practice?</h3>
            <p className="text-charcoal-600 mb-6">
              See how these features work together to streamline your medical malpractice workflow.
            </p>
            <Button className="bg-olive-600 hover:bg-olive-700 text-white px-8 py-3">Schedule a Demo</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function InteractiveSection() {
  return (
    <section className="min-h-screen bg-charcoal-800 text-white flex items-center relative overflow-hidden">
      {/* Subtle tech pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-white rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.h2
          className="font-serif text-4xl md:text-6xl mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Try It — Interactive Preview
        </motion.h2>

        <motion.div
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xl mb-6">Select a scenario to see AI prediction:</p>

          <Select>
            <SelectTrigger className="w-full mb-4 bg-white text-charcoal-900">
              <SelectValue placeholder="Choose a case type..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="surgical">Surgical Error</SelectItem>
              <SelectItem value="diagnosis">Misdiagnosis</SelectItem>
              <SelectItem value="medication">Medication Error</SelectItem>
              <SelectItem value="birth">Birth Injury</SelectItem>
            </SelectContent>
          </Select>

          <motion.div
            className="bg-olive-600 rounded-lg p-6 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center justify-between">
              <span className="text-lg">Predicted Viability Score:</span>
              <span className="text-3xl font-bold">87%</span>
            </div>
            <p className="text-sm mt-2 opacity-90">High probability of successful outcome based on case factors</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function SocialProofSection() {
  const testimonials = [
    {
      quote: "GammaLex is revolutionizing how we approach medical malpractice cases.",
      author: "Sarah Chen, Partner at Chen & Associates",
    },
    {
      quote: "The AI predictions have transformed our case selection process.",
      author: "Michael Rodriguez, Legal Tech Advisor",
    },
  ]

  return (
    <section className="py-20 bg-neutral-100 relative overflow-hidden">
      {/* Subtle document pattern */}
      <div className="absolute top-10 right-10 w-24 h-32 bg-cream-200 rounded opacity-10 transform rotate-12"></div>
      <div className="absolute bottom-10 left-10 w-20 h-28 bg-olive-200 rounded opacity-8 transform -rotate-6"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center bg-olive-600 text-white px-6 py-3 rounded-full mb-8">
            <CheckCircle className="w-5 h-5 mr-2" />
            Built by legal engineers & AI experts
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <p className="text-lg text-charcoal-700 mb-4 italic">"{testimonial.quote}"</p>
              <p className="text-olive-600 font-medium">— {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function VisionSection() {
  const visionPoints = [
    "We're starting with litigators…",
    "But built to serve claimants, risk teams, and everyone in between.",
    "One core engine. Every malpractice claim. Fairly resolved.",
  ]

  return (
    <section className="min-h-screen bg-olive-900 text-white flex items-center relative overflow-hidden">
      {/* Abstract legal pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute top-20 left-20 w-32 h-32" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="2" />
          <circle cx="30" cy="30" r="1.5" />
          <circle cx="70" cy="30" r="1.5" />
          <circle cx="30" cy="70" r="1.5" />
          <circle cx="70" cy="70" r="1.5" />
          <line x1="50" y1="50" x2="30" y2="30" stroke="currentColor" strokeWidth="0.5" />
          <line x1="50" y1="50" x2="70" y2="30" stroke="currentColor" strokeWidth="0.5" />
          <line x1="50" y1="50" x2="30" y2="70" stroke="currentColor" strokeWidth="0.5" />
          <line x1="50" y1="50" x2="70" y2="70" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        {visionPoints.map((point, index) => (
          <motion.p
            key={index}
            className={`text-2xl md:text-4xl font-light mb-8 ${
              index === visionPoints.length - 1 ? "text-olive-200 font-medium text-3xl md:text-5xl" : ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            {point}
          </motion.p>
        ))}
      </div>
    </section>
  )
}

function FinalCTASection() {
  return (
    <section className="min-h-screen bg-charcoal-900 text-white flex items-center relative overflow-hidden">
      {/* Final background elements */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-1/4 left-1/4 w-64 h-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.h2
          className="font-serif text-4xl md:text-6xl mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Join Our Early Access
        </motion.h2>

        <motion.div
          className="max-w-md mx-auto space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Input type="email" placeholder="Enter your email" className="bg-white text-charcoal-900 text-lg py-6" />

          <Select>
            <SelectTrigger className="bg-white text-charcoal-900 py-6">
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lawyer">Lawyer</SelectItem>
              <SelectItem value="firm">Law Firm</SelectItem>
              <SelectItem value="investor">Investor</SelectItem>
            </SelectContent>
          </Select>

          <Button size="lg" className="w-full bg-olive-600 hover:bg-olive-700 py-6 text-lg">
            Request Early Access
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
