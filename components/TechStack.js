import { technologyGroups } from "@/lib/data";

export default function TechStack() {
  return (
    <section className="relative bg-[#0a0c10] py-20 text-white sm:py-24 lg:py-32" id="technology" aria-labelledby="technology-title">
      <div className="mx-auto w-[min(calc(100%-2rem),1200px)]">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <span className="mb-3 inline-block text-[0.72rem] font-extrabold tracking-[0.16em] text-[#ff9a89]">Technology stack</span>
          <h2 id="technology-title" className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">Built with a modern mobile, web, AI, and geospatial toolchain.</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {technologyGroups.map((group) => (
            <article className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[0_20px_44px_rgba(0,0,0,0.22)]" key={group.title}>
              <h3 className="text-lg font-semibold tracking-[-0.03em]">{group.title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li className="rounded-full bg-white/[0.06] px-2.5 py-1.5 text-xs text-white/80 transition hover:-translate-y-0.5 hover:bg-[#d93b2b]/20 hover:text-white" key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
