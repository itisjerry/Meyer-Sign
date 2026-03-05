/* eslint-disable */
import ServicePage from '../../components/ServicePage';

const data = {
  title: 'National Account Sign Programs | Multi-Location | Meyer Sign — Washington',
  metaDescription: 'Coordinated sign programs for franchises and national brands. Consistent brand execution across every location. Meyer Sign has installed for Walmart, McDonald\'s, Chevron & more.',
  badge: 'National Accounts',
  headline: '100 Locations.|One Standard.|Zero Excuses.',
  subheadline: 'When your brand rolls out across multiple locations, inconsistency kills credibility. Customers expect the same experience at every location — and your signage is the first thing they see. We make sure it\'s always right.',
  proofLine: 'National program consultation available · Volume pricing · No commitment',
  whyTitle: 'The Complexity of Multi-Location Programs Done Right',
  intro: [
    'Rolling out signage across multiple locations is not the same as doing one sign ten times. Each location has different zoning codes, different building configurations, different lease requirements, and different permit timelines. Managing that complexity without a proven system produces delays, inconsistencies, and budget overruns.',
    'Meyer Sign has executed national brand programs for some of the most recognized names in American retail and food service — including Walmart, McDonald\'s, Chevron, Allstate Insurance, Chevrolet, and others. We know what these programs require: a single point of contact, documented brand standards, consistent materials, and certified installation at every site.',
    'We serve as the regional execution partner that national brands and franchise groups rely on for the Pacific Northwest. Whether you\'re rolling out 5 locations or 500, we bring the same discipline, documentation, and accountability to every site.',
  ],
  stats: [
    { number: '100%', label: 'Brand standard compliance on every national account install', desc: 'We work from your brand guidelines and submit documentation to prove compliance — every single site.' },
    { number: '65yrs', label: 'Experience executing complex commercial signage programs', desc: 'We\'ve seen every complication that multi-site programs can produce. We\'ve solved them all before.' },
    { number: '1', label: 'Point of contact for the entire program', desc: 'One account manager. One set of reporting. No chasing down subcontractors or assembling fragmented teams.' },
  ],
  features: [
    { title: 'Single-Source Accountability', body: 'One team manages design, fabrication, permits, and installation across every location. You have one contact, one contract, and one team responsible for everything.' },
    { title: 'Brand Standards Compliance', body: 'We work directly from your brand standards manual. Colors, materials, dimensions, and finishes are documented, controlled, and verified at every site.' },
    { title: 'Multi-Jurisdiction Permitting', body: 'Different municipalities have different codes. We\'ve worked across Washington, Oregon, Idaho, and beyond — and we know how to navigate each jurisdiction efficiently.' },
    { title: 'Documented Quality Control', body: 'Every installation is documented with photos, measurements, and sign-off documentation that you can use for corporate compliance reporting.' },
    { title: 'Scalable Production Capacity', body: 'Our Mount Vernon facility can handle concurrent production for multiple sites simultaneously — without one location waiting on another.' },
    { title: 'Proven National Brand Experience', body: 'Walmart, McDonald\'s, Chevron, Chevrolet, Allstate, and more. We understand what national brand programs require and we deliver it consistently.' },
  ],
  options: [
    'Franchise rollout programs',
    'Rebranding / refresh programs',
    'New construction signage packages',
    'Channel letters (multi-site)',
    'Monument signs (multi-site)',
    'Pylon / pole signs (multi-site)',
    'Interior wayfinding packages',
    'Vehicle fleet programs',
    'Temporary grand opening signage',
    'Corporate documentation & reporting',
    'Multi-state permitting',
    'Volume pricing programs',
  ],
  related: [
    { name: 'Channel Letters', path: '/services/channel-letters', tagline: 'Standard storefront sign for franchises' },
    { name: 'Monument Signs', path: '/services/monument-signs', tagline: 'Property ID across all locations' },
    { name: 'Pylon Signs', path: '/services/pylon-signs', tagline: 'Roadway visibility at every site' },
  ],
};

export default () => <ServicePage {...data} />;
