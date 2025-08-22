import React from 'react';

const Partnerships = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Cloud Partner'
    },
    {
      name: 'Google Cloud',
      logo: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Technology Partner'
    },
    {
      name: 'Amazon AWS',
      logo: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Infrastructure Partner'
    },
    {
      name: 'Meta',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Innovation Partner'
    },
    {
      name: 'NVIDIA',
      logo: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'AI Partner'
    },
    {
      name: 'IBM',
      logo: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Enterprise Partner'
    },
    {
      name: 'Oracle',
      logo: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Database Partner'
    },
    {
      name: 'Salesforce',
      logo: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'CRM Partner'
    },
    {
      name: 'Adobe',
      logo: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Creative Partner'
    },
    {
      name: 'Stripe',
      logo: 'https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Payment Partner'
    }
  ];

  // Duplicate the partners array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-transparent to-gray-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Trusted Partners
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We collaborate with industry leaders to deliver cutting-edge solutions
          </p>
        </div>

        {/* Partnership Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl mb-4 group-hover:from-yellow-500/30 group-hover:to-orange-500/30 transition-all duration-300">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-300 text-sm">Technology Partners</div>
          </div>
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl mb-4 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">15+</div>
            <div className="text-gray-300 text-sm">Cloud Providers</div>
          </div>
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl mb-4 group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all duration-300">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">25+</div>
            <div className="text-gray-300 text-sm">Enterprise Clients</div>
          </div>
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl mb-4 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-300 text-sm">Success Rate</div>
          </div>
        </div>

        {/* Scrolling Partners Section */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
          
          <div className="overflow-hidden">
            <div className="flex animate-scroll-left">
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 group"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 w-64">
                    <div className="relative overflow-hidden rounded-xl mb-4">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                      {partner.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{partner.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              Why Our Partnerships Matter
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl mb-4 group-hover:from-yellow-500/30 group-hover:to-orange-500/30 transition-all duration-300">
                  <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Cutting-Edge Technology</h4>
                <p className="text-gray-300 text-sm">Access to the latest tools and platforms from industry leaders</p>
              </div>
              <div className="group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl mb-4 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Enterprise Support</h4>
                <p className="text-gray-300 text-sm">Direct support channels and priority assistance from our partners</p>
              </div>
              <div className="group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl mb-4 group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all duration-300">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Cost Optimization</h4>
                <p className="text-gray-300 text-sm">Special pricing and licensing benefits passed on to our clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;