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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-inter font-normal text-slate-900 mb-8 leading-tight">
            How GammaLex prevents denials and protects revenue through intelligent AI
          </h2>
        </motion.div>

        {/* Three Columns */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Column 1: Predict Denials */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal text-slate-900 mb-6 leading-tight">
              Predict Denials Before They Happen
            </h3>
            
            {/* Separator */}
            <div className="w-1/2 h-px bg-gray-300 mx-auto mb-8"></div>
            
            <div className="text-left space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-1 flex-shrink-0"></div>
                <p className="text-base text-slate-700 leading-relaxed">
                  Real-time AI analyzes clinical documentation and predicts denial risk before claims are submitted, giving you time to fix issues proactively.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-1 flex-shrink-0"></div>
                <p className="text-base text-slate-700 leading-relaxed">
                  Our intelligent system adapts to different clinical specialties and payer rules, providing accurate predictions that improve over time.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Protect Revenue */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal text-slate-900 mb-6 leading-tight">
              Protect Revenue and Patient Access
            </h3>
            
            {/* Separator */}
            <div className="w-1/2 h-px bg-gray-300 mx-auto mb-8"></div>
            
            <div className="text-left space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-1 flex-shrink-0"></div>
                <p className="text-base text-slate-700 leading-relaxed">
                  Prevent revenue leakage by reducing claim denials and accelerating reimbursement through transparent, compliant claim generation.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-1 flex-shrink-0"></div>
                <p className="text-base text-slate-700 leading-relaxed">
                  Our AI de-risks workflows and ensures patients get the care they need while healthcare organizations maintain financial stability.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Column 3: Stay Compliant */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal text-slate-900 mb-6 leading-tight">
              Stay Compliant as Rules Evolve
            </h3>
            
            {/* Separator */}
            <div className="w-1/2 h-px bg-gray-300 mx-auto mb-8"></div>
            
            <div className="text-left space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-1 flex-shrink-0"></div>
                <p className="text-base text-slate-700 leading-relaxed">
                  Our AI stays aligned with fast-changing payer rules and policy updates, ensuring your documentation remains audit-ready and compliant.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-1 flex-shrink-0"></div>
                <p className="text-base text-slate-700 leading-relaxed">
                  Minimize administrative delays and support equitable access to care while maintaining the highest standards of accuracy and compliance.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}