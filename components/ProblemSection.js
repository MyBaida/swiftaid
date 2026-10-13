import { problemCards } from "@/lib/data";

export default function ProblemSection() {
  return (
    <section className="relative bg-white py-20 sm:py-24 lg:py-32" aria-labelledby="problem-title">
      <div className="mx-auto w-[min(calc(100%-2rem),1200px)]">
        <div className="mb-10 max-w-3xl sm:mb-14">
          <span className="mb-3 inline-block text-[0.72rem] font-extrabold tracking-[0.16em] text-[#981d13]">The challenge</span>
          <h2 id="problem-title" className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">SwiftAid was designed to address a fragmented emergency-response workflow.</h2>
          <p className="mt-5 max-w-2xl text-base text-[#667085] sm:text-lg">
            Emergency coordination depends on timely information, clear priorities, and the right resources in the
            right place. SwiftAid explores how those pieces can work together more effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {problemCards.map((card) => (
            <article className="group relative overflow-hidden rounded-[22px] border border-black/10 bg-gradient-to-b from-white to-[#f8f9fa] p-6 shadow-[0_12px_32px_rgba(14,19,29,0.04)] transition duration-300 ease-out hover:-translate-y-1.5 hover:border-[#d93b2b]/25 hover:shadow-[0_24px_48px_rgba(14,19,29,0.11)] sm:p-8" key={card.title}>
              <span className="absolute inset-y-0 left-0 w-[3px] origin-bottom scale-y-0 bg-gradient-to-b from-[#ff8b78] to-[#d93b2b] transition-transform duration-300 group-hover:scale-y-100" />
              <span className="text-4xl font-black tracking-[-0.07em] text-[#d93b2b]/25">{card.number}</span>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.045em]">{card.title}</h3>
              <p className="mt-3 text-[#667085]">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
