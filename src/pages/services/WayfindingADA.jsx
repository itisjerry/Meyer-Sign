/* eslint-disable */
import ServicePage from '../../components/ServicePage';

const data = {
  title: 'Wayfinding & ADA Signage | Interior Signs | Meyer Sign — Washington State',
  metaDescription: 'ADA-compliant wayfinding and interior signage for offices, campuses, hospitals, and retail. Braille, directional, room ID. Meyer Sign designs & fabricates — Mount Vernon, WA.',
  badge: 'Wayfinding & ADA',
  headline: 'Every Visitor Should Know|Exactly Where to Go.',
  subheadline: 'A confused visitor is a frustrated visitor. Great wayfinding turns a first-time guest into someone who feels instantly at home — and ADA-compliant signage protects your business while communicating that you take inclusion seriously.',
  proofLine: 'Free facility assessment · ADA compliance review included · No commitment',
  whyTitle: 'Clarity That Protects and Impresses',
  intro: [
    'When a patient is late for an appointment, a client is trying to find your conference room, or a customer is looking for the restroom — your wayfinding system is either working for you or against you. There\'s no neutral.',
    'We design comprehensive wayfinding systems that guide people intuitively through your space — entry directories, departmental directionals, room identification, restroom signage, and exterior campus navigation. Every piece is designed as part of a unified system that reflects your brand.',
    'ADA compliance is not optional for most commercial properties, and the penalties for non-compliance are significant. Our team understands federal ADA standards and Washington State accessibility requirements in detail. We design for compliance from the first draft — not as a last-minute check.',
  ],
  stats: [
    { number: '1 in 4', label: 'Adults in the US have a disability that affects daily life', desc: 'ADA-compliant signage ensures every person who visits your facility can navigate it with dignity.' },
    { number: '$75k+', label: 'Potential ADA violation penalty for non-compliant facilities', desc: 'Proper wayfinding is a legal requirement. We design to ADA standards — not just aesthetics.' },
    { number: '40%', label: 'Reduction in staff interruptions when wayfinding is clear', desc: 'Well-designed wayfinding systems reduce "where is X?" questions significantly in office and medical environments.' },
  ],
  features: [
    { title: 'ADA-Compliant Braille & Tactile', body: 'Grade 2 Braille, tactile characters, and correct mounting heights per ADA Standards for Accessible Design. Every room sign meets federal code.' },
    { title: 'Building Directory Systems', body: 'Entry-level directories for multi-tenant buildings, medical campuses, and office parks. Organized, branded, and easy to update as tenants change.' },
    { title: 'Directional Blade Signs', body: 'Corridor directionals that use your brand colors and typography to guide visitors through complex spaces naturally and confidently.' },
    { title: 'Room & Suite Identification', body: 'Consistent room numbering, departmental identification, and suite signs that work as a coordinated system — not a random collection.' },
    { title: 'Exterior Campus Wayfinding', body: 'Parking, building identification, pedestrian paths, and entry direction for multi-building campuses, hospitals, and large facilities.' },
    { title: 'Material Variety', body: 'Acrylic, metal, wood, HDU foam, digital printed substrates — matched to your interior design palette and architectural finish schedule.' },
  ],
  options: [
    'ADA room ID with Braille',
    'Building directory panel',
    'Corridor directional signs',
    'Parking lot directionals',
    'Restroom signs',
    'Emergency exit signs',
    'Exterior campus signs',
    'Dimensional letters',
    'Illuminated directory',
    'Changeable tenant panels',
    'Multi-building systems',
    'Custom branded materials',
  ],
  related: [
    { name: 'Vinyl & Window Graphics', path: '/services/vinyl-window-graphics', tagline: 'Interior branding to complement wayfinding' },
    { name: 'Monument Signs', path: '/services/monument-signs', tagline: 'Exterior property identification' },
    { name: 'Non-Illuminated Signs', path: '/services/non-illuminated-signs', tagline: 'Flat panel and temporary signage' },
  ],
};

export default () => <ServicePage {...data} />;
