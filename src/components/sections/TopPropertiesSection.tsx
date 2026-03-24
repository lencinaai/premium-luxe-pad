import { properties, propertiesSection, siteInfo } from "@/data/siteContent";
import PropertyCard from "@/components/ui/PropertyCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TopPropertiesSection() {
  const whatsappUrl = `https://wa.me/${siteInfo.whatsappNumber}?text=${encodeURIComponent("Olá, Cristian! Gostaria de falar sobre condições de pagamento.")}`;

  return (
    <section id="imoveis" className="py-20 px-6 scroll-mt-header">
      <div className="max-w-[1400px] mx-auto">
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
        <div className="bg-green-cta border border-green-cta/20 rounded-lg p-10 text-center shadow-lg">
          <p className="text-white/90 text-sm md:text-base mb-6 max-w-2xl mx-auto leading-relaxed font-medium">
            {propertiesSection.ctaText}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={propertiesSection.ctaButton}
            className="inline-block bg-white text-green-cta px-10 py-3.5 rounded-md text-sm font-bold shadow-md hover:bg-white/95 hover:shadow-xl transition-all duration-200"
          >
            {propertiesSection.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
}
