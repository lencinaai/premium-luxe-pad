import { socialSection } from "@/data/siteContent";
import SectionHeading from "@/components/ui/SectionHeading";
import SocialCard from "@/components/ui/SocialCard";

export default function SocialSection() {
  return (
    <section id="contato" className="py-20 px-6 scroll-mt-header">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          title={socialSection.title}
          subtitle={socialSection.subtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {socialSection.links.map((link) => (
            <SocialCard
              key={link.label}
              label={link.label}
              url={link.url}
              icon={link.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
