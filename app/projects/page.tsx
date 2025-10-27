'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProjectCard from '@/components/ProjectCard'
import { motion } from 'framer-motion'

const projects = [
  {
    id: '1',
    title: 'V-Mind',
    description: 'An interactive learning platform for students and professionals.',
    tags: ['Javascript', 'UI/UX', 'Educational platform'],
    githubUrl: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
  },
  {
    id: '2',
    title: 'Portfolio website',
    description: 'A personal portfolio website to showcase my work and skills.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
  },
  {
    id: '3',
    title: 'Café de la loma',
    description: 'Website for a local café with menu and reservation system.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    title: 'Library',
    description: 'An analytics dashboard for managing books and user activity.',
    tags: ['Next', 'Typescript', 'Database'],
    githubUrl: 'https://github.com/AlejaQuiroga545/Library',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
  },
  {
    id: '5',
    title: 'Clinic system',
    description: 'A collaborative management system for clinics with real-time updates.',
    tags: ['Database', 'API Integration', 'REST API'],
    githubUrl: 'https://github.com/AlejaQuiroga545/ExpertSoft',
    image: 'https://images.unsplash.com/photo-1598121210875-08d6cf351459?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN5c3RlbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600',
  },
  {
    id: '6',
    title: 'Life through design',
    description: 'A creative app visualizing data with interactive design elements.',
    tags: ['html', 'CSS', 'API Integration'],
    githubUrl: 'https://github.com/AlejaQuiroga545/Gestion-de-productos',
    image: 'https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688',
  },
]

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 min-h-screen container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 gradient-text">My Projects</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Explore my portfolio of creative and innovative projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}