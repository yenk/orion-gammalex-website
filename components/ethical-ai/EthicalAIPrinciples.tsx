"use client"

import React from 'react'
import { motion } from 'framer-motion'


export default function EthicalAIPrinciples() {
  const principles = [
    {
      title: "Transparency",
      description: "Every recommendation comes with clear policy sources and explainable reasoning. We build trust through radical transparency in clinical-legal intelligence."
    },
    {
      title: "Fairness",
      description: "We combat healthcare disparities by auditing our models against diverse patient populations. Every recommendation is tested for bias before deployment."
    },
    {
      title: "Social Benefit",
      description: "Our AI transforms healthcare delivery by expanding access and reducing administrative burden. We empower providers to focus on what matters: patient care."
    },
    {
      title: "Privacy",
      description: "HIPAA compliance is our baseline. We implement enterprise-grade security that healthcare organizations can trust with their most sensitive patient data."
    },
    {
      title: "Human Oversight",
      description: "AI augments human expertise, never replaces it. Our AI serves as a trusted advisor, providing insights that enhance clinical and administrative decisions."
    },
    {
      title: "Interoperability",
      description: "We integrate seamlessly with existing healthcare systems, payer networks, and clinical workflows. No rip-and-replace—just intelligent augmentation."
    }
  ];

  return (
    <section className="w-full font-inter">
      {/* Dark background section */}
      <div className="bg-white py-24">
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
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-gray-900 leading-tight">
                Designing AI with <span className="text-gammalex-purple">Purpose</span>, <span className="text-gammalex-purple">Prosperity</span>, and <span className="text-gammalex-purple">Transparency</span> in Mind
              </h2>
            </div>
            
            {/* Right side - Description */}
            <div className="lg:w-1/2">
              <p className="text-xl text-gray-700 leading-relaxed">
                At GammaLex, we believe AI is a force for progress—one that can illuminate complexity, expand access, and transform healthcare for the better. With that power comes a responsibility we embrace: to build with integrity, innovate boldly, and ensure our technology consistently serves people, purpose, and the public good.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bright blue background section */}
      <div className="py-24 text-white font-inter relative" style={{ backgroundColor: '#1a365d' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-white mb-16">
              Our Guiding Principles
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  className="text-left"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl font-semibold text-white mb-3">{principle.title}</h4>
                  <p className="text-white/80 leading-relaxed text-base">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 