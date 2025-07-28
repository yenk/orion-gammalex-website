"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Lock, Users, CheckCircle, Shield, Target, Eye, FileText, AlertTriangle, RefreshCw } from 'lucide-react'

export default function ResponsibleAIPractices() {
  const riskManagement = [
    {
      title: "POWERED BY OPEN SOURCE DATA FOUNDATION",
      description: "Built on open, community-driven data and models. Transparency, reproducibility, and collective progress are core values."
    },
    {
      title: "CLINICAL-LEGAL-PAYER INTELLIGENCE INTEGRATION",
      description: "We integrate open clinical, legal, and insurance data, fostering a shared ecosystem for better, more holistic decision-making."
    },
    {
      title: "ENTERPRISE-GRADE PAYER POLICY ADAPTATION",
      description: "GammaLex adapts to payer policies using open source data and extensible frameworks—leveraging transparency and interoperability. Every recommendation are explainable with clear links to policy sources."
    }
  ];

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
      {/* Risk Management Section - Modern Simple Design */}
      <div className="bg-gray-900 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-inter font-normal text-white mb-8 leading-tight">
              Built on open source and committed to transparency
            </h2>
            
            <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-16">
              Our foundation is built on community-driven data, transparent processes, and open innovation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {riskManagement.map((item, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 + index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                {/* Modern Simple Card */}
                <div className="relative overflow-hidden rounded-3xl bg-gray-800/50 border border-gray-600/30 p-12 h-full shadow-sm hover:shadow-xl transition-all duration-500 group-hover:bg-gray-800/70">
                  {/* Content */}
                  <div className="h-full flex flex-col">
                    {/* Title */}
                    <h4 className="text-2xl font-bold text-white mb-8 leading-tight group-hover:text-white/90 transition-colors duration-300">
                      {item.title}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-white/80 leading-relaxed text-lg flex-1 group-hover:text-white/90 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mitigating Risks Section */}
      <motion.div
        className="bg-gray-50 py-32"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-gray-900 text-center mb-8">
            Empowering AI by Designing for Trust and Foresight
          </h2>
                      <p className="text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
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
                  category: "Security",
                  riskLevel: 3,
                  description: "Data protection and system security measures"
                },
                {
                  category: "Data Privacy - Individual rights",
                  riskLevel: 2,
                  description: "Respect for individual data control and autonomy"
                },
                {
                  category: "Data Privacy - Data Minimization",
                  riskLevel: 2,
                  description: "Collection of only necessary data"
                },
                {
                  category: "Inequality Effects",
                  riskLevel: 3,
                  description: "Addressing bias and ensuring equitable access"
                },
                {
                  category: "Inequality Effects - Upskilling",
                  riskLevel: 2,
                  description: "Ensuring workforce development and training"
                },
                {
                  category: "Mitigation of Market Inefficiencies",
                  riskLevel: 1,
                  description: "Streamlining processes and reducing waste"
                },
                {
                  category: "Systematic Risk",
                  riskLevel: 3,
                  description: "Managing large-scale system impacts"
                },
                {
                  category: "Model Brittleness",
                  riskLevel: 2,
                  description: "Ensuring model reliability and robustness"
                },
                {
                  category: "Anticompetitive Behavior",
                  riskLevel: 1,
                  description: "Promoting fair competition in AI markets"
                },
                {
                  category: "Interoperability and Compatibility",
                  riskLevel: 1,
                  description: "Seamless integration with existing systems"
                },
                {
                  category: "Evolving and Unanticipated Risks",
                  riskLevel: 3,
                  description: "Adapting to new challenges and regulations"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between py-8 border-b border-gray-200 last:border-b-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 2.0 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-6">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.category}</h4>
                      <p className="text-gray-600 text-base leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={`w-8 h-8 rounded-sm ${
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
              className="flex justify-center gap-6 mt-16 pt-10 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-200 rounded-sm"></div>
                <span className="text-base font-medium text-gray-600">Low</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-400 rounded-sm"></div>
                <span className="text-base font-medium text-gray-600">Medium</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-sm"></div>
                <span className="text-base font-medium text-gray-600">High</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-800 rounded-sm"></div>
                <span className="text-base font-medium text-gray-600">Critical</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="text-center mt-12">
          <motion.button
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            Discover how our AI risk mitigation strategy ensures security and trust
          </motion.button>
        </div>
      </motion.div>

      {/* Governance Section - Dark Background for Proper Separation */}
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
          
          {/* Neural Network Flowchart */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            viewport={{ once: true }}
          >
            {/* Main Circles - Horizontal Layout */}
            <div className="flex justify-center items-center gap-20 mb-24">
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
                  <div className="w-56 h-56 rounded-full bg-blue-700 border-2 border-blue-400 flex items-center justify-center shadow-lg">
                    <h3 className="text-3xl font-semibold text-white text-center">{stage.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Two Rows of Cards - Properly Aligned and Spaced */}
            <div className="flex justify-center">
              <div className="grid grid-cols-6 gap-10 max-w-7xl">
                {/* First Row */}
                <motion.div
                  className="bg-blue-800/50 border border-blue-400/30 rounded-lg p-6 text-center h-28 flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.6 }}
                  viewport={{ once: true }}
                >
                  <span className="text-base font-medium text-white/90">Clinical Risk Assessment</span>
                </motion.div>
                <motion.div
                  className="bg-blue-800/50 border border-blue-400/30 rounded-lg p-6 text-center h-28 flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.7 }}
                  viewport={{ once: true }}
                >
                  <span className="text-base font-medium text-white/90">Payer Policy Reviews</span>
                </motion.div>
                <motion.div
                  className="bg-blue-800/50 border border-blue-400/30 rounded-lg p-6 text-center h-28 flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.8 }}
                  viewport={{ once: true }}
                >
                  <span className="text-base font-medium text-white/90">Red Teaming</span>
                </motion.div>
                <motion.div
                  className="bg-blue-800/50 border border-blue-400/30 rounded-lg p-6 text-center h-28 flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.9 }}
                  viewport={{ once: true }}
                >
                  <span className="text-base font-medium text-white/90">Clinical Safety Evaluations</span>
                </motion.div>
                <motion.div
                  className="bg-blue-800/50 border border-blue-400/30 rounded-lg p-6 text-center h-28 flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 3.0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-base font-medium text-white/90">Provider Feedback</span>
                </motion.div>
                <motion.div
                  className="bg-blue-800/50 border border-blue-400/30 rounded-lg p-6 text-center h-28 flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 3.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-base font-medium text-white/90">Model Updates</span>
                </motion.div>
                
                {/* Second Row */}
                <motion.div
                  className="bg-blue-800/50 border border-blue-400/30 rounded-lg p-6 text-center h-28 flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 3.2 }}
                  viewport={{ once: true }}
                >
                  <span className="text-base font-medium text-white/90">HIPAA Compliance Checks</span>
                </motion.div>
                <motion.div
                  className="bg-blue-800/50 border border-blue-400/30 rounded-lg p-6 text-center h-28 flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 3.3 }}
                  viewport={{ once: true }}
                >
                  <span className="text-base font-medium text-white/90">Real-time Monitoring</span>
                </motion.div>
                <motion.div
                  className="bg-blue-800/50 border border-blue-400/30 rounded-lg p-6 text-center h-28 flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 3.4 }}
                  viewport={{ once: true }}
                >
                  <span className="text-base font-medium text-white/90">Policy Scorecards</span>
                </motion.div>
                <motion.div
                  className="bg-blue-800/50 border border-blue-400/30 rounded-lg p-6 text-center h-28 flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 3.5 }}
                  viewport={{ once: true }}
                >
                  <span className="text-base font-medium text-white/90">AI Testing Protocols</span>
                </motion.div>
                <motion.div
                  className="bg-blue-800/50 border border-blue-400/30 rounded-lg p-6 text-center h-28 flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 3.6 }}
                  viewport={{ once: true }}
                >
                  <span className="text-base font-medium text-white/90">Policy Adjustments</span>
                </motion.div>
                <motion.div
                  className="bg-blue-800/50 border border-blue-400/30 rounded-lg p-6 text-center h-28 flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 3.7 }}
                  viewport={{ once: true }}
                >
                  <span className="text-base font-medium text-white/90">Risk Forecasting</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 