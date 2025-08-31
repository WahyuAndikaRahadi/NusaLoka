import React from 'react';
import { MapPin, Mail, Phone, Instagram, Youtube, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="h-8 w-8 text-red-400" />
              <div>
                <h3 className="text-xl font-bold">NusaLoka</h3>
                <p className="text-sm text-gray-400">Melestarikan Budaya Digital</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Platform digital yang didedikasikan untuk melestarikan dan mempromosikan 
              kekayaan budaya Indonesia melalui inovasi digital.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navigasi</h4>
            <div className="grid grid-cols-2 gap-2">
              <a href="/tentang" className="text-gray-300 hover:text-red-400 transition-colors duration-300">Tentang</a>
              <a href="/direktori-budaya" className="text-gray-300 hover:text-red-400 transition-colors duration-300">Direktori Budaya</a>
              <a href="/assisten-ai" className="text-gray-300 hover:text-red-400 transition-colors duration-300">Assisten AI</a>
              <a href="/berita-terkini" className="text-gray-300 hover:text-red-400 transition-colors duration-300">Berita Terkini</a>
              <a href="/blog" className="text-gray-300 hover:text-red-400 transition-colors duration-300">Blog</a>
              <a href="/bahasa-daerah" className="text-gray-300 hover:text-red-400 transition-colors duration-300">Bahasa Daerah</a>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Hubungi Kami</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-red-400" />
                <span className="text-gray-300">info@nusaloka.id</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-red-400" />
                <span className="text-gray-300">+62 21 1234 5678</span>
              </div>
            </div>
            <div className="flex space-x-4 pt-2">
              <Instagram className="h-5 w-5 text-gray-400 hover:text-red-400 cursor-pointer transition-colors duration-300" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-red-400 cursor-pointer transition-colors duration-300" />
              <Facebook className="h-5 w-5 text-gray-400 hover:text-red-400 cursor-pointer transition-colors duration-300" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 NusaLoka. Semua hak cipta dilindungi. Dibuat dengan ❤️ untuk Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;