'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/70 border-b border-slate-200/50"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-end items-center space-x-10">
          <Link href="/" className="text-slate-600 hover:text-violet-500 transition-colors font-medium text-sm">
            Home
          </Link>
          <Link href="/about" className="text-slate-600 hover:text-violet-500 transition-colors font-medium text-sm">
            About me
          </Link>
          <Link href="/projects" className="text-slate-600 hover:text-violet-500 transition-colors font-medium text-sm">
            Projects
          </Link>
          <Link href="/contact" className="text-slate-600 hover:text-violet-500 transition-colors font-medium text-sm">
            Contact
          </Link>
        </div>
      </nav>
    </motion.header>
  )
}
