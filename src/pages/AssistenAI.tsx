import React, { useState, useEffect, useRef } from 'react';
import { Bot, Send, User, Sparkles, MessageCircle, ChefHat, Brain } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ReactMarkdown from 'react-markdown';

// Define TypeScript types for the application's data structures
interface Message {
  id: number;
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
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

// API Key setup for Gemini. This will be automatically provided by the Canvas environment.
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

// Data kuis untuk fitur interaktif (50 soal)
const allQuizQuestions: QuizQuestion[] = [
  // Pakaian Adat
  {
    question: "Apa nama pakaian adat dari Sumatera Barat yang dikenakan oleh wanita dengan penutup kepala berbentuk tanduk kerbau?",
    options: ["A. Ulos", "B. Bundo Kanduang", "C. Payas Agung", "D. Baju Bodo"],
    answer: "B",
    explanation: "Benar! Bundo Kanduang adalah pakaian adat wanita Minangkabau yang melambangkan kebesaran dan status ibu dalam adat."
  },
  {
    question: "Pakaian adat 'Ulos' berasal dari suku mana?",
    options: ["A. Batak", "B. Asmat", "C. Dayak", "D. Minangkabau"],
    answer: "A",
    explanation: "Tepat sekali! Ulos adalah kain tenun tradisional Batak yang memiliki makna mendalam dan digunakan dalam berbagai upacara adat."
  },
  {
    question: "Apa nama pakaian adat dari Sulawesi Selatan yang terkenal dengan bentuknya yang longgar dan lebar?",
    options: ["A. Baju Cele", "B. Baju Bodo", "C. Kebaya", "D. Koteka"],
    answer: "B",
    explanation: "Benar! Baju Bodo adalah pakaian adat tradisional suku Bugis-Makassar yang merupakan salah satu pakaian tertua di dunia."
  },
  {
    question: "Pakaian adat 'Payas Agung' berasal dari mana?",
    options: ["A. Aceh", "B. Bali", "C. Jawa Tengah", "D. Papua"],
    answer: "B",
    explanation: "Tepat sekali! Payas Agung adalah pakaian adat kebesaran dari Bali yang sering digunakan dalam upacara pernikahan."
  },
  {
    question: "Pakaian adat 'Baju Cele' berasal dari provinsi mana?",
    options: ["A. Maluku", "B. Nusa Tenggara Timur", "C. Kalimantan Timur", "D. Riau"],
    answer: "A",
    explanation: "Benar! Baju Cele adalah pakaian adat dari Maluku yang memiliki motif kotak-kotak."
  },
  {
    question: "Apa nama pakaian adat dari Jawa Tengah yang sering dipakai oleh bangsawan?",
    options: ["A. Kebaya", "B. Kain Batik", "C. Beskap", "D. Blangkon"],
    answer: "C",
    explanation: "Tepat sekali! Beskap adalah atasan resmi pria Jawa yang sering dipadukan dengan blangkon dan kain batik."
  },
  {
    question: "Suku Dayak di Kalimantan memiliki pakaian adat yang terbuat dari bahan apa?",
    options: ["A. Kulit kayu", "B. Kain katun", "C. Sutra", "D. Kulit hewan"],
    answer: "A",
    explanation: "Benar! Pakaian adat suku Dayak sering dibuat dari kulit kayu, terutama kulit kayu paha, yang dihiasi manik-manik."
  },
  {
    question: "Pakaian adat 'Aesan Gede' adalah pakaian kebesaran dari provinsi mana?",
    options: ["A. Jambi", "B. Lampung", "C. Sumatera Selatan", "D. Bengkulu"],
    answer: "C",
    explanation: "Tepat sekali! Aesan Gede adalah pakaian pengantin tradisional Sumatera Selatan yang melambangkan kebesaran Sriwijaya."
  },
  {
    question: "Pakaian 'Koteka' adalah pakaian tradisional dari daerah mana?",
    options: ["A. Maluku", "B. Papua", "C. Sulawesi", "D. Sumatera Utara"],
    answer: "B",
    explanation: "Benar! Koteka adalah pakaian tradisional pria Papua yang terbuat dari labu air."
  },
  {
    question: "Apa nama pakaian adat pria Sunda yang sering disebut 'Pangsi'?",
    options: ["A. Baju Koko", "B. Peci", "C. Pangsi", "D. Jas tutup"],
    answer: "C",
    explanation: "Tepat sekali! Pangsi adalah pakaian tradisional pria Sunda yang sederhana dan nyaman."
  },
  {
    question: "Pakaian adat yang terkenal dengan kain songketnya berasal dari provinsi mana?",
    options: ["A. Bali", "B. NTB", "C. Sumatera Selatan", "D. Aceh"],
    answer: "C",
    explanation: "Benar! Songket Palembang adalah kain tenun tradisional Sumatera Selatan yang sangat mewah dan berharga."
  },
  {
    question: "Apa nama pakaian adat dari Gorontalo yang dipakai saat upacara adat pernikahan?",
    options: ["A. Biliu dan Makuta", "B. Baju Kurung", "C. Teluk Belanga", "D. Baju Bodo"],
    answer: "A",
    explanation: "Tepat sekali! Biliu (untuk wanita) dan Makuta (untuk pria) adalah pakaian adat pengantin Gorontalo."
  },
  {
    question: "Pakaian adat 'Teluk Belanga' berasal dari daerah mana?",
    options: ["A. Riau", "B. Jambi", "C. Kepulauan Riau", "D. DKI Jakarta"],
    answer: "C",
    explanation: "Benar! Teluk Belanga adalah pakaian adat pria Kepulauan Riau, yang sering dipadukan dengan sarung dan kopiah."
  },
  {
    question: "Apa nama pakaian adat dari Kalimantan Timur yang terbuat dari bahan alami?",
    options: ["A. Baju King Baba", "B. Baju Misang", "C. Baju Kebaya", "D. Baju Teluk Belanga"],
    answer: "A",
    explanation: "Tepat sekali! Baju King Baba adalah pakaian adat suku Dayak di Kalimantan Timur, terbuat dari kulit kayu. "
  },
  {
    question: "Pakaian 'Baju Kurung' merupakan pakaian adat wanita dari beberapa daerah, termasuk...",
    options: ["A. Jawa Barat", "B. Sumatera Barat", "C. Jawa Timur", "D. Kalimantan Selatan"],
    answer: "B",
    explanation: "Benar! Baju Kurung adalah pakaian adat wanita Melayu, dan banyak ditemukan di Sumatera Barat."
  },
  // Seni Pertunjukan
  {
    question: "Tari Kecak berasal dari daerah mana di Indonesia?",
    options: ["A. Sumatera Barat", "B. Bali", "C. Sulawesi Selatan", "D. Jawa Tengah"],
    answer: "B",
    explanation: "Benar! Tari Kecak adalah seni pertunjukan unik dari Bali yang tidak diiringi instrumen musik, melainkan suara dari para penarinya."
  },
  {
    question: "Apa nama alat musik tradisional dari Jawa Barat yang terbuat dari bambu?",
    options: ["A. Angklung", "B. Sasando", "C. Kolintang", "D. Gendang"],
    answer: "A",
    explanation: "Tepat sekali! Angklung adalah alat musik multitonal yang dimainkan dengan cara digoyangkan."
  },
  {
    question: "Tari Saman yang terkenal dengan gerakan tepuk tangan dan dada berasal dari provinsi mana?",
    options: ["A. Aceh", "B. Sumatera Utara", "C. Riau", "D. Jambi"],
    answer: "A",
    explanation: "Benar! Tari Saman adalah tarian tradisional suku Gayo dari Aceh yang menampilkan kekompakan dan kecepatan gerakan."
  },
  {
    question: "Alat musik 'Sasando' berasal dari mana?",
    options: ["A. Maluku", "B. Papua", "C. Nusa Tenggara Timur", "D. Sulawesi Utara"],
    answer: "C",
    explanation: "Tepat sekali! Sasando adalah alat musik petik dari Pulau Rote, Nusa Tenggara Timur, yang terbuat dari daun lontar."
  },
  {
    question: "Tarian 'Pendet' merupakan tarian penyambutan yang berasal dari...",
    options: ["A. Jawa Timur", "B. Bali", "C. Jawa Tengah", "D. Sumatera Utara"],
    answer: "B",
    explanation: "Benar! Tari Pendet adalah tarian penyambutan yang berasal dari Bali, awalnya digunakan sebagai tarian persembahan di pura."
  },
  {
    question: "Alat musik tradisional 'Kolintang' berasal dari suku mana?",
    options: ["A. Suku Minahasa", "B. Suku Batak", "C. Suku Jawa", "D. Suku Dayak"],
    answer: "A",
    explanation: "Tepat sekali! Kolintang adalah alat musik perkusi dari Minahasa, Sulawesi Utara, yang terbuat dari bilah-bilah kayu."
  },
  {
    question: "Tarian 'Reog Ponorogo' berasal dari provinsi mana?",
    options: ["A. Jawa Tengah", "B. Jawa Timur", "C. Jawa Barat", "D. Yogyakarta"],
    answer: "B",
    explanation: "Benar! Reog Ponorogo adalah kesenian tradisional dari Ponorogo, Jawa Timur, yang terkenal dengan topeng singa raksasanya."
  },
  {
    question: "Seni pertunjukan 'Wayang Kulit' paling terkenal dari daerah mana?",
    options: ["A. Bali", "B. Jawa", "C. Sumatera", "D. Kalimantan"],
    answer: "B",
    explanation: "Tepat sekali! Wayang Kulit adalah seni pertunjukan bayangan dari Jawa yang diakui UNESCO sebagai Masterpiece of Oral and Intangible Heritage of Humanity."
  },
  {
    question: "Musik 'Gamelan' adalah ansambel musik tradisional dari...",
    options: ["A. Jawa dan Bali", "B. Sumatera dan Jawa", "C. Bali dan Sumatera", "D. Kalimantan dan Sulawesi"],
    answer: "A",
    explanation: "Benar! Gamelan adalah ansambel musik yang terdiri dari instrumen perkusi metalofon dan gong, populer di Jawa dan Bali."
  },
  {
    question: "Tari 'Jaipong' adalah tarian tradisional dari provinsi mana?",
    options: ["A. DKI Jakarta", "B. Jawa Barat", "C. Jawa Tengah", "D. Banten"],
    answer: "B",
    explanation: "Tepat sekali! Jaipong adalah tarian pergaulan yang modern dari Jawa Barat, diciptakan oleh Gugum Gumbira."
  },
  {
    question: "Apa nama alat musik gesek tradisional dari Sumatera Utara?",
    options: ["A. Rebab", "B. Sape", "C. Gendang", "D. Gulingtangan"],
    answer: "A",
    explanation: "Benar! Rebab adalah alat musik gesek yang juga ditemukan di berbagai budaya lain di Indonesia."
  },
  {
    question: "Tarian yang terkenal dengan gerakan lincah dan cepat, yang menceritakan tentang perjuangan Pangeran Diponegoro, adalah?",
    options: ["A. Tari Bedhaya", "B. Tari Serimpi", "C. Tari Kuda Lumping", "D. Tari Perang"],
    answer: "C",
    explanation: "Tepat sekali! Tari Kuda Lumping adalah tarian tradisional Jawa yang menampilkan penari menunggang kuda buatan dari bambu."
  },
  {
    question: "Apa nama alat musik petik dari Tapanuli, Sumatera Utara, yang mirip gitar?",
    options: ["A. Hasapi", "B. Saluang", "C. Rebab", "D. Suling"],
    answer: "A",
    explanation: "Benar! Hasapi adalah alat musik petik tradisional suku Batak yang digunakan untuk mengiringi musik vokal."
  },
  {
    question: "Tarian 'Piring' yang penarinya menggunakan piring sebagai properti berasal dari provinsi mana?",
    options: ["A. Sumatera Barat", "B. Bengkulu", "C. Jambi", "D. Riau"],
    answer: "A",
    explanation: "Tepat sekali! Tari Piring adalah tarian tradisional Minangkabau yang sering ditampilkan saat acara panen raya."
  },
  {
    question: "Seni pertunjukan 'Ketoprak' yang menggabungkan drama dan musik berasal dari...",
    options: ["A. Jawa Barat", "B. Jawa Timur", "C. Yogyakarta", "D. Jawa Tengah"],
    answer: "D",
    explanation: "Benar! Ketoprak adalah seni teater rakyat Jawa yang berasal dari Surakarta, Jawa Tengah."
  },
  // Kuliner
  {
    question: "Rendang, masakan daging pedas yang diakui sebagai salah satu makanan terlezat di dunia, berasal dari...",
    options: ["A. Padang", "B. Aceh", "C. Jakarta", "D. Bali"],
    answer: "A",
    explanation: "Tepat sekali! Rendang adalah masakan khas suku Minangkabau yang dimasak perlahan dengan santan dan rempah-rempah."
  },
  {
    question: "Apa nama kuliner khas Palembang yang terbuat dari olahan ikan dan sagu?",
    options: ["A. Bakso", "B. Coto", "C. Pempek", "D. Sate"],
    answer: "C",
    explanation: "Benar! Pempek adalah makanan khas Palembang yang disajikan dengan kuah cuka hitam yang asam."
  },
  {
    question: "Gudeg, masakan nangka muda yang dimasak dengan santan dan gula merah, berasal dari...",
    options: ["A. Solo", "B. Yogyakarta", "C. Semarang", "D. Surabaya"],
    answer: "B",
    explanation: "Tepat sekali! Gudeg adalah masakan khas Yogyakarta dan merupakan ikon kuliner kota tersebut."
  },
  {
    question: "Apa nama sate khas Madura yang terkenal dengan bumbu kacangnya?",
    options: ["A. Sate Maranggi", "B. Sate Lilit", "C. Sate Padang", "D. Sate Madura"],
    answer: "D",
    explanation: "Benar! Sate Madura disajikan dengan bumbu kacang yang lezat dan potongan daging ayam atau kambing."
  },
  {
    question: "Nasi Liwet adalah makanan khas dari daerah mana?",
    options: ["A. Banten", "B. Jawa Barat", "C. Jawa Tengah", "D. Jawa Timur"],
    answer: "C",
    explanation: "Tepat sekali! Nasi Liwet adalah hidangan nasi gurih khas Solo, Jawa Tengah, yang dimasak dengan santan, daun salam, dan serai."
  },
  {
    question: "Apa nama kuliner khas Makassar yang berupa sup daging sapi dengan bumbu kacang yang kental?",
    options: ["A. Coto Makassar", "B. Sop Konro", "C. Pallu Basa", "D. Es Palu Butung"],
    answer: "A",
    explanation: "Benar! Coto Makassar adalah sup daging sapi yang dimasak dengan bumbu khas Makassar dan disajikan dengan burasa atau ketupat."
  },
  {
    question: "Rawon, sup daging berwarna hitam, berasal dari...",
    options: ["A. Jawa Tengah", "B. Jawa Timur", "C. Bali", "D. Sumatera Utara"],
    answer: "B",
    explanation: "Tepat sekali! Rawon adalah makanan khas Jawa Timur, terutama Surabaya, yang mendapatkan warna hitamnya dari kluwek."
  },
  {
    question: "Soto Betawi, soto khas Jakarta, menggunakan bahan dasar apa untuk kuahnya?",
    options: ["A. Susu dan santan", "B. Santan", "C. Kaldu ayam", "D. Kaldu sapi"],
    answer: "A",
    explanation: "Benar! Soto Betawi adalah soto yang khas dengan kuah kental dari campuran susu dan santan."
  },
  {
    question: "Apa nama kuliner khas Bali yang terbuat dari daging cincang yang dililitkan pada tusuk sate?",
    options: ["A. Sate Maranggi", "B. Sate Lilit", "C. Sate Padang", "D. Sate Ayam"],
    answer: "B",
    explanation: "Tepat sekali! Sate Lilit adalah sate khas Bali yang terbuat dari daging ikan atau ayam cincang yang dibumbui."
  },
  {
    question: "Makanan 'Papeda', yang terbuat dari sagu, adalah makanan pokok dari daerah...",
    options: ["A. Sulawesi", "B. Kalimantan", "C. Maluku dan Papua", "D. Nusa Tenggara"],
    answer: "C",
    explanation: "Benar! Papeda adalah makanan pokok yang sering disajikan dengan ikan kuah kuning, sangat populer di Maluku dan Papua."
  },
  {
    question: "Mie Aceh terkenal dengan rasa pedasnya dan menggunakan jenis mie apa?",
    options: ["A. Mie instan", "B. Mie kuning tebal", "C. Bihun", "D. Mie keriting"],
    answer: "B",
    explanation: "Tepat sekali! Mie Aceh menggunakan mie kuning tebal yang dimasak dengan bumbu pedas yang kaya rempah."
  },
  {
    question: "Apa nama kue tradisional dari Betawi yang terbuat dari beras ketan dan kelapa?",
    options: ["A. Kue ape", "B. Kue cubit", "C. Kue pancong", "D. Kue putu"],
    answer: "C",
    explanation: "Benar! Kue Pancong adalah jajanan tradisional Betawi yang rasanya gurih dari kelapa parut."
  },
  {
    question: "Makanan 'Karedok' adalah hidangan sayuran mentah dengan bumbu kacang yang berasal dari...",
    options: ["A. Jawa Barat", "B. Jawa Tengah", "C. Banten", "D. DKI Jakarta"],
    answer: "A",
    explanation: "Tepat sekali! Karedok adalah makanan khas Sunda yang mirip dengan gado-gado, tetapi sayurannya mentah."
  },
  {
    question: "Apa nama makanan khas Sumatera Barat yang terbuat dari singkong dan ikan teri?",
    options: ["A. Keripik singkong", "B. Galamai", "C. Karupuak sanjai", "D. Balado"],
    answer: "C",
    explanation: "Benar! Karupuak Sanjai adalah kerupuk singkong yang renyah dan diberi bumbu balado pedas."
  },
  {
    question: "Sup 'Brenebon', sup kacang merah dengan daging, adalah makanan khas dari...",
    options: ["A. Maluku", "B. Sulawesi Utara", "C. Bali", "D. Sumatera Utara"],
    answer: "B",
    explanation: "Tepat sekali! Sup Brenebon adalah hidangan khas dari Manado, Sulawesi Utara, yang dipengaruhi oleh kuliner Belanda."
  },
  // Lain-lain (Sejarah, Bahasa, Tradisi)
  {
    question: "Istilah 'Bhinneka Tunggal Ika' berasal dari kitab apa?",
    options: ["A. Sutasoma", "B. Negarakertagama", "C. Pararaton", "D. Arjunawiwaha"],
    answer: "A",
    explanation: "Benar! 'Bhinneka Tunggal Ika' yang artinya 'Berbeda-beda tetapi tetap satu' adalah kutipan dari kitab Sutasoma karya Mpu Tantular."
  },
  {
    question: "Upacara 'Ngaben' adalah upacara pembakaran jenazah yang terkenal dari budaya...",
    options: ["A. Jawa", "B. Batak", "C. Sunda", "D. Bali"],
    answer: "D",
    explanation: "Tepat sekali! Ngaben adalah upacara adat Hindu di Bali untuk mengantarkan roh leluhur ke alam baka."
  },
  {
    question: "Bahasa daerah yang paling banyak penuturnya di Indonesia adalah...",
    options: ["A. Sunda", "B. Jawa", "C. Batak", "D. Melayu"],
    answer: "B",
    explanation: "Benar! Bahasa Jawa adalah bahasa daerah dengan penutur terbanyak di Indonesia."
  },
  {
    question: "Apa nama rumah adat dari provinsi Sulawesi Selatan yang berbentuk panggung dengan atap melengkung?",
    options: ["A. Rumah Gadang", "B. Rumah Honai", "C. Rumah Tongkonan", "D. Rumah Toraja"],
    answer: "C",
    explanation: "Tepat sekali! Rumah Tongkonan adalah rumah adat suku Toraja yang terkenal dengan atapnya yang unik dan ukirannya."
  },
  {
    question: "Tahun Baru Imlek di Indonesia memiliki tradisi unik, salah satunya adalah pertunjukan...",
    options: ["A. Barongsai", "B. Ondel-ondel", "C. Reog", "D. Wayang"],
    answer: "A",
    explanation: "Benar! Barongsai adalah tarian tradisional Tiongkok yang sering dipertunjukkan saat perayaan Imlek di Indonesia."
  },
  {
    question: "Tugu Monas di Jakarta melambangkan...",
    options: ["A. Kejayaan Majapahit", "B. Perjuangan Kemerdekaan Indonesia", "C. Kekayaan alam Indonesia", "D. Persatuan dan Kesatuan"],
    answer: "B",
    explanation: "Tepat sekali! Monumen Nasional atau Monas didirikan untuk mengenang perjuangan rakyat Indonesia merebut kemerdekaan."
  },
  {
    question: "Upacara 'Tabuik' yang memperingati kematian cucu Nabi Muhammad SAW, berasal dari...",
    options: ["A. Aceh", "B. Bengkulu", "C. Sumatera Barat", "D. Jambi"],
    answer: "C",
    explanation: "Benar! Tabuik adalah upacara tradisional di Pariaman, Sumatera Barat, yang merupakan bagian dari perayaan Asyura."
  },
  {
    question: "Alat musik petik 'Sape' adalah alat musik tradisional dari suku...",
    options: ["A. Batak", "B. Dayak", "C. Bugis", "D. Minangkabau"],
    answer: "B",
    explanation: "Tepat sekali! Sape adalah alat musik petik dari Kalimantan Timur yang mirip dengan gitar."
  },
  {
    question: "Pakaian adat 'Ulos' sering diberikan sebagai...",
    options: ["A. Hadiah", "B. Cenderamata", "C. Lambang kehormatan dan kasih sayang", "D. Alat pembayaran"],
    answer: "C",
    explanation: "Benar! Ulos memiliki makna mendalam dan sering diberikan dalam upacara adat sebagai simbol restu, kasih sayang, dan kehormatan."
  },
  {
    question: "Bahasa daerah yang digunakan di Maluku adalah...",
    options: ["A. Bahasa Minahasa", "B. Bahasa Melayu Ambon", "C. Bahasa Sunda", "D. Bahasa Jawa"],
    answer: "B",
    explanation: "Tepat sekali! Bahasa Melayu Ambon adalah dialek bahasa Melayu yang digunakan di Maluku."
  },
  {
    question: "Rumah adat 'Honai' adalah rumah tradisional dari daerah...",
    options: ["A. Papua", "B. Maluku", "C. Nusa Tenggara Timur", "D. Sulawesi"],
    answer: "A",
    explanation: "Benar! Honai adalah rumah adat suku Dani di Papua yang berbentuk bulat dan terbuat dari kayu."
  },
  {
    question: "Upacara 'Grebeg Maulud' yang merayakan kelahiran Nabi Muhammad SAW, berasal dari...",
    options: ["A. Jawa Tengah", "B. Yogyakarta", "C. Jawa Timur", "D. DKI Jakarta"],
    answer: "B",
    explanation: "Tepat sekali! Grebeg Maulud adalah upacara tahunan di Keraton Yogyakarta untuk memperingati hari kelahiran Nabi Muhammad SAW."
  },
  {
    question: "Pencak Silat adalah seni bela diri tradisional dari...",
    options: ["A. Jepang", "B. Tiongkok", "C. Indonesia", "D. Korea"],
    answer: "C",
    explanation: "Benar! Pencak Silat adalah seni bela diri asli Indonesia yang diakui sebagai Warisan Budaya Takbenda Dunia oleh UNESCO."
  },
  {
    question: "Apa nama upacara adat yang merayakan selesainya musim panen padi di beberapa daerah Indonesia?",
    options: ["A. Sedekah Bumi", "B. Grebeg Suro", "C. Kasada", "D. Seren Taun"],
    answer: "D",
    explanation: "Tepat sekali! Seren Taun adalah upacara adat panen padi yang biasanya dirayakan oleh masyarakat Sunda."
  },
  {
    question: "Lagu 'Apuse' adalah lagu daerah dari provinsi mana?",
    options: ["A. Jawa Barat", "B. Papua", "C. Sumatera Selatan", "D. Sulawesi Utara"],
    answer: "B",
    explanation: "Benar! 'Apuse' adalah lagu tradisional dari daerah Papua yang bercerita tentang perpisahan dengan kakek dan nenek."
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

const AssistenAI = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: 'Halo! Saya BoetDaya. Saya siap membantu Anda menjelajahi kekayaan budaya Indonesia. Apa yang ingin Anda ketahui hari ini?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [quizState, setQuizState] = useState<'idle' | 'active'>('idle'); // 'idle', 'active'
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedQuestions, setSelectedQuestions] = useState<QuizQuestion[]>([]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions: string[] = [
    'Ceritakan tentang batik Indonesia',
    'Apa makna filosofi dari tari Saman?',
    'Rekomendasi kuliner Jawa Timur',
    'Perbedaan rumah adat Jawa dan Bali',
    'Mulai Kuis Budaya'
  ];

  const aiFeatures: AIFeature[] = [
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

  const startQuiz = (): void => {
    // Mengacak seluruh array dan mengambil 10 pertanyaan pertama
    const shuffledQuestions: QuizQuestion[] = shuffleArray([...allQuizQuestions]);
    const quizSubset = shuffledQuestions.slice(0, 10);
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
          {/* Pertanyaan cepat */}
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

          {/* Antarmuka chat */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Header chat */}
              <div className="bg-gradient-to-r from-red-600 to-red-700 p-4">
                <div className="flex items-center">
                  <Bot className="h-6 w-6 text-white mr-3" />
                  <div>
                    <h3 className="text-white font-semibold">BoetDaya</h3>
                    <p className="text-red-100 text-sm">Online - Siap membantu</p>
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
