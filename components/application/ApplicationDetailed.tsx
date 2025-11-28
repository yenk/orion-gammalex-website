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