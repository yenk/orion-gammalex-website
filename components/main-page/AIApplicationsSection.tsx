"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function AIApplicationsSection() {
  return (
    <section className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 font-inter relative overflow-hidden">
      {/* Background Image - Used exactly as is */}
      <div className="absolute inset-0">
        <img src="/images/intelligence-moves/intelligence-that-moves-background.png" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Heading */}
        <motion.div
          className="text-left mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-white mb-8 drop-shadow-lg">
            Intelligence That Moves With Healthcare
          </h2>
        </motion.div>

        {/* 2x2 Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Column 1: AI to Improve Data */}
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-md">
              Smart Policy Engine
            </h3>
            
            <p className="text-lg text-white leading-relaxed mb-8 drop-shadow-sm font-medium">
              Real-time policy monitoring across 8 major data sources. Validates claims against CMS, WHO ICD-11, and legal precedents.
            </p>
            
            <a href="/application" className="bg-gammalex-purple hover:bg-gammalex-purple-light text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block">
              Learn more
            </a>
          </motion.div>

          {/* Column 2: AI to Provide Insights */}
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-md">
              Risk Prediction AI
            </h3>
            
            <p className="text-lg text-white leading-relaxed mb-8 drop-shadow-sm font-medium">
              Machine learning identifies denial patterns. 94% approval rate with predictive risk analysis.
            </p>
            
            <a href="/application" className="bg-gammalex-purple hover:bg-gammalex-purple-light text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block">
              Learn more
            </a>
          </motion.div>

          {/* Column 3: AI to Surface Connections */}
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-md">
              Specialty Intelligence
            </h3>
            
            <p className="text-lg text-white leading-relaxed mb-8 drop-shadow-sm font-medium">
              Domain-specific AI built for radiology imaging workflows, trained on 50K+ radiology cases. Expanding to oncology, cardiology, and other specialties.
            </p>
            
            <a href="/application" className="bg-gammalex-purple hover:bg-gammalex-purple-light text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block">
              Learn more
            </a>
          </motion.div>

          {/* Column 4: Placeholder for future AI suite component */}
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-md">
              Enterprise Security
            </h3>
            
            <p className="text-lg text-white leading-relaxed mb-8 drop-shadow-sm font-medium">
              SOC2 Type II certified with 99.9% uptime. HIPAA/GDPR compliant enterprise integration.
            </p>
            
            <a href="/application" className="bg-gammalex-purple hover:bg-gammalex-purple-light text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block">
              Learn more
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}