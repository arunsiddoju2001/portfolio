export const personalInfo = {
  name: "Arun Siddoju",
  title: "Applied AI Engineer",
  secondaryPositioning: "Production GenAI & LLM Systems · Agentic AI · Semantic AI · Python · Go",
  heroHeadline: "Building AI systems that work beyond the demo.",
  heroSubtext: "Production GenAI, Agentic AI, Semantic Search, LLM Evaluation and High-Performance AI Infrastructure.",
  links: {
    github: "https://github.com/arunsiddoju2001",
    linkedin: "https://www.linkedin.com/in/arunsiddoju",
    resume: "https://drive.google.com/file/d/1UWDr_glVqO3aMt7FK91hd1EE-klrZn9H/view?usp=sharing",
    email: "arunsiddoju2001@gmail.com",
    phone: "+91 9550862209"
  }
};

export const impactMetrics = [
  { value: "120K+", label: "Daily AI interactions" },
  { value: "4M+", label: "Backend requests/day" },
  { value: "200K+", label: "Historical semantic examples" },
  { value: "3M+", label: "Conversations processed" },
  { value: "35 ms", label: "Semantic recommendation latency" },
  { value: "3×", label: "Infrastructure cost reduction" },
];

export const philosophy = [
  {
    title: "Build for Production",
    description: "Design AI systems around reliability, latency, observability and operational constraints."
  },
  {
    title: "Measure AI Quality",
    description: "Use structured evaluation and LLM-as-a-Judge rather than relying only on subjective testing."
  },
  {
    title: "Engineer the System",
    description: "Combine AI capabilities with strong backend engineering, distributed systems and infrastructure."
  },
  {
    title: "Optimize the Right Layer",
    description: "Use embeddings, caching, vector search and model orchestration when deterministic or lower-cost approaches are sufficient."
  }
];

export const experience = [
  {
    company: "IndiaMART InterMESH Limited",
    location: "Noida, India",
    roles: [
      {
        title: "Senior Software Engineer",
        period: "Nov 2025 to Present",
      },
      {
        title: "Software Engineer",
        period: "Jul 2024 to Oct 2025",
      },
      {
        title: "Associate Software Engineer",
        period: "Jul 2023 to Jun 2024",
      }
    ]
  }
];

export const education = [
  {
    institution: "Indian Institute of Information Technology",
    degree: "B.Tech in Information Technology"
  }
];

export const systems = [
  {
    id: "crm-copilot",
    title: "AI-Powered CRM Copilot",
    category: "Production GenAI",
    description: "Production LLM assistant generating personalized B2B seller responses using Gemini Flash and context-aware prompt orchestration.",
    technologies: ["Gemini", "LiteLLM", "Langfuse", "LLM orchestration", "Context engineering"],
    highlights: ["40% business rules + 60% runtime context"],
    liteLlmEnabled: ["Provider switching", "Fallback handling", "Model experimentation"],
    langfuseCapabilities: ["Prompt versioning", "LLM evaluation", "Token monitoring", "Latency monitoring"]
  },
  {
    id: "audio-intelligence",
    title: "LLM-Powered Audio Intelligence Platform",
    category: "Production AI · LLM Evaluation · Distributed Systems",
    scale: "120K+ customer support audio calls/day",
    description: "Built a distributed AI pipeline processing 120K+ customer support audio calls daily using Go microservices, Kafka, and production-scale LLM inference.",
    highlights: [
      "JSON Schema + strict datatype validation", 
      "64 Business Entities",
      "Semantic validation using all-MiniLM-L12-v2 against 1,500+ restricted products",
      "Normalized storage across 12 PostgreSQL tables for secure analytics",
      "LLM-as-a-Judge framework across 6 dimensions (correctness, completeness, relevance, groundedness, safety, format)"
    ]
  },
  {
    id: "recommendation-system",
    title: "AI Quick Actionable Recommendation System",
    category: "Semantic Search · Vector Retrieval",
    description: "Designed a low-latency semantic recommendation engine converting free-form CRM next-step notes into standardized actionables using BAAI BGE embeddings and FAISS vector search.",
    highlights: ["Replaced runtime LLM inference with an offline embedding and vector-search pipeline, eliminating recurring inference costs."],
    metrics: ["~35 ms latency", "93% accuracy", "200K+ historical note-action pairs"]
  },
  {
    id: "smart-reply",
    title: "Smart Reply Recommendation Engine",
    category: "Semantic Classification",
    description: "Designed a production semantic classification pipeline using all-MiniLM-L6-v2 embeddings and offline K-Means clustering.",
    metrics: ["35% → 80% intent detection accuracy", "3M+ seller conversations"]
  },
  {
    id: "mcp-server",
    title: "Enterprise MCP Server for AI Engineering Agents",
    category: "Agentic AI · MCP · Developer Infrastructure",
    description: "Designed and developed a production-ready Model Context Protocol (MCP) server exposing GitLab SCM, Grafana, and internal engineering services as standardized tools for AI agents.",
    highlights: ["Repository search", "Merge request automation", "Dashboard inspection", "Metrics retrieval", "Engineering workflow automation", "Permission-aware execution"]
  },
  {
    id: "ai-inference-infrastructure",
    title: "AI Inference Infrastructure",
    category: "Production AI Infrastructure",
    description: "Deployed embedding models on a dedicated NVIDIA GPU server (16GB VRAM) and exposed production FastAPI endpoints using CUDA-enabled Uvicorn workers.",
    highlights: ["Low-latency parallel inference", "Semantic recommendation workloads", "Semantic classification workloads"]
  }
];

