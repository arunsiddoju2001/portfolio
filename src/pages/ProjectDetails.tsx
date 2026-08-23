import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ExternalLink, ShieldCheck, Target, Zap, LayoutTemplate } from 'lucide-react'
import { FiGithub as Github } from 'react-icons/fi'
import { PageWrapper } from '../components/layout/PageWrapper'
import { projectsData } from '../data/projects'
import { FadeIn } from '../components/animations/FadeIn'
import { StaggerContainer } from '../components/animations/StaggerContainer'
import { motion } from 'framer-motion'

export function ProjectDetails() {
  const { id } = useParams()
  const project = projectsData.find(p => p.id === id)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <PageWrapper>
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-slate-950 z-0" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] z-0" />
        
        {project.imageUrl && (
          <>
            <div className="absolute inset-0 bg-cover bg-center opacity-20 blur-xl z-0" style={{ backgroundImage: `url(${project.imageUrl})` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40 z-0" />
          </>
        )}

        <div className="container mx-auto px-6 relative z-10">
          <Link to="/projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
          
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white leading-tight">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-10 font-light leading-relaxed">
                {project.shortDescription}
              </p>
              
              <div className="flex flex-wrap gap-4 items-center">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-slate-800 text-white font-medium hover:bg-slate-700 transition-colors flex items-center gap-2 border border-white/10">
                    <Github size={18} /> View Source
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-16">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-20">
            {project.imageUrl && (
              <FadeIn>
                <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-auto" />
                </div>
              </FadeIn>
            )}

            <StaggerContainer className="space-y-20">
              <motion.section variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
                <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3 text-white">
                  <Target className="text-blue-500" /> The Problem
                </h2>
                <div className="glass-card p-8 rounded-3xl">
                  <p className="text-gray-300 text-lg leading-relaxed font-light">{project.problem}</p>
                </div>
              </motion.section>

              <motion.section variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
                <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3 text-white">
                  <LayoutTemplate className="text-purple-500" /> Architecture & Solution
                </h2>
                <div className="glass-card p-8 rounded-3xl border-l-2 border-l-purple-500">
                  <p className="text-gray-300 text-lg leading-relaxed font-light">{project.architecture}</p>
                </div>
              </motion.section>

              <motion.section variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
                <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3 text-white">
                  <ShieldCheck className="text-red-400" /> Engineering Challenges
                </h2>
                <ul className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-4 glass-card p-6 rounded-2xl">
                      <div className="mt-1 w-2 h-2 rounded-full bg-red-400 shrink-0" />
                      <span className="text-gray-300 leading-relaxed">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>

              <motion.section variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
                <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3 text-white">
                  <Zap className="text-green-500" /> Business Impact & Scale
                </h2>
                <div className="bg-gradient-to-br from-green-900/20 to-slate-900 border border-green-500/20 rounded-3xl p-8 mb-8">
                  <p className="text-green-400 font-medium text-lg mb-6">{project.scale}</p>
                  <ul className="space-y-4">
                    {project.businessImpact.map((impact, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircleIcon />
                        <span className="text-gray-300">{impact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.section>

              <motion.section variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
                <h2 className="text-2xl font-display font-bold mb-6 text-white">Lessons Learned</h2>
                <div className="glass-card p-8 rounded-3xl">
                  <ul className="space-y-4 list-disc list-inside text-gray-300 leading-relaxed font-light marker:text-blue-500">
                    {project.lessonsLearned.map((lesson, index) => (
                      <li key={index}>{lesson}</li>
                    ))}
                  </ul>
                </div>
              </motion.section>
            </StaggerContainer>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              <FadeIn delay={0.3}>
                <div className="glass-panel p-8 rounded-3xl">
                  <h3 className="text-lg font-display font-bold mb-6 text-white">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-4 py-2 bg-slate-900/80 rounded-xl text-sm font-medium text-gray-300 border border-white/5 shadow-inner">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.4}>
                <div className="glass-card p-8 rounded-3xl border border-blue-500/20 bg-blue-900/5 flex flex-col items-center text-center">
                  <h3 className="text-lg font-display font-bold mb-4 text-white">Want to discuss this project?</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    I'm open to discussing the architecture and tradeoffs of this system.
                  </p>
                  <Link to="/contact" className="w-full block text-center px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors">
                    Contact Me
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
          
        </div>
      </div>
    </PageWrapper>
  )
}

function CheckCircleIcon() {
  return (
    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}
