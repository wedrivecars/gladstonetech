import { BiPhone, BiEnvelope, BiMap, BiLogoLinkedin, BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from 'react-icons/bi';

function Footer() {
  const currentYear = new Date().getFullYear();

    const quickLinks = [
    { name: 'About Us', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'Contact', href: '/#contact' },
    { name: 'Privacy Policy', href: '/#privacy' },
    { name: 'Terms of Service', href: '/#terms' }
  ];

  const services = [
    'Cloud Infrastructure',
    'Office 365 Solutions',
    'Azure Services',
    'AWS Solutions',
    'Cloud Security',
    'Google Cloud Platform'
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img src="/logo.png" alt="Gladstone Tech Logo" className="h-10" />
            <p className="text-slate-400 leading-relaxed">
              Empowering businesses through innovative cloud solutions and digital transformation.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#linkedin" className="text-slate-400 hover:text-white transition-colors">
                <BiLogoLinkedin className="w-6 h-6" />
              </a>
              <a href="#facebook" className="text-slate-400 hover:text-white transition-colors">
                <BiLogoFacebook className="w-6 h-6" />
              </a>
              <a href="#twitter" className="text-slate-400 hover:text-white transition-colors">
                <BiLogoTwitter className="w-6 h-6" />
              </a>
              <a href="#instagram" className="text-slate-400 hover:text-white transition-colors">
                <BiLogoInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="/#services"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <BiMap className="w-6 h-6 text-purple-500 shrink-0 mt-1" />
                <span className="text-slate-400">
                  8 Sanyaolu Street Oregun,<br />
                  Ikeja Lagos.
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <BiPhone className="w-5 h-5 text-purple-500" />
                <a href="tel:+2348033004581" className="text-slate-400 hover:text-white transition-colors">
                  (+234) 803-300-4581
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <BiEnvelope className="w-5 h-5 text-purple-500" />
                <a href="mailto:info@gladstonetech.com" className="text-slate-400 hover:text-white transition-colors">
                  info@gladstonetech.com<br/>
                  support@gladstonetechnologiesltd.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-slate-700 to-transparent my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400 text-sm">
            © {currentYear} Gladstone Tech. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#terms" className="text-sm text-slate-400 hover:text-white transition-colors">
              Terms
            </a>
            <a href="#privacy" className="text-sm text-slate-400 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#cookies" className="text-sm text-slate-400 hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;