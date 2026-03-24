import { emptyDecoratedSection } from "@/data/siteContent";
import SectionHeading from "@/components/ui/SectionHeading";
import ExampleComparisonBlock from "@/components/ui/ExampleComparisonBlock";

export default function EmptyDecoratedSection() {
  return (
    <section id="decorada" className="py-20 px-6 scroll-mt-header overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading
          title={emptyDecoratedSection.title}
          subtitle={emptyDecoratedSection.chipLabel}
        />

        <div className="space-y-20">
          {emptyDecoratedSection.examples.map((ex, index) => (
            <div key={ex.label} className="max-w-[1400px] mx-auto">
              <ExampleComparisonBlock
                chipLabel={emptyDecoratedSection.chipLabel}
                exampleLabel={ex.label}
                beforeLabel={emptyDecoratedSection.beforeLabel}
                afterLabel={emptyDecoratedSection.afterLabel}
                beforeImg={ex.before}
                afterImg={ex.after}
                poster={ex.poster}
                video={ex.video}
                aspectRatio={ex.aspectRatio as "4/3" | "9/16" | "3/2" | undefined}
                className=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
