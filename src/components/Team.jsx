import aboutImage1 from '../assets/aboutus1.jpg';

function Team() {
  const teamMembers = [
    {
      name: "Akinola Ojelade",
      position: "Chief Executive Officer",
      description: "Akinola is an astute business man and founder of Gladstone Technologies Limited. He holds a B.Sc degree in Physics and he is a member of Information Systems Audit and Control Association (ISACA)."
    },
    {
      name: "Yusuf Ayantola",
      position: "Technical Consultant",
      description: "Yusuf is a tech savvy. He has a degree in Computer Science from the Lagos State University (LASU) and has obtained several certifications from Symantec, Ipswitch, Panda and Cisco."
    },
    {
      name: "Bamidele Bello",
      position: "Accountant/Admin",
      description: "Bamidele is a highly experienced, commercial astute and finance personnel. He holds a degree in Accounting from Olabisi Onabanjo University, Ogun State. He is an Associate Chartered Accountant."
    },
    {
      name: "Olusola Akinlolu",
      position: "System Security and Administrator",
      description: "Olusola is a self-driven and highly skilled IT professional. He is a graduate of Ekiti State University and he bags several certifications in System Security with Cisco and Microsoft."
    },
    {
      name: "Enitan Olukotun",
      position: "Sales Executive",
      description: "She is a lady who stands for excellence and precision at all times. She has a degree in Microbiology from Ekiti State University. She has many years of working experience in sales management."
    },
    {
      name: "Oladipupo Falola",
      position: "Business Development Executive",
      description: "He is a dogged Sales/Business Professional with a good I.T background. He holds a B.Tech in Computer Engineering from Ladoke Akintola University and various certifications as a sales expert with Symantec, Ipswitch and Google Business."
    },
    {
      name: "Mustapha Usman",
      position: "HP Technical Support Expert",
      description: "Usman is a proficient and astute IT support expert. Certified by HP, he is a Graduate of Computer Science and has an M.Sc in Information Technology."
    }
  ];

  return (
    <div className="pt-20 bg-white">
      <section className="relative min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={aboutImage1} 
            alt="Corporate Team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-32 flex items-center min-h-[500px]">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-white">Corporate Team</h1>
            <p className="text-lg text-gray-200 max-w-3xl">
              Meet our dedicated team of professionals who drive innovation and excellence in everything we do.
            </p>
          </div>
        </div>
      </section>
      
      {/* Organogram Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Organizational Structure</h2>
            <div className="w-24 h-1 bg-linear-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="flex flex-col items-center space-y-8">
            {/* CEO Level */}
            <div className="bg-purple-600 text-white px-6 py-4 rounded-lg font-semibold text-center">
              Chief Executive Officer
            </div>
            
            {/* MD Level */}
            <div className="bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold text-center">
              Managing Director
            </div>
            
            {/* Department Level */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-4xl">
              <div className="bg-slate-700 text-white px-4 py-3 rounded-lg text-center font-medium">
                Account Department
              </div>
              <div className="bg-slate-700 text-white px-4 py-3 rounded-lg text-center font-medium">
                Technical Team
              </div>
              <div className="bg-slate-700 text-white px-4 py-3 rounded-lg text-center font-medium">
                Business Development Unit
              </div>
            </div>
            
            {/* Support Level */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-5xl">
              <div className="bg-gray-600 text-white px-3 py-2 rounded text-center text-sm">
                Office Assistant
              </div>
              <div className="bg-gray-600 text-white px-3 py-2 rounded text-center text-sm">
                System Engineers
              </div>
              <div className="bg-gray-600 text-white px-3 py-2 rounded text-center text-sm">
                Drivers/Dispatch
              </div>
              <div className="bg-gray-600 text-white px-3 py-2 rounded text-center text-sm">
                Computer Operators
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technical Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Technical Resources</h2>
            <div className="w-24 h-1 bg-linear-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-slate-800">Total Full Time Personnel Strength</h3>
                <span className="text-xl font-bold text-slate-800">10</span>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-slate-800">IT Certified Professionals</h3>
                <span className="text-xl font-bold text-slate-800">8</span>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-6">Certifications</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">Microsoft Certified Data Base Administrator</span>
                  <span className="font-bold text-slate-800">1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">Microsoft Certified Professional</span>
                  <span className="font-bold text-slate-800">5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">Cisco Certified Professional</span>
                  <span className="font-bold text-slate-800">2</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">Symantec Technical Expert</span>
                  <span className="font-bold text-slate-800">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">Ipswitch WhatsUp Gold Technical Experts</span>
                  <span className="font-bold text-slate-800">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">HP Technical Experts</span>
                  <span className="font-bold text-slate-800">2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Members Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Meet Our Team</h2>
            <div className="w-24 h-1 bg-linear-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:shadow-lg hover:border-purple-200 transition-all duration-300"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{member.name}</h3>
                  <h4 className="inline-block text-sm font-semibold text-white bg-slate-700 px-3 py-1 rounded-full mb-4">{member.position}</h4>
                </div>
                <p className="text-slate-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;