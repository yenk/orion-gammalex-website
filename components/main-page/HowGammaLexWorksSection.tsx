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
            How GammaLex <span className="text-gammalex-purple">works</span>
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto">
            Our AI platform combines clinical expertise, imaging physics, and voice workflows to accelerate breast imaging detection and reporting.
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
                Our AI analyzes medical records, imaging metadata, and clinical documentation to understand the study context and highlight suspicious regions.
              </p>
            </div>
            <div className="lg:w-2/3">
              <div className="bg-gray-900 border border-gray-700 p-8 rounded-lg">
                <p className="text-lg text-white/90 leading-relaxed">
                  GammaLex processes clinical data, imaging metadata, and terminology to extract key findings that anchor structured reports. The system surfaces suspicious regions, references prior exams, and highlights clinical justifications aligned with radiology standards.
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
                Contextual Matching
              </h3>
              <p className="text-lg text-white/90 leading-relaxed">
                The platform aligns findings with clinical guidelines, historical cohorts, and modality expectations to keep interpretations consistent.
              </p>
            </div>
            <div className="lg:w-2/3">
              <div className="bg-gray-900 border border-gray-700 p-8 rounded-lg">
                <p className="text-lg text-white/90 leading-relaxed">
                  Our continuously updated knowledge graph connects findings to radiology standards and documented patterns, identifying relevant imaging cues, clinical justification, and next steps for each modality.
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
                Narrative Generation
              </h3>
              <p className="text-lg text-white/90 leading-relaxed">
                AI generates evidence-based narratives that explain imaging decisions and support follow-up planning.
              </p>
            </div>
            <div className="lg:w-2/3">
              <div className="bg-gray-900 border border-gray-700 p-8 rounded-lg">
                <p className="text-lg text-white/90 leading-relaxed">
                  Using clinical-compliant intelligence, GammaLex builds reports that combine imaging, AR annotations, and voice notes while flagging missing context and suggesting next steps.
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
                Clinical foresight identifies uncertain findings and workflow bottlenecks before they impact care delivery.
              </p>
            </div>
            <div className="lg:w-2/3">
              <div className="bg-gray-900 border border-gray-700 p-8 rounded-lg">
                <p className="text-lg text-white/90 leading-relaxed">
                  The platform assesses model reliability, documentation completeness, and regulatory expectations to reduce re-scans and keep care teams confident.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}