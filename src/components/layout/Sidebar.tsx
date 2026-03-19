import { siteInfo, menuItems } from "@/data/siteContent";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { scrollToSection } from "@/lib/scrollToSection";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { scrollToSection } from "@/lib/scrollToSection";

export default function Sidebar() {
  const anchors = menuItems.map((m) => m.anchor);
  const activeId = useScrollSpy(anchors, 120);

  return (
    <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-72 bg-sidebar border-r border-border z-40 overflow-y-auto">
      {/* Profile */}
      <div className="flex flex-col items-center px-6 pt-10 pb-6 border-b border-border">
        <div className="w-20 h-20 rounded-lg overflow-hidden border border-border mb-4">
          <img
            src={siteInfo.avatarUrl}
            alt={`Foto de ${siteInfo.name}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
        <h2 className="font-display text-xl font-semibold text-foreground tracking-wide">
          {siteInfo.name}
        </h2>
        <p className="text-sm text-text-secondary mt-4 text-center leading-relaxed">
          {siteInfo.role}
          <br />
          {siteInfo.location}
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3">
        <ul className="space-y-0.5">
          {menuItems.map((item) => (
            <li key={item.anchor}>
              <button
                onClick={() => scrollToSection(item.anchor)}
                aria-label={`Ir para ${item.label}`}
                className={`w-full text-left px-4 py-2.5 rounded-md text-sm transition-all duration-200 ${
                  activeId === item.anchor
                    ? "bg-secondary text-primary font-medium"
                    : "text-text-secondary hover:bg-secondary/50 hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-border">
        <p className="text-xs text-text-muted text-center">{siteInfo.creci}</p>
      </div>
    </aside>
  );
}
