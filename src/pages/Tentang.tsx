import React from 'react';
import { Heart, Target, Eye, Users, Award, Globe } from 'lucide-react';

const Tentang = () => {
  const values = [
    {
      icon: Heart,
      title: 'Pelestarian',
      description: 'Menjaga warisan budaya Indonesia untuk generasi mendatang'
    },
    {
      icon: Globe,
      title: 'Inklusivitas',
      description: 'Menghubungkan semua kalangan dengan budaya Nusantara'
    },
    {
      icon: Award,
      title: 'Inovasi',
      description: 'Menggunakan teknologi terdepan untuk edukasi budaya'
    }
  ];

  const team = [
    {
      name: 'Dr. Sari Widiastuti',
      role: 'Cultural Director',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Ahmad Fauzi',
      role: 'Technology Lead',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Maya Kusuma',
      role: 'Content Curator',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tentang <span className="text-red-600">NusaLoka</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            NusaLoka lahir dari kepedulian mendalam terhadap pelestarian budaya Indonesia di era digital. 
            Kami percaya bahwa teknologi dapat menjadi jembatan yang menghubungkan generasi muda dengan 
            kekayaan warisan budaya Nusantara.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-red-50 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <Eye className="h-8 w-8 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Visi</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Menjadi platform digital terdepan yang melestarikan dan mempromosikan budaya Indonesia, 
              menginspirasi generasi muda untuk mencintai dan menjaga warisan leluhur, serta memperkenalkan 
              kekayaan Nusantara kepada dunia.
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Misi</h2>
            </div>
            <ul className="text-gray-700 leading-relaxed text-lg space-y-3">
              <li>• Mendokumentasikan budaya Indonesia secara digital</li>
              <li>• Menyediakan edukasi budaya yang interaktif dan menyenangkan</li>
              <li>• Menggunakan AI untuk memberikan pengalaman pembelajaran yang personal</li>
              <li>• Membangun komunitas pelestari budaya</li>
            </ul>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nilai-Nilai Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tim Kami</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Didedikasikan untuk melestarikan budaya Indonesia melalui teknologi dan inovasi
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-red-600 font-semibold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-gradient-to-r from-yellow-50 to-red-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="h-12 w-12 text-yellow-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cerita Kami</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              NusaLoka dimulai dari keprihatinan melihat generasi muda yang semakin terputus dari akar budayanya. 
              Dengan memanfaatkan kekuatan teknologi dan kecerdasan buatan, kami menciptakan pengalaman yang 
              menyenangkan dan mudah diakses untuk mempelajari budaya Indonesia.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Setiap fitur dirancang dengan cermat untuk memastikan informasi budaya yang akurat, 
              autentik, dan mudah dipahami. Kami berkolaborasi dengan ahli budaya, seniman, dan 
              komunitas lokal untuk memastikan kualitas konten yang terbaik.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tentang;