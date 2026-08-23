import { motion } from 'framer-motion'
import { experienceData } from '../../data/experience'
import { CheckCircle2 } from 'lucide-react'
import { SectionHeading } from '../common/SectionHeading'
import { StaggerContainer } from '../animations/StaggerContainer'

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Experience" 
          subtitle="Building high-impact systems at scale."
        />

        <div className="max-w-5xl mx-auto">
          <StaggerContainer>
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                }}
                className="relative pl-8 md:pl-0 mb-16 last:mb-0"
              >
                <div className="md:grid md:grid-cols-4 gap-12">
                  {/* Sidebar timeline indicator for desktop */}
                  <div className="hidden md:block col-span-1 text-right pt-2 relative">
                    {exp.roles.map((role, i) => (
                      <div key={i} className="mb-6">
                        <h4 className="font-display font-medium text-gray-200 text-base">{role.title}</h4>
                        <p className="text-sm text-blue-400 mt-1 opacity-80">{role.duration}</p>
                      </div>
                    ))}
                    <div className="absolute top-4 -right-[31px] w-4 h-4 rounded-full bg-blue-500 ring-4 ring-slate-950 z-10 shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
                    <div className="absolute top-4 -right-[24px] w-[2px] h-[calc(100%+4rem)] bg-gradient-to-b from-blue-500/50 to-transparent -z-10" />
                  </div>

                  <div className="md:col-span-3 glass-card rounded-3xl p-10 hover:bg-slate-900/60 transition-colors duration-500">
                    <h3 className="text-3xl font-display font-bold text-white mb-2">{exp.company}</h3>
                    
                    {/* Mobile roles display */}
                    <div className="md:hidden mb-8 pl-4 border-l-2 border-blue-500/50 space-y-4">
                      {exp.roles.map((role, i) => (
                        <div key={i}>
                          <h4 className="font-display font-medium text-gray-200 text-base">{role.title}</h4>
                          <p className="text-sm text-blue-400 mt-1 opacity-80">{role.duration}</p>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-10 mt-10">
                      <div>
                        <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-5 flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-blue-500" /> Key Problems Solved
                        </h4>
                        <ul className="space-y-4">
                          {exp.problemsSolved.map((item, i) => (
                            <li key={i} className="text-gray-300 text-base leading-relaxed font-light">{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-5 flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-indigo-500" /> Architecture Highlights
                        </h4>
                        <ul className="space-y-4">
                          {exp.architecture.map((item, i) => (
                            <li key={i} className="text-gray-300 text-base leading-relaxed font-light">{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-5 flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-green-500" /> Business Impact
                        </h4>
                        <ul className="space-y-4">
                          {exp.businessImpact.map((item, i) => (
                            <li key={i} className="text-gray-300 text-base leading-relaxed font-light">{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-10 pt-8 border-t border-white/5">
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="px-4 py-1.5 bg-slate-950/50 rounded-full text-xs font-medium text-gray-300 border border-white/10">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
