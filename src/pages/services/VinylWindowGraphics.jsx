/* eslint-disable */
import ServicePage from '../../components/ServicePage';

const data = {
  title: 'Vinyl & Window Graphics | Storefront Signs | Meyer Sign — Washington State',
  metaDescription: 'Custom vinyl graphics for storefronts, windows, walls, and interiors. Full-color, frosted, perforated film, lobby murals. Meyer Sign designs & installs — Mount Vernon, WA.',
  badge: 'Vinyl & Window Graphics',
  headline: 'Turn Dead Window Space Into|Your Best Salesperson.',
  subheadline: 'Your windows face the street all day, every day — and most businesses leave that canvas completely blank. A well-designed window graphic turns passive square footage into active advertising that works before a customer ever opens the door.',
  proofLine: 'Free design mockup on your storefront photo · No commitment',
  whyTitle: 'High-Visibility, Low-Cost, High-Impact',
  intro: [
    'Vinyl graphics are the most versatile tool in commercial signage. They go on windows, walls, floors, vehicles, and almost any flat surface — and they can be as permanent or as temporary as your needs require.',
    'We design and install window graphics that sell — bold product callouts, promotional messaging, brand identity, hours, and privacy frosting that still lets light in. For interior spaces, wall murals and lobby graphics transform blank walls into brand experiences that impress clients and inspire employees.',
    'Our vinyl graphics use commercial-grade materials rated for outdoor exposure. They look sharp from the day we install them and come off cleanly when it\'s time for an update — without damaging surfaces or leaving residue.',
  ],
  stats: [
    { number: '68%', label: 'of consumers say window graphics influence their decision to enter a store', desc: 'First impressions happen before the door opens. Window graphics are often the deciding factor.' },
    { number: '3–5yr', label: 'Outdoor vinyl lifespan with commercial-grade materials', desc: 'Long enough to earn significant ROI, short enough to update your messaging as your business evolves.' },
    { number: '1 day', label: 'Typical installation time for most storefront projects', desc: 'Fast turnaround means you\'re not waiting weeks to start advertising through your windows.' },
  ],
  features: [
    { title: 'Perforated Window Film', body: 'See-through vinyl lets customers look in while displaying full-color graphics on the outside. Maximum visibility with minimal interior impact.' },
    { title: 'Frosted & Decorative Vinyl', body: 'Privacy frosting for offices, conference rooms, and windows that need light but not visibility — with branded graphics or clean geometric patterns.' },
    { title: 'Full-Color Promotional Graphics', body: 'Bold, vibrant window graphics for sales events, seasonal promotions, new products, and grand openings. Installed and removed cleanly.' },
    { title: 'Wall Murals & Interior Branding', body: 'Floor-to-ceiling murals in lobbies, conference rooms, and retail floors. Transform blank walls into immersive brand environments.' },
    { title: 'Lobby & Reception Signage', body: 'Cut-vinyl or printed logo signs for reception areas, entrance walls, and interior brand displays — professional, clean, and impressive to clients.' },
    { title: 'Floor Graphics', body: 'Durable anti-slip floor vinyl for directional cues, branding, safety messaging, and retail product callouts in high-traffic areas.' },
  ],
  options: [
    'Perforated see-through film',
    'Frosted / etched glass look',
    'Full-color window graphic',
    'One-way vision film',
    'Wall murals (full coverage)',
    'Cut vinyl lettering',
    'Lobby logo sign',
    'Floor graphics',
    'Temporary promotional vinyl',
    'Permanent branding vinyl',
    'Blackout window covering',
    'Custom shaped / contour-cut',
  ],
  related: [
    { name: 'Channel Letters', path: '/services/channel-letters', tagline: 'Add illuminated signage above' },
    { name: 'Vehicle Wraps', path: '/services/vehicle-wraps', tagline: 'Brand your vehicles to match' },
    { name: 'Non-Illuminated Signs', path: '/services/non-illuminated-signs', tagline: 'Banners for promotions & events' },
  ],
};

export default () => <ServicePage {...data} />;
