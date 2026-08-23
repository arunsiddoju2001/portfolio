export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  problem: string;
  architecture: string;
  techStack: string[];
  challenges: string[];
  scale: string;
  businessImpact: string[];
  lessonsLearned: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  roles: { title: string; duration: string }[];
  problemsSolved: string[];
  architecture: string[];
  businessImpact: string[];
  technologies: string[];
}
