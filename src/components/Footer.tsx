export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-white font-bold">Na GyeWon</span>
          <span className="mx-2 text-slate-600">·</span>
          <span className="text-sm">Global Food Safety &amp; Supplier Audit Professional</span>
        </div>
        <div className="text-sm">
          © {new Date().getFullYear()} Na GyeWon · BSI Korea
        </div>
      </div>
    </footer>
  );
}
