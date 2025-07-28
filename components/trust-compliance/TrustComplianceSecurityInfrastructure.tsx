"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function TrustComplianceSecurityInfrastructure() {
  return (
    <section className="w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-8 font-inter bg-[#1a365d]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-white mb-8">
            Security & Infrastructure
          </h2>
          <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto">
            Enterprise-grade security and robust infrastructure for healthcare AI
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Security foundation */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white">
              Security foundation
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              We're building with enterprise-grade security principles from day one. While we're in beta, our architecture is designed for the security requirements of healthcare organizations. We're implementing robust encryption, secure API access, and comprehensive audit trails—laying the groundwork for future compliance certifications.
            </p>
          </motion.div>

          {/* Cloud-native infrastructure */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white">
              Cloud-native infrastructure
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              We're building on distributed cloud infrastructure, which enables speed and security through highly-rated third-party vendors like AWS, GCP, and Azure. We plan to use these cloud-native platforms based on client requirements and needs, helping customers stay secured, resilient, and scalable through good engineering practices.
            </p>
          </motion.div>

          {/* Robust data encryption */}
          <motion.div
            className="space-y-6 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white">
              Robust data encryption
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              We encrypt your healthcare data using AES-256-bit data-at-rest encryption and TLS 1.3 SHA-256 data-in-transit protection. The keys for these systems are frequently rotated to comply with industry standard KMS practices and are secured by KMS protections. We implement the latest encryption standards to ensure optimal security and efficiency.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 