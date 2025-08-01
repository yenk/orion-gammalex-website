"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AdvisoryCouncilContent() {
  const advisors = [
    {
      name: "Bruce Cahan",
      title: "Co-Founder/CEO, Urban Logic",
      expertise: "Disaster & Humanitarian Relief, Banking Innovation",
      bio: "Leading expert in high-transparency, impacts-aware banking systems. Former emergency responder after 9/11, re-imagining banking through transparency and social capital. Published author on space commodities futures trading and outer frontiers of banking.",
      image: "/images/impact/icons/bruce.png"
    },
    {
      name: "Simon J. Mawer",
      title: "Healthcare Strategist, Keck Medicine of USC",
      expertise: "Risk Management, Innovation & Human-Centered Design",
      bio: "Healthcare strategist focused on risk, innovation, and human-centered system design. Published author of 'Healthcare by Design' and expert in design thinking for healthcare. Rotman Teaching Award recipient and mentor at University of Toronto.",
      image: "/images/impact/icons/simon.png"
    }
  ];

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
                Our advisory council brings together decades of experience in business transformation, healthcare strategy, and technology innovation. Council members bring unique expertise spanning Silicon Valley startup culture, healthcare risk management, statutory framework analysis, and human-centered system design.
              </p>
            </motion.div>
            
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                They provide strategic guidance on clinical compliance, regulatory requirements, and responsible AI development. Their collective experience ensures GammaLex delivers trustworthy, scalable AI that supports operational efficiency, revenue integrity, and equitable patient outcomes.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Advisors Grid Section */}
    <section className="py-16 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-inter font-normal text-gray-900 mb-8">
            Our <span className="text-gammalex-purple">Council</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {advisors.map((advisor, index) => (
                                          <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                <div className="space-y-6 text-left">
                {/* Image */}
                <div className="w-32 h-32 rounded-full mb-6 flex items-center justify-center overflow-hidden">
                  {advisor.image ? (
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 text-3xl font-semibold">
                        {advisor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {advisor.name}
                  </h3>
                  <p className="text-gammalex-purple font-medium mb-2">
                    {advisor.title}
                  </p>
                  <p className="text-sm text-gray-600 mb-4 font-medium">
                    {advisor.expertise}
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm mb-4">
                    {advisor.bio}
                  </p>
                  {(advisor.name === "Bruce Cahan" || advisor.name === "Simon J. Mawer") && (
                    <a
                      href={advisor.name === "Bruce Cahan" ? "https://www.linkedin.com/in/brucecahan/" : "https://www.linkedin.com/in/sjmawer/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gammalex-purple hover:text-gammalex-purple/80 text-sm font-medium transition-colors duration-200"
                    >
                      Learn More →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
                </div>
      </div>
    </section>

    </>
  )
} 