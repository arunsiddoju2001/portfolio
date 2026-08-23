import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { FiGithub as Github } from 'react-icons/fi';
import { personalInfo } from '../../data/content';

const pipelineSteps = [
  "User",
  "Context",
  "LLM / Agent",
  "Tools / Retrieval",
  "Validation",
  "Production System"
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 font-medium text-sm mb-6 tracking-wide uppercase">
              Applied AI Engineer
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
              Building AI systems that work <span className="text-gradient">beyond the demo.</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
              {personalInfo.heroSubtext}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#systems"
                className="flex items-center gap-2 px-6 py-3 bg-white text-slate-950 font-medium rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Explore My Work <ArrowRight size={18} />
              </a>
              <a 
                href={personalInfo.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-700 transition-colors border border-slate-700"
              >
                <Github size={18} /> View GitHub
              </a>
              <a 
                href={personalInfo.links.resume}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-700 transition-colors border border-slate-700"
              >
                <FileText size={18} /> Download Resume
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5 rounded-2xl border border-white/10 p-8 glass-panel">
                <div className="flex flex-col items-center gap-4">
                  {pipelineSteps.map((step, index) => (
                    <div key={step} className="flex flex-col items-center w-full">
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.15 }}
                        className="w-full text-center py-3 px-6 rounded-lg bg-slate-900 border border-white/10 shadow-inner font-mono text-sm text-gray-300"
                      >
                        {step}
                      </motion.div>
                      {index < pipelineSteps.length - 1 && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 24, opacity: 1 }}
                          transition={{ delay: 0.5 + index * 0.15 }}
                          className="w-px bg-gradient-to-b from-blue-500/50 to-purple-500/50 my-1"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
