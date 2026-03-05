/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const serviceLinks = [
  { name: 'Channel Letters',        path: '/services/channel-letters',       tagline: 'Illuminated storefront identity' },
  { name: 'Monument Signs',          path: '/services/monument-signs',         tagline: 'Architectural ground-level presence' },
  { name: 'Pylon Signs',             path: '/services/pylon-signs',            tagline: 'Maximum roadway visibility' },
  { name: 'LED Message Centers',     path: '/services/led-message-centers',    tagline: 'Live, remotely updated displays' },
  { name: 'Vehicle Wraps',           path: '/services/vehicle-wraps',          tagline: 'Your fleet as a moving billboard' },
  { name: 'Vinyl & Window Graphics', path: '/services/vinyl-window-graphics',  tagline: 'Storefronts that sell themselves' },
  { name: 'Wayfinding & ADA',        path: '/services/wayfinding-ada',         tagline: 'Guide every visitor with clarity' },
  { name: 'Non-Illuminated Signs',   path: '/services/non-illuminated-signs',  tagline: 'Banners, panels & flat signage' },
  { name: 'National Accounts',       path: '/services/national-accounts',      tagline: 'Multi-location sign programs' },
];

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen]         = useState(false);
  const [scrolled, setScrolled]                     = useState(false);
  const [servicesOpen, setServicesOpen]             = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location    = useLocation();
  const isHome      = location.pathname === '/';

  useEffect(() => {
    // Check on mount (handles page refreshes mid-scroll or direct sub-page loads)
    setScrolled(window.scrollY > 10);
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  // Always solid on sub-pages; solid after any scroll on home page
  const isSolid = scrolled || !isHome;

  const anchorHref = (hash) => isHome ? `#${hash}` : `/#${hash}`;

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isSolid
        ? 'bg-slate-950 shadow-2xl border-b border-white/8'
        : 'bg-gradient-to-b from-slate-950/80 to-transparent backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo — always links home, large touch area */}
        <Link to="/" className="flex items-center gap-3 group flex-shrink-0 py-3 -my-3 pr-2">
          {/* Try real logo first; fall back to letter mark */}
          <div className="relative h-10 flex items-center">
            <img
              src="/logo.png"
              alt="Meyer Sign & Advertising — Home"
              className="h-10 w-auto max-w-[140px] object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextSibling.style.display = 'flex';
              }}
            />
            <div className="items-center gap-2.5 hidden" id="nav-logo-fallback">
              <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/25 group-hover:bg-amber-400 transition-colors flex-shrink-0">
                <span className="text-slate-900 font-black text-base leading-none">M</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-white font-bold text-base leading-tight">Meyer Sign</div>
                <div className="text-amber-400/80 text-[10px] font-semibold tracking-widest">& ADVERTISING</div>
              </div>
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">

          {/* Services mega-dropdown */}
          <div className="relative" ref={dropdownRef}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}>
            <button
              className="flex items-center gap-1 text-slate-200 hover:text-white font-medium text-sm transition-colors py-1"
              onClick={() => setServicesOpen(v => !v)}>
              Services
              <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Mega dropdown panel */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[600px] bg-slate-900 border border-white/10 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden transition-all duration-200 origin-top ${
              servicesOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
            }`}>
              <div className="p-4 grid grid-cols-3 gap-1">
                {serviceLinks.map(s => (
                  <Link key={s.path} to={s.path}
                    className="group flex flex-col px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors">
                    <span className="text-white font-semibold text-sm group-hover:text-amber-400 transition-colors leading-tight">{s.name}</span>
                    <span className="text-slate-500 text-[11px] mt-0.5 leading-tight">{s.tagline}</span>
                  </Link>
                ))}
              </div>
              <div className="border-t border-white/10 px-5 py-3 flex items-center justify-between bg-white/[0.02]">
                <span className="text-slate-500 text-xs">9 sign types · Full in-house fabrication · Mount Vernon, WA</span>
                <a href="/#services" className="text-amber-400 hover:text-amber-300 text-xs font-semibold transition-colors">
                  View all →
                </a>
              </div>
            </div>
          </div>

          {[['Process', 'process'], ['Portfolio', 'portfolio'], ['About', 'about']].map(([label, hash]) => (
            <a key={label} href={anchorHref(hash)}
              className="text-slate-200 hover:text-white font-medium text-sm transition-colors">
              {label}
            </a>
          ))}

          <a href="tel:+13604241325"
            className="text-slate-200 hover:text-amber-400 font-medium text-sm transition-colors hidden lg:block">
            (360) 424-1325
          </a>

          {/* Social icons */}
          <div className="hidden lg:flex items-center gap-2">
            <a href="https://www.facebook.com/MeyerSignAdvertising/" target="_blank" rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors p-1" aria-label="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/meyersign/" target="_blank" rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors p-1" aria-label="Instagram">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>

          <Link to="/contact"
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-5 py-2 rounded-lg text-sm transition-all hover:shadow-lg hover:shadow-amber-500/30 whitespace-nowrap">
            Free 3D Design
          </Link>
        </div>

        {/* Mobile: phone + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <a href="tel:+13604241325" className="text-amber-400 font-bold text-sm">Call Us</a>
          <button onClick={() => setMobileMenuOpen(v => !v)} className="p-2 text-white" aria-label="Toggle menu">
            {mobileMenuOpen
              ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
              : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
            }
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-t border-white/10 px-4 py-4 max-h-[80vh] overflow-y-auto">

          {/* Home */}
          <Link to="/"
            className="flex items-center gap-2 text-slate-200 hover:text-amber-400 font-medium py-3 border-b border-white/5 text-sm transition-colors">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            Home
          </Link>

          {/* Services expandable */}
          <button
            onClick={() => setMobileServicesOpen(v => !v)}
            className="flex items-center justify-between w-full text-slate-200 font-medium py-3 border-b border-white/5 text-sm">
            Services
            <svg className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          {mobileServicesOpen && (
            <div className="pl-3 py-2 border-b border-white/5 space-y-0.5">
              {serviceLinks.map(s => (
                <Link key={s.path} to={s.path}
                  className="flex flex-col py-2.5 border-b border-white/5 last:border-0">
                  <span className="text-slate-200 text-sm font-semibold">{s.name}</span>
                  <span className="text-slate-500 text-xs">{s.tagline}</span>
                </Link>
              ))}
            </div>
          )}

          {[['Process', 'process'], ['Portfolio', 'portfolio'], ['About', 'about']].map(([label, hash]) => (
            <a key={label} href={anchorHref(hash)}
              className="block text-slate-200 hover:text-white font-medium py-3 border-b border-white/5 text-sm">
              {label}
            </a>
          ))}

          {/* Social links mobile */}
          <div className="flex items-center gap-4 py-3 border-b border-white/5">
            <a href="https://www.facebook.com/MeyerSignAdvertising/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
            <a href="https://www.instagram.com/meyersign/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              Instagram
            </a>
          </div>

          <div className="pt-4 grid grid-cols-2 gap-3">
            <a href="tel:+13604241325"
              className="flex items-center justify-center gap-2 border border-white/20 text-white font-semibold py-3 rounded-lg text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              (360) 424-1325
            </a>
            <Link to="/contact"
              className="bg-amber-500 text-slate-900 font-bold py-3 rounded-lg text-sm text-center">
              Free 3D Design
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
