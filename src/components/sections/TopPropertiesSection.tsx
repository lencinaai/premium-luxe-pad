import { properties, propertiesSection, siteInfo } from "@/data/siteContent";
import PropertyCard from "@/components/ui/PropertyCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TopPropertiesSection() {
  const whatsappUrl = `https://wa.me/${siteInfo.whatsappNumber}?text=${encodeURIComponent("Olá, Cristian! Gostaria de falar sobre condições de pagamento.")}`;

  return (
    <section id="imoveis" className="py-20 px-6 scroll-mt-header">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title={propertiesSection.title}
          subtitle={propertiesSection.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {properties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>

        {/* Final CTA */}
        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <p className="text-text-secondary text-sm mb-5 max-w-xl mx-auto leading-relaxed">
            {propertiesSection.ctaText}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={propertiesSection.ctaButton}
            className="inline-block bg-whatsapp text-primary-foreground px-6 py-3 rounded-md text-sm font-medium hover:brightness-110 hover:shadow-lg transition-all duration-200"
          >
            {propertiesSection.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
}
