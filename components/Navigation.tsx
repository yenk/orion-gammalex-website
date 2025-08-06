"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { JoinWaitlistModal } from './JoinWaitlistModal'

interface NavItem {
  id: string
  label: string
  hasDropdown?: boolean
  external?: boolean
}

interface DropdownItem {
  id: string
  label: string
  description: string
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolled, setIsScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  // Separate dropdown state for each nav item

  const [isWhyGammaLexDropdownOpen, setIsWhyGammaLexDropdownOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isIntegrityDropdownOpen, setIsIntegrityDropdownOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  
  // Mobile dropdown states
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { id: "the-mission", label: "WHY GAMMALEX", hasDropdown: true },
    { id: "product", label: "PRODUCT", hasDropdown: true },
    { id: "integrity", label: "INTEGRITY", hasDropdown: true },
    { id: "company", label: "COMPANY", hasDropdown: true },
    { id: "join", label: "PARTNER WITH US" },
  ];

  const whyGammaLexDropdown: DropdownItem[] = [
    { id: "what-we-do", label: "What We Do", description: "" },
    { id: "problems-we-solve", label: "Problems We Solve", description: "" },
    { id: "how-we-do-it", label: "How We Do It", description: "" },
    { id: "impact", label: "Impact", description: "" },
  ];



  const productDropdown: DropdownItem[] = [
    { id: "application", label: "Vertical AI Suite", description: "" },
  ];





  const integrityDropdown: DropdownItem[] = [
    { id: "responsible-ai", label: "Ethical AI", description: "" },
    { id: "trust-compliance", label: "Trust & Compliance", description: "" },
  ];

