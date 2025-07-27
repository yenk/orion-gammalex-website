"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface Source {
  label: string
  url: string
}

interface CaseDetails {
  federalSettlement?: {
    amount: string
    type: string
    description: string
    source: string
  }
  malpracticeSettlement?: {
    amount: string
    type: string
    description: string
    source: string
  }
}

interface LegalCase {
  headline: string
  caseName: string
  year: string
  impact: string
  summary: string
  specialty: string
  source?: string
  sources?: Source[]
  details?: CaseDetails
}

export default function LegalHeatIndex() {
  const oncologyCases: LegalCase[] = [
    {
      headline: "UnitedHealthcare – $9.5M Proton Beam Therapy Settlement",
      caseName: "Proton Beam Therapy Class Action",
      year: "2016-2023",
      impact: "$9.5M settlement",
      summary: "Patients denied coverage for proton beam therapy (PBRT). Judge called denial \"immoral and barbaric.\"",
      specialty: "Oncology",
      source: "https://www.startribune.com/unitedhealthcare-part-of-95m-settlement-over-denied-coverage-for-costly-cancer-treatment/601349639"
    },
    {
      headline: "Blue Cross Louisiana – Salim Proton Therapy Denial",
      caseName: "Salim v. BCBS Louisiana",
      year: "2022",
      impact: "Court found abuse of discretion",
      summary: "Stage 4 throat cancer patient denied PBRT. Court recognized PBRT as standard of care.",
      specialty: "Oncology",
      sources: [
        {
          label: "ERISA Watch Analysis",
          url: "https://www.yourerisawatch.com/2023/05/fifth-circuit-holds-that-blue-cross-abused-its-discretion-in-denying-cancer-patients-claim-for-proton-beam-therapy/"
        },
        {
          label: "Fifth Circuit Opinion",
          url: "https://law.justia.com/cases/federal/appellate-courts/ca5/22-30573/22-30573-2023-05-03.html"
        },
        {
          label: "ProPublica Investigation",
          url: "https://www.propublica.org/article/blue-cross-proton-therapy-cancer-lawyer-denial"
        }
      ]
    }
  ]

  const cardiologyCases: LegalCase[] = [
    {
      headline: "St. Joseph Medical Center – Unnecessary Stenting",
      caseName: "St. Joseph Medical Center Settlement",
      year: "2010-2012",
      impact: "$22-37M settlement",
      summary: "Dr. Mark Midei performed unnecessary drug-eluting stents based on falsified artery blockages. Federal settlement of $22M under False Claims Act, plus ~$37M in separate malpractice settlements.",
      specialty: "Cardiology",
      details: {
        federalSettlement: {
          amount: "$22 Million",
          type: "False Claims Act",
          description: "St. Joseph Medical Center agreed to pay $22 million to resolve allegations under the False Claims Act, including reimbursement for medically unnecessary stents allegedly implanted by Dr. Mark Midei between January 2008 and May 2009.",
          source: "https://www.justice.gov/archives/opa/pr/st-joseph-medical-center-maryland-pay-us-22-million-resolve-false-claims-act-allegations"
        },
        malpracticeSettlement: {
          amount: "~$37 Million",
          type: "Patient Lawsuits",
          description: "A separate set of lawsuits filed by patients led to a reported $37 million settlement, resolving claims of unnecessary stent placements by Dr. Midei at St. Joseph.",
          source: "https://www.cbsnews.com/baltimore/news/37-million-settlement-reached-in-former-towson-doctors-stent-case/"
        }
      }
    }
  ]

  const allCases = [...oncologyCases, ...cardiologyCases]

  return (
    <section id="legal-heat-index" className="w-full py-24 px-4 font-inter bg-gradient-to-br from-black via-gammalex-purple/20 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-inter font-normal text-white text-center mb-6">
            When denials become <span className="gradient-text">lawsuits</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-inter font-normal text-white/90 text-center leading-tight">
            Real cases where insurance denials led to massive settlements and judicial condemnation.
          </p>
        </div>

        {/* When Denials Become Lawsuits - 2x2 Grid Design */}
        <div className="mb-16">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Hero Impact */}
            <div className="text-center mb-12">
              <div className="text-7xl sm:text-8xl lg:text-9xl font-bold text-gammalex-orange mb-6">
                $9.5M
              </div>
              <div className="text-2xl sm:text-3xl text-white/90 font-inter mb-4">
                Judge called UnitedHealthcare's denial
              </div>
              <div className="text-3xl sm:text-4xl text-gammalex-orange font-bold italic">
                "immoral and barbaric"
              </div>
            </div>

            {/* 2x2 Grid Cases */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {allCases.map((c, idx) => (
                <motion.div 
                  key={c.caseName}
                  className="relative overflow-hidden group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Alarming Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-gammalex-orange/15 to-red-500/10 border-l-4 border-gammalex-orange rounded-xl"></div>
                  
                  <div className="relative p-6 h-full flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      {/* Warning Icon */}
                      <motion.div 
                        className="flex-shrink-0 w-10 h-10 bg-gammalex-orange rounded-full flex items-center justify-center"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-white font-bold text-sm">!</span>
                      </motion.div>
                      
                      {/* Case Content */}
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-3 font-inter leading-tight">
                          {c.headline}
                        </h3>
                        <p className="text-white/90 font-inter text-sm leading-relaxed">
                          {c.summary}
                        </p>
                      </div>
                    </div>
                    
                    {/* Case Details & Sources */}
                    <div className="mt-auto">
                      <div className="text-white/60 text-xs font-inter mb-3">
                        {c.caseName} • {c.year}
                      </div>
                      
                      {/* Source Links */}
                      <div className="flex flex-wrap gap-2">
                        {c.sources && c.sources.map((source, sourceIdx) => (
                          <a 
                            key={sourceIdx}
                            href={source.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gammalex-orange hover:text-gammalex-orange/80 transition-colors underline text-xs font-inter bg-white/5 px-2 py-1 rounded-full"
                          >
                            {source.label} ↗
                          </a>
                        ))}
                        {c.source && (
                          <a 
                            href={c.source} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gammalex-orange hover:text-gammalex-orange/80 transition-colors underline text-xs font-inter bg-white/5 px-2 py-1 rounded-full"
                          >
                            Read Source ↗
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 