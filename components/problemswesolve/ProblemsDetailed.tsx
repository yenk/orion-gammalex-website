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
      title: "AI to maintain up-to-date coverage policies",
      paragraphs: [
        "86% of healthcare providers report claim denials being impacted by policy changes.",
        "Most of these changes won't be reflected in existing systems.",
        "GammaLex's AI captures policy updates from the moment they're published and automatically updates coverage requirements as they evolve."
      ],
      highlight: "GammaLex detects changes in coverage policies and automatically updates authorization requirements."
    },
    {
      title: "AI driven authorization forecasting",
      paragraphs: [
        "GammaLex's Intelligent Authorization™ makes 'Denial Mondays' a remnant of the past. Instead of losing valuable clinical time to producing weekly authorization predictions, GammaLex's Intelligent Authorization is fully automated and updated daily. Traditional authorization processes rely on manual review and historical patterns. Our model instead analyzes clinical data, payer history, policy patterns and changing regulatory conditions to make predictions that are reliable even in volatile healthcare environments."
      ],
      highlight: "GammaLex provides a fully automated daily authorization forecast that is on average 96%+ reliable."
    },
    {
      title: "AI to assess authorization risk",
      paragraphs: [
        "The complexity of specialty procedures has grown exponentially. Traditional systems only capture a portion of the clinical interactions with patients. The activities of specialists, case managers, and other non-billing users who are key to successful authorizations remain invisible.",
        "Simply connect your EHR and clinical systems to GammaLex to enable our AI to assess the risk of each and every authorization request."
      ],
      highlight: "GammaLex's technology assesses authorization risk so clinical teams have maximum impact on patient care."
    },
    {
      title: "AI to maximize the value of clinical networks",
      paragraphs: [
        "Manual authorization processes, repetitive documentation, and traditional workflows are all declining in efficiency. Meanwhile a whopping 80+% of successful authorizations start with proper documentation and those that do are more than 65% of approved cases.",
        "AI can't replace the power of human clinical judgment.",
        "Our AI guides surfaces Clinical Connectors™, the specialists who understand the nuances of each specialty and drive successful authorizations, when and with whom will have the most impact. Gone are hours of work spent finding the right clinical documentation and policy references. AI will find you your best clinical pathway in an instant."
      ],
      highlight: "Find optimal authorization pathways, clinical documentation, and connections and help others do the same."
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
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gammalex-orange mb-6 drop-shadow-lg text-left font-normal">
                      The ROI?
                    </h3>
                  )}
                  
                    <div className={`leading-relaxed drop-shadow-md text-left font-normal ${
                      index === 1 || index === 2 || index === 3 || index === 4
                        ? 'text-gammalex-orange text-2xl sm:text-3xl md:text-4xl mb-6 mt-0' 
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