import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WhatWeDoHero from '@/components/whatwedo/WhatWeDoHero';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
}));

describe('WhatWeDoHero', () => {
  it('renders the main heading with GammaLex highlighted', () => {
    render(<WhatWeDoHero />);
    
    const heading = screen.getByText(/What is/);
    expect(heading).toBeInTheDocument();
    
    const gammaLexSpan = screen.getByText('GammaLex');
    expect(gammaLexSpan).toBeInTheDocument();
    expect(gammaLexSpan).toHaveClass('text-gammalex-orange');
  });

  it('renders the subheading with vertical AI description', () => {
    render(<WhatWeDoHero />);
    
    const subheading = screen.getByText(/GammaLex is vertical AI for healthcare/);
    expect(subheading).toBeInTheDocument();
  });

  it('has proper section structure', () => {
    render(<WhatWeDoHero />);
    
    const section = document.querySelector('section');
    expect(section).toHaveClass('relative', 'w-full', 'min-h-screen');
  });

  it('has responsive text sizing classes', () => {
    render(<WhatWeDoHero />);
    
    const heading = screen.getByText(/What is/);
    expect(heading).toHaveClass('text-5xl', 'sm:text-6xl', 'md:text-7xl', 'lg:text-8xl');
    
    const subheading = screen.getByText(/GammaLex is vertical AI for healthcare/);
    expect(subheading).toHaveClass('text-2xl', 'sm:text-3xl', 'md:text-4xl', 'lg:text-5xl');
  });
}); 