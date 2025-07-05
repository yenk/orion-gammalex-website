import React from "react";

const animateClass = "animate-float";

const ICON_CLASS = "w-40 h-24";
const ICON_VIEWBOX = "0 0 160 96";

const sources = [
  {
    label: "Centers for Medicare & Medicaid Services",
    icon: (
      <svg viewBox="0 0 160 96" className="w-40 h-24" aria-hidden="true">
        <rect x="2" y="2" width="156" height="92" rx="12" fill="#fff" stroke="#153A8C" strokeWidth="4" />
        <text x="10" y="72" fontSize="56" fontFamily="Inter,Arial,sans-serif" fontWeight="bold" fill="#153A8C">CMS</text>
      </svg>
    ),
    link: "https://www.cms.gov/medicare-coverage-database/search.aspx",
  },
  {
    label: "World Health Organization ICD-11",
    icon: (
      <svg viewBox={ICON_VIEWBOX} className={ICON_CLASS} aria-hidden="true">
        <rect x="2" y="2" width="156" height="92" rx="12" fill="#fff" stroke="#0096D6" strokeWidth="4" />
        <g>
          <circle cx="80" cy="48" r="36" stroke="#0096D6" strokeWidth="3" fill="none" />
          <path d="M80 20v56" stroke="#0096D6" strokeWidth="3" />
          <ellipse cx="80" cy="48" rx="10" ry="36" stroke="#0096D6" strokeWidth="3" fill="none" />
          <ellipse cx="80" cy="48" rx="36" ry="10" stroke="#0096D6" strokeWidth="3" fill="none" />
          <circle cx="80" cy="48" r="8" fill="#0096D6" />
        </g>
      </svg>
    ),
    link: "https://www.who.int/classifications/classification-of-diseases",
  },
  {
    label: "Medical Information Mart for Intensive Care",
    icon: (
      <svg viewBox={ICON_VIEWBOX} className={ICON_CLASS} aria-hidden="true">
        <rect x="2" y="2" width="156" height="92" rx="12" fill="#fff" stroke="#e5e7eb" strokeWidth="2" />
        <polygon points="142,2 154,22 134,2" fill="#346699" />
        <circle cx="32" cy="32" r="7" fill="#e4572e" />
        <rect x="46" y="26" width="70" height="10" rx="4" fill="#e4572e" />
        <circle cx="32" cy="52" r="7" fill="#4285f4" />
        <rect x="46" y="46" width="70" height="10" rx="4" fill="#4285f4" />
        <circle cx="32" cy="72" r="7" fill="#34a853" />
        <rect x="46" y="66" width="70" height="10" rx="4" fill="#34a853" />
        <circle cx="32" cy="92" r="7" fill="#fbbc04" />
        <rect x="46" y="86" width="70" height="10" rx="4" fill="#fbbc04" />
      </svg>
    ),
    link: "https://mimic.mit.edu/",
  },
  {
    label: "CourtListener by Free.Law",
    icon: (
      <svg viewBox={ICON_VIEWBOX} className={ICON_CLASS} aria-hidden="true">
        <rect x="2" y="2" width="156" height="92" rx="12" fill="#fff" stroke="#888" strokeWidth="4" />
        <g stroke="#888" strokeWidth="7" fill="none">
          <line x1="40" y1="90" x2="40" y2="40" />
          <line x1="120" y1="90" x2="120" y2="40" />
          <line x1="40" y1="40" x2="16" y2="40" />
          <line x1="120" y1="40" x2="144" y2="40" />
          <ellipse cx="40" cy="90" rx="20" ry="7" fill="#888" />
          <ellipse cx="120" cy="90" rx="20" ry="7" fill="#888" />
        </g>
        <g stroke="#B33" strokeWidth="9" fill="none">
          <line x1="80" y1="20" x2="80" y2="90" />
          <circle cx="80" cy="20" r="9" fill="#B33" />
        </g>
        <g stroke="#888" strokeWidth="7" fill="none">
          <circle cx="40" cy="40" r="9" fill="#fff" />
          <circle cx="120" cy="40" r="9" fill="#fff" />
          <circle cx="80" cy="20" r="9" fill="#fff" />
        </g>
      </svg>
    ),
    link: "https://www.courtlistener.com/",
  },
  {
    label: "CaseLaw Access Project By Harvard Law School",
    icon: (
      <svg viewBox={ICON_VIEWBOX} className={ICON_CLASS} aria-hidden="true">
        <rect x="2" y="2" width="156" height="92" rx="12" fill="#0096FF" stroke="#0096FF" strokeWidth="4" />
        <rect x="20" y="16" width="12" height="40" fill="#222" />
        <rect x="36" y="16" width="12" height="40" fill="#222" />
        <rect x="52" y="16" width="12" height="40" fill="#222" />
        <rect x="68" y="16" width="12" height="40" fill="#222" />
        <rect x="84" y="16" width="12" height="40" fill="#222" />
        <rect x="20" y="60" width="12" height="12" fill="#222" />
        <rect x="36" y="60" width="12" height="12" fill="#222" />
        <rect x="52" y="60" width="56" height="12" fill="#222" />
        <rect x="20" y="80" width="88" height="12" fill="#222" />
      </svg>
    ),
    link: "https://case.law/",
  },
  {
    label: "National Library of Medicine",
    icon: (
      <svg viewBox={ICON_VIEWBOX} className={ICON_CLASS} aria-hidden="true">
        <rect x="2" y="2" width="156" height="92" rx="12" fill="#fff" stroke="#2A5D8F" strokeWidth="4" />
        <polygon points="120,2 156,48 120,94" fill="#2A5D8F" />
        <text x="24" y="68" fontSize="60" fontFamily="Inter,Arial,sans-serif" fontWeight="bold" fill="#2A5D8F">NIH</text>
        <polygon points="130,18 148,48 130,78" fill="#fff" />
      </svg>
    ),
    link: "https://www.nlm.nih.gov/",
  },
  {
    label: "Biomedical and Clinical Research by i2b2",
    icon: (
      <svg viewBox={ICON_VIEWBOX} className={ICON_CLASS} aria-hidden="true">
        {/* 3x3 grid of squares */}
        <g>
          <rect x="16" y="16" width="16" height="16" fill="#fff" />
          <rect x="36" y="16" width="16" height="16" fill="#fff" />
          <rect x="56" y="16" width="16" height="16" fill="#fff" />
          <rect x="16" y="36" width="16" height="16" fill="#fff" />
          <rect x="36" y="36" width="16" height="16" fill="#fff" />
          <rect x="56" y="36" width="16" height="16" fill="#fff" />
          <rect x="16" y="56" width="16" height="16" fill="#fff" />
          <rect x="36" y="56" width="16" height="16" fill="#fff" />
          <rect x="56" y="56" width="16" height="16" fill="#fff" />
        </g>
        {/* 3 hexagons */}
        <g>
          <polygon points="100,28 112,20 124,28 124,44 112,52 100,44" fill="#2C2C5A" />
          <polygon points="112,52 124,44 136,52 136,68 124,76 112,68" fill="#2C2C5A" />
          <polygon points="124,28 136,20 148,28 148,44 136,52 124,44" fill="#BFC3C7" />
        </g>
      </svg>
    ),
    link: "https://www.i2b2.org/",
  },
];

