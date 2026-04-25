import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const GlobalMarquee = ({ message = " FOR ADMISSION" }) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("globalMarqueeHidden");
      if (stored === "1") setHidden(true);
    } catch (e) {
      // ignore
    }
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem("globalMarqueeHidden", "1");
    } catch (e) {}
    setHidden(true);
  };

  if (hidden) return null;

  const upper = String(message).toUpperCase();
  const spaced = upper.split("").join(" ");

  return (
    <div className="w-full">
      <style>{`\n        @keyframes gm-scroll {\n          0% { transform: translateX(100%); }\n          100% { transform: translateX(-100%); }\n        }\n        @keyframes gm-enter {\n          0% { transform: translateY(-8px); opacity: 0; }\n          100% { transform: translateY(0); opacity: 1; }\n        }\n        @keyframes gm-pulse {\n          0% { box-shadow: 0 0 0 0 rgba(245,158,11,0.12); transform: translateY(0); }\n          70% { box-shadow: 0 12px 30px -12px rgba(245,158,11,0.18); transform: translateY(-2px); }\n          100% { box-shadow: 0 0 0 0 rgba(245,158,11,0); transform: translateY(0); }\n        }\n        @media (prefers-reduced-motion: reduce) {\n          .gm-scroll, .gm-enter, .gm-pulse { animation: none !important; }\n        }\n      `}</style>

      <div className="bg-gold/10 text-slate-900 shadow-sm border-b border-gold/20 gm-enter" style={{ animation: 'gm-enter 400ms ease both' }}>
        <div className="container-custom flex items-center gap-2 py-1.5">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <div className="flex-shrink-0 bg-gold/20 p-1 rounded-md">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-dark" />
                <path d="M10 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-dark" />
              </svg>
            </div>

            <div className="overflow-hidden">
                <div className="gm-scroll whitespace-nowrap text-xs md:text-sm font-bold text-gold-dark uppercase tracking-tight" style={{ animation: "gm-scroll 12s linear infinite" }}>
                  <span className="inline-block mr-12">{upper}</span>
                  <span className="inline-block mr-12">{upper}</span>
                  <span className="inline-block mr-12">{upper}</span>
                </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
              <Link to="/admissions" className="inline-flex items-center gap-1 bg-gold text-accent-foreground rounded-md font-bold hover:bg-gold-dark transition-colors gold-shadow px-3 py-1 gm-pulse" style={{ animation: 'gm-pulse 2.6s ease-in-out infinite' }}>
                <span className="tracking-widest text-xs uppercase">{spaced}</span>
              </Link>
            <button onClick={dismiss} aria-label="Close announcement" className="text-slate-700 hover:text-slate-900 p-1 rounded-full bg-transparent transition">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalMarquee;
