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

        <div className="mt-12 rounded-lg border border-[hsl(30,40%,30%)] bg-secondary/60 px-6 py-6 md:px-8 md:py-7">
          <p className="text-[hsl(30,40%,60%)] text-sm md:text-base leading-relaxed italic">
            Se você tem um terreno, um lote em condomínio, um apartamento ou uma casa à venda, abaixo estão exemplos do que eu consigo criar com inteligência artificial para destacar o seu anúncio no mercado.
          </p>
        </div>
      </div>
    </section>
  );
}
