import { useScrollAnimation } from './hooks/useScrollAnimation';

const testimonials = [
  {
    quote: "I take the Lion's Mane gummies before client calls and actually remember names now.",
    author: 'Jess R.',
    badge: 'verified buyer',
  },
  {
    quote: 'Reishi capsules are part of my nightly routine. No more 1am brain spirals.',
    author: 'Marcus T.',
    badge: 'verified buyer',
  },
  {
    quote: 'Chaga coffee replaced my second espresso. Smoother energy, no jitters.',
    author: 'Priya N.',
    badge: 'verified buyer',
  },
];

export default function Testimonials() {
  const headingRef = useScrollAnimation(0.3);
  const gridRef = useScrollAnimation(0.1);

  return (
    <section
      id="reviews"
      style={{
        background: '#C8B6FF',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px 4vw',
        }}
      >
        <div ref={headingRef} className="animate-on-scroll" style={{ textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: '#240046',
              letterSpacing: '-0.02em',
            }}
          >
            Wonderland Reviews
          </h2>
        </div>

        <div
          ref={gridRef}
          className="animate-on-scroll"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginTop: '48px',
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.author}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 4px 20px rgba(36, 0, 70, 0.06)',
              }}
            >
              {/* Stars */}
              <div style={{ marginBottom: '16px', fontSize: '16px' }}>
                {'⭐'.repeat(5)}
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  fontSize: '18px',
                  color: '#240046',
                  lineHeight: 1.6,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '14px',
                  color: 'rgba(36, 0, 70, 0.6)',
                  marginTop: '20px',
                }}
              >
                — {t.author}, {t.badge}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}