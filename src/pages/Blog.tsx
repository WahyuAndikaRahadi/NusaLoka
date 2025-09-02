import React, { useState } from 'react';
import { Calendar, User, MessageSquare, Heart, Share2, Search, Tag } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  comments: number;
  likes: number;
  tags: string[];
}

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock data - nanti akan diganti dengan Google Sheets API
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Filosofi Mendalam di Balik Motif Batik Yogyakarta',
      excerpt: 'Setiap goresan dan warna dalam batik Yogyakarta memiliki makna filosofis yang mendalam, mencerminkan kehidupan dan spiritualitas masyarakat Jawa.',
      content: 'Content lengkap artikel...',
      author: 'Dr. Retno Sari',
      date: '2025-01-15',
      category: 'Seni Tradisional',
      image: 'https://images.pexels.com/photos/9343860/pexels-photo-9343860.jpeg?auto=compress&cs=tinysrgb&w=600',
      comments: 24,
      likes: 156,
      tags: ['batik', 'yogyakarta', 'filosofi', 'seni']
    },
    {
      id: 2,
      title: 'Mengenal Keunikan Rumah Adat Tongkonan Toraja',
      excerpt: 'Arsitektur Tongkonan bukan sekadar tempat tinggal, melainkan representasi kosmologi dan sistem kepercayaan masyarakat Toraja.',
      content: 'Content lengkap artikel...',
      author: 'Bambang Sutrisno',
      date: '2025-01-12',
      category: 'Arsitektur',
      image: 'https://images.pexels.com/photos/8837694/pexels-photo-8837694.jpeg?auto=compress&cs=tinysrgb&w=600',
      comments: 18,
      likes: 89,
      tags: ['tongkonan', 'toraja', 'arsitektur', 'rumah-adat']
    },
    {
      id: 3,
      title: 'Perjalanan Kuliner: Dari Rendang hingga Papeda',
      excerpt: 'Menjelajahi kekayaan kuliner Nusantara yang tidak hanya lezat, tetapi juga sarat dengan cerita sejarah dan budaya.',
      content: 'Content lengkap artikel...',
      author: 'Chef Maria Santoso',
      date: '2025-01-10',
      category: 'Kuliner',
      image: 'https://images.pexels.com/photos/4725990/pexels-photo-4725990.jpeg?auto=compress&cs=tinysrgb&w=600',
      comments: 42,
      likes: 203,
      tags: ['kuliner', 'rendang', 'papeda', 'nusantara']
    },
    {
      id: 4,
      title: 'Digitalisasi Wayang: Melestarikan Seni Pertunjukan Tradisional',
      excerpt: 'Bagaimana teknologi digital membantu melestarikan dan mempopulerkan seni wayang untuk generasi millennial dan Z.',
      content: 'Content lengkap artikel...',
      author: 'Ki Purbo Asmoro',
      date: '2025-01-08',
      category: 'Seni Pertunjukan',
      image: 'https://images.pexels.com/photos/8006030/pexels-photo-8006030.jpeg?auto=compress&cs=tinysrgb&w=600',
      comments: 31,
      likes: 127,
      tags: ['wayang', 'digitalisasi', 'seni-pertunjukan']
    }
  ];

  const categories = ['all', 'Seni Tradisional', 'Arsitektur', 'Kuliner', 'Seni Pertunjukan'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blog Budaya Indonesia
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Artikel mendalam tentang budaya, seni, dan tradisi Indonesia. 
            Ditulis oleh para ahli dan praktisi budaya.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari artikel..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'Semua Kategori' : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-3 w-3 mr-1" />
                    {formatDate(post.date)}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight hover:text-red-600 transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center text-gray-500 hover:text-red-600 transition-colors duration-300">
                      <Heart className="h-4 w-4 mr-1" />
                      <span className="text-sm">{post.likes}</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors duration-300">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      <span className="text-sm">{post.comments}</span>
                    </button>
                  </div>
                  <button className="text-gray-500 hover:text-green-600 transition-colors duration-300">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Tidak ditemukan artikel untuk "{searchTerm}"</p>
          </div>
        )}

        {/* Newsletter Subscription */}

      </div>
    </div>
  );
};

export default Blog;