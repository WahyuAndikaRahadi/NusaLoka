import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Loader, Newspaper, Star } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import GradientText from '../items/GradientText';

interface NewsPost {
  link: string;
  title: string;
  image: string;
  headline: string;
  category: string;
  pusblised_at: string;
  premium_badge?: string;
}

interface NewsData {
  status: number;
  featured_post: NewsPost;
  posts: NewsPost[];
}

const BeritaTerkini = () => {
  const [newsData, setNewsData] = useState<NewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Varian untuk animasi stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Varian untuk setiap item
  const itemVariants: any = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
  };

  // Varian untuk card hover
  const cardHoverVariants = {
    y: -8,
    boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
    transition: {
      y: { duration: 0.3 },
      boxShadow: { duration: 0.3 },
    },
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://jakpost.vercel.app/api/category/life/arts-culture');
        if (!response.ok) throw new Error('Failed to fetch news');
        const data = await response.json();
        setNewsData(data);
      } catch (err) {
        setError('Gagal memuat berita. Silakan coba lagi nanti.');
        console.error('Error fetching news:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen flex items-center justify-center bg-gray-50"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.8, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Loader className="h-12 w-12 text-red-600 mx-auto mb-4" />
          </motion.div>
          <p className="text-gray-600">Memuat berita terkini...</p>
        </div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen flex items-center justify-center bg-gray-50"
      >
        <div className="text-center">
          <Newspaper className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">{error}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="py-16 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold mb-6 leading-snug">
            <GradientText
              colors={["#eab308", "#dc2626", "#7f1d1d"]}
              animationSpeed={3}
              showBorder={false}
              className="leading-normal"
            >
              Berita Seni & Budaya Terkini
            </GradientText>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ikuti perkembangan terbaru dunia seni dan budaya Indonesia dari The Jakarta Post
          </motion.p>
        </motion.div>

        {newsData && (
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            {/* Featured Post */}
            <motion.div variants={itemVariants} className="mb-16">
              <div
                className="block bg-gradient-to-r from-red-600 to-red-700 rounded-2xl overflow-hidden shadow-2xl group transition-all duration-300 transform hover:scale-[1.01] hover:shadow-3xl cursor-default"
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={newsData.featured_post.image}
                      alt={newsData.featured_post.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 text-white flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      <Star className="h-5 w-5 text-yellow-400 mr-2" />
                      <span className="text-yellow-300 font-semibold">Berita Utama</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                      {newsData.featured_post.title}
                    </h2>
                    <div className="prose prose-invert max-w-none mb-6 text-red-100">
                      <ReactMarkdown>
                        {newsData.featured_post.headline}
                      </ReactMarkdown>
                    </div>
                    <div className="flex items-center text-red-200">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{newsData.featured_post.pusblised_at}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsData.posts.map((post, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={cardHoverVariants}
                  className="bg-white rounded-xl shadow-lg overflow-hidden cursor-default block"
                >
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                      {post.premium_badge === 'premium' && (
                        <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-xs font-semibold">
                          Teratas
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                      {post.title}
                    </h3>
                    <div className="prose prose-sm max-w-none mb-4 text-gray-600">
                      <ReactMarkdown>
                        {post.headline}
                      </ReactMarkdown>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{post.pusblised_at}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BeritaTerkini;