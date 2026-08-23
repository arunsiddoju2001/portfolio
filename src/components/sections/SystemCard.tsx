import { ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArchitectureDiagram } from './ArchitectureDiagram';

interface SystemCardProps {
  system: any; // Type according to content.ts
  index: number;
}

export function SystemCard({ system, index }: SystemCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="glass-panel rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500/30">
      <div 
        className="p-8 cursor-pointer flex justify-between items-center group"
        onClick={() => setExpanded(!expanded)}
      >
        <div>
          <div className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs text-blue-400 font-mono mb-4">
            {system.category}
          </div>
          <h3 className="text-2xl font-display font-bold text-white group-hover:text-blue-400 transition-colors">
            {system.title}
          </h3>
          {system.scale && (
            <p className="mt-2 text-sm text-gray-400 font-mono">{system.scale}</p>
          )}
        </div>
        <div className={`transform transition-transform duration-300 ${expanded ? 'rotate-90' : ''}`}>
          <ChevronRight size={24} className="text-gray-500 group-hover:text-white" />
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-white/5"
          >
            <div className="p-8 pt-6">
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {system.description}
              </p>

              <div className="mb-8 p-6 bg-slate-950/50 rounded-xl border border-white/5">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Architecture</h4>
                <ArchitectureDiagram systemId={system.id} />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {system.technologies && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {system.technologies.map((tech: string) => (
                        <span key={tech} className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-md text-sm text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {system.highlights && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Highlights</h4>
                    <ul className="space-y-2">
                      {system.highlights.map((highlight: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <span className="text-blue-500 mt-1">✓</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {system.metrics && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Metrics</h4>
                    <ul className="space-y-2">
                      {system.metrics.map((metric: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300 font-mono">
                          <span className="text-purple-500 mt-1">→</span>
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
