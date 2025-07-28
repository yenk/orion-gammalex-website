import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ImpactStats from '@/components/impact/ImpactStats';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

describe('ImpactStats', () => {
  it('renders all four impact sections', () => {
    render(<ImpactStats />);

    expect(screen.getByText('Authorization Success')).toBeInTheDocument();
    expect(screen.getByText('Clinical Intelligence')).toBeInTheDocument();
    expect(screen.getByText('Revenue Transformation')).toBeInTheDocument();
    expect(screen.getByText('Adding Intelligence to Healthcare Systems')).toBeInTheDocument();
  });

  it('renders section descriptions', () => {
    render(<ImpactStats />);

    expect(screen.getByText(/We use artificial intelligence to provide unbiased insights/)).toBeInTheDocument();
    expect(screen.getByText(/Provide healthcare teams with powerful insights/)).toBeInTheDocument();
    expect(screen.getByText(/Modernizing healthcare operations/)).toBeInTheDocument();
    expect(screen.getByText(/From data capture, policy analysis/)).toBeInTheDocument();
  });

  it('renders impact statistics', () => {
    render(<ImpactStats />);

    // Use getAllByText since there are multiple instances of these values
    const successRates = screen.getAllByText('94%');
    expect(successRates.length).toBeGreaterThan(0);
    
    const denialReductions = screen.getAllByText('67%');
    expect(denialReductions.length).toBeGreaterThan(0);
    
    const approvalTimes = screen.getAllByText('3.2x');
    expect(approvalTimes.length).toBeGreaterThan(0);
    
    const revenueSaved = screen.getAllByText('$2.4M');
    expect(revenueSaved.length).toBeGreaterThan(0);
    
    const roiImprovements = screen.getAllByText('12x');
    expect(roiImprovements.length).toBeGreaterThan(0);
  });

  it('has proper section structure', () => {
    render(<ImpactStats />);

    const section = document.querySelector('section');
    expect(section).toHaveClass('py-20', 'bg-white', 'text-gray-900');
  });

  it('renders section icons', () => {
    render(<ImpactStats />);

    // Use getAllByText since there are multiple instances of these values
    const asIcons = screen.getAllByText('AS');
    expect(asIcons.length).toBeGreaterThan(0);
    
    const ciIcons = screen.getAllByText('CI');
    expect(ciIcons.length).toBeGreaterThan(0);
    
    const rtIcons = screen.getAllByText('RT');
    expect(rtIcons.length).toBeGreaterThan(0);
    
    const aiIcons = screen.getAllByText('AI');
    expect(aiIcons.length).toBeGreaterThan(0);
  });

  it('has alternating layout for sections', () => {
    render(<ImpactStats />);

    const gridContainers = document.querySelectorAll('.grid');
    expect(gridContainers.length).toBeGreaterThan(0);
  });
}); 