import React, { useState } from 'react';
import { SectionTitle, Card, Button } from '../components/UI';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Globe, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+971 4 123 4567', '+971 50 123 4567'],
      action: 'tel:+97141234567',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@khaasguide.com', 'support@khaasguide.com'],
      action: 'mailto:info@khaasguide.com',
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['Business Bay, Dubai', 'United Arab Emirates'],
      action: '#',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Sun - Thu: 9:00 AM - 6:00 PM', 'Fri - Sat: Closed'],
      action: '#',
    },
  ];

  const services = [
    'Mainland Company Setup',
    'Free Zone Company Setup',
    'Offshore Company Formation',
    'PRO Services',
    'Visa Services',
    'Bank Account Opening',
    'Accounting & Bookkeeping',
    'VAT & Tax Services',
    'Other',
  ];

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 pt-32 bg-corporate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-corporate-900 via-corporate-800 to-corporate-900"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Schedule a free consultation with our business setup experts. We're here to help you navigate the UAE business landscape.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-corporate-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-corporate-900 transition-colors duration-300">
                  <info.icon className="w-7 h-7 text-corporate-900 group-hover:text-gold-400 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-serif">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 text-sm">{detail}</p>
                ))}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <SectionTitle 
                title="Book Your Free Consultation" 
                subtitle="Let's discuss your business needs"
                align="left"
              />
              
              {isSubmitted ? (
                <Card className="p-8 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    Your consultation request has been received. One of our experts will contact you within 24 hours.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)}>Submit Another Request</Button>
                </Card>
              ) : (
                <Card className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-corporate-500 focus:border-transparent transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-corporate-500 focus:border-transparent transition-all"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-corporate-500 focus:border-transparent transition-all"
                          placeholder="+971 50 123 4567"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-corporate-500 focus:border-transparent transition-all"
                          placeholder="Your Company Ltd."
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-corporate-500 focus:border-transparent transition-all bg-white"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-corporate-500 focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your business requirements..."
                      />
                    </div>

                    <Button type="submit" variant="primary" size="lg" className="w-full">
                      <Send className="w-5 h-5 mr-2" />
                      Request Free Consultation
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to our privacy policy. We'll never share your information with third parties.
                    </p>
                  </form>
                </Card>
              )}
            </div>

            {/* Why Choose Us */}
            <div>
              <SectionTitle 
                title="Why Choose Us?" 
                subtitle="Your trusted business partner"
                align="left"
              />
              
              <div className="space-y-6">
                {[
                  {
                    icon: Globe,
                    title: '15+ Years Experience',
                    description: 'Over a decade of expertise in UAE business setup, helping 20,000+ companies establish their presence.',
                  },
                  {
                    icon: CheckCircle,
                    title: 'End-to-End Support',
                    description: 'From initial consultation to license approval, visa processing, and bank account opening—we handle it all.',
                  },
                  {
                    icon: Clock,
                    title: 'Fast Turnaround',
                    description: 'Get your business license in as little as 48 hours with our expedited processing services.',
                  },
                  {
                    icon: MessageSquare,
                    title: 'Dedicated Account Manager',
                    description: 'A single point of contact who understands your needs and guides you through every step.',
                  },
                ].map((feature, index) => (
                  <Card key={index} className="p-6 flex gap-4 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-corporate-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-corporate-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1 font-serif">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="mt-8 p-6 bg-corporate-900 rounded-2xl text-center">
                <p className="text-gold-400 font-semibold mb-4">Trusted by 20,000+ Businesses</p>
                <div className="flex justify-center items-center gap-8 text-white/60">
                  <div>
                    <span className="block text-2xl font-bold text-white">4.9/5</span>
                    <span className="text-xs">Google Rating</span>
                  </div>
                  <div className="w-px h-10 bg-white/20"></div>
                  <div>
                    <span className="block text-2xl font-bold text-white">98%</span>
                    <span className="text-xs">Success Rate</span>
                  </div>
                  <div className="w-px h-10 bg-white/20"></div>
                  <div>
                    <span className="block text-2xl font-bold text-white">24h</span>
                    <span className="text-xs">Response Time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Quick answers to common queries"
          />
          
          <div className="space-y-4">
            {[
              {
                question: 'How long does it take to set up a company in Dubai?',
                answer: 'Depending on the jurisdiction and license type, company setup can take anywhere from 2-5 business days for free zones to 2-3 weeks for mainland companies.',
              },
              {
                question: 'What documents do I need to start a business in UAE?',
                answer: 'Basic requirements include passport copies, proof of address, business plan, and bank reference letters. Specific requirements may vary based on the business activity and jurisdiction.',
              },
              {
                question: 'Can foreigners own 100% of a company in UAE?',
                answer: 'Yes, 100% foreign ownership is available in all UAE free zones and in most mainland business activities since the recent regulatory updates.',
              },
              {
                question: 'What is included in your consultation?',
                answer: 'Our free 30-minute consultation covers business activity selection, jurisdiction recommendation, cost estimation, timeline, and answers to all your specific questions.',
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-serif">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
