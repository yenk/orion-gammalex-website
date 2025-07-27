"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Lock, Users, CheckCircle } from 'lucide-react'

export default function ResponsibleAIPractices() {
  const practices = [
    {
      icon: <Brain className="w-8 h-8 text-white" />,
      title: "Explainable AI",
      description: "Our AI provides clear reasoning for its recommendations, enabling healthcare providers to understand and validate decisions."
    },
    {
      icon: <Lock className="w-8 h-8 text-white" />,
      title: "Data Privacy",
      description: "HIPAA-compliant data handling with end-to-end encryption and strict access controls to protect patient information."
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Human Oversight",
      description: "AI recommendations are always reviewed by qualified healthcare professionals before implementation."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      title: "Continuous Monitoring",
      description: "Regular audits and performance monitoring to ensure AI systems remain fair, accurate, and beneficial."
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-inter font-normal text-white text-center mb-12">
            Our <span className="gradient-text">Practices</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practices.map((practice, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm p-8 bg-gradient-to-br from-gammalex-purple/10 to-gammalex-orange/5 group-hover:from-gammalex-purple/20 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gammalex-purple to-gammalex-orange flex items-center justify-center shadow-lg">
                      {practice.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{practice.title}</h3>
                  </div>
                  <p className="text-white/80 leading-relaxed">{practice.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 