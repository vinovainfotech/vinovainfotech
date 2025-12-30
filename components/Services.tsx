"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Palette, Cloud, Box, Database, Zap, Layers } from "lucide-react"
import { useRef } from "react"
import { InteractiveCard, GlassCard, AnimatedText, GradientText, Button3D } from "./reactbits"
import { Calendar } from "lucide-react"

const services = [
  {
    icon: Box,
    title: "MVP Development Services",
    subtitle: "Rapid MVP development to validate your business idea",
    description: "Transform your business concept into a production-ready MVP quickly. We help you test, iterate, and scale faster with our rapid development approach.",
    keyFeatures: [
      "Rapid Prototyping & Development",
      "Minimum Viable Product Strategy",
      "User Testing & Validation",
      "Iterative Development Process",
      "Scalable Architecture Planning",
      "Quick Time-to-Market"
    ],
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "PostgreSQL", "AWS"]
  },
  {
    icon: Database,
    title: "ERP Software Development",
    subtitle: "Production-grade enterprise resource planning systems",
    description: "Custom ERP solutions tailored to your business needs. Streamline operations, boost efficiency, and scale your business with our enterprise-grade ERP systems.",
    keyFeatures: [
      "Custom ERP Development",
      "Inventory Management",
      "Financial Management Modules",
      "HR & Payroll Systems",
      "Supply Chain Management",
      "Business Intelligence & Analytics"
    ],
    technologies: ["Node.js", "PostgreSQL", "React", "Python", "Docker", "Kubernetes"]
  },
  {
    icon: Code,
    title: "Web Development Services",
    subtitle: "Custom web applications that drive business growth",
    description: "Production-grade web applications built with modern frameworks. Scalable, secure, and optimized for performance to help your business thrive online.",
    keyFeatures: [
      "Custom Web Application Development",
      "E-commerce Solutions",
      "Progressive Web Apps (PWA)",
      "API Development & Integration",
      "Performance Optimization",
      "SEO-friendly Architecture"
    ],
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "PostgreSQL", "TypeScript"]
  },
  {
    icon: Smartphone,
    title: "Mobile App Development Services",
    subtitle: "Native and cross-platform mobile solutions",
    description: "Build exceptional mobile experiences that engage users and drive business results. From native iOS/Android apps to cross-platform solutions.",
    keyFeatures: [
      "iOS App Development",
      "Android App Development",
      "Cross-platform Development",
      "App Store Optimization",
      "Mobile UI/UX Design",
      "App Maintenance & Support"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS"]
  },
  {
    icon: Palette,
    title: "UI/UX Design Services",
    subtitle: "User-centric design that converts",
    description: "Beautiful, intuitive designs that delight users and drive business results. We create user experiences that convert visitors into customers.",
    keyFeatures: [
      "Responsive Web Design",
      "UI/UX Design",
      "Brand Identity Design",
      "Wireframing & Prototyping",
      "Design Systems",
      "Interactive Design"
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "Webflow", "Framer", "Principle"]
  },
  {
    icon: Cloud,
    title: "Cloud Solutions & DevOps",
    subtitle: "Scalable cloud infrastructure and deployment",
    description: "Ensure your applications are fast, secure, and always available with our cloud solutions and DevOps expertise.",
    keyFeatures: [
      "Cloud Infrastructure Setup",
      "CI/CD Pipeline Development",
      "Container Orchestration",
      "Serverless Architecture",
      "Cloud Migration",
      "24/7 Monitoring & Support"
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitLab CI"]
  },
  {
    icon: Zap,
    title: "Full Stack Development",
    subtitle: "End-to-end development solutions",
    description: "Complete full-stack development services from frontend to backend, ensuring seamless integration and optimal performance.",
    keyFeatures: [
      "Frontend Development",
      "Backend Development",
      "Database Design & Optimization",
      "Cloud Integration",
      "DevOps Implementation",
      "System Architecture"
    ],
    technologies: ["MERN Stack", "MEAN Stack", "Next.js", "PostgreSQL", "MongoDB", "AWS"]
  },
  {
    icon: Layers,
    title: "API Development & Integration",
    subtitle: "Seamless system integration and API solutions",
    description: "Build robust APIs and integrate systems to streamline your business processes and improve operational efficiency.",
    keyFeatures: [
      "RESTful API Development",
      "GraphQL API Development",
      "Third-party Integrations",
      "Microservices Architecture",
      "API Documentation",
      "API Security & Authentication"
    ],
    technologies: ["Node.js", "Express", "GraphQL", "PostgreSQL", "MongoDB", "Redis"]
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section ref={sectionRef} id="services" className="py-16 sm:py-20 md:py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Modern Blur Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 dark:from-blue-500/10 dark:via-transparent dark:to-green-500/10"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(3,76,128,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Comprehensive Digital{" "}
            <GradientText className="text-primary dark:text-blue-400" gradient="from-primary via-blue-500 to-primary">
              Services & Solutions
            </GradientText>
          </h2>
          <AnimatedText>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From MVP development to enterprise ERP systems, we offer cutting-edge digital services to help your business thrive in the digital age.
            </p>
          </AnimatedText>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 sm:mt-8"
          >
            <Button3D
              variant="primary"
              size="lg"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <Calendar className="h-4 w-4 sm:h-5 sm:w-5 inline mr-2" />
              Schedule a Consultation
            </Button3D>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10" style={{ perspective: "1200px" }}>
          {services.map((service, index) => {
            const cardRef = useRef<HTMLDivElement>(null)
            const { scrollYProgress: cardProgress } = useScroll({
              target: cardRef,
              offset: ["start end", "end start"]
            })

            const cardY = useTransform(cardProgress, [0, 1], [30, -30])
            const cardOpacity = useTransform(cardProgress, [0, 0.5, 1], [0.5, 1, 0.5])

            return (
              <motion.div
                key={service.title}
                ref={cardRef}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                style={{ 
                  y: cardY,
                  opacity: cardOpacity,
                  transformStyle: "preserve-3d"
                }}
                className="h-full"
              >
                <InteractiveCard hoverScale={1.02} tiltIntensity={10}>
                  <GlassCard blur="xl" className="h-full p-6 sm:p-8 group relative overflow-hidden">
                    {/* Glassmorphism gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent dark:from-gray-700/30 dark:via-transparent dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <CardHeader className="relative z-10 p-0 mb-4 sm:mb-6">
                      <motion.div
                        whileHover={{ rotateY: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 sm:w-14 sm:h-14 mb-4 flex items-center justify-center rounded-xl bg-primary/10 dark:bg-blue-500/20 backdrop-blur-sm"
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <service.icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary dark:text-blue-400" />
                      </motion.div>
                      <CardTitle className="text-xl sm:text-2xl text-gray-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-base sm:text-lg text-gray-600 dark:text-gray-400 font-medium">
                        {service.subtitle}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10 p-0 space-y-4 sm:space-y-6">
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                        {service.description}
                      </p>
                      
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                          Key Features
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          {service.keyFeatures.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-primary dark:text-blue-400 mt-1">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-primary/10 dark:bg-blue-500/20 text-primary dark:text-blue-400 rounded-md border border-primary/20 dark:border-blue-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
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
