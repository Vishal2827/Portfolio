"use client"

import { useEffect } from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import About from "./About"
import WhatIDo from "./WhatIDo"
import Career from "./Career"
import Work from "./Work"
import Skills from "./Skills"
import Contact from "./Contact"
import SocialLinks from "./SocialLinks"
import ParticleBackground from "./ParticleBackground"

const Portfolio = () => {
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const id = target.getAttribute("href")?.substring(1)
      if (id) {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: "smooth" })
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => link.addEventListener("click", handleSmoothScroll))

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleSmoothScroll))
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <ParticleBackground />
      <Navbar />
      <SocialLinks />
      <Hero />
      <About />
      <WhatIDo />
      <Career />
      <Work />
      <Skills />
      <Contact />
    </div>
  )
}

export default Portfolio
