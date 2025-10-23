import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Plataforma completa de comercio electrónico con sistema de pagos integrado y panel de administración",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    gradient: "from-primary/20 to-accent/20",
  },
  {
    id: 2,
    title: "Design System",
    description: "Sistema de diseño escalable con componentes reutilizables y documentación interactiva",
    tags: ["React", "Storybook", "Tailwind", "TypeScript"],
    gradient: "from-accent/20 to-primary/20",
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "Generador de contenido impulsado por IA con interfaz intuitiva y resultados personalizables",
    tags: ["Next.js", "OpenAI", "Tailwind", "Supabase"],
    gradient: "from-primary/20 to-accent/20",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Sitio web de portafolio moderno con animaciones fluidas y diseño responsivo",
    tags: ["React", "Framer Motion", "Tailwind"],
    gradient: "from-accent/20 to-primary/20",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mis Proyectos
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Una colección de trabajos que reflejan mi pasión por crear experiencias digitales excepcionales
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300`}
              />
              <div className="relative backdrop-blur-xl bg-card/50 border border-border/50 rounded-3xl p-8 hover:border-primary/50 transition-all duration-300">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary/50"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </Button>
                  <Button
                    size="sm"
                    className="rounded-full bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                  >
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">¿Quieres ver más?</p>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary/50"
          >
            <Github className="w-5 h-5 mr-2" />
            Ver en GitHub
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
