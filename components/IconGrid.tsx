import React from "react";

export interface IconGridItem {
  label: string;
  icon: React.ReactNode;
  link?: string;
}

interface IconGridProps {
  items: IconGridItem[];
  minWidth?: number;
  maxWidth?: number;
  className?: string;
}

export default function IconGrid({ items, minWidth = 140, maxWidth = 200, className = "" }: IconGridProps) {
  return (
    <div className={`w-full overflow-x-auto pb-2 ${className}`}>
      <div className="flex flex-row justify-center items-end gap-x-6 sm:gap-x-12 lg:gap-x-20 max-w-none min-w-0 px-2 sm:px-6">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.link || undefined}
            target={item.link ? "_blank" : undefined}
            rel={item.link ? "noopener noreferrer" : undefined}
            className="flex flex-col items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-gammalex-orange transition-transform duration-200 hover:scale-110 min-w-0 flex-shrink-0"
            tabIndex={0}
            aria-label={item.label}
            style={{ minWidth, maxWidth }}
          >
            <span className="mb-3 drop-shadow-md transition-opacity duration-300 opacity-80 group-hover:opacity-100 flex items-center justify-center w-full h-full min-h-0">
              {item.icon}
            </span>
            <span className="text-xs sm:text-base md:text-lg text-white font-inter text-center max-w-xs whitespace-normal break-words w-full">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
} 