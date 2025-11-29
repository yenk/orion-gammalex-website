"use client"

import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'

const steps = [
  { 
    id: '1',
    label: 'AI Detection', 
    description: 'Deep learning algorithms instantly process imaging data to detect, classify, and rank potential findings.',
    textColor: 'text-gammalex-purple',
    borderColor: 'border-gammalex-purple/20',
    bgGradient: 'group-hover:to-gammalex-purple/5'
  },
  { 
    id: '2', 
    label: 'AR Visualization', 
    description: '3D overlays translate AI signals into precise visual cues, improving spatial orientation and reducing oversight and diagnostic errors.',
    textColor: 'text-emerald-500',
    borderColor: 'border-emerald-500/20',
    bgGradient: 'group-hover:to-emerald-500/5'
  },
  { 
    id: '3', 
    label: 'Voice Assistant', 
    description: 'Hands-free interface control with context-aware commands for interactive imaging review and reporting.',
    textColor: 'text-gammalex-orange',
    borderColor: 'border-gammalex-orange/20',
    bgGradient: 'group-hover:to-gammalex-orange/5'
  },
  { 
    id: '4', 
    label: 'Adaptive Diagnostic Intelligence', 
    description: 'Synthesized insights and risk assessments that guide confident, data-driven clinical decisions.',
    textColor: 'text-blue-500',
    borderColor: 'border-blue-500/20',
    bgGradient: 'group-hover:to-blue-500/5'
  }
]

export default function ProductFlowchart() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollXProgress } = useScroll({ container: containerRef })

  return (
    <section className="w-full bg-slate-50 py-24 overflow-hidden font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-normal text-slate-900 tracking-tight"
          >
            How We Do It
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
          </motion.p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative group">
          {/* Scroll Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200 rounded-full overflow-hidden mb-8 max-w-xs mx-auto hidden sm:block">
            <motion.div 
              className="h-full bg-gammalex-purple"
              style={{ scaleX: scrollXProgress, transformOrigin: "0%" }}
            />
          </div>

          <div 
            ref={containerRef}
            className="flex overflow-x-auto gap-6 pb-12 pt-8 px-4 snap-x snap-mandatory no-scrollbar scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="min-w-[85vw] md:min-w-[460px] snap-center"
              >
                <div className="relative h-full flex flex-col">
                   {/* Card */}
                   <div className={`relative z-10 h-full bg-white rounded-[3rem] shadow-2xl border ${step.borderColor} overflow-hidden flex flex-col hover:scale-[1.02] transition-transform duration-300 group`}>
                      
                      {/* Hover Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-transparent ${step.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                      {/* Content */}
                      <div className="relative p-12 md:p-14 flex flex-col justify-center h-full min-h-[500px]">
                        {/* Big Number Background */}
                        <div className={`absolute -top-8 right-8 text-[220px] font-black leading-none select-none pointer-events-none z-0 opacity-[0.07] ${step.textColor}`}>
                          0{index + 1}
                        </div>

                        <div className="relative z-10 space-y-8">
                           <h3 className={`text-4xl md:text-5xl font-normal text-slate-900 tracking-tight leading-[1.05]`}>
                             {step.label}
                           </h3>
                           
                           <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-prose">
                             {step.description}
                           </p>
                        </div>
                      </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  )
}
