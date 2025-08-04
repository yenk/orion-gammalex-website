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
                    Founder & CEO, GammaLex AI Inc.
                  </p>
                  <p className="text-lg text-gray-700">
                    Co-Founder & CTO, J4All
                  </p>
                  <div className="space-y-2">
                    <a
                      href="https://www.linkedin.com/in/yenkha/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-900 hover:text-gray-700 text-sm font-medium transition-colors duration-200 border-b border-gray-300 hover:border-gray-600"
                    >
                      Learn More →
                    </a>
                    <br />
                    <a
                      href="https://j4all.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-900 hover:text-gray-700 text-sm font-medium transition-colors duration-200 border-b border-gray-300 hover:border-gray-600"
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
                  <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                    The Vision Behind Vertical AI
                  </h2>
                  
                  <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    <p>
                      As a technical founder and AI systems architect, Yen Kha is focused on transforming legal and medical workflows with real-world intelligence. A 2025 LiFT Scholar at The Linux Foundation, she has been recognized for advancing open-source innovation in high-impact, underserved domains.
                    </p>
                    
                    <p>
                      At GammaLex, she is building vertical AI for the intersection of law, medicine, and policy—developing LLM-powered tools that accelerate medical pre-authorization and streamline clinical-compliance workflows. Her work turns regulatory and procedural complexity into real-time, transparent decisions that support care delivery, uphold legal standards, and enable ethical automation.
                    </p>
                    
                    <p>
                      She is also the Co-Founder and CTO of J4All, a nonprofit startup dedicated to expanding access to justice through responsible AI. There, she leads the development of intelligent legal support systems designed to promote equity, clarity, and dignity in high-stakes decisions.
                    </p>
                    
                    <p>
                      Across both ventures, she leads the design of end-to-end AI systems—merging cloud-native infrastructure with specialized LLM pipelines engineered for legal and clinical reasoning. Her architecture leverages agentic frameworks, high-fidelity retrieval, and context-aware model alignment to deliver intelligent, auditable decisions at scale—shaping a future where complex workflows are not just automated, but deeply understood.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Building AI Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                Vertical AI for a Healthier System
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We build for impact. AI designed to streamline care delivery, ensure compliance, and optimize financial performance.
              </p>
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
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Strategic Vision
                  </h3>
                  <p>
                    Healthcare runs on clinical precision and regulatory clarity.
                  </p>
                  <p>
                    At GammaLex, we build AI that's deeply vertical—trained to think like a clinician, operate like a compliance expert, and scale like a strategist.
                  </p>
                  <p>
                    We don't replace expertise—we expand it. Our AI brings sharper decisions, faster workflows, and seamless alignment with outcomes and compliance.
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
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Engineering Leadership
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-semibold">Scalable by Design:</span> We build cloud-native AI systems aligned to real-world clinical workflows, specialty logic, and compliance standards.
                    </li>
                    <li>
                      <span className="font-semibold">Differentiated by Infrastructure:</span> Our agentic frameworks and custom retrieval pipelines power explainable, auditable outputs that improve with every use.
                    </li>
                    <li>
                      <span className="font-semibold">Vertical from Day One:</span> GammaLex goes where generic models can't—engineering intelligent infrastructure purpose-built for healthcare delivery.
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