import { BiCalendar } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import heroImage from '../assets/cloud.jpg';

function Hero() {
  return (
  <section id="home" className="relative min-h-[600px] bg-linear-to-r from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Background overlay with darker tint */}
  <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
          {/* Left content */}
          <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-6 max-w-xl text-center lg:text-left">
            <span className="text-purple-300 font-medium tracking-wide uppercase">
              Cloud Services
            </span>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 drop-shadow-lg">
              Cloud Services
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-200 mb-4 drop-shadow">
              Office 365, Azure, Google Cloud, Amazon AWS.
            </p>

            <p className="text-base sm:text-lg text-gray-300 mb-6 lg:mb-8 drop-shadow">
              Transform your business with our comprehensive cloud solutions. Our expert team ensures seamless integration, enhanced security, and scalable infrastructure tailored to your needs.
            </p>
            
            <div className="flex items-center gap-4 relative z-20">
              <a 
                href="/#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 cursor-pointer transition-all hover:scale-105 relative z-30 no-underline"
              >
                <BiCalendar className="text-xl" />
                Book Consultation
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="relative w-full max-w-md lg:w-[550px] h-[300px] lg:h-[500px]">
            <img 
              src={heroImage} 
              alt="Cloud Services Expert" 
              className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl shadow-2xl"
            />
            {/* Gradient overlay on image */}
            <div className="absolute inset-0 bg-linear-to-br from-purple-900/40 to-black/50 rounded-2xl"></div>
          </div>
        </div>
        
        {/* Abstract shapes for visual interest */}
        <div className="absolute -right-20 top-20">
          <div className="w-64 h-64 rounded-full bg-linear-to-tr from-yellow-500/20 to-pink-500/20 blur-3xl"></div>
        </div>
        <div className="absolute left-0 bottom-0">
          <div className="w-96 h-96 rounded-full bg-linear-to-bl from-blue-400/10 to-emerald-400/10 blur-2xl"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;