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
              Most people view AI as chatbots or image generators—valuable tools, but only a small fraction of what today's deep learning and neural networks can accomplish. GammaLex takes a different approach. We're not a general-purpose platform; we're built for depth and precision, training our models specifically on the language of medicine, payer policies, and clinical documentation to address challenges that traditional systems overlook. At its core, GammaLex is vertical AI for healthcare designed to interpret evolving medical policies, predict denial risks, and guide care teams toward coverage-aligned decisions.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              GammaLex AI's mission is to help providers, payers, and patients not only automate but excel by improving authorization success rates, reducing claim denials and delays, enhancing patient coordination, optimizing revenue pathways, and promoting fair, transparent coverage decisions across the care continuum. The GammaLex platform delivers intelligence at scale—equivalent to thousands of clinical, legal, and administrative experts working seamlessly together by helping all stakeholders adapt in real time to policy shifts, payer behavior, and regulatory changes, ensuring care progresses smoothly and efficiently for everyone involved.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 