import { useEffect } from 'react';
import GridPlane from './sections/GridPlane';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Products from './sections/Products';
import About from './sections/About';
import Gallery from './sections/Gallery';
import Testimonials from './sections/Testimonials';
import CTASection from './sections/CTASection';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function SvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <clipPath id="btn-clip-base" clipPathUnits="objectBoundingBox">
          <rect x="0" y="0" width="1" height="1" rx="0.08" />
        </clipPath>
        <clipPath id="btn-clip-drip" clipPathUnits="objectBoundingBox">
          <path d="M0,0 h1 v0.88 a0.03,0.03 0 0 1 -0.03,0 a0.03,0.03 0 0 0 -0.04,0 a0.03,0.03 0 0 1 -0.03,0 a0.03,0.03 0 0 0 -0.04,0 a0.03,0.03 0 0 1 -0.03,0 a0.03,0.03 0 0 0 -0.04,0 a0.03,0.03 0 0 1 -0.03,0 a0.03,0.03 0 0 0 -0.04,0 a0.03,0.03 0 0 1 -0.03,0 a0.03,0.03 0 0 0 -0.04,0 a0.03,0.03 0 0 1 -0.03,0 a0.03,0.03 0 0 0 -0.04,0 a0.03,0.03 0 0 1 -0.03,0 a0.03,0.03 0 0 0 -0.04,0 a0.03,0.03 0 0 1 -0.03,0 a0.03,0.03 0 0 0 -0.04,0 a0.03,0.03 0 0 1 -0.03,0 a0.03,0.03 0 0 0 -0.04,0 a0.03,0.03 0 0 1 -0.03,0 a0.03,0.03 0 0 0 -0.04,0 a0.03,0.03 0 0 1 -0.03,0 a0.03,0.03 0 0 0 -0.04,0 a0.03,0.03 0 0 1 -0.03,0 a0.03,0.03 0 0 0 -0.04,0 a0.03,0.03 0 0 1 -0.03,0 a0.03,0.03 0 0 0 -0.04,0 a0.03,0.03 0 0 1 -0.03,0 a0.03,0.03 0 0 0 -0.04,0 a0.03,0.03 0 0 1 -0.03,0 a0.03,0.03 0 0 0 -0.04,0 a0.03,0.03 0 0 1 -0.03,0 a0.03,0.03 0 0 0 -0.04,0 a0.03,0.03 0 0 1 -0.03,0 a0.03,0.03 0 0 0 -0.04,0 a0.03,0.03 0 0 1 -0.03,0 z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function App() {
  // This is a client-rendered SPA: when someone loads a URL like
  // "/#contact" directly, the browser tries to scroll to that element
  // during the initial (empty) HTML parse — before React has mounted
  // anything — so the native jump silently fails and the page is stuck
  // at the top. Re-run it once the real DOM exists.
  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    const target = document.getElementById(id);
    target?.scrollIntoView();
  }, []);

  return (
    <>
      <SvgDefs />
      <GridPlane />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />
        <Products />
        <About />
        <Gallery />
        <Testimonials />
        <CTASection />
        <Contact />
        <Footer />
      </div>
    </>
  );
}