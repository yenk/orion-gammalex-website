import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WhatWeDoContent from '@/components/whatwedo/WhatWeDoContent';

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

describe('WhatWeDoContent', () => {
  it('renders the narrative content in a 2x2 grid layout', () => {
    render(<WhatWeDoContent />);
    
    const gridContainer = document.querySelector('.grid');
    expect(gridContainer).toHaveClass('grid-cols-1', 'md:grid-cols-2');
  });

  it('renders the first paragraph about AI capabilities', () => {
    render(<WhatWeDoContent />);
    
    const firstParagraph = screen.getByText(/Most people view AI as chatbots or image generators/);
    expect(firstParagraph).toBeInTheDocument();
  });

  it('renders the second paragraph about GammaLex mission', () => {
    render(<WhatWeDoContent />);
    
    const secondParagraph = screen.getByText(/GammaLex AI's mission is to help providers/);
    expect(secondParagraph).toBeInTheDocument();
  });

  it('renders the CTA section with correct heading', () => {
    render(<WhatWeDoContent />);
    
    const ctaHeading = screen.getByText('Speak with a GammaLex Expert');
    expect(ctaHeading).toBeInTheDocument();
  });

  it('renders the CTA description', () => {
    render(<WhatWeDoContent />);
    
    const ctaDescription = screen.getByText(/Submit your email to get connected with a healthcare AI specialist/);
    expect(ctaDescription).toBeInTheDocument();
  });

  it('renders the Learn more button', () => {
    render(<WhatWeDoContent />);
    
    const learnMoreButton = screen.getByText('Learn more');
    expect(learnMoreButton).toBeInTheDocument();
  });

  it('has the correct CTA background color', () => {
    render(<WhatWeDoContent />);
    
    const ctaSection = document.querySelector('[style*="background-color: rgb(26, 54, 93)"]');
    expect(ctaSection).toBeInTheDocument();
  });

  it('includes the JoinWaitlistModal component', () => {
    render(<WhatWeDoContent />);
    
    const modal = screen.getByTestId('join-waitlist-modal');
    expect(modal).toBeInTheDocument();
  });

  it('has proper section structure with white and dark blue sections', () => {
    render(<WhatWeDoContent />);
    
    const sections = document.querySelectorAll('section');
    expect(sections).toHaveLength(2);
    
    const firstSection = sections[0];
    expect(firstSection).toHaveClass('bg-white', 'text-gray-900');
  });

  it('has responsive text sizing for CTA heading', () => {
    render(<WhatWeDoContent />);
    
    const ctaHeading = screen.getByText('Speak with a GammaLex Expert');
    expect(ctaHeading).toHaveClass('text-3xl', 'md:text-4xl');
  });
}); 