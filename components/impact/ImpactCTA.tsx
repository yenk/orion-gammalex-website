"use client"

import { motion } from "framer-motion"
import { JoinWaitlistModal } from '@/components/JoinWaitlistModal'

export default function ImpactCTA() {
  return (
    <section className="py-20 text-white font-inter relative" style={{ backgroundColor: '#1a365d' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Healthcare Impact?
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-white/95 max-w-3xl mx-auto drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join healthcare organizations that are already achieving measurable results with GammaLex. Start your journey toward better authorization success and reduced denials.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="pt-4"
          >
            <JoinWaitlistModal
              trigger={
                <button
                  className="px-8 py-4 font-semibold rounded-lg transition-colors duration-200"
                  style={{
                    backgroundColor: '#EBD4BE',
                    color: '#1a365d',
                    border: '2px solid #EBD4BE',
                    boxShadow: '0 8px 16px rgba(26, 54, 93, 0.4)'
                  }}
                >
                  Start Your Impact Journey
                </button>
              }
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 