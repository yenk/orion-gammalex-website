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
            AI breast imaging outcomes: higher detection, fewer false positives
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
                Detection accuracy & sensitivity
              </h3>
              
              <div className="w-1/2 h-px bg-gray-300 mx-auto mb-8"></div>
              
              <div className="text-left space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-1 flex-shrink-0"></div>
                  <p className="text-base text-slate-700 leading-relaxed">
                    AI-powered models identify subtle cancers and rare findings that often slip past single readers, lifting average sensitivity beyond the mid-80s.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-1 flex-shrink-0"></div>
                  <p className="text-base text-slate-700 leading-relaxed">
                    Consistent AI outputs reduce inter-reader variability, so every breast imaging report meets a high bar of accuracy from the start.
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
                Risk stratification & triage
              </h3>
              
              <div className="w-1/2 h-px bg-gray-300 mx-auto mb-8"></div>
              
              <div className="text-left space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-1 flex-shrink-0"></div>
                  <p className="text-base text-slate-700 leading-relaxed">
                    AI ranks findings so radiologists focus on the highest-risk cases, cutting false positives without compromising sensitivity.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-1 flex-shrink-0"></div>
                  <p className="text-base text-slate-700 leading-relaxed">
                    Integrated AR overlays lock insights to precise anatomy, supporting confident triage decisions and biopsy planning.
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
                Workflow optimization for breast imaging
              </h3>
              
              <div className="w-1/2 h-px bg-gray-300 mx-auto mb-8"></div>
              
              <div className="text-left space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-1 flex-shrink-0"></div>
                  <p className="text-base text-slate-700 leading-relaxed">
                    Voice-guided reporting captures AI findings directly, removing transcription errors and keeping radiologists hands-free.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-1 flex-shrink-0"></div>
                  <p className="text-base text-slate-700 leading-relaxed">
                    Combined AI + AR + voice makes every breast imaging workflow more consistent, efficient, and explainable.
                  </p>
                </div>
              </div>
            </motion.div>
        </motion.div>
      </div>
    </section>
  )
}