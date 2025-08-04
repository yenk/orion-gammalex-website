"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function ProblemsDetailed() {
  const problems = [
    {
      title: "We predict and prevent claim denials",
      paragraphs: [
        "Hospitals face mounting claim denials and shifting payer rules. GammaLex’s Vertical AI delivers real-time intelligence at the point of decision—anticipating denials before they impact revenue and bridging gaps between medicine, law, and policy."
      ],
      highlight: "AI integration in radiology workflows delivers 451% ROI over five years, with 78 days saved in triage and 41 days in reporting (Journal of the American College of Radiology, 2024)."
    },
    {
      title: "We deliver clinical intelligence and real-time compliance",
      paragraphs: [
        "Clinicians and legal teams need defensible documentation and audit readiness as payer rules evolve. GammaLex provides real-time, source-backed guidance and instant risk assessment for every claim, keeping teams compliant and audit-ready."
      ],
      highlight: "Real-time risk assessment and compliance guidance at the point of care."
    },
    {
      title: "We forecast authorizations and optimize revenue",
      paragraphs: [
        "Complex billing and opaque workflows limit care access and disrupt revenue flow. GammaLex forecasts authorizations in real time, adapts to payer changes, and turns complex billing into predictable, optimized revenue."
      ],
      highlight: "Predictable, policy-aligned revenue—no more billing guesswork."
    },
    {
      title: "We solve high-stake specialty denials before they start",
      paragraphs: [
        "We’re starting with radiology, where denial risk is highest and complexity is greatest. Every specialty faces unique authorization and denial challenges. GammaLex’s AI adapts to each specialty’s data and payer history, providing daily forecasts and precise denial predictions ßeven in volatile environments."
      ],
      highlight: "Specialty-optimized AI: daily forecasts, precise denial predictions, and reliability in volatile healthcare environments."
    },
    {
      title: "We deliver sustainable competitive advantage",
      paragraphs: [
        "GammaLex’s proprietary AI, trained on specialty-specific data, creates strong barriers to entry and lasting differentiation. Built for rapid adaptation, the platform scales seamlessly with evolving payer rules and expanding markets."
      ],
      highlight: "Rapid adaptation to new specialties and payer rules—scalable across markets."
    },
    {
      title: "We prevent billions in financial losses",
      paragraphs: [
        "Clinical delays aren’t just medical—they’re financial crises. 92% of radiation oncologists report authorization delays, sending costs rippling through the system.",
        "In 2022, hospitals spent $19.7B fighting denials—rising 23% to $25.7B in 2023. Another $10.6B was lost to overturned claims.",
        "GammaLex’s Vertical AI prevents these losses by anticipating denials, reducing admin burden, and ensuring proper authorization from the start."
      ],
      highlight: "$25.7B in denial costs and $10.6B in administrative waste prevented through predictive AI."
    }
  ];

  return (
    <div className="w-full font-inter relative">
      {problems.map((problem, index) => (
        <section 
          key={index}
          className={`w-full py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative ${
            index === 0 || index === 2 || index === 4 ? 'bg-white' : index % 2 === 0 ? 'bg-[#1a2a2e]' : 'bg-[#0f4c75]'
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24 xl:gap-32 items-start">
                {/* Left Column - Title and Detailed Text */}
                <div className="space-y-6 sm:space-y-8 text-left">
                  <h3 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6 sm:mb-8 drop-shadow-lg text-left font-normal leading-tight tracking-tight max-w-5xl ${
                    index === 0 || index === 2 || index === 4 ? 'text-black' : 'text-white'
                  }`}>
                    {problem.title}
                  </h3>
                  
                  <div className="space-y-4 sm:space-y-6">
                    {problem.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex} className={`text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed drop-shadow-md text-left font-normal ${
                        index === 0 || index === 2 || index === 4 ? 'text-black/95' : 'text-white/95'
                      }`}>
                        {paragraph}
                      </p>
                    ))}

                  </div>
                </div>

                {/* Right Column - Highlight Statement & Button */}
                <div className="flex flex-col justify-start text-left space-y-6 sm:space-y-8">
                 {index === 0 && (
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gammalex-purple mb-6 sm:mb-8 drop-shadow-lg text-left font-normal">
                      The ROI?
                    </h3>
                  )}
                  
                    {problem.highlight && (
                      <div className={`leading-relaxed drop-shadow-md text-left font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-6 sm:mb-8 ${
                        index === 0 || index === 2 || index === 4 ? 'text-black/95' : 'text-white/95'
                      }`}>
                        {problem.highlight}
                      </div>
                    )}
                    
                    <div className="pt-2 sm:pt-4">
                      <Button 
                        className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 font-normal bg-gammalex-purple hover:bg-gammalex-purple-light text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={() => window.location.href = '/application'}
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