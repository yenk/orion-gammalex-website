"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function AIApplicationsSection() {
  return (
    <section className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 font-inter relative overflow-hidden">
      {/* Background Image - Used exactly as is */}
      <div className="absolute inset-0">
        <img src="/images/impact/icons/light4.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-white mb-8">
            Our vertical AI suite
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
          {/* Column 1: AI to Improve Data */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-normal text-white mb-6">
              AI to Improve Data: Intelligent PreAuth
            </h3>
            
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Intelligent PreAuth cleanses clinical data and automates pre-authorization request generation and maintenance, eliminating the need for manual documentation and updates. Our AI suite processes medical records, billing codes, and clinical documentation to extract key information needed for pre-authorization requests, ensuring data quality and compliance with payer requirements.
            </p>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Learn more
            </button>
          </motion.div>

          {/* Column 2: AI to Provide Insights */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-normal text-white mb-6">
              AI to Provide Insights: Clinical-Legal Intelligence
            </h3>
            
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              GammaLex's AI platform combines clinical expertise, legal foresight, and policy awareness to automate pre-authorization processes and prevent denials. Our vertical AI suite provides real-time insights and predictive analytics, helping healthcare organizations navigate the complex intersection of medicine, policy, and law where pre-authorization decisions determine patient care and provider liability.
            </p>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Learn more
            </button>
          </motion.div>

          {/* Column 3: AI to Surface Connections */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-normal text-white mb-6">
              AI to Surface Connections: Authorization Forecasting
            </h3>
            
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Our AI suite provides fully automated pre-authorization forecasting with 96%+ reliability, leveraging machine learning to predict approval outcomes and identify potential denials before they happen. The system adjusts probabilistic predictions to reflect changing payer policies and coverage rules, helping healthcare teams make data-driven authorization decisions.
            </p>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Learn more
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}