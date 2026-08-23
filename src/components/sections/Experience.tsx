import { motion } from 'framer-motion';
import { experience, education } from '../../data/content';
import { SectionHeading } from '../common/SectionHeading';

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-950/50 relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Career Progression" 
          subtitle="Experience" 
        />
        
        <div className="max-w-3xl mx-auto mt-16">
          {experience.map((exp) => (
            <div key={exp.company} className="relative">
              <div className="mb-12">
                <h3 className="text-2xl font-display font-bold text-white mb-2">{exp.company}</h3>
                <p className="text-gray-400">{exp.location}</p>
              </div>
              
              <div className="space-y-12">
                {exp.roles.map((role, index) => (
                  <motion.div 
                    key={role.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 md:pl-0"
                  >
                    <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                      <div className="md:col-span-1 hidden md:block text-right pt-1">
                        <span className="text-sm font-mono text-gray-400">{role.period}</span>
                      </div>
                      
                      <div className="md:col-span-3 relative border-l-2 border-slate-800 pl-8 pb-12 last:pb-0 md:border-l-0 md:pl-0 md:border-l-2 md:pl-8">
                        {/* Timeline dot */}
                        <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-blue-500 z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                        
                        <div className="md:hidden mb-2">
                          <span className="text-sm font-mono text-blue-400">{role.period}</span>
                        </div>
                        
                        <h4 className="text-xl font-semibold text-white">{role.title}</h4>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-20 pt-16 border-t border-white/5">
            <h3 className="text-2xl font-display font-bold text-white mb-10">Education</h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div 
                  key={edu.institution}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 md:pl-0"
                >
                  <div className="md:grid md:grid-cols-4 md:gap-8 items-center">
                    <div className="md:col-span-1 hidden md:block text-right">
                      {/* Optional timeframe placeholder if needed in the future */}
                    </div>
                    
                    <div className="md:col-span-3 relative border-l-2 border-slate-800 pl-8 pb-8 last:pb-0 md:border-l-0 md:pl-0 md:border-l-2 md:pl-8">
                      <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-purple-500 z-10 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                      
                      <h4 className="text-xl font-semibold text-white">{edu.institution}</h4>
                      <p className="text-gray-400 mt-1">{edu.degree}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
