import { Link } from 'react-router-dom';
import cisco from '../assets/oracle.jpeg';
import corel from '../assets/adobe.jpeg';
import dell from '../assets/cisco.jpeg';
import hp from '../assets/partner1.jpeg';
import microsoft from '../assets/cyberoam.jpeg';
import symantec from '../assets/softexpert.jpeg';
import whatsup from '../assets/sam.jpeg';
import mime from '../assets/mime.jpeg';
import ipswitch from '../assets/partner2.jpeg';
import partner3 from '../assets/partner3.jpeg';
import partner4 from '../assets/partner4.jpeg';
import partner5 from '../assets/partner5.jpeg';
import partner6 from '../assets/partner6.jpeg';
import partner7 from '../assets/partner7.jpeg';
import emc from '../assets/emc.jpeg';
import hpbusiness from '../assets/hpbusiness.jpeg';
import lenovo from '../assets/lenovo.jpeg';
import office365 from '../assets/office365.jpeg';


function Partners() {
  const partners = [
    { id: 1, name: 'Oracle', logo: cisco },
    { id: 2, name: 'Adobe', logo: corel },
    { id: 3, name: 'Cisco', logo: dell },
    { id: 4, name: 'AutoCAD', logo: hp },
    { id: 5, name: 'Cyberoam', logo: microsoft },
    { id: 6, name: 'SoftExpert', logo: symantec },
    { id: 7, name: 'SAM', logo: whatsup },
    { id: 8, name: 'MIME', logo: mime },
    { id: 9, name: 'Ipswitch', logo: ipswitch },
    { id: 10, name: 'Partner 3', logo: partner3 },
    { id: 11, name: 'Partner 4', logo: partner4 },
    { id: 12, name: 'Partner 5', logo: partner5 },
    { id: 13, name: 'Partner 6', logo: partner6 },
    { id: 13, name: 'Partner 7', logo: partner7 },
    { id: 14, name: 'EMC', logo: emc },
    { id: 15, name: 'HP Business', logo: hpbusiness },
    { id: 16, name: 'Lenovo', logo: lenovo },
    { id: 17, name: 'Office 365', logo: office365 },
  ];

  return (
  <section id="partners" className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-slate-800 mb-3">
            Our Partners
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We collaborate with industry leaders to deliver the best solutions for our clients
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-purple-600 to-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Sliding Partners Logo Section */}
        <div className="relative -mt-2">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-40 h-full bg-linear-to-r from-slate-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-40 h-full bg-linear-to-l from-slate-50 to-transparent z-10"></div>

          {/* Sliding container */}
          <div className="overflow-hidden">
            <div className="flex animate-slide">
              {/* First set of logos */}
              <div className="flex gap-8 items-center py-8" style={{minWidth: 'calc(17 * 200px)'}}>
                {partners.map((partner) => (
                  <img
                    key={partner.id}
                    src={partner.logo}
                    alt={partner.name}
                    className="w-40 h-40 object-contain hover:scale-110 transition-all duration-300"
                  />
                ))}
              </div>
              {/* Duplicated set for seamless loop */}
              <div className="flex gap-8 items-center py-8" style={{minWidth: 'calc(17 * 200px)'}}>
                {partners.map((partner) => (
                  <img
                    key={`dup-${partner.id}`}
                    src={partner.logo}
                    alt={partner.name}
                    className="w-40 h-40 object-contain hover:scale-110 transition-all duration-300"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Learn More Link */}
        <div className="text-center mt-2">
          <Link to="/clients" className="btn-primary inline-block">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Partners;