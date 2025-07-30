import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProblemsMetrics from '../../components/problemswesolve/ProblemsMetrics'

describe('ProblemsMetrics Component', () => {
  beforeEach(() => {
    render(<ProblemsMetrics />)
  })

  describe('ProblemsMetrics Rendering', () => {
    it('renders without crashing', () => {
      expect(screen.getByTestId('problems-metrics')).toBeInTheDocument()
    })

    it('displays the main title', () => {
      expect(screen.getByText(/When red tape becomes a risk factor/i)).toBeInTheDocument()
    })

    it('displays the financial impact title', () => {
      expect(screen.getByText(/Clinical delays become financial losses/i)).toBeInTheDocument()
    })
  })

  describe('ProblemsMetrics Clinical Impact Section', () => {
    it('displays the radiation oncologists metric', () => {
      expect(screen.getAllByText(/of radiation oncologists report/i).length).toBeGreaterThan(0)
      expect(screen.getAllByText(/prior authorization delays/i).length).toBeGreaterThan(0)
    })

    it('displays the clinical impact details', () => {
      expect(screen.getByText(/result in ER visits/i)).toBeInTheDocument()
      expect(screen.getByText(/result in patient death/i)).toBeInTheDocument()
    })

    it('displays the cancer patients metric', () => {
      expect(screen.getByText(/of cancer patients don't receive/i)).toBeInTheDocument()
      expect(screen.getByText(/physician-recommended care/i)).toBeInTheDocument()
    })

    it('displays the cardiology metric', () => {
      expect(screen.getByText(/PA rate for cardiology/i)).toBeInTheDocument()
      expect(screen.getByText(/second-highest among specialties/i)).toBeInTheDocument()
    })
  })

  describe('ProblemsMetrics Financial Impact Section', () => {
    it('displays the $19.7B metric', () => {
      expect(screen.getByText('$19.7B')).toBeInTheDocument()
      expect(screen.getByText(/Hospitals spent fighting denials in 2022/i)).toBeInTheDocument()
    })

    it('displays the $25.7B metric', () => {
      expect(screen.getByText('$25.7B')).toBeInTheDocument()
      expect(screen.getByText(/The problem got worse in 2023/i)).toBeInTheDocument()
    })

    it('displays the $10.6B metric', () => {
      expect(screen.getByText('$10.6B')).toBeInTheDocument()
      expect(screen.getByText(/Wasted on claims that were overturned/i)).toBeInTheDocument()
    })

    it('displays the 23% increase indicator', () => {
      expect(screen.getByText(/23% INCREASE/i)).toBeInTheDocument()
    })

    it('displays the cost of inaction explanation', () => {
      expect(screen.getByText(/THE COST OF INACTION/i)).toBeInTheDocument()
      expect(screen.getByText(/Based on a 15% average denial rate/i)).toBeInTheDocument()
    })

    it('displays the systemic waste explanation', () => {
      expect(screen.getByText(/SYSTEMIC WASTE/i)).toBeInTheDocument()
      expect(screen.getByText(/Claims that should have been paid/i)).toBeInTheDocument()
    })
  })

  describe('ProblemsMetrics Styling and Layout', () => {
    it('has proper container styling', () => {
      const container = screen.getByTestId('problems-metrics')
      expect(container).toHaveClass('w-full', 'max-w-6xl', 'mx-auto')
    })

    it('has elements with proper color classes', () => {
      const orangeElements = document.querySelectorAll('.text-gammalex-purple')
      const purpleElements = document.querySelectorAll('.text-gammalex-purple')
      expect(orangeElements.length).toBeGreaterThan(0)
      expect(purpleElements.length).toBeGreaterThan(0)
    })
  })

  describe('ProblemsMetrics Animations', () => {
    it('includes motion components', () => {
      const motionElements = document.querySelectorAll('[initial]')
      expect(motionElements.length).toBeGreaterThan(0)
    })
  })

  describe('ProblemsMetrics Responsive Design', () => {
    it('has responsive text sizing classes', () => {
      const largeTextElements = document.querySelectorAll('.text-5xl, .text-6xl, .text-7xl')
      expect(largeTextElements.length).toBeGreaterThan(0)
    })
  })

  describe('ProblemsMetrics Content Accuracy', () => {
    it('displays accurate metric values', () => {
      expect(screen.getByText('$19.7B')).toBeInTheDocument()
      expect(screen.getByText('$25.7B')).toBeInTheDocument()
      expect(screen.getByText('$10.6B')).toBeInTheDocument()
    })

    it('displays accurate descriptions', () => {
      expect(screen.getAllByText(/radiation oncologists report/i).length).toBeGreaterThan(0)
      expect(screen.getByText(/cancer patients don't receive/i)).toBeInTheDocument()
      expect(screen.getByText(/PA rate for cardiology/i)).toBeInTheDocument()
    })
  })

  describe('ProblemsMetrics Source Attribution', () => {
    it('displays source links', () => {
      expect(screen.getByText(/Sources:/i)).toBeInTheDocument()
      expect(screen.getByText(/ASTRO Survey/i)).toBeInTheDocument()
      expect(screen.getAllByText(/Becker's Hospital Review/i).length).toBeGreaterThan(0)
      expect(screen.getAllByText(/Fierce Healthcare/i).length).toBeGreaterThan(0)
    })

    it('has proper link attributes', () => {
      const links = screen.getAllByRole('link')
      links.forEach(link => {
        expect(link).toHaveAttribute('target', '_blank')
        expect(link).toHaveAttribute('rel', 'noopener noreferrer')
      })
    })
  })

  describe('ProblemsMetrics Accessibility', () => {
    it('has proper heading structure', () => {
      const headings = screen.getAllByRole('heading')
      expect(headings.length).toBeGreaterThan(0)
    })

    it('has proper contrast classes', () => {
      const whiteElements = document.querySelectorAll('.text-white')
      const orangeElements = document.querySelectorAll('.text-gammalex-purple')
      const purpleElements = document.querySelectorAll('.text-gammalex-purple')
      expect(whiteElements.length + orangeElements.length + purpleElements.length).toBeGreaterThan(0)
    })
  })

  describe('ProblemsMetrics Interactive Elements', () => {
    it('has hover effects on links', () => {
      const links = screen.getAllByRole('link')
      links.forEach(link => {
        expect(link).toHaveClass(/hover:/)
      })
    })
  })
}) 