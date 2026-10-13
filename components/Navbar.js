"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-[18px] z-[100] max-[780px]:top-[10px]">
      <nav className={`mx-auto flex min-h-[72px] w-[min(calc(100%-2rem),1200px)] items-center rounded-[18px] border px-[18px] text-white backdrop-blur-[22px] [backdrop-filter:saturate(160%)] transition-all duration-300 max-[780px]:min-h-[62px] ${scrolled ? "border-white/20 bg-[rgba(22,25,32,0.58)] shadow-[0_18px_46px_rgba(3,7,12,0.3),inset_0_1px_0_rgba(255,255,255,0.08)]" : "border-white/20 bg-[linear-gradient(120deg,rgba(255,255,255,0.12),rgba(255,255,255,0.045)_48%,rgba(255,255,255,0.085)),rgba(24,27,34,0.4)] shadow-[0_18px_48px_rgba(3,7,12,0.24),inset_0_1px_0_rgba(255,255,255,0.12)]"}`} aria-label="Main navigation">
        <a className="inline-flex items-center gap-2.5 font-extrabold tracking-[-0.04em] text-white no-underline" href="#top" aria-label="SwiftAid home">
          <span className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-[10px] bg-gradient-to-br from-[#d93b2b] to-[#ff8b78] text-sm text-white shadow-[0_5px_16px_rgba(217,59,43,0.3)] transition duration-200 hover:rotate-[-8deg] hover:scale-110" aria-hidden="true">S</span>
          <span>SwiftAid</span>
        </a>

        <div id="mobile-navigation" className={`ml-auto hidden items-center gap-[clamp(12px,2vw,28px)] min-[781px]:flex max-[780px]:absolute max-[780px]:left-4 max-[780px]:right-4 max-[780px]:top-[calc(100%_+_10px)] max-[780px]:flex-col max-[780px]:items-stretch max-[780px]:rounded-[18px] max-[780px]:border max-[780px]:border-white/15 max-[780px]:bg-[rgba(22,25,32,0.78)] max-[780px]:p-[18px] max-[780px]:shadow-[0_20px_48px_rgba(0,0,0,0.28)] max-[780px]:backdrop-blur-[22px] ${isOpen ? "max-[780px]:flex" : ""}`}>
          {navItems.map((item) => (
            <a className="py-2 text-[0.84rem] font-bold text-white/75 no-underline transition hover:-translate-y-px hover:text-white max-[780px]:px-2" key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>

        <a className="ml-5 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-[18px] py-[11px] text-xs font-bold text-white no-underline shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition duration-200 hover:-translate-y-0.5 hover:bg-white/20 hover:shadow-lg active:translate-y-0 active:scale-[0.98] max-[780px]:hidden" href="#experience">
          Explore SwiftAid
        </a>

        <button
          type="button"
          className="ml-auto hidden h-11 w-11 cursor-pointer rounded-xl border border-white/20 bg-transparent max-[780px]:block"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="mx-auto my-1 block h-0.5 w-[18px] rounded-full bg-white" />
          <span className="mx-auto my-1 block h-0.5 w-[18px] rounded-full bg-white" />
          <span className="mx-auto my-1 block h-0.5 w-[18px] rounded-full bg-white" />
        </button>
      </nav>
    </header>
  );
}
