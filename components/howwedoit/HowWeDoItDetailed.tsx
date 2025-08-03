"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Database, Monitor, Shield, Target, Zap, CheckCircle } from 'lucide-react'

export default function HowWeDoItDetailed() {
  const workflows = [
    {
      title: "Data Ingestion & Processing",
      icon: Database,
      bulletPoints: [
        "Process clinical encounters from MIMIC-IV database (Core, Hosp, ICU, ED, Note modules)",
        "Analyze legal documents from Harvard's CaseLaw Access Project (16M+ opinions tested)",
        "Monitor policy changes from CMS Medicare Coverage Database (MCD)",
        "Track diagnostic codes from WHO ICD-11 classifications (17,000+ codes)",
        "Build comprehensive AI knowledge foundation from 8 major data sources"
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
        "Analyze specialty-specific guidelines for medical specialties",
        "Process regulatory documents from federal and state agencies",
        "Maintain compliance with HIPAA, Stark Law, and Anti-Kickback regulations",
        "Provide instant alerts for policy changes affecting specific specialties",
        "Ensure providers stay ahead of regulatory curve"
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
        "Identify documentation gaps before claim submission",
        "Predict authorization success rates and denial risks",
        "Reduce preventable denials through early detection",
        "Accelerate payment cycles through proactive risk management",
        "Provide real-time risk scoring for each authorization request"
      ],
      highlight: "GammaLex's predictive AI transforms authorization success rates, dramatically reducing denials while accelerating revenue cycles."
    },
    {
      title: "Specialty-Specific Optimization",
      icon: Target,
      bulletPoints: [
        "RADIOLOGY: Adapt to imaging modality requirements and American College of Radiology (ACR) guidelines",
        "ONCOLOGY: Optimize for National Comprehensive Cancer Network (NCCN) treatment protocols and specialty drug coverage",
        "CARDIOLOGY: Process American College of Cardiology (ACC) coding standards and interventional procedure requirements",
        "TRANSPLANT: Adapt to United Network for Organ Sharing (UNOS) allocation protocols and center certification standards",
        "Optimize for specialty-specific payer policies and coverage rules",
        "Provide real-time specialty-specific compliance and risk guidance"
      ],
      highlight: "GammaLex's specialty-optimized AI delivers domain expertise for high-stakes medical specialties, ensuring precise authorization predictions."
    },
    {
      title: "Compliance & Risk Management",
      icon: CheckCircle,
      bulletPoints: [
        "Monitor legal exposure patterns from legal documents (Harvard CAP)",
        "Analyze court cases for legal precedent patterns (CourtListener)",
        "Track regulatory violations across federal and state levels",
        "Identify compliance risks and potential legal exposure",
        "Protect providers from legal exposure and penalties",
        "Ensure patient care remains the priority",
        "Surface risks early to prevent costly legal issues",
        "Maintain compliance with evolving healthcare regulations"
      ],
      highlight: "GammaLex's legal intelligence protects providers from compliance risks and regulatory exposure through proactive risk management."
    },
    {
      title: "Intelligence Delivery & Integration",
      icon: Zap,
      bulletPoints: [
        "Deliver insights through AI Assistant, APIs, and proprietary apps",
        "Make enterprise-grade expertise available to providers of all sizes",
        "Integrate with existing EHR systems seamlessly",
        "Improve authorization success rates across all provider types",
        "Reduce denials and accelerate patient care outcomes"
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
            How GammaLex Works
          </h2>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto">
            A seamless workflow that transforms healthcare data into actionable intelligence
          </p>
        </motion.div>

        {/* Workflow Visualization */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-blue-500 transform -translate-x-1/2 hidden lg:block shadow-lg" />
          
          {workflows.map((workflow, index) => {
            const IconComponent = workflow.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-16 lg:mb-24 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Step Number Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0 z-10 hidden lg:block">
                  <motion.div 
                    className="w-20 h-20 bg-blue-600 border-4 border-white rounded-full flex items-center justify-center shadow-xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-2xl font-bold text-white">{String(index + 1).padStart(2, '0')}</span>
                  </motion.div>
                </div>

                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                  
                                     {/* Content Side */}
                   <div className={`space-y-6 ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
                     <div className="flex items-center space-x-4 mb-6">
                       <motion.div 
                         className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center lg:hidden shadow-lg"
                         whileHover={{ scale: 1.1, rotate: 5 }}
                         transition={{ duration: 0.3 }}
                       >
                         <IconComponent className="w-7 h-7 text-white" />
                       </motion.div>
                       <h3 className="text-2xl sm:text-3xl md:text-4xl text-slate-900 font-normal">
                         {workflow.title}
                       </h3>
                     </div>
                    
                    <div className="space-y-4">
                      {workflow.bulletPoints.map((point, pIndex) => (
                        <motion.div 
                          key={pIndex} 
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/50 transition-all duration-300"
                          whileHover={{ x: 5 }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: pIndex * 0.1 }}
                        >
                          <div className="w-3 h-3 bg-blue-600 rounded-full mt-3 flex-shrink-0 shadow-sm"></div>
                          <p className="text-lg text-slate-700 leading-relaxed">
                            {point}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                                     {/* Visual Side */}
                   <div className={`space-y-6 ${isEven ? 'lg:pl-8' : 'lg:pr-8'}`}>
                     <motion.div 
                       className="space-y-4 bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
                       whileHover={{ scale: 1.02, y: -5 }}
                       transition={{ duration: 0.3 }}
                     >
                       <h4 className="text-xl font-semibold text-slate-900">Key Impact</h4>
                       <p className="text-lg sm:text-xl text-slate-900 font-medium leading-relaxed">
                         {workflow.highlight}
                       </p>
                       <div className="pt-4">
                         <Button 
                           className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                         >
                           Learn more
                         </Button>
                       </div>
                     </motion.div>
                   </div>
                </div>

                                 {/* Arrow to next step (except for last item) */}
                 {index < workflows.length - 1 && (
                   <motion.div 
                     className="flex justify-center mt-8 lg:hidden"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: index * 0.3 }}
                   >
                     <motion.div
                       className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg"
                       whileHover={{ scale: 1.1 }}
                       animate={{ x: [0, 5, 0] }}
                       transition={{ duration: 2, repeat: Infinity }}
                     >
                       <ArrowRight className="w-6 h-6 text-white" />
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
             className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200 max-w-2xl mx-auto"
             whileHover={{ scale: 1.02, y: -5 }}
             transition={{ duration: 0.3 }}
           >
             <h3 className="text-2xl sm:text-3xl text-slate-900 font-normal mb-4">
               Ready to transform your workflow?
             </h3>
             <p className="text-lg text-slate-600 mb-6">
               Experience the power of AI-driven healthcare intelligence
             </p>
             <Button 
               className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
             >
               Get Started
             </Button>
           </motion.div>
         </motion.div>
      </div>
    </div>
  );
} 