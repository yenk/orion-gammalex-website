"use client"

import { motion } from "framer-motion"

export default function AboutContent() {
  return (
    <>
      <section className="py-16 bg-white text-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* 2x2 Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-gray-700 leading-relaxed">
                  GammaLex is founded by Yen Kha, a seasoned data and software engineering leader with 15+ years of experience scaling systems and teams from the ground up across early-stage startups to Fortune 500 giants.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Yen has built foundational cloud infrastructure where none existed, led full-cycle automation of data pipelines, and architected enterprise BI platforms that supported over 90,000 employees. She's scaled systems and teams from zero to one at Fortune 500 companies and startups alike, always with minimal resources and maximal impact.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Her forte is building under constraint: creating robust, scalable, and intelligent platforms in environments that lack clarity, tooling, or automation. With deep fluency in distributed systems, machine learning, and applied statistics, she saw the same pattern repeated across industries especially in healthcare: fragmented systems, costly compliance bottlenecks, and an overreliance on human bandwidth for decisions that should be accelerated, not stalled.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  GammaLex was born from that insight: Vertical AI built not just to process data, but to understand the intersection of care, law, and revenue. It's designed to reduce friction, unlock insight, and make complex decisions more human, not less.
                </p>
              </motion.div>
              
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                The company is advised by leaders with deep experience across ethical AI, enterprise systems, and healthcare economics. With backgrounds spanning public interest technology, global-scale infrastructure, and regulated industry transformation, the advisory team brings a systems-level perspective to GammaLex's mission. Their guidance helps ensure that GammaLex delivers trustworthy, scalable AI that supports operational efficiency, revenue integrity, and equitable patient outcomes.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-16 bg-white text-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              GammaLex's mission is to advance healthcare prosperity by designing intelligence that connects people, systems, and decisions with purpose and precision.
            </motion.h2>
          </motion.div>
        </div>
      </section>
    </>
  )
} 