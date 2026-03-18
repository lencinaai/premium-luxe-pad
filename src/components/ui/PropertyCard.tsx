import { type PropertyData, propertiesSection, siteInfo } from "@/data/siteContent";
import PropertyCarousel from "./PropertyCarousel";

interface Props {
  property: PropertyData;
}

export default function PropertyCard({ property }: Props) {
  const whatsappUrl = `https://wa.me/${siteInfo.whatsappNumber}?text=${encodeURIComponent(property.whatsappMessage)}`;

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden card-glow flex flex-col">
      {/* Badge */}
      <div className="relative">
        <PropertyCarousel images={property.images} alt={property.title} />
        <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-md">
          {property.badge}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-foreground font-semibold text-sm leading-snug mb-2">
          {property.title}
        </h3>
        <p className="text-text-muted text-xs mb-4">{property.location}</p>

        {/* Conditions */}
        <div className="mb-3">
          <p className="text-xs text-text-muted uppercase tracking-wider mb-1.5 font-medium">
            Condições
          </p>
          <ul className="space-y-1">
            {property.conditions.map((c, i) => (
              <li key={i} className="text-text-secondary text-xs flex items-start gap-1.5">
                <span className="text-primary mt-0.5">•</span>
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Features */}
        <div className="mb-4 flex flex-col gap-1.5">
          {property.features.map((f, i) => (
            <span
              key={i}
              className="bg-secondary text-text-secondary text-xs px-2.5 py-1 rounded-md border border-border w-fit"
            >
              {f}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          {/* Price */}
          <p className="text-primary font-semibold text-lg mb-4">
            {property.totalPrice}
          </p>

          {/* CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${propertiesSection.buttonText} - ${property.badge}`}
            className="block w-full text-center bg-green-cta text-foreground text-sm font-medium py-2.5 rounded-md hover:brightness-110 hover:shadow-lg transition-all duration-200"
          >
            {propertiesSection.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}
