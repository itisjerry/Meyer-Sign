/* eslint-disable */
import ServicePage from '../../components/ServicePage';

const data = {
  title: 'Vehicle Wraps & Fleet Graphics | Moving Advertising | Meyer Sign — Washington',
  metaDescription: 'Professional vehicle wraps and fleet graphics that turn every mile into a brand impression. Single vehicles to full fleets. Meyer Sign — designed, printed & installed in-house, WA.',
  badge: 'Vehicle Wraps',
  headline: 'Your Fleet Is Either Advertising|For You — Or It Isn\'t.',
  subheadline: 'Every mile your vehicles drive is a billboard impression — free. A professionally wrapped fleet builds brand recognition, earns trust on the job site, and generates leads from people who weren\'t even looking for you.',
  proofLine: 'Free design mockup on your actual vehicle · Fleet pricing available · No commitment',
  whyTitle: 'The Most Cost-Effective Advertising Per Impression',
  intro: [
    'A vehicle wrap costs a fraction of a traditional billboard — and it keeps generating impressions every single day for years. Studies consistently show wrapped vehicles generate between 30,000 and 70,000 impressions per day in a busy market. Your investment doesn\'t stop paying when the campaign ends.',
    'We design, print, and install vehicle wraps in-house at our Mount Vernon facility. From a single van to an entire fleet of service vehicles, we maintain color accuracy and design consistency across every unit — so your brand looks just as good on truck #14 as it does on truck #1.',
    'Our wraps use 3M and Avery commercial vinyl with manufacturer-rated 5-7 year outdoor performance. Properly installed and cared for, they protect your paint while advertising your brand — and they come off cleanly when it\'s time for a rebrand or vehicle sale.',
  ],
  stats: [
    { number: '30k+', label: 'Daily impressions per wrapped vehicle in an active market', desc: 'No other advertising format generates this many local impressions at this cost per view.' },
    { number: '5–7yr', label: 'Lifespan of a quality commercial vehicle wrap', desc: 'Using 3M and Avery commercial-grade vinyl with certified installation and proper care.' },
    { number: '$0.04', label: 'Estimated cost per impression vs. $4+ for digital ads', desc: 'Vehicle wraps deliver some of the lowest cost-per-impression numbers of any advertising medium.' },
  ],
  features: [
    { title: 'Full & Partial Wrap Options', body: 'Full wraps cover the entire vehicle for maximum impact. Partial wraps focus on doors, hood, or tailgate — lower cost with strong visual effect.' },
    { title: 'Any Vehicle Type', body: 'Cars, vans, trucks, box trucks, trailers, buses, boats — if it moves, we can wrap it. We template every vehicle type for precise printing and fitting.' },
    { title: 'Fleet Consistency', body: 'Color-matched, brand-consistent graphics across your entire fleet. Vehicle 1 looks identical to vehicle 40 — because we control every step in-house.' },
    { title: '3M & Avery Commercial Vinyl', body: 'We only use commercial-grade vinyl with manufacturer warranties. Not the discount material. Your wrap is an investment — we protect it.' },
    { title: 'In-House Print & Install', body: 'Printed on our wide-format printers and installed by our certified technicians. No outsourcing either step. Faster turnaround, tighter quality control.' },
    { title: 'Design That Converts', body: 'Our designers create wrap graphics built for impact at highway speeds — bold, readable, and brand-correct. We\'ve seen what works and what gets ignored.' },
  ],
  options: [
    'Full vehicle wrap',
    'Partial wrap (doors/hood/rear)',
    'Magnetic panels (removable)',
    'Lettering & decals only',
    'Cars & SUVs',
    'Cargo vans & sprinters',
    'Box trucks & cube vans',
    'Pickup trucks',
    'Trailers & flatbeds',
    'Fleet volume pricing',
    'Design only (if printing elsewhere)',
    'Removal service',
  ],
  related: [
    { name: 'Vinyl & Window Graphics', path: '/services/vinyl-window-graphics', tagline: 'Brand your storefront to match your fleet' },
    { name: 'Non-Illuminated Signs', path: '/services/non-illuminated-signs', tagline: 'Job site and event signage' },
    { name: 'Channel Letters', path: '/services/channel-letters', tagline: 'Complete your brand with storefront ID' },
  ],
};

export default () => <ServicePage {...data} />;
