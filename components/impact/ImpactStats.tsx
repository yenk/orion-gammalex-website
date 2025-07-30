"use client"

import { motion } from "framer-motion"

export default function ImpactStats() {
  const impactSections = [
    {
      title: "Intelligent Clinical-Legal Insights",
      subtitle: "Real-time, source-backed guidance to help clinicians and legal teams create defensible documentation, reduce denials, remain compliant, and stay audit-ready as payer rules evolve.",
      description: "",
      mockup: (
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 h-80 flex flex-col border border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gammalex-orange rounded-lg flex items-center justify-center text-white font-bold text-sm">
                CL
              </div>
              <div>
                <div className="text-white font-bold text-lg">Clinical-Legal Dashboard</div>
                <div className="text-gray-400 text-sm">GAMMALEX CORPORATION</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-green-400 text-sm font-medium">Active</span>
            </div>
          </div>
          
          <div className="flex-1 space-y-4">
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-300 text-sm">Success Rate</span>
                <span className="text-2xl font-bold text-green-400">94%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div className="bg-green-500 h-3 rounded-full" style={{width: '94%'}}></div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 text-center">
                <div className="text-xl font-bold text-gammalex-purple mb-1">67%</div>
                <div className="text-xs text-gray-400">Denial Reduction</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 text-center">
                <div className="text-xl font-bold text-gammalex-purple mb-1">3.2x</div>
                <div className="text-xs text-gray-400">Faster Approval</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Revenue & Risk Transformation",
      subtitle: "Prevents revenue leakage by reducing claim denials, de-risking workflows, and accelerating reimbursement through transparent, compliant claim generation and policy adaptation.",
      description: "",
      mockup: (
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 h-80 flex flex-col border border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                RT
              </div>
              <div>
                <div className="text-white font-bold text-lg">Revenue Dashboard</div>
                <div className="text-gray-400 text-sm">FINANCIAL IMPACT</div>
              </div>
            </div>
            <div className="text-2xl font-bold text-green-400">$2.4M</div>
          </div>
          
          <div className="flex-1 space-y-4">
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-300 text-sm">ROI Improvement</span>
                <span className="text-xl font-bold text-green-400">12x</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div className="bg-green-500 h-3 rounded-full" style={{width: '100%'}}></div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-300 text-sm">Processing Speed</span>
                <span className="text-lg font-bold text-green-400">89%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div className="bg-green-500 h-3 rounded-full" style={{width: '89%'}}></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Specialty-Aware, Scalable Intelligence",
      subtitle: "Adapts to different clinical specialties and workflows; integrates with EHRs and stays aligned with fast-changing payer rules—supporting expert decision-making at scale.",
      description: "",
      mockup: (
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 h-80 flex flex-col border border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                SI
              </div>
              <div>
                <div className="text-white font-bold text-lg">Specialty Intelligence</div>
                <div className="text-gray-400 text-sm">SCALABLE AI</div>
              </div>
            </div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
          </div>
          
          <div className="flex-1 space-y-3">
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-white font-medium text-sm">EHR Integration</span>
              </div>
              <div className="text-gray-400 text-xs">Seamless workflow integration</div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-white font-medium text-sm">Specialty Adaptation</span>
              </div>
              <div className="text-gray-400 text-xs">500+ partner specialties</div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-white font-medium text-sm">Real-time Updates</span>
              </div>
              <div className="text-gray-400 text-xs">99.9% uptime reliability</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Patient-Centric Care Enablement",
      subtitle: "Minimizes administrative delays, supports equitable access to care, and enables faster decisions—all while improving documentation quality and reducing care fragmentation.",
      description: "",
      mockup: (
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 h-80 flex flex-col border border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gammalex-orange rounded-lg flex items-center justify-center text-white font-bold text-sm">
                PC
              </div>
              <div>
                <div className="text-white font-bold text-lg">Patient Care Dashboard</div>
                <div className="text-gray-400 text-sm">CARE ENABLEMENT</div>
              </div>
            </div>
            <div className="text-2xl font-bold text-gammalex-purple">24/7</div>
          </div>
          
          <div className="flex-1 space-y-3">
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Accuracy Rate</span>
                <span className="text-lg font-bold text-gammalex-purple">98%</span>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Policy Updates</span>
                <span className="text-lg font-bold text-gammalex-purple">2.1M</span>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Response Time</span>
                <span className="text-lg font-bold text-green-400">Real-time</span>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Care Quality</span>
                <span className="text-lg font-bold text-gammalex-purple">Enhanced</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <section className="py-20" style={{ backgroundColor: '#1a365d' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {impactSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="mb-6">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight">
                    {section.title}
                  </h2>
                </div>
                
                <p className="text-lg sm:text-xl lg:text-2xl font-light text-white leading-relaxed">
                  {section.subtitle}
                </p>
                
                <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                  {section.description}
                </p>
              </div>

              {/* Mockup */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                {section.mockup}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 