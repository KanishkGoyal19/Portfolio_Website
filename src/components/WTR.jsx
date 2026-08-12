"use client";

import { useState } from "react";
import TsParticles from "../clientcomponents/TsParticles";
import { BsArrowLeftCircle } from "react-icons/bs";
import WTRCard from "./WTRCard";
import { wtrReports } from "../constants/index.js";

export default function WTR() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentReport = wtrReports[currentIndex];
  const reportCount = wtrReports.length;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + reportCount) % reportCount);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reportCount);
  };

  return (
    <section
      id="wtr"
      className="relative overflow-hidden bg-secondaryBackground text-slate-50 px-6 md:px-12 2xl:px-32 py-16 md:py-24 min-h-screen"
    >
      <TsParticles />

      <div className="max-w-6xl mx-auto mb-8 flex items-center justify-between gap-4">
        <a
          href="/main"
          className="inline-flex items-center gap-2 text-orange-200 hover:text-orange-100 transition-colors duration-200 text-sm md:text-base font-semibold no-underline"
        >
          <BsArrowLeftCircle className="w-5 h-5" />
          Back to Home
        </a>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handlePrevious}
            className="rounded-full border border-orange-200/40 bg-slate-900/80 px-4 py-2 text-sm font-semibold text-orange-100 transition hover:bg-slate-800"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="rounded-full border border-orange-200/40 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-100 transition hover:bg-orange-500/20"
          >
            Next
          </button>
        </div>
      </div>

      <WTRCard report={currentReport} />
    </section>
  );
}
