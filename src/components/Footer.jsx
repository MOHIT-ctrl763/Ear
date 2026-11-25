import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Sparkles, Award, RotateCcw, Truck } from 'lucide-react';
import RockoLogo from './RockoLogo';

const Footer = () => {
  return (
    <footer className="bg-[#09090b] border-t border-white/[0.08] pt-14 pb-8 text-white relative">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6">
        
        {/* Luxury Guarantees Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 mb-12 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#15151a] border border-[#e11d1d]/30 flex items-center justify-center text-[#e11d1d]">
              <Truck className="w-4 h-4" />
            </div>
            <div className="text-left">
              <h5 className="text-xs font-bold text-white">White-Glove Shipping</h5>
              <p className="text-[10.5px] text-gray-400">Complimentary on all orders</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#15151a] border border-[#e11d1d]/30 flex items-center justify-center text-[#e11d1d]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="text-left">
              <h5 className="text-xs font-bold text-white">3-Year Guarantee</h5>
              <p className="text-[10.5px] text-gray-400">Doorstep concierge swap</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#15151a] border border-[#e11d1d]/30 flex items-center justify-center text-[#e11d1d]">
              <RotateCcw className="w-4 h-4" />
            </div>
            <div className="text-left">
              <h5 className="text-xs font-bold text-white">30-Day In-Home Trial</h5>
              <p className="text-[10.5px] text-gray-400">100% satisfaction promised</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#15151a] border border-[#e11d1d]/30 flex items-center justify-center text-[#e11d1d]">
              <Award className="w-4 h-4" />
            </div>
            <div className="text-left">
              <h5 className="text-xs font-bold text-white">Certified Authentic</h5>
              <p className="text-[10.5px] text-gray-400">Serial-numbered hardware</p>
            </div>
          </div>
        </div>

        {/* Main Columns Grid - Exact match to reference layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-white/[0.06]">
          
          {/* Column 1: Brand & Socials (lg:col-span-3) */}
          <div className="lg:col-span-3 text-left">
            <Link to="/" className="inline-flex items-center mb-3">
              <RockoLogo className="h-7 w-auto" variant="light" />
            </Link>

            <p className="text-xs text-gray-400 mb-2 leading-relaxed">
              Technology. Beyond Sound.
            </p>
            <p className="text-[11px] text-[#e11d1d] font-serif italic mb-5">
              Handcrafted in limited batches for audio purists.
            </p>

            {/* Social Icons matching reference */}
            <div className="flex items-center gap-2.5">
              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#e11d1d] hover:border-[#e11d1d] transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#e11d1d] hover:border-[#e11d1d] transition-colors">
                <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#e11d1d] hover:border-[#e11d1d] transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* X / Twitter */}
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="X Twitter" className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#e11d1d] hover:border-[#e11d1d] transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#e11d1d] hover:border-[#e11d1d] transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Atelier</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">FAQs</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support (lg:col-span-2) */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Support
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/contact#tracking" className="hover:text-white transition-colors">Track Order</Link>
              </li>
              <li>
                <Link to="/contact#returns" className="hover:text-white transition-colors">Return Policy</Link>
              </li>
              <li>
                <Link to="/contact#warranty" className="hover:text-white transition-colors">3-Year Warranty</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Stay Connected (lg:col-span-2) */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Stay Connected
            </h4>
            <p className="text-xs text-gray-400 mb-3 leading-relaxed">
              Follow us for the latest releases & private drops
            </p>
            <div className="flex items-center gap-3 text-gray-400">
              <span className="hover:text-[#e11d1d] transition-colors cursor-pointer text-xs font-mono">@rocko.audio</span>
            </div>
          </div>

          {/* Column 5: Secure Payments (lg:col-span-3 - Matching reference with shield and payment badges) */}
          <div className="lg:col-span-3 text-left">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-[#e11d1d]" />
              <h4 className="text-xs font-bold tracking-wider text-white">
                Secure Payments
              </h4>
            </div>

            {/* Payment Badges (VISA, Mastercard, UPI, AMEX) */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {/* VISA */}
              <div className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center">
                <span className="font-black italic text-xs tracking-wider text-blue-400">VISA</span>
              </div>

              {/* Mastercard circles */}
              <div className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 flex items-center gap-1 justify-center">
                <div className="w-3.5 h-3.5 rounded-full bg-red-500 opacity-90" />
                <div className="w-3.5 h-3.5 rounded-full bg-amber-400 -ml-2 opacity-90" />
              </div>

              {/* UPI */}
              <div className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center">
                <span className="font-extrabold text-xs tracking-wider text-emerald-400">UPI</span>
              </div>

              {/* AMEX */}
              <div className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center">
                <span className="font-bold text-[11px] tracking-wider text-[#e11d1d]">AMEX</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Copyright Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-500">
          <p>© 2026 rocKo Audio Atelier. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/about" className="hover:text-gray-300 transition-colors">Terms & Conditions</Link>
            <span>|</span>
            <span className="text-[#e11d1d]/80 font-mono">Bespoke Acoustics</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
