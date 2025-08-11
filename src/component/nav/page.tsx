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
          <div className="-ml-5 flex-shrink-0 flex flex-row">
           <Link href="/" className="flex items-center">
              <Image
              src="/image/logo2.png"
              alt="Logo"
              width={70}
              height={70}
              />
            </Link>
            <p
            className="text-xl font-bold text-blue-900 justify-center flex items-center px-2
          "
            >
              Commercial Addvertisment</p>
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
                href="/service"
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
                href="/contact"
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
              <div className="px-3 py-2">
                <span className="text-gray-700 text-base font-medium">Services</span>
                <div className="ml-4 mt-2 space-y-1">
                  <Link
                    href="/services/web-design"
                    className="text-gray-600 hover:text-blue-600 block py-1 text-sm transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Web Design
                  </Link>
                  <Link
                    href="/services/development"
                    className="text-gray-600 hover:text-blue-600 block py-1 text-sm transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Development
                  </Link>
                  <Link
                    href="/services/consulting"
                    className="text-gray-600 hover:text-blue-600 block py-1 text-sm transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Consulting
                  </Link>
                </div>
              </div>

              <Link
                href="/portfolio"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile CTA Button */}
              <div className="px-3 py-2">
                <Link
                  href="/get-started"
                  className="bg-blue-600 text-white block text-center px-4 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
