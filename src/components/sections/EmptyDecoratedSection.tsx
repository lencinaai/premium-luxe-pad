import { emptyDecoratedSection } from "@/data/siteContent";
import SectionHeading from "@/components/ui/SectionHeading";
import ExampleComparisonBlock from "@/components/ui/ExampleComparisonBlock";

export default function EmptyDecoratedSection() {
  return (
    <section id="decorada" className="py-20 px-6 scroll-mt-header">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title={emptyDecoratedSection.title} />

        <div className="space-y-6">
          {emptyDecoratedSection.examples.map((ex) => (
            <ExampleComparisonBlock
              key={ex.label}
              chipLabel={emptyDecoratedSection.chipLabel}
              exampleLabel={ex.label}
              beforeLabel={emptyDecoratedSection.beforeLabel}
              afterLabel={emptyDecoratedSection.afterLabel}
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
