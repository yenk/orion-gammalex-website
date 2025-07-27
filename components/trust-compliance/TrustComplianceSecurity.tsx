"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Lock, Shield, Eye, Key } from 'lucide-react'

export default function TrustComplianceSecurity() {
  const securityFeatures = [
    {
      icon: <Lock className="w-8 h-8 text-white" />,
      title: "End-to-End Encryption",
      description: "All data is encrypted in transit and at rest using industry-standard AES-256 encryption."
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Access Controls",
      description: "Role-based access controls with multi-factor authentication and session management."
    },
    {
      icon: <Eye className="w-8 h-8 text-white" />,
      title: "Audit Logging",
      description: "Comprehensive audit trails for all system access and data interactions."
    },
    {
      icon: <Key className="w-8 h-8 text-white" />,
      title: "Data Sovereignty",
      description: "Data residency controls ensuring compliance with regional privacy requirements."
    }
  ];

  return (
    <section className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 font-inter relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-inter font-normal text-white text-center mb-12">
            Security <span className="gradient-text">Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm p-8 bg-gradient-to-br from-gammalex-purple/10 to-gammalex-orange/5 group-hover:from-gammalex-purple/20 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gammalex-purple to-gammalex-orange flex items-center justify-center shadow-lg">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-white/80 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 