"use client"

import { motion } from "framer-motion"

export function MedicalBackgroundPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Stethoscope SVG */}
      <motion.svg
        className="absolute top-20 right-10 w-64 h-64 text-olive-200 opacity-10"
        initial={{ opacity: 0, rotate: -15 }}
        animate={{ opacity: 0.1, rotate: 0 }}
        transition={{ duration: 2, delay: 1 }}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2L7.5 3.5L6 2v20l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5zM19 19H8V5h11v14z" />
        <circle cx="12" cy="8" r="2" />
        <path d="M12 10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
      </motion.svg>

      {/* Medical Chart Lines */}
      <motion.div
        className="absolute top-1/3 left-10 w-48 h-32"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.08, x: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <svg className="w-full h-full text-charcoal-300" viewBox="0 0 200 100" fill="none">
          <path
            d="M10 80 L30 60 L50 70 L70 40 L90 50 L110 30 L130 45 L150 25 L170 35 L190 20"
            stroke="currentColor"
            strokeWidth="2"
            className="opacity-60"
          />
          <path
            d="M10 90 L30 85 L50 75 L70 80 L90 70 L110 65 L130 60 L150 55 L170 50 L190 45"
            stroke="currentColor"
            strokeWidth="1"
            className="opacity-40"
          />
        </svg>
      </motion.div>

      {/* Heartbeat Line */}
      <motion.div
        className="absolute bottom-20 right-20 w-56 h-16"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.06, scale: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
      >
        <svg className="w-full h-full text-olive-300" viewBox="0 0 200 50" fill="none">
          <path
            d="M0 25 L20 25 L25 10 L30 40 L35 25 L40 25 L45 15 L50 35 L55 25 L200 25"
            stroke="currentColor"
            strokeWidth="2"
            className="opacity-80"
          />
        </svg>
      </motion.div>
    </div>
  )
}

export function LegalBackgroundPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Scales of Justice */}
      <motion.svg
        className="absolute top-32 left-16 w-48 h-48 text-charcoal-200 opacity-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.08, y: 0 }}
        transition={{ duration: 2, delay: 0.8 }}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </motion.svg>

      {/* Document Stack */}
      <motion.div
        className="absolute bottom-32 left-12 w-32 h-40"
        initial={{ opacity: 0, rotate: 5 }}
        animate={{ opacity: 0.06, rotate: 0 }}
        transition={{ duration: 2, delay: 1.2 }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-cream-300 rounded-lg transform rotate-3 opacity-60"></div>
          <div className="absolute inset-0 bg-cream-300 rounded-lg transform rotate-1 opacity-70"></div>
          <div className="absolute inset-0 bg-cream-300 rounded-lg opacity-80"></div>
        </div>
      </motion.div>

      {/* Gavel */}
      <motion.svg
        className="absolute top-1/2 right-24 w-40 h-40 text-copper-200 opacity-6"
        initial={{ opacity: 0, rotate: 45 }}
        animate={{ opacity: 0.06, rotate: 30 }}
        transition={{ duration: 2, delay: 1.8 }}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" />
      </motion.svg>
    </div>
  )
}

export function DataVisualizationPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Neural Network Nodes */}
      <motion.div
        className="absolute top-20 left-1/4 w-64 h-64"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.04 }}
        transition={{ duration: 3, delay: 2 }}
      >
        <svg className="w-full h-full text-olive-400" viewBox="0 0 200 200" fill="none">
          {/* Nodes */}
          <circle cx="50" cy="50" r="4" fill="currentColor" className="opacity-60" />
          <circle cx="150" cy="50" r="4" fill="currentColor" className="opacity-60" />
          <circle cx="100" cy="100" r="4" fill="currentColor" className="opacity-60" />
          <circle cx="50" cy="150" r="4" fill="currentColor" className="opacity-60" />
          <circle cx="150" cy="150" r="4" fill="currentColor" className="opacity-60" />

          {/* Connections */}
          <line x1="50" y1="50" x2="100" y2="100" stroke="currentColor" strokeWidth="1" className="opacity-30" />
          <line x1="150" y1="50" x2="100" y2="100" stroke="currentColor" strokeWidth="1" className="opacity-30" />
          <line x1="100" y1="100" x2="50" y2="150" stroke="currentColor" strokeWidth="1" className="opacity-30" />
          <line x1="100" y1="100" x2="150" y2="150" stroke="currentColor" strokeWidth="1" className="opacity-30" />
        </svg>
      </motion.div>

      {/* Data Points */}
      <motion.div
        className="absolute bottom-40 right-16 w-48 h-32"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 2, delay: 2.5 }}
      >
        <svg className="w-full h-full text-copper-300" viewBox="0 0 150 100" fill="none">
          {Array.from({ length: 20 }).map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 150}
              cy={Math.random() * 100}
              r={Math.random() * 3 + 1}
              fill="currentColor"
              className="opacity-40"
            />
          ))}
        </svg>
      </motion.div>
    </div>
  )
}

export function FloatingMedicalIcons() {
  const icons = [
    { icon: "🩺", delay: 0, x: "10%", y: "20%" },
    { icon: "📋", delay: 1, x: "80%", y: "15%" },
    { icon: "⚖️", delay: 2, x: "15%", y: "70%" },
    { icon: "📊", delay: 3, x: "85%", y: "75%" },
    { icon: "🏥", delay: 4, x: "50%", y: "10%" },
    { icon: "📝", delay: 5, x: "90%", y: "45%" },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl opacity-0"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{
            opacity: [0, 0.03, 0.03, 0],
            y: [20, 0, 0, -20],
            scale: [0.8, 1, 1, 0.8],
          }}
          transition={{
            duration: 8,
            delay: item.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 10,
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  )
}
