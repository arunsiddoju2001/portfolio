import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { FiGithub as Github } from 'react-icons/fi'
import { projectsData } from '../../data/projects'
import { SectionHeading } from '../common/SectionHeading'
import { FadeIn } from '../animations/FadeIn'

export function ProjectsPreview() {
  const featuredProjects = projectsData.slice(0, 3)

  return (
    <section id="projects" className="py-32 relative bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="Recent work focusing on AI systems, agentic architectures, and high-performance infrastructure."
          />
          <FadeIn delay={0.2}>
            <Link to="/projects" className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors group text-lg font-medium">
              View All Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>

        <div className="space-y-12">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <div className="glass-panel rounded-3xl overflow-hidden group">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-10 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-display font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
                      {project.shortDescription}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-10">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span key={tech} className="px-4 py-1.5 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium border border-blue-500/20">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-4 py-1.5 bg-slate-800/50 text-gray-400 rounded-full text-xs font-medium border border-white/5">
                          +{project.techStack.length - 4} more
                        </span>
                      )}
                    </div>
                    
                    <div className="mt-auto flex items-center gap-6">
                      <Link 
                        to={`/project/${project.id}`}
                        className="inline-flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors"
                      >
                        Case Study <ArrowRight size={18} />
                      </Link>
                      <div className="flex items-center gap-4 text-gray-500">
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                            <Github size={20} />
                          </a>
                        )}
                        {project.demoUrl && (
                          <a href={project.demoUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative h-64 lg:h-auto overflow-hidden bg-slate-900 border-t lg:border-t-0 lg:border-l border-white/5">
                    {project.imageUrl ? (
                      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${project.imageUrl})` }} />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                        <span className="text-gray-600 font-display font-medium text-lg">Project Preview</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
