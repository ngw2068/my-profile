const expertiseAreas = [
  {
    icon: "🔍",
    title: "Supplier Audit",
    description:
      "Second-party supplier audits across food manufacturing, processing, and packaging — identifying gaps and driving continuous improvement.",
    tags: ["Second Party Audit", "Supplier Assessment", "Risk Evaluation"],
  },
  {
    icon: "🏛️",
    title: "Food Safety Standards",
    description:
      "In-depth expertise in global food safety management systems including FSSC 22000 and ISO 22000 certification programmes.",
    tags: ["FSSC 22000", "ISO 22000", "Management Systems"],
  },
  {
    icon: "⚙️",
    title: "HACCP Implementation",
    description:
      "Hazard Analysis and Critical Control Points programme design, review, and verification for diverse food production environments.",
    tags: ["HACCP", "Hazard Analysis", "CCP Monitoring"],
  },
  {
    icon: "🛡️",
    title: "Food Defense & Fraud",
    description:
      "Vulnerability assessments and mitigation plans for food defense threats and food fraud (VACCP/TACCP) across supply chains.",
    tags: ["Food Defense", "Food Fraud", "VACCP", "TACCP"],
  },
  {
    icon: "🌐",
    title: "Supply Chain Assessment",
    description:
      "End-to-end supply chain risk assessment for multinational clients, ensuring traceability and compliance from farm to fork.",
    tags: ["Supply Chain", "Traceability", "Risk Management"],
  },
  {
    icon: "🧭",
    title: "Food Safety Culture",
    description:
      "Evaluating and strengthening food safety culture within organisations — translating leadership commitment into operational behaviour.",
    tags: ["Food Safety Culture", "Internal Audit", "Behavioural Assessment"],
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Areas of Expertise
          </p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Comprehensive Food Safety Capabilities
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            From certification audits to supply chain resilience, I provide
            end-to-end expertise that organisations rely on to protect consumers
            and build brand trust.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area) => (
            <div
              key={area.title}
              className="group bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">{area.icon}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                {area.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                {area.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Full skills list */}
        <div className="mt-14 bg-gradient-to-br from-navy-950 to-blue-900 rounded-2xl p-10 text-center">
          <p className="text-blue-200 font-semibold text-sm uppercase tracking-widest mb-6">
            Core Competencies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Food Safety",
              "Supplier Audit",
              "Internal Audit",
              "Second Party Audit",
              "FSSC 22000",
              "ISO 22000",
              "HACCP",
              "Food Defense",
              "Food Fraud",
              "Food Safety Culture",
              "Supply Chain Assessment",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white/10 border border-white/20 text-white text-sm font-medium rounded-full hover:bg-white/20 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
