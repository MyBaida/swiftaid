"use client";

import Image from "next/image";
import { useState } from "react";
import { showcaseData } from "@/lib/data";

const tabs = ["citizen", "responder", "administrator"];

const tabLabels = {
  citizen: "Citizen",
  responder: "Responder",
  administrator: "Administrator",
};

export default function ScreenshotViewer() {
  const [activeTab, setActiveTab] = useState("citizen");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const items = showcaseData[activeTab];
  const activeItem = items[activeIndex];

  const showPrevious = () => setActiveIndex((index) => (index === 0 ? items.length - 1 : index - 1));
  const showNext = () => setActiveIndex((index) => (index === items.length - 1 ? 0 : index + 1));

  const openViewer = () => setIsFullscreen(true);
  const closeViewer = () => setIsFullscreen(false);

  return (
    <section className="relative bg-white py-20 sm:py-24 lg:py-32" id="experience" aria-labelledby="experience-title">
      <div className="mx-auto w-[min(calc(100%-2rem),1200px)]">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <span className="mb-3 inline-block text-[0.72rem] font-extrabold tracking-[0.16em] text-[#981d13]">Experience SwiftAid</span>
          <h2 id="experience-title" className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">A coordinated experience across every user role.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-[#667085] sm:text-lg">
            The mobile applications and administrator dashboard are presented here as a guided project showcase.
          </p>
        </div>

        <div className="mx-auto mb-7 flex w-fit max-w-full gap-1.5 rounded-full border border-black/10 bg-[#f3f5f6] p-1.5" role="tablist" aria-label="SwiftAid user roles">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              id={`${tab}-tab`}
              aria-selected={activeTab === tab}
              aria-controls={`${tab}-panel`}
              className={`rounded-full px-4 py-2.5 text-sm font-extrabold transition duration-200 hover:-translate-y-px sm:px-5 ${activeTab === tab ? "bg-[#0a0c10] text-white shadow-[0_8px_22px_rgba(10,12,16,0.15)]" : "bg-transparent text-[#495364] hover:text-[#0a0c10]"}`}
              onClick={() => {
                setActiveTab(tab);
                setActiveIndex(0);
              }}
            >
              {tabLabels[tab]}
            </button>
          ))}
        </div>

        <div
          className="viewer-panel"
          role="tabpanel"
          id={`${activeTab}-panel`}
          aria-labelledby={`${activeTab}-tab`}
        >
          <div className="viewer-main">
            <button type="button" className="relative z-[2] h-[54px] w-[54px] rounded-full border border-black/10 bg-white/90 text-[1.7rem] text-[#0a0c10] shadow-[0_8px_22px_rgba(14,19,29,0.08)] transition duration-200 hover:-translate-y-0.5 hover:border-[#d93b2b]/20 hover:shadow-lg max-[780px]:h-11 max-[780px]:w-[38px] max-[780px]:rounded-[14px] max-[780px]:text-xl" onClick={showPrevious} aria-label="Show previous screenshot">
              <span aria-hidden="true">←</span>
            </button>

            <div className={`device-shell ${activeTab === "administrator" ? "device-monitor" : "device-phone"}`}>
              {activeTab !== "administrator" && <span className="phone-speaker" aria-hidden="true" />}
              <div className="viewer-frame" onClick={openViewer} role="button" tabIndex={0} onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openViewer();
                }
              }}>
                <Image
                  key={`${activeTab}-${activeItem.title}`}
                  src={activeItem.image}
                  alt={`${activeItem.title} interface preview`}
                  fill
                  sizes={activeTab === "administrator" ? "(max-width: 780px) 90vw, 900px" : "320px"}
                />
                <span className="image-badge">{tabLabels[activeTab]}</span>
              </div>
              {activeTab !== "administrator" && <span className="phone-home-indicator" aria-hidden="true" />}
              {activeTab === "administrator" && <span className="monitor-stand" aria-hidden="true" />}
            </div>

            <button type="button" className="relative z-[2] h-[54px] w-[54px] rounded-full border border-black/10 bg-white/90 text-[1.7rem] text-[#0a0c10] shadow-[0_8px_22px_rgba(14,19,29,0.08)] transition duration-200 hover:-translate-y-0.5 hover:border-[#d93b2b]/20 hover:shadow-lg max-[780px]:h-11 max-[780px]:w-[38px] max-[780px]:rounded-[14px] max-[780px]:text-xl" onClick={showNext} aria-label="Show next screenshot">
              <span aria-hidden="true">→</span>
            </button>
          </div>

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end sm:gap-6">
            <div>
              <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.12em] text-[#981d13]">{tabLabels[activeTab]} experience</p>
              <h3 className="mt-1.5 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">{activeItem.title}</h3>
            </div>
            <p className="max-w-[560px] text-[#667085]">{activeItem.description}</p>
            <div className="flex items-center gap-3.5">
              <button type="button" className="inline-flex min-h-[42px] items-center justify-center rounded-full border border-black/10 bg-white px-[18px] text-sm font-bold text-[#0a0c10] transition hover:-translate-y-0.5 hover:shadow-md" onClick={openViewer}>
                View fullscreen
              </button>
              <span className="text-sm font-bold text-[#667085]">
                {activeIndex + 1} / {items.length}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-[18px] grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4" aria-label="Screenshot gallery">
          {items.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className={`grid w-full grid-cols-[70px_1fr] items-center gap-2.5 rounded-[14px] border p-2 text-left text-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg ${index === activeIndex ? "border-[#d93b2b]/35 bg-[#d93b2b]/[0.04] shadow-[0_10px_22px_rgba(217,59,43,0.08)]" : "border-black/10 bg-white hover:border-[#d93b2b]/20"}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${item.title}`}
            >
              <span className="thumbnail-image" aria-hidden="true" style={{ backgroundImage: `url(${item.image})` }} />
              <span className="font-bold">{item.title}</span>
            </button>
          ))}
        </div>
      </div>

      {isFullscreen && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-black/80 p-6 backdrop-blur-[16px]" role="dialog" aria-modal="true" aria-label={`${activeItem.title} preview`}>
          <button type="button" className="absolute right-[14px] top-[14px] h-[42px] w-[42px] rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20" onClick={closeViewer} aria-label="Close fullscreen view">
            ×
          </button>
          <div className="relative max-w-[min(1080px,100%)]">
            <Image
              src={activeItem.image}
              alt={`${activeItem.title} fullscreen preview`}
              width={1200}
              height={780}
              priority
              className="max-h-[78vh] rounded-[20px] object-contain"
            />
            <div className="flex flex-col gap-3 px-1 pt-[18px] text-white sm:flex-row sm:items-end sm:justify-between sm:gap-5">
              <span className="text-[0.7rem] uppercase tracking-[0.12em] text-white/70">{tabLabels[activeTab]}</span>
              <h3 className="text-2xl font-semibold">{activeItem.title}</h3>
              <p className="text-white/75">{activeItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
