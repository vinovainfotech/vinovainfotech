"use client"

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket, Code2, Sparkles, Calendar } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"
import { 
  AnimatedText, 
  TextReveal, 
  GradientText,
  AnimatedBackground,
  GridBackground,
  Button3D 
} from "./reactbits"

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5])
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 5])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    mouseX.set((x - centerX) / centerX)
    mouseY.set((y - centerY) / centerY)
  }

  const rotateXSpring = useSpring(useTransform(mouseY, [-1, 1], [15, -15]), { stiffness: 150, damping: 15 })
  const rotateYSpring = useSpring(useTransform(mouseX, [-1, 1], [-15, 15]), { stiffness: 150, damping: 15 })

  return (
    <AnimatedBackground>
      <section
        ref={ref}
        id="home"
        className="relative min-h-screen flex items-center pt-20 sm:pt-24 pb-12 sm:pb-16 bg-white dark:bg-gray-900 overflow-hidden"
      >
        <GridBackground size="20px sm:30px md:40px">
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left Content */}
              <motion.div
                style={{ y, opacity, transformStyle: "preserve-3d" }}
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 sm:space-y-8"
              >
                <AnimatedText delay={0.2}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-full text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
                    style={{ transformStyle: "preserve-3d" }}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                  >
                    <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Comprehensive Digital Services • MVP & ERP Solutions</span>
                    <span className="sm:hidden">Digital Services</span>
                  </motion.div>
                </AnimatedText>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                  <TextReveal 
                    text="Comprehensive Digital Services & Solutions"
                    className="block"
                    delay={0.3}
                  />
                </h1>

                <AnimatedText delay={0.4}>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                    From MVP development to enterprise ERP systems, we offer cutting-edge digital services to help your business thrive in the digital age.
                  </p>
                </AnimatedText>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="flex flex-wrap gap-3 sm:gap-4"
                >
                  <Button3D
                    variant="primary"
                    size="lg"
                    onClick={() => {
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="group relative"
                  >
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5 inline mr-2" />
                    Schedule a Consultation
                    <motion.span
                      whileHover={{ x: 5, rotateY: 15 }}
                      transition={{ duration: 0.3 }}
                      style={{ display: "inline-block", transformStyle: "preserve-3d" }}
                      className="ml-2"
                    >
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 inline" />
                    </motion.span>
                  </Button3D>
                  <Button3D
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    View Our Services
                  </Button3D>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8"
                >
                  {[
                    { value: "500+", label: "Projects Delivered", icon: Rocket },
                    { value: "99%", label: "Uptime SLA", icon: Code2 },
                    { value: "50+", label: "Team Members", icon: Sparkles },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      whileHover={{ rotateY: 10, scale: 1.05, z: 20 }}
                      className="text-center p-3 sm:p-4 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <stat.icon className="h-4 w-4 sm:h-6 sm:w-6 text-primary dark:text-blue-400 mx-auto mb-1 sm:mb-2" />
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary dark:text-blue-400">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Image with Interactive 3D */}
              <motion.div
                initial={{ opacity: 0, x: 30, rotateY: 20 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ 
                  y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]),
                  transformStyle: "preserve-3d"
                }}
                className="relative hidden lg:block"
              >
                <motion.div
                  ref={cardRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={() => {
                    mouseX.set(0)
                    mouseY.set(0)
                  }}
                  style={{
                    rotateX: rotateXSpring,
                    rotateY: rotateYSpring,
                    transformStyle: "preserve-3d"
                  }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50 dark:border-gray-800/50 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 dark:from-blue-500/20 dark:via-transparent dark:to-green-500/20 rounded-2xl" />
                  <Image
                    src="/assets/Webinar-rafiki.png"
                    alt="Software Development"
                    width={600}
                    height={600}
                    className="w-full h-auto relative z-10"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl" />
                </motion.div>
              </motion.div>

            </div>
          </div>
        </GridBackground>
      </section>
    </AnimatedBackground>
  )
}
