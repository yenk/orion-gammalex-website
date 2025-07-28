"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function ApplicationHero() {
  return (
    <section className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 font-inter">
      {/* Abstract Background with gradient waves */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-orange-600">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,165,0,0.15),transparent_50%)]" />
      </div>
      
      {/* Content Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-tight tracking-tight mb-8">
            Applications
          </h1>
        </motion.div>
      </div>
    </section>
  )
} 