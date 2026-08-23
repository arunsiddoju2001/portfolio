import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, MessageSquare } from 'lucide-react'
import { FiGithub as Github, FiLinkedin as Linkedin, FiTwitter as Twitter } from 'react-icons/fi'
import { PageWrapper } from '../components/layout/PageWrapper'
import { SectionHeading } from '../components/common/SectionHeading'
import { FadeIn } from '../components/animations/FadeIn'
import { AnimatedBlob } from '../components/animations/AnimatedBlob'

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <PageWrapper>
      <div className="relative pt-32 pb-20 overflow-hidden min-h-[90vh]">
        <AnimatedBlob />
        
        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
          <SectionHeading 
            title="Get in Touch" 
            subtitle="Interested in collaborating on AI engineering projects, discussing system architectures, or hiring me? I'd love to hear from you."
          />

          <div className="grid lg:grid-cols-2 gap-16 mt-16">
            
            {/* Contact Info */}
            <FadeIn delay={0.2}>
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4">Let's build something great together.</h3>
                  <p className="text-gray-400 leading-relaxed font-light text-lg">
                    Whether you have a specific project in mind or just want to chat about the latest in AI and agentic systems, my inbox is always open.
                  </p>
                </div>

                <div className="space-y-6">
                  <a href="mailto:arun.siddoju@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors group p-4 glass-card rounded-2xl w-fit">
                    <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                      <Mail className="text-blue-500" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Email Me At</p>
                      <p className="font-display font-medium text-lg">arun.siddoju@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex gap-4">
                    <a href="https://github.com/ArunSiddoju" target="_blank" rel="noreferrer" className="p-4 glass-card rounded-2xl text-gray-400 hover:text-white hover:bg-slate-800 transition-all border border-white/5 hover:border-white/10 group">
                      <Github size={24} className="group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://www.linkedin.com/in/arun-siddoju/" target="_blank" rel="noreferrer" className="p-4 glass-card rounded-2xl text-gray-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/30 transition-all border border-white/5 group">
                      <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://twitter.com/arunsiddoju" target="_blank" rel="noreferrer" className="p-4 glass-card rounded-2xl text-gray-400 hover:text-white hover:bg-sky-500/20 hover:border-sky-500/30 transition-all border border-white/5 group">
                      <Twitter size={24} className="group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn delay={0.4}>
              <div className="glass-card p-10 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12 h-full"
                  >
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                      <MessageSquare className="text-green-500" size={32} />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-4">Message Sent!</h3>
                    <p className="text-gray-400">Thanks for reaching out. I'll get back to you as soon as possible.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-8 px-6 py-2 bg-white/5 hover:bg-white/10 rounded-full text-sm font-medium transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
                        <input
                          type="text"
                          id="name"
                          required
                          className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-gray-400">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        required
                        className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                        placeholder="Project Discussion"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all ${
                        isSubmitting 
                          ? 'bg-slate-800 text-gray-400 cursor-not-allowed' 
                          : 'bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]'
                      }`}
                    >
                      {isSubmitting ? (
                        <>Processing...</>
                      ) : (
                        <>Send Message <Send size={18} /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
