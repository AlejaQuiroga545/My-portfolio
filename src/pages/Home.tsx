import { motion } from "framer-motion";
import { ArrowRight, Code2, Palette, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-[100px]"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Diseño & Código</span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Creatividad
              </span>
              <br />
              <span className="text-foreground">meets</span>
              <br />
              <span className="bg-gradient-to-r from-accent via-primary to-foreground bg-clip-text text-transparent">
                Tecnología
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Transformo ideas en experiencias digitales impactantes combinando diseño elegante con código limpio
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/proyectos">
                <Button
                  size="lg"
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] transition-all duration-300"
                >
                  Ver Proyectos
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 text-lg border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
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

      {/* Skills Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Mis Pasiones
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Donde el arte se encuentra con la lógica
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative backdrop-blur-xl bg-card/50 border border-border/50 rounded-3xl p-8 hover:border-primary/50 transition-all duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Palette className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Diseño</h3>
                <p className="text-muted-foreground">
                  Creo interfaces que cautivan, con atención al detalle y una estética moderna que conecta con los usuarios
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative backdrop-blur-xl bg-card/50 border border-border/50 rounded-3xl p-8 hover:border-primary/50 transition-all duration-300">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Desarrollo</h3>
                <p className="text-muted-foreground">
                  Desarrollo soluciones robustas y escalables con tecnologías modernas, transformando diseños en código eficiente
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
