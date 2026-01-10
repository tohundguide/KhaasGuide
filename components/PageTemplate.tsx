import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from './UI';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface ContentSection {
  title: string;
  content: string;
  list?: string[];
}

interface PageTemplateProps {
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  heroImage?: string;
  sections: ContentSection[];
  sidebarTitle?: string;
  sidebarLinks?: { label: string; href: string }[];
  ctaTitle?: string;
  ctaDescription?: string;
}

export const PageTemplate: React.FC<PageTemplateProps> = ({
  title,
  description,
  breadcrumbs,
  heroImage,
  sections,
  sidebarTitle = 'Related Services',
  sidebarLinks = [],
  ctaTitle = 'Ready to Get Started?',
  ctaDescription = 'Our expert consultants are here to help you set up your business quickly and efficiently.',
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-corporate-900 via-corporate-800 to-corporate-900 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32 relative z-10">
          {/* Breadcrumbs */}
          <nav className="mb-6">
            <ol className="flex items-center flex-wrap gap-2 text-sm text-white/70">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center">
                  {index > 0 && <ChevronRight className="w-4 h-4 mx-2" />}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-gold-400 font-medium">{crumb.label}</span>
                  ) : (
                    <a href={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,320px] gap-12">
          {/* Main Content Area */}
          <div className="space-y-12">
            {heroImage && (
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src={heroImage} alt={title} className="w-full h-auto" />
              </div>
            )}
            
            {sections.map((section, index) => (
              <section key={index} className="prose prose-lg max-w-none">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-corporate-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {section.content}
                </p>
                {section.list && section.list.length > 0 && (
                  <ul className="space-y-3 mt-6">
                    {section.list.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* CTA Card */}
            <div className="bg-gradient-to-br from-corporate-900 to-corporate-800 rounded-2xl p-6 text-white shadow-xl sticky top-24">
              <h3 className="text-xl font-bold mb-3">{ctaTitle}</h3>
              <p className="text-white/80 text-sm mb-6">{ctaDescription}</p>
              <Button variant="secondary" className="w-full">
                Get Free Consultation
              </Button>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-xs text-white/60 mb-2">Or call us directly</p>
                <a href="tel:+971508843903" className="text-gold-400 font-semibold hover:text-gold-300 transition-colors">
                  +971 508843903
                </a>
              </div>
            </div>

            {/* Related Links */}
            {sidebarLinks.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-corporate-900 mb-4">{sidebarTitle}</h3>
                <ul className="space-y-3">
                  {sidebarLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="flex items-center gap-2 text-gray-600 hover:text-gold-600 transition-colors group"
                      >
                        <ChevronRight className="w-4 h-4 text-gold-500 group-hover:translate-x-1 transition-transform" />
                        <span className="text-sm font-medium">{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-corporate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-corporate-900 mb-4">
            Start Your Business Journey Today
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of entrepreneurs who have successfully established their businesses with our expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Schedule a Consultation
            </Button>
            <Button variant="outline" size="lg">
              Download Free Guide
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTemplate;
