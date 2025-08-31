import React, { useState } from 'react';
import { MapPin, Clock, Star, Phone, Globe, Navigation } from 'lucide-react';

interface CulturalLocation {
  id: string;
  name: string;
  type: string;
  description: string;
  address: string;
  phone: string;
  website: string;
  openHours: string;
  rating: number;
  image: string;
  mapUrl: string;
  highlights: string[];
}

interface Province {
  id: string;
  name: string;
  locations: CulturalLocation[];
}

const LokasiKebudayaan = () => {
  const [selectedProvince, setSelectedProvince] = useState<string>('jakarta');

  // Mock data untuk beberapa provinsi - nanti akan diperluas ke 38 provinsi
  const provinces: Province[] = [
    {
      id: 'jakarta',
      name: 'DKI Jakarta',
      locations: [
        {
          id: 'museum-nasional',
          name: 'Museum Nasional Indonesia',
          type: 'Museum',
          description: 'Museum terbesar dan terlengkap di Indonesia yang menyimpan koleksi arkeologi, sejarah, etnografi, dan geografi dari seluruh Nusantara.',
          address: 'Jl. Medan Merdeka Barat No.12, Gambir, Jakarta Pusat',
          phone: '(021) 3868172',
          website: 'https://www.museumnasional.or.id',
          openHours: 'Selasa-Minggu: 08.00-16.00 WIB',
          rating: 4.5,
          image: 'https://images.pexels.com/photos/8006030/pexels-photo-8006030.jpeg?auto=compress&cs=tinysrgb&w=600',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6486!2d106.8216!3d-6.1751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMuseum%20Nasional!5e0!3m2!1sen!2sid!4v1635123456789!5m2!1sen!2sid',
          highlights: ['Koleksi arca Buddha terbesar', 'Arca Ganesha dari abad ke-8', 'Prasasti Yupa tertua', 'Koleksi keramik China']
        },
        {
          id: 'museum-sejarah-jakarta',
          name: 'Museum Sejarah Jakarta',
          type: 'Museum',
          description: 'Museum yang menampilkan sejarah Jakarta dari masa prasejarah hingga kemerdekaan, berlokasi di bangunan bersejarah Balai Kota Batavia.',
          address: 'Jl. Taman Fatahillah No.1, Pinangsia, Tamansari, Jakarta Barat',
          phone: '(021) 6929101',
          website: 'https://www.jakarta.go.id/artikel/konten/233',
          openHours: 'Selasa-Minggu: 09.00-15.00 WIB',
          rating: 4.2,
          image: 'https://images.pexels.com/photos/7034655/pexels-photo-7034655.jpeg?auto=compress&cs=tinysrgb&w=600',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8234!2d106.8127!3d-6.1351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d67890!2sMuseum%20Fatahillah!5e0!3m2!1sen!2sid!4v1635123456789!5m2!1sen!2sid',
          highlights: ['Bangunan VOC bersejarah', 'Koleksi keramik Betawi', 'Diorama sejarah Jakarta', 'Peninggalan masa kolonial']
        }
      ]
    },
    {
      id: 'yogyakarta',
      name: 'DI Yogyakarta',
      locations: [
        {
          id: 'keraton-yogyakarta',
          name: 'Keraton Ngayogyakarta Hadiningrat',
          type: 'Istana',
          description: 'Istana resmi Kesultanan Ngayogyakarta yang masih dihuni oleh Sultan dan keluarganya, menjadi pusat budaya Jawa.',
          address: 'Jl. Rotowijayan Blok No. 1, Panembahan, Kraton, Yogyakarta',
          phone: '(0274) 373721',
          website: 'https://www.kratonjogja.id',
          openHours: 'Senin-Minggu: 09.00-14.00 WIB',
          rating: 4.8,
          image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=600',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.8234!2d110.3644!3d-7.8051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5787!2sKeraton%20Yogyakarta!5e0!3m2!1sen!2sid!4v1635123456789!5m2!1sen!2sid',
          highlights: ['Arsitektur Jawa klasik', 'Koleksi gamelan kuno', 'Pusaka Kesultanan', 'Pertunjukan budaya rutin']
        },
        {
          id: 'taman-sari',
          name: 'Taman Sari Yogyakarta',
          type: 'Situs Bersejarah',
          description: 'Kompleks taman dan kolam bekas tempat rekreasi Sultan, menampilkan arsitektur campuran Jawa-Eropa yang unik.',
          address: 'Jl. Taman, Kraton, Yogyakarta',
          phone: '(0274) 373721',
          website: 'https://www.kratonjogja.id/tamansari',
          openHours: 'Senin-Minggu: 09.00-15.00 WIB',
          rating: 4.3,
          image: 'https://images.pexels.com/photos/10498324/pexels-photo-10498324.jpeg?auto=compress&cs=tinysrgb&w=600',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.8567!2d110.3598!3d-7.8098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a578234!2sTaman%20Sari!5e0!3m2!1sen!2sid!4v1635123456789!5m2!1sen!2sid',
          highlights: ['Kolam pemandian Sultan', 'Terowongan bawah tanah', 'Sumur Gumuling', 'Menara air bersejarah']
        }
      ]
    },
    {
      id: 'bali',
      name: 'Bali',
      locations: [
        {
          id: 'museum-bali',
          name: 'Museum Negeri Propinsi Bali',
          type: 'Museum',
          description: 'Museum yang menampilkan koleksi seni dan budaya Bali dari masa prasejarah hingga modern, dengan arsitektur tradisional Bali.',
          address: 'Jl. Letnan Kolonel Wisnu No.1, Dangin Puri, Denpasar Timur, Bali',
          phone: '(0361) 222680',
          website: 'https://www.museumbali.com',
          openHours: 'Senin-Kamis: 07.30-15.30 WITA, Jumat: 07.30-13.00 WITA',
          rating: 4.1,
          image: 'https://images.pexels.com/photos/8837694/pexels-photo-8837694.jpeg?auto=compress&cs=tinysrgb&w=600',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.1234!2d115.2234!3d-8.6567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2409!2sMuseum%20Bali!5e0!3m2!1sen!2sid!4v1635123456789!5m2!1sen!2sid',
          highlights: ['Koleksi lukisan tradisional', 'Arca Hindu-Buddha', 'Tekstil dan pakaian adat', 'Peralatan upacara agama']
        }
      ]
    }
  ];

  const currentProvince = provinces.find(prov => prov.id === selectedProvince) || provinces[0];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Lokasi Kebudayaan Indonesia
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Jelajahi museum, situs bersejarah, dan pusat budaya di 38 provinsi Indonesia. 
            Temukan lokasi-lokasi yang menyimpan kekayaan warisan budaya Nusantara.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Province List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Pilih Provinsi</h3>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {provinces.map((province) => (
                  <button
                    key={province.id}
                    onClick={() => setSelectedProvince(province.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                      selectedProvince === province.id
                        ? 'bg-red-50 text-red-600 border-l-4 border-red-600'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <div className="font-semibold">{province.name}</div>
                    <div className="text-sm text-gray-500">{province.locations.length} lokasi</div>
                  </button>
                ))}
              </div>
              <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                <p className="text-xs text-yellow-800">
                  💡 Data provinsi lainnya akan segera ditambahkan
                </p>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Lokasi Budaya di {currentProvince.name}
              </h2>
              <p className="text-gray-600">
                {currentProvince.locations.length} lokasi kebudayaan ditemukan
              </p>
            </div>

            <div className="space-y-8">
              {currentProvince.locations.map((location) => (
                <div key={location.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="md:flex">
                    {/* Image */}
                    <div className="md:w-1/3">
                      <img
                        src={location.image}
                        alt={location.name}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                          {location.type}
                        </span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="text-sm text-gray-600">{location.rating}/5</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {location.name}
                      </h3>

                      <p className="text-gray-600 leading-relaxed mb-4">
                        {location.description}
                      </p>

                      {/* Highlights */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Koleksi Unggulan:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {location.highlights.map((highlight, index) => (
                            <div key={index} className="bg-green-50 text-green-700 px-2 py-1 rounded text-sm">
                              • {highlight}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Info */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-sm">
                        <div className="flex items-start">
                          <MapPin className="h-4 w-4 text-red-600 mr-2 mt-0.5" />
                          <div>
                            <p className="font-medium text-gray-900">Alamat</p>
                            <p className="text-gray-600">{location.address}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Clock className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                          <div>
                            <p className="font-medium text-gray-900">Jam Buka</p>
                            <p className="text-gray-600">{location.openHours}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Phone className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                          <div>
                            <p className="font-medium text-gray-900">Telepon</p>
                            <p className="text-gray-600">{location.phone}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Globe className="h-4 w-4 text-purple-600 mr-2 mt-0.5" />
                          <div>
                            <p className="font-medium text-gray-900">Website</p>
                            <a 
                              href={location.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-600 hover:text-purple-700 transition-colors duration-300"
                            >
                              Kunjungi Website
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href={location.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
                        >
                          <Navigation className="h-4 w-4 mr-2" />
                          Petunjuk Arah
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Map */}
                  <div className="h-64 w-full">
                    <iframe
                      src={location.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Peta ${location.name}`}
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
          <MapPin className="h-12 w-12 text-green-600 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Jelajahi Seluruh Indonesia
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Kami terus menambahkan lokasi-lokasi budaya dari seluruh Indonesia. 
            Temukan museum, situs bersejarah, dan pusat budaya di 38 provinsi.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">38</div>
              <div className="text-sm text-gray-600">Provinsi</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">200+</div>
              <div className="text-sm text-gray-600">Museum</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">150+</div>
              <div className="text-sm text-gray-600">Situs Bersejarah</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">100+</div>
              <div className="text-sm text-gray-600">Pusat Budaya</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LokasiKebudayaan;
