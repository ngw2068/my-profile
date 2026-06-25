export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-blue-900 to-blue-800" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/80 text-sm font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          Sales BDM &amp; Food Auditor · BSI Korea
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 animate-fade-up">
          Building Trust{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
            Across Global
          </span>{" "}
          Food Supply Chains
        </h1>

        <p className="text-xl md:text-2xl text-white/70 mb-4 font-light animate-fade-up delay-100">
          Na GyeWon
        </p>

        <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up delay-200">
          Global Food Safety &amp; Supplier Audit Professional specialising in
          FSSC 22000, ISO 22000, HACCP, and second-party supplier assessments
          for Korea&apos;s leading organisations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
          <a
            href="#projects"
            className="px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-400/40 hover:-translate-y-0.5"
          >
            View Key Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-xl backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
