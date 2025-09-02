import React, { useState, useEffect, useRef } from 'react';
import { Bot, Send, User, Sparkles, MessageCircle, ChefHat, Brain } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ReactMarkdown from 'react-markdown';

// API Key setup for Gemini. This will be automatically provided by the Canvas environment.
const API_KEY = "";
const genAI = new GoogleGenerativeAI(API_KEY);

const geminiModel = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: `Anda adalah pemandu budaya Indonesia yang ahli dan ramah. Anda memiliki pengetahuan mendalam tentang:
- Pakaian adat dari 34 provinsi Indonesia
- Seni pertunjukan tradisional (tari, musik, teater)
- Kuliner khas daerah dan resep tradisional
- Bahasa daerah dan filosofi budaya
- Sejarah dan makna di balik tradisi Indonesia

Jawab dengan bahasa Indonesia yang sopan dan informatif. Berikan informasi yang akurat dan menarik tentang budaya Indonesia.`
});

// Hardcoded quiz data for the interactive feature
const quizData = [
  {
    question: "Tari Kecak berasal dari daerah mana di Indonesia?",
    options: ["A. Sumatera Barat", "B. Bali", "C. Sulawesi Selatan", "D. Jawa Tengah"],
    answer: "B",
    explanation: "Benar! Tari Kecak adalah seni pertunjukan unik dari Bali yang menampilkan barisan penari pria duduk melingkar sambil menyerukan kata 'cak'. Tarian ini tidak diiringi instrumen musik, melainkan suara dari para penarinya."
  },
  {
    question: "Apa nama alat musik tradisional dari Jawa Barat yang terbuat dari bambu?",
    options: ["A. Angklung", "B. Sasando", "C. Kolintang", "D. Gendang"],
    answer: "A",
    explanation: "Tepat sekali! Angklung adalah alat musik multitonal yang dimainkan dengan cara digoyangkan. Alat musik ini telah diakui oleh UNESCO sebagai Warisan Budaya Takbenda Dunia."
  },
  {
    question: "Pakaian adat yang terkenal dengan kain ulosnya berasal dari suku mana?",
    options: ["A. Suku Dayak", "B. Suku Asmat", "C. Suku Batak", "D. Suku Minangkabau"],
    answer: "C",
    explanation: "Anda benar! Ulos adalah kain tenun tradisional Batak yang memiliki makna mendalam dan digunakan dalam berbagai upacara adat, seperti pernikahan atau kelahiran."
  }
];

export const getCulturalResponse = async (chatHistory) => {
  try {
    const result = await geminiModel.generateContent({ contents: chatHistory });
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return 'Maaf, terjadi kesalahan saat memproses pertanyaan Anda. Silakan coba lagi.';
  }
};

