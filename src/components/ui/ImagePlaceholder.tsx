interface ImagePlaceholderProps {
  className?: string;
  shape?: "circle" | "rounded";
}

export default function ImagePlaceholder({
  className = "",
  shape = "rounded",
}: ImagePlaceholderProps) {
  const shapeClass = shape === "circle" ? "rounded-full" : "rounded-lg";

  return (
    <div
      className={`${shapeClass} border border-border overflow-hidden ${className}`}
      style={{
        background:
          "radial-gradient(ellipse at 40% 30%, hsl(210 30% 14%), hsl(213 30% 8%) 70%)",
        boxShadow:
          "inset 0 1px 0 0 hsl(210 25% 20% / 0.4), 0 8px 32px -8px hsl(0 0% 0% / 0.5)",
      }}
    >
      {/* Subtle vignette overlay */}
      <div
        className="w-full h-full"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, hsl(213 30% 6% / 0.4) 100%)",
        }}
      />
    </div>
  );
}
