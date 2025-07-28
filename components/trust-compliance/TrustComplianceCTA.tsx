"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function TrustComplianceCTA() {
  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 font-inter bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto p-8 rounded-3xl border border-gray-200 bg-white">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Building trust in healthcare AI
            </h3>
            <p className="text-lg text-gray-800 leading-relaxed">
              We're building the foundation for trusted healthcare AI. While we're in beta, we're transparent about our approach, our roadmap, and our commitment to the security and privacy standards that healthcare requires.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 