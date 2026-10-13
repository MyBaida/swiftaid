import { futureIdeas, limitations } from "@/lib/data";

export default function FutureVision() {
  return (
    <section className="relative bg-[#111922] py-20 text-white sm:py-24 lg:py-32" aria-labelledby="future-title">
      <div className="mx-auto grid w-[min(calc(100%-2rem),1200px)] gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div>
          <span className="mb-3 inline-block text-[0.72rem] font-extrabold tracking-[0.16em] text-[#ff9a89]">Prototype limitations</span>
          <h2 id="future-title" className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">A strong foundation with clear opportunities for further development.</h2>
          <ul className="mt-7 grid gap-3.5">
            {limitations.map((item) => (
              <li className="relative pl-6 leading-relaxed text-white/75 before:absolute before:left-0 before:top-[0.75em] before:h-2 before:w-2 before:rounded-full before:bg-[#d93b2b]" key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="self-center">
          <span className="mb-3 inline-block text-[0.72rem] font-extrabold tracking-[0.16em] text-[#ff9a89]">Where SwiftAid could go next</span>
          <div className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {futureIdeas.map((idea, index) => (
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.075]" key={idea}>
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#d93b2b]/15 text-[0.68rem] font-extrabold text-[#ff9a89]">0{index + 1}</span>
                <span>{idea}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
