import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
  video?: string;
  videoPoster?: string;
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  images,
  video,
  videoPoster,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: Props) {
  const totalItems = images.length + (video ? 1 : 0);
  const isVideo = video && currentIndex >= images.length;

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-md flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Galeria de imagens"
    >
      <div
        className="relative max-w-5xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fechar galeria"
          className="absolute -top-12 right-0 p-2 text-text-muted hover:text-foreground transition-colors"
        >
          <X size={24} />
        </button>

        {isVideo ? (
          <video
            poster={videoPoster}
            controls
            autoPlay
            className="w-full max-h-[80vh] rounded-lg"
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <img
            src={images[currentIndex]}
            alt={`Imagem ${currentIndex + 1}`}
            className="w-full max-h-[80vh] object-contain rounded-lg"
          />
        )}

        {totalItems > 1 && (
          <>
            <button
              onClick={onPrev}
              aria-label="Anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-md bg-card/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={onNext}
              aria-label="Próximo"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-md bg-card/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
