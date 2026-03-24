import { aboutSection } from "@/data/siteContent";
import SectionHeading from "@/components/ui/SectionHeading";
import profilePhoto from "@/assets/foto_de_perfil.jpeg";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 px-6 scroll-mt-header">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start">
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

          {/* Desktop image */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <div className="w-full h-[480px] rounded-lg border border-border overflow-hidden shadow-lg bg-card">
                <img
                  src={profilePhoto}
                  alt="Cristian Lencina"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 15%" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile profile image */}
        <div className="lg:hidden mt-10 max-w-sm mx-auto">
          <div className="w-full h-96 rounded-lg border border-border overflow-hidden shadow-lg bg-card">
            <img
              src={profilePhoto}
              alt="Cristian Lencina"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 15%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