export const infrastructure = [
  {
    title: "API Migration",
    flow: ["Python", "Go"],
    metrics: ["10 production-critical APIs", "~40% lower latency"]
  },
  {
    title: "Infrastructure Migration",
    flow: ["VM Infrastructure", "GKE"],
    metrics: ["3× infrastructure cost reduction"]
  },
  {
    title: "Performance",
    flow: ["120 ms", "21 ms"],
    metrics: ["Response latency", "~130 messages/sec/instance", "Near-zero Kafka consumer lag"]
  }
];

export const projects = [
  {
    title: "AI Voice Presentation Agent",
    category: "Applied AI · Multi-Agent Systems · Voice AI",
    description: "Designed an end-to-end AI presentation agent enabling natural voice interaction with presentation content using real-time speech recognition, LLM reasoning, and speech synthesis.",
    technologies: ["React", "FastAPI", "LiteLLM", "Google Drive", "Embeddings", "Semantic Retrieval", "Speech Recognition", "Speech Synthesis"],
    capabilities: ["Voice Q&A", "Slide navigation", "Slide-specific retrieval", "Contextual reasoning", "Conversational interaction"],
    githubUrl: "https://github.com/arunsiddoju2001/AI-Voice-Presentation-Agent"
  },
  {
    title: "LangGraph SQL Agent",
    category: "Agentic AI · Text-to-SQL · LangGraph",
    description: "A stateful AI agent that translates natural-language questions into SQL, executes queries securely, automatically corrects failures, and summarizes database results.",
    technologies: ["Python", "FastAPI", "LangGraph", "LangChain", "OpenRouter", "GPT-4o-mini", "SQLite", "Pydantic", "Vanilla JavaScript", "IndexedDB"],
    capabilities: ["Natural language → SQL", "Database schema extraction", "SQL execution", "Error recovery", "Structured outputs", "Conversational result summaries", "Local chat history"],
    githubUrl: "https://github.com/arunsiddoju2001/langgraph-sql-agent"
  }
];

export const techStackLayers = [
  {
    name: "LLM Layer",
    items: ["OpenAI", "Gemini", "GPT models", "OpenRouter"]
  },
  {
    name: "Orchestration",
    items: ["LiteLLM", "LangChain", "LangGraph", "MCP"]
  },
  {
    name: "Semantic AI",
    items: ["Embeddings", "BAAI BGE", "all-MiniLM", "FAISS", "K-Means", "Cosine Similarity"]
  },
  {
    name: "AI Quality",
    items: ["LLM Evaluation", "LLM-as-a-Judge", "Langfuse", "Structured Outputs", "JSON Schema"]
  },
  {
    name: "Backend",
    items: ["Python", "Go", "SQL", "FastAPI", "Gin", "Flask", "REST APIs", "Microservices"]
  },
  {
    name: "Distributed Systems",
    items: ["Kafka", "Redis", "PostgreSQL", "Event-driven architecture"]
  },
  {
    name: "Infrastructure",
    items: ["GCP", "GKE", "Cloud SQL", "Docker", "Kubernetes", "NVIDIA CUDA", "GPU inference", "Uvicorn", "NGINX"]
  },
  {
    name: "Observability & Tools",
    items: ["Git", "GitHub", "GitLab", "Grafana", "Langfuse", "Kibana", "Zabbix", "Redash", "n8n"]
  }
];

export const engineeringDecisions = [
  {
    title: "Why Vector Search?",
    description: "Used offline embeddings + FAISS when the task could be solved without runtime LLM inference."
  },
  {
    title: "Why Structured Outputs?",
    description: "Used JSON Schema and datatype validation to make LLM outputs reliable for downstream processing."
  },
  {
    title: "Why LLM-as-a-Judge?",
    description: "Created systematic production evaluation across multiple quality dimensions instead of relying exclusively on rule-based validation."
  },
  {
    title: "Why Go?",
    description: "Migrated production-critical APIs and distributed processing workloads to Go for latency and scalability improvements."
  },
  {
    title: "Why MCP?",
    description: "Standardized AI-agent access to enterprise engineering tools through governed, structured tool interfaces."
  }
];
