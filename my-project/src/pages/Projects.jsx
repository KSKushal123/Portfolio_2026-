import React from 'react';
import { FolderGit2, ExternalLink, Code } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: "Chat-Bot",
      description: "An interactive, web-based conversational chatbot application featuring a dynamic user interface and smooth messaging interactions.",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/KSKushal123/Chat-Bot",
    },
    {
      title: "FastAPI Get Started",
      description: "A robust backend API demonstrating modern RESTful architecture, built to handle fast asynchronous requests with data validation.",
      tags: ["FastAPI", "Python", "JavaScript"],
      github: "https://github.com/KSKushal123/fastapi_get_started",
    },
    {
      title: "CAI (Conversational AI)",
      description: "A specialized artificial intelligence project focused on natural language processing and understanding user intent.",
      tags: ["AI", "Python", "Machine Learning"],
      github: "https://github.com/KSKushal123/CAI",
    }
  ];

  return (
    <main className="container">
      <section className="section">
        <h2 className="section-title"><FolderGit2 size={32} color="var(--accent)" /> Featured Projects</h2>
        <div className="grid grid-3">
          {projects.map((project, index) => (
            <div className="card project-card" key={index} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ flex: 1 }}>
                <div className="card-icon" style={{ background: 'rgba(6, 182, 212, 0.1)', color: '#06b6d4' }}>
                  <Code size={24} />
                </div>
                <h3 className="card-title">{project.title}</h3>
                <p className="card-text" style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  {project.description}
                </p>
                
                <div className="skills-container" style={{ marginBottom: '2rem' }}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className="skill-tag" style={{ fontSize: '0.75rem', padding: '0.3rem 0.8rem' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', marginTop: 'auto' }}>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline" 
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem' }}
                >
                  <FaGithub size={16} /> View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
