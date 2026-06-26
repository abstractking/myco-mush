import { useRef, useCallback } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function CTASection() {
  const headingRef = useScrollAnimation(0.2);
  const btnRef = useRef<HTMLButtonElement>(null);
  const ringsRef = useRef<(HTMLDivElement | null)[]>([]);
  const ringCount = 5;

  const offsetRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const radius = 100;
    if (dist < radius) {
      const force = (radius - dist) / radius;
      targetRef.current.x = dx * force * 0.4;
      targetRef.current.y = dy * force * 0.4;
    } else {
      targetRef.current.x = 0;
      targetRef.current.y = 0;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    targetRef.current.x = 0;
    targetRef.current.y = 0;
  }, []);

  const animate = useCallback(() => {
    const btn = btnRef.current;
    if (!btn) return;
    offsetRef.current.x += (targetRef.current.x - offsetRef.current.x) * 0.15;
    offsetRef.current.y += (targetRef.current.y - offsetRef.current.y) * 0.15;
    btn.style.transform = `translate(${offsetRef.current.x}px, ${offsetRef.current.y}px)`;
    rafRef.current = requestAnimationFrame(animate);
  }, []);

  const handleMouseEnterBtn = useCallback(() => {
    window.addEventListener('mousemove', handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);
  }, [handleMouseMove, animate]);

  const handleMouseLeaveBtn = useCallback(() => {
    window.removeEventListener('mousemove', handleMouseMove);
    handleMouseLeave();
    cancelAnimationFrame(rafRef.current);
  }, [handleMouseMove, handleMouseLeave]);

  const handleClick = useCallback(() => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const maxDist = Math.max(cx, cy);

    for (let i = 0; i < ringCount; i++) {
      const ring = ringsRef.current[i];
      if (!ring) continue;
      ring.style.left = `${cx}px`;
      ring.style.top = `${cy}px`;
      ring.style.animation = 'none';
      void ring.offsetHeight;
      ring.style.setProperty('--portal-scale', `${(maxDist / 20) * (1 + i * 0.4)}`);
      ring.style.setProperty('--portal-opacity', `${1 - i * 0.15}`);
      ring.style.animation = `portal-expand 0.8s ease-out ${i * 0.08}s forwards`;
    }
  }, []);

  return (
    <section
      style={{
        background: '#240046',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '100px 4vw',
          textAlign: 'center',
        }}
      >
        <div ref={headingRef} className="animate-on-scroll">
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              color: '#FFFFFF',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            Your Mind Called.
            <br />
            It Wants In.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '18px',
              color: '#B8C0FF',
              marginTop: '20px',
            }}
          >
            Bundle &amp; save 15% on your first wonderland starter kit.
          </p>
          <button
            ref={btnRef}
            onClick={handleClick}
            onMouseEnter={handleMouseEnterBtn}
            onMouseLeave={handleMouseLeaveBtn}
            className="portal-btn"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '16px',
              color: '#FFFFFF',
              background: '#E85D04',
              padding: '16px 36px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              marginTop: '32px',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.02em',
              position: 'relative',
              overflow: 'hidden',
              transition: 'background 0.3s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = '#D15100')}
            onMouseOut={(e) => (e.currentTarget.style.background = '#E85D04')}
          >
            <span style={{ position: 'relative', zIndex: 2 }}>Build My Bundle</span>
            <div className="portal-rings" aria-hidden="true">
              {Array.from({ length: ringCount }).map((_, i) => (
                <div
                  key={i}
                  className="portal-ring"
                  ref={(el) => {
                    ringsRef.current[i] = el;
                  }}
                />
              ))}
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}