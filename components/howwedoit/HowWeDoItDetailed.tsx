"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function HowWeDoItDetailed() {
  const workflows = [
    {
      title: "Step 1: Data Ingestion & Processing",
      paragraphs: [
        "Our workflow begins with comprehensive data ingestion from multiple sources. We process clinical records, medical policies, legal precedents, and regulatory documents to build a foundation of healthcare knowledge.",
        "GammaLex's AI ingests millions of clinical cases and legal documents, creating a deep understanding of the relationships between diagnosis, treatment, and coverage requirements.",
        "This initial step ensures our AI has the comprehensive knowledge base needed to make accurate, informed decisions."
      ],
      highlight: "GammaLex processes 10M+ clinical cases and 50K+ legal precedents to build our knowledge foundation."
    },
    {
      title: "Step 2: Real-Time Policy Monitoring",
      paragraphs: [
        "Continuous monitoring of payer policies and regulatory changes is critical to maintaining accuracy. Our system tracks updates from all major payers, CMS, and specialty guidelines in real-time.",
        "When policy changes are detected, our AI instantly updates its recommendations to reflect the latest requirements, ensuring providers stay compliant and avoid costly denials.",
        "This proactive monitoring prevents the delays and denials that occur when systems rely on outdated information."
      ],
      highlight: "GammaLex monitors 100+ payer policies and updates recommendations within minutes of policy changes."
    },
    {
      title: "Step 3: Predictive Risk Analysis",
      paragraphs: [
        "Before any claim is submitted, our AI performs comprehensive risk analysis. We evaluate each claim against current policies, historical patterns, and clinical documentation quality.",
        "This predictive analysis identifies potential denial risks and provides specific recommendations for corrections before submission.",
        "By catching issues early, we dramatically reduce denials and accelerate payment cycles."
      ],
      highlight: "GammaLex's predictive analysis reduces preventable denials by 67% and accelerates payment cycles by 3.2x."
    },
    {
      title: "Step 4: Specialty-Specific Optimization",
      paragraphs: [
        "Each medical specialty requires specialized knowledge and workflows. Our AI adapts to the unique challenges of radiology, oncology, cardiology, and other high-stakes specialties.",
        "We optimize our recommendations based on specialty-specific data, payer histories, and regulatory conditions to ensure maximum accuracy and relevance.",
        "This specialization ensures that our recommendations match the clinical reality of each practice."
      ],
      highlight: "GammaLex's specialty-optimized AI delivers 98% accuracy in authorization predictions across multiple specialties."
    },
    {
      title: "Step 5: Compliance & Risk Management",
      paragraphs: [
        "Legal and compliance risks are continuously monitored throughout the workflow. Our AI identifies potential legal exposure patterns, compliance gaps, and regulatory violations.",
        "This proactive risk management protects providers from legal exposure while ensuring patient care remains the priority.",
        "By surfacing risks early, we help providers maintain compliance and avoid costly legal issues."
      ],
      highlight: "GammaLex's legal intelligence identifies compliance risks with 94% accuracy, protecting providers from legal exposure."
    },
    {
      title: "Step 6: Intelligence Delivery & Integration",
      paragraphs: [
        "The final step delivers actionable intelligence directly to providers through our platform. Whether through our AI Assistant, APIs, or proprietary applications, we ensure insights are accessible when needed.",
        "This democratization makes enterprise-grade clinical-legal expertise available to providers of all sizes, leveling the playing field for quality care.",
        "The result is improved authorization success, reduced denials, and better patient outcomes across all provider types."
      ],
      highlight: "GammaLex makes enterprise-grade clinical-legal intelligence accessible to providers of all sizes, leveling the playing field."
    }
  ];

  return (
    <div className="w-full font-inter relative">
      {workflows.map((workflow, index) => (
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start h-full">
                {/* Left Column - Title and Detailed Text */}
                <div className="space-y-8 text-left">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-8 drop-shadow-lg text-left font-normal">
                    {workflow.title}
                  </h3>
                  
                  <div className="space-y-6">
                    {workflow.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-lg sm:text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-md text-left font-normal">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Right Column - Highlight Statement & Button */}
                <div className="flex flex-col justify-start h-full text-left space-y-6 pt-0">
                 {index === 0 && (
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gammalex-orange mb-6 drop-shadow-lg text-left font-normal">
                      The Process?
                    </h3>
                  )}
                  
                    <div className={`leading-relaxed drop-shadow-md text-left font-normal ${
                      index === 1 || index === 2 || index === 3 || index === 4 || index === 5
                        ? 'text-gammalex-orange text-2xl sm:text-3xl md:text-4xl mb-6 mt-0' 
                        : 'text-white/95 text-2xl sm:text-3xl md:text-4xl mb-6'
                    }`}>
                      {workflow.highlight}
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        className="text-lg px-8 py-4 font-semibold bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Learn more
                      </Button>
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