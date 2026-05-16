import React from 'react';
import { GraduationCap, BookOpen, Briefcase, Award, Languages, User, Calendar, Flag } from 'lucide-react';

export default function About() {
  return (
    <main className="container">
      {/* Education Section */}
      <section className="section">
        <h2 className="section-title"><GraduationCap size={32} color="var(--accent)" /> Education</h2>
        <div className="grid grid-2">
          <div className="card">
            <div className="card-icon"><BookOpen size={24} /></div>
            <h3 className="card-title">Engineering (Pursuing)</h3>
            <div className="card-subtitle">Mandya | 2024 — 2027</div>
            <p className="card-text">Currently pursuing a degree in Engineering, developing strong technical and analytical skills.</p>
          </div>
          <div className="card">
            <div className="card-icon"><BookOpen size={24} /></div>
            <h3 className="card-title">Diploma</h3>
            <div className="card-subtitle">Mandya | 2022 — 2024</div>
            <p className="card-text">Completed diploma studies with a focus on core technical concepts and practical applications.</p>
          </div>
        </div>
      </section>

      {/* Experience / Additional Qualifications Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <h2 className="section-title"><Briefcase size={32} color="var(--accent)" /> Additional Qualifications</h2>
        <div className="grid grid-3">
          <div className="card">
            <div className="card-icon"><Briefcase size={24} /></div>
            <h3 className="card-title">Training & Internship</h3>
            <div className="card-subtitle">Royal Welt</div>
            <p className="card-text">Underwent training and an internship focusing on an HTML and CSS Crash course for 6 months.</p>
          </div>
          <div className="card">
            <div className="card-icon"><Award size={24} /></div>
            <h3 className="card-title">Republic Day Parade</h3>
            <div className="card-subtitle">NCC & NSS</div>
            <p className="card-text">Participated in the Republic Day Parade as part of NCC, and also actively participated in NSS.</p>
          </div>
          <div className="card">
            <div className="card-icon"><Award size={24} /></div>
            <h3 className="card-title">Yuva Dasara</h3>
            <div className="card-subtitle">Mysore</div>
            <p className="card-text">Actively participated in the prestigious Yuva Dasara cultural event in Mysore.</p>
          </div>
        </div>
      </section>

      {/* Details & Languages Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="grid grid-2">
          <div>
            <h2 className="section-title" style={{ fontSize: '2rem' }}><Languages size={28} color="var(--accent)" /> Languages Known</h2>
            <div className="card">
              <div className="skills-container" style={{ gap: '1.5rem' }}>
                <div className="skill-tag" style={{ background: 'rgba(99, 102, 241, 0.1)', borderColor: 'rgba(99, 102, 241, 0.3)' }}>Kannada (Native)</div>
                <div className="skill-tag">English</div>
                <div className="skill-tag">Tamil</div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="section-title" style={{ fontSize: '2rem' }}><User size={28} color="var(--accent)" /> Personal Details</h2>
            <div className="card">
              <div className="contact-item">
                <Calendar className="contact-icon" size={20} />
                <div>
                  <div className="contact-label">Date of Birth</div>
                  <div className="contact-value">06-07-2005</div>
                </div>
              </div>
              <div className="contact-item" style={{ marginBottom: 0 }}>
                <Flag className="contact-icon" size={20} />
                <div>
                  <div className="contact-label">Nationality</div>
                  <div className="contact-value">Indian</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
