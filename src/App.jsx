import { useState } from 'react'
import './App.css'

function App() {
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleProject = (index) => {
    setExpandedProjects(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const projects = [
    {
      title: "LLM-Powered Audio Intelligence & Structured Data Pipeline",
      tech: "Go • Kafka • LLM • PostgreSQL",
      details: [
        "Built a production-grade pipeline that transformed audio conversations into structured business data using LLM-based extraction and validation workflows.",
        "Applied prompt engineering, schema-guided generation, and automated validation to ensure reliable downstream AI processing."
      ]
    },
    {
      title: "AI Copilot for CRM Response Generation",
      tech: "Python • GPT-4o Mini • RAG • GenAI",
      details: [
        "Developed a GenAI-powered copilot for CRM users using GPT-4o Mini to generate contextual and personalized responses.",
        "Implemented dynamic prompt orchestration using conversation history, customer context, and business metadata."
      ]
    },
    {
      title: "LLMOps, AI Evaluation & Prompt Management Platform",
      tech: "Python • Langfuse • LiteLLM",
      details: [
        "Implemented centralized LLM observability using LiteLLM and Langfuse for tracing, prompt versioning, token analytics, and model monitoring.",
        "Built an automated AI evaluation workflow that continuously audited sampled production responses for quality assurance."
      ]
    },
    {
      title: "GitHub MCP Server for AI-Assisted Development",
      tech: "Model Context Protocol • Agentic AI • Claude Desktop",
      details: [
        "Built a custom Model Context Protocol (MCP) Server integrated with Claude Desktop, enabling natural language execution of 70+ GitHub operations including repository management, code retrieval, branch creation, issue management, and pull request workflows.",
        "Implemented secure agent permissions using operation-level controls (Allow, Ask Every Time, Deny) and automated PR-based review workflows, reducing manual GitHub operations by approximately 10x while maintaining human oversight."
      ]
    }
  ];

  return (
    <>
      <nav className="navbar">
          <div className="nav-content">
              <a href="#" className="logo">Arun Siddoju</a>
              <ul className="nav-links">
                  <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#experience">Work</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#contact">Contact</a></li>
              </ul>
          </div>
      </nav>

      <main>
          {/* Hero Section */}
          <section id="hero" className="hero">
              <div className="hero-content">
                  <p className="greeting">Hi I'm Arun</p>
                  <h1 className="hero-focus">An AI Engineer Dedicated to Building Intelligent Scalable Solutions.</h1>
                  <p className="summary">AI Engineer with 3 years of experience building and deploying LLM-powered applications, MCP-enabled AI solutions, and production-grade backend systems using Python and Go.</p>
                  <div className="cta-group">
                      <a href="#contact" className="btn primary-btn">Get In Touch</a>
                      <a href="#experience" className="btn secondary-btn">View Work</a>
                  </div>
              </div>
              <div className="hero-image">
                  <img src={`${import.meta.env.BASE_URL}assets/hero_abstract.png`} alt="Clean Abstract 3D Shape" />
              </div>
          </section>

          {/* About Section - Bento Style */}
          <section id="about" className="section">
              <div className="about-grid">
                  <div className="glass-card">
                      <div className="code-window-header">
                          <span></span><span></span><span></span>
                      </div>
                      <h3>Hi, I'm Arun</h3>
                      <p style={{ color: 'var(--text-muted)' }}>I'm an AI Engineer with a passion for building and deploying systems from scratch — turning ideas into scalable, high-performance AI solutions.</p>
                      <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>My expertise spans Generative AI, Prompt Engineering, LLMOps, and modern backend architectures, enabling me to design intelligent systems that are both efficient and resilient.</p>
                  </div>
                  
                  <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                          <h3>Fast Facts</h3>
                          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>I'm based in India, and open to remote work worldwide.</p>
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                          <span style={{ background: 'rgba(255,255,255,0.05)', padding: '0.4rem 0.8rem', borderRadius: '4px', fontSize: '0.85rem' }}>Generative AI</span>
                          <span style={{ background: 'rgba(255,255,255,0.05)', padding: '0.4rem 0.8rem', borderRadius: '4px', fontSize: '0.85rem' }}>Golang</span>
                          <span style={{ background: 'rgba(255,255,255,0.05)', padding: '0.4rem 0.8rem', borderRadius: '4px', fontSize: '0.85rem' }}>Python</span>
                          <span style={{ background: 'rgba(255,255,255,0.05)', padding: '0.4rem 0.8rem', borderRadius: '4px', fontSize: '0.85rem' }}>LLMOps</span>
                          <span style={{ background: 'rgba(255,255,255,0.05)', padding: '0.4rem 0.8rem', borderRadius: '4px', fontSize: '0.85rem' }}>Agentic AI</span>
                          <span style={{ background: 'rgba(255,255,255,0.05)', padding: '0.4rem 0.8rem', borderRadius: '4px', fontSize: '0.85rem' }}>GCP</span>
                      </div>
                  </div>
              </div>
          </section>

          {/* Education & Overview */}
          <section id="education" className="section" style={{ paddingTop: '0' }}>
              <div className="two-col-grid">
                  <div className="edu-card-custom">
                      <h3>Indian Institute of Information Technology</h3>
                      <p>B.Tech in Information Technology</p>
                      <p style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>GPA: 6.7</p>
                  </div>
                  
                  <div className="tech-stack-card">
                      <div style={{ maxWidth: '60%' }}>
                          <h3>Core Expertise</h3>
                          <p style={{ color: 'var(--text-muted)' }}>I specialize in AI Engineering, building LLM-powered applications, MCP-enabled AI solutions, and scalable backend systems using Python and Go.</p>
                      </div>
                      <div className="tech-logos">
                          <span>🐹</span>
                          <span>🐍</span>
                          <span>🧠</span>
                          <span>🤖</span>
                          <span>📊</span>
                          <span>🚀</span>
                      </div>
                  </div>
              </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="section" style={{ paddingTop: '0' }}>
              <h2 className="section-title">Technical Skills</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                  <div className="glass-card" style={{ padding: '1.5rem' }}>
                      <h3 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1.1rem' }}>AI Engineering</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Generative AI, LLM Applications, Agentic AI, RAG, Prompt Engineering, AI Agents, Model Context Protocol(MCP), LangGraph, Semantic Search, Embeddings, Structured Output Generation, Function Calling, AI Evaluation, LLMOps.</p>
                  </div>
                  <div className="glass-card" style={{ padding: '1.5rem' }}>
                      <h3 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Vector Databases & Retrieval</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Qdrant, Vector Search, Similarity Search, Retrieval Pipelines.</p>
                  </div>
                  <div className="glass-card" style={{ padding: '1.5rem' }}>
                      <h3 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Backend & Distributed Systems</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Microservices, REST APIs, Gin, FastAPI, Flask, Kafka, Event-Driven Architecture, Redis, PostgreSQL.</p>
                  </div>
                  <div className="glass-card" style={{ padding: '1.5rem' }}>
                      <h3 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Cloud & Infrastructure</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>GCP (GKE, Cloud SQL), Docker, Kubernetes, NGINX.</p>
                  </div>
                  <div className="glass-card" style={{ padding: '1.5rem' }}>
                      <h3 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Languages</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Go, Python, SQL.</p>
                  </div>
                  <div className="glass-card" style={{ padding: '1.5rem' }}>
                      <h3 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Observability & Tools</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Langfuse, LiteLLM, Grafana, Kibana, Zabbix, Git, n8n, Redash.</p>
                  </div>
              </div>
          </section>

          {/* Experience (Detailed Timeline) */}
          <section id="experience" className="section">
              <h2 className="section-title">Work Experience</h2>
              <div className="project-item" style={{ borderBottom: 'none', padding: '1rem 0', display: 'block' }}>
                  <div className="project-info" style={{ width: '100%' }}>
                      <h3>IndiaMART InterMESH Limited</h3>
                      <p style={{ color: 'var(--primary)', fontWeight: '600', margin: '0.2rem 0' }}>Senior Software Engineer (Nov 2025 - Present)</p>
                      <p style={{ color: 'var(--text-main)', margin: '0.2rem 0' }}>Software Engineer (July 2024 - Oct 2025)</p>
                      <p style={{ color: 'var(--text-muted)', margin: '0.2rem 0' }}>Associate Software Engineer (July 2023 - June 2024)</p>
                      <ul style={{ marginTop: '1rem', color: 'var(--text-muted)', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          <li>Designed and deployed an end-to-end LLM-powered data extraction pipeline that converted audio conversations into structured business intelligence using JSON Schema-guided extraction and Kafka-based event-driven architecture.</li>
                          <li>Built an AI-powered CRM Copilot ("Help Me Write / Magic Pen") using GPT-4o Mini, prompt engineering, and contextual retrieval to generate personalized real-time responses.</li>
                          <li>Developed a Transformer-based Smart Reply Recommendation System using sentence embeddings (All MiniLM L6 V2), semantic similarity search, and clustering, improving intent detection accuracy from 35% to 80% across 3M+ conversations.</li>
                          <li>Integrated and worked with LiteLLM and Langfuse to implement LLMOps, prompt versioning, tracing, observability, and AI quality monitoring in production systems.</li>
                          <li>Built high-throughput Go microservices and REST APIs handling 4M+ daily requests, reducing P95 latency by 90% and improving scalability through optimized worker-pool based Kafka processing.</li>
                          <li>Led migration of 10 production APIs from Python to Go, achieving a 40% reduction in response latency.</li>
                      </ul>
                  </div>
              </div>
          </section>

          {/* Projects (List Style) */}
          <section id="projects" className="section">
              <h2 className="section-title">My Selected Projects</h2>
              <div className="projects-list">
                  {projects.map((proj, index) => (
                      <div key={index} className="project-item" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', cursor: 'pointer' }} onClick={() => toggleProject(index)}>
                              <div className="project-info">
                                  <h3>{proj.title}</h3>
                                  <p>{proj.tech}</p>
                              </div>
                              <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                  {expandedProjects[index] ? 'Show Less' : 'Read More'} 
                                  <span style={{ transform: expandedProjects[index] ? 'rotate(-90deg)' : 'rotate(90deg)', display: 'inline-block', transition: 'transform 0.3s ease' }}>→</span>
                              </button>
                          </div>
                          {expandedProjects[index] && (
                              <div style={{ marginTop: '1.5rem', width: '100%' }}>
                                  <ul style={{ color: 'var(--text-muted)', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                      {proj.details.map((detail, idx) => (
                                          <li key={idx}>{detail}</li>
                                      ))}
                                  </ul>
                              </div>
                          )}
                      </div>
                  ))}
              </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="section">
              <h2 className="section-title">Let's Talk</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help.</p>
              
              <div style={{ maxWidth: '600px' }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Full Name</label>
                      <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '1rem', background: '#13141f', border: '1px solid var(--glass-border)', borderRadius: '8px', color: '#fff' }} />
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Email</label>
                      <input type="email" placeholder="JohnDoe@email.com" style={{ width: '100%', padding: '1rem', background: '#13141f', border: '1px solid var(--glass-border)', borderRadius: '8px', color: '#fff' }} />
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Message</label>
                      <textarea rows="5" placeholder="Share your thoughts..." style={{ width: '100%', padding: '1rem', background: '#13141f', border: '1px solid var(--glass-border)', borderRadius: '8px', color: '#fff' }}></textarea>
                  </div>
                  <button type="button" className="btn" style={{ background: '#5c3ce6', color: '#fff', width: '100%' }}>Send Message</button>
              </div>
          </section>
      </main>

      <footer>
          <p style={{ color: '#64748b', textAlign: 'center', padding: '3rem 0' }}>&copy; 2026 Arun Siddoju. Built with precision.</p>
      </footer>
    </>
  )
}

export default App
