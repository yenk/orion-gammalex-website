"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'

export default function ImpactStories() {
  const successStories = [
    {
      specialty: "Radiology",
      outcome: "67% reduction in preventable denials",
      description: "A major hospital system implemented GammaLex's radiology-specific AI and saw dramatic improvements in claim approval rates and faster payment cycles."
    },
    {
      specialty: "Oncology",
      outcome: "23-day acceleration in payment cycles",
      description: "Cancer centers using our platform experienced significantly faster reimbursement while maintaining compliance with complex treatment protocols."
    },
    {
      specialty: "Cardiology",
      outcome: "Enhanced risk assessment accuracy",
      description: "Cardiology departments achieved better documentation quality and reduced audit exposure through proactive compliance monitoring."
    }
  ];

  return (
    <section className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 font-inter relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-inter font-normal text-white text-center mb-12">
            Success <span className="gradient-text">Stories</span>
          </h3>
          
          <div className="space-y-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-3xl border border-white/10 backdrop-blur-sm p-8 lg:p-12"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gammalex-purple/10 to-gammalex-orange/5 rounded-3xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gammalex-purple to-gammalex-orange flex items-center justify-center shadow-xl">
                      <TrendingUp className="text-white" size={32} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{story.specialty}</h4>
                      <p className="text-gammalex-orange font-semibold">{story.outcome}</p>
                    </div>
                  </div>
                  <p className="text-lg text-white/90 leading-relaxed">{story.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 