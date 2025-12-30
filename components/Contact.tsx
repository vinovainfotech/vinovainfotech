"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Rocket, Calendar } from "lucide-react"
import { useRef } from "react"
import { GlassCard, Button3D, AnimatedText, GradientText, InteractiveCard } from "./reactbits"

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <section ref={sectionRef} id="contact" className="relative py-16 sm:py-20 md:py-24 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Modern Blur Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 dark:from-blue-500/10 dark:via-transparent dark:to-green-500/10"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(3,76,128,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.15),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Let's Build{" "}
            <GradientText className="text-primary dark:text-blue-400" gradient="from-primary via-blue-500 to-primary">
              Something Great
            </GradientText>
          </h2>
          <AnimatedText>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ready to build your MVP or production ERP system? Book a free consultation call and let's discuss how we can transform your vision into reality.
            </p>
          </AnimatedText>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12" style={{ perspective: "1200px" }}>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
            style={{ transformStyle: "preserve-3d" }}
          >
            <InteractiveCard hoverScale={1.01} tiltIntensity={2}>
              <Card className="bg-primary dark:bg-blue-600 text-white border-0 shadow-xl relative overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                <CardHeader className="relative z-10 p-4 sm:p-6">
                  <CardTitle className="text-2xl sm:text-3xl mb-2 flex items-center gap-2">
                    <motion.div
                      whileHover={{ rotateY: 360 }}
                      transition={{ duration: 0.6 }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <Calendar className="h-6 w-6 sm:h-8 sm:w-8" />
                    </motion.div>
                    Book Free Consultation
                  </CardTitle>
                  <p className="text-sm sm:text-base text-white/90">
                    Schedule a free tech consultation call to discuss your MVP or ERP project. Let's explore how we can help your business grow.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6 relative z-10 p-4 sm:p-6 pt-0">
                  {[
                    { icon: MapPin, title: "Location", content: "2nd Floor, Seawood Park, Above Shangun Dining Hall\nNear Old Gangapur Naka, Gangapur Road, Nashik-422005" },
                    { icon: Phone, title: "Phone", content: "+91 8956566675" },
                    { icon: Mail, title: "Email", content: "contact@vinovainfotech.com" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ x: 5, rotateY: 5 }}
                      className="flex items-start gap-3 sm:gap-4 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg p-3"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div className="p-2 sm:p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                        <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-sm sm:text-base">{item.title}</h4>
                        <p className="text-white/90 text-xs sm:text-sm whitespace-pre-line">{item.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </InteractiveCard>

            <GlassCard blur="xl" className="shadow-lg">
              <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Why Book a Consultation?
                </h3>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  {[
                    "Free consultation and project estimate",
                    "Expert advice on MVP vs ERP solutions",
                    "Transparent pricing with no hidden fees",
                    "Production-grade solutions from day one",
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-primary dark:text-blue-400 font-bold">✓</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </GlassCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <GlassCard blur="xl" className="shadow-xl">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl text-gray-900 dark:text-white">Schedule Your Consultation</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <form className="space-y-4 sm:space-y-6">
                  {[
                    { id: "name", type: "text", placeholder: "John Doe", label: "Your Name", required: true },
                    { id: "email", type: "email", placeholder: "john@example.com", label: "Email Address", required: true },
                    { id: "phone", type: "tel", placeholder: "+91 1234567890", label: "Phone Number", required: false },
                  ].map((field, index) => (
                    <motion.div
                      key={field.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <label htmlFor={field.id} className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                        {field.label}
                      </label>
                      <Input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                        className="h-10 sm:h-12 dark:bg-gray-900/50 dark:border-gray-700/50 backdrop-blur-sm text-sm sm:text-base"
                      />
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="space-y-2"
                  >
                    <label htmlFor="project" className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                      Project Type
                    </label>
                    <select
                      id="project"
                      className="flex h-10 sm:h-12 w-full rounded-md border border-input bg-background dark:bg-gray-900/50 dark:border-gray-700/50 backdrop-blur-sm px-3 py-2 text-sm sm:text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option>MVP Development</option>
                      <option>ERP Software</option>
                      <option>Web Development</option>
                      <option>App Development</option>
                      <option>UI/UX Design</option>
                      <option>Other</option>
                    </select>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="space-y-2"
                  >
                    <label htmlFor="message" className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                      Project Details
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your MVP or ERP project..."
                      rows={5}
                      required
                      className="resize-none dark:bg-gray-900/50 dark:border-gray-700/50 backdrop-blur-sm text-sm sm:text-base"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <Button3D
                      variant="primary"
                      size="lg"
                      onClick={(e) => {
                        e?.preventDefault()
                        // Handle form submission
                      }}
                      className="w-full"
                    >
                      <Calendar className="h-4 w-4 sm:h-5 sm:w-5 inline mr-2" />
                      Book Free Consultation
                      <motion.span
                        whileHover={{ x: 5, rotateY: 15 }}
                        transition={{ duration: 0.3 }}
                        style={{ display: "inline-block", transformStyle: "preserve-3d" }}
                        className="ml-2"
                      >
                        <Send className="h-4 w-4 sm:h-5 sm:w-5 inline" />
                      </motion.span>
                    </Button3D>
                  </motion.div>
                </form>
              </CardContent>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
