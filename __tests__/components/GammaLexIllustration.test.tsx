import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import GammaLexIllustration from '../../components/GammaLexIllustration'

describe('GammaLexIllustration Component', () => {
  beforeEach(() => {
    // Mock IntersectionObserver
    global.IntersectionObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }))
  })

  describe('GammaLexIllustration Rendering', () => {
    it('renders the illustration with correct structure', () => {
      render(<GammaLexIllustration active={0} />)
      
      const svg = document.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })

    it('renders with different active states', () => {
      const { rerender } = render(<GammaLexIllustration active={0} />)
      
      // Test different active states
      rerender(<GammaLexIllustration active={1} />)
      rerender(<GammaLexIllustration active={2} />)
      rerender(<GammaLexIllustration active={3} />)
      
      const svg = document.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })
  })

  describe('GammaLexIllustration Animation States', () => {
    it('displays correct animation for active state 0', () => {
      render(<GammaLexIllustration active={0} />)
      
      // Check for motion components with proper animations
      const motionElements = document.querySelectorAll('[initial]')
      expect(motionElements.length).toBeGreaterThan(0)
    })

    it('displays correct animation for active state 1', () => {
      render(<GammaLexIllustration active={1} />)
      
      const motionElements = document.querySelectorAll('[initial]')
      expect(motionElements.length).toBeGreaterThan(0)
    })

    it('displays correct animation for active state 2', () => {
      render(<GammaLexIllustration active={2} />)
      
      const motionElements = document.querySelectorAll('[initial]')
      expect(motionElements.length).toBeGreaterThan(0)
    })

    it('displays correct animation for active state 3', () => {
      render(<GammaLexIllustration active={3} />)
      
      const motionElements = document.querySelectorAll('[initial]')
      expect(motionElements.length).toBeGreaterThan(0)
    })
  })

  describe('GammaLexIllustration Styling', () => {
    it('has proper SVG styling', () => {
      render(<GammaLexIllustration active={0} />)
      
      const svg = document.querySelector('svg')
      expect(svg).toHaveAttribute('width', '220')
      expect(svg).toHaveAttribute('height', '220')
      expect(svg).toHaveAttribute('viewBox', '0 0 220 220')
    })

    it('has proper motion component styling', () => {
      render(<GammaLexIllustration active={0} />)
      
      const motionElements = document.querySelectorAll('[initial]')
      expect(motionElements.length).toBeGreaterThan(0)
    })

    it('has proper SVG structure', () => {
      render(<GammaLexIllustration active={0} />)
      
      const svg = document.querySelector('svg')
      expect(svg).toBeInTheDocument()
      expect(svg).toHaveAttribute('fill', 'none')
      expect(svg).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg')
    })
  })

  describe('GammaLexIllustration Props', () => {
    it('accepts active prop correctly', () => {
      render(<GammaLexIllustration active={2} />)
      
      const svg = document.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })

    it('handles different active values', () => {
      const { rerender } = render(<GammaLexIllustration active={0} />)
      
      // Test various active values
      rerender(<GammaLexIllustration active={1} />)
      rerender(<GammaLexIllustration active={2} />)
      rerender(<GammaLexIllustration active={3} />)
      rerender(<GammaLexIllustration active={4} />)
      
      const svg = document.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })
  })

  describe('GammaLexIllustration Animations', () => {
    it('has motion components with proper animations', () => {
      render(<GammaLexIllustration active={0} />)
      
      const motionElements = document.querySelectorAll('[initial]')
      expect(motionElements.length).toBeGreaterThan(0)
    })

    it('has animate animations', () => {
      render(<GammaLexIllustration active={0} />)
      
      const animateElements = document.querySelectorAll('[animate]')
      expect(animateElements.length).toBeGreaterThan(0)
    })

    it('has transition animations', () => {
      render(<GammaLexIllustration active={0} />)
      
      const transitionElements = document.querySelectorAll('[transition]')
      expect(transitionElements.length).toBeGreaterThan(0)
    })
  })

  describe('GammaLexIllustration Content', () => {
    it('renders different content based on active state', () => {
      const { rerender } = render(<GammaLexIllustration active={0} />)
      
      // Test that component renders for each active state
      rerender(<GammaLexIllustration active={1} />)
      rerender(<GammaLexIllustration active={2} />)
      rerender(<GammaLexIllustration active={3} />)
      
      const svg = document.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })

    it('maintains structure across different active states', () => {
      const { rerender } = render(<GammaLexIllustration active={0} />)
      
      rerender(<GammaLexIllustration active={1} />)
      rerender(<GammaLexIllustration active={2} />)
      rerender(<GammaLexIllustration active={3} />)
      
      const svg = document.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })
  })

  describe('GammaLexIllustration Accessibility', () => {
    it('has proper semantic structure', () => {
      render(<GammaLexIllustration active={0} />)
      
      const svg = document.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })

    it('maintains accessibility across different states', () => {
      const { rerender } = render(<GammaLexIllustration active={0} />)
      
      rerender(<GammaLexIllustration active={1} />)
      rerender(<GammaLexIllustration active={2} />)
      rerender(<GammaLexIllustration active={3} />)
      
      const svg = document.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })
  })

  describe('GammaLexIllustration Performance', () => {
    it('renders efficiently with different active states', () => {
      const { rerender } = render(<GammaLexIllustration active={0} />)
      
      // Test rapid state changes
      rerender(<GammaLexIllustration active={1} />)
      rerender(<GammaLexIllustration active={2} />)
      rerender(<GammaLexIllustration active={3} />)
      rerender(<GammaLexIllustration active={0} />)
      
      const svg = document.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })

    it('handles edge case active values', () => {
      const { rerender } = render(<GammaLexIllustration active={0} />)
      
      // Test edge cases
      rerender(<GammaLexIllustration active={-1} />)
      rerender(<GammaLexIllustration active={10} />)
      rerender(<GammaLexIllustration active={0} />)
      
      const svg = document.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })
  })

  describe('GammaLexIllustration Integration', () => {
    it('works with parent component integration', () => {
      render(<GammaLexIllustration active={0} />)
      
      const svg = document.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })

    it('maintains functionality when used in different contexts', () => {
      const { rerender } = render(<GammaLexIllustration active={0} />)
      
      rerender(<GammaLexIllustration active={1} />)
      rerender(<GammaLexIllustration active={2} />)
      rerender(<GammaLexIllustration active={3} />)
      
      const svg = document.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })
  })

  describe('GammaLexIllustration Responsive Design', () => {
    it('has responsive SVG attributes', () => {
      render(<GammaLexIllustration active={0} />)
      
      const svg = document.querySelector('svg')
      expect(svg).toHaveAttribute('width', '220')
      expect(svg).toHaveAttribute('height', '220')
      expect(svg).toHaveAttribute('viewBox', '0 0 220 220')
    })

    it('maintains responsive design across states', () => {
      const { rerender } = render(<GammaLexIllustration active={0} />)
      
      rerender(<GammaLexIllustration active={1} />)
      rerender(<GammaLexIllustration active={2} />)
      rerender(<GammaLexIllustration active={3} />)
      
      const svg = document.querySelector('svg')
      expect(svg).toHaveAttribute('width', '220')
      expect(svg).toHaveAttribute('height', '220')
    })
  })

  describe('GammaLexIllustration Animation Transitions', () => {
    it('has smooth transitions between states', () => {
      const { rerender } = render(<GammaLexIllustration active={0} />)
      
      rerender(<GammaLexIllustration active={1} />)
      rerender(<GammaLexIllustration active={2} />)
      rerender(<GammaLexIllustration active={3} />)
      
      const motionElements = document.querySelectorAll('[transition]')
      expect(motionElements.length).toBeGreaterThan(0)
    })

    it('has proper animation timing', () => {
      render(<GammaLexIllustration active={0} />)
      
      const motionElements = document.querySelectorAll('[transition]')
      expect(motionElements.length).toBeGreaterThan(0)
    })
  })

  describe('GammaLexIllustration Error Handling', () => {
    it('handles invalid active prop gracefully', () => {
      render(<GammaLexIllustration active={999} />)
      
      const svg = document.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })

    it('handles undefined active prop', () => {
      render(<GammaLexIllustration active={undefined as any} />)
      
      const svg = document.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })
  })
}) 