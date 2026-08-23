import { motion } from 'framer-motion';
import { engineeringDecisions } from '../../data/content';
import { SectionHeading } from '../common/SectionHeading';
import { Lightbulb } from 'lucide-react';

export function Decisions() {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Engineering Decisions" 
          subtitle="Real-world choices" 
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
          {engineeringDecisions.map((decision, index) => (
            <motion.div
              key={decision.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-slate-900 border border-white/5 hover:border-blue-500/30 transition-all glass-card relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Lightbulb size={48} className="text-blue-500" />
              </div>
              
              <h3 className="text-lg font-display font-semibold text-white mb-4 relative z-10">
                {decision.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed relative z-10">
                {decision.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
