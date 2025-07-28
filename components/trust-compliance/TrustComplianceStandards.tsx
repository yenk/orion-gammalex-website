"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FileText, ExternalLink } from 'lucide-react'

export default function TrustComplianceStandards() {
  return (
    <section className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 font-inter bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-inter font-normal text-gray-900 mb-8">
              Our privacy philosophy: Data minimization and client control of data
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The two core philosophies of data minimization and client control consistently inform how our team — from engineering to client success — builds our product and handles client data. Unlike many other AI/ML companies, we aim to collect the minimum data required to provide our services (and nothing more). Additionally, we always provide our clients transparency around and control over their data. They choose which healthcare systems and data sources to provide via secure API access, and can turn off API access to any data source at any time. For more information on our privacy program, please see our Privacy Policy.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our security philosophy:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
              <li>Confidentiality</li>
              <li>Integrity</li>
              <li>Availability</li>
            </ul>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Our security program is SOC 2 Type II compliant and aligned to ISO 27000 standards. In addition to maintaining industry-leading, multilayered administrative, physical, and technical safeguards to protect client data, we constantly monitor and improve our application, systems, and processes to meet the growing demands and challenges of an ever-evolving security landscape.
            </p>
          </div>
        </motion.div>

        {/* Certifications Section - Exact Collective[i] Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* SOC 2 Type II */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">SOC 2 Type II certified</h3>
            <p className="text-gray-700 leading-relaxed">
              We have achieved SOC 2, which is reserved for organizations that have demonstrated standard operating procedures for organizational oversight, vendor management, risk management, and regulatory oversight. The American Institute of Certified Public Accountants (AICPA) and Service Organization Controls (SOC) reports give assurance over control environments as they relate to data retrieval, storage, processing, transfer, privacy, and more. Specifically, the SOC 2 reports evidence our achievement of key controls around the security, availability, and confidentiality of client data.
            </p>
            <motion.button
              className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              <FileText className="w-4 h-4" />
              SOC 2 Type II Report - 2024
            </motion.button>
          </div>

          {/* Data Privacy Framework */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Data Privacy Framework Certified</h3>
            <p className="text-gray-700 leading-relaxed">
              We are proudly registered with the EU-U.S. Data Privacy Framework, the U.K. Extension to the EU-U.S. Data Privacy Framework, and the Swiss-U.S. Data Privacy Framework. The EU-U.S. DPF, UK Extension to the EU-U.S. DPF, and Swiss-U.S. DPF were respectively developed by the U.S. Department of Commerce and the European Commission, U.K. Government, and Swiss Federal Administration to provide U.S. organizations with reliable mechanisms for personal data transfers to the United States from the European Union, the United Kingdom, and Switzerland while ensuring data protection that is consistent with EU, U.K., and Swiss law.
            </p>
            <motion.button
              className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              <ExternalLink className="w-4 h-4" />
              Data Privacy Framework Certificate
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 