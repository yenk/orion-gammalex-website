"use client"

import { motion } from "framer-motion"

export default function ImpactHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/impact-page/hero-background.png)',
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
            Impact.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white/90 leading-relaxed max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            GammaLex is an artificial intelligence company developing advanced AI models focused on ethical, responsible outcomes that foster collaboration, reduce disparities, and democratize access to healthcare decisions, coverage, and equitable care delivery.
          </motion.p>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white/80 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Our focus is to unlock insights that have the potential to increase authorization success rates and reduce claim denials for healthcare providers and patients.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
} 