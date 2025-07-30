"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function ApplicationDetailed() {
  const productFeatures = [
    {
      title: "Authorization & Claims Intelligence",
      paragraphs: [
        "GammaLex's AI engine continuously analyzes payer policies and clinical data to streamline both prior authorization and claims submission. It auto-updates policy changes, validates documentation against requirements, and delivers real-time recommendations to avoid errors and accelerate approvals—all within your existing EHR and billing workflows."
      ]
    },
    {
      title: "Predictive Denial Prevention",
      paragraphs: [
        "Proactively flags high-risk claims before submission using your historical data, payer mix, and specialty focus. GammaLex provides precise, actionable feedback to minimize denials—reducing administrative burden and downstream appeals while increasing first-pass approval rates."
      ]
    },

    {
      title: "Specialty-Adaptive AI",
      paragraphs: [
        "Our modeling is trained on specialty-specific medical-legal knowledge, including CPT/ICD nuances, clinical documentation standards, and payer-specific rules. GammaLex adapts to specialty workflows—radiology, oncology, cardiology, and more—to ensure relevance, accuracy, and optimized throughput across diverse care environments."
      ]
    },
    {
      title: "Compliance, Audit & Integration Framework",
      paragraphs: [
        "Supports full regulatory readiness (HIPAA, GDPR, CMS) with built-in audit trails, security protocols, and automated compliance reporting. GammaLex integrates seamlessly into enterprise systems via API, enabling secure, bi-directional data exchange and scalable deployment across complex organizations."
      ]
    }
  ];

  return (
    <div className="w-full font-inter relative">
      {productFeatures.map((feature, index) => (
        <section 
          key={index}
          className={`w-full py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative ${
            index % 2 === 0 ? 'bg-[#1a1a2e]' : 'bg-[#0f4c75]'
          }`}
        >
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
                            <div className="max-w-4xl mx-auto">
                {/* Feature Title and Description */}
                <div className="space-y-8 text-center">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-8 drop-shadow-lg text-center font-normal">
                    {feature.title}
                  </h3>
                  
                  <div className="space-y-6">
                    {feature.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-lg sm:text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-md text-center font-normal">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
} 