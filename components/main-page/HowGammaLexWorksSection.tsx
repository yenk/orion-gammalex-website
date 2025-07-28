"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function HowGammaLexWorksSection() {
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
            How GammaLex <span className="text-gammalex-orange">works</span>
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto">
            Our AI platform combines clinical expertise, legal foresight, and policy awareness to automate pre-authorization processes and prevent denials.
          </p>
        </motion.div>

        <motion.div
          className="space-y-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Step 1: Data Analysis */}
          <motion.div
            className="flex flex-col lg:flex-row items-start gap-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-1/3">
              <h3 className="text-3xl font-semibold text-white mb-4">
                Data Analysis
              </h3>
              <p className="text-lg text-white/90 leading-relaxed">
                Our AI analyzes medical records, billing codes, and clinical documentation to understand the treatment request and identify relevant payer policies.
              </p>
            </div>
            <div className="lg:w-2/3">
              <div className="bg-gray-900 border border-gray-700 p-8 rounded-lg">
                <p className="text-lg text-white/90 leading-relaxed">
                  GammaLex processes clinical data, medical terminology, and billing codes to extract key information needed for pre-authorization requests. The system identifies relevant diagnostic codes, procedure codes, and clinical justifications that align with payer requirements.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Step 2: Policy Matching */}
          <motion.div
            className="flex flex-col lg:flex-row items-start gap-12"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-1/3">
              <h3 className="text-3xl font-semibold text-white mb-4">
                Policy Matching
              </h3>
              <p className="text-lg text-white/90 leading-relaxed">
                The platform matches treatment requests with current payer policies, coverage rules, and authorization requirements to ensure compliance.
              </p>
            </div>
            <div className="lg:w-2/3">
              <div className="bg-gray-900 border border-gray-700 p-8 rounded-lg">
                <p className="text-lg text-white/90 leading-relaxed">
                  Our continuously updated database of payer policies and coverage rules enables precise matching between treatment requests and authorization requirements. The system identifies specific criteria, documentation needs, and approval pathways for each payer.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Step 3: Justification Generation */}
          <motion.div
            className="flex flex-col lg:flex-row items-start gap-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-1/3">
              <h3 className="text-3xl font-semibold text-white mb-4">
                Justification Generation
              </h3>
              <p className="text-lg text-white/90 leading-relaxed">
                AI generates comprehensive, evidence-based justifications that address payer requirements and maximize approval likelihood.
              </p>
            </div>
            <div className="lg:w-2/3">
              <div className="bg-gray-900 border border-gray-700 p-8 rounded-lg">
                <p className="text-lg text-white/90 leading-relaxed">
                  Using clinical-legal intelligence, GammaLex creates detailed justifications that include medical necessity, clinical evidence, and compliance with payer policies. The system flags potential issues and suggests alternative approaches when needed.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Step 4: Risk Assessment */}
          <motion.div
            className="flex flex-col lg:flex-row items-start gap-12"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-1/3">
              <h3 className="text-3xl font-semibold text-white mb-4">
                Risk Assessment
              </h3>
              <p className="text-lg text-white/90 leading-relaxed">
                Legal foresight identifies potential compliance issues and liability risks before they become denials or legal problems.
              </p>
            </div>
            <div className="lg:w-2/3">
              <div className="bg-gray-900 border border-gray-700 p-8 rounded-lg">
                <p className="text-lg text-white/90 leading-relaxed">
                  The platform assesses legal and compliance risks, identifying potential issues with documentation, policy compliance, or regulatory requirements. This proactive approach helps prevent denials and reduces liability exposure.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}