const mainSources = sources.slice(0, 6);
const researchSource = sources[6];

export default function HeroDataSources() {
  return (
    <div className="w-full flex flex-col items-center mt-10 mb-10">
      <div className="w-full overflow-x-auto">
        <div className="flex flex-row justify-center items-end gap-x-24 gap-y-0 max-w-none min-w-[1100px] px-8 pb-2">
          {sources.map((src, i) => (
            <a
              key={src.label}
              href={src.link || undefined}
              target={src.link ? "_blank" : undefined}
              rel={src.link ? "noopener noreferrer" : undefined}
              className={`flex flex-col items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-gammalex-orange transition-transform duration-200 hover:scale-110 ${animateClass}`}
              tabIndex={0}
              aria-label={src.label}
              style={{ minWidth: 180 }}
            >
              <span className="mb-3 drop-shadow-md transition-opacity duration-300 opacity-80 group-hover:opacity-100 flex items-center justify-center">
                {src.icon}
              </span>
              <span className="text-base sm:text-lg text-white font-inter text-center max-w-[200px] sm:max-w-[220px] break-words">
                {src.label}
              </span>
            </a>
          ))}
        </div>
      </div>
      <p className="text-center text-slate-200 mt-8 text-base sm:text-lg max-w-2xl">
        Built on trusted clinical and legal data. Powered by open sources. Auditable by design.
      </p>
    </div>
  );
}

// Add to your global CSS (e.g., globals.css):
// @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
// .animate-float { animation: float 3s ease-in-out infinite; } 