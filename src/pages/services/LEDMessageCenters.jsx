/* eslint-disable */
import ServicePage from '../../components/ServicePage';

const data = {
  title: 'LED Message Centers | Dynamic Digital Signs | Meyer Sign — Washington State',
  metaDescription: 'LED message centers that let you change your sign\'s message as often as your promotions. Full-color, remote-managed, energy-efficient. Meyer Sign designs, installs & supports — WA.',
  badge: 'LED Message Centers',
  headline: 'Change Your Sign\'s Message|As Often As Your Promotions.',
  subheadline: 'Your promotions change weekly. Your hours change seasonally. Your events change daily. Your sign should keep up. LED message centers turn static signage into a live, always-current communication channel.',
  proofLine: 'Free design consultation · Remote management demo included · No commitment',
  whyTitle: 'The Highest-ROI Upgrade in Commercial Signage',
  intro: [
    'A standard sign tells customers one thing, forever. An LED message center tells them what\'s happening right now — today\'s special, tonight\'s event, this week\'s promotion — and it changes in seconds from your phone or computer.',
    'Meyer Sign partners with leading commercial LED display manufacturers and handles the full project: design, integration into your monument or pylon structure, installation, electrical connection, and post-installation support. You get one point of contact for everything.',
    'The payback is fast. Businesses that add LED message centers to existing signage report measurable increases in foot traffic within the first 30 days. Restaurants use them for daily specials. Auto dealers use them for inventory promotions. Banks use them for rate announcements. The applications are only limited by what you want to say.',
  ],
  stats: [
    { number: '150%', label: 'Average increase in message recall vs. static signs', desc: 'Motion and changing content capture attention and stay in memory far longer than static messages.' },
    { number: '30 days', label: 'Typical payback window for restaurants and retail', desc: 'Increased foot traffic from dynamic promotions often recoups the investment within the first month.' },
    { number: '50%', label: 'Lower energy use vs. traditional lighted cabinet signs', desc: 'LED technology uses a fraction of the power of older fluorescent or neon cabinet displays.' },
  ],
  features: [
    { title: 'Remote Content Management', body: 'Update your display from any device — phone, tablet, or desktop. Change messages in real time, schedule content in advance, or set automated playlists.' },
    { title: 'Full-Color High-Resolution Display', body: 'Vivid full-color graphics, animations, and video-quality content. Your promotions look as good on your sign as they do on your website.' },
    { title: 'Monument & Pylon Integration', body: 'Designed to integrate seamlessly into new or existing monument and pylon structures. The LED panel becomes part of the sign architecture — not an afterthought.' },
    { title: 'Energy Efficient & Low Maintenance', body: 'LED panels consume far less power than traditional displays, with minimal maintenance requirements and multi-year warranties on components.' },
    { title: 'Scheduling & Automation', body: 'Set content to change by time of day, day of week, or date range. Your breakfast special shows at 6am; your happy hour deal shows at 4pm — automatically.' },
    { title: 'Ongoing Support & Training', body: 'We train you on the content management system and stay available for support. You\'re never left staring at a blank screen without help.' },
  ],
  options: [
    'Full-color LED display',
    'Single-color (amber/red/green)',
    'Monument-integrated',
    'Pylon-integrated',
    'Indoor lobby display',
    'Roadside freestanding',
    'Remote web management',
    'Scheduled content playlists',
    'Emergency override messaging',
    'Custom pixel pitch options',
    'Weatherproof (outdoor rated)',
    'Multi-zone content areas',
  ],
  related: [
    { name: 'Monument Signs', path: '/services/monument-signs', tagline: 'Integrate into a new monument' },
    { name: 'Pylon Signs', path: '/services/pylon-signs', tagline: 'Add to an existing pylon structure' },
    { name: 'Channel Letters', path: '/services/channel-letters', tagline: 'Complete storefront identity' },
  ],
};

export default () => <ServicePage {...data} />;
