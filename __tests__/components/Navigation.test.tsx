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
    expect(screen.getByText('WHAT WE\'RE SOLVING')).toBeInTheDocument()
    expect(screen.getByText('WHY WE WIN')).toBeInTheDocument()
    expect(screen.getByText('HOW GAMMALEX WORKS')).toBeInTheDocument()
    expect(screen.getByText('WHO WE EMPOWER')).toBeInTheDocument()
    expect(screen.getByText('ABOUT')).toBeInTheDocument()
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

  it('handles logo click to scroll to hero section', () => {
    render(<Navigation />)
    
    const logo = screen.getByAltText('GammaLex Logo')
    fireEvent.click(logo)
    
    expect(document.getElementById).toHaveBeenCalledWith('hero')
  })

  it('handles navigation item clicks', () => {
    render(<Navigation />)
    
    const aboutLink = screen.getByText('ABOUT')
    fireEvent.click(aboutLink)
    
    expect(document.getElementById).toHaveBeenCalledWith('about')
  })

  it('shows dropdown menus on hover', async () => {
    render(<Navigation />)
    
    const crisisNumbersButton = screen.getByText('WHAT WE\'RE SOLVING')
    fireEvent.mouseEnter(crisisNumbersButton)
    
    await waitFor(() => {
      expect(screen.getByText('The Crisis Numbers')).toBeInTheDocument()
      expect(screen.getByText('The Legal Heat')).toBeInTheDocument()
      expect(screen.getByText('Our Breakthrough')).toBeInTheDocument()
    })
  })

  it('handles dropdown item clicks', async () => {
    render(<Navigation />)
    
    const crisisNumbersButton = screen.getByText('WHAT WE\'RE SOLVING')
    fireEvent.mouseEnter(crisisNumbersButton)
    
    await waitFor(() => {
      const crisisNumbersItem = screen.getByText('The Crisis Numbers')
      fireEvent.click(crisisNumbersItem)
      expect(document.getElementById).toHaveBeenCalledWith('healthcare-crisis')
    })
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
    
    // Get the mobile version of the button (second instance)
    const crisisNumbersButtons = screen.getAllByText('WHAT WE\'RE SOLVING')
    const mobileCrisisButton = crisisNumbersButtons[1] // Mobile version
    fireEvent.click(mobileCrisisButton)
    
    await waitFor(() => {
      expect(screen.getByText('The Crisis Numbers')).toBeInTheDocument()
    })
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