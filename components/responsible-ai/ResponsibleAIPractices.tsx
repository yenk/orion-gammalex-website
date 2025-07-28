"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Lock, Users, CheckCircle, Shield, Target } from 'lucide-react'

export default function ResponsibleAIPractices() {
  const riskManagement = [
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "POWERED BY OPEN SOURCE DATA FOUNDATION",
      description: "Built on open, community-driven data and models. Transparency, reproducibility, and collective progress are core values."
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "CLINICAL-LEGAL-PAYER INTELLIGENCE INTEGRATION",
      description: "We integrate open clinical, legal, and insurance data, fostering a shared ecosystem for better, more holistic decision-making."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      title: "ENTERPRISE-GRADE PAYER POLICY ADAPTATION",
      description: "GammaLex adapts to payer policies using open source data and extensible frameworks—leveraging transparency and interoperability. Every recommendation are explainable with clear links to policy sources."
    }
  ];

  const governance = [
    {
      icon: <Brain className="w-6 h-6 text-white" />,
      title: "Structured Oversight",
      description: "We combine structured oversight with continuous monitoring to ensure AI development remains ethical, secure, and adaptable."
    },
    {
      icon: <Lock className="w-6 h-6 text-white" />,
      title: "Security & Trust",
      description: "Our governance framework ensures that AI development remains ethical, secure, and aligned with healthcare standards."
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Human-Centered Design",
      description: "AI should empower, not replace, human decision-making. Our teams oversee development to maintain ethical use."
    }
  ];

  return (
    <section className="w-full font-inter">
      {/* Risk Management Section - White Background */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-gray-900 mb-8">
              Built on open source and committed to transparency
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-16">
              Our foundation is built on community-driven data, transparent processes, and open innovation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {riskManagement.map((item, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <div className="relative overflow-hidden rounded-xl border border-gray-200 p-6 bg-gray-50 group-hover:bg-gray-100 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h4>
                        <p className="text-gray-700 leading-relaxed text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mitigating Risks Section */}
      <motion.div
        className="mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-inter font-normal text-white text-center mb-8">
            Mitigating risks, maximizing trust in AI
          </h2>
          <p className="text-xl text-white/80 leading-relaxed text-center max-w-4xl mx-auto">
            Our Scorecard is a core part of our Responsible AI Framework. It continuously tracks risks before and after mitigation, helping us assess AI safety across key categories. By refining our approach as challenges arise, we ensure AI remains reliable and aligned with safety thresholds.
          </p>
        </div>
        
        <div className="text-center">
          <motion.button
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            Discover how our AI risk mitigation strategy ensures security and trust
          </motion.button>
        </div>
      </motion.div>

      {/* Governance Section - Dark Blue Background */}
      <div className="bg-blue-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-white mb-8">
              Ensuring <span className="text-blue-300">Responsible AI Governance</span>
            </h2>
            <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto">
              To build and deploy AI responsibly, we combine structured oversight with continuous monitoring. Our governance framework ensures that AI development remains ethical, secure, and adaptable.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {governance.map((item, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.2 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="relative overflow-hidden rounded-xl border border-white/20 p-6 bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gammalex-purple to-gammalex-orange flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">{item.title}</h4>
                      <p className="text-white/70 leading-relaxed text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 