import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <main className="container">
      <section className="section">
        <h2 className="section-title"><MapPin size={32} color="var(--accent)" /> Contact Information</h2>
        <div className="card" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(99, 102, 241, 0.05) 100%)', padding: '4rem 2rem' }}>
          <div className="grid grid-3">
            <div className="contact-item" style={{ flexDirection: 'column', textAlign: 'center', gap: '1.5rem' }}>
              <div className="card-icon" style={{ margin: '0 auto' }}><MapPin size={32} /></div>
              <div>
                <div className="contact-label">Address</div>
                <div className="contact-value" style={{ fontSize: '1.1rem' }}>Malavalli, Mandya,<br/>Karnataka, India</div>
              </div>
            </div>
            <div className="contact-item" style={{ flexDirection: 'column', textAlign: 'center', gap: '1.5rem' }}>
              <div className="card-icon" style={{ margin: '0 auto' }}><Phone size={32} /></div>
              <div>
                <div className="contact-label">Phone</div>
                <div className="contact-value" style={{ fontSize: '1.2rem' }}>
                  <a href="tel:8105900328">8105900328</a>
                </div>
              </div>
            </div>
            <div className="contact-item" style={{ flexDirection: 'column', textAlign: 'center', gap: '1.5rem' }}>
              <div className="card-icon" style={{ margin: '0 auto' }}><Mail size={32} /></div>
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-value" style={{ fontSize: '1.1rem', wordBreak: 'break-all' }}>
                  <a href="mailto:kskushal123456@gmail.com">kskushal123456@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            <h3 style={{ fontSize: '1.5rem' }}>Connect on Socials</h3>
            <div className="social-links" style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="https://github.com/KSKushal123" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '56px', height: '56px', padding: 0, justifyContent: 'center', borderRadius: '50%' }} aria-label="GitHub">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ks-kushal-030836275/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '56px', height: '56px', padding: 0, justifyContent: 'center', borderRadius: '50%' }} aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
