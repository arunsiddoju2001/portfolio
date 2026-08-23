import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../../data/navigation'
import { cn } from '../../utils/cn'

export function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          scrolled ? "bg-slate-950/70 backdrop-blur-xl border-white/5 shadow-lg py-4" : "bg-transparent py-6"
        )}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="relative z-50 flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-lg group-hover:scale-105 transition-transform">
              AS
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white hidden sm:block">
              Arun Siddoju
            </span>
          </Link>
          
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || 
                              (link.path !== '/' && location.pathname.startsWith(link.path));
              
              return (
                <li key={link.name} className="relative">
                  <Link
                    to={link.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-white px-2 py-1",
                      isActive ? "text-white" : "text-gray-400"
                    )}
                  >
                    {link.name}
                  </Link>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-blue-500 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </li>
              )
            })}
          </ul>
          
          <div className="hidden md:block">
            <a 
              href="https://drive.google.com/file/d/1UWDr_glVqO3aMt7FK91hd1EE-klrZn9H/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
            >
              Resume
            </a>
          </div>

          <button 
            className="md:hidden relative z-50 p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-3xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-2xl font-display font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="https://drive.google.com/file/d/1UWDr_glVqO3aMt7FK91hd1EE-klrZn9H/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white font-medium rounded-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
