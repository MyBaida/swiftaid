import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#090d11] px-0 pb-5 pt-9 text-white/70">
      <div className="mx-auto grid w-[min(calc(100%-2rem),1200px)] gap-6 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
        <div>
          <div className="inline-flex items-center gap-2.5 font-extrabold tracking-[-0.04em] text-white">
            <span className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-[10px] bg-gradient-to-br from-[#d93b2b] to-[#ff8b78] text-sm text-white shadow-[0_5px_16px_rgba(217,59,43,0.3)]" aria-hidden="true">S</span>
            <span>SwiftAid</span>
          </div>
          <p className="mt-4 font-bold text-white/70">AI-Driven Emergency Coordination &amp; Dispatch System</p>
        </div>

        <div className="grid content-start gap-3 [&_a]:text-white/60 [&_a]:no-underline [&_a]:transition-colors [&_a:hover]:text-white">
          <Link href="#overview">Overview</Link>
          <Link href="#how-it-works">How it works</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#architecture">Architecture</Link>
          <Link href="#results">Results</Link>
        </div>

        <div className="grid content-start gap-3 md:text-right">
          <span>GitHub</span>
          <span>LinkedIn</span>
          <span>Project documentation</span>
        </div>
      </div>

      <div className="mx-auto mt-8 flex w-[min(calc(100%-2rem),1200px)] flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:justify-between">
        <span>© 2025/2026 SwiftAid Project</span>
        <span>Created for academic project showcase</span>
      </div>
    </footer>
  );
}
