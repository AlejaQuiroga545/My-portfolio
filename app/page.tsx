"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import Link from "next/link";
import Background from "@/components/BackgroundLayers";
import { User, Mail, Folder } from "lucide-react";
import Image from "next/image";

const featuredProjects = [
  {
    id: "1",
    title: "V-Mind",
    description:
      "An interactive learning platform designed to engage users through gamified content and dynamic modules.",
    tags: ["Javascript", "UI/UX", "Gamification"],
    githubUrl: "https://github.com/AlejaQuiroga545/V-Mind", 
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170'
  },
  {
    id: "2",
    title: "Portfolio website",
    description:
      "A personal portfolio website to showcase my work, skills, and projects using web technologies.",
    tags: ["HTML", "CSS"],
    githubUrl: "https://github.com/AlejaQuiroga545/Portfolio---Aleja-Quiroga",
    image: 'https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
  },
];

export default function Home() {
  return (
    <>
      <Background />
      <Header />

      <main className="pt-20 relative z-10">
        <Hero />

        {/* About Me */}
        <section className="py-20 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-12 text-center gradient-text normal-case flex items-center justify-center gap-2">
              <b>Hi, I'm Aleja !</b>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="relative w-56 h-56 rounded-full overflow-hidden border-2 border-slate-200 shadow-lg">
                  <Image
                    src="/profile_3.jpg"
                    alt="My Photo"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Texto */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <p className="text-base text-slate-600 leading-relaxed">
                A developer passionate about blending design and code to craft beautiful digital experiences.
                </p>
                <p className="text-base text-slate-600 leading-relaxed">
                  I love turning complex problems into simple, beautiful, and
                  intuitive designs. When I'm not coding, you can find me
                  exploring new technologies or creating digital art.
                </p>
                <Link href="/about">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 px-6 py-2.5 rounded-full bg-violet-500 text-white font-medium text-sm hover:bg-violet-600 transition-colors shadow-lg shadow-violet-500/25"
                  >
                    Learn more about me
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Timeline */}
        <section className="py-20 container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-12 text-center gradient-text normal-case flex items-center justify-center gap-2"
          >
            My journey
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <Timeline />
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-12 text-center gradient-text normal-case flex items-center justify-center gap-2"
          >
            Featured projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} {...project} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 rounded-full border border-violet-500 text-violet-500 font-medium text-sm hover:bg-violet-500 hover:text-white transition-all duration-300"
              >
                View all projects
              </motion.button>
            </Link>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center glass-effect rounded-2xl p-12 glass-effect-hover"
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text normal-case flex items-center justify-center gap-2">
              Let's work together !
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Have a project in mind? I'd love to hear from you. Let's create
              something amazing together.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 rounded-full bg-violet-500 text-white font-medium text-sm hover:bg-violet-600 transition-colors shadow-lg shadow-violet-500/25"
              >
                Get in touch
              </motion.button>
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}