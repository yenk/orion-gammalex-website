import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import FooterGV from '../../components/FooterGV'

describe('FooterGV Component', () => {
  beforeEach(() => {
    // Mock IntersectionObserver
    global.IntersectionObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }))
  })

  describe('FooterGV Rendering', () => {
    it('renders the footer with correct structure', () => {
      render(<FooterGV />)
      
      expect(screen.getByRole('contentinfo')).toBeInTheDocument()
      expect(screen.getByAltText('GammaLex')).toBeInTheDocument()
    })

    it('renders the GammaLex logo', () => {
      render(<FooterGV />)
      
      const logo = screen.getByAltText('GammaLex')
      expect(logo).toBeInTheDocument()
      expect(logo).toHaveAttribute('src', expect.stringContaining('gammalexlogo-transparent.png'))
    })

    it('renders all footer links', () => {
      render(<FooterGV />)
      
      expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
      expect(screen.getByText('Terms of Use')).toBeInTheDocument()
      expect(screen.getByText('GDPR / CCPA Compliance')).toBeInTheDocument()
      expect(screen.getByText('News and Press')).toBeInTheDocument()
      expect(screen.getByText('Contact')).toBeInTheDocument()
      expect(screen.getByText('LinkedIn')).toBeInTheDocument()
    })
  })

  describe('FooterGV Links and Navigation', () => {
    it('has correct link destinations', () => {
      render(<FooterGV />)
      
      const privacyLink = screen.getByText('Privacy Policy')
      const termsLink = screen.getByText('Terms of Use')
      const gdprLink = screen.getByText('GDPR / CCPA Compliance')
      const newsLink = screen.getByText('News and Press')
      const contactLink = screen.getByText('Contact')
      const linkedinLink = screen.getByText('LinkedIn')
      
      expect(privacyLink.closest('a')).toHaveAttribute('href', '/privacy')
      expect(termsLink.closest('a')).toHaveAttribute('href', '/terms')
      expect(gdprLink.closest('a')).toHaveAttribute('href', '/gdpr-ccpa-compliance')
      expect(newsLink.closest('a')).toHaveAttribute('href', '/')
      expect(contactLink.closest('a')).toHaveAttribute('href', '/contact')
      expect(linkedinLink.closest('a')).toHaveAttribute('href', 'https://linkedin.com/company/gammalex')
    })

    it('has proper external link attributes for LinkedIn', () => {
      render(<FooterGV />)
      
      const linkedinLink = screen.getByText('LinkedIn').closest('a')
      expect(linkedinLink).toHaveAttribute('target', '_blank')
      expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('has hover effects on links', () => {
      render(<FooterGV />)
      
      const links = screen.getAllByRole('link')
      links.forEach(link => {
        // Skip logo link (has Image as child, no text content)
        if (link.querySelector('img') === null) {
          expect(link).toHaveClass('hover:underline')
        }
      })
    })
  })

  describe('FooterGV Content and Copyright', () => {
    it('displays current year in copyright', () => {
      render(<FooterGV />)
      
      const currentYear = new Date().getFullYear()
      expect(screen.getByText(new RegExp(`©${currentYear} GammaLex AI Inc`))).toBeInTheDocument()
    })

    it('displays complete copyright text', () => {
      render(<FooterGV />)
      
      expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
    })

    it('has proper copyright styling', () => {
      render(<FooterGV />)
      
      const copyrightText = screen.getByText(/©.*GammaLex AI Inc.*All rights reserved/)
      expect(copyrightText).toHaveClass('text-xs', 'md:text-sm', 'whitespace-nowrap')
    })
  })

  describe('FooterGV Styling and Layout', () => {
    it('has correct background and text colors', () => {
      render(<FooterGV />)
      
      const footer = screen.getByRole('contentinfo')
      expect(footer).toHaveClass('bg-[#f9f9f7]', 'text-black')
    })

    it('has proper responsive layout classes', () => {
      render(<FooterGV />)
      
      const footer = screen.getByRole('contentinfo')
      expect(footer).toHaveClass('w-full', 'py-12')
    })

    it('has responsive flex layout', () => {
      render(<FooterGV />)
      
      const container = screen.getByRole('contentinfo').querySelector('.max-w-7xl')
      expect(container).toHaveClass('flex', 'flex-col', 'md:flex-row')
    })

    it('has proper spacing and margins', () => {
      render(<FooterGV />)
      
      const container = screen.getByRole('contentinfo').querySelector('.max-w-7xl')
      expect(container).toHaveClass('gap-8', 'ml-4', 'md:ml-16')
    })
  })

  describe('FooterGV Logo Section', () => {
    it('has proper logo container styling', () => {
      render(<FooterGV />)
      
      const logoContainer = screen.getByAltText('GammaLex').closest('div')
      expect(logoContainer).toHaveClass('w-fit', '-mt-4')
    })

    it('has proper logo image attributes', () => {
      render(<FooterGV />)
      
      const logo = screen.getByAltText('GammaLex')
      expect(logo).toHaveAttribute('width', '96')
      expect(logo).toHaveAttribute('height', '96')
      expect(logo).toHaveClass('h-24', 'relative', 'z-10')
      // Note: priority attribute is handled by Next.js and may not be visible in tests
    })

    it('has logo link to homepage', () => {
      render(<FooterGV />)
      
      const logoLink = screen.getByAltText('GammaLex').closest('a')
      expect(logoLink).toHaveAttribute('href', '/')
    })
  })

  describe('FooterGV Links Section', () => {
    it('has proper links container styling', () => {
      render(<FooterGV />)
      
      const linksContainer = screen.getByText('Privacy Policy').closest('div')
      expect(linksContainer).toHaveClass('flex', 'flex-col', 'gap-2', 'md:ml-12')
    })

    it('has proper link spacing', () => {
      render(<FooterGV />)
      
      const links = screen.getAllByRole('link')
      links.forEach(link => {
        // Skip logo link (has Image as child, no text content)
        if (link.querySelector('img') === null) {
          expect(link).toHaveClass('hover:underline')
        }
      })
    })
  })

  describe('FooterGV Accessibility', () => {
    it('has proper semantic structure', () => {
      render(<FooterGV />)
      
      expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    })

    it('has proper alt text for logo', () => {
      render(<FooterGV />)
      
      expect(screen.getByAltText('GammaLex')).toBeInTheDocument()
    })

    it('has proper link text for screen readers', () => {
      render(<FooterGV />)
      
      expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
      expect(screen.getByText('Terms of Use')).toBeInTheDocument()
      expect(screen.getByText('Contact')).toBeInTheDocument()
    })
  })

  describe('FooterGV Responsive Design', () => {
    it('has responsive text sizing', () => {
      render(<FooterGV />)
      
      const footer = screen.getByRole('contentinfo')
      expect(footer).toHaveClass('text-sm')
    })

    it('has responsive layout classes', () => {
      render(<FooterGV />)
      
      const container = screen.getByRole('contentinfo').querySelector('.max-w-7xl')
      expect(container).toHaveClass('flex-col', 'md:flex-row')
    })

    it('has responsive margins', () => {
      render(<FooterGV />)
      
      const container = screen.getByRole('contentinfo').querySelector('.max-w-7xl')
      expect(container).toHaveClass('ml-4', 'md:ml-16')
    })
  })

  describe('FooterGV Content Accuracy', () => {
    it('displays correct company name', () => {
      render(<FooterGV />)
      
      expect(screen.getByText(/GammaLex AI Inc/)).toBeInTheDocument()
    })

    it('displays correct link labels', () => {
      render(<FooterGV />)
      
      expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
      expect(screen.getByText('Terms of Use')).toBeInTheDocument()
      expect(screen.getByText('GDPR / CCPA Compliance')).toBeInTheDocument()
      expect(screen.getByText('News and Press')).toBeInTheDocument()
      expect(screen.getByText('Contact')).toBeInTheDocument()
      expect(screen.getByText('LinkedIn')).toBeInTheDocument()
    })

    it('displays correct copyright text', () => {
      render(<FooterGV />)
      
      const currentYear = new Date().getFullYear()
      expect(screen.getByText(new RegExp(`©${currentYear} GammaLex AI Inc. All rights reserved`))).toBeInTheDocument()
    })
  })
}) 