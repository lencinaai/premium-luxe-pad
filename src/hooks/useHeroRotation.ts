import { useState, useEffect, useCallback, useRef } from "react";
import { getShuffledSequences } from "@/lib/shuffleSequences";

export function useHeroRotation(imageCount: number, basePath: string, intervalMs: number) {
  const [sequence, setSequence] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState("");
  const [nextImage, setNextImage] = useState("");
  const [isFading, setIsFading] = useState(false);
  const [ready, setReady] = useState(false);
  const prefersReducedMotion = useRef(false);

  const getCandidateUrls = useCallback(() => {
    return Array.from({ length: imageCount }, (_, index) => {
      const padded = String(index + 1).padStart(2, "0");
      return `${basePath}${padded}.png`;
    });
  }, [imageCount, basePath]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = mq.matches;
    const handler = (e: MediaQueryListEvent) => {
      prefersReducedMotion.current = e.matches;
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    let cancelled = false;

    const probeImage = (url: string) =>
      new Promise<string | null>((resolve) => {
        const img = new Image();
        img.onload = () => resolve(url);
        img.onerror = () => resolve(null);
        img.src = url;
      });

    const loadAvailableImages = async () => {
      const candidates = getCandidateUrls();

      if (candidates.length === 0) {
        setSequence([]);
        setCurrentImage("");
        setNextImage("");
        setReady(false);
        return;
      }

      const results = await Promise.all(candidates.map(probeImage));
      if (cancelled) return;

      const availableImages = results.filter((url): url is string => Boolean(url));

      if (availableImages.length === 0) {
        setSequence([]);
        setCurrentImage("");
        setNextImage("");
        setReady(false);
        return;
      }

      const shuffledSequences = getShuffledSequences(availableImages.length);
      const selectedSequence =
        shuffledSequences[Math.floor(Math.random() * shuffledSequences.length)]
          ?.map((imageNumber) => availableImages[imageNumber - 1])
          .filter(Boolean) ?? [];

      if (selectedSequence.length === 0) {
        setSequence([]);
        setCurrentImage("");
        setNextImage("");
        setReady(false);
        return;
      }

      setSequence(selectedSequence);
      setCurrentIndex(0);
      setCurrentImage(selectedSequence[0]);
      setNextImage(selectedSequence[1] ?? selectedSequence[0]);
      setReady(true);
    };

    loadAvailableImages();

    return () => {
      cancelled = true;
    };
  }, [getCandidateUrls]);

  useEffect(() => {
    if (!ready || prefersReducedMotion.current || sequence.length <= 1) return;

    let fadeTimer: number | undefined;

    const timer = window.setInterval(() => {
      const next = (currentIndex + 1) % sequence.length;
      setNextImage(sequence[next]);
      setIsFading(true);

      fadeTimer = window.setTimeout(() => {
        const following = (next + 1) % sequence.length;
        setCurrentIndex(next);
        setCurrentImage(sequence[next]);
        setNextImage(sequence[following]);
        setIsFading(false);
      }, 800);
    }, intervalMs);

    return () => {
      window.clearInterval(timer);
      if (fadeTimer) window.clearTimeout(fadeTimer);
    };
  }, [ready, sequence, currentIndex, intervalMs]);

  return { currentImage, nextImage, isFading, ready };
}
