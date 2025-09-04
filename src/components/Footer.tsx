import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, ChevronUp, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Show scroll-to-top button when page is scrolled
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white relative">
      {/* Scroll to top button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 group">
              <div className="relative bg-white h-20">
                <img src="https://res.cloudinary.com/dceylrkji/image/upload/v1756961826/download__1_-removebg-preview_x4zjyt.png" className='w-20 h-20' alt="" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">
                  NusaLoka
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Melestarikan Budaya Digital
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed transition-all duration-300 hover:text-gray-200">
              Platform digital yang didedikasikan untuk melestarikan dan mempromosikan
              kekayaan budaya Indonesia melalui inovasi digital.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-red-400 after:transition-all after:duration-300 hover:after:w-full">
              Navigasi
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Tentang", href: "/tentang" },
                { name: "Direktori Budaya", href: "/direktori-budaya" },
                { name: "Assisten AI", href: "/assisten-ai" },
                { name: "Berita Terkini", href: "/berita-terkini" },
                { name: "Blog", href: "/blog" },
                { name: "Bahasa Daerah", href: "/bahasa-daerah" }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-red-400 transition-all duration-300 flex items-center group/link"
                >
                  <span className="relative">
                    {link.name}
                    <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-red-400 transition-all duration-300 group-hover/link:w-full"></span>
                  </span>
                  <ExternalLink size={12} className="ml-1 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-red-400 after:transition-all after:duration-300 hover:after:w-full">
              Hubungi Kami
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:info@nusaloka.id"
                className="flex items-center space-x-3 group/contact transition-all duration-300 hover:translate-x-1"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-red-500 rounded-full blur opacity-20 group-hover/contact:opacity-30 transition duration-300"></div>
                  <Mail className="h-4 w-4 text-red-400 relative" />
                </div>
                <span className="text-gray-300 group-hover/contact:text-white">nusalokaaja@gmail.com</span>
              </a>
              <a
                href="tel:+628138872645"
                className="flex items-center space-x-3 group/contact transition-all duration-300 hover:translate-x-1"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-red-500 rounded-full blur opacity-20 group-hover/contact:opacity-30 transition duration-300"></div>
                  <Phone className="h-4 w-4 text-red-400 relative" />
                </div>
                <span className="text-gray-300 group-hover/contact:text-white">+62 813-887-2645</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm flex items-center">
            © {currentYear} NusaLoka. All rights reserved.
            <span className="flex items-center mx-1">
              Made with <Heart size={12} className="mx-1 text-red-400" /> in Indonesia
            </span>
          </p>

          {/* Additional Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/privacy" className="text-gray-400 hover:text-red-400 text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-red-400 text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="/sitemap" className="text-gray-400 hover:text-red-400 text-sm transition-colors duration-300">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;