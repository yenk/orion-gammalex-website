"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function EnterpriseSecurityPrivacySection() {
  return (
    <section className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 font-inter bg-[#1a1a2e]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-white mb-8">
            Enterprise Security & Privacy
          </h2>
          <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto">
            Built for scale with healthcare-grade security and privacy protection
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Security foundation */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white">
              Security foundation
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              We're building with enterprise-grade security principles from day one. Our architecture is designed for the security requirements of healthcare organizations, implementing robust encryption, secure API access, and comprehensive audit trails—laying the groundwork for future compliance certifications.
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

          {/* Robust data encryption */}
          <motion.div
            className="space-y-6 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white">
              Robust data encryption
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              We encrypt your healthcare data using AES-256-bit data-at-rest encryption and TLS 1.3 SHA-256 data-in-transit protection. The keys for these systems are frequently rotated to comply with industry standard KMS practices and are secured by KMS protections. We implement the latest encryption standards to ensure optimal security and efficiency.
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <a
            href="/trust-compliance"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200"
          >
            Learn more
          </a>
        </motion.div>
      </div>
    </section>
  )
} 