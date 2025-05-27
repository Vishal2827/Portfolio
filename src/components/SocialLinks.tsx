"use client"

import { motion } from "framer-motion"
import { Instagram, Linkedin, Github, Twitter } from "lucide-react"

const SocialLinks = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/quotee_01/", color: "hover:text-pink-500" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/vishal-3464332aa/", color: "hover:text-blue-500" },
    { icon: Github, href: "https://github.com/Vishal2827", color: "hover:text-gray-400" },
    { icon: Twitter, href: "#", color: "hover:text-blue-400" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed left-6 bottom-6 flex flex-col space-y-4 z-30"
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          className={`text-white ${social.color} transition-all duration-300 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:shadow-lg hover:shadow-current/50`}
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 + index * 0.1 }}
        >
          <social.icon size={24} />
        </motion.a>
      ))}
    </motion.div>
  )
}

export default SocialLinks
