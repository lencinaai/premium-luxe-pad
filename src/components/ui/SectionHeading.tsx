interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground leading-[1.1] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-muted mt-4 max-w-2xl leading-relaxed text-xs md:text-sm font-medium uppercase tracking-[0.2em] border-l border-primary/40 pl-4">
          {subtitle}
        </p>
      )}
    </div>
  );
}
