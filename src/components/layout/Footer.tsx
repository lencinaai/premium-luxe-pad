import { footerContent } from "@/data/siteContent";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-[1400px] mx-auto text-center">
        <p className="font-display text-lg text-foreground font-semibold">
          {footerContent.name}
        </p>
        <p className="text-sm text-text-secondary mt-1">{footerContent.line1}</p>
        <p className="text-xs text-text-muted mt-3">{footerContent.copyright}</p>
      </div>
    </footer>
  );
}
