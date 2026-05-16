import React from 'react';
import { Code2, Award } from 'lucide-react';

export default function Skills() {
  return (
    <main className="container">
      <section className="section">
        <h2 className="section-title"><Code2 size={32} color="var(--accent)" /> Technical Skills</h2>
        <div className="card">
          <div className="skills-container" style={{ padding: '2rem 0' }}>
            <div className="skill-tag" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}><Code2 size={24} /> Python</div>
            <div className="skill-tag" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}><Code2 size={24} /> Java</div>
            <div className="skill-tag" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}><Code2 size={24} /> C</div>
            <div className="skill-tag" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}><Code2 size={24} /> C++</div>
            <div className="skill-tag" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}><Award size={24} /> Photoshop</div>
          </div>
        </div>
      </section>
    </main>
  );
}
