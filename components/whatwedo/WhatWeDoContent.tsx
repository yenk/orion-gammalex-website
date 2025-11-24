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
                Built specifically for radiology imaging workflows, GammaLex's approval intelligence predicts authorization outcomes, validates imaging requests against payer policies in real-time, and prevents denials before they impact patient care or revenue. We're not a general-purpose platform; we're built for depth and precision, training our models on radiology imaging data, ACR guidelines, and payer authorization rules to address challenges that traditional systems overlook. As we expand to oncology, cardiology, and other specialties, our AI adapts to each domain's unique requirements.
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                GammaLex's approval intelligence helps radiology teams, imaging centers, and hospitals excel by improving imaging authorization success rates, reducing denials and delays, and accelerating patient access to diagnostic imaging. Our platform delivers real-time policy validation and risk prediction at scale—helping radiology staff adapt instantly to payer policy shifts, ACR guideline updates, and authorization rule changes. As we expand to other specialties, GammaLex brings the same precision and intelligence to oncology, cardiology, and beyond.
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
              Partner with Us
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
                    Learn more
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