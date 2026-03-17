import { testimonialsSection } from "@/data/siteContent";
import SectionHeading from "@/components/ui/SectionHeading";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 px-6 scroll-mt-header">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title={testimonialsSection.title} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonialsSection.items.map((item, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-lg p-6 card-glow"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              <p className="text-text-secondary text-sm leading-relaxed mb-5 italic">
                "{item.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md overflow-hidden border border-border bg-secondary">
                  <img
                    src={item.avatar}
                    alt={`Depoimento de ${item.signature}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                <span className="text-foreground text-sm font-medium">
                  {item.signature}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
