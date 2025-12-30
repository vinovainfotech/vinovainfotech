"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Rocket, DollarSign, Award, Users, CheckCircle2, Zap } from "lucide-react"
import Image from "next/image"
import { useRef, useState } from "react"
import { InteractiveCard, GlassCard, AnimatedText, GradientText } from "./reactbits"

const benefits = [
  {
    icon: Rocket,
    title: "MVP to Production",
    description: "We specialize in rapid MVP development and scaling to production-grade systems. From concept to enterprise ERP, we've got you covered.",
    color: "text-blue-500",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Solutions",
    description: "Get enterprise-quality software at competitive prices. We optimize our processes to deliver maximum value without compromising on quality.",
    color: "text-green-500",
  },
  {
    icon: Award,
    title: "Production-Grade Quality",
    description: "Every line of code follows industry best practices. We implement robust architecture, comprehensive testing, and security standards that enterprises trust.",
    color: "text-yellow-500",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our team combines years of enterprise experience with cutting-edge skills. We've built solutions for startups to Fortune 500 companies.",
    color: "text-purple-500",
  },
]

const guarantees = [
  "Production-Ready Code",
  "Scalable Architecture",
  "Comprehensive Testing",
  "Ongoing Support & Maintenance",
]

export default function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [imageMousePosition, setImageMousePosition] = useState({ x: 0, y: 0 })
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [30, -30])

  const handleImageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return
    const rect = imageRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    setImageMousePosition({
      x: (x - centerX) / centerX,
      y: (y - centerY) / centerY
    })
  }

  return (
    <section ref={sectionRef} id="why-us" className="relative py-16 sm:py-20 md:py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Modern Blur Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 dark:from-blue-500/10 dark:via-transparent dark:to-green-500/10"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(3,76,128,0.1),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Why Choose{" "}
                <GradientText className="text-primary dark:text-blue-400" gradient="from-primary via-blue-500 to-primary">
                  Vinova Infotech?
                </GradientText>
              </h2>
              <AnimatedText>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6 sm:mb-8">
                  Vinova Infotech is a software development agency built on a simple principle:{" "}
                  <strong className="text-gray-900 dark:text-white">
                    deliver production-grade software that businesses can rely on.
                  </strong>{" "}
                  We don't build prototypes—we build solutions that scale from MVP to enterprise ERP systems.
                </p>
              </AnimatedText>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6" style={{ perspective: "1000px" }}>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20, rotateX: -10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="h-full"
                >
                  <InteractiveCard hoverScale={1.02} tiltIntensity={8}>
                    <GlassCard blur="xl" className="h-full p-4 sm:p-6">
                      <motion.div
                        whileHover={{ rotateY: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`${benefit.color} mb-3 sm:mb-4`}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <benefit.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                      </motion.div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{benefit.description}</p>
                    </GlassCard>
                  </InteractiveCard>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ rotateX: -2, scale: 1.01 }}
              className="bg-primary dark:bg-blue-600 text-white p-6 sm:p-8 rounded-2xl backdrop-blur-sm shadow-xl relative overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 relative z-10">
                <Zap className="h-5 w-5 sm:h-6 sm:w-6" />
                Our Guarantees
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 relative z-10">
                {guarantees.map((guarantee) => (
                  <div key={guarantee} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span>{guarantee}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image with Interactive 3D */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 30, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onMouseMove={handleImageMouseMove}
            onMouseLeave={() => setImageMousePosition({ x: 0, y: 0 })}
            style={{
              rotateX: imageMousePosition.y * -10,
              rotateY: imageMousePosition.x * 10,
              transformStyle: "preserve-3d"
            }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200/50 dark:border-gray-800/50 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 dark:from-blue-500/20 dark:via-transparent dark:to-green-500/20 rounded-2xl" />
              <Image
                src="/assets/image.png"
                alt="Team Collaboration"
                width={600}
                height={600}
                className="w-full h-auto object-cover relative z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
