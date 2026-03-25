import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className={cn(
        "fixed right-5 z-50 transition-all duration-300 transform",
        "w-[52px] h-[52px] max-[768px]:w-[46px] max-[768px]:h-[46px]",
        // Raised higher above WhatsApp button
        "bottom-[90px] max-[768px]:bottom-[80px]",
        "flex items-center justify-center",
        "rounded-xl hover:scale-105 active:scale-95",
        "bg-transparent border-0 cursor-pointer",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      )}
    >
      <svg
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_4px_12px_rgba(0,80,0,0.55)]"
        aria-hidden="true"
      >
        <defs>
          {/* Deep forest green gradient — matches site palette */}
          <linearGradient id="arrowGrad" x1="28" y1="4" x2="28" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="45%" stopColor="#166534" />
            <stop offset="100%" stopColor="#0f3d1f" />
          </linearGradient>
          <linearGradient id="shineGrad" x1="16" y1="6" x2="36" y2="26" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4ade80" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#166534" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Arrow body */}
        <path
          d="M28 4 L50 30 H37 V52 H19 V30 H6 Z"
          fill="url(#arrowGrad)"
          stroke="#14532d"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Glossy highlight */}
        <path
          d="M28 6 L46 28 H35 V22 H21 V28 H10 Z"
          fill="url(#shineGrad)"
        />
      </svg>
    </button>
  );
}
