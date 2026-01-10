import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle, Card, Button } from '../components/UI';
import { ArrowRight, CheckCircle, MapPin, Briefcase, FileText, Users, Building, ShieldCheck, Globe } from 'lucide-react';
import { Calculator } from './Calculator';

export const Home: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-corporate-900 overflow-hidden">
        {/* Background image on the right */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-corporate-900"></div>
          <img 
            src="/pexels-beingsanshots-14930579.jpg" 
            alt="Dubai Skyline" 
            className="absolute right-0 top-0 h-full w-full md:w-3/4 lg:w-2/3 object-cover object-center"
          />
          {/* Gradient overlay for fading effect from left */}
          <div className="absolute inset-0 bg-gradient-to-r from-corporate-900 via-corporate-900 to-transparent md:via-corporate-900/95 md:to-corporate-900/20"></div>
          {/* Additional vertical gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-corporate-900/50 via-transparent to-corporate-900/70"></div>
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
            <div className="max-w-2xl space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1]">
                Turn Your Global Business Vision into a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">UAE Reality</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-200 max-w-xl font-light leading-relaxed">
                End-to-End Company Setup in Dubai &amp; Middle East — Without the Hassle.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link to="/contact">
                  <Button variant="secondary" size="lg" className="shadow-gold-500/25 w-full">
                    Speak to an Expert
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-corporate-900 w-full">
                    Explore Services
                  </Button>
                </Link>
              </div>

              <div className="pt-6 flex items-center gap-6 sm:gap-8 text-white/60 border-t border-white/10">
                <div>
                  <span className="block text-2xl sm:text-3xl font-bold text-white">15+</span>
                  <span className="text-xs sm:text-sm">Years Experience</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-bold text-white">20k+</span>
                  <span className="text-xs sm:text-sm">Companies Formed</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-bold text-white">4.9/5</span>
                  <span className="text-xs sm:text-sm">Client Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Interested in Company Formation in the UAE?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Business registration in Dubai and across the UAE involves necessary regulatory costs.
              We offer low-cost, hassle-free business setup services in Dubai.
              <span className="block mt-2 font-semibold text-corporate-700">Check out our latest packages today.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Dubai Mainland */}
            <div className="group h-80 [perspective:1000px]">
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <div className="h-full w-full rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=500&fit=crop" 
                      alt="Dubai Mainland" 
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-corporate-900/90 via-corporate-900/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-serif font-bold text-white">Dubai Mainland</h3>
                      <p className="text-gold-400 text-sm mt-1">Hover to see package</p>
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="h-full w-full rounded-2xl bg-corporate-900 p-6 shadow-lg flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-white mb-2">Dubai Mainland</h3>
                      <p className="text-gold-400 text-sm mb-4">Package includes</p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-white text-sm">
                          <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                          Business License
                        </li>
                        <li className="flex items-center gap-2 text-white text-sm">
                          <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                          Investor Visa
                        </li>
                        <li className="flex items-center gap-2 text-white text-sm">
                          <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                          Memorandum of Association
                        </li>
                        <li className="flex items-center gap-2 text-white text-sm">
                          <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                          Name & Initial Approval
                        </li>
                        <li className="flex items-center gap-2 text-white text-sm">
                          <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                          Local Service Agent
                        </li>
                      </ul>
                    </div>
                    <Link to="/contact">
                      <Button variant="secondary" size="sm" className="w-full mt-4">
                        Get Offer
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - UAE Free Zone */}
            <div className="group h-80 [perspective:1000px]">
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <div className="h-full w-full rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1518684079-3c830dcef090?w=400&h=500&fit=crop" 
                      alt="UAE Free Zone" 
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-corporate-900/90 via-corporate-900/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-serif font-bold text-white">UAE Free Zone</h3>
                      <p className="text-gold-400 text-sm mt-1">Hover to see package</p>
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="h-full w-full rounded-2xl bg-corporate-900 p-6 shadow-lg flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-white mb-2">UAE Free Zone</h3>
                      <p className="text-gold-400 text-sm mb-4">Package includes</p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-white text-sm">
                          <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                          Incorporation Certificate
                        </li>
                        <li className="flex items-center gap-2 text-white text-sm">
                          <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                          Company Stamp
                        </li>
                        <li className="flex items-center gap-2 text-white text-sm">
                          <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                          Bank Introduction
                        </li>
                        <li className="flex items-center gap-2 text-white text-sm">
                          <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                          Lease Agreement
                        </li>
                        <li className="flex items-center gap-2 text-white text-sm">
                          <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                          Trade Name Reservation
                        </li>
                      </ul>
                    </div>
                    <Link to="/contact">
                      <Button variant="secondary" size="sm" className="w-full mt-4">
                        Get Offer
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Abu Dhabi Mainland */}
            <div className="group h-80 [perspective:1000px]">
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <div className="h-full w-full rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=400&h=500&fit=crop" 
                      alt="Abu Dhabi Mainland" 
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-corporate-900/90 via-corporate-900/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-serif font-bold text-white">Abu Dhabi Mainland</h3>
                      <p className="text-gold-400 text-sm mt-1">Hover to see package</p>
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="h-full w-full rounded-2xl bg-corporate-900 p-6 shadow-lg flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-white mb-2">Abu Dhabi Mainland</h3>
                      <p className="text-gold-400 text-sm mb-4">Package includes</p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-white text-sm">
                          <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                          Virtual Office
                        </li>
                        <li className="flex items-center gap-2 text-white text-sm">
                          <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                          License Fee
                        </li>
                        <li className="flex items-center gap-2 text-white text-sm">
                          <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                          Professional Fee
                        </li>
                        <li className="flex items-center gap-2 text-white text-sm">
                          <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                          Memorandum of Association
                        </li>
                      </ul>
                    </div>
                    <Link to="/contact">
                      <Button variant="secondary" size="sm" className="w-full mt-4">
                        Get Offer
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Save More */}
            <div className="h-80">
              <div className="h-full w-full rounded-2xl bg-gradient-to-br from-gold-500 to-gold-600 p-6 shadow-lg flex flex-col justify-center items-center text-center">
                <h3 className="text-3xl font-serif font-bold text-corporate-900 mb-2">Save More</h3>
                <p className="text-xl font-semibold text-corporate-800 mb-4">with Good Plans!</p>
                <p className="text-corporate-700 text-sm mb-6">
                  Get Our Exclusive Packages for Company Setup in Dubai.
                </p>
                <Link to="/contact">
                  <Button variant="primary" size="lg" className="bg-corporate-900 hover:bg-corporate-800 text-white">
                    Explore Now <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Comprehensive Business Solutions" 
            subtitle="Everything you need to succeed"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Building, title: 'Mainland Setup', desc: 'Trade directly with local markets and government entities. 100% foreign ownership available.' },
              { icon: MapPin, title: 'Freezone Setup', desc: 'Cost-effective setup with 100% tax exemption, full repatriation of profits, and modern amenities.' },
              { icon: Globe, title: 'Offshore Company', desc: 'Protect your assets and manage international business with zero taxation.' },
              { icon: FileText, title: 'PRO Services', desc: 'Hassle-free document clearing, visa processing, and government approvals.' },
              { icon: Briefcase, title: 'Bank Account', desc: 'Assistance with corporate bank account opening in top UAE banks.' },
              { icon: ShieldCheck, title: 'Accounting & VAT', desc: 'Expert financial services to ensure compliance with UAE tax laws.' },
            ].map((service, idx) => (
              <Card key={idx} className="p-8 group">
                <div className="w-14 h-14 bg-corporate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-corporate-900 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-corporate-900 group-hover:text-gold-400 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {service.desc}
                </p>
                <a href="#" className="inline-flex items-center text-corporate-600 font-semibold hover:text-corporate-800 text-sm">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Plan Section (Addressing the specific prompt) */}
      <section id="workflow" className="py-24 bg-corporate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Your Workflow Plan" 
            subtitle="Steps to setup your business"
          />
          
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { step: '01', title: 'Consultation', desc: 'Free assessment of your business activities to choose the right jurisdiction.' },
                { step: '02', title: 'Documentation', desc: 'We prepare and submit all legal documents to relevant authorities.' },
                { step: '03', title: 'License', desc: 'Receive your trade license and office lease agreement (if applicable).' },
                { step: '04', title: 'Visa & Bank', desc: 'Processing of residency visas and corporate bank account opening.' },
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-gold-500 relative">
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 w-12 h-12 bg-corporate-900 text-white rounded-full flex items-center justify-center font-bold text-lg border-4 border-white shadow-sm">
                    {item.step}
                  </span>
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-bold mb-2 font-serif">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Locations Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Looking to start a business in the UAE or GCC?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Speak with our company formation specialists and get tailored quotes for business setup in Dubai and other strategic locations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'UAE', 
                subtitle: 'Business Setup in UAE Locations',
                icon: Globe,
                color: 'from-emerald-500 to-emerald-600'
              },
              { 
                title: 'Oman', 
                subtitle: 'Business Setup in Oman Locations',
                icon: MapPin,
                color: 'from-blue-500 to-blue-600'
              },
              { 
                title: 'Dubai', 
                subtitle: 'Business Setup in Dubai Locations',
                icon: Building,
                color: 'from-corporate-700 to-corporate-900'
              },
              { 
                title: 'Abu Dhabi', 
                subtitle: 'Business Setup in Abu Dhabi Locations',
                icon: Briefcase,
                color: 'from-purple-500 to-purple-600'
              },
              { 
                title: 'Sharjah', 
                subtitle: 'Business setup in Sharjah Locations',
                icon: FileText,
                color: 'from-orange-500 to-orange-600'
              },
              { 
                title: 'UAQ', 
                subtitle: 'Business setup in UAQ Locations',
                icon: ShieldCheck,
                color: 'from-teal-500 to-teal-600'
              },
              { 
                title: 'RAK', 
                subtitle: 'Business setup in RAK Locations',
                icon: Users,
                color: 'from-rose-500 to-rose-600'
              },
            ].map((location, index) => (
              <Link 
                key={index} 
                to="/contact"
                className="group"
              >
                <Card className="p-6 h-full text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${location.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <location.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-xs text-gray-500 mb-1">{location.subtitle}</p>
                  <h3 className="text-xl font-bold text-gray-900 font-serif group-hover:text-corporate-700 transition-colors">
                    {location.title}
                  </h3>
                  <div className="mt-3 flex items-center justify-center text-corporate-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Calculator Section */}
      <section id="calculator" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle 
                title="Estimate Your Costs" 
                subtitle="Transparent Pricing"
                align="left"
              />
              <p className="text-gray-600 mb-8 leading-relaxed">
                Business setup costs in the UAE can vary significantly based on jurisdiction, visa quotas, and office requirements. Use our interactive tool to get a preliminary estimate.
              </p>
              <ul className="space-y-4 mb-8">
                {['No Hidden Fees', 'Dedicated Account Manager', 'Fastest Turnaround Time'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    {feat}
                  </li>
                ))}
              </ul>
              <Button size="lg">Get Detailed Quote</Button>
            </div>
            
            <div className="bg-gray-50 p-1 rounded-2xl shadow-xl border border-gray-100">
               <Calculator />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-corporate-900 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-corporate-200 mb-8 max-w-2xl mx-auto">
            Book a free 30-minute consultation with our experts. We'll answer all your questions about business setup in the UAE.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/contact">
               <Button variant="secondary" size="lg">Book Free Consultation</Button>
             </Link>
             <Link to="/contact">
               <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-corporate-900">Contact Sales</Button>
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};