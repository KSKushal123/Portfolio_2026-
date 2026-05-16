import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  return (
    <nav>
      <div className="container nav-content">
        <Link to="/" className="logo" style={{ textDecoration: 'none' }}>KS</Link>
        <div className="nav-links" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}>About</Link>
          <Link to="/skills" className={location.pathname === '/skills' ? 'nav-link active' : 'nav-link'}>Skills</Link>
          <Link to="/contact" className="btn btn-outline" style={{ padding: '0.5rem 1.5rem' }}>Contact Me</Link>
        </div>
      </div>
    </nav>
  );
}
