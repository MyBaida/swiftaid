import Link from "next/link";

function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Illustrative SwiftAid emergency coordination interface">
      <div className="phone-frame">
        <div className="phone-topbar">
          <span className="phone-dot" />
          <span className="phone-dot" />
          <span className="phone-dot" />
          <span className="phone-time">9:41</span>
        </div>

        <div className="phone-header">
          <div>
            <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.1em] text-[#ff6b5c]">Incident</p>
            <h2>Road accident</h2>
          </div>
          <span className="status-pill">Active</span>
        </div>

        <div className="map-panel" aria-hidden="true">
          <span className="pulse pulse-a" />
          <span className="pulse pulse-b" />
          <span className="map-pin" />
          <span className="map-pin responder" />
        </div>

        <div className="incident-card">
          <div>
            <span className="text-[0.65rem] font-extrabold uppercase tracking-[0.1em] text-[#ff6b5c]">Severity</span>
            <strong>High priority</strong>
          </div>
          <span className="signal-bar" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </div>
      </div>

      <div className="floating-card card-one">
        <span className="card-label">Emergency detected</span>
        <strong>Road accident</strong>
      </div>
      <div className="floating-card card-two">
        <span className="card-label">AI analysis</span>
        <strong>High priority</strong>
      </div>
      <div className="floating-card card-three">
        <span className="card-label">Responder assigned</span>
        <strong>2.4 km away</strong>
      </div>
      <div className="floating-card card-four">
        <span className="card-label">ETA</span>
        <strong>06 min</strong>
      </div>
      <div className="floating-card card-five">
        <span className="card-label">Live tracking</span>
        <strong>Active</strong>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="hero relative isolate h-auto min-h-svh pb-6 pt-[104px] text-white lg:h-svh lg:min-h-[600px]"
      id="overview"
      style={{ backgroundColor: "#0a0c10", backgroundImage: "radial-gradient(circle at top left, rgba(217, 59, 43, 0.14), transparent 35%)" }}
    >
      <div className="relative z-[1] mx-auto grid h-auto min-h-0 w-[min(calc(100%-2rem),1200px)] grid-cols-1 items-center gap-8 lg:h-full lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div>
          <span className="mb-3 inline-block text-[0.72rem] font-extrabold tracking-[0.16em] text-[#ff9a89]">AI-DRIVEN EMERGENCY COORDINATION</span>
          <h1 className="max-w-[680px] text-[clamp(2.4rem,4.5vw,4rem)] font-semibold leading-[0.98] tracking-[-0.055em]">Smarter emergency response, from report to resolution.</h1>
          <p className="mt-4 max-w-[620px] text-[clamp(0.92rem,1.45vw,1.04rem)] text-white/70">
            SwiftAid is an AI-driven emergency coordination and dispatch system designed to connect citizens,
            responders, and emergency agencies through intelligent resource allocation and real-time coordination.
          </p>

          <div className="mt-6 flex flex-wrap gap-3.5">
            <Link href="#experience" className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-gradient-to-br from-[#d93b2b] to-[#f16654] px-6 text-sm font-bold text-white shadow-[0_16px_26px_rgba(217,59,43,0.25)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_20px_34px_rgba(217,59,43,0.38)]">
              Explore SwiftAid
            </Link>
            <Link href="#how-it-works" className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-bold text-white transition duration-200 hover:-translate-y-1 hover:bg-white/10">
              View Project Details
            </Link>
          </div>

          <div className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/75" aria-label="Project status">
            <span className="h-2 w-2 animate-[pulse_2.8s_ease-in-out_infinite] rounded-full bg-emerald-400 shadow-[0_0_0_5px_rgba(52,211,153,0.15)]" aria-hidden="true" />
            Academic project showcase · Not a live emergency service
          </div>
        </div>

        <HeroVisual />
      </div>

    </section>
  );
}
