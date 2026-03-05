/* eslint-disable */
import ServicePage from '../../components/ServicePage';

const data = {
  title: 'Channel Letter Signs | LED Illuminated | Meyer Sign — Mount Vernon, WA',
  metaDescription: 'Custom channel letter signs designed, fabricated & installed by Meyer Sign. LED-illuminated 3D letters that make your business impossible to miss — day and night. Serving Washington State since 1960.',
  badge: 'Channel Letters',
  headline: 'Your Business Name,|Lit Up and Impossible|\nto Miss.',
  subheadline: 'Channel letters are the most recognized form of commercial signage for a reason. Three-dimensional, LED-illuminated, and built to stop people mid-stride — day or night, rain or shine.',
  proofLine: 'Free site visit · 3D rendering on your actual building · No commitment',
  whyTitle: 'The Sign Type Customers Trust Most',
  intro: [
    'When a business has channel letters, customers perceive it as established, credible, and worth visiting. It\'s not just signage — it\'s the difference between being found and being skipped.',
    'Our CNC-routed aluminum channel letters are built in our Mount Vernon shop, wired with premium LED modules, and installed by our own certified crew. No subcontractors. No surprises. Just a sign that works harder than your best employee — 24 hours a day.',
    'Whether you need front-lit for bold daytime visibility, reverse-halo for an upscale after-dark glow, or exposed neon-style LEDs for a retro feel — we design it to your brand and build it to last.',
  ],
  stats: [
    { number: '76%', label: 'of consumers enter a store because of its sign', desc: 'Channel letters are the highest-converting exterior sign format in retail and restaurant environments.' },
    { number: '24/7', label: 'Visibility — day and night', desc: 'LED illumination means your brand stays visible and working even when you\'re closed.' },
    { number: '10yr+', label: 'Typical LED lifespan', desc: 'Modern LED modules outperform neon with lower energy use, lower maintenance, and longer life.' },
  ],
  features: [
    { title: 'CNC-Routed Aluminum Construction', body: 'Letter backs and returns are precision-cut from aluminum sheet in our shop — exact dimensions, clean edges, built for decades of outdoor use.' },
    { title: 'Front-Lit, Back-Lit & Halo Options', body: 'Front-lit for maximum brightness, reverse-halo for upscale ambient glow, or open-face exposed LED for a bold, modern edge.' },
    { title: 'Premium LED Modules', body: 'We spec commercial-grade LED modules — not consumer-grade. Brighter, more uniform illumination with 50,000+ hour lifespans.' },
    { title: 'Custom Color & Font', body: 'Translucent faces in any Pantone color. Any font, any logo, any size. Your brand, not a template.' },
    { title: 'Permit-Ready Design', body: 'Every design is engineered to meet local zoning and electrical code. We handle every permit — 100% success rate in 65 years.' },
    { title: 'Certified Electrical Installation', body: 'Our licensed electrical crews handle the full hookup. UL-listed components throughout. No unlicensed shortcuts.' },
  ],
  options: [
    'Front-lit (standard)',
    'Reverse halo / back-lit',
    'Open-face exposed LED',
    'Combination lit',
    'Raceway-mounted',
    'Direct-to-wall mount',
    'Remote-wired transformers',
    'Stainless steel faces',
    'Custom Pantone colors',
    'Brushed aluminum returns',
    'Any font or custom logo',
    'ADA-compliant sizing',
  ],
  related: [
    { name: 'Monument Signs', path: '/services/monument-signs', tagline: 'Pair ground identity with storefront' },
    { name: 'LED Message Centers', path: '/services/led-message-centers', tagline: 'Add dynamic messaging below' },
    { name: 'Vinyl & Window Graphics', path: '/services/vinyl-window-graphics', tagline: 'Complete the storefront look' },
  ],
};

export default () => <ServicePage {...data} />;
