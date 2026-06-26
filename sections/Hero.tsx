import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        minHeight: '100vh',
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
        paddingTop: '64px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '100px 4vw 120px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
          alignItems: 'center',
        }}
        className="md:!grid-cols-[55%_45%]"
      >
        {/* Text column */}
        <div>
          {/* Label */}
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#B8C0FF',
              marginBottom: '20px',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.2s, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.2s',
            }}
          >
            FUNCTIONAL MUSHROOM SUPPLEMENTS
          </p>

          {/* H1 */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.0,
              color: '#FFFFFF',
              textShadow: '0 2px 30px rgba(36, 0, 70, 0.6)',
            }}
          >
            <span
              style={{
                display: 'block',
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.4s, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.4s',
              }}
            >
              Free Your Mind&apos;s
            </span>
            <span
              style={{
                display: 'block',
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.55s, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.55s',
              }}
            >
              Potential.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
              color: '#B8C0FF',
              maxWidth: '440px',
              marginTop: '24px',
              lineHeight: 1.5,
              opacity: loaded ? 1 : 0,
              transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.8s',
            }}
          >
            Functional mushroom gummies, coffee, and capsules made to sharpen focus, calm the noise, and fuel your day — the fun way.
          </p>

          {/* CTA group */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              marginTop: '36px',
              flexWrap: 'wrap',
              opacity: loaded ? 1 : 0,
              transition: 'opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) 1.0s',
            }}
          >
            <a
              href="#products"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '14px',
                color: '#FFFFFF',
                textDecoration: 'none',
                background: '#E85D04',
                padding: '14px 28px',
                borderRadius: '6px',
                textTransform: 'uppercase' as const,
                letterSpacing: '0.02em',
                transition: 'background 0.3s, transform 0.2s',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#D15100';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#E85D04';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Shop the Collection
            </a>
            <a
              href="#about"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '14px',
                color: '#FFFFFF',
                textDecoration: 'none',
                background: 'transparent',
                padding: '14px 28px',
                borderRadius: '6px',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                textTransform: 'uppercase' as const,
                letterSpacing: '0.02em',
                transition: 'border-color 0.3s, background 0.3s',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.8)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              Meet Your Mushrooms
            </a>
          </div>
        </div>

        {/* Mushroom illustration */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
            transition: 'opacity 1s cubic-bezier(0.22, 1, 0.36, 1) 0.6s, transform 1s cubic-bezier(0.22, 1, 0.36, 1) 0.6s',
          }}
        >
          <img
            src="/images/hero-mushroom.jpg"
            alt="Psychedelic mushroom wonderland illustration with red spotted mushrooms, melting rainbow, and purple starry sky"
            style={{
              width: '100%',
              maxWidth: '480px',
              height: 'auto',
              borderRadius: '20px',
              boxShadow: '0 20px 60px rgba(36, 0, 70, 0.5)',
            }}
          />
        </div>
      </div>
    </section>
  );
}