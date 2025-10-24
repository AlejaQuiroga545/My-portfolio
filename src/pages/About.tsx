import { motion } from "framer-motion";
import { 
  Heart, Code2, Palette, Coffee, Music, Camera, Star, 
  Sparkles, Zap, Target, Award, Users, Laptop, Book
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import aboutImage from "@/assets/about-me.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-7xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Sobre Mí
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Una desarrolladora creativa apasionada por fusionar arte y tecnología
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mi Historia */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 md:order-1">
                <div className="backdrop-blur-xl bg-white/60 border border-primary/20 rounded-3xl p-8 hover:bg-white/80 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-display font-bold">Mi Historia</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Desde pequeña, siempre me fascinó la idea de crear cosas hermosas. Lo que comenzó con dibujos 
                      y arte tradicional, evolucionó hacia el diseño digital cuando descubrí Photoshop a los 15 años.
                    </p>
                    <p>
                      Mi primer encuentro con el código fue casi por accidente: quería personalizar mi blog y eso 
                      me llevó a aprender HTML y CSS. Fue amor a primera vista. Descubrí que programar era como 
                      resolver puzzles creativos, y me enamoré de la sensación de dar vida a mis diseños.
                    </p>
                    <p>
                      Hoy, combino mi amor por el diseño visual con mi pasión por el código limpio, creando 
                      experiencias digitales que no solo funcionan perfectamente, sino que también inspiran y 
                      conectan con las personas.
                    </p>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="order-1 md:order-2"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
                  <img 
                    src={aboutImage} 
                    alt="Sobre mí" 
                    className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores y Filosofía */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Mis Valores
              </span>
            </h2>
            <p className="text-muted-foreground text-xl">
              Los principios que guían mi trabajo creativo
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Heart,
                title: "Pasión",
                desc: "Amo lo que hago y se nota en cada pixel, cada línea de código",
                color: "from-primary/20 to-secondary/20",
              },
              {
                icon: Target,
                title: "Perfección",
                desc: "Atención al detalle y búsqueda constante de la excelencia",
                color: "from-secondary/20 to-accent/20",
              },
              {
                icon: Users,
                title: "Empatía",
                desc: "Diseño pensando en las personas y sus necesidades reales",
                color: "from-accent/20 to-primary/20",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="backdrop-blur-xl bg-white/60 border border-primary/20 rounded-3xl p-8 hover:bg-white/80 hover:border-secondary/40 transition-all duration-500 h-full text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Herramientas y Skills */}
      <section className="py-24 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Mi Stack Creativo
              </span>
            </h2>
            <p className="text-muted-foreground text-xl">
              Las herramientas que uso para dar vida a mis ideas
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Design Tools */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="backdrop-blur-xl bg-white/60 border border-primary/20 rounded-3xl p-8 hover:bg-white/80 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl flex items-center justify-center">
                      <Palette className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-display font-bold">Diseño</h3>
                  </div>
                  <div className="space-y-3">
                    {["Figma", "Adobe XD", "Photoshop", "Illustrator", "Blender"].map((tool) => (
                      <div key={tool} className="flex items-center gap-3 p-3 rounded-xl bg-white/40 hover:bg-white/60 transition-colors">
                        <Star className="w-4 h-4 text-primary" />
                        <span className="font-medium">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Development Tools */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="backdrop-blur-xl bg-white/60 border border-primary/20 rounded-3xl p-8 hover:bg-white/80 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-display font-bold">Desarrollo</h3>
                  </div>
                  <div className="space-y-3">
                    {["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js"].map((tool) => (
                      <div key={tool} className="flex items-center gap-3 p-3 rounded-xl bg-white/40 hover:bg-white/60 transition-colors">
                        <Zap className="w-4 h-4 text-accent" />
                        <span className="font-medium">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Logros & Certificaciones
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Award, label: "50+", desc: "Proyectos Completados" },
              { icon: Users, label: "30+", desc: "Clientes Felices" },
              { icon: Book, label: "15+", desc: "Certificaciones" },
              { icon: Laptop, label: "5", desc: "Años de Experiencia" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="backdrop-blur-xl bg-white/60 border border-primary/20 rounded-3xl p-8 hover:bg-white/80 hover:border-secondary/40 transition-all duration-500 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-4xl font-display font-bold text-primary mb-2">{stat.label}</div>
                  <p className="text-muted-foreground text-sm">{stat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies & Inspiration */}
      <section className="py-24 bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Fuera del Código
              </span>
            </h2>
            <p className="text-muted-foreground text-xl">
              Las cosas que me inspiran y recargan mi creatividad
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: Coffee, label: "Café artesanal", color: "from-primary" },
              { icon: Music, label: "Música lofi", color: "from-secondary" },
              { icon: Camera, label: "Fotografía", color: "from-accent" },
              { icon: Book, label: "Lectura", color: "from-primary" },
              { icon: Star, label: "Astronomía", color: "from-secondary" },
              { icon: Palette, label: "Pintura digital", color: "from-accent" },
            ].map((hobby, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="backdrop-blur-xl bg-white/60 border border-primary/20 rounded-2xl p-6 hover:bg-white/80 hover:scale-105 transition-all duration-300 text-center"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${hobby.color}/20 to-transparent rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <hobby.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-medium text-foreground text-sm">{hobby.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="backdrop-blur-xl bg-white/70 border border-primary/30 rounded-[3rem] p-12 hover:border-secondary/50 transition-all duration-500">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  ¿Trabajamos juntos?
                </span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Si tienes un proyecto en mente o simplemente quieres conversar sobre diseño y código, 
                me encantaría conocerte
              </p>
              <Link to="/contacto">
                <Button 
                  size="lg"
                  className="rounded-full px-10 py-7 text-lg bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-300"
                >
                  Hablemos 💜
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
