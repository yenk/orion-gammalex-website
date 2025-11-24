"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export default function AdvisoryCouncilContent() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const advisors = [
    {
      name: "Bruce Cahan",
      title: "Co-Founder/CEO, Urban Logic",
      expertise: "Business Transformation, Financial Technology & Emergency Response",
      bio: "After 38 years transforming organizations through data science and financial technology, Bruce brings a unique perspective on building resilient systems that respond to complex challenges. His experience aligning federal, state, and private information resources during critical moments—including post-9/11 emergency response—informs how GammaLex can structure data-driven solutions that healthcare organizations can trust when it matters most.",
      image: "/images/impact/icons/bruce.png",
      linkedin: "https://www.linkedin.com/in/brucecahan/",
    },
    {
      name: "Simon J. Mawer",
      title: "Healthcare Strategist, Keck Medicine of USC",
      expertise: "Risk Management, Innovation & Human-Centered Design",
      bio: "Simon works at the intersection of complexity, ethics, and execution—helping healthcare institutions navigate uncertainty while designing for resilience. His approach to risk management and human-centered design, shaped through roles at Stanford Medicine, Keck Medicine of USC, and healthtech innovation programs, ensures GammaLex's AI solutions address real clinical needs while maintaining the highest ethical standards.",
      image: "/images/impact/icons/simon.png",
      linkedin: "https://www.linkedin.com/in/sjmawer/",
    },
    {
      name: "Eric A. Klein, MD",
      title: "Distinguished Scientist, GRAIL; Urologic Oncologist",
      expertise: "Prostate cancer, multicancer early detection, and clinical research leadership",
      bio: "As former Chair of Cleveland Clinic's Glickman Urological Institute and now Distinguished Scientist at GRAIL, Eric has spent his career translating clinical research into practice that improves patient outcomes. His hundreds of published papers and leadership in early detection technologies provide GammaLex with the clinical rigor needed to ensure our AI insights meet the standards healthcare providers demand.",
      image: "/images/advisory/eric.png",
      linkedin: "https://www.linkedin.com/in/eric-a-klein-md-51695828/",
    },
    {
      name: "Michael \"Mick\" Murray",
      title: "Senior Business Advisor, Blue Shield of California",
      expertise: "Healthcare finance, strategy, and operational excellence",
      bio: "Mick's journey from CFO at Blue Shield of California to senior finance roles at Yahoo and Sun Microsystems gives him a rare perspective on scaling healthcare and technology organizations. His disciplined approach to aligning financial strategy with mission helps GammaLex build sustainable growth models that invest in innovation while maintaining fiscal responsibility.",
      image: "/images/advisory/mick.png",
      linkedin: "https://www.linkedin.com/in/michael-a-mick-murray-324b29/",
    },
    {
      name: "Steve Rosewarne",
      title: "Product & Strategy Advisor, GammaLex AI",
      expertise: "Product leadership, SaaS platforms, and healthcare & consumer innovation",
      bio: "Steve co-founded and scaled Customer Mobile to $10M ARR, deploying it across 15,000+ retail locations globally. That experience—combined with leading product strategy for mHealth platforms and medical printing solutions—gives him a clear view of what it takes to build products healthcare organizations actually adopt and scale.",
      image: "/images/advisory/steve.png",
      linkedin: "https://www.linkedin.com/in/rosewarne/",
    },
    {
      name: "Jim Bohnsack",
      title: "Chief Strategy Officer, Aspirion",
      expertise: "Healthcare growth strategy, revenue cycle, and data-driven operations",
      bio: "Jim has spent two decades helping healthcare organizations grow by turning data into action. As Chief Strategy Officer at Aspirion, he focuses on improving financial performance and patient outcomes across complex revenue cycle environments—exactly the kind of challenge GammaLex's AI solutions are designed to address.",
      image: "/images/advisory/jim.png",
      linkedin: "https://www.linkedin.com/in/jimbohnsack/",
    },
    {
      name: "Daniela Steinsapir",
      title: "Senior Manager, Experience Architecture, Autodesk",
      expertise: "Experience Design, Product Strategy & User-Centered Innovation",
      bio: "Daniela's work leading Experience Architecture at Autodesk and Experience Design at Verily centers on one principle: complex technology should feel simple. Her expertise in scaling digital ecosystems and creating intuitive interfaces ensures GammaLex's AI solutions are accessible to healthcare professionals who need clarity, not complexity.",
      image: "/images/advisory/daniela.png",
      linkedin: "https://www.linkedin.com/in/daniela-steinsapir-b5b9258/",
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

      {/* Horizontal Scrolling Advisors Section */}
      <section className="py-20 bg-gray-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-inter font-normal text-gray-900 mb-8">
              Meet Our Advisors
            </h2>
          </motion.div>

          {/* Horizontal Scrolling Container */}
          <div className="overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-8 min-w-max">
              {advisors.map((advisor, index) => (
                <div
                  key={index}
                  className="relative w-80 flex-shrink-0"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Flip Card Container */}
                  <div className="relative w-full h-[420px] perspective-1000">
                    <div
                      className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
                        hoveredIndex === index ? 'rotate-y-180' : ''
                      }`}
                    >
                      {/* Front of Card - Photo */}
                      <div className="absolute inset-0 w-full h-full backface-hidden">
                        <div className="w-full h-full bg-stone-50 rounded-lg overflow-hidden flex flex-col">
                          {/* Photo Section - Takes up most of the card */}
                          <div className="w-full h-[70%] bg-gray-200 overflow-hidden">
                            {advisor.image ? (
                              <Image
                                src={advisor.image}
                                alt={advisor.name}
                                width={320}
                                height={320}
                                className={`w-full h-full object-cover ${
                                  advisor.name === "Jim Bohnsack"
                                    ? "object-top"
                                    : ""
                                }`}
                              />
                            ) : (
                              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-500 text-4xl font-semibold">
                                  {advisor.name.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                            )}
                          </div>
                          {/* Name and Title Section - Smaller bottom section */}
                          <div className="h-[30%] p-6 bg-stone-50 relative flex items-center">
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                {advisor.name}
                              </h3>
                              <p className="text-base text-gray-700 font-normal">
                                {advisor.title}
                              </p>
                            </div>
                            {advisor.linkedin && (
                              <a
                                href={advisor.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                                aria-label="LinkedIn profile"
                              >
                                <ArrowUpRight className="w-5 h-5" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Back of Card - Bio */}
                      <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                        <div className="w-full h-full bg-stone-50 rounded-lg p-6 overflow-y-auto flex flex-col">
                          {/* Bio Text */}
                          <div className="flex-1 mb-6">
                            <div className="text-sm text-gray-900 leading-relaxed font-normal text-left">
                              {advisor.bio.split(/(?<=\.)\s+(?=[A-Z])/).map((paragraph, idx) => (
                                <p key={idx} className="mb-4 last:mb-0">
                                  {paragraph.trim()}
                                </p>
                              ))}
                            </div>
                          </div>
                          
                          {/* LinkedIn Link */}
                          {advisor.linkedin && (
                            <div className="mt-auto">
                              <a
                                href={advisor.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-gray-900 hover:text-gray-700 text-sm font-normal transition-colors duration-200 border-b border-gray-300 hover:border-gray-600"
                              >
                                Learn More →
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 