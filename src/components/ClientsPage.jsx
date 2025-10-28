import Clients from './Clients';
import aboutImage1 from '../assets/aboutus1.jpg';

export default function ClientsPage() {
  return (
    <div className="pt-20 bg-white">
      <section className="relative min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={aboutImage1} 
            alt="Our Clients" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-32 flex items-center min-h-[500px]">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-white">Our Clients</h1>
            <p className="text-lg text-gray-200 max-w-3xl">
              We are proud to serve some of Nigeria's most prestigious organizations across various industries,
              delivering excellence in IT solutions and services.
            </p>
          </div>
        </div>
      </section>
      
      <Clients />
    </div>
  );
}