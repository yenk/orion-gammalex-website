"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function ImpactSection() {
  return (
    <section className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 font-inter bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-white mb-8">
            Transform breast imaging outcomes
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto">
            GammaLex delivers measurable improvements in detection accuracy, clinical velocity, and provider satisfaction.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Faster Approvals */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white">
              Faster Reads
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              Accelerated detection signal processing reduces time to insight so patients move from screening to action faster.
            </p>
          </motion.div>

          {/* Reduced Denials */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white">
              Consistent Confidence
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              Clinical-compliant intelligence catches missing context before sign-off, keeping reports consistent and trustworthy.
            </p>
          </motion.div>

          {/* Provider Efficiency */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white">
              Provider Efficiency
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              Automated documentation and justification generation frees up staff time, reducing administrative burden and improving workflow.
            </p>
          </motion.div>

          {/* Compliance Confidence */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white">
              Compliance Confidence
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              Built-in legal foresight and policy awareness ensure documentation matches clinical guidelines and reduces liability risks.
            </p>
          </motion.div>

          {/* Cost Savings */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white">
              Cost Savings
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              Reduced administrative overhead, fewer repeat scans, and faster clinical handoffs translate to significant cost savings for healthcare organizations.
            </p>
          </motion.div>

          {/* Patient Satisfaction */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white">
              Patient Satisfaction
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              Faster access to care and reduced treatment delays improve patient outcomes and satisfaction scores.
            </p>
          </motion.div>
        </motion.div>


      </div>
    </section>
  )
}