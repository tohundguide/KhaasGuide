import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { Button } from '../components/UI';

// Page content data based on www.commitbiz.com
const pageData: Record<string, {
  title: string;
  description: string;
  breadcrumbs: { label: string; href: string }[];
  sections: { title: string; content: string; list?: string[] }[];
  relatedLinks: { label: string; href: string }[];
}> = {
  'dubai-freezone-company-formation': {
    title: 'Dubai Freezone Company Formation',
    description: 'Discover everything about Dubai freezone company formation by learning about benefits, setup process, licenses, and top free zones located in the Emirate.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Business Setup in UAE', href: '/business-setup-in-uae' },
      { label: 'Dubai Free Zones', href: '/dubai-freezone-company-formation' },
    ],
    sections: [
      {
        title: 'What is a Free Zone in Dubai?',
        content: 'A free zone is a designated economic area in Dubai that offers benefits such as complete ownership and tax exemptions for businesses. These zones are designed to promote international investment in the UAE. Unlike mainland companies, which may require a local sponsor, businesses established in the free zones can be entirely foreign-owned.',
      },
      {
        title: 'Popular Free Zones in Dubai',
        content: 'Dubai is home to more than 30 free zones, each offering unique benefits. Some of the most popular free zones include:',
        list: [
          'DMCC (Dubai Multi Commodities Centre) - A global hub for trading and commodities',
          'JAFZA (Jebel Ali Free Zone) - Ideal for logistics and international trade',
          'Dubai Internet City - A hub for IT and technology companies',
          'Dubai Media City - Tailored for media, marketing, and creative industries',
          'DAFZA (Dubai Airport Free Zone Authority) - Excellent connectivity for global trade',
        ],
      },
      {
        title: 'Benefits of Dubai Free Zone Company Formation',
        content: 'For entrepreneurs looking for cost-effective opportunities in UAE\'s thriving economy, Dubai free zone business setup is ideal.',
        list: [
          'Full foreign ownership - Complete control of the business',
          'Tax Incentives - Corporate and personal tax exemptions',
          'Repatriation of profits - Transfer capital and profits abroad without restrictions',
          'Simplified registration - Straightforward and streamlined process',
          'Strategic location - Access to both local UAE and international markets',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Dubai Mainland Company', href: '/dubai-mainland-company-formation' },
      { label: 'Dubai Offshore Company', href: '/offshore-company-formation-in-uae' },
      { label: 'Abu Dhabi Free Zones', href: '/abu-dhabi-free-zone' },
    ],
  },
  'dubai-mainland-company-formation': {
    title: 'Dubai Mainland Company Formation',
    description: 'Set up your mainland company in Dubai with full market access. Learn about DED licenses, requirements, and the complete setup process.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Business Setup in UAE', href: '/business-setup-in-uae' },
      { label: 'Dubai Mainland', href: '/dubai-mainland-company-formation' },
    ],
    sections: [
      {
        title: 'What is a Mainland Company in Dubai?',
        content: 'A mainland company in Dubai, also known as an onshore company, is a business entity registered with the Department of Economic Development (DED). Unlike free zone companies, mainland companies can trade directly within the UAE market without restrictions.',
      },
      {
        title: 'Benefits of Dubai Mainland Company Formation',
        content: 'Mainland companies offer several advantages for businesses looking to operate in the UAE:',
        list: [
          'Full access to UAE market - Trade anywhere in the country',
          'No restrictions on business activities - Wide range of permitted activities',
          'Government contracts eligibility - Can bid on public sector projects',
          'Multiple visa options - Flexible visa allocation based on office space',
          '100% foreign ownership - Now available for most business activities',
        ],
      },
      {
        title: 'Types of Mainland Licenses',
        content: 'The DED offers various types of licenses depending on your business activity:',
        list: [
          'Commercial License - For trading activities',
          'Professional License - For service-based businesses',
          'Industrial License - For manufacturing activities',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Dubai Free Zones', href: '/dubai-freezone-company-formation' },
      { label: 'LLC Company Formation', href: '/limited-liability-company-formation-dubai' },
      { label: 'PRO Services Dubai', href: '/pro-services-dubai-uae' },
    ],
  },
  'offshore-company-formation-in-uae': {
    title: 'Offshore Company Formation in UAE',
    description: 'Establish your offshore company in UAE for international trading, asset protection, and holding structures. Learn about JAFZA and RAK offshore options.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Business Setup in UAE', href: '/business-setup-in-uae' },
      { label: 'Offshore Company', href: '/offshore-company-formation-in-uae' },
    ],
    sections: [
      {
        title: 'What is an Offshore Company in UAE?',
        content: 'An offshore company in the UAE is a legal entity registered in a designated offshore jurisdiction but operates outside the UAE. These companies are ideal for international trading, holding investments, and asset protection.',
      },
      {
        title: 'Benefits of UAE Offshore Company',
        content: 'UAE offshore companies offer numerous advantages:',
        list: [
          '100% foreign ownership',
          'No corporate or personal income tax',
          'Complete privacy and confidentiality',
          'No minimum capital requirement',
          'Ability to open UAE corporate bank accounts',
          'Asset protection and estate planning benefits',
        ],
      },
      {
        title: 'Popular Offshore Jurisdictions in UAE',
        content: 'The main offshore jurisdictions in UAE include:',
        list: [
          'JAFZA Offshore - Located in Jebel Ali Free Zone',
          'RAK ICC - Ras Al Khaimah International Corporate Centre',
          'Ajman Offshore - Cost-effective offshore option',
        ],
      },
    ],
    relatedLinks: [
      { label: 'JAFZA Offshore', href: '/jafza-offshore-company-setup' },
      { label: 'RAK Offshore', href: '/rak-offshore-company-setup' },
      { label: 'Ajman Offshore', href: '/ajman-offshore-company-formation' },
    ],
  },
  'abu-dhabi-free-zone': {
    title: 'Abu Dhabi Free Zone Company Formation',
    description: 'Explore business setup opportunities in Abu Dhabi Free Zones including ADGM, Masdar City, and KIZAD with 100% ownership and tax benefits.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Business Setup in UAE', href: '/business-setup-in-uae' },
      { label: 'Abu Dhabi Free Zones', href: '/abu-dhabi-free-zone' },
    ],
    sections: [
      {
        title: 'Abu Dhabi Free Zones Overview',
        content: 'Abu Dhabi, the capital of the UAE, offers several world-class free zones designed to attract international businesses. These zones provide excellent infrastructure, tax incentives, and strategic access to global markets.',
      },
      {
        title: 'Popular Free Zones in Abu Dhabi',
        content: 'Key free zones in Abu Dhabi include:',
        list: [
          'Abu Dhabi Global Market (ADGM) - International financial center',
          'Masdar City Free Zone - Focus on clean technology and sustainability',
          'KIZAD (Khalifa Industrial Zone) - Industrial and logistics hub',
          'twofour54 - Media and entertainment zone',
          'Abu Dhabi Airport Free Zone - Trade and logistics',
        ],
      },
    ],
    relatedLinks: [
      { label: 'ADGM Free Zone', href: '/abu-dhabi-global-market-adgm-free-zone' },
      { label: 'Masdar City', href: '/masdar-city-free-zone' },
      { label: 'KIZAD', href: '/kizad-khalifa-industrial-free-zone' },
    ],
  },
  'sharjah-free-zone-company-formation': {
    title: 'Sharjah Free Zone Company Formation',
    description: 'Set up your business in Sharjah Free Zones with cost-effective packages, strategic location, and easy access to Dubai and other Emirates.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Business Setup in UAE', href: '/business-setup-in-uae' },
      { label: 'Sharjah Free Zones', href: '/sharjah-free-zone-company-formation' },
    ],
    sections: [
      {
        title: 'Why Choose Sharjah Free Zone?',
        content: 'Sharjah offers some of the most cost-effective free zone options in the UAE while providing excellent connectivity to Dubai and other Emirates. The emirate is known for its business-friendly environment and diverse economic opportunities.',
      },
      {
        title: 'Popular Sharjah Free Zones',
        content: 'Key free zones in Sharjah include:',
        list: [
          'SAIF Zone (Sharjah Airport International Free Zone)',
          'Hamriyah Free Zone - Industrial and trading hub',
          'Sharjah Media City (Shams) - Media and creative industries',
          'Sharjah Publishing City - Publishing and printing',
        ],
      },
    ],
    relatedLinks: [
      { label: 'SAIF Zone', href: '/saif-zone-sharjah-airport-international-free-zone' },
      { label: 'Hamriyah Free Zone', href: '/hamriyah-free-zone-authority-hfza' },
      { label: 'Sharjah Media City', href: '/sharjah-media-city-shams-free-zone' },
    ],
  },
  'rak-free-trade-zone-company-formation': {
    title: 'RAK Free Zone Company Formation',
    description: 'Establish your business in Ras Al Khaimah Free Zones with competitive costs, quick setup, and access to global markets.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Business Setup in UAE', href: '/business-setup-in-uae' },
      { label: 'RAK Free Zones', href: '/rak-free-trade-zone-company-formation' },
    ],
    sections: [
      {
        title: 'RAK Free Zone Overview',
        content: 'Ras Al Khaimah Economic Zone (RAKEZ) is one of the most popular free zones in the UAE, known for its competitive pricing and efficient setup process. It caters to businesses of all sizes across various industries.',
      },
      {
        title: 'Benefits of RAK Free Zone',
        content: 'RAK Free Zone offers numerous advantages:',
        list: [
          'Cost-effective setup packages',
          '100% foreign ownership',
          'No minimum capital requirement',
          'Quick and easy registration process',
          'Strategic location with port access',
          'Flexible office solutions',
        ],
      },
    ],
    relatedLinks: [
      { label: 'RAKEZ', href: '/ras-al-khaimah-economic-zone-rakez' },
      { label: 'RAK Offshore', href: '/rak-offshore-company-setup' },
      { label: 'RAK Maritime City', href: '/rak-maritime-city-free-zone' },
    ],
  },
  'rak-offshore-company-setup': {
    title: 'RAK Offshore Company Setup',
    description: 'Form your RAK ICC offshore company for international trading, holding structures, and asset protection with complete privacy.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Business Setup in UAE', href: '/business-setup-in-uae' },
      { label: 'RAK Offshore', href: '/rak-offshore-company-setup' },
    ],
    sections: [
      {
        title: 'RAK International Corporate Centre (ICC)',
        content: 'RAK ICC is one of the leading offshore jurisdictions in the UAE, offering a secure and efficient platform for international business operations. Companies registered here benefit from UAE\'s robust legal framework while enjoying complete tax efficiency.',
      },
      {
        title: 'Benefits of RAK Offshore',
        content: 'Key advantages include:',
        list: [
          'No corporate or income tax',
          '100% foreign ownership',
          'Complete confidentiality',
          'Can open UAE bank accounts',
          'No audit requirements',
          'Fast incorporation process',
        ],
      },
    ],
    relatedLinks: [
      { label: 'JAFZA Offshore', href: '/jafza-offshore-company-setup' },
      { label: 'Ajman Offshore', href: '/ajman-offshore-company-formation' },
      { label: 'RAK Free Zone', href: '/rak-free-trade-zone-company-formation' },
    ],
  },
  'ajman-free-zone-business-setup': {
    title: 'Ajman Free Zone Business Setup',
    description: 'Start your business in Ajman Free Zone with affordable packages, quick processing, and excellent connectivity to Dubai.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Business Setup in UAE', href: '/business-setup-in-uae' },
      { label: 'Ajman Free Zone', href: '/ajman-free-zone-business-setup' },
    ],
    sections: [
      {
        title: 'Ajman Free Zone Overview',
        content: 'Ajman Free Zone is one of the most affordable free zones in the UAE, making it an ideal choice for startups and SMEs. Located just 25 minutes from Dubai, it offers excellent connectivity while maintaining cost advantages.',
      },
      {
        title: 'Benefits of Ajman Free Zone',
        content: 'Key advantages include:',
        list: [
          'Most affordable setup costs in UAE',
          '100% foreign ownership',
          'Quick license issuance',
          'Proximity to Dubai',
          'Flexible visa options',
          'No currency restrictions',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Ajman Offshore', href: '/ajman-offshore-company-formation' },
      { label: 'Sharjah Free Zone', href: '/sharjah-free-zone-company-formation' },
      { label: 'RAK Free Zone', href: '/rak-free-trade-zone-company-formation' },
    ],
  },
  'ajman-offshore-company-formation': {
    title: 'Ajman Offshore Company Formation',
    description: 'Establish your offshore company in Ajman with cost-effective packages for international trading and holding structures.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Business Setup in UAE', href: '/business-setup-in-uae' },
      { label: 'Ajman Offshore', href: '/ajman-offshore-company-formation' },
    ],
    sections: [
      {
        title: 'Ajman Offshore Company',
        content: 'Ajman Offshore offers one of the most cost-effective offshore solutions in the UAE. It is ideal for businesses looking to hold assets, conduct international trading, or maintain investment portfolios.',
      },
      {
        title: 'Benefits',
        content: 'Key advantages:',
        list: [
          'Lowest offshore setup costs in UAE',
          'No corporate tax',
          '100% foreign ownership',
          'Bank account opening facility',
          'Complete privacy',
        ],
      },
    ],
    relatedLinks: [
      { label: 'RAK Offshore', href: '/rak-offshore-company-setup' },
      { label: 'JAFZA Offshore', href: '/jafza-offshore-company-setup' },
      { label: 'Ajman Free Zone', href: '/ajman-free-zone-business-setup' },
    ],
  },
  'umm-al-quwain-free-zone-company-formation': {
    title: 'UAQ Free Zone Company Formation',
    description: 'Set up your business in Umm Al Quwain Free Zone with competitive packages and strategic location benefits.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Business Setup in UAE', href: '/business-setup-in-uae' },
      { label: 'UAQ Free Zone', href: '/umm-al-quwain-free-zone-company-formation' },
    ],
    sections: [
      {
        title: 'UAQ Free Zone Overview',
        content: 'Umm Al Quwain Free Trade Zone offers affordable business setup options with excellent facilities. The zone is ideal for trading, manufacturing, and service-based businesses looking for cost-effective solutions.',
      },
      {
        title: 'Benefits',
        content: 'Key advantages:',
        list: [
          'Competitive pricing',
          '100% foreign ownership',
          'Quick setup process',
          'Strategic location',
          'Flexible office solutions',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Ajman Free Zone', href: '/ajman-free-zone-business-setup' },
      { label: 'RAK Free Zone', href: '/rak-free-trade-zone-company-formation' },
    ],
  },
  'fujairah-free-zone-company-setup': {
    title: 'Fujairah Free Zone Company Setup',
    description: 'Establish your business in Fujairah Free Zone with access to the only UAE emirate on the Gulf of Oman.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Business Setup in UAE', href: '/business-setup-in-uae' },
      { label: 'Fujairah Free Zone', href: '/fujairah-free-zone-company-setup' },
    ],
    sections: [
      {
        title: 'Fujairah Free Zone Overview',
        content: 'Fujairah Creative City Free Zone offers unique advantages as the only UAE emirate with direct access to the Gulf of Oman. It is particularly popular for media, consulting, and creative businesses.',
      },
      {
        title: 'Benefits',
        content: 'Key advantages:',
        list: [
          'Strategic location on Gulf of Oman',
          '100% foreign ownership',
          'Tax-free environment',
          'Quick company formation',
          'Ideal for creative industries',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Sharjah Free Zone', href: '/sharjah-free-zone-company-formation' },
      { label: 'RAK Free Zone', href: '/rak-free-trade-zone-company-formation' },
    ],
  },
  'general-trading-license-in-dubai-uae': {
    title: 'General Trading License in Dubai',
    description: 'Obtain your general trading license in Dubai to trade in a wide range of products. Learn about requirements, costs, and the application process.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/' },
      { label: 'General Trading License', href: '/general-trading-license-in-dubai-uae' },
    ],
    sections: [
      {
        title: 'What is a General Trading License?',
        content: 'A general trading license in Dubai allows businesses to trade in a wide variety of products without being restricted to a specific category. This license is ideal for businesses looking to diversify their product offerings.',
      },
      {
        title: 'Benefits',
        content: 'Key advantages:',
        list: [
          'Trade in multiple product categories',
          'Flexibility to expand product lines',
          'Available in mainland and free zones',
          'Import and export capabilities',
        ],
      },
    ],
    relatedLinks: [
      { label: 'E-Commerce License', href: '/ecommerce-license-in-dubai' },
      { label: 'Commercial License', href: '/commercial-trade-license-dubai-uae' },
    ],
  },
  'ecommerce-license-in-dubai': {
    title: 'E-Commerce License in Dubai',
    description: 'Start your online business in Dubai with an e-commerce license. Learn about requirements, setup process, and costs.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/' },
      { label: 'E-Commerce License', href: '/ecommerce-license-in-dubai' },
    ],
    sections: [
      {
        title: 'E-Commerce License Overview',
        content: 'An e-commerce license in Dubai allows you to legally sell products or services online. With the growing digital economy in the UAE, this license is essential for anyone looking to start an online business.',
      },
      {
        title: 'Benefits',
        content: 'Key advantages:',
        list: [
          'Sell products/services online legally',
          'Access to UAE digital market',
          'Available in mainland and free zones',
          'Can integrate with payment gateways',
        ],
      },
    ],
    relatedLinks: [
      { label: 'General Trading License', href: '/general-trading-license-in-dubai-uae' },
      { label: 'E-Trader License', href: '/e-trader-license-in-dubai-uae' },
    ],
  },
  'accounting-bookkeeping-services-in-dubai-uae': {
    title: 'Accounting & Bookkeeping Services in Dubai',
    description: 'Professional accounting and bookkeeping services in Dubai. Ensure compliance with UAE financial regulations and maintain accurate records.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/' },
      { label: 'Accounting & Bookkeeping', href: '/accounting-bookkeeping-services-in-dubai-uae' },
    ],
    sections: [
      {
        title: 'Accounting Services Overview',
        content: 'Professional accounting and bookkeeping services are essential for businesses operating in the UAE. Our team ensures your financial records are accurate, compliant, and up-to-date with UAE regulations.',
      },
      {
        title: 'Our Services',
        content: 'We offer:',
        list: [
          'Monthly bookkeeping and accounting',
          'Financial statement preparation',
          'VAT compliance and filing',
          'Payroll processing',
          'Management reporting',
          'Year-end accounts preparation',
        ],
      },
    ],
    relatedLinks: [
      { label: 'VAT Services', href: '/vat-in-uae' },
      { label: 'Audit Services', href: '/audit-services-in-uae' },
      { label: 'Corporate Tax', href: '/corporate-tax-in-uae' },
    ],
  },
  'corporate-tax-in-uae': {
    title: 'Corporate Tax in UAE',
    description: 'Understand UAE corporate tax regulations, rates, and compliance requirements. Get expert guidance on corporate tax planning.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/' },
      { label: 'Corporate Tax', href: '/corporate-tax-in-uae' },
    ],
    sections: [
      {
        title: 'UAE Corporate Tax Overview',
        content: 'The UAE introduced corporate tax effective from June 2023, with a standard rate of 9% for taxable income exceeding AED 375,000. Understanding these regulations is crucial for business compliance.',
      },
      {
        title: 'Our Services',
        content: 'We provide:',
        list: [
          'Corporate tax registration',
          'Tax planning and advisory',
          'Compliance and filing',
          'Transfer pricing documentation',
          'Tax audit support',
        ],
      },
    ],
    relatedLinks: [
      { label: 'VAT Services', href: '/vat-in-uae' },
      { label: 'Tax Residency Certificate', href: '/tax-residency-certificate-uae' },
      { label: 'Transfer Pricing', href: '/transfer-pricing-in-uae' },
    ],
  },
  'vat-in-uae': {
    title: 'VAT Services in UAE',
    description: 'Complete VAT services including registration, return filing, and compliance. Stay compliant with UAE VAT regulations.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/' },
      { label: 'VAT Services', href: '/vat-in-uae' },
    ],
    sections: [
      {
        title: 'VAT in UAE',
        content: 'VAT was introduced in the UAE in 2018 at a standard rate of 5%. Businesses with taxable supplies exceeding AED 375,000 must register for VAT and comply with filing requirements.',
      },
      {
        title: 'Our Services',
        content: 'We provide:',
        list: [
          'VAT registration',
          'VAT return filing',
          'VAT compliance review',
          'VAT refund assistance',
          'VAT advisory services',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Corporate Tax', href: '/corporate-tax-in-uae' },
      { label: 'Excise Tax', href: '/excise-tax-in-uae' },
      { label: 'Accounting Services', href: '/accounting-bookkeeping-services-in-dubai-uae' },
    ],
  },
  'audit-services-in-uae': {
    title: 'Audit Services in UAE',
    description: 'Professional audit services in UAE including statutory audits, internal audits, and compliance audits.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/' },
      { label: 'Audit Services', href: '/audit-services-in-uae' },
    ],
    sections: [
      {
        title: 'Audit Services Overview',
        content: 'Many businesses in the UAE are required to conduct annual audits. Our certified auditors provide comprehensive audit services to ensure compliance and provide stakeholder assurance.',
      },
      {
        title: 'Our Services',
        content: 'We offer:',
        list: [
          'Statutory audits',
          'Internal audits',
          'Compliance audits',
          'Due diligence audits',
          'Special purpose audits',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Accounting Services', href: '/accounting-bookkeeping-services-in-dubai-uae' },
      { label: 'Corporate Tax', href: '/corporate-tax-in-uae' },
    ],
  },
  'tax-residency-certificate-uae': {
    title: 'Tax Residency Certificate UAE',
    description: 'Obtain your Tax Residency Certificate (TRC) in UAE to avail double taxation treaty benefits.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/' },
      { label: 'Tax Residency Certificate', href: '/tax-residency-certificate-uae' },
    ],
    sections: [
      {
        title: 'What is a Tax Residency Certificate?',
        content: 'A Tax Residency Certificate (TRC) is an official document issued by the UAE Ministry of Finance that certifies an individual or company as a tax resident of the UAE. This certificate is essential for availing benefits under Double Taxation Avoidance Agreements.',
      },
      {
        title: 'Benefits',
        content: 'Key advantages:',
        list: [
          'Avoid double taxation',
          'Prove UAE tax residency',
          'Access treaty benefits',
          'Essential for international transactions',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Corporate Tax', href: '/corporate-tax-in-uae' },
      { label: 'VAT Services', href: '/vat-in-uae' },
    ],
  },
  'in-country-value-certificate-icv': {
    title: 'ICV Certificate in UAE',
    description: 'Obtain your In-Country Value (ICV) Certificate to participate in government tenders and contracts in UAE.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/' },
      { label: 'ICV Certificate', href: '/in-country-value-certificate-icv' },
    ],
    sections: [
      {
        title: 'What is ICV Certificate?',
        content: 'The In-Country Value (ICV) Certificate is a requirement for companies looking to participate in government tenders in the UAE. It measures the contribution of a company to the local economy.',
      },
      {
        title: 'Importance',
        content: 'Why you need ICV:',
        list: [
          'Mandatory for government contracts',
          'Demonstrates local contribution',
          'Competitive advantage in tenders',
          'Valid for one year',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Audit Services', href: '/audit-services-in-uae' },
      { label: 'Corporate Tax', href: '/corporate-tax-in-uae' },
    ],
  },
  'company-liquidation-services-in-dubai': {
    title: 'Company Liquidation Services in Dubai',
    description: 'Professional company liquidation and deregistration services in Dubai. Close your business legally and efficiently.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/' },
      { label: 'Company Liquidation', href: '/company-liquidation-services-in-dubai' },
    ],
    sections: [
      {
        title: 'Company Liquidation Overview',
        content: 'Company liquidation is the formal process of closing a business in the UAE. Our team handles all aspects of the liquidation process to ensure legal compliance and smooth closure.',
      },
      {
        title: 'Our Services',
        content: 'We provide:',
        list: [
          'Voluntary liquidation',
          'Legal documentation',
          'Creditor notifications',
          'Asset distribution',
          'License cancellation',
          'Final deregistration',
        ],
      },
    ],
    relatedLinks: [
      { label: 'PRO Services', href: '/pro-services-dubai-uae' },
      { label: 'Accounting Services', href: '/accounting-bookkeeping-services-in-dubai-uae' },
    ],
  },
  'e-invoicing-in-uae': {
    title: 'E-Invoicing in UAE',
    description: 'Implement e-invoicing solutions for your UAE business. Stay compliant with upcoming e-invoicing regulations.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/' },
      { label: 'E-Invoicing', href: '/e-invoicing-in-uae' },
    ],
    sections: [
      {
        title: 'E-Invoicing Overview',
        content: 'E-invoicing is becoming mandatory in the UAE as part of digital transformation initiatives. Implementing e-invoicing solutions helps businesses streamline operations and ensure compliance.',
      },
      {
        title: 'Benefits',
        content: 'Key advantages:',
        list: [
          'Reduced processing time',
          'Lower operational costs',
          'Improved accuracy',
          'Better compliance',
          'Environmental benefits',
        ],
      },
    ],
    relatedLinks: [
      { label: 'VAT Services', href: '/vat-in-uae' },
      { label: 'Accounting Services', href: '/accounting-bookkeeping-services-in-dubai-uae' },
    ],
  },
  'excise-tax-in-uae': {
    title: 'Excise Tax in UAE',
    description: 'Understand UAE excise tax regulations, applicable products, and compliance requirements.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/' },
      { label: 'Excise Tax', href: '/excise-tax-in-uae' },
    ],
    sections: [
      {
        title: 'Excise Tax Overview',
        content: 'Excise tax in the UAE applies to specific goods that are harmful to health or the environment. Rates range from 50% to 100% depending on the product category.',
      },
      {
        title: 'Applicable Products',
        content: 'Products subject to excise tax:',
        list: [
          'Tobacco products - 100%',
          'Energy drinks - 100%',
          'Carbonated drinks - 50%',
          'Sweetened drinks - 50%',
          'Electronic smoking devices - 100%',
        ],
      },
    ],
    relatedLinks: [
      { label: 'VAT Services', href: '/vat-in-uae' },
      { label: 'Corporate Tax', href: '/corporate-tax-in-uae' },
    ],
  },
  'transfer-pricing-in-uae': {
    title: 'Transfer Pricing in UAE',
    description: 'Transfer pricing advisory and documentation services for UAE businesses with related party transactions.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/' },
      { label: 'Transfer Pricing', href: '/transfer-pricing-in-uae' },
    ],
    sections: [
      {
        title: 'Transfer Pricing Overview',
        content: 'Transfer pricing rules in the UAE require businesses to ensure that transactions with related parties are conducted at arm\'s length. Proper documentation is essential for compliance.',
      },
      {
        title: 'Our Services',
        content: 'We provide:',
        list: [
          'Transfer pricing policy development',
          'Documentation preparation',
          'Benchmarking studies',
          'Compliance review',
          'Advisory services',
        ],
      },
    ],
    relatedLinks: [
      { label: 'Corporate Tax', href: '/corporate-tax-in-uae' },
      { label: 'Audit Services', href: '/audit-services-in-uae' },
    ],
  },
};

