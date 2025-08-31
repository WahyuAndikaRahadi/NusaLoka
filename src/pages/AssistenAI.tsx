import React, { useState } from 'react';
import { Bot, Send, User, Sparkles, MessageCircle, Camera, ChefHat } from 'lucide-react';

const AssistenAI = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Halo! Saya adalah Pemandu Budaya AI NusaLoka. Saya siap membantu Anda menjelajahi kekayaan budaya Indonesia. Apa yang ingin Anda ketahui hari ini?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickQuestions = [
    'Ceritakan tentang batik Indonesia',
    'Apa makna filosofi dari tari Saman?',
    'Rekomendasi kuliner Jawa Timur',
    'Perbedaan rumah adat Jawa dan Bali',
    'Sejarah wayang kulit'
  ];

  const aiFeatures = [
    {
      icon: MessageCircle,
      title: 'Pemandu Budaya AI',
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
      icon: Camera,
      title: 'Tur Virtual AI',
      description: 'Upload foto, coba pakaian adat virtual',
      color: 'bg-purple-50 text-purple-600'
    }
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: Date.now(),
      type: 'user' as const,
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        type: 'bot' as const,
        content: `Terima kasih atas pertanyaan Anda tentang "${inputMessage}". Ini adalah simulasi respons AI. Dalam implementasi sesungguhnya, saya akan terhubung dengan Gemini AI untuk memberikan jawaban yang komprehensif tentang budaya Indonesia.`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Bot className="h-16 w-16 text-red-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Assisten AI Budaya
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
                    <h3 className="text-white font-semibold">Pemandu Budaya AI</h3>
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
                        <p className="text-sm leading-relaxed">{message.content}</p>
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
              </div>

              {/* Chat Input */}
              <div className="border-t border-gray-200 p-4">
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Tanyakan tentang budaya Indonesia..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim()}
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