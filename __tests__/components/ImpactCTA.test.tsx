import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ImpactCTA from '@/components/impact/ImpactCTA';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
}));

// Mock JoinWaitlistModal
jest.mock('../../components/JoinWaitlistModal', () => ({
  JoinWaitlistModal: ({ trigger }: { trigger: React.ReactNode }) => (
    <div data-testid="join-waitlist-modal">{trigger}</div>
  ),
}));

describe('ImpactCTA', () => {
  it('renders the main heading', () => {
    render(<ImpactCTA />);

    const heading = screen.getByText('Ready to Transform Your Healthcare Impact?');
    expect(heading).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<ImpactCTA />);

    const description = screen.getByText(/Join healthcare organizations that are already achieving measurable results/);
    expect(description).toBeInTheDocument();
  });

  it('renders the call-to-action button', () => {
    render(<ImpactCTA />);

    const button = screen.getByText('Start Your Impact Journey');
    expect(button).toBeInTheDocument();
  });

  it('has the correct background color', () => {
    render(<ImpactCTA />);

    const section = document.querySelector('[style*="background-color: rgb(26, 54, 93)"]');
    expect(section).toBeInTheDocument();
  });

  it('includes the JoinWaitlistModal component', () => {
    render(<ImpactCTA />);

    const modal = screen.getByTestId('join-waitlist-modal');
    expect(modal).toBeInTheDocument();
  });

  it('has proper section structure', () => {
    render(<ImpactCTA />);

    const section = document.querySelector('section');
    expect(section).toHaveClass('py-20', 'text-white', 'font-inter');
  });

  it('has responsive text sizing for heading', () => {
    render(<ImpactCTA />);

    const heading = screen.getByText('Ready to Transform Your Healthcare Impact?');
    expect(heading).toHaveClass('text-3xl', 'md:text-4xl');
  });
}); 