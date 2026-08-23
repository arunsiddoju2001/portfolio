import { Mail, Phone } from 'lucide-react';
import { FiGithub as Github, FiLinkedin as Linkedin } from 'react-icons/fi';
import { personalInfo } from '../../data/content';
import { useState } from 'react';

export function Contact() {
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  return (
    <section id="contact" className="py-32 relative z-10 bg-slate-950/80 border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Let's build something useful with AI.
        </h2>
        
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Interested in production GenAI, agentic systems, semantic AI, or AI infrastructure?
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href={personalInfo.links.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors border border-slate-700"
          >
            <Github size={20} /> GitHub
          </a>
          
          <a 
            href={personalInfo.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-[#0a66c2] text-white font-medium rounded-xl hover:bg-[#004182] transition-colors shadow-lg shadow-blue-900/20"
          >
            <Linkedin size={20} /> LinkedIn
          </a>
          
          <button 
            onClick={() => setShowEmail(!showEmail)}
            className="flex items-center gap-2 px-8 py-4 bg-white text-slate-950 font-medium rounded-xl hover:bg-gray-100 transition-colors"
          >
            <Mail size={20} /> {showEmail ? personalInfo.links.email : "Email"}
          </button>
          
          <button 
            onClick={() => setShowPhone(!showPhone)}
            className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors border border-slate-700 font-mono"
          >
            <Phone size={20} /> {showPhone ? personalInfo.links.phone : "Phone"}
          </button>
        </div>
      </div>
    </section>
  );
}
