import { aiHighlights } from "@/lib/data";

const flow = [
  "Emergency request",
  "AI analysis",
  "Resource recommendation",
  "Available responders",
  "Proximity / travel-time ranking",
  "Dispatch decision",
];

export default function AISection() {
  return (
    <section className="relative bg-gradient-to-b from-[#f5f3f1] to-white py-20 sm:py-24 lg:py-32" aria-labelledby="ai-title">
      <div className="mx-auto grid w-[min(calc(100%-2rem),1200px)] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <span className="mb-3 inline-block text-[0.72rem] font-extrabold tracking-[0.16em] text-[#981d13]">AI + intelligent allocation</span>
          <h2 id="ai-title" className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">AI supports the decision, while people and systems provide the final context.</h2>
          <p className="mt-5 text-base leading-relaxed text-[#667085] sm:text-lg">
            The AI helps interpret an emergency request and recommend the type and number of resources that may be
            appropriate. The backend combines those recommendations with responder availability and geographic and
            travel-time information before a dispatch decision is made.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5" aria-label="AI capabilities">
            {aiHighlights.map((item) => (
              <span className="rounded-full border border-[#d93b2b]/15 bg-[#d93b2b]/5 px-3 py-2 text-xs font-bold text-[#981d13] transition duration-200 hover:-translate-y-0.5 hover:bg-[#d93b2b]/10 hover:shadow-md" key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="grid gap-3" aria-label="AI allocation flow">
          {flow.map((item, index) => (
            <div className="relative flex items-center gap-4 rounded-[18px] border border-black/10 bg-white/85 px-5 py-4 shadow-[0_8px_24px_rgba(14,19,29,0.035)] transition duration-200 hover:translate-x-1.5 hover:border-[#d93b2b]/25 hover:shadow-lg" key={item}>
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#d93b2b] text-xs font-extrabold text-white" aria-hidden="true">{index + 1}</span>
              <span className="font-bold">{item}</span>
              {index < flow.length - 1 && <span className="ml-auto text-xl text-[#d93b2b]/65" aria-hidden="true">↓</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
