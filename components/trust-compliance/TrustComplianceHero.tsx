"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function TrustComplianceHero() {
  return (
    <section className="relative w-full py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Background Image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/impact/icons/image23.png)',
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 sm:space-y-10 lg:space-y-12"
        >
          {/* Headline */}
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white leading-tight tracking-tight max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Enterprise-level security & privacy
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white/90 leading-relaxed max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            At Gammalex®, our first priority is keeping your healthcare data private and secure. We recognize the importance of balancing confidentiality, integrity, and the availability of business information. From its inception, our application was designed with a multi-layered approach to securing key information. Our security and privacy program is designed to provide our healthcare clients with the utmost confidence in our protection of their data.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
} 