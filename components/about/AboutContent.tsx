"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutContent() {
  return (
    <>
      {/* Yen Kha Profile Section */}
      <section className="py-16 bg-gray-50 text-gray-900">
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
              Meet the Founder
            </motion.h2>
            
            <motion.div
              className="flex flex-col items-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <Image
                  src="/images/impact/icons/yen.png"
                  alt="Yen Kha"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Yen Kha
                </h3>
                <p className="text-lg text-gray-700">
                  Founder & CEO, GammaLex
                </p>
                <a
                  href="https://www.linkedin.com/in/yenkha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-900 hover:text-gray-700 text-sm font-medium transition-colors duration-200"
                >
                  Connect on LinkedIn →
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

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
                  GammaLex was founded by Yen Kha, a veteran engineering leader with 15+ years scaling systems and teams from startups to Fortune 500s. She's built cloud infrastructure, automated data pipelines, and architected platforms for 90,000+ users—turning constraints into catalysts.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With deep roots in distributed systems and ML, Yen saw the same pattern across industries—especially in healthcare: fragmented systems, compliance gridlock, and decision-making constrained by outdated processes. GammaLex is her answer. Vertical AI that connects care, law, and revenue—reducing friction, unlocking insight, and making complex decisions more human.
                </p>
              </motion.div>
              
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                The company is advised by leaders with deep experience across ethical AI, enterprise systems, and healthcare economics. Their guidance helps ensure that GammaLex delivers trustworthy, scalable AI that supports operational efficiency, revenue integrity, and equitable patient outcomes.
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