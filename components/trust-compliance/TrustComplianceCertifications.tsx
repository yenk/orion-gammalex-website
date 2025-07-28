"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FileText, ExternalLink } from 'lucide-react'

export default function TrustComplianceCertifications() {
  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 font-inter bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* SOC 2 Type II */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white">SOC 2 Type II in progress</h3>
            <p className="text-sm text-white/90 leading-relaxed">
              At GammaLex, we are committed to earning your trust through transparency and strong data stewardship. While we are not yet SOC 2 Type II certified, we are actively aligning our systems and processes with the standards set by the AICPA. Our goal is to meet and exceed key controls around security, availability, and confidentiality as we continue building a platform that's both responsible and resilient.
            </p>
          </motion.div>

          {/* Data Privacy Framework */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white">Data Privacy Framework in progress</h3>
            <p className="text-sm text-white/90 leading-relaxed">
              GammaLex is actively preparing for participation in the CAN–U.S. Data Privacy Frameworks. These frameworks, developed by the U.S. Department of Commerce in collaboration with international partners including the Government of Canada are designed to enable secure, lawful transfers of personal data across borders. While we are not yet certified, we are building toward full alignment to ensure our cross-border data practices meet the highest standards of privacy, transparency, and trust.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 