// Default page data for pages not yet defined
const defaultPageData = {
  title: 'Business Setup Services',
  description: 'Comprehensive business setup services in the UAE and GCC region. Expert guidance for company formation, licensing, and compliance.',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/' },
  ],
  sections: [
    {
      title: 'Our Services',
      content: 'We provide comprehensive business setup services tailored to your needs. Our team of experts will guide you through every step of the process.',
    },
    {
      title: 'Why Choose Us?',
      content: 'With years of experience in the UAE market, we offer:',
      list: [
        'Expert guidance throughout the process',
        'Competitive pricing',
        'Quick turnaround time',
        'Complete documentation support',
        'Ongoing compliance assistance',
      ],
    },
  ],
  relatedLinks: [
    { label: 'Dubai Free Zones', href: '/dubai-freezone-company-formation' },
    { label: 'Dubai Mainland', href: '/dubai-mainland-company-formation' },
    { label: 'Accounting Services', href: '/accounting-bookkeeping-services-in-dubai-uae' },
  ],
};

export const ServicePage: React.FC = () => {
  const { slug, country } = useParams();
  const fullSlug = country ? `${country}/${slug}` : slug || '';
  
  // Get page data or use default
  const page = pageData[fullSlug] || pageData[slug || ''] || {
    ...defaultPageData,
    title: slug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || 'Service Page',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: slug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || 'Service', href: `/${slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-corporate-900 via-corporate-800 to-corporate-900 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32 relative z-10">
          {/* Breadcrumbs */}
          <nav className="mb-6">
            <ol className="flex items-center flex-wrap gap-2 text-sm text-white/70">
              {page.breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center">
                  {index > 0 && <ChevronRight className="w-4 h-4 mx-2" />}
                  {index === page.breadcrumbs.length - 1 ? (
                    <span className="text-gold-400 font-medium">{crumb.label}</span>
                  ) : (
                    <Link to={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
            {page.title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">
            {page.description}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,320px] gap-12">
          {/* Main Content Area */}
          <div className="space-y-12">
            {page.sections.map((section, index) => (
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
              <h3 className="text-xl font-bold mb-3">Ready to Get Started?</h3>
              <p className="text-white/80 text-sm mb-6">Our expert consultants are here to help you set up your business quickly and efficiently.</p>
              <Button variant="secondary" className="w-full">
                Get Free Consultation
              </Button>
              <div className="mt-6 pt-6 border-t border-white/20 space-y-3">
                <a href="tel:+971508843903" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+971 508843903</span>
                </a>
                <a href="https://wa.me/971508843903" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">WhatsApp Us</span>
                </a>
              </div>
            </div>

            {/* Related Links */}
            {page.relatedLinks && page.relatedLinks.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-corporate-900 mb-4">Related Services</h3>
                <ul className="space-y-3">
                  {page.relatedLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.href}
                        className="flex items-center gap-2 text-gray-600 hover:text-gold-600 transition-colors group"
                      >
                        <ChevronRight className="w-4 h-4 text-gold-500 group-hover:translate-x-1 transition-transform" />
                        <span className="text-sm font-medium">{link.label}</span>
                      </Link>
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

export default ServicePage;
