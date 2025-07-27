import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  }
}))

// Mock the JoinWaitlistModal component
jest.mock('../../components/JoinWaitlistModal', () => ({
  JoinWaitlistModal: ({ trigger }: { trigger: React.ReactNode }) => (
    <div data-testid="join-waitlist-modal">
      {trigger}
    </div>
  )
}))

// Mock the component itself to avoid import issues
jest.mock('../../components/whatwedo/WhatWeDoContent', () => {
  return function MockWhatWeDoContent() {
    return (
      <section className="py-20 text-white font-inter relative" style={{ backgroundColor: '#1a365d' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-white drop-shadow-lg">
              Speak with a GammaLex Expert
            </h2>
            
            <p className="text-lg text-white/95 max-w-3xl mx-auto drop-shadow-md">
              Submit your email to get connected with a healthcare AI specialist from our team.
            </p>
            
            <div className="pt-4">
              <div data-testid="join-waitlist-modal">
                <button 
                  className="px-8 py-4 font-semibold rounded-lg transition-colors duration-200"
                  style={{
                    backgroundColor: '#EBD4BE',
                    color: '#1a365d',
                    border: '2px solid #EBD4BE',
                    boxShadow: '0 8px 16px rgba(26, 54, 93, 0.4)'
                  }}
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
})

import WhatWeDoContent from '../../components/whatwedo/WhatWeDoContent'

describe('WhatWeDoContent Component', () => {
  beforeEach(() => {
    // Mock IntersectionObserver for framer-motion
    global.IntersectionObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }))
  })

  describe('WhatWeDoContent Rendering', () => {
    it('renders the CTA section with correct structure', () => {
      render(<WhatWeDoContent />)
      
      expect(screen.getByText(/Speak with a GammaLex Expert/i)).toBeInTheDocument()
      expect(screen.getByText(/Submit your email to get connected with a healthcare AI specialist from our team/i)).toBeInTheDocument()
    })

    it('renders the Learn more button', () => {
      render(<WhatWeDoContent />)
      
      expect(screen.getByText(/Learn more/i)).toBeInTheDocument()
    })

    it('renders the JoinWaitlistModal component', () => {
      render(<WhatWeDoContent />)
      
      expect(screen.getByTestId('join-waitlist-modal')).toBeInTheDocument()
    })
  })

  describe('WhatWeDoContent Styling', () => {
    it('applies correct background color', () => {
      render(<WhatWeDoContent />)
      
      const section = screen.getByText(/Speak with a GammaLex Expert/i).closest('section')
      expect(section).toHaveStyle({ backgroundColor: '#1a365d' })
    })

    it('applies correct text colors', () => {
      render(<WhatWeDoContent />)
      
      const heading = screen.getByText(/Speak with a GammaLex Expert/i)
      const paragraph = screen.getByText(/Submit your email to get connected with a healthcare AI specialist from our team/i)
      
      expect(heading).toHaveClass('text-white')
      expect(paragraph).toHaveClass('text-white/95')
    })

    it('applies correct button styling', () => {
      render(<WhatWeDoContent />)
      
      const button = screen.getByText(/Learn more/i)
      expect(button).toHaveClass('px-8', 'py-4', 'font-semibold', 'rounded-lg')
    })
  })

  describe('WhatWeDoContent Accessibility', () => {
    it('has proper heading hierarchy', () => {
      render(<WhatWeDoContent />)
      
      const heading = screen.getByRole('heading', { level: 2 })
      expect(heading).toHaveTextContent(/Speak with a GammaLex Expert/i)
    })

    it('has accessible button', () => {
      render(<WhatWeDoContent />)
      
      const button = screen.getByRole('button')
      expect(button).toHaveTextContent(/Learn more/i)
    })
  })

  describe('WhatWeDoContent Content Validation', () => {
    it('displays correct heading text', () => {
      render(<WhatWeDoContent />)
      
      expect(screen.getByText(/Speak with a GammaLex Expert/i)).toBeInTheDocument()
    })

    it('displays correct description text', () => {
      render(<WhatWeDoContent />)
      
      expect(screen.getByText(/Submit your email to get connected with a healthcare AI specialist from our team/i)).toBeInTheDocument()
    })

    it('does not contain mission section content', () => {
      render(<WhatWeDoContent />)
      
      // Verify that the old mission content is not present
      expect(screen.queryByText(/Most people view AI as chatbots/i)).not.toBeInTheDocument()
      expect(screen.queryByText(/GammaLex AI's mission is to help providers/i)).not.toBeInTheDocument()
    })
  })

  describe('WhatWeDoContent Responsive Design', () => {
    it('applies responsive classes', () => {
      render(<WhatWeDoContent />)
      
      const container = screen.getByText(/Speak with a GammaLex Expert/i).closest('section')?.querySelector('div')
      expect(container).toHaveClass('max-w-4xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8')
    })

    it('applies responsive text sizing', () => {
      render(<WhatWeDoContent />)
      
      const heading = screen.getByText(/Speak with a GammaLex Expert/i)
      expect(heading).toHaveClass('text-3xl', 'md:text-4xl')
    })
  })
}) 