import { useState } from "react";
import { condoSection } from "@/data/siteContent";
import SectionHeading from "@/components/ui/SectionHeading";
import Lightbox from "@/components/ui/Lightbox";

export default function CondoProjectSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const allImages = condoSection.gallery;
  const totalItems = allImages.length;

  const openLightbox = (i: number) => {
    setLightboxIndex(i);
    setLightboxOpen(true);
  };

  return (
    <section id="condominio" className="py-20 px-6 scroll-mt-header">
      <div className="max-w-[1400px] mx-auto space-y-20">
        <SectionHeading
          title={condoSection.title}
          subtitle={condoSection.subtitle}
        />

        {/* Featured Video */}
        <div className="aspect-video rounded-lg overflow-hidden border border-border card-glow bg-black">
          <video
            poster={condoSection.videoPoster}
            controls
            className="w-full h-full object-cover shadow-2xl"
            preload="none"
          >
            <source src={condoSection.video} type="video/mp4" />
            Seu navegador não suporta este vídeo.
          </video>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {condoSection.gallery.map((img, i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-lg overflow-hidden border border-border cursor-pointer hover:border-primary/50 transition-colors card-glow"
              onClick={() => openLightbox(i)}
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
        </div>

        {lightboxOpen && (
          <Lightbox
            images={allImages}
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
