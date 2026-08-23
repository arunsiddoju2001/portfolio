import { motion } from 'framer-motion'
import { PageWrapper } from '../components/layout/PageWrapper'
import { Download } from 'lucide-react'

export function ResumePage() {
  const resumeUrl = "https://drive.google.com/file/d/1ycNlmq6-k3xPD4mY3CJ5Up-9U4LHI6Dr/view?usp=sharing"
  const embedUrl = "https://drive.google.com/file/d/1ycNlmq6-k3xPD4mY3CJ5Up-9U4LHI6Dr/preview"
  
  return (
    <PageWrapper className="min-h-screen flex flex-col">
      <div className="container mx-auto px-6 py-24 flex-grow flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4"
        >
          <div>
            <h1 className="text-4xl font-bold text-gray-100">Interactive Resume</h1>
            <p className="text-gray-400 mt-2">View online or download for offline reading.</p>
          </div>
          
          <a href={resumeUrl} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center justify-center gap-2 transition-all">
            <Download size={18} />
            Download PDF
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-grow glass-card rounded-2xl border border-slate-700 p-2 sm:p-8 flex items-center justify-center min-h-[600px]"
        >
          <div className="text-center text-gray-400 w-full h-full flex flex-col items-center">
            <div className="w-full h-full min-h-[800px]">
              <iframe
                title="Resume PDF"
                src={embedUrl}
                className="w-full h-full border-0 rounded-lg bg-white"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  )
}
