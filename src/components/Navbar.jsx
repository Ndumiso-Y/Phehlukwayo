import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const isActive = (path) => location.pathname === path
  
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)
  
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <nav className="container-narrow flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group" onClick={closeMobileMenu}>
          <div className="relative p-2 rounded-xl bg-gradient-to-br from-primary-100 to-teal-100 group-hover:from-primary-200 group-hover:to-teal-200 transition-all duration-300 shadow-soft">
            <img 
              src={`${import.meta.env.BASE_URL}logo-light.png`}
              alt="Phehlukwayo Logo" 
              className="h-8 w-auto transition-transform group-hover:scale-105 filter brightness-0 contrast-100" 
              style={{filter: 'brightness(0) saturate(100%) invert(25%) sepia(100%) saturate(3000%) hue-rotate(200deg)'}}
            />
          </div>
          <div className="hidden xs:block">
            <div className="font-black text-lg sm:text-xl bg-gradient-to-r from-primary-700 via-primary-600 to-teal-600 bg-clip-text text-transparent">
              Phehlukwayo
            </div>
            <div className="text-xs text-gray-600 -mt-1 font-medium hidden sm:block">Chartered Accountants</div>
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          <li>
            <Link 
              to="/" 
              className={`transition-all duration-300 px-3 py-2 rounded-lg ${
                isActive('/') 
                  ? 'text-primary bg-primary/10 font-semibold' 
                  : 'text-gray-700 hover:text-primary hover:bg-primary/5'
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              className={`transition-all duration-300 px-3 py-2 rounded-lg ${
                isActive('/services') 
                  ? 'text-primary bg-primary/10 font-semibold' 
                  : 'text-gray-700 hover:text-primary hover:bg-primary/5'
              }`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`transition-all duration-300 px-3 py-2 rounded-lg ${
                isActive('/about') 
                  ? 'text-primary bg-primary/10 font-semibold' 
                  : 'text-gray-700 hover:text-primary hover:bg-primary/5'
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/partnerships" 
              className={`transition-all duration-300 px-3 py-2 rounded-lg ${
                isActive('/partnerships') 
                  ? 'text-primary bg-primary/10 font-semibold' 
                  : 'text-gray-700 hover:text-primary hover:bg-primary/5'
              }`}
            >
              Partnerships
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:scale-105 shadow-brand"
            >
              Contact
            </Link>
          </li>
        </ul>
        
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-300"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <ul className="container-narrow py-4 space-y-2">
            <li>
              <Link 
                to="/" 
                onClick={closeMobileMenu}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive('/') 
                    ? 'text-primary bg-primary/10 font-semibold' 
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                onClick={closeMobileMenu}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive('/services') 
                    ? 'text-primary bg-primary/10 font-semibold' 
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                onClick={closeMobileMenu}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive('/about') 
                    ? 'text-primary bg-primary/10 font-semibold' 
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/partnerships" 
                onClick={closeMobileMenu}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive('/partnerships') 
                    ? 'text-primary bg-primary/10 font-semibold' 
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`}
              >
                Partnerships
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                onClick={closeMobileMenu}
                className="block px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-medium text-center transition-all duration-300 hover:from-primary-700 hover:to-primary-800"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}