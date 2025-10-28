import serverImage from '../assets/server.jpg';

function ContractsProfile() {
  const contractsData = [
    { client: "Niger Insurance PLC", service: "Microsoft product and License Management." },
    { client: "Toyota Nigeria", service: "Intranet Solution (Development, Maintenance support) Windows 2000/Exchange 2000 Support Retainship" },
    { client: "Unicem - Calabar PLC", service: "Microsoft Products and License Management Services; Network Monitoring Solution." },
    { client: "West Africa Portland Cement Company – Lafarge", service: "Cyberoam; HP Hardware sizing Supply and Support." },
    { client: "NSL Lotteries Management Company Limited", service: "Microsoft Products and License Management Services" },
    { client: "National Petroleum Investment Management Services", service: "Microsoft Products and License Management Services; Electronic Document Management Solution; Symantec Security Solution." },
    { client: "MWEB Nigeria", service: "Microsoft Products and License Management Services; Anti-Virus Solution" },
    { client: "Aluko & Oyebode Solicitors", service: "Microsoft Products and License Management Services; Electronic Document Management Solution; Symantec Security Solution" },
    { client: "Ashaka Cement Company PLC", service: "Microsoft Products and License Management Services" }
  ];

  return (
    <div className="pt-20 bg-white">
      <section className="relative min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={serverImage} 
            alt="Contracts Profile" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-32 flex items-center min-h-[500px]">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-white">Contracts Profile</h1>
            <p className="text-lg text-gray-200 max-w-3xl">
              Our comprehensive service portfolio and client partnerships across various industries.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6">
            {contractsData.map((contract, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:shadow-lg hover:border-purple-200 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{contract.client}</h3>
                <p className="text-slate-600 leading-relaxed">{contract.service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContractsProfile;