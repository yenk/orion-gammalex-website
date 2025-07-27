"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { JoinWaitlistModal } from '@/components/JoinWaitlistModal'

export default function ProblemsCTA() {
  return (
    <section className="w-full py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 font-inter relative" style={{ backgroundColor: '#9E3F95' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          viewport={{ once: true }}
        >
          <div 
            className="max-w-5xl mx-auto p-16 rounded-3xl backdrop-blur-sm"
            style={{
              backgroundColor: 'rgba(235, 212, 190, 0.1)',
              border: '2px solid rgba(235, 212, 190, 0.3)',
              boxShadow: '0 20px 40px rgba(158, 63, 149, 0.3)'
            }}
          >
            <h3 className="text-4xl sm:text-5xl font-bold text-white mb-8 drop-shadow-lg">
              Ready to solve these challenges?
            </h3>
            <p className="text-2xl sm:text-3xl text-white/95 leading-relaxed mb-10 drop-shadow-md">
              GammaLex's vertical AI addresses each of these problems with targeted, specialty-specific solutions.
            </p>
            <JoinWaitlistModal
              trigger={
                <Button 
                  className="text-xl px-10 py-6 font-semibold"
                  style={{
                    backgroundColor: '#EBD4BE',
                    color: '#9E3F95',
                    border: '2px solid #EBD4BE',
                    boxShadow: '0 8px 16px rgba(158, 63, 149, 0.4)'
                  }}
                >
                  Get Started
                </Button>
              }
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
} 