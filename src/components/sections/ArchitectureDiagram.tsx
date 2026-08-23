interface ArchitectureDiagramProps {
  systemId: string;
}

export function ArchitectureDiagram({ systemId }: ArchitectureDiagramProps) {
  const getDiagram = () => {
    switch (systemId) {
      case 'crm-copilot':
        return `Seller Profile
      +
Buyer Information
      +
Inquiry Metadata
      +
Conversation History
      ↓
Context Orchestration
      ↓
Business Rules + Runtime Context
      ↓
LLM
      ↓
Policy-Compliant Response`;
      case 'audio-intelligence':
        return `Audio Calls
     ↓
Speech / Transcription
     ↓
Go Microservices
     ↓
Kafka
     ↓
LLM Inference
     ↓
Structured Output
     ↓
Semantic Validation
     ↓
PostgreSQL`;
      case 'recommendation-system':
        return `Free-form CRM Next Step
        ↓
BGE Embedding
        ↓
Vector Representation
        ↓
FAISS Search
        ↓
200K+ Historical
Note-Action Pairs
        ↓
Standardized Actionable`;
      case 'smart-reply':
        return `Seller Conversation
       ↓
all-MiniLM-L6-v2
       ↓
Embeddings
       ↓
Offline K-Means
       ↓
Intent Classification`;
      case 'mcp-server':
        return `AI Agent
   ↓
MCP Protocol
   ↓
Permission / Validation Layer
   ↓
┌───────────────┬──────────────┐
│ GitLab SCM    │ Grafana      │
│ Repository    │ Metrics      │
│ Operations    │ Dashboards   │
└───────────────┴──────────────┘`;
      default:
        return 'Architecture diagram not available.';
    }
  };

  return (
    <pre className="font-mono text-sm md:text-base text-blue-300 bg-slate-950 p-6 rounded-lg overflow-x-auto border border-white/5 shadow-inner leading-relaxed">
      {getDiagram()}
    </pre>
  );
}
