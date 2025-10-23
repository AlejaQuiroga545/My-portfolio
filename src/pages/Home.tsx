import { motion } from "framer-motion";
import { ArrowRight, Code2, Palette, Sparkles, Briefcase, GraduationCap, Mail, Heart, Zap, Layers, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background with stronger purple blend */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/20 to-background" />
          
          {/* Multiple animated orbs for depth */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.6, 0.4],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/40 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1.3, 1, 1.3],
              opacity: [0.4, 0.6, 0.4],
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-accent/40 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[100px]"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/20 border border-primary/40 backdrop-blur-xl mb-8 shadow-[0_0_30px_rgba(139,92,246,0.3)]"
            >
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-base text-primary font-medium">Diseño & Código</span>
            </motion.div>

            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Creatividad
              </span>
              <br />
              <span className="text-foreground/90">meets</span>
              <br />
              <span className="bg-gradient-to-r from-accent via-primary to-foreground bg-clip-text text-transparent">
                Tecnología
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Transformo ideas en experiencias digitales impactantes combinando diseño elegante con código limpio
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/proyectos">
                <Button
                  size="lg"
                  variant="neon"
                  className="rounded-full px-10 py-7 text-lg group"
                >
                  Ver Proyectos
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-10 py-7 text-lg"
                >
                  Contactar
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Sobre Mí / Mis Pasiones */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Mis Pasiones
              </span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Donde el arte se encuentra con la lógica
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Palette, title: "Diseño UI/UX", desc: "Interfaces que cautivan y conectan", gradient: "from-primary/20 to-accent/20" },
              { icon: Code2, title: "Desarrollo", desc: "Código limpio y escalable", gradient: "from-accent/20 to-primary/20" },
              { icon: Layers, title: "Arte Digital", desc: "Creatividad sin límites", gradient: "from-primary/20 to-purple-500/20" },
              { icon: Zap, title: "Innovación", desc: "Tecnología de vanguardia", gradient: "from-purple-500/20 to-accent/20" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500`} />
                <div className="relative backdrop-blur-2xl bg-card/40 border border-border/30 rounded-3xl p-8 hover:border-primary/50 transition-all duration-500 h-full">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-500">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resumen de Proyectos */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Proyectos Destacados
              </span>
            </h2>
            <p className="text-muted-foreground text-xl">
              Un vistazo a mi trabajo más reciente
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {[
              {
                title: "E-Commerce Platform",
                desc: "Plataforma completa con sistema de pagos y panel de admin",
                tags: ["React", "Node.js", "PostgreSQL"],
                gradient: "from-primary/20 to-accent/20"
              },
              {
                title: "Design System",
                desc: "Sistema escalable con componentes reutilizables",
                tags: ["React", "Storybook", "Tailwind"],
                gradient: "from-accent/20 to-primary/20"
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500`} />
                <div className="relative backdrop-blur-2xl bg-card/40 border border-border/30 rounded-3xl p-8 hover:border-primary/50 transition-all duration-500">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="rounded-full">
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </Button>
                    <Button variant="neon" size="sm" className="rounded-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/proyectos">
              <Button variant="outline" size="lg" className="rounded-full px-8">
                Ver Todos los Proyectos
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Experiencia Laboral */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Experiencia
              </span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                role: "Senior Frontend Developer",
                company: "Tech Innovators",
                period: "2022 - Presente",
                desc: "Desarrollo de aplicaciones web con React, TypeScript y Next.js. Liderazgo de equipo de 5 desarrolladores.",
              },
              {
                role: "Full Stack Developer",
                company: "Digital Studio",
                period: "2020 - 2022",
                desc: "Creación de plataformas e-commerce y sistemas de gestión con stack MERN.",
              },
              {
                role: "UI/UX Designer & Developer",
                company: "Creative Agency",
                period: "2018 - 2020",
                desc: "Diseño y desarrollo de sitios web modernos con enfoque en UX y animaciones.",
              },
            ].map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative backdrop-blur-2xl bg-card/40 border border-border/30 rounded-3xl p-8 hover:border-primary/50 transition-all duration-500">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-500">
                      <Briefcase className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{exp.role}</h3>
                      <p className="text-primary mb-2">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                      <p className="text-muted-foreground">{exp.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Línea del Tiempo de Formación */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Formación
              </span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30" />

            <div className="space-y-12">
              {[
                {
                  title: "Máster en Desarrollo Web Full Stack",
                  institution: "Universidad Tecnológica",
                  year: "2022",
                  desc: "Especialización en arquitecturas modernas y cloud computing",
                },
                {
                  title: "Bootcamp Diseño UX/UI",
                  institution: "Design Academy",
                  year: "2021",
                  desc: "Metodologías de diseño centrado en el usuario",
                },
                {
                  title: "Ingeniería en Sistemas",
                  institution: "Universidad Nacional",
                  year: "2018 - 2022",
                  desc: "Fundamentos de programación y arquitectura de software",
                },
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-24"
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    className="absolute left-5 top-6 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-[0_0_20px_rgba(139,92,246,0.6)]"
                  />

                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <div className="relative backdrop-blur-2xl bg-card/40 border border-border/30 rounded-3xl p-6 hover:border-primary/50 transition-all duration-500">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                          <GraduationCap className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{edu.title}</h3>
                          <p className="text-primary mb-1">{edu.institution}</p>
                          <p className="text-sm text-muted-foreground mb-2">{edu.year}</p>
                          <p className="text-muted-foreground text-sm">{edu.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Resumido */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative backdrop-blur-2xl bg-card/40 border border-primary/30 rounded-[3rem] p-16 hover:border-primary/50 transition-all duration-500">
                <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all duration-500">
                  <Mail className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    ¿Hablamos?
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                  Estoy disponible para proyectos freelance, colaboraciones o simplemente para charlar sobre tecnología y diseño
                </p>
                <Link to="/contacto">
                  <Button variant="neon" size="lg" className="rounded-full px-10 py-7 text-lg group">
                    Ir a Contacto
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer con amor */}
      <footer className="py-12 border-t border-border/30 backdrop-blur-xl">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Hecho con <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" /> y mucho código
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
