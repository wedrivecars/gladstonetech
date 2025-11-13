import OilAndGas from '../assets/oilandgas.jpg';
import BankingAndFinance from '../assets/banking.jpg';
import manufacturing from '../assets/manufacturing.jpg';
import technology from '../assets/technology.jpg';
import logistics from '../assets/logistics.jpg';
import other from '../assets/others.jpg';


function Clients() {
  const clientCategories = [
    {
      category: "Oil & Gas",
      image: OilAndGas,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      clients: [
        "Nigerian National Petroleum Corporation",
        "Addax Petroleum Development Nigeria Limited",
        "First Hydrocarbon Nigeria",
        "First Exploration Nigeria",
        "First Exploration and Petroleum Nigeria",
        "Afren Nigeria",
        "MRS Oil Nigeria",
        "Saipem",
        "Seplat Petroleum Development Company",
        "ANTAN Producing Limited",
        "Oando Energy Resources",
        "Energia Limited"
      ]
    },
    {
      category: "Banking & Finance",
      image: BankingAndFinance,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      clients: [
        "Guaranty Trust Bank",
        "United Bank of Africa",
        "Niger Insurance PLC",
        "National Petroleum Investment Management Services"
      ]
    },
    {
      category: "Manufacturing & Industrial",
      image: manufacturing,
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50",
      clients: [
        "Lafarge Africa PLC",
        "Nigeria Bottling Company PLC (Coca-Cola)",
        "Notore Chemicals Industry Limited",
        "Enikkom Construction Limited",
        "Dangote Cement",
        "Ikeja Electric Development Company"
      ]
    },
    {
      category: "Technology & Telecommunications",
      image: technology,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      clients: [
        "Computer Warehouse Group PLC",
        "MWEB Nigeria",
        "Multichoice Nigeria"
      ]
    },
    {
      category: "Logistics & Transportation",
      image: logistics,
      color: "from-teal-500 to-cyan-500",
      bgColor: "from-teal-50 to-cyan-50",
      clients: [
        "DHL Nigeria",
        "Toyota Nigeria"
      ]
    },
    {
      category: "Other Enterprises",
      image: other,
      color: "from-gray-500 to-slate-500",
      bgColor: "from-gray-50 to-slate-50",
      clients: [
        "NSL Lotteries Management Company Limited",
        "Falkprime Atlantic Nigeria",
        "Falcon Corporation Limited"
      ]
    }
  ];

  return (
    <section className="py-20 bg-linear-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Our Valued Clients
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We are proud to serve some of Nigeria's most prestigious organizations across various industries,
            delivering excellence in IT solutions and services.
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-purple-600 to-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {clientCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div
                key={categoryIndex}
                className={`bg-linear-to-br ${category.bgColor} p-8 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group`}
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 border-white shadow-md">
                    <img 
                      src={category.image} 
                      alt={category.category} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-slate-800">{category.category}</h3>
                  </div>
                </div>

                {/* Clients List */}
                <div className="space-y-3">
                  {category.clients.map((client, clientIndex) => (
                    <div
                      key={clientIndex}
                      className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-white/80 hover:bg-white hover:shadow-md transition-all duration-200 group/item"
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-2 h-2 bg-linear-to-r ${category.color} rounded-full mt-2 group-hover/item:scale-125 transition-transform`}></div>
                        <p className="text-slate-700 font-medium text-sm leading-relaxed flex-1">
                          {client}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-linear-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-3xl font-bold mb-2">{clientCategories.reduce((total, cat) => total + cat.clients.length, 0)}+</h4>
              <p className="text-purple-100">Satisfied Clients</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold mb-2">{clientCategories.length}</h4>
              <p className="text-purple-100">Industry Sectors</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold mb-2">10+</h4>
              <p className="text-purple-100">Years of Excellence</p>
            </div>
          </div>
          <p className="text-lg text-purple-100 mt-6">
            Join our growing list of satisfied clients and experience the difference.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Clients;