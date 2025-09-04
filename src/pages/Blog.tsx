import React, { useState, useEffect, useCallback } from 'react';
import { Search, Heart, MessageCircle } from 'lucide-react';
import GradientText from '../items/GradientText';


// Define the data types using TypeScript interfaces
interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  tags?: string[];
  likes: number;
  comments: number;
}

interface Comment {
  id: number;
  post_id: number;
  commenter_name: string;
  comment_text: string;
  created_at: string;
}

interface NewArticle {
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  image: string;
  tags?: string[];
}

interface NewComment {
  postId: number | null;
  commenterName: string;
  commentText: string;
}

interface Message {
  type: 'success' | 'error';
  text: string;
}

interface BlogPostProps {
  post: Post;
  formatDate: (dateString: string) => string;
  onReadMore: () => void;
  onLike: () => void;
}

interface ArticleFormProps {
  article: NewArticle;
  setArticle: React.Dispatch<React.SetStateAction<NewArticle>>;
  onSubmit: (article: NewArticle) => Promise<void>;
  onCancel: () => void;
  isSubmitting: boolean;
  categories: string[];
}

interface CommentFormProps {
  comment: NewComment;
  setComment: React.Dispatch<React.SetStateAction<NewComment>>;
  onSubmit: (comment: NewComment) => Promise<void>;
  onCancel: () => void;
  isSubmitting: boolean;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, formatDate, onReadMore, onLike }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
    <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">{post.category}</span>
        <span className="ml-2">{formatDate(post.date)}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
      <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
      <div className="flex items-center text-sm text-gray-500 mb-4 gap-4">
        <button onClick={onLike} className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition duration-300">
          <Heart size={16} fill="currentColor" stroke="none" />
          <span>{post.likes} Suka</span>
        </button>
        <button className="flex items-center space-x-1 text-gray-500">
          <MessageCircle size={16} />
          <span>{post.comments} Komentar</span>
        </button>
      </div>
      <button onClick={onReadMore} className="inline-block text-white bg-green-600 hover:bg-green-700 font-bold py-2 px-4 rounded-full transition duration-300">
        Baca Selengkapnya
      </button>
    </div>
  </div>
);

