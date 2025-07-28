"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FileText, ExternalLink } from 'lucide-react'

export default function TrustComplianceStandards() {
  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 font-inter bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-normal text-gray-900 mb-8">
            Our Foundational AI Principles
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Building healthcare AI that earns trust through transparency and responsible design
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >


          {/* Data minimization philosophy */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Data minimization philosophy
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Unlike many AI companies that collect everything, we believe in collecting only what's necessary. Our vertical AI approach means we focus on specific healthcare use cases, requiring minimal data to deliver maximum impact. We're building systems that respect data boundaries while delivering powerful insights.
            </p>
          </motion.div>

          {/* Security foundation */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Security foundation
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              We're building with enterprise-grade security principles from day one. While we're in beta, our architecture is designed for the security requirements of healthcare organizations. We're implementing robust encryption, secure API access, and comprehensive audit trails—laying the groundwork for future compliance certifications.
            </p>
          </motion.div>

          {/* Privacy by design */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Privacy by design
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Privacy isn't an afterthought—it's built into every layer of our system. We're designing for HIPAA compliance, GDPR readiness, and healthcare-specific privacy requirements. Our approach ensures that patient data protection is foundational, not retrofitted.
            </p>
          </motion.div>

          {/* Compliance roadmap */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Compliance roadmap
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              We are on track for SOC 2 Type II certification and key healthcare compliance standards. During our beta phase, we're focused on building a strong, scalable foundation with a clear path to enterprise-grade compliance. We're committed to transparency—sharing where we are today and where we're headed as we work toward full certification.
            </p>
          </motion.div>

          {/* Building trust through transparency */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Building trust through transparency
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Trust in healthcare AI requires more than certifications—it requires transparency. We're committed to showing our work, explaining our decisions, and being open about our processes. This transparency builds the foundation for long-term trust with healthcare providers.
            </p>
          </motion.div>

          {/* Cloud infrastructure */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Cloud-native infrastructure
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              We're building on distributed cloud infrastructure, which enables speed and security through highly-rated third-party vendors like AWS, GCP, and Azure. We plan to use these cloud-native platforms based on client requirements and needs, helping customers stay secured, resilient, and scalable through good engineering practices.
            </p>
          </motion.div>

          {/* Third-party audits */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Third-party audits
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              We are building toward frequent third-party audits and assessments. We plan to partner with leading privacy compliance and data protection firms to ensure our clients' healthcare data is safe and secure. Our controls will be annually audited by nationally recognized cybersecurity and compliance firms to confirm our SOC 2 accreditation.
            </p>
          </motion.div>

          {/* Penetration testing */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Penetration testing
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              GammaLex is actively building its security testing capabilities to meet the highest standards. We are implementing automated vulnerability scans and planning independent penetration testing at both the application and infrastructure levels through trusted third-party experts. As we grow, we welcome collaboration with healthcare partners who have strict security requirements and support additional verification to reinforce our shared commitment to protecting sensitive data.
            </p>
          </motion.div>

          {/* Robust data encryption */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Robust data encryption
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              We encrypt your healthcare data using AES-256-bit data-at-rest encryption and TLS 1.3 SHA-256 data-in-transit protection. The keys for these systems are frequently rotated to comply with industry standard KMS practices and are secured by KMS protections. We implement the latest encryption standards to ensure optimal security and efficiency.
            </p>
          </motion.div>

          {/* GDPR and CCPA compliance */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-900">
              GDPR and CCPA compliance
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              GammaLex is actively working toward compliance with GDPR, CCPA, and other applicable privacy regulations. Our healthcare AI products are being developed with a strong focus on data minimization, transparency, and client control. Privacy is a core design principle, and we are committed to building systems that respect and protect personal information. For more details, please see our Privacy Policy.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
} 