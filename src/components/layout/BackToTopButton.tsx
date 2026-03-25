import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed right-5 z-50 transition-all duration-300 transform rounded-lg shadow-lg hover:shadow-xl hover:brightness-110 flex items-center justify-center overflow-hidden bg-white",
        "w-[52px] h-[52px] md:w-[52px] md:h-[52px] max-[768px]:w-[46px] max-[768px]:h-[46px]",
        "bottom-[80px] md:bottom-[80px] max-[768px]:bottom-[72px]", // Ligeiramente acima do WhatsApp (que está em bottom-5 = 20px + height)
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}
      aria-label="Voltar ao topo"
    >
      <img 
        src="/assets/icons/back-to-top.jpg" 
        alt="Voltar ao topo" 
        className="w-full h-full object-cover"
      />
    </button>
  );
}
