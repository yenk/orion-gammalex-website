"use client"

import React from 'react'
import { motion } from 'framer-motion'

// AnimatedCounter component (inline since it's used in this component)
function AnimatedCounter({ value, inView }: { value: string, inView: boolean }) {
  const [displayValue, setDisplayValue] = React.useState('0')
  
  React.useEffect(() => {
    if (inView) {
      const numericValue = parseInt(value.replace('%', ''))
      let currentValue = 0
      const increment = numericValue / 60 // 60 frames for smooth animation
      
      function animateCounter(ts: number) {
        currentValue += increment
        if (currentValue < numericValue) {
          setDisplayValue(Math.floor(currentValue) + '%')
          requestAnimationFrame(animateCounter)
        } else {
          setDisplayValue(value)
        }
      }
      
      requestAnimationFrame(animateCounter)
    }
  }, [inView, value])
  
  return <span>{displayValue}</span>
}

export default function ProblemsMetrics() {
  return (
    <div className="w-full max-w-6xl mx-auto" data-testid="problems-metrics">
      {/* Clinical Impact Section */}
      <div className="mb-20">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-inter text-white/90 mb-4">
              When red tape becomes a risk factor
            </h2>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="relative">
            <div className="flex gap-12 overflow-x-auto pb-8 scrollbar-hide">
              
              {/* Oncology Crisis */}
              <motion.div 
                className="flex-shrink-0 w-96 text-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gammalex-purple mb-4">
                  <AnimatedCounter value="92%" inView={true} />
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl text-white/90 font-inter leading-tight mb-6">
                  of radiation oncologists report<br />
                  <span className="text-gammalex-purple font-semibold">workflow interruptions</span>
                </div>
                <div className="text-base text-white/80 font-inter leading-relaxed">
                  <span className="text-gammalex-purple font-semibold">30%</span> result in ER visits, hospitalization, or permanent disability. 
                  <span className="text-gammalex-purple font-semibold"> 7%</span> result in patient death.
                </div>
              </motion.div>

              {/* Cancer Care Gap */}
              <motion.div 
                className="flex-shrink-0 w-96 text-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gammalex-purple mb-4">
                  <AnimatedCounter value="22%" inView={true} />
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl text-white/90 font-inter leading-tight mb-6">
                  of cancer patients don't receive<br />
                  <span className="text-gammalex-purple font-semibold">physician-recommended care</span>
                </div>
                <div className="text-base text-white/80 font-inter leading-relaxed">
                  Due to workflow delays or manual handoffs, <span className="text-gammalex-purple font-semibold">putting lives at risk</span>
                </div>
              </motion.div>

              {/* Cardiology Risk */}
              <motion.div 
                className="flex-shrink-0 w-96 text-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gammalex-purple mb-4">
                  <AnimatedCounter value="93%" inView={true} />
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl text-white/90 font-inter leading-tight mb-6">
                  Manual review rate for cardiology<br />
                  <span className="text-gammalex-purple font-semibold">second-highest among specialties</span>
                </div>
                <div className="text-base text-white/80 font-inter leading-relaxed">
                  Complex coding and limited imaging context create <span className="text-gammalex-purple font-semibold">elevated delay risk</span>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>

      {/* Financial Impact Cascade */}
      <div className="relative mb-20">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-3xl sm:text-4xl lg:text-5xl font-inter text-white/90 mb-4">
            Clinical delays become financial losses
          </div>
          <div className="text-lg text-white/80 font-inter max-w-4xl mx-auto leading-relaxed">
            These delays aren't just clinical—they're financial. When 92% of radiation oncologists report workflow interruptions, the cost cascades through the entire system, creating a crisis that impacts both patient care and hospital budgets.
          </div>
        </motion.div>

        {/* Financial Impact Narrative */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Timeline Flow */}
            <div className="relative mb-12">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gammalex-purple/40 via-gammalex-orange/60 to-gammalex-purple/40 rounded-full hidden lg:block" />
              
              <div className="space-y-12 lg:space-y-16">
                {/* 2022 Story */}
                <motion.div 
                  className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 group"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="lg:w-1/2 text-center lg:text-right">
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gammalex-purple mb-4">
                      $19.7B
                    </div>
                    <div className="text-lg sm:text-xl lg:text-2xl text-white/90 font-inter">
                      Hospitals spent fighting administrative delays in 2022
                    </div>
                  </div>
                  <div className="hidden lg:block w-8 h-8 bg-gammalex-purple rounded-full border-4 border-white shadow-lg z-10" />
                  <div className="lg:w-1/2 text-center lg:text-left">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gammalex-purple/20">
                      <div className="text-sm text-gammalex-purple font-semibold mb-2">THE COST OF INACTION</div>
                      <div className="text-white/80">Based on a 15% average workflow delay, healthcare systems were forced to spend billions just to catch up on care they had already delivered.</div>
                    </div>
                  </div>
                </motion.div>

                {/* 2023 Escalation */}
                <motion.div 
                  className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 group"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="lg:w-1/2 text-center lg:text-left">
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gammalex-purple mb-4">
                      $25.7B
                    </div>
                    <div className="text-lg sm:text-xl lg:text-2xl text-white/90 font-inter">
                      The problem got worse in 2023
                    </div>
                  </div>
                  <div className="hidden lg:block w-8 h-8 bg-gammalex-orange rounded-full border-4 border-white shadow-lg z-10" />
                  <div className="lg:w-1/2 text-center lg:text-right">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gammalex-orange/20">
                      <div className="text-sm text-gammalex-purple font-semibold mb-2">23% INCREASE</div>
                      <div className="text-white/80">A 23% year-over-year spike shows workflow backlogs are accelerating, not improving.</div>
                    </div>
                  </div>
                </motion.div>

                {/* The Waste */}
                <motion.div 
                  className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 group"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="lg:w-1/2 text-center lg:text-right">
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gammalex-purple mb-4">
                      $10.6B
                    </div>
                    <div className="text-lg sm:text-xl lg:text-2xl text-white/90 font-inter">
                      Wasted on repeat imaging and handoffs
                    </div>
                  </div>
                  <div className="hidden lg:block w-8 h-8 bg-gammalex-purple rounded-full border-4 border-white shadow-lg z-10" />
                  <div className="lg:w-1/2 text-center lg:text-left">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gammalex-purple/20">
                      <div className="text-sm text-gammalex-purple font-semibold mb-2">SYSTEMIC WASTE</div>
                      <div className="text-white/80">Repeat imaging and manual handoffs—representing pure administrative waste.</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Source attribution */}
      <div className="text-sm sm:text-base text-white/60 text-center mt-8 space-y-1">
        Sources:
        <div>
          <a
            href="https://www.astro.org/news-and-publications/news-and-media-center/news-releases/2024/new-astro-survey-finds-that-prior-authorization-delays-lead-to-serious-harm-for-people-with-cancer"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gammalex-purple transition-colors"
          >
            ASTRO Survey: Delays in breast imaging care lead to serious harm
          </a>
        </div>
        <div>
          <a
            href="https://www.beckershospitalreview.com/oncology/how-insurance-denials-disrupt-cancer-care-5-investigation-notes"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gammalex-purple transition-colors"
          >
            Becker's Hospital Review: Insurance disruptions challenge cancer care
          </a>
        </div>
        <div>
          <a
            href="https://blog.healthjobsnationwide.com/healthcare-denials-are-skyrocketing-in-2025-hidden-reasons-revealed/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gammalex-purple transition-colors"
          >
            Healthcare insights 2025: Rising administrative pressure
          </a>
        </div>
        <div>
          <a
            href="https://www.os-healthcare.com/news-and-blog/denial-rates-are-climbing-what-healthcare-revenue-cycle-leaders-should-be-watching-in-2025"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gammalex-purple transition-colors"
          >
            OS Healthcare: Administrative backlogs climbing in 2025
          </a>
        </div>
        <div>
          <a
            href="https://www.fiercehealthcare.com/providers/providers-potentially-wasted-almost-18b-2023-overturning-claims-denials-premier-estimates"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gammalex-purple transition-colors"
          >
            Fierce Healthcare: Providers potentially wasted almost $18B on admin rework
          </a>
        </div>
        <div>
          <a
            href="https://www.beckershospitalreview.com/finance/claims-denials-are-costing-hospitals-nearly-20b-per-year"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gammalex-purple transition-colors"
          >
            Becker's Hospital Review: Claims costs burden hospitals annually
          </a>
        </div>
        <div>
          <a
            href="https://www.fiercehealthcare.com/providers/providers-wasted-106b-2022-overturning-claims-denials-survey-finds"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gammalex-purple transition-colors"
          >
            Fierce Healthcare: Providers wasted $10.6B on administrative appeals in 2022
          </a>
        </div>
      </div>
    </div>
  )
} 