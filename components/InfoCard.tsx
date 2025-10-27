'use client'

import { motion } from 'framer-motion'

interface InfoCardProps {
  icon: string
  title: string
  content: string
  index: number
}

export default function InfoCard({ icon, title, content, index }: InfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="glass-effect rounded-xl p-6 glass-effect-hover transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="text-3xl">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-800">{title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed">{content}</p>
        </div>
      </div>
    </motion.div>
  )
}