const ArticleForm: React.FC<ArticleFormProps> = ({ article, setArticle, onSubmit, onCancel, isSubmitting, categories }) => {
  const availableTags = [
    'Budaya', 'Tradisi', 'Seni', 'Kuliner', 'Tarian', 'Musik', 'Kerajinan', 'Pakaian Adat',
    'Festival', 'Upacara Adat', 'Sejarah', 'Warisan', 'Kesenian', 'Makanan Tradisional',
    'Arsitektur', 'Religi', 'Sastra', 'Folklor', 'Adat Istiadat', 'Kearifan Lokal',
    'Batikan', 'Wayang', 'Gamelan', 'Tari Tradisional', 'Kriya', 'Mitologi', 'Pantun',
    'Lagu Daerah', 'Pernikahan Adat', 'Seni Ukir'
  ];

  const handleTagChange = (tag: string) => {
    setArticle(prev => {
      const currentTags = prev.tags || [];
      if (currentTags.includes(tag)) {
        return { ...prev, tags: currentTags.filter(t => t !== tag) };
      } else {
        return { ...prev, tags: [...currentTags, tag] };
      }
    });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-bold mb-4">Tambah Artikel Baru</h2>
      <form onSubmit={(e) => { e.preventDefault(); onSubmit(article); }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Judul</label>
            <input
              type="text"
              value={article.title}
              onChange={e => setArticle({ ...article, title: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Penulis</label>
            <input
              type="text"
              value={article.author}
              onChange={e => setArticle({ ...article, author: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Kutipan</label>
          <textarea
            value={article.excerpt}
            onChange={e => setArticle({ ...article, excerpt: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Konten</label>
          <textarea
            value={article.content}
            onChange={e => setArticle({ ...article, content: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500 h-40"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">URL Gambar</label>
          <input
            type="text"
            value={article.image}
            onChange={e => setArticle({ ...article, image: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Kategori</label>
          <select
            value={article.category}
            onChange={e => setArticle({ ...article, category: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
            required
          >
            <option value="">Pilih Kategori</option>
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Tag (Pilih beberapa)</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-h-60 overflow-y-auto p-4 bg-gray-50 rounded-lg border border-gray-200">
            {availableTags.map(tag => (
              <label key={tag} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={article.tags?.includes(tag) || false}
                  onChange={() => handleTagChange(tag)}
                  className="h-5 w-5 text-green-600 border-gray-300 rounded focus:ring-green-500 transition duration-200 hover:bg-green-100"
                />
                <span className="text-gray-700 hover:text-green-600 transition duration-200">{tag}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-green-600 text-white font-bold py-2 px-4 rounded-full hover:bg-green-700 transition duration-300 disabled:opacity-50"
          >
            {isSubmitting ? 'Mengirim...' : 'Kirim Artikel'}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full hover:bg-gray-400 transition duration-300"
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
};

const CommentForm: React.FC<CommentFormProps> = ({ comment, setComment, onSubmit, onCancel, isSubmitting }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
    <h2 className="text-2xl font-bold mb-4">Tambahkan Komentar</h2>
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(comment); }}>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Nama Anda</label>
        <input
          type="text"
          value={comment.commenterName}
          onChange={e => setComment({ ...comment, commenterName: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Komentar</label>
        <textarea
          value={comment.commentText}
          onChange={e => setComment({ ...comment, commentText: e.target.value })}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
          required
        ></textarea>
      </div>
      <div className="flex gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-green-600 text-white font-bold py-2 px-4 rounded-full hover:bg-green-700 transition duration-300 disabled:opacity-50"
        >
          {isSubmitting ? 'Mengirim...' : 'Kirim Komentar'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full hover:bg-gray-400 transition duration-300"
        >
          Batal
        </button>
      </div>
    </form>
  </div>
);

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            {children}
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const API_BASE_URL = 'http://localhost:5000/api';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [comments, setComments] = useState<Record<number, Comment[]>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showAddArticleForm, setShowAddArticleForm] = useState<boolean>(false);
  const [showAddCommentForm, setShowAddCommentForm] = useState<boolean>(false);
  const [newArticle, setNewArticle] = useState<NewArticle>({
    title: '', excerpt: '', content: '', author: '', category: '', image: '', tags: []
  });
  const [newComment, setNewComment] = useState<NewComment>({ postId: null, commenterName: '', commentText: '' });
  const [isSubmittingArticle, setIsSubmittingArticle] = useState<boolean>(false);
  const [isSubmittingComment, setIsSubmittingComment] = useState<boolean>(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [message, setMessage] = useState<Message | null>(null);

  const categories = [
    'all',
    'Seni Tradisional',
    'Arsitektur',
    'Kuliner',
    'Seni Pertunjukan',
    'Musik Tradisional',
    'Kerajinan Tangan',
    'Pakaian Adat',
    'Upacara Adat',
    'Festival Budaya',
    'Sejarah Budaya',
    'Sastra Tradisional',
    'Religi dan Kepercayaan',
    'Kearifan Lokal',
    'Batikan',
    'Wayang',
    'Tarian Tradisional',
    'Permenungan Tradisional',
    'Alat Musik Tradisional',
    'Adat Pernikahan',
    'Seni Ukir'
  ];

  const formatDate = useCallback((dateString: string): string => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return dateString;
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString('id-ID', options);
    } catch (e) {
      console.error('Date parsing error:', e);
      return dateString;
    }
  }, []);

  const fetchAllComments = useCallback(async (postsParam: Post[]) => {
    console.log('Fetching all comments...');
    try {
      const response = await fetch(`${API_BASE_URL}/comments`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const commentsData: Comment[] = await response.json();
      const commentsMap: Record<number, Comment[]> = {};
      postsParam.forEach(post => {
        commentsMap[post.id] = commentsData.filter(comment => comment.post_id === post.id);
      });
      setComments(commentsMap);
    } catch (err) {
      console.error('Error fetching comments:', err);
    }
  }, []);

  const fetchPostsAndComments = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const postsResponse = await fetch(`${API_BASE_URL}/posts`);
      if (!postsResponse.ok) throw new Error(`HTTP error! status: ${postsResponse.status}`);
      const postsData: Post[] = await postsResponse.json();
      setPosts(postsData);
      await fetchAllComments(postsData);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Gagal memuat artikel dari server.');
    } finally {
      setLoading(false);
    }
  }, [fetchAllComments]);

  useEffect(() => {
    fetchPostsAndComments();
  }, [fetchPostsAndComments]);

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleArticleSubmit = async (article: NewArticle) => {
    setIsSubmittingArticle(true);
    try {
      const response = await fetch(`${API_BASE_URL}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...article, date: new Date().toISOString().split('T')[0], comments: 0, likes: 0 })
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const addedPost: Post = await response.json();
      setPosts([addedPost, ...posts]);
      setNewArticle({ title: '', excerpt: '', content: '', author: '', category: '', image: '', tags: [] });
      setShowAddArticleForm(false);
      setMessage({ type: 'success', text: 'Artikel berhasil ditambahkan.' });
    } catch (err) {
      console.error('Error submitting article:', err);
      setMessage({ type: 'error', text: 'Gagal menambahkan artikel.' });
    } finally {
      setIsSubmittingArticle(false);
    }
  };

  const handleCommentSubmit = async (comment: NewComment) => {
    if (!comment.postId) return;
    setIsSubmittingComment(true);
    try {
      const response = await fetch(`${API_BASE_URL}/posts/${comment.postId}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          commenter_name: comment.commenterName,
          comment_text: comment.commentText
        })
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const addedComment: Comment = await response.json();
      setComments(prev => {
        const newCommentsForPost = [addedComment, ...(prev[comment.postId!] || [])];
        return { ...prev, [comment.postId!]: newCommentsForPost };
      });
      setPosts(posts.map(p => p.id === comment.postId ? { ...p, comments: p.comments + 1 } : p));
      setNewComment({ postId: null, commenterName: '', commentText: '' });
      setShowAddCommentForm(false);
      setMessage({ type: 'success', text: 'Komentar berhasil ditambahkan.' });
      if (selectedPost && selectedPost.id === comment.postId) {
        setSelectedPost(prev => prev ? { ...prev, comments: prev.comments + 1 } : null);
      }
    } catch (err) {
      console.error('Error submitting comment:', err);
      setMessage({ type: 'error', text: 'Gagal menambahkan komentar.' });
    } finally {
      setIsSubmittingComment(false);
    }
  };

  const handleLike = async (postId: number) => {
    try {
      const response = await fetch(`${API_BASE_URL}/posts/${postId}/like`, {
        method: 'POST',
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const updatedPost: Post = await response.json();
      setPosts(posts.map(post => post.id === postId ? updatedPost : post));
      if (selectedPost && selectedPost.id === postId) {
        setSelectedPost(updatedPost);
      }
    } catch (err) {
      console.error('Error liking post:', err);
      setMessage({ type: 'error', text: 'Gagal memberikan suka.' });
    }
  };

  const handleReadMore = (post: Post) => {
    setSelectedPost(post);
  };

  const closePostModal = () => {
    setSelectedPost(null);
  };

  const openCommentFormFromModal = (postId: number) => {
    closePostModal();
    setNewComment({ postId, commenterName: '', commentText: '' });
    setShowAddCommentForm(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4 mx-auto border-t-red-500 animate-spin"></div>
          <h3 className="text-xl font-medium">Memuat Artikel</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
            <GradientText
              colors={["#eab308", "#dc2626", "#7f1d1d"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class mb-100 leading-normal"
            >
              Nusaloka - Artikel Budaya Indonesia
            </GradientText>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Artikel mendalam tentang budaya, seni, dan tradisi Indonesia. Ditulis oleh para ahli dan praktisi budaya.
          </p>
        </div>

        {message && (
          <div className={`bg-${message.type === 'success' ? 'green' : 'red'}-50 border-l-4 border-${message.type === 'success' ? 'green' : 'red'}-400 p-4 mb-6`}>
            <p className={`text-sm text-${message.type === 'success' ? 'green' : 'red'}-700`}>{message.text}</p>
          </div>
        )}

        {error && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-sm text-yellow-700">{error}</p>
          </div>
        )}

        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari artikel..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'Semua Kategori' : category}
                </option>
              ))}
            </select>
            <button
              onClick={() => setShowAddArticleForm(true)}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Tulis Artikel
            </button>
          </div>
        </div>

        {showAddArticleForm && (
          <ArticleForm
            article={newArticle}
            setArticle={setNewArticle}
            onSubmit={handleArticleSubmit}
            onCancel={() => setShowAddArticleForm(false)}
            isSubmitting={isSubmittingArticle}
            categories={categories.slice(1)}
          />
        )}

        {showAddCommentForm && (
          <CommentForm
            comment={newComment}
            setComment={setNewComment}
            onSubmit={handleCommentSubmit}
            onCancel={() => setShowAddCommentForm(false)}
            isSubmitting={isSubmittingComment}
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <BlogPost
              key={post.id}
              post={post}
              formatDate={formatDate}
              onReadMore={() => handleReadMore(post)}
              onLike={() => handleLike(post.id)}
            />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Artikel Tidak Ditemukan</p>
          </div>
        )}
      </div>

      <Modal isOpen={!!selectedPost} onClose={closePostModal}>
        {selectedPost && (
          <div className="text-left">
            <h2 className="text-3xl font-bold mb-4">{selectedPost.title}</h2>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">{selectedPost.category}</span>
              <span className="ml-2">Oleh {selectedPost.author}</span>
              <span className="ml-2">| {formatDate(selectedPost.date)}</span>
            </div>
            <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-auto rounded-lg mb-6" />
            <div className="text-gray-700 leading-relaxed mb-6 whitespace-pre-wrap">
              {selectedPost.content}
            </div>
            <div className="flex items-center space-x-4 text-gray-500 text-sm mb-6">
              <div className="flex items-center space-x-1">
                <Heart size={16} fill="currentColor" stroke="none" className="text-red-500" />
                <span>{selectedPost.likes} Suka</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle size={16} />
                <span>{selectedPost.comments} Komentar</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-bold mb-4">Komentar ({comments[selectedPost.id]?.length || 0})</h3>
              <div className="space-y-4 max-h-80 overflow-y-auto">
                {comments[selectedPost.id]?.length > 0 ? (
                  comments[selectedPost.id]
                    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
                    .map(c => (
                      <div key={c.id} className="pb-4 border-b border-gray-100 last:border-b-0">
                        <div className="flex items-center mb-1">
                          <span className="font-semibold text-gray-800">{c.commenter_name}</span>
                          <span className="text-gray-500 text-xs ml-2">{formatDate(c.created_at)}</span>
                        </div>
                        <p className="text-gray-700">{c.comment_text}</p>
                      </div>
                    ))
                ) : (
                  <p className="text-gray-500 italic">Belum ada komentar.</p>
                )}
              </div>
              <button
                onClick={() => openCommentFormFromModal(selectedPost.id)}
                className="py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 mt-4"
              >
                Tambah Komentar
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Blog;