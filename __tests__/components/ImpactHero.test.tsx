import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ImpactHero from '@/components/impact/ImpactHero';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
}));

describe('ImpactHero', () => {
  it('renders the main heading "Impact."', () => {
    render(<ImpactHero />);

    const heading = screen.getByText('Impact.');
    expect(heading).toBeInTheDocument();
  });

  it('renders the company description', () => {
    render(<ImpactHero />);

    const description = screen.getByText(/GammaLex is an artificial intelligence company/);
    expect(description).toBeInTheDocument();
  });

  it('renders the focus statement', () => {
    render(<ImpactHero />);

    const focus = screen.getByText(/Our focus is to unlock insights/);
    expect(focus).toBeInTheDocument();
  });

  it('has proper section structure', () => {
    render(<ImpactHero />);

    const section = document.querySelector('section');
    expect(section).toHaveClass('relative', 'w-full', 'min-h-screen');
  });

  it('has responsive text sizing classes', () => {
    render(<ImpactHero />);

    const heading = screen.getByText('Impact.');
    expect(heading).toHaveClass('text-5xl', 'sm:text-6xl', 'md:text-7xl', 'lg:text-8xl');

    const description = screen.getByText(/GammaLex is an artificial intelligence company/);
    expect(description).toHaveClass('text-2xl', 'sm:text-3xl', 'md:text-4xl', 'lg:text-5xl');
  });
}); 