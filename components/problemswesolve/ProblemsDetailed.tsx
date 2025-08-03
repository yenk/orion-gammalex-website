"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function ProblemsDetailed() {
  const problems = [
    {
      title: "AI to predict and prevent claim denials",
      paragraphs: [
        "For years, hospitals have faced significant challenges navigating claim denials and complex payer policies. Traditional systems often struggle to keep pace with evolving medical policies, creating barriers that impact revenue flow, operational efficiency, and timely patient care.",
        "At GammaLex, we're taking a different path. We've built Vertical AI that deeply understands each specialty's clinical reality and payer landscape. Our platform delivers real-time intelligence at the point of decision—predicting denials before they derail revenue, surfacing actionable risk, and bridging the gaps between medicine, law, and policy.",
        "This is healthcare revenue, re-engineered. This is GammaLex."
      ],
      highlight: "AI integration in radiology workflows delivers 451% ROI over five years with 78 days saved in triage and 41 days in reporting according to Journal of the American College of Radiology, 2024."
    },
    {
      title: "AI to deliver clinical intelligence",
      paragraphs: [
        "Clinicians and legal teams struggle with defensible documentation, compliance gaps, and audit readiness as payer rules constantly evolve. Traditional approaches lack real-time guidance and fail to adapt to different clinical specialties.",
        "GammaLex provides real-time, source-backed guidance that helps teams create defensible documentation, reduce denials, remain compliant, and stay audit-ready. Our intelligent clinical-compliant insights adapt to different clinical specialties and workflows, supporting expert decision-making at scale.",
        "This is clinical intelligence, reimagined. This is GammaLex."
      ],
      highlight: "Real-time clinical intelligence adapts to specialty workflows, supporting expert decision-making at scale."
    },
    {
      title: "AI to forecast authorization success",
      paragraphs: [
        "Revenue leakage from claim denials, de-risking workflows, and delayed reimbursement cripples healthcare organizations. Traditional systems fail to provide transparent, compliant claim generation and policy adaptation.",
        "GammaLex prevents revenue leakage by reducing claim denials, de-risking workflows, and accelerating reimbursement through transparent, compliant claim generation and policy adaptation. Our revenue transformation capabilities integrate with EHRs and stay aligned with fast-changing payer rules to optimize financial outcomes.",
        "This is authorization forecasting, redefined. This is GammaLex."
      ],
      highlight: "Prevents revenue leakage through transparent, compliant claim generation and policy adaptation."
    },
    {
      title: "AI to execute compliance seamlessly",
      paragraphs: [
        "Administrative delays, care fragmentation, and complex compliance requirements prevent healthcare providers from focusing on quality care delivery. Traditional systems create barriers to equitable access and faster decisions.",
        "GammaLex minimizes administrative delays, supports equitable access to care, and enables faster decisions—all while improving documentation quality and reducing care fragmentation. Our patient-centric care enablement ensures that healthcare providers can focus on delivering quality care while our AI handles the complex administrative and compliance requirements.",
        "This is compliance execution, revolutionized. This is GammaLex."
      ],
      highlight: "Minimizes administrative delays while improving documentation quality and reducing care fragmentation."
    },
    {
      title: "AI to maintain up-to-date coverage policies",
      paragraphs: [
        "92% of radiation oncologists report prior authorization delays, with 30% resulting in ER visits, hospitalization, or permanent disability.",
        "GammaLex's AI captures policy updates from the moment they're published and automatically updates coverage requirements as they evolve.",
        "This real-time intelligence ensures providers stay compliant and avoid costly denials."
      ],
      highlight: "GammaLex detects changes in coverage policies and automatically updates authorization requirements."
    },
    {
      title: "AI to optimize specialty-specific forecasting",
      paragraphs: [
        "Each medical specialty, from radiology to oncology and cardiology, presents unique challenges in authorization and denial prevention. Generic solutions often fail to account for the distinct workflows, complex policies, and evolving risk profiles inherent to each field, leading to significant delays and 'Denial Mondays'.",
        "GammaLex's AI is specifically optimized for these nuances. By adapting to the unique data, payer histories, and regulatory conditions of each high-stake specialty, our system provides fully automated, daily authorization forecasts and precise denial predictions, ensuring reliability even in volatile healthcare environments."
      ],
      highlight: "GammaLex's specialty-optimized AI delivers highly reliable daily authorization forecasts and denial predictions, transforming 'Denial Mondays' into predictable, efficient operations."
    },
    {
      title: "AI to deliver real-time policy intelligence",
      paragraphs: [
        "Payer policies are constantly evolving, making it challenging for healthcare providers to stay compliant and avoid costly claim denials. Traditional systems often miss these critical updates, leading to unexpected rejections.",
        "GammaLex provides real-time policy updates from all major payers, ensuring you're always aware of the latest requirements. Our AI instantly assesses the denial risk for every claim, highlighting potential problems before submission.",
        "This enables proactive corrections, significantly reducing denials and accelerating reimbursements. With GammaLex, you gain continuous visibility into policy changes and actionable insights to optimize your authorization workflow."
      ],
      highlight: "GammaLex's AI-powered platform delivers real-time policy updates and instant denial risk assessment, enabling proactive corrections before claims are submitted."
    },
    {
      title: "AI to deliver sustainable competitive advantage",
      paragraphs: [
        "Unlike generic automation vendors, GammaLex's proprietary algorithms are continuously trained on specialty-specific billing, payer, and compliance data, creating robust barriers to entry and sustainable competitive advantage.",
        "Our AI-driven denial prediction slashes preventable denials, accelerates payment cycles, and unlocks substantial recurring revenue improvements for providers, directly impacting the bottom line and highlighting clear scalability across multiple specialties.",
        "The platform's architecture is designed for rapid adaptation to new specialties and evolving payer requirements, widening total addressable market and supporting future expansion."
      ],
      highlight: "GammaLex's proprietary algorithms create sustainable competitive advantage across multiple high-stake specialties."
    },
    {
      title: "AI to prevent billions in financial losses",
      paragraphs: [
        "Clinical delays aren't just medical issues—they're financial crises. When 92% of radiation oncologists report authorization delays, the cost cascades through the entire system.",
        "Hospitals spent $19.7B fighting denials in 2022, escalating to $25.7B in 2023—a 23% year-over-year spike. Meanwhile, $10.6B was wasted on claims that were overturned through appeals.",
        "GammaLex's Vertical AI prevents these losses by predicting denials before they happen, reducing administrative burden, and ensuring proper authorization from the start."
      ],
      highlight: "GammaLex prevents $25.7B in denial costs and $10.6B in administrative waste through predictive AI."
    }
  ];

  return (
    <div className="w-full font-inter relative">
      {problems.map((problem, index) => (
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
                    {problem.title}
                  </h3>
                  
                  <div className="space-y-6">
                    {problem.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-lg sm:text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-md text-left font-normal">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Right Column - Highlight Statement & Button */}
                <div className="flex flex-col justify-start h-full text-left space-y-6 pt-0">
                 {index === 0 && (
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gammalex-purple mb-6 drop-shadow-lg text-left font-normal">
                      The ROI?
                    </h3>
                  )}
                  
                    <div className={`leading-relaxed drop-shadow-md text-left font-normal ${
                      index === 1 || index === 2 || index === 3 || index === 4 || index === 5
                        ? 'text-gammalex-purple text-2xl sm:text-3xl md:text-4xl mb-6 mt-0' 
                        : 'text-white/95 text-2xl sm:text-3xl md:text-4xl mb-6'
                    }`}>
                      {problem.highlight}
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
  )
} 