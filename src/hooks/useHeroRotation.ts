import { useState, useEffect, useCallback } from "react";
import { getShuffledSequences } from "@/lib/shuffleSequences";

export function useHeroRotation(imageCount: number, basePath: string, intervalMs: number) {
  const [sequences] = useState(() => getShuffledSequences(imageCount));
  const [sequenceIndex] = useState(() => Math.floor(Math.random() * sequences.length));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState("");
  const [nextImage, setNextImage] = useState("");
  const [isFading, setIsFading] = useState(false);

  const sequence = sequences[sequenceIndex];

  const getImageUrl = useCallback(
    (idx: number) => {
      const num = sequence[idx % sequence.length];
      const padded = String(num).padStart(2, "0");
      return `${basePath}${padded}.jpg`;
    },
    [sequence, basePath]
  );

  useEffect(() => {
    setCurrentImage(getImageUrl(0));
    setNextImage(getImageUrl(1));
  }, [getImageUrl]);

  useEffect(() => {
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
  }, [currentIndex, getImageUrl, intervalMs]);

  return { currentImage, nextImage, isFading };
}
