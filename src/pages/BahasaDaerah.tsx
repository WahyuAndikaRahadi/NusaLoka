import React, { useState } from 'react';
import { Play, Volume2, BookOpen, Users, MapPin, ExternalLink } from 'lucide-react';

interface Language {
  id: string;
  name: string;
  province: string;
  speakers: string;
  characteristics: string[];
  phrases: { id: string; indonesian: string; local: string; pronunciation: string }[];
  videoUrl: string;
  image: string;
  description: string;
}

const BahasaDaerah = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('javanese');

  const languages: Language[] = [
    {
      id: 'javanese',
      name: 'Bahasa Jawa',
      province: 'Jawa Tengah, Jawa Timur, DIY',
      speakers: '75 juta',
      characteristics: [
        'Memiliki tingkatan bahasa (ngoko, madya, krama)',
        'Kaya akan ungkapan filosofis',
        'Pengaruh kuat dari aksara Jawa',
        'Sistem honorifik yang kompleks'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Sugeng enjing', pronunciation: 'su-geng en-jing' },
        { id: '2', indonesian: 'Terima kasih', local: 'Matur nuwun', pronunciation: 'ma-tur nu-wun' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Pripun kabare?', pronunciation: 'pri-pun ka-ba-re' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sugeng tindak', pronunciation: 'su-geng tin-dak' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/9343860/pexels-photo-9343860.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Jawa adalah salah satu bahasa daerah dengan jumlah penutur terbanyak di Indonesia. Memiliki sistem tingkatan bahasa yang mencerminkan struktur sosial masyarakat Jawa.'
    },
    {
      id: 'sundanese',
      name: 'Bahasa Sunda',
      province: 'Jawa Barat',
      speakers: '40 juta',
      characteristics: [
        'Intonasi yang melodis dan lembut',
        'Banyak kosakata yang halus',
        'Pengaruh bahasa Sanskerta',
        'Sistem tingkatan yang sederhana'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Wilujeng enjing', pronunciation: 'wi-lu-jeng en-jing' },
        { id: '2', indonesian: 'Terima kasih', local: 'Hatur nuhun', pronunciation: 'ha-tur nu-hun' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Kumaha damang?', pronunciation: 'ku-ma-ha da-mang' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Dugi ka tepang deui', pronunciation: 'du-gi ka te-pang de-ui' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Sunda dikenal dengan kelembutan intonasi dan kehalusannya. Banyak digunakan di Jawa Barat dan memiliki tradisi sastra yang kaya.'
    },
    {
      id: 'balinese',
      name: 'Bahasa Bali',
      province: 'Bali',
      speakers: '3.3 juta',
      characteristics: [
        'Aksara Bali yang unik',
        'Pengaruh kuat bahasa Sanskerta',
        'Tingkatan bahasa yang kompleks',
        'Kaya akan istilah keagamaan Hindu'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Rahajeng semeng', pronunciation: 'ra-ha-jeng se-meng' },
        { id: '2', indonesian: 'Terima kasih', local: 'Suksma', pronunciation: 'suk-sma' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Kenken kabare?', pronunciation: 'ken-ken ka-ba-re' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Titiang lunga', pronunciation: 'ti-ti-ang lu-nga' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/8837694/pexels-photo-8837694.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Bali memiliki aksara dan tingkatan bahasa yang sangat kompleks, mencerminkan sistem kasta dan tradisi Hindu-Dharma yang kental.'
    }
  ];

  const currentLanguage = languages.find(lang => lang.id === selectedLanguage) || languages[0];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Bahasa Daerah Indonesia
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pelajari kekayaan bahasa daerah Indonesia dengan tutorial interaktif dan video pembelajaran. 
            Lestarikan bahasa leluhur untuk generasi mendatang.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Language List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Pilih Bahasa</h3>
              <div className="space-y-2">
                {languages.map((language) => (
                  <button
                    key={language.id}
                    onClick={() => setSelectedLanguage(language.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                      selectedLanguage === language.id
                        ? 'bg-red-50 text-red-600 border-l-4 border-red-600'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <div className="font-semibold">{language.name}</div>
                    <div className="text-sm text-gray-500">{language.province}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Language Detail */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Language Header */}
              <div className="relative">
                <img
                  src={currentLanguage.image}
                  alt={currentLanguage.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                  <div className="p-6 text-white">
                    <h2 className="text-2xl font-bold mb-2">{currentLanguage.name}</h2>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {currentLanguage.province}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {currentLanguage.speakers} penutur
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {currentLanguage.description}
                </p>

                {/* Characteristics */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                    Ciri-ciri Bahasa
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentLanguage.characteristics.map((char, index) => (
                      <div key={index} className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-blue-800 text-sm">{char}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Common Phrases */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Volume2 className="h-5 w-5 text-green-600 mr-2" />
                    Frasa Penting
                  </h3>
                  <div className="space-y-4">
                    {currentLanguage.phrases.map((phrase) => (
                      <div key={phrase.id} className="bg-gray-50 rounded-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Bahasa Indonesia</p>
                            <p className="font-semibold text-gray-900">{phrase.indonesian}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Bahasa Daerah</p>
                            <p className="font-semibold text-red-600">{phrase.local}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Cara Baca</p>
                            <p className="font-medium text-gray-700">[{phrase.pronunciation}]</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Video Tutorial */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Play className="h-5 w-5 text-red-600 mr-2" />
                    Tutorial Video
                  </h3>
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <iframe
                      src={currentLanguage.videoUrl}
                      title={`Tutorial ${currentLanguage.name}`}
                      className="w-full h-full"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="mt-3 flex justify-center">
                    <a
                      href={currentLanguage.videoUrl.replace('/embed/', '/watch?v=')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
                    >
                      Tonton di YouTube
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kekayaan Bahasa Indonesia</h2>
            <p className="text-gray-600">Indonesia memiliki keberagaman bahasa yang luar biasa</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">700+</div>
              <div className="text-gray-600">Bahasa Daerah</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">38</div>
              <div className="text-gray-600">Provinsi</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">300+</div>
              <div className="text-gray-600">Suku Bangsa</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">17,500+</div>
              <div className="text-gray-600">Pulau</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BahasaDaerah;