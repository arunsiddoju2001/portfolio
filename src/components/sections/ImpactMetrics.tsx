import { motion } from 'framer-motion';
import { impactMetrics } from '../../data/content';

export function ImpactMetrics() {
  return (
    <section className="py-20 bg-slate-950 border-y border-white/5 relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col gap-2"
            >
              <span className="text-3xl md:text-4xl font-display font-bold text-white">
                {metric.value}
              </span>
              <span className="text-sm text-gray-400 font-medium tracking-wide uppercase">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
