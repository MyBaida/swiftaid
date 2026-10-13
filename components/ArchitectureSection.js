export default function ArchitectureSection() {
  return (
    <section className="relative bg-gradient-to-b from-white to-[#f4f5f7] py-20 sm:py-24 lg:py-32" id="architecture" aria-labelledby="architecture-title">
      <div className="mx-auto w-[min(calc(100%-2rem),1200px)]">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <span className="mb-3 inline-block text-[0.72rem] font-extrabold tracking-[0.16em] text-[#981d13]">Architecture &amp; technology</span>
          <h2 id="architecture-title" className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">How the parts of SwiftAid fit together.</h2>
        </div>

        <div className="relative rounded-[30px] border border-black/[0.06] bg-white/65 p-4 shadow-[0_28px_80px_rgba(15,22,31,0.07)] sm:p-7 lg:p-10" aria-label="SwiftAid system architecture overview">
          <div className="mx-auto grid w-full max-w-[340px] gap-1.5 rounded-[20px] border border-[#d93b2b]/20 bg-gradient-to-br from-[#d93b2b]/10 to-white p-5 text-center shadow-[0_12px_34px_rgba(217,59,43,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.16em] text-[#d93b2b]">The platform</span>
            <strong className="text-lg">SwiftAid</strong>
          </div>

          <div className="architecture-connector" aria-hidden="true"><span>APP REQUESTS</span></div>
          <div className="grid gap-3 sm:grid-cols-3 sm:gap-5">
            {[
              ["Citizen app", "Flutter · emergency reporting"],
              ["Responder app", "Flutter · assignment and navigation"],
              ["Admin web app", "React · monitoring and coordination"],
            ].map(([title, detail]) => (
              <div key={title} className="architecture-node">
                <strong>{title}</strong><span>{detail}</span>
              </div>
            ))}
          </div>

          <div className="architecture-connector" aria-hidden="true"><span>API + LIVE EVENTS</span></div>
          <div className="mx-auto grid w-full max-w-[420px] gap-1.5 rounded-[20px] border border-[#d93b2b]/20 bg-[#111922] p-5 text-center text-white shadow-[0_18px_42px_rgba(10,12,16,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <strong className="text-lg">Backend</strong>
            <span className="text-xs font-semibold text-[#ff9a89]">Node.js · Express</span>
            <span className="text-sm text-white/65">Coordinates requests, services, and data</span>
          </div>

          <div className="architecture-connector" aria-hidden="true"><span>COORDINATION SERVICES</span></div>
          <div className="grid gap-3 sm:grid-cols-3 sm:gap-5">
            {[
              ["AI analysis", "LLaMA 3 · Groq"],
              ["Live updates", "Socket.IO"],
              ["Dispatch logic", "Availability + proximity"],
            ].map(([title, detail]) => (
              <div key={title} className="architecture-node architecture-node-soft">
                <strong>{title}</strong><span>{detail}</span>
              </div>
            ))}
          </div>

          <div className="architecture-connector" aria-hidden="true"><span>DATA + GEO SERVICES</span></div>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-5">
            <div className="architecture-node architecture-node-accent"><strong>MongoDB</strong><span>Application and incident data</span></div>
            <div className="architecture-node architecture-node-accent"><strong>Maps + external APIs</strong><span>Mapbox · OpenStreetMap</span></div>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs text-[#667085]">
            <span className="mr-1 font-bold uppercase tracking-[0.1em]">Development tools</span>
            <span className="rounded-full border border-black/10 bg-white px-3 py-1.5">Git</span>
            <span className="rounded-full border border-black/10 bg-white px-3 py-1.5">VS Code</span>
          </div>
        </div>
      </div>
    </section>
  );
}
