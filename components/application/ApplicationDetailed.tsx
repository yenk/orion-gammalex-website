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
        "Our AI is trained on radiology imaging workflows, CPT/ICD nuances for imaging studies, and payer-specific authorization rules. Built specifically for radiology imaging authorization, GammaLex's approval intelligence validates imaging requests against ACR guidelines and payer policies in real-time. As we expand to oncology, cardiology, and other specialties, GammaLex adapts to each domain's clinical documentation standards and workflow requirements."
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
      {/* GammaLex Vertical AI Platform Flowchart */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">GammaLex Vertical AI Platform</h2>
          <p className="text-lg text-gray-600 mb-16">How our AI transforms clinical data into optimized healthcare decisions</p>
          
          {/* Clean Horizontal Flow */}
          <div className="relative">
            {/* Main Flow Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
            
            {/* Flow Steps */}
            <div className="relative flex justify-between items-center">
              
              {/* Step 1: Clinical Intake */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center space-y-3"
              >
                <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                <div className="text-center max-w-32">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Clinical Intake</h3>
                  <p className="text-sm text-gray-600 leading-tight">Patient encounter data & documentation</p>
                </div>
              </motion.div>

              {/* Step 2: Specialty-Adaptive AI */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center space-y-3"
              >
                <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                <div className="text-center max-w-32">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Specialty-Adaptive AI</h3>
                  <p className="text-sm text-gray-600 leading-tight">Domain-specific modeling & workflows</p>
                </div>
              </motion.div>

              {/* Step 3: Authorization & Claims Intelligence */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col items-center space-y-3"
              >
                <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                <div className="text-center max-w-32">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Authorization & Claims Intelligence</h3>
                  <p className="text-sm text-gray-600 leading-tight">Real-time policy analysis & validation</p>
                </div>
              </motion.div>

              {/* Step 4: Predictive Denial Prevention */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col items-center space-y-3"
              >
                <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                <div className="text-center max-w-32">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Predictive Denial Prevention</h3>
                  <p className="text-sm text-gray-600 leading-tight">Historical analysis & risk flags</p>
                </div>
              </motion.div>

              {/* Step 5: Optimized Healthcare Outcomes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center space-y-3"
              >
                <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                <div className="text-center max-w-32">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Optimized Healthcare Outcomes</h3>
                  <p className="text-sm text-gray-600 leading-tight">94% approval rate • 451% ROI</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Foundation Framework */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-gray-200"
          >
            <div className="max-w-2xl mx-auto">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Compliance, Audit & Integration Framework</h4>
              <p className="text-sm text-gray-600">HIPAA/GDPR/CMS • Enterprise API • SOC2 Type II • 99.9% uptime</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Authorization & Claims Intelligence Section */}
      <section className="w-full py-32 bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
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
                  <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-white">CMS</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">Policy Analysis</div>
                      <div className="text-sm text-gray-600">Scanning 2,847 payer policies from 47 states</div>
                    </div>
                    <div className="text-sm text-gray-900">✓</div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-white">EHR</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">Documentation Match</div>
                      <div className="text-sm text-gray-600">ICD-10: I25.10 ✓ Validated against Aetna requirements</div>
                    </div>
                    <div className="text-sm text-gray-900">✓</div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-white">AI</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">Authorization Ready</div>
                      <div className="text-sm text-gray-600">Pre-auth required: CPT 92928, 30-day approval</div>
                    </div>
                    <div className="text-sm text-gray-900">→</div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">2.3s</div>
                      <div className="text-gray-600">Avg. Processing</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">94%</div>
                      <div className="text-gray-600">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">2,847</div>
                      <div className="text-gray-600">Active Policies</div>
                    </div>
                  </div>
                  
                  {/* Recent Policy Updates */}
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <div className="text-sm font-medium text-gray-700 mb-2">Recent Updates</div>
                    <div className="space-y-1">
                      <div className="text-xs text-gray-600">• CMS-2024-001: Cardiology documentation requirements</div>
                      <div className="text-xs text-gray-600">• Aetna: Updated pre-auth codes for radiology</div>
                      <div className="text-xs text-gray-600">• UnitedHealth: New oncology coverage policies</div>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
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
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-700">Risk Score</span>
                      <span className="text-sm font-bold text-gray-900">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gray-900 h-3 rounded-full" style={{width: '85%'}}></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mt-2">
                      <span>Low</span>
                      <span>High</span>
                    </div>
                  </div>
                  
                  {/* Historical Pattern Analysis */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg text-center border border-gray-100">
                      <div className="text-xl font-bold text-gray-900">67%</div>
                      <div className="text-sm text-gray-600">Denials Reduced</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center border border-gray-100">
                      <div className="text-xl font-bold text-gray-900">94%</div>
                      <div className="text-sm text-gray-600">First-Pass Rate</div>
                    </div>
                  </div>
                  
                  {/* Risk Factors */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Missing Pre-Auth</span>
                      <span className="text-gray-900 font-medium">High Impact</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Incomplete Documentation</span>
                      <span className="text-gray-700 font-medium">Medium Impact</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Payer Policy Match</span>
                      <span className="text-gray-900 font-medium">✓ Valid</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-600 text-center">
                    <span className="font-medium">Recommendation:</span> Add pre-authorization documentation before submission
                  </div>
                  
                  {/* Historical Data Analysis */}
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <div className="text-sm font-medium text-gray-700 mb-2">Historical Analysis</div>
                    <div className="space-y-1">
                      <div className="text-xs text-gray-600">• 1,247 similar claims analyzed</div>
                      <div className="text-xs text-gray-600">• 89% denial rate for missing pre-auth</div>
                      <div className="text-xs text-gray-600">• Average appeal time: 45 days</div>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
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
                      <span className="text-sm text-gray-900 font-semibold">98%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-900 h-2 rounded-full" style={{width: '98%'}}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Cardiology</span>
                      <span className="text-sm text-gray-900 font-semibold">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-900 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Oncology</span>
                      <span className="text-sm text-gray-900 font-semibold">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-900 h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                  
                  {/* Knowledge Base Stats */}
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-200">
                    <div className="bg-gray-50 p-3 rounded-lg text-center border border-gray-100">
                      <div className="text-lg font-bold text-gray-900">50K+</div>
                      <div className="text-xs text-gray-600">Training Cases</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center border border-gray-100">
                      <div className="text-lg font-bold text-gray-900">12</div>
                      <div className="text-xs text-gray-600">Specialties</div>
                    </div>
                  </div>
                  
                                     {/* Active Learning */}
                   <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                     <div className="flex items-center space-x-2">
                       <div className="w-2 h-2 bg-gray-900 rounded-full animate-pulse"></div>
                       <span className="text-xs font-medium text-gray-700">Active Learning: Adapting to new protocols</span>
                     </div>
                   </div>
                   
                   {/* Specialty-Specific Training */}
                   <div className="mt-4 pt-3 border-t border-gray-200">
                     <div className="text-sm font-medium text-gray-700 mb-2">Training Sources</div>
                     <div className="space-y-1">
                       <div className="text-xs text-gray-600">• Radiology: 15K+ imaging reports, CPT codes 70010-79999</div>
                       <div className="text-xs text-gray-600">• Cardiology: 8K+ cardiac procedures, ICD-10 I20-I25</div>
                       <div className="text-xs text-gray-600">• Oncology: 12K+ treatment protocols, NCI guidelines</div>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
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
                  <h3 className="text-xl font-semibold text-gray-900">Security & Compliance Monitor</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-600">Protected</span>
                  </div>
                </div>
                
                {/* Security Status Dashboard */}
                <div className="space-y-4">
                  {/* Security Status Indicators */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 p-3 rounded-lg text-center border border-gray-100">
                      <div className="text-lg font-bold text-gray-900">✓</div>
                      <div className="text-xs text-gray-600">HIPAA</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center border border-gray-100">
                      <div className="text-lg font-bold text-gray-900">✓</div>
                      <div className="text-xs text-gray-600">GDPR</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center border border-gray-100">
                      <div className="text-lg font-bold text-gray-900">✓</div>
                      <div className="text-xs text-gray-600">CMS</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center border border-gray-100">
                      <div className="text-lg font-bold text-gray-900">✓</div>
                      <div className="text-xs text-gray-600">SOC2</div>
                    </div>
                  </div>
                  
                  {/* Audit Trail */}
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Recent Audit Events</span>
                      <span className="text-xs text-gray-500">Last 24h</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                        <span className="text-xs text-gray-600">Data access logged</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                        <span className="text-xs text-gray-600">API call authenticated</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                        <span className="text-xs text-gray-600">Compliance check passed</span>
                      </div>
                    </div>
                  </div>
                  
                                     {/* Security Metrics */}
                   <div className="grid grid-cols-3 gap-2 text-xs">
                     <div className="text-center">
                       <div className="font-semibold text-gray-900">99.9%</div>
                       <div className="text-gray-600">Uptime</div>
                     </div>
                     <div className="text-center">
                       <div className="font-semibold text-gray-900">256-bit</div>
                       <div className="text-gray-600">Encryption</div>
                     </div>
                     <div className="text-center">
                       <div className="font-semibold text-gray-900">24/7</div>
                       <div className="text-gray-600">Monitoring</div>
                     </div>
                   </div>
                   
                   {/* Compliance Certifications */}
                   <div className="mt-4 pt-3 border-t border-gray-200">
                     <div className="text-sm font-medium text-gray-700 mb-2">Certifications</div>
                     <div className="space-y-1">
                       <div className="text-xs text-gray-600">• HIPAA: HITECH Act compliance verified</div>
                       <div className="text-xs text-gray-600">• GDPR: EU data protection standards</div>
                       <div className="text-xs text-gray-600">• SOC2 Type II: Security controls audited</div>
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

      {/* Value Proposition Conclusion */}
      <section className="w-full py-32 bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-8">
                Transform Your Healthcare Operations
              </h2>
              
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="space-y-6 mt-8">
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/20">
                  <p className="text-lg text-white/90 leading-relaxed max-w-4xl mx-auto">This real-time intelligence framework empowers your teams, safeguards your operations, and positions your organization for long-term resilience in an ever-shifting healthcare landscape.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
} 