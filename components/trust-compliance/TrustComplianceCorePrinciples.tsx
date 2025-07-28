"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function TrustComplianceCorePrinciples() {
  return (
    <section className="w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-8 font-inter bg-[#1a1a2e]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-white mb-8">
            Core AI Principles
          </h2>
          <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto">
            Building healthcare AI that earns trust through transparency and responsible design
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Data minimization philosophy */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white">
              Data minimization philosophy
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              Unlike many AI companies that collect everything, we believe in collecting only what's necessary. Our vertical AI approach means we focus on specific healthcare use cases, requiring minimal data to deliver maximum impact. We're building systems that respect data boundaries while delivering powerful insights.
            </p>
          </motion.div>

          {/* Privacy by design */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white">
              Privacy by design
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              Privacy isn't an afterthought—it's built into every layer of our system. We're designing for HIPAA compliance, GDPR readiness, and healthcare-specific privacy requirements. Our approach ensures that patient data protection is foundational, not retrofitted.
            </p>
          </motion.div>

          {/* Building trust through transparency */}
          <motion.div
            className="space-y-6 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white">
              Building trust through transparency
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              Trust in healthcare AI requires more than certifications—it requires transparency. We're committed to showing our work, explaining our decisions, and being open about our processes. This transparency builds the foundation for long-term trust with healthcare providers.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 