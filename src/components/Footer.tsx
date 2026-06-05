'use client';

export default function Footer() {
  return (
    <footer className="bg-[#1E3A5F] text-white pt-16 pb-8 border-t border-[#F97316]/20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#F97316] rounded-lg flex items-center justify-center text-white font-bold text-sm">
                TP
              </div>
              <span className="font-bold text-xl tracking-tight">Track Pro Movers</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Professional, reliable, and stress-free moving services for homes and businesses. We handle the heavy lifting so you don&apos;t have to.
            </p>
            <div className="flex items-center gap-4">
              {/* Social placeholders */}
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F97316] transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F97316] transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">Our Services</a></li>
              <li><a href="#why-us" className="text-gray-400 hover:text-white transition-colors text-sm">Why Choose Us</a></li>
              <li><a href="#quote-form" className="text-gray-400 hover:text-white transition-colors text-sm">Get a Free Quote</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#F97316]">📞</span>
                <a href="tel:+15551234567" className="text-gray-400 hover:text-white transition-colors text-sm">(555) 123-4567</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F97316]">✉️</span>
                <span className="text-gray-400 text-sm">Contact details coming soon</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#F97316]">⏰</span>
                <span className="text-gray-400 text-sm">Mon - Sun: 8:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="text-lg font-bold mb-4">Service Area</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Proudly serving the greater metropolitan area and surrounding suburbs. Long-distance moving available upon request.
            </p>
            <a href="#quote-form" className="inline-block px-5 py-2.5 bg-white/10 hover:bg-[#F97316] text-white font-medium text-sm rounded-lg transition-colors border border-white/10">
              Check Availability →
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; 2026 Track Pro Movers. All rights reserved. A <span className="text-gray-400">Track Pro Services</span> company.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-gray-500">Licensed</span>
            <span className="text-xs text-gray-500">Insured</span>
            <span className="text-xs text-gray-500">Bonded</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
