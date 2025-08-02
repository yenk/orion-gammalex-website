"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutContent() {
  return (
    <>
      {/* Integrated Story Section */}
      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            {/* Main Story with Integrated Founder Profile */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              {/* Founder Profile - Left Column */}
              <motion.div
                className="lg:col-span-1 flex flex-col items-center lg:items-start space-y-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/impact/icons/yen.png"
                    alt="Yen Kha"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="text-center lg:text-left space-y-3">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Yen Kha
                  </h3>
                  <p className="text-lg text-gray-700">
                    Founder & CEO, GammaLex
                  </p>
                  <a
                    href="https://www.linkedin.com/in/yenkha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-900 hover:text-gray-700 text-sm font-medium transition-colors duration-200 border-b border-gray-300 hover:border-gray-600"
                  >
                    Connect on LinkedIn →
                  </a>
                </div>
              </motion.div>

              {/* Story Content - Right Columns */}
              <motion.div
                className="lg:col-span-2 space-y-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                    Building the Future of Healthcare AI
                  </h2>
                  
                  <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    <p>
                      GammaLex was founded by Yen Kha, a veteran engineering leader with 15+ years scaling systems and teams from startups to Fortune 500s. She's built cloud infrastructure, automated data pipelines, and architected platforms for 90,000+ users—turning constraints into catalysts.
                    </p>
                    
                    <p>
                      With deep roots in distributed systems and ML, Yen saw the same pattern across industries—especially in healthcare: fragmented systems, compliance gridlock, and decision-making constrained by outdated processes. GammaLex is her answer. Vertical AI that connects care, law, and revenue—reducing friction, unlocking insight, and making complex decisions more human.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Advisory Context */}
            <motion.div
              className="bg-gray-50 rounded-2xl p-8 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Expert Guidance
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The company is advised by leaders with deep experience across ethical AI, enterprise systems, and healthcare economics. Their guidance helps ensure that GammaLex delivers trustworthy, scalable AI that supports operational efficiency, revenue integrity, and equitable patient outcomes.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement Section */}
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
              className="text-3xl md:text-4xl font-semibold text-white drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Our Mission
            </motion.h2>
            
            <motion.p 
              className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              GammaLex's mission is to advance healthcare prosperity by designing intelligence that connects people, systems, and decisions with purpose and precision.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  )
} 