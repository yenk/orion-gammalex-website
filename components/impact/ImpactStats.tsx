"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function ImpactStats() {
  const impactSections = [
    {
      title: "Intelligent Clinical-Compliant Insights",
      subtitle: "Real-time, source-backed guidance",
      description: "AI provides unbiased insights for improved decision-making around clinical authorization and compliance.",
      metric: "92%",
      metricLabel: "of radiation oncologists report prior authorization delays",
      isDark: true
    },
    {
      title: "Revenue & Risk Transformation", 
      subtitle: "Prevents revenue leakage",
      description: "Reduces claim denials and accelerates reimbursement through transparent, compliant claim generation.",
      metric: "$25.7B",
      metricLabel: "spent fighting denials in 2023",
      isDark: false
    },
    {
      title: "Specialty-Aware, Scalable Intelligence",
      subtitle: "Adapts to clinical specialties",
      description: "Integrates with EHRs and stays aligned with fast-changing payer rules—supporting expert decision-making at scale.",
      metric: "93%",
      metricLabel: "PA rate for cardiology - second-highest among specialties",
      isDark: true
    },
    {
      title: "Patient-Centric Care Enablement",
      subtitle: "Minimizes administrative delays", 
      description: "Supports equitable access to care and enables faster decisions while improving documentation quality.",
      metric: "22%",
      metricLabel: "of cancer patients don't receive physician-recommended care",
      isDark: false
    }
  ]

  return (
    <section className="w-full">
      {impactSections.map((section, index) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true }}
          className={section.isDark ? "bg-[#1a365d]" : "bg-white"}
        >
          {/* Modern 2x2 Grid Layout */}
          <div className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 font-inter">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
                {/* Left Column - Clean Typography */}
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.h2 
                    className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight ${
                      section.isDark ? "text-white" : "text-slate-900"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {section.title}
                  </motion.h2>
                  
                  <motion.p 
                    className={`text-lg sm:text-xl lg:text-2xl font-light leading-relaxed ${
                      section.isDark ? "text-white/90" : "text-slate-700"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {section.subtitle}
                  </motion.p>
                </motion.div>

                {/* Right Column - Metrics Integration */}
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  {/* Metric Display */}
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 1.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className={`text-4xl sm:text-5xl lg:text-6xl font-normal ${
                        section.isDark ? "text-white" : "text-slate-900"
                      }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1.2, delay: 1.4 }}
                      viewport={{ once: true }}
                    >
                      {section.metric}
                    </motion.div>
                    <motion.p
                      className={`text-base sm:text-lg leading-relaxed ${
                        section.isDark ? "text-white/80" : "text-slate-600"
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.2, delay: 1.6 }}
                      viewport={{ once: true }}
                    >
                      {section.metricLabel}
                    </motion.p>
                  </motion.div>
                  
                  <motion.p 
                    className={`text-base sm:text-lg lg:text-xl leading-relaxed ${
                      section.isDark ? "text-white/90" : "text-slate-700"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 1.8 }}
                    viewport={{ once: true }}
                  >
                    {section.description}
                  </motion.p>
                  
                  <motion.div
                    className="pt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 2.0 }}
                    viewport={{ once: true }}
                  >
                    <Link href="/application">
                      <motion.button 
                        className={`px-8 py-4 font-normal rounded-lg transition-all duration-300 text-lg ${
                          section.isDark 
                            ? "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
                            : "bg-slate-900 text-white hover:bg-slate-800"
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Learn More
                      </motion.button>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  )
} 