"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutContent() {
  return (
    <>
      {/* Founder Story Section */}
      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            {/* Main Story with Founder Profile */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              {/* Founder Profile - Left Column */}
              <motion.div
                className="lg:col-span-1 flex flex-col items-center lg:items-start space-y-4"
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
                
                <div className="text-center lg:text-left space-y-2">
                  <h3 className="text-2xl text-gray-900">
                    Yen Kha
                  </h3>
                                     <p className="text-base text-gray-700">
                     Founder, GammaLex AI Inc.
                   </p>
                   <p className="text-base text-gray-700">
                     Co-Founder, J4All
                   </p>
                  <div className="flex flex-col space-y-1 pt-2">
                    <a
                      href="https://www.linkedin.com/in/yenkha/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-900 hover:text-gray-700 text-sm transition-colors duration-200 border-b border-gray-300 hover:border-gray-600"
                    >
                      Learn More →
                    </a>
                    <a
                      href="https://j4all.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-900 hover:text-gray-700 text-sm transition-colors duration-200 border-b border-gray-300 hover:border-gray-600"
                    >
                      Visit J4All →
                    </a>
                  </div>
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
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight">
                    The Vision Behind <span className="text-gammalex-purple">GammaLex Vertical AI</span>
                  </h2>
                  
                  <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
                    <p>
                      Yen Kha, a 2025 LiFT Scholar recognized for advancing open source AI, builds real-world intelligence for complex healthcare and legal workflows. At GammaLex, she leads the design of vertical AI systems that merge cloud-native infrastructure with domain-specific reasoning models to deliver transparent, compliant guidance aligned with specialty workflows and modern imaging standards. This transforms breast imaging operations and compliance into clear, actionable, and auditable decisions that professionals trust.
                    </p>
                    
                    <p>
                      She is also a Co-Founder of J4All, a nonprofit expanding access to justice through responsible AI that promotes equity and clarity in high-stakes legal decisions. Across both ventures, Yen builds vertical AI not as a feature, but as a foundational intelligence designed to amplify human expertise where medicine, law, and policy converge.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Building AI Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/about/vertical.png)',
          }}
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            {/* Section Header */}
            <motion.div
              className="text-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white">
                Vertical AI for a Healthier System
              </h2>
            </motion.div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Strategic Vision */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                                 <div className="space-y-4 text-lg text-white/90 leading-relaxed">
                   <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
                     Strategic Vision
                   </h3>
                   <p>
                     We build for impact. AI that's vertically trained with clinical precisions, regulatory clarity, and optimize financial performance across the care ecosystem.
                   </p>
                 </div>
              </motion.div>

              {/* Engineering Leadership */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="space-y-4 text-lg text-white/90 leading-relaxed">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
                    Engineering Leadership
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-white/90">
                    <li>
                      <span className="text-white">Scalable by Design:</span> We build cloud-native AI systems aligned to real-world clinical workflows, specialty logic, and compliance standards.
                    </li>
                    <li>
                      <span className="text-white">Differentiated by Infrastructure:</span> Our agentic frameworks and custom retrieval pipelines power explainable, auditable outputs that improve with every use.
                    </li>
                    <li>
                      <span className="text-white">Vertical from Day One:</span> GammaLex goes where generic models can't—engineering intelligent infrastructure purpose-built for healthcare delivery.
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
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
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white drop-shadow-lg"
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