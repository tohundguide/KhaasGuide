import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from './UI';

type DropdownType = 'businessSetup' | 'services' | null;

type DropdownSubSection = {
  heading: string;
  links: { title: string; href: string }[];
};

type DropdownSection = {
  heading: string;
  items: { title: string; description: string; href: string }[];
  children?: DropdownSubSection[];
};

type ServiceGroup = {
  title: string;
  items: { label: string; href: string }[];
};

const businessSetupMenu: DropdownSection[] = [
  {
    heading: 'Business Setup in UAE',
    items: [],
    children: [
      {
        heading: 'Business Incorporation in Dubai',
        links: [
          { title: 'Dubai Free Zones', href: '/dubai-freezone-company-formation' },
          { title: 'Dubai Mainland', href: '/dubai-mainland-company-formation' },
          { title: 'Dubai Offshore', href: '/offshore-company-formation-in-uae' },
        ],
      },
      {
        heading: 'UAE',
        links: [
          { title: 'Mainland Company in UAE', href: '/mainland-dubai-company-formation-uae' },
          { title: 'Free Zone Company in UAE', href: '/business-setup-in-uae-free-zones' },
          { title: 'Offshore Company in UAE', href: '/offshore-company-formation-in-uae' },
        ],
      },
      {
        heading: 'Business Setup in Abu Dhabi',
        links: [
          { title: 'Abu Dhabi Free Zones', href: '/abu-dhabi-free-zone' },
        ],
      },
      {
        heading: 'Business Setup in Sharjah',
        links: [
          { title: 'Sharjah Free Zones', href: '/sharjah-free-zone-company-formation' },
        ],
      },
      {
        heading: 'RAK Company Formation',
        links: [
          { title: 'RAK Free Zones', href: '/rak-free-trade-zone-company-formation' },
          { title: 'RAK Offshore', href: '/rak-offshore-company-setup' },
        ],
      },
      {
        heading: 'Business Setup in Ajman',
        links: [
          { title: 'Ajman Free Zone', href: '/ajman-free-zone-business-setup' },
          { title: 'Ajman Offshore', href: '/ajman-offshore-company-formation' },
        ],
      },
      {
        heading: 'Business Setup in UAQ',
        links: [
          { title: 'UAQ Free Zones', href: '/umm-al-quwain-free-zone-company-formation' },
        ],
      },
      {
        heading: 'Business Setup in Fujairah',
        links: [
          { title: 'Fujairah Free Zone', href: '/fujairah-free-zone-company-setup' },
        ],
      },
    ],
  },
  {
    heading: 'Business Setup in Bahrain',
    items: [],
    children: [
      {
        heading: 'Bahrain Services',
        links: [
          { title: 'Visa Services', href: '/bh/visa-services-in-bahrain' },
          { title: 'Office Space for Rent', href: '/bh/office-space-for-rent-in-bahrain' },
          { title: 'Intellectual Property Services', href: '/bh/intellectual-property-services-in-bahrain' },
          { title: 'Accounting & Bookkeeping Services', href: '/bh/accounting-bookkeeping-services-in-bahrain' },
          { title: 'Public Joint Stock Company', href: '/bh/public-joint-stock-company-in-bahrain' },
          { title: 'Closed Joint Stock Company', href: '/bh/closed-joint-stock-company-in-bahrain' },
          { title: 'Limited Liability Company in Bahrain', href: '/bh/limited-liability-company-in-bahrain' },
          { title: 'Partnership Company in Bahrain', href: '/bh/partnership-company-in-bahrain' },
          { title: 'Simple Commandite Company in Bahrain', href: '/bh/simple-commandite-company-in-bahrain' },
          { title: 'Single Person Company in Bahrain', href: '/bh/single-person-company-in-bahrain' },
          { title: 'Individual Establishment in Bahrain', href: '/bh/individual-establishment-in-bahrain' },
          { title: 'Foreign Company Branch in Bahrain', href: '/bh/foreign-company-branch-in-bahrain' },
        ],
      },
      {
        heading: 'Bahrain Free Trade Zone',
        links: [
          { title: 'Bahrain International Airport', href: '/bh/bahrain-international-airport-free-zone' },
          { title: 'Bahrain International Investment Park', href: '/bh/bahrain-international-investment-park' },
          { title: 'Bahrain Investment Wharf', href: '/bh/bahrain-investment-wharf' },
          { title: 'Bahrain Logistic Zone', href: '/bh/bahrain-logistic-zone' },
          { title: 'Sheikh Khalifa bin Salman Port', href: '/bh/sheikh-khalifa-bin-salman-port' },
        ],
      },
    ],
  },
  {
    heading: 'Business Setup in Qatar',
    items: [],
    children: [
      {
        heading: 'Qatar Services',
        links: [
          { title: 'PRO Services', href: '/qa/pro-services-in-qatar' },
          { title: 'Tax Services', href: '/qa/tax-services-in-qatar' },
          { title: 'Visa Services', href: '/qa/visa-services-in-qatar' },
          { title: 'Accounting & Bookkeeping Service', href: '/qa/accounting-bookkeeping-services-in-qatar' },
          { title: 'Company Secretarial Services', href: '/qa/company-secretarial-services-in-qatar' },
          { title: 'Intellectual Property Services', href: '/qa/intellectual-property-services-in-qatar' },
          { title: 'Branch Office in Qatar', href: '/qa/branch-office-in-qatar' },
          { title: 'One Person Company in Qatar', href: '/qa/one-person-company-in-qatar' },
          { title: 'Limited Liability Company in Qatar', href: '/qa/limited-liability-company-in-qatar' },
          { title: 'Public Shareholding Company in Qatar', href: '/qa/public-shareholding-company-in-qatar' },
        ],
      },
      {
        heading: 'Qatar Free Zones',
        links: [
          { title: 'Qatar Financial Centre', href: '/qa/qatar-financial-centre' },
          { title: 'Ras Bufontas Free Zone', href: '/qa/ras-bufontas-free-zone' },
          { title: 'Umm Alhoul Free Zone', href: '/qa/umm-alhoul-free-zone' },
          { title: 'Qatar Science and Technology Park', href: '/qa/qatar-science-and-technology-park' },
        ],
      },
    ],
  },
  {
    heading: 'Business Setup in Oman',
    items: [],
    children: [
      {
        heading: 'Oman Services',
        links: [
          { title: 'Mainland Company in Oman', href: '/om/mainland-company-in-oman' },
          { title: 'Shelf Company in Oman', href: '/om/shelf-company-in-oman' },
          { title: 'Accounting & Bookkeeping Service', href: '/om/accounting-bookkeeping-services-in-oman' },
          { title: 'Corporate Banking Service', href: '/om/corporate-banking-service-in-oman' },
          { title: 'Corporate Secretarial Service', href: '/om/corporate-secretarial-service-in-oman' },
          { title: 'Intellectual Property Service', href: '/om/intellectual-property-services-in-oman' },
          { title: 'Business Centre in Oman', href: '/om/business-centre-in-oman' },
          { title: 'Trading Company in Oman', href: '/om/trading-company-in-oman' },
          { title: 'Tax Service', href: '/om/tax-services-in-oman' },
          { title: 'Visa Services', href: '/om/visa-services-in-oman' },
          { title: 'Sole Proprietorship in Oman', href: '/om/sole-proprietorship-in-oman' },
          { title: 'Joint Stock Company in Oman', href: '/om/joint-stock-company-in-oman' },
          { title: 'Branch Office in Oman', href: '/om/branch-office-in-oman' },
          { title: 'Industrial Estates in Oman', href: '/om/industrial-estates-in-oman' },
        ],
      },
      {
        heading: 'Free Zone Company in Oman',
        links: [
          { title: 'Al-Mazunah Free Zone', href: '/om/al-mazunah-free-zone' },
          { title: 'Duqm Special Economic Zone', href: '/om/duqm-special-economic-zone' },
          { title: 'Salalah Free Zone', href: '/om/salalah-free-zone' },
          { title: 'Sohar Free Zone', href: '/om/sohar-free-zone' },
          { title: 'Knowledge Oasis Muscat (KOM)', href: '/om/knowledge-oasis-muscat' },
        ],
      },
    ],
  },
  {
    heading: 'Business Setup in Saudi Arabia',
    items: [],
    children: [
      {
        heading: 'Saudi Arabia Services',
        links: [
          { title: 'Business Licenses', href: '/sa/business-licenses-in-saudi-arabia' },
          { title: 'Industrial License', href: '/sa/industrial-license-in-saudi-arabia' },
          { title: 'Limited Liability Company', href: '/sa/limited-liability-company-in-saudi-arabia' },
          { title: 'Types of Companies In Saudi Arabia', href: '/types-of-companies-in-saudi-arabia' },
          { title: 'Entrepreneur License in Saudi Arabia', href: '/entrepreneur-license-in-saudi-arabia' },
          { title: 'Saudization and Nitaqat Program', href: '/saudization-and-nitaqat-program' },
          { title: 'Withholding Tax in Saudi Arabia', href: '/withholding-tax-in-saudi-arabia' },
          { title: 'Foreign company in Saudi Arabia', href: '/sa/foreign-company-in-saudi-arabia' },
          { title: 'PRO Services in Saudi Arabia', href: '/sa/pro-services-in-saudi-arabia' },
          { title: 'Iqama in Saudi Arabia', href: '/sa/iqama-in-saudi-arabia' },
        ],
      },
      {
        heading: 'Saudi Arabia Economic Zones',
        links: [
          { title: 'Special Economic Zones', href: '/sa/special-economic-zones-in-saudi-arabia' },
        ],
      },
    ],
  },
];

