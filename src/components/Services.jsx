import { useState } from 'react';
import softwareImage from '../assets/software.png'; 
import hardwareImage from '../assets/hardware.png'; 
import policyImage from '../assets/policy.png'; 
import securityImage from '../assets/security.png'; 
import documentImage from '../assets/document.png'; 
import webImage from '../assets/web.png'; 


function Services() {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Software Asset Management",
      description: "We manage software products and licenses for SMBs.",
      icon: softwareImage,
      color: "from-blue-500 to-blue-700"
    },
    {
      id: 2,
      title: "Hardware Asset Management",
      description: "Inventory management of hardware assets from acquisition to retirement.",
      icon: hardwareImage,
      color: "from-purple-500 to-purple-700"
    },
    {
      id: 3,
      title: "CCTV Installation & Maintenance",
      description: "Professional CCTV installation, transmission, and maintenance services.",
      icon: securityImage,
      color: "from-red-500 to-red-700"
    },
    {
      id: 4,
      title: "Policy & Documentation",
      description: "Consultancy for essential IT and governance documentation.",
      icon: policyImage,
      color: "from-indigo-500 to-indigo-700"
    },
    {
      id: 5,
      title: "Document & Records",
      description: "Mitigate risk, reduce costs, and improve document-driven processes.",
      icon: documentImage,
      color: "from-teal-500 to-teal-700"
    },
    {
      id: 6,
      title: "Internet & E-Business Solutions",
      description: "Internet, intranet, extranet and comprehensive e-business solutions.",
      icon: webImage,
      color: "from-sky-500 to-sky-700"
    }
  ];

  return (
    <section id="services" className="py-20 bg-linear-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We offer comprehensive cloud solutions to help your business thrive in the digital age. 
            Our expertise spans across major cloud platforms and services.
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-purple-600 to-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Background gradient effect */}
              <div 
                className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Icon container */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-xl overflow-hidden mb-2">
                  <img 
                    src={service.icon}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative circle */}
                <div 
                  className={`absolute -top-2 -left-2 w-20 h-20 rounded-full bg-linear-to-br ${service.color} opacity-10 blur-lg transition-transform duration-300 group-hover:scale-150`}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-slate-800 mb-3 relative">
                {service.title}
              </h3>
              <p className="text-slate-600 relative z-10 leading-relaxed">
                {service.description}
              </p>

              {/* Hover effect line */}
              <div 
                className={`absolute bottom-0 left-0 h-1 bg-linear-to-r ${service.color} transition-all duration-300 
                  ${hoveredService === service.id ? 'w-full' : 'w-0'}`}
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="/services" className="btn-primary inline-block">Learn More About Our Solutions</a>
        </div>
      </div>
    </section>
  );
}

export default Services;