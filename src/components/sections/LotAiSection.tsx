import { lotAiSection } from "@/data/siteContent";
import SectionHeading from "@/components/ui/SectionHeading";
import ExampleComparisonBlock from "@/components/ui/ExampleComparisonBlock";

export default function LotAiSection() {
  return (
    <section id="terreno" className="py-20 px-6 scroll-mt-header">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title={lotAiSection.title} />

        <div className="space-y-6">
          {lotAiSection.examples.map((ex) => (
            <ExampleComparisonBlock
              key={ex.label}
              chipLabel={lotAiSection.chipLabel}
              exampleLabel={ex.label}
              beforeLabel={lotAiSection.beforeLabel}
              afterLabel={lotAiSection.afterLabel}
              beforeImg={ex.before}
              afterImg={ex.after}
              poster={ex.poster}
              video={ex.video}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
