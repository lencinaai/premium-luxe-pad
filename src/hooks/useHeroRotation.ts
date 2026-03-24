import { useState, useEffect, useRef } from "react";

/**
 * Rotates through hero background images with crossfade.
 * Probes each candidate URL; if none load, `ready` stays false.
 */
export function useHeroRotation(
  images: string[],
  intervalMs: number
) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [images.length, intervalMs]);

  return { activeIndex, images };
}
