import React, { useState, useEffect } from 'react';
import { Calendar, ExternalLink, Loader, Newspaper, Star } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader className="h-12 w-12 text-red-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Memuat berita terkini...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Newspaper className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Berita Seni & Budaya Terkini
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ikuti perkembangan terbaru dunia seni dan budaya Indonesia dari The Jakarta Post
          </p>
        </div>

        {newsData && (
          <>
            {/* Featured Post */}
            <div className="mb-16">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl overflow-hidden shadow-2xl">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={newsData.featured_post.image}
                      alt={newsData.featured_post.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 text-white">
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
                    <div className="flex items-center">
                      <div className="flex items-center text-red-200">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{newsData.featured_post.pusblised_at}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsData.posts.map((post, index) => (
                <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
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
                      {post.premium_badge === 'premium' && (
                        <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-xs font-semibold">
                          Premium
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
                    <div className="flex items-center">
                      <div className="flex items-center text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{post.pusblised_at}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BeritaTerkini;
