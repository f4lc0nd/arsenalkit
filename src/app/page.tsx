'use client'
import Link from 'next/link';
import { motion } from "motion/react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#05070a] via-[#0c0e14] to-[#121620] text-white py-16">

      <div className="container mx-auto px-4 py-16 relative z-10 max-w-4xl text-center">
        {/* Futuristic Grid Background Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[linear-gradient(45deg,rgba(29,233,182,0.1)_0%,rgba(29,233,182,0)_70%)] animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-grid-white/[0.05] grid-size-8"></div>
        </div>

        {/* Animated Title */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400"
        >
          Arsenal Kit
        </motion.div>

        {/* Animated Description */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed"
        >
          Your Comprehensive Cybersecurity Reconnaissance Toolkit
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link 
            href="/tools" 
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 
            text-white font-bold text-lg transition-all duration-300 
            hover:from-cyan-600 hover:to-blue-600 
            hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
          >
            Explore Tools →
          </Link>
        </motion.div>

        {/* Subtle Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
