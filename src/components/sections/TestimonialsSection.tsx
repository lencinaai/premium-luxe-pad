import { testimonialsSection } from "@/data/siteContent";
import SectionHeading from "@/components/ui/SectionHeading";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 px-6 scroll-mt-header">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading title={testimonialsSection.title} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsSection.items.map((item, i) => (
            <div
              key={i}
              className="aspect-square rounded-lg overflow-hidden border border-border card-glow bg-card relative"
            >
              <img
                src={item.image}
                alt={`Depoimento ${i + 1}`}
                className="absolute inset-[-30%] w-[160%] h-[160%] max-w-none object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/placeholder.svg";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
