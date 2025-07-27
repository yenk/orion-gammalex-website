"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Eye, Scale, Heart } from 'lucide-react'

export default function ResponsibleAIPrinciples() {
  const principles = [
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Transparency",
      description: "Clear, explainable AI decisions that healthcare providers can understand and trust."
    },
    {
      icon: <Eye className="w-8 h-8 text-white" />,
      title: "Accountability",
      description: "Clear responsibility for AI outcomes and continuous monitoring of system performance."
    },
    {
      icon: <Scale className="w-8 h-8 text-white" />,
      title: "Fairness",
      description: "Unbiased AI that serves all patients equally, regardless of background or demographics."
    },
    {
      icon: <Heart className="w-8 h-8 text-white" />,
      title: "Patient-Centric",
      description: "AI designed to enhance patient care, not replace human judgment and compassion."
    }
  ];

  return (
    <section className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 font-inter relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-inter font-normal text-white text-center mb-12">
            Our <span className="gradient-text">Principles</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm p-6 bg-gradient-to-br from-gammalex-purple/10 to-gammalex-orange/5 group-hover:from-gammalex-purple/20 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gammalex-purple to-gammalex-orange flex items-center justify-center shadow-lg">
                      {principle.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white">{principle.title}</h3>
                  </div>
                  <p className="text-white/80 leading-relaxed text-sm">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 