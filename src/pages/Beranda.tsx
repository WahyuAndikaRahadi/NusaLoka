import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, BookOpen, Sparkles, ArrowRight, Heart, Globe, Camera } from 'lucide-react';
import CountUp from '../items/CountUp';
import GradientText from '../items/GradientText';
import { motion } from 'framer-motion';
import SplitText from "../items/SplitText";

const Beranda = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Direktori Budaya',
      description: 'Jelajahi pakaian adat, seni pertunjukan, dan kuliner khas dari seluruh Nusantara',
      href: '/direktori-budaya',
      color: 'bg-red-50 text-red-600'
    },
    {
      icon: Sparkles,
      title: 'Assisten AI',
      description: 'Berinteraksi dengan AI untuk bertanya tentang budaya dan mendapat rekomendasi',
      href: '/assisten-ai',
      color: 'bg-yellow-50 text-yellow-600'
    },
    {
      icon: Globe,
      title: 'Bahasa Daerah',
      description: 'Pelajari bahasa-bahasa daerah dengan tutorial interaktif dan video pembelajaran',
      href: '/bahasa-daerah',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: MapPin,
      title: 'Lokasi Kebudayaan',
      description: 'Temukan museum dan situs budaya di 38 provinsi Indonesia',
      href: '/lokasi-kebudayaan',
      color: 'bg-blue-50 text-blue-600'
    }
  ];

  const stats = [
    { number: 38, label: 'Provinsi' },
    { number: 45, label: 'Bahasa Daerah' },
    { number: 190, label: 'Lokasi Kebudayaan' },
    { number: 113, label: 'Direktori Budaya' }
  ];

  const handleAnimationComplete = () => {
    console.log('Semua teks banner telah selesai dianimasikan!');
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white"
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <SplitText
                text="Selamat Datang di NusaLoka"
                className="leading-tight text-4xl md:text-6xl font-bold pb-2 "
                delay={100} // Mulai animasi setelah 0.3 detik
                duration={1}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                textAlign="center"
              />
              {/* Slogan dengan SplitText */}
              <SplitText
                text="Menghubungkan Tradisi dengan Inovasi"
                className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto leading-normal"
                delay={50} // Mulai setelah judul
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0 }}
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }} // Tambahkan delay agar muncul setelah teks utama
              className="text-lg text-red-100 max-w-2xl mx-auto leading-relaxed"
            >
              Platform digital yang menghubungkan warisan budaya Indonesia dengan dunia modern,
              menciptakan jembatan antara tradisi dan teknologi untuk generasi masa depan.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }} // Tambahkan delay untuk tombol
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/direktori-budaya"
                className="bg-yellow-500 hover:bg-yellow-400 text-red-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
              >
                Jelajahi Budaya
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/assisten-ai"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Tanya AI Budaya
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <GradientText
                    colors={["#eab308", "#dc2626 ", "#7f1d1d "]}
                    animationSpeed={3}
                    showBorder={false}
                    className="custom-class"
                  >
                    <CountUp
                      from={0}
                      to={stat.number}
                      separator=","
                      direction="up"
                      duration={2}
                      className="count-up-text"
                    />
                  </GradientText>
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Jelajahi Kekayaan Budaya Indonesia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Temukan, pelajari, dan lestarikan warisan budaya Nusantara melalui platform digital yang interaktif dan mudah digunakan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={feature.href}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  <div className="p-8">
                    <div className={`inline-flex p-3 rounded-lg ${feature.color} mb-4`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <div className="flex items-center text-red-600 font-semibold group-hover:text-red-700">
                      Pelajari Lebih Lanjut
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <Heart className="h-16 w-16 text-green-200" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Misi Kami
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed"
            >
              Menghubungkan warisan budaya Indonesia dengan teknologi modern, menciptakan ruang interaktif
              yang memungkinkan generasi muda untuk mengenal, memahami, dan melestarikan kekayaan budaya
              Nusantara untuk masa depan yang berkelanjutan.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            >
              <Link
                to="/tentang"
                className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Pelajari Lebih Lanjut
              </Link>
              <Link
                to="/blog"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Baca Blog Kami
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-yellow-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Camera className="h-12 w-12 text-yellow-600 mx-auto mb-6" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Mulai Perjalanan Budaya Anda
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 mb-8 leading-relaxed"
          >
            Bergabunglah dengan ribuan orang yang telah menjelajahi kekayaan budaya Indonesia
            melalui NusaLoka. Temukan cerita-cerita menarik di balik setiap tradisi.
          </motion.p>
          <Link
            to="/direktori-budaya"
            className="inline-flex items-center bg-yellow-500 hover:bg-yellow-400 text-yellow-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Mulai Jelajahi
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Beranda;