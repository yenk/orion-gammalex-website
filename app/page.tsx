"use client"

import { motion } from "framer-motion"
import { Target, Clock, DollarSign, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="font-inter">
      <HeroSection />
      <ProblemSection />
      <Footer />
    </main>
  )
}

function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-stone-100 to-stone-50 py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-charcoal-900 mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Unlock the Truth in Medical Malpractice Cases
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-charcoal-600 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              AI-powered insights to evaluate, triage, and build winning cases, faster.
            </motion.p>
            <motion.div
              className="space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="#"
                className="bg-terracotta-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-terracotta-600 transition-colors inline-block"
              >
                Get Started
              </a>
              <a
                href="#"
                className="bg-white text-charcoal-700 px-8 py-3 rounded-xl font-bold hover:bg-stone-200 transition-colors inline-block"
              >
                Learn More
              </a>
            </motion.div>
          </div>
          <div>
            <motion.img
              src="/hero-image.png"
              alt="Medical malpractice case analysis"
              className="rounded-3xl shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
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
      sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8156516/",
      inflationAdjusted: "~$525K today",
    },
    {
      emoji: "👶",
      stat: "$488,852",
      title: "Avg. settlement per OB/GYN malpractice case",
      source: "AJHE, 2020",
      sourceUrl: "https://www.journals.uchicago.edu/doi/10.1162/AJHE_a_00069",
      inflationAdjusted: "~$517K today",
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
        {/* SECTION 1: The Problem - Timeline Style */}
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

          {/* Timeline Layout */}
          <div className="relative max-w-6xl mx-auto">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-terracotta-200 via-terracotta-400 to-terracotta-600 rounded-full hidden md:block"></div>

            {problemStats.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-16 md:mb-24 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Side */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <motion.div
                    className="bg-gradient-to-br from-terracotta-50 to-terracotta-100 p-8 rounded-3xl border-2 border-terracotta-200 shadow-lg hover:shadow-xl transition-all duration-500"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-center mb-6">
                      <div className="bg-terracotta-500 p-4 rounded-2xl mr-4">
                        <problem.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-4xl md:text-5xl font-black text-terracotta-600">{problem.stat}</div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-charcoal-900 mb-3 leading-tight">
                      {problem.title}
                    </h3>

                    <p className="text-charcoal-600 leading-relaxed mb-4 text-lg">{problem.description}</p>

                    <a
                      href={problem.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-terracotta-600 font-medium hover:text-terracotta-700 hover:underline transition-colors duration-200"
                    >
                      → Source: {problem.source}
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-terracotta-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Empty Space for Alternating Layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SECTION 2: The Stakes - Hexagonal Grid */}
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

          {/* Hexagonal Layout */}
          <div className="relative max-w-5xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {stakesStats.map((stake, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* Hexagonal Background */}
                  <div className="relative bg-gradient-to-br from-sage-50 to-sage-100 p-8 rounded-3xl border-2 border-sage-200 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-3 overflow-hidden">
                    {/* Decorative Background Pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-sage-200 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-sage-300 rounded-full opacity-20 transform -translate-x-12 translate-y-12"></div>

                    <div className="relative z-10 text-center">
                      <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                        {stake.emoji}
                      </div>

                      <div className="text-4xl md:text-5xl font-black text-sage-600 mb-4">{stake.stat}</div>

                      {/* Inflation-adjusted amount */}
                      {stake.inflationAdjusted && (
                        <motion.div
                          className="inline-flex items-center px-4 py-2 bg-sage-200 text-sage-800 rounded-full text-sm font-bold mb-4 shadow-md"
                          whileHover={{ scale: 1.05 }}
                        >
                          {stake.inflationAdjusted}
                        </motion.div>
                      )}

                      <h3 className="text-lg md:text-xl font-bold text-charcoal-900 mb-4 leading-tight">
                        {stake.title}
                      </h3>

                      <a
                        href={stake.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sage-600 font-medium hover:text-sage-700 hover:underline transition-colors duration-200"
                      >
                        → {stake.source}
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
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-sage-600 to-sage-700 text-white rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full transform -translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full transform translate-x-16 translate-y-16"></div>

              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  When millions are on the line, every decision matters.
                </h3>
                <p className="text-sage-100 text-xl mb-8 leading-relaxed">
                  GammaLex transforms how you evaluate, triage, and build medical malpractice cases.
                </p>
                <motion.button
                  className="bg-white text-sage-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-sage-50 transition-colors inline-flex items-center shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  See How GammaLex Helps
                  <ArrowRight className="w-6 h-6 ml-3" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-charcoal-900 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-stone-400 text-sm">&copy; 2024 GammaLex, Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}
