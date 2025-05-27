"use client"

import { motion } from "framer-motion"
import { Settings, Cpu, Cloud } from "lucide-react"

const About = () => {
  return (
    <section id="about-us" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Background Image with Shadow Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/cloud-chip.jpg')",
            filter: "blur(1px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-purple-900/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.div
            className="relative"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            {/* Main DevOps Icon */}
            <motion.div
              className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-full shadow-2xl"
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 30px rgba(59, 130, 246, 0.5)",
                  "0 0 50px rgba(139, 92, 246, 0.8)",
                  "0 0 30px rgba(59, 130, 246, 0.5)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Settings className="text-white" size={64} />
            </motion.div>

            {/* Orbiting Icons */}
            <motion.div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <div className="bg-blue-500 p-3 rounded-full shadow-lg">
                <Cloud className="text-white" size={24} />
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-0 right-0 transform translate-x-2 translate-y-2"
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <div className="bg-purple-500 p-3 rounded-full shadow-lg">
                <Cpu className="text-white" size={24} />
              </div>
            </motion.div>

            {/* Glowing Ring Effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-blue-400/30"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              style={{
                width: "140px",
                height: "140px",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-sm bg-white/5 rounded-lg p-6 border border-white/10"
        >
          <motion.h2
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            About Us
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            I'm Vishal, an aspiring DevOps and Cloud Engineer passionate about building scalable, secure, and automated
            infrastructure. With hands-on experience in tools like Docker, Kubernetes, Jenkins, Terraform, and GitHub, I
            specialize in designing and deploying CI/CD pipelines and cloud-native applications.
            <br />
            <br />I believe in continuous learning and love exploring cloud platforms like AWS, Azure, and GCP, aiming
            to deliver efficient, reliable, and automated solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center space-x-4"
          >
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <span className="text-blue-300 font-semibold">Cloud & DevOps Enthusiast</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
