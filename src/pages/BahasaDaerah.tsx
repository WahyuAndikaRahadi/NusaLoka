import React, { useState } from 'react';
import { Play, Volume2, BookOpen, Users, MapPin, ExternalLink } from 'lucide-react';

interface Language {
  id: string;
  name: string;
  province: string;
  speakers: string;
  characteristics: string[];
  phrases: { id: string; indonesian: string; local: string; pronunciation: string }[];
  videoUrl: string;
  image: string;
  description: string;
}

const BahasaDaerah = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('javanese');

  const languages: Language[] = [
    // Sumatera
    {
      id: 'acehnese',
      name: 'Bahasa Aceh',
      province: 'Aceh',
      speakers: '3.5 juta',
      characteristics: [
        'Pengaruh bahasa Arab dan Melayu',
        'Kaya akan istilah keislaman',
        'Dialek yang beragam',
        'Tradisi lisan yang kuat'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Selamat bak uro', pronunciation: 'se-la-mat bak u-ro' },
        { id: '2', indonesian: 'Terima kasih', local: 'Trima genaseh', pronunciation: 'tri-ma ge-na-seh' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Pajan khabar?', pronunciation: 'pa-jan kha-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampoe jumpa', pronunciation: 'sam-poe jum-pa' }
      ],
      videoUrl: 'https://www.youtube.com/embed/Nw8IPbFDwqI',
      image: 'https://1.bp.blogspot.com/-GzP_eHBB5xA/Xcitvh3nwmI/AAAAAAAABNo/cJQwE6xNKuU929LcdGcqAdEPE5XcbrZUQCLcBGAsYHQ/s1600/motif%2Bbatik%2Bgayo%2BAceh.png',
      description: 'Bahasa Aceh adalah bahasa yang kaya akan pengaruh Arab dan Melayu, mencerminkan sejarah panjang Aceh sebagai pusat perdagangan dan penyebaran Islam di Nusantara.'
    },
    {
      id: 'batak_toba',
      name: 'Bahasa Batak Toba',
      province: 'Sumatera Utara',
      speakers: '2 juta',
      characteristics: [
        'Aksara Batak yang khas',
        'Sistem kekerabatan yang kompleks',
        'Tradisi umpasa (pepatah)',
        'Pengaruh bahasa Sanskerta'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Horas ma di ari', pronunciation: 'ho-ras ma di a-ri' },
        { id: '2', indonesian: 'Terima kasih', local: 'Mauliate', pronunciation: 'mau-li-a-te' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Aha kabar mu?', pronunciation: 'a-ha ka-bar mu' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Jumpa muse', pronunciation: 'jum-pa mu-se' }
      ],
      videoUrl: 'https://www.youtube.com/embed/BA7cD_zBY6Y',
      image: 'https://as1.ftcdn.net/v2/jpg/04/84/68/84/1000_F_484688443_oISuzjjMEToEtvz4ufjhZOyZuUa4Lzxx.jpg',
      description: 'Bahasa Batak Toba memiliki aksara dan tradisi lisan yang sangat kaya, terutama dalam bentuk umpasa yang mengandung nilai-nilai filosofis mendalam.'
    },
    {
      id: 'nias',
      name: 'Bahasa Nias',
      province: 'Sumatera Utara',
      speakers: '770 ribu',
      characteristics: [
        'Bahasa Austronesia purba',
        'Tradisi megalitik',
        'Sistem honorifik',
        'Kosakata ritual yang unik'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Ya ahowu', pronunciation: 'ya a-ho-wu' },
        { id: '2', indonesian: 'Terima kasih', local: 'Saohagolo', pronunciation: 'sa-o-ha-go-lo' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Hadia kabar?', pronunciation: 'ha-di-a ka-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai ketemu', pronunciation: 'sam-pai ke-te-mu' }
      ],
      videoUrl: 'https://www.youtube.com/embed/tqvFJhNbnHY',
      image: 'https://static.vecteezy.com/system/resources/previews/002/490/931/original/geometric-ethnic-oriental-seamless-pattern-traditional-design-for-background-free-vector.jpg',
      description: 'Bahasa Nias adalah bahasa Austronesia purba dengan tradisi megalitik yang unik dan sistem budaya yang sangat khas di Pulau Nias.'
    },
    {
      id: 'minangkabau',
      name: 'Bahasa Minangkabau',
      province: 'Sumatera Barat',
      speakers: '6.5 juta',
      characteristics: [
        'Sistem matrilineal dalam bahasa',
        'Kaya akan pepatah dan pantun',
        'Dialek yang beragam',
        'Pengaruh bahasa Melayu'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Salamaik pagi', pronunciation: 'sa-la-maik pa-gi' },
        { id: '2', indonesian: 'Terima kasih', local: 'Tarimo kasih', pronunciation: 'ta-ri-mo ka-sih' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Apo kaba?', pronunciation: 'a-po ka-ba' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai batamu', pronunciation: 'sam-pai ba-ta-mu' }
      ],
      videoUrl: 'https://www.youtube.com/embed/DFbnaN6dnOw',
      image: 'https://images.pexels.com/photos/9343860/pexels-photo-9343860.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Minangkabau mencerminkan budaya matrilineal yang unik dan kaya akan tradisi lisan berupa pepatah-petitih yang sarat makna.'
    },
    {
      id: 'mentawai',
      name: 'Bahasa Mentawai',
      province: 'Sumatera Barat',
      speakers: '64 ribu',
      characteristics: [
        'Bahasa Austronesia purba',
        'Tradisi animisme',
        'Kosakata alam yang kaya',
        'Sistem klasifikasi unik'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Selamat esso', pronunciation: 'se-la-mat es-so' },
        { id: '2', indonesian: 'Terima kasih', local: 'Tarima kasi', pronunciation: 'ta-ri-ma ka-si' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Apa kabar?', pronunciation: 'a-pa ka-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai ketemu', pronunciation: 'sam-pai ke-te-mu' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Mentawai adalah bahasa Austronesia purba yang masih mempertahankan tradisi animisme dan kearifan lokal Kepulauan Mentawai.'
    },
    {
      id: 'riau_malay',
      name: 'Bahasa Melayu Riau',
      province: 'Riau',
      speakers: '6.4 juta',
      characteristics: [
        'Bahasa Melayu klasik',
        'Tradisi sastra Melayu',
        'Pengaruh bahasa Arab',
        'Dialek istana yang halus'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Selamat pagi', pronunciation: 'se-la-mat pa-gi' },
        { id: '2', indonesian: 'Terima kasih', local: 'Terima kasih', pronunciation: 'te-ri-ma ka-sih' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Apa khabar?', pronunciation: 'a-pa kha-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai berjumpa', pronunciation: 'sam-pai ber-jum-pa' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Melayu Riau adalah akar dari bahasa Indonesia dan memiliki tradisi sastra Melayu yang sangat kaya dan berpengaruh.'
    },
    {
      id: 'kepulauan_riau',
      name: 'Bahasa Melayu Kepri',
      province: 'Kepulauan Riau',
      speakers: '2.1 juta',
      characteristics: [
        'Dialek Melayu kepulauan',
        'Pengaruh bahasa Tionghoa',
        'Tradisi maritim',
        'Kosakata perdagangan'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Selamat pagi', pronunciation: 'se-la-mat pa-gi' },
        { id: '2', indonesian: 'Terima kasih', local: 'Terima kasih', pronunciation: 'te-ri-ma ka-sih' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Apa khabar?', pronunciation: 'a-pa kha-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai jumpa', pronunciation: 'sam-pai jum-pa' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/8837694/pexels-photo-8837694.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Melayu Kepri berkembang di kepulauan dengan pengaruh perdagangan internasional dan komunitas Tionghoa yang besar.'
    },
    {
      id: 'jambi_malay',
      name: 'Bahasa Jambi',
      province: 'Jambi',
      speakers: '3.4 juta',
      characteristics: [
        'Dialek Melayu yang khas',
        'Pengaruh bahasa Minangkabau',
        'Tradisi adat yang kuat',
        'Kosakata pertanian'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Selamat pagi', pronunciation: 'se-la-mat pa-gi' },
        { id: '2', indonesian: 'Terima kasih', local: 'Tarimo kasih', pronunciation: 'ta-ri-mo ka-sih' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Apo khabar?', pronunciation: 'a-po kha-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai ketemu', pronunciation: 'sam-pai ke-te-mu' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/8837694/pexels-photo-8837694.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Jambi adalah dialek Melayu yang berkembang di Jambi dengan pengaruh dari bahasa Minangkabau dan tradisi adat setempat.'
    },
    {
      id: 'palembang_malay',
      name: 'Bahasa Palembang',
      province: 'Sumatera Selatan',
      speakers: '8.1 juta',
      characteristics: [
        'Dialek Melayu Palembang',
        'Tradisi Sriwijaya',
        'Pengaruh bahasa Jawa',
        'Kosakata sungai dan perdagangan'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Selamat pagi', pronunciation: 'se-la-mat pa-gi' },
        { id: '2', indonesian: 'Terima kasih', local: 'Makasih', pronunciation: 'ma-ka-sih' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Apo kabar?', pronunciation: 'a-po ka-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai ketemu', pronunciation: 'sam-pai ke-te-mu' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/9343860/pexels-photo-9343860.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Palembang berkembang dari tradisi Kerajaan Sriwijaya dan menjadi lingua franca di wilayah Sumatera Selatan.'
    },
    {
      id: 'bengkulu_malay',
      name: 'Bahasa Bengkulu',
      province: 'Bengkulu',
      speakers: '1.9 juta',
      characteristics: [
        'Dialek Melayu pesisir',
        'Pengaruh bahasa Rejang',
        'Tradisi lisan',
        'Kosakata pertanian dan maritim'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Selamat pagi', pronunciation: 'se-la-mat pa-gi' },
        { id: '2', indonesian: 'Terima kasih', local: 'Tarimo kasih', pronunciation: 'ta-ri-mo ka-sih' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Apo khabar?', pronunciation: 'a-po kha-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai ketemu', pronunciation: 'sam-pai ke-te-mu' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Bengkulu adalah dialek Melayu pesisir yang berkembang dengan pengaruh dari bahasa Rejang dan tradisi lokal Bengkulu.'
    },
    {
      id: 'rejang',
      name: 'Bahasa Rejang',
      province: 'Bengkulu',
      speakers: '350 ribu',
      characteristics: [
        'Aksara Rejang yang unik',
        'Tradisi megalitik',
        'Sistem adat yang kuat',
        'Pengaruh bahasa Melayu'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Selamat pagi', pronunciation: 'se-la-mat pa-gi' },
        { id: '2', indonesian: 'Terima kasih', local: 'Tarimo kasih', pronunciation: 'ta-ri-mo ka-sih' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Apo khabar?', pronunciation: 'a-po kha-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai ketemu', pronunciation: 'sam-pai ke-te-mu' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/8837694/pexels-photo-8837694.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Rejang memiliki aksara yang unik dan mencerminkan tradisi megalitik serta sistem adat yang masih kuat di masyarakat Rejang.'
    },
    {
      id: 'lampung_api',
      name: 'Bahasa Lampung',
      province: 'Lampung',
      speakers: '1.5 juta',
      characteristics: [
        'Aksara Had Lampung',
        'Pengaruh bahasa Jawa dan Melayu',
        'Sistem tingkatan sosial',
        'Tradisi lisan yang kuat'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Selamat isuk', pronunciation: 'se-la-mat i-suk' },
        { id: '2', indonesian: 'Terima kasih', local: 'Makasih', pronunciation: 'ma-ka-sih' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Napi khabar?', pronunciation: 'na-pi kha-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai ketemu', pronunciation: 'sam-pai ke-te-mu' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/8837694/pexels-photo-8837694.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Lampung memiliki aksara Had Lampung yang unik dan mencerminkan perpaduan budaya dari berbagai suku yang bermukim di Lampung.'
    },
    {
      id: 'bangka_malay',
      name: 'Bahasa Melayu Bangka',
      province: 'Bangka Belitung',
      speakers: '1.4 juta',
      characteristics: [
        'Dialek Melayu kepulauan',
        'Pengaruh bahasa Tionghoa',
        'Tradisi pertambangan',
        'Kosakata maritim'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Selamat pagi', pronunciation: 'se-la-mat pa-gi' },
        { id: '2', indonesian: 'Terima kasih', local: 'Makasih', pronunciation: 'ma-ka-sih' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Apo khabar?', pronunciation: 'a-po kha-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai jumpa', pronunciation: 'sam-pai jum-pa' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/9343860/pexels-photo-9343860.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Melayu Bangka berkembang di kepulauan dengan pengaruh komunitas Tionghoa dan tradisi pertambangan timah.'
    },

    // Jawa
    {
      id: 'betawi',
      name: 'Bahasa Betawi',
      province: 'DKI Jakarta',
      speakers: '2.7 juta',
      characteristics: [
        'Campuran berbagai bahasa',
        'Pengaruh Melayu, Jawa, Sunda',
        'Bahasa pergaulan yang dinamis',
        'Kaya akan humor dan sindiran'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Selamat pagi', pronunciation: 'se-la-mat pa-gi' },
        { id: '2', indonesian: 'Terima kasih', local: 'Makasih ye', pronunciation: 'ma-ka-sih ye' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Ape kabar?', pronunciation: 'a-pe ka-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai ketemu lagi', pronunciation: 'sam-pai ke-te-mu la-gi' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/9343860/pexels-photo-9343860.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Betawi adalah hasil perpaduan berbagai bahasa yang mencerminkan keberagaman etnis di Jakarta sebagai kota metropolitan.'
    },
    {
      id: 'sundanese',
      name: 'Bahasa Sunda',
      province: 'Jawa Barat',
      speakers: '40 juta',
      characteristics: [
        'Intonasi yang melodis dan lembut',
        'Banyak kosakata yang halus',
        'Pengaruh bahasa Sanskerta',
        'Sistem tingkatan yang sederhana'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Wilujeng enjing', pronunciation: 'wi-lu-jeng en-jing' },
        { id: '2', indonesian: 'Terima kasih', local: 'Hatur nuhun', pronunciation: 'ha-tur nu-hun' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Kumaha damang?', pronunciation: 'ku-ma-ha da-mang' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Dugi ka tepang deui', pronunciation: 'du-gi ka te-pang de-ui' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Sunda dikenal dengan kelembutan intonasi dan kehalusannya. Banyak digunakan di Jawa Barat dan memiliki tradisi sastra yang kaya.'
    },
    {
      id: 'javanese',
      name: 'Bahasa Jawa',
      province: 'Jawa Tengah',
      speakers: '75 juta',
      characteristics: [
        'Memiliki tingkatan bahasa (ngoko, madya, krama)',
        'Kaya akan ungkapan filosofis',
        'Pengaruh kuat dari aksara Jawa',
        'Sistem honorifik yang kompleks'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Sugeng enjing', pronunciation: 'su-geng en-jing' },
        { id: '2', indonesian: 'Terima kasih', local: 'Matur nuwun', pronunciation: 'ma-tur nu-wun' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Pripun kabare?', pronunciation: 'pri-pun ka-ba-re' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sugeng tindak', pronunciation: 'su-geng tin-dak' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/9343860/pexels-photo-9343860.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Jawa adalah salah satu bahasa daerah dengan jumlah penutur terbanyak di Indonesia. Memiliki sistem tingkatan bahasa yang mencerminkan struktur sosial masyarakat Jawa.'
    },
    {
      id: 'yogyakarta_javanese',
      name: 'Bahasa Jawa Yogyakarta',
      province: 'DI Yogyakarta',
      speakers: '3.4 juta',
      characteristics: [
        'Dialek Jawa halus',
        'Tradisi keraton',
        'Tingkatan bahasa yang sangat halus',
        'Pengaruh budaya istana'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Sugeng enjang', pronunciation: 'su-geng en-jang' },
        { id: '2', indonesian: 'Terima kasih', local: 'Matur sembah nuwun', pronunciation: 'ma-tur sem-bah nu-wun' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Pripun kabare?', pronunciation: 'pri-pun ka-ba-re' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sugeng kondur', pronunciation: 'su-geng kon-dur' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Jawa Yogyakarta adalah dialek Jawa yang sangat halus dengan pengaruh kuat dari tradisi keraton dan budaya istana.'
    },
    {
      id: 'east_javanese',
      name: 'Bahasa Jawa Timur',
      province: 'Jawa Timur',
      speakers: '30 juta',
      characteristics: [
        'Dialek Jawa yang khas',
        'Pengaruh bahasa Madura',
        'Tradisi pesantren',
        'Kosakata Islam yang kaya'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Sugeng enjing', pronunciation: 'su-geng en-jing' },
        { id: '2', indonesian: 'Terima kasih', local: 'Matur suwun', pronunciation: 'ma-tur su-wun' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Piye kabare?', pronunciation: 'pi-ye ka-ba-re' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampek ketemu', pronunciation: 'sam-pek ke-te-mu' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/8837694/pexels-photo-8837694.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Jawa Timur memiliki dialek yang khas dengan pengaruh dari bahasa Madura dan tradisi pesantren yang kuat.'
    },
    {
      id: 'madurese',
      name: 'Bahasa Madura',
      province: 'Jawa Timur',
      speakers: '13.6 juta',
      characteristics: [
        'Tingkatan bahasa yang ketat',
        'Pengaruh bahasa Jawa',
        'Dialek pulau yang khas',
        'Tradisi sastra yang kaya'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Sugeng enjang', pronunciation: 'su-geng en-jang' },
        { id: '2', indonesian: 'Terima kasih', local: 'Tarema kase', pronunciation: 'ta-re-ma ka-se' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Apa kabar?', pronunciation: 'a-pa ka-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampek ketemo', pronunciation: 'sam-pek ke-te-mo' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/8837694/pexels-photo-8837694.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Madura memiliki sistem tingkatan yang sangat ketat dan mencerminkan budaya masyarakat Madura yang menjunjung tinggi sopan santun.'
    },
    {
      id: 'bantenese',
      name: 'Bahasa Banten',
      province: 'Banten',
      speakers: '4.3 juta',
      characteristics: [
        'Mirip dengan bahasa Sunda',
        'Pengaruh bahasa Jawa',
        'Dialek pesisir yang khas',
        'Kosakata maritim yang kaya'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Wilujeng enjing', pronunciation: 'wi-lu-jeng en-jing' },
        { id: '2', indonesian: 'Terima kasih', local: 'Hatur nuhun', pronunciation: 'ha-tur nu-hun' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Kumaha kabar?', pronunciation: 'ku-ma-ha ka-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Dugi ka tepang', pronunciation: 'du-gi ka te-pang' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Banten memiliki kesamaan dengan bahasa Sunda namun dengan ciri khas dialek pesisir yang mencerminkan budaya maritim masyarakat Banten.'
    },

    // Kalimantan
    {
      id: 'pontianak_malay',
      name: 'Bahasa Melayu Pontianak',
      province: 'Kalimantan Barat',
      speakers: '2.1 juta',
      characteristics: [
        'Dialek Melayu yang khas',
        'Pengaruh bahasa Tionghoa',
        'Tradisi multikultural',
        'Kosakata perdagangan'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Selamat pagi', pronunciation: 'se-la-mat pa-gi' },
        { id: '2', indonesian: 'Terima kasih', local: 'Terima kasih', pronunciation: 'te-ri-ma ka-sih' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Apa khabar?', pronunciation: 'a-pa kha-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai jumpa', pronunciation: 'sam-pai jum-pa' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Melayu Pontianak mencerminkan keberagaman etnis di Kalimantan Barat dengan pengaruh Tionghoa, Dayak, dan Melayu.'
    },
    {
      id: 'dayak_ngaju',
      name: 'Bahasa Dayak Ngaju',
      province: 'Kalimantan Tengah',
      speakers: '890 ribu',
      characteristics: [
        'Tradisi lisan yang kuat',
        'Kosakata alam yang kaya',
        'Sistem kepercayaan Kaharingan',
        'Dialek hutan yang unik'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Selamat enjing', pronunciation: 'se-la-mat en-jing' },
        { id: '2', indonesian: 'Terima kasih', local: 'Salamat', pronunciation: 'sa-la-mat' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Napa kabar?', pronunciation: 'na-pa ka-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai ketemu', pronunciation: 'sam-pai ke-te-mu' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/8837694/pexels-photo-8837694.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Dayak Ngaju kaya akan kosakata yang berkaitan dengan alam dan hutan, mencerminkan kehidupan masyarakat Dayak yang dekat dengan alam.'
    },
    {
      id: 'banjarese',
      name: 'Bahasa Banjar',
      province: 'Kalimantan Selatan',
      speakers: '3.5 juta',
      characteristics: [
        'Pengaruh bahasa Melayu yang kuat',
        'Dialek sungai yang khas',
        'Tradisi perdagangan',
        'Kosakata Islam yang kaya'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Selamat pagi', pronunciation: 'se-la-mat pa-gi' },
        { id: '2', indonesian: 'Terima kasih', local: 'Tarima kasih', pronunciation: 'ta-ri-ma ka-sih' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Apa khabar?', pronunciation: 'a-pa kha-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai bejumpa', pronunciation: 'sam-pai be-jum-pa' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Banjar berkembang di sepanjang sungai-sungai Kalimantan Selatan dan mencerminkan budaya perdagangan serta tradisi Islam yang kuat.'
    },
    {
      id: 'kutainese',
      name: 'Bahasa Kutai',
      province: 'Kalimantan Timur',
      speakers: '300 ribu',
      characteristics: [
        'Pengaruh bahasa Melayu',
        'Tradisi kerajaan',
        'Dialek sungai',
        'Kosakata perdagangan'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Selamat pagi', pronunciation: 'se-la-mat pa-gi' },
        { id: '2', indonesian: 'Terima kasih', local: 'Tarima kasih', pronunciation: 'ta-ri-ma ka-sih' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Apa khabar?', pronunciation: 'a-pa kha-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai jumpa', pronunciation: 'sam-pai jum-pa' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/9343860/pexels-photo-9343860.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Kutai berkembang di wilayah bekas Kerajaan Kutai dan memiliki pengaruh kuat dari tradisi kerajaan Melayu.'
    },
    {
      id: 'banjar_north',
      name: 'Bahasa Banjar Utara',
      province: 'Kalimantan Utara',
      speakers: '650 ribu',
      characteristics: [
        'Varian bahasa Banjar',
        'Pengaruh bahasa Dayak',
        'Dialek perbatasan',
        'Tradisi lisan'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Selamat pagi', pronunciation: 'se-la-mat pa-gi' },
        { id: '2', indonesian: 'Terima kasih', local: 'Tarima kasih', pronunciation: 'ta-ri-ma ka-sih' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Apa khabar?', pronunciation: 'a-pa kha-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai bejumpa', pronunciation: 'sam-pai be-jum-pa' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/8837694/pexels-photo-8837694.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Banjar Utara adalah varian bahasa Banjar yang berkembang di Kalimantan Utara dengan pengaruh dari bahasa-bahasa Dayak setempat.'
    },

    // Sulawesi
    {
      id: 'buginese',
      name: 'Bahasa Bugis',
      province: 'Sulawesi Selatan',
      speakers: '5 juta',
      characteristics: [
        'Aksara Lontara yang unik',
        'Tradisi sastra epik',
        'Sistem pelayaran dalam bahasa',
        'Pengaruh bahasa Melayu'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Selamat esso', pronunciation: 'se-la-mat es-so' },
        { id: '2', indonesian: 'Terima kasih', local: 'Tarima kasi', pronunciation: 'ta-ri-ma ka-si' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Aga kabare?', pronunciation: 'a-ga ka-ba-re' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai ketemu', pronunciation: 'sam-pai ke-te-mu' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/9343860/pexels-photo-9343860.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Bugis memiliki aksara Lontara dan tradisi sastra epik yang terkenal, mencerminkan budaya pelayaran dan perdagangan masyarakat Bugis.'
    },
    {
      id: 'makassarese',
      name: 'Bahasa Makassar',
      province: 'Sulawesi Selatan',
      speakers: '2.1 juta',
      characteristics: [
        'Aksara Lontara',
        'Pengaruh bahasa Bugis',
        'Dialek perkotaan',
        'Tradisi maritim'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Selamat esso', pronunciation: 'se-la-mat es-so' },
        { id: '2', indonesian: 'Terima kasih', local: 'Sukuran', pronunciation: 'su-ku-ran' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Apa kabare?', pronunciation: 'a-pa ka-ba-re' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai bertemu', pronunciation: 'sam-pai ber-te-mu' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Makassar adalah bahasa yang berkembang di wilayah perkotaan Makassar dengan pengaruh kuat dari budaya maritim dan perdagangan.'
    },
    {
      id: 'torajan',
      name: 'Bahasa Toraja',
      province: 'Sulawesi Barat',
      speakers: '750 ribu',
      characteristics: [
        'Tradisi megalitik',
        'Sistem kekerabatan yang kompleks',
        'Kosakata ritual yang kaya',
        'Pengaruh bahasa Bugis'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Kurre sumanga', pronunciation: 'kur-re su-ma-nga' },
        { id: '2', indonesian: 'Terima kasih', local: 'Kurre sumanga', pronunciation: 'kur-re su-ma-nga' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Umba kabar?', pronunciation: 'um-ba ka-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai ketemu', pronunciation: 'sam-pai ke-te-mu' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/8837694/pexels-photo-8837694.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Toraja kaya akan kosakata ritual dan mencerminkan tradisi megalitik serta sistem kepercayaan Aluk Todolo yang unik.'
    },
    {
      id: 'mandar',
      name: 'Bahasa Mandar',
      province: 'Sulawesi Barat',
      speakers: '200 ribu',
      characteristics: [
        'Tradisi pelayaran',
        'Pengaruh bahasa Bugis',
        'Dialek pesisir',
        'Kosakata maritim'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Selamat esso', pronunciation: 'se-la-mat es-so' },
        { id: '2', indonesian: 'Terima kasih', local: 'Tarima kasi', pronunciation: 'ta-ri-ma ka-si' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Apa kabar?', pronunciation: 'a-pa ka-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai ketemu', pronunciation: 'sam-pai ke-te-mu' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/9343860/pexels-photo-9343860.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Mandar berkembang di kalangan pelaut Mandar yang terkenal dengan tradisi pelayaran dan perdagangan di Nusantara.'
    },
    {
      id: 'kaili',
      name: 'Bahasa Kaili',
      province: 'Sulawesi Tengah',
      speakers: '400 ribu',
      characteristics: [
        'Dialek yang beragam',
        'Tradisi lisan yang kuat',
        'Pengaruh bahasa Bugis',
        'Kosakata pertanian'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Selamat esso', pronunciation: 'se-la-mat es-so' },
        { id: '2', indonesian: 'Terima kasih', local: 'Tarima kasi', pronunciation: 'ta-ri-ma ka-si' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Apa kabar?', pronunciation: 'a-pa ka-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai ketemu', pronunciation: 'sam-pai ke-te-mu' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Kaili adalah bahasa yang digunakan di Sulawesi Tengah dengan dialek yang beragam dan tradisi lisan yang masih terjaga.'
    },
    {
      id: 'minahasan',
      name: 'Bahasa Minahasa',
      province: 'Sulawesi Utara',
      speakers: '800 ribu',
      characteristics: [
        'Pengaruh bahasa Portugis dan Belanda',
        'Dialek yang beragam',
        'Tradisi Kristen yang kuat',
        'Kosakata modern yang adaptif'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Selamat pagi', pronunciation: 'se-la-mat pa-gi' },
        { id: '2', indonesian: 'Terima kasih', local: 'Tarima kase', pronunciation: 'ta-ri-ma ka-se' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Apa kabar?', pronunciation: 'a-pa ka-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai ketemu', pronunciation: 'sam-pai ke-te-mu' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/8837694/pexels-photo-8837694.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Minahasa mencerminkan sejarah kontak dengan bangsa Eropa dan perkembangan agama Kristen di wilayah Sulawesi Utara.'
    },
    {
      id: 'gorontaloan',
      name: 'Bahasa Gorontalo',
      province: 'Gorontalo',
      speakers: '1.1 juta',
      characteristics: [
        'Pengaruh bahasa Melayu',
        'Sistem vokal yang khas',
        'Tradisi lisan yang kuat',
        'Dialek pesisir'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Selamat pagi', pronunciation: 'se-la-mat pa-gi' },
        { id: '2', indonesian: 'Terima kasih', local: 'Tarima kasi', pronunciation: 'ta-ri-ma ka-si' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Apa kabar?', pronunciation: 'a-pa ka-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai ketemu', pronunciation: 'sam-pai ke-te-mu' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/9343860/pexels-photo-9343860.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Gorontalo adalah bahasa yang berkembang di wilayah pesisir dengan pengaruh kuat dari tradisi maritim dan perdagangan.'
    },
    {
      id: 'tolaki',
      name: 'Bahasa Tolaki',
      province: 'Sulawesi Tenggara',
      speakers: '300 ribu',
      characteristics: [
        'Tradisi lisan yang kuat',
        'Sistem kekerabatan',
        'Pengaruh bahasa Bugis',
        'Dialek pegunungan'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Selamat esso', pronunciation: 'se-la-mat es-so' },
        { id: '2', indonesian: 'Terima kasih', local: 'Tarima kasi', pronunciation: 'ta-ri-ma ka-si' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Apa kabar?', pronunciation: 'a-pa ka-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai ketemu', pronunciation: 'sam-pai ke-te-mu' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/8837694/pexels-photo-8837694.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Tolaki digunakan oleh suku Tolaki di Sulawesi Tenggara dengan tradisi lisan yang kuat dan sistem kekerabatan yang kompleks.'
    },

    // Bali & Nusa Tenggara
    {
      id: 'balinese',
      name: 'Bahasa Bali',
      province: 'Bali',
      speakers: '3.3 juta',
      characteristics: [
        'Aksara Bali yang unik',
        'Pengaruh kuat bahasa Sanskerta',
        'Tingkatan bahasa yang kompleks',
        'Kaya akan istilah keagamaan Hindu'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Rahajeng semeng', pronunciation: 'ra-ha-jeng se-meng' },
        { id: '2', indonesian: 'Terima kasih', local: 'Suksma', pronunciation: 'suk-sma' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Kenken kabare?', pronunciation: 'ken-ken ka-ba-re' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Titiang lunga', pronunciation: 'ti-ti-ang lu-nga' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/8837694/pexels-photo-8837694.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Bali memiliki aksara dan tingkatan bahasa yang sangat kompleks, mencerminkan sistem kasta dan tradisi Hindu-Dharma yang kental.'
    },
    {
      id: 'sasak',
      name: 'Bahasa Sasak',
      province: 'Nusa Tenggara Barat',
      speakers: '2.7 juta',
      characteristics: [
        'Pengaruh bahasa Bali dan Jawa',
        'Tingkatan bahasa yang halus',
        'Tradisi Islam yang kuat',
        'Dialek yang beragam'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Selamat semeng', pronunciation: 'se-la-mat se-meng' },
        { id: '2', indonesian: 'Terima kasih', local: 'Tampi asih', pronunciation: 'tam-pi a-sih' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Ape khabar?', pronunciation: 'a-pe kha-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai ketemu', pronunciation: 'sam-pai ke-te-mu' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/9343860/pexels-photo-9343860.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Sasak berkembang di Lombok dengan pengaruh dari bahasa Bali dan Jawa, serta tradisi Islam yang kuat dalam masyarakat Sasak.'
    },
    {
      id: 'bima',
      name: 'Bahasa Bima',
      province: 'Nusa Tenggara Timur',
      speakers: '500 ribu',
      characteristics: [
        'Tradisi kesultanan',
        'Pengaruh bahasa Melayu',
        'Dialek yang khas',
        'Kosakata Islam'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Selamat fai', pronunciation: 'se-la-mat fai' },
        { id: '2', indonesian: 'Terima kasih', local: 'Nahu', pronunciation: 'na-hu' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Apa kaba?', pronunciation: 'a-pa ka-ba' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai ketemu', pronunciation: 'sam-pai ke-te-mu' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Bima berkembang dari tradisi Kesultanan Bima dan mencerminkan perpaduan budaya lokal dengan pengaruh Islam dan Melayu.'
    },
    {
      id: 'manggarai',
      name: 'Bahasa Manggarai',
      province: 'Nusa Tenggara Timur',
      speakers: '700 ribu',
      characteristics: [
        'Tradisi adat yang kuat',
        'Sistem kekerabatan matrilineal',
        'Kosakata pertanian',
        'Pengaruh bahasa Portugis'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Selamat leso', pronunciation: 'se-la-mat le-so' },
        { id: '2', indonesian: 'Terima kasih', local: 'Tarima kasi', pronunciation: 'ta-ri-ma ka-si' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Apa kabar?', pronunciation: 'a-pa ka-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai ketemu', pronunciation: 'sam-pai ke-te-mu' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/8837694/pexels-photo-8837694.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Manggarai memiliki tradisi adat yang sangat kuat dan sistem kekerabatan matrilineal yang unik di Flores.'
    },

    // Maluku & Papua
    {
      id: 'ambonese',
      name: 'Bahasa Ambon',
      province: 'Maluku',
      speakers: '230 ribu',
      characteristics: [
        'Pengaruh bahasa Portugis dan Belanda',
        'Dialek kepulauan',
        'Tradisi multikultural',
        'Kosakata maritim'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Selamat pagi', pronunciation: 'se-la-mat pa-gi' },
        { id: '2', indonesian: 'Terima kasih', local: 'Tarima kasi', pronunciation: 'ta-ri-ma ka-si' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Apa kabar?', pronunciation: 'a-pa ka-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai ketemu', pronunciation: 'sam-pai ke-te-mu' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/9343860/pexels-photo-9343860.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Ambon berkembang sebagai lingua franca di Maluku dengan pengaruh dari berbagai bahasa Eropa dan tradisi multikultural.'
    },
    {
      id: 'ternate',
      name: 'Bahasa Ternate',
      province: 'Maluku Utara',
      speakers: '50 ribu',
      characteristics: [
        'Bahasa non-Austronesia',
        'Tradisi kesultanan',
        'Pengaruh bahasa Arab',
        'Dialek kepulauan'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Selamat pagi', pronunciation: 'se-la-mat pa-gi' },
        { id: '2', indonesian: 'Terima kasih', local: 'Tarima kasi', pronunciation: 'ta-ri-ma ka-si' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Apa kabar?', pronunciation: 'a-pa ka-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai ketemu', pronunciation: 'sam-pai ke-te-mu' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Ternate adalah bahasa non-Austronesia yang unik dan mencerminkan sejarah Kesultanan Ternate sebagai pusat rempah-rempah.'
    },
    {
      id: 'dani',
      name: 'Bahasa Dani',
      province: 'Papua',
      speakers: '300 ribu',
      characteristics: [
        'Bahasa non-Austronesia',
        'Sistem tonal',
        'Tradisi lisan yang kuat',
        'Kosakata alam yang kaya'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Wa wa', pronunciation: 'wa wa' },
        { id: '2', indonesian: 'Terima kasih', local: 'Wa yokal', pronunciation: 'wa yo-kal' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Nit nen?', pronunciation: 'nit nen' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Wa lani', pronunciation: 'wa la-ni' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/8837694/pexels-photo-8837694.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Dani adalah salah satu bahasa Papua yang memiliki sistem tonal dan kaya akan kosakata yang berkaitan dengan alam pegunungan.'
    },
    {
      id: 'arfak',
      name: 'Bahasa Arfak',
      province: 'Papua Barat',
      speakers: '3 ribu',
      characteristics: [
        'Bahasa non-Austronesia',
        'Tradisi lisan',
        'Kosakata alam yang spesifik',
        'Sistem klasifikasi yang unik'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Selamat pagi', pronunciation: 'se-la-mat pa-gi' },
        { id: '2', indonesian: 'Terima kasih', local: 'Tarima kasi', pronunciation: 'ta-ri-ma ka-si' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Apa kabar?', pronunciation: 'a-pa ka-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai ketemu', pronunciation: 'sam-pai ke-te-mu' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/9343860/pexels-photo-9343860.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Arfak adalah bahasa yang digunakan oleh suku Arfak di Papua Barat dengan tradisi lisan yang sangat kaya dan unik.'
    },
    {
      id: 'biak',
      name: 'Bahasa Biak',
      province: 'Papua',
      speakers: '60 ribu',
      characteristics: [
        'Bahasa Austronesia',
        'Tradisi maritim',
        'Dialek kepulauan',
        'Kosakata pelayaran'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Selamat pagi', pronunciation: 'se-la-mat pa-gi' },
        { id: '2', indonesian: 'Terima kasih', local: 'Tarima kasi', pronunciation: 'ta-ri-ma ka-si' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Apa kabar?', pronunciation: 'a-pa ka-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai ketemu', pronunciation: 'sam-pai ke-te-mu' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Biak adalah bahasa Austronesia yang berkembang di kepulauan dengan tradisi maritim dan pelayaran yang kuat.'
    },
    {
      id: 'maybrat',
      name: 'Bahasa Maybrat',
      province: 'Papua Barat Daya',
      speakers: '18 ribu',
      characteristics: [
        'Bahasa non-Austronesia',
        'Tradisi lisan',
        'Kosakata alam',
        'Sistem klasifikasi'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Selamat pagi', pronunciation: 'se-la-mat pa-gi' },
        { id: '2', indonesian: 'Terima kasih', local: 'Tarima kasi', pronunciation: 'ta-ri-ma ka-si' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Apa kabar?', pronunciation: 'a-pa ka-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai ketemu', pronunciation: 'sam-pai ke-te-mu' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/8837694/pexels-photo-8837694.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Maybrat adalah bahasa non-Austronesia yang digunakan di Papua Barat Daya dengan tradisi lisan yang masih terjaga.'
    },
    {
      id: 'yali',
      name: 'Bahasa Yali',
      province: 'Papua Tengah',
      speakers: '30 ribu',
      characteristics: [
        'Bahasa non-Austronesia',
        'Tradisi pegunungan',
        'Kosakata alam yang kaya',
        'Sistem tonal'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Selamat pagi', pronunciation: 'se-la-mat pa-gi' },
        { id: '2', indonesian: 'Terima kasih', local: 'Tarima kasi', pronunciation: 'ta-ri-ma ka-si' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Apa kabar?', pronunciation: 'a-pa ka-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai ketemu', pronunciation: 'sam-pai ke-te-mu' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/9343860/pexels-photo-9343860.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Yali adalah bahasa non-Austronesia yang digunakan di daerah pegunungan Papua Tengah dengan tradisi yang masih sangat tradisional.'
    },
    {
      id: 'asmat',
      name: 'Bahasa Asmat',
      province: 'Papua Selatan',
      speakers: '70 ribu',
      characteristics: [
        'Bahasa non-Austronesia',
        'Tradisi seni ukir',
        'Kosakata sungai dan rawa',
        'Sistem klasifikasi yang unik'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Selamat pagi', pronunciation: 'se-la-mat pa-gi' },
        { id: '2', indonesian: 'Terima kasih', local: 'Tarima kasi', pronunciation: 'ta-ri-ma ka-si' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Apa kabar?', pronunciation: 'a-pa ka-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai ketemu', pronunciation: 'sam-pai ke-te-mu' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Asmat digunakan oleh suku Asmat yang terkenal dengan seni ukir kayunya dan hidup di daerah rawa-rawa Papua Selatan.'
    },
    {
      id: 'mee',
      name: 'Bahasa Mee',
      province: 'Papua Pegunungan',
      speakers: '50 ribu',
      characteristics: [
        'Bahasa non-Austronesia',
        'Tradisi pegunungan',
        'Kosakata pertanian tradisional',
        'Sistem tonal yang kompleks'
      ],
      phrases: [
        { id: '1', indonesian: 'Selamat pagi', local: 'Selamat pagi', pronunciation: 'se-la-mat pa-gi' },
        { id: '2', indonesian: 'Terima kasih', local: 'Tarima kasi', pronunciation: 'ta-ri-ma ka-si' },
        { id: '3', indonesian: 'Apa kabar?', local: 'Apa kabar?', pronunciation: 'a-pa ka-bar' },
        { id: '4', indonesian: 'Sampai jumpa', local: 'Sampai ketemu', pronunciation: 'sam-pai ke-te-mu' }
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      image: 'https://images.pexels.com/photos/8837694/pexels-photo-8837694.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bahasa Mee digunakan di daerah pegunungan Papua dengan tradisi pertanian tradisional dan sistem tonal yang kompleks.'
    }
  ];

  const currentLanguage = languages.find(lang => lang.id === selectedLanguage) || languages[0];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Bahasa Daerah Indonesia
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pelajari kekayaan bahasa daerah Indonesia dari 38 provinsi dengan tutorial interaktif dan video pembelajaran. 
            Lestarikan bahasa leluhur untuk generasi mendatang.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Language List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24 max-h-[80vh] overflow-y-auto">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Pilih Bahasa ({languages.length})</h3>
              <div className="space-y-2">
                {languages.map((language) => (
                  <button
                    key={language.id}
                    onClick={() => setSelectedLanguage(language.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                      selectedLanguage === language.id
                        ? 'bg-red-50 text-red-600 border-l-4 border-red-600'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <div className="font-semibold text-sm">{language.name}</div>
                    <div className="text-xs text-gray-500">{language.province}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Language Detail */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Language Header */}
              <div className="relative">
                <img
                  src={currentLanguage.image}
                  alt={currentLanguage.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                  <div className="p-6 text-white">
                    <h2 className="text-2xl font-bold mb-2">{currentLanguage.name}</h2>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {currentLanguage.province}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {currentLanguage.speakers} penutur
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {currentLanguage.description}
                </p>

                {/* Characteristics */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                    Ciri-ciri Bahasa
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentLanguage.characteristics.map((char, index) => (
                      <div key={index} className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-blue-800 text-sm">{char}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Common Phrases */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Volume2 className="h-5 w-5 text-green-600 mr-2" />
                    Frasa Penting
                  </h3>
                  <div className="space-y-4">
                    {currentLanguage.phrases.map((phrase) => (
                      <div key={phrase.id} className="bg-gray-50 rounded-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Bahasa Indonesia</p>
                            <p className="font-semibold text-gray-900">{phrase.indonesian}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Bahasa Daerah</p>
                            <p className="font-semibold text-red-600">{phrase.local}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Cara Baca</p>
                            <p className="font-medium text-gray-700">[{phrase.pronunciation}]</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Video Tutorial */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Play className="h-5 w-5 text-red-600 mr-2" />
                    Tutorial Video
                  </h3>
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <iframe
                      src={currentLanguage.videoUrl}
                      title={`Tutorial ${currentLanguage.name}`}
                      className="w-full h-full"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="mt-3 flex justify-center">
                    <a
                      href={currentLanguage.videoUrl.replace('/embed/', '/watch?v=')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
                    >
                      Tonton di YouTube
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kekayaan Bahasa Indonesia</h2>
            <p className="text-gray-600">Indonesia memiliki keberagaman bahasa yang luar biasa dari 38 provinsi</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">700+</div>
              <div className="text-gray-600">Bahasa Daerah</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">38</div>
              <div className="text-gray-600">Provinsi</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">300+</div>
              <div className="text-gray-600">Suku Bangsa</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">17,500+</div>
              <div className="text-gray-600">Pulau</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BahasaDaerah;