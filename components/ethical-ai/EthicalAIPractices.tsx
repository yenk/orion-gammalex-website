"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Lock, Users, Eye, FileText, AlertTriangle, RefreshCw } from 'lucide-react'

export default function EthicalAIPractices() {

  const governanceStages = [
    {
      title: "Assess & Monitor",
      items: ["Clinical Risk Assessment", "Payer Policy Reviews", "HIPAA Compliance Checks", "Real-time Monitoring"]
    },
    {
      title: "Test & Validate", 
      items: ["Red Teaming", "Clinical Safety Evaluations", "Policy Scorecards", "AI Testing Protocols"]
    },
    {
      title: "Refine & Improve",
      items: ["Provider Feedback", "Model Updates", "Policy Adjustments", "Risk Forecasting"]
    }
  ];

  return (
    <section className="w-full font-inter">

      {/* Mitigating Risks Section */}
      <motion.div
        className="bg-[#0f4c75] py-16 sm:py-24 lg:py-32"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-inter font-normal text-white text-center mb-6 sm:mb-8">
            Empowering AI by Designing for Trust and Foresight
          </h2>
                      <p className="text-lg sm:text-xl text-white/95 leading-relaxed text-center max-w-4xl mx-auto">
              We assess AI risks early, applying targeted safeguards to prevent and avoid escalation completely. By prioritizing smart interventions and expert insight, we ensure our AI stays adaptive, efficient, and firmly aligned with real-world healthcare impact.
            </p>
        </div>
        
        {/* AI Risk Management Dashboard - Open and Modern */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className=""
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              {[
                {
                  category: "Healthcare Data Security",
                  riskLevel: 3,
                  description: "HIPAA-compliant data protection and clinical system security"
                },
                {
                  category: "Patient Privacy Rights",
                  riskLevel: 3,
                  description: "Individual patient data control and healthcare autonomy"
                },
                {
                  category: "Clinical Data Minimization",
                  riskLevel: 3,
                  description: "Collection of only necessary clinical and payer data"
                },
                {
                  category: "Healthcare Access Equity",
                  riskLevel: 3,
                  description: "Addressing bias and ensuring equitable healthcare access"
                },
                {
                  category: "Provider Training & Upskilling",
                  riskLevel: 2,
                  description: "Ensuring healthcare workforce development and AI training"
                },
                {
                  category: "Workflow Optimization",
                  riskLevel: 2,
                  description: "Streamlining clinical workflows and reducing waste"
                },
                {
                  category: "Healthcare System Risk",
                  riskLevel: 3,
                  description: "Managing large-scale healthcare system impacts"
                },
                {
                  category: "Clinical Model Reliability",
                  riskLevel: 3,
                  description: "Ensuring clinical AI model reliability and robustness"
                },
                {
                  category: "Healthcare Market Fairness",
                  riskLevel: 2,
                  description: "Promoting fair competition in healthcare AI markets"
                },
                {
                  category: "EHR Integration & Compatibility",
                  riskLevel: 2,
                  description: "Seamless integration with existing healthcare systems"
                },
                {
                  category: "Evolving Healthcare Regulations",
                  riskLevel: 3,
                  description: "Adapting to new healthcare challenges and regulations"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center justify-between py-6 sm:py-8 border-b border-gray-200 last:border-b-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 2.0 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-0">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm sm:text-lg font-bold">✓</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">{item.category}</h4>
                      <p className="text-white/90 text-sm sm:text-base leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 sm:gap-2 mt-4 sm:mt-0">
                    {[1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={`w-6 h-6 sm:w-8 sm:h-8 rounded-sm ${
                          level <= item.riskLevel 
                            ? level === 1 ? 'bg-blue-200' 
                            : level === 2 ? 'bg-blue-400' 
                            : level === 3 ? 'bg-blue-600' 
                            : 'bg-blue-800'
                            : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Risk Level Legend */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-200 rounded-sm"></div>
                <span className="text-sm sm:text-base font-medium text-white">Low</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-400 rounded-sm"></div>
                <span className="text-sm sm:text-base font-medium text-white">Medium</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-sm"></div>
                <span className="text-sm sm:text-base font-medium text-white">High</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-800 rounded-sm"></div>
                <span className="text-sm sm:text-base font-medium text-white">Critical</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="text-center mt-8 sm:mt-12">
          <motion.button
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white text-sm sm:text-base font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="hidden sm:inline">Discover how our AI risk mitigation strategy ensures security and trust</span>
            <span className="sm:hidden">Learn more about our AI strategy</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Governance Section - White Background */}
      <div className="py-16 sm:py-20 lg:py-24 text-gray-900 font-inter relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-inter font-normal text-gray-900 mb-6 sm:mb-8">
              Ensuring <span className="text-gammalex-purple">Responsible AI Governance</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              To build and deploy AI responsibly, we combine structured oversight with continuous monitoring. Our governance framework ensures that AI development remains ethical, secure, and adaptable.
            </p>
          </motion.div>
          
          {/* Clean Governance Flow */}
          <motion.div
            className="relative max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            viewport={{ once: true }}
          >
            {/* Top Section - Simple Workflow */}
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 mb-16">
              {governanceStages.map((stage, index) => (
                <motion.div
                  key={index}
                  className="relative flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Stage Number */}
                  <div className="w-12 h-12 rounded-full bg-gammalex-purple flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  
                  {/* Main Stage Circle */}
                  <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full bg-gray-100 border-2 border-gammalex-purple/50 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300">
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 text-center px-4 leading-tight">{stage.title}</h3>
                  </div>
                  
                  {/* Connecting Arrow (except for last item) */}
                  {index < governanceStages.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2">
                      <div className="w-16 h-0.5 bg-gammalex-purple/50"></div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-gammalex-purple/50 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            
            {/* Bottom Section - Action Cards Only */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {governanceStages.flatMap((stage, stageIndex) =>
                stage.items.map((item, itemIndex) => (
                  <motion.div
                    key={`${stageIndex}-${itemIndex}`}
                    className="bg-gray-100 border border-gray-200 rounded-lg p-4 text-center h-20 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.8 + (stageIndex * 4 + itemIndex) * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-sm font-medium text-gray-700 leading-tight">
                      {item}
                    </span>
                  </motion.div>
                ))
              )}
            </div>
            
            {/* Continuous Cycle Indicator */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 3.0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 text-gray-600">
                <RefreshCw className="w-5 h-5 animate-spin" />
                <span className="text-sm font-medium">Continuous Governance Cycle</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section - Dark Background for Clear Separation */}
      <div className="py-24 text-white font-inter relative" style={{ backgroundColor: '#1a365d' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-white text-center mb-8">
              Shaping AI responsibly from the ground up
            </h2>
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-xl text-white/95 leading-relaxed mb-6">
                The responsible use of deep learning AI requires careful attention to issues such as bias in training data, limited interpretability, privacy, transparency, and meaningful social impact.
              </p>
              <p className="text-xl text-white/95 leading-relaxed">
                With intention and accountability, we can help ensure that AI is developed and applied in ways that benefit both our communities and society at large. #ResponsibleAI #DeepLearningAI
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 