import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { techStackLayers } from '../../data/content';
import { SectionHeading } from '../common/SectionHeading';

export function TechStack() {
  const [activeLayer, setActiveLayer] = useState<string | null>(techStackLayers[0].name);

  return (
    <section id="stack" className="py-24 bg-slate-950/50 relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="My AI Engineering Stack" 
          subtitle="Technologies" 
        />
        
        <div className="grid md:grid-cols-12 gap-8 mt-16 max-w-6xl mx-auto">
          {/* Layer Selector */}
          <div className="md:col-span-4 space-y-2">
            {techStackLayers.map((layer) => (
              <button
                key={layer.name}
                onClick={() => setActiveLayer(layer.name)}
                className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 ${
                  activeLayer === layer.name 
                    ? 'bg-blue-600/10 border border-blue-500/30 text-blue-400 font-semibold' 
                    : 'bg-slate-900 border border-white/5 text-gray-400 hover:bg-slate-800'
                }`}
              >
                {layer.name}
              </button>
            ))}
          </div>
          
          {/* Layer Details */}
          <div className="md:col-span-8">
            <div className="bg-slate-900 border border-white/5 rounded-2xl p-8 min-h-[300px] glass-panel">
              <AnimatePresence mode="wait">
                {techStackLayers.map((layer) => 
                  activeLayer === layer.name && (
                    <motion.div
                      key={layer.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-display font-bold text-white mb-8">
                        {layer.name}
                      </h3>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {layer.items.map((item, i) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-center shadow-inner"
                          >
                            <span className="text-sm font-medium text-gray-300">
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
