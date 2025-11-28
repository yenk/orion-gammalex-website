"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Database, Monitor, Shield, Target, Zap, CheckCircle } from 'lucide-react'
import { JoinWaitlistModal } from '@/components/JoinWaitlistModal'

export default function HowWeDoItDetailed() {
  const workflows = [
    {
      title: "Breast imaging data orchestration",
      icon: Database,
      bulletPoints: [
        "Ingest mammography, breast MRI, and ultrasound studies with PACS/RIS context",
        "Map key findings to structured pathology, biomarker, and annotation data",
        "Train on large, diverse lesion libraries to sharpen early cancer detection",
        "Align every input with ACR guidelines and payer coverage rules"
      ],
      highlight: "GammaLex harmonizes imaging, pathology, and policy data so detection models stay grounded in clinical reality."
    },
    {
      title: "AI detection & decision support",
      icon: Monitor,
      bulletPoints: [
        "Apply deep learning ensembles to screen for subtle masses and calcifications",
        "Prioritize findings by probability, so radiologists see the right cases first",
        "Quantify risk stratification and triage for recall vs biopsy decisions",
        "Blend AI + radiologist consensus to cut missed cancers and false positives"
      ],
      highlight: "AI standardizes sensitivity, elevating every reader above the mid-80s benchmark without sacrificing specificity."
    },
    {
      title: "AR visualization & localization",
      icon: Shield,
      bulletPoints: [
        "Project AI annotations into augmented reality overlays for precise lesion placement",
        "Support biopsy and surgical planning with 3D references tied to imaging planes",
        "Sync AR scenes with PACS zoom/pan so findings stay context-rich",
        "Share the same augmented view with downstream care teams"
      ],
      highlight: "AR brings clarity to complex breast anatomy, reducing targeting errors and improving procedural confidence."
    },
    {
      title: "Voice-guided reporting",
      icon: Target,
      bulletPoints: [
        "Capture structured narrations keyed to AI findings and AR locations",
        "Use macros to enforce terminology while giving radiologists flexibility",
        "Track dictation quality and reduce transcription errors in real time",
        "Surface immediate feedback on missing contextual data before sign-off"
      ],
      highlight: "Voice workflows keep radiologists hands-free while ensuring every report matches AI-supported insights."
    },
    {
      title: "Integration with PACS, RIS, and authorization",
      icon: CheckCircle,
      bulletPoints: [
        "Bidirectionally sync findings with PACS/RIS viewers and EHR charts",
        "Push structured data into prior authorization packets and coverage rules",
        "Keep audit trails that tie every decision back to imaging, AR, and voice inputs",
        "Enable secure data exchange across hospitals and imaging centers"
      ],
      highlight: "Seamless integration means AI recommendations are always available where care teams work."
    },
    {
      title: "Explainability & compliance automation",
      icon: Zap,
      bulletPoints: [
        "Log every AI insight with source images, AR overlays, and voice traces",
        "Match findings to payer policies, ICD/CPT codes, and regulatory requirements",
        "Highlight the evidence pack when submitting authorizations or appeals",
        "Deliver performance analytics so teams can track gains and gaps"
      ],
      highlight: "Transparent AI and automated compliance keep authorizations defensible and audit-ready."
    }
  ];

  return (
    <div className="w-full font-inter relative bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-slate-900 font-normal mb-6">
            AI, AR, and voice orchestrate breast imaging interpretation
          </h2>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto">
            Detection algorithms, augmented visualization, and structured narration keep every read precise, explainable, and ready for payer review.
          </p>
        </motion.div>

                {/* Workflow Visualization */}
        <div className="relative">
          {/* Animated Connecting Line */}
          <motion.div 
            className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-purple-400 to-purple-600 transform -translate-x-1/2 hidden lg:block shadow-lg"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          
          {workflows.map((workflow, index) => {
            const IconComponent = workflow.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 1.2, 
                  delay: index * 0.4,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative mb-12 lg:mb-16 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Animated Step Number Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0 z-10 hidden lg:block">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 border-4 border-white rounded-full flex items-center justify-center shadow-xl relative"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.4 + 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                  >
                    <span className="text-xl font-normal text-white">{String(index + 1).padStart(2, '0')}</span>
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full opacity-20 blur-sm"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    />
                  </motion.div>
                </div>

                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                  
                  {/* Content Side */}
                  <div className={`space-y-4 ${isEven ? 'lg:pr-6' : 'lg:pl-6'}`}>
                    <motion.div 
                      className="flex items-center space-x-3 mb-4"
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.4 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center lg:hidden shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </motion.div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl text-slate-900 font-normal">
                        {workflow.title}
                      </h3>
                    </motion.div>
                    
                    <motion.div 
                      className="space-y-1"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.4 + 0.7 }}
                      viewport={{ once: true }}
                    >
                      {workflow.bulletPoints.map((point, pIndex) => (
                        <motion.div 
                          key={pIndex} 
                          className="flex items-start space-x-2 py-1"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.4 + 0.7 + pIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                          <p className="text-sm text-slate-700 leading-tight">
                            {point}
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Visual Side */}
                  <motion.div 
                    className={`space-y-4 ${isEven ? 'lg:pl-6' : 'lg:pr-6'}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.4 + 0.9 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="space-y-3"
                      whileHover={{ scale: 1.02, y: -3 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-base sm:text-lg text-slate-900 font-normal leading-relaxed">
                        {workflow.highlight}
                      </p>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Animated Arrow to next step (except for last item) */}
                {index < workflows.length - 1 && (
                  <motion.div 
                    className="flex justify-center mt-6 lg:hidden"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.4 + 1.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-5 h-5 text-white" />
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

                 {/* Final CTA */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.4 }}
           viewport={{ once: true }}
           className="text-center mt-16"
         >
           <motion.div 
             className="text-center"
             whileHover={{ scale: 1.02, y: -5 }}
             transition={{ duration: 0.3 }}
           >
            <h3 className="text-2xl sm:text-3xl text-slate-900 font-normal mb-6">
              Ready to see AI-powered breast imaging?
            </h3>
            <p className="text-lg text-slate-600 mb-8">
              Book a demo to experience AR localization, voice reporting, and detection that amplifies every read.
            </p>
             <JoinWaitlistModal
               trigger={
                 <Button 
                   className="bg-gammalex-purple hover:bg-gammalex-purple-light text-white font-normal py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                 >
                   Get Started
                 </Button>
               }
             />
           </motion.div>
         </motion.div>
      </div>
    </div>
  );
} 