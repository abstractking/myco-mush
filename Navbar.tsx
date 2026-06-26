import { useState } from 'react';

const navLinks = [
  { label: 'Shop', href: '#products' },
  { label: 'Our Mushrooms', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '64px',
        background: 'rgba(36, 0, 70, 0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 4vw',
      }}
    >
      {/* Logo */}
      <a
        href="#"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: '18px',
          color: '#FFFFFF',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          letterSpacing: '-0.02em',
        }}
      >
        <span role="img" aria-label="mushroom">🍄</span> MYCO WONDERLAND
      </a>

      {/* Desktop links */}
      <div
        style={{
          alignItems: 'center',
          gap: '32px',
        }}
        className="hidden md:flex"
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: '14px',
              color: '#B8C0FF',
              textDecoration: 'none',
              transition: 'color 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#B8C0FF')}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#products"
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: '13px',
            color: '#FFFFFF',
            textDecoration: 'none',
            background: '#E85D04',
            padding: '8px 20px',
            borderRadius: '6px',
            textTransform: 'uppercase' as const,
            letterSpacing: '0.02em',
            transition: 'background 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#D15100')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#E85D04')}
        >
          Shop Now
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        style={{
          background: 'none',
          border: 'none',
          color: '#FFFFFF',
          fontSize: '24px',
          cursor: 'pointer',
          padding: '8px',
        }}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '64px',
            left: 0,
            right: 0,
            background: 'rgba(36, 0, 70, 0.98)',
            backdropFilter: 'blur(12px)',
            padding: '24px 4vw',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: '16px',
                color: '#B8C0FF',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#products"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '14px',
              color: '#FFFFFF',
              textDecoration: 'none',
              background: '#E85D04',
              padding: '10px 20px',
              borderRadius: '6px',
              textAlign: 'center',
              textTransform: 'uppercase' as const,
            }}
          >
            Shop Now
          </a>
        </div>
      )}
    </nav>
  );
}