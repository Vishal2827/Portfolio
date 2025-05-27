"use client"

import { motion } from "framer-motion"

const Navbar = () => {
  const navItems = ["Home", "About Us", "Qualification", "Projects", "Skills", "Contact Us"]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-40 border-b border-white/10"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.1 }} className="text-2xl font-bold text-white">
          Vishal
        </motion.div>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-white hover:text-blue-400 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
