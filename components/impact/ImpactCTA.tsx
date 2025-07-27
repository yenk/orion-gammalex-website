"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function ImpactCTA() {
  return (
    <section className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 font-inter relative">
      <div className="max-w-7xl mx-auto">
        {/* ROI Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-5xl mx-auto p-8 lg:p-12 rounded-3xl border border-gammalex-purple/30 bg-gradient-to-br from-gammalex-purple/10 to-gammalex-purple/20">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              Proven <span className="gradient-text">ROI</span>
            </h3>
            <p className="text-xl text-white/90 leading-relaxed mb-6">
              Recent studies show AI integration in radiology workflows can deliver 451% ROI over five years. Key drivers include time savings (78 days in triage, 41 days in reporting), faster diagnoses, and increased revenue from earlier detection enabling additional treatments.
            </p>
            <p className="text-xs text-white/50 leading-relaxed mb-4">
              Sources: <a href="https://www.diagnosticimaging.com/view/ai-radiology-roi-calculator-study-projects-451-percent-roi-over-five-years" target="_blank" rel="noopener noreferrer" className="underline hover:text-gammalex-orange transition-colors">Diagnostic Imaging</a>, <a href="https://pubmed.ncbi.nlm.nih.gov/38499053/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gammalex-orange transition-colors">PubMed</a>
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto p-8 rounded-3xl border border-gammalex-purple/30 bg-gradient-to-br from-gammalex-purple/10 to-gammalex-purple/20">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to achieve similar results?
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              Join the healthcare organizations already transforming their operations with GammaLex's vertical AI.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 