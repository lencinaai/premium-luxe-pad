import { aboutSection } from "@/data/siteContent";
import SectionHeading from "@/components/ui/SectionHeading";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 px-6 scroll-mt-header">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_300px] gap-10 items-start">
          <div>
            <SectionHeading title={aboutSection.title} />
            <div className="space-y-4">
              {aboutSection.paragraphs.map((p, i) => (
                <p key={i} className="text-text-secondary text-sm leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-24">
              <ImagePlaceholder className="w-full h-[380px]" />
            </div>
          </div>
        </div>

        {/* Mobile about image */}
        <div className="lg:hidden mt-8 max-w-xs mx-auto">
          <div className="rounded-lg overflow-hidden border border-border shadow-xl">
            <img
              src={aboutSection.image}
              alt="Cristian Lencina"
              className="w-full h-auto object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/placeholder.svg";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
