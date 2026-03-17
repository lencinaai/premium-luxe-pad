import { useState } from "react";
import { faqSection } from "@/data/siteContent";
import SectionHeading from "@/components/ui/SectionHeading";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-20 px-6 scroll-mt-header">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title={faqSection.title} />

        <div className="space-y-3">
          {faqSection.items.map((item, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-lg overflow-hidden card-glow"
            >
              <button
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                aria-label={item.question}
                className="w-full text-left flex items-center justify-between px-6 py-4 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                <span>{item.question}</span>
                <ChevronDown
                  size={16}
                  className={`text-text-muted flex-shrink-0 ml-4 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-5 text-text-secondary text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
