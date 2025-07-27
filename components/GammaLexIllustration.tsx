"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface GammaLexIllustrationProps {
  active: number
}

export default function GammaLexIllustration({ active }: GammaLexIllustrationProps) {
  // Placeholder SVGs for each value; swap with Lottie or custom SVG as needed
  if (active === 0) {
    // Democratizing Legal Reasoning
    return (
      <motion.svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <circle cx="110" cy="110" r="100" fill="url(#gammalex1)" />
        <path d="M110 60 L140 160 L80 160 Z" fill="#fff" opacity="0.9" />
        <text x="110" y="120" textAnchor="middle" fontSize="32" fill="#8b5cf6" fontWeight="bold">AI</text>
        <defs>
          <radialGradient id="gammalex1" cx="0.5" cy="0.5" r="0.7">
            <stop offset="0%" stopColor="#28bfa3" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </radialGradient>
        </defs>
      </motion.svg>
    )
  }
  if (active === 1) {
    // Transparent Decision Making
    return (
      <motion.svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <circle cx="110" cy="110" r="100" fill="url(#gammalex2)" />
        <ellipse cx="110" cy="110" rx="60" ry="40" fill="#fff" opacity="0.9" />
        <circle cx="110" cy="110" r="18" fill="#8b5cf6" />
        <circle cx="110" cy="110" r="8" fill="#fff" />
        <defs>
          <radialGradient id="gammalex2" cx="0.5" cy="0.5" r="0.7">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#28bfa3" />
          </radialGradient>
        </defs>
      </motion.svg>
    )
  }
  // Protecting More Care
  return (
    <motion.svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <circle cx="110" cy="110" r="100" fill="url(#gammalex3)" />
      <path d="M110 150 Q130 120 110 100 Q90 120 110 150 Z" fill="#fff" opacity="0.9" />
      <circle cx="110" cy="110" r="18" fill="#28bfa3" />
      <defs>
        <radialGradient id="gammalex3" cx="0.5" cy="0.5" r="0.7">
          <stop offset="0%" stopColor="#f59e42" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </radialGradient>
      </defs>
    </motion.svg>
  )
} 