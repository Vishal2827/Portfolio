"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink, Calendar, CheckCircle, Shield, FileText, Medal } from "lucide-react"

const WhatIDo = () => {
  const certificates = [
    {
      title: "DevOps and Jenkins Fundamental",
      provider: "Coursera",
      url: "https://www.coursera.org/account/accomplishments/verify/414LUNRCU5AR",
      icon: "🚀",
      details: {
        duration: "4 weeks",
        skills: ["Jenkins Pipeline", "CI/CD", "Build Automation", "Version Control"],
        description:
          "Comprehensive course covering Jenkins fundamentals, pipeline creation, and DevOps best practices. Learned to automate build, test, and deployment processes.",
        issueDate: "2024",
      },
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      provider: "Microsoft",
      url: "https://learn.microsoft.com/en-gb/users/vishal-1629/credentials/4e1d6a159b9b364b?source=docs",
      icon: "☁️",
      details: {
        duration: "Official Certification",
        skills: ["Azure Services", "Cloud Computing", "Virtual Machines", "Storage Solutions"],
        description:
          "Official Microsoft certification demonstrating foundational knowledge of cloud services and Azure platform capabilities.",
        issueDate: "2024",
      },
    },
    {
      title: "Python Basics",
      provider: "Coursera",
      url: "https://www.coursera.org/account/accomplishments/verify/UW3QG3G9NL9L",
      icon: "🐍",
      details: {
        duration: "6 weeks",
        skills: ["Python Programming", "Data Structures", "Object-Oriented Programming", "Problem Solving"],
        description:
          "Fundamental Python programming course covering syntax, data structures, functions, and basic programming concepts essential for automation.",
        issueDate: "2024",
      },
    },
  ]

  return (
    <section className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Background Image with Shadow Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{
            backgroundImage: "url('/developer-workspace.jpg')",
            filter: "blur(2px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-purple-900/70 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="text-6xl mb-8 relative"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <span className="filter drop-shadow-2xl">💻</span>

            {/* Floating Code Symbols */}
            <motion.div
              className="absolute -top-4 -left-8 text-blue-400 text-2xl opacity-60"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              {"</>"}
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -right-8 text-purple-400 text-2xl opacity-60"
              animate={{
                y: [0, 20, 0],
                rotate: [360, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              {"{}"}
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-sm bg-white/5 rounded-lg p-6 border border-white/10"
          >
            <div className="flex items-center mb-6">
              <motion.div
                className="flex space-x-3 mr-4"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-full shadow-lg"
                >
                  <Award className="text-white" size={24} />
                </motion.div>
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-blue-400 to-purple-500 p-3 rounded-full shadow-lg"
                >
                  <Shield className="text-white" size={24} />
                </motion.div>
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-green-400 to-blue-500 p-3 rounded-full shadow-lg"
                >
                  <Medal className="text-white" size={24} />
                </motion.div>
              </motion.div>
            </div>

            <h2 className="text-4xl font-bold text-white mb-4">Licenses & Certificates</h2>
            <p className="text-gray-300 text-lg">
              Professional certifications and courses that validate my expertise in DevOps, Cloud Computing, and
              Software Development.
            </p>

            {/* Floating Certificate Icons */}
            <div className="flex justify-center mt-6 space-x-4">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-lg shadow-lg"
              >
                <FileText className="text-white" size={20} />
              </motion.div>
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 5, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="bg-gradient-to-br from-cyan-500 to-blue-500 p-2 rounded-lg shadow-lg"
              >
                <CheckCircle className="text-white" size={20} />
              </motion.div>
            </div>
          </motion.div>

          <div className="space-y-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="backdrop-blur-md bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-blue-500/50 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <motion.span
                      className="text-3xl mr-4 filter drop-shadow-lg"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {cert.icon}
                    </motion.span>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-blue-300 font-medium">{cert.provider}</p>
                    </div>
                  </div>
                  <motion.a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>

                {/* Certificate Details */}
                <div className="space-y-3">
                  <p className="text-gray-300 text-sm leading-relaxed">{cert.details.description}</p>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center text-green-400">
                      <Calendar size={16} className="mr-1" />
                      <span>{cert.details.duration}</span>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <CheckCircle size={16} className="mr-1" />
                      <span>Issued {cert.details.issueDate}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cert.details.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-md text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="flex items-center text-sm text-gray-300 mt-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Award className="mr-2 text-yellow-400" size={16} />
                  <span>Verified Certificate</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIDo
