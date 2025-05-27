"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Cloud, Server, X, CheckCircle, ExternalLink, Github } from "lucide-react"
import { useState } from "react"

const Hero = () => {
  const [showDevOpsModal, setShowDevOpsModal] = useState(false)
  const [showProjectsModal, setShowProjectsModal] = useState(false)

  const devopsRoadmap = {
    cloud: [
      "AWS EC2, S3, Lambda, RDS",
      "Azure Virtual Machines, Storage, App Services",
      "Cloud Architecture & Best Practices",
      "Infrastructure as Code (IaC)",
      "Cloud Security & Compliance",
    ],
    devops: [
      "CI/CD Pipeline Development",
      "Docker & Containerization",
      "Kubernetes Orchestration",
      "Jenkins Automation",
      "Infrastructure Monitoring",
      "Git Version Control",
    ],
  }

  const projects = [
    {
      name: "CI/CD Pipeline with Jenkins & Docker",
      tech: ["Jenkins", "Docker", "AWS EC2", "Node.js"],
      github: "https://github.com/Vishal2827",
    },
    {
      name: "3-Tier Chat App on Kubernetes",
      tech: ["React", "Node.js", "MongoDB", "Kubernetes"],
      github: "https://github.com/Vishal2827",
    },
    {
      name: "Laravel Starter Project (Production-Ready)",
      tech: ["Laravel", "PHP 8.2", "MariaDB", "Redis"],
      github: "https://github.com/Vishal2827",
    },
    {
      name: "GeoIP2-Based Laravel Deployment",
      tech: ["Laravel", "Nginx", "GeoIP2", "Let's Encrypt"],
      github: "https://github.com/Vishal2827",
      demo: "https://ind.369crypto.com.au",
    },
    {
      name: "Mercedes-Benz Static Website",
      tech: ["React", "Docker", "AWS EC2", "Jenkins"],
      github: "https://github.com/Vishal2827",
    },
  ]

  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                letterSpacing: "-0.02em",
              }}
            >
              Hello I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                Vishal
              </span>
            </motion.h1>

            <motion.p
              className="text-2xl md:text-4xl mb-8 font-black leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                letterSpacing: "-0.01em",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "gradient 4s ease infinite",
              }}
            >
              DevOps & Cloud Engineer
            </motion.p>

            <motion.p
              className="text-lg text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Passionate about building scalable infrastructure, automating deployments, and creating robust cloud
              solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={() => setShowDevOpsModal(true)}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
              >
                <Cloud size={20} />
                About DevOps
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
                onClick={() => setShowProjectsModal(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <Server size={20} />
                View Projects
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center"
          >
            <motion.div className="relative" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <motion.img
                src="/profile.jpg"
                alt="Vishal"
                className="w-80 h-80 rounded-full object-cover border-4 border-blue-500 shadow-2xl"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.5)",
                    "0 0 40px rgba(139, 92, 246, 0.7)",
                    "0 0 20px rgba(59, 130, 246, 0.5)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Cloud size={24} />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-purple-500 text-white p-3 rounded-full shadow-lg"
                animate={{
                  y: [0, 10, 0],
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Server size={24} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* DevOps Knowledge Modal */}
      <AnimatePresence>
        {showDevOpsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowDevOpsModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-lg p-8 max-w-4xl w-full border border-blue-500/30 relative max-h-[80vh] overflow-y-auto"
            >
              <button
                onClick={() => setShowDevOpsModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-center mb-8">
                <Cloud className="text-blue-400 mx-auto mb-4" size={64} />
                <h2 className="text-3xl font-bold text-white mb-2">DevOps & Cloud Roadmap</h2>
                <p className="text-gray-300">My expertise and learning journey in modern infrastructure</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-blue-300 mb-4 flex items-center">
                    <Cloud className="mr-2" size={24} />
                    Cloud Technologies
                  </h3>
                  <div className="space-y-3">
                    {devopsRoadmap.cloud.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center text-gray-300"
                      >
                        <CheckCircle className="text-green-400 mr-3 flex-shrink-0" size={16} />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center">
                    <Server className="mr-2" size={24} />
                    DevOps Practices
                  </h3>
                  <div className="space-y-3">
                    {devopsRoadmap.devops.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center text-gray-300"
                      >
                        <CheckCircle className="text-green-400 mr-3 flex-shrink-0" size={16} />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Projects Modal */}
      <AnimatePresence>
        {showProjectsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowProjectsModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-lg p-8 max-w-4xl w-full border border-blue-500/30 relative max-h-[80vh] overflow-y-auto"
            >
              <button
                onClick={() => setShowProjectsModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-center mb-8">
                <Server className="text-purple-400 mx-auto mb-4" size={64} />
                <h2 className="text-3xl font-bold text-white mb-2">My Projects</h2>
                <p className="text-gray-300">DevOps and Cloud Engineering projects</p>
              </div>

              <div className="space-y-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{project.name}</h3>
                      <div className="flex space-x-2">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <Github size={20} />
                        </motion.a>
                        {project.demo && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            className="text-purple-400 hover:text-purple-300 transition-colors"
                          >
                            <ExternalLink size={20} />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </>
  )
}

export default Hero
