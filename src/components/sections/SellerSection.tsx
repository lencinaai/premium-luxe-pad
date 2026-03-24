import { sellerSection } from "@/data/siteContent";
import SectionHeading from "@/components/ui/SectionHeading";
import { Check } from "lucide-react";

export default function SellerSection() {
  return (
    <section id="vender" className="py-20 px-6 scroll-mt-header">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading title={sellerSection.title} />

        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-10 mb-16">
          {sellerSection.blocks.map((block, i) => (
            <div key={i} className="flex gap-5 items-start">
              <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full border border-primary/30 flex items-center justify-center bg-primary/5">
                <Check size={13} className="text-primary" strokeWidth={2.5} />
              </div>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                {block}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-[hsl(30,40%,30%)] bg-secondary/40 p-8 md:p-10 max-w-[1400px] mx-auto">
          <p className="text-[hsl(30,40%,60%)] text-sm md:text-base leading-relaxed italic text-center max-w-4xl mx-auto">
            Se você tem um terreno, um lote em condomínio, um apartamento ou uma casa à venda, abaixo estão exemplos do que eu consigo criar com inteligência artificial para destacar o seu anúncio no mercado.
          </p>
        </div>
      </div>
    </section>
  );
}
