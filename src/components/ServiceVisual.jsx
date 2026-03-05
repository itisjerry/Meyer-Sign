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
        <div className="w-full h-full flex items-end justify-center relative overflow-hidden" style={{background:'linear-gradient(180deg,#0f172a 0%,#1e293b 60%,#334155 100%)'}}>
          {/* Road/ground */}
          <div className="absolute bottom-0 left-0 right-0 h-8" style={{background:'#1e293b'}} />
          <div className="absolute bottom-7 left-0 right-0 h-0.5" style={{background:'repeating-linear-gradient(90deg,#f59e0b 0,#f59e0b 18px,transparent 18px,transparent 32px)'}} />
          {/* Van body */}
          <svg viewBox="0 0 200 95" className="w-full" style={{marginBottom:'10px'}}>
            {/* Van 1 — full wrap */}
            <rect x="8" y="30" width="112" height="44" rx="4" fill="#1d4ed8"/>
            {/* Cab */}
            <path d="M22 30 Q26 12 44 10 L88 10 Q100 10 103 30" fill="#1e40af"/>
            {/* Windshield */}
            <path d="M44 12 Q45 22 48 30 L88 30 L88 12 Z" fill="#93c5fd" opacity="0.5"/>
            {/* Side window */}
            <rect x="12" y="33" width="20" height="13" rx="2" fill="#93c5fd" opacity="0.4"/>
            {/* Wrap graphics — bold diagonal stripe */}
            <path d="M40 30 L60 74 L112 74 L112 30 Z" fill="#f59e0b" opacity="0.25"/>
            {/* Brand name */}
            <rect x="42" y="40" width="68" height="22" rx="2" fill="rgba(255,255,255,0.08)"/>
            <text x="76" y="49" fontSize="7" fontWeight="900" fill="white" fontFamily="Arial" textAnchor="middle" letterSpacing="1">APEX ELECTRIC</text>
            <text x="76" y="58" fontSize="5.5" fill="#fbbf24" fontFamily="Arial" textAnchor="middle">(360) 424 · meyersign.com</text>
            {/* Wheels */}
            <circle cx="35" cy="78" r="11" fill="#0f172a"/><circle cx="35" cy="78" r="7" fill="#334155"/><circle cx="35" cy="78" r="3" fill="#64748b"/>
            <circle cx="98" cy="78" r="11" fill="#0f172a"/><circle cx="98" cy="78" r="7" fill="#334155"/><circle cx="98" cy="78" r="3" fill="#64748b"/>
            {/* Van 2 — behind, partial */}
            <rect x="128" y="38" width="68" height="36" rx="3" fill="#1e3a8a" opacity="0.8"/>
            <path d="M136 38 Q139 24 150 22 L178 22 Q186 22 188 38" fill="#172554" opacity="0.8"/>
            <path d="M150 24 Q151 31 153 38 L178 38 L178 24 Z" fill="#7dd3fc" opacity="0.35"/>
            <path d="M155 38 L168 74 L196 74 L196 38 Z" fill="#f59e0b" opacity="0.2"/>
            <text x="164" y="56" fontSize="6" fontWeight="900" fill="white" fontFamily="Arial" textAnchor="middle">APEX</text>
            <circle cx="143" cy="78" r="9" fill="#0f172a" opacity="0.8"/><circle cx="143" cy="78" r="5.5" fill="#334155" opacity="0.8"/>
            <circle cx="186" cy="78" r="9" fill="#0f172a" opacity="0.8"/><circle cx="186" cy="78" r="5.5" fill="#334155" opacity="0.8"/>
          </svg>
          <div className="absolute bottom-2 left-3 text-amber-400/60 text-[8px] font-bold tracking-widest uppercase">Full Fleet Wrap</div>
          <div className="absolute top-2 right-3 bg-amber-500/20 border border-amber-500/30 text-amber-400 text-[8px] font-bold px-2 py-0.5 rounded-full">Mobile Billboard</div>
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
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden" style={{background:'linear-gradient(135deg,#f8fafc 0%,#e2e8f0 100%)'}}>
          {/* Hallway floor */}
          <div className="absolute bottom-0 left-0 right-0 h-6" style={{background:'#cbd5e1'}} />
          {/* Wall line */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-white/60" />
          <svg viewBox="0 0 170 110" className="w-full h-full">
            {/* Overhead directional blade signs */}
            {/* Sign blade 1 — hanging from ceiling */}
            <rect x="12" y="8" width="2" height="14" fill="#94a3b8"/>
            <rect x="148" y="8" width="2" height="14" fill="#94a3b8"/>
            <rect x="10" y="20" width="142" height="22" rx="3" fill="#1e3a8a" filter="url(#sh)"/>
            <text x="50" y="29" fontSize="6.5" fill="white" fontFamily="Arial" fontWeight="bold">MAIN ENTRANCE</text>
            <polygon points="155,26 162,31 155,36" fill="#f59e0b"/>
            <text x="18" y="29" fontSize="6.5" fill="white" fontFamily="Arial" fontWeight="bold">← PARKING</text>
            <line x1="85" y1="20" x2="85" y2="42" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
            <text x="50" y="38" fontSize="5.5" fill="#93c5fd" fontFamily="Arial">Suite 100–200 →</text>
            <text x="18" y="38" fontSize="5.5" fill="#93c5fd" fontFamily="Arial">Suite 300–400</text>
            {/* Wall-mounted room sign */}
            <rect x="12" y="52" width="44" height="26" rx="2" fill="#1e293b"/>
            <rect x="14" y="54" width="40" height="8" rx="1" fill="#1e3a8a"/>
            <text x="34" y="60" fontSize="5.5" fill="white" fontFamily="Arial" fontWeight="bold" textAnchor="middle">RECEPTION</text>
            <rect x="14" y="64" width="40" height="12" rx="1" fill="#0f172a"/>
            <text x="34" y="68" fontSize="5" fill="#94a3b8" fontFamily="Arial" textAnchor="middle">Suite 101</text>
            {/* Braille dots */}
            {[0,1,2,3,4,5].map(i => (
              <circle key={i} cx={17+((i%3)*5)} cy={75+(Math.floor(i/3)*3)} r="1" fill="#64748b"/>
            ))}
            {/* ADA wheelchair symbol */}
            <circle cx="150" cy="65" r="4" fill="#1d4ed8"/>
            <path d="M150 62 l0 4 l3 3" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
            <circle cx="150" cy="60" r="1.5" fill="white"/>
            {/* Restroom sign */}
            <rect x="110" y="52" width="48" height="26" rx="2" fill="#1e293b"/>
            <rect x="112" y="54" width="44" height="8" rx="1" fill="#0369a1"/>
            <text x="134" y="60" fontSize="5.5" fill="white" fontFamily="Arial" fontWeight="bold" textAnchor="middle">RESTROOMS</text>
            <text x="125" y="72" fontSize="8" fill="#60a5fa" fontFamily="Arial" textAnchor="middle">♀</text>
            <text x="143" y="72" fontSize="8" fill="#93c5fd" fontFamily="Arial" textAnchor="middle">♂</text>
            {/* Floor indicator strip */}
            <rect x="0" y="90" width="170" height="20" fill="#e2e8f0"/>
            <rect x="0" y="90" width="170" height="2" fill="#cbd5e1"/>
            <text x="85" y="103" fontSize="6" fill="#64748b" fontFamily="Arial" textAnchor="middle" fontWeight="bold">FIRST FLOOR · MAIN BUILDING</text>
          </svg>
          <div className="absolute top-2 right-2 bg-blue-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full">ADA Compliant ✓</div>
        </div>
      );
    case 'Non-Illuminated Signs':
      return (
        <div className="w-full h-full flex items-end justify-center relative overflow-hidden" style={{background:'linear-gradient(180deg,#bfdbfe 0%,#93c5fd 40%,#dbeafe 100%)'}}>
          {/* Ground/landscape */}
          <div className="absolute bottom-0 left-0 right-0 h-10" style={{background:'#15803d'}} />
          <div className="absolute bottom-9 left-0 right-0 h-2" style={{background:'#166534'}} />
          {/* Building facade */}
          <div className="absolute top-0 left-0 right-0 h-24" style={{background:'linear-gradient(180deg,#e7e5e4 0%,#d6d3d1 100%)'}} />
          <div className="absolute top-0 left-0 right-0 h-24 opacity-20"
            style={{backgroundImage:'repeating-linear-gradient(90deg,rgba(0,0,0,0.08) 0,rgba(0,0,0,0.08) 1px,transparent 1px,transparent 24px)'}} />
          <svg viewBox="0 0 200 110" className="w-full h-full absolute inset-0">
            {/* Building windows */}
            {[20,50,80,110,140,170].map(x => (
              <rect key={x} x={x} y="10" width="18" height="28" rx="1" fill="#bfdbfe" opacity="0.7"/>
            ))}
            {/* HDU carved panel sign on post */}
            {/* Posts */}
            <rect x="62" y="72" width="5" height="32" rx="1" fill="#78716c"/>
            <rect x="133" y="72" width="5" height="32" rx="1" fill="#78716c"/>
            {/* Main sign panel — dark walnut-style */}
            <rect x="48" y="50" width="104" height="36" rx="3" fill="#292524"/>
            {/* Carved border effect */}
            <rect x="51" y="53" width="98" height="30" rx="2" fill="none" stroke="#78716c" strokeWidth="1.5"/>
            {/* Sign content */}
            <text x="100" y="67" fontSize="11" fontWeight="900" fill="#f5f0e8" fontFamily="Arial" textAnchor="middle" letterSpacing="2">LAKEWOOD</text>
            <text x="100" y="78" fontSize="7" fill="#d6d3d1" fontFamily="Arial" textAnchor="middle" letterSpacing="3">PROFESSIONAL PARK</text>
            {/* Decorative router line under title */}
            <line x1="68" y1="70" x2="132" y2="70" stroke="#78716c" strokeWidth="0.8"/>
            {/* Post caps */}
            <rect x="58" y="48" width="13" height="5" rx="1" fill="#57534e"/>
            <rect x="129" y="48" width="13" height="5" rx="1" fill="#57534e"/>
            {/* Ground shrubs */}
            <ellipse cx="55" cy="94" rx="14" ry="8" fill="#15803d"/>
            <ellipse cx="145" cy="94" rx="14" ry="8" fill="#15803d"/>
            <ellipse cx="100" cy="98" rx="40" ry="6" fill="#166534"/>
          </svg>
          <div className="absolute bottom-2 left-3 text-white/70 text-[8px] font-bold tracking-widest uppercase">HDU Carved Panel</div>
          <div className="absolute top-2 right-2 bg-stone-800/80 text-stone-200 text-[8px] font-bold px-2 py-0.5 rounded-full">No Power Required</div>
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
