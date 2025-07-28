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
            Your guide to responsible AI development
          </h2>
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl text-white leading-relaxed mb-6">
              The responsible use of #DeepLearningAI requires careful consideration of a range of issues, among other things, bias in training data, lack of interpretability, privacy, transparency, and social benefit.
            </p>
            <p className="text-xl text-white leading-relaxed">
              Through awareness and our actions, we can ensure that #AI is developed and used in a way that benefits our community and society as a whole. #ResponsibleAI
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <FileText className="w-5 h-5" />
              Responsible AI Guidelines
            </motion.button>
            
            <motion.button
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <ExternalLink className="w-5 h-5" />
              Responsible AI Framework
            </motion.button>
            
            <motion.button
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <ExternalLink className="w-5 h-5" />
              Open Letter
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 