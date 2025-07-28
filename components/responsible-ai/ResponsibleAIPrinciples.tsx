"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Eye, Scale, Heart, Users, Lock } from 'lucide-react'

export default function ResponsibleAIPrinciples() {
  const principles = [
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Transparency & Accountability",
      description: "We ensure AI is explainable and trustworthy by continuously assessing its impact, tracking risks, and maintaining open communication with healthcare stakeholders."
    },
    {
      icon: <Scale className="w-6 h-6 text-white" />,
      title: "Fairness & Anti-Bias",
      description: "We proactively address bias by using diverse datasets, auditing models regularly, and implementing safeguards to ensure equitable outcomes for all patients."
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Social Benefit",
      description: "Our AI is designed to enhance human potential—removing inefficiencies, fostering collaboration, and expanding healthcare opportunities."
    },
    {
      icon: <Lock className="w-6 h-6 text-white" />,
      title: "Privacy & Security",
      description: "We enforce strict data protection measures, ensuring HIPAA compliance while safeguarding patient privacy and sensitive information."
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Human Oversight",
      description: "AI should empower, not replace, human decision-making. Our teams oversee its development to maintain ethical and responsible use."
    },
    {
      icon: <Eye className="w-6 h-6 text-white" />,
      title: "Interoperability & Compatibility",
      description: "We build AI that integrates seamlessly with existing healthcare technologies, ensuring adaptability, collaboration, and industry-wide progress."
    }
  ];

  return (
    <section className="w-full font-inter">
      {/* White background section - matching Collective[i] design */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col lg:flex-row lg:items-start lg:gap-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Left side - Headline */}
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-gray-900 leading-tight">
                Designing AI with <span className="text-gammalex-orange">Purpose</span>, <span className="text-gammalex-orange">Prosperity</span>, and <span className="text-gammalex-orange">Transparency</span> in Mind
              </h2>
            </div>
            
            {/* Right side - Description */}
            <div className="lg:w-1/2">
              <p className="text-xl text-gray-700 leading-relaxed">
                At GammaLex, we believe AI is a force for progress—one that can illuminate complexity, expand access, and transform healthcare for the better. With that power comes a responsibility we embrace: to build with integrity, innovate boldly, and ensure our technology consistently serves people, purpose, and the public good.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dark gray background section - matching How We Do It page */}
      <div className="bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl sm:text-4xl font-inter font-normal text-white mb-16">
              Our Guiding Principles
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <div className="relative overflow-hidden rounded-xl border border-white/20 p-8 bg-gray-800/50 backdrop-blur-sm group-hover:bg-gray-800/70 transition-all duration-300">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-6 shadow-lg">
                        {principle.icon}
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-4">{principle.title}</h4>
                      <p className="text-white/80 leading-relaxed">{principle.description}</p>
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