"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { JoinWaitlistModal } from "@/components/JoinWaitlistModal"
import { useEffect, useRef, useState } from "react"

/**
 * CopilotHero - Homepage hero section for GammaLex AI Copilot for Medical Pre-Auth and Denial Risk.
 * Displays main heading, subheading, and CTA with subtle motion.
 */

const headingWords = [
  { word: "The", orange: false },
  { word: "AI", orange: true },
  { word: "Copilot", orange: true },
  { word: "for", orange: false },
  { word: "Pre-Auth", orange: true },
  { word: "and", orange: false },
  { word: "Compliance", orange: true },
];

const subheading = "Smarter pre-auth.\nSafer care.\nLegal foresight."

const subheadingWords = subheading.split(/\s+/);

export function CopilotHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const headingLines = [
    [
      { word: "The", orange: false },
      { word: "AI", orange: true },
      { word: "Copilot", orange: true },
    ],
    [
      { word: "for", orange: false },
      { word: "Pre-Auth", orange: true },
      { word: "and", orange: false },
      { word: "Compliance", orange: true },
    ],
  ];
  const subheadingLines = [
    ["Smarter", "pre-auth."],
    ["Safer", "care."],
    ["Legal", "foresight."],
  ];

  // Update all relevant constants for larger circle
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

  // Update generateAnimatedDots for larger SVG
  const generateAnimatedDots = () => {
    const dots = [];
    const rows = 36;
    const cols = 36;
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
            r={1.5 + Math.random() * 2}
            fill={color}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.9, 0.2, 0.9, 0.1, 0.8],
              scale: [0, 1.2, 0.7, 1.1, 0.8, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              delay,
              repeat: Infinity,
              repeatDelay: 0.5 + Math.random() * 1,
              ease: "easeInOut"
            }}
            style={{
              filter: `drop-shadow(0 0 5px ${color}60)`
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
      className="relative w-full bg-black overflow-hidden min-h-[80vh] flex items-center justify-center px-0"
    >
      {/* Animated circle absolutely centered in the hero section, not constraining heading width */}
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
                r={3 + Math.random() * 2}
                fill={i % 3 === 0 ? "#FF6B35" : i % 3 === 1 ? "#FF8A65" : "#90A4AE"}
                animate={{
                  scale: [1, 1.8, 0.7, 1.4, 1],
                  opacity: [0.4, 1, 0.2, 0.9, 0.4],
                }}
                transition={{
                  duration: 2.5 + Math.random() * 1,
                  delay: i * 0.12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.g>
        </motion.svg>
      </div>
      {/* Heading and subheading: classic, unconstrained, centered block */}
      <div className="relative w-full flex flex-col items-center justify-center min-h-[400px] sm:min-h-[600px] py-10 sm:py-16 md:py-28 z-10">
        <h1 className="w-full max-w-screen-xl text-3xl xs:text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-normal text-center mb-6 sm:mb-12 font-inter leading-[1.15] sm:leading-[1.08] text-white break-words mx-auto px-2 sm:px-0">
          {headingLines.map((line, i) => (
            line.map((item, j) => (
              <motion.span
                key={`${i}-${j}`}
                className={item.orange ? "text-gammalex-orange" : ""}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (i * 0.5) + j * 0.25, duration: 0.7, ease: "easeOut" }}
                style={{ display: "inline-block", marginRight: 8 }}
              >
                {item.word + " "}
              </motion.span>
            ))
          ))}
        </h1>
        <h2 className="w-full max-w-xs xs:max-w-md sm:max-w-4xl md:max-w-5xl lg:max-w-6xl text-lg xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-inter text-center mb-6 sm:mb-10 mx-auto text-white leading-snug font-normal px-2 sm:px-0">
          {subheadingLines.map((line, i) => (
            line.map((word, j) => {
              if (word === 'Legal' && i === subheadingLines.length - 1 && j === 0) {
                return <><br key="break-legal" /><motion.span
                  key={`${i}-${j}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + (i * 0.4) + j * 0.18, duration: 0.6, ease: "easeOut" }}
                  style={{ display: "inline-block", marginRight: 6 }}
                >
                  {word + " "}
                </motion.span></>;
              }
              return <motion.span
                key={`${i}-${j}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + (i * 0.4) + j * 0.18, duration: 0.6, ease: "easeOut" }}
                style={{ display: "inline-block", marginRight: 6 }}
              >
                {word + " "}
              </motion.span>;
            })
          ))}
        </h2>
        <div className="flex flex-col gap-4 items-center mt-2">
          <JoinWaitlistModal
            trigger={
              <Button size="lg" className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-6 py-3 text-base sm:text-xl font-bold rounded-xl transition-colors w-fit">
                Launch the Copilot
              </Button>
            }
          />
        </div>
      </div>
    </section>
  )
} 