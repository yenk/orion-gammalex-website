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
            Intelligence That Moves With Breast Imaging
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
          {/* Column 1: AI Algorithms for Detection */}
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-md">
              AI Algorithms for Breast Cancer Detection
            </h3>
            
            <p className="text-lg text-white leading-relaxed mb-8 drop-shadow-sm font-medium">
              Deep learning complements radiologists with higher sensitivity and specificity, reducing false positives while surfacing subtle lesions across mammography and ultrasound.
            </p>
            
            <a href="/impact" className="bg-gammalex-purple hover:bg-gammalex-purple-light text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block">
              Explore detection impact
            </a>
          </motion.div>

          {/* Column 2: AR Visualization */}
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-md">
              Augmented Reality Imaging Tools
            </h3>
            
            <p className="text-lg text-white leading-relaxed mb-8 drop-shadow-sm font-medium">
              AR overlays project AI findings into 3D space so radiologists and surgeons can localize lesions, align biopsies, and interpret imaging with spatial clarity.
            </p>
            
            <a href="/howwedoit" className="bg-gammalex-purple hover:bg-gammalex-purple-light text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block">
              See AR workflows
            </a>
          </motion.div>

          {/* Column 3: Voice Syntax */}
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-md">
              Voice-Enabled Reporting & Navigation
            </h3>
            
            <p className="text-lg text-white leading-relaxed mb-8 drop-shadow-sm font-medium">
              Structured voice notes tied directly to AI findings keep reports consistent, reduce transcription errors, and let radiologists stay hands-free during complex reads.
            </p>
            
            <a href="/application" className="bg-gammalex-purple hover:bg-gammalex-purple-light text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block">
              Hear the difference
            </a>
          </motion.div>

          {/* Column 4: Integration with Imaging Centers */}
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-md">
              Integration with Imaging Centers & Hospitals
            </h3>
            
            <p className="text-lg text-white leading-relaxed mb-8 drop-shadow-sm font-medium">
              Seamless PACS/RIS/EHR connections keep AI insights in the clinician’s workflow and sync every action with downstream authorization and documentation systems.
            </p>
            
            <a href="/application" className="bg-gammalex-purple hover:bg-gammalex-purple-light text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block">
              Discover integrations
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}