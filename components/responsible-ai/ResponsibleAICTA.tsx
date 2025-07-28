"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FileText, ExternalLink } from 'lucide-react'

export default function ResponsibleAICTA() {
  return (
    <section className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 font-inter bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-white text-center mb-8">
            Shaping AI responsibly from the ground up
          </h2>
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl text-white leading-relaxed mb-6">
              The responsible use of deep learning AI requires careful attention to issues such as bias in training data, limited interpretability, privacy, transparency, and meaningful social impact.
            </p>
            <p className="text-xl text-white leading-relaxed">
              With intention and accountability, we can help ensure that AI is developed and applied in ways that benefit both our communities and society at large. #ResponsibleAI #DeepLearningAI
            </p>
          </div>
          

        </motion.div>
      </div>
    </section>
  )
} 