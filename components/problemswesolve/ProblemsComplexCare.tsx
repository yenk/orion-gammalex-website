"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { JoinWaitlistModal } from '@/components/JoinWaitlistModal'

export default function ProblemsComplexCare() {
  return (
    <section className="w-full py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 font-inter relative">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-purple-900/10 to-black/30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.05),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Hero Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-white leading-tight mb-8">
            Unlocking Access Where <span className="gradient-text">Care Is Most Complex</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto">
            In high-stakes specialties like radiology, oncology, cardiology, transplant medicine, and neurosurgery where approvals aren't just paperwork — they're lifelines.
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Problem */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              AI to predict and prevent claim denials
            </h3>
            <p className="text-lg text-white/90 leading-relaxed mb-4">
              For years, hospitals have faced significant challenges navigating claim denials and complex payer policies. Traditional systems often struggle to keep pace with evolving medical policies, creating barriers that impact revenue flow, operational efficiency, and timely patient care.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              At GammaLex, we're taking a different path. We've built Vertical AI that deeply understands each specialty's clinical reality and payer landscape. Our platform delivers real-time intelligence at the point of decision—predicting denials before they derail revenue, surfacing actionable risk, and bridging the gaps between medicine, law, and policy.
            </p>
            <br />
            <p className="text-lg text-white/90 leading-relaxed">
              This is healthcare revenue, re-engineered. This is GammaLex.
            </p>
          </motion.div>

          {/* Right Column - ROI */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gammalex-orange mb-6">
              The ROI?
            </h3>
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              Recent studies show AI integration in radiology workflows can deliver 451% ROI over five years. Key drivers include time savings (78 days in triage, 41 days in reporting), faster diagnoses, and increased revenue from earlier detection enabling additional treatments.
            </p>
            <p className="text-xs text-white/50 leading-relaxed mb-4">
              Sources: <a href="https://www.diagnosticimaging.com/view/ai-radiology-roi-calculator-study-projects-451-percent-roi-over-five-years" target="_blank" rel="noopener noreferrer" className="underline hover:text-gammalex-orange transition-colors">Diagnostic Imaging</a>, <a href="https://pubmed.ncbi.nlm.nih.gov/38499053/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gammalex-orange transition-colors">PubMed</a>
            </p>
            <div className="flex items-center gap-4">
              <JoinWaitlistModal
                trigger={
                  <Button className="bg-gammalex-orange hover:bg-gammalex-orange/90 text-white">
                    Learn more
                  </Button>
                }
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 