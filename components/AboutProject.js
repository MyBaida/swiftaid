export default function AboutProject() {
  const nextSteps = [
    "Test with emergency responders and citizens",
    "Improve offline access and multilingual support",
    "Strengthen privacy and agency integrations",
    "Evaluate performance at larger scale",
  ];

  return (
    <section className="relative bg-white py-20 sm:py-24 lg:py-32" id="about" aria-labelledby="about-title">
      <div className="mx-auto grid w-[min(calc(100%-2rem),1200px)] items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="mb-3 inline-block text-[0.72rem] font-extrabold tracking-[0.16em] text-[#981d13]">Project &amp; next steps</span>
          <h2 id="about-title" className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">Built as a final-year Computer Engineering project.</h2>
          <p className="mt-5 text-[#667085]">
            Developed during the 2024/2025 academic year at the University of Ghana, SwiftAid explores how AI,
            geospatial intelligence, and real-time communication can support emergency coordination.
          </p>
          <div className="mt-7 grid gap-4 rounded-[22px] border border-black/10 bg-[#f8f9fa] p-5 sm:grid-cols-2 sm:p-6">
            <div className="grid content-start gap-1">
              <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-[#981d13]">Project team</span>
              <strong className="text-sm">Ubaida Abdul-Fatahu</strong>
              <strong className="text-sm">Ofori Amoah Darkwah</strong>
            </div>
            <div className="grid content-start gap-1">
              <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-[#981d13]">Supervisor</span>
              <strong className="text-sm">Dr. Percy Okae</strong>
              <span className="mt-1 text-sm text-[#667085]">University of Ghana · Computer Engineering</span>
            </div>
          </div>
        </div>

        <div className="rounded-[26px] border border-black/[0.07] bg-gradient-to-br from-[#f8f9fa] to-white p-6 shadow-[0_20px_56px_rgba(21,28,37,0.07)] sm:p-8">
          <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#981d13]">What comes next</span>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">From prototype toward real-world validation.</h3>
          <ul className="mt-6 grid gap-3">
            {nextSteps.map((step, index) => (
              <li className="flex items-center gap-3 rounded-2xl border border-black/[0.06] bg-white/80 p-3.5 text-sm font-medium text-[#495364]" key={step}>
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-[9px] bg-[#d93b2b]/10 text-[0.65rem] font-extrabold text-[#981d13]">0{index + 1}</span>
                {step}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
