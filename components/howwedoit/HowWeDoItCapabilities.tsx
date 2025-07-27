"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Zap, Shield, Target, Scale, Lock } from 'lucide-react'

export default function HowWeDoItCapabilities() {
  const capabilities = [
    {
      icon: <Brain className="w-8 h-8 text-white" />,
      title: "Clinical Intelligence",
      description: "Deep understanding of medical necessity and clinical decision-making processes"
    },
    {
      icon: <Scale className="w-8 h-8 text-white" />,
      title: "Legal Compliance",
      description: "Real-time monitoring of regulatory requirements and legal precedents"
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Policy Alignment",
      description: "Continuous adaptation to evolving payer policies and coverage rules"
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Risk Prevention",
      description: "Proactive identification and mitigation of denial and compliance risks"
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Real-time Processing",
      description: "Instant analysis and recommendations at the point of care"
    },
    {
      icon: <Lock className="w-8 h-8 text-white" />,
      title: "Enterprise Security",
      description: "SOC 2 and HIPAA compliant with enterprise-grade security protocols"
    }
  ];

  return (
    <section className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 font-inter relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-inter font-normal text-white text-center mb-12">
            Core <span className="gradient-text">Capabilities</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm p-6 bg-gradient-to-br from-gammalex-purple/10 to-gammalex-orange/5 group-hover:from-gammalex-purple/20 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gammalex-purple to-gammalex-orange flex items-center justify-center shadow-lg">
                      {capability.icon}
                    </div>
                    <h4 className="text-lg font-bold text-white">{capability.title}</h4>
                  </div>
                  <p className="text-white/80 leading-relaxed text-sm">{capability.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 