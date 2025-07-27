"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { JoinWaitlistModal } from '@/components/JoinWaitlistModal'

export default function ProblemsHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/problems-we-solve/icons/hero-image.png)',
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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Unlocking Access Where{' '}
            <span className="text-gammalex-orange">Care Is Most Complex</span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            className="text-xl sm:text-2xl md:text-3xl font-light text-white/90 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Authorization, forecasting, policies, risk assessment, collaboration, compliance, productivity, revenue
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <JoinWaitlistModal
              trigger={
                <Button 
                  size="lg"
                  className="h-14 px-8 text-lg font-semibold bg-gammalex-orange hover:bg-gammalex-orange/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 min-w-[200px]"
                >
                  Join Waitlist
                </Button>
              }
            />
            
            <Button 
              variant="outline"
              size="lg"
              className="h-14 px-8 text-lg font-semibold border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 min-w-[200px]"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 