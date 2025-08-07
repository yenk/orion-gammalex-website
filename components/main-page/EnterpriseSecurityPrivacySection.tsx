"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function EnterpriseSecurityPrivacySection() {
  return (
    <section className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 font-inter bg-slate-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-slate-900 mb-8">
            Secure Foundations for Critical Intelligence
          </h2>
          <p className="text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto">
            SOC2 Type II certified with 99.9% uptime. HIPAA/GDPR compliant enterprise integration.
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
            <h3 className="text-2xl font-semibold text-slate-900">
              Security Foundation
            </h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              Enterprise-grade security with HIPAA/GDPR compliance. Seamless API integration for scalable deployment across complex organizations.
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
            <h3 className="text-2xl font-semibold text-slate-900">
              Privacy by Design
            </h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              Patient data protection built into every layer. HIPAA/GDPR compliant with healthcare-specific privacy requirements.
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
            <h3 className="text-2xl font-semibold text-slate-900">
              Robust Data Encryption
            </h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              AES-256 encryption with TLS 1.3 protection. Industry-standard KMS with frequent key rotation for optimal security.
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
            className="inline-block bg-gradient-to-r from-gammalex-purple to-gammalex-purple-light text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold shadow-lg hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gammalex-purple transition-all duration-300 transform hover:scale-105"
          >
            Learn more
          </a>
        </motion.div>
      </div>
    </section>
  )
}