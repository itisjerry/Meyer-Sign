/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const serviceLinks = [
  { name: 'Channel Letters',       path: '/services/channel-letters',        tagline: 'Illuminated storefront identity' },
  { name: 'Monument Signs',         path: '/services/monument-signs',          tagline: 'Architectural ground-level presence' },
  { name: 'Pylon Signs',            path: '/services/pylon-signs',             tagline: 'Maximum roadway visibility' },
  { name: 'LED Message Centers',    path: '/services/led-message-centers',     tagline: 'Live, remotely updated displays' },
  { name: 'Vehicle Wraps',          path: '/services/vehicle-wraps',           tagline: 'Your fleet as a moving billboard' },
  { name: 'Vinyl & Window Graphics',path: '/services/vinyl-window-graphics',   tagline: 'Storefronts that sell themselves' },
  { name: 'Wayfinding & ADA',       path: '/services/wayfinding-ada',          tagline: 'Guide every visitor with clarity' },
  { name: 'Non-Illuminated Signs',  path: '/services/non-illuminated-signs',   tagline: 'Banners, panels & flat signage' },
  { name: 'National Accounts',      path: '/services/national-accounts',       tagline: 'Multi-location sign programs' },
];

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen]       = useState(false);
  const [scrolled, setScrolled]                   = useState(false);
  const [servicesOpen, setServicesOpen]           = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  const navBg = scrolled || !isHome
    ? 'bg-slate-950/98 backdrop-blur-md shadow-2xl border-b border-white/5'
    : 'bg-transparent';

  // Anchor links — on home page use hash, on other pages navigate to /#hash
  const anchorHref = (hash) => isHome ? `#${hash}` : `/#${hash}`;

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/25 group-hover:bg-amber-400 transition-colors">
            <span className="text-slate-900 font-black text-base leading-none">M</span>
          </div>
          <div className="hidden sm:block">
            <div className="text-white font-bold text-base leading-tight">Meyer Sign</div>
            <div className="text-amber-400/80 text-[10px] font-semibold tracking-widest">& ADVERTISING</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">

          {/* Services dropdown */}
          <div className="relative" ref={dropdownRef}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}>
            <button
              className="flex items-center gap-1 text-slate-300 hover:text-white font-medium text-sm transition-colors py-1"
              onClick={() => setServicesOpen(v => !v)}>
              Services
              <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Mega dropdown */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[580px] bg-slate-900 border border-white/10 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden transition-all duration-200 origin-top ${
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
                <span className="text-slate-500 text-xs">9 sign types · Full in-house fabrication</span>
                <Link to="/" className="text-amber-400 hover:text-amber-300 text-xs font-semibold transition-colors">
                  All services →
                </Link>
              </div>
            </div>
          </div>

          {[['Process', 'process'], ['Portfolio', 'portfolio'], ['About', 'about']].map(([label, hash]) => (
            <a key={label} href={anchorHref(hash)}
              className="text-slate-300 hover:text-white font-medium text-sm transition-colors">
              {label}
            </a>
          ))}

          <a href="tel:+13603369999"
            className="text-slate-300 hover:text-amber-400 font-medium text-sm transition-colors hidden lg:block">
            (360) 336-9999
          </a>
          <Link to="/contact"
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-5 py-2 rounded-lg text-sm transition-all hover:shadow-lg hover:shadow-amber-500/30">
            Free 3D Design
          </Link>
        </div>

        {/* Mobile: phone + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <a href="tel:+13603369999" className="text-amber-400 font-bold text-sm">Call Us</a>
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
        <div className="md:hidden bg-slate-950/98 backdrop-blur-md border-t border-white/10 px-4 py-4 max-h-[80vh] overflow-y-auto">

          {/* Services expandable */}
          <button
            onClick={() => setMobileServicesOpen(v => !v)}
            className="flex items-center justify-between w-full text-slate-300 font-medium py-3 border-b border-white/5 text-sm">
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
              className="block text-slate-300 hover:text-white font-medium py-3 border-b border-white/5 text-sm">
              {label}
            </a>
          ))}

          <div className="pt-4 grid grid-cols-2 gap-3">
            <a href="tel:+13603369999"
              className="flex items-center justify-center gap-2 border border-white/20 text-white font-semibold py-3 rounded-lg text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              (360) 336-9999
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
