"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FileText, ExternalLink } from 'lucide-react'

export default function TrustComplianceSecurity() {
  return (
    <section className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 font-inter bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="space-y-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
        >
          {/* Third-party audits */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Third-party audits</h3>
            <p className="text-white/80 leading-relaxed">
              We are frequently audited and assessed by third parties and clients. For the past few years, we have partnered with TRUSTe/TrustArc, the leader in privacy compliance and data protection for over two decades, to ensure our clients' data is safe and secure. Our controls are also annually audited by A-LIGN, a nationally recognized cybersecurity and compliance firm, to confirm our SOC 2 accreditation.
            </p>
          </div>

          {/* Penetration testing */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Penetration testing</h3>
            <p className="text-white/80 leading-relaxed">
              We perform vulnerability and automated network and application penetration scans. We also engage qualified external entities to perform independent application-level and infrastructure-level penetration tests. Finally, we work closely with clients who have strict security requirements, welcoming additional testing and verification to ensure our commitment to protecting your data.
            </p>
          </div>

          {/* Physical data centers */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Physical data centers</h3>
            <p className="text-white/80 leading-relaxed">
              Client data is hosted in physical data centers in two locations in the United States. We use multi-vendor diversity to ensure that a single failure does not negatively impact our clients. Access to these physical data centers is strictly controlled and monitored by security staff. Our data center partners are ISO, SOC, PCI, FIPS, and HIPAA certified. Additionally, our data centers operate in environmentally-friendly LEED and Energy STAR certified facilities.
            </p>
          </div>

          {/* Robust data encryption */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Robust data encryption</h3>
            <p className="text-white/80 leading-relaxed">
              We encrypt your data — including patient records, clinical data, and healthcare information — using AES-256-bit data-at-rest encryption and TLS 1.2 SHA-256 data-in-transit protection. The keys for these systems are frequently rotated to comply with industry standard KMS practices and are secured by KMS protections.
            </p>
          </div>

          {/* GDPR and CCPA compliance */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">GDPR and CCPA compliance</h3>
            <p className="text-white/80 leading-relaxed">
              We maintain compliance with GDPR, CCPA, and other applicable privacy regulations. We have built and continue to build our products with the principles of data minimization and client control and privacy in mind. For more information, please see our Privacy Policy.
            </p>
          </div>

          {/* GDPR representative */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">GDPR representative</h3>
            <p className="text-white/80 leading-relaxed">
              We have engaged EDPO as our GDPR Representative in the EU and the UK. We partner with EDPO, based in Brussels, Belgium, to ensure full compliance with the various individual rights of EU data subjects under GDPR, including the "right to be forgotten." For more information, please see our Privacy Policy.
            </p>
          </div>

          {/* Security whitepaper and report request */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Security whitepaper and report request</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
              >
                <FileText className="w-4 h-4" />
                Security whitepaper
              </motion.button>
              <motion.button
                className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
              >
                <ExternalLink className="w-4 h-4" />
                Request SOC II Type II report
              </motion.button>
              <motion.button
                className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
              >
                <ExternalLink className="w-4 h-4" />
                Request latest penetration test
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 