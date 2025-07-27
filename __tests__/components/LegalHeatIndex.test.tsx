import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import LegalHeatIndex from '../../components/LegalHeatIndex'

describe('LegalHeatIndex Component', () => {
  beforeEach(() => {
    // Mock IntersectionObserver
    global.IntersectionObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }))
  })

  describe('LegalHeatIndex Rendering', () => {
    it('renders the main section with correct structure', () => {
      render(<LegalHeatIndex />)
      
      expect(screen.getByText(/When denials become/i)).toBeInTheDocument()
      expect(screen.getByText(/lawsuits/i)).toBeInTheDocument()
      expect(screen.getByText(/Real cases where insurance denials led to massive settlements/i)).toBeInTheDocument()
    })

    it('renders the hero impact section', () => {
      render(<LegalHeatIndex />)
      
      expect(screen.getByText('$9.5M')).toBeInTheDocument()
      expect(screen.getByText(/Judge called UnitedHealthcare's denial/i)).toBeInTheDocument()
      expect(screen.getByText(/"immoral and barbaric"/i)).toBeInTheDocument()
    })

    it('renders all case cards', () => {
      render(<LegalHeatIndex />)
      
      // Check for oncology cases
      expect(screen.getByText(/UnitedHealthcare – \$9\.5M Proton Beam Therapy Settlement/i)).toBeInTheDocument()
      expect(screen.getByText(/Blue Cross Louisiana – Salim Proton Therapy Denial/i)).toBeInTheDocument()
      
      // Check for cardiology cases
      expect(screen.getByText(/St\. Joseph Medical Center – Unnecessary Stenting/i)).toBeInTheDocument()
    })
  })

  describe('LegalHeatIndex Case Details', () => {
    it('displays case summaries correctly', () => {
      render(<LegalHeatIndex />)
      
      expect(screen.getByText(/Patients denied coverage for proton beam therapy/i)).toBeInTheDocument()
      expect(screen.getByText(/Stage 4 throat cancer patient denied PBRT/i)).toBeInTheDocument()
      expect(screen.getByText(/Dr\. Mark Midei performed unnecessary drug-eluting stents/i)).toBeInTheDocument()
    })

    it('displays case metadata correctly', () => {
      render(<LegalHeatIndex />)
      
      expect(screen.getByText(/Proton Beam Therapy Class Action/i)).toBeInTheDocument()
      expect(screen.getByText(/2016-2023/i)).toBeInTheDocument()
      expect(screen.getByText(/Salim v\. BCBS Louisiana/i)).toBeInTheDocument()
      expect(screen.getByText(/2022/i)).toBeInTheDocument()
    })

    it('displays impact information', () => {
      render(<LegalHeatIndex />)
      
      // The $9.5M settlement is in the headline
      expect(screen.getByText(/UnitedHealthcare – \$9\.5M Proton Beam Therapy Settlement/i)).toBeInTheDocument()
      // The Blue Cross case impact is in the summary
      expect(screen.getByText(/Stage 4 throat cancer patient denied PBRT/i)).toBeInTheDocument()
      // The $22-37M settlement is in the case summary
      expect(screen.getByText(/Federal settlement of \$22M under False Claims Act, plus ~\$37M in separate malpractice settlements/i)).toBeInTheDocument()
    })
  })

  describe('LegalHeatIndex Interactive Elements', () => {
    it('renders source links correctly', () => {
      render(<LegalHeatIndex />)
      
      // Check for source links
      const sourceLinks = screen.getAllByText(/Read Source|ERISA Watch Analysis|Fifth Circuit Opinion|ProPublica Investigation/i)
      expect(sourceLinks.length).toBeGreaterThan(0)
    })

    it('has proper accessibility attributes', () => {
      render(<LegalHeatIndex />)
      
      // Check for proper heading structure
      const headings = screen.getAllByRole('heading')
      expect(headings.length).toBeGreaterThan(0)
      
      // Check for proper section structure
      const section = screen.getByText(/When denials become/i).closest('section')
      expect(section).toBeInTheDocument()
    })

    it('displays warning icons', () => {
      render(<LegalHeatIndex />)
      
      const warningIcons = screen.getAllByText('!')
      expect(warningIcons.length).toBeGreaterThan(0)
    })
  })

  describe('LegalHeatIndex Styling and Layout', () => {
    it('has correct CSS classes for styling', () => {
      render(<LegalHeatIndex />)
      
      const section = screen.getByText(/When denials become/i).closest('section')
      expect(section).toHaveClass('w-full', 'py-24', 'px-4', 'font-inter')
    })

    it('renders grid layout correctly', () => {
      render(<LegalHeatIndex />)
      
      // Check for grid container - find the div with grid classes
      const gridContainer = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-2')
      expect(gridContainer).toBeInTheDocument()
      expect(gridContainer).toHaveClass('grid', 'grid-cols-1', 'md:grid-cols-2')
    })

    it('has proper gradient styling', () => {
      render(<LegalHeatIndex />)
      
      const section = screen.getByText(/When denials become/i).closest('section')
      expect(section).toHaveClass('bg-gradient-to-br', 'from-black', 'via-gammalex-purple/20', 'to-black')
    })
  })

  describe('LegalHeatIndex Content Accuracy', () => {
    it('displays correct settlement amounts', () => {
      render(<LegalHeatIndex />)
      
      expect(screen.getByText('$9.5M')).toBeInTheDocument()
      // The $22-37M settlement is in the case summary text
      expect(screen.getByText(/Federal settlement of \$22M under False Claims Act, plus ~\$37M in separate malpractice settlements/i)).toBeInTheDocument()
    })

    it('displays correct case names and years', () => {
      render(<LegalHeatIndex />)
      
      expect(screen.getByText(/Proton Beam Therapy Class Action/i)).toBeInTheDocument()
      expect(screen.getByText(/Salim v\. BCBS Louisiana/i)).toBeInTheDocument()
      expect(screen.getByText(/St\. Joseph Medical Center Settlement/i)).toBeInTheDocument()
    })

    it('displays correct case summaries', () => {
      render(<LegalHeatIndex />)
      
      // Check that the case summaries contain the specialty information
      expect(screen.getByText(/Patients denied coverage for proton beam therapy/i)).toBeInTheDocument()
      expect(screen.getByText(/Stage 4 throat cancer patient denied PBRT/i)).toBeInTheDocument()
      expect(screen.getByText(/Dr\. Mark Midei performed unnecessary drug-eluting stents/i)).toBeInTheDocument()
    })
  })

  describe('LegalHeatIndex Responsive Design', () => {
    it('has responsive text classes', () => {
      render(<LegalHeatIndex />)
      
      const mainHeading = screen.getByText(/When denials become/i)
      expect(mainHeading).toHaveClass('text-3xl', 'sm:text-4xl', 'lg:text-5xl')
    })

    it('has responsive grid layout', () => {
      render(<LegalHeatIndex />)
      
      const gridContainer = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-2')
      expect(gridContainer).toBeInTheDocument()
      expect(gridContainer).toHaveClass('grid-cols-1', 'md:grid-cols-2')
    })
  })

  describe('LegalHeatIndex Animation and Interactions', () => {
    it('has motion components for animations', () => {
      render(<LegalHeatIndex />)
      
      // Check that motion components are rendered (they should have motion-specific props)
      const animatedElements = document.querySelectorAll('[initial]')
      expect(animatedElements.length).toBeGreaterThan(0)
    })

    it('has hover effects on case cards', () => {
      render(<LegalHeatIndex />)
      
      // Find all elements with the 'group' class that contain case content
      const groupElements = document.querySelectorAll('.group')
      expect(groupElements.length).toBeGreaterThan(0)
      
      // Check that at least one group element contains case content
      const hasCaseContent = Array.from(groupElements).some(element => 
        element.textContent?.includes('UnitedHealthcare') || 
        element.textContent?.includes('Blue Cross Louisiana') || 
        element.textContent?.includes('St. Joseph Medical Center')
      )
      expect(hasCaseContent).toBe(true)
    })
  })
}) 