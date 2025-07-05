import React from "react";

const sources = [
  {
    label: "CMS Coverage",
    icon: (
      <svg viewBox="0 0 32 32" className="w-10 h-10" aria-hidden="true">
        <circle cx="16" cy="16" r="16" fill="#2E5AAC" />
        <text x="16" y="21" textAnchor="middle" fontSize="12" fill="#fff" fontFamily="Inter,Arial" fontWeight="bold">CMS</text>
      </svg>
    ),
    link: "https://www.cms.gov/medicare-coverage-database/search.aspx",
  },
  {
    label: "WHO ICD-10/11",
    icon: (
      <svg viewBox="0 0 32 32" className="w-10 h-10" aria-hidden="true">
        <circle cx="16" cy="16" r="16" fill="#6AB187" />
        <text x="16" y="21" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="Inter,Arial" fontWeight="bold">WHO</text>
      </svg>
    ),
    link: "https://www.who.int/classifications/classification-of-diseases",
  },
  {
    label: "MIMIC",
    icon: (
      <svg viewBox="0 0 32 32" className="w-10 h-10" aria-hidden="true">
        <circle cx="16" cy="16" r="16" fill="#1A6D8F" />
        <text x="16" y="21" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="Inter,Arial" fontWeight="bold">MIMIC</text>
      </svg>
    ),
    link: "https://mimic.mit.edu/",
  },
  {
    label: "CourtListener",
    icon: (
      <svg viewBox="0 0 64 64" className="w-10 h-10" aria-hidden="true">
        <g>
          <rect width="64" height="64" fill="none" />
          <g stroke="#888" strokeWidth="2.5" fill="none">
            <line x1="16" y1="54" x2="16" y2="28" />
            <line x1="48" y1="54" x2="48" y2="28" />
            <line x1="16" y1="28" x2="8" y2="28" />
            <line x1="48" y1="28" x2="56" y2="28" />
            <line x1="8" y1="28" x2="8" y2="34" />
            <line x1="56" y1="28" x2="56" y2="34" />
            <line x1="8" y1="34" x2="24" y2="34" />
            <line x1="56" y1="34" x2="40" y2="34" />
            <ellipse cx="16" cy="54" rx="8" ry="3" fill="#888" />
            <ellipse cx="48" cy="54" rx="8" ry="3" fill="#888" />
          </g>
          <g stroke="#A33" strokeWidth="3" fill="none">
            <line x1="32" y1="10" x2="32" y2="54" />
            <circle cx="32" cy="10" r="3" fill="#A33" />
          </g>
          <g stroke="#888" strokeWidth="2.5" fill="none">
            <circle cx="16" cy="28" r="2.5" fill="#fff" />
            <circle cx="48" cy="28" r="2.5" fill="#fff" />
            <circle cx="32" cy="10" r="2.5" fill="#fff" />
          </g>
        </g>
      </svg>
    ),
    link: "https://www.courtlistener.com/",
  },
  {
    label: "Caselaw Access Project",
    icon: (
      <svg viewBox="0 0 32 32" className="w-10 h-10" aria-hidden="true">
        <rect x="4" y="4" width="24" height="24" rx="2" fill="#0096FF" />
        <rect x="7" y="7" width="2" height="10" fill="#222" />
        <rect x="11" y="7" width="2" height="10" fill="#222" />
        <rect x="15" y="7" width="2" height="10" fill="#222" />
        <rect x="19" y="7" width="2" height="10" fill="#222" />
        <rect x="23" y="7" width="2" height="10" fill="#222" />
        <rect x="7" y="19" width="2" height="2" fill="#222" />
        <rect x="11" y="19" width="2" height="2" fill="#222" />
        <rect x="15" y="19" width="10" height="2" fill="#222" />
        <rect x="7" y="23" width="18" height="2" fill="#222" />
      </svg>
    ),
    link: "https://case.law/",
  },
];

export default function HeroDataSources() {
  return (
    <div className="w-full flex flex-col items-center mt-8">
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10 w-full max-w-3xl animate-fade-in">
        {sources.map((src, i) => (
          <a
            key={src.label}
            href={src.link || undefined}
            target={src.link ? "_blank" : undefined}
            rel={src.link ? "noopener noreferrer" : undefined}
            className="flex flex-col items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-gammalex-orange transition-transform duration-200 hover:scale-105"
            tabIndex={0}
            aria-label={src.label}
          >
            <span className="mb-2 drop-shadow-md transition-opacity duration-300 opacity-80 group-hover:opacity-100">
              {src.icon}
            </span>
            <span className="text-xs sm:text-sm text-slate-700 font-inter text-center max-w-[80px] sm:max-w-none break-words">
              {src.label}
            </span>
          </a>
        ))}
      </div>
      <p className="text-center text-slate-500 mt-4 text-xs sm:text-sm max-w-xl">
        GammaLex trains on trusted, open, and clinical-legal data sources for best-in-class AI. No black boxes—just transparent, defensible intelligence.
      </p>
    </div>
  );
} 