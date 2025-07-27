"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function ProblemsHero() {
  return (
    <section className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 font-inter relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-purple-900/20 to-black/50 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(139,92,246,0.1),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-20 sm:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-white text-center leading-tight mb-8">
            Unlocking Access Where <span className="gradient-text">Care Is Most Complex</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-inter text-white/90 leading-relaxed text-center max-w-5xl mx-auto">
            Authorization, forecasting, policies, risk assessment, collaboration, compliance, productivity, revenue
          </p>
        </motion.div>
      </div>
    </section>
  )
} 