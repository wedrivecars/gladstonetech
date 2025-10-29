import { BiCalendar, BiMenu, BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white shadow-md border-b border-gray-100 relative">
      <div className="flex items-center justify-between pl-4 sm:pl-6 lg:pl-8 pr-2 sm:pr-4 lg:pr-8 py-4 max-w-7xl mx-auto">
      <div className="shrink-0">
        <Link to="/">
          <img src="/gladtechlogo.jpeg" alt="Logo" className="h-10 cursor-pointer" />
        </Link>
      </div>
      
      <ul className="hidden lg:flex list-none m-0 p-0 gap-6 xl:gap-8">
        <li><a href="/#home" className="no-underline text-gray-800 font-medium hover:text-blue-600 transition-colors">Home</a></li>
        <li><a href="/#about" className="no-underline text-gray-800 font-medium hover:text-blue-600 transition-colors">About</a></li>
        <li><a href="/#services" className="no-underline text-gray-800 font-medium hover:text-blue-600 transition-colors">Services</a></li>
        <li><Link to="/team" className="no-underline text-gray-800 font-medium hover:text-blue-600 transition-colors">Team</Link></li>
  <li><a href="/#partners" className="no-underline text-gray-800 font-medium hover:text-blue-600 transition-colors">Partners</a></li>
  <li className="relative" ref={dropdownRef}>
    <button 
      onClick={() => setShowDropdown(!showDropdown)}
      className="no-underline text-gray-800 font-medium hover:text-blue-600 transition-colors bg-transparent border-none cursor-pointer"
    >
      Clients
    </button>
    {showDropdown && (
      <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
        <Link 
          to="/clients" 
          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 no-underline"
          onClick={() => setShowDropdown(false)}
        >
          All Clients
        </Link>
        <Link 
          to="/contracts" 
          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 no-underline"
          onClick={() => setShowDropdown(false)}
        >
          Contracts Profile
        </Link>
      </div>
    )}
  </li>
  <li><a href="/#contact" className="no-underline text-gray-800 font-medium hover:text-blue-600 transition-colors">Contact</a></li>
      </ul>
      
      <div className="flex items-center">
        <a 
          href="https://wa.me/2348033004581?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20Gladstone%20Technologies"
          target="_blank"
          rel="noopener noreferrer"
          className="!hidden xl:!flex btn-primary items-center gap-1 px-3 py-2 rounded-md whitespace-nowrap text-sm mr-4 no-underline"
        >
          <BiCalendar size={16} />
          Book Consultation
        </a>
        
        <button 
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="lg:hidden p-1 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {showMobileMenu ? <BiX size={32} /> : <BiMenu size={32} />}
        </button>
      </div>
      </div>
      
      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="lg:hidden fixed top-20 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
          <div className="px-4 py-6 space-y-4">
            <a href="/#home" className="block text-gray-800 font-medium hover:text-blue-600 transition-colors py-2" onClick={() => setShowMobileMenu(false)}>Home</a>
            <a href="/#about" className="block text-gray-800 font-medium hover:text-blue-600 transition-colors py-2" onClick={() => setShowMobileMenu(false)}>About</a>
            <a href="/#services" className="block text-gray-800 font-medium hover:text-blue-600 transition-colors py-2" onClick={() => setShowMobileMenu(false)}>Services</a>
            <Link to="/team" className="block text-gray-800 font-medium hover:text-blue-600 transition-colors py-2" onClick={() => setShowMobileMenu(false)}>Team</Link>
            <a href="/#partners" className="block text-gray-800 font-medium hover:text-blue-600 transition-colors py-2" onClick={() => setShowMobileMenu(false)}>Partners</a>
            <Link to="/clients" className="block text-gray-800 font-medium hover:text-blue-600 transition-colors py-2" onClick={() => setShowMobileMenu(false)}>All Clients</Link>
            <Link to="/contracts" className="block text-gray-800 font-medium hover:text-blue-600 transition-colors py-2" onClick={() => setShowMobileMenu(false)}>Contracts Profile</Link>
            <a href="/#contact" className="block text-gray-800 font-medium hover:text-blue-600 transition-colors py-2" onClick={() => setShowMobileMenu(false)}>Contact</a>
            <a 
              href="https://wa.me/2348033004581?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20Gladstone%20Technologies"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-primary flex items-center justify-center gap-2 px-4 py-3 rounded-md mt-4 no-underline"
              onClick={() => setShowMobileMenu(false)}
            >
              <BiCalendar size={20} />
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header