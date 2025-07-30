"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function ProblemsWeSolveSection() {
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
            The <span className="text-gammalex-purple">pre-authorization crisis</span> affects everyone
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto">
            Prior authorization delays and denials create a cascade of problems across healthcare—from patient harm to provider burnout to increased costs.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Patient Impact */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold text-white">
              Patient Harm & Delays
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              Care delays caused by pre-authorization issues lead to worse health outcomes, treatment abandonment, and in some cases, serious adverse events or hospitalizations.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              Patients often abandon treatment when faced with lengthy authorization processes, resulting in preventable complications and increased healthcare costs.
            </p>
          </motion.div>

          {/* Provider Burden */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold text-white">
              Provider Burnout & Costs
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              Physicians and staff spend up to 15 hours per week on prior authorization requests, with many practices dedicating full-time employees solely to managing these tasks.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              The administrative burden fuels frustration, increases operational costs, and contributes to provider burnout and staff turnover.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
            GammaLex transforms this crisis into opportunity
          </h3>
          <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
            By automating pre-authorization processes with clinical-legal intelligence, we enable faster access to care, reduced administrative burden, and fewer denials and legal risks.
          </p>
        </motion.div>
      </div>
    </section>
  )
}