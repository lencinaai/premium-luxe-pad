import { useState, useEffect, useCallback, useRef } from "react";
import { getShuffledSequences } from "@/lib/shuffleSequences";

export function useHeroRotation(imageCount: number, basePath: string, intervalMs: number) {
  const [sequences] = useState(() => getShuffledSequences(imageCount));
  const [sequenceIndex] = useState(() => Math.floor(Math.random() * sequences.length));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState("");
  const [nextImage, setNextImage] = useState("");
  const [isFading, setIsFading] = useState(false);
  const [ready, setReady] = useState(false);
  const prefersReducedMotion = useRef(false);

  const sequence = sequences[sequenceIndex];

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = mq.matches;
    const handler = (e: MediaQueryListEvent) => {
      prefersReducedMotion.current = e.matches;
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const getImageUrl = useCallback(
    (idx: number) => {
      if (!sequence || sequence.length === 0) return "";
      const num = sequence[idx % sequence.length];
      const padded = String(num).padStart(2, "0");
      return `${basePath}${padded}.png`;
    },
    [sequence, basePath]
  );

  // Probe first image to see if assets actually exist
  useEffect(() => {
    if (imageCount <= 0) return;
    const url = getImageUrl(0);
    if (!url) return;
    const img = new Image();
    img.onload = () => {
      setCurrentImage(url);
      setNextImage(getImageUrl(1));
      setReady(true);
    };
    img.onerror = () => setReady(false);
    img.src = url;
  }, [getImageUrl, imageCount]);

  useEffect(() => {
    if (!ready || prefersReducedMotion.current) return;

    const timer = setInterval(() => {
      setIsFading(true);
      const next = currentIndex + 1;
      setNextImage(getImageUrl(next));

      setTimeout(() => {
        setCurrentIndex(next);
        setCurrentImage(getImageUrl(next));
        setNextImage(getImageUrl(next + 1));
        setIsFading(false);
      }, 800);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [ready, currentIndex, getImageUrl, intervalMs]);

  return { currentImage, nextImage, isFading, ready };
}
