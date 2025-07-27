import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import AboutSection from '../../components/AboutSection'

describe('AboutSection Component', () => {
  beforeEach(() => {
    // Mock IntersectionObserver
    global.IntersectionObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }))
  })

  describe('AboutSection Rendering', () => {
    it('renders the main section with correct structure', () => {
      render(<AboutSection />)
      
      expect(screen.getByText(/Defensible care/i)).toBeInTheDocument()
      expect(screen.getByText(/by design/i)).toBeInTheDocument()
    })

    it('renders the hero section with correct content', () => {
      render(<AboutSection />)
      
      expect(screen.getByText(/We're building GammaLex to reset the rules/i)).toBeInTheDocument()
      expect(screen.getByText(/where clarity and defensibility are the default/i)).toBeInTheDocument()
    })

    it('renders all tab navigation buttons', () => {
      render(<AboutSection />)
      
      expect(screen.getByText(/Our Origin/i)).toBeInTheDocument()
      expect(screen.getByText(/What We Do/i)).toBeInTheDocument()
      expect(screen.getByText(/What Sets Us Apart/i)).toBeInTheDocument()
    })
  })

  describe('AboutSection Tab Functionality', () => {
    it('shows "Our Origin" content by default', () => {
      render(<AboutSection />)
      
      expect(screen.getByText(/Born from the Front Lines/i)).toBeInTheDocument()
      expect(screen.getByText(/Why should revenue and patient care hinge/i)).toBeInTheDocument()
      expect(screen.getByText(/We spent years fighting for approvals/i)).toBeInTheDocument()
      expect(screen.getAllByText(/We built the engine we always wished existed/i)).toHaveLength(2)
    })

    it('switches to "What We Do" tab when clicked', () => {
      render(<AboutSection />)
      
      const whatWeDoButton = screen.getByText(/What We Do/i)
      fireEvent.click(whatWeDoButton)
      
      expect(screen.getByText(/Translate & Automate/i)).toBeInTheDocument()
      expect(screen.getByText(/Predict & Protect/i)).toBeInTheDocument()
      expect(screen.getByText(/Learn & Adapt/i)).toBeInTheDocument()
    })

    it('switches to "What Sets Us Apart" tab when clicked', () => {
      render(<AboutSection />)
      
      const whatSetsUsApartButton = screen.getByText(/What Sets Us Apart/i)
      fireEvent.click(whatSetsUsApartButton)
      
      expect(screen.getAllByText(/Founder-Led Team/i)).toHaveLength(2)
      expect(screen.getAllByText(/Relentless Pursuit/i)).toHaveLength(1)
      expect(screen.getAllByText(/Dedicated to Impact/i)).toHaveLength(1)
    })

    it('highlights active tab correctly', () => {
      render(<AboutSection />)
      
      const ourOriginButton = screen.getByText(/Our Origin/i).closest('button')
      const whatWeDoButton = screen.getByText(/What We Do/i).closest('button')
      
      // Our Origin should be active by default
      expect(ourOriginButton).toHaveClass('bg-gammalex-purple/20')
      expect(whatWeDoButton).not.toHaveClass('bg-gammalex-purple/20')
      
      // Click What We Do
      fireEvent.click(whatWeDoButton!)
      
      // What We Do should now be active
      expect(whatWeDoButton).toHaveClass('bg-gammalex-purple/20')
      expect(ourOriginButton).not.toHaveClass('bg-gammalex-purple/20')
    })
  })

  describe('AboutSection Content Details', () => {
    it('displays "What We Do" items correctly', () => {
      render(<AboutSection />)
      
      const whatWeDoButton = screen.getByText(/What We Do/i)
      fireEvent.click(whatWeDoButton)
      
      expect(screen.getByText(/Translates medical records and legal standards/i)).toBeInTheDocument()
      expect(screen.getByText(/Predicts denial risk and cuts waste/i)).toBeInTheDocument()
      expect(screen.getByText(/Updates intelligence with latest rules/i)).toBeInTheDocument()
    })

    it('displays "What Sets Us Apart" items correctly', () => {
      render(<AboutSection />)
      
      const whatSetsUsApartButton = screen.getByText(/What Sets Us Apart/i)
      fireEvent.click(whatSetsUsApartButton)
      
      expect(screen.getByText(/Founder-led team solving problems others ignore/i)).toBeInTheDocument()
      expect(screen.getByText(/Open, auditable models that regulators and providers trust/i)).toBeInTheDocument()
      expect(screen.getByText(/Restoring billions in lost revenue and patient access to care/i)).toBeInTheDocument()
    })

    it('displays origin content with proper structure', () => {
      render(<AboutSection />)
      
      expect(screen.getByText(/Born from the Front Lines/i)).toBeInTheDocument()
      expect(screen.getByText(/Why should revenue and patient care hinge on a system no one can fully decode/i)).toBeInTheDocument()
      expect(screen.getByText(/We spent years fighting for approvals, watching innovation stall/i)).toBeInTheDocument()
      expect(screen.getAllByText(/We built the engine we always wished existed/i)).toHaveLength(2)
    })
  })

  describe('AboutSection Interactive Elements', () => {
    it('has proper accessibility attributes', () => {
      render(<AboutSection />)
      
      // Check for proper heading structure
      const headings = screen.getAllByRole('heading')
      expect(headings.length).toBeGreaterThan(0)
      
      // Check that buttons are accessible
      const buttons = screen.getAllByRole('button')
      expect(buttons.length).toBeGreaterThan(0)
    })

    it('has hover effects on tab buttons', () => {
      render(<AboutSection />)
      
      const tabButtons = screen.getAllByRole('button')
      tabButtons.forEach(button => {
        expect(button).toHaveClass('transition-all', 'duration-300')
      })
    })

    it('has hover effects on content cards', () => {
      render(<AboutSection />)
      
      const whatWeDoButton = screen.getByText(/What We Do/i)
      fireEvent.click(whatWeDoButton)
      
      const cards = document.querySelectorAll('.group')
      expect(cards.length).toBeGreaterThan(0)
    })
  })

  describe('AboutSection Styling and Layout', () => {
    it('has correct CSS classes for styling', () => {
      render(<AboutSection />)
      
      const section = document.querySelector('section[id="about"]')
      expect(section).toHaveClass('py-16', 'sm:py-24', 'md:py-32', 'px-4', 'sm:px-6', 'lg:px-8', 'font-inter')
    })

    it('has proper gradient styling', () => {
      render(<AboutSection />)
      
      const section = document.querySelector('section[id="about"]')
      expect(section).toHaveClass('bg-gradient-to-br', 'from-black/30', 'via-purple-900/10', 'to-black/30')
    })

    it('renders grid layout for content items', () => {
      render(<AboutSection />)
      
      const whatWeDoButton = screen.getByText(/What We Do/i)
      fireEvent.click(whatWeDoButton)
      
      const gridContainer = document.querySelector('.grid.grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-3')
      expect(gridContainer).toBeInTheDocument()
    })
  })

  describe('AboutSection Responsive Design', () => {
    it('has responsive text classes', () => {
      render(<AboutSection />)
      
      const mainHeading = screen.getByText(/Defensible care/i).closest('h2')
      expect(mainHeading).toHaveClass('text-3xl', 'xs:text-4xl', 'sm:text-5xl', 'lg:text-6xl')
    })

    it('has responsive grid layout', () => {
      render(<AboutSection />)
      
      const whatWeDoButton = screen.getByText(/What We Do/i)
      fireEvent.click(whatWeDoButton)
      
      const gridContainer = document.querySelector('.grid.grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-3')
      expect(gridContainer).toBeInTheDocument()
    })

    it('has responsive padding and spacing', () => {
      render(<AboutSection />)
      
      const section = document.querySelector('section[id="about"]')
      expect(section).toHaveClass('py-16', 'sm:py-24', 'md:py-32')
    })
  })

  describe('AboutSection Animation and Interactions', () => {
    it('has motion components for animations', () => {
      render(<AboutSection />)
      
      // Check that motion components are rendered (they should have motion-specific props)
      const animatedElements = document.querySelectorAll('[initial]')
      expect(animatedElements.length).toBeGreaterThan(0)
    })

    it('animates content transitions when switching tabs', () => {
      render(<AboutSection />)
      
      const whatWeDoButton = screen.getByText(/What We Do/i)
      fireEvent.click(whatWeDoButton)
      
      // Check that the content area has animation props
      const contentArea = document.querySelector('[animate]')
      expect(contentArea).toBeInTheDocument()
    })

    it('has hover animations on content cards', () => {
      render(<AboutSection />)
      
      const whatWeDoButton = screen.getByText(/What We Do/i)
      fireEvent.click(whatWeDoButton)
      
      const cards = document.querySelectorAll('[whileHover]')
      expect(cards.length).toBeGreaterThan(0)
    })
  })

  describe('AboutSection Content Accuracy', () => {
    it('displays correct tab labels', () => {
      render(<AboutSection />)
      
      expect(screen.getByText('Our Origin')).toBeInTheDocument()
      expect(screen.getByText('What We Do')).toBeInTheDocument()
      expect(screen.getByText('What Sets Us Apart')).toBeInTheDocument()
    })

    it('displays correct origin content', () => {
      render(<AboutSection />)
      
      expect(screen.getByText(/Born from the Front Lines/i)).toBeInTheDocument()
      expect(screen.getAllByText(/We built the engine we always wished existed/i)).toHaveLength(2)
    })

    it('displays correct "What We Do" content', () => {
      render(<AboutSection />)
      
      const whatWeDoButton = screen.getByText(/What We Do/i)
      fireEvent.click(whatWeDoButton)
      
      expect(screen.getByText(/Translate & Automate/i)).toBeInTheDocument()
      expect(screen.getByText(/Predict & Protect/i)).toBeInTheDocument()
      expect(screen.getByText(/Learn & Adapt/i)).toBeInTheDocument()
    })

    it('displays correct "What Sets Us Apart" content', () => {
      render(<AboutSection />)
      
      const whatSetsUsApartButton = screen.getByText(/What Sets Us Apart/i)
      fireEvent.click(whatSetsUsApartButton)
      
      expect(screen.getAllByText(/Founder-Led Team/i)).toHaveLength(2)
      expect(screen.getAllByText(/Relentless Pursuit/i)).toHaveLength(1)
      expect(screen.getAllByText(/Dedicated to Impact/i)).toHaveLength(1)
    })
  })
}) 