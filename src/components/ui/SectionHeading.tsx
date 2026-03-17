interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary mt-3 max-w-2xl leading-relaxed text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
