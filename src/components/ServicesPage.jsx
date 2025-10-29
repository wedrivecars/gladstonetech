import { useEffect } from 'react';
import serverImage from '../assets/server.jpg';
import cmsImage from '../assets/aboutus1.jpg';
import policyImg from '../assets/policy.png';
import webImg from '../assets/web.png';

export default function ServicesPage() {
  useEffect(() => { window.scrollTo(0,0); }, []);

  return (
    <div className="bg-white min-h-screen">
      <section className="relative min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={serverImage} 
            alt="Technology Solutions" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-32 flex items-center min-h-[500px]">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-white">Our Solutions</h1>
            <p className="text-lg text-gray-200 max-w-3xl">
              Today, our real-time technology services and solutions enable customers to seamlessly translate acquired data into useful information, and then transform this information into knowledge for improved decision making—anytime, anywhere (on premise / cloud).
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* In-page sub navigation */}
        <div className="mb-6">
          <nav className="flex flex-wrap gap-4 items-center">
            <a href="#business-structure" className="text-sm text-blue-600 hover:underline">Business Structure</a>
            <a href="#e-business" className="text-sm text-blue-600 hover:underline">E-BUSINESS Solutions</a>
            <a href="#all-services" className="text-sm text-blue-600 hover:underline">All Services</a>
          </nav>
        </div>

        {/* Business Structure / ICT Support Services */}
        <section id="business-structure" className="relative bg-linear-to-br from-blue-900 to-slate-900 p-8 rounded-2xl shadow-lg overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-size[16px_16px]"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-500/20 rounded-lg p-2">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Business Structure — ICT Support Services</h2>
            </div>
            <p className="text-blue-100 mb-8 text-lg">Our core ICT support services are designed to provide comprehensive lifecycle management and operational support</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                ['IT Asset Management', 'Software IT Asset Management', 'Desktop Support & Maintenance', 'IT Hardware Accessories'],
                ['Software Products & Licenses', 'CCTV Installation & Support', 'Software Migration', 'Server & Network Management']
              ].map((column, i) => (
                <div key={i} className="space-y-3">
                  {column.map((item, j) => (
                    <div key={j} className="flex items-center gap-3 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      <span className="text-white text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* E-BUSINESS SOLUTIONS */}
        <section id="e-business" className="relative bg-linear-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg border border-blue-100/50 overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-200/50 bg-size[16px_16px]"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 rounded-lg p-2">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-slate-800">E-BUSINESS SOLUTIONS</h2>
            </div>
            <p className="text-slate-700 mb-8 text-lg">Intranet/Internet Web design, development and management. We offer solutions focused on security, collaboration and business workflows.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: 'Security Solutions',
                  description: 'Content filtering and protection',
                  icon: (
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                },
                {
                  title: 'Collaboration',
                  description: 'Messaging and workflow tools',
                  icon: (
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                },
                {
                  title: 'Professional Services',
                  description: 'Consultancy and Management',
                  icon: (
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )
                }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-50 rounded-lg w-10 h-10 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Anchor marker for full services list */}
        <div id="all-services" />
        <section className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Enterprise IT Infrastructure</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We deliver comprehensive IT infrastructure solutions that form the backbone of your organization's technology operations, ensuring reliability, security, and scalability.
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Server deployment and administration</li>
              <li>Network infrastructure setup and maintenance</li>
              <li>Desktop and endpoint management</li>
              <li>Hardware lifecycle management</li>
              <li>Security and access control systems</li>
              <li>24/7 monitoring and support services</li>
              <li>Backup and disaster recovery solutions</li>
            </ul>
          </div>
          <div>
            <img src={serverImage} alt="IT Infrastructure" className="rounded-2xl shadow-lg w-full h-80 object-cover" />
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Digital Workplace Solutions</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Transform your workplace with our integrated digital solutions that combine content management, collaboration tools, and workflow automation to enhance productivity and team efficiency.
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Enterprise content management systems</li>
              <li>Team collaboration platforms</li>
              <li>Document management and version control</li>
              <li>Business process automation</li>
              <li>Intranet and knowledge base solutions</li>
              <li>Mobile workforce enablement</li>
            </ul>
          </div>
          <div>
            <img src={cmsImage} alt="Digital Workplace" className="rounded-2xl shadow-lg w-full h-80 object-cover" />
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Software Asset Management Services</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We partner with global ICT vendors and maintain high standards to deliver world-class SAM services. Key areas include procurement, contract management, distribution, SaaS governance, license reconciliation and entitlement tracking.
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Software product and License procurement</li>
              <li>Software contract management</li>
              <li>Software distribution and SaaS governance</li>
              <li>Application recognition and license reconciliation</li>
              <li>Change and Configuration Management</li>
            </ul>
          </div>
          <div>
            <img src={cmsImage} alt="Software Asset Management" className="rounded-2xl shadow-lg w-full h-80 object-cover" />
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <img src={serverImage} alt="Hardware Asset Management" className="rounded-2xl shadow-lg w-full h-80 object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Hardware Asset Management & CCTV</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Inventory management of hardware assets from acquisition to retirement. We also provide CCTV installation and maintenance services using industry best practices.
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Inventory and lifecycle management</li>
              <li>Procurement of hardware and accessories</li>
              <li>CCTV installation, transmission, and maintenance</li>
            </ul>
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Policy Statements & Documentation</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We provide consultancy in developing policies and documentation to support business continuity and compliance, including IT asset management plans, software acquisition and usage policies, and change/configuration policies.
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>IT Asset Management Plan / Policy</li>
              <li>Software Acquisition & Usage Policies</li>
              <li>Change and Configuration Management Policies</li>
            </ul>
          </div>
          <div>
            <img src={policyImg} alt="Policies and documentation" className="rounded-2xl shadow-lg w-full h-80 object-contain bg-white p-8" />
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <img src={webImg} alt="Web solutions" className="rounded-2xl shadow-lg w-full h-80 object-contain bg-white p-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Internet / Intranet / Extranet Web Solutions</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We deliver web solutions that include content filtering, messaging, collaboration and workflow, with focus on security, privacy and compliance standards to support e-business.
            </p>
          </div>
        </section>

        {/* Affiliations & Partners */}
        <section className="mt-16 pt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Partner Network & Affiliations</h2>
            <p className="text-slate-600 max-w-2xl mx-auto px-4">
              Our strong partnerships with industry leaders enable us to deliver cutting-edge solutions and maintain the highest standards of service delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Gold Partnership */}
            <div className="bg-linear-to-br from-yellow-50 to-white p-6 rounded-xl border border-yellow-100 shadow-sm">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                  Gold Partner
                </span>
              </div>
              <div className="space-y-3">
                <div className="border-b border-yellow-100 pb-3">
                  <h3 className="font-bold text-gray-900">Microsoft</h3>
                  <p className="text-sm text-gray-600">Software Asset Management</p>
                  <p className="text-xs text-gray-500 mt-1">Partner ID: 753921</p>
                </div>
              </div>
            </div>

            {/* Silver Partnerships */}
            <div className="bg-linear-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                  Silver Partner
                </span>
              </div>
              <div className="space-y-3">
                <div className="border-b border-gray-100 pb-3">
                  <h3 className="font-bold text-gray-900">Adobe</h3>
                  <p className="text-sm text-gray-600">Creative & Enterprise Solutions</p>
                </div>
              </div>
            </div>

            {/* Registered Partnerships */}
            <div className="bg-linear-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-sm">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Registered Partner
                </span>
              </div>
              <div className="space-y-3">
                <div className="border-b border-blue-100 pb-3">
                  <h3 className="font-bold text-gray-900">Cisco</h3>
                  <p className="text-sm text-gray-600">Network Solutions Provider</p>
                </div>
              </div>
            </div>

            {/* Value Added Partners */}
            <div className="bg-linear-to-br from-green-50 to-white p-6 rounded-xl border border-green-100 shadow-sm">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Value Added Partners
                </span>
              </div>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span>HP</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span>Dell</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span>Symantec</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span>Corel</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span>WhatsUpGold</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
         
        </section>
      </div>
    </div>
  );
}