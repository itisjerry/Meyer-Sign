/* eslint-disable */
const PortfolioVisual = ({ title }) => {
  switch (title) {

    case 'Northwest Auto Group':
      // Tall pylon sign at a car dealership — blue sky, pylon with logo cabinet + tenant panels
      return (
        <div className="w-full h-full relative overflow-hidden" style={{background:'linear-gradient(180deg,#0ea5e9 0%,#38bdf8 45%,#bae6fd 70%,#475569 70%,#334155 100%)'}}>
          {/* Clouds */}
          <div className="absolute top-4 left-6 w-20 h-6 rounded-full bg-white/60" />
          <div className="absolute top-6 left-10 w-28 h-6 rounded-full bg-white/50" />
          <div className="absolute top-3 right-8 w-16 h-5 rounded-full bg-white/55" />
          {/* Dealership building outline */}
          <div className="absolute bottom-16 left-0 right-0 h-20" style={{background:'#64748b'}} />
          <div className="absolute bottom-32 left-8 w-48 h-16" style={{background:'#475569'}} />
          <div className="absolute bottom-32 right-4 w-32 h-12" style={{background:'#334155'}} />
          {/* Glass showroom */}
          <div className="absolute bottom-16 left-8 w-48 h-16" style={{background:'linear-gradient(180deg,rgba(148,210,247,0.4) 0%,rgba(148,210,247,0.2) 100%)', border:'1px solid rgba(148,210,247,0.5)'}} />
          {/* Cars in showroom (simplified) */}
          <div className="absolute bottom-18 left-12 w-14 h-5 rounded-sm" style={{background:'#1e3a8a'}} />
          <div className="absolute bottom-18 left-30 w-14 h-5 rounded-sm" style={{background:'#dc2626'}} />
          {/* Pylon pole */}
          <div className="absolute bottom-16 right-16" style={{width:'10px',height:'140px',background:'linear-gradient(90deg,#64748b,#94a3b8,#64748b)',bottom:'16px'}} />
          {/* Pylon cabinet */}
          <svg viewBox="0 0 200 220" className="absolute inset-0 w-full h-full">
            {/* Pylon pole */}
            <rect x="95" y="100" width="10" height="100" fill="url(#pylon-grad)"/>
            <defs>
              <linearGradient id="pylon-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#475569"/>
                <stop offset="50%" stopColor="#94a3b8"/>
                <stop offset="100%" stopColor="#475569"/>
              </linearGradient>
            </defs>
            {/* Base */}
            <rect x="82" y="196" width="36" height="8" rx="2" fill="#475569"/>
            <rect x="78" y="202" width="44" height="6" rx="2" fill="#334155"/>
            {/* Top cabinet — logo panel */}
            <rect x="48" y="20" width="104" height="38" rx="3" fill="#1d4ed8"/>
            <rect x="51" y="23" width="98" height="32" rx="2" fill="#1e3a8a"/>
            <text x="100" y="35" fontSize="9" fontWeight="900" fill="white" fontFamily="Arial" textAnchor="middle" letterSpacing="1">NORTHWEST</text>
            <text x="100" y="47" fontSize="9" fontWeight="900" fill="#fbbf24" fontFamily="Arial" textAnchor="middle" letterSpacing="1">AUTO GROUP</text>
            {/* Tenant panels */}
            <rect x="48" y="60" width="104" height="20" rx="1" fill="white"/>
            <text x="100" y="73" fontSize="7.5" fontWeight="bold" fill="#1e3a8a" fontFamily="Arial" textAnchor="middle">FORD · LINCOLN · MAZDA</text>
            <rect x="48" y="82" width="104" height="16" rx="1" fill="#f59e0b"/>
            <text x="100" y="93" fontSize="7" fontWeight="900" fill="#0f172a" fontFamily="Arial" textAnchor="middle">NOW OPEN · BURLINGTON, WA</text>
          </svg>
          {/* Road markings */}
          <div className="absolute bottom-0 left-0 right-0 h-16" style={{background:'#1e293b'}} />
          <div className="absolute bottom-6" style={{left:'10%',right:'10%',height:'2px',background:'repeating-linear-gradient(90deg,#f59e0b 0,#f59e0b 24px,transparent 24px,transparent 40px)'}} />
        </div>
      );

    case 'Skagit Valley Medical Center':
      // Stone monument sign with landscaping — professional medical branding
      return (
        <div className="w-full h-full relative overflow-hidden" style={{background:'linear-gradient(180deg,#dbeafe 0%,#bfdbfe 50%,#e2e8f0 50%,#f1f5f9 100%)'}}>
          {/* Sky */}
          <div className="absolute top-3 left-10 w-24 h-5 rounded-full bg-white/70"/>
          <div className="absolute top-5 right-12 w-18 h-4 rounded-full bg-white/60"/>
          {/* Building background */}
          <div className="absolute top-8 right-0 w-3/5 h-48" style={{background:'#e2e8f0'}} />
          <div className="absolute top-8 right-0 w-3/5 h-48 opacity-30"
            style={{backgroundImage:'repeating-linear-gradient(90deg,rgba(0,0,0,0.1) 0,rgba(0,0,0,0.1) 1px,transparent 1px,transparent 28px)'}} />
          {/* Monument sign SVG */}
          <svg viewBox="0 0 200 220" className="absolute inset-0 w-full h-full">
            {/* Stone cap */}
            <path d="M35 105 Q100 98 165 105 L162 112 Q100 106 38 112 Z" fill="#94a3b8"/>
            {/* Stone base */}
            <rect x="38" y="112" width="124" height="68" rx="3" fill="#94a3b8"/>
            {/* Stone texture lines */}
            {[0,1,2,3].map(i => (
              <line key={i} x1="38" y1={122+i*14} x2="162" y2={122+i*14} stroke="#64748b" strokeWidth="0.5" opacity="0.5"/>
            ))}
            {/* Sign face panel */}
            <rect x="45" y="115" width="110" height="62" rx="2" fill="#1e293b"/>
            {/* Cross/medical symbol */}
            <rect x="54" y="120" width="6" height="18" rx="1" fill="#3b82f6"/>
            <rect x="50" y="126" width="14" height="6" rx="1" fill="#3b82f6"/>
            {/* Medical center text */}
            <text x="115" y="130" fontSize="6.5" fontWeight="900" fill="white" fontFamily="Arial" textAnchor="middle" letterSpacing="0.5">SKAGIT VALLEY</text>
            <text x="115" y="139" fontSize="6.5" fontWeight="900" fill="white" fontFamily="Arial" textAnchor="middle">MEDICAL CENTER</text>
            <line x1="55" y1="143" x2="160" y2="143" stroke="#3b82f6" strokeWidth="0.8"/>
            <text x="115" y="151" fontSize="5.5" fill="#93c5fd" fontFamily="Arial" textAnchor="middle">EMERGENCY · MAIN ENTRANCE →</text>
            <text x="115" y="160" fontSize="5" fill="#64748b" fontFamily="Arial" textAnchor="middle">Mount Vernon, WA · (360) 424-0000</text>
            {/* LED accent light */}
            <rect x="45" y="175" width="110" height="5" rx="2" fill="#1d4ed8" opacity="0.8"/>
            {/* Foundation */}
            <rect x="34" y="178" width="132" height="10" rx="2" fill="#64748b"/>
            <rect x="28" y="186" width="144" height="8" rx="2" fill="#475569"/>
            {/* Landscaping */}
            <ellipse cx="42" cy="192" rx="16" ry="8" fill="#15803d"/>
            <ellipse cx="158" cy="192" rx="16" ry="8" fill="#15803d"/>
            <ellipse cx="100" cy="198" rx="50" ry="7" fill="#166534"/>
            {/* Sidewalk */}
            <rect x="0" y="196" width="200" height="24" fill="#cbd5e1"/>
            <line x1="0" y1="197" x2="200" y2="197" stroke="#94a3b8" strokeWidth="0.8"/>
          </svg>
        </div>
      );

    case 'Riverside Bistro':
      // Night scene — illuminated channel letters on restaurant facade
      return (
        <div className="w-full h-full relative overflow-hidden" style={{background:'linear-gradient(180deg,#0f172a 0%,#1e293b 60%,#0f172a 100%)'}}>
          {/* Stars */}
          {[[15,8],[40,15],[65,6],[90,12],[130,5],[155,10],[180,8],[10,22],[175,25]].map(([x,y],i) => (
            <div key={i} className="absolute w-0.5 h-0.5 rounded-full bg-white/60" style={{left:`${x/2}%`,top:`${y}%`}}/>
          ))}
          <svg viewBox="0 0 200 220" className="absolute inset-0 w-full h-full">
            {/* Building facade */}
            <rect x="0" y="40" width="200" height="160" fill="#1e293b"/>
            {/* Brick texture */}
            {[0,1,2,3,4,5,6,7].map(row => (
              [0,1,2,3,4].map(col => (
                <rect key={`${row}-${col}`}
                  x={col*42+(row%2)*21} y={40+row*16}
                  width="38" height="13" rx="1"
                  fill={row%2===0 ? '#292524' : '#1c1917'} stroke="#0f172a" strokeWidth="0.5"/>
              ))
            ))}
            {/* Awning */}
            <path d="M10 80 L190 80 L185 95 Q100 102 15 95 Z" fill="#991b1b"/>
            {/* Awning stripes */}
            {[30,55,80,105,130,155].map(x => (
              <line key={x} x1={x} y1="80" x2={x-3} y2="95" stroke="#7f1d1d" strokeWidth="1.5"/>
            ))}
            {/* Awning text */}
            <text x="100" y="90" fontSize="7" fontWeight="bold" fill="white" fontFamily="Arial" textAnchor="middle" letterSpacing="2">RIVERSIDE BISTRO</text>
            {/* Channel letters — glowing effect */}
            <defs>
              <filter id="glow-r">
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            <rect x="15" y="50" width="170" height="5" rx="1" fill="#1e293b" opacity="0.5"/>
            {/* Glow halo behind letters */}
            <rect x="22" y="44" width="156" height="30" rx="4" fill="#f59e0b" opacity="0.08"/>
            <text x="100" y="67" fontSize="20" fontWeight="900" fill="#f59e0b" fontFamily="Arial Black" textAnchor="middle" letterSpacing="2" filter="url(#glow-r)">RIVERSIDE</text>
            <text x="100" y="76" fontSize="9" fontWeight="bold" fill="#fcd34d" fontFamily="Arial" textAnchor="middle" letterSpacing="4">B I S T R O</text>
            {/* Window with warm light */}
            <rect x="18" y="100" width="70" height="50" rx="2" fill="#fef3c7" opacity="0.15"/>
            <rect x="18" y="100" width="70" height="50" rx="2" fill="none" stroke="#475569" strokeWidth="1"/>
            <line x1="53" y1="100" x2="53" y2="150" stroke="#475569" strokeWidth="0.8"/>
            <line x1="18" y1="125" x2="88" y2="125" stroke="#475569" strokeWidth="0.8"/>
            {/* Window glow */}
            <rect x="18" y="100" width="70" height="50" rx="2" fill="#fbbf24" opacity="0.06"/>
            {/* Second window */}
            <rect x="112" y="100" width="70" height="50" rx="2" fill="#fef3c7" opacity="0.15"/>
            <rect x="112" y="100" width="70" height="50" rx="2" fill="none" stroke="#475569" strokeWidth="1"/>
            <line x1="147" y1="100" x2="147" y2="150" stroke="#475569" strokeWidth="0.8"/>
            <line x1="112" y1="125" x2="182" y2="125" stroke="#475569" strokeWidth="0.8"/>
            {/* Door */}
            <rect x="80" y="130" width="40" height="70" rx="1" fill="#292524"/>
            <rect x="83" y="133" width="15" height="24" rx="1" fill="#fef3c7" opacity="0.2"/>
            <rect x="102" y="133" width="15" height="24" rx="1" fill="#fef3c7" opacity="0.2"/>
            <circle cx="99" cy="152" r="1.5" fill="#d97706"/>
            {/* Sidewalk */}
            <rect x="0" y="195" width="200" height="25" fill="#334155"/>
            <line x1="0" y1="196" x2="200" y2="196" stroke="#475569" strokeWidth="0.5"/>
          </svg>
          {/* LED glow overlay */}
          <div className="absolute top-8 left-0 right-0 h-16" style={{background:'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(245,158,11,0.12) 0%, transparent 70%)'}} />
        </div>
      );

    case 'Pacific Coast Federal Credit Union':
      // Monument sign with stone base + LED message center
      return (
        <div className="w-full h-full relative overflow-hidden" style={{background:'linear-gradient(180deg,#e0f2fe 0%,#bae6fd 40%,#f1f5f9 40%,#e2e8f0 100%)'}}>
          <svg viewBox="0 0 200 220" className="absolute inset-0 w-full h-full">
            {/* Sky clouds */}
            <ellipse cx="40" cy="20" rx="28" ry="10" fill="white" opacity="0.7"/>
            <ellipse cx="55" cy="18" rx="22" ry="8" fill="white" opacity="0.6"/>
            <ellipse cx="155" cy="15" rx="20" ry="8" fill="white" opacity="0.65"/>
            {/* Stone monument base */}
            {/* Cap */}
            <path d="M30 102 Q100 94 170 102 L167 110 Q100 103 33 110 Z" fill="#94a3b8"/>
            {/* Stone body */}
            <rect x="33" y="110" width="134" height="75" rx="4" fill="#94a3b8"/>
            {/* Stone courses */}
            {[0,1,2,3,4].map(i => (
              <line key={i} x1="33" y1={120+i*13} x2="167" y2={120+i*13} stroke="#64748b" strokeWidth="0.7" opacity="0.6"/>
            ))}
            {/* Logo panel — top */}
            <rect x="40" y="113" width="120" height="28" rx="2" fill="#0f172a"/>
            {/* Credit union cross/star logo */}
            <polygon points="56,120 58,126 64,126 59,130 61,136 56,132 51,136 53,130 48,126 54,126" fill="#1d4ed8" opacity="0.8" transform="scale(0.7) translate(20,20)"/>
            <text x="115" y="123" fontSize="6.5" fontWeight="900" fill="white" fontFamily="Arial" textAnchor="middle">PACIFIC COAST</text>
            <text x="115" y="132" fontSize="5.5" fill="#93c5fd" fontFamily="Arial" textAnchor="middle" letterSpacing="1">FEDERAL CREDIT UNION</text>
            {/* LED Message Center panel */}
            <rect x="40" y="143" width="120" height="30" rx="2" fill="#0a0a0a"/>
            <rect x="42" y="145" width="116" height="26" rx="1" fill="#000"/>
            {/* Scanline texture */}
            {[0,1,2,3,4,5,6,7,8].map(i => (
              <line key={i} x1="42" y1={146+i*3} x2="158" y2={146+i*3} stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
            ))}
            <text x="100" y="157" fontSize="8" fontWeight="bold" fill="#ef4444" fontFamily="monospace" textAnchor="middle">TODAY'S RATE</text>
            <text x="100" y="167" fontSize="10" fontWeight="900" fill="#22c55e" fontFamily="monospace" textAnchor="middle">AUTO LOAN 5.9%</text>
            <circle cx="154" cy="147" r="2" fill="#22c55e" opacity="0.8"/>
            {/* Foundation */}
            <rect x="28" y="183" width="144" height="10" rx="2" fill="#64748b"/>
            <rect x="22" y="191" width="156" height="7" rx="2" fill="#475569"/>
            {/* Landscaping */}
            <ellipse cx="42" cy="196" rx="18" ry="9" fill="#15803d"/>
            <ellipse cx="158" cy="196" rx="18" ry="9" fill="#15803d"/>
            <rect x="0" y="198" width="200" height="22" fill="#e2e8f0"/>
          </svg>
        </div>
      );

    case 'Cascade Plumbing & HVAC':
      // Fleet of 3 branded service vans — Cascade Plumbing livery
      return (
        <div className="w-full h-full relative overflow-hidden" style={{background:'linear-gradient(180deg,#f1f5f9 0%,#e2e8f0 50%,#cbd5e1 100%)'}}>
          <svg viewBox="0 0 200 220" className="absolute inset-0 w-full h-full">
            {/* Background facility building */}
            <rect x="0" y="20" width="200" height="140" fill="#e2e8f0"/>
            <rect x="0" y="20" width="200" height="4" fill="#cbd5e1"/>
            {/* Parking lot ground */}
            <rect x="0" y="158" width="200" height="62" fill="#334155"/>
            {/* Parking lot lines */}
            {[40,80,120,160].map(x => (
              <line key={x} x1={x} y1="158" x2={x} y2="220" stroke="#475569" strokeWidth="0.8"/>
            ))}
            {/* Van 1 — front and center */}
            {/* Body */}
            <rect x="18" y="108" width="74" height="52" rx="4" fill="#1d4ed8"/>
            {/* Cab roof */}
            <path d="M30 108 Q34 88 52 85 L82 85 Q90 85 92 108" fill="#1e40af"/>
            {/* Windshield */}
            <path d="M52 87 L52 108 L82 108 L82 87 Z" fill="#bfdbfe" opacity="0.5" rx="1"/>
            {/* Driver window */}
            <rect x="20" y="112" width="22" height="16" rx="2" fill="#bfdbfe" opacity="0.4"/>
            {/* Wrap — bold diagonal */}
            <path d="M55 108 L68 160 L92 160 L92 108 Z" fill="white" opacity="0.12"/>
            {/* Logo area */}
            <rect x="38" y="118" width="52" height="28" rx="2" fill="rgba(255,255,255,0.1)"/>
            <text x="64" y="129" fontSize="6.5" fontWeight="900" fill="white" fontFamily="Arial" textAnchor="middle" letterSpacing="0.5">CASCADE</text>
            <text x="64" y="138" fontSize="6" fontWeight="bold" fill="#fbbf24" fontFamily="Arial" textAnchor="middle">PLUMBING & HVAC</text>
            <text x="64" y="146" fontSize="5" fill="#bfdbfe" fontFamily="Arial" textAnchor="middle">(360) 424-1325</text>
            {/* Wheels */}
            <circle cx="38" cy="162" r="12" fill="#0f172a"/><circle cx="38" cy="162" r="7.5" fill="#334155"/><circle cx="38" cy="162" r="3" fill="#64748b"/>
            <circle cx="85" cy="162" r="12" fill="#0f172a"/><circle cx="85" cy="162" r="7.5" fill="#334155"/><circle cx="85" cy="162" r="3" fill="#64748b"/>
            {/* Van 2 — behind right */}
            <rect x="108" y="116" width="66" height="44" rx="3" fill="#1d4ed8" opacity="0.85"/>
            <path d="M118 116 Q121 100 134 97 L160 97 Q167 97 168 116" fill="#1e40af" opacity="0.85"/>
            <path d="M134 99 L134 116 L160 116 L160 99 Z" fill="#bfdbfe" opacity="0.35"/>
            <path d="M145 116 L155 160 L174 160 L174 116 Z" fill="white" opacity="0.08"/>
            <text x="141" y="133" fontSize="6" fontWeight="900" fill="white" fontFamily="Arial" textAnchor="middle">CASCADE</text>
            <text x="141" y="141" fontSize="5" fill="#fbbf24" fontFamily="Arial" textAnchor="middle">PLUMBING</text>
            <circle cx="122" cy="162" r="10" fill="#0f172a" opacity="0.85"/><circle cx="122" cy="162" r="6" fill="#334155" opacity="0.85"/>
            <circle cx="165" cy="162" r="10" fill="#0f172a" opacity="0.85"/><circle cx="165" cy="162" r="6" fill="#334155" opacity="0.85"/>
            {/* Van count badge */}
            <rect x="80" y="70" width="50" height="18" rx="9" fill="#f59e0b"/>
            <text x="105" y="82" fontSize="7" fontWeight="900" fill="#0f172a" fontFamily="Arial" textAnchor="middle">14 VEHICLES</text>
          </svg>
        </div>
      );

    case 'Westgate Corporate Campus':
      // Campus entrance with pylon + monument + building signage
      return (
        <div className="w-full h-full relative overflow-hidden" style={{background:'linear-gradient(180deg,#dbeafe 0%,#bfdbfe 50%,#e2e8f0 50%,#f8fafc 100%)'}}>
          <svg viewBox="0 0 200 220" className="absolute inset-0 w-full h-full">
            {/* Sky */}
            <ellipse cx="50" cy="18" rx="30" ry="10" fill="white" opacity="0.65"/>
            <ellipse cx="150" cy="12" rx="22" ry="8" fill="white" opacity="0.6"/>
            {/* Office building background */}
            <rect x="60" y="30" width="90" height="120" rx="2" fill="#e2e8f0"/>
            {/* Building windows grid */}
            {[0,1,2,3,4].map(row => (
              [0,1,2].map(col => (
                <rect key={`${row}-${col}`} x={72+col*26} y={38+row*20} width="18" height="14" rx="1"
                  fill={row===2&&col===1 ? '#fbbf24' : '#bfdbfe'} opacity="0.7"/>
              ))
            ))}
            {/* Building sign on facade */}
            <rect x="60" y="30" width="90" height="12" rx="2" fill="#1e3a8a"/>
            <text x="105" y="39" fontSize="6" fontWeight="900" fill="white" fontFamily="Arial" textAnchor="middle" letterSpacing="1">WESTGATE CORP</text>
            {/* Pylon sign — tall, left side */}
            <rect x="18" y="84" width="6" height="100" fill="url(#p2g)"/>
            <defs>
              <linearGradient id="p2g" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#475569"/><stop offset="50%" stopColor="#94a3b8"/><stop offset="100%" stopColor="#475569"/>
              </linearGradient>
            </defs>
            <rect x="8" y="184" width="26" height="7" rx="2" fill="#475569"/>
            <rect x="5" y="190" width="32" height="5" rx="2" fill="#334155"/>
            {/* Pylon cabinet */}
            <rect x="0" y="50" width="42" height="35" rx="3" fill="#1e293b"/>
            <rect x="3" y="53" width="36" height="9" rx="1" fill="#1d4ed8"/>
            <text x="21" y="60" fontSize="6" fontWeight="900" fill="white" fontFamily="Arial" textAnchor="middle">WESTGATE</text>
            <rect x="3" y="64" width="36" height="7" rx="1" fill="#0f172a"/>
            <text x="21" y="70" fontSize="5" fill="#94a3b8" fontFamily="Arial" textAnchor="middle">BUILDING A–E →</text>
            <rect x="3" y="73" width="36" height="7" rx="1" fill="#0f172a"/>
            <text x="21" y="79" fontSize="5" fill="#fbbf24" fontFamily="Arial" textAnchor="middle">VISITOR PARKING</text>
            {/* Monument sign — right side */}
            <rect x="152" y="142" width="48" height="42" rx="3" fill="#78716c"/>
            <rect x="155" y="145" width="42" height="36" rx="2" fill="#1e293b"/>
            <text x="176" y="157" fontSize="5.5" fontWeight="900" fill="white" fontFamily="Arial" textAnchor="middle">WESTGATE</text>
            <text x="176" y="165" fontSize="5" fill="#fbbf24" fontFamily="Arial" textAnchor="middle">PROFESSIONAL</text>
            <text x="176" y="172" fontSize="5" fill="#fbbf24" fontFamily="Arial" textAnchor="middle">CENTER</text>
            <rect x="152" y="183" width="48" height="6" rx="2" fill="#57534e"/>
            <rect x="148" y="188" width="54" height="5" rx="2" fill="#44403c"/>
            {/* Grass and road */}
            <rect x="0" y="196" width="200" height="24" fill="#334155"/>
            <rect x="0" y="192" width="200" height="5" fill="#15803d"/>
            <line x1="0" y1="205" x2="200" y2="205" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="16,10"/>
            {/* Wayfinding sign near building */}
            <rect x="130" y="110" width="28" height="24" rx="2" fill="#0369a1"/>
            <text x="144" y="119" fontSize="5" fontWeight="bold" fill="white" fontFamily="Arial" textAnchor="middle">BUILDING</text>
            <text x="144" y="127" fontSize="8" fontWeight="900" fill="white" fontFamily="Arial" textAnchor="middle">A</text>
            <rect x="137" y="134" width="3" height="20" rx="1" fill="#0369a1"/>
          </svg>
        </div>
      );

    default:
      return (
        <div className="w-full h-full bg-slate-800 flex items-center justify-center">
          <div className="text-slate-600 text-xs font-bold uppercase tracking-widest">Project Image</div>
        </div>
      );
  }
};

export default PortfolioVisual;