const AssistenAI = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Halo! Saya BoetDaya. Saya siap membantu Anda menjelajahi kekayaan budaya Indonesia. Apa yang ingin Anda ketahui hari ini?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [quizState, setQuizState] = useState(null); // 'idle', 'active'
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const messagesEndRef = useRef(null);

  const quickQuestions = [
    'Ceritakan tentang batik Indonesia',
    'Apa makna filosofi dari tari Saman?',
    'Rekomendasi kuliner Jawa Timur',
    'Perbedaan rumah adat Jawa dan Bali',
    'Mulai Kuis Budaya'
  ];

  const aiFeatures = [
    {
      icon: MessageCircle,
      title: 'BoetDaya',
      description: 'Bertanya langsung tentang budaya Indonesia',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: ChefHat,
      title: 'Rekomendasi Resep AI',
      description: 'Masukkan bahan, dapatkan resep tradisional',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Brain,
      title: 'Kuis Budaya',
      description: 'Uji pengetahuan Anda tentang budaya Indonesia',
      color: 'bg-purple-50 text-purple-600'
    }
  ];

  const startQuiz = () => {
    setQuizState('active');
    setCurrentQuestionIndex(0);
    const firstQuestion = quizData[0];
    const quizMessage = {
      id: Date.now(),
      type: 'bot',
      content: `Mari kita mulai kuisnya! Pertanyaan pertama:\n\n**${firstQuestion.question}**\n${firstQuestion.options.join('\n')}`,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, quizMessage]);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage.trim(),
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    if (quizState === 'active') {
      const currentQuestion = quizData[currentQuestionIndex];
      const userAnswer = userMessage.content.trim().toUpperCase();

      let botResponseContent;
      if (userAnswer === currentQuestion.answer) {
        botResponseContent = `Jawaban Anda benar!\n\n${currentQuestion.explanation}`;
      } else {
        botResponseContent = `Maaf, jawaban Anda salah. Jawaban yang benar adalah **${currentQuestion.answer}**. \n\n${currentQuestion.explanation}`;
      }

      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: 'bot',
        content: botResponseContent,
        timestamp: new Date()
      }]);

      const nextIndex = currentQuestionIndex + 1;
      if (nextIndex < quizData.length) {
        setTimeout(() => {
          const nextQuestion = quizData[nextIndex];
          setMessages(prev => [...prev, {
            id: Date.now() + 2,
            type: 'bot',
            content: `Baik, ini pertanyaan berikutnya:\n\n**${nextQuestion.question}**\n${nextQuestion.options.join('\n')}`,
            timestamp: new Date()
          }]);
          setCurrentQuestionIndex(nextIndex);
          setIsTyping(false);
        }, 1000);
      } else {
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: Date.now() + 2,
            type: 'bot',
            content: "Kuis selesai! Terima kasih sudah berpartisipasi. Anda bisa bertanya lagi tentang hal lain atau memulai kuis baru.",
            timestamp: new Date()
          }]);
          setQuizState('idle');
          setIsTyping(false);
        }, 1000);
      }
    } else {
      // General chat logic
      const chatHistory = [{
        role: 'user',
        parts: [{ text: userMessage.content }]
      }];
      const response = await getCulturalResponse(chatHistory);
      const botResponse = {
        id: Date.now() + 1,
        type: 'bot',
        content: response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }
  };

  const handleQuickQuestion = (question) => {
    if (question === 'Mulai Kuis Budaya') {
      startQuiz();
    } else {
      setInputMessage(question);
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Bot className="h-16 w-16 text-red-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Asisten AI Budaya
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Berinteraksi langsung dengan AI untuk mempelajari budaya Indonesia.
            Dapatkan jawaban detail, rekomendasi personal, dan pengalaman interaktif.
          </p>
        </div>

        {/* AI Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {aiFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className={`inline-flex p-3 rounded-lg ${feature.color} mb-4`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Questions */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-xl p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Sparkles className="h-5 w-5 text-yellow-600 mr-2" />
                Pertanyaan Populer
              </h3>
              <div className="space-y-3">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="w-full text-left p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-red-50 text-sm"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-red-600 to-red-700 p-4">
                <div className="flex items-center">
                  <Bot className="h-6 w-6 text-white mr-3" />
                  <div>
                    <h3 className="text-white font-semibold">BoetDaya</h3>
                    <p className="text-red-100 text-sm">Online - Siap membantu</p>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="h-96 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        message.type === 'user' ? 'bg-red-600' : 'bg-gray-100'
                      }`}>
                        {message.type === 'user' ?
                          <User className="h-4 w-4 text-white" /> :
                          <Bot className="h-4 w-4 text-gray-600" />
                        }
                      </div>
                      <div className={`px-4 py-2 rounded-xl ${
                        message.type === 'user'
                          ? 'bg-red-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}>
                        {message.content && (
                          message.type === 'bot' ? (
                            <ReactMarkdown>{message.content}</ReactMarkdown>
                          ) : (
                            <p className="text-sm leading-relaxed">{message.content}</p>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-2">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <Bot className="h-4 w-4 text-gray-600" />
                      </div>
                      <div className="bg-gray-100 px-4 py-2 rounded-xl">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <div className="border-t border-gray-200 p-4">
                <div className="flex space-x-3 items-center">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Tanyakan tentang budaya Indonesia..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    disabled={isTyping}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isTyping}
                    className="bg-red-600 hover:bg-red-700 disabled:bg-gray-300 text-white px-6 py-3 rounded-lg transition-colors duration-300 flex items-center"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Capabilities */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kemampuan AI Kami</h2>
            <p className="text-gray-600">Powered by Gemini AI untuk pengalaman pembelajaran yang personal</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">🧠 Pengetahuan Mendalam</h3>
              <p className="text-gray-600 text-sm">Memahami konteks sejarah, filosofi, dan makna budaya</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">🎯 Rekomendasi Personal</h3>
              <p className="text-gray-600 text-sm">Memberikan saran berdasarkan minat dan lokasi Anda</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">📚 Pembelajaran Interaktif</h3>
              <p className="text-gray-600 text-sm">Menjelaskan dengan cara yang mudah dipahami</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-2">🌍 Konteks Global</h3>
              <p className="text-gray-600 text-sm">Menghubungkan budaya lokal dengan perspektif dunia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistenAI;
