"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
}

export function AnimatedText({ 
  children, 
  className = "", 
  delay = 0,
  duration = 0.6 
}: AnimatedTextProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.span>
  )
}

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
}

export function TextReveal({ text, className = "", delay = 0 }: TextRevealProps) {
  const words = text.split(" ")

  return (
    <span className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.1,
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

interface GradientTextProps {
  children: ReactNode
  className?: string
  gradient?: string
}

export function GradientText({ 
  children, 
  className = "",
  gradient = "from-primary via-secondary to-primary"
}: GradientTextProps) {
  return (
    <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  )
}

