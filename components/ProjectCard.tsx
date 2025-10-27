'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface ProjectCardProps {
  id: string
  title: string
  description: string
  tags: string[]
  index: number
  githubUrl?: string
  image?: string // nueva prop para la imagen
}

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

export default function ProjectCard({
  id,
  title,
  description,
  tags,
  index,
  githubUrl,
  image,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="glass-effect rounded-xl overflow-hidden glass-effect-hover transition-all duration-300 cursor-pointer group"
    >
      <Link href={`/projects/${id}`} className="block">
        {/* Imagen del proyecto */}
        <div className="w-full h-48 overflow-hidden rounded-t-xl group-hover:scale-[1.02] transition-transform duration-300">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-lavender-100 via-violet-100 to-slate-50 flex items-center justify-center text-slate-400">
              No image
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3 text-slate-800 group-hover:text-violet-600 transition-colors">
            {title}
          </h3>
          <p className="text-slate-600 mb-4 text-sm line-clamp-2 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-white font-medium text-xs hover:bg-slate-700 transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
              View on GitHub
            </motion.a>
          )}
        </div>
      </Link>
    </motion.div>
  )
}