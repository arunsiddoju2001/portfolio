import { motion } from 'framer-motion';
import { systems } from '../../data/content';
import { SectionHeading } from '../common/SectionHeading';
import { SystemCard } from './SystemCard';

export function Systems() {
  return (
    <section id="systems" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Major AI Systems" 
          subtitle="Production Portfolio" 
        />
        
        <div className="mt-16 space-y-24 max-w-5xl mx-auto">
          {systems.map((system, index) => (
            <motion.div
              key={system.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SystemCard system={system} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
