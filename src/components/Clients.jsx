function Clients() {
  const clients = [
    "Nigerian National Petroleum Corporation",
    "West Africa Portland Cement Company (Lafarge)",
    "National Petroleum Investment Management Services",
    "Guarantee Trust Bank",
    "Nigeria Bottling Company PLC (Coca-Cola)",
    "Addax Petroleum Development Nigeria Limited",
    "Notore Chemicals Industry Limited",
    "First Hydrocarbon Nigeria",
    "First Exploration Nigeria",
    "First Exploration and Petroleum Nigeria",
    "NSL Lotteries Management Company Limited",
    "Computer Warehouse Group PLC",
    "Falkprime Atlantic Nigeria",
    "Ashaka Cement Company PLC (Lafarge)",
    "MWEB Nigeria",
    "Falcon Corporation Limited",
    "Niger Insurance PLC",
    "Multichoice Nigeria",
    "Afren Nigeria",
    "DHL Nigeria",
    "Toyota Nigeria",
    "MRS Oil Nigeria",
    "Saipem",
    "United Bank of Africa"
  ];

  return (
    <section className="py-20 bg-white">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:shadow-lg hover:border-purple-200 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-linear-to-r from-purple-600 to-blue-600 rounded-full group-hover:scale-110 transition-transform"></div>
                <h3 className="text-slate-800 font-medium text-sm leading-relaxed">
                  {client}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-600 text-lg">
            Join our growing list of satisfied clients and experience the difference.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Clients;