// File: src/components/Homepage.jsx - COMPLETE PROFESSIONAL REDESIGN
import React, { useState, useEffect } from 'react';

// Counter Component for animated numbers
const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(end * percentage));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}</span>;
};

// Track engagement function
const trackEngagement = (action, label) => {
  if (typeof window !== 'undefined') {
    // Google Analytics
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: 'hero_section',
        event_label: label
      });
    }
    
    // Console log for debugging
    console.log(`Engagement: ${action} - ${label}`);
  }
};

const MeyerSignProfessional = () => {
  const [activeService, setActiveService] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // ========== FIXED: useEffect INSIDE component ==========
  useEffect(() => {
    // Scroll progress tracking
    const updateScrollProgress = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) {
        progressBar.style.width = scrolled + "%";
      }
    };

    // Exit intent detection
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 || e.clientX <= 0 || 
          e.clientX >= window.innerWidth || e.clientY >= window.innerHeight) {
        trackEngagement('exit_intent', 'hero_section');
      }
    };

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });

    // Observe all animate-on-scroll elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    window.addEventListener('scroll', updateScrollProgress);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      document.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
    };
  }, []);

  // Services data from Meyer Sign's actual offerings
  const services = [
    {
      id: 'monument',
      title: 'Monument Displays',
      description: 'Architectural signage that enhances street visibility and brand impact',
      fullDescription: 'Monument displays integrate architectural and signage elements to enhance the street visibility and impact of your brand. They strengthen your business\'s identity through a variety of media, including architectural elements that can emulate the design of your building.',
      materials: ['Stone', 'Stucco', 'Concrete', 'Brick', 'Wood', 'Metal Accents'],
      process: ['Site Analysis', 'Architectural Design', 'Material Selection', 'Precision Fabrication', 'Professional Installation'],
      benefits: ['Maximum Visibility', 'Brand Enhancement', 'Architectural Integration', 'Durability', 'Custom Design'],
      image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'exterior',
      featured: true
    },
    {
      id: 'pylon',
      title: 'Pylon Signs',
      description: 'Freeway high-rise signage for maximum visibility',
      fullDescription: 'Pylon signs are towering structures designed for maximum visibility from freeways and major roadways. These high-impact signs serve as landmarks for your business, attracting customers from great distances.',
      materials: ['Structural Steel', 'Aluminum', 'LED Illumination', 'High-grade Vinyl', 'Weather-resistant Coatings'],
      process: ['Engineering Analysis', 'Structural Design', 'Fabrication', 'Electrical Integration', 'Crane Installation'],
      benefits: ['Freeway Visibility', '24/7 Brand Presence', 'Landmark Status', 'High ROI', 'Weather Resistant'],
      image: 'https://images.unsplash.com/photo-1501452185849-1c6ff0d06e70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'exterior',
      featured: true
    },
    {
      id: 'channel-letters',
      title: 'Channel Letters',
      description: 'Custom illuminated letters for storefront branding',
      fullDescription: 'Channel letters are three-dimensional, illuminated signage elements that create a professional, high-visibility presence for your business. Available in front-lit, back-lit, and halo-lit variations.',
      materials: ['Aluminum Faces', 'Polycarbonate Returns', 'LED Modules', 'Stainless Steel', 'Acrylic'],
      process: ['3D Design', 'CNC Routing', 'Bending/Forming', 'LED Installation', 'Finishing'],
      benefits: ['Energy Efficient', 'Custom Colors', 'Long Lifespan', 'Professional Appearance', 'Easy Maintenance'],
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'exterior'
    },
    {
      id: 'message-centers',
      title: 'Message Centers',
      description: 'Electronic web-interfaced digital displays',
      fullDescription: 'Interactive digital message centers that can be updated remotely via web interface. Perfect for promotions, announcements, and real-time communication with customers.',
      materials: ['LED Modules', 'Aluminum Cabinets', 'Weatherproof Housing', 'Control Systems', 'Content Management Software'],
      process: ['Content Strategy', 'Hardware Selection', 'Software Integration', 'Installation', 'Training'],
      benefits: ['Remote Updates', 'Real-time Messaging', 'High Impact', 'Revenue Generation', 'Flexible Content'],
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'digital',
      featured: true
    },
    {
      id: 'vehicle-graphics',
      title: 'Vehicle Graphics',
      description: 'Mobile advertising with custom vehicle wraps',
      fullDescription: 'Transform your vehicle fleet into mobile billboards with premium vinyl wraps and graphics. Our vehicle graphics withstand the elements while maximizing brand exposure.',
      materials: ['Premium Vinyl', 'Laminates', 'Reflective Materials', 'Protective Coatings', 'Digital Prints'],
      process: ['Vehicle Template', 'Design Layout', 'Print Production', 'Precision Application', 'Quality Inspection'],
      benefits: ['Mobile Advertising', 'Cost-effective', 'Brand Consistency', 'Durable', 'Removable'],
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'mobile'
    },
    {
      id: 'window-graphics',
      title: 'Window Graphics',
      description: 'Custom decals and lettering for storefronts',
      fullDescription: 'Window graphics and decals that balance visibility with aesthetics. From subtle frosted designs to bold promotional graphics, we create solutions that work for your business.',
      materials: ['Perforated Window Film', 'Frosted Vinyl', 'Full-color Prints', 'Decorative Patterns', 'Anti-graffiti Coatings'],
      process: ['Visibility Analysis', 'Design Mockup', 'Precision Cutting', 'Professional Application', 'Final Inspection'],
      benefits: ['Brand Visibility', 'Privacy Options', 'Cost-effective', 'Temporary/Permanent', 'Easy Installation'],
      image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'interior'
    },
    {
      id: 'directory-signs',
      title: 'Directory Signs',
      description: 'Wayfinding and directory systems for complexes',
      fullDescription: 'Professional directory and wayfinding systems that guide visitors through office complexes, medical centers, campuses, and shopping centers with clarity and style.',
      materials: ['Acrylic Panels', 'Aluminum Frames', 'Changeable Letter Systems', 'LED Backlighting', 'Durable Finishes'],
      process: ['Space Analysis', 'Flow Design', 'Material Selection', 'Fabrication', 'Installation'],
      benefits: ['Visitor Guidance', 'Professional Appearance', 'ADA Compliant', 'Easy Updates', 'Durable Construction'],
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'interior'
    },
    {
      id: 'wall-signs',
      title: 'Wall Signs',
      description: 'Non-illuminated and illuminated wall signage',
      fullDescription: 'Wall-mounted signage solutions ranging from simple dimensional letters to complex illuminated installations that enhance your building\'s facade.',
      materials: ['Dimensional Letters', 'LED Illumination', 'Metal Finishes', 'Wood Elements', 'Composite Materials'],
      process: ['Wall Analysis', 'Design Integration', 'Fabrication', 'Mounting System Design', 'Installation'],
      benefits: ['Space Efficient', 'High Visibility', 'Architectural Integration', 'Custom Sizing', 'Durable'],
      image: 'https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'exterior'
    },
    {
      id: 'ada-signage',
      title: 'ADA Signage',
      description: 'Compliant accessibility signage',
      fullDescription: 'ADA-compliant signage that meets all regulatory requirements while maintaining brand consistency and design integrity.',
      materials: ['Tactile Elements', 'Braille', 'Contrasting Colors', 'Non-glare Finishes', 'Durable Substrates'],
      process: ['Code Review', 'Design Compliance', 'Tactile Production', 'Quality Assurance', 'Certification'],
      benefits: ['Regulatory Compliance', 'Accessibility', 'Professional Appearance', 'Durable', 'Easy Installation'],
      image: 'https://images.unsplash.com/photo-1616464916356-6a8d8b3c3e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'interior'
    }
  ];

  // Process steps
  const processSteps = [
    {
      step: 1,
      title: 'Planning & Consultation',
      description: 'We start with understanding your goals, conducting site surveys, and developing a strategic signage plan tailored to your business needs.',
      icon: '📋',
      details: [
        'Free site assessment',
        'Brand analysis',
        'Competitive review',
        'Budget planning',
        'Timeline development'
      ]
    },
    {
      step: 2,
      title: 'Design & Visualization',
      description: 'Our design team creates custom concepts and 3D visualizations that bring your signage vision to life before fabrication begins.',
      icon: '🎨',
      details: [
        'Custom design concepts',
        '3D renderings',
        'Material samples',
        'Color studies',
        'Virtual mockups'
      ]
    },
    {
      step: 3,
      title: 'Permitting & Approvals',
      description: 'We handle all necessary permits and approvals, navigating local regulations to ensure compliance and smooth project progression.',
      icon: '📝',
      details: [
        'Zoning code review',
        'Application preparation',
        'City/County coordination',
        'Electrical permits',
        'Historical district approvals'
      ]
    },
    {
      step: 4,
      title: 'Fabrication',
      description: 'State-of-the-art fabrication in our Mount Vernon shop using CNC routing, laser cutting, welding, and finishing techniques.',
      icon: '⚙️',
      details: [
        'CNC precision cutting',
        'Metal fabrication',
        'LED assembly',
        'Finishing treatments',
        'Quality control checks'
      ]
    },
    {
      step: 5,
      title: 'Installation',
      description: 'Professional installation by our certified crews, ensuring perfect placement and electrical integration.',
      icon: '📐',
      details: [
        'Certified installers',
        'Crane services',
        'Electrical hookup',
        'Final alignment',
        'Clean-up'
      ]
    },
    {
      step: 6,
      title: 'Maintenance & Support',
      description: 'Ongoing support, maintenance services, and warranty coverage to keep your signage looking perfect for years.',
      icon: '🔧',
      details: [
        'Routine maintenance',
        'Emergency repairs',
        'Warranty service',
        'LED upgrades',
        'Content updates'
      ]
    }
  ];

  // Featured projects
  const featuredProjects = [
    {
      title: 'Westside Business Center',
      service: 'Monument Display & Pylon Sign',
      location: 'Burlington, WA',
      description: 'Complete signage package including illuminated monument display and 30-foot pylon sign',
      image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      year: '2023'
    },
    {
      title: 'Oyster & Thistle Restaurant',
      service: 'Channel Letters & Window Graphics',
      location: 'Mount Vernon, WA',
      description: 'Custom illuminated channel letters with matching window graphics and interior signage',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      year: '2023'
    },
    {
      title: 'Everett Medical Center',
      service: 'ADA Signage & Wayfinding System',
      location: 'Everett, WA',
      description: 'Complete ADA-compliant wayfinding system with directory signs and room identification',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      year: '2022'
    }
  ];

  // Service categories for filtering
  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'exterior', name: 'Exterior Signs' },
    { id: 'interior', name: 'Interior Signs' },
    { id: 'digital', name: 'Digital Signs' },
    { id: 'mobile', name: 'Vehicle Graphics' }
  ];

  // Filter services by category
  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  // Get active service details
  const activeServiceDetails = activeService 
    ? services.find(s => s.id === activeService)
    : null;

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Meyer Sign & Advertising</h1>
                <p className="text-xs text-gray-600">Mount Vernon, WA • Since 1995</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-700 font-medium">Services</a>
              <a href="#process" className="text-gray-700 hover:text-blue-700 font-medium">Process</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-700 font-medium">Projects</a>
              <a href="#certifications" className="text-gray-700 hover:text-blue-700 font-medium">Certifications</a>
              <a href="#contact" className="bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                Get Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

