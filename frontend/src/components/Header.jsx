import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1c1b] border-b border-[#3f4816]">
      <div className="max-w-[87.5rem] mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-[#d9fb06] font-bold text-xl">
            Anjard Seng
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="nav-link text-[#d9fb06] hover:text-[rgba(217,251,6,0.8)] transition-all duration-300 text-base font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="nav-link text-[#d9fb06] hover:text-[rgba(217,251,6,0.8)] transition-all duration-300 text-base font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="nav-link text-[#d9fb06] hover:text-[rgba(217,251,6,0.8)] transition-all duration-300 text-base font-medium"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="nav-link text-[#d9fb06] hover:text-[rgba(217,251,6,0.8)] transition-all duration-300 text-base font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary bg-[#d9fb06] text-[#1a1c1b] border-none rounded-[10rem] px-6 py-3 font-semibold text-base cursor-pointer transition-all duration-300 hover:scale-105 hover:opacity-90 uppercase tracking-tight"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-[#d9fb06] hover:text-[rgba(217,251,6,0.8)] transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-[#3f4816] pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-[#d9fb06] hover:text-[rgba(217,251,6,0.8)] transition-all duration-300 text-base font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-[#d9fb06] hover:text-[rgba(217,251,6,0.8)] transition-all duration-300 text-base font-medium text-left"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-[#d9fb06] hover:text-[rgba(217,251,6,0.8)] transition-all duration-300 text-base font-medium text-left"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-[#d9fb06] hover:text-[rgba(217,251,6,0.8)] transition-all duration-300 text-base font-medium text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary bg-[#d9fb06] text-[#1a1c1b] border-none rounded-[10rem] px-6 py-3 font-semibold text-base cursor-pointer transition-all duration-300 hover:scale-105 hover:opacity-90 uppercase tracking-tight w-fit"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;