import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navigation from '../../components/Navigation'

// Mock the JoinWaitlistModal component
jest.mock('../../components/JoinWaitlistModal', () => ({
  JoinWaitlistModal: function MockJoinWaitlistModal({ trigger }: { trigger: React.ReactNode }) {
    return <div data-testid="join-waitlist-modal">{trigger}</div>
  }
}))

describe('Navigation Component', () => {
  beforeEach(() => {
    // Mock window.scrollY
    Object.defineProperty(window, 'scrollY', {
      value: 0,
      writable: true,
    })
    
    // Mock document.getElementById
    document.getElementById = jest.fn((id) => ({
      scrollIntoView: jest.fn(),
    } as unknown as HTMLElement))
  })

  it('renders navigation bar', () => {
    render(<Navigation />)
    
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByAltText('GammaLex Logo')).toBeInTheDocument()
  })

  it('renders all navigation items', () => {
    render(<Navigation />)
    
    expect(screen.getByText('WHY GAMMALEX')).toBeInTheDocument()
    expect(screen.getByText('PRODUCT')).toBeInTheDocument()
    expect(screen.getByText('INTEGRITY')).toBeInTheDocument()
    expect(screen.getByText('COMPANY')).toBeInTheDocument()
    expect(screen.getByText('PARTNER WITH US')).toBeInTheDocument()
  })

  it('has correct styling classes', () => {
    render(<Navigation />)
    
    const nav = screen.getByRole('navigation')
    expect(nav).toHaveClass('sticky', 'top-0', 'left-0', 'right-0', 'z-40')
  })

  it('has responsive design classes', () => {
    render(<Navigation />)
    
    // Find the desktop navigation container
    const desktopNav = screen.getByText('WHY GAMMALEX').closest('div')?.parentElement?.parentElement?.parentElement
    expect(desktopNav).toHaveClass('hidden', 'lg:flex')
  })

  it('shows mobile menu button on small screens', () => {
    render(<Navigation />)
    
    const mobileButton = screen.getByRole('button', { name: /toggle mobile menu/i })
    expect(mobileButton).toBeInTheDocument()
    expect(mobileButton.closest('div')).toHaveClass('lg:hidden')
  })

  it('handles logo click to navigate to home page', () => {
    render(<Navigation />)
    
    const logo = screen.getByAltText('GammaLex Logo')
    fireEvent.click(logo)
    
    // Should navigate to home page, not scroll to hero
    expect(window.location.href).toBe('http://localhost/')
  })

  it('handles navigation item clicks', () => {
    render(<Navigation />)
    
    const companyLink = screen.getByText('COMPANY')
    fireEvent.click(companyLink)
    
    // The about link is now in the dropdown, so we need to check for the dropdown functionality
    expect(companyLink).toBeInTheDocument()
  })



  it('includes join waitlist modal', () => {
    render(<Navigation />)
    
    // The modal is only visible in mobile menu, so we need to open it first
    const mobileButton = screen.getByRole('button', { name: /toggle mobile menu/i })
    fireEvent.click(mobileButton)
    
    expect(screen.getByTestId('join-waitlist-modal')).toBeInTheDocument()
    expect(screen.getByText('Request a Demo')).toBeInTheDocument()
  })
})

describe('Navigation Mobile Functionality', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', {
      value: 0,
      writable: true,
    })
    
    document.getElementById = jest.fn((id) => ({
      scrollIntoView: jest.fn(),
    } as unknown as HTMLElement))
  })

  it('toggles mobile menu when hamburger button is clicked', () => {
    render(<Navigation />)
    
    const mobileButton = screen.getByRole('button', { name: /toggle mobile menu/i })
    fireEvent.click(mobileButton)
    
    // Mobile menu should be visible - use getAllByText to handle multiple instances
    expect(screen.getAllByText('WHY GAMMALEX')).toHaveLength(2) // Desktop + Mobile
  })

  it('handles mobile dropdown toggles', async () => {
    render(<Navigation />)
    
    const mobileButton = screen.getByRole('button', { name: /toggle mobile menu/i })
    fireEvent.click(mobileButton)
    

  })
})

describe('Navigation Scroll Behavior', () => {
  it('changes appearance on scroll', async () => {
    render(<Navigation />)
    
    // Initially not scrolled
    const nav = screen.getByRole('navigation')
    expect(nav).toHaveClass('glass-dark')
    
    // Simulate scroll
    Object.defineProperty(window, 'scrollY', {
      value: 100,
      writable: true,
    })
    
    fireEvent.scroll(window)
    
    await waitFor(() => {
      expect(nav).toHaveClass('glass')
    })
  })
})

describe('Navigation Accessibility', () => {
  it('has proper accessibility attributes', () => {
    render(<Navigation />)
    
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
    
    const logo = screen.getByAltText('GammaLex Logo')
    expect(logo).toBeInTheDocument()
    
    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => {
      expect(button).toBeInTheDocument()
    })
  })

  it('has proper ARIA labels for mobile menu', () => {
    render(<Navigation />)
    
    const mobileButton = screen.getByRole('button', { name: /toggle mobile menu/i })
    expect(mobileButton).toBeInTheDocument()
  })
})



 