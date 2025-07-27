"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function TrustComplianceCTA() {
  return (
    <section className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 font-inter relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto p-8 rounded-3xl border border-gammalex-purple/30 bg-gradient-to-br from-gammalex-purple/10 to-gammalex-purple/20">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Trusted by healthcare leaders
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              Join healthcare organizations that trust GammaLex with their most sensitive data and compliance requirements.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 