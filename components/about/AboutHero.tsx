"use client"

import { motion } from "framer-motion"

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/impact/icons/main13.png)',
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-32">
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
            About{' '}
            <span className="text-gammalex-purple">Us</span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white/90 leading-relaxed max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Vertical AI trained on high-stakes, specialty domains built to expand access, reduce friction, and optimize revenue 
            <br />
            across healthcare.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
} 