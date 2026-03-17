import { sellerSection } from "@/data/siteContent";
import SectionHeading from "@/components/ui/SectionHeading";
import { Camera, Wand2, Target, Megaphone } from "lucide-react";

const icons = [Camera, Wand2, Target, Megaphone];

export default function SellerSection() {
  return (
    <section id="vender" className="py-20 px-6 scroll-mt-header">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title={sellerSection.title} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sellerSection.blocks.map((block, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-6 card-glow flex gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Icon size={18} className="text-primary" />
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {block}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
