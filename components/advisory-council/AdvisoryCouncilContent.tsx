"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AdvisoryCouncilContent() {
  const advisors = [
    {
      name: "Bruce Cahan",
      title: "Co-Founder/CEO, Urban Logic",
      expertise: "Business Transformation, Financial Technology & Emergency Response",
      bio: "Business Transformation Innovator, Data Scientist and Financial Technologist with 38 years' experience in banking, corporate finance, and municipal law. Pioneer in financing the space economy, spatial intelligence infrastructures, and urban sustainability. Emergency responder supporting NYC Mayor's Office of Emergency Management's Command Center after 9/11 attacks, providing liaison for City agencies to efficiently mine and align federal, state and private spatial information resources. Merchant banker with international experience in multicultural finance and team building, specializing in making organizations more responsive & resilient in the face of 'all-risk' hazards.",
      image: "/images/impact/icons/bruce.png"
    },
    {
      name: "Simon J. Mawer",
      title: "Healthcare Strategist, Keck Medicine of USC",
      expertise: "Risk Management, Innovation & Human-Centered Design",
      bio: "Healthcare strategist focused on risk, innovation, and human-centered system design. Works at the intersection of complexity, ethics, and execution—helping institutions navigate uncertainty, resolve harm, and design for resilience. Currently serves in a leadership role at Keck Medicine of USC, shaping responses to adverse healthcare events. Has helped launch healthtech products, scale innovation programs, and rethink approaches to safety and complexity across Stanford Medicine, Plug and Play, Alio, and Blue Wren Advisors. Also teaches business design at the Rotman School of Management and co-authored Discovery Design, with Healthcare by Design coming in 2025.",
      image: "/images/impact/icons/simon.png"
    }
  ];

  return (
    <>
      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Large Heading */}
            <motion.div
              className="text-left"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-gray-900 leading-tight">
                Guiding AI with
                <br />
                <span className="text-purple-600">Expertise,</span>
                <br />
                <span className="text-purple-600">Ethics, and</span>
                <br />
                <span className="text-purple-600">Excellence</span>
              </h2>
            </motion.div>

            {/* Explanatory Text */}
            <motion.div
              className="text-left"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Our Advisory Council brings together decades of leadership in business transformation, healthcare strategy, and technology innovation. From Silicon Valley startups to healthcare risk and regulatory frameworks, our advisors offer deep, cross-disciplinary insight.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                They guide GammaLex on clinical compliance, responsible AI development, and human-centered design—ensuring we deliver transformative, ethically grounded solutions that advance patient outcomes, regulatory alignment, and operational excellence.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Grid Advisors Section */}
      <section className="py-20 bg-gray-50 text-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-inter font-normal text-gray-900 mb-8">
              Meet Our Advisors
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {advisors.map((advisor, index) => (
              <motion.div
                key={index}
                className="space-y-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.5, 
                  delay: index * 0.3,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              >
                {/* Image */}
                <motion.div
                  className="w-64 h-64 rounded-2xl overflow-hidden shadow-xl mx-auto lg:mx-0"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 1.2, 
                    delay: (index * 0.3) + 0.2,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                >
                  {advisor.image ? (
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      width={256}
                      height={256}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 text-4xl font-semibold">
                        {advisor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}
                </motion.div>
                
                {/* Content */}
                <motion.div
                  className="space-y-6 text-center lg:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 1.2, 
                    delay: (index * 0.3) + 0.4,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                >
                  <div>
                    <h3 className="text-3xl font-semibold text-gray-900 mb-3">
                      {advisor.name}
                    </h3>
                    <p className="text-xl text-gray-700 font-medium mb-2">
                      {advisor.title}
                    </p>
                    <p className="text-lg text-gray-600 mb-6">
                      {advisor.expertise}
                    </p>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {advisor.bio}
                  </p>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ 
                      duration: 1.0, 
                      delay: (index * 0.3) + 0.6,
                      ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                  >
                    {(advisor.name === "Bruce Cahan" || advisor.name === "Simon J. Mawer") && (
                      <a
                        href={advisor.name === "Bruce Cahan" ? "https://www.linkedin.com/in/brucecahan/" : "https://www.linkedin.com/in/sjmawer/"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-900 hover:text-gray-700 text-sm font-medium transition-colors duration-200 border-b border-gray-300 hover:border-gray-600"
                      >
                        Learn More →
                      </a>
                    )}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
} 