"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function ProblemsDetailed() {
  const problems = [
    {
      title: "Breast imaging accuracy still depends on the reader",
      paragraphs: [
        "Interpretive performance varies widely—two radiologists working the same study can record very different abnormal interpretation rates and positive predictive values.",
        "GammaLex brings AI consensus, standardizing sensitivity so more early cancers are flagged on the first read."
      ],
      highlight: "Inter-reader variability produces missed cancers and unnecessary biopsies; consistent AI lifts the baseline sensitivity above the mid-80s."
    },
    {
      title: "False positives and avoidable callbacks drain confidence",
      paragraphs: [
        "When AI and radiologists disagree, it can trigger extra imaging, callbacks, and biopsies that stress patients and teams.",
        "Our platform reduces false positives by 37% and cuts recommended biopsies by 27.8%, keeping clinicians focused on meaningful findings."
      ],
      highlight: "Higher cancer detection with fewer downstream procedures—AI reduces noise without sacrificing vigilance."
    },
    {
      title: "Workflows are fragmented by inefficiency",
      paragraphs: [
        "Radiologists toggle between PACS, RIS, manual dictation, and scattered notes, which slows reads and invites transcription errors.",
        "AI annotations, AR overlays, and voice-guided reporting unify those steps so every read is faster, traceable, and ready for action."
      ],
      highlight: "Voice-structured reporting and AR localization shorten turnaround, keep documentation consistent, and keep clinical narratives aligned."
    },
    {
      title: "Explainable decision support must align with clinical confidence",
      paragraphs: [
        "Care teams need documentation that ties findings to clinical logic and radiology standards.",
        "GammaLex surfaces explainable AI outputs that trace back to imaging, AR context, and guidelines, keeping every decision defensible."
      ],
      highlight: "AI, AR, and voice keep diagnosis, documentation, and treatment plans aligned and auditable."
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