'use client';

import { useState, useEffect } from 'react';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'why-us' },
    { label: 'Testimonials', id: 'testimonials' },
  ];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2">
          {!logoError ? (
            <img
              src="/logo.png"
              alt="Safe Giant Movers"
              className="h-12 w-auto object-contain"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-[#1E3A5F] rounded-lg flex items-center justify-center text-white font-bold text-sm">
                SG
              </div>
              <span className={`font-bold text-lg tracking-tight ${isScrolled ? 'text-[#1E3A5F]' : 'text-white'}`}>
                Safe Giant Movers
              </span>
            </div>
          )}
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-gray-600 hover:text-[#F97316]' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('quote-form')}
            className="ml-2 px-5 py-2.5 bg-[#F97316] hover:bg-[#ea6c0a] text-white font-semibold text-sm rounded-lg transition-colors"
          >
            Get a Free Quote
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 mb-1.5 transition-all ${isScrolled ? 'bg-gray-800' : 'bg-white'}`} />
          <span className={`block w-6 h-0.5 mb-1.5 transition-all ${isScrolled ? 'bg-gray-800' : 'bg-white'}`} />
          <span className={`block w-6 h-0.5 transition-all ${isScrolled ? 'bg-gray-800' : 'bg-white'}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-left text-gray-700 font-medium py-2 border-b border-gray-50 hover:text-[#F97316]"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('quote-form')}
            className="mt-2 w-full py-3 bg-[#F97316] hover:bg-[#ea6c0a] text-white font-semibold rounded-lg transition-colors"
          >
            Get a Free Quote
          </button>
        </div>
      )}
    </nav>
  );
}
