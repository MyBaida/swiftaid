import { liveEvents } from "@/lib/data";

export default function RealtimeSection() {
  return (
    <section className="relative bg-[#0a0c10] py-20 text-white sm:py-24 lg:py-32" aria-labelledby="realtime-title">
      <div className="mx-auto grid w-[min(calc(100%-2rem),1200px)] items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div>
          <span className="mb-3 inline-block text-[0.72rem] font-extrabold tracking-[0.16em] text-[#ff9a89]">Real-time coordination</span>
          <h2 id="realtime-title" className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">Status and location updates stay connected across the response flow.</h2>
          <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
            Socket.IO was used for real-time communication and status or location updates across the SwiftAid
            project. This visual representation demonstrates the coordination model and is not a live emergency
            connection.
          </p>

          <div className="mt-7 grid gap-3" aria-label="Example live events">
            {liveEvents.map((event, index) => (
              <div className="group grid grid-cols-[10px_1fr_auto] items-center gap-3 rounded-[14px] border border-white/10 bg-white/[0.035] px-4 py-3.5 transition duration-200 hover:translate-x-1 hover:border-white/20 hover:bg-white/[0.075]" key={event}>
                <span className="h-2 w-2 animate-[pulse_2.8s_ease-in-out_infinite] rounded-full bg-[#39d98a] shadow-[0_0_0_6px_rgba(57,217,138,0.12)]" aria-hidden="true" />
                <span>{event}</span>
                <span className="text-xs tracking-[0.1em] text-white/40">0{index + 1}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_50%_42%,rgba(217,59,43,0.13),transparent_52%),linear-gradient(145deg,#111820,#0d1117)] p-5 shadow-[0_28px_70px_rgba(0,0,0,0.24)] sm:p-8 lg:p-9" aria-label="Diagram showing a citizen report sent to the backend, which broadcasts real-time updates to the citizen, responder, and administrator">
          <div className="mb-5 flex items-center justify-between gap-3">
            <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-white/70">How updates move</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/[0.06] px-3 py-1.5 text-[0.65rem] font-semibold text-emerald-200/80">
              <span className="h-1.5 w-1.5 animate-[pulse_2.8s_ease-in-out_infinite] rounded-full bg-emerald-400" /> Socket.IO
            </span>
          </div>

          <div className="realtime-flow-node mx-auto max-w-[310px] border-[#ff8b78]/20 bg-white/[0.055]">
            <span className="realtime-flow-icon">01</span>
            <span className="grid gap-1 text-left"><strong>Citizen app</strong><small>Submits incident + location</small></span>
            <span className="ml-auto rounded-full bg-white/[0.06] px-2 py-1 text-[0.6rem] font-bold uppercase tracking-wider text-white/45">Send</span>
          </div>

          <div className="realtime-flow-link" aria-hidden="true"><span>Incident report</span></div>

          <div className="realtime-flow-node realtime-flow-backend mx-auto max-w-[390px]">
            <span className="realtime-flow-icon">API</span>
            <span className="grid gap-1 text-left"><strong>SwiftAid backend</strong><small>Processes report and coordinates response</small></span>
            <span className="ml-auto text-[#ff9a89]" aria-hidden="true">↻</span>
          </div>

          <div className="realtime-flow-link" aria-hidden="true"><span>Live event broadcast</span></div>

          <div className="mb-3 text-center text-[0.65rem] font-bold uppercase tracking-[0.13em] text-white/45">Updates delivered to</div>
          <div className="realtime-flow-fanout hidden sm:block" aria-hidden="true" />
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="realtime-flow-recipient"><span className="realtime-flow-recipient-dot" /><strong>Citizen</strong><small>Status + ETA</small></div>
            <div className="realtime-flow-recipient"><span className="realtime-flow-recipient-dot" /><strong>Responder</strong><small>Assignment + location</small></div>
            <div className="realtime-flow-recipient"><span className="realtime-flow-recipient-dot" /><strong>Admin</strong><small>Incident progress</small></div>
          </div>
        </div>
      </div>
    </section>
  );
}
