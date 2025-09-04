import React, { useState, useEffect, useRef } from 'react';
import { Bot, Send, User, Sparkles, MessageCircle, Brain, Upload, Image as ImageIcon, Download } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ReactMarkdown from 'react-markdown';
import GradientText from '../items/GradientText';


// Define TypeScript types for the application's data structures
interface Message {
  id: number;
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
  imageUrl?: string;
  isGeneratedImage?: boolean;
}

interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

interface AIFeature {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

interface QuickQuestion {
  title: string;
  action: () => void;
}

// API Key setup for Gemini
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

const geminiModel = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
  systemInstruction: `Anda adalah pemandu budaya Indonesia yang ahli dan ramah nama kamu adalah BoetDaya. Anda memiliki pengetahuan mendalam tentang:
- Pakaian adat dari 34 provinsi Indonesia
- Seni pertunjukan tradisional (tari, musik, teater)
- Kuliner khas daerah dan resep tradisional
- Bahasa daerah dan filosofi budaya
- Sejarah dan makna di balik tradisi Indonesia

Jawab dengan bahasa Indonesia yang sopan dan informatif. Berikan informasi yang akurat dan menarik tentang budaya Indonesia.`
});

const geminiImageModel = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
  generationConfig: {
    responseModalities: ["Text", "Image"]
  }

});

