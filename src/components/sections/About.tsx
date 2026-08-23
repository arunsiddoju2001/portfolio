import { BrainCircuit, Code2, Cpu } from 'lucide-react'
import { SectionHeading } from '../common/SectionHeading'
import { FadeIn } from '../animations/FadeIn'
import { StaggerContainer } from '../animations/StaggerContainer'
import { motion } from 'framer-motion'

export function About() {
  const cards = [
    {
      icon: <BrainCircuit className="text-blue-400" size={32} />,
      title: "Agentic Systems",
      description: "Building autonomous agents with secure tool calling (MCP) and dynamic reasoning capabilities."
    },
    {
      icon: <Code2 className="text-indigo-400" size={32} />,
      title: "Production LLMOps",
      description: "Deploying multi-model routing, prompt versioning, and rigorous evaluation pipelines."
    },
    {
      icon: <Cpu className="text-purple-400" size={32} />,
      title: "High-Performance Backend",
      description: "Architecting low-latency Go/Python microservices processing millions of daily requests."
    }
  ]

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 mb-20">
          <div className="lg:w-1/2">
            <SectionHeading 
              title="Engineering Intelligence" 
              subtitle="I build production-grade AI systems that solve real business problems at scale."
            />
          </div>
          <div className="lg:w-1/2">
            <FadeIn delay={0.2}>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                <p>
                  Instead of just wrapping API calls, I dive deep into context engineering, hybrid prompt orchestration, and semantic search. I architect systems that can handle massive concurrency while mitigating hallucinations and optimizing inference costs.
                </p>
                <p>
                  What excites me most about AI engineering is moving beyond conversational bots to create autonomous, agentic systems that can reason, plan, and securely execute tasks within enterprise environments.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {cards.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="glass-card p-10 rounded-3xl group"
            >
              <div className="mb-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border border-white/5 shadow-inner group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light">{item.description}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
