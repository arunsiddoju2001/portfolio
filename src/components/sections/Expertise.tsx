import { motion } from 'framer-motion'
import { skillsData } from '../../data/skills'
import { SectionHeading } from '../common/SectionHeading'
import { StaggerContainer } from '../animations/StaggerContainer'

export function Expertise() {
  return (
    <section id="expertise" className="py-32 relative bg-slate-950/50">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Technical Expertise" 
          subtitle="A curated stack of technologies I use to build scalable, low-latency AI applications and high-throughput microservices."
          centered
        />

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="glass-card rounded-3xl p-10 hover:-translate-y-2 transition-transform duration-500"
            >
              <h3 className="text-xl font-display font-bold mb-8 text-gray-100 border-b border-white/10 pb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-slate-800/80 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-blue-600 hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all border border-white/5 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