// Data kuis untuk fitur interaktif (50 soal)
const allQuizQuestions: QuizQuestion[] = [
  {
    "question": "Apa nama pakaian adat dari Sumatera Barat yang dikenakan oleh wanita dengan penutup kepala berbentuk tanduk kerbau?",
    "options": [
      "A. Ulos",
      "B. Bundo Kanduang",
      "C. Payas Agung",
      "D. Baju Bodo"
    ],
    "answer": "B",
    "explanation": "Benar! Bundo Kanduang adalah pakaian adat wanita Minangkabau yang melambangkan kebesaran dan status ibu dalam adat."
  },
  {
    "question": "Pakaian adat 'Ulos' berasal dari suku mana?",
    "options": [
      "A. Batak",
      "B. Asmat",
      "C. Dayak",
      "D. Minangkabau"
    ],
    "answer": "A",
    "explanation": "Tepat sekali! Ulos adalah kain tenun tradisional Batak yang memiliki makna mendalam dan digunakan dalam berbagai upacara adat."
  },
  {
    "question": "Apa nama pakaian adat dari Sulawesi Selatan yang terkenal dengan bentuknya yang longgar dan lebar?",
    "options": [
      "A. Baju Cele",
      "B. Baju Bodo",
      "C. Kebaya",
      "D. Koteka"
    ],
    "answer": "B",
    "explanation": "Benar! Baju Bodo adalah pakaian adat tradisional suku Bugis-Makassar yang merupakan salah satu pakaian tertua di dunia."
  },
  {
    "question": "Pakaian adat 'Payas Agung' berasal dari mana?",
    "options": [
      "A. Aceh",
      "B. Bali",
      "C. Jawa Tengah",
      "D. Papua"
    ],
    "answer": "B",
    "explanation": "Tepat sekali! Payas Agung adalah pakaian adat kebesaran dari Bali yang sering digunakan dalam upacara pernikahan."
  },
  {
    "question": "Pakaian adat 'Baju Cele' berasal dari provinsi mana?",
    "options": [
      "A. Maluku",
      "B. Nusa Tenggara Timur",
      "C. Kalimantan Timur",
      "D. Riau"
    ],
    "answer": "A",
    "explanation": "Benar! Baju Cele adalah pakaian adat dari Maluku yang memiliki motif kotak-kotak."
  },
  {
    "question": "Pakaian adat 'Pesa'an' yang didominasi warna hitam dan merah berasal dari provinsi mana?",
    "options": [
      "A. Jawa Tengah",
      "B. Jawa Timur",
      "C. Jawa Barat",
      "D. Yogyakarta"
    ],
    "answer": "B",
    "explanation": "Benar! Pesa'an adalah pakaian adat pria dari Madura, Jawa Timur, yang dikenakan bersama celana longgar."
  },
  {
    "question": "Apa nama pakaian adat dari Lampung yang terbuat dari kain tenun bermotif khas?",
    "options": [
      "A. Ulee Balang",
      "B. King Baba",
      "C. Tapis",
      "D. Aesan Gede"
    ],
    "answer": "C",
    "explanation": "Tepat sekali! Tapis adalah kain tenun tradisional Lampung yang disulam dengan benang emas atau perak."
  },
  {
    "question": "Pakaian adat 'Baju Kustin' berasal dari suku mana di Kalimantan Timur?",
    "options": [
      "A. Suku Dayak",
      "B. Suku Kutai",
      "C. Suku Tidung",
      "D. Suku Banjar"
    ],
    "answer": "B",
    "explanation": "Benar! Baju Kustin adalah pakaian adat pengantin dari suku Kutai yang terbuat dari kain beludru."
  },
  {
    "question": "Apa nama pakaian adat dari Aceh yang sering dikenakan dalam upacara pernikahan?",
    "options": [
      "A. Ulee Balang",
      "B. Bundo Kanduang",
      "C. Baju Kurung",
      "D. Teluk Belanga"
    ],
    "answer": "A",
    "explanation": "Tepat sekali! Ulee Balang adalah pakaian adat kebesaran dari Kesultanan Aceh yang digunakan untuk acara penting."
  },
  {
    "question": "Pakaian adat 'Baju Melayu' dari mana?",
    "options": [
      "A. Riau dan Kepulauan Riau",
      "B. Jambi",
      "C. Sumatera Utara",
      "D. Sumatera Barat"
    ],
    "answer": "A",
    "explanation": "Benar! Pakaian adat Melayu Teluk Belanga dan Baju Kebaya Labuh adalah contoh pakaian adat dari Riau."
  },
  {
    "question": "Apa nama pakaian adat dari Jawa Tengah yang dikenakan oleh pria, sering dilengkapi dengan blangkon dan keris?",
    "options": [
      "A. Beskap",
      "B. Baju Bodo",
      "C. Pesa'an",
      "D. Aesan Gede"
    ],
    "answer": "A",
    "explanation": "Tepat sekali! Beskap adalah jas pria adat Jawa Tengah, biasanya dipakai dalam acara formal dan dilengkapi dengan blangkon dan keris."
  },
  {
    "question": "Pakaian adat 'Baju Kebaya' umumnya berasal dari provinsi mana saja?",
    "options": [
      "A. Jawa dan Bali",
      "B. Sumatera dan Kalimantan",
      "C. Sulawesi dan Maluku",
      "D. Papua dan Nusa Tenggara"
    ],
    "answer": "A",
    "explanation": "Benar! Kebaya merupakan pakaian tradisional wanita yang sangat populer di Jawa, Sunda, dan Bali."
  },
  {
    "question": "Pakaian adat 'Baju Bodo' yang terbuat dari kain kasa adalah ciri khas dari suku apa?",
    "options": [
      "A. Suku Bugis",
      "B. Suku Toraja",
      "C. Suku Mandar",
      "D. Suku Minahasa"
    ],
    "answer": "A",
    "explanation": "Tepat sekali! Baju Bodo adalah pakaian tradisional suku Bugis-Makassar yang longgar dan terbuat dari kain kasa tipis."
  },
  {
    "question": "Apa nama pakaian adat dari Yogyakarta yang sering dikenakan oleh Sultan dan keluarganya?",
    "options": [
      "A. Beskap",
      "B. Surjan",
      "C. Kebaya",
      "D. Paes Ageng"
    ],
    "answer": "D",
    "explanation": "Benar! Paes Ageng adalah pakaian adat pengantin khas Keraton Yogyakarta yang sangat mewah dan berornamen."
  },
  {
    "question": "Pakaian adat 'Pangsi' berasal dari provinsi mana?",
    "options": [
      "A. Banten",
      "B. Jawa Barat",
      "C. DKI Jakarta",
      "D. Jawa Tengah"
    ],
    "answer": "B",
    "explanation": "Tepat sekali! Pangsi adalah pakaian tradisional suku Sunda, Jawa Barat, yang sering digunakan untuk kegiatan sehari-hari."
  },
  {
    "question": "Apa nama makanan khas Sumatera Barat yang terbuat dari daging sapi dan santan, dimasak dengan bumbu rempah-rempah hingga kering?",
    "options": [
      "A. Soto Betawi",
      "B. Rendang",
      "C. Pempek",
      "D. Gudeg"
    ],
    "answer": "B",
    "explanation": "Benar! Rendang adalah masakan khas Minangkabau yang diakui sebagai salah satu makanan terlezat di dunia."
  },
  {
    "question": "Rumah adat suku Toraja di Sulawesi Selatan yang atapnya melengkung seperti perahu disebut apa?",
    "options": [
      "A. Rumah Gadang",
      "B. Tongkonan",
      "C. Honai",
      "D. Joglo"
    ],
    "answer": "B",
    "explanation": "Tepat sekali! Tongkonan adalah rumah adat Toraja yang memiliki arsitektur unik dan sarat makna filosofis."
  },
  {
    "question": "Tarian tradisional dari Aceh yang dikenal karena gerakan tangan dan badan yang serempak dan dinamis disebut apa?",
    "options": [
      "A. Tari Piring",
      "B. Tari Saman",
      "C. Tari Jaipong",
      "D. Tari Kecak"
    ],
    "answer": "B",
    "explanation": "Benar! Tari Saman adalah tarian suku Gayo yang masuk dalam daftar Warisan Budaya Takbenda UNESCO."
  },
  {
    "question": "Alat musik tradisional dari Jawa Barat yang terbuat dari bambu dan dimainkan dengan digoyangkan adalah?",
    "options": [
      "A. Sasando",
      "B. Gamelan",
      "C. Angklung",
      "D. Kolintang"
    ],
    "answer": "C",
    "explanation": "Tepat sekali! Angklung adalah alat musik multiton yang dimainkan dengan cara menggoyangkan instrumen tersebut."
  },
  {
    "question": "Apa nama motif batik yang berasal dari Yogyakarta dan Solo yang hanya boleh digunakan oleh kalangan keraton?",
    "options": [
      "A. Parang Rusak",
      "B. Kawung",
      "C. Megamendung",
      "D. Sidomukti"
    ],
    "answer": "A",
    "explanation": "Benar! Motif Parang Rusak dulunya hanya boleh dipakai oleh raja dan bangsawan karena melambangkan kekuatan."
  },
  {
    "question": "Seni pertunjukan boneka tradisional yang berasal dari Jawa ini dikenal dengan nama apa?",
    "options": [
      "A. Wayang Golek",
      "B. Wayang Kulit",
      "C. Ketoprak",
      "D. Ludruk"
    ],
    "answer": "B",
    "explanation": "Tepat sekali! Wayang Kulit adalah pertunjukan boneka bayangan yang terbuat dari kulit hewan dan diukir."
  },
  {
    "question": "Suku mana yang terkenal dengan seni ukirnya, terutama di daerah Asmat, Papua?",
    "options": [
      "A. Suku Dani",
      "B. Suku Korowai",
      "C. Suku Asmat",
      "D. Suku Sentani"
    ],
    "answer": "C",
    "explanation": "Benar! Suku Asmat sangat terkenal di seluruh dunia karena seni ukiran kayu yang rumit dan artistik."
  },
  {
    "question": "Rumah adat suku Minangkabau yang atapnya menyerupai tanduk kerbau disebut apa?",
    "options": [
      "A. Rumah Gadang",
      "B. Rumah Limas",
      "C. Rumah Panggung",
      "D. Tongkonan"
    ],
    "answer": "A",
    "explanation": "Tepat sekali! Rumah Gadang adalah rumah adat Minangkabau yang memiliki arsitektur unik dengan atap yang melengkung."
  },
  {
    "question": "Apa nama makanan khas dari Palembang, Sumatera Selatan, yang terbuat dari ikan dan tepung sagu, disajikan dengan kuah cuka?",
    "options": [
      "A. Tekwan",
      "B. Pempek",
      "C. Otak-otak",
      "D. Laksan"
    ],
    "answer": "B",
    "explanation": "Benar! Pempek adalah makanan khas Palembang yang memiliki cita rasa unik dan terkenal."
  },
  {
    "question": "Festival apa yang terkenal di Bali untuk memperingati hari raya suci umat Hindu yang jatuh setiap 210 hari?",
    "options": [
      "A. Nyepi",
      "B. Galungan",
      "C. Waisak",
      "D. Kuningan"
    ],
    "answer": "B",
    "explanation": "Tepat sekali! Galungan adalah hari raya suci yang dirayakan oleh umat Hindu Bali sebagai peringatan kemenangan Dharma (kebaikan) melawan Adharma (kejahatan)."
  },
  {
    "question": "Pertunjukan teater tradisional dari Jawa Tengah yang menggabungkan tari, musik, dan drama disebut apa?",
    "options": [
      "A. Ludruk",
      "B. Ketoprak",
      "C. Reog",
      "D. Lenong"
    ],
    "answer": "B",
    "explanation": "Benar! Ketoprak adalah seni pertunjukan teater tradisional yang sering menampilkan cerita-cerita sejarah."
  },
  {
    "question": "Apa nama alat musik tradisional dari Nusa Tenggara Timur yang terbuat dari daun lontar dan dimainkan dengan dipetik?",
    "options": [
      "A. Kolintang",
      "B. Kecapi",
      "C. Sasando",
      "D. Suling"
    ],
    "answer": "C",
    "explanation": "Tepat sekali! Sasando adalah alat musik petik yang unik dari Pulau Rote."
  },
  {
    "question": "Apa nama tarian yang berasal dari Bali yang menggambarkan pertempuran antara kebaikan dan keburukan?",
    "options": [
      "A. Tari Piring",
      "B. Tari Saman",
      "C. Tari Jaipong",
      "D. Tari Barong"
    ],
    "answer": "D",
    "explanation": "Benar! Tari Barong adalah tarian sakral yang menceritakan pertempuran antara makhluk mitologi Barong (kebaikan) dan Rangda (kejahatan)."
  },
  {
    "question": "Seni membuat patung dari bahan tanah liat, kayu, atau batu, sering ditemukan di Bali dan Papua, dikenal sebagai?",
    "options": [
      "A. Seni Ukir",
      "B. Seni Patung",
      "C. Seni Keramik",
      "D. Seni Pahat"
    ],
    "answer": "B",
    "explanation": "Tepat sekali! Seni patung adalah seni yang menciptakan karya tiga dimensi."
  },
  {
    "question": "Apa nama masakan khas Padang yang terbuat dari nasi, lauk pauk, dan sayur, disajikan dalam piring kecil?",
    "options": [
      "A. Nasi Uduk",
      "B. Nasi Goreng",
      "C. Nasi Padang",
      "D. Nasi Kuning"
    ],
    "answer": "C",
    "explanation": "Benar! Nasi Padang adalah hidangan nasi yang disajikan dengan berbagai lauk pauk, khas dari daerah Padang, Sumatera Barat."
  }
];

