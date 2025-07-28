import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ImpactStories from '@/components/impact/ImpactStories';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
  },
}));

describe('ImpactStories', () => {
  it('renders the main heading', () => {
    render(<ImpactStories />);

    const heading = screen.getByText('Real Impact Stories');
    expect(heading).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<ImpactStories />);

    const description = screen.getByText(/See how healthcare organizations are transforming/);
    expect(description).toBeInTheDocument();
  });

  it('renders all three impact stories', () => {
    render(<ImpactStories />);

    expect(screen.getByText('Academic Medical Center')).toBeInTheDocument();
    expect(screen.getByText('Specialty Hospital Network')).toBeInTheDocument();
    expect(screen.getByText('Healthcare System')).toBeInTheDocument();
  });

  it('renders story subtitles', () => {
    render(<ImpactStories />);

    expect(screen.getByText('94% Authorization Success Rate')).toBeInTheDocument();
    expect(screen.getByText('Real-time Policy Intelligence')).toBeInTheDocument();
    expect(screen.getByText('Revenue Transformation')).toBeInTheDocument();
  });

  it('renders story metrics', () => {
    render(<ImpactStories />);

    expect(screen.getByText('67% reduction in claim denials')).toBeInTheDocument();
    expect(screen.getByText('3.2x faster payment cycles')).toBeInTheDocument();
    expect(screen.getByText('$2.4M in protected revenue')).toBeInTheDocument();
  });

  it('renders call-to-action buttons', () => {
    render(<ImpactStories />);

    const buttons = screen.getAllByText('Read Full Case Study');
    expect(buttons).toHaveLength(3);
  });

  it('has proper section structure', () => {
    render(<ImpactStories />);

    const section = document.querySelector('section');
    expect(section).toHaveClass('py-20', 'bg-gray-50');
  });

  it('renders metric indicators', () => {
    render(<ImpactStories />);

    const indicators = document.querySelectorAll('.w-2.h-2.bg-gammalex-orange.rounded-full');
    expect(indicators.length).toBeGreaterThan(0);
  });
}); 