<div className="inline-flex items-center gap-3 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl shadow-sm">
  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
  <span className="text-sm font-semibold text-gray-800">
    WASHINGTON'S TRUSTED SIGNAGE EXPERTS <span className="text-blue-700">SINCE 1995</span>
  </span>
</div>

{/* ==================== ULTIMATE COMMERCIAL SIGNAGE HERO ==================== */}
{/* Engineered for Enterprise Conversion | Washington & New York Markets */}

<section className="relative bg-white overflow-hidden min-h-[90vh] lg:min-h-[80vh] flex items-center pt-16 lg:pt-20">
  {/* ========== STRATEGIC BACKGROUND LAYERS ========== */}
  <div className="absolute inset-0 z-0">
    {/* Performance-optimized gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/5 to-gray-50/5"></div>
    
    {/* Washington/NY Market Differentiator */}
    <div className="absolute top-10 left-10 hidden xl:block opacity-5">
      <div className="text-[200px] font-black text-gray-900/5 select-none">WA</div>
    </div>
    <div className="absolute bottom-10 right-10 hidden xl:block opacity-5">
      <div className="text-[200px] font-black text-gray-900/5 select-none">NY</div>
    </div>
  </div>

  {/* ========== CONVERSION-OPTIMIZED CONTENT ========== */}
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-2">
    <div className="max-w-8xl mx-auto">
      
      {/* ========== MOBILE CONVERSION FUNNEL ========== */}
      <div className="lg:hidden space-y-6">
        
        {/* STRATEGIC MARKET POSITIONING */}
        <div className="flex items-center justify-between mb-4">
          <div className="inline-flex items-center bg-blue-50 px-3 py-1.5 rounded-md border border-blue-100">
            <svg className="w-3 h-3 text-blue-700 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-blue-800 text-xs font-semibold uppercase tracking-wide">
              WA & NY MARKETS
            </span>
          </div>
          <div className="text-xs text-gray-500 font-medium">
            Since 1995
          </div>
        </div>

        {/* COMPELLING HEADLINE WITH SUBTLE URGENCY */}
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-[1.05]">
            <span className="block">Your Next Signage Project</span>
            <span className="block text-blue-800">Deserves Washington's Most</span>
            <span className="block text-blue-800">Experienced Team</span>
          </h1>
          
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full"></div>
        </div>

        {/* STRATEGIC VALUE PROPOSITION */}
        <div className="bg-blue-50/30 rounded-xl border border-blue-100 p-4">
          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold text-gray-900">30 years mastering Washington & New York permits</span> 
            means your commercial signage gets approved faster, built better, and lasts longer.
          </p>
        </div>

        {/* CONVERSION-OPTIMIZED CTA BLOCK */}
        <div className="space-y-4">
          {/* PRIMARY CTA WITH SOCIAL PROOF */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Start With a Free Site Assessment
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Includes permit feasibility analysis + 3D visualization
            </p>
            
            <a 
              href="#assessment" 
              className="group relative flex items-center justify-center w-full bg-gradient-to-r from-blue-700 to-blue-800 text-white px-6 py-3.5 rounded-lg font-semibold text-base hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              onClick={() => {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                  event: 'cta_click',
                  cta_type: 'mobile_primary_assessment',
                  position: 'hero'
                });
              }}
              aria-label="Get a free commercial signage assessment"
            >
              <svg className="w-5 h-5 mr-2.5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Get Free Assessment
            </a>
            
            {/* MICRO-COMMITMENT */}
            <div className="mt-3 text-center">
              <a 
                href="#projects" 
                className="text-blue-700 text-sm font-medium hover:text-blue-900 transition-colors inline-flex items-center"
                onClick={() => trackEngagement('secondary_cta', 'view_portfolio_mobile')}
              >
                View 500+ project portfolio
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* TRUST ACCELERATORS */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: '30+ Years', sub: 'Experience' },
              { label: '500+', sub: 'Projects' },
              { label: '100%', sub: 'Permit Success' }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-3 text-center">
                <div className="font-bold text-gray-900 text-lg">{item.label}</div>
                <div className="text-xs text-gray-600 mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========== DESKTOP ENTERPRISE CONVERSION MACHINE ========== */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-10 items-center">
        
        {/* LEFT COLUMN: PERSUASION ENGINE (7 columns) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* MARKET DOMINANCE BADGE */}
          <div className="inline-flex items-center space-x-3">
            <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg border border-blue-100">
              <svg className="w-4 h-4 text-blue-700 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-blue-800 text-sm font-semibold uppercase tracking-wide">
                WASHINGTON & NEW YORK'S PREMIER COMMERCIAL SIGNAGE FIRM
              </span>
            </div>
            <div className="text-sm text-gray-500 font-medium">
              <span className="hidden xl:inline">Est. 1995 • </span>3 Generations
            </div>
          </div>

          {/* STRATEGIC HEADLINE ARCHITECTURE */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.05]">
              <span className="block">When Your Reputation</span>
              <span className="block">Depends on Visibility,</span>
              <span className="block text-blue-800 mt-2">Choose 30 Years of</span>
              <span className="block text-blue-800">Signage Excellence</span>
            </h1>
            
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-full"></div>
          </div>

          {/* COMPETITIVE MOAT POSITIONING */}
          <div className="bg-gradient-to-r from-blue-50/40 to-blue-50/10 rounded-xl border border-blue-100 p-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              <span className="font-semibold text-gray-900">National chains outsource. We don't.</span> 
              Every sign is designed, fabricated, and installed by our team — ensuring Washington & New York code compliance and unmatched quality control.
            </p>
          </div>


          {/* FIXED: CLIENT TRUST MARKS - No Text Overlap */}
          <div className="pt-6 border-t border-gray-200">
            <div className="mb-3">
              <div className="text-sm text-gray-600 font-medium">
                Trusted by Washington & New York's leading:
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="grid grid-cols-3 gap-4 flex-1">
                {[
                  { 
                    label: 'Developers', 
                    count: '120+',
                    bgColor: 'bg-blue-50',
                    borderColor: 'border-blue-100'
                  },
                  { 
                    label: 'Franchises', 
                    count: '85+',
                    bgColor: 'bg-gray-50',
                    borderColor: 'border-gray-200'
                  },
                  { 
                    label: 'Property Mgrs', 
                    count: '200+',
                    bgColor: 'bg-gray-50',
                    borderColor: 'border-gray-200'
                  }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`${item.bgColor} ${item.borderColor} rounded-lg border p-3 text-center min-w-[100px]`}
                  >
                    <div className="font-bold text-gray-900 text-lg leading-tight">{item.count}</div>
                    <div className="text-xs text-gray-600 mt-1 leading-tight">{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="text-xs text-gray-500 font-medium mt-2 sm:mt-0 sm:ml-4 whitespace-nowrap">
                Commercial clients since 1995
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: CONVERSION ENGINE (5 columns) */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* FIXED: SIMPLE IMAGE SHOWCASE (No Carousel) */}
          <div className="relative group">
            <div className="relative rounded-xl overflow-hidden border border-gray-300 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80&fit=fill&fill=blur"
                alt="Meyer Sign illuminated channel letters - Bellevue commercial installation"
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                loading="eager"
                width="800"
                height="450"
              />
              
              {/* Project Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Project Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-white font-semibold text-xl mb-1 leading-tight">Bellevue Financial District</div>
                <div className="text-blue-200 text-sm leading-tight">Channel Letters • Completed Q4 2023</div>
                <div className="flex items-center mt-3">
                  <div className="flex -space-x-2 mr-3">
                    {[1,2,3].map((i) => (
                      <div key={i} className="w-6 h-6 bg-white rounded-full border-2 border-blue-800"></div>
                    ))}
                  </div>
                  <div className="text-white/90 text-sm leading-tight">98% Client Satisfaction</div>
                </div>
              </div>
            </div>
            
            {/* Static Image Indicator (Not Carousel) */}
            <div className="flex justify-center mt-4">
              <div className="text-sm text-gray-600 font-medium">
                Featured Project • <a href="#portfolio" className="text-blue-700 hover:text-blue-900">View All 500+</a>
              </div>
            </div>
          </div>

          {/* ULTIMATE CONVERSION CARD */}
          <div className="bg-white rounded-xl border border-gray-300 shadow-xl overflow-hidden">
            
            {/* CARD HEADER */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6">
              <h3 className="text-2xl font-semibold mb-2 leading-tight">
                Begin Your Project Right
              </h3>
              <p className="text-gray-300 text-sm leading-tight">
                Start with a comprehensive assessment from Washington's most experienced team
              </p>
            </div>
            
            {/* CARD BODY */}
            <div className="p-6 space-y-5">
              {/* VALUE STACK */}
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 leading-tight">Permit feasibility analysis</span>
                </div>
                <div className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 leading-tight">3D visualization mockup</span>
                </div>
                <div className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 leading-tight">Material & timeline estimate</span>
                </div>
              </div>

              {/* PRIMARY CTA */}
              <a 
                href="#assessment" 
                className="group relative flex items-center justify-center w-full bg-gradient-to-r from-blue-700 to-blue-800 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
                onClick={() => {
                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({
                    event: 'enterprise_cta_click',
                    cta_type: 'desktop_comprehensive_assessment',
                    position: 'hero_conversion_card'
                  });
                }}
                aria-label="Schedule a comprehensive commercial signage assessment"
              >
                <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span className="whitespace-nowrap">Schedule Comprehensive Assessment</span>
              </a>

              {/* RISK REDUCTION */}
              <div className="text-center">
                <div className="text-xs text-gray-500 mb-1 leading-tight">No commitment • 24-hour response • Free evaluation</div>
                <div className="text-xs text-gray-400 leading-tight">Valued at $1,250 — provided at no cost</div>
              </div>

              {/* SECONDARY PATH */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center sm:space-x-6 space-y-3 sm:space-y-0">
                  <a 
                    href="#portfolio" 
                    className="text-blue-700 text-sm font-medium hover:text-blue-900 transition-colors text-center sm:text-left"
                    onClick={() => trackEngagement('secondary_cta', 'portfolio_enterprise')}
                  >
                    View Enterprise Portfolio
                  </a>
                  <span className="hidden sm:inline text-gray-300">•</span>
                  <a 
                    href="tel:+1-800-555-1234" 
                    className="text-gray-700 text-sm font-medium hover:text-gray-900 transition-colors text-center sm:text-left"
                    onClick={() => trackEngagement('direct_call', 'enterprise_hero')}
                  >
                    (800) 555-1234
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* SOCIAL PROOF FOOTER */}
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="text-sm text-gray-600">
                <span className="font-medium text-gray-900">Latest project:</span> 12-story Seattle mixed-use development
              </div>
              <div className="text-xs text-blue-700 font-medium">
                <a href="#case-study" onClick={() => trackEngagement('case_study', 'hero_latest')}>
                  View Case Study →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* FIXED: CONVERSION ACCELERATOR - Proper Text */}
  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden lg:block">
    <a 
      href="#process" 
      className="group flex items-center text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
      onClick={() => trackEngagement('scroll_prompt', 'view_process')}
    >
      <span className="mr-2 whitespace-nowrap">See Our 5-Step Process</span>
      <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </a>
  </div>
</section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Recent Projects</h2>
            <p className="text-xl text-gray-600">Serving Washington communities with excellence</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {project.year}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 mb-2">
                    <span className="font-medium">Service:</span> {project.service}
                  </div>
                  <div className="text-sm text-gray-500 mb-4">
                    <span className="font-medium">Location:</span> {project.location}
                  </div>
                  <p className="text-gray-700">{project.description}</p>
                  <button className="mt-4 text-blue-700 font-semibold hover:text-blue-800">
                    View Case Study →
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Articles Section */}
          <div className="mt-16 pt-12 border-t">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Behind the Sign</h3>
              <p className="text-gray-600">Insights, stories, and industry knowledge from our team</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="text-xl font-bold mb-3">The Evolution of Digital Message Centers</h4>
                <p className="text-gray-600 mb-4">
                  How web-interfaced digital displays are transforming business communication and customer engagement.
                </p>
                <button className="text-blue-700 font-semibold">Read Article →</button>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="text-xl font-bold mb-3">ADA Compliance Made Simple</h4>
                <p className="text-gray-600 mb-4">
                  A guide to navigating ADA signage requirements while maintaining design integrity and brand consistency.
                </p>
                <button className="text-blue-700 font-semibold">Read Article →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Credentials</h2>
            <p className="text-xl text-gray-600">Fully registered, bonded, and insured for your peace of mind</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Washington State Registration</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    General Construction Contractor
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    Electrical Contractor
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    Bonded & Insured
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    Local Business License
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Industry Certifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-3">UL</span>
                    Underwriters Laboratories Listed
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-3">ISA</span>
                    International Sign Association Member
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-3">OSHA</span>
                    Safety Certified Installation Crews
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-3">LED</span>
                    Manufacturer Certified Lighting
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center text-gray-600">
              <p>Serving: Burlington • Marysville • Everett • Arlington • Mount Vernon • and throughout Washington State</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service-Specific Contact Form */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Get a Custom Quote</h2>
              <p className="text-xl text-gray-300">Tell us about your specific signage needs</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Service Selection */}
              <div className="bg-gray-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">Select Your Service</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {services.slice(0, 6).map(service => (
                    <button
                      key={service.id}
                      className="p-4 bg-gray-700 rounded-lg text-left hover:bg-gray-600 transition-colors"
                    >
                      <div className="font-medium">{service.title}</div>
                      <div className="text-sm text-gray-400 mt-1">Learn more</div>
                    </button>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Type</label>
                    <select className="w-full p-3 bg-gray-700 rounded-lg">
                      <option>New Signage Installation</option>
                      <option>Sign Replacement/Update</option>
                      <option>Multiple Locations</option>
                      <option>Maintenance/Repair</option>
                      <option>Design Consultation</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Timeline</label>
                    <select className="w-full p-3 bg-gray-700 rounded-lg">
                      <option>Immediate (1-2 weeks)</option>
                      <option>Soon (2-4 weeks)</option>
                      <option>Planning (1-3 months)</option>
                      <option>Future (3+ months)</option>
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-gray-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">Project Details</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Your Name *</label>
                      <input 
                        type="text" 
                        className="w-full p-3 bg-gray-700 rounded-lg"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Business Name *</label>
                      <input 
                        type="text" 
                        className="w-full p-3 bg-gray-700 rounded-lg"
                        placeholder="Your Business"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input 
                        type="email" 
                        className="w-full p-3 bg-gray-700 rounded-lg"
                        placeholder="you@business.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone *</label>
                      <input 
                        type="tel" 
                        className="w-full p-3 bg-gray-700 rounded-lg"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Location *</label>
                    <input 
                      type="text" 
                      className="w-full p-3 bg-gray-700 rounded-lg"
                      placeholder="City, WA"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Description *</label>
                    <textarea 
                      rows="4"
                      className="w-full p-3 bg-gray-700 rounded-lg"
                      placeholder="Tell us about your signage needs, brand requirements, and any specific challenges..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3" />
                      <span className="text-sm">I'd like to schedule a free site assessment</span>
                    </label>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
                  >
                    Request Custom Quote
                  </button>
                  
                  <div className="text-center text-sm text-gray-400">
                    <p>We'll respond within 24 hours with a preliminary design mockup</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center">
                  <span className="font-bold text-xl">M</span>
                </div>
                <div>
                  <div className="text-xl font-bold">Meyer Sign & Advertising</div>
                  <div className="text-sm text-gray-400">Mount Vernon, WA</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                High-quality custom signs manufactured in our Mount Vernon shop since 1995.
              </p>
              <div className="text-sm text-gray-400">
                <p>Phone: (360) 336-9999</p>
                <p>Email: info@meyersign.com</p>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white">Monument Displays</a></li>
                <li><a href="#" className="hover:text-white">Pylon Signs</a></li>
                <li><a href="#" className="hover:text-white">Channel Letters</a></li>
                <li><a href="#" className="hover:text-white">Message Centers</a></li>
                <li><a href="#" className="hover:text-white">Vehicle Graphics</a></li>
              </ul>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#process" className="hover:text-white">Our Process</a></li>
                <li><a href="#certifications" className="hover:text-white">Certifications</a></li>
                <li><a href="#projects" className="hover:text-white">Projects</a></li>
                <li><a href="#contact" className="hover:text-white">Get Quote</a></li>
                <li><a href="#" className="hover:text-white">Articles</a></li>
              </ul>
            </div>
            
            {/* Service Area */}
            <div>
              <h3 className="text-lg font-bold mb-6">Service Area</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Mount Vernon</li>
                <li>• Burlington</li>
                <li>• Marysville</li>
                <li>• Everett</li>
                <li>• Arlington</li>
                <li>• Throughout WA</li>
              </ul>
              
              <div className="mt-6 text-sm text-gray-500">
                <p>WA General Contractor #MEYERSI099QL</p>
                <p>Electrical Contractor #MEYERE123RF</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Meyer Sign & Advertising. All rights reserved.</p>
            <p className="mt-2 text-sm">UL Listed • Bonded • Insured • Washington State Registered</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MeyerSignProfessional;