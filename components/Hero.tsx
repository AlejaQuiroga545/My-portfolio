"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pastel-pink via-pastel-lavender to-pastel-lilac">
      <div className="container mx-auto px-6 text-center relative z-10 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text">
              The place where designer
            </span>
            <br />
            <span className="text-foreground">meets</span>

            <span className="text-slate-400 font-mono">&lt;</span>
            <span className="bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-purple-500">
              developer
            </span>
            <span className="text-slate-400 font-mono">/&gt;</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light">
            Creating digital experiences where creativity and code dance
            together in perfect harmony
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 rounded-lg bg-violet-500 text-white font-medium text-sm shadow-lg shadow-violet-400/30 hover:bg-violet-600 transition-all duration-300 flex items-center gap-2"
              >
                View my work <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 rounded-lg bg-gray-300/30 text-purple-500 font-medium text-sm shadow-lg shadow-white/20 hover:bg-white/50 transition-all duration-300"
              >
                Let's connect
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}