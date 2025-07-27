"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Zap, Shield, Target } from 'lucide-react'

export default function HowWeDoItMethodology() {
  const methodologySteps = [
    {
      icon: <Brain className="text-white" size={40} />,
      title: "Deep Learning on Clinical Data",
      description: "Our AI ingests millions of clinical cases, medical policies, and legal precedents to understand the nuanced relationships between diagnosis, treatment, and coverage requirements.",
      gradient: "from-gammalex-purple to-gammalex-orange",
      layout: "flex-col lg:flex-row"
    },
    {
      icon: <Zap className="text-white" size={40} />,
      title: "Real-time Policy Intelligence",
      description: "Continuous monitoring of evolving payer policies and regulatory changes ensures our recommendations stay current and accurate at the point of care.",
      gradient: "from-gammalex-orange to-gammalex-purple",
      layout: "flex-col lg:flex-row-reverse"
    },
    {
      icon: <Target className="text-white" size={40} />,
      title: "Predictive Risk Assessment",
      description: "Advanced algorithms identify potential denials and compliance risks before they occur, enabling proactive intervention and documentation improvement.",
      gradient: "from-gammalex-purple to-gammalex-orange",
      layout: "flex-col lg:flex-row"
    },
    {
      icon: <Shield className="text-white" size={40} />,
      title: "Specialty-Specific Optimization",
      description: "Each medical specialty has unique challenges. Our AI adapts to the specific workflows, policies, and risk profiles of radiology, oncology, cardiology, and beyond.",
      gradient: "from-gammalex-orange to-gammalex-purple",
      layout: "flex-col lg:flex-row-reverse"
    }
  ];

  return (
    <section className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 font-inter relative">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16 lg:space-y-20">
          {methodologySteps.map((step, index) => (
            <motion.div
              key={index}
              className={`flex ${step.layout} items-center gap-8 lg:gap-12`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0">
                <div className={`w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-xl`}>
                  {step.icon}
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 