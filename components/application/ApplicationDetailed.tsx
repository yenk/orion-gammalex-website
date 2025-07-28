"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function ApplicationDetailed() {
  const productFeatures = [
    {
      title: "Real-Time Authorization Intelligence",
      paragraphs: [
        "GammaLex's Vertical AI continuously monitors and analyzes authorization requirements across all major payers, providing instant insights into coverage policies, documentation requirements, and approval likelihood.",
        "Our platform automatically updates policy changes as they're published, ensuring your team always has the most current information to make informed authorization decisions.",
        "Get real-time alerts on policy updates, coverage changes, and emerging denial risks before they impact your revenue cycle."
      ]
    },
    {
      title: "Predictive Denial Prevention",
      paragraphs: [
        "Our Vertical AI analyzes historical claim data, payer patterns, and clinical documentation to predict denial risks before claims are submitted.",
        "GammaLex identifies potential issues in real-time, providing specific recommendations to improve approval rates and reduce administrative burden.",
        "Machine learning algorithms continuously improve prediction accuracy based on your organization's unique payer mix and specialty focus."
      ]
    },
    {
      title: "Automated Claims Processing",
      paragraphs: [
        "Streamline your revenue cycle with intelligent automation that processes claims, validates documentation, and ensures compliance before submission.",
        "Our platform integrates seamlessly with existing EHR and billing systems, automatically populating required fields and validating against payer requirements.",
        "Reduce manual data entry while improving accuracy and accelerating payment cycles."
      ]
    },
    {
      title: "Specialty-Specific Optimization",
      paragraphs: [
        "Unlike generic solutions, GammaLex's Vertical AI is trained specifically on clinical-legal data for each medical specialty, understanding the unique workflows and requirements of radiology, oncology, cardiology, and more.",
        "Each specialty module includes specialized knowledge of relevant CPT codes, diagnosis requirements, and payer-specific policies that impact authorization success.",
        "Custom algorithms adapt to your organization's specific payer mix, historical patterns, and clinical workflows."
      ]
    },
    {
      title: "Compliance & Audit Management",
      paragraphs: [
        "Maintain full compliance with HIPAA, GDPR, and healthcare regulations through built-in security controls and audit trails.",
        "Our platform provides comprehensive documentation for all authorization decisions, policy interpretations, and compliance activities.",
        "Automated audit reports and compliance dashboards help you maintain regulatory standards while reducing administrative overhead."
      ]
    },
    {
      title: "Enterprise Integration & APIs",
      paragraphs: [
        "Seamlessly integrate GammaLex's intelligence into your existing workflows through our comprehensive API suite and pre-built connectors.",
        "Connect to major EHR systems, practice management software, and billing platforms without disrupting current operations.",
        "Custom integration options available for enterprise clients with specific workflow requirements and security needs."
      ]
    }
  ];

  return (
    <div className="w-full font-inter relative">
      {productFeatures.map((feature, index) => (
        <section 
          key={index}
          className={`w-full py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative ${
            index % 2 === 0 ? 'bg-[#1a1a2e]' : 'bg-[#0f4c75]'
          }`}
        >
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
                            <div className="max-w-4xl mx-auto">
                {/* Feature Title and Description */}
                <div className="space-y-8 text-center">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-8 drop-shadow-lg text-center font-normal">
                    {feature.title}
                  </h3>
                  
                  <div className="space-y-6">
                    {feature.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-lg sm:text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-md text-center font-normal">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
} 