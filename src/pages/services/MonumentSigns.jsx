/* eslint-disable */
import ServicePage from '../../components/ServicePage';

const data = {
  title: 'Monument Signs | Architectural Ground Signs | Meyer Sign — Washington State',
  metaDescription: 'Custom monument signs built from stone, brick, stucco & metal. Designed to match your building and anchor your brand at the entrance. Meyer Sign — 65+ years, Mount Vernon WA.',
  badge: 'Monument Signs',
  headline: 'Make a Statement Before They|Even Pull Into Your Lot.',
  subheadline: 'A monument sign doesn\'t just identify your location — it commands it. Architectural, permanent, and impossible to confuse with anything less than a serious business.',
  proofLine: 'Free site visit · Permit feasibility review included · Zero commitment',
  whyTitle: 'Presence That Starts at the Street',
  intro: [
    'Monument signs sit at ground level — right where your customers\' eyes naturally fall as they approach your property. Before they see your building, before they see your windows, they see your sign. That first impression is your brand, and it happens in three seconds.',
    'We design and fabricate monument signs using stone, brick, stucco, concrete, or metal — individually or in combination — to match or complement your building\'s architecture. The result isn\'t just a sign. It\'s a structure that looks like it was always part of the property.',
    'Every monument we build is engineered for your specific site, permit requirements, and soil conditions. Our in-house fabrication team handles the metalwork, face panels, and LED integration. Our licensed crew handles the foundation, electrical, and installation.',
  ],
  stats: [
    { number: '34%', label: 'Average increase in new customer traffic after monument sign installation', desc: 'Ground-level identification significantly improves findability for first-time visitors and drive-by traffic.' },
    { number: '20yr+', label: 'Expected lifespan of a properly built monument sign', desc: 'Quality materials and proper engineering mean your monument investment pays back for decades.' },
    { number: '100%', label: 'Permit success rate — across 65 years', desc: 'We\'ve never had a permit denied. We know what gets approved and design to those standards from day one.' },
  ],
  features: [
    { title: 'Architectural Material Options', body: 'Stone veneer, brick, stucco, poured concrete, CMU block, and metal — or any combination. Matched to your building for a seamless, intentional look.' },
    { title: 'LED Illuminated Cabinet Options', body: 'Internally lit faces, halo-lit letters, or LED-spot-lit panels. Your sign keeps working after dark without looking like a prop.' },
    { title: 'Multi-Tenant Configurations', body: 'Perfect for office parks, medical campuses, and retail centers — multiple tenant panels in a single clean structure.' },
    { title: 'Engineered Foundation & Install', body: 'Full structural engineering. Our crews dig, pour, set, and finish — properly permitted and inspected every time.' },
    { title: 'Custom Size & Profile', body: 'From compact entrance markers to large property ID structures — sized and proportioned to your specific site and zoning limits.' },
    { title: 'Changeable Copy Panels', body: 'Tenant name panels and message areas can be designed for easy future updates as tenants change.' },
  ],
  options: [
    'Stone veneer facing',
    'Brick facing',
    'Stucco finish',
    'Poured concrete',
    'Metal panel facing',
    'Internal LED illumination',
    'Halo-lit letters',
    'Multi-tenant panels',
    'Changeable copy',
    'LED message center integration',
    'Landscaping cutouts',
    'Solar lighting option',
  ],
  related: [
    { name: 'Channel Letters', path: '/services/channel-letters', tagline: 'Add illuminated letters above' },
    { name: 'LED Message Centers', path: '/services/led-message-centers', tagline: 'Integrate dynamic messaging' },
    { name: 'Pylon Signs', path: '/services/pylon-signs', tagline: 'When you need roadway height' },
  ],
};

export default () => <ServicePage {...data} />;
