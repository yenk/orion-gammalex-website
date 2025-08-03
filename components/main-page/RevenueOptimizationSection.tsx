"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function RevenueOptimizationSection() {
  return (
    <section className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 font-inter bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter font-normal text-slate-900 mb-8">
            Healthcare optimization aligns clinical decisions, payer policies, and revenue goals.
          </h2>
        </motion.div>

        {/* Three Columns */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Column 1: Clinical Intelligence */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Circular Abstract Image Placeholder */}
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-pink-400 via-red-400 to-blue-300 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center">
                <div className="text-white text-xs font-medium">CI</div>
              </div>
            </div>
            
            <h3 className="text-2xl font-normal text-slate-900 mb-4">
              Clinical Compliant Intelligence
            </h3>
            
            {/* Separator */}
            <div className="w-1/2 h-px bg-gray-300 mx-auto mb-8"></div>
            
            <div className="text-left space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base text-slate-700 leading-relaxed">
                  Real-time, source-backed guidance to help clinicians and legal teams create defensible documentation, reduce denials, remain compliant, and stay audit-ready as payer rules evolve.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base text-slate-700 leading-relaxed">
                  Our intelligent clinical-compliant insights adapt to different clinical specialties and workflows, supporting expert decision-making at scale.
                </p>
              </div>
            </div>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Learn more
            </button>
          </motion.div>

          {/* Column 2: Authorization Forecasting */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Circular Abstract Image Placeholder */}
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-orange-400 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center">
                <div className="text-white text-xs font-medium">AF</div>
              </div>
            </div>
            
            <h3 className="text-2xl font-normal text-slate-900 mb-4">
              Authorization Forecasting
            </h3>
            
            {/* Separator */}
            <div className="w-1/2 h-px bg-gray-300 mx-auto mb-8"></div>
            
            <div className="text-left space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base text-slate-700 leading-relaxed">
                  Prevents revenue leakage by reducing claim denials, de-risking workflows, and accelerating reimbursement through transparent, compliant claim generation and policy adaptation.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base text-slate-700 leading-relaxed">
                  Our revenue transformation capabilities integrate with EHRs and stay aligned with fast-changing payer rules to optimize financial outcomes.
                </p>
              </div>
            </div>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Learn more
            </button>
          </motion.div>

          {/* Column 3: Compliance Execution */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Circular Abstract Image Placeholder */}
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 via-orange-400 to-pink-400 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center">
                <div className="text-white text-xs font-medium">CE</div>
              </div>
            </div>
            
            <h3 className="text-2xl font-normal text-slate-900 mb-4">
              Compliance Execution
            </h3>
            
            {/* Separator */}
            <div className="w-1/2 h-px bg-gray-300 mx-auto mb-8"></div>
            
            <div className="text-left space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base text-slate-700 leading-relaxed">
                  Minimizes administrative delays, supports equitable access to care, and enables faster decisions—all while improving documentation quality and reducing care fragmentation.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-base text-slate-700 leading-relaxed">
                  Our patient-centric care enablement ensures that healthcare providers can focus on delivering quality care while our AI handles the complex administrative and compliance requirements.
                </p>
              </div>
            </div>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Learn more
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}