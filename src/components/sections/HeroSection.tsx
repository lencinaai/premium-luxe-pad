import { heroContent, siteInfo, socialSection } from "@/data/siteContent";
import { useHeroRotation } from "@/hooks/useHeroRotation";
import { scrollToSection } from "@/lib/scrollToSection";

export default function HeroSection() {
  const { currentImage, nextImage, isFading } = useHeroRotation(
    heroContent.imageCount,
    heroContent.imageBasePath,
    heroContent.intervalMs
  );

  return (
    <section id="hero" className="relative min-h-screen flex items-center scroll-mt-header overflow-hidden">
      {/* Full-section rotating background */}
      <div className="absolute inset-0 z-0">
        <img
          src={currentImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: isFading ? 0 : 1,
            transition: "opacity 1.2s ease-in-out",
          }}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        <img
          src={nextImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: isFading ? 1 : 0,
            transition: "opacity 1.2s ease-in-out",
          }}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background/80" />
        {/* Vignette edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, hsl(var(--background)) 100%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, hsl(var(--background)), transparent)",
          }}
        />
      </div>

      {/* Fallback dark bg when no images load */}
      <div className="absolute inset-0 -z-10 bg-background" />

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-24 lg:py-0">
        {/* Name */}
        <h1 className="mb-10 leading-[1.05]">
          <span className="block font-sora text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-foreground tracking-wide">
            Cristian
          </span>
          <span className="block font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-bronze tracking-wide">
            Lencina
          </span>
        </h1>

        {/* Balloons */}
        <div className="space-y-4 mb-10 max-w-2xl">
          <div className="bg-card/60 backdrop-blur-sm border border-border rounded-lg p-5 card-glow">
            <p className="text-text-secondary text-sm leading-relaxed">
              {heroContent.balloon1}
            </p>
          </div>
          <div className="bg-card/60 backdrop-blur-sm border border-border rounded-lg p-5 card-glow">
            <p className="text-text-secondary text-sm leading-relaxed">
              {heroContent.balloon2}
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <button
            onClick={() => scrollToSection("imoveis")}
            aria-label={heroContent.ctaPrimary}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-medium hover:brightness-110 hover:shadow-lg transition-all duration-200"
          >
            {heroContent.ctaPrimary}
          </button>
          <button
            onClick={() => scrollToSection("vender")}
            aria-label={heroContent.ctaSecondary}
            className="bg-green-cta text-foreground px-6 py-3 rounded-md text-sm font-medium hover:brightness-110 hover:shadow-lg transition-all duration-200"
          >
            {heroContent.ctaSecondary}
          </button>
        </div>

        {/* Social links */}
        <div className="flex gap-3">
          {socialSection.links.slice(0, 4).map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-9 h-9 rounded-md bg-secondary/50 backdrop-blur-sm flex items-center justify-center text-text-muted hover:text-primary hover:bg-secondary transition-all duration-200"
            >
              <SocialIcon type={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ type }: { type: string }) {
  const paths: Record<string, string> = {
    instagram: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z",
    youtube: "M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z",
    tiktok: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.86a8.28 8.28 0 004.76 1.5v-3.4a4.85 4.85 0 01-1-.27z",
    linkedin: "M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z",
  };
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
      <path d={paths[type] || paths.instagram} />
    </svg>
  );
}
