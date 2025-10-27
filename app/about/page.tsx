"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";
import { Briefcase, User, Pencil } from "lucide-react";
import Image from "next/image";

import { motion } from "framer-motion";

const skills = [
  { name: "React / TypeScript", level: 30 },
  { name: "UI/UX Design", level: 85 },
  { name: "CSS - Tailwind", level: 50 },
  { name: "Next.js", level: 30 },
  { name: "Figma / Design Tools", level: 88 },
  { name: "Animation / Motion", level: 80 },
];

const workExperience = [
  {
    icon: Briefcase,
    title: "Multimedia producer",
    company: "InHouse 52",
    description:
      "Development of audiovisual content and multimedia production for internal and external campaigns.",
    period: "2022 - 2023",
  },
  {
    icon: Pencil,
    title: "Marketing assistant and Designer",
    company: "Innovacure",
    description:
      "Graphic design, support in digital marketing and branding strategies.",
    period: "2024 - Present",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 min-h-screen container mx-auto px-6 relative z-10">
        {/* Hero / Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 gradient-text">About me</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Hi! I'm a developer passionate about crafting beautiful
            digital experiences that merge design and code.
          </p>
        </motion.div>

        {/* Profile + Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
        >
          <div className="flex justify-center">
          <div className="relative w-56 h-56 rounded-full overflow-hidden border-2 border-slate-200 shadow-lg">
                  <Image
                    src="/profile_3.jpg"
                    alt="My Photo"
                    fill
                    className="object-cover"
                  />
                </div>
          </div>

          <div className="space-y-4">
            <p className="text-base text-slate-600 leading-relaxed">
              I love turning complex problems into simple, beautiful, and
              intuitive designs. I specialize in building modern, responsive web
              applications.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies, creating
              digital art, and collaborating with other creators to build
              amazing experiences.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Timeline */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold gradient-text">My journey</h2>
            <Timeline />
          </div>

          {/* Skills & Interests */}
          <div className="space-y-12">
            {/* Skills */}
            <div>
              <h2 className="text-3xl font-bold mb-6 gradient-text">
                Skills and expertise
              </h2>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000 ease-out rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Work experience */}
            <div>
              <h2 className="text-3xl font-bold mb-6 gradient-text">
                Work experience
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {workExperience.map((job, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.03,
                      y: -2,
                      boxShadow: "0 10px 25px rgba(139, 92, 246, 0.2)",
                    }}
                    className="p-6 rounded-2xl bg-white/30 backdrop-blur-md flex flex-col items-center text-center transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-16 h-16 mb-3 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white text-2xl">
                      <job.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-semibold">{job.title}</h3>
                    <p className="text-sm text-slate-600">{job.company}</p>
                    <p className="text-sm text-slate-500 mt-1">{job.period}</p>
                    <p className="text-sm text-slate-600 mt-2">
                      {job.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}