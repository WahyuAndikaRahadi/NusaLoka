import React from 'react';
import { Heart, Target, Eye, Users, Award, Globe, Linkedin, Github, Instagram } from 'lucide-react';
import GradientText from '../items/GradientText';
import { motion } from 'framer-motion';

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
      name: 'Basysyaar Al Yassaar Nuur Qodaar',
      role: 'Full Stack Developer',
      description: 'Saya Basysyaar Al Yassaar Nuur Qodaar, siswa SMK Negeri 69 Jakarta jurusan SIJA (Sistem Informasi Jaringan dan Aplikasi). Saya tertarik mengembangkan website yang tidak hanya berfungsi dengan baik, tetapi juga nyaman dipakai.',
      image: 'https://res.cloudinary.com/dr5pehdsw/image/upload/v1756946510/Gambar_WhatsApp_2025-08-19_pukul_22.20.08_abf3bcf0-removebg-preview_qsrrps.png',
      number: '01',
      social: [
        { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/basysyaar/', icon: Linkedin },
        { platform: 'GitHub', url: 'https://github.com/AlBasyaar', icon: Github },
        { platform: 'Instagram', url: 'https://www.instagram.com/basyar_anq/', icon: Instagram },
      ]
    },
    {
      name: 'Wahyu Andika Rahadi',
      role: 'Full Stack Developer',
      description: 'Saya Wahyu Andika Rahadi, siswa SMK Negeri 69 Jakarta jurusan SIJA (Sistem Informasi Jaringan dan Aplikasi). Saya fokus pada pembuatan website, mulai dari sistem hingga tampilan agar bermanfaat dan mudah digunakan.',
      image: 'https://res.cloudinary.com/dr5pehdsw/image/upload/v1756946510/wahyu_aja-removebg-preview_ozl2j6.png',
      number: '02',
      social: [
        { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/wahyuandikarahadi/', icon: Linkedin },
        { platform: 'GitHub', url: 'https://github.com/WahyuAndikaRahadi', icon: Github },
        { platform: 'Instagram', url: 'https://www.instagram.com/andika.rwahyu/', icon: Instagram },
      ]
    },
    {
      name: 'Muhammad Bintang',
      role: 'Front end Developer',
      description: 'Saya Muhammad Bintang, siswa SMK Negeri 69 Jakarta jurusan SIJA (Sistem Informasi Jaringan dan Aplikasi). Saya fokus pada pengembangan tampilan Website untuk menciptakan pengalaman pengguna yang menarik dan mudah digunakan.',
      image: 'https://res.cloudinary.com/dr5pehdsw/image/upload/v1756946510/bintang_aja-removebg-preview_zkbnjt.png',
      number: '03',
      social: [
        { platform: 'LinkedIn', url: 'https://linkedin.com/in/muhammad-bintang-a38558382', icon: Linkedin },
        { platform: 'GitHub', url: 'https://github.com/Ktune-kpop', icon: Github },
        { platform: 'Instagram', url: 'https://www.instagram.com/bintanggg_20/', icon: Instagram },
      ]
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
           <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
            <GradientText
              colors={["#eab308", "#dc2626 ", "#7f1d1d "]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class mb-100 leading-normal"
            >
              Tentang NusaLoka
            </GradientText>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            NusaLoka lahir dari kepedulian mendalam terhadap pelestarian budaya Indonesia di era digital.
            Kami percaya bahwa teknologi dapat menjadi jembatan yang menghubungkan generasi muda dengan
            kekayaan warisan budaya Nusantara.
          </motion.p>
        </motion.div>

        {/* Vision & Mission */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-red-50 rounded-xl p-8"
          >
            <div className="flex items-center mb-6">
              <Eye className="h-8 w-8 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Visi</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Menjadi platform digital terdepan yang melestarikan dan mempromosikan budaya Indonesia,
              menginspirasi generasi muda untuk mencintai dan menjaga warisan leluhur, serta memperkenalkan
              kekayaan Nusantara kepada dunia.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-green-50 rounded-xl p-8"
          >
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
          </motion.div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nilai-Nilai Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tim Kami</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Didedikasikan untuk melestarikan budaya Indonesia melalui teknologi dan inovasi
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 1 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2"
              >
                {/* Background Design */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-400 to-orange-400">
                  {/* Animated floating shapes */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-8 left-8 w-16 h-16 bg-white rounded-full animate-pulse"></div>
                    <div className="absolute top-12 right-12 w-8 h-8 bg-white rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-20 left-12 w-12 h-12 bg-white rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-8 right-8 w-6 h-6 bg-white rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
                  </div>

                  {/* Decorative pattern */}
                  <div className="absolute inset-0">
                    <svg viewBox="0 0 200 400" className="w-full h-full opacity-10">
                      <defs>
                        <pattern id={`pattern-${index}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                          <circle cx="20" cy="20" r="2" fill="white" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#pattern-${index})`} />
                    </svg>
                  </div>

                  {/* Number badge with improved design */}
                  <div className="absolute top-6 left-6 bg-white bg-opacity-20 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center">
                    <span className="text-2xl font-black text-white">
                      {member.number}
                    </span>
                  </div>

                  {/* Brand mark */}
                  <div className="absolute top-6 right-6 text-white font-bold text-sm opacity-30 bg-white bg-opacity-10 rounded-lg px-3 py-1 backdrop-blur-sm">
                    NusaLoka
                  </div>
                </div>

                {/* Main content with improved spacing */}
                <div className="relative z-10 px-8 py-10 h-full flex flex-col">
                  {/* Profile Image with enhanced styling */}
                  <div className="mb-8 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-400 rounded-full blur-lg opacity-30 scale-110 animate-pulse"></div>
                      <div className="relative w-36 h-36 rounded-full bg-white p-1.5 shadow-2xl ring-4 ring-white ring-opacity-50">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      {/* Decorative ring */}
                      <div className="absolute inset-0 rounded-full ring-2 ring-red-300 ring-opacity-40 scale-110 animate-ping"></div>
                    </div>
                  </div>

                  {/* Member Info with improved typography */}
                  <div className="text-center flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-800 transition-colors duration-200">
                      {member.name}
                    </h3>
                    <div className="inline-block bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold px-4 py-2 rounded-full text-sm mb-5 shadow-lg">
                      {member.role}
                    </div>
                    <p className="text-gray-800 text-sm leading-relaxed mb-6 px-2">
                      {member.description}
                    </p>
                  </div>

                  {/* Enhanced Social Links */}
                  <div className="flex justify-center space-x-3 mt-auto">
                    {member.social.map((social, socialIndex) => (
                      <a
                        key={socialIndex}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white p-3 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-110 group/social"
                        aria-label={social.platform}
                      >
                        <social.icon className="h-5 w-5 group-hover/social:scale-110 transition-transform duration-200" />
                        <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-0 group-hover/social:opacity-10 rounded-2xl transition-opacity duration-300"></div>
                      </a>
                    ))}
                  </div>

                  {/* Decorative bottom element */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-orange-400 to-red-500 opacity-60"></div>
                </div>

                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-yellow-50 to-red-50 rounded-2xl p-8 md:p-12"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Users className="h-12 w-12 text-yellow-600 mx-auto mb-6" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-6"
            >
              Cerita Kami
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 leading-relaxed mb-8"
            >
              NusaLoka dimulai dari keprihatinan melihat generasi muda yang semakin terputus dari akar budayanya.
              Dengan memanfaatkan kekuatan teknologi dan kecerdasan buatan, kami menciptakan pengalaman yang
              menyenangkan dan mudah diakses untuk mempelajari budaya Indonesia.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              Setiap fitur dirancang dengan cermat untuk memastikan informasi budaya yang akurat,
              autentik, dan mudah dipahami. Kami berkolaborasi dengan ahli budaya, seniman, dan
              komunitas lokal untuk memastikan kualitas konten yang terbaik.
            </motion.p>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Tentang;