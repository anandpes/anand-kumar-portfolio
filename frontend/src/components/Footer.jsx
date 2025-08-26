import React from 'react';
import { portfolioData } from '../data/mock';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const { personal, contact } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#302f2c] border-t border-[#3f4816]">
      <div className="max-w-[87.5rem] mx-auto px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand & Description */}
          <div>
            <h3 className="text-[#d9fb06] text-2xl font-black mb-4">
              {personal.name}
            </h3>
            <p className="text-[#888680] mb-6 leading-relaxed">
              {personal.title} passionate about transforming businesses through innovative technology solutions.
            </p>
            <div className="bg-[#3f4816] text-[#d9fb06] px-4 py-2 rounded-full text-sm font-medium w-fit">
              {contact.availability}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#d9fb06] font-bold mb-6 uppercase tracking-wide">
              Quick Links
            </h4>
            <div className="space-y-3">
              {[
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Experience', href: '#experience' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-[#888680] hover:text-[#d9fb06] transition-colors duration-300 text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#d9fb06] font-bold mb-6 uppercase tracking-wide">
              Contact Information
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#d9fb06]" />
                <a 
                  href={`mailto:${contact.email}`}
                  className="text-[#888680] hover:text-[#d9fb06] transition-colors text-sm"
                >
                  {contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#d9fb06]" />
                <a 
                  href={`tel:${contact.phone}`}
                  className="text-[#888680] hover:text-[#d9fb06] transition-colors text-sm"
                >
                  {contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-[#d9fb06]" />
                <span className="text-[#888680] text-sm">
                  {contact.location}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#3f4816] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[#888680] text-sm text-center md:text-left">
              <p>© {currentYear} {personal.name}. All rights reserved.</p>
              <p className="mt-1">
                Built with React & FastAPI | Designed for Innovation
              </p>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-[#d9fb06] hover:text-[rgba(217,251,6,0.8)] transition-all duration-300 group"
            >
              <span className="text-sm font-medium uppercase tracking-wide">Back to Top</span>
              <ArrowUp 
                size={16} 
                className="group-hover:transform group-hover:-translate-y-1 transition-transform" 
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;