import React, { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Replace these strings with your actual EmailJS IDs
    const serviceID = 'service_4ezv2tu';
    const templateID = 'template_vs55kdq';
    const publicKey = 'rNXUeFqHqjlu9WizA';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        setIsSending(false);
        setIsSent(true);
        form.current.reset();

        // Reset success message after 5 seconds
        setTimeout(() => setIsSent(false), 5000);
      }, (error) => {
        setIsSending(false);
        alert('Failed to send message. Please check your EmailJS configuration. Error: ' + error.text);
      });
  };

  return (
    <main className="container">
      <section className="section">
        <h2 className="section-title"><MapPin size={32} color="var(--accent)" /> Get In Touch</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', alignItems: 'start' }}>

          {/* Left Column - Contact Info */}
          <div className="card" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(99, 102, 241, 0.05) 100%)', display: 'flex', flexDirection: 'column', gap: '3rem', height: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="contact-item" style={{ marginBottom: 0 }}>
                <div className="card-icon" style={{ marginBottom: 0, width: '56px', height: '56px' }}><MapPin size={24} /></div>
                <div>
                  <div className="contact-label">Address</div>
                  <div className="contact-value" style={{ fontSize: '1.1rem' }}>Malavalli, Mandya, Karnataka, India</div>
                </div>
              </div>
              <div className="contact-item" style={{ marginBottom: 0 }}>
                <div className="card-icon" style={{ marginBottom: 0, width: '56px', height: '56px' }}><Phone size={24} /></div>
                <div>
                  <div className="contact-label">Phone</div>
                  <div className="contact-value" style={{ fontSize: '1.2rem' }}>
                    <a href="tel:8105900328">8105900328</a>
                  </div>
                </div>
              </div>
              <div className="contact-item" style={{ marginBottom: 0 }}>
                <div className="card-icon" style={{ marginBottom: 0, width: '56px', height: '56px' }}><Mail size={24} /></div>
                <div>
                  <div className="contact-label">Email</div>
                  <div className="contact-value" style={{ fontSize: '1.1rem', wordBreak: 'break-all' }}>
                    <a href="mailto:kskushal123456@gmail.com">kskushal123456@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>Connect on Socials</h3>
              <div className="social-links" style={{ display: 'flex', gap: '1rem' }}>
                <a href="https://github.com/KSKushal123" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '50px', height: '50px', padding: 0, justifyContent: 'center', borderRadius: '50%' }} aria-label="GitHub">
                  <FaGithub size={22} />
                </a>
                <a href="https://www.linkedin.com/in/ks-kushal-030836275/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '50px', height: '50px', padding: 0, justifyContent: 'center', borderRadius: '50%' }} aria-label="LinkedIn">
                  <FaLinkedin size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="card contact-form-card" style={{ padding: '2.5rem' }}>
            <form ref={form} onSubmit={sendEmail} className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div className="form-group" style={{ flex: '1', minWidth: '150px' }}>
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" id="name" name="name" className="form-input" placeholder="John Doe" required />
                </div>
                <div className="form-group" style={{ flex: '1', minWidth: '150px' }}>
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" id="email" name="email" className="form-input" placeholder="john@example.com" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input type="text" id="subject" name="subject" className="form-input" placeholder="Project Inquiry" required />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" name="message" className="form-input" rows="5" placeholder="Tell me about your project..." required></textarea>
              </div>
              <button
                type="submit"
                className="form-submit-btn"
                disabled={isSending}
                style={{ opacity: isSending ? 0.7 : 1, cursor: isSending ? 'not-allowed' : 'pointer' }}
              >
                {isSending ? 'Sending...' : isSent ? 'Message Sent!' : 'Send Message'}
                {isSent ? <CheckCircle2 size={18} /> : <Send size={18} />}
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}
