import { useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { menuItems, siteInfo } from "@/data/siteContent";
import { scrollToSection } from "@/lib/scrollToSection";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ open, onClose }: Props) {
  const handleEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [open, handleEsc]);

  const handleNav = (anchor: string) => {
    onClose();
    setTimeout(() => scrollToSection(anchor), 200);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-card border-l border-border transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 h-14 border-b border-border">
          <span className="font-display text-lg font-semibold text-foreground">
            {siteInfo.name}
          </span>
          <button
            onClick={onClose}
            aria-label="Fechar menu"
            className="p-2 text-text-muted hover:text-foreground transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="py-4 px-3">
          <ul className="space-y-0.5">
            {menuItems.map((item) => (
              <li key={item.anchor}>
                <button
                  onClick={() => handleNav(item.anchor)}
                  className="w-full text-left px-4 py-2.5 rounded-md text-sm text-text-secondary hover:bg-secondary/50 hover:text-foreground transition-all duration-200"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
