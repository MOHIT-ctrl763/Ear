import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Search, User, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import RockoLogo from './RockoLogo';
import ParallaxPillsMenu from './ParallaxPillsMenu';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [supportDropdown, setSupportDropdown] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const { cartCount } = useCart();
  const closeTimerRef = useRef(null);

  const openDropdown = (name) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setProductsDropdown(name === 'Products');
    setSupportDropdown(name === 'Support');
  };

  const scheduleCloseDropdown = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setProductsDropdown(false);
      setSupportDropdown(false);
    }, 160);
  };

  const closeAllDropdowns = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setProductsDropdown(false);
    setSupportDropdown(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Products', 
      path: '/products', 
      hasDropdown: true,
      dropdownItems: [
        { label: 'All Earbuds Collection', path: '/products', badge: 'Collection' },
        { label: 'rocKo Buds Pro (Master Studio)', path: '/product/rocko-buds-pro', badge: 'Flagship' },
        { label: 'rocKo Air Pro (Haute Obsidian)', path: '/product/rocko-air-pro', badge: 'Luxe' },
        { label: 'rocKo Neo (Pure Pearl)', path: '/product/rocko-neo', badge: 'Minimal' },
        { label: 'rocKo GameX (Chroma Esports)', path: '/product/rocko-gamex', badge: 'Esports' },
      ]
    },
    { name: 'About', path: '/about' },
    { 
      name: 'Support', 
      path: '/contact',
      hasDropdown: true,
      dropdownItems: [
        { label: 'VIP Concierge Desk', path: '/contact' },
        { label: '3-Year Warranty Registration', path: '/contact#warranty' },
        { label: 'Bespoke Order Tracking', path: '/contact#tracking' },
        { label: 'Acoustic FAQs', path: '/contact#faq' },
      ]
    },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* ── Main Sticky Header ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-zinc-200 py-3.5 shadow-sm'
            : 'bg-white/85 backdrop-blur-md border-b border-zinc-200/70 py-4'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-5 sm:px-6 flex items-center justify-between">
          
          {/* Logo - Official Dark-Ink rocKo Brand Logo */}
          <Link to="/" className="flex items-center group">
            <RockoLogo className="h-7 sm:h-8 w-auto" variant="dark" />
          </Link>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isCurrent = location.pathname === link.path;
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.name} 
                    className="relative"
                    onMouseEnter={() => openDropdown(link.name)}
                    onMouseLeave={scheduleCloseDropdown}
                  >
                    <Link
                      to={link.path}
                      onClick={closeAllDropdowns}
                      className="flex items-center gap-1.5 text-[12.5px] tracking-[0.12em] uppercase font-semibold text-zinc-600 hover:text-[#111113] transition-colors py-2 group"
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-3 h-3 opacity-50 group-hover:rotate-180 transition-transform" />
                    </Link>

                    {((link.name === 'Products' && productsDropdown) || (link.name === 'Support' && supportDropdown)) && (
                      <div className="absolute top-full left-0 pt-1.5 z-50">
                        <div className="w-64 py-2 bg-white border border-zinc-200 rounded-2xl shadow-xl animate-fade-in">
                          {link.dropdownItems.map((item, idx) => (
                            <Link
                              key={idx}
                              to={item.path}
                              onClick={closeAllDropdowns}
                              className="flex items-center justify-between px-4 py-2.5 text-xs text-zinc-700 hover:text-[#111113] hover:bg-zinc-50 transition-colors"
                            >
                              <span>{item.label}</span>
                              {item.badge && (
                                <span className="text-[9px] px-1.5 py-0.5 rounded bg-zinc-100 text-[#111113] border border-zinc-200 font-bold uppercase tracking-wider">
                                  {item.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[12.5px] tracking-[0.12em] uppercase font-semibold relative py-1 transition-colors ${
                    isCurrent
                      ? 'text-[#111113]'
                      : 'text-zinc-600 hover:text-[#111113]'
                  }`}
                >
                  {link.name}
                  {isCurrent && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#e11d1d] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-4 sm:gap-5">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search Collection"
              className="text-zinc-700 hover:text-[#111113] transition-colors p-1 cursor-pointer"
            >
              <Search className="w-[17px] h-[17px]" />
            </button>

            <Link
              to="/about"
              aria-label="About rocKo"
              className="text-zinc-700 hover:text-[#111113] transition-colors p-1"
            >
              <User className="w-[17px] h-[17px]" />
            </Link>

            <Link
              to="/cart"
              aria-label="Shopping Bag"
              className="relative text-zinc-700 hover:text-[#111113] transition-colors p-1"
            >
              <ShoppingBag className="w-[17px] h-[17px]" />
              <span className="absolute -top-1.5 -right-1.5 min-w-[16px] h-[16px] px-1 bg-[#e11d1d] text-white text-[9px] font-bold rounded-full flex items-center justify-center ring-2 ring-white">
                {cartCount}
              </span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-zinc-700 hover:text-[#111113] p-1"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search Flyout Overlay */}
        {searchOpen && (
          <div className="border-t border-zinc-200 bg-white px-5 py-3.5 shadow-sm">
            <div className="max-w-[720px] mx-auto flex items-center gap-3">
              <Search className="w-4 h-4 text-[#e11d1d]" />
              <input
                type="text"
                placeholder="Search rocKo models (Buds Pro, Air Pro, Neo, GameX)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-transparent text-xs sm:text-sm text-[#111113] focus:outline-none placeholder:text-zinc-400 font-sans"
              />
              <Link
                to={`/products?search=${encodeURIComponent(searchQuery)}`}
                onClick={() => setSearchOpen(false)}
                className="text-xs px-4 py-1.5 rounded-full bg-[#111113] text-white font-bold uppercase tracking-wider hover:bg-[#27272a] transition-colors"
              >
                Search
              </Link>
              <button 
                onClick={() => setSearchOpen(false)}
                className="text-zinc-500 hover:text-[#111113] text-xs px-2 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Parallax Pills Menu */}
      <ParallaxPillsMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        cartCount={cartCount}
      />
    </>
  );
};

export default Navbar;
