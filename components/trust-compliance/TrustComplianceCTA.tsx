"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function TrustComplianceCTA() {
  return (
    <section className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 font-inter bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto p-8 rounded-3xl border border-gray-200 bg-gray-50">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Trusted by healthcare leaders
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Join healthcare organizations that trust Gammalex with their most sensitive data and compliance requirements. Our enterprise-level security and privacy standards ensure your healthcare data remains protected and compliant.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 