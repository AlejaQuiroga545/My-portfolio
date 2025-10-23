import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("contact_submissions").insert([
        {
          full_name: formData.fullName,
          email: formData.email,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      toast({
        title: "¡Mensaje enviado!",
        description: "Gracias por contactarme. Te responderé pronto.",
      });

      setFormData({ fullName: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              Hablemos
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a hacerlas realidad
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative backdrop-blur-xl bg-card/50 border border-border/50 rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Envíame un mensaje</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                    Nombre completo
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border/50 rounded-2xl focus:border-primary/50 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border/50 rounded-2xl focus:border-primary/50 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-background/50 border-border/50 rounded-2xl focus:border-primary/50 transition-colors resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl py-6 text-lg shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] transition-all duration-300"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar mensaje
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
