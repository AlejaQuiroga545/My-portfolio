'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setStatus('idle')
    
    setTimeout(() => {
      setStatus('success')
      setFormData({ fullName: '', email: '', message: '' })
      
      setTimeout(() => {
        setStatus('idle')
      }, 3000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-effect rounded-2xl p-8"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative group">
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full bg-transparent border-0 border-b border-slate-300 pb-3 pt-2 text-slate-800 focus:outline-none focus:border-violet-500 transition-colors placeholder-slate-400 text-sm"
            placeholder="Full Name"
          />
          <span className="absolute left-0 bottom-3 w-0 h-0.5 bg-violet-500 group-focus-within:w-full transition-all duration-300"></span>
          {errors.fullName && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-xs mt-1"
            >
              {errors.fullName}
            </motion.p>
          )}
        </div>

        <div className="relative group">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent border-0 border-b border-slate-300 pb-3 pt-2 text-slate-800 focus:outline-none focus:border-violet-500 transition-colors placeholder-slate-400 text-sm"
            placeholder="Email"
          />
          <span className="absolute left-0 bottom-3 w-0 h-0.5 bg-violet-500 group-focus-within:w-full transition-all duration-300"></span>
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-xs mt-1"
            >
              {errors.email}
            </motion.p>
          )}
        </div>

        <div className="relative group">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full bg-transparent border-0 border-b border-slate-300 pb-3 pt-2 text-slate-800 focus:outline-none focus:border-violet-500 transition-colors resize-none placeholder-slate-400 text-sm"
            placeholder="Message"
          />
          <span className="absolute left-0 bottom-3 w-0 h-0.5 bg-violet-500 group-focus-within:w-full transition-all duration-300"></span>
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-xs mt-1"
            >
              {errors.message}
            </motion.p>
          )}
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-6 py-3 rounded-lg bg-violet-500 text-white font-medium text-sm hover:bg-violet-600 transition-colors shadow-lg shadow-violet-500/25"
        >
          Send Message
        </motion.button>

        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center text-sm"
          >
            Message sent successfully!
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center text-sm"
          >
            Failed to send message. Please try again.
          </motion.div>
        )}
      </form>
    </motion.div>
  )
}
