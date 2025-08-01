"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function OpenSourceSection() {
  const sources = [
    {
      label: "Centers for Medicare & Medicaid Services",
      icon: "/images/logos/cms-logo.png",
      link: "https://www.cms.gov/medicare-coverage-database/search.aspx",
    },
    {
      label: "World Health Organization ICD-11",
      icon: "/images/logos/who-icd11-logo.png",
      link: "https://www.who.int/classifications/classification-of-diseases",
    },
    {
      label: "Medical Information Mart for Intensive Care",
      icon: "/images/logos/mimic-logo.png",
      link: "https://mimic.mit.edu/",
    },
    {
      label: "CourtListener by Free.Law",
      icon: "/images/logos/courtlistener-logo.png",
      link: "https://www.courtlistener.com/",
    },
    {
      label: "CaseLaw Access Project by Harvard Law School",
      icon: "/images/logos/caselaw-harvard-logo.png",
      link: "https://case.law/",
    },
    {
      label: "National Library of Medicine",
      icon: "/images/logos/nlm-nih-logo.png",
      link: "https://www.nlm.nih.gov/",
    },
    {
      label: "Biomedical and Clinical Research by i2b2s",
      icon: "/images/logos/i2b2s-logo.png",
      link: "https://portal.dbmi.hms.harvard.edu/",
    },
  ];

  return (
    <section className="w-full font-inter">
      {/* Open Source Foundation Section */}
              <div className="bg-white py-16 sm:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Transparency Commitment */}
            <motion.div
              className="max-w-7xl mx-auto mb-16 sm:mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Left Section - Large Title */}
                <div className="text-left">
                  <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-gray-900 leading-tight">
                    Transparency &{' '}
                    <span className="text-gammalex-purple">Reproducibility</span>
                  </h3>
                </div>
                
                {/* Right Section - Body Text */}
                <div className="text-left">
                  <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                    Every GammaLex recommendation is explainable—backed by clear links to policy sources, data origins, and decision pathways. Built on transparent, community-driven data and aligned with trusted clinical and legal standards, our AI ensures compliance and accountability across the healthcare ecosystem.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Data Sources Ticker */}
            <motion.div
              className="w-full flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
            <div className="w-full overflow-hidden relative">
              <div className="flex animate-scroll-left hover:animation-paused gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-12 xl:gap-x-20 px-2 sm:px-4">
                {/* First set of icons */}
                {sources.map((src, i) => (
                  <div
                    key={`first-${src.label}`}
                    className="flex flex-col flex-shrink-0 min-w-0"
                    style={{ minWidth: 140, maxWidth: 200 }}
                  >
                    <a
                      href={src.link || undefined}
                      target={src.link ? "_blank" : undefined}
                      rel={src.link ? "noopener noreferrer" : undefined}
                      className="flex flex-col items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-gammalex-orange transition-transform duration-200 hover:scale-110 min-w-0 flex-shrink-0"
                      tabIndex={0}
                      aria-label={src.label}
                    >
                      <span className="mb-3 drop-shadow-lg transition-opacity duration-300 opacity-90 group-hover:opacity-100 flex items-center justify-center w-full h-full min-h-0 bg-gray-50 rounded-lg p-2">
                        <Image
                          src={src.icon}
                          alt={src.label}
                          width={160}
                          height={96}
                          className="w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-16 lg:w-32 lg:h-20 xl:w-40 xl:h-24 object-contain"
                        />
                      </span>
                      <span className="pt-2 text-xs sm:text-sm md:text-base text-gray-700 font-inter text-center max-w-full whitespace-normal break-words w-full leading-tight">
                        {src.label}
                      </span>
                    </a>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {sources.map((src, i) => (
                  <div
                    key={`second-${src.label}`}
                    className="flex flex-col flex-shrink-0 min-w-0"
                    style={{ minWidth: 140, maxWidth: 200 }}
                  >
                    <a
                      href={src.link || undefined}
                      target={src.link ? "_blank" : undefined}
                      rel={src.link ? "noopener noreferrer" : undefined}
                      className="flex flex-col items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-gammalex-orange transition-transform duration-200 hover:scale-110 min-w-0 flex-shrink-0"
                      tabIndex={0}
                      aria-label={src.label}
                    >
                      <span className="mb-3 drop-shadow-lg transition-opacity duration-300 opacity-90 group-hover:opacity-100 flex items-center justify-center w-full h-full min-h-0 bg-gray-50 rounded-lg p-2">
                        <Image
                          src={src.icon}
                          alt={src.label}
                          width={160}
                          height={96}
                          className="w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-16 lg:w-32 lg:h-20 xl:w-40 xl:h-24 object-contain"
                        />
                      </span>
                      <span className="pt-2 text-xs sm:text-sm md:text-base text-gray-700 font-inter text-center max-w-full whitespace-normal break-words w-full leading-tight">
                        {src.label}
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 