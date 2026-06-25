const timeline = [
  {
    year: "2020 – Present",
    role: "Sales BDM & Food Auditor",
    company: "BSI Korea",
    description:
      "Leading business development and second-party supplier audit programmes for major Korean enterprises including Costco Korea, Samsung Welstory, Shinsegae Food, and LG Display. Driving FSSC 22000 and ISO 22000 adoption across client supply chains.",
    current: true,
  },
  {
    year: "2017 – 2020",
    role: "Food Safety Auditor",
    company: "Food Safety Consulting",
    description:
      "Conducted HACCP-based audits and gap analyses for food manufacturers across Korea. Specialised in food defense and food fraud vulnerability assessments, supporting clients in achieving third-party certification readiness.",
    current: false,
  },
  {
    year: "2014 – 2017",
    role: "Quality Assurance Specialist",
    company: "Food Industry",
    description:
      "Managed internal audit programmes and supplier qualification processes for food production operations. Developed and implemented food safety management systems aligned with international standards.",
    current: false,
  },
  {
    year: "2012 – 2014",
    role: "Food Safety Coordinator",
    company: "Regulatory & Compliance",
    description:
      "Supported regulatory compliance and food safety documentation for food businesses. Built foundational expertise in HACCP principles, GMP implementation, and supply chain risk management.",
    current: false,
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Career Journey
          </p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            A Decade of Food Safety Leadership
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">
            Progressively deepening expertise across auditing, quality
            assurance, and business development in the global food safety
            sector.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-blue-400 to-slate-200 md:left-1/2 md:-translate-x-0.5" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`relative flex gap-8 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content box */}
                <div
                  className={`flex-1 pl-16 md:pl-0 ${
                    i % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:pl-12 md:text-left"
                  }`}
                >
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-md transition-shadow">
                    <div
                      className={`flex items-center gap-2 mb-2 ${
                        i % 2 === 0 ? "md:justify-end" : "md:justify-start"
                      }`}
                    >
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                      {item.current && (
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {item.role}
                    </h3>
                    <p className="text-blue-600 font-semibold text-sm mb-3">
                      {item.company}
                    </p>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-6 flex-shrink-0">
                  <div
                    className={`w-4 h-4 rounded-full border-2 border-white shadow-md ${
                      item.current ? "bg-blue-600" : "bg-blue-300"
                    }`}
                  />
                </div>

                {/* Empty spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
