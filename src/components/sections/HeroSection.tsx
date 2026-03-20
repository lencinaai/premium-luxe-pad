import { heroContent, socialSection } from "@/data/siteContent";
import { useHeroRotation } from "@/hooks/useHeroRotation";
import { scrollToSection } from "@/lib/scrollToSection";
import SocialIconCircle from "@/components/ui/SocialIconCircle";
import profilePhoto from "@/assets/foto_de_perfil.jpeg";

const HERO_IMAGE_COUNT = 10;
const HERO_BASE_PATH = "/assets/hero/hero-";
const HERO_INTERVAL = 3000;

export default function HeroSection() {
  const { currentImage, nextImage, isFading, ready } = useHeroRotation(
    HERO_IMAGE_COUNT,
    HERO_BASE_PATH,
    HERO_INTERVAL
  );

  return (
    <section id="hero" className="relative min-h-screen flex items-center scroll-mt-header overflow-hidden">
      {/* Fallback solid bg */}
      <div className="absolute inset-0 -z-10 bg-background" />

      {/* Rotating background layer */}
      {ready && (
        <div className="absolute inset-0 z-0">
          <img
            src={currentImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: isFading ? 0 : 1,
              transition: "opacity 800ms ease-in-out",
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <img
            src={nextImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: isFading ? 1 : 0,
              transition: "opacity 800ms ease-in-out",
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-background/75" />

      {/* Extra darkening on text side */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(105deg, hsl(var(--background) / 0.85) 45%, transparent 80%)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, hsl(var(--background)) 100%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-44 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, hsl(var(--background)), transparent)",
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20 lg:py-0">
        {/* ── MOBILE LAYOUT ── */}
        <div className="lg:hidden flex flex-col items-center text-center">
          {/* Name */}
          <h1 className="leading-[0.9] mb-6">
            <span className="block font-sora text-[2.6rem] sm:text-5xl font-extrabold text-foreground uppercase tracking-[0.04em]">
              Cristian
            </span>
            <span className="block font-display text-[2.6rem] sm:text-5xl font-bold text-bronze uppercase tracking-[0.06em] italic">
              Lencina
            </span>
          </h1>

          {/* Portrait */}
          <div className="w-40 h-52 sm:w-48 sm:h-60 rounded-lg border border-border overflow-hidden shadow-lg bg-card mb-8">
            <img
              src={profilePhoto}
              alt="Cristian Lencina"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 15%" }}
            />
          </div>

          {/* Balloons */}
          <div className="space-y-3 mb-8 w-full">
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
          <div className="flex flex-col gap-3 mb-8 w-full">
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
          <div className="flex flex-wrap justify-center gap-3">
            {socialSection.links.map((s) => (
              <SocialIconCircle
                key={s.label}
                icon={s.icon}
                label={s.label}
                url={s.url}
                compact
              />
            ))}
          </div>
        </div>

        {/* ── DESKTOP LAYOUT ── */}
        <div className="hidden lg:flex lg:items-center lg:gap-10">
          <div className="flex-1 min-w-0">
            {/* Name */}
            <h1 className="mb-10 leading-[0.88]">
              <span className="block font-sora text-7xl md:text-8xl lg:text-[7rem] xl:text-[8.5rem] font-extrabold text-foreground uppercase tracking-[0.03em]">
                Cristian
              </span>
              <span className="block font-display text-7xl md:text-8xl lg:text-[7rem] xl:text-[8.5rem] font-bold text-bronze uppercase tracking-[0.05em] italic">
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
            <div className="flex flex-wrap gap-3">
              {socialSection.links.map((s) => (
                <SocialIconCircle
                  key={s.label}
                  icon={s.icon}
                  label={s.label}
                  url={s.url}
                  compact
                />
              ))}
            </div>
          </div>

          {/* Desktop profile image card */}
          <div className="flex-shrink-0">
            <div className="w-72 h-[440px] rounded-lg border border-border overflow-hidden shadow-lg bg-card">
              <img
                src={profilePhoto}
                alt="Cristian Lencina"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 15%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
