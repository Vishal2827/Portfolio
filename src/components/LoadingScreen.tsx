"use client"

import { motion } from "framer-motion"

interface LoadingScreenProps {
  progress: number
}

const LoadingScreen = ({ progress }: LoadingScreenProps) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} className="mb-8">
          <h1 className="text-6xl font-bold text-white mb-4">Vishal</h1>
          <p className="text-l text-blue-300"> DevOps & Cloud Engineer</p>
        </motion.div>

        <div className="w-80 h-2 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <motion.p
          className="text-white mt-4 text-lg"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
        >
          {progress}%
        </motion.p>
      </div>
    </div>
  )
}

export default LoadingScreen
