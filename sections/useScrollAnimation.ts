import { useEffect, useRef } from 'react';

/**
 * Reveals an element with a fade/slide-in once it scrolls into view.
 *
 * `proximity` (0-1) controls how far into the viewport the element must reach
 * before revealing, e.g. 0.3 = "trigger once the element is 30% of the way
 * up from the bottom of the screen." This is expressed as `rootMargin`
 * rather than `threshold` (a ratio of the *target's own* height) because a
 * height-based ratio can be partially or fully unreachable for elements
 * taller than `viewportHeight * proximity` — e.g. a 1400px-tall grid section
 * on a 900px-tall viewport can never satisfy `threshold: 0.3`, so it would
 * stay invisible forever on many real screen sizes.
 */
export function useScrollAnimation(proximity = 0.2) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => el.classList.add('is-visible');

    // If IntersectionObserver isn't supported, or the element is already in
    // view on mount (e.g. a direct #anchor link load), just show it.
    if (typeof IntersectionObserver === 'undefined') {
      reveal();
      return;
    }

    const marginPct = Math.round(proximity * 100);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: `0px 0px -${marginPct}% 0px` }
    );

    observer.observe(el);

    // Safety net: if something (anchor-link jump, fast programmatic scroll,
    // a missed observer tick) ever leaves this element un-revealed while it
    // is already on screen, force it visible after a short delay instead of
    // leaving content permanently hidden.
    const fallback = window.setTimeout(() => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        reveal();
        observer.unobserve(el);
      }
    }, 1500);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, [proximity]);

  return ref;
}