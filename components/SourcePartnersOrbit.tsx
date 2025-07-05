"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MedicalBackgroundPattern } from "@/components/background-elements"

const partners = [
  {
    label: "Centers for Medicare & Medicaid Services",
    icon: (
      <svg viewBox="0 0 160 96" className="w-24 h-16 md:w-32 md:h-20" aria-hidden="true">
        <rect x="2" y="2" width="156" height="92" rx="12" fill="#fff" stroke="#153A8C" strokeWidth="4" />
        <text x="10" y="72" fontSize="56" fontFamily="Inter,Arial,sans-serif" fontWeight="bold" fill="#153A8C">CMS</text>
      </svg>
    ),
  },
  {
    label: "World Health Organization ICD-11",
    icon: (
      <svg viewBox="0 0 160 96" className="w-24 h-16 md:w-32 md:h-20" aria-hidden="true">
        <rect x="2" y="2" width="156" height="92" rx="12" fill="#fff" stroke="#0096D6" strokeWidth="4" />
        <g>
          <circle cx="80" cy="48" r="36" stroke="#0096D6" strokeWidth="3" fill="none" />
          <path d="M80 20v56" stroke="#0096D6" strokeWidth="3" />
          <ellipse cx="80" cy="48" rx="10" ry="36" stroke="#0096D6" strokeWidth="3" fill="none" />
          <ellipse cx="80" cy="48" rx="36" ry="10" stroke="#0096D6" strokeWidth="3" fill="none" />
          <circle cx="80" cy="48" r="8" fill="#0096D6" />
        </g>
      </svg>
    ),
  },
  {
    label: "Medical Information Mart for Intensive Care",
    icon: (
      <svg viewBox="0 0 160 96" className="w-24 h-16 md:w-32 md:h-20" aria-hidden="true">
        <rect x="2" y="2" width="156" height="92" rx="12" fill="#fff" stroke="#e5e7eb" strokeWidth="2" />
        <polygon points="142,2 154,22 134,2" fill="#346699" />
        <circle cx="32" cy="32" r="7" fill="#e4572e" />
        <rect x="46" y="26" width="70" height="10" rx="4" fill="#e4572e" />
        <circle cx="32" cy="52" r="7" fill="#4285f4" />
        <rect x="46" y="46" width="70" height="10" rx="4" fill="#4285f4" />
        <circle cx="32" cy="72" r="7" fill="#34a853" />
        <rect x="46" y="66" width="70" height="10" rx="4" fill="#34a853" />
        <circle cx="32" cy="92" r="7" fill="#fbbc04" />
        <rect x="46" y="86" width="70" height="10" rx="4" fill="#fbbc04" />
      </svg>
    ),
  },
  {
    label: "CourtListener by Free.Law",
    icon: (
      <svg viewBox="0 0 160 96" className="w-24 h-16 md:w-32 md:h-20" aria-hidden="true">
        <rect x="2" y="2" width="156" height="92" rx="12" fill="#fff" stroke="#888" strokeWidth="4" />
        <g stroke="#888" strokeWidth="7" fill="none">
          <line x1="40" y1="90" x2="40" y2="40" />
          <line x1="120" y1="90" x2="120" y2="40" />
          <line x1="40" y1="40" x2="16" y2="40" />
          <line x1="120" y1="40" x2="144" y2="40" />
          <ellipse cx="40" cy="90" rx="20" ry="7" fill="#888" />
          <ellipse cx="120" cy="90" rx="20" ry="7" fill="#888" />
        </g>
        <g stroke="#B33" strokeWidth="9" fill="none">
          <line x1="80" y1="20" x2="80" y2="90" />
          <circle cx="80" cy="20" r="9" fill="#B33" />
        </g>
        <g stroke="#888" strokeWidth="7" fill="none">
          <circle cx="40" cy="40" r="9" fill="#fff" />
          <circle cx="120" cy="40" r="9" fill="#fff" />
          <circle cx="80" cy="20" r="9" fill="#fff" />
        </g>
      </svg>
    ),
  },
  {
    label: "CaseLaw Access Project By Harvard Law School",
    icon: (
      <svg viewBox="0 0 160 96" className="w-24 h-16 md:w-32 md:h-20" aria-hidden="true">
        <rect x="2" y="2" width="156" height="92" rx="12" fill="#0096FF" stroke="#0096FF" strokeWidth="4" />
        <rect x="20" y="16" width="12" height="40" fill="#222" />
        <rect x="36" y="16" width="12" height="40" fill="#222" />
        <rect x="52" y="16" width="12" height="40" fill="#222" />
        <rect x="68" y="16" width="12" height="40" fill="#222" />
        <rect x="84" y="16" width="12" height="40" fill="#222" />
        <rect x="20" y="60" width="12" height="12" fill="#222" />
        <rect x="36" y="60" width="12" height="12" fill="#222" />
        <rect x="52" y="60" width="56" height="12" fill="#222" />
        <rect x="20" y="80" width="88" height="12" fill="#222" />
      </svg>
    ),
  },
  {
    label: "National Library of Medicine",
    icon: (
      <svg viewBox="0 0 160 96" className="w-24 h-16 md:w-32 md:h-20" aria-hidden="true">
        <rect x="2" y="2" width="156" height="92" rx="12" fill="#fff" stroke="#2A5D8F" strokeWidth="4" />
        <polygon points="120,2 156,48 120,94" fill="#2A5D8F" />
        <text x="24" y="68" fontSize="60" fontFamily="Inter,Arial,sans-serif" fontWeight="bold" fill="#2A5D8F">NIH</text>
        <polygon points="130,18 148,48 130,78" fill="#fff" />
      </svg>
    ),
  },
  {
    label: "Biomedical and Clinical Research by i2b2",
    icon: (
      <svg viewBox="0 0 160 96" className="w-24 h-16 md:w-32 md:h-20" aria-hidden="true">
        <g>
          <rect x="16" y="16" width="16" height="16" fill="#fff" />
          <rect x="36" y="16" width="16" height="16" fill="#fff" />
          <rect x="56" y="16" width="16" height="16" fill="#fff" />
          <rect x="16" y="36" width="16" height="16" fill="#fff" />
          <rect x="36" y="36" width="16" height="16" fill="#fff" />
          <rect x="56" y="36" width="16" height="16" fill="#fff" />
          <rect x="16" y="56" width="16" height="16" fill="#fff" />
          <rect x="36" y="56" width="16" height="16" fill="#fff" />
          <rect x="56" y="56" width="16" height="16" fill="#fff" />
        </g>
        <g>
          <polygon points="100,28 112,20 124,28 124,44 112,52 100,44" fill="#2C2C5A" />
          <polygon points="112,52 124,44 136,52 136,68 124,76 112,68" fill="#2C2C5A" />
          <polygon points="124,28 136,20 148,28 148,44 136,52 124,44" fill="#BFC3C7" />
        </g>
      </svg>
    ),
  },
]

