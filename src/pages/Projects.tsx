import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Search, ArrowRight, ExternalLink } from 'lucide-react'
import { FiGithub as Github } from 'react-icons/fi'
import { PageWrapper } from '../components/layout/PageWrapper'
import { SectionHeading } from '../components/common/SectionHeading'
import { FadeIn } from '../components/animations/FadeIn'
import { StaggerContainer } from '../components/animations/StaggerContainer'
import { projectsData } from '../data/projects'

export function Projects() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  // Extract unique categories (using primary tech stack as proxy for category)
  const categories = ['All', 'Python', 'Go', 'React', 'MCP', 'RAG']

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesCategory = selectedCategory === 'All' || project.techStack.includes(selectedCategory)

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-32">
        <SectionHeading 
          title="All Projects" 
          subtitle="Explore the complete collection of production AI systems, microservices, and applications I've built."
        />

        {/* Filters and Search */}
        <FadeIn delay={0.2} className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-slate-900/50 p-4 rounded-2xl border border-white/5">
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    selectedCategory === category 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'bg-transparent text-gray-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-auto min-w-[250px]">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
              />
            </div>

          </div>
        </FadeIn>

        {/* Projects Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-3xl overflow-hidden flex flex-col group h-full"
              >
                <div className="h-48 relative overflow-hidden bg-slate-900 border-b border-white/5">
                  {project.imageUrl ? (
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${project.imageUrl})` }} />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                      <span className="text-blue-500 font-display font-bold text-4xl opacity-50">{project.title.charAt(0)}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-display font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light mb-6 flex-grow">
                    {project.shortDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-slate-950/50 rounded-full text-xs font-medium text-gray-300 border border-white/5">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-3 py-1 bg-slate-900 rounded-full text-xs font-medium text-gray-500">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                    <Link 
                      to={`/project/${project.id}`}
                      className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
                    >
                      Case Study <ArrowRight size={16} />
                    </Link>
                    <div className="flex items-center gap-3 text-gray-500">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                          <Github size={18} />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </StaggerContainer>

        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-20 text-gray-500"
          >
            <p className="text-xl">No projects found matching your criteria.</p>
          </motion.div>
        )}
      </div>
    </PageWrapper>
  )
}
