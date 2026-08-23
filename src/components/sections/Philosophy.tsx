import { motion } from 'framer-motion';
import { philosophy } from '../../data/content';
import { SectionHeading } from '../common/SectionHeading';

export function Philosophy() {
  return (
    <section id="engineering" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="I engineer AI systems end-to-end." 
          subtitle="Engineering Philosophy" 
        />
        
        <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">
          {philosophy.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 transition-colors glass-card"
            >
              <h3 className="text-xl font-display font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Visual Workflow */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center bg-slate-900/30 rounded-xl border border-white/5 p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
            
            {[
              "LLM Applications",
              "Context Engineering",
              "Structured Generation",
              "Semantic Search",
              "Agentic Workflows",
              "AI Evaluation",
              "Backend Infrastructure",
              "Production Deployment"
            ].map((step, index, array) => (
              <div key={step} className="flex flex-col md:flex-row items-center relative z-10 w-full md:w-auto">
                <div className="text-xs font-mono text-gray-400 whitespace-nowrap md:rotate-[-45deg] md:transform-origin-bottom-left md:mb-4">
                  {step}
                </div>
                {index < array.length - 1 && (
                  <>
                    <div className="md:hidden w-px h-6 bg-blue-500/30 my-2" />
                    <div className="hidden md:block w-8 h-px bg-blue-500/30 mx-4" />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
