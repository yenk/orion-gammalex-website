import React from "react";
import Image from 'next/image';

const sources = [
  {
    label: "Centers for Medicare & Medicaid Services",
    icon: "/images/logos/cms-logo.png",
    link: "https://www.cms.gov/medicare-coverage-database/search.aspx",
  },
  {
    label: "World Health Organization ICD-11",
    icon: "/images/logos/who-icd11-logo.png",
    link: "https://www.who.int/classifications/classification-of-diseases",
  },
  {
    label: "Medical Information Mart for Intensive Care",
    icon: "/images/logos/mimic-logo.png",
    link: "https://mimic.mit.edu/",
  },
  {
    label: "CourtListener by Free.Law",
    icon: "/images/logos/courtlistener-logo.png",
    link: "https://www.courtlistener.com/",
  },
  {
    label: "CaseLaw Access Project by Harvard Law School",
    icon: "/images/logos/caselaw-harvard-logo.png",
    link: "https://case.law/",
  },
  {
    label: "National Library of Medicine",
    icon: "/images/logos/nlm-nih-logo.png",
    link: "https://www.nlm.nih.gov/",
  },
  {
    label: "Biomedical and Clinical Research by i2b2s",
    icon: "/images/logos/i2b2s-logo.png",
    link: "https://portal.dbmi.hms.harvard.edu/",
  },
];

export default function HeroDataSources() {
  return (
    <div className="w-full flex flex-col items-center mt-6 sm:mt-8 md:mt-10 mb-6 sm:mb-8 md:mb-10 hero-data-sources overflow-hidden">
      {/* Horizontal scrolling ticker */}
      <div className="w-full overflow-hidden relative">
        <div className="flex animate-scroll-left hover:animation-paused gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-12 xl:gap-x-20 px-2 sm:px-4">
          {/* First set of icons */}
          {sources.map((src, i) => (
            <div
              key={`first-${src.label}`}
              className="flex flex-col flex-shrink-0 min-w-0"
              style={{ minWidth: 140, maxWidth: 200 }}
            >
              <a
                href={src.link || undefined}
                target={src.link ? "_blank" : undefined}
                rel={src.link ? "noopener noreferrer" : undefined}
                className="flex flex-col items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-gammalex-orange transition-transform duration-200 hover:scale-110 min-w-0 flex-shrink-0"
                tabIndex={0}
                aria-label={src.label}
              >
                <span className="mb-3 drop-shadow-md transition-opacity duration-300 opacity-80 group-hover:opacity-100 flex items-center justify-center w-full h-full min-h-0">
                  <Image
                    src={src.icon}
                    alt={src.label}
                    width={160}
                    height={96}
                    className="w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-16 lg:w-32 lg:h-20 xl:w-40 xl:h-24 object-contain"
                  />
                </span>
                <span className="pt-2 text-xs sm:text-sm md:text-base text-white font-inter text-center max-w-full whitespace-normal break-words w-full leading-tight">
                  {src.label}
                </span>
              </a>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {sources.map((src, i) => (
            <div
              key={`second-${src.label}`}
              className="flex flex-col flex-shrink-0 min-w-0"
              style={{ minWidth: 140, maxWidth: 200 }}
            >
              <a
                href={src.link || undefined}
                target={src.link ? "_blank" : undefined}
                rel={src.link ? "noopener noreferrer" : undefined}
                className="flex flex-col items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-gammalex-orange transition-transform duration-200 hover:scale-110 min-w-0 flex-shrink-0"
                tabIndex={0}
                aria-label={src.label}
              >
                <span className="mb-3 drop-shadow-md transition-opacity duration-300 opacity-80 group-hover:opacity-100 flex items-center justify-center w-full h-full min-h-0">
                  <Image
                    src={src.icon}
                    alt={src.label}
                    width={160}
                    height={96}
                    className="w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-16 lg:w-32 lg:h-20 xl:w-40 xl:h-24 object-contain"
                  />
                </span>
                <span className="pt-2 text-xs sm:text-sm md:text-base text-white font-inter text-center max-w-full whitespace-normal break-words w-full leading-tight">
                  {src.label}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}