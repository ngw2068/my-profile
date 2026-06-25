const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "50+", label: "Supplier Audits Completed" },
  { value: "5+", label: "Major Client Programs" },
  { value: "3", label: "Audit Standards Certified" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              About Me
            </p>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Where Food Safety Meets{" "}
              <span className="text-blue-600">Business Development</span>
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                I am Na GyeWon, a Sales BDM and Food Auditor at{" "}
                <strong className="text-slate-800">BSI Korea</strong>, one of
                the world&apos;s leading standards and testing organisations. My
                work sits at the intersection of rigorous food safety science
                and strategic business growth.
              </p>
              <p>
                With deep expertise in{" "}
                <strong className="text-slate-800">
                  FSSC 22000, ISO 22000, and HACCP
                </strong>
                , I help Korean and global organisations build resilient,
                trustworthy food supply chains through second-party supplier
                audits, internal audit programmes, and food safety culture
                assessments.
              </p>
              <p>
                My approach combines technical auditing excellence with a
                consulting mindset — identifying risk, guiding improvement, and
                translating food safety compliance into tangible business
                value for clients across retail, food service, and
                manufacturing sectors.
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Connect with Me
              </a>
              <a
                href="#expertise"
                className="px-6 py-3 border border-slate-300 hover:border-blue-500 text-slate-700 hover:text-blue-600 font-semibold rounded-lg transition-colors"
              >
                My Expertise
              </a>
            </div>
          </div>

          {/* Right: stats card */}
          <div className="relative">
            {/* Background accent */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-blue-50 rounded-2xl" />
            <div className="relative bg-white border border-slate-100 rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl"
                  >
                    <div className="text-4xl font-bold text-blue-700 mb-1">
                      {s.value}
                    </div>
                    <div className="text-sm text-slate-500 font-medium">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications bar */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-xs text-slate-400 font-medium uppercase tracking-widest mb-3">
                  Standards &amp; Frameworks
                </p>
                <div className="flex flex-wrap gap-2">
                  {["FSSC 22000", "ISO 22000", "HACCP", "Food Defense", "Food Fraud"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
