import React from 'react';
import { Mail, User } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="container">
      <section className="hero" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '3rem', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <div className="greeting">Hello, I'm</div>
          <h1 className="title">Kushal S</h1>
          <h2 className="subtitle">Software Engineer</h2>
          <p className="hero-text">
            To enhance my skills and knowledge to a better level by working with the organization in a professional way, thereby producing better results for the organization and self-growth.
          </p>
          <div className="hero-actions" style={{ marginBottom: '1.5rem' }}>
            <Link to="/contact" className="btn btn-primary">
              Get in Touch <Mail size={18} />
            </Link>
            <Link to="/about" className="btn btn-outline">
              More About Me <User size={18} />
            </Link>
          </div>
          <div className="social-links" style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://github.com/KSKushal123" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '46px', height: '46px', padding: 0, justifyContent: 'center', borderRadius: '50%' }} aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ks-kushal-030836275/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '46px', height: '46px', padding: 0, justifyContent: 'center', borderRadius: '50%' }} aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
        
        {/* Photo Container */}
        <div className="photo-container" style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
          <div className="photo-frame">
            <img 
              src="/profile.jpg" 
              alt="Kushal S" 
              className="profile-photo"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://via.placeholder.com/400x500?text=Please+add+profile.jpg+to+public+folder";
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
