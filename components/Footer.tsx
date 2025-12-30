"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 dark:text-gray-400">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image
                src="/assets/vinova_logo_final_0.png"
                alt="Vinova Infotech"
                width={140}
                height={48}
                className="h-10 sm:h-12 w-auto mb-4 brightness-0 invert dark:invert-0"
              />
            </motion.div>
            <p className="text-sm sm:text-base text-gray-400 dark:text-gray-500 mb-4">
              Crafting innovative digital solutions that transform businesses and create exceptional user experiences. From MVP to enterprise ERP systems.
            </p>
            <div className="flex gap-3 sm:gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={social.icon.name}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, rotateY: 15, z: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gray-800 dark:bg-gray-900 rounded-lg hover:bg-primary dark:hover:bg-blue-600 transition-colors"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white dark:text-gray-200 font-bold text-base sm:text-lg mb-3 sm:mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "MVP Development",
                "ERP Software",
                "Web Development",
                "Mobile App Development",
                "UI/UX Design",
                "Cloud Solutions",
                "Full Stack Development",
                "API Development"
              ].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <a 
                    href="#services" 
                    className="text-sm sm:text-base hover:text-primary dark:hover:text-blue-400 transition-colors inline-block"
                  >
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white dark:text-gray-200 font-bold text-base sm:text-lg mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                { href: "#home", label: "About Us" },
                { href: "#services", label: "Our Services" },
                { href: "#portfolio", label: "Portfolio" },
                { href: "#why-us", label: "Why Us" },
                { href: "#contact", label: "Contact" },
              ].map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <a 
                    href={link.href} 
                    className="text-sm sm:text-base hover:text-primary dark:hover:text-blue-400 transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white dark:text-gray-200 font-bold text-base sm:text-lg mb-3 sm:mb-4">Contact</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary dark:text-blue-400">📍</span>
                <span className="text-gray-400 dark:text-gray-500">
                  2nd Floor, Seawood Park, Above Shangun Dining Hall<br />
                  Near Old Gangapur Naka, Gangapur Road<br />
                  Nashik-422005
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary dark:text-blue-400">📞</span>
                <span className="text-gray-400 dark:text-gray-500">+91 8956566675</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary dark:text-blue-400">✉️</span>
                <span className="text-gray-400 dark:text-gray-500">contact@vinovainfotech.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 dark:border-gray-900 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400 dark:text-gray-500"
        >
          <p>
            &copy; {new Date().getFullYear()} Vinova Infotech. All rights reserved. | Comprehensive Digital Services • MVP & ERP Solutions
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
