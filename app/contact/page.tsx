'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import InfoCard from '@/components/InfoCard'
import { motion } from 'framer-motion'
import { Mail, Linkedin, MessageCircle } from 'lucide-react'

const contactCards = [
  {
    icon: Mail,
    title: 'Email',
    content: 'alejaquirogag@gmail.com',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    content: 'linkedin.com/in/AlejandraQuiroga',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    content: '+57 314 297 0157',
  },
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 min-h-screen container mx-auto px-6 relative z-10">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 gradient-text">Get in touch</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Grid: Form + Contact Methods */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form with title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 rounded-2xl bg-white/30 backdrop-blur-md shadow-lg">
              <h2 className="text-2xl font-bold mb-4 gradient-text text-center">Send me a message</h2>
              <ContactForm />
            </div>
          </motion.div>

          {/* Contact methods */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold gradient-text mb-6">Other ways to reach me</h2>
            <div className="grid grid-cols-1 gap-6">
              {contactCards.map((card, index) => {
                const IconComponent = card.icon
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03, y: -2, boxShadow: '0 10px 25px rgba(139,92,246,0.2)' }}
                    className="p-6 rounded-2xl bg-white/30 backdrop-blur-md flex items-center gap-4 cursor-pointer transition-all duration-300"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-pink-500 text-white">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-lg">{card.title}</span>
                      <span className="text-slate-600 text-sm">{card.content}</span>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}