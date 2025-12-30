"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface AnimatedBackgroundProps {
  children: ReactNode
  className?: string
}

export function AnimatedBackground({ children, className = "" }: AnimatedBackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-primary/20 dark:bg-blue-500/30 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 dark:bg-green-500/30 rounded-full blur-3xl -z-10"
      />
      {children}
    </div>
  )
}

interface GridBackgroundProps {
  children: ReactNode
  className?: string
  size?: string
}

export function GridBackground({ 
  children, 
  className = "",
  size = "40px"
}: GridBackgroundProps) {
  return (
    <div className={`relative ${className}`}>
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] opacity-40 dark:opacity-20 -z-10"
        style={{ backgroundSize: `${size} ${size}` }}
      />
      {children}
    </div>
  )
}

interface BlurBackgroundProps {
  children: ReactNode
  className?: string
  intensity?: "light" | "medium" | "heavy"
}

export function BlurBackground({ 
  children, 
  className = "",
  intensity = "medium"
}: BlurBackgroundProps) {
  const blurClass = {
    light: "backdrop-blur-sm",
    medium: "backdrop-blur-md",
    heavy: "backdrop-blur-xl"
  }[intensity]

  return (
    <div className={`${blurClass} ${className}`}>
      {children}
    </div>
  )
}

