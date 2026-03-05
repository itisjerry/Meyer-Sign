/* eslint-disable */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const ContactPage = () => {
  const PAGE_TITLE = 'Get a Free 3D Sign Design | Meyer Sign & Advertising — Mount Vernon, WA';
  const PAGE_DESC  = "Start your commercial sign project with a free site visit and 3D rendering. No commitment. Meyer Sign — Washington's sign experts since 1960. Call (360) 424-1325.";
  const PAGE_URL   = 'https://meyersign.com/contact';

  useEffect(() => {
    document.title = PAGE_TITLE;
    const set = (sel, attr, val) => { const el = document.querySelector(sel); if (el) el.setAttribute(attr, val); };
    set('meta[name="description"]',        'content', PAGE_DESC);
    set('meta[property="og:title"]',        'content', PAGE_TITLE);
    set('meta[property="og:description"]',  'content', PAGE_DESC);
    set('meta[property="og:url"]',          'content', PAGE_URL);
    set('meta[name="twitter:title"]',       'content', PAGE_TITLE);
    set('meta[name="twitter:description"]', 'content', PAGE_DESC);
    set('meta[name="twitter:url"]',         'content', PAGE_URL);
    set('link[rel="canonical"]',            'href',    PAGE_URL);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Nav />

      {/* Hero */}
      <section className="relative pt-16 min-h-[50vh] flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025]"
          style={{backgroundImage:'radial-gradient(circle, rgba(245,158,11,1) 1px, transparent 1px)', backgroundSize:'48px 48px'}} />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/80 to-slate-950" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-3 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse flex-shrink-0"></span>
            <span className="text-amber-400 text-[11px] font-semibold tracking-widest uppercase">Free Consultation · No Commitment</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[0.9] tracking-tight mb-5">
            Let's Build Something<br />
            <span className="text-amber-400">Impossible to Ignore.</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Tell us about your project. We'll follow up within 24 hours with a site assessment and a photorealistic 3D rendering of your sign on your actual building — completely free.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left: what to expect + contact details */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6 leading-tight">
                What Happens After You Submit
              </h2>

              <div className="space-y-5 mb-10">
                {[
                  { step: '01', title: 'We call you within 24 hours', body: 'A real person — not an email sequence. We confirm your location, timeline, and sign goals in a quick conversation.' },
                  { step: '02', title: 'Free site visit at your location', body: 'We visit, measure visibility angles, review zoning limits, and assess the best sign placement for maximum impact.' },
                  { step: '03', title: 'Photorealistic 3D rendering', body: 'We design your sign and render it on a photo of your actual building — so you see exactly what you\'re getting before we build anything.' },
                  { step: '04', title: 'Detailed proposal', body: 'A clear, itemized proposal covering design, fabrication, permits, and installation. No surprise charges. No vague estimates.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-slate-900 font-black text-sm flex-shrink-0">{item.step}</div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm sm:text-base mb-1">{item.title}</div>
                      <div className="text-slate-500 text-sm leading-relaxed">{item.body}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact details */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-4">
                <h3 className="font-black text-slate-900 text-base mb-4">Prefer to reach out directly?</h3>
                <a href="tel:+13604241325" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-200 flex items-center justify-center text-amber-600 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-base group-hover:text-amber-600 transition-colors">(360) 424-1325</div>
                    <div className="text-slate-500 text-xs">Toll Free: (800) 285-4598 · Fax: (360) 424-5212</div>
                  </div>
                </a>
                <a href="mailto:mike@meyersign.com" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-200 flex items-center justify-center text-amber-600 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-base group-hover:text-amber-600 transition-colors">mike@meyersign.com</div>
                    <div className="text-slate-500 text-xs">Response within 24 hours</div>
                  </div>
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-200 flex items-center justify-center text-amber-600 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-base">2608 Old Highway 99 South</div>
                    <div className="text-slate-500 text-xs">Mount Vernon, WA 98273</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-100">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-1">Tell Us About Your Project</h3>
                <p className="text-slate-500 text-sm mb-6">We respond within 24 hours with a plan and a design concept.</p>

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
                      <input type="email" placeholder="your@email.com"
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
                    <textarea rows={4} placeholder="Location, what you're trying to achieve, timeline, any existing signs..."
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

export default ContactPage;
