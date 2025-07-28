"use client"

import React from 'react'
import { motion } from 'framer-motion'


export default function ResponsibleAIPrinciples() {
  const principles = [
    {
      title: "Transparency & Accountability",
      description: "Every AI recommendation comes with clear policy sources and explainable reasoning. We don't hide behind black boxes—we build trust through radical transparency in clinical-legal-payer intelligence."
    },
    {
      title: "Fairness & Anti-Bias",
      description: "We combat healthcare disparities by auditing our models against diverse patient populations and payer policies. Every recommendation is tested for bias before deployment."
    },
    {
      title: "Social Benefit",
      description: "Our vertical AI doesn't just process data—it transforms healthcare delivery. We expand access, reduce administrative burden, and empower providers to focus on what matters: patient care."
    },
    {
      title: "Privacy & Security",
      description: "HIPAA compliance is our baseline, not our ceiling. We implement enterprise-grade security that healthcare organizations can trust with their most sensitive patient data."
    },
    {
      title: "Human Oversight",
      description: "AI augments human expertise, never replaces it. Our vertical AI serves as a trusted advisor, providing insights that enhance clinical and administrative decision-making."
    },
    {
      title: "Interoperability & Compatibility",
      description: "We integrate seamlessly with existing healthcare systems, payer networks, and clinical workflows. No rip-and-replace—just intelligent augmentation of your current infrastructure."
    }
  ];

  return (
    <section className="w-full font-inter">
      {/* Dark background section - matching How We Do design */}
      <div className="bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col lg:flex-row lg:items-start lg:gap-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Left side - Headline */}
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-white leading-tight">
                Designing AI with <span className="text-gammalex-orange">Purpose</span>, <span className="text-gammalex-orange">Prosperity</span>, and <span className="text-gammalex-orange">Transparency</span> in Mind
              </h2>
            </div>
            
            {/* Right side - Description */}
            <div className="lg:w-1/2">
              <p className="text-xl text-white/80 leading-relaxed">
                At GammaLex, we believe AI is a force for progress—one that can illuminate complexity, expand access, and transform healthcare for the better. With that power comes a responsibility we embrace: to build with integrity, innovate boldly, and ensure our technology consistently serves people, purpose, and the public good.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Light background section - alternating pattern */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-gray-900 mb-16">
              Our Guiding Principles
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <div className="relative overflow-hidden rounded-2xl border border-gray-200 p-8 bg-white backdrop-blur-sm group-hover:bg-gray-50 transition-all duration-300 h-full shadow-sm hover:shadow-lg">
                    <div className="flex flex-col h-full">
                      <h4 className="text-2xl font-semibold text-gray-900 mb-4">{principle.title}</h4>
                      <p className="text-gray-700 leading-relaxed text-lg flex-1">{principle.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 