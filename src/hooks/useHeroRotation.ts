import { useState, useEffect, useRef } from "react";

/**
 * Rotates through hero background images with crossfade.
 * Probes each candidate URL; if none load, `ready` stays false.
 */
export function useHeroRotation(
  imageCount: number,
  basePath: string,
  intervalMs: number
) {
  const [currentImage, setCurrentImage] = useState("");
  const [nextImage, setNextImage] = useState("");
  const [isFading, setIsFading] = useState(false);
  const [ready, setReady] = useState(false);

  // Persist mutable data without causing re-renders
  const dataRef = useRef<{
    sequence: string[];
    index: number;
    prefersReducedMotion: boolean;
  }>({ sequence: [], index: 0, prefersReducedMotion: false });

  // Track reduced-motion preference
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    dataRef.current.prefersReducedMotion = mq.matches;
    const handler = (e: MediaQueryListEvent) => {
      dataRef.current.prefersReducedMotion = e.matches;
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Probe images on mount and build sequence
  useEffect(() => {
    let cancelled = false;

    const probe = (url: string): Promise<string | null> =>
      new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(url);
        img.onerror = () => resolve(null);
        img.src = url;
      });

    (async () => {
      if (imageCount <= 0) return;

      const candidates = Array.from({ length: imageCount }, (_, i) => {
        const padded = String(i + 1).padStart(2, "0");
        return `${basePath}${padded}.png`;
      });

      const results = await Promise.all(candidates.map(probe));
      if (cancelled) return;

      const available = results.filter((u): u is string => u !== null);
      if (available.length === 0) return;

      // Fisher-Yates shuffle
      const shuffled = [...available];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      dataRef.current.sequence = shuffled;
      dataRef.current.index = 0;

      setCurrentImage(shuffled[0]);
      setNextImage(shuffled[1] ?? shuffled[0]);
      setReady(true);
    })();

    return () => {
      cancelled = true;
    };
  }, [imageCount, basePath]);

  // Rotation timer
  useEffect(() => {
    const { sequence, prefersReducedMotion } = dataRef.current;
    if (!ready || prefersReducedMotion || sequence.length <= 1) return;

    let fadeTimer: ReturnType<typeof setTimeout> | undefined;

    const timer = setInterval(() => {
      const seq = dataRef.current.sequence;
      const next = (dataRef.current.index + 1) % seq.length;

      setNextImage(seq[next]);
      setIsFading(true);

      fadeTimer = setTimeout(() => {
        dataRef.current.index = next;
        const following = (next + 1) % seq.length;
        setCurrentImage(seq[next]);
        setNextImage(seq[following]);
        setIsFading(false);
      }, 800);
    }, intervalMs);

    return () => {
      clearInterval(timer);
      if (fadeTimer) clearTimeout(fadeTimer);
    };
  }, [ready, intervalMs]);

  return { currentImage, nextImage, isFading, ready };
}
