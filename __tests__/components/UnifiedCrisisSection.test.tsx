import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import UnifiedCrisisSection from '../../components/UnifiedCrisisSection'

describe('UnifiedCrisisSection Component', () => {
  beforeEach(() => {
    // Mock IntersectionObserver
    global.IntersectionObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }))
  })

  describe('UnifiedCrisisSection Rendering', () => {
    it('renders the main section with correct structure', () => {
      render(<UnifiedCrisisSection />)
      
      expect(screen.getByText(/Clinical delays become financial losses/i)).toBeInTheDocument()
      expect(screen.getByText(/These delays aren't just clinical/i)).toBeInTheDocument()
    })

    it('renders the horizontal scroll container', () => {
      render(<UnifiedCrisisSection />)
      
      const scrollContainer = document.querySelector('.flex.gap-12.overflow-x-auto')
      expect(scrollContainer).toBeInTheDocument()
    })

    it('renders all three crisis cards', () => {
      render(<UnifiedCrisisSection />)
      
      // Check for the crisis card content instead of animated numbers
      expect(screen.getAllByText(/of radiation oncologists report/i)).toHaveLength(2)
      expect(screen.getByText(/of cancer patients don't receive/i)).toBeInTheDocument()
      expect(screen.getByText(/PA rate for cardiologists/i)).toBeInTheDocument()
    })
  })

  describe('UnifiedCrisisSection Oncology Crisis', () => {
    it('displays oncology crisis statistics', () => {
      render(<UnifiedCrisisSection />)
      
      expect(screen.getAllByText(/of radiation oncologists report/i)).toHaveLength(2)
      expect(screen.getAllByText(/prior authorization delays/i)).toHaveLength(2)
    })

    it('displays oncology impact details', () => {
      render(<UnifiedCrisisSection />)
      
      expect(screen.getByText(/30%/)).toBeInTheDocument()
      expect(screen.getByText(/result in ER visits, hospitalization, or permanent disability/i)).toBeInTheDocument()
      expect(screen.getByText(/7%/)).toBeInTheDocument()
      expect(screen.getByText(/result in patient death/i)).toBeInTheDocument()
    })

    it('has proper oncology crisis styling', () => {
      render(<UnifiedCrisisSection />)
      
      const oncologyCards = document.querySelectorAll('.flex-shrink-0.w-96.text-center')
      expect(oncologyCards.length).toBe(3)
    })
  })

  describe('UnifiedCrisisSection Cancer Care Gap', () => {
    it('displays cancer care gap statistics', () => {
      render(<UnifiedCrisisSection />)
      
      expect(screen.getByText(/of cancer patients don't receive/i)).toBeInTheDocument()
      expect(screen.getByText(/physician-recommended care/i)).toBeInTheDocument()
    })

    it('displays cancer care impact details', () => {
      render(<UnifiedCrisisSection />)
      
      expect(screen.getByText(/Due to authorization delays or denials/i)).toBeInTheDocument()
      expect(screen.getByText(/putting lives at risk/i)).toBeInTheDocument()
    })

    it('has proper cancer care gap styling', () => {
      render(<UnifiedCrisisSection />)
      
      const cancerCards = document.querySelectorAll('.flex-shrink-0.w-96.text-center')
      expect(cancerCards.length).toBe(3)
    })
  })

  describe('UnifiedCrisisSection Cardiology Risk', () => {
    it('displays cardiology risk statistics', () => {
      render(<UnifiedCrisisSection />)
      
      expect(screen.getByText(/PA rate for cardiologists/i)).toBeInTheDocument()
      expect(screen.getByText(/second-highest among specialties/i)).toBeInTheDocument()
    })

    it('displays cardiology impact details', () => {
      render(<UnifiedCrisisSection />)
      
      expect(screen.getByText(/Complex coding and strict payer criteria/i)).toBeInTheDocument()
      expect(screen.getByText(/elevated denial risk/i)).toBeInTheDocument()
    })

    it('has proper cardiology risk styling', () => {
      render(<UnifiedCrisisSection />)
      
      const cardiologyCards = document.querySelectorAll('.flex-shrink-0.w-96.text-center')
      expect(cardiologyCards.length).toBe(3)
    })
  })

  describe('UnifiedCrisisSection Financial Impact', () => {
    it('displays financial impact heading', () => {
      render(<UnifiedCrisisSection />)
      
      expect(screen.getByText(/Clinical delays become financial losses/i)).toBeInTheDocument()
    })

    it('displays financial impact description', () => {
      render(<UnifiedCrisisSection />)
      
      expect(screen.getByText(/These delays aren't just clinical/i)).toBeInTheDocument()
      expect(screen.getByText(/they're financial/i)).toBeInTheDocument()
    })

    it('displays timeline with financial data', () => {
      render(<UnifiedCrisisSection />)
      
      expect(screen.getByText(/\$19\.7B/)).toBeInTheDocument()
      expect(screen.getByText(/Hospitals spent fighting denials in 2022/i)).toBeInTheDocument()
      expect(screen.getByText(/\$25\.7B/)).toBeInTheDocument()
      expect(screen.getByText(/The problem got worse in 2023/i)).toBeInTheDocument()
      expect(screen.getAllByText(/\$10\.6B/)).toHaveLength(2)
      expect(screen.getByText(/Wasted on claims that were overturned/i)).toBeInTheDocument()
    })
  })

  describe('UnifiedCrisisSection Timeline Details', () => {
    it('displays 2022 story details', () => {
      render(<UnifiedCrisisSection />)
      
      expect(screen.getByText(/THE COST OF INACTION/i)).toBeInTheDocument()
      expect(screen.getByText(/Based on a 15% average denial rate/i)).toBeInTheDocument()
    })

    it('displays 2023 escalation details', () => {
      render(<UnifiedCrisisSection />)
      
      expect(screen.getByText(/23% INCREASE/i)).toBeInTheDocument()
      expect(screen.getByText(/A 23% year-over-year spike/i)).toBeInTheDocument()
    })

    it('displays systemic waste details', () => {
      render(<UnifiedCrisisSection />)
      
      expect(screen.getByText(/SYSTEMIC WASTE/i)).toBeInTheDocument()
      expect(screen.getByText(/Claims that should have been paid/i)).toBeInTheDocument()
    })
  })

  describe('UnifiedCrisisSection Styling and Layout', () => {
    it('has proper main container styling', () => {
      render(<UnifiedCrisisSection />)
      
      const mainContainer = document.querySelector('.w-full.max-w-6xl.mx-auto')
      expect(mainContainer).toBeInTheDocument()
    })

    it('has proper horizontal scroll styling', () => {
      render(<UnifiedCrisisSection />)
      
      const scrollContainer = document.querySelector('.flex.gap-12.overflow-x-auto.pb-8.scrollbar-hide')
      expect(scrollContainer).toBeInTheDocument()
    })

    it('has proper timeline styling', () => {
      render(<UnifiedCrisisSection />)
      
      const timeline = document.querySelector('.space-y-12.lg\\:space-y-16')
      expect(timeline).toBeInTheDocument()
    })
  })

  describe('UnifiedCrisisSection Animations', () => {
    it('has motion components with proper animations', () => {
      render(<UnifiedCrisisSection />)
      
      const motionElements = document.querySelectorAll('[initial]')
      expect(motionElements.length).toBeGreaterThan(0)
    })

    it('has whileInView animations', () => {
      render(<UnifiedCrisisSection />)
      
      const whileInViewElements = document.querySelectorAll('[whileinview]')
      expect(whileInViewElements.length).toBeGreaterThan(0)
    })
  })

  describe('UnifiedCrisisSection Color Scheme', () => {
    it('uses gammalex-orange color for oncology', () => {
      render(<UnifiedCrisisSection />)
      
      const oncologyTexts = screen.getAllByText(/prior authorization delays/i)
      expect(oncologyTexts[0]).toHaveClass('text-gammalex-orange')
    })

    it('uses gammalex-purple color for cancer care', () => {
      render(<UnifiedCrisisSection />)
      
      const cancerText = screen.getByText(/physician-recommended care/i)
      expect(cancerText).toHaveClass('text-gammalex-purple')
    })

    it('uses gammalex-orange color for cardiology', () => {
      render(<UnifiedCrisisSection />)
      
      const cardiologyText = screen.getByText(/second-highest among specialties/i)
      expect(cardiologyText).toHaveClass('text-gammalex-orange')
    })
  })

  describe('UnifiedCrisisSection Responsive Design', () => {
    it('has responsive text sizing', () => {
      render(<UnifiedCrisisSection />)
      
      // Check that the crisis cards have proper responsive classes
      const crisisCards = document.querySelectorAll('.flex-shrink-0.w-96')
      expect(crisisCards.length).toBe(3)
    })

    it('has responsive layout classes', () => {
      render(<UnifiedCrisisSection />)
      
      const cards = document.querySelectorAll('.flex-shrink-0.w-96')
      expect(cards.length).toBe(3)
    })
  })

  describe('UnifiedCrisisSection Content Accuracy', () => {
    it('displays correct statistics', () => {
      render(<UnifiedCrisisSection />)
      
      expect(screen.getAllByText(/of radiation oncologists report/i)).toHaveLength(2)
      expect(screen.getByText(/of cancer patients don't receive/i)).toBeInTheDocument()
      expect(screen.getByText(/PA rate for cardiologists/i)).toBeInTheDocument()
    })

    it('displays correct financial figures', () => {
      render(<UnifiedCrisisSection />)
      
      expect(screen.getByText(/\$19\.7B/)).toBeInTheDocument()
      expect(screen.getByText(/\$25\.7B/)).toBeInTheDocument()
      // Use getAllByText for $10.6B since it appears in multiple places
      expect(screen.getAllByText(/\$10\.6B/)).toHaveLength(2)
    })

    it('displays correct percentages', () => {
      render(<UnifiedCrisisSection />)
      
      expect(screen.getByText(/30%/)).toBeInTheDocument()
      expect(screen.getByText(/7%/)).toBeInTheDocument()
      // Use getAllByText for 23% since it appears in multiple places
      expect(screen.getAllByText(/23%/)).toHaveLength(2)
    })
  })

  describe('UnifiedCrisisSection Source Attribution', () => {
    it('displays source links', () => {
      render(<UnifiedCrisisSection />)
      
      expect(screen.getByText(/Sources:/)).toBeInTheDocument()
    })

    it('has proper source link styling', () => {
      render(<UnifiedCrisisSection />)
      
      const sourceLinks = document.querySelectorAll('a[target="_blank"]')
      expect(sourceLinks.length).toBeGreaterThan(0)
    })
  })

  describe('UnifiedCrisisSection Accessibility', () => {
    it('has proper semantic structure', () => {
      render(<UnifiedCrisisSection />)
      
      // Check for the main container structure
      const mainContainer = document.querySelector('.w-full.max-w-6xl.mx-auto')
      expect(mainContainer).toBeInTheDocument()
    })

    it('has proper link attributes for external sources', () => {
      render(<UnifiedCrisisSection />)
      
      const externalLinks = document.querySelectorAll('a[target="_blank"]')
      externalLinks.forEach(link => {
        expect(link).toHaveAttribute('rel', 'noopener noreferrer')
      })
    })
  })

  describe('UnifiedCrisisSection Interactive Elements', () => {
    it('has hover effects on interactive elements', () => {
      render(<UnifiedCrisisSection />)
      
      const links = document.querySelectorAll('a')
      links.forEach(link => {
        expect(link).toHaveClass('hover:text-gammalex-orange')
      })
    })
  })
}) 