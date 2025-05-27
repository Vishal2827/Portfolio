"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Server, MessageCircle, Globe, Code, Car } from "lucide-react"

const Work = () => {
  const projects = [
    {
      id: "01",
      name: "CI/CD Pipeline with Jenkins & Docker",
      description:
        "End-to-end CI/CD pipeline for Node.js app with Jenkins, Docker, and AWS EC2 deployment. Automated build, test, and deployment with webhook integration.",
      image: "/jenkins-docker.png",
      github: "https://github.com/Vishal2827/jenkinsproject",
      demo: "#",
      icon: <Server className="text-blue-400" size={24} />,
      tech: ["Jenkins", "Docker", "AWS EC2", "Node.js", "GitHub"],
    },
    {
      id: "02",
      name: "3-Tier Chat App on Kubernetes",
      description:
        "Full-stack real-time chat application using 3-tier architecture. Deployed with Kubernetes, Docker containers, and Helm for resource management.",
      image: "/kubernetes-project.jpg",
      github: "https://github.com/Vishal2827/newchat",
      demo: "#",
      icon: <MessageCircle className="text-green-400" size={24} />,
      tech: ["React", "Node.js", "MongoDB", "Kubernetes", "Docker", "Helm"],
    },
    {
      id: "03",
      name: "Laravel Starter Project (Production-Ready)",
      description:
        "Production-ready Laravel application with SSL, Redis, queues, and MariaDB. Dockerized with Docker Compose and Let's Encrypt SSL.",
      image: "/laravel-starter.jpg",
      github: "https://github.com/Vishal2827",
      demo: "#",
      icon: <Code className="text-orange-400" size={24} />,
      tech: ["Laravel", "PHP 8.2", "MariaDB", "Redis", "Docker Compose", "Nginx"],
    },
    {
      id: "04",
      name: "GeoIP2-Based Laravel Deployment (India + Sydney)",
      description:
        "Advanced geo-routing system with Laravel deployed on two VMs (India & Sydney). Uses GeoIP2 with Nginx for automatic user redirection based on location. Features SSL encryption and CDN-like behavior.",
      image: "/geoip-project.png",
      github: "https://github.com/Vishal2827",
      demo: "https://ind.369crypto.com.au",
      icon: <Globe className="text-purple-400" size={24} />,
      tech: ["Laravel", "Nginx", "GeoIP2", "MaxMind DB", "Let's Encrypt", "Ubuntu"],
      featured: true,
    },
    {
      id: "05",
      name: "Mercedes-Benz Static Website",
      description:
        "Fully responsive luxury car brand website built with React. Features multiple pages with React Router, dockerized deployment on AWS EC2, and automated CI/CD with Jenkins.",
      image: "/mercedes-project.webp",
      github: "https://github.com/Vishal2827/benz",
      demo: "#",
      icon: <Car className="text-red-400" size={24} />,
      tech: ["React", "React Router", "Docker", "AWS EC2", "Jenkins", "Responsive Design"],
    },
  ]

  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">My Work</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border transition-all duration-300 ${
                project.featured
                  ? "border-purple-500/50 bg-gradient-to-br from-purple-900/20 to-blue-900/20 lg:col-span-2"
                  : "border-white/10 hover:border-blue-500/50"
              }`}
            >
              <div className="relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full font-bold">
                  {project.id}
                </div>
                <div className="absolute top-4 right-4">{project.icon}</div>
                {project.featured && (
                  <div className="absolute bottom-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ⭐ Main Project
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    {project.demo === "#" ? "Demo" : "Live Site"}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Details Section for Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Globe className="text-purple-400 mr-3" size={28} />
            Featured Project: GeoIP2 Architecture
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-blue-300 mb-3">🌐 How It Works</h4>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Users access: https://ind.369crypto.com.au</li>
                <li>• India server detects user location via GeoIP2</li>
                <li>• Australian users → Redirected to Sydney server</li>
                <li>• Other users → Served from India server</li>
                <li>• HTTP 307 redirect preserves session data</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-green-300 mb-3">🔐 Key Features</h4>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• SSL encryption on both servers</li>
                <li>• CDN-like behavior for performance</li>
                <li>• Load balancing across regions</li>
                <li>• MaxMind DB for accurate geo-detection</li>
                <li>• Nginx reverse proxy configuration</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Work
