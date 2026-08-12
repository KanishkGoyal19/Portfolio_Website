"use client";

export default function WTRCard({ report }) {
  return (
    <>
      <div className="max-w-6xl mx-auto mb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-orange-200">
          Work Term Report
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-orange-50">
          {report.title}
        </h1>
      </div>

      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 xl:grid-cols-4 mt-6">
        {report.factCards.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-orange-200/20 bg-orange-50/5 px-5 py-6 backdrop-blur"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-orange-200 mb-2">
              {item.title}
            </p>
            <h3 className="text-xl font-semibold text-orange-100 leading-snug">
              {item.value}
            </h3>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto mt-12 grid gap-6 md:grid-cols-2">
        {report.images.map((image) => (
          <div
            key={image.src}
            className="rounded-2xl overflow-hidden border border-orange-200/20 shadow-2xl shadow-black/40"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto mt-12 space-y-8">
        {report.sections.map((section) => (
          <div
            key={section.heading}
            className="rounded-2xl border border-slate-800 bg-slate-900 px-6 md:px-8 py-8 shadow-lg shadow-black/30"
          >
            <h2 className="text-base md:text-lg font-semibold uppercase tracking-[0.18em] leading-tight text-orange-200">
              {section.heading}
            </h2>
            <div className="mt-4 space-y-4">
              {section.paragraphs.map((text, idx) => (
                <p
                  key={idx}
                  className="text-sm md:text-base text-slate-200 leading-relaxed"
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
