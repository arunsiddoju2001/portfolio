import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { FiGithub as Github, FiLinkedin as Linkedin, FiTwitter as Twitter } from 'react-icons/fi'
import { socialLinks } from '../../data/navigation'
import { navLinks } from '../../data/navigation'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  // Define icons mapping since data file just passes strings
  const icons: Record<string, React.ReactNode> = {
    github: <Github size={20} />,
    linkedin: <Linkedin size={20} />,
    twitter: <Twitter size={20} />,
    mail: <Mail size={20} />
  }

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-white">
                AS
              </div>
              <span className="font-display font-bold text-xl text-white">Arun Siddoju</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6 text-sm leading-relaxed">
              Applied AI Engineer building production-grade LLM applications, AI agents, and high-performance microservices.
            </p>
            <div className="flex gap-4">
              {/* Fallback to socialLinks data or hardcode mapping */}
              <a href="https://github.com/arunsiddoju2001" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all border border-white/5">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/arunsiddoju" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all border border-white/5">
                <Linkedin size={18} />
              </a>
              <a href="mailto:arunsiddoju@example.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all border border-white/5">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 font-display">Navigation</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 font-display">Let's Connect</h4>
            <p className="text-sm text-gray-400 mb-4">
              Interested in collaborating on AI engineering projects or hiring me?
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center w-full px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors border border-white/10">
              Get in touch
            </Link>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} Arun Siddoju. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Built with React, Vite & Tailwind.
          </p>
        </div>
      </div>
    </footer>
  )
}
