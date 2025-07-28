"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FileText, ExternalLink } from 'lucide-react'

export default function TrustComplianceStandards() {
  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 font-inter bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-gray-900 mb-8">
            Our Foundational AI Principles
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Building healthcare AI that earns trust through transparency and responsible design
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Building for transparency */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Building for transparency
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              We're designing our systems with transparency in mind from the ground up. Every AI recommendation comes with clear policy sources and explainable reasoning. We don't hide behind black boxes—we build trust through radical transparency in clinical-legal-payer intelligence.
            </p>
          </motion.div>

          {/* Data minimization philosophy */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Data minimization philosophy
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Unlike many AI companies that collect everything, we believe in collecting only what's necessary. Our vertical AI approach means we focus on specific healthcare use cases, requiring minimal data to deliver maximum impact. We're building systems that respect data boundaries while delivering powerful insights.
            </p>
          </motion.div>

          {/* Security foundation */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Security foundation
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              We're building with enterprise-grade security principles from day one. While we're in beta, our architecture is designed for the security requirements of healthcare organizations. We're implementing robust encryption, secure API access, and comprehensive audit trails—laying the groundwork for future compliance certifications.
            </p>
          </motion.div>

          {/* Privacy by design */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Privacy by design
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Privacy isn't an afterthought—it's built into every layer of our system. We're designing for HIPAA compliance, GDPR readiness, and healthcare-specific privacy requirements. Our approach ensures that patient data protection is foundational, not retrofitted.
            </p>
          </motion.div>

          {/* Compliance roadmap */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Compliance roadmap
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              We're on track for SOC 2 Type II certification and other healthcare compliance standards. Our beta phase is focused on building the right foundation, with a clear path to enterprise-grade compliance. We're transparent about our current status and our roadmap to full certification.
            </p>
          </motion.div>

          {/* Building trust through transparency */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Building trust through transparency
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Trust in healthcare AI requires more than certifications—it requires transparency. We're committed to showing our work, explaining our decisions, and being open about our processes. This transparency builds the foundation for long-term trust with healthcare providers.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
} 