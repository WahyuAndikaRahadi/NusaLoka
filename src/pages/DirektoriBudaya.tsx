import React, { useState } from 'react';
import { Search, MapPin, Clock, Users } from 'lucide-react';

const DirektoriBudaya = () => {
  const [activeTab, setActiveTab] = useState('pakaian-adat');
  const [searchTerm, setSearchTerm] = useState('');

  const tabs = [
    { id: 'pakaian-adat', label: 'Pakaian Adat' },
    { id: 'seni-pertunjukan', label: 'Seni Pertunjukan' },
    { id: 'kuliner', label: 'Kuliner Khas' }
  ];

  const pakaianAdat = [
    {
      name: 'Kebaya Jawa',
      province: 'Jawa Tengah',
      image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Pakaian tradisional yang melambangkan keanggunan dan kesopanan wanita Jawa',
      philosophy: 'Melambangkan kehalusan budi pekerti dan kesederhanaan'
    },
    {
      name: 'Ulos Batak',
      province: 'Sumatera Utara',
      image: 'https://images.pexels.com/photos/9343860/pexels-photo-9343860.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Kain tenun tradisional yang memiliki makna spiritual dan sosial dalam budaya Batak',
      philosophy: 'Simbol kehangatan, perlindungan, dan berkah'
    },
    {
      name: 'Pakaian Adat Bali',
      province: 'Bali',
      image: 'https://images.pexels.com/photos/8837694/pexels-photo-8837694.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Pakaian ceremonial yang digunakan dalam upacara keagamaan Hindu di Bali',
      philosophy: 'Menunjukkan penghormatan kepada Tuhan dan alam semesta'
    }
  ];

  const seniPertunjukan = [
    {
      name: 'Tari Kecak',
      province: 'Bali',
      image: 'https://images.pexels.com/photos/10498324/pexels-photo-10498324.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Tarian dramatis yang menggambarkan cerita Ramayana dengan gerakan yang dinamis',
      origin: 'Dikembangkan pada tahun 1930-an dari tradisi Sanghyang'
    },
    {
      name: 'Wayang Kulit',
      province: 'Jawa Tengah',
      image: 'https://images.pexels.com/photos/8006030/pexels-photo-8006030.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Seni pertunjukan bayangan yang menceritakan epik Mahabharata dan Ramayana',
      origin: 'Telah ada sejak abad ke-9, diakui UNESCO sebagai warisan dunia'
    },
    {
      name: 'Saman Dance',
      province: 'Aceh',
      image: 'https://images.pexels.com/photos/8837689/pexels-photo-8837689.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Tarian cepat yang membutuhkan koordinasi tinggi antar penari',
      origin: 'Diciptakan oleh Syekh Saman untuk menyebarkan ajaran Islam'
    }
  ];

  const kuliner = [
    {
      name: 'Rendang',
      province: 'Sumatera Barat',
      image: 'https://images.pexels.com/photos/4725990/pexels-photo-4725990.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Masakan daging yang dimasak dengan santan dan rempah-rempah hingga kering',
      ingredients: 'Daging sapi, santan, cabai, serai, daun jeruk',
      cookingTime: '4-6 jam'
    },
    {
      name: 'Gudeg',
      province: 'Yogyakarta',
      image: 'https://images.pexels.com/photos/9609838/pexels-photo-9609838.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Masakan manis dari nangka muda yang dimasak dengan santan dan gula kelapa',
      ingredients: 'Nangka muda, santan, gula kelapa, daun salam, lengkuas',
      cookingTime: '6-8 jam'
    },
    {
      name: 'Papeda',
      province: 'Papua',
      image: 'https://images.pexels.com/photos/6544376/pexels-photo-6544376.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Makanan pokok yang terbuat dari tepung sagu dengan tekstur kenyal',
      ingredients: 'Tepung sagu, air, garam',
      cookingTime: '30 menit'
    }
  ];

  const getCurrentData = () => {
    switch (activeTab) {
      case 'pakaian-adat': return pakaianAdat;
      case 'seni-pertunjukan': return seniPertunjukan;
      case 'kuliner': return kuliner;
      default: return pakaianAdat;
    }
  };

  const filteredData = getCurrentData().filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.province.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Direktori Budaya Indonesia
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Jelajahi kekayaan budaya Nusantara dari Sabang sampai Merauke. 
            Temukan pakaian adat, seni pertunjukan, dan kuliner khas dari berbagai daerah.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Cari budaya berdasarkan nama atau daerah..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg"
          />
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-xl p-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-white text-red-600 shadow-md'
                    : 'text-gray-600 hover:text-red-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <MapPin className="h-4 w-4 text-red-600 mr-2" />
                  <span className="text-red-600 font-semibold text-sm">{item.province}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                
                {activeTab === 'pakaian-adat' && (
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p className="text-sm text-yellow-800 font-medium">Filosofi:</p>
                    <p className="text-sm text-yellow-700">{item.philosophy}</p>
                  </div>
                )}

                {activeTab === 'seni-pertunjukan' && (
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800 font-medium">Asal-usul:</p>
                    <p className="text-sm text-green-700">{item.origin}</p>
                  </div>
                )}

                {activeTab === 'kuliner' && (
                  <div className="space-y-2">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm text-blue-800 font-medium">Bahan Utama:</p>
                      <p className="text-sm text-blue-700">{item.ingredients}</p>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>Waktu Masak: {item.cookingTime}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Tidak ditemukan hasil untuk "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DirektoriBudaya;