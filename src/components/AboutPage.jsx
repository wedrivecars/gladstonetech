import { useEffect } from 'react';
import aboutHeroImg from '../assets/aboutus1.jpg';
import aboutImage1 from '../assets/aboutus1.jpg';
import aboutImage2 from '../assets/server.jpg';
import teamImage from '../assets/aboutus1.jpg';

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={aboutHeroImg} 
            alt="Gladstone Technologies Office" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-32 flex items-center min-h-[500px]">
          <div>
            <h1 className="text-5xl font-bold mb-6 text-white">About Gladstone Technologies</h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Your trusted partner in Information Technology consulting since 2003
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Company Overview */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Who We Are</h2>
              <div className="w-20 h-1 bg-blue-600 rounded-full mb-8"></div>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Gladstone Technologies Limited is an Information Technology consulting firm incorporated in November 2003. We specialize in managing Information Technology Assets, with a comprehensive focus on Software Asset Management, procurement of Technological Equipment and Accessories across varying platforms, and Enterprise Asset Management.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our expertise extends to Licensing Online Services, Secure Content Management, Network Infrastructure and Monitoring solutions, and Closed Circuit Television Installation, among other services.
              </p>
            </div>
            <div className="relative">
              <img 
                src={aboutImage1} 
                alt="Team collaboration" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600/10 rounded-2xl -z-10"></div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <div className="w-16 h-1 bg-blue-400 rounded-full mb-6"></div>
              <p className="text-lg text-white leading-relaxed">
                To be the continent's leading ICT value added service provider enabling businesses to achieve organizational goals and bottom-lines.
              </p>
            </div>
            <div className="bg-blue-900 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <div className="w-16 h-1 bg-blue-400 rounded-full mb-6"></div>
              <p className="text-lg text-white leading-relaxed">
                To provide our clients with products and services that are industry standard, using leading edge technology that enhances RETURN ON INVESTMENT whilst giving them (Our Clients) necessary COMPETITIVE EDGE.
              </p>
            </div>
          </div>
        </section>

        {/* Value Proposition with Team Image */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src={teamImage} 
                alt="Our team at work" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-600/10 rounded-2xl -z-10"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Value Proposition</h2>
              <div className="w-20 h-1 bg-blue-600 rounded-full mb-8"></div>
              <p className="text-xl text-blue-600 font-semibold mb-6">
                The Gladstone service mark guarantees an experience of satisfaction
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe in delivering excellence through innovation, reliability, and customer-focused solutions. Our commitment to quality and continuous improvement drives everything we do.
              </p>
            </div>
          </div>
        </section>

        {/* Objectives with Modern Design */}
        <section className="mb-0 bg-gradient-pattern relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-linear-to-r from-slate-900/95 to-blue-900/95"></div>
          <div className="relative px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Objectives</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg text-white/90">To ensure consistent delivery of solutions to our clients</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="text-lg text-white/90">To maintain strategic relationships with many of the leading technology vendors worldwide</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <p className="text-lg text-white/90">To provide real support and professional technical advice for business owners with practical solutions</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;