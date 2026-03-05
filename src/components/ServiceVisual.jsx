/* eslint-disable */
const ServiceVisual = ({ name }) => {
  switch (name) {
    case 'Channel Letters':
      return (
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-slate-900">
          <div className="absolute inset-0" style={{background:'radial-gradient(ellipse 80% 50% at 50% 65%, rgba(245,158,11,0.18) 0%, transparent 70%)'}} />
          <div className="relative" style={{filter:'drop-shadow(0 0 12px rgba(245,158,11,0.65))'}}>
            <svg viewBox="0 0 180 78" className="w-36 sm:w-44">
              <text x="10" y="62" fontSize="57" fontWeight="900" fontFamily="'Arial Black',sans-serif" fill="rgba(161,89,0,0.45)" letterSpacing="6">ABC</text>
              <text x="8" y="59" fontSize="57" fontWeight="900" fontFamily="'Arial Black',sans-serif" fill="#f59e0b" letterSpacing="6">ABC</text>
            </svg>
          </div>
          <div className="absolute bottom-2 right-3 flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" style={{animationDelay:'0.15s'}} />
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" style={{animationDelay:'0.3s'}} />
          </div>
          <div className="absolute bottom-2 left-3 text-amber-400/50 text-[8px] font-bold tracking-widest uppercase">LED Illuminated</div>
        </div>
      );
    case 'Monument Signs':
      return (
        <div className="w-full h-full flex items-end justify-center relative overflow-hidden bg-gradient-to-b from-sky-200 to-slate-300 pb-1">
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-slate-400" />
          <div className="absolute bottom-8 left-0 right-0 h-2 bg-green-700/50" />
          <div className="relative flex flex-col items-center mb-7 z-10">
            <div className="bg-slate-800 border border-slate-600 px-4 py-2.5 w-36 text-center shadow-2xl rounded-sm">
              <div className="text-amber-400 text-[9px] font-black tracking-widest uppercase">RIVERSIDE PLAZA</div>
              <div className="border-t border-amber-500/30 pt-1 mt-1">
                <div className="text-slate-300 text-[7px] tracking-widest">Est. 1990 · Suite 100</div>
              </div>
            </div>
            <div className="w-32 h-10 relative overflow-hidden" style={{background:'repeating-linear-gradient(180deg,#94a3b8 0,#94a3b8 8px,#7a8fa0 8px,#7a8fa0 9px)'}}>
              <div className="absolute inset-0" style={{backgroundImage:'repeating-linear-gradient(90deg,transparent 0,transparent 18px,rgba(0,0,0,0.12) 18px,rgba(0,0,0,0.12) 19px)'}} />
            </div>
            <div className="w-40 h-3 bg-slate-500 rounded-b-sm" />
          </div>
        </div>
      );
    case 'Pylon Signs':
      return (
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-sky-300 to-sky-100">
          <div className="flex flex-col items-center">
            <div className="bg-slate-800 border border-slate-600 rounded-sm w-24 shadow-2xl overflow-hidden">
              <div className="bg-amber-500 px-2 py-1.5 text-center">
                <div className="text-slate-900 text-[8px] font-black tracking-widest">PLAZA CENTER</div>
              </div>
              <div className="bg-white px-2 py-1.5 space-y-1.5">
                <div className="flex items-center justify-between gap-1">
                  <div className="bg-red-600 text-white text-[6px] px-1 py-0.5 font-black rounded-sm">TARGET</div>
                  <div className="text-slate-400 text-[6px]">Anchor</div>
                </div>
                <div className="flex items-center justify-between gap-1">
                  <div className="bg-blue-700 text-white text-[6px] px-1 py-0.5 font-black rounded-sm">BANK</div>
                  <div className="text-slate-400 text-[6px]">Suite A</div>
                </div>
                <div className="flex items-center justify-between gap-1">
                  <div className="bg-green-700 text-white text-[6px] px-1 py-0.5 font-black rounded-sm">CAFÉ</div>
                  <div className="text-slate-400 text-[6px]">Suite B</div>
                </div>
              </div>
            </div>
            <div className="w-3 bg-gradient-to-b from-slate-500 to-slate-600 shadow-lg" style={{height:'56px'}} />
            <div className="w-10 h-3 bg-slate-500 rounded-sm" />
          </div>
        </div>
      );
    case 'LED Message Centers':
      return (
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-slate-950">
          <div className="relative">
            <div className="bg-slate-800 border-2 border-slate-500 rounded-xl p-2 shadow-2xl">
              <div className="bg-black rounded-lg p-3 relative overflow-hidden" style={{width:'138px',height:'68px'}}>
                <div className="absolute inset-0 pointer-events-none opacity-20" style={{backgroundImage:'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.5) 2px,rgba(0,0,0,0.5) 3px)'}} />
                <div className="text-red-500 text-[10px] font-mono font-bold">TODAY'S SPECIAL</div>
                <div className="text-amber-400 text-[14px] font-mono font-black mt-0.5">50% OFF!</div>
                <div className="text-green-400 text-[9px] font-mono mt-1">OPEN 8AM – 9PM</div>
                <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              </div>
              <div className="flex items-center justify-between px-1 pt-1.5">
                <div className="text-slate-500 text-[7px] font-mono">LED MESSAGE CENTER</div>
                <div className="flex gap-0.5">{[1,2,3].map(i=><div key={i} className="w-1 h-2 rounded-sm bg-slate-600"/>)}</div>
              </div>
            </div>
          </div>
        </div>
      );
    case 'Vehicle Wraps':
      return (
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-slate-100">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-200" />
          <svg viewBox="0 0 190 110" className="w-full h-full py-2 px-1">
            <rect x="15" y="38" width="158" height="48" rx="5" fill="#1e3a8a"/>
            <path d="M28 38 Q32 20 50 17 L145 17 Q162 17 165 38" fill="#172554"/>
            <path d="M50 19 Q51 29 54 38 L118 38 L118 19 Z" fill="#7dd3fc" opacity="0.45"/>
            <rect x="128" y="24" width="30" height="13" rx="3" fill="#7dd3fc" opacity="0.45"/>
            <path d="M15 58 L72 40 L173 50 L173 58 Z" fill="#3b82f6" opacity="0.55"/>
            <rect x="22" y="44" width="85" height="18" rx="2" fill="rgba(255,255,255,0.1)"/>
            <text x="30" y="55" fontSize="7.5" fontWeight="900" fill="white" fontFamily="Arial">CASCADE PLUMBING</text>
            <text x="30" y="64" fontSize="6" fill="#fbbf24" fontFamily="Arial">(360) 555-0100</text>
            <circle cx="58" cy="89" r="12" fill="#0f172a"/><circle cx="58" cy="89" r="7" fill="#334155"/><circle cx="58" cy="89" r="3" fill="#64748b"/>
            <circle cx="145" cy="89" r="12" fill="#0f172a"/><circle cx="145" cy="89" r="7" fill="#334155"/><circle cx="145" cy="89" r="3" fill="#64748b"/>
          </svg>
        </div>
      );
    case 'Vinyl & Window Graphics':
      return (
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-slate-200">
          <svg viewBox="0 0 160 110" className="w-full h-full">
            <rect x="0" y="0" width="160" height="110" fill="#cbd5e1"/>
            <rect x="8" y="6" width="144" height="86" rx="3" fill="#94a3b8"/>
            <rect x="12" y="10" width="136" height="78" rx="2" fill="#1e40af"/>
            <rect x="12" y="10" width="136" height="31" fill="#1d4ed8"/>
            <text x="80" y="32" fontSize="19" fontWeight="900" fill="white" fontFamily="Arial Black" textAnchor="middle">OPEN</text>
            <rect x="12" y="41" width="136" height="1" fill="rgba(255,255,255,0.15)"/>
            <text x="80" y="63" fontSize="11" fontWeight="bold" fill="#fbbf24" fontFamily="Arial" textAnchor="middle">GRAND OPENING</text>
            <text x="80" y="78" fontSize="8" fill="white" fontFamily="Arial" textAnchor="middle" opacity="0.7">meyersign.com</text>
            <rect x="8" y="6" width="144" height="86" rx="3" fill="none" stroke="#64748b" strokeWidth="3"/>
            <rect x="55" y="64" width="50" height="38" rx="1" fill="#94a3b8"/>
            <rect x="58" y="67" width="44" height="33" rx="1" fill="#bfdbfe" opacity="0.35"/>
            <circle cx="98" cy="83" r="2" fill="#64748b"/>
          </svg>
        </div>
      );
    case 'Wayfinding & ADA':
      return (
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100" />
          <svg viewBox="0 0 160 110" className="w-5/6">
            <rect x="8" y="5" width="144" height="100" rx="4" fill="#1e293b"/>
            <rect x="12" y="9" width="136" height="92" rx="3" fill="#0f172a"/>
            <rect x="12" y="9" width="136" height="19" rx="3" fill="#1e3a8a"/>
            <text x="80" y="22" fontSize="7.5" fill="white" fontFamily="Arial" fontWeight="bold" textAnchor="middle">BUILDING DIRECTORY</text>
            <line x1="12" y1="32" x2="148" y2="32" stroke="#1e3a8a" strokeWidth="0.7"/>
            <text x="19" y="45" fontSize="7" fill="#94a3b8" fontFamily="Arial">Reception</text>
            <text x="143" y="45" fontSize="11" fill="#f59e0b" fontFamily="Arial" textAnchor="end">→</text>
            <line x1="12" y1="51" x2="148" y2="51" stroke="#1e293b" strokeWidth="0.7"/>
            <text x="19" y="63" fontSize="7" fill="#94a3b8" fontFamily="Arial">Suites 100–150</text>
            <text x="143" y="63" fontSize="11" fill="#f59e0b" fontFamily="Arial" textAnchor="end">→</text>
            <line x1="12" y1="69" x2="148" y2="69" stroke="#1e293b" strokeWidth="0.7"/>
            <text x="19" y="81" fontSize="7" fill="#94a3b8" fontFamily="Arial">Conference Rooms</text>
            <text x="143" y="81" fontSize="11" fill="#f59e0b" fontFamily="Arial" textAnchor="end">↑</text>
            <line x1="12" y1="87" x2="148" y2="87" stroke="#1e293b" strokeWidth="0.7"/>
            <text x="19" y="99" fontSize="7" fill="#94a3b8" fontFamily="Arial">Suites 200–250</text>
            <text x="143" y="99" fontSize="11" fill="#f59e0b" fontFamily="Arial" textAnchor="end">↑</text>
          </svg>
          <div className="absolute bottom-2 right-2 bg-blue-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded">ADA ✓</div>
        </div>
      );
    case 'Non-Illuminated Signs':
      return (
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-slate-50">
          <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-100" />
          <svg viewBox="0 0 170 110" className="w-5/6">
            <rect x="5" y="14" width="160" height="76" rx="4" fill="#1e40af"/>
            <polygon points="5,52 52,14 52,90" fill="#2563eb"/>
            <polygon points="165,52 118,14 118,90" fill="#2563eb"/>
            <rect x="52" y="14" width="66" height="4" fill="#fbbf24"/>
            <rect x="52" y="86" width="66" height="4" fill="#fbbf24"/>
            <text x="85" y="55" fontSize="21" fontWeight="900" fill="white" fontFamily="Arial Black" textAnchor="middle">SALE</text>
            <text x="85" y="70" fontSize="8" fill="#fbbf24" fontFamily="Arial" textAnchor="middle" fontWeight="bold">LIMITED TIME OFFER</text>
            <circle cx="11" cy="21" r="3.5" fill="#93c5fd"/><circle cx="159" cy="21" r="3.5" fill="#93c5fd"/>
            <circle cx="11" cy="83" r="3.5" fill="#93c5fd"/><circle cx="159" cy="83" r="3.5" fill="#93c5fd"/>
          </svg>
        </div>
      );
    case 'National Accounts':
      return (
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-slate-900">
          <div className="absolute inset-0" style={{background:'radial-gradient(ellipse at 50% 55%, rgba(30,58,138,0.5) 0%, transparent 70%)'}} />
          <svg viewBox="0 0 160 110" className="w-5/6">
            <path d="M25 32 L140 32 L138 78 L85 83 L65 73 L22 70 Z" fill="#1e3a8a" opacity="0.4" stroke="#334155" strokeWidth="1"/>
            <line x1="25" y1="55" x2="140" y2="55" stroke="#1e3a8a" strokeWidth="0.5" opacity="0.6"/>
            <line x1="82" y1="32" x2="82" y2="83" stroke="#1e3a8a" strokeWidth="0.5" opacity="0.6"/>
            <circle cx="72" cy="54" r="5.5" fill="#f59e0b" opacity="0.2"/><circle cx="72" cy="54" r="3.5" fill="#f59e0b"/>
            <line x1="72" y1="54" x2="72" y2="62" stroke="#f59e0b" strokeWidth="1.5"/>
            <text x="64" y="48" fontSize="6" fill="#fbbf24" fontFamily="Arial" fontWeight="bold">HQ</text>
            <circle cx="95" cy="60" r="2.5" fill="#60a5fa" opacity="0.8"/><line x1="95" y1="60" x2="95" y2="66" stroke="#60a5fa" strokeWidth="1" opacity="0.8"/>
            <circle cx="55" cy="47" r="2.5" fill="#60a5fa" opacity="0.8"/><line x1="55" y1="47" x2="55" y2="53" stroke="#60a5fa" strokeWidth="1" opacity="0.8"/>
            <circle cx="112" cy="52" r="2.5" fill="#60a5fa" opacity="0.8"/><line x1="112" y1="52" x2="112" y2="58" stroke="#60a5fa" strokeWidth="1" opacity="0.8"/>
            <circle cx="47" cy="63" r="2.5" fill="#60a5fa" opacity="0.8"/><line x1="47" y1="63" x2="47" y2="69" stroke="#60a5fa" strokeWidth="1" opacity="0.8"/>
            <circle cx="125" cy="58" r="2.5" fill="#60a5fa" opacity="0.8"/><line x1="125" y1="58" x2="125" y2="64" stroke="#60a5fa" strokeWidth="1" opacity="0.8"/>
            <text x="80" y="100" fontSize="6" fill="#475569" fontFamily="Arial" textAnchor="middle">Walmart · McDonald's · Chevron · Allstate</text>
          </svg>
        </div>
      );
    default:
      return <div className="w-full h-full bg-slate-800" />;
  }
};

export default ServiceVisual;
