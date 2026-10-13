import { processSteps } from "@/lib/data";

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-[#111922] py-20 text-white sm:py-24 lg:py-32" id="how-it-works" aria-labelledby="how-title">
      <div className="mx-auto w-[min(calc(100%-2rem),1200px)]">
        <div className="mb-10 max-w-3xl sm:mb-14">
          <span className="mb-3 inline-block text-[0.72rem] font-extrabold tracking-[0.16em] text-[#ff9a89]">How SwiftAid works</span>
          <h2 id="how-title" className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">From report to resolution, with clearer coordination at every step.</h2>
        </div>

        <ol className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Emergency coordination workflow">
          {processSteps.map((step, index) => (
            <li className="group relative min-w-0" key={step.number}>
              <article className="h-full rounded-[22px] border border-white/10 bg-white/[0.035] p-4 transition duration-300 ease-out hover:-translate-y-1 hover:border-[#ff8b78]/35 hover:bg-white/[0.07] hover:shadow-[0_18px_44px_rgba(0,0,0,0.22)] sm:p-5">
                <div className="mb-5 flex items-center gap-3">
                  <span className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#ff8b78]/30 bg-[#d93b2b]/15 text-sm font-extrabold text-[#ff9a89] shadow-[0_0_24px_rgba(217,59,43,0.12)] transition group-hover:border-[#ff8b78]/60 group-hover:bg-[#d93b2b]/25" aria-hidden="true">
                    {step.number}
                  </span>
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white/40">Step {index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold leading-tight tracking-[-0.03em]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <>
                    <span className="absolute left-[37px] top-full z-10 h-4 w-px bg-gradient-to-b from-[#ff8b78]/65 to-[#ff8b78]/15 sm:hidden" aria-hidden="true">
                      <span className="absolute -bottom-0.5 -left-[2.5px] h-[6px] w-[6px] rounded-full bg-[#ff8b78] shadow-[0_0_10px_rgba(255,139,120,0.65)]" />
                    </span>
                    <span className="absolute -right-4 top-[39px] z-10 hidden h-px w-4 bg-gradient-to-r from-[#ff8b78]/70 to-[#ff8b78]/20 xl:block" aria-hidden="true">
                      <span className="absolute -right-0.5 -top-[3px] h-[7px] w-[7px] rounded-full bg-[#ff8b78] shadow-[0_0_12px_rgba(255,139,120,0.7)]" />
                    </span>
                  </>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
