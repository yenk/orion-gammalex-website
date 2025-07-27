"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, CheckCircle, Award } from 'lucide-react'

export default function TrustComplianceStandards() {
  const standards = [
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "SOC 2 Type II",
      description: "Certified security controls and operational excellence for enterprise-grade protection."
    },
    {
      icon: <Lock className="w-8 h-8 text-white" />,
      title: "HIPAA Compliance",
      description: "Full compliance with healthcare privacy regulations and data protection standards."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      title: "GDPR Ready",
      description: "European data protection compliance for international healthcare operations."
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: "HITRUST CSF",
      description: "Comprehensive security framework certification for healthcare organizations."
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
            Compliance <span className="gradient-text">Standards</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {standards.map((standard, index) => (
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
                      {standard.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white">{standard.title}</h3>
                  </div>
                  <p className="text-white/80 leading-relaxed text-sm">{standard.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 