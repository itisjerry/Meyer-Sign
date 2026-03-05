/* eslint-disable */
import ServicePage from '../../components/ServicePage';

const data = {
  title: 'Pylon & Pole Signs | Roadway Visibility | Meyer Sign — Washington State',
  metaDescription: 'Custom pylon and pole signs engineered for maximum roadway visibility. From single-tenant poles to multi-tenant superstructures. Meyer Sign fabricates and installs — Mount Vernon, WA.',
  badge: 'Pylon Signs',
  headline: 'Be Visible from the Road —|Not Just the Sidewalk.',
  subheadline: 'When your business is set back from the street, or surrounded by competition, a pylon sign cuts through the noise. Tall, illuminated, and engineered to be seen from half a mile away.',
  proofLine: 'Free site survey · Height & zoning assessment included · No commitment',
  whyTitle: 'When Ground Level Isn\'t Enough',
  intro: [
    'Some locations simply can\'t be seen from the road without elevation. A pylon sign solves that problem permanently — giving your brand the height it needs to be noticed by drivers at highway speeds, before they\'ve passed your exit.',
    'We engineer and fabricate pylon signs in our Mount Vernon shop, from simple single-pole structures to complex multi-tenant superstructures rivaling billboard size. Our in-house crane crew handles installations from standard commercial heights to large-format retail and highway applications.',
    'Multi-tenant pylons are particularly powerful for shopping centers, business parks, and medical campuses — they consolidate tenant identities into a single, authoritative structure that customers can navigate by from the road.',
  ],
  stats: [
    { number: '500ft+', label: 'Typical visibility range for an illuminated pylon sign', desc: 'Drivers get multiple seconds of advance notice — enough time to plan their turn, not miss the entrance.' },
    { number: '40ft', label: 'Maximum installation height our crew handles in-house', desc: 'Our crane fleet means no project is too tall. We handle the structural engineering, permits, and full install.' },
    { number: '3x', label: 'More traffic exposure vs. a ground-level sign', desc: 'Height dramatically increases visibility angle and the number of drivers who see your business each day.' },
  ],
  features: [
    { title: 'Single & Multi-Tenant Configurations', body: 'Simple single-business poles to complex multi-panel structures for retail centers and office parks. Every tenant gets equal visibility.' },
    { title: 'Illuminated Cabinet Faces', body: 'Double-faced illuminated cabinets with your brand graphics, tenant panels, or full-color digital displays. Bright by day, unmistakable at night.' },
    { title: 'LED Message Center Integration', body: 'Combine a static identity cabinet with a dynamic LED message center panel. Display hours, specials, and events without changing the structure.' },
    { title: 'Structural Engineering', body: 'Every pylon is engineered for wind load, soil conditions, and local code. Stamped drawings submitted with every permit application.' },
    { title: 'In-House Crane Installation', body: 'Our equipment and crew handle the full install — foundation, pole set, cabinet placement, electrical connection. No third-party contractors.' },
    { title: 'Permit & Zoning Management', body: 'Height limits, setback requirements, and illumination rules vary by municipality. We know them all and design to them from the start.' },
  ],
  options: [
    'Single-pole structure',
    'Two-pole (I-beam) structure',
    'Multi-tenant cabinet panels',
    'Single-tenant cabinet',
    'Illuminated faces',
    'LED message center panel',
    'Monument base option',
    'Changeable copy section',
    'Wind-rated engineering',
    'High-wind / coastal specs',
    'Custom height (up to 40ft+)',
    'Billboard-style superstructure',
  ],
  related: [
    { name: 'LED Message Centers', path: '/services/led-message-centers', tagline: 'Add dynamic content to your pylon' },
    { name: 'Monument Signs', path: '/services/monument-signs', tagline: 'Ground-level identity at the entrance' },
    { name: 'Channel Letters', path: '/services/channel-letters', tagline: 'Building-mounted ID to match' },
  ],
};

export default () => <ServicePage {...data} />;
