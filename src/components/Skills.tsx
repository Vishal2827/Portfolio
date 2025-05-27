"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Code, Cloud, Server, GitBranch, Monitor, X } from "lucide-react"
import { useState } from "react"

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  const skills = [
    {
      name: "HTML",
      icon: Code,
      color: "text-orange-500",
      description:
        "Proficient in semantic HTML5, creating well-structured and accessible web pages. Experience with modern HTML features, forms, and multimedia elements.",
    },
    {
      name: "CSS",
      icon: Code,
      color: "text-blue-500",
      description:
        "Advanced CSS3 skills including Flexbox, Grid, animations, and responsive design. Experience with preprocessors like Sass and modern CSS frameworks.",
    },
    {
      name: "Kubernetes",
      icon: Server,
      color: "text-blue-600",
      description:
        "Container orchestration with Kubernetes. Experience in deploying, scaling, and managing containerized applications using pods, services, and deployments.",
    },
    {
      name: "Jenkins",
      icon: GitBranch,
      color: "text-red-500",
      description:
        "CI/CD pipeline automation with Jenkins. Expertise in creating build pipelines, automated testing, and deployment workflows for continuous integration.",
    },
    {
      name: "Git",
      icon: GitBranch,
      color: "text-orange-600",
      description:
        "Version control with Git and GitHub. Proficient in branching strategies, merge conflicts resolution, and collaborative development workflows.",
    },
    {
      name: "AWS",
      icon: Cloud,
      color: "text-yellow-500",
      description:
        "Amazon Web Services cloud platform. Experience with EC2, S3, Lambda, RDS, and other AWS services for scalable cloud infrastructure.",
    },
    {
      name: "Azure",
      icon: Cloud,
      color: "text-blue-400",
      description:
        "Microsoft Azure cloud services. Hands-on experience with Azure VMs, Storage, App Services, and Azure DevOps for cloud-native applications.",
    },
    {
      name: "Docker",
      icon: Server,
      color: "text-blue-500",
      description:
        "Containerization with Docker. Expertise in creating Dockerfiles, managing containers, and building efficient container images for applications.",
    },
    {
      name: "Linux",
      icon: Monitor,
      color: "text-yellow-400",
      description:
        "Linux system administration and command-line proficiency. Experience with Ubuntu, CentOS, shell scripting, and server management.",
    },
    {
      name: "Networking",
      icon: Server,
      color: "text-green-500",
      description:
        "Network fundamentals including TCP/IP, DNS, load balancing, and security. Understanding of network protocols and infrastructure design.",
    },
    {
      name: "Ansible",
      icon: Server,
      color: "text-red-600",
      description:
        "Infrastructure automation with Ansible. Experience in writing playbooks, configuration management, and automated deployment processes.",
    },
    {
      name: "Terraform",
      icon: Cloud,
      color: "text-purple-500",
      description:
        "Infrastructure as Code with Terraform. Proficient in creating and managing cloud infrastructure using declarative configuration files.",
    },
  ]

  const handleSkillClick = (skillName: string) => {
    setSelectedSkill(selectedSkill === skillName ? null : skillName)
  }

  const selectedSkillData = skills.find((skill) => skill.name === selectedSkill)

  return (
    <section id="skills" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              onClick={() => handleSkillClick(skill.name)}
              className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer ${
                selectedSkill === skill.name ? "border-blue-500 bg-blue-500/20" : ""
              }`}
            >
              <motion.div className="mb-4" whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <skill.icon className={`${skill.color} mx-auto group-hover:drop-shadow-lg`} size={48} />
              </motion.div>
              <h3 className="text-white font-semibold">{skill.name}</h3>
              {selectedSkill === skill.name && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mx-auto"></div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Skill Description Modal */}
        <AnimatePresence>
          {selectedSkill && selectedSkillData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedSkill(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-lg p-8 max-w-md w-full border border-blue-500/30 relative"
              >
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="text-center mb-6">
                  <selectedSkillData.icon className={`${selectedSkillData.color} mx-auto mb-4`} size={64} />
                  <h3 className="text-2xl font-bold text-white">{selectedSkillData.name}</h3>
                </div>

                <p className="text-gray-300 leading-relaxed text-center">{selectedSkillData.description}</p>

                <div className="mt-6 flex justify-center">
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Skills
