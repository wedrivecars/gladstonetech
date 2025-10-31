import aboutImage1 from '../assets/aboutus1.jpg';
import aboutImage2 from '../assets/server.jpg';

function About() {
  return (
    <section id="about" className="relative py-20 bg-slate-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#f0f7ff_25%,transparent_25%,transparent_50%,#f0f7ff_50%,#f0f7ff_75%,transparent_75%)] opacity-20 bg-size-[48px_48px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid layout for content and images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-4">
                Transforming Businesses Through Technology
              </h2>
              <div className="w-20 h-1 bg-linear-to-r from-purple-600 to-blue-600 rounded-full"></div>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed">
              At Gladstone Technologies Limited, we go beyond being Information Technology consultants — we serve as your strategic partners in digital transformation. 
              With over a decade of proven experience, we have empowered organizations of all sizes to leverage cloud technology, automation, and intelligent 
              digital solutions to drive growth, enhance efficiency, and foster innovation.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-8">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-purple-600">200+</h3>
                <p className="text-slate-600">Successful Projects</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-blue-600">98%</h3>
                <p className="text-slate-600">Client Satisfaction</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-purple-600">24/7</h3>
                <p className="text-slate-600">Technical Support</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-blue-600">10+</h3>
                <p className="text-slate-600">Years Experience</p>
              </div>
            </div>

            <a href="/about" className="btn-primary inline-block mt-8">
              Learn More About Us
            </a>
          </div>

          {/* Right side - Images */}
          <div className="relative">
            {/* Main image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={aboutImage1} 
                alt="Team collaboration" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-br from-purple-900/20 to-blue-900/20"></div>
            </div>

            {/* Floating image */}
            <div className="absolute -bottom-8 -left-2 lg:-left-8 z-20 w-32 h-32 lg:w-48 lg:h-48 rounded-xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src={aboutImage2} 
                alt="Office environment" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-br from-purple-900/10 to-blue-900/10"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-linear-to-br from-purple-600 to-blue-600 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -left-4 -bottom-4 w-32 h-32 bg-linear-to-br from-blue-600 to-purple-600 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>

        {/* Features grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Secure Solutions</h3>
            <p className="text-slate-600">Enterprise-grade security measures to protect your valuable business data.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Fast Implementation</h3>
            <p className="text-slate-600">Quick deployment of cloud solutions with minimal disruption to your operations.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Dedicated Support</h3>
            <p className="text-slate-600">Round-the-clock expert support to ensure your systems run smoothly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;