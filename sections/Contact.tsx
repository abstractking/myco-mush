import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const leftRef = useScrollAnimation(0.2);
  const rightRef = useScrollAnimation(0.2);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would go here
    alert('Thanks for reaching out! We typically reply within 1 business day.');
    setFormData({ name: '', email: '', subject: 'General', message: '' });
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#FFFFFF',
    border: '1px solid rgba(36, 0, 70, 0.15)',
    borderRadius: '8px',
    padding: '14px 16px',
    fontFamily: 'var(--font-body)',
    fontSize: '15px',
    color: '#240046',
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s',
  };

  return (
    <section
      id="contact"
      style={{
        background: '#FFF8E7',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px 4vw',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
        }}
        className="md:!grid-cols-[45%_55%]"
      >
        {/* Left column */}
        <div
          ref={leftRef}
          className="animate-on-scroll-left"
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              color: '#240046',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
            }}
          >
            Questions?
            <br />
            Fall Down the Rabbit Hole With Us.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '15px',
              color: 'rgba(36, 0, 70, 0.7)',
              marginTop: '12px',
            }}
          >
            We typically reply within 1 business day.
          </p>

          <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#E85D04',
                  marginBottom: '4px',
                }}
              >
                Email
              </p>
              <a
                href="mailto:hello@mycowonderland.com"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 400,
                  fontSize: '15px',
                  color: '#240046',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E85D04')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#240046')}
              >
                hello@mycowonderland.com
              </a>
            </div>
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#E85D04',
                  marginBottom: '4px',
                }}
              >
                Social
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 400,
                  fontSize: '15px',
                  color: '#240046',
                }}
              >
                @mycowonderland (Instagram, TikTok)
              </p>
            </div>
          </div>
        </div>

        {/* Right column - Form */}
        <div
          ref={rightRef}
          className="animate-on-scroll-right"
        >
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '13px',
                  color: '#240046',
                  display: 'block',
                  marginBottom: '6px',
                }}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={inputStyle}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#E85D04';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(232, 93, 4, 0.15)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(36, 0, 70, 0.15)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>
            <div>
              <label
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '13px',
                  color: '#240046',
                  display: 'block',
                  marginBottom: '6px',
                }}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={inputStyle}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#E85D04';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(232, 93, 4, 0.15)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(36, 0, 70, 0.15)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>
            <div>
              <label
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '13px',
                  color: '#240046',
                  display: 'block',
                  marginBottom: '6px',
                }}
              >
                Subject
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                style={{
                  ...inputStyle,
                  appearance: 'auto',
                  cursor: 'pointer',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#E85D04';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(232, 93, 4, 0.15)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(36, 0, 70, 0.15)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <option>General</option>
                <option>Order Help</option>
                <option>Wholesale</option>
                <option>Press</option>
              </select>
            </div>
            <div>
              <label
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '13px',
                  color: '#240046',
                  display: 'block',
                  marginBottom: '6px',
                }}
              >
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                style={{
                  ...inputStyle,
                  resize: 'vertical',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#E85D04';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(232, 93, 4, 0.15)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(36, 0, 70, 0.15)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '14px',
                color: '#FFFFFF',
                background: '#240046',
                padding: '16px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                textTransform: 'uppercase' as const,
                letterSpacing: '0.02em',
                transition: 'background 0.3s',
                marginTop: '8px',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#E85D04')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#240046')}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}