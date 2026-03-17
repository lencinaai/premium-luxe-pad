import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
  alt: string;
}

export default function PropertyCarousel({ images, alt }: Props) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-secondary">
      <img
        src={images[index]}
        alt={`${alt} - Imagem ${index + 1}`}
        className="w-full h-full object-cover transition-opacity duration-500"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "/placeholder.svg";
        }}
      />

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Imagem anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-md bg-background/70 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background/90 transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            aria-label="Próxima imagem"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-md bg-background/70 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background/90 transition-colors"
          >
            <ChevronRight size={16} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === index ? "bg-primary" : "bg-foreground/30"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
