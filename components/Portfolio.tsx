"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Rocket } from "lucide-react"
import { useRef, useState } from "react"
import { InteractiveCard, GlassCard, AnimatedText, GradientText } from "./reactbits"

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Production-grade e-commerce solution with scalable architecture",
    image: "/assets/4421964.jpg",
  },
  {
    title: "Mobile Banking App",
    category: "App Development",
    description: "Enterprise mobile banking application with biometric authentication",
    image: "/assets/1032.jpg",
  },
  {
    title: "Healthcare Dashboard",
    category: "Web Development",
    description: "Real-time patient management system with advanced analytics",
    image: "/assets/image.png",
  },
  {
    title: "Fitness Tracker App",
    category: "App Development",
    description: "Cross-platform fitness app built for scale and performance",
    image: "/assets/Webinar-rafiki.png",
  },
  {
    title: "SaaS Dashboard",
    category: "Web Development",
    description: "Modern admin dashboard with enterprise-grade features",
    image: "/assets/4421964.jpg",
  },
  {
    title: "Food Delivery App",
    category: "App Development",
    description: "Production-ready food ordering platform with real-time tracking",
    image: "/assets/1032.jpg",
  },
]

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section ref={sectionRef} id="portfolio" className="py-16 sm:py-20 md:py-24 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
      {/* Modern Blur Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 dark:from-green-500/10 dark:via-transparent dark:to-blue-500/10"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(16,185,129,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_70%,rgba(34,197,94,0.15),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Our Recent{" "}
            <GradientText className="text-primary dark:text-blue-400" gradient="from-primary via-blue-500 to-primary">
              Work
            </GradientText>
          </h2>
          <AnimatedText>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              See how we've helped businesses build production-grade software solutions
              that scale and perform.
            </p>
          </AnimatedText>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8" style={{ perspective: "1400px" }}>
          {projects.map((project, index) => {
            const cardRef = useRef<HTMLDivElement>(null)
            const { scrollYProgress: cardProgress } = useScroll({
              target: cardRef,
              offset: ["start end", "end start"]
            })

            const cardY = useTransform(cardProgress, [0, 1], [40, -40])
            const cardOpacity = useTransform(cardProgress, [0, 0.5, 1], [0.5, 1, 0.5])
            const cardRotateX = useTransform(cardProgress, [0, 1], [10, -10])

            return (
              <motion.div
                key={project.title}
                ref={cardRef}
                initial={{ opacity: 0, y: 50, rotateX: -20, rotateY: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                style={{ 
                  y: cardY,
                  opacity: cardOpacity,
                  rotateX: cardRotateX,
                  transformStyle: "preserve-3d"
                }}
                whileHover={{ 
                  y: -15,
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                className="h-full"
              >
                <InteractiveCard hoverScale={1.03} tiltIntensity={12}>
                  <GlassCard blur="xl" className="group overflow-hidden relative">
                    {/* Glassmorphism overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent dark:from-gray-700/20 dark:via-transparent dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                    
                    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-100 dark:bg-gray-700">
                      <motion.div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${project.image})`,
                        }}
                        whileHover={{ scale: 1.15, rotateZ: 2 }}
                        transition={{ duration: 0.5 }}
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/60 dark:bg-black/70 backdrop-blur-sm transition-all duration-300 flex items-center justify-center z-10"
                      >
                        <motion.div
                          whileHover={{ rotateY: 360, scale: 1.2 }}
                          transition={{ duration: 0.6 }}
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          <ExternalLink className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                        </motion.div>
                      </motion.div>
                    </div>
                    <CardContent className="p-4 sm:p-6 relative z-10">
                      <div className="text-xs sm:text-sm text-secondary dark:text-green-400 font-semibold mb-1 sm:mb-2 flex items-center gap-2">
                        <Rocket className="h-3 w-3 sm:h-4 sm:w-4" />
                        {project.category}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        {project.description}
                      </p>
                    </CardContent>
                  </GlassCard>
                </InteractiveCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
