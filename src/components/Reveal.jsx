/* ============================================================================
   BLUEGEN — SCROLL REVEAL PRIMITIVES
   Gentle, calm reveal-on-scroll behaviour. Fully disabled for users who
   prefer reduced motion (CSS handles the fallback, JS simply does nothing).
   ========================================================================== */

import React, { useEffect, useRef, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Hook: returns a ref to attach to any element that should reveal on scroll. */
export const useReveal = () => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
      node.classList.add("is-visible");
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
};

/**
 * <Reveal> — wrapper that fades + lifts its children into view once.
 * `delay` (ms) staggers siblings; `as` swaps the rendered element.
 */
export const Reveal = ({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  style,
  ...rest
}) => {
  const ref = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

/** Gently returns scroll position to the top on route change. */
export const ScrollToTop = ({ trigger }) => {
  useEffect(() => {
    if (prefersReducedMotion()) {
      window.scrollTo(0, 0);
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [trigger]);

  return null;
};

export default Reveal;
