"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { JoinWaitlistModal } from "@/components/JoinWaitlistModal"
import { useEffect, useRef, useState } from "react"
import React from "react"

/**
 * CopilotHero - Homepage hero section for GammaLex AI Copilot for Medical Pre-Auth and Denial Risk.
 * Displays main heading, subheading, and CTA with subtle motion.
 */

const headingLines = [
  [
    { word: "Built", orange: false },
    { word: "to", orange: false },
    { word: "Defend", orange: false },
    { word: "What", orange: false },
    { word: "Matters", orange: false },
  ],
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

  // At the top of the return statement, gate all rendering on hasMounted
  if (!hasMounted) return null;

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative w-full overflow-hidden min-h-screen flex flex-col items-center justify-center py-4 sm:py-8 md:py-12 lg:py-16 px-0"
      style={{ 
        paddingTop: 'max(4vh, 2rem)', 
        paddingBottom: 'max(4vh, 2rem)',
        minHeight: 'calc(100vh - 5rem)', // Account for potential header/footer
      }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero-background.png)',
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Futuristic background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-purple-900/30 to-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.15),transparent_70%)] pointer-events-none" />
      {/* Animated circle absolutely centered in the hero section, not constraining heading width */}
      {hasMounted && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-80 sm:opacity-100">
          <motion.svg 
            width={SVG_SIZE} 
            height={SVG_SIZE} 
            className="max-w-[120vw] max-h-[120vh] sm:max-w-none sm:max-h-none"
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
      <div className="relative w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 z-10 py-2 sm:py-4 md:py-6 lg:py-8">
        {/* Main Hero Heading */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 xl:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal font-inter leading-[1.1] text-white max-w-6xl mx-auto px-2 sm:px-0 whitespace-nowrap">
            {headingLines[0].map((item, j) => (
              <motion.span
                key={j}
                className={`inline-block ${j !== headingLines[0].length - 1 ? 'mr-2 sm:mr-3 md:mr-4' : ''} text-white`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: j * 0.2, // Stagger each word by 0.2 seconds
                  ease: "easeOut"
                }}
              >
                {item.word}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Subhero Heading */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-inter font-light text-white leading-[1.4] sm:leading-[1.5] md:leading-[1.6] tracking-wide max-w-4xl mx-auto px-2 sm:px-0">
            <div className="mb-1 sm:mb-2 md:mb-3">
              <span className="inline-block mr-1 sm:mr-2">Reimagining</span>
              <span className="inline-block mr-1 sm:mr-2">how</span>
              <span className="inline-block mr-1 sm:mr-2">healthcare</span>
              <span className="inline-block mr-1 sm:mr-2">is</span>
              <span className="inline-block mr-1 sm:mr-2">protected</span>
              <span className="inline-block mr-1 sm:mr-2">—</span>
              <span className="inline-block mr-1 sm:mr-2">one</span>
              <span className="inline-block mr-1 sm:mr-2">denial</span>
              <span className="inline-block mr-1 sm:mr-2">at</span>
              <span className="inline-block mr-1 sm:mr-2">a</span>
              <span className="inline-block mr-1 sm:mr-2">time.</span>
            </div>
          </h2>
        </div>
        

        
        <div className="flex flex-col gap-4 items-center px-4 sm:px-0 mb-16 sm:mb-20 md:mb-24 lg:mb-32">
          <a
            href="https://cal.com/yenkha"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-gammalex-purple to-gammalex-purple-light text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-xl font-bold rounded-xl w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-gammalex-purple shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 neon-glow hover:neon-glow"
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            See it in Action
          </a>
        </div>

        {/* Three Column Section */}
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
            {/* Column 1: Vertical AI transformation */}
            <motion.div
              className="text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm sm:text-base md:text-lg font-normal text-white mb-4">
                Vertical AI transformation starting with denial prediction
              </h3>
              <a
                href="/problemswesolve"
                className="text-blue-400 underline hover:text-blue-300 transition-colors text-sm"
              >
                AI for denials
              </a>
            </motion.div>

            {/* Column 2: Ethical and compliant transformation */}
            <motion.div
              className="text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm sm:text-base md:text-lg font-normal text-white mb-4">
                Ethical and compliant transformation.
              </h3>
              <a
                href="/ethical-ai"
                className="text-blue-400 underline hover:text-blue-300 transition-colors text-sm"
              >
                How we keep everything secured
              </a>
            </motion.div>

            {/* Column 3: Working together */}
            <motion.div
              className="text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm sm:text-base md:text-lg font-normal text-white mb-4">
                Working together to succeed.
              </h3>
              <a
                href="/application"
                className="text-blue-400 underline hover:text-blue-300 transition-colors text-sm"
              >
                Join our community
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 