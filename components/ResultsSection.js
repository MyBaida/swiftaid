import { results } from "@/lib/data";

export default function ResultsSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0c10] py-20 text-white sm:py-24 lg:py-32" id="results" aria-labelledby="results-title" style={{ backgroundImage: "radial-gradient(ellipse at 85% 50%, rgba(217, 59, 43, 0.16), transparent 45%)" }}>
      <div className="relative z-[1] mx-auto grid w-[min(calc(100%-2rem),1200px)] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <span className="mb-3 inline-block text-[0.72rem] font-extrabold tracking-[0.16em] text-[#ff9a89]">Project results</span>
          <h2 id="results-title" className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">Prototype results.</h2>
          <p className="mt-5 border-l-[3px] border-[#ff8b78]/50 pl-4 text-white/65">
            Reported during evaluation with simulated or seeded data; these figures do not represent real-world performance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2" aria-label="Reported prototype evaluation metrics">
          {results.map((result) => (
            <div className="grid min-h-[160px] content-start gap-2.5 rounded-[22px] border border-white/10 bg-white/[0.045] p-6 shadow-[0_10px_28px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1.5 hover:border-[#ff8b78]/35 hover:bg-white/[0.075] hover:shadow-xl" key={result.label}>
              <strong className="text-4xl font-semibold tracking-[-0.07em] text-[#ff9a89] sm:text-5xl">{result.value}</strong>
              <span className="text-sm text-white/65">{result.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
