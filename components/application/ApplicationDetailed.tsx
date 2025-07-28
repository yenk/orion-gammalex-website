"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Brain, BrainCircuit, Globe, UserRound, Scale, FileText, AlertTriangle, Info, Target, TrendingUp } from 'lucide-react'

export default function ApplicationDetailed() {
  return (
    <div className="w-full font-inter relative bg-black">
      {/* AI to Improve Data Section */}
      <section className="w-full py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
              {/* Left Column - Title and Laptop Mockup */}
              <div className="space-y-8 text-left">
                <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-8 drop-shadow-lg text-left font-bold">
                  AI to Improve Data: <span className="text-gammalex-orange">Intelligent Authorization™</span>
                </h3>
                
                {/* Laptop Mockup */}
                <div className="relative w-full max-w-md mx-auto lg:mx-0">
                  <div className="bg-gray-800 rounded-lg p-4 shadow-2xl">
                    <div className="bg-white rounded p-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-800">AUTHORIZATION</span>
                          <span className="text-xs text-gray-500">gammalex</span>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">PENDING REQUESTS</span>
                            <span className="text-sm font-bold text-gray-800">1,247</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">APPROVED TODAY</span>
                            <span className="text-sm font-bold text-gray-800">892</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">DENIAL RISK</span>
                            <span className="text-sm font-bold text-red-600">156</span>
                          </div>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" style={{width: '75%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Description */}
              <div className="space-y-6 text-left">
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
                  For decades, healthcare organizations have struggled with authorization data quality. Capturing this data has come at tremendous cost in productivity.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
                  The lack of good authorization data inhibits revenue operations from making data driven decisions. The poor quality of clinical documentation hamstrings billing.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
                  GammaLex solves this massive challenge with minimal time and cost.
                </p>
                <div className="pt-6">
                  <Button className="text-lg px-8 py-4 font-semibold bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    Learn more about Intelligent Authorization™
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-orange-600 rounded-2xl p-12 text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl text-white italic leading-relaxed mb-6">
                "I don't worry about authorization denials. My time is spent doing what I do best– helping solve problems for our patients".
              </p>
              <p className="text-lg text-white/80">
                - Enterprise Healthcare Provider and GammaLex user
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI to Optimize Revenue Section */}
      <section className="w-full py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
              {/* Left Column - Title and Monitor Mockup */}
              <div className="space-y-8 text-left">
                <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-8 drop-shadow-lg text-left font-bold">
                  AI to Optimize Revenue: <span className="text-gammalex-orange">C[i] for Healthcare™</span>
                </h3>
                
                {/* Monitor Mockup */}
                <div className="relative w-full max-w-md mx-auto lg:mx-0">
                  <div className="bg-gray-800 rounded-lg p-4 shadow-2xl">
                    <div className="bg-white rounded p-6">
                      <div className="space-y-4">
                        <div className="text-center">
                          <span className="text-sm font-semibold text-gray-800">BUYER ENGAGEMENT (trailing 90 days)</span>
                        </div>
                        <div className="h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded flex items-end justify-around p-2">
                          <div className="w-4 bg-blue-500 rounded-t" style={{height: '60%'}}></div>
                          <div className="w-4 bg-purple-500 rounded-t" style={{height: '80%'}}></div>
                          <div className="w-4 bg-green-500 rounded-t" style={{height: '45%'}}></div>
                          <div className="w-4 bg-orange-500 rounded-t" style={{height: '90%'}}></div>
                          <div className="w-4 bg-red-500 rounded-t" style={{height: '70%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Description */}
              <div className="space-y-6 text-left">
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
                  C[i] for Healthcare is GammaLex's generative AI enabled application designed for the modern healthcare organization.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
                  C[i] for Healthcare is designed to radically improve productivity and grow revenue and delivered via a user friendly interface designed to accelerate the speed from insight to impact.
                </p>
                <div className="pt-6">
                  <Button className="text-lg px-8 py-4 font-semibold bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    Learn more about C[i] for Healthcare
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Vertical AI Section */}
      <section className="w-full py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
              {/* Left Column - Title and AI Mockup */}
              <div className="space-y-8 text-left">
                <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-8 drop-shadow-lg text-left font-bold">
                  Our <span className="text-gammalex-orange">Vertical AI</span> Platform
                </h3>
                
                {/* AI Platform Mockup */}
                <div className="relative w-full max-w-md mx-auto lg:mx-0">
                  <div className="bg-gray-800 rounded-lg p-4 shadow-2xl">
                    <div className="bg-white rounded p-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-800">VERTICAL AI ENGINE</span>
                          <span className="text-xs text-gray-500">gammalex</span>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">POLICY INTELLIGENCE</span>
                            <span className="text-sm font-bold text-green-600">ACTIVE</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">RISK ASSESSMENT</span>
                            <span className="text-sm font-bold text-green-600">ACTIVE</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">LEGAL COMPLIANCE</span>
                            <span className="text-sm font-bold text-green-600">ACTIVE</span>
                          </div>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-purple-500 to-orange-500 rounded-full" style={{width: '95%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Description */}
              <div className="space-y-6 text-left">
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
                  The Vertical AI built to defend healthcare revenue. Unlike horizontal AI platforms, GammaLex is vertically specialized to think like a healthcare attorney and payer expert.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
                  Our unified AI workflow combines policy intelligence, real-time risk assessment, legal compliance, and automated claims processing to deliver strategic value.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
                  Trained on clinical-legal corpus, not generic data. Purpose-built for the high-stakes world of healthcare law and payer policy.
                </p>
                <div className="pt-6">
                  <Button className="text-lg px-8 py-4 font-semibold bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    Learn more about Our Vertical AI
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI to Surface Connections Section */}
      <section className="w-full py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
              {/* Left Column - Title and App Mockup */}
              <div className="space-y-8 text-left">
                <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-8 drop-shadow-lg text-left font-bold">
                  AI to Surface Connections: <span className="text-gammalex-orange">Intelligence.com</span>
                </h3>
                
                {/* App Mockup */}
                <div className="relative w-full max-w-md mx-auto lg:mx-0">
                  <div className="bg-gray-800 rounded-lg p-4 shadow-2xl">
                    <div className="bg-white rounded p-6">
                      <div className="space-y-4">
                        <div className="text-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <span className="text-white font-bold text-xl">i</span>
                          </div>
                          <p className="text-sm text-gray-600">Reach your potential, with a little help from AI</p>
                        </div>
                        <div className="space-y-3">
                          <input type="email" placeholder="Your email" className="w-full p-2 border border-gray-300 rounded text-sm" />
                          <input type="password" placeholder="Your password" className="w-full p-2 border border-gray-300 rounded text-sm" />
                          <button className="w-full bg-blue-600 text-white p-2 rounded text-sm font-semibold">Agree & Continue</button>
                          <p className="text-xs text-gray-500 text-center">Sign in</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Description */}
              <div className="space-y-6 text-left">
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
                  Intelligence.com is currently in beta and enables users to leverage AI to provide clinical connections. This application can be leveraged by any healthcare professional looking to use their network to be more successful in business.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
                  Anyone can connect to receive recommended Connectors™, people likely to make referrals, warm introductions, and/or have insights that accelerate desired outcomes from closing that big deal to finding a dream job.
                </p>
                <div className="pt-6">
                  <Button className="text-lg px-8 py-4 font-semibold bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    Visit Intelligence.com
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* APIs Section */}
      <section className="w-full py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-8 drop-shadow-lg font-bold">
                APIs
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-8">
                GammaLex will be releasing an API for accessing intelligence generated by GammaLex's model.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-8">
                Whether integrating our insights into EHR, CRM, or other enterprise applications (existing and new), our APIs will enable optimization across authorization, resource planning, compliance management, and revenue optimization.
              </p>
              <div className="pt-6">
                <Button className="text-lg px-8 py-4 font-semibold bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  Learn more
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 