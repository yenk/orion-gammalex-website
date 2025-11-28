"use client"

import { motion } from "framer-motion"
import { JoinWaitlistModal } from '@/components/JoinWaitlistModal'

export default function WhatWeDoContent() {
  return (
    <>
      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* 2x2 Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                GammaLex applies AI trained on mammography, breast ultrasound, and pathology data to surface cancers earlier, quantify risk, and align every interpretation with ACR guidelines and payer policies. Risk stratification, lesion characterization, and triage happen inside the reader workflow so teams see the right findings at the right time without leaving the PACS or RIS.
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                AR overlays project AI findings into 3D space for lesion localization and biopsy planning, while voice-enabled reporting narrates results and locks them directly to AI insights. Every output stays linked to the authorization workflow so requests, compliance checks, and documentation are explainable and ready for payers.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white font-inter relative" style={{ backgroundColor: '#1a365d' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-semibold text-white drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Request a Demo
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <JoinWaitlistModal
                trigger={
                    <button 
                      className="px-8 py-4 font-semibold rounded-lg transition-colors duration-200"
                      style={{
                        backgroundColor: '#EBD4BE',
                        color: '#1a365d',
                        border: '2px solid #EBD4BE',
                        boxShadow: '0 8px 16px rgba(26, 54, 93, 0.4)'
                      }}
                    >
                      Book a Demo
                    </button>
                }
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
} 