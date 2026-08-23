import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: ReactNode
  staggerDelay?: number
  delayChildren?: number
}

export function StaggerContainer({ 
  children, 
  staggerDelay = 0.1,
  delayChildren = 0,
  className = "",
  ...props 
}: StaggerContainerProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delayChildren,
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
