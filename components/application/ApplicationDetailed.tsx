"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function ApplicationDetailed() {
  const productFeatures = [
    {
      title: "AI Detection & Insight Intelligence",
      paragraphs: [
        "GammaLex's AI engine continuously analyzes imaging data, clinical context, and longitudinal records to surface early breast cancer signals and deliver actionable recommendations directly inside radiologist workflows."
      ]
    },
    {
      title: "Predictive Case Prioritization",
      paragraphs: [
        "Model-driven scoring spots the highest-probability cases, balances sensitivity with precision, and keeps reads focused on patients who benefit most from timely intervention."
      ]
    },

    {
      title: "Specialty-Adaptive AI",
      paragraphs: [
        "Our models are trained on radiology imaging workflows, CPT/ICD nuances for imaging studies, and clinical guidelines. Built specifically for breast imaging, GammaLex validates findings against ACR standards and adapts to each specialty's documentation practices."
      ]
    },
    {
      title: "Compliance, Audit & Integration Framework",
      paragraphs: [
        "Supports full regulatory readiness (HIPAA, GDPR, CMS) with built-in audit trails, security protocols, and automated compliance reporting. GammaLex integrates with PACS/RIS/EHR via API, enabling secure, bi-directional data exchange and scalable deployment across complex organizations."
      ]
    }
  ];

  return (
    <div id="intelligence" className="w-full font-inter relative">
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
                      <div className="text-sm text-gray-600">Scanning 2,847 clinical protocols from 47 states</div>
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
                      <div className="text-xs text-gray-600">• CMS-2024-001: Focused mammography segmentation guidance</div>
                      <div className="text-xs text-gray-600">• Aetna: Breast imaging quality metrics refresh</div>
                      <div className="text-xs text-gray-600">• UnitedHealth: Enhanced confirmatory imaging protocols</div>
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
                Explainable Evidence & Documentation
              </h2>
              
              <div className="space-y-4 text-lg text-white/95 leading-relaxed">
                <p>
                  Detection results, AR context, and voice reporting feed into a unified evidence pack so care teams see imaging evidence, AI rationale, and clinical reasoning side by side.
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
                  <h3 className="text-xl font-semibold text-gray-900">Predictive Readiness Engine</h3>
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
                      <div className="text-sm text-gray-600">False positives reduced</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center border border-gray-100">
                      <div className="text-xl font-bold text-gray-900">94%</div>
                      <div className="text-sm text-gray-600">Case confidence rate</div>
                    </div>
                  </div>
                  
                  {/* Risk Factors */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Low signal-to-noise ratio</span>
                      <span className="text-gray-900 font-medium">High Impact</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Incomplete imaging context</span>
                      <span className="text-gray-700 font-medium">Medium Impact</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Clinical guideline alignment</span>
                      <span className="text-gray-900 font-medium">✓ Valid</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-600 text-center">
                    <span className="font-medium">Recommendation:</span> Add AI-backed evidence summaries before sign-off
                  </div>
                  
                  {/* Historical Data Analysis */}
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <div className="text-sm font-medium text-gray-700 mb-2">Historical Analysis</div>
                    <div className="space-y-1">
                      <div className="text-xs text-gray-600">• 1,247 similar lesion presentations analyzed</div>
                      <div className="text-xs text-gray-600">• 89% of missed reads linked to low contrast</div>
                      <div className="text-xs text-gray-600">• Average review time: 12 minutes</div>
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
                Predictive Case Readiness
              </h2>
              
              <div className="space-y-4 text-lg text-white/95 leading-relaxed">
                <p>
                  AI triage spots the highest-probability cancers, accelerates review of suspicious cases, and cuts false positives—all while crafting a structured narrative that keeps findings explainable for care teams.
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
                  Every model considers modality-specific imaging cues, breast density, and clinical guidelines so recommendations stay aligned with the modality, the clinician, and the patient story.
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
                  Imaging, AI, and voice logs stay encrypted and versioned so every decision ties back to explainable evidence. APIs keep data flowing between hospitals, imaging centers, and downstream clinical systems.
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
                  <p className="text-lg text-white/90 leading-relaxed max-w-4xl mx-auto">This intelligence stack keeps breast imaging, documentation, and clinical clarity aligned so every cancer detected is confidently reported and ready for the care continuum.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
} 