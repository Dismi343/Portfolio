import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to detect when an element enters the viewport.
 * @param {Object} options IntersectionObserver options
 * @param {number} [options.threshold=0.12] Percentage of element visible to trigger
 * @param {string} [options.rootMargin='0px 0px -40px 0px'] Margin around the root
 * @param {boolean} [options.once=true] Whether to trigger only once
 * @returns {[React.RefObject, boolean]}
 */
export function useInView({ threshold = 0.12, rootMargin = '0px 0px -40px 0px', once = true } = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) {
            observer.unobserve(node);
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [threshold, rootMargin, once]);

  return [ref, isInView];
}

export default useInView;
