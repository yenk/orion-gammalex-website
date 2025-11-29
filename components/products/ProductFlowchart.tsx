"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  UploadCloud, 
  Cpu, 
  ScanEye, 
  Glasses, 
  Mic, 
  FileText, 
  UserCheck,
  ArrowRight
} from 'lucide-react'

const steps = [
  { 
    id: '1',
    label: 'Patient Uploads Imaging', 
    description: 'Fast, seamless upload of DICOM files via secure portal.',
    tag: 'Fast, seamless upload',
    color: 'bg-emerald-500', 
    lightColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    textColor: 'text-emerald-700',
    icon: UploadCloud
  },
  { 
    id: '2', 
    label: 'AI Analysis Runs Automatically', 
    description: 'Deep learning algorithms process imaging data instantly upon ingestion.',
    tag: 'Instant predictive insights',
    color: 'bg-blue-500', 
    lightColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-700',
    icon: Cpu
  },
  { 
    id: '3', 
    label: 'AI Highlights Suspicious Areas', 
    description: 'Automated detection of potential lesions with high sensitivity.',
    color: 'bg-blue-600', 
    lightColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-800',
    icon: ScanEye
  },
  { 
    id: '4', 
    label: 'AR 3D Visualization Panel', 
    description: '3D reconstruction projected for precise anatomical localization.',
    tag: 'Interactive, clinician-friendly',
    color: 'bg-emerald-600', 
    lightColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    textColor: 'text-emerald-800',
    icon: Glasses
  },
  { 
    id: '5', 
    label: 'Voice Commands for Navigation', 
    description: 'Hands-free control of the viewing environment.',
    color: 'bg-violet-500', 
    lightColor: 'bg-violet-50',
    borderColor: 'border-violet-200',
    textColor: 'text-violet-700',
    icon: Mic
  },
  { 
    id: '6', 
    label: 'Results & Recommendations', 
    description: 'Synthesized findings presented in an actionable format.',
    tag: 'Actionable summary',
    color: 'bg-amber-500', 
    lightColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-700',
    icon: FileText
  },
  { 
    id: '7', 
    label: 'Clinician Decision', 
    description: 'Final expert review accelerated by intelligent support.',
    color: 'bg-slate-600', 
    lightColor: 'bg-slate-50',
    borderColor: 'border-slate-200',
    textColor: 'text-slate-700',
    icon: UserCheck
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
            className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight"
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
            From seamless upload to actionable decision support, experience the complete intelligent imaging journey.
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
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="min-w-[85vw] md:min-w-[600px] snap-center"
              >
                <div className="relative h-full flex flex-col">
                   {/* Connector Line */}
                   {index !== steps.length - 1 && (
                     <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-8 w-8 h-0.5 bg-slate-200 z-0">
                        <ArrowRight className="absolute -right-2 -top-2.5 text-slate-300" size={20} />
                     </div>
                   )}

                   {/* Card */}
                   <div className={`relative z-10 h-full bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col group-hover:shadow-2xl transition-shadow duration-300`}>
                      
                      {/* Content */}
                      <div className="relative p-8 md:p-10 flex flex-col justify-center h-full">
                        {/* Big Number Background */}
                        <div className={`absolute top-0 right-4 md:right-8 text-[120px] md:text-[160px] font-bold leading-none select-none pointer-events-none -translate-y-4 z-0 opacity-5 ${step.textColor}`}>
                          0{index + 1}
                        </div>

                        <div className="relative z-10">
                           <div className={`mb-6 inline-flex p-3 rounded-2xl ${step.lightColor} ${step.textColor} w-fit`}>
                              <step.icon size={32} strokeWidth={1.5} />
                           </div>
                           
                           <h3 className="text-2xl md:text-3xl font-medium text-slate-900 mb-4 tracking-tight leading-tight pr-12">
                             {step.label}
                           </h3>
                           
                           <div className={`w-16 h-1.5 ${step.color} mb-6 rounded-full opacity-80`} />

                           <p className="text-base md:text-lg text-slate-600 leading-relaxed font-light">
                             {step.description}
                           </p>

                           {step.tag && (
                             <div className="mt-6 flex items-center gap-2">
                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${step.lightColor} ${step.textColor} border ${step.borderColor}`}>
                                  {step.tag}
                                </span>
                             </div>
                           )}
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

