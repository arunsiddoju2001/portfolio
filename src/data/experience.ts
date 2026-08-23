import { ExperienceItem } from '../types'

export const experienceData: ExperienceItem[] = [
  {
    id: "indiamart",
    company: "IndiaMART InterMESH Limited",
    roles: [
      { title: "Senior Software Engineer", duration: "Nov 2025 - Present" },
      { title: "Software Engineer", duration: "July 2024 - Oct 2025" },
      { title: "Associate Software Engineer", duration: "July 2023 - June 2024" }
    ],
    problemsSolved: [
      "Designed an AI-powered CRM Copilot to generate personalized B2B seller responses.",
      "Built a distributed AI pipeline to process over 120K customer support audio calls daily.",
      "Engineered low-latency semantic recommendation systems for CRM next-steps, replacing expensive runtime LLMs.",
      "Improved intent detection accuracy from 35% to 80% across 3M+ seller conversations using clustering."
    ],
    architecture: [
      "Hybrid prompt orchestration combining 40% static business rules and 60% runtime context.",
      "Microservices architecture using Go and Python, integrated with Kafka event streaming.",
      "Semantic validation layer using all-MiniLM-L12-v2 embeddings and cosine similarity against business rules.",
      "Offline K-Means clustering and Euclidean distance mapping for semantic classification.",
      "CUDA-enabled parallel vector encoding on dedicated NVIDIA GPU servers."
    ],
    businessImpact: [
      "Served 4M+ daily requests while reducing P95 latency by 90% through optimized concurrency.",
      "Eliminated recurring LLM inference costs for actionable recommendations with only a 2% accuracy trade-off (93% vs 95%).",
      "Reduced manual GitHub operations by nearly 10x using a custom MCP server for AI-assisted development.",
      "Reduced hallucinations significantly via Structured Output Generation with JSON schema validation."
    ],
    technologies: [
      "Gemini Flash", "LiteLLM", "Langfuse", "Go", "Python", "Kafka", "PostgreSQL", 
      "BAAI BGE Embeddings", "FAISS", "CUDA", "GCP"
    ]
  }
]
