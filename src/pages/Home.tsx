import { motion } from "framer-motion";
import { 
  Code2, Palette, Sparkles, Heart, Zap, Layers, ArrowRight, 
  Terminal, Figma, Wand2, Coffee, Music, Camera, BookOpen,
  GraduationCap, Briefcase, Mail, Star, Lightbulb, Laptop
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-me.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Floating particles background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Hero Section - Like a design interface */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        {/* Gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-[100px]"
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/60 backdrop-blur-xl border border-primary/20 mb-8 shadow-lg"
            >
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-base text-foreground font-medium">Creative Developer & Designer</span>
              <Wand2 className="w-5 h-5 text-secondary" />
            </motion.div>

            {/* Main heading */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Where Art
              </span>
              <br />
              <span className="text-foreground/80">meets</span>
              <br />
              <span className="bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
                Code
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Creando experiencias digitales hermosas donde el diseño y la programación se fusionan en armonía
            </p>

            {/* Inspirational quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-12 p-6 rounded-3xl bg-white/40 backdrop-blur-xl border border-primary/20 max-w-2xl mx-auto shadow-lg"
            >
              <p className="text-lg italic text-foreground/80 font-display">
                "El código es poesía, el diseño es arte, y juntos creamos magia digital 💜"
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/proyectos">
                <Button
                  size="lg"
                  className="rounded-full px-10 py-7 text-lg group bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-300"
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
                  Let's Connect 💌
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
          <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* About Me Section - 50/50 Layout */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                <div className="relative overflow-hidden rounded-3xl border border-primary/20 backdrop-blur-xl">
                  <img 
                    src={aboutImage} 
                    alt="Sobre mí" 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>

              {/* Text Side */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="backdrop-blur-xl bg-white/60 border border-primary/20 rounded-3xl p-10 hover:bg-white/80 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-4xl font-display font-bold">
                      <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Sobre Mí
                      </span>
                    </h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground mb-8">
                    <p className="text-lg leading-relaxed">
                      Soy una desarrolladora creativa que vive en la intersección entre el arte y la tecnología. 
                      Mi pasión es transformar ideas en experiencias digitales hermosas y funcionales.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Cada proyecto es una oportunidad para combinar diseño elegante con código limpio, 
                      creando soluciones que no solo se ven increíbles, sino que también resuelven problemas reales.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Cuando no estoy programando, me encontrarás explorando nuevas herramientas de diseño, 
                      tomando fotografías o disfrutando de una buena taza de café mientras escucho música lofi.
                    </p>
                  </div>
                  <Link to="/sobre-mi">
                    <Button 
                      variant="outline"
                      className="rounded-full px-8"
                    >
                      Conoce más sobre mí
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Me / Creative Identity */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Mi Mundo Creativo
              </span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Donde la pasión por el diseño se encuentra con el amor por el código
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Palette, title: "Design Lover", desc: "UI/UX que enamora", color: "primary" },
              { icon: Code2, title: "Code Poet", desc: "Código limpio y elegante", color: "secondary" },
              { icon: Wand2, title: "Creative Soul", desc: "Arte digital sin límites", color: "accent" },
              { icon: Zap, title: "Tech Explorer", desc: "Siempre aprendiendo", color: "primary" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative backdrop-blur-xl bg-white/60 border border-primary/20 rounded-3xl p-8 hover:bg-white/80 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(168,85,247,0.2)] h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* My Creative Process */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Mi Proceso Creativo
              </span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: Lightbulb,
                title: "Inspiración",
                desc: "Busco ideas en arte, naturaleza y tecnología",
              },
              {
                step: "02",
                icon: Figma,
                title: "Diseño",
                desc: "Creo prototipos visuales y experiencias únicas",
              },
              {
                step: "03",
                icon: Terminal,
                title: "Desarrollo",
                desc: "Doy vida al diseño con código elegante",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="backdrop-blur-xl bg-white/60 border border-primary/20 rounded-3xl p-8 hover:bg-white/80 hover:border-secondary/40 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(244,114,182,0.2)]">
                  <div className="text-6xl font-display font-bold text-primary/20 mb-4">
                    {item.step}
                  </div>
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/40 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Proyectos Favoritos
              </span>
            </h2>
            <p className="text-muted-foreground text-xl">
              Donde la creatividad cobra vida
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {[
              {
                title: "Creative Portfolio",
                desc: "Portafolio interactivo con animaciones fluidas",
                image: "🎨",
                tags: ["React", "Framer Motion", "Tailwind"],
              },
              {
                title: "Design System",
                desc: "Sistema de componentes reutilizables y hermosos",
                image: "✨",
                tags: ["TypeScript", "Storybook", "Figma"],
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="backdrop-blur-xl bg-white/60 border border-primary/20 rounded-3xl overflow-hidden hover:bg-white/80 hover:border-secondary/40 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(168,85,247,0.2)]">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-7xl">
                    {project.image}
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-1.5 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/proyectos">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8"
              >
                Ver Todos los Proyectos
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Experience & Skills */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Experiencia
              </span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                role: "Senior Creative Developer",
                company: "Digital Dreams Studio",
                period: "2022 - Presente",
                desc: "Creando experiencias web interactivas y sistemas de diseño modernos",
                icon: Briefcase,
              },
              {
                role: "UI/UX Designer & Frontend Dev",
                company: "Innovative Labs",
                period: "2020 - 2022",
                desc: "Diseño de interfaces y desarrollo frontend con React y Vue",
                icon: Palette,
              },
              {
                role: "Creative Developer",
                company: "Startup Creative",
                period: "2018 - 2020",
                desc: "Desarrollo web y diseño de branding digital",
                icon: Laptop,
              },
            ].map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="backdrop-blur-xl bg-white/60 border border-primary/20 rounded-3xl p-8 hover:bg-white/80 hover:border-secondary/40 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(244,114,182,0.2)]">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <exp.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-display font-bold mb-2">{exp.role}</h3>
                      <p className="text-primary font-semibold mb-2">{exp.company}</p>
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

      {/* Education Timeline */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Mi Formación
              </span>
            </h2>
            <p className="text-muted-foreground text-xl">
              Creciendo y aprendiendo constantemente
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />

            <div className="space-y-12">
              {[
                {
                  title: "Máster en Desarrollo Web Full Stack",
                  institution: "Tech University",
                  year: "2022",
                  desc: "Especialización en arquitecturas modernas y diseño de sistemas",
                },
                {
                  title: "Bootcamp Diseño UX/UI Avanzado",
                  institution: "Design Academy",
                  year: "2021",
                  desc: "Design thinking, prototipado y sistemas de diseño",
                },
                {
                  title: "Ingeniería en Desarrollo de Software",
                  institution: "Universidad Nacional",
                  year: "2018 - 2022",
                  desc: "Fundamentos de programación y desarrollo de aplicaciones",
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
                    className="absolute left-5 top-6 w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full border-4 border-background shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                  />

                  <div className="backdrop-blur-xl bg-white/60 border border-primary/20 rounded-3xl p-6 hover:bg-white/80 hover:border-accent/40 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(96,165,250,0.2)]">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold mb-1">{edu.title}</h3>
                        <p className="text-primary font-semibold mb-1">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground mb-2">{edu.year}</p>
                        <p className="text-muted-foreground text-sm">{edu.desc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interests & Hobbies */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Lo Que Me Inspira
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Coffee, label: "Café & Código" },
              { icon: Music, label: "Música Lofi" },
              { icon: Camera, label: "Fotografía" },
              { icon: BookOpen, label: "Lectura" },
              { icon: Star, label: "Astronomía" },
              { icon: Layers, label: "Arte Digital" },
              { icon: Wand2, label: "Ilustración" },
              { icon: Heart, label: "UI Animation" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="backdrop-blur-xl bg-white/60 border border-primary/20 rounded-2xl p-6 hover:bg-white/80 hover:border-secondary/40 transition-all duration-300 hover:scale-105 text-center"
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm font-medium text-foreground">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="backdrop-blur-xl bg-white/70 border border-primary/30 rounded-[3rem] p-16 hover:border-secondary/50 transition-all duration-500 shadow-[0_8px_40px_rgba(168,85,247,0.15)]">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Mail className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Let's Create Something Beautiful Together
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                ¿Tienes un proyecto en mente? Me encantaría colaborar contigo y crear algo increíble 💜✨
              </p>
              <Link to="/contacto">
                <Button
                  size="lg"
                  className="rounded-full px-10 py-7 text-lg group bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-300"
                >
                  Hablemos
                  <Heart className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform fill-current" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-primary/10 backdrop-blur-xl bg-white/40">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Hecho con <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" /> código y creatividad
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