const orbitPositions = [
  { angle: 0 },
  { angle: 360 / 7 },
  { angle: 2 * 360 / 7 },
  { angle: 3 * 360 / 7 },
  { angle: 4 * 360 / 7 },
  { angle: 5 * 360 / 7 },
  { angle: 6 * 360 / 7 },
]

export default function SourcePartnersOrbit() {
  const [mode, setMode] = useState<'orbit' | 'grid'>("orbit")
  const radius = 160
  const center = 0

  return (
    <div className="relative w-full min-h-[420px] flex flex-col items-center justify-center bg-black overflow-hidden py-12">
      <MedicalBackgroundPattern />
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Glowing particles background (optional: add more for stars) */}
        {Array.from({ length: 32 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gammalex-orange/40 blur-md"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: [0, Math.random() * 20 - 10, 0],
              x: [0, Math.random() * 20 - 10, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>
      <div className="mb-6 z-10">
        <Button variant="secondary" onClick={() => setMode(mode === 'orbit' ? 'grid' : 'orbit')}>
          {mode === 'orbit' ? 'Grid Mode' : 'Orbit Mode'}
        </Button>
      </div>
      <div className="relative w-full flex items-center justify-center z-10">
        {mode === 'orbit' ? (
          <motion.div
            className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] mx-auto"
            animate={{ x: [0, 40, 0, -40, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Center subtle glow */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-sage-400/20 blur-2xl z-0"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            {partners.map((partner, i) => {
              const angle = (orbitPositions[i].angle + Date.now() / 4000 * 360) % 360
              const rad = (angle * Math.PI) / 180
              const x = Math.cos(rad) * radius + 200
              const y = Math.sin(rad) * radius + 320
              return (
                <motion.div
                  key={partner.label}
                  className="absolute flex flex-col items-center group"
                  style={{ left: x, top: y, width: 120 }}
                  whileHover={{ scale: 1.13, filter: "drop-shadow(0 0 16px #FF6B35)" }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                >
                  <span className="block mb-2 transition-all">
                    {partner.icon}
                  </span>
                  <span className="text-xs md:text-sm text-white text-center font-inter max-w-[120px] drop-shadow-md">
                    {partner.label}
                  </span>
                </motion.div>
              )
            })}
          </motion.div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-3xl mx-auto">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.label}
                className="flex flex-col items-center group"
                whileHover={{ scale: 1.13, filter: "drop-shadow(0 0 16px #FF6B35)" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                <span className="block mb-2 transition-all">
                  {partner.icon}
                </span>
                <span className="text-xs md:text-sm text-white text-center font-inter max-w-[120px] drop-shadow-md">
                  {partner.label}
                </span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 