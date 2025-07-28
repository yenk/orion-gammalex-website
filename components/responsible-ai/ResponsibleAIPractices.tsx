"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Lock, Users, CheckCircle, Shield, Target } from 'lucide-react'

export default function ResponsibleAIPractices() {
  const riskCategories = [
    "Security",
    "Data Privacy - Individual rights", 
    "Data Privacy - Data Minimization",
    "Inequality Effects",
    "Inequality Effects - Upskilling",
    "Mitigation of Market Inefficiencies",
    "Systematic Risk",
    "Model Brittleness",
    "Anticompetitive Behavior",
    "Interoperability and Compatibility",
    "Evolving and Unanticipated Risks"
  ];

  const governanceStages = [
    {
      title: "Assess & Monitor",
      items: ["Risk identification", "Governance Reviews", "Compliance checks", "Ongoing Monitoring"]
    },
    {
      title: "Test & Validate", 
      items: ["Red Teaming", "Safety Evaluations", "Scorecards & Mitigations", "AI Testing Protocols"]
    },
    {
      title: "Refine & Improve",
      items: ["User Feedback", "Model Updates", "Policy Adjustments", "Risk Forecasting"]
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
              Strengthening AI Through Smart Risk Management
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-16">
              We assess AI risks early, applying targeted safeguards to prevent escalation. By prioritizing interventions and leveraging expert evaluations, we ensure AI remains adaptive, efficient, and aligned with societal benefits.
            </p>
            
            {/* Risk Categories List */}
            <div className="max-w-4xl mx-auto">
              {riskCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between py-4 border-b border-gray-200 last:border-b-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-900 font-medium">{category}</span>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 rounded-sm ${
                          i < 3 ? 'bg-blue-400' : 'bg-blue-700'
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Risk Level Legend */}
            <div className="flex justify-center gap-4 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-6 h-4 bg-blue-200 rounded-sm"></div>
                <span className="text-sm text-gray-600">Low</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-4 bg-blue-400 rounded-sm"></div>
                <span className="text-sm text-gray-600">Medium</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-4 bg-blue-600 rounded-sm"></div>
                <span className="text-sm text-gray-600">High</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-4 bg-blue-800 rounded-sm"></div>
                <span className="text-sm text-gray-600">Critical</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mitigating Risks Section - White Background */}
      <div className="bg-white py-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-gray-900 mb-8">
              Mitigating risks, maximizing trust in AI
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12">
              Our Scorecard is a core part of our Responsible AI Framework. It continuously tracks risks before and after mitigation, helping us assess AI safety across key categories. By refining our approach as challenges arise, we ensure AI remains reliable and aligned with safety thresholds.
            </p>
            
            <motion.button
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              Discover how our AI risk mitigation strategy ensures security and trust
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Governance Section - Dark Gray Background */}
      <div className="bg-gray-900 py-24">
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
          
          {/* Interconnected Circles Diagram */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
              {governanceStages.map((stage, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Main Circle */}
                  <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-blue-700 border-2 border-blue-400 flex items-center justify-center">
                    <h3 className="text-xl font-semibold text-white text-center">{stage.title}</h3>
                  </div>
                  
                  {/* Surrounding Items */}
                  <div className="grid grid-cols-2 gap-4">
                    {stage.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="bg-blue-800/50 border border-blue-400/30 rounded-lg p-3 text-center"
                      >
                        <span className="text-sm text-white/90">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Connection Lines */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" style={{ position: 'absolute', top: 0, left: 0 }}>
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                  </marker>
                </defs>
                <path
                  d="M 50% 25% L 50% 75%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
                <path
                  d="M 25% 50% L 75% 50%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 