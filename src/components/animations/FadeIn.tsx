import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  fullWidth?: boolean
}

export function FadeIn({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  direction = 'up',
  fullWidth = false,
  className = "",
  ...props 
}: FadeInProps) {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 }
  }

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration, 
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={`${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