  const companyDropdown: DropdownItem[] = [
    { id: "about", label: "About Us", description: "" },
    { id: "advisory-council", label: "Advisory Council", description: "" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    console.log('scrollToSection called with:', sectionId)
    
    // Handle special cases for external pages
    if (sectionId === 'impact') {
      window.location.href = '/impact'
      return
    }
    
    if (sectionId === 'problems-we-solve') {
      window.location.href = '/problemswesolve'
      return
    }
    
    if (sectionId === 'what-we-do') {
      window.location.href = '/whatwedo'
      return
    }
    
    if (sectionId === 'how-we-do-it') {
      window.location.href = '/howwedoit'
      return
    }
    
    if (sectionId === 'responsible-ai') {
      window.location.href = '/ethical-ai'
      return
    }
    
    if (sectionId === 'trust-compliance') {
      window.location.href = '/trust-compliance'
      return
    }
    
    if (sectionId === 'about') {
      window.location.href = '/about'
      return
    }
    
    if (sectionId === 'advisory-council') {
      window.location.href = '/advisory-council'
      return
    }
    
    if (sectionId === 'join') {
      window.location.href = 'https://cal.com/yenkha'
      return
    }
    
    if (sectionId === 'application') {
      window.location.href = '/application'
      return
    }
    
    const element = document.getElementById(sectionId)
    console.log('Found element:', element)
    if (element) {
      // Account for fixed navigation header height
      const headerHeight = 80 // Approximate header height
      const elementPosition = element.offsetTop - headerHeight
      console.log('Scrolling to position:', elementPosition)
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      })
    } else {
      console.log('Element not found for section:', sectionId)
    }
    setIsOpen(false)
    setMobileDropdownOpen(null)
  }

  const handleNavClick = (item: NavItem) => {
    if (item.external) {
      window.location.href = `/${item.id}`
    } else {
      scrollToSection(item.id)
    }
    setIsOpen(false)
  }

  const toggleMobileDropdown = (itemId: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === itemId ? null : itemId)
  }

  const getDropdownItems = (itemId: string): DropdownItem[] => {
    switch (itemId) {
      case 'the-mission':
        return whyGammaLexDropdown
      case 'product':
        return productDropdown
      case 'integrity':
        return integrityDropdown
      case 'company':
        return companyDropdown
      default:
        return []
    }
  }

  return (
    <>
      {/* Actual Navigation Bar */}
      <motion.nav
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "glass border-b border-white/10 backdrop-blur-md"
            : "glass-dark backdrop-blur-sm"
        } font-inter`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-none px-4 sm:px-8 lg:px-16">
          <div className="flex items-center h-16 sm:h-20 justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center cursor-pointer"
              onClick={() => window.location.href = '/'}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/gammalexlogo-transparent.png"
                alt="GammaLex Logo"
                style={{ filter: 'brightness(0) invert(1)' }}
                className={`transition-all duration-300 h-20 sm:h-24 lg:h-32 max-w-none`}
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-4 lg:space-x-6 xl:space-x-8 2xl:space-x-10">
                {navItems.map((item) => (
                  <div key={item.id} className="relative">
                    {item.hasDropdown ? (
                      <div
                        className="relative"
                        onMouseEnter={() => {
                                                          if (item.id === 'the-mission') setIsWhyGammaLexDropdownOpen(true);
                            if (item.id === 'product') setIsProductDropdownOpen(true);
                            if (item.id === 'integrity') setIsIntegrityDropdownOpen(true);
                            if (item.id === 'company') setIsCompanyDropdownOpen(true);
                        }}
                        onMouseLeave={() => {
                                                          if (item.id === 'the-mission') setIsWhyGammaLexDropdownOpen(false);
                            if (item.id === 'product') setIsProductDropdownOpen(false);
                            if (item.id === 'integrity') setIsIntegrityDropdownOpen(false);
                            if (item.id === 'company') setIsCompanyDropdownOpen(false);
                        }}
                      >
                        <motion.button
                          onClick={() => scrollToSection(item.id)}
                          className="text-xs lg:text-sm xl:text-base 2xl:text-lg font-medium text-white font-inter transition-colors whitespace-nowrap"
                          whileHover={{ y: -2 }}
                        >
                          {item.label}
                        </motion.button>
                        {/* Dropdown Menu */}
                        <AnimatePresence key={`dropdown-${item.id}`}>


                          {item.id === 'the-mission' && isWhyGammaLexDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -10, scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                              className="absolute top-full left-0 mt-2 w-72 xl:w-80 bg-black/90 backdrop-blur-md border border-white/30 rounded-xl shadow-2xl z-50"
                            >
                              <div className="p-4 space-y-2">
                                {whyGammaLexDropdown.map((dropdownItem) => (
                                  <motion.button
                                    key={`why-gammalex-${dropdownItem.id}`}
                                    onClick={() => {
                                      console.log('Clicked dropdown item:', dropdownItem.id)
                                      scrollToSection(dropdownItem.id)
                                      setIsWhyGammaLexDropdownOpen(false)
                                    }}
                                    className="w-full text-left p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                                    whileHover={{ x: 4 }}
                                  >
                                    <div className="flex items-center justify-between">
                                      <div className="flex-1">
                                        <div className="text-white font-medium text-base xl:text-lg group-hover:text-gammalex-purple transition-colors">
                                          {dropdownItem.label}
                                        </div>
                                        {dropdownItem.description && (
                                          <div className="text-white/60 text-xs xl:text-sm mt-1 group-hover:text-white/80 transition-colors">
                                            {dropdownItem.description}
                                          </div>
                                        )}
                                      </div>
                                      <div className="text-white/40 group-hover:text-gammalex-purple transition-colors">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                      </div>
                                    </div>
                                  </motion.button>
                                ))}
                              </div>
                            </motion.div>
                          )}
                          {item.id === 'product' && isProductDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -10, scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                              className="absolute top-full left-0 mt-2 w-72 xl:w-80 bg-black/90 backdrop-blur-md border border-white/30 rounded-xl shadow-2xl z-50"
                            >
                              <div className="p-4 space-y-2">
                                {productDropdown.map((dropdownItem) => (
                                  <motion.button
                                    key={`product-${dropdownItem.id}`}
                                    onClick={() => {
                                      scrollToSection(dropdownItem.id)
                                      setIsProductDropdownOpen(false)
                                    }}
                                    className="w-full text-left p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                                    whileHover={{ x: 4 }}
                                  >
                                    <div className="flex items-center justify-between">
                                      <div className="flex-1">
                                        <div className="text-white font-medium text-base xl:text-lg group-hover:text-gammalex-purple transition-colors">
                                          {dropdownItem.label}
                                        </div>
                                        {dropdownItem.description && (
                                          <div className="text-white/60 text-xs xl:text-sm mt-1 group-hover:text-white/80 transition-colors">
                                            {dropdownItem.description}
                                          </div>
                                        )}
                                      </div>
                                      <div className="text-white/40 group-hover:text-gammalex-purple transition-colors">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                      </div>
                                    </div>
                                  </motion.button>
                                ))}
                              </div>
                            </motion.div>
                          )}

                          {item.id === 'integrity' && isIntegrityDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -10, scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                              className="absolute top-full left-0 mt-2 w-72 xl:w-80 bg-black/90 backdrop-blur-md border border-white/30 rounded-xl shadow-2xl z-50"
                            >
                              <div className="p-4 space-y-2">
                                {integrityDropdown.map((dropdownItem) => (
                                  <motion.button
                                    key={`integrity-${dropdownItem.id}`}
                                    onClick={() => {
                                      scrollToSection(dropdownItem.id)
                                      setIsIntegrityDropdownOpen(false)
                                    }}
                                    className="w-full text-left p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                                    whileHover={{ x: 4 }}
                                  >
                                    <div className="flex items-center justify-between">
                                      <div className="flex-1">
                                        <div className="text-white font-medium text-base xl:text-lg group-hover:text-gammalex-purple transition-colors">
                                          {dropdownItem.label}
                                        </div>
                                        {dropdownItem.description && (
                                          <div className="text-white/60 text-xs xl:text-sm mt-1 group-hover:text-white/80 transition-colors">
                                            {dropdownItem.description}
                                          </div>
                                        )}
                                      </div>
                                      <div className="text-white/40 group-hover:text-gammalex-purple transition-colors">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                      </div>
                                    </div>
                                  </motion.button>
                                ))}
                              </div>
                            </motion.div>
                          )}

                          {item.id === 'company' && isCompanyDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -10, scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                              className="absolute top-full left-0 mt-2 w-72 xl:w-80 bg-black/90 backdrop-blur-md border border-white/30 rounded-xl shadow-2xl z-50"
                            >
                              <div className="p-4 space-y-2">
                                {companyDropdown.map((dropdownItem) => (
                                  <motion.button
                                    key={`company-${dropdownItem.id}`}
                                    onClick={() => {
                                      scrollToSection(dropdownItem.id)
                                      setIsCompanyDropdownOpen(false)
                                    }}
                                    className="w-full text-left p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                                    whileHover={{ x: 4 }}
                                  >
                                    <div className="flex items-center justify-between">
                                      <div className="flex-1">
                                        <div className="text-white font-medium text-base xl:text-lg group-hover:text-gammalex-purple transition-colors">
                                          {dropdownItem.label}
                                        </div>
                                        {dropdownItem.description && (
                                          <div className="text-white/60 text-xs xl:text-sm mt-1 group-hover:text-white/80 transition-colors">
                                            {dropdownItem.description}
                                          </div>
                                        )}
                                      </div>
                                      <div className="text-white/40 group-hover:text-gammalex-purple transition-colors">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                      </div>
                                    </div>
                                  </motion.button>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <motion.button
                        onClick={() => handleNavClick(item)}
                        className="text-xs lg:text-sm xl:text-base 2xl:text-lg font-medium text-white font-inter transition-colors whitespace-nowrap"
                        whileHover={{ y: -2 }}
                      >
                        {item.label}
                      </motion.button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2"
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle mobile menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden"
              >
                <div className="py-4 space-y-2">
                  {navItems.map((item) => (
                    <div key={item.id}>
                      {item.hasDropdown ? (
                        <div>
                          <button
                            onClick={() => toggleMobileDropdown(item.id)}
                            className="block w-full text-left text-lg font-medium text-white font-inter py-3 px-4 transition-colors"
                          >
                            {item.label}
                          </button>
                          <AnimatePresence>
                            {mobileDropdownOpen === item.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="ml-4 border-l border-white/20"
                              >
                                <div className="space-y-1 py-2">
                                  {getDropdownItems(item.id).map((dropdownItem) => (
                                    <button
                                      key={`mobile-${item.id}-${dropdownItem.id}`}
                                      onClick={() => scrollToSection(dropdownItem.id)}
                                      className="block w-full text-left text-base font-medium text-white/80 font-inter py-2 px-4 transition-colors hover:text-white"
                                    >
                                      <div className="text-sm">{dropdownItem.label}</div>
                                      <div className="text-xs text-white/60 mt-1">{dropdownItem.description}</div>
                                    </button>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleNavClick(item)}
                          className="block w-full text-left text-lg font-medium text-white font-inter py-3 px-4 transition-colors"
                        >
                          {item.label}
                        </button>
                      )}
                    </div>
                  ))}
                  <div className="pt-4 border-t border-white/20 mt-4">
                    <JoinWaitlistModal
                      trigger={
                        <Button className="bg-gammalex-purple hover:bg-gammalex-purple-light text-white font-normal w-full py-4 text-lg rounded-xl hover-glow transition-all">
                          Request a Demo
                        </Button>
                      }
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  )
} 