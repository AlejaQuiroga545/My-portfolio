import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4">
            <a 
              href="https://github.com/AlejaQuiroga545" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-pastel-pink hover:bg-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="www.linkedin.com/in/alejandra-quiroga-11bb40311" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-pastel-lavender hover:bg-secondary transition-all duration-300 hover:shadow-lg hover:shadow-secondary/50"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:alejandraquirogag802@gmail.com"
              className="p-3 rounded-full bg-pastel-lilac hover:bg-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/50"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Made by Aleja Quiroga
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;