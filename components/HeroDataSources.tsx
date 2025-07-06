import React from "react";
import IconGrid, { IconGridItem } from "./IconGrid";

const ICON_CLASS = "w-20 h-12 sm:w-24 sm:h-16 md:w-32 md:h-20 lg:w-40 lg:h-24";
const ICON_VIEWBOX = "0 0 160 96";

const sources = [
  {
    label: "Centers for Medicare & Medicaid Services",
    icon: (
      <svg viewBox={ICON_VIEWBOX} className={ICON_CLASS} aria-hidden="true">
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
        <circle cx="32" cy="28" r="7" fill="#e4572e" />
        <rect x="46" y="22" width="70" height="10" rx="4" fill="#e4572e" />
        <circle cx="32" cy="46" r="7" fill="#4285f4" />
        <rect x="46" y="40" width="70" height="10" rx="4" fill="#4285f4" />
        <circle cx="32" cy="64" r="7" fill="#34a853" />
        <rect x="46" y="58" width="70" height="10" rx="4" fill="#34a853" />
        <circle cx="32" cy="82" r="7" fill="#fbbc04" />
        <rect x="46" y="76" width="70" height="10" rx="4" fill="#fbbc04" />
      </svg>
    ),
    link: "https://mimic.mit.edu/",
  },
  {
    label: "CourtListener by Free.Law",
    icon: (
      <svg viewBox={ICON_VIEWBOX} className={ICON_CLASS} aria-hidden="true">
        <rect x="2" y="2" width="156" height="92" rx="12" fill="#fff" stroke="#888" strokeWidth="4" />
        {/* Left scale */}
        <g stroke="#888" strokeWidth="3" fill="none">
          <line x1="25" y1="75" x2="25" y2="45" />
          <line x1="25" y1="45" x2="15" y2="45" />
          <line x1="25" y1="45" x2="35" y2="45" />
          <path d="M15 45 L12 50 L18 50 Z" fill="#888" />
          <path d="M35 45 L32 50 L38 50 Z" fill="#888" />
          <ellipse cx="25" cy="75" rx="12" ry="4" fill="#888" />
        </g>
        
        {/* Center vertical bars */}
        <g fill="#888">
          <rect x="50" y="25" width="4" height="50" />
          <rect x="60" y="15" width="4" height="60" />
          <rect x="70" y="35" width="4" height="40" />
        </g>
        
        {/* Red center bar */}
        <rect x="80" y="15" width="4" height="60" fill="#B33" />
        <circle cx="82" cy="15" r="3" fill="#B33" />
        
        {/* More gray bars */}
        <g fill="#888">
          <rect x="90" y="25" width="4" height="50" />
          <rect x="100" y="45" width="4" height="30" />
        </g>
        
        {/* Right scale */}
        <g stroke="#888" strokeWidth="3" fill="none">
          <line x1="135" y1="75" x2="135" y2="45" />
          <line x1="135" y1="45" x2="125" y2="45" />
          <line x1="135" y1="45" x2="145" y2="45" />
          <path d="M125 45 L122 50 L128 50 Z" fill="#888" />
          <path d="M145 45 L142 50 L148 50 Z" fill="#888" />
          <ellipse cx="135" cy="75" rx="12" ry="4" fill="#888" />
        </g>
      </svg>
    ),
    link: "https://www.courtlistener.com/",
  },
  {
    label: "CaseLaw Access Project\nby Harvard Law School",
    icon: (
      <svg viewBox={ICON_VIEWBOX} className={ICON_CLASS} aria-hidden="true">
        <rect x="2" y="2" width="156" height="92" rx="12" fill="#0096FF" stroke="#0096FF" strokeWidth="4" />
        <g>
          <rect x="20" y="24" width="8" height="32" fill="#222" />
          <rect x="36" y="24" width="8" height="32" fill="#222" />
          <rect x="52" y="24" width="8" height="32" fill="#222" />
          <rect x="68" y="24" width="8" height="32" fill="#222" />
          <rect x="84" y="24" width="8" height="32" fill="#222" />
          <rect x="20" y="64" width="8" height="6" fill="#222" />
          <rect x="36" y="64" width="8" height="6" fill="#222" />
          <rect x="52" y="64" width="40" height="6" fill="#222" />
          <rect x="20" y="76" width="72" height="6" fill="#222" />
        </g>
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
    label: "Biomedical and Clinical Research by i2b2s",
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
    link: "https://portal.dbmi.hms.harvard.edu/",
  },
];

const mainSources = sources.slice(0, 6);
const researchSource = sources[6];

export const heroDataSources: IconGridItem[] = sources.map((src): IconGridItem => ({
  label: src.label,
  icon: src.icon,
  link: src.link,
}));

export default function HeroDataSources() {
  return (
    <div className="w-full flex flex-col items-center mt-6 sm:mt-8 md:mt-10 mb-6 sm:mb-8 md:mb-10 hero-data-sources overflow-hidden">
      {/* Horizontal scrolling ticker */}
      <div className="w-full overflow-hidden relative">
        <div className="flex animate-scroll-left hover:animation-paused gap-x-6 sm:gap-x-8 md:gap-x-12 lg:gap-x-20 px-4 sm:px-0">
          {/* First set of icons */}
          {heroDataSources.map((src, i) => (
            <div
              key={`first-${src.label}`}
              className="flex flex-col flex-shrink-0 min-w-0"
              style={{ minWidth: 140, maxWidth: 200 }}
            >
              <a
                href={src.link || undefined}
                target={src.link ? "_blank" : undefined}
                rel={src.link ? "noopener noreferrer" : undefined}
                className="flex flex-col items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-gammalex-orange transition-transform duration-200 hover:scale-110"
                tabIndex={0}
                aria-label={src.label}
              >
                <div className="h-16 sm:h-20 md:h-24 flex items-center justify-center w-full">
                  {src.icon}
                </div>
              </a>
              <div className="h-12 sm:h-14 md:h-16 lg:h-18 flex items-center justify-center w-full mt-2 px-2">
                <span className="text-xs sm:text-sm md:text-base text-white font-inter text-center w-full whitespace-normal break-words leading-tight overflow-hidden">
                  {src.label}
                </span>
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {heroDataSources.map((src, i) => (
            <div
              key={`second-${src.label}`}
              className="flex flex-col flex-shrink-0 min-w-0"
              style={{ minWidth: 140, maxWidth: 200 }}
            >
              <a
                href={src.link || undefined}
                target={src.link ? "_blank" : undefined}
                rel={src.link ? "noopener noreferrer" : undefined}
                className="flex flex-col items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-gammalex-orange transition-transform duration-200 hover:scale-110"
                tabIndex={0}
                aria-label={src.label}
              >
                <div className="h-16 sm:h-20 md:h-24 flex items-center justify-center w-full">
                  {src.icon}
                </div>
              </a>
              <div className="h-12 sm:h-14 md:h-16 lg:h-18 flex items-center justify-center w-full mt-2 px-2">
                <span className="text-xs sm:text-sm md:text-base text-white font-inter text-center w-full whitespace-normal break-words leading-tight overflow-hidden">
                  {src.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center mt-8 mb-2 text-white text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-tight drop-shadow-lg px-4"
         style={{
           textShadow: '0 0 12px #FF6B35AA, 0 2px 8px #000A',
           maxWidth: '100%',
           wordWrap: 'break-word',
           hyphens: 'auto',
         }}>
        AI powered by trusted open sources. Moving healthcare forward.
      </p>
    </div>
  );
}