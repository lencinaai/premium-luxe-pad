import { useState } from "react";
import { condoSection } from "@/data/siteContent";
import SectionHeading from "@/components/ui/SectionHeading";
import Lightbox from "@/components/ui/Lightbox";
import { Play } from "lucide-react";

export default function CondoProjectSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const allImages = [condoSection.featured, ...condoSection.gallery];
  const totalItems = allImages.length + 1; // +1 for video

  const openLightbox = (i: number) => {
    setLightboxIndex(i);
    setLightboxOpen(true);
  };

  return (
    <section id="condominio" className="py-20 px-6 scroll-mt-header">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title={condoSection.title}
          subtitle={condoSection.subtitle}
        />

        {/* Featured */}
        <div
          className="aspect-video rounded-lg overflow-hidden border border-border mb-4 cursor-pointer card-glow"
          onClick={() => openLightbox(0)}
        >
          <img
            src={condoSection.featured}
            alt="Projeto de condomínio fechado"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/placeholder.svg";
            }}
          />
        </div>

        {/* Gallery + video */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {condoSection.gallery.map((img, i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-lg overflow-hidden border border-border cursor-pointer card-glow"
              onClick={() => openLightbox(i + 1)}
            >
              <img
                src={img}
                alt={`Galeria ${i + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/placeholder.svg";
                }}
              />
            </div>
          ))}

          {/* Video thumbnail */}
          <div
            className="aspect-[4/3] rounded-lg overflow-hidden border border-border cursor-pointer card-glow relative"
            onClick={() => openLightbox(allImages.length)}
          >
            <img
              src={condoSection.videoPoster}
              alt="Vídeo do projeto"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/placeholder.svg";
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-background/40">
              <div className="w-10 h-10 rounded-md bg-primary/90 flex items-center justify-center">
                <Play size={18} className="text-primary-foreground ml-0.5" />
              </div>
            </div>
          </div>
        </div>

        {lightboxOpen && (
          <Lightbox
            images={allImages}
            video={condoSection.video}
            videoPoster={condoSection.videoPoster}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxOpen(false)}
            onPrev={() =>
              setLightboxIndex((i) => (i === 0 ? totalItems - 1 : i - 1))
            }
            onNext={() =>
              setLightboxIndex((i) => (i === totalItems - 1 ? 0 : i + 1))
            }
          />
        )}
      </div>
    </section>
  );
}
