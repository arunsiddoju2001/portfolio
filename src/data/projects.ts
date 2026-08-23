import { Project } from '../types'

export const projectsData: Project[] = [
  {
    id: "ai-crm-copilot",
    title: "AI CRM Copilot",
    shortDescription: "Production-grade AI assistant generating personalized B2B seller responses.",
    problem: "B2B sellers needed assistance in generating context-aware, personalized, and policy-compliant responses to buyer inquiries rapidly.",
    architecture: "Hybrid prompt orchestration combining 40% static business rules and 60% runtime business context. It aggregates seller profile, buyer info, and historical conversations.",
    techStack: ["Gemini Flash", "LiteLLM", "Langfuse", "Python", "FastAPI", "OpenAI"],
    challenges: [
      "Balancing static policies with dynamic context injection.",
      "Ensuring seamless multi-model routing and fallback strategies.",
      "Versioning and evaluating prompts without redeploying the core service."
    ],
    scale: "Supports high-throughput B2B communications across the platform.",
    businessImpact: [
      "Standardized multi-model routing enabling zero-downtime provider switching.",
      "Enabled safe prompt improvements via Langfuse evaluation."
    ],
    lessonsLearned: [
      "Separating business rules from runtime context significantly reduces hallucinations.",
      "Observability at the prompt level is critical for production AI systems."
    ],
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "llm-audio-intelligence",
    title: "LLM Audio Intelligence Platform",
    shortDescription: "Distributed AI pipeline processing over 120K customer support audio calls daily.",
    problem: "Customer support audio calls contained valuable unextracted business insights and required manual analysis.",
    architecture: "Go microservices orchestrating Kafka event streams and production-scale LLM inference. Outputs are validated against business rules using a semantic validation layer.",
    techStack: ["Go", "Kafka", "PostgreSQL", "all-MiniLM-L12-v2", "JSON Schema"],
    challenges: [
      "Handling large-scale concurrent audio processing pipelines.",
      "Preventing invalid or hallucinated LLM responses from corrupting downstream datasets.",
      "Extracting 64 specific business entities with strict datatype validation."
    ],
    scale: "Processing over 120,000 customer support calls per day.",
    businessImpact: [
      "Significantly reduced hallucinations and improved downstream data quality.",
      "Prevented invalid responses before downstream processing via semantic validation against a catalog of 1,500+ restricted products.",
      "Enabled secure analytics through normalized storage across 12 PostgreSQL tables."
    ],
    lessonsLearned: [
      "Combining Structured Output Generation (JSON Schema) with post-generation semantic validation provides a robust defense against hallucinations."
    ],
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "ai-quick-actionable",
    title: "AI Quick Actionable Recommendation System",
    shortDescription: "Low-latency semantic recommendation engine converting free-form CRM notes into standard actionables.",
    problem: "Sales representatives entered free-form notes that couldn't be easily categorized for automated follow-ups.",
    architecture: "Replaced runtime LLM inference with an offline embedding pipeline leveraging BAAI BGE embeddings and FAISS vector search.",
    techStack: ["BAAI BGE Embeddings", "FAISS", "Python", "Vector Search"],
    challenges: [
      "High LLM inference costs and latency for a high-frequency CRM operation.",
      "Searching over 200K+ historical note-action pairs in real-time."
    ],
    scale: "Vector search across 200,000+ historical records.",
    businessImpact: [
      "Reduced response latency to approximately 35ms.",
      "Eliminated recurring LLM inference costs.",
      "Maintained high accuracy with only a 2% trade-off (93% vs 95% from the LLM baseline)."
    ],
    lessonsLearned: [
      "Vector search can replace LLMs for classification tasks to drastically improve latency and cost."
    ],
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "smart-reply-engine",
    title: "Smart Reply Recommendation Engine",
    shortDescription: "Production semantic classification pipeline using offline K-Means clustering.",
    problem: "Intent detection for seller messages was inaccurate, leading to poor smart reply suggestions.",
    architecture: "Incoming messages mapped to embeddings and classified via Euclidean distance against precomputed cluster centroids.",
    techStack: ["all-MiniLM-L6-v2", "K-Means Clustering", "CUDA", "NVIDIA GPU", "Gunicorn/Uvicorn"],
    challenges: [
      "Scaling inference to handle massive conversation volume in real-time.",
      "Optimizing embedding inference for parallel vector encoding."
    ],
    scale: "Classifying intents across 3M+ seller conversations.",
    businessImpact: [
      "Improved intent detection accuracy from 35% to 80%.",
      "Achieved low-latency parallel encoding by deploying on a dedicated NVIDIA GPU server (16GB VRAM)."
    ],
    lessonsLearned: [
      "Precomputing cluster centroids and using lightweight Euclidean distance checks is highly efficient for production intent classification."
    ],
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "enterprise-mcp-server",
    title: "Enterprise MCP Server",
    shortDescription: "Model Context Protocol (MCP) server for enterprise AI engineering agents.",
    problem: "AI agents lacked secure, standardized access to internal engineering tools and platforms.",
    architecture: "High-throughput Go microservices and REST APIs exposing tools via structured MCP interfaces with permission-aware execution.",
    techStack: ["Go", "MCP", "GitLab SCM", "Grafana", "REST APIs", "Kafka"],
    challenges: [
      "Ensuring secure tool authorization and structured request validation.",
      "Migrating legacy APIs to Go to handle high throughput."
    ],
    scale: "Serving over 4M daily requests.",
    businessImpact: [
      "Reduced P95 latency by 90% through optimized concurrency models.",
      "Enabled enterprise AI agents to safely interact with engineering platforms.",
      "Achieved ~40% lower response latency on 10 production-critical APIs migrated from Python to Go."
    ],
    lessonsLearned: [
      "Standardizing tool interfaces via MCP is critical for scaling agentic capabilities across enterprise systems safely."
    ],
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "github-mcp-server",
    title: "GitHub MCP Server",
    shortDescription: "Custom MCP server exposing 70+ GitHub operations for AI-Assisted Development.",
    problem: "Developers spent too much time on manual GitHub repository and PR workflows.",
    architecture: "Integration with Claude Desktop exposing repository management, code retrieval, branch creation, and PR workflows.",
    techStack: ["TypeScript", "MCP", "GitHub API", "Claude Desktop"],
    challenges: [
      "Implementing granular operation-level permission controls (Allow, Ask Every Time, Deny).",
      "Designing reusable tool definitions following the MCP specification."
    ],
    scale: "Supports over 70 distinct GitHub operations.",
    businessImpact: [
      "Reduced manual GitHub operations by nearly 10x through automated PR review workflows.",
      "Enabled natural language interaction with GitHub repositories."
    ],
    lessonsLearned: [
      "Granular permission controls are essential for user trust when AI agents perform destructive or high-impact operations."
    ],
    imageUrl: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "ai-voice-presentation",
    title: "AI Voice Presentation Agent",
    shortDescription: "End-to-end AI-powered presentation assistant enabling natural voice conversations over slides.",
    problem: "Presenters and audiences needed an interactive way to query presentation content via voice.",
    architecture: "Modular multi-agent architecture integrating speech recognition, LLM reasoning, speech synthesis, and semantic slide retrieval.",
    techStack: ["React", "FastAPI", "LiteLLM", "Google Drive API", "Embeddings"],
    challenges: [
      "Maintaining conversational context across different slides.",
      "Grounding agent responses strictly in the presentation content to avoid hallucinations."
    ],
    scale: "Real-time processing of voice and contextual data.",
    businessImpact: [
      "Developed voice-driven presentation controls including slide navigation and dynamic Q&A.",
      "Created highly interactive and grounded presentation experiences."
    ],
    lessonsLearned: [
      "Contextual prompting combined with embedding-based retrieval is highly effective for grounding multimodal agents."
    ],
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200",
  }
]
