import { motion } from 'framer-motion';
import { infrastructure } from '../../data/content';
import { SectionHeading } from '../common/SectionHeading';
import { ArrowDown } from 'lucide-react';

export function Scale() {
  return (
    <section className="py-24 bg-slate-950/30 relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Engineering at Scale" 
          subtitle="Infrastructure & Performance" 
        />
        
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
          {infrastructure.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-slate-900 border border-white/5 glass-card flex flex-col items-center text-center"
            >
              <h3 className="text-xl font-display font-semibold text-white mb-6">
                {item.title}
              </h3>
              
              <div className="flex flex-col items-center justify-center mb-8 w-full">
                <div className="px-6 py-3 bg-slate-950 border border-slate-800 rounded-lg text-gray-300 font-mono w-full">
                  {item.flow[0]}
                </div>
                <div className="my-2 text-blue-500">
                  <ArrowDown size={20} />
                </div>
                <div className="px-6 py-3 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400 font-mono w-full">
                  {item.flow[1]}
                </div>
              </div>
              
              <div className="mt-auto space-y-2 w-full">
                {item.metrics.map((metric, i) => (
                  <div key={i} className="text-sm text-gray-400 font-medium">
                    {metric}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
