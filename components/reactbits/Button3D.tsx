"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface Button3DProps {
  children: ReactNode
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
}

export function Button3D({ 
  children, 
  onClick,
  className = "",
  variant = "primary",
  size = "md"
}: Button3DProps) {
  const variantClasses = {
    primary: "bg-primary hover:bg-primary/90 text-white",
    secondary: "bg-secondary hover:bg-secondary/90 text-white",
    outline: "border-2 border-gray-300 dark:border-gray-700 bg-transparent hover:bg-white/10 dark:hover:bg-gray-800/10"
  }[variant]

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }[size]

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      whileTap={{ scale: 0.95 }}
      className={`${variantClasses} ${sizeClasses} rounded-lg font-semibold transition-all duration-300 relative overflow-hidden group ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-white/20"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.5 }}
      />
    </motion.button>
  )
}

