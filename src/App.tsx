import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { AnimatePresence } from 'framer-motion'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Home } from './pages/Home'
import { ProjectDetails } from './pages/ProjectDetails'
import { Projects } from './pages/Projects'
import { ArchitectureGallery } from './pages/ArchitectureGallery'
import { Blog } from './pages/Blog'
import { Contact } from './pages/Contact'
import { ResumePage } from './pages/ResumePage'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/architecture" element={<ArchitectureGallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Helmet>
        <title>Arun Siddoju | Applied AI Engineer</title>
        <meta name="description" content="Portfolio of Arun Siddoju, Applied AI Engineer building production LLM applications and Agentic AI systems." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col pt-16">
        <Navbar />
        
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App
