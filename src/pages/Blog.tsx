import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { PageWrapper } from '../components/layout/PageWrapper'
import { SectionHeading } from '../components/common/SectionHeading'
import { FadeIn } from '../components/animations/FadeIn'
import { StaggerContainer } from '../components/animations/StaggerContainer'
import { blogPosts } from '../data/blog'
import { motion } from 'framer-motion'

export function Blog() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-32 max-w-6xl">
        <SectionHeading 
          title="Writing & Thoughts" 
          subtitle="Articles, tutorials, and insights on building AI systems, scalable backends, and engineering practices."
        />

        <StaggerContainer className="grid md:grid-cols-2 gap-8 mt-16">
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="glass-card rounded-3xl overflow-hidden group flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden border-b border-white/5">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: `url(${post.image})` }} 
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors duration-300" />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {post.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-950/80 backdrop-blur-md rounded-full text-xs font-medium text-gray-200 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-medium uppercase tracking-wider">
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed font-light mb-8 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${post.id}`} 
                  className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors mt-auto w-fit"
                >
                  Read Article <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </StaggerContainer>
      </div>
    </PageWrapper>
  )
}
