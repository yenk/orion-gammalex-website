"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { JoinWaitlistModal } from "@/components/JoinWaitlistModal"
import { useEffect, useRef, useState } from "react"
import React from "react"
import HeroDataSources from './HeroDataSources'

/**
 * CopilotHero - Homepage hero section for GammaLex AI Copilot for Medical Pre-Auth and Denial Risk.
 * Displays main heading, subheading, and CTA with subtle motion.
 */

const headingLines = [
  [
    { word: "The", orange: false },
    { word: "AI", orange: true },
    { word: "Engine", orange: true },
    { word: "for", orange: false },
    { word: "Faster", orange: true },
  ],
  [
    { word: "Pre-Auths", orange: true },
    { word: "and", orange: false },
    { word: "Smarter", orange: false },
  ],
  [
    { word: "Compliance", orange: true },
  ],
];

const subheadingLines = [
  ["Fine‑tuned", "on", "policy,", "powered", "by", "open", "sources,"],
  ["and", "built", "to", "accelerate", "care", "with", "legal", "confidence."],
];

export function CopilotHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [skipAnimation, setSkipAnimation] = useState(false);
  const [dotRadii, setDotRadii] = useState<number[][] | null>(null);
  const [innerDotParams, setInnerDotParams] = useState<{ r: number; duration: number }[]>([]);
  const [hasMounted, setHasMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // SVG animation constants
  const SVG_SIZE = 1400;
  const CENTER = 700;
  const MAIN_RADIUS = 700;

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    function skip() { setSkipAnimation(true); }
    window.addEventListener('scroll', skip, { passive: true });
    window.addEventListener('keydown', skip, { passive: true });
    window.addEventListener('touchstart', skip, { passive: true });
    return () => {
      window.removeEventListener('scroll', skip);
      window.removeEventListener('keydown', skip);
      window.removeEventListener('touchstart', skip);
    };
  }, []);

  // Precompute random radii for dots on client only
  useEffect(() => {
    setHasMounted(true);
    const rows = 16;
    const cols = 16;
    const radii: number[][] = [];
    for (let i = 0; i < rows; i++) {
      radii[i] = [];
      for (let j = 0; j < cols; j++) {
        radii[i][j] = 1.5 + Math.random() * 2;
      }
    }
    setDotRadii(radii);
  }, []);

  // Store random radius and duration for inner dots to avoid hydration error
  useEffect(() => {
    setInnerDotParams(
      Array.from({ length: 24 }, () => ({
        r: 3 + Math.random() * 2,
        duration: 2.5 + Math.random() * 1,
      }))
    );
  }, []);

  const generateAnimatedDots = () => {
    if (!dotRadii) return null; // Don't render until client
    const dots = [];
    const rows = 12; // reduce from 16 for fewer dots
    const cols = 12;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const delay = (i + j) * 0.012;
        const x = (j / cols) * SVG_SIZE;
        const y = (i / rows) * SVG_SIZE;
        const distanceFromCenter = Math.sqrt(Math.pow(x - CENTER, 2) + Math.pow(y - CENTER, 2));
        const normalizedDistance = Math.min(distanceFromCenter / MAIN_RADIUS, 1);
        const colors = ["#FF6B35", "#FF8A65", "#FFB74D", "#90A4AE", "#546E7A"];
        const colorIndex = Math.floor(normalizedDistance * (colors.length - 1));
        const color = colors[colorIndex];
        dots.push(
          <motion.circle
            key={`${i}-${j}`}
            cx={x}
            cy={y}
            r={dotRadii[i]?.[j] ?? 2}
            fill={color}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.25, 0.1, 0.2, 0.08, 0.18], // much lower opacity
              scale: [0, 1.1, 0.8, 1, 0.9, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              delay,
              repeat: Infinity,
              repeatDelay: 0.5 + Math.random() * 1,
              ease: "easeInOut"
            }}
            style={{
              filter: `drop-shadow(0 0 2px ${color}30)`, // much softer glow
              willChange: 'transform, opacity',
            }}
          />
        );
      }
    }
    return dots;
  };

  // Update generatePulsingRings for larger SVG
  const generatePulsingRings = () => {
    const ringColors = ["#FF6B35", "#FF8A65", "#90A4AE"];
    return Array.from({ length: 3 }, (_, i) => (
      <motion.circle
        key={`ring-${i}`}
        cx={CENTER}
        cy={CENTER}
        r={250 + i * 180}
        fill="none"
        stroke={ringColors[i]}
        strokeWidth="1.5"
        opacity="0.13"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: [0, 1.5, 0],
          opacity: [0, 0.35, 0]
        }}
        transition={{
          duration: 4,
          delay: i * 1.5,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />
    ));
  };

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative w-full bg-black overflow-hidden min-h-screen flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20 px-0"
      style={{ 
        paddingTop: 'max(8vh, 4rem)', 
        paddingBottom: 'max(8vh, 4rem)',
        minHeight: 'calc(100vh - 8rem)' // Account for potential header/footer
      }}
    >
      {/* Animated circle absolutely centered in the hero section, not constraining heading width */}
      {hasMounted && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
          <motion.svg 
            width={SVG_SIZE} 
            height={SVG_SIZE} 
            style={{zIndex: 1}}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          >
            <defs>
              <clipPath id="dotgrid-circle">
                <circle cx={CENTER} cy={CENTER} r={MAIN_RADIUS} />
              </clipPath>
              {/* Radial gradient for depth */}
              <radialGradient id="dotGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FF6B35" stopOpacity="1" />
                <stop offset="100%" stopColor="#90A4AE" stopOpacity="0.3" />
              </radialGradient>
              {/* Glow filter */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Pulsing rings */}
            {generatePulsingRings()}
            
            {/* Main animated dots */}
            <g clipPath="url(#dotgrid-circle)">
              {generateAnimatedDots()}
            </g>
            
            {/* Interactive mouse-following dot */}
            <motion.circle
              cx={mousePosition.x}
              cy={mousePosition.y}
              r={isHovering ? 12 : 0}
              fill="url(#dotGradient)"
              filter="url(#glow)"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ pointerEvents: "none" }}
            />
            
            {/* Rotating outer ring */}
            <motion.circle
              cx={CENTER}
              cy={CENTER}
              r={MAIN_RADIUS - 20}
              fill="none"
              stroke="#90A4AE"
              strokeWidth="2"
              opacity="0.25"
              strokeDasharray="28,14"
              animate={{ strokeDashoffset: [0, -40] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Inner rotating dots */}
            <motion.g
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              {Array.from({ length: 24 }, (_, i) => (
                <motion.circle
                  key={`inner-${i}`}
                  cx={CENTER + Math.cos((i * 15) * Math.PI / 180) * (MAIN_RADIUS - 180)}
                  cy={CENTER + Math.sin((i * 15) * Math.PI / 180) * (MAIN_RADIUS - 180)}
                  r={innerDotParams[i]?.r ?? 4}
                  fill={i % 3 === 0 ? "#FF6B35" : i % 3 === 1 ? "#FF8A65" : "#90A4AE"}
                  animate={{
                    scale: [1, 1.8, 0.7, 1.4, 1],
                    opacity: [0.4, 1, 0.2, 0.9, 0.4],
                  }}
                  transition={{
                    duration: innerDotParams[i]?.duration ?? 3,
                    delay: i * 0.12,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.g>
          </motion.svg>
        </div>
      )}
      {/* Hero section main container */}
      <div className="relative w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 z-10 py-4 sm:py-6 md:py-8">
        {/* Main Hero Heading */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal font-inter leading-[1.1] text-white max-w-6xl mx-auto">
            {headingLines.map((line, i) => (
              <div key={i} className="mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                {line.map((item, j) => (
                  skipAnimation ? (
                    <span
                      key={`${i}-${j}`}
                      className={`inline-block mr-3 sm:mr-4 ${item.orange ? "text-gammalex-orange" : ""}`}
                    >
                      {item.word}
                    </span>
                  ) : (
                    <motion.span
                      key={`${i}-${j}`}
                      className={`inline-block mr-3 sm:mr-4 ${item.orange ? "text-gammalex-orange" : ""}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + (i * 0.3) + j * 0.15, duration: 0.7, ease: "easeOut" }}
                      style={{ willChange: 'transform, opacity' }}
                    >
                      {item.word}
                    </motion.span>
                  )
                ))}
              </div>
            ))}
          </h1>
        </div>

        {/* Subhero Heading */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-inter font-light text-white leading-[1.5] tracking-wide max-w-4xl mx-auto">
            {subheadingLines.map((line, i) => (
              <div key={i} className="mb-1 sm:mb-2 md:mb-3">
                {line.map((word, j) => (
                  <span key={j} className="inline-block mr-2">{word}</span>
                ))}
              </div>
            ))}
          </h2>
        </div>
        
        {/* Hero Data Sources and CTA */}
        <div className="w-full mb-6 sm:mb-8 md:mb-12">
          <HeroDataSources />
        </div>
        
        <div className="flex flex-col gap-4 items-center">
          <a
            href="https://cal.com/yenkha"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-6 py-3 text-base sm:text-xl font-bold rounded-xl w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-gammalex-orange shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            See it in Action
          </a>
        </div>
      </div>
    </section>
  )
} 