import { sellerSection } from "@/data/siteContent";
import SectionHeading from "@/components/ui/SectionHeading";
import { Check } from "lucide-react";

export default function SellerSection() {
  return (
    <section id="vender" className="py-20 px-6 scroll-mt-header">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title={sellerSection.title} />

        <div className="flex flex-col gap-8">
          {sellerSection.blocks.map((block, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full border border-[hsl(30,40%,45%)] flex items-center justify-center">
                <Check size={13} className="text-[hsl(30,40%,55%)]" strokeWidth={2.5} />
              </div>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {block}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
