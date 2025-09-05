import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Create a motion-enabled Link component for cleaner syntax
const MotionLink = motion(Link);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang', href: '/tentang' },
    { name: 'Direktori Budaya', href: '/direktori-budaya' },
    { name: 'Assisten AI', href: '/assisten-ai' },
    { name: 'Berita Terkini', href: '/berita-terkini' },
    { name: 'Artikel', href: '/blog' },
    { name: 'Bahasa Daerah', href: '/bahasa-daerah' },
    { name: 'Lokasi Kebudayaan', href: '/lokasi-kebudayaan' },
  ];

  const isActive = (href: any) => location.pathname === href;

  // Animation variants for the mobile menu container
  const mobileMenuVariants: any = {
    open: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20,
        staggerChildren: 0.07, 
        delayChildren: 0.2 
      },
    },
    closed: {
      opacity: 0,
      y: "-20px",
      transition: { duration: 0.2 },
    },
  };

  // Animation variants for individual mobile menu items
  const menuItemVariants: any = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };


  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex lg:justify-start justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="https://res.cloudinary.com/dceylrkji/image/upload/v1756961826/download__1_-removebg-preview_x4zjyt.png" className='w-20 h-20' alt="Logo" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <MotionLink
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium
                    ${isActive(item.href)
                      ? 'bg-red-50 text-red-600 shadow-sm'
                      : 'text-gray-700 hover:bg-red-50 hover:text-red-600'
                  }`}
                  // Add hover and tap animations
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {item.name}
                </MotionLink>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-red-50 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {/* Animate between Menu and X icons */}
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <MotionLink
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.href)
                      ? 'bg-red-50 text-red-600'
                      : 'text-gray-700 hover:bg-red-50 hover:text-red-600'
                  }`}
                  // Animate each item
                  variants={menuItemVariants}
                >
                  {item.name}
                </MotionLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;