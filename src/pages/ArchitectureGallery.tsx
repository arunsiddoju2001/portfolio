import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PageWrapper } from '../components/layout/PageWrapper'
import { SectionHeading } from '../components/common/SectionHeading'
import { FadeIn } from '../components/animations/FadeIn'
import { StaggerContainer } from '../components/animations/StaggerContainer'
import { architectures } from '../data/architecture'
import { X, ZoomIn } from 'lucide-react'

export function ArchitectureGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-32 max-w-6xl">
        <SectionHeading 
          title="Architecture Gallery" 
          subtitle="High-level system designs and architecture diagrams of the production AI systems I've built."
        />

        <StaggerContainer className="space-y-24 mt-16">
          {architectures.map((arch, index) => (
            <motion.div
              key={arch.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="glass-card p-10 rounded-3xl"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-display font-bold text-white mb-4">{arch.title}</h2>
                <p className="text-gray-400 text-lg leading-relaxed font-light">{arch.description}</p>
              </div>
              
              <div 
                className="relative w-full h-[300px] md:h-[500px] bg-slate-900 rounded-2xl overflow-hidden group cursor-pointer border border-white/5"
                onClick={() => setSelectedImage(arch.imageUrl)}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: `url(${arch.imageUrl})` }} 
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-4 bg-slate-950/80 backdrop-blur-md rounded-full text-white">
                    <ZoomIn size={32} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Architecture Diagram"
              className="max-w-full max-h-full rounded-xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  )
}
