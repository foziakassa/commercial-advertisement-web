"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex flex-row items-center -ml-5">
  <Link href="/" className="flex-shrink-0 flex items-center">
    <Image
      src="/image/logo2.png"
      alt="Logo"
      width={70}
      height={70}
      className="h-auto"
    />
  </Link>
  <p
    className="text-xl font-bold text-blue-900 flex items-center px-2 md:text-2xl lg:text-lg sm:text-sm"
  >
    Commercial Advertisement
  </p>
</div>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-xl font-fancy font-medium transition-colors"
              >
                {/* Home */}
                {/* 𝖍𝖔𝖒𝖊  */}
                home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-xl font-medium transition-colors"
              >
                About
              </Link>
               <Link
                href="#service"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-xl font-medium transition-colors"
              >
                service
              </Link>

              {/* Dropdown Menu */}
              {/* <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-xl font-medium transition-colors flex items-center"
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link
                      href="/services/web-design"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Web Design
                    </Link>
                    <Link
                      href="/services/development"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Development
                    </Link>
                    <Link
                      href="/services/consulting"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Consulting
                    </Link>
                  </div>
                )}
              </div> */}

              
              <Link
                href="#contact"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-xl font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CTA Button */}
        
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              {/* Mobile Services Submenu */}
             <Link
                href="/service"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                service
              </Link>

              
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile CTA Button */}
             
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
