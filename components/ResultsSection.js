import { results } from "@/lib/data";

export default function ResultsSection() {
  return (
    <section className="relative bg-[#f3f5f6] py-20 sm:py-24 lg:py-32" id="results" aria-labelledby="results-title">
      <div className="mx-auto grid w-[min(calc(100%-2rem),1200px)] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <span className="mb-3 inline-block text-[0.72rem] font-extrabold tracking-[0.16em] text-[#981d13]">Project results</span>
          <h2 id="results-title" className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">Prototype results.</h2>
          <p className="mt-5 border-l-[3px] border-[#d93b2b]/35 pl-4 text-[#495364]">
            Reported during evaluation with simulated or seeded data; these figures do not represent real-world performance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2" aria-label="Reported prototype evaluation metrics">
          {results.map((result) => (
            <div className="grid min-h-[160px] content-start gap-2.5 rounded-[22px] border border-black/10 bg-white p-6 shadow-[0_10px_28px_rgba(14,19,29,0.04)] transition duration-300 hover:-translate-y-1.5 hover:border-[#d93b2b]/20 hover:shadow-xl" key={result.label}>
              <strong className="text-4xl font-semibold tracking-[-0.07em] text-[#981d13] sm:text-5xl">{result.value}</strong>
              <span className="text-sm text-[#667085]">{result.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
