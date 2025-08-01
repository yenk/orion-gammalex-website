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
      highlight: "GammaLex builds the world's largest healthcare AI knowledge base, processing 8 major data sources to create comprehensive clinical-legal intelligence."
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
      highlight: "GammaLex democratizes enterprise-grade healthcare intelligence, making advanced clinical-legal expertise available to providers of all sizes."
    }
  ];

  return (
    <div className="w-full font-inter relative bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-gray-900 font-normal mb-6">
            How GammaLex Works
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto">
            A seamless workflow that transforms healthcare data into actionable intelligence
          </p>
        </motion.div>

        {/* Workflow Visualization */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 transform -translate-x-1/2 hidden lg:block" />
          
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
                  <div className="w-16 h-16 bg-white border-4 border-gray-300 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-gray-600">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>

                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                  
                                     {/* Content Side */}
                   <div className={`space-y-6 ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
                     <div className="flex items-center space-x-4 mb-6">
                       <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center lg:hidden">
                         <IconComponent className="w-6 h-6 text-gray-600" />
                       </div>
                       <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-normal">
                         {workflow.title}
                       </h3>
                     </div>
                    
                    <div className="space-y-3">
                      {workflow.bulletPoints.map((point, pIndex) => (
                        <div key={pIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
                          <p className="text-lg text-gray-700 leading-relaxed">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                                     {/* Visual Side */}
                   <div className={`space-y-6 ${isEven ? 'lg:pl-8' : 'lg:pr-8'}`}>
                     <div className="space-y-4">
                       <h4 className="text-xl font-semibold text-gray-900">Key Impact</h4>
                       <p className="text-lg sm:text-xl text-gray-900 font-medium leading-relaxed">
                         {workflow.highlight}
                       </p>
                       <div className="pt-4">
                         <Button 
                           className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
                         >
                           Learn more
                         </Button>
                       </div>
                     </div>
                   </div>
                </div>

                                 {/* Arrow to next step (except for last item) */}
                 {index < workflows.length - 1 && (
                   <div className="flex justify-center mt-8 lg:hidden">
                     <ArrowRight className="w-8 h-8 text-gray-400" />
                   </div>
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
           <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
             <h3 className="text-2xl sm:text-3xl text-gray-900 font-normal mb-4">
               Ready to transform your workflow?
             </h3>
             <p className="text-lg text-gray-600 mb-6">
               Experience the power of AI-driven healthcare intelligence
             </p>
             <Button 
               className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
             >
               Get Started
             </Button>
           </div>
         </motion.div>
      </div>
    </div>
  );
} 