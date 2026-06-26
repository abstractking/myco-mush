import { useScrollAnimation } from './hooks/useScrollAnimation';

const galleryImages = [
  {
    src: '/images/gallery-forest.jpg',
    alt: 'Misty forest floor with wild mushrooms growing on a fallen log, morning light filtering through trees',
  },
  {
    src: '/images/gallery-flatlay.jpg',
    alt: 'Flat-lay of mushroom supplement products artfully arranged on marble surface with dried mushrooms and green leaves',
  },
  {
    src: '/images/gallery-coffee.jpg',
    alt: 'Hands holding a ceramic mug of mushroom coffee at sunrise with warm golden light',
  },
  {
    src: '/images/gallery-lab.jpg',
    alt: 'Modern laboratory with glass beakers and test tubes containing mushroom extracts',
  },
  {
    src: '/images/gallery-desk.jpg',
    alt: 'Lion\'s Mane gummy jar on a clean wooden desk next to a laptop and notebook',
  },
  {
    src: '/images/product-powder.jpg',
    alt: 'Clear glass jar containing golden-brown Cordyceps mushroom powder with wooden scoop',
  },
];

export default function Gallery() {
  const headingRef = useScrollAnimation(0.3);
  const gridRef = useScrollAnimation(0.1);

  return (
    <section
      id="gallery"
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
          padding: '60px 4vw 80px',
        }}
      >
        {/* Heading */}
        <div ref={headingRef} className="animate-on-scroll" style={{ textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
              color: '#240046',
              letterSpacing: '-0.02em',
            }}
          >
            Inside the Wonderland
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '15px',
              color: 'rgba(36, 0, 70, 0.7)',
              marginTop: '8px',
            }}
          >
            From forest to formula — see how we craft every product.
          </p>
        </div>

        {/* Image Grid */}
        <div
          ref={gridRef}
          className="animate-on-scroll"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
            marginTop: '40px',
          }}
        >
          {galleryImages.map((img, i) => (
            <div
              key={i}
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                aspectRatio: '4/3',
                transition: 'transform 0.4s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}