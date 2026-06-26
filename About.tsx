import { useScrollAnimation } from './hooks/useScrollAnimation';

export default function About() {
  const leftRef = useScrollAnimation(0.2);
  const rightRef = useScrollAnimation(0.2);

  return (
    <section
      id="about"
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
          padding: '100px 4vw',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          alignItems: 'center',
        }}
        className="md:!grid-cols-2"
      >
        {/* Left column - Text */}
        <div
          ref={leftRef}
          className="animate-on-scroll-left"
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#E85D04',
              marginBottom: '16px',
            }}
          >
            WHY WE BUILT A WONDERLAND
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: '#240046',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            Nature&apos;s Most Underrated Tool
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '16px',
              color: 'rgba(36, 0, 70, 0.8)',
              marginTop: '20px',
              lineHeight: 1.7,
            }}
          >
            We started in a small kitchen with one obsession: mushrooms are one of nature&apos;s most powerful tools for mental performance and daily wellness. The problem? Every supplement on the shelf looked like it was designed in a hospital.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '16px',
              color: 'rgba(36, 0, 70, 0.8)',
              marginTop: '16px',
              lineHeight: 1.7,
            }}
          >
            So we built a Wonderland. Our products are third-party tested, sustainably sourced, and wrapped in packaging that makes you smile. Because taking care of your brain should feel like the magic it is.
          </p>
          <blockquote
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '18px',
              color: '#240046',
              marginTop: '28px',
              paddingLeft: '20px',
              borderLeft: '3px solid #E85D04',
              lineHeight: 1.5,
            }}
          >
            We make functional mushrooms feel like the magic they are — zero boring beige packaging.
          </blockquote>
        </div>

        {/* Right column - Image */}
        <div
          ref={rightRef}
          className="animate-on-scroll-right"
        >
          <img
            src="/images/hero-mushroom.jpg"
            alt="Psychedelic mushroom wonderland with red spotted mushrooms, melting rainbow, and purple starry sky"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '16px',
              objectFit: 'cover',
              boxShadow: '0 8px 32px rgba(36, 0, 70, 0.12)',
            }}
          />
        </div>
      </div>
    </section>
  );
}