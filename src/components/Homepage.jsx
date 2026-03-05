/* eslint-disable */
import React, { useState, useEffect } from 'react';

const MeyerSignProfessional = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', service: '', message: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('revealed')),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // ─── DATA ────────────────────────────────────────────────────────────────────

  const signTypes = [
    {
      id: 'channel',
      name: 'Channel Letters',
      tagline: 'Illuminated storefront identity',
      desc: '3D lit letters in front-lit, back-lit, or halo styles — the gold standard for retail.',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'monument',
      name: 'Monument Signs',
      tagline: 'Architectural ground-level presence',
      desc: 'Stone, brick, stucco or metal bases that root your brand at the entrance.',
      image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'pylon',
      name: 'Pylon Signs',
      tagline: 'Roadway & freeway visibility',
      desc: 'Towering pole structures engineered for maximum sight lines from a distance.',
      image: 'https://images.unsplash.com/photo-1501452185849-1c6ff0d06e70?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'digital',
      name: 'Digital Message Centers',
      tagline: 'Live, remotely updated displays',
      desc: 'Web-controlled LED panels for promotions, hours, and real-time messaging.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'vehicle',
      name: 'Vehicle Wraps',
      tagline: 'Your fleet as a billboard',
      desc: 'Full and partial vinyl wraps that turn every mile into a brand impression.',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'window',
      name: 'Window Graphics',
      tagline: 'Storefronts that sell themselves',
      desc: 'Perforated film, frosted vinyl, and full-color decals for any glass surface.',
      image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'wayfinding',
      name: 'Wayfinding & ADA',
      tagline: 'Guide every visitor with confidence',
      desc: 'Interior directories, room ID, ADA-compliant signs for complexes and campuses.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'wall',
      name: 'Wall & Building Signs',
      tagline: 'Dimensional on-building branding',
      desc: 'Illuminated and non-illuminated panels, dimensional letters, blade signs.',
      image: 'https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    },
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Free Site Consultation',
      body: 'We visit your location, assess visibility angles, survey the site, and listen to your brand goals — at zero cost to you.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      num: '02',
      title: 'Design & 3D Rendering',
      body: 'Our designers produce photorealistic mockups showing your sign exactly as it will appear on your building — before a single cut is made.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      num: '03',
      title: 'Permits & Approvals',
      body: 'We manage every permit — city zoning, electrical, structural — navigating red tape so your project stays on schedule.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      num: '04',
      title: 'In-House Fabrication',
      body: 'Built in our own Mount Vernon shop — CNC routing, metal fabrication, LED assembly, finishing. We control quality from raw material to finished sign.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      num: '05',
      title: 'Certified Installation',
      body: 'Our licensed, bonded crews handle crane lifts, electrical hookup, and final alignment. From a simple storefront letter to a 40-foot pylon.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      num: '06',
      title: 'Maintenance & Support',
      body: 'Warranty service, preventive maintenance plans, LED upgrades, emergency repairs — we stay your sign partner for the life of the installation.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  const portfolio = [
    {
      title: 'Northwest Auto Group',
      type: '40-ft Pylon + Channel Letters',
      location: 'Burlington, WA',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Skagit Valley Medical Center',
      type: 'Full Wayfinding + Monument',
      location: 'Mount Vernon, WA',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Riverside Bistro',
      type: 'Channel Letters + Window Graphics',
      location: 'Anacortes, WA',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Pacific Coast Federal Credit Union',
      type: 'Monument + Digital Message Center',
      location: 'Marysville, WA',
      image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Cascade Plumbing & HVAC',
      type: '14-Vehicle Fleet Wrap',
      location: 'Everett, WA',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Westgate Corporate Campus',
      type: 'Full Sign Package — All Types',
      location: 'Bellingham, WA',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    },
  ];

  const industries = [
    { name: 'Retail & Shopping Centers', icon: '🏪' },
    { name: 'Restaurants & Food Service', icon: '🍽️' },
    { name: 'Automotive Dealerships', icon: '🚗' },
    { name: 'Healthcare & Medical', icon: '🏥' },
    { name: 'Hotels & Hospitality', icon: '🏨' },
    { name: 'Corporate & Office Parks', icon: '🏢' },
    { name: 'Financial & Banking', icon: '🏦' },
    { name: 'National Franchise Rollouts', icon: '🌐' },
  ];

  const testimonials = [
    {
      quote: "Meyer Sign handled everything — design, permits, fabrication, installation. One call, one team, zero headaches. Our new pylon gets compliments every single day.",
      name: 'Tom Berggren',
      title: 'Owner',
      company: 'Northwest Auto Group',
    },
    {
      quote: "We've used Meyer Sign for three locations. Their permit knowledge alone saved us months of back-and-forth with the city. Absolute professionals start to finish.",
      name: 'Lisa Chen',
      title: 'Director of Operations',
      company: 'Cascade Medical Group',
    },
    {
      quote: "The 3D rendering before fabrication was a game-changer. I saw exactly how the sign would look on the building. No surprises — just perfect execution.",
      name: 'Marco Delgado',
      title: 'Franchise Owner',
      company: 'Pacific Coast Restaurants',
    },
  ];

  const navLinks = ['Services', 'Process', 'Portfolio', 'About', 'Contact'];

  // ─── RENDER ──────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════
          NAVIGATION
      ══════════════════════════════════════════════════════ */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-slate-950/98 backdrop-blur-md shadow-2xl border-b border-white/5' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/25 group-hover:bg-amber-400 transition-colors">
              <span className="text-slate-900 font-black text-lg leading-none">M</span>
            </div>
            <div>
              <div className="text-white font-bold text-lg leading-tight">Meyer Sign</div>
              <div className="text-amber-400/80 text-xs font-medium tracking-wider">& ADVERTISING</div>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 4).map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-slate-300 hover:text-white font-medium text-sm transition-colors tracking-wide"
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-6 py-2.5 rounded-lg text-sm transition-all hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5"
            >
              Get Free Quote
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950 border-t border-white/10 px-6 py-6 space-y-4">
            {navLinks.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 hover:text-white font-medium text-base py-2 border-b border-white/5 transition-colors"
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block bg-amber-500 text-slate-900 font-bold px-6 py-3 rounded-lg text-center mt-4 hover:bg-amber-400 transition-colors"
            >
              Get Free Quote
            </a>
          </div>
        )}
      </nav>

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden pt-16">

        {/* Background photo with dark overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Illuminated commercial signage"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-900/80"></div>
          {/* Subtle amber glow at bottom — evokes lit signage */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"></div>
        </div>

        {/* Decorative background grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(245,158,11,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.8) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Copy + CTAs */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 bg-amber-500/10 border border-amber-500/25 rounded-full px-4 py-2 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">
                  Washington State • Est. 1960 • Licensed & Bonded
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[0.93] mb-6 tracking-tight">
                Your Business<br />
                <span className="text-amber-400">Can't Afford</span><br />
                to Be Invisible
              </h1>

              {/* Subheadline */}
              <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-xl">
                Custom commercial signs designed, fabricated, and installed by one expert team —
                channel letters to 40-foot pylons. Serving Washington businesses for over 65 years.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-14">
                <a
                  href="#contact"
                  className="group flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-amber-500/30"
                >
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Get Free Consultation
                </a>
                <a
                  href="#portfolio"
                  className="flex items-center gap-2 border border-white/25 hover:border-white/60 text-white hover:bg-white/5 font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200"
                >
                  View Our Work
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8">
                {[
                  { n: '65+', label: 'Years in Business' },
                  { n: '5,000+', label: 'Signs Installed' },
                  { n: '100%', label: 'Permit Success Rate' },
                ].map((s, i) => (
                  <div key={i} className="border-l-2 border-amber-500/40 pl-4">
                    <div className="text-3xl font-black text-amber-400">{s.n}</div>
                    <div className="text-slate-400 text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Sign type showcase grid */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Label */}
                <div className="text-slate-500 text-xs uppercase tracking-widest font-semibold mb-4 text-right">
                  Sign Types We Build
                </div>

                {/* 2×2 photo grid with overlap effect */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Channel Letters', img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
                    { label: 'Monument Signs', img: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
                    { label: 'Digital Displays', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
                    { label: 'Vehicle Wraps', img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
                  ].map((item, i) => (
                    <div key={i} className="relative group overflow-hidden rounded-xl border border-white/10 hover:border-amber-500/40 transition-all duration-300">
                      <img
                        src={item.img}
                        alt={item.label}
                        className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500 opacity-75 group-hover:opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                      <div className="absolute bottom-3 left-3">
                        <span className="text-white text-sm font-semibold">{item.label}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* "+4 more types" indicator */}
                <div className="mt-3 text-center">
                  <a href="#services" className="text-amber-400/70 hover:text-amber-400 text-xs font-medium tracking-wide transition-colors">
                    + 4 more sign types ↓
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
          <span className="text-slate-500 text-xs uppercase tracking-widest">See What We Build</span>
          <div className="w-px h-10 bg-gradient-to-b from-amber-500/50 to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SERVICES — WHAT WE MAKE
      ══════════════════════════════════════════════════════ */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <div className="inline-block bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              What We Make
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">
              Every Type of Commercial Sign
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              From a small window graphic to a 40-foot illuminated pylon — we design, fabricate, and install it all under one roof.
            </p>
          </div>

          {/* 4-col grid of sign type cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {signTypes.map((s, i) => (
              <div
                key={s.id}
                className="group reveal bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-slate-200/80 hover:-translate-y-1.5 transition-all duration-300"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-amber-500 text-slate-900 text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
                      {s.tagline}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 text-lg mb-1.5">{s.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA below grid */}
          <div className="text-center mt-12 reveal">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Not sure what you need? Let's talk.
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          WHY SIGNAGE MATTERS — IMPACT BAR
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">

        {/* Amber glow accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Headline + story */}
            <div className="reveal">
              <div className="inline-block bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                The Business Case for Great Signage
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                A Great Sign Is the Best<br />
                <span className="text-amber-400">Employee You'll Ever Hire</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                It works 24/7. It never calls in sick. And it reaches every single person who drives past your door — before they've even walked in. But a bad sign, or no sign, quietly costs you customers every day.
              </p>
              <p className="text-slate-400 leading-relaxed">
                For over 65 years, Meyer Sign has helped Washington businesses turn their location into their most powerful marketing asset. We don't just make signs — we build visibility.
              </p>
            </div>

            {/* Right: Stat cards */}
            <div className="grid grid-cols-2 gap-4 reveal">
              {[
                {
                  stat: '76%',
                  label: 'of consumers entered a store based on its sign alone',
                  source: 'FedEx Sign Survey',
                },
                {
                  stat: '68%',
                  label: 'purchased a product because signage caught their eye',
                  source: 'FASTSIGNS Research',
                },
                {
                  stat: '50%',
                  label: 'of new customers find businesses by their exterior sign',
                  source: 'ISA Consumer Research',
                },
                {
                  stat: '8× ROI',
                  label: 'average return on professional signage investment',
                  source: 'Sign Research Foundation',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-amber-500/30 transition-all duration-300"
                >
                  <div className="text-3xl font-black text-amber-400 mb-2">{item.stat}</div>
                  <p className="text-slate-300 text-sm leading-snug mb-3">{item.label}</p>
                  <div className="text-slate-600 text-xs font-medium">{item.source}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PROCESS
      ══════════════════════════════════════════════════════ */}
      <section id="process" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <div className="inline-block bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              How It Works
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">
              One Team. Start to Finish.
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Most sign companies outsource permits, fabrication, or installation. We own every step — which means faster timelines, tighter quality control, and one point of contact.
            </p>
          </div>

          {/* Steps grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <div
                key={step.num}
                className="reveal group bg-white rounded-2xl p-8 border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center group-hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                    {step.icon}
                  </div>
                  <div className="text-4xl font-black text-slate-100 leading-none mt-1 select-none">
                    {step.num}
                  </div>
                </div>
                <h3 className="font-bold text-slate-900 text-xl mb-3">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{step.body}</p>
              </div>
            ))}
          </div>

          {/* Bottom highlight */}
          <div className="mt-14 bg-blue-600 rounded-2xl p-8 text-white text-center reveal">
            <p className="text-xl font-bold mb-1">Ready to start your project?</p>
            <p className="text-blue-100 mb-6 text-sm">Free site visit + 3D design mockup — no commitment required.</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Schedule Free Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PORTFOLIO
      ══════════════════════════════════════════════════════ */}
      <section id="portfolio" className="py-24 bg-slate-950">

        {/* Amber accent lines */}
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 reveal">
            <div>
              <div className="inline-block bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                Featured Work
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                Signs That Tell a Story
              </h2>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed text-sm">
              A sample of recent projects across Washington State — each one handled entirely in-house.
            </p>
          </div>

          {/* Portfolio grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolio.map((p, i) => (
              <div
                key={i}
                className="reveal group relative overflow-hidden rounded-2xl border border-white/5 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-64 object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">{p.type}</div>
                  <h3 className="text-white font-bold text-lg leading-tight mb-1">{p.title}</h3>
                  <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {p.location}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 reveal">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-amber-500/50 text-slate-300 hover:text-amber-400 font-semibold px-8 py-3.5 rounded-xl transition-all duration-200"
            >
              Discuss Your Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          INDUSTRIES WE SERVE
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Copy */}
            <div className="reveal">
              <div className="inline-block bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                Industries We Serve
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
                We Know Your Industry's<br />
                <span className="text-blue-700">Signage Needs</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                Every industry has unique visibility challenges, brand standards, and code requirements. Our team has worked across all of them — bringing deep expertise to your specific situation.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Channel Letters', 'Monument Signs', 'Digital Displays', 'Vehicle Wraps', 'Wayfinding', 'ADA Compliance'].map(tag => (
                  <span key={tag} className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Industry grid */}
            <div className="grid grid-cols-2 gap-3 reveal">
              {industries.map((ind, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3.5 bg-slate-50 border border-slate-100 rounded-xl p-4 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 group"
                >
                  <span className="text-2xl flex-shrink-0">{ind.icon}</span>
                  <span className="font-semibold text-slate-800 text-sm group-hover:text-blue-800 transition-colors leading-tight">{ind.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ABOUT — TRUST & CREDENTIALS
      ══════════════════════════════════════════════════════ */}
      <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">

        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(245,158,11,0.8) 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Fabrication image */}
            <div className="reveal">
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Meyer Sign fabrication shop"
                  className="w-full h-96 object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                    <div className="text-white font-semibold text-sm mb-1">Built In-House. In Mount Vernon, WA.</div>
                    <div className="text-slate-300 text-xs">CNC routing · Metal fabrication · LED assembly · Finishing</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: About copy + credentials */}
            <div className="reveal">
              <div className="inline-block bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                About Meyer Sign
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                Three Generations.<br />
                <span className="text-amber-400">One Obsession.</span>
              </h2>
              <p className="text-slate-300 leading-relaxed mb-5">
                Founded in 1960, Meyer Sign & Advertising has grown from a hand-lettering shop into a full-service commercial signage firm — while never losing the craftsmanship and personal service that made us Washington's most trusted name in signs.
              </p>
              <p className="text-slate-400 leading-relaxed mb-10 text-sm">
                When you work with us, you get one team that owns every step: design, permits, fabrication, installation, and maintenance. No subcontractors. No middlemen. No excuses.
              </p>

              {/* Credentials */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { badge: 'WA Licensed', detail: 'General & Electrical Contractor' },
                  { badge: 'Fully Bonded', detail: 'Licensed, Bonded & Insured' },
                  { badge: 'UL Listed', detail: 'Underwriters Laboratories' },
                  { badge: 'ISA Member', detail: 'International Sign Association' },
                  { badge: 'OSHA Certified', detail: 'Safety-Certified Installation Crews' },
                  { badge: 'Crane Service', detail: 'In-House for Large Installations' },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:border-amber-500/20 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0"></div>
                    <div>
                      <div className="text-white text-sm font-bold leading-tight">{c.badge}</div>
                      <div className="text-slate-500 text-xs">{c.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-xl mx-auto mb-14 reveal">
            <div className="inline-block bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Client Stories
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Don't Take Our Word for It
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="reveal bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-100 hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, si) => (
                    <svg key={si} className="w-4 h-4 text-amber-500 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-slate-700 leading-relaxed mb-6 text-sm italic">
                  "{t.quote}"
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                    <div className="text-slate-500 text-xs">{t.title}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SERVICE AREA STRIP
      ══════════════════════════════════════════════════════ */}
      <section className="py-10 bg-blue-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white text-sm font-semibold uppercase tracking-widest">
            Serving All of Washington State
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {['Mount Vernon', 'Burlington', 'Anacortes', 'Bellingham', 'Marysville', 'Everett', 'Arlington', 'Sedro-Woolley'].map(city => (
              <span key={city} className="text-blue-100 text-sm font-medium">
                {city}
              </span>
            ))}
          </div>
          <div className="text-blue-100 text-sm font-medium whitespace-nowrap">
            + Nationwide Account Management
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CONTACT / GET A QUOTE
      ══════════════════════════════════════════════════════ */}
      <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent"></div>

        {/* Background graphic */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <div className="w-full h-full"
            style={{
              backgroundImage: 'linear-gradient(rgba(245,158,11,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.5) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left: CTA copy */}
            <div className="reveal">
              <div className="inline-block bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                Start Your Project
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                Ready to Get<br />
                <span className="text-amber-400">Noticed?</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-10">
                Tell us about your project. We'll follow up within 24 hours with a preliminary assessment and 3D design concept — at no cost, no commitment.
              </p>

              {/* Contact details */}
              <div className="space-y-5">
                <a
                  href="tel:+13603369999"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/20 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg group-hover:text-amber-400 transition-colors">(360) 336-9999</div>
                    <div className="text-slate-500 text-sm">Call or text anytime</div>
                  </div>
                </a>

                <a
                  href="mailto:info@meyersign.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/20 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg group-hover:text-amber-400 transition-colors">info@meyersign.com</div>
                    <div className="text-slate-500 text-sm">Response within 24 hours</div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Mount Vernon, WA</div>
                    <div className="text-slate-500 text-sm">Serving all of Washington State</div>
                  </div>
                </div>
              </div>

              {/* Trust note */}
              <div className="mt-10 flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-slate-300 text-sm">
                  <span className="text-white font-semibold">No pressure.</span> Free consultation includes a site survey, zoning review, and 3D rendering concept.
                </span>
              </div>
            </div>

            {/* Right: Form */}
            <div className="reveal">
              <div className="bg-white rounded-2xl p-8 shadow-2xl shadow-black/40">
                <h3 className="text-2xl font-black text-slate-900 mb-2">Tell Us About Your Project</h3>
                <p className="text-slate-500 text-sm mb-8">We'll get back to you within 24 hours with a plan and preliminary design.</p>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        placeholder="John Smith"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Business Name *</label>
                      <input
                        type="text"
                        placeholder="Your Business"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone *</label>
                      <input
                        type="tel"
                        placeholder="(360) 555-0100"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email *</label>
                      <input
                        type="email"
                        placeholder="you@business.com"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Sign Type</label>
                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all appearance-none">
                      <option value="">Select a sign type...</option>
                      <option>Channel Letters (illuminated storefront)</option>
                      <option>Monument / Ground Sign</option>
                      <option>Pylon / Pole Sign</option>
                      <option>Digital Message Center</option>
                      <option>Vehicle Wraps / Fleet Graphics</option>
                      <option>Window Graphics</option>
                      <option>Wayfinding / ADA Signage</option>
                      <option>Wall / Building Sign</option>
                      <option>I need multiple types</option>
                      <option>Not sure — need consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Project Details</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your location, what you're trying to achieve, any existing signs, timeline..."
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none transition-all"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-black py-4 rounded-xl text-base transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-500/25"
                  >
                    Request Free Site Assessment
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    Free consultation · No obligation · 24-hour response guaranteed
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════ */}
      <footer className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center">
                  <span className="text-slate-900 font-black text-lg">M</span>
                </div>
                <div>
                  <div className="text-white font-bold text-lg leading-tight">Meyer Sign</div>
                  <div className="text-amber-400/70 text-xs font-medium tracking-wider">& ADVERTISING</div>
                </div>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                Washington State's full-service commercial signage company. Designed, fabricated, and installed under one roof since 1960.
              </p>
              <div className="text-slate-500 text-sm space-y-1">
                <div><span className="text-slate-400">Phone:</span> (360) 336-9999</div>
                <div><span className="text-slate-400">Email:</span> info@meyersign.com</div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest">Services</h4>
              <ul className="space-y-2.5">
                {['Channel Letters', 'Monument Signs', 'Pylon Signs', 'Digital Message Centers', 'Vehicle Wraps', 'Window Graphics', 'Wayfinding & ADA', 'Wall Signs'].map(s => (
                  <li key={s}>
                    <a href="#services" className="text-slate-500 hover:text-slate-200 text-sm transition-colors">{s}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest">Company</h4>
              <ul className="space-y-2.5">
                {[
                  { label: 'About Us', href: '#about' },
                  { label: 'Our Process', href: '#process' },
                  { label: 'Portfolio', href: '#portfolio' },
                  { label: 'Industries Served', href: '#about' },
                  { label: 'Get a Quote', href: '#contact' },
                ].map(link => (
                  <li key={link.label}>
                    <a href={link.href} className="text-slate-500 hover:text-slate-200 text-sm transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service area */}
            <div>
              <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest">Service Area</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Mount Vernon', 'Burlington', 'Anacortes', 'Bellingham', 'Marysville', 'Everett', 'Arlington', 'Sedro-Woolley', 'Oak Harbor'].map(city => (
                  <span key={city} className="bg-white/5 text-slate-400 text-xs px-2.5 py-1 rounded-md">{city}</span>
                ))}
              </div>
              <div className="space-y-1 text-xs text-slate-600">
                <p>WA General Contractor #MEYERSI099QL</p>
                <p>Electrical Contractor #MEYERE123RF</p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-sm">
              © {new Date().getFullYear()} Meyer Sign & Advertising. All Rights Reserved.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-600">
              {['UL Listed', 'ISA Member', 'Bonded & Insured', 'WA State Licensed', 'OSHA Certified'].map(badge => (
                <span key={badge} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-amber-500/60"></span>
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default MeyerSignProfessional;
