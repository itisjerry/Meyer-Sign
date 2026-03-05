/* eslint-disable */
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import ServiceVisual from './ServiceVisual';

const CheckIcon = () => (
  <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
  </svg>
);

const ServicePage = ({
  title,
  metaDescription,
  badge,
  headline,
  subheadline,
  intro,
  whyTitle,
  stats,
  features,
  options,
  proofLine,
  related,
}) => {
  const { pathname } = useLocation();

  const BASE = 'https://meyersign.com';
  const PAGE_URL = `${BASE}${pathname}`;

  useEffect(() => {
    document.title = title;
    const set = (sel, attr, val) => { const el = document.querySelector(sel); if (el) el.setAttribute(attr, val); };
    set('meta[name="description"]',        'content', metaDescription);
    set('meta[property="og:title"]',        'content', title);
    set('meta[property="og:description"]',  'content', metaDescription);
    set('meta[property="og:url"]',          'content', PAGE_URL);
    set('meta[name="twitter:title"]',       'content', title);
    set('meta[name="twitter:description"]', 'content', metaDescription);
    set('meta[name="twitter:url"]',         'content', PAGE_URL);
    set('link[rel="canonical"]',            'href',    PAGE_URL);
    window.scrollTo(0, 0);
  }, [title, metaDescription, PAGE_URL]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative pt-16 min-h-[75vh] flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025]"
          style={{backgroundImage:'radial-gradient(circle, rgba(245,158,11,1) 1px, transparent 1px)', backgroundSize:'48px 48px'}} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">

            {/* Left: copy */}
            <div className="max-w-xl">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-slate-500 text-xs mb-6">
                <Link to="/" className="hover:text-slate-300 transition-colors">Home</Link>
                <span>/</span>
                <a href="/#services" className="hover:text-slate-300 transition-colors">Services</a>
                <span>/</span>
                <span className="text-slate-400">{badge}</span>
              </div>

              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-3 py-1.5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse flex-shrink-0"></span>
                <span className="text-amber-400 text-[11px] font-semibold tracking-widest uppercase">
                  {badge} · Meyer Sign & Advertising
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[0.9] tracking-tight mb-5">
                {headline.split('|').map((part, i) =>
                  i % 2 === 0
                    ? <span key={i}>{part}</span>
                    : <span key={i} className="text-amber-400">{part}</span>
                )}
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                {subheadline}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <Link to="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-black px-7 py-4 rounded-xl text-base transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-500/30">
                  Get Your Free 3D Design
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </Link>
                <a href="tel:+13603369999"
                  className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-amber-500/60 text-white hover:text-amber-400 font-bold px-7 py-4 rounded-xl text-base transition-all">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  (360) 336-9999
                </a>
              </div>

              {proofLine && (
                <p className="text-slate-500 text-xs">{proofLine}</p>
              )}
            </div>

            {/* Right: large visual */}
            <div className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60"
                style={{height:'360px'}}>
                <ServiceVisual name={badge} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ALL SERVICES QUICK-NAV ── */}
      <div className="bg-slate-900 border-b border-white/5 sticky top-16 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-1 min-w-max">
            <span className="text-slate-500 text-xs font-semibold uppercase tracking-widest mr-2 flex-shrink-0">Services:</span>
            {[
              { name: 'Channel Letters',        path: '/services/channel-letters' },
              { name: 'Monument Signs',          path: '/services/monument-signs' },
              { name: 'Pylon Signs',             path: '/services/pylon-signs' },
              { name: 'LED Message Centers',     path: '/services/led-message-centers' },
              { name: 'Vehicle Wraps',           path: '/services/vehicle-wraps' },
              { name: 'Vinyl & Window',          path: '/services/vinyl-window-graphics' },
              { name: 'Wayfinding & ADA',        path: '/services/wayfinding-ada' },
              { name: 'Non-Illuminated',         path: '/services/non-illuminated-signs' },
              { name: 'National Accounts',       path: '/services/national-accounts' },
            ].map((s) => (
              <Link
                key={s.path}
                to={s.path}
                className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  pathname === s.path
                    ? 'bg-amber-500/20 border border-amber-500/40 text-amber-400'
                    : 'text-slate-400 hover:text-white hover:bg-white/8'
                }`}
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── INTRO / WHY ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Intro copy */}
            <div>
              <div className="inline-block bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                Why It Works
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mb-5 leading-tight">
                {whyTitle}
              </h2>
              <div className="text-slate-600 text-base leading-relaxed space-y-4">
                {intro.map((para, i) => <p key={i}>{para}</p>)}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="flex items-start gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:border-amber-200 transition-colors">
                  <div className="text-3xl sm:text-4xl font-black text-amber-500 leading-none flex-shrink-0 w-20">{s.number}</div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm sm:text-base mb-1">{s.label}</div>
                    <div className="text-slate-500 text-sm leading-relaxed">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-16 sm:py-20 bg-slate-950">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 leading-tight">
              What You Get
            </h2>
            <p className="text-slate-400 text-base">Every project includes our full in-house service — no subcontractors, no handoffs.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 hover:border-amber-500/25 transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-amber-500/20 border border-amber-500/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm mb-1">{f.title}</div>
                    <div className="text-slate-400 text-sm leading-relaxed">{f.body}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPTIONS / SPECS ── */}
      {options && (
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">Available Options</h2>
              <p className="text-slate-500 text-base">Every sign is custom-built to your brand, space, and budget.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {options.map((opt, i) => (
                <div key={i} className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
                  <CheckIcon />
                  <span className="text-slate-800 text-sm font-medium">{opt}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── RELATED SERVICES ── */}
      {related && related.length > 0 && (
        <section className="py-14 sm:py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6">Frequently Paired With</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((r, i) => (
                <Link key={i} to={r.path}
                  className="group flex items-center justify-between bg-white border border-slate-200 rounded-2xl px-5 py-4 hover:border-amber-300 hover:shadow-lg transition-all">
                  <div>
                    <div className="font-bold text-slate-900 text-sm group-hover:text-amber-600 transition-colors">{r.name}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{r.tagline}</div>
                  </div>
                  <svg className="w-4 h-4 text-slate-300 group-hover:text-amber-500 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BOTTOM CTA ── */}
      <section className="py-16 sm:py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{backgroundImage:'linear-gradient(rgba(245,158,11,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.8) 1px, transparent 1px)', backgroundSize:'64px 64px'}} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Ready to Start?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
            Let's Build Something<br />
            <span className="text-amber-400">Impossible to Ignore.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Free site visit · Photorealistic 3D rendering on your actual building · No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-black px-8 py-4 rounded-xl text-base transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-500/30">
              Get My Free 3D Design
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </Link>
            <a href="tel:+13603369999"
              className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-amber-500/50 text-white hover:text-amber-400 font-bold px-8 py-4 rounded-xl text-base transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              (360) 336-9999
            </a>
          </div>
          <p className="text-slate-600 text-xs mt-4">65+ years · Washington licensed & bonded · 100% permit success rate</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePage;
