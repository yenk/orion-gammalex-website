"use client"

import { Shield, Zap, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

/**
 * FeatureHighlights - Interactive feature flow section for homepage.
 * Shows 3 key features in an organic, flowing design with minimal cognitive overload.
 */
export function FeatureHighlights() {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-gammalex-purple neon-text" />,
      gradient: "from-gammalex-purple/20 via-gammalex-purple/10 to-transparent",
      border: "border-gammalex-purple/30",
      title: "Reduce Denials",
      desc: "AI-powered insights to identify potential coverage issues before submission"
    },
    {
      icon: <Zap className="h-10 w-10 text-gammalex-orange neon-text" />,
      gradient: "from-gammalex-orange/20 via-gammalex-orange/10 to-transparent",
      border: "border-gammalex-orange/30",
      title: "Faster Approvals",
      desc: "Streamlined process with intelligent document analysis and recommendations"
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-gammalex-purple-light neon-text" />,
      gradient: "from-gammalex-purple-light/20 via-gammalex-purple-light/10 to-transparent",
      border: "border-gammalex-purple-light/30",
      title: "Coverage Insights",
      desc: "Detailed analysis of payer requirements and coverage criteria"
    }
  ]
  
  return (
    <div className="w-full max-w-6xl mx-auto mt-16">
      {/* Floating Background Elements */}
      <div className="relative">
        <motion.div
          className="absolute top-10 left-1/4 w-24 h-24 bg-gradient-to-br from-gammalex-purple/15 to-transparent rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-1/3 w-32 h-32 bg-gradient-to-br from-gammalex-orange/10 to-transparent rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        
        {/* Interactive Feature Flow */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden">
                {/* Organic Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} rounded-[2rem] blur-sm group-hover:blur-0 transition-all duration-500`} />
                <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient.replace('/20', '/5')} rounded-[2rem] group-hover:from-${f.gradient.split('/')[0].split('-')[1]}/15 transition-all duration-500`} />
                
                {/* Content Container */}
                <div className={`relative p-8 rounded-[2rem] border ${f.border} backdrop-blur-sm group-hover:border-${f.border.split('/')[0].split('-')[1]}/50 transition-all duration-500`}>
                  <div className="flex flex-col items-center text-center space-y-6">
                    {/* Icon with Glow Effect */}
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500`} />
                      <div className={`relative p-5 bg-gradient-to-br ${f.gradient.replace('/20', '/10')} rounded-2xl border ${f.border} group-hover:bg-${f.gradient.split('/')[0].split('-')[1]}/20 transition-all duration-500`}>
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          {f.icon}
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Text Content */}
                    <div className="space-y-3">
                      <motion.h3 
                        className="text-xl font-bold text-white font-inter neon-text"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {f.title}
                      </motion.h3>
                      <p className="text-white/80 text-base font-inter leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                    
                    {/* Interactive Line */}
                    <motion.div 
                      className={`w-16 h-0.5 bg-gradient-to-r ${f.gradient.split(' ')[0]} to-transparent rounded-full`}
                      whileHover={{ width: "4rem" }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 