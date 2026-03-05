/* eslint-disable */
import ServicePage from '../../components/ServicePage';

const data = {
  title: 'Banners & Non-Illuminated Signs | Custom Signage | Meyer Sign — Washington',
  metaDescription: 'Custom banners, HDU carved signs, aluminum panels, PVC boards, and flat signage for every application and budget. Meyer Sign — designed & fabricated in-house, Mount Vernon WA.',
  badge: 'Non-Illuminated Signs',
  headline: 'Not Every Great Sign Needs to Glow.|Just Built to Last.',
  subheadline: 'From grand opening banners to permanent property ID panels, non-illuminated signage covers more applications than any other sign type — and when it\'s built right, it delivers impact that matches anything with a power cord.',
  proofLine: 'Free design quote · Fast turnaround on banners · No commitment',
  whyTitle: 'The Right Tool for the Right Application',
  intro: [
    'Not every sign needs to be lit. In fact, some of the most effective commercial signage in any market is flat, dimensional, or printed — because the right design, material, and placement can command attention without a single LED.',
    'We fabricate non-illuminated signs from a wide range of materials: aluminum, steel, high-density urethane (HDU) foam, PVC board, MDO plywood, DiBond, Alumalite, corrugated plastic, and full-color vinyl banners. Each material has the right application — and knowing which to specify is part of what you\'re paying us for.',
    'Need 50 banners for a city-wide event? We can do that. Need a single carved HDU panel for the entrance of a boutique? We do that too. Our production capabilities scale from small-run custom pieces to large-volume commercial programs.',
  ],
  stats: [
    { number: '48hr', label: 'Rush turnaround available for standard banner orders', desc: 'When your grand opening is tomorrow, we make it work. Fast production without cutting corners on quality.' },
    { number: '10yr+', label: 'Lifespan of HDU foam signs in outdoor applications', desc: 'High-density urethane outlasts wood, resists moisture, and takes paint beautifully for lasting exterior use.' },
    { number: 'Any size', label: 'Banners from table-top to building-sized', desc: 'Our print capabilities handle everything from 12" table displays to full-building wraps and street banners.' },
  ],
  features: [
    { title: 'Full-Color Vinyl Banners', body: 'Hemmed, grommeted, and printed on heavy-duty scrim vinyl. Indoor and outdoor ratings, custom sizes, pole pockets and hardware available.' },
    { title: 'HDU Carved Signs', body: 'High-density urethane foam that carves like wood but lasts like plastic. Dimensional signs with routed text, v-groove borders, and hand-painted finishes.' },
    { title: 'Aluminum & Metal Panels', body: 'Painted or digitally printed aluminum signs for real estate, property ID, directory panels, and dimensional installations. Rust-proof and commercial-grade.' },
    { title: 'PVC & Foam Board Signs', body: 'Cost-effective rigid signs for interior applications, trade shows, retail displays, and temporary outdoor use. Clean print quality, lightweight, easy to mount.' },
    { title: 'Mesh & Fabric Banners', body: 'Wind-resistant mesh for construction site fencing, stadium installations, and large outdoor events where wind load is a concern.' },
    { title: 'Real Estate & Construction Signs', body: 'Property listing signs, "coming soon" panels, construction site ID, and contractor branding. Fast turnaround, durable materials.' },
  ],
  options: [
    'Full-color vinyl banner',
    'Mesh banner (wind-rated)',
    'HDU carved sign',
    'Aluminum flat panel',
    'DiBond composite panel',
    'Corrugated plastic (Coroplast)',
    'PVC / foam board',
    'MDO plywood sign',
    'Alumalite panel',
    'Post & panel systems',
    'A-frame / sandwich board',
    'Trade show display',
  ],
  related: [
    { name: 'Vinyl & Window Graphics', path: '/services/vinyl-window-graphics', tagline: 'Add storefront window messaging' },
    { name: 'Vehicle Wraps', path: '/services/vehicle-wraps', tagline: 'Brand your vehicles too' },
    { name: 'Wayfinding & ADA', path: '/services/wayfinding-ada', tagline: 'Interior and directional signage' },
  ],
};

export default () => <ServicePage {...data} />;
