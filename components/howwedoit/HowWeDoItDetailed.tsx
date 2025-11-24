"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Database, Monitor, Shield, Target, Zap, CheckCircle } from 'lucide-react'
import { JoinWaitlistModal } from '@/components/JoinWaitlistModal'

export default function HowWeDoItDetailed() {
  const workflows = [
    {
      title: "Data Ingestion & Processing",
      icon: Database,
      bulletPoints: [
        "Process clinical encounters from MIMIC-IV database (Core, Hosp, ICU, ED, Note modules)",
        "Analyze legal documents from Harvard's CaseLaw Access Project (16M+ opinions tested)",
        "Monitor policy changes from CMS Medicare Coverage Database (MCD)",
        "Track diagnostic codes from WHO ICD-11 classifications (17,000+ codes)"
      ],
      highlight: "GammaLex builds the world's largest healthcare AI knowledge base, processing 8 major data sources to create comprehensive Clinical-Compliance intelligence."
    },
    {
      title: "Real-Time Policy Monitoring",
      icon: Monitor,
      bulletPoints: [
        "Monitor payer policies across all major insurance providers",
        "Track CMS regulatory updates in real-time",
        "Update AI recommendations when policy changes are detected",
        "Analyze specialty-specific guidelines for medical specialties"
      ],
      highlight: "GammaLex provides real-time regulatory intelligence, ensuring providers stay ahead of policy changes that could impact authorization success."
    },
    {
      title: "Predictive Risk Analysis",
      icon: Shield,
      bulletPoints: [
        "Analyze claim patterns against historical encounters (MIMIC-IV)",
        "Evaluate denial risks using legal precedent cases (Harvard CAP)",
        "Process claims against diagnostic codes (WHO ICD-11)",
        "Predict authorization success rates and denial risks"
      ],
      highlight: "GammaLex's predictive AI transforms authorization success rates, dramatically reducing denials while accelerating revenue cycles."
    },
    {
      title: "Specialty-Specific Optimization",
      icon: Target,
      bulletPoints: [
        "RADIOLOGY: Built for imaging authorization workflows, ACR guidelines, and modality-specific requirements (CT, MRI, diagnostic imaging)",
        "Expanding to ONCOLOGY: Optimize for National Comprehensive Cancer Network (NCCN) treatment protocols",
        "Expanding to CARDIOLOGY: Process American College of Cardiology (ACC) coding standards",
        "Optimize for specialty-specific payer policies and coverage rules"
      ],
      highlight: "GammaLex's radiology-optimized approval intelligence delivers domain expertise for imaging workflows, ensuring precise authorization predictions. Expanding to oncology, cardiology, and other high-stakes specialties."
    },
    {
      title: "Compliance & Risk Management",
      icon: CheckCircle,
      bulletPoints: [
        "Monitor legal exposure patterns from legal documents (Harvard CAP)",
        "Analyze court cases for legal precedent patterns (CourtListener)",
        "Track regulatory violations across federal and state levels",
        "Identify compliance risks and potential legal exposure"
      ],
      highlight: "GammaLex's legal intelligence protects providers from compliance risks and regulatory exposure through proactive risk management."
    },
    {
      title: "Intelligence Delivery & Integration",
      icon: Zap,
      bulletPoints: [
        "Deliver insights through AI Assistant, APIs, and proprietary apps",
        "Make enterprise-grade expertise available to providers of all sizes",
        "Integrate with existing EHR systems seamlessly"
      ],
      highlight: "GammaLex democratizes enterprise-grade healthcare intelligence, making advanced Clinical-Compliance expertise available to providers of all sizes."
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
            Analyze & Forecast
          </h2>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto">
            Our AI models assess denial risk, forecast authorization outcomes, and adapt to the nuances of your specialty and payers.
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
               Ready to transform your workflow?
             </h3>
             <p className="text-lg text-slate-600 mb-8">
               Experience the power of AI-driven healthcare intelligence
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