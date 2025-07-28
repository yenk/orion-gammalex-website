"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FileText, ExternalLink } from 'lucide-react'

export default function TrustComplianceStandards() {
  return (
    <section className="w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-8 font-inter bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-gray-900 mb-8">
            Compliance & Standards
          </h2>
          <p className="text-xl text-gray-800 leading-relaxed max-w-4xl mx-auto">
            Building toward enterprise-grade compliance and regulatory standards
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Compliance roadmap */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900">
              Compliance roadmap
            </h3>
            <p className="text-lg text-gray-800 leading-relaxed">
              We are on track for SOC 2 Type II certification and key healthcare compliance standards. During our beta phase, we're focused on building a strong, scalable foundation with a clear path to enterprise-grade compliance. We're committed to transparency—sharing where we are today and where we're headed as we work toward full certification.
            </p>
          </motion.div>

          {/* GDPR and CCPA compliance */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900">
              GDPR and CCPA compliance
            </h3>
            <p className="text-lg text-gray-800 leading-relaxed">
              GammaLex is actively working toward compliance with GDPR, CCPA, and other applicable privacy regulations. Our healthcare AI products are being developed with a strong focus on data minimization, transparency, and client control. Privacy is a core design principle, and we are committed to building systems that respect and protect personal information. For more details, please see our Privacy Policy.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 