// Fisher-Yates shuffle algorithm to shuffle an array
const shuffleArray = (array: any[]): any[] => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
};

export const getCulturalResponse = async (chatHistory: any[]): Promise<string> => {
  try {
    const result = await geminiModel.generateContent({ contents: chatHistory });
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return 'Maaf, terjadi kesalahan saat memproses pertanyaan Anda. Silakan coba lagi.';
  }
};

// Function to convert file to base64
const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      // Remove the data URL prefix to get just the base64 data
      const base64Data = result.split(',')[1];
      resolve(base64Data);
    };
    reader.onerror = error => reject(error);
  });
};

// Function to generate image with traditional clothing
const generateTraditionalClothingImage = async (imageFile: File, clothingType: string): Promise<string> => {
  try {
    const base64Image = await fileToBase64(imageFile);

    const prompt = `Ubah foto orang ini menjadi mengenakan pakaian adat Indonesia ${clothingType}. Pastikan:
1. Wajah dan postur tubuh tetap sama persis
2. Pakaian adat yang dikenakan sesuai dengan tradisi dan detail yang akurat
3. Background yang sesuai dengan budaya Indonesia
4. Kualitas gambar yang tinggi dan realistis
5. Mempertahankan proporsi dan anatomi yang natural

Buatlah transformasi yang menghormati budaya Indonesia dengan detail yang autentik.`;

    const result = await geminiImageModel.generateContent([
      { text: prompt },
      {
        inlineData: {
          mimeType: imageFile.type,
          data: base64Image,
        },
      },
    ]);

    const response = await result.response;

    // Check if response contains generated image
    const candidates = response.candidates;
    if (candidates && candidates[0] && candidates[0].content && candidates[0].content.parts) {
      for (const part of candidates[0].content.parts) {
        if (part.inlineData) {
          // Convert base64 to blob URL for display
          const imageData = part.inlineData.data;
          const mimeType = part.inlineData.mimeType || 'image/png';
          const byteCharacters = atob(imageData);
          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          const blob = new Blob([byteArray], { type: mimeType });
          return URL.createObjectURL(blob);
        }
      }
    }

    throw new Error('No image generated in response');
  } catch (error) {
    console.error('Error generating image:', error);
    throw error;
  }
};

const AssistenAI = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: 'Halo! Saya BoetDaya. Saya siap membantu Anda menjelajahi kekayaan budaya Indonesia. Anda juga bisa upload foto untuk saya ubah menjadi mengenakan pakaian adat Indonesia! Apa yang ingin Anda ketahui hari ini?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [quizState, setQuizState] = useState<'idle' | 'active'>('idle');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedQuestions, setSelectedQuestions] = useState<QuizQuestion[]>([]);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [isGeneratingImage, setIsGeneratingImage] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const quickQuestions: string[] = [
    'Ceritakan tentang batik Indonesia',
    'Apa makna filosofi dari tari Saman?',
    'Rekomendasi kuliner Jawa Timur',
    'Perbedaan rumah adat Jawa dan Bali',
    'Mulai Kuis Budaya'
  ];

  const traditionalClothingOptions: string[] = [
    'Kebaya Jawa',
    'Baju Bodo Sulawesi',
    'Ulos Batak',
    'Payas Agung Bali',
    'Bundo Kanduang Minang',
    'Aesan Gede Palembang',
    'Teluk Belanga Riau',
    'Pakaian Adat Dayak',
    'Baju Cele Maluku',
    'Koteka Papua'
  ];

  const aiFeatures: AIFeature[] = [
    {
      icon: MessageCircle,
      title: 'BoetDaya Chat',
      description: 'Bertanya langsung tentang budaya Indonesia',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: ImageIcon,
      title: 'AI Photo Transform',
      description: 'Upload foto untuk diubah menjadi pakaian adat',
      color: 'bg-red-50 text-red-600'
    },
    {
      icon: Brain,
      title: 'Kuis Budaya',
      description: 'Uji pengetahuan Anda tentang budaya Indonesia',
      color: 'bg-purple-50 text-purple-600'
    }
  ];

  const startQuiz = (): void => {
    const shuffledQuestions: QuizQuestion[] = shuffleArray([...allQuizQuestions]);
    const quizSubset = shuffledQuestions.slice(0, 5);
    setSelectedQuestions(quizSubset);

    setQuizState('active');
    setCurrentQuestionIndex(0);
    const firstQuestion = quizSubset[0];
    const quizMessage: Message = {
      id: Date.now(),
      type: 'bot',
      content: `Mari kita mulai kuisnya! Pertanyaan pertama:\n\n**${firstQuestion.question}**\n${firstQuestion.options.join('\n')}`,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, quizMessage]);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateTraditionalClothing = async (clothingType: string): Promise<void> => {
    if (!selectedImage) return;

    setIsGeneratingImage(true);
    setIsTyping(true);

    // Add user message showing the uploaded image
    const userMessage: Message = {
      id: Date.now(),
      type: 'user',
      content: `Tolong ubah foto saya menjadi mengenakan ${clothingType}`,
      timestamp: new Date(),
      imageUrl: imagePreview
    };
    setMessages(prev => [...prev, userMessage]);

    try {
      const generatedImageUrl = await generateTraditionalClothingImage(selectedImage, clothingType);

      const botResponse: Message = {
        id: Date.now() + 1,
        type: 'bot',
        content: `Berikut adalah foto Anda yang telah diubah menjadi mengenakan ${clothingType}! Saya telah mempertahankan wajah dan postur Anda sambil menambahkan detail pakaian adat yang autentik.`,
        timestamp: new Date(),
        imageUrl: generatedImageUrl,
        isGeneratedImage: true
      };
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now() + 1,
        type: 'bot',
        content: 'Maaf, terjadi kesalahan saat mengubah foto Anda. Silakan coba lagi dengan foto yang berbeda atau coba lagi nanti.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    }

    setIsGeneratingImage(false);
    setIsTyping(false);
    setSelectedImage(null);
    setImagePreview('');
  };

  const handleSendMessage = async (): Promise<void> => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      type: 'user',
      content: inputMessage.trim(),
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    if (quizState === 'active') {
      const currentQuestion = selectedQuestions[currentQuestionIndex];
      const userAnswer = inputMessage.trim().toUpperCase();

      let botResponseContent: string;
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
      if (nextIndex < selectedQuestions.length) {
        setTimeout(() => {
          const nextQuestion = selectedQuestions[nextIndex];
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
      // Logika chat umum
      const chatHistory = [{
        role: 'user',
        parts: [{ text: userMessage.content }]
      }];
      const response = await getCulturalResponse(chatHistory);
      const botResponse: Message = {
        id: Date.now() + 1,
        type: 'bot',
        content: response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }
  };

  const handleQuickQuestion = (question: string): void => {
    if (question === 'Mulai Kuis Budaya') {
      startQuiz();
    } else {
      setInputMessage(question);
    }
  };

  const downloadImage = (imageUrl: string, filename: string): void => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <GradientText
              colors={["#eab308", "#dc2626 ", "#7f1d1d "]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              Asisten AI Budaya
            </GradientText>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Berinteraksi langsung dengan AI untuk mempelajari budaya Indonesia.
            Upload foto Anda untuk diubah menjadi mengenakan pakaian adat tradisional!
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
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Pertanyaan cepat */}
            <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-xl p-6">
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

            {/* Image Upload Section */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <ImageIcon className="h-5 w-5 text-blue-600 mr-2" />
                Transform Foto Anda
              </h3>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />

              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full mb-4 p-4 border-2 border-dashed border-blue-300 rounded-lg hover:border-blue-500 transition-colors duration-300 flex flex-col items-center"
              >
                <Upload className="h-8 w-8 text-blue-500 mb-2" />
                <span className="text-sm text-gray-600">Upload Foto Anda</span>
              </button>

              {imagePreview && (
                <div className="mb-4">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
              )}

              {selectedImage && (
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700 mb-2">Pilih Pakaian Adat:</p>
                  <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto">
                    {traditionalClothingOptions.map((clothing, index) => (
                      <button
                        key={index}
                        onClick={() => handleGenerateTraditionalClothing(clothing)}
                        disabled={isGeneratingImage}
                        className="w-full text-left p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-blue-50 text-xs disabled:opacity-50"
                      >
                        {clothing}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Antarmuka chat */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Header chat */}
              <div className="bg-gradient-to-r from-red-600 to-red-700 p-4">
                <div className="flex items-center">
                  <Bot className="h-6 w-6 text-white mr-3" />
                  <div>
                    <h3 className="text-white font-semibold">BoetDaya</h3>
                    <p className="text-red-100 text-sm">
                      {isGeneratingImage ? 'Sedang mengubah foto...' : 'Online - Siap membantu'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Pesan chat */}
              <div className="h-96 overflow-y-auto p-4 space-y-4">
                {messages.map((message: Message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${message.type === 'user' ? 'bg-red-600' : 'bg-gray-100'
                        }`}>
                        {message.type === 'user' ?
                          <User className="h-4 w-4 text-white" /> :
                          <Bot className="h-4 w-4 text-gray-600" />
                        }
                      </div>
                      <div className={`px-4 py-2 rounded-xl ${message.type === 'user'
                          ? 'bg-red-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                        }`}>
                        {message.imageUrl && (
                          <div className="mb-2">
                            <img
                              src={message.imageUrl}
                              alt="Uploaded or generated"
                              className="max-w-full h-auto rounded-lg"
                            />
                            {message.isGeneratedImage && (
                              <button
                                onClick={() => downloadImage(message.imageUrl!, `pakaian-adat-${Date.now()}.png`)}
                                className="mt-2 flex items-center text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 transition-colors"
                              >
                                <Download className="h-3 w-3 mr-1" />
                                Download
                              </button>
                            )}
                          </div>
                        )}
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
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input chat */}
              <div className="border-t border-gray-200 p-4">
                <div className="flex space-x-3 items-center">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputMessage(e.target.value)}
                    onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && handleSendMessage()}
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

        {/* Kemampuan AI */}
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
              <h3 className="font-bold text-gray-900 mb-2">🎯 Transformasi Foto AI</h3>
              <p className="text-gray-600 text-sm">Mengubah foto Anda menjadi mengenakan pakaian adat Indonesia</p>
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