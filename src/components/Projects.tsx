const projects = [
  {
    client: "Costco Korea",
    title: "Supplier Audit Programme",
    category: "Retail Supply Chain",
    description:
      "Designed and executed a comprehensive second-party supplier audit programme for Costco Korea's food vendor network, covering food safety management systems, HACCP verification, and food fraud vulnerability assessments across multiple production facilities.",
    highlights: [
      "Multi-site supplier assessment",
      "HACCP & FSMS verification",
      "Food fraud risk evaluation",
      "Corrective action tracking",
    ],
    color: "from-blue-600 to-blue-800",
    badge: "Retail",
  },
  {
    client: "Samsung Welstory",
    title: "Supplier Assessment Programme",
    category: "Food Service",
    description:
      "Led supplier risk assessment activities for Samsung Welstory, one of Korea's largest food service and catering companies, ensuring ingredient traceability, hygiene compliance, and alignment with internal food safety requirements across the supply base.",
    highlights: [
      "Food service supply chain audit",
      "Hygiene & GMP assessment",
      "Traceability verification",
      "Supplier performance scoring",
    ],
    color: "from-indigo-600 to-indigo-800",
    badge: "Food Service",
  },
  {
    client: "Shinsegae Food",
    title: "Supplier Audit Programme",
    category: "Food Manufacturing",
    description:
      "Conducted supplier audits for Shinsegae Food's procurement operations, evaluating food safety culture, allergen management, and regulatory compliance across primary and secondary food suppliers in the Korean market.",
    highlights: [
      "Allergen management review",
      "Food safety culture evaluation",
      "Regulatory compliance check",
      "Risk-based audit prioritisation",
    ],
    color: "from-slate-700 to-slate-900",
    badge: "Manufacturing",
  },
  {
    client: "OTOKI Corporation",
    title: "Factory Audit",
    category: "Production Facility",
    description:
      "Performed an in-depth factory audit of OTOKI Corporation's food production facility, assessing GMP implementation, pest control programmes, environmental monitoring, and readiness for third-party certification.",
    highlights: [
      "GMP & hygiene inspection",
      "Pest control programme review",
      "Environmental monitoring",
      "Certification readiness gap analysis",
    ],
    color: "from-blue-700 to-cyan-700",
    badge: "Factory Audit",
  },
  {
    client: "LG Display",
    title: "Overseas Supplier Audit",
    category: "Global Supply Chain",
    description:
      "Managed overseas supplier audit activities for LG Display's food-related procurement operations, coordinating cross-border assessments to ensure international food safety standards were maintained throughout the global supply chain.",
    highlights: [
      "Cross-border supplier assessment",
      "International standards alignment",
      "Remote & on-site audit coordination",
      "Global compliance reporting",
    ],
    color: "from-violet-700 to-blue-700",
    badge: "Global",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Key Projects
          </p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Trusted by Korea&apos;s Leading Organisations
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            A selection of high-impact supplier audit and food safety programmes
            delivered for major retail, food service, and manufacturing clients.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group grid md:grid-cols-[280px_1fr] bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Left accent panel */}
              <div
                className={`bg-gradient-to-br ${project.color} p-8 flex flex-col justify-between`}
              >
                <div>
                  <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full mb-4">
                    {project.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-white leading-tight mb-1">
                    {project.client}
                  </h3>
                  <p className="text-white/70 text-sm">{project.category}</p>
                </div>
                <div className="mt-6 text-white/50 text-xs font-medium">
                  BSI Korea · Second-Party Audit
                </div>
              </div>

              {/* Right content */}
              <div className="p-8">
                <h4 className="text-lg font-bold text-slate-900 mb-3">
                  {project.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {project.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
