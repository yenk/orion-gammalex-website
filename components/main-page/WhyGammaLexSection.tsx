"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function WhyGammaLexSection() {
  return (
    <section className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 font-inter bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-white mb-8">
            Healthcare AI that understands the <span className="text-gammalex-orange">clinical-legal frontier</span>
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto">
            GammaLex is the first AI platform built specifically for the intersection of medicine, policy, and law—where pre-authorization decisions determine patient care and provider liability.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Clinical Intelligence */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white">
              Clinical Intelligence
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              Our AI understands medical terminology, billing codes, and clinical documentation to generate accurate pre-authorization justifications that align with payer requirements.
            </p>
          </motion.div>

          {/* Legal Foresight */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white">
              Legal Foresight
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              Built with legal expertise to identify potential compliance issues and liability risks before they become denials or legal problems.
            </p>
          </motion.div>

          {/* Policy Awareness */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white">
              Policy Awareness
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              Continuously updated with the latest payer policies, coverage rules, and regulatory changes to ensure compliance and maximize approval rates.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}