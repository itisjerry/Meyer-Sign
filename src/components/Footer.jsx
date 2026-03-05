/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const serviceLinks = [
  { name: 'Channel Letters',        path: '/services/channel-letters' },
  { name: 'Monument Signs',          path: '/services/monument-signs' },
  { name: 'Pylon Signs',             path: '/services/pylon-signs' },
  { name: 'LED Message Centers',     path: '/services/led-message-centers' },
  { name: 'Vehicle Wraps',           path: '/services/vehicle-wraps' },
  { name: 'Vinyl & Window Graphics', path: '/services/vinyl-window-graphics' },
  { name: 'Wayfinding & ADA',        path: '/services/wayfinding-ada' },
  { name: 'Non-Illuminated Signs',   path: '/services/non-illuminated-signs' },
  { name: 'National Accounts',       path: '/services/national-accounts' },
];

const Footer = () => (
  <footer className="bg-black py-14 sm:py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10">

        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center flex-shrink-0">
              <span className="text-slate-900 font-black text-base">M</span>
            </div>
            <div>
              <div className="text-white font-bold leading-tight">Meyer Sign</div>
              <div className="text-amber-400/70 text-[10px] font-semibold tracking-widest">& ADVERTISING</div>
            </div>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-5">
            Washington's full-service commercial signage company — designed, fabricated, and installed under one roof since 1960.
          </p>
          <div className="text-slate-500 text-sm space-y-1">
            <div>(360) 336-9999</div>
            <div>info@meyersign.com</div>
            <div>2608 Old Highway 99 South</div>
            <div>Mount Vernon, WA 98273</div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-widest">Services</h4>
          <ul className="space-y-2.5">
            {serviceLinks.map(s => (
              <li key={s.path}>
                <Link to={s.path} className="text-slate-500 hover:text-slate-200 text-sm transition-colors">{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-widest">Company</h4>
          <ul className="space-y-2.5">
            {[['About Us', '/#about'], ['Our Process', '/#process'], ['Portfolio', '/#portfolio'], ['Get a Quote', '/contact']].map(([label, href]) => (
              <li key={label}>
                {href.startsWith('/') && !href.startsWith('/#')
                  ? <Link to={href} className="text-slate-500 hover:text-slate-200 text-sm transition-colors">{label}</Link>
                  : <a href={href} className="text-slate-500 hover:text-slate-200 text-sm transition-colors">{label}</a>
                }
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-widest">Service Area</h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {['Mount Vernon', 'Burlington', 'Anacortes', 'Bellingham', 'Marysville', 'Everett', 'Arlington', 'Oak Harbor', 'Sedro-Woolley'].map(city => (
              <span key={city} className="bg-white/5 text-slate-400 text-xs px-2 py-1 rounded-md">{city}</span>
            ))}
          </div>
          <div className="space-y-1 text-xs text-slate-600">
            <p>WA General Contractor #MEYERSI099QL</p>
            <p>WA Electrical Contractor Licensed</p>
            <p>UL Listed · ISA Member</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 text-xs">
          © {new Date().getFullYear()} Meyer Sign & Advertising. All rights reserved.
        </p>
        <p className="text-slate-700 text-xs">
          Mount Vernon, WA · Est. 1960 · Licensed, Bonded & Insured
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
