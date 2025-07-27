"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Users, DollarSign, Clock, Shield, Target } from 'lucide-react'

export default function ImpactStats() {
  const impactMetrics = [
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      metric: "Reduced",
      label: "Preventable Denials",
      description: "Significant reduction in claim denials through proactive risk assessment"
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      metric: "Faster",
      label: "Payment Cycles",
      description: "Accelerated reimbursement through improved documentation and compliance"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      metric: "Protected",
      label: "Hospital Revenue",
      description: "Safeguarded revenue through intelligent coverage insights and risk prevention"
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      metric: "Improved",
      label: "Patient Care",
      description: "Enhanced clinical decision-making with real-time policy intelligence"
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      metric: "Enhanced",
      label: "Compliance",
      description: "Strengthened regulatory adherence through automated monitoring"
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      metric: "Optimized",
      label: "Workflows",
      description: "Streamlined processes that reduce administrative burden on care teams"
    }
  ];

  return (
    <section className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 font-inter relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {impactMetrics.map((impact, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm p-8 bg-gradient-to-br from-gammalex-purple/10 to-gammalex-orange/5 group-hover:from-gammalex-purple/20 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gammalex-purple to-gammalex-orange flex items-center justify-center shadow-lg">
                    {impact.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gammalex-orange">{impact.metric}</div>
                    <div className="text-lg font-semibold text-white">{impact.label}</div>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed text-sm">{impact.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 