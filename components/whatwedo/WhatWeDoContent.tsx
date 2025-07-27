"use client"

import { motion } from "framer-motion"

export default function WhatWeDoContent() {
  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* 2x2 Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Most people think of generative AI as a chatbot or image generator. Those applications, while powerful, 
              represent a sliver of what is possible using deep learning and neural networks. Companies like GammaLex, 
              OpenAI, Midjourney, and DeepMind are foundation models that use artificial intelligence to unlock possibility—training 
              large data models to analyze evolving healthcare patterns, understand clinical language, and improve patient outcomes.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              GammaLex's mission is to help healthcare providers prosper with 'killer apps' built around responsible, 
              state-of-the-art AI that are designed to radically improve authorization success rates, reduce denials, 
              and enhance patient care coordination. Our platform produces on-demand intelligence equivalent to the power 
              of thousands of clinical specialists helping you adapt to evolving healthcare policies and optimize revenue.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 