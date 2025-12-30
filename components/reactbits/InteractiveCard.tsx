"use client"

import { motion } from "framer-motion"
import { ReactNode, useState } from "react"

interface InteractiveCardProps {
  children: ReactNode
  className?: string
  hoverScale?: number
  tiltIntensity?: number
}

export function InteractiveCard({ 
  children, 
  className = "",
  hoverScale = 1.02,
  tiltIntensity = 10
}: InteractiveCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    setMousePosition({
      x: (x - centerX) / centerX,
      y: (y - centerY) / centerY
    })
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
      whileHover={{ scale: hoverScale }}
      style={{
        rotateX: mousePosition.y * -tiltIntensity,
        rotateY: mousePosition.x * tiltIntensity,
        transformStyle: "preserve-3d"
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface GlassCardProps {
  children: ReactNode
  className?: string
  blur?: "sm" | "md" | "xl"
}

export function GlassCard({ 
  children, 
  className = "",
  blur = "xl"
}: GlassCardProps) {
  const blurClass = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    xl: "backdrop-blur-xl"
  }[blur]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`${blurClass} bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 rounded-xl shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  )
}

