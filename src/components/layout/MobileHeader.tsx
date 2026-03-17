import { useState } from "react";
import { Menu } from "lucide-react";
import { siteInfo } from "@/data/siteContent";
import MobileDrawer from "./MobileDrawer";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border h-14 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded overflow-hidden border border-border">
            <img
              src={siteInfo.avatarUrl}
              alt={siteInfo.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
          <span className="font-display text-base font-semibold text-foreground">
            {siteInfo.name}
          </span>
        </div>
        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
          className="p-2 text-foreground hover:text-primary transition-colors"
        >
          <Menu size={22} />
        </button>
      </header>
      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
