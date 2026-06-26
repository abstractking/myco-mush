import { useScrollAnimation } from '../hooks/useScrollAnimation';

const products = [
  {
    name: "Lion's Mane Focus Gummies",
    tagline: 'Clarity, gummy-style.',
    bullets: ['Sharper memory & deep work support', 'Natural cognitive function', 'Berry flavor, no sugar crash'],
    price: '$34',
    image: '/images/product-gummies.jpg',
    alt: 'Clear glass jar filled with red berry-colored Lion\'s Mane focus gummies on light lavender background',
  },
  {
    name: 'Reishi Calm Capsules',
    tagline: 'The chill pill nature made.',
    bullets: ['Evening wind-down support', 'Stress response balance', 'Non-drowsy relaxation'],
    price: '$38',
    image: '/images/product-capsules.jpg',
    alt: 'Amber glass bottle with black cap containing Reishi calm capsules on warm cream background',
  },
  {
    name: 'Chaga Energy Coffee',
    tagline: 'Wonder fuel.',
    bullets: ['Antioxidant-rich smooth energy', 'All-day focus without jitters', 'Mushroom + coffee fusion'],
    price: '$29',
    image: '/images/product-coffee.jpg',
    alt: 'Matte black pouch bag of Chaga mushroom coffee blend standing upright on warm cream background',
  },
  {
    name: 'Cordyceps Performance Blend',
    tagline: 'Built for the grind.',
    bullets: ['Stamina & endurance support', 'Workout or workday fuel', 'Fast-absorbing powder form'],
    price: '$42',
    image: '/images/product-powder.jpg',
    alt: 'Clear glass jar containing golden-brown Cordyceps mushroom powder with wooden scoop',
  },
];

function RainbowDrip() {
  return (
    <svg
      className="drip-strip"
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      style={{ display: 'block', width: '100%', height: '60px', overflow: 'visible' }}
    >
      <defs>
        <clipPath id="drip-mask">
          <rect x="0" y="0" width="1200" height="30" />
        </clipPath>
        <clipPath id="drip-bottom">
          <rect x="0" y="30" width="1200" height="30" />
        </clipPath>
      </defs>
      <g clipPath="url(#drip-mask)">
        <path
          className="drip-segment"
          d="M0,15 h1200"
          stroke="#FF006E"
        />
      </g>
      <g clipPath="url(#drip-bottom)">
        <path className="drip-stroke" d="M100,0 v20" stroke="#FF006E" style={{ animationDelay: '0s' }} />
        <path className="drip-stroke" d="M250,0 v25" stroke="#FB5607" style={{ animationDelay: '0.8s' }} />
        <path className="drip-stroke" d="M400,0 v18" stroke="#FFBE0B" style={{ animationDelay: '1.6s' }} />
        <path className="drip-stroke" d="M550,0 v22" stroke="#3A86FF" style={{ animationDelay: '2.4s' }} />
        <path className="drip-stroke" d="M700,0 v28" stroke="#8338EC" style={{ animationDelay: '0.4s' }} />
        <path className="drip-stroke" d="M850,0 v16" stroke="#FF006E" style={{ animationDelay: '1.2s' }} />
        <path className="drip-stroke" d="M1000,0 v24" stroke="#FB5607" style={{ animationDelay: '2.0s' }} />
      </g>
    </svg>
  );
}

export default function Products() {
  const headingRef = useScrollAnimation(0.3);
  const gridRef = useScrollAnimation(0.1);

  return (
    <section
      id="products"
      style={{
        background: '#C8B6FF',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Liquid Rainbow Drip */}
      <RainbowDrip />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '60px 4vw 80px',
        }}
      >
        {/* Heading */}
        <div ref={headingRef} className="animate-on-scroll">
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: '#240046',
              textAlign: 'center',
              letterSpacing: '-0.02em',
            }}
          >
            Your Daily Dose of Wonder
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '16px',
              color: 'rgba(36, 0, 70, 0.7)',
              textAlign: 'center',
              marginTop: '12px',
              maxWidth: '520px',
              marginInline: 'auto',
              lineHeight: 1.5,
            }}
          >
            Four functional mushroom blends, each crafted for a specific moment in your day.
          </p>
        </div>

        {/* Product Grid */}
        <div
          ref={gridRef}
          className="animate-on-scroll"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginTop: '48px',
          }}
        >
          {products.map((product) => (
            <div
              key={product.name}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 4px 24px rgba(36, 0, 70, 0.08)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(36, 0, 70, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(36, 0, 70, 0.08)';
              }}
            >
              <img
                src={product.image}
                alt={product.alt}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'contain',
                  marginBottom: '20px',
                  borderRadius: '8px',
                }}
              />
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '20px',
                  color: '#240046',
                  letterSpacing: '-0.01em',
                }}
              >
                {product.name}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '14px',
                  color: '#E85D04',
                  marginTop: '4px',
                }}
              >
                {product.tagline}
              </p>
              <ul style={{ marginTop: '12px', padding: 0, listStyle: 'none' }}>
                {product.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 400,
                      fontSize: '14px',
                      color: 'rgba(36, 0, 70, 0.75)',
                      marginTop: '6px',
                      paddingLeft: '14px',
                      position: 'relative',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: '8px',
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        background: '#E85D04',
                      }}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '14px',
                  color: '#240046',
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                  marginTop: '20px',
                  display: 'inline-block',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E85D04')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#240046')}
              >
                {product.price} · Shop →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}