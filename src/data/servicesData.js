import softwareImage from '../assets/software.png';
import hardwareImage from '../assets/hardware.png';
import policyImage from '../assets/policy.png';
import securityImage from '../assets/security.png';
import documentImage from '../assets/document.png';
import webImage from '../assets/web.png';
// additional images are available in assets if we need them later

const services = [
  {
    id: 1,
    title: 'Software Asset Management',
    description: 'We manage software products and licenses for SMBs, from procurement through retirement.',
    image: softwareImage
  },
  {
    id: 2,
    title: 'Hardware Asset Management',
    description: 'Inventory management of hardware assets from acquisition to retirement.',
    image: hardwareImage
  },
  {
    id: 3,
    title: 'Policy & Documentation',
    description: 'Consultancy for essential IT and governance documentation and policies.',
    image: policyImage
  },
  {
    id: 4,
    title: 'Security Management',
    description: 'Deploy and support robust enterprise security solutions.',
    image: securityImage
  },
  {
    id: 5,
    title: 'Document & Records',
    description: 'Mitigate risk, reduce costs, and improve document-driven processes.',
    image: documentImage
  },
  {
    id: 6,
    title: 'Web Solutions',
    description: 'Internet, intranet, and extranet solutions for e-business.',
    image: webImage
  }
];

export default services;
