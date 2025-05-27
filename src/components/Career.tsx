"use client"

import { motion } from "framer-motion"
import { GraduationCap, MapPin } from "lucide-react"

const Career = () => {
  const education = [
    {
      degree: "10th Grade",
      institution: "NATIONAL SS SCHOOL",
      location: "Panipat, Haryana",
      year: "2018",
      description: "Completed secondary education with distinction",
    },
    {
      degree: "12th Grade",
      institution: "NATIONAL SS SCHOOL",
      location: "Panipat, Haryana",
      year: "2020",
      description: "NON MEDICAL",
    },
    {
      degree: "BCA",
      institution: "Kurukshetra University",
      location: "Panipat, Haryana",
      year: "2023",
      description: "Bachelor of Computer Applications",
    },
    {
      degree: "MCA (Cloud Computing & DevOps)",
      institution: "Chandigarh University",
      location: "Chandigarh",
      year: "2025",
      description: "Master's in Computer Applications specializing in Cloud Computing and DevOps",
    },
  ]

  return (
    <section id="qualification" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">My Career Journey</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="text-center">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }} className="inline-block mb-4">
                  <GraduationCap className="text-blue-400" size={48} />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-blue-300 mb-2 font-medium">{edu.institution}</p>

                <div className="flex items-center justify-center mb-3">
                  <MapPin className="text-green-400 mr-1" size={16} />
                  <p className="text-green-300 text-sm">{edu.location}</p>
                </div>

                <p className="text-purple-400 font-semibold mb-3">{edu.year}</p>
                <p className="text-gray-300 text-sm">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Career
