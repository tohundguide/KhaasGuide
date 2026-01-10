import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle, Card } from '../components/UI';
import { ArrowRight, FileText, Calculator, Building, CreditCard, Shield, BookOpen, Receipt, FileCheck, DollarSign, Scale } from 'lucide-react';

// Services data matching the dropdown in Layout.tsx
export const servicesData = [
  {
    title: 'Business License',
    icon: FileText,
    items: [
      { label: 'General Trading License', href: '/general-trading-license-in-dubai-uae', description: 'Obtain a general trading license to import, export, and trade in a wide range of products across the UAE.' },
      { label: 'E-Commerce License', href: '/ecommerce-license-in-dubai', description: 'Start your online business with a dedicated e-commerce license for digital trade and retail.' },
    ],
  },
  {
    title: 'Accounting & Tax',
    icon: Calculator,
    items: [
      { label: 'Accounting & Bookkeeping', href: '/accounting-bookkeeping-services-in-dubai-uae', description: 'Professional accounting and bookkeeping services to keep your financials in order.' },
      { label: 'Corporate Tax in UAE', href: '/corporate-tax-in-uae', description: 'Expert guidance on UAE corporate tax compliance and optimization strategies.' },
      { label: 'VAT Services', href: '/vat-in-uae', description: 'Complete VAT registration, filing, and advisory services for businesses in UAE.' },
      { label: 'Tax Residency Certificate', href: '/tax-residency-certificate-uae', description: 'Obtain tax residency certificates for individuals and companies to benefit from DTAAs.' },
      { label: 'Audit Services', href: '/audit-services-in-uae', description: 'Statutory audits, internal audits, and compliance audits by certified auditors.' },
      { label: 'ICV Certificate', href: '/in-country-value-certificate-icv', description: 'In-Country Value certification to participate in government tenders and contracts.' },
      { label: 'Company Liquidation', href: '/company-liquidation-services-in-dubai', description: 'Seamless company liquidation and deregistration services in UAE.' },
      { label: 'E-Invoicing', href: '/e-invoicing-in-uae', description: 'Implement compliant e-invoicing solutions for your business operations.' },
      { label: 'Excise Tax', href: '/excise-tax-in-uae', description: 'Excise tax registration and compliance services for applicable goods.' },
      { label: 'Transfer Pricing', href: '/transfer-pricing-in-uae', description: 'Transfer pricing documentation and advisory for multinational enterprises.' },
    ],
  },
];

// Map icons to service titles
const iconMap: { [key: string]: React.FC<{ className?: string }> } = {
  'Business License': FileText,
  'Accounting & Tax': Calculator,
};

export const Services: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 pt-32 bg-corporate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-corporate-900 via-corporate-800 to-corporate-900"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive business solutions to help you establish and grow your company in the UAE and Middle East.
          </p>
        </div>
      </section>

      {/* Services Sections */}
      {servicesData.map((group, groupIndex) => {
        const IconComponent = iconMap[group.title] || FileText;
        return (
          <section 
            key={groupIndex} 
            className={`py-20 ${groupIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-14 h-14 bg-corporate-900 rounded-2xl flex items-center justify-center">
                  <IconComponent className="w-7 h-7 text-gold-400" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-gray-900">{group.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((service, serviceIndex) => (
                  <Card key={serviceIndex} className="p-6 group hover:shadow-xl transition-all duration-300">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 font-serif group-hover:text-corporate-700 transition-colors">
                      {service.label}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <Link 
                      to={service.href} 
                      className="inline-flex items-center text-corporate-600 font-semibold hover:text-corporate-800 text-sm group-hover:gap-2 transition-all"
                    >
                      Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-20 bg-corporate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our experts today for a free consultation and discover how we can help your business thrive in the UAE.
          </p>
          <Link 
            to="/#calculator" 
            className="inline-flex items-center px-8 py-4 bg-gold-500 text-corporate-900 font-semibold rounded-lg hover:bg-gold-400 transition-colors"
          >
            Get a Free Quote <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};
