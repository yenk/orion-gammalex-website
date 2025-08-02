"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function ApplicationDetailed() {
  const productFeatures = [
    {
      title: "Authorization & Claims Intelligence",
      paragraphs: [
        "GammaLex's AI engine continuously analyzes payer policies and clinical data to streamline both prior authorization and claims submission. It auto-updates policy changes, validates documentation against requirements, and delivers real-time recommendations to avoid errors and accelerate approvals—all within your existing EHR and billing workflows."
      ]
    },
    {
      title: "Predictive Denial Prevention",
      paragraphs: [
        "Proactively flags high-risk claims before submission using your historical data, payer mix, and specialty focus. GammaLex provides precise, actionable feedback to minimize denials—reducing administrative burden and downstream appeals while increasing first-pass approval rates."
      ]
    },

    {
      title: "Specialty-Adaptive AI",
      paragraphs: [
        "Our modeling is trained on specialty-specific medical-legal knowledge, including CPT/ICD nuances, clinical documentation standards, and payer-specific rules. GammaLex adapts to specialty workflows—radiology, oncology, cardiology, and more—to ensure relevance, accuracy, and optimized throughput across diverse care environments."
      ]
    },
    {
      title: "Compliance, Audit & Integration Framework",
      paragraphs: [
        "Supports full regulatory readiness (HIPAA, GDPR, CMS) with built-in audit trails, security protocols, and automated compliance reporting. GammaLex integrates seamlessly into enterprise systems via API, enabling secure, bi-directional data exchange and scalable deployment across complex organizations."
      ]
    }
  ];

  return (
    <div className="w-full font-inter relative">
      {/* Vertical AI Suite Flowchart Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">GammaLex Platform Overview: Real-Time Intelligence for Clinical-Compliance Optimization</h2>
          <p className="text-lg text-gray-600 mb-12">How our AI transforms clinical data into optimized healthcare decisions</p>
          
          {/* Professional AI Workflow Flowchart */}
          <div className="flex justify-center">
            <div className="w-full max-w-7xl">
              <div className="relative">
                {/* Flowchart Container */}
                <div className="space-y-8">
                  
                  {/* Level 1: Clinical Encounter (Intake) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="bg-blue-600 text-white px-8 py-4 rounded-lg shadow-lg inline-block">
                      <h3 className="text-lg font-semibold">Clinical Encounter</h3>
                      <p className="text-sm opacity-90 mt-1">Data & Document Intake</p>
                    </div>
                  </motion.div>

                  {/* Arrow Down */}
                  <div className="flex justify-center">
                    <div className="w-px h-8 bg-gray-400"></div>
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gray-400 ml-[-4px]"></div>
                  </div>

                  {/* Level 2: Specialty-Adaptive AI */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="bg-green-600 text-white px-8 py-4 rounded-lg shadow-lg inline-block">
                      <h3 className="text-lg font-semibold">Specialty-Adaptive AI</h3>
                      <p className="text-sm opacity-90 mt-1">Domain-Specific Processing</p>
                    </div>
                  </motion.div>

                  {/* Arrow Down */}
                  <div className="flex justify-center">
                    <div className="w-px h-8 bg-gray-400"></div>
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gray-400 ml-[-4px]"></div>
                  </div>

                  {/* Level 3: Authorization & Claims Intelligence */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="bg-blue-600 text-white px-8 py-4 rounded-lg shadow-lg inline-block">
                      <h3 className="text-lg font-semibold">Authorization & Claims Intelligence</h3>
                      <p className="text-sm opacity-90 mt-1">Processing & Validation</p>
                    </div>
                  </motion.div>

                  {/* Arrow Down */}
                  <div className="flex justify-center">
                    <div className="w-px h-8 bg-gray-400"></div>
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gray-400 ml-[-4px]"></div>
                  </div>

                  {/* Level 4: Predictive Denial Prevention */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="bg-green-600 text-white px-8 py-4 rounded-lg shadow-lg inline-block">
                      <h3 className="text-lg font-semibold">Predictive Denial Prevention</h3>
                      <p className="text-sm opacity-90 mt-1">Risk Analysis & Feedback</p>
                    </div>
                  </motion.div>

                  {/* Foundation Layer: Compliance, Audit & Integration */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-12"
                  >
                    <div className="bg-gray-800 text-white px-8 py-6 rounded-lg shadow-lg">
                      <h3 className="text-xl font-semibold text-center mb-4">Compliance, Audit & Integration Framework</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div>
                          <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <span className="text-white text-sm">🛡️</span>
                          </div>
                          <p className="text-sm text-gray-300">HIPAA/GDPR/CMS Compliance</p>
                        </div>
                        <div>
                          <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <span className="text-white text-sm">📊</span>
                          </div>
                          <p className="text-sm text-gray-300">Audit Trails & Reporting</p>
                        </div>
                        <div>
                          <div className="w-8 h-8 bg-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <span className="text-white text-sm">🔗</span>
                          </div>
                          <p className="text-sm text-gray-300">Enterprise API Integration</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Connection Lines from Foundation to Main Flow */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Lines connecting foundation to each level */}
                    <div className="absolute left-1/4 top-1/4 w-px h-1/3 bg-gradient-to-b from-gray-400 to-gray-600 opacity-60"></div>
                    <div className="absolute left-1/2 top-1/4 w-px h-1/3 bg-gradient-to-b from-gray-400 to-gray-600 opacity-60"></div>
                    <div className="absolute left-3/4 top-1/4 w-px h-1/3 bg-gradient-to-b from-gray-400 to-gray-600 opacity-60"></div>
                  </div>

                  {/* Final Outcome */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-8"
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-10 py-6 rounded-lg shadow-lg">
                      <h3 className="text-2xl font-semibold mb-2">Optimized Healthcare Outcomes</h3>
                      <p className="text-gray-100 text-base">Reduced denials • Faster approvals • Lower admin burden • Improved compliance</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authorization & Claims Intelligence Section */}
      <section className="w-full py-32 bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side: Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Real-Time Policy Engine</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-600">Live</span>
                  </div>
                </div>
                
                {/* Policy Analysis Flow */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-blue-600">CMS</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-blue-900">Policy Analysis</div>
                      <div className="text-sm text-blue-700">Scanning 2,847 payer policies...</div>
                    </div>
                    <div className="text-sm text-blue-600">✓</div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-3 bg-green-50 rounded-lg">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-green-600">EHR</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-green-900">Documentation Match</div>
                      <div className="text-sm text-green-700">ICD-10: I25.10 ✓ Validated</div>
                    </div>
                    <div className="text-sm text-green-600">✓</div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-3 bg-purple-50 rounded-lg">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-purple-600">AI</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-purple-900">Authorization Ready</div>
                      <div className="text-sm text-purple-700">All requirements met for submission</div>
                    </div>
                    <div className="text-sm text-purple-600">→</div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">2.3s</div>
                      <div className="text-gray-600">Avg. Processing</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-green-600">94%</div>
                      <div className="text-gray-600">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-blue-600">2,847</div>
                      <div className="text-gray-600">Active Policies</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-white">
                Authorization & Claims Intelligence
              </h2>
              
              <div className="space-y-4 text-lg text-white/95 leading-relaxed">
                <p>
                  GammaLex's AI engine continuously analyzes payer policies and clinical data to streamline both prior authorization and claims submission. It auto-updates policy changes, validates documentation against requirements, and delivers real-time recommendations to avoid errors and accelerate approvals—all within your existing EHR and billing workflows.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Predictive Denial Prevention Section */}
      <section className="w-full py-32 bg-[#0f4c75]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side: Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Predictive Risk Engine</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-orange-600">Analyzing</span>
                  </div>
                </div>
                
                {/* Risk Analysis Visualization */}
                <div className="space-y-5">
                  {/* Risk Score Chart */}
                  <div className="bg-gradient-to-r from-red-100 to-green-100 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-700">Risk Score</span>
                      <span className="text-sm font-bold text-red-600">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-red-500 to-orange-500 h-3 rounded-full" style={{width: '85%'}}></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mt-2">
                      <span>Low</span>
                      <span>High</span>
                    </div>
                  </div>
                  
                  {/* Historical Pattern Analysis */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg text-center">
                      <div className="text-xl font-bold text-blue-600">67%</div>
                      <div className="text-sm text-blue-700">Denials Reduced</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg text-center">
                      <div className="text-xl font-bold text-green-600">94%</div>
                      <div className="text-sm text-green-700">First-Pass Rate</div>
                    </div>
                  </div>
                  
                  {/* Risk Factors */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Missing Pre-Auth</span>
                      <span className="text-red-600 font-medium">High Impact</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Incomplete Documentation</span>
                      <span className="text-yellow-600 font-medium">Medium Impact</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Payer Policy Match</span>
                      <span className="text-green-600 font-medium">✓ Valid</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-600 text-center">
                    <span className="font-medium">Recommendation:</span> Add pre-authorization documentation before submission
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-white">
                Predictive Denial Prevention
              </h2>
              
              <div className="space-y-4 text-lg text-white/95 leading-relaxed">
                <p>
                  Proactively flags high-risk claims before submission using your historical data, payer mix, and specialty focus. GammaLex provides precise, actionable feedback to minimize denials—reducing administrative burden and downstream appeals while increasing first-pass approval rates.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialty-Adaptive AI Section */}
      <section className="w-full py-32 bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side: Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Specialty Training Dashboard</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-purple-600">Training</span>
                  </div>
                </div>
                
                {/* Specialty Training Progress */}
                <div className="space-y-4">
                  {/* Training Progress Bars */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Radiology</span>
                      <span className="text-sm text-purple-600 font-semibold">98%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{width: '98%'}}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Cardiology</span>
                      <span className="text-sm text-blue-600 font-semibold">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Oncology</span>
                      <span className="text-sm text-green-600 font-semibold">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                  
                  {/* Knowledge Base Stats */}
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-200">
                    <div className="bg-purple-50 p-3 rounded-lg text-center">
                      <div className="text-lg font-bold text-purple-600">50K+</div>
                      <div className="text-xs text-purple-700">Training Cases</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg text-center">
                      <div className="text-lg font-bold text-blue-600">12</div>
                      <div className="text-xs text-blue-700">Specialties</div>
                    </div>
                  </div>
                  
                  {/* Active Learning */}
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium text-gray-700">Active Learning: Adapting to new protocols</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-white">
                Specialty-Adaptive AI
              </h2>
              
              <div className="space-y-4 text-lg text-white/95 leading-relaxed">
                <p>
                  Our modeling is trained on specialty-specific medical-legal knowledge, including CPT/ICD nuances, clinical documentation standards, and payer-specific rules. GammaLex adapts to specialty workflows—radiology, oncology, cardiology, and more—to ensure relevance, accuracy, and optimized throughput across diverse care environments.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance, Audit & Integration Framework Section */}
      <section className="w-full py-32 bg-[#0f4c75]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side: Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Compliance & Security Center</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-indigo-600">Secure</span>
                  </div>
                </div>
                
                {/* Compliance Standards & Security */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-3 bg-indigo-50 rounded-lg">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-indigo-600">🔒</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-indigo-900">HIPAA Compliance</div>
                      <div className="text-sm text-indigo-700">PHI protection & audit trails</div>
                    </div>
                    <div className="text-sm text-indigo-600">✓</div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-3 bg-green-50 rounded-lg">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-green-600">🛡️</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-green-900">GDPR Ready</div>
                      <div className="text-sm text-green-700">Data privacy & consent management</div>
                    </div>
                    <div className="text-sm text-green-600">✓</div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-blue-600">🔗</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-blue-900">API Integration</div>
                      <div className="text-sm text-blue-700">EHR, billing & custom workflows</div>
                    </div>
                    <div className="text-sm text-blue-600">→</div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">99.9%</div>
                      <div className="text-gray-600">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-indigo-600">256-bit</div>
                      <div className="text-gray-600">Encryption</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-blue-600">24/7</div>
                      <div className="text-gray-600">Monitoring</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-white">
                Compliance, Audit & Integration Framework
              </h2>
              
              <div className="space-y-4 text-lg text-white/95 leading-relaxed">
                <p>
                  Supports full regulatory readiness (HIPAA, GDPR, CMS) with built-in audit trails, security protocols, and automated compliance reporting. GammaLex integrates seamlessly into enterprise systems via API, enabling secure, bi-directional data exchange and scalable deployment across complex organizations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


    </div>
  );
} 