"use client"

import { useState, useEffect } from "react"
import LoadingScreen from "./components/LoadingScreen"
import Portfolio from "./components/Portfolio"
import "./App.css"

function App() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return prev + 1
      })
    }, 30)

    return () => clearInterval(timer)
  }, [])

  return <div className="App">{loading ? <LoadingScreen progress={progress} /> : <Portfolio />}</div>
}

export default App
