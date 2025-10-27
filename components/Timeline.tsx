'use client'

import { motion } from 'framer-motion'
import { Rocket, GraduationCap, Laptop } from 'lucide-react'

interface TimelineItem {
  year: string
  title: string
  description: string
  icon: JSX.Element
}

const timelineItems: TimelineItem[] = [
  {
    year: '2025',
    title: 'Full stack developer',
    description: 'specializing in modern web technologies and creative solutions',
    icon: <Rocket className="w-5 h-5 text-violet-500" />,
  },
  {
    year: '2023',
    title: 'Multimedia production',
    description: 'focused on creating beautiful and intuitive user experiences',
    icon: <GraduationCap className="w-5 h-5 text-violet-500" />,
  },
  {
    year: '2021',
    title: 'Technical bachelors degree in software programming',
    description: 'began my journey in development',
    icon: <Laptop className="w-5 h-5 text-violet-500" />,
  },
]

export default function Timeline() {
  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Línea vertical */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-200"></div>

      <div className="space-y-16">
        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
          >
            {/* Tarjeta de contenido */}
            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
              <div className="glass-effect rounded-xl p-6 glass-effect-hover transition-all duration-300">
                <div className="text-violet-500 font-medium mb-1 text-xs tracking-wider uppercase">{item.year}</div>
                <h3 className="text-lg font-semibold mb-2 text-slate-800 capitalize">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>

            {/* Ícono central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center z-10 shadow-sm">
              {item.icon}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}