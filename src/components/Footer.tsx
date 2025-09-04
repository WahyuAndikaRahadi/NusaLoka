import React, { useState, useEffect } from 'react';
import { Mail, Phone, ChevronUp, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show scroll-to-top button when page is scrolled
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
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
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp size={18} />
        </button>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand Section */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1 flex flex-col items-center md:items-start">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-600 via-red-500 to-red-400 rounded-lg blur-md opacity-75 group-hover:opacity-100 animate-pulse transition duration-1000"></div>
              <div className="relative bg-white rounded-lg border-2 border-red-500 shadow-lg shadow-red-500/50 transition-all duration-300">
                <img
                  src="https://res.cloudinary.com/dceylrkji/image/upload/v1756961826/download__1_-removebg-preview_x4zjyt.png"
                  className="w-20 h-20 rounded-lg"
                  alt="NusaLoka Logo"
                />
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed hover:text-gray-200 transition-all max-w-sm">
              Platform digital yang didedikasikan untuk melestarikan dan mempromosikan
              kekayaan budaya Indonesia melalui inovasi digital.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-red-400 after:transition-all after:duration-300 hover:after:w-full">
              Navigasi
            </h4>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
              {[
                { name: "Tentang", href: "/tentang" },
                { name: "Direktori Budaya", href: "/direktori-budaya" },
                { name: "Assisten AI", href: "/assisten-ai" },
                { name: "Berita Terkini", href: "/berita-terkini" },
                { name: "Blog", href: "/blog" },
                { name: "Bahasa Daerah", href: "/bahasa-daerah" },
                { name: "Lokasi Kebudayaan", href: "/lokasi-kebudayaan" },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-red-400 transition-all flex justify-center md:justify-start items-center group/link text-sm"
                >
                  <span className="relative">
                    {link.name}
                    <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-red-400 transition-all duration-300 group-hover/link:w-full"></span>
                  </span>
                  <ExternalLink size={12} className="ml-1 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-semibold relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-red-400 after:transition-all after:duration-300 hover:after:w-full">
              Hubungi Kami
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:nusalokaaja@gmail.com"
                className="flex justify-center md:justify-start items-center space-x-3 group/contact transition-all duration-300 hover:translate-x-1"
              >
                <Mail className="h-4 w-4 text-red-400" />
                <span className="text-gray-300 group-hover/contact:text-white text-sm break-all">
                  nusalokaaja@gmail.com
                </span>
              </a>
              <a
                href="tel:+628138872645"
                className="flex justify-center md:justify-start items-center space-x-3 group/contact transition-all duration-300 hover:translate-x-1"
              >
                <Phone className="h-4 w-4 text-red-400" />
                <span className="text-gray-300 group-hover/contact:text-white text-sm">
                  +62 813-887-2645
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 mt-10 pt-6 flex flex-col items-center space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0 text-center md:text-left">
          <p className="text-gray-400 text-sm">
            © {currentYear} NusaLoka. All rights reserved.
            <span className="flex justify-center md:justify-start mt-1 md:mt-0">
              Made with <Heart size={12} className="mx-1 text-red-400" /> in Indonesia
            </span>
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-center md:text-right">
            <a href="/privacy" className="text-gray-400 hover:text-red-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-red-400 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="/sitemap" className="text-gray-400 hover:text-red-400 text-sm transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
