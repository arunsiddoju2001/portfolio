import { motion } from 'framer-motion';
import { projects } from '../../data/content';
import { SectionHeading } from '../common/SectionHeading';
import { FiGithub as Github } from 'react-icons/fi';

export function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Personal Projects" 
          subtitle="Applied AI" 
        />
        
        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col p-8 rounded-2xl bg-slate-900/50 border border-white/5 glass-card"
            >
              <div className="inline-block self-start px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs text-purple-400 font-mono mb-6">
                {project.category}
              </div>
              
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-8 leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <div className="mb-8">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Capabilities</h4>
                <ul className="space-y-1">
                  {project.capabilities.map((cap, i) => (
                    <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5">•</span>
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto pt-6 border-t border-white/5">
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
                >
                  <Github size={18} />
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
