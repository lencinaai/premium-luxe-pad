import { useState } from "react";
import { Menu } from "lucide-react";
import { siteInfo } from "@/data/siteContent";
import MobileDrawer from "./MobileDrawer";
import profilePhoto from "@/assets/foto_de_perfil.jpeg";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border h-16 flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-border">
            <img
              src={profilePhoto}
              alt={siteInfo.name}
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 20%" }}
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