const servicesDropdown: ServiceGroup[] = [
  {
    title: 'Business License',
    items: [
      { label: 'General Trading License', href: '/general-trading-license-in-dubai-uae' },
      { label: 'E-Commerce License', href: '/ecommerce-license-in-dubai' },
    ],
  },
  {
    title: 'Accounting & Tax',
    items: [
      { label: 'Accounting & Bookkeeping', href: '/accounting-bookkeeping-services-in-dubai-uae' },
      { label: 'Corporate Tax in UAE', href: '/corporate-tax-in-uae' },
      { label: 'VAT Services', href: '/vat-in-uae' },
      { label: 'Tax Residency Certificate', href: '/tax-residency-certificate-uae' },
      { label: 'Audit Services', href: '/audit-services-in-uae' },
      { label: 'ICV Certificate', href: '/in-country-value-certificate-icv' },
      { label: 'Company Liquidation', href: '/company-liquidation-services-in-dubai' },
      { label: 'E-Invoicing', href: '/e-invoicing-in-uae' },
      { label: 'Excise Tax', href: '/excise-tax-in-uae' },
      { label: 'Transfer Pricing', href: '/transfer-pricing-in-uae' },
    ],
  },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);
  const [activeBusinessHeading, setActiveBusinessHeading] = useState<string>(businessSetupMenu[0]?.heading || '');
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dropdownButtonStyles = `text-sm font-medium transition-colors flex items-center gap-1 ${isScrolled ? 'text-gray-700' : 'text-white/90'}`;

  const handleMouseEnter = (dropdown: DropdownType) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const closeDropdown = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className={`p-2 rounded-lg ${isScrolled ? 'bg-corporate-900 text-white' : 'bg-white text-corporate-900 shadow-lg'}`}>
              <Globe className="w-6 h-6" />
            </div>
            <span className={`text-2xl font-serif font-bold tracking-tight ${isScrolled ? 'text-corporate-900' : 'text-white'}`}>
              Khaas<span className="text-gold-500"> Guide</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="relative" onMouseEnter={() => handleMouseEnter('businessSetup')} onMouseLeave={handleMouseLeave}>
              <button className={dropdownButtonStyles}>
                Business Setup
                <ChevronDown className="w-4 h-4" />
              </button>
              {/* Hover bridge to prevent dropdown from closing */}
              {activeDropdown === 'businessSetup' && (
                <div className="absolute left-0 right-0 h-6 top-full" />
              )}
              {activeDropdown === 'businessSetup' && (
                <div
                  className="fixed left-1/2 -translate-x-1/2 top-16 w-[95vw] max-w-5xl rounded-2xl bg-white border border-gray-100 shadow-2xl text-left z-50"
                  onMouseEnter={() => handleMouseEnter('businessSetup')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid grid-cols-1 md:grid-cols-[200px,1fr] max-h-[70vh]">
                    {/* Left sidebar with country headings */}
                    <div className="bg-gradient-to-b from-corporate-900 to-corporate-800 rounded-l-2xl p-4 overflow-y-auto">
                      <h3 className="text-gold-400 text-xs font-bold uppercase tracking-wider mb-3">Select Region</h3>
                      <div className="space-y-1">
                        {businessSetupMenu.map((section) => (
                          <button
                            key={section.heading}
                            onMouseEnter={() => setActiveBusinessHeading(section.heading)}
                            onClick={() => setActiveBusinessHeading(section.heading)}
                            className={`w-full text-left text-sm font-medium rounded-lg px-4 py-3 transition-all duration-200 ${
                              activeBusinessHeading === section.heading
                                ? 'bg-white/15 text-white shadow-lg'
                                : 'text-white/70 hover:bg-white/10 hover:text-white'
                            }`}
                          >
                            {section.heading}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Right content area */}
                    <div className="p-5 overflow-y-auto max-h-[70vh] bg-gray-50/50">
                      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                        {businessSetupMenu
                          .filter((section) => section.heading === activeBusinessHeading)
                          .map((section) => {
                            // If this section has children, render the nested structure
                            if (section.children && section.children.length > 0) {
                              return section.children.map((child) => (
                                <div key={child.heading} className="rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                                  <div className="bg-gradient-to-r from-corporate-900 to-corporate-800 px-4 py-2.5">
                                    <p className="text-xs font-semibold text-white tracking-wide">{child.heading}</p>
                                  </div>
                                  <ul className="p-3 space-y-0.5">
                                    {child.links.map((link) => (
                                      <li key={link.title}>
                                        <Link
                                          to={link.href}
                                          className="text-sm text-gray-600 hover:text-corporate-900 hover:bg-corporate-50 transition-all duration-150 block px-3 py-2 rounded-lg group flex items-center gap-2"
                                          onClick={closeDropdown}
                                        >
                                          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"></span>
                                          <span className="group-hover:translate-x-0.5 transition-transform">{link.title}</span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ));
                            }
                            // Otherwise, render the flat items for other countries
                            return section.items.map((item) => (
                              <div key={item.title} className="rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                                <Link
                                  to={item.href}
                                  className="block p-4 group"
                                  onClick={closeDropdown}
                                >
                                  <span className="text-sm font-semibold text-corporate-900 group-hover:text-gold-600 transition-colors">{item.title}</span>
                                  <p className="text-xs text-gray-500 leading-relaxed mt-1">{item.description}</p>
                                </Link>
                              </div>
                            ));
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="relative" onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={handleMouseLeave}>
              <button className={dropdownButtonStyles}>
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              {/* Hover bridge to prevent dropdown from closing */}
              {activeDropdown === 'services' && (
                <div className="absolute left-0 right-0 h-6 top-full" />
              )}
              {activeDropdown === 'services' && (
                <div
                  className="fixed left-1/2 -translate-x-1/2 top-16 w-[90vw] max-w-lg rounded-2xl bg-white border border-gray-200 shadow-2xl p-4 z-50"
                  onMouseEnter={() => handleMouseEnter('services')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-h-[60vh] overflow-y-auto p-1">
                    {servicesDropdown.map((group) => (
                      <div key={group.title} className="rounded-xl bg-white border border-gray-100 shadow-sm overflow-hidden">
                        <div className="bg-gradient-to-r from-corporate-900 to-corporate-800 px-4 py-2.5">
                          <p className="text-xs font-semibold text-white tracking-wide uppercase">{group.title}</p>
                        </div>
                        <ul className="p-2">
                          {group.items.map((item) => (
                            <li key={item.label}>
                              <Link
                                to={item.href}
                                className="text-sm text-gray-600 hover:text-corporate-900 hover:bg-corporate-50 transition-all duration-150 block px-3 py-2 rounded-lg group flex items-center gap-2"
                                onClick={closeDropdown}
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"></span>
                                <span className="group-hover:translate-x-0.5 transition-transform">{item.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`lg:hidden p-2 rounded-md ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              closeDropdown();
            }}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full top-full left-0 animate-fade-in max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-6 space-y-4">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-widest text-gray-500">Business Setup</p>
              <div className="space-y-3">
                {businessSetupMenu.map((section) => (
                  <details key={section.heading} className="border border-gray-100 rounded-xl px-3 py-2 bg-gray-50/60">
                    <summary className="text-sm font-semibold text-gray-800 cursor-pointer select-none">{section.heading}</summary>
                    <div className="space-y-3 pl-2 pt-3">
                      {section.children && section.children.map((child) => (
                        <div key={child.heading}>
                          <p className="text-xs font-bold text-corporate-800 mb-2">{child.heading}</p>
                          <div className="space-y-1 pl-2">
                            {child.links.map((link) => (
                              <Link
                                key={link.title}
                                to={link.href}
                                className="text-sm text-gray-600 hover:text-corporate-900 block py-1"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {link.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </div>
            <div className="space-y-3 pt-4 border-t border-gray-100">
              <p className="text-xs uppercase tracking-widest text-gray-500">Services</p>
              <div className="space-y-4 pl-2">
                {servicesDropdown.map((group) => (
                  <div key={group.title}>
                    <p className="text-sm font-semibold text-gray-700">{group.title}</p>
                    <div className="space-y-1 pl-2">
                      {group.items.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-sm text-gray-600 hover:text-corporate-900 block py-1"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full justify-center">Free Consultation</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-corporate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-white text-corporate-900 p-2 rounded-lg">
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-2xl font-serif font-bold">Khaas<span className="text-gold-500"> Guide</span></span>
            </Link>
            <p className="text-corporate-100 leading-relaxed text-sm">
              Helping entrepreneurs and global companies establish their presence in the UAE since 2010. Your trusted partner for seamless business setup.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="text-corporate-100 hover:text-gold-500 transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif">Quick Links</h4>
            <ul className="space-y-4 text-sm text-corporate-100">
              {['Business Setup in Dubai', 'Freezone License', 'Mainland License', 'Offshore Company', 'Visa Services', 'Accounting & VAT'].map(item => (
                <li key={item}><a href="#" className="hover:text-white hover:underline transition-all">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-corporate-100">
              <li className="flex gap-3">
                <span className="font-semibold text-white">HQ:</span> 
                Level 42, Emirates Towers, Sheikh Zayed Road, Dubai, UAE
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-white">Phone:</span> 
                +971 4 123 4567
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-white">Email:</span> 
                setup@khaasguide.com
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif">Newsletter</h4>
            <p className="text-xs text-corporate-100 mb-4">Subscribe for latest business updates and regulatory changes in UAE.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-corporate-800 text-white px-4 py-2 rounded-lg text-sm flex-1 focus:outline-none focus:ring-1 focus:ring-gold-500 placeholder-corporate-400"
              />
              <button className="bg-gold-500 p-2 rounded-lg hover:bg-gold-600 transition-colors text-white">
                <ChevronDown className="-rotate-90 w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-corporate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-corporate-300">
          <p>© 2024 Khaas Guide Consultancy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
