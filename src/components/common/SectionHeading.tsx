import { FadeIn } from '../animations/FadeIn'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionHeading({ title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <FadeIn direction="up">
        {subtitle && (
          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium text-xs tracking-widest uppercase mb-4">
            {subtitle}
          </div>
        )}
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
          {title}
        </h2>
      </FadeIn>
    </div>
  )
}
