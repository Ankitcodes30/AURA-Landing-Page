import React, { useState, useEffect } from 'react';
import { DASHBOARD_URL, GITHUB_URL } from '../config/constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0F19]/80 backdrop-blur-xl border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-space font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              AURA
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-300 hover:text-white transition-colors font-inter"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-300 hover:text-white transition-colors font-inter"
            >
              How It Works
            </button>
            <a
              href={DASHBOARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-colors font-inter"
            >
              Dashboard
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors font-inter"
            >
              GitHub
            </a>
            <a 
              href={DASHBOARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gradient-to-r from-primary to-purple-600 rounded-lg font-inter font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105 text-white no-underline"
            >
              Live Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-white/10 pt-4">
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors font-inter"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors font-inter"
            >
              How It Works
            </button>
            <a
              href={DASHBOARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left text-gray-300 hover:text-white transition-colors font-inter"
            >
              Dashboard
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-300 hover:text-white transition-colors font-inter"
            >
              GitHub
            </a>
            <a 
              href={DASHBOARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-6 py-2.5 bg-gradient-to-r from-primary to-purple-600 rounded-lg font-inter font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all text-white no-underline text-center block"
            >
              Live Demo
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
