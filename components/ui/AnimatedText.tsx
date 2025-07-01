import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type AnimatedTextProps = {
  text: string | string[];
  className?: string;
  delay?: number;
  children?: React.ReactNode;
}

function AnimatedText({ text, className = "", delay = 0, children }: AnimatedTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // Accept string or string[] for lines
  const lines = Array.isArray(text) ? text : text.split(/\n|<br\s*\/?>/i)

  return (
    <div ref={ref} className={className}>
      {lines.map((line, lineIdx) => (
        <div key={lineIdx} className="w-full">
          {line.trim().split(" ").map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-2"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
              transition={{ duration: 0.5, delay: delay + (lineIdx * 0.1) + i * 0.1 }}
            >
              {word}
            </motion.span>
          ))}
        </div>
      ))}
      {children}
    </div>
  )
}

export default AnimatedText 