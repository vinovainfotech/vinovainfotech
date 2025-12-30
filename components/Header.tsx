"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
    setIsScrolled(latest > 50)
  })

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#why-us", label: "Why Us" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-2 sm:py-3"
          : "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm py-3 sm:py-4"
      }`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/vinova_logo_final_0.png"
                alt="Vinova Infotech"
                width={140}
                height={48}
                className="h-8 sm:h-10 md:h-12 w-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2, rotateX: -5 }}
                className="text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 font-medium transition-colors relative"
                style={{ transformStyle: "preserve-3d" }}
              >
                {link.label}
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary dark:bg-blue-400"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
            <ThemeToggle />
          </div>

          <div className="hidden md:block">
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white text-sm lg:text-base px-4 lg:px-6"
              >
                <a href="#contact">Get Started</a>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 text-gray-700 dark:text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, rotateX: -90 }}
              animate={{ opacity: 1, height: "auto", rotateX: 0 }}
              exit={{ opacity: 0, height: 0, rotateX: -90 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-800 overflow-hidden"
              style={{ transformStyle: "preserve-3d", transformOrigin: "top" }}
            >
              <div className="flex flex-col gap-3 sm:gap-4 pt-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="text-base sm:text-lg text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 font-medium transition-colors py-2"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <div className="flex items-center justify-between pt-2">
                  <ThemeToggle />
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-white text-sm sm:text-base px-4 sm:px-6"
                  >
                    <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                      Get Started
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
