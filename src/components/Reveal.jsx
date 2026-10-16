import React from 'react';
import { useInView } from '../hooks/useInView';

const VARIANT_MAP = {
  'fade-up': {
    visible: 'fade-up-visible',
    hidden: 'fade-up-hidden',
  },
  'corner-left': {
    visible: 'corner-left-visible',
    hidden: 'corner-left-hidden',
  },
  'corner-right': {
    visible: 'corner-right-visible',
    hidden: 'corner-right-hidden',
  },
  'slide-left': {
    visible: 'slide-left-visible',
    hidden: 'slide-left-hidden',
  },
  'slide-right': {
    visible: 'slide-right-visible',
    hidden: 'slide-right-hidden',
  },
};

/**
 * Reveal Component — Configurable Scroll Reveal
 * Uses CSS keyframe animations triggered by Intersection Observer.
 * Variants: 'fade-up' (default), 'corner-left', 'corner-right'
 */
const Reveal = ({
  children,
  delay = 0,
  duration = 500,
  className = '',
  as: Component = 'div',
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
  once = false,
  style = {},
  variant = 'fade-up',
  ...props
}) => {
  const [ref, isInView] = useInView({ threshold, rootMargin, once });
  const activeVariant = VARIANT_MAP[variant] || VARIANT_MAP['fade-up'];

  return (
    <Component
      ref={ref}
      style={{
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
        ...style,
      }}
      className={`${isInView ? activeVariant.visible : activeVariant.hidden} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Reveal;
