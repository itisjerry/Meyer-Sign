/* eslint-disable */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import ServiceVisual from './ServiceVisual';

const MeyerSignProfessional = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('revealed')),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // ─── DATA ────────────────────────────────────────────────────────────────────

  const signTypes = [
    {
      name: 'Channel Letters',
      tagline: 'Illuminated storefront identity',
      desc: '3D LED-lit letters built from CNC-routed aluminum — front-lit, back-lit, or reverse halo. The gold standard for retail.',
      detail: 'Custom aluminum · LED · 24-hr visibility',
      path: '/services/channel-letters',
    },
    {
      name: 'Monument Signs',
      tagline: 'Architectural ground-level presence',
      desc: 'Stone, brick, stucco, concrete, or metal bases that anchor your brand at every entrance — built to match your building.',
      detail: 'Stone · Brick · Stucco · LED optional',
      path: '/services/monument-signs',
    },
    {
      name: 'Pylon Signs',
      tagline: 'Roadway & freeway max-visibility',
      desc: 'Towering pole structures — from simple poles to multi-tenant billboard superstructures — engineered for distance visibility.',
      detail: 'Multi-tenant cabinets · LED panels · Crane install',
      path: '/services/pylon-signs',
    },
    {
      name: 'LED Message Centers',
      tagline: 'Live, remotely updated displays',
      desc: 'High-resolution LED panels integrated into monument or pylon signs. Update messages instantly from any device.',
      detail: 'Remote-managed · Full color · Energy efficient',
      path: '/services/led-message-centers',
    },
    {
      name: 'Vehicle Wraps',
      tagline: 'Your fleet as a moving billboard',
      desc: 'Full and partial vinyl wraps that turn every mile into a brand impression — single vehicles to entire fleets.',
      detail: 'Full or partial · Vinyl graphics · Fleet pricing',
      path: '/services/vehicle-wraps',
    },
    {
      name: 'Vinyl & Window Graphics',
      tagline: 'Storefronts that sell themselves',
      desc: 'Perforated film, frosted vinyl, full-color decals, wall murals, and lobby graphics for any glass or interior surface.',
      detail: 'Window · Wall · Interior · Lobby',
      path: '/services/vinyl-window-graphics',
    },
    {
      name: 'Wayfinding & ADA',
      tagline: 'Guide every visitor with clarity',
      desc: 'Interior directories, room ID, ADA-compliant braille signs, and architectural wayfinding for campuses and complexes.',
      detail: 'ADA compliant · Braille · Interior & exterior',
      path: '/services/wayfinding-ada',
    },
    {
      name: 'Non-Illuminated Signs',
      tagline: 'Banners, panels & flat signage',
      desc: 'Full-color vinyl banners, HDU carved panels, aluminum signs, trade show displays, and PVC signage for every budget.',
      detail: 'Banners · Metal · HDU · PVC · Foam board',
      path: '/services/non-illuminated-signs',
    },
    {
      name: 'National Accounts',
      tagline: 'Multi-location sign programs',
      desc: 'Coordinated rollouts for franchises and national brands — consistent execution across every location, every time.',
      detail: 'Walmart · McDonald\'s · Chevron · Allstate',
      path: '/services/national-accounts',
    },
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Free Site Consultation',
      body: 'We come to your location, assess visibility angles, review zoning, and understand your brand goals — at zero cost.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      num: '02',
      title: 'Design & 3D Rendering',
      body: 'Photorealistic mockups showing your sign on your actual building — see exactly what you get before we build a thing.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      num: '03',
      title: 'Permits & Approvals',
      body: 'We manage every permit — city zoning, electrical, structural. 100% permit success rate across 65 years.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      num: '04',
      title: 'In-House Fabrication',
      body: 'Built in our Mount Vernon shop — CNC routing, metal fabrication, LED assembly, premium finishes. No subcontractors.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      num: '05',
      title: 'Certified Installation',
      body: 'Licensed, bonded crews with crane services and electrical hookup. Storefronts to 40-foot pylons — we install it all.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      num: '06',
      title: 'Lifetime Support',
      body: 'Warranty service, maintenance plans, LED upgrades, emergency repairs. We stay your sign partner for life.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Skagit Valley Medical Center',
      type: 'Full Wayfinding + Monument',
      location: 'Mount Vernon, WA',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Riverside Bistro',
      type: 'Channel Letters + Window Graphics',
      location: 'Anacortes, WA',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Pacific Coast Federal Credit Union',
      type: 'Monument + Digital Message Center',
      location: 'Marysville, WA',
      image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Cascade Plumbing & HVAC',
      type: '14-Vehicle Fleet Wrap',
      location: 'Everett, WA',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Westgate Corporate Campus',
      type: 'Full Sign Package — All Types',
      location: 'Bellingham, WA',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
      quote: "Meyer Sign handled everything — design, permits, fabrication, installation. One call, one team, zero headaches. Our pylon gets compliments every single day.",
      name: 'Tom Berggren',
      title: 'Owner, Northwest Auto Group',
    },
    {
      quote: "Three locations, three flawless installs. Their permit knowledge alone saved us months of back-and-forth with the city. Absolute professionals.",
      name: 'Lisa Chen',
      title: 'Director of Operations, Cascade Medical Group',
    },
    {
      quote: "The 3D rendering showed me exactly how the sign would look on my building before they built it. No surprises — just perfect execution.",
      name: 'Marco Delgado',
      title: 'Franchise Owner, Pacific Coast Restaurants',
    },
  ];

  // ─── RENDER ──────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      <Nav />

      {/* ══════════════════════════════════════════════════════
          HERO — Two-column: copy left, sign collage right
      ══════════════════════════════════════════════════════ */}
      <section className="relative h-screen min-h-[600px] flex items-center bg-slate-950 overflow-hidden">

        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Commercial signage"
            className="w-full h-full object-cover opacity-10 scale-105"
          />
          {/* Gradient: strong on left, fades right */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/50"></div>
          {/* Bottom fade into next section */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent"></div>
        </div>

        {/* Subtle amber dot grid */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(245,158,11,1) 1px, transparent 1px)',
            backgroundSize: '48px 48px'
          }} />

        {/* Content — two columns */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 items-center">

            {/* LEFT: copy */}
            <div className="max-w-xl">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-3 py-1.5 mb-5 sm:mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse flex-shrink-0"></span>
                <span className="text-amber-400 text-[11px] font-semibold tracking-widest uppercase">
                  Washington State · Est. 1960 · Licensed & Bonded
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.88] tracking-tight mb-4 sm:mb-5">
                Built to Be<br />
                <span className="text-amber-400">Impossible</span><br />
                to Ignore.
              </h1>

              {/* Subline */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-7 max-w-lg">
                Custom commercial signs — designed, fabricated &amp; installed under one roof.
                Washington's sign experts for over 65 years.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <a
                  href="#contact"
                  className="group flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-black px-7 py-4 rounded-xl text-base transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-500/30"
                >
                  Get Your Free 3D Design
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a
                  href="tel:+13603369999"
                  className="flex items-center justify-center gap-2.5 border border-white/25 hover:border-amber-500/60 text-white hover:text-amber-400 font-bold px-7 py-4 rounded-xl text-base transition-all"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (360) 336-9999
                </a>
              </div>

              {/* Process direction CTA */}
              <a href="#process"
                className="group inline-flex items-center gap-2 text-slate-500 hover:text-amber-400 transition-colors text-sm mb-5">
                <svg className="w-4 h-4 flex-shrink-0 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span>How do we build your sign? See our 6-step process</span>
              </a>

              {/* Stats */}
              <div className="flex items-center gap-6 pt-5 border-t border-white/10">
                {[
                  { n: '65+', l: 'Years' },
                  { n: '5,000+', l: 'Signs Built' },
                  { n: '100%', l: 'Permit Success' },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-4">
                    {i > 0 && <div className="w-px h-6 bg-white/10" />}
                    <div>
                      <div className="text-xl sm:text-2xl font-black text-amber-400 leading-none">{s.n}</div>
                      <div className="text-slate-500 text-xs mt-0.5">{s.l}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Sign showcase collage — visible on lg+ only */}
            <div className="hidden lg:block relative">
              <div className="relative h-[480px] xl:h-[520px]">

                {/* Card 1 — Channel Letters (top right, primary) */}
                <div className="absolute right-0 top-4 w-64 xl:w-72 h-44 rounded-2xl overflow-hidden border border-amber-500/25 shadow-2xl shadow-black/70"
                  style={{transform:'rotate(2deg)'}}>
                  <ServiceVisual name="Channel Letters" />
                  <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-sm text-amber-400 text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Channel Letters
                  </div>
                </div>

                {/* Card 2 — Pylon Sign (bottom left) */}
                <div className="absolute left-0 bottom-24 w-52 xl:w-56 h-40 rounded-2xl overflow-hidden border border-white/10 shadow-xl shadow-black/50"
                  style={{transform:'rotate(-2deg)'}}>
                  <ServiceVisual name="Pylon Signs" />
                  <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-sm text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Pylon Signs
                  </div>
                </div>

                {/* Card 3 — Vehicle Wraps (bottom right) */}
                <div className="absolute right-0 bottom-0 w-60 xl:w-64 h-40 rounded-2xl overflow-hidden border border-blue-500/20 shadow-2xl shadow-black/60"
                  style={{transform:'rotate(1deg)'}}>
                  <ServiceVisual name="Vehicle Wraps" />
                  <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-sm text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Vehicle Wraps
                  </div>
                </div>

                {/* Floating badge — sign count */}
                <div className="absolute left-10 top-6 bg-amber-500 text-slate-900 font-black text-xs px-3 py-1.5 rounded-full shadow-lg shadow-amber-500/30"
                  style={{transform:'rotate(-3deg)'}}>
                  9 Sign Types
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 hover:opacity-70 transition-opacity">
          <svg className="w-5 h-5 text-amber-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SERVICES — Complete 9-type lineup
      ══════════════════════════════════════════════════════ */}
      <section id="services" className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 reveal">
            <div className="inline-block bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              What We Build
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">
              Every Type of Commercial Sign
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              From a window graphic to a 40-foot illuminated pylon — designed, fabricated, and installed by our team.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {signTypes.map((s, i) => (
              <Link key={i} to={s.path}
                className="group reveal bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-slate-200/80 hover:-translate-y-1.5 transition-all duration-300">
                <div className="relative overflow-hidden h-36 sm:h-44">
                  <ServiceVisual name={s.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="bg-amber-500 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide leading-tight">
                      {s.tagline}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1 group-hover:text-amber-600 transition-colors">{s.name}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-2">{s.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-amber-600/80 text-[10px] font-semibold uppercase tracking-wide border-t border-slate-100 pt-2">
                      {s.detail}
                    </div>
                    <svg className="w-3.5 h-3.5 text-slate-300 group-hover:text-amber-500 group-hover:translate-x-0.5 transition-all mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10 reveal">
            <a href="#contact"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all hover:-translate-y-0.5 hover:shadow-xl">
              Not sure which sign you need? Let's talk.
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          WHY SIGNAGE MATTERS — ROI data
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 bg-slate-950 relative overflow-hidden">

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 reveal">
            <div className="inline-block bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Why Signage Matters
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              Your Sign Is Your<br />
              <span className="text-amber-400">Best Sales Rep</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              It works 24 hours a day, never calls in sick, and reaches every person who passes your location.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { stat: '85%', label: 'of customers first learn about a local business from its sign' },
              { stat: '$1', label: 'invested in signage returns up to $28 in revenue for retail businesses' },
              { stat: '60%', label: 'of consumers say they didn\'t visit a business because of a poor-looking sign' },
              { stat: '50%', label: 'of walk-in customers are attracted by a new or updated sign' },
            ].map((item, i) => (
              <div key={i}
                className="reveal bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-amber-500/30 transition-all duration-300">
                <div className="text-4xl sm:text-5xl font-black text-amber-400 mb-3 leading-none">{item.stat}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PROCESS — One Team Start to Finish
      ══════════════════════════════════════════════════════ */}
      <section id="process" className="py-20 sm:py-24 bg-slate-950 relative overflow-hidden">

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(245,158,11,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.8) 1px, transparent 1px)',
            backgroundSize: '64px 64px'
          }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 reveal">
            <div className="inline-block bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Our Process
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              One Team. Start to Finish.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              We don't subcontract. Every step — design, permits, fabrication, installation — is handled by our people.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {processSteps.map((step, i) => (
              <div key={step.num}
                className="reveal group bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 hover:bg-white/10 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-11 h-11 bg-amber-500 rounded-xl flex items-center justify-center text-slate-900 flex-shrink-0 group-hover:bg-amber-400 transition-colors">
                    {step.icon}
                  </div>
                  <div className="text-4xl font-black text-white/10 leading-none select-none">{step.num}</div>
                </div>
                <h3 className="font-bold text-white text-base sm:text-lg mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>

          {/* Process bottom CTA */}
          <div className="text-center mt-10 reveal">
            <a href="#contact"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-black px-8 py-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-500/30">
              Start with a Free Site Visit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <p className="text-slate-600 text-xs mt-3">Free site consultation · 3D design concept · Zero commitment</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PORTFOLIO
      ══════════════════════════════════════════════════════ */}
      <section id="portfolio" className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12 reveal">
            <div>
              <div className="inline-block bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                Featured Work
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                Signs That Tell a Story
              </h2>
            </div>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              Recent projects across Washington State — every one built in-house.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolio.map((p, i) => (
              <div key={i}
                className="reveal group relative overflow-hidden rounded-2xl border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <img src={p.image} alt={p.title}
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">{p.type}</div>
                  <h3 className="text-white font-bold text-base leading-tight mb-1">{p.title}</h3>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {p.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          VIDEO — See the Craft (dedicated section)
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 bg-slate-950 relative overflow-hidden">

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(245,158,11,0.8) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: copy */}
            <div className="reveal">
              <div className="inline-block bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                See the Craft
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
                Signs Built by<br />
                <span className="text-amber-400">Real Craftsmen.</span>
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                Every sign is cut, formed, wired, and finished in our Mount Vernon shop — by our team, with our tools, to our standards. No outsourcing. No shortcuts.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'CNC routing of aluminum channel letter components',
                  'In-house LED assembly and electrical wiring',
                  'Certified installation with our own crane crew',
                  'From raw material to your storefront in weeks, not months',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                    <div className="w-5 h-5 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-black px-6 py-3.5 rounded-xl text-sm transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-500/30">
                Start Your Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Right: Video embed */}
            <div className="reveal">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 bg-slate-900">
                <div className="relative" style={{paddingBottom:'56.25%'}}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/1qWcpeVx3cg?rel=0&modestbranding=1&color=white"
                    title="Meyer Sign — See the Craft"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                {/* Caption */}
                <div className="px-5 py-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-white font-semibold text-sm">Inside the Meyer Sign Shop</div>
                    <div className="text-slate-400 text-xs">Mount Vernon, WA · Est. 1960</div>
                  </div>
                  <div className="bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest">
                    65+ Years
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          MID-PAGE CTA STRIP — Second conversion point
      ══════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-14 bg-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-1">Like what you see?</h3>
              <p className="text-slate-800 text-sm sm:text-base">
                Free site visit + 3D rendering of your sign on your building. Zero commitment.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
              <a href="tel:+13603369999"
                className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold px-6 py-3.5 rounded-xl text-sm transition-all whitespace-nowrap">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (360) 336-9999
              </a>
              <a href="#contact"
                className="bg-white hover:bg-slate-50 text-slate-900 font-black px-6 py-3.5 rounded-xl text-sm transition-all whitespace-nowrap">
                Get Free 3D Design →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          INDUSTRIES WE SERVE
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <div className="reveal">
              <div className="inline-block bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                Industries We Serve
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-5 leading-tight">
                We Know Your<br />
                <span className="text-blue-700">Industry's Needs</span>
              </h2>
              <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-6">
                Every industry has unique sign codes, brand standards, and visibility challenges. Our team has worked across all of them — we come prepared.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Channel Letters', 'Monument Signs', 'Digital Displays', 'Fleet Wraps', 'Wayfinding', 'ADA Compliance'].map(tag => (
                  <span key={tag} className="bg-white border border-slate-200 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-full">{tag}</span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 reveal">
              {industries.map((ind, i) => (
                <div key={i}
                  className="flex items-center gap-3 bg-white border border-slate-100 rounded-xl p-3.5 sm:p-4 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 group">
                  <span className="text-xl sm:text-2xl flex-shrink-0">{ind.icon}</span>
                  <span className="font-semibold text-slate-800 text-xs sm:text-sm group-hover:text-blue-800 transition-colors leading-tight">{ind.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ABOUT — Trust & Credentials
      ══════════════════════════════════════════════════════ */}
      <section id="about" className="py-20 sm:py-24 bg-slate-950 relative overflow-hidden">

        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(245,158,11,0.8) 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Fabrication image */}
            <div className="reveal order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Meyer Sign fabrication shop"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover opacity-80"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                    <div className="text-white font-semibold text-sm mb-0.5">Built In-House. In Mount Vernon, WA.</div>
                    <div className="text-slate-300 text-xs">CNC routing · Metal fabrication · LED assembly · Premium finishing</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Copy + credentials */}
            <div className="reveal order-1 lg:order-2">
              <div className="inline-block bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                About Meyer Sign
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
                Three Generations.<br />
                <span className="text-amber-400">One Obsession.</span>
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4 text-sm sm:text-base">
                Founded in 1960, Meyer Sign has grown from a hand-lettering shop into Washington's premier full-service commercial signage firm — without ever losing the craftsmanship and personal service that made us who we are.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8 text-sm">
                One team owns every step: design, permits, fabrication, installation, maintenance. No subcontractors. No handoffs. No excuses.
              </p>

              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { badge: 'WA Licensed', detail: 'General & Electrical Contractor' },
                  { badge: 'Fully Bonded', detail: 'Licensed, Bonded & Insured' },
                  { badge: 'UL Listed', detail: 'Underwriters Laboratories' },
                  { badge: 'ISA Member', detail: 'International Sign Association' },
                  { badge: 'OSHA Certified', detail: 'Safety-Certified Crews' },
                  { badge: 'Crane Service', detail: 'In-House for Large Jobs' },
                ].map((c, i) => (
                  <div key={i}
                    className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3.5 py-3 hover:border-amber-500/20 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                    <div>
                      <div className="text-white text-xs sm:text-sm font-bold leading-tight">{c.badge}</div>
                      <div className="text-slate-500 text-[10px] sm:text-xs leading-tight">{c.detail}</div>
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
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="text-center max-w-xl mx-auto mb-12 reveal">
            <div className="inline-block bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              What Clients Say
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Don't Take Our Word for It
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i}
                className="reveal bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, si) => (
                    <svg key={si} className="w-4 h-4 text-amber-500 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-slate-700 leading-relaxed mb-5 text-sm sm:text-base italic">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                    <div className="text-slate-400 text-xs">{t.title}</div>
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
      <section className="py-8 bg-blue-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-white text-xs font-bold uppercase tracking-widest flex-shrink-0">
              Serving Washington State
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
              {['Mount Vernon', 'Burlington', 'Anacortes', 'Bellingham', 'Marysville', 'Everett', 'Arlington', 'Oak Harbor'].map(city => (
                <span key={city} className="text-blue-100 text-sm">{city}</span>
              ))}
            </div>
            <div className="text-blue-100 text-xs font-medium whitespace-nowrap flex-shrink-0">
              + National Accounts
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CONTACT — Get a Quote
      ══════════════════════════════════════════════════════ */}
      <section id="contact" className="py-20 sm:py-24 bg-slate-950 relative overflow-hidden">

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />

        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(245,158,11,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.5) 1px, transparent 1px)',
            backgroundSize: '52px 52px'
          }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left: copy + contact info */}
            <div className="reveal">
              <div className="inline-block bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                Start Your Project
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
                Ready to Get<br />
                <span className="text-amber-400">Noticed?</span>
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10">
                Tell us about your project. We follow up within 24 hours with a site assessment and 3D design concept — free, no commitment.
              </p>

              <div className="space-y-4">
                <a href="tel:+13603369999"
                  className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg group-hover:text-amber-400 transition-colors">(360) 336-9999</div>
                    <div className="text-slate-500 text-sm">Call or text anytime</div>
                  </div>
                </a>
                <a href="mailto:info@meyersign.com"
                  className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
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
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">2608 Old Highway 99 South</div>
                    <div className="text-slate-500 text-sm">Mount Vernon, WA 98273</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <p className="text-slate-300 text-sm leading-relaxed">
                  <span className="text-white font-semibold">No pressure.</span> Free consultation includes a site survey, permit feasibility review, and 3D rendering concept.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="reveal">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/50">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-1">Tell Us About Your Project</h3>
                <p className="text-slate-500 text-sm mb-6">We'll respond within 24 hours with a plan and a design concept.</p>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Your Name *</label>
                      <input type="text" placeholder="John Smith"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Business Name *</label>
                      <input type="text" placeholder="Your Business"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm transition-all" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Phone *</label>
                      <input type="tel" placeholder="(360) 555-0100"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Email *</label>
                      <input type="email" placeholder="you@business.com"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Sign Type</label>
                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm transition-all appearance-none">
                      <option value="">Select a sign type...</option>
                      <option>Channel Letters (illuminated storefront)</option>
                      <option>Monument / Ground Sign</option>
                      <option>Pylon / Pole Sign</option>
                      <option>LED Message Center</option>
                      <option>Vehicle Wraps / Fleet Graphics</option>
                      <option>Vinyl & Window Graphics</option>
                      <option>Wayfinding / ADA Signage</option>
                      <option>Non-Illuminated / Banners</option>
                      <option>National Account / Multi-Location</option>
                      <option>Multiple types — full package</option>
                      <option>Not sure — need consultation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Project Details</label>
                    <textarea rows={3} placeholder="Location, what you're trying to achieve, timeline, any existing signs..."
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm resize-none transition-all"></textarea>
                  </div>
                  <button type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-black py-4 rounded-xl text-base transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-500/25">
                    Get My Free 3D Design
                  </button>
                  <p className="text-center text-xs text-slate-400">
                    Free site visit · 3D rendering · No obligation · 24-hour response
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
};

export default MeyerSignProfessional;
