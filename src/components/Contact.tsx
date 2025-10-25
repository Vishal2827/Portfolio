"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Instagram, Linkedin, Github, Twitter } from "lucide-react"

const Contact = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/quotee_01/", label: "Instagram", color: "hover:text-pink-500" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/vishal-3464332aa/", label: "LinkedIn", color: "hover:text-blue-500" },
    { icon: Github, href: "https://github.com/Vishal2827", label: "GitHub", color: "hover:text-gray-400" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
  ]

  return (
    <section id="contact-us" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-400" size={24} />
              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <p className="text-gray-300">vishu28282828@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="text-green-400" size={24} />
              <div>
                <h3 className="text-white font-semibold">Phone</h3>
                <p className="text-gray-300">+91 8168587296</p>
              </div>
            </div>
          </motion.div>

          {/* Center Decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
            >
              <span className="text-4xl">💬</span>
            </motion.div>
            <p className="text-white mt-4 font-semibold">{"Let's Connect!"}</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h3 className="text-white font-semibold text-lg mb-6">Follow Me</h3>
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className={`flex items-center space-x-4 text-gray-300 ${social.color} transition-all duration-300 p-3 rounded-lg hover:bg-white/10`}
                whileHover={{ scale: 1.05, x: 10 }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <social.icon size={24} />
                <span>{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
