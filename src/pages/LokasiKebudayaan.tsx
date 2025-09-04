import React, { useState } from 'react';
import { MapPin, Clock, Star, Phone, Navigation } from 'lucide-react';
import CountUp from '../items/CountUp';
import GradientText from '../items/GradientText';


interface CulturalLocation {
  id: string;
  name: string;
  type: string;
  description: string;
  address: string;
  phone: string;
  openHours: string;
  rating: number;
  image: string;
  mapUrl: string;
  penunjukUrl: string; // Properti baru untuk tautan petunjuk arah
  highlights: string[];
}

interface Province {
  id: string;
  name: string;
  locations: CulturalLocation[];
}

const LokasiKebudayaan = () => {
  const [selectedProvince, setSelectedProvince] = useState<string>('jakarta');

  // Data mock yang diperbarui dengan dua URL berbeda
  const provinces: Province[] = [
    {
      "id": "jakarta",
      "name": "DKI Jakarta",
      "locations": [
        {
          "id": "museum-nasional",
          "name": "Museum Nasional Indonesia",
          "type": "Museum",
          "description": "Museum terbesar dan terlengkap di Indonesia yang menyimpan koleksi arkeologi, sejarah, etnografi, dan geografi dari seluruh Nusantara.",
          "address": "Jl. Medan Merdeka Barat No.12, Gambir, Jakarta Pusat",
          "phone": "(021) 3868172",
          "openHours": "Selasa-Minggu: 08.00-16.00 WIB",
          "rating": 4.7,
          "image": "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2025/01/06/15593d91-cf85-4144-b3ba-810a2b71a344-1736130939685-73f3d7cd9693daf2cc741c1e5713da16.png",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6589028503854!2d106.81901517402444!3d-6.176396760520403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d4b571f28b%3A0xa41541566f6058ed!2sNational%20Museum%20of%20Indonesia!5e0!3m2!1sen!2sid!4v1756623052440!5m2!1sen!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/kU27HdpYoBR3gW4U8",
          "highlights": ["Koleksi arca Buddha terbesar", "Arca Ganesha dari abad ke-8", "Prasasti Yupa tertua", "Koleksi keramik China"]
        },
        {
          "id": "museum-sejarah-jakarta",
          "name": "Museum Sejarah Jakarta",
          "type": "Museum",
          "description": "Museum yang menampilkan sejarah Jakarta dari masa prasejarah hingga kemerdekaan, berlokasi di bangunan bersejarah Balai Kota Batavia.",
          "address": "Jl. Taman Fatahillah No.1, Pinangsia, Tamansari, Jakarta Barat",
          "phone": "(021) 6929101",
          "openHours": "Selasa-Minggu: 09.00-15.00 WIB",
          "rating": 4.6,
          "image": "https://telusurkultur.com/cdn/shop/articles/Cover_Blog_Dienvibi_5.png?v=1669746573",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.966566055457!2d106.81072507402394!3d-6.135194660147424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1dff4292a57d%3A0x12f0032d678c0745!2sMuseum%20Sejarah%20Jakarta!5e0!3m2!1sid!2sid!4v1756875625463!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/6qazRpJdNidJnirx5",
          "highlights": ["Bangunan VOC bersejarah", "Koleksi keramik Betawi", "Diorama sejarah Jakarta", "Peninggalan masa kolonial"]
        },
        {
          "id": "monumen-nasional",
          "name": "Monumen Nasional (Monas)",
          "type": "Monumen",
          "description": "Monumen peringatan setinggi 132 meter yang menjadi ikon kota Jakarta dan simbol perjuangan kemerdekaan Indonesia.",
          "address": "Gambir, Jakarta Pusat",
          "phone": "(021) 3822255",
          "openHours": "Selasa-Minggu: 08.00-16.00 WIB",
          "rating": 4.7,
          "image": "https://idetrips.com/wp-content/uploads/2018/07/Monas-jakarta-tourism-go-id.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666347494426!2d106.82458402402452!3d-6.175403010511378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sNational%20Monument!5e0!3m2!1sen!2sid!4v1756623370544!5m2!1sen!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/ykMsXPVUxAHh9rsE8",
          "highlights": ["Pelataran puncak dengan pemandangan 360 derajat Jakarta", "Api kemerdekaan berlapis emas", "Museum Sejarah Nasional di bagian dasar", "Relief sejarah perjuangan Indonesia"]
        },
        {
          "id": "taman-mini-indonesia-indah",
          "name": "Taman Mini Indonesia Indah (TMII)",
          "type": "Taman Budaya",
          "description": "Kawasan taman wisata bertema budaya Indonesia yang merangkum keanekaragaman budaya dari berbagai provinsi dalam bentuk anjungan daerah, museum, dan teater.",
          "address": "Ceger, Cipayung, Jakarta Timur",
          "phone": "(021) 87792078",
          "openHours": "Setiap Hari: 07.00-22.00 WIB",
          "rating": 4.6,
          "image": "https://akcdn.detik.net.id/visual/2021/04/08/wisata-tmii_169.jpeg?w=480&q=90",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7080903181804!2d106.88731747402633!3d-6.302033261674927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed50d076a261%3A0x73127b9ecf2da0c!2sTaman%20Mini%20Indonesia%20Indah!5e0!3m2!1sen!2sid!4v1756623599533!5m2!1sen!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/CH6wqknfTi1zrXgJ6",
          "highlights": ["Anjungan daerah dengan rumah adat", "Kereta gantung", "Museum Indonesia", "Teater Keong Emas"]
        },
        {
          "id": "museum-wayang",
          "name": "Museum Wayang",
          "type": "Museum",
          "description": "Museum yang didedikasikan untuk seni pewayangan Indonesia, menampilkan beragam koleksi wayang dari berbagai daerah dan zaman.",
          "address": "Jl. Pintu Besar Utara No.27, Pinangsia, Tamansari, Jakarta Barat",
          "phone": "(021) 6929560",
          "openHours": "Selasa-Minggu: 09.00-15.00 WIB",
          "rating": 4.5,
          "image": "https://bappeda.jakarta.go.id/storage/blog/8VK0EMxlzvfzm2EiCFdJiBevgdqG9DRjZAz7FfFc.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.968745102978!2d106.80987027402394!3d-6.134901860144763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1dff48f259ff%3A0xfeb6bfd7e15db853!2sWayang%20Museum!5e0!3m2!1sen!2sid!4v1756632067734!5m2!1sen!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/GKDco2NRjVgbimCSA",
          "highlights": ["Koleksi wayang kulit dan golek", "Wayang dari berbagai negara", "Pertunjukan wayang berkala", "Koleksi boneka si Gale-gale"]
        },
      ]
    },
    {
      id: 'yogyakarta',
      name: 'DI Yogyakarta',
      locations: [
        {
          "id": "museum-wayang-yogya",
          "name": "Museum Wayang Kekayon",
          "type": "Museum",
          "description": "Museum yang didedikasikan untuk seni pewayangan Indonesia, menampilkan beragam koleksi wayang dari berbagai daerah dan zaman.",
          "address": "Jl. Wonosari, Kalangan, Baturetno, Banguntapan, Bantul",
          "phone": "(0274) 371217",
          "openHours": "Senin-Sabtu: 09.00-15.00 WIB",
          "rating": 4.5,
          "image": "https://travelspromo.com/wp-content/uploads/2022/04/Keindahan-bangunan-museum-ala-Jawa-tradisional.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.853976488806!2d110.36162817404997!3d-7.805279177485652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5796db06c7ef%3A0x395271cf052b276c!2sKraton%20Ngayogyakarta%20Hadiningrat!5e0!3m2!1sen!2sid!4v1756631560886!5m2!1sen!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/GKDco2NRjVgbimCSA",
          "highlights": ["Koleksi wayang kulit dan golek", "Wayang dari berbagai negara", "Pertunjukan wayang berkala", "Koleksi boneka si Gale-gale"]
        },
        {
          id: 'taman-sari',
          name: 'Taman Sari Yogyakarta',
          type: 'Situs Bersejarah',
          description: 'Kompleks taman dan kolam bekas tempat rekreasi Sultan, menampilkan arsitektur campuran Jawa-Eropa yang unik.',
          address: 'Jl. Taman, Kraton, Yogyakarta',
          phone: '(0274) 373721',
          openHours: 'Senin-Minggu: 09.00-15.00 WIB',
          rating: 4.3,
          image: 'https://asset.kompas.com/crops/Y5S_hd-Jn2cuaKYtOfN4ASXnM2Y=/0x0:1000x667/1200x800/data/photo/2022/03/13/622e12c85befb.jpg',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.809569348599!2d110.35641577404998!3d-7.809973477540756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5793d0c2cf2b%3A0x276a21f8a01cbe13!2sTaman%20Sari%20Tourist%20Village!5e0!3m2!1sen!2sid!4v1756633165641!5m2!1sen!2sid',
          penunjukUrl: "https://maps.app.goo.gl/dWX5XP9R6aN4Jssh6",
          highlights: ['Kolam pemandian Sultan', 'Terowongan bawah tanah', 'Sumur Gumuling', 'Menara air bersejarah']
        },
        {
          id: 'candi-prambanan',
          name: 'Candi Prambanan',
          type: 'Situs Bersejarah',
          description: 'Kompleks candi Hindu terbesar di Indonesia yang dibangun pada abad ke-9 Masehi, didedikasikan untuk Trimurti.',
          address: 'Jl. Raya Solo-Yogyakarta No.16, Kranggan, Bokoharjo, Prambanan, Sleman, Yogyakarta',
          phone: '(0274) 496401',
          openHours: 'Senin-Minggu: 06.00-17.00 WIB',
          rating: 4.7,
          image: 'https://asset.mediaindonesia.com/news/2025/04/12/1744444644_9d509cce748b39a99552.jpg',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.3559836812033!2d110.48889247404911!3d-7.752015276862481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5ae3dbd859d1%3A0x19e7a03b25955a2d!2sPrambanan%20Temple!5e0!3m2!1sen!2sid!4v1756633396814!5m2!1sen!2sid',
          penunjukUrl: 'https://maps.app.goo.gl/gfMUHUbgn5LH6Rrj6',
          highlights: ['Candi Hindu terbesar', 'Relief Ramayana', 'Candi Siwa', 'Warisan Dunia UNESCO']
        },
        {
          id: 'candi-ratu-boko',
          name: 'Situs Ratu Boko',
          type: 'Situs Arkeologi',
          description: 'Situs bersejarah yang diyakini sebagai bekas istana, kuil, atau tempat peristirahatan raja-raja Mataram Kuno.',
          address: 'Gg. Swakarya, Sambirejo, Prambanan, Sleman, Yogyakarta',
          phone: '(0274) 496401',
          openHours: 'Senin-Minggu: 06.00-17.00 WIB',
          rating: 4.4,
          image: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Kraton_Ratu_Boko_%28Ratu_Boko_Temple%29_in_Yogyakarta%2C_Indonesia_03.jpg',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.181812450296!2d110.4868408740493!3d-7.770536277078629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5a92d354fe45%3A0x153f44f14476f95b!2sKeraton%20Ratu%20Boko!5e0!3m2!1sen!2sid!4v1756641705787!5m2!1sen!2sid',
          penunjukUrl: 'https://maps.app.goo.gl/FXnES5zwEbtUohoV8',
          highlights: ['Gerbang ikonik', 'Pemandangan matahari terbenam', 'Situs bekas keraton', 'Kolam pemandian']
        },
        {
          id: 'museum-affandi',
          name: 'Museum Affandi',
          type: 'Museum Seni',
          description: 'Bekas rumah dan studio pelukis maestro Affandi, menampilkan koleksi lukisan pribadinya yang luar biasa.',
          address: 'Jl. Laksda Adisucipto No.167, Caturtunggal, Depok, Sleman, Yogyakarta',
          phone: '(0274) 562593',
          openHours: 'Senin-Sabtu: 09.00-16.00 WIB',
          rating: 4.6,
          image: 'https://visitingjogja.jogjaprov.go.id/wp-content/uploads/2017/01/Museum-Affandi.png',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0671278421946!2d110.39382207404955!3d-7.782707677221014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59c49f681dbd%3A0x3e9d55bf26695d4a!2sAffandi%20Museum!5e0!3m2!1sen!2sid!4v1756642175402!5m2!1sen!2sid',
          penunjukUrl: 'https://maps.app.goo.gl/uz7tJhCoqMotUAUK7',
          highlights: ['Rumah unik berbentuk kepompong', 'Koleksi lukisan Affandi', 'Taman yang asri', 'Studio lukis']
        }
      ]
    },
    {
      id: 'bali',
      name: 'Bali',
      locations: [
        {
          id: 'museum-bali',
          name: 'Museum Negeri Propinsi Bali',
          type: 'Museum',
          description: 'Museum yang menampilkan koleksi seni dan budaya Bali dari masa prasejarah hingga modern, dengan arsitektur tradisional Bali.',
          address: 'Jl. Letnan Kolonel Wisnu No.1, Dangin Puri, Denpasar Timur, Bali',
          phone: '(0361) 222680',
          openHours: 'Senin-Kamis: 07.30-15.30 WITA, Jumat: 07.30-13.00 WITA',
          rating: 4.1,
          image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/a7/57.jpg',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.35687055623!2d115.2160158740649!3d-8.657568788084907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2409a2f3cad43%3A0xf32d693f7bfe87da!2sBali%20Museum!5e0!3m2!1sen!2sid!4v1756642366487!5m2!1sen!2sid',
          penunjukUrl: 'https://maps.app.goo.gl/aeGhsVJdH5FxGdjs9',
          highlights: ['Koleksi lukisan tradisional', 'Arca Hindu-Buddha', 'Tekstil dan pakaian adat', 'Peralatan upacara agama']
        },
        {
          id: 'pura-tanah-lot',
          name: 'Pura Tanah Lot',
          type: 'Pura',
          description: 'Pura laut unik yang dibangun di atas batu karang besar di tepi laut, terkenal dengan pemandangan matahari terbenamnya yang spektakuler.',
          address: 'Beraban, Kediri, Kabupaten Tabanan, Bali',
          phone: '(0361) 880361',
          openHours: 'Setiap hari: 07.00-19.00 WITA',
          rating: 4.9,
          image: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/TanahLot_2014.JPG',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.737230350166!2d115.08422822406435!3d-8.621206537608552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd237824f71deab%3A0xcaabe270f7e34d69!2sTanah%20Lot!5e0!3m2!1sen!2sid!4v1756642519076!5m2!1sen!2sid',
          penunjukUrl: 'https://maps.app.goo.gl/nMptBRuz5ApsE4tH9',
          highlights: ['Pura di atas batu karang', 'Pemandangan matahari terbenam', 'Pertunjukan tari Kecak', 'Mitos ular suci']
        },
        {
          id: 'pura-ulun-danu-bratan',
          name: 'Pura Ulun Danu Beratan',
          type: 'Pura',
          description: 'Kompleks pura Hindu dan Buddha di tepi Danau Beratan, dikelilingi oleh pegunungan dan suasana yang sejuk dan berkabut.',
          address: 'Danau Beratan, Candikuning, Baturiti, Kabupaten Tabanan, Bali',
          phone: '(0368) 2033050',
          openHours: 'Setiap hari: 08.00-18.00 WITA',
          rating: 4.7,
          image: 'https://www.rentalmobilbali.net/wp-content/uploads/2022/09/feature-image-pura-ulun-danu-beratan-bedugul.webp',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.277296062207!2d115.1622099699456!3d-8.27517536494566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd1896c9fac0857%3A0x18246568e4db1b53!2sUlun%20Danu%20Beratan%20Temple!5e0!3m2!1sen!2sid!4v1756642711901!5m2!1sen!2sid',
          penunjukUrl: 'https://maps.app.goo.gl/vD247GLLuZrEAZr1A',
          highlights: ['Pura di atas danau', 'Arsitektur khas Bali', 'Udara sejuk', 'Pemandangan pegunungan']
        },
        {
          id: 'ubud-monkey-forest',
          name: 'Sacred Monkey Forest Sanctuary',
          type: 'Situs Budaya',
          description: 'Kawasan konservasi alam dan pura yang menjadi habitat ratusan kera ekor panjang. Tempat ini memiliki nilai budaya dan spiritual yang tinggi.',
          address: 'Jl. Monkey Forest, Ubud, Kabupaten Gianyar, Bali',
          phone: '(0361) 971304',
          openHours: 'Setiap hari: 08.30-18.00 WITA',
          rating: 4.5,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAM9hxuJyRzXRyoIgfMzuO0QSYqu4_8wlrQ&s',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.7940411260925!2d115.25805497406247!3d-8.51936738628595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23d43f6189b67%3A0xb6ec43164befc356!2sSacred%20Monkey%20Forest%20Sanctuary!5e0!3m2!1sen!2sid!4v1756642842433!5m2!1sen!2sid',
          penunjukUrl: 'https://maps.app.goo.gl/JUrDZqy8daP9ZGSP9',
          highlights: ['Kera ekor panjang', 'Hutan rindang', 'Pura kuno', 'Jembatan dan jalan setapak']
        },
        {
          id: 'candi-goa-gajah',
          name: 'Candi Goa Gajah',
          type: 'Situs Bersejarah',
          description: 'Situs kuno dengan gua yang diukir pada abad ke-9, dihiasi dengan patung-patung dan relief yang menggambarkan mitologi Hindu dan Buddha.',
          address: 'Jl. Raya Goa Gajah, Bedulu, Blahbatuh, Kabupaten Gianyar, Bali',
          phone: '(0361) 942700',
          openHours: 'Setiap hari: 08.00-16.00 WITA',
          rating: 4.2,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvoDP_QWL3vRXSL5dQATufoiobpRwOyJkKOg&s',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9049997021493!2d107.61652402403529!3d-6.90196376754304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64c5e8866e5%3A0x37be7ac9d575f7ed!2sGedung%20Sate!5e0!3m2!1sen!2sid!4v1756643239412!5m2!1sen!2sid',
          penunjukUrl: 'https://maps.app.goo.gl/GCnL3hkpRjNLmxo16',
          highlights: ['Gerbang gua Gajah', 'Kolam kuno', 'Patung Ganesha', 'Relief Hindu-Buddha']
        },
      ]
    },
    {
      id: 'jawa-barat',
      name: 'Jawa Barat',
      locations: [
        {
          id: 'gedung-sate',
          name: 'Gedung Sate',
          type: 'Kantor Pemerintahan / Situs Bersejarah',
          description: 'Bangunan bersejarah yang kini menjadi kantor Gubernur Jawa Barat, terkenal dengan arsitektur kolonialnya dan ikon "tusuk sate" di puncaknya.',
          address: 'Jl. Diponegoro No.22, Citarum, Bandung Wetan, Kota Bandung, Jawa Barat',
          phone: '(022) 4232235',
          openHours: 'Senin-Jumat: 08.00-16.00 WIB',
          rating: 4.7,
          image: 'https://bcj.bandung.go.id/storage/image-thumbnail/8GBk8DV66OsodlLPHihNC7HvUpimXyFueRokojBx.webp',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9049997021493!2d107.61652402403529!3d-6.90196376754304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64c5e8866e5%3A0x37be7ac9d575f7ed!2sGedung%20Sate!5e0!3m2!1sen!2sid!4v1756643239412!5m2!1sen!2sid',
          penunjukUrl: 'https://maps.app.goo.gl/GCnL3hkpRjNLmxo16',
          highlights: ['Arsitektur Art Deco', 'Ikon tusuk sate', 'Monumen bersejarah', 'Museum Gedung Sate']
        },
        {
          id: 'museum-konferensi-asia-afrika',
          name: 'Museum Konferensi Asia Afrika',
          type: 'Museum Sejarah',
          description: 'Museum yang didedikasikan untuk Konferensi Asia-Afrika tahun 1955, menyimpan koleksi memorabilia, foto, dan diorama bersejarah.',
          address: 'Jl. Asia Afrika No.65, Braga, Sumur Bandung, Kota Bandung, Jawa Barat',
          phone: '(022) 4208575',
          openHours: 'Selasa-Jumat: 09.00-15.00 WIB',
          rating: 4.5,
          image: 'https://img.bandung.go.id/images/news/2022/04/14/header/164993296968-momentum-kaa-yuk-bangkitkan-kembali-janji-perdamaian-dunia.jpg',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.743385413445!2d107.6068410740356!3d-6.921249967741423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e62f1591964f%3A0xed1630ec8b20a472!2sAsia-Africa%20Conference%20Museum!5e0!3m2!1sen!2sid!4v1756643560302!5m2!1sen!2sid',
          penunjukUrl: 'https://maps.app.goo.gl/V24Uodrh9oiJCijUA',
          highlights: ['Diorama sejarah KAA', 'Koleksi foto kuno', 'Replika suasana konferensi', 'Bangunan bersejarah']
        },
        {
          id: 'saung-angklung-udjo',
          name: 'Saung Angklung Udjo',
          type: 'Pusat Kebudayaan',
          description: 'Tempat pertunjukan seni dan workshop angklung yang berdedikasi untuk melestarikan budaya Sunda. Menawarkan pertunjukan interaktif untuk semua usia.',
          address: 'Jl. Padasuka No.118, Pasirlayung, Cibeunying Kidul, Kota Bandung, Jawa Barat',
          phone: '(022) 7271714',
          openHours: 'Setiap hari: 09.00-17.00 WIB',
          rating: 4.8,
          image: 'https://awsimages.detik.net.id/community/media/visual/2024/03/04/pertunjukan-panca-sora-di-saung-angklung-udjo-1_169.jpeg?w=1200',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7705.565227233927!2d107.65069007220293!3d-6.896822658546105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7904f868405%3A0xefbc33f025ba4c9c!2sSaung%20Angklung%20Udjo!5e0!3m2!1sen!2sid!4v1756643636280!5m2!1sen!2sid',
          penunjukUrl: 'https://maps.app.goo.gl/JUAeuSKT2Jg1hEJ47',
          highlights: ['Pertunjukan Angklung', 'Workshop interaktif', 'Pelestarian budaya Sunda', 'Pertunjukan tari tradisional']
        },
        {
          id: 'kawah-putih',
          name: 'Kawah Putih Ciwidey',
          type: 'Situs Geologi / Alam',
          description: 'Danau kawah vulkanik dengan air berwarna putih kehijauan yang dapat berubah warna, dikelilingi oleh pemandangan alam yang indah.',
          address: 'Sugihmukti, Pasirjambu, Bandung, Jawa Barat',
          phone: '(022) 85921869',
          openHours: 'Setiap hari: 07.00-17.00 WIB',
          rating: 4.6,
          image: 'https://thumb.viva.id/intipseleb/1265x711/2022/05/25/628e05ea032a8-kawah-putih.jpg',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31670.006604396225!2d107.38068419477324!3d-7.154781910485141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e688c881f224b7f%3A0xae946fd2f513e669!2sParkiran%20Bawah%20Kawah%20Putih%20Ciwidey!5e0!3m2!1sen!2sid!4v1756644211687!5m2!1sen!2sid',
          penunjukUrl: 'https://maps.app.goo.gl/DYUvwo4S83RoxgEeA',
          highlights: ['Danau kawah vulkanik', 'Air berwarna-warni', 'Pemandangan alam', 'Suhu dingin']
        },
        {
          id: 'tangkuban-perahu',
          name: 'Gunung Tangkuban Perahu',
          type: 'Situs Geologi / Alam',
          description: 'Gunung berapi aktif dengan kawah yang ikonik, menawarkan pemandangan alam yang memukau dan udara pegunungan yang sejuk.',
          address: 'Cikole, Lembang, Kabupaten Bandung Barat, Jawa Barat',
          phone: '-',
          openHours: 'Setiap hari: 08.00-17.00 WIB',
          rating: 4.4,
          image: 'https://www.agoda.com/wp-content/uploads/2024/02/Featured-image-Tangkuban-Perahu-Bandung-Indonesia.jpg',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15848.335845036372!2d107.59948093234047!3d-6.759616133100862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e1ddc59713db%3A0xa01c96b73428fedc!2sTangkuban%20Perahu!5e0!3m2!1sen!2sid!4v1756643978579!5m2!1sen!2sid',
          penunjukUrl: 'https://maps.app.goo.gl/yJXtKzddJVrTLmDq5',
          highlights: ['Kawah Ratu', 'Kawah Domas', 'Legenda Sangkuriang', 'Pemandangan alam']
        }
      ]
    },

    {
      id: 'Aceh',
      name: 'Aceh',
      locations: [
        {
          id: 'museum-tsunami-aceh',
          name: 'Museum Tsunami Aceh',
          type: 'Museum Sejarah',
          description: 'Museum yang dibangun sebagai monumen simbolis untuk mengenang bencana gempa bumi dan tsunami 2004, sekaligus pusat pendidikan dan tempat perlindungan darurat.',
          address: 'Jl. Sultan Iskandar Muda No. 3, Banda Aceh, Aceh',
          phone: '(0651) 22619',
          openHours: 'Selasa-Minggu: 09.00-16.00 WIB',
          rating: 4.8,
          image: 'https://asset.kompas.com/crops/LtbPhdGzxvEE4dq9TntoAqGXI5k=/40x0:657x411/1200x800/data/photo/2024/01/24/65b110e937363.jpg',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.130126864208!2d95.31261517396923!3d5.547718233735042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30403752049cfb9d%3A0x5e2203a9f54643f9!2sMuseum%20Tsunami%20Aceh!5e0!3m2!1sen!2sid!4v1756649547786!5m2!1sen!2sid',
          penunjukUrl: 'https://maps.app.goo.gl/tCCqZFDVBVCbfMqNA',
          highlights: ['Arsitektur unik', 'Dinding kenangan', 'Sumur doa', 'Diorama pasca-tsunami']
        },
        {
          id: 'museum-aceh',
          name: 'Museum Negeri Aceh',
          type: 'Museum Sejarah & Budaya',
          description: 'Museum tertua di Aceh yang menyimpan beragam koleksi artefak sejarah, etnografi, dan arkeologi yang menggambarkan kekayaan budaya dan sejarah Aceh dari masa ke masa.',
          address: 'Jl. Sultan Alaiddin Mahmud Syah No.12, Peuniti, Banda Aceh, Aceh',
          phone: '(0651) 21102',
          openHours: 'Senin-Minggu: 08.30-16.00 WIB',
          rating: 4.4,
          image: 'https://indonesiakaya.com/wp-content/uploads/2020/10/Rumah_ini_dipamerkan_dalam_De_Koloniale_Tentoonsteling_tahun_1914_di_Semarang_dan_menjadi_stand_terbaik.jpg',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.1244224152824!2d95.3183804739692!3d5.548565533726513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3040374556a2fc5d%3A0x6d5321b2f2ee1890!2sMuseum%20Aceh!5e0!3m2!1sen!2sid!4v1756649755933!5m2!1sen!2sid',
          penunjukUrl: 'https://maps.app.goo.gl/RWi83fyayuQMLV2o6',
          highlights: ['Peninggalan Kesultanan Aceh', 'Rumah Adat Aceh', 'Meriam peninggalan Belanda', 'Keramik kuno']
        },
        {
          id: 'museum-ali-hasjmy',
          name: 'Museum Ali Hasjmy',
          type: 'Museum Seni & Budaya',
          description: 'Museum pribadi yang didirikan oleh seniman dan budayawan Ali Hasjmy. Menyimpan koleksi seni, manuskrip kuno, dan benda-benda bersejarah yang berkaitan dengan Islam dan budaya Aceh.',
          address: 'Jl. Teuku Nyak Arief No. 200, Lamgugob, Syiah Kuala, Banda Aceh, Aceh',
          phone: '(0651) 7551066',
          openHours: 'Senin-Jumat: 09.00-15.00 WIB',
          rating: 4.3,
          image: 'https://museum.co.id/wp-content/uploads/2020/09/pustakan-ali-hasjmy.jpeg',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.2397761257316!2d95.30094627396912!3d5.531406533898636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30403a0440faf9e7%3A0x5fcf3daf0affc308!2sMuseum%20Dan%20Perpustakaan%20Ali%20Hasjmy!5e0!3m2!1sen!2sid!4v1756649887345!5m2!1sen!2sid',
          penunjukUrl: 'https://maps.app.goo.gl/hQQTzJKERAfqKM4w5',
          highlights: ['Manuskrip kuno', 'Koleksi lukisan', 'Benda-benda pusaka', 'Peninggalan tokoh nasional']
        },
        {
          id: 'museum-bujang-salim',
          name: 'Museum Bujang Salim',
          type: 'Museum Sejarah',
          description: 'Museum yang berfokus pada sejarah peradaban Islam di Aceh, menampilkan koleksi naskah kuno, alat musik tradisional, dan benda-benda bersejarah lainnya.',
          address: 'Jl. Ratu Safiatuddin No.1, Peuniti, Banda Aceh, Aceh',
          phone: '(0651) 22152',
          openHours: 'Senin-Sabtu: 08.00-17.00 WIB',
          rating: 4.0,
          image: 'https://blogger.googleusercontent.com/img/a/AVvXsEjbkimfTUcVdtdjcpdNhlA7SLK0vwWDyBUtYdn2eA-qOXGS-qVtNew3AjN7wZ14cRMQnVysIzCgbMiTI2rXccydspDtAoiAWqbjrNVJ473W3YzO4mR_i17iLvMN9YCmzReWegD3nF2DK733psjod1F4FxqnsxL50sb-e7VrpnXTnxSqbNHRxPffvw5B4A',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.141212109476!2d97.02171037396779!3d5.240501336743753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304776c340af2aef%3A0x6ed89149d0624dfb!2sTugu%20Bujang%20Salim!5e0!3m2!1sen!2sid!4v1756650233264!5m2!1sen!2sid',
          penunjukUrl: 'https://maps.app.goo.gl/WYuiSeJhEBywu6qd7',
          highlights: ['Artefak Islam', 'Naskah kuno', 'Peninggalan ulama', 'Alat musik tradisional']
        },
        {
          id: 'museum-bank-indonesia-aceh',
          name: 'Museum Bank Indonesia Aceh',
          type: 'Museum Keuangan',
          description: 'Museum yang menampilkan sejarah perkembangan perbankan dan ekonomi di Aceh, berlokasi di bangunan cagar budaya peninggalan kolonial Belanda.',
          address: 'Jl. Jend. Sudirman No.8, Banda Aceh, Aceh',
          phone: '(0651) 32172',
          openHours: 'Selasa-Minggu: 08.00-16.00 WIB',
          rating: 4.6,
          image: 'https://acehhistoria.org/wp-content/uploads/2024/11/DSC1199-1-1400x800.jpg',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.141212109476!2d97.02171037396779!3d5.240501336743753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304776c340af2aef%3A0x6ed89149d0624dfb!2sTugu%20Bujang%20Salim!5e0!3m2!1sen!2sid!4v1756650392473!5m2!1sen!2sid',
          penunjukUrl: 'https://maps.app.goo.gl/WYuiSeJhEBywu6qd7',
          highlights: ['Arsitektur kolonial', 'Koleksi mata uang kuno', 'Sejarah perbankan', 'Galeri numismatik']
        }
      ]
    },

    {
      id: 'jawa-timur',
      name: 'Jawa Timur',
      locations: [
        {
          id: 'museum-tugu-pahlawan',
          name: 'Museum Tugu Pahlawan',
          type: 'Museum Sejarah',
          description: 'Museum di bawah Monumen Tugu Pahlawan yang menampilkan sejarah perjuangan kemerdekaan Indonesia, khususnya peristiwa pertempuran 10 November 1945 di Surabaya.',
          address: 'Jl. Pahlawan, Alun-alun Contong, Bubutan, Kota Surabaya, Jawa Timur',
          phone: '(031) 5344465',
          openHours: 'Selasa-Minggu: 08.00-15.00 WIB',
          rating: 4.7,
          image: 'https://tiketwisata.surabaya.go.id/storage/tour/monumen-tugu-pahlawan_1680340884.jpeg',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.9586193157497!2d112.73528777404064!3d-7.2455496711680905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f93fc001bc5d%3A0x110e38d8a6c23fbe!2sMonumen%20Tugu%20Pahlawan%20dan%20Museum%20Sepuluh%20Nopember%20Surabaya!5e0!3m2!1sid!2sid!4v1756650972646!5m2!1sid!2sid',
          penunjukUrl: 'https://maps.app.goo.gl/pPsuJWzGL9HPZ8Be7',
          highlights: ['Diorama pertempuran 10 November', 'Artefak perjuangan', 'Monumen bersejarah', 'Bangunan peninggalan Belanda']
        },
        {
          id: 'museum-angkut-batu',
          name: 'Museum Angkut',
          type: 'Museum Transportasi',
          description: 'Museum transportasi modern pertama di Asia yang menampilkan koleksi mobil antik dan kendaraan dari berbagai era, lengkap dengan dekorasi tema negara-negara dunia.',
          address: 'Jl. Terusan Sultan Agung No.2, Ngaglik, Kota Batu, Jawa Timur',
          phone: '(0341) 595188',
          openHours: 'Setiap hari: 12.00-20.00 WIB',
          rating: 4.8,
          image: 'https://bobobox.com/blog/wp-content//uploads/2024/08/Museum-Angkut-Malang-10-jpg.webp',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.1554027786124!2d112.51739977405109!3d-7.878803678353384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78872dd3cd2c13%3A0x3295038cd23c1d38!2sMuseum%20Angkut!5e0!3m2!1sid!2sid!4v1756651077937!5m2!1sid!2sid',
          penunjukUrl: 'https://maps.app.goo.gl/baN5UStPVeReiE4d6',
          highlights: ['Replika mobil kuno', 'Zona Hollywood', 'Dekorasi tema negara', 'Galeri transportasi']
        },
        {
          id: 'museum-mpu-tantular',
          name: 'Museum Mpu Tantular',
          type: 'Museum Umum',
          description: 'Museum yang menyimpan koleksi benda-benda bersejarah dan budaya dari Jawa Timur, mulai dari masa prasejarah, masa klasik Hindu-Buddha, hingga masa kolonial.',
          address: 'Jl. Raya Buduran, Sidoarjo, Jawa Timur',
          phone: '(031) 8945604',
          openHours: 'Selasa-Minggu: 08.00-16.00 WIB',
          rating: 4.3,
          image: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Mpu_Tantular_Museum.jpg',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.2852398254877!2d112.71775307404383!3d-7.433655673234299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f963d2d4fb4d%3A0xfd521173211bad9f!2sMuseum%20Mpu%20Tantular!5e0!3m2!1sid!2sid!4v1756878681706!5m2!1sid!2sid',
          penunjukUrl: 'https://maps.app.goo.gl/bD4TWNBLrDJmFYp77',
          highlights: ['Artefak prasejarah', 'Koleksi keramik kuno', 'Peralatan tradisional', 'Diorama kehidupan masa lalu']
        },
        {
          id: 'museum-kapal-selam-surabaya',
          name: 'Monkasel (Monumen Kapal Selam)',
          type: 'Museum Militer',
          description: 'Monumen dan museum yang menampilkan kapal selam KRI Pasopati 410, bekas kapal perang Angkatan Laut Republik Indonesia, yang kini dibuka untuk umum.',
          address: 'Jl. Embong Gayam, Ketabang, Genteng, Kota Surabaya, Jawa Timur',
          phone: '(031) 5459955',
          openHours: 'Setiap hari: 08.00-21.00 WIB',
          rating: 4.5,
          image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Submarine_Monument_Surabaya_2.JPG',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.7828177237384!2d112.74770537404105!3d-7.265539371384928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f9628df520e5%3A0x577443720136fb0b!2sMonumen%20Kapal%20Selam%20Surabaya!5e0!3m2!1sid!2sid!4v1756651510116!5m2!1sid!2sid',
          penunjukUrl: 'https://maps.app.goo.gl/Z8HLsELVmrwYcU2J6',
          highlights: ['Kapal selam asli', 'Diorama pertempuran', 'Simulator periskop', 'Peninggalan TNI AL']
        },
        {
          id: 'museum-raja-brawijaya',
          name: 'Museum Brawijaya',
          type: 'Museum Militer',
          description: 'Museum yang didirikan untuk memperingati perjuangan para prajurit Divisi Brawijaya di Jawa Timur dalam mempertahankan kemerdekaan Indonesia.',
          address: 'Jl. Ijen No.29A, Gading Kasri, Klojen, Kota Malang, Jawa Timur',
          phone: '(0341) 362483',
          openHours: 'Setiap hari: 08.00-15.00 WIB',
          rating: 4.4,
          image: 'https://asset.kompas.com/crops/FySCuE5CtwaJFnfqfRKe7OWh2Js=/59x0:599x360/1200x800/data/photo/2023/03/06/6405bd88950f4.jpeg',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.2593413942664!2d112.61863407405275!3d-7.972127179467542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd628291cc584d5%3A0x44947ed5ec722b02!2sMuseum%20Brawijaya!5e0!3m2!1sid!2sid!4v1756651381138!5m2!1sid!2sid',
          penunjukUrl: 'https://maps.app.goo.gl/VSjpGfd13ppdnsUo6',
          highlights: ['Tank dan meriam', 'Pesawat tempur', 'Senjata kuno', 'Diorama pertempuran']
        }
      ]
    },

    {
      id: 'jawa-Tengah',
      name: 'Jawa Tengah',
      locations: [
        {
          id: 'museum-kereta-api-ambarawa',
          name: 'Museum Kereta Api Ambarawa',
          type: 'Museum',
          description: 'Museum yang berlokasi di stasiun kereta api kuno peninggalan Belanda. Menampilkan koleksi lokomotif uap dan gerbong tua dari berbagai era.',
          address: 'Jl. Stasiun, Panjang, Ambarawa, Kabupaten Semarang, Jawa Tengah',
          phone: '(0298) 591035',
          openHours: 'Setiap hari: 08.00-17.00 WIB',
          rating: 4.7,
          image: 'https://awsimages.detik.net.id/community/media/visual/2020/07/29/museum-kereta-api-ambarawa-1_169.jpeg?w=1200',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.78818314517!2d110.398312888855!3d-7.264930099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7081041ee76a79%3A0x317b702611c6071b!2sMuseum%20Kereta%20Api%20Ambarawa!5e0!3m2!1sid!2sid!4v1756651880641!5m2!1sid!2sid',
          penunjukUrl: 'https://maps.app.goo.gl/eA9fxewjJWau7Gwk6',
          highlights: ['Lokomotif uap kuno', 'Rel bergerigi', 'Kereta wisata', 'Arsitektur stasiun tua']
        },
        {
          id: 'museum-ronggowarsito',
          name: 'Museum Ronggowarsito',
          type: 'Museum Umum',
          description: 'Museum terbesar di Jawa Tengah yang menyimpan beragam koleksi artefak sejarah, budaya, dan alam, termasuk peninggalan prasejarah hingga era modern.',
          address: 'Jl. Abdurrahman Saleh No.1, Semarang, Jawa Tengah',
          phone: '(024) 7608938',
          openHours: 'Selasa-Minggu: 08.00-15.30 WIB',
          rating: 4.4,
          image: 'https://nagantour.com/wp-content/uploads/2023/11/Museum-Ranggawarsita.webp',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.198905722343!2d110.3817727740366!3d-6.985835368410214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b28c822d40d%3A0x67f776cdae733260!2sMuseum%20Ranggawarsita!5e0!3m2!1sid!2sid!4v1756687733005!5m2!1sid!2sid',
          penunjukUrl: 'https://maps.app.goo.gl/MrNwqETUhUZgw1Vs5',
          highlights: ['Replika fosil manusia purba', 'Koleksi wayang', 'Keris kuno', 'Diorama sejarah']
        },
        {
          id: 'museum-purbakala-sangiran',
          name: 'Museum Purbakala Sangiran',
          type: 'Museum Purbakala',
          description: 'Situs arkeologi terkenal yang menjadi tempat penemuan fosil manusia purba, Meganthropus Palaeojavanicus, dan artefak purbakala lainnya.',
          address: 'Kalijambe, Kabupaten Sragen, Jawa Tengah',
          phone: '(0271) 6727289',
          openHours: 'Selasa-Minggu: 08.00-16.00 WIB',
          rating: 4.6,
          image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Museum_manusia_purba_sangiran.png',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31648.691647448075!2d110.79813861083981!3d-7.45568749999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a11d3e57214d9%3A0xb8e15b773c8a3976!2sMuseum%20Manusia%20Purba%20Sangiran!5e0!3m2!1sid!2sid!4v1756687933484!5m2!1sid!2sid',
          penunjukUrl: 'https://maps.app.goo.gl/ZaoURmraooQsx2LJ6',
          highlights: ['Fosil manusia purba', 'Artefak zaman batu', 'Diorama evolusi', 'Situs Warisan Dunia UNESCO']
        },
        {
          id: 'museum-seni-rohmawi',
          name: 'Museum Seni Rupa dan Keramik',
          type: 'Museum Seni',
          description: 'Museum yang menampilkan koleksi lukisan, patung, dan kerajinan keramik dari seniman lokal dan nasional. Terletak di kawasan Kota Lama Semarang.',
          address: 'Jl. Letjen Suprapto, Kota Lama, Semarang, Jawa Tengah',
          phone: '(024) 3514930',
          openHours: 'Selasa-Minggu: 09.00-16.00 WIB',
          rating: 4.2,
          image: 'https://www.mitramuseumjakarta.id/img/seni/venue.jpg',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9735627521645!2d106.81197707402394!3d-6.134254460138923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1dff428f242d%3A0x3ebe306f6e4f4a6b!2sMuseum%20Seni%20Rupa%20dan%20Keramik%20-%20Kota%20Tua%20Jakarta!5e0!3m2!1sid!2sid!4v1756688128889!5m2!1sid!2sid',
          penunjukUrl: 'https://maps.app.goo.gl/iKzrt3fMJXwtSVZ59',
          highlights: ['Koleksi lukisan', 'Keramik kontemporer', 'Patung modern', 'Bangunan kolonial']
        },
        {
          id: 'museum-radya-pustaka',
          name: 'Museum Radya Pustaka',
          type: 'Museum Budaya',
          description: 'Museum tertua di Indonesia yang menyimpan koleksi benda-benda budaya Jawa, seperti wayang, keris, arca, dan naskah-naskah kuno.',
          address: 'Jl. Slamet Riyadi No.275, Sriwedari, Laweyan, Kota Surakarta, Jawa Tengah',
          phone: '(0271) 714902',
          openHours: 'Selasa-Kamis: 09.00-15.00 WIB, Jumat-Sabtu: 09.00-12.00 WIB',
          rating: 4.5,
          image: 'https://asset.kompas.com/crops/WiHiyo1_jn23tw3gW5DeoeGbu7A=/0x0:0x0/1200x800/data/photo/2022/09/01/63109648d8777.jpg',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.0600208521455!2d110.8118790740459!3d-7.5684356747501385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a167df7d7ef85%3A0xef8dc6d8163ff9c0!2sMuseum%20Radya%20Pustaka!5e0!3m2!1sid!2sid!4v1756688270599!5m2!1sid!2sid',
          penunjukUrl: 'https://maps.app.goo.gl/eg1prLKNgpm2oVj2A',
          highlights: ['Naskah kuno Jawa', 'Koleksi wayang', 'Keris dan senjata tradisional', 'Arca kuno']
        }
      ]
    },
    {
      "id": "banten",
      "name": "Banten",
      "locations": [
        {
          "id": "museum-negeri-banten",
          "name": "Museum Negeri Banten",
          "type": "Museum Sejarah & Budaya",
          "description": "Sebelumnya dikenal sebagai Museum Situs Kepurbakalaan Banten Lama, museum ini memamerkan berbagai artefak peninggalan Kesultanan Banten dan sejarah masyarakat Banten.",
          "address": "Jl. Raya Banten, Banten, Kec. Kasemen, Kota Serang, Banten",
          "phone": "(0254) 201249",
          "openHours": "Selasa-Minggu: 08.00-16.00 WIB",
          "rating": 4.6,
          "image": "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/01/20/3243133176.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.6813439019434!2d106.15582777402257!3d-6.038390959281924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418ad61ed7af45%3A0xacf59aee873a1a0d!2sMuseum%20Negeri%20Banten!5e0!3m2!1sid!2sid!4v1756689753291!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/StP16YuUDA38pd1w6",
          "highlights": ["Artefak Kesultanan Banten", "Koleksi keramik kuno", "Arca peninggalan Hindu-Buddha", "Sejarah Banten Lama"]
        },
        {
          "id": "museum-multatuli",
          "name": "Museum Multatuli",
          "type": "Museum Sejarah & Sastra",
          "description": "Museum anti-kolonialisme pertama di Indonesia, didedikasikan untuk Eduard Douwes Dekker (Multatuli) dan novelnya 'Max Havelaar' yang mengkritik sistem tanam paksa.",
          "address": "Jl. Alun Alun Timur No.8, Rangkasbitung Bar., Kec. Rangkasbitung, Kabupaten Lebak, Banten",
          "phone": "0877-7299-9355",
          "openHours": "Selasa-Minggu: 09.00-16.00 WIB",
          "rating": 4.8,
          "image": "https://museummultatuli.id/wp-content/uploads/2022/07/20180620_094131000_iOS-3.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.258509029827!2d106.24452597402714!3d-6.360578462221734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4216d5dae405b7%3A0x9870568345b46442!2sMuseum%20Multatuli!5e0!3m2!1sid!2sid!4v1756689885868!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/zTS49wP1WKUM6axR6",
          "highlights": ["Sejarah Multatuli", "Kritik kolonialisme", "Sejarah Lebak & Banten", "Koleksi Sastra"]
        },
        {
          "id": "keraton-kaibon",
          "name": "Keraton Kaibon",
          "type": "Situs Bersejarah",
          "description": "Reruntuhan istana yang dibangun untuk Ratu Aisyah, ibunda Sultan Syaifuddin. Memiliki arsitektur unik dengan gerbang dan tembok-tembok megah yang tersisa.",
          "address": "Kasunyatan, Kec. Kasemen, Kota Serang, Banten",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-17.00 WIB",
          "rating": 4.5,
          "image": "https://indonesiakaya.com/wp-content/uploads/2020/10/keraton_kaibon_1200.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.6472000580584!2d106.15742507402264!3d-6.043050259323221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e41f32d6c1c1e6b%3A0x8ddee4949acd7d55!2sKeraton%20Kaibon!5e0!3m2!1sid!2sid!4v1756689995084!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/gqdY9X9fQDq2n6mC8",
          "highlights": ["Reruntuhan istana", "Arsitektur kuno", "Peninggalan Kesultanan Banten", "Gerbang ikonik"]
        },
        {
          "id": "benteng-speelwijk",
          "name": "Benteng Speelwijk",
          "type": "Benteng / Situs Bersejarah",
          "description": "Benteng peninggalan VOC yang dibangun untuk mengawasi aktivitas pelayaran di sekitar Banten. Berdekatan dengan Masjid Agung Banten dan vihara tertua.",
          "address": "Kampung Pamarican, Banten, Kec. Kasemen, Kota Serang, Banten",
          "phone": "-",
          "openHours": "Setiap Hari, 24 jam",
          "rating": 4.4,
          "image": "https://asset.kompas.com/crops/q0dZ-wkoJ7O3WcnpwB0StUo8PXo=/0x0:1251x834/1200x800/data/photo/2021/08/30/612ca16ea57eb.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.733761267886!2d106.1481173740224!3d-6.03123105921852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e41f2d7aaaaaaab%3A0x5a81cda382ccf67f!2sBenteng%20Speelwijk!5e0!3m2!1sid!2sid!4v1756690225559!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/GsMe16TAdwgyezhA7",
          "highlights": ["Peninggalan VOC", "Arsitektur benteng Eropa", "Bastion dan menara pengawas", "Terowongan bawah tanah"]
        },
        {
          "id": "masjid-agung-banten",
          "name": "Masjid Agung Banten",
          "type": "Situs Religi & Sejarah",
          "description": "Salah satu masjid tertua di Indonesia yang penuh dengan sejarah penyebaran Islam. Memiliki menara yang ikonik dan arsitektur perpaduan budaya.",
          "address": "Jl. Banten Lama, Banten, Kec. Kasemen, Kota Serang, Banten",
          "phone": "(0254) 207328",
          "openHours": "Setiap Hari, 24 jam",
          "rating": 4.7,
          "image": "https://asset.kompas.com/crops/J3siU2cR1D7mB5qu-1AFEyG7oaM=/8x13:980x662/1200x800/data/photo/2022/07/26/62dfdc0f2508a.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.698721216011!2d106.15144327402244!3d-6.036018259260891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418cd5bc717595%3A0xfcd392b0b6fb096a!2sMasjid%20Agung%20Banten!5e0!3m2!1sid!2sid!4v1756690122476!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/zuPBssDentFAxfEA8",
          "highlights": ["Menara Masjid Agung Banten", "Makam Sultan Banten", "Arsitektur akulturasi budaya", "Pusat ziarah religi"]
        }
      ]
    },
    {
      id: 'Sumatra-Utara',
      name: 'Sumatra Utara',
      locations: [
        {
          id: 'museum-negeri-sumut',
          name: 'Museum Negeri Sumatera Utara',
          type: 'Museum Umum',
          description: 'Museum terbesar di Sumatera Utara yang menampilkan koleksi lengkap tentang sejarah, seni, dan budaya dari berbagai suku di provinsi ini, termasuk Batak, Melayu, dan Nias.',
          address: 'Jl. H.M. Joni No.15, Teladan Barat, Medan Kota, Kota Medan, Sumatera Utara',
          phone: '(061) 7360212',
          openHours: 'Selasa-Minggu: 08.00-16.00 WIB',
          rating: 4.4,
          image: 'https://konten.usu.ac.id/storage/satker/0/statis/fasilitas/wisata_sejarah_museum_sumatera_utara_dqpg6x.webp',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.0840294640025!2d98.69379157396274!3d3.5681368504363182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031305a51a6451f%3A0x7e6a2066d94acf8a!2sMuseum%20Negeri%20Sumatera%20Utara!5e0!3m2!1sid!2sid!4v1756692187795!5m2!1sid!2sid',
          penunjukUrl: 'https://maps.app.goo.gl/mQoeWUk2jfdrN6aF7',
          highlights: ['Artefak suku Batak', 'Replika rumah adat', 'Koleksi tekstil', 'Benda bersejarah']
        },
        {
          id: 'museum-rahmat-internasional',
          name: 'Rahmat International Wildlife Museum & Gallery',
          type: 'Museum Satwa',
          description: 'Museum satwa yang menampilkan koleksi taksidermi (pengawetan) hewan liar dari seluruh dunia, dengan penataan yang menyerupai habitat aslinya.',
          address: 'Jl. S. Parman No.309, Petisah Hulu, Medan Baru, Kota Medan, Sumatera Utara',
          phone: '(061) 4568858',
          openHours: 'Setiap hari: 09.00-17.00 WIB',
          rating: 4.6,
          image: 'https://konten.usu.ac.id/storage/satker/0/statis/fasilitas/Rahmat-International-Wildlife-Museum-Gallery.jpg.webp',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.03590436142!2d98.66491567396274!3d3.5792242503605065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131d0701ed0d5%3A0x789fbd3830353781!2sRahmat%20International%20Wildlife%20Museum%20%26%20Gallery!5e0!3m2!1sid!2sid!4v1756692448148!5m2!1sid!2sid',
          penunjukUrl: 'https://maps.app.goo.gl/caq1TkBBSsLDYP96A',
          highlights: ['Koleksi taksidermi', 'Hewan langka', 'Diorama alam', 'Galeri foto satwa']
        },
        {
          id: 'museum-perjuangan-tni',
          name: 'Museum Perjuangan TNI',
          type: 'Museum Militer',
          description: 'Museum yang didedikasikan untuk mengenang perjuangan TNI dalam mempertahankan kemerdekaan, dengan koleksi senjata, kendaraan militer, dan diorama pertempuran.',
          address: 'Jl. Gatot Subroto No.143, Petisah Tengah, Medan Petisah, Kota Medan, Sumatera Utara',
          phone: '(061) 4515151',
          openHours: 'Selasa-Minggu: 09.00-15.00 WIB',
          rating: 4.3,
          image: 'https://zjglidcehtsqqqhbdxyp.supabase.co/storage/v1/object/public/atourin/images/destination/medan/museum-perjuangan-tni-profile1671000714.jpeg?x-image-process=image/resize,p_100,limit_1/imageslim',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.0161988892237!2d98.67161697396278!3d3.5837542503294904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131cda523c5b7%3A0x9e781679843e9d60!2sMuseum%20Perjuangan%20TNI!5e0!3m2!1sid!2sid!4v1756692631874!5m2!1sid!2sid',
          penunjukUrl: 'https://maps.app.goo.gl/hPLsxpxPNXATZetT6',
          highlights: ['Kendaraan lapis baja', 'Senjata kuno', 'Diorama pertempuran', 'Seragam militer']
        },
        {
          "id": "museum-situs-kota-cina",
          "name": "Museum Situs Kota China",
          "type": "Museum Arkeologi",
          "description": "Museum arkeologi yang menyimpan temuan-temuan dari Situs Kota China, bekas pelabuhan kuno dari abad ke-11 hingga ke-14 Masehi, yang menunjukkan interaksi budaya Tionghoa dan lokal.",
          "address": "Jalan Kota Cina, Paya Pasir, Medan Marelan, Kota Medan, Sumatera Utara",
          "phone": "(061) 6850100",
          "openHours": "Senin-Sabtu: 08.00-17.00 WIB",
          "rating": 4.2,
          "image": "https://awsimages.detik.net.id/community/media/visual/2022/09/03/museum-situs-kota-cina-medan_169.jpeg?w=1200",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.398376945758!2d98.65423347396303!3d3.722991649359321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3036d29f05ad96f1%3A0x473ddd25eecdcb8!2sMuseum%20Situs%20Kotta%20Cinna!5e0!3m2!1sid!2sid!4v1756693028823!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/Y8RnxaWcEu2PcteAA",
          "highlights": ["Artefak dinasti Ming", "Koleksi keramik", "Situs arkeologi", "Sejarah perdagangan"]
        },
        {
          id: 'museum-batak-toba',
          name: 'Museum Batak Toba',
          type: 'Museum Etnografi',
          description: 'Museum khusus yang menampilkan koleksi artefak, alat musik, dan benda-benda budaya dari suku Batak Toba. Menjadi pusat pelestarian warisan budaya Batak.',
          address: 'Desa Simanindo, Pulau Samosir, Sumatera Utara',
          phone: '-',
          openHours: 'Setiap hari: 08.00-18.00 WIB',
          rating: 4.5,
          image: 'https://awsimages.detik.net.id/community/media/visual/2023/12/14/museum-tomok_169.jpeg?w=1200',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.5495698796713!2d98.85753027396191!3d2.65063655601688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031e9949117fdff%3A0xa7f350eb6c387b48!2sBatak%20Museum!5e0!3m2!1sid!2sid!4v1756693124179!5m2!1sid!2sid',
          penunjukUrl: 'https://maps.app.goo.gl/bBgfej3szCrPkFT66',
          highlights: ['Rumah adat Bolon', 'Patung sigale-gale', 'Tarian tradisional', 'Kerajinan tangan Batak']
        }
      ]
    },
    {
      id: 'Sumatra-Barat',
      name: 'Sumatra Barat',
      locations: [
        {
          "id": "museum-adityawarman",
          "name": "Museum Adityawarman",
          "type": "Museum Budaya",
          "description": "Museum kebanggaan Sumatera Barat yang didirikan untuk melestarikan dan menampilkan warisan budaya Minangkabau. Arsitekturnya meniru rumah adat Minang, Rumah Gadang.",
          "address": "Jl. Diponegoro No.10, Belakang Tangsi, Padang Barat, Kota Padang, Sumatera Barat",
          "phone": "(0751) 34960",
          "openHours": "Selasa-Minggu: 08.00-16.00 WIB",
          "rating": 4.5,
          "image": "https://upload.wikimedia.org/wikipedia/commons/8/86/Museum_Adityawarman_20211213.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.2633327497074!2d100.3532900739721!3d-0.9556695353520657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b94e77661571%3A0x81991e01942fc77b!2sMuseum%20Adityawarman!5e0!3m2!1sid!2sid!4v1756693438627!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/Zp5ekPzrkeaJLm9H7",
          "highlights": [
            "Replika Rumah Gadang",
            "Koleksi artefak budaya Minang",
            "Pakaian adat dan perhiasan",
            "Seni kerajinan tangan"
          ]
        },
        {
          "id": "rumah-kelahiran-bung-hatta",
          "name": "Museum Rumah Kelahiran Bung Hatta",
          "type": "Museum Sejarah",
          "description": "Rumah masa kecil Mohammad Hatta, proklamator kemerdekaan dan Wakil Presiden pertama Indonesia. Bangunan ini menyimpan benda-benda pribadi dan memorabilia keluarga Hatta.",
          "address": "Jl. Soekarno Hatta No.37, Kota Bukittinggi, Sumatera Barat",
          "phone": "(0752) 21102",
          "openHours": "Selasa-Minggu: 08.00-17.00 WIB",
          "rating": 4.7,
          "image": "https://upload.wikimedia.org/wikipedia/commons/4/45/Mohammad_Hatta_Birth_Place_and_Museum%2C_Bukittinggi%2C_West_Sumatra_2017-02-13_01.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7633010522986!2d100.37051727396867!3d-0.3008978353408825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd54780bbc3b44b%3A0xc6fe4d827fb903a2!2sRumah%20Kelahiran%20Bung%20Hatta!5e0!3m2!1sid!2sid!4v1756693549385!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/SaJLph4v4rEPDtURA",
          "highlights": ["Benda-benda pribadi Bung Hatta", "Arsitektur rumah tradisional Minang", "Sejarah perjuangan", "Dokumen bersejarah"]
        },
        {
          "id": "museum-tambang-sawahlunto",
          "name": "Museum Goedang Ransoem",
          "type": "Museum Sejarah",
          "description": "Dahulu merupakan dapur umum yang memasok makanan untuk pekerja tambang pada era kolonial. Kini menjadi museum yang menceritakan sejarah tambang batu bara di Sawahlunto.",
          "address": "Jl. Abdul Fatah, Durian II, Silungkang, Kota Sawahlunto, Sumatera Barat",
          "phone": "(0754) 61000",
          "openHours": "Setiap hari: 08.00-17.00 WIB",
          "rating": 4.4,
          "image": "https://museum.co.id/wp-content/uploads/2020/09/001926100_1443681433-01102015-goedang-ransum.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.5384256846796!2d100.77846297397053!3d-0.6786735352618021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2b2f472a83d6e3%3A0x9f1ae03be3908ee1!2sMuseum%20Goedang%20Ransoem%20Sawahlunto!5e0!3m2!1sid!2sid!4v1756693833219!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/ZwXxPk9fd9bAHy2z6",
          "highlights": [
            "Peralatan tambang",
            "Dapur raksasa",
            "Lokomotif tua",
            "Sejarah kolonial"
          ]
        },
        {
          "id": "museum-kereta-api-sawahlunto",
          "name": "Museum Kereta Api Sawahlunto",
          "type": "Museum Transportasi",
          "description": "Stasiun kereta api peninggalan Belanda yang kini beralih fungsi menjadi museum. Menampilkan sejarah perkeretaapian untuk mengangkut batu bara di kota ini.",
          "address": "Jl. Ahmad Yani, Pasar Kubang, Kota Sawahlunto, Sumatera Barat",
          "phone": "(0754) 61000",
          "openHours": "Setiap hari: 08.00-17.00 WIB",
          "rating": 4.3,
          "image": "https://upload.wikimedia.org/wikipedia/commons/2/24/Museum_Kereta_Api_Sawahlunto_2018.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.5349370325307!2d100.77437697397056!3d-0.6828900352622357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2b2f3ff366abb7%3A0x6d1618f86e45daec!2sMuseum%20Kereta%20Api%20Sawahlunto!5e0!3m2!1sid!2sid!4v1756693938424!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/tJHA4dk28uWDpvfA9",
          "highlights": [
            "Lokomotif mak Itam",
            "Gerbong kuno",
            "Diorama stasiun",
            "Sejarah transportasi"
          ]
        },
        {
          "id": "museum-bundo-kanduang",
          "name": "Museum Bundo Kanduang",
          "type": "Museum Budaya",
          "description": "Museum yang terletak di dalam area Benteng Fort de Kock, Bukittinggi. Menampilkan koleksi seni, kerajinan tangan, dan peninggalan sejarah dari kerajaan Minangkabau.",
          "address": "Jl. Yos Sudarso, Benteng Ps. Atas, Kota Bukittinggi, Sumatera Barat",
          "phone": "(0752) 22000",
          "openHours": "Setiap hari: 08.00-17.00 WIB",
          "rating": 4.2,
          "image": "https://cdn.antaranews.com/cache/1200x800/2021/12/08/08.museum.jpg.webp",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510689.77681684337!2d99.79277570010447!3d-0.29930672855612245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd5393ed9dd2967%3A0x9aaa7a9dfb38aea4!2sRumah%20Adat%20Nan%20Baanjuang%20Museum!5e0!3m2!1sid!2sid!4v1756694050362!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/gPvWNpapgdArzxgF8",
          "highlights": [
            "Artefak kerajaan",
            "Perhiasan tradisional",
            "Teks kuno",
            "Seni ukir Minangkabau"
          ]
        }
      ]
    },
    {
      "id": "riau",
      "name": "Riau",
      "locations": [
        {
          "id": "museum-sang-nila-utama",
          "name": "Museum Daerah Riau Sang Nila Utama",
          "type": "Museum Budaya",
          "description": "Museum negeri Provinsi Riau yang menampilkan koleksi benda-benda bersejarah dan budaya Melayu Riau, mulai dari peninggalan kerajaan hingga diorama kehidupan sehari-hari.",
          "address": "Jl. Jenderal Sudirman No.194, Tengkerang Tengah, Kec. Marpoyan Damai, Kota Pekanbaru, Riau",
          "phone": "(0761) 855320",
          "openHours": "Selasa-Minggu: 08.00-15.00 WIB",
          "rating": 4.5,
          "image": "https://disbud.riau.go.id/storage/images/content/upt-museum-gambar-utama/1731569847-6735a8b708e03.jpeg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6699811402605!2d101.45190587396546!3d0.49407216373088836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5aec1abc92bbf%3A0x86661f92518af062!2sMuseum%20Daerah%20Riau%20Sang%20Nila%20Utama!5e0!3m2!1sid!2sid!4v1756696188151!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/nmyvonvoSw6zx6o9A",
          "highlights": ["Koleksi busana Melayu", "Diorama sejarah Riau", "Artefak kerajaan-kerajaan Melayu", "Permainan tradisional"]
        },
        {
          "id": "istana-siak-sri-indrapura",
          "name": "Istana Siak Sri Indrapura",
          "type": "Istana / Museum",
          "description": "Kompleks istana peninggalan Kesultanan Siak Sri Indrapura yang megah dengan arsitektur perpaduan Melayu, Arab, dan Eropa. Kini berfungsi sebagai museum.",
          "address": "Jl. Sultan Syarif Kasim, Kp. Dalam, Kec. Siak, Kabupaten Siak, Riau",
          "phone": "-",
          "openHours": "Setiap Hari: 09.00-17.00 WIB",
          "rating": 4.8,
          "image": "https://upload.wikimedia.org/wikipedia/commons/8/89/Istana_Kerajaan_Siak_%282%29.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.434431125012!2d102.04641157396453!3d0.7948176631105595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d4273f88da76f1%3A0xce5a6b2edf647c58!2sIstana%20Siak%20Sri%20Indrapura!5e0!3m2!1sid!2sid!4v1756696320053!5m2!1sid!2sid",
          "penunjukUrl": "hhttps://maps.app.goo.gl/4fSWsJBXrcNffZaQ8",
          "highlights": ["Komet, alat musik langka", "Singgasana berlapis emas", "Koleksi cermin kristal", "Arsitektur Moorish-Eropa"]
        },
        {
          "id": "candi-muara-takus",
          "name": "Candi Muara Takus",
          "type": "Situs Candi",
          "description": "Satu-satunya situs peninggalan sejarah berbentuk candi di Riau, merupakan candi Buddha dari masa Kerajaan Sriwijaya yang sangat unik karena terbuat dari batu bata merah.",
          "address": "Muara Takus, Kec. XIII Koto Kampar, Kabupaten Kampar, Riau",
          "phone": "-",
          "openHours": "Setiap Hari: 07.30-18.00 WIB",
          "rating": 4.6,
          "image": "https://cdn0-production-images-kly.akamaized.net/GWAw6fYdUb0b66M8tDy6M9UryrE=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2813712/original/033994800_1558596483-IMG_20190523_125851.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.749702384556!2d100.63735626955909!3d0.336031963272467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d534de1cfa81d7%3A0x915328680a25f7f5!2sCandi%20Muara%20Takus!5e0!3m2!1sid!2sid!4v1756696621730!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/bfmTzG1WTWBz2wMcA",
          "highlights": ["Stupa Mahligai", "Candi Tua dan Candi Bungsu", "Peninggalan Kerajaan Sriwijaya", "Situs Buddha kuno"]
        },
        {
          "id": "rumah-singgah-sultan-siak",
          "name": "Rumah Singgah Sultan Siak (Pekanbaru)",
          "type": "Bangunan Sejarah",
          "description": "Sebuah rumah panggung bersejarah di tepi Sungai Siak yang dulunya digunakan sebagai tempat persinggahan Sultan Syarif Kasim II apabila berkunjung ke Pekanbaru. Kini menjadi cagar budaya.",
          "address": "Jl. Panglima Undan, Kp. Bandar, Kec. Senapelan, Kota Pekanbaru, Riau",
          "phone": "-",
          "openHours": "Dapat dikunjungi (biasanya pagi-sore)",
          "rating": 4.3,
          "image": "https://asset.kompas.com/crops/WDmEngRRobo0bTSIFeztzUwk6Ps=/0x0:1000x667/1200x800/data/photo/2018/03/21/3396378131.jpeg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.640837173321!2d101.43718057396529!3d0.5404322636448875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5ac712c598155%3A0x5657647294fb9a10!2sRumah%20Singgah%20Tuan%20Kadi!5e0!3m2!1sid!2sid!4v1756879332605!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/D6pKZHjd2FrmGQGx9",
          "highlights": ["Arsitektur Rumah Panggung Melayu", "Lokasi di tepi Sungai Siak", "Sejarah Sultan Syarif Kasim II", "Kawasan kota tua Pekanbaru"]
        },

        {
          "id": "balai-adat-riau",
          "name": "Balai Adat Melayu Riau",
          "type": "Pusat Kebudayaan",
          "description": "Sebuah bangunan megah dengan arsitektur khas Melayu Riau yang berfungsi sebagai pusat kegiatan adat dan budaya, serta menjadi ikon kebanggaan masyarakat Riau.",
          "address": "Jl. Diponegoro No.39, Sumahilang, Kec. Pekanbaru Kota, Kota Pekanbaru, Riau",
          "phone": "(0761) 22847",
          "openHours": "Senin-Jumat: 08.00-16.00 WIB",
          "rating": 4.7,
          "image": "https://www.riauonline.co.id/foto/bank/images2/Balai-Adat-Melayu-Riau.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6571692825933!2d101.45036747396534!3d0.5149666636925655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5aea09b76a74f%3A0x17e7f065ecfbff63!2sBalai%20Adat%20Melayu%20Riau!5e0!3m2!1sid!2sid!4v1756696773272!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/NwVCojkS3DoHNiwT6",
          "highlights": ["Arsitektur Melayu megah", "Ukiran Selembayung", "Pusat acara adat", "Perpustakaan Budaya Melayu"]
        }
      ]
    },

    {
      "id": "kepulauan-riau",
      "name": "Kepulauan Riau",
      "locations": [
        {
          "id": "museum-sultan-sulaiman-badrul-alamsyah",
          "name": "Museum Sultan Sulaiman Badrul Alamsyah",
          "type": "Museum Budaya",
          "description": "Museum yang terletak di Kota Tanjungpinang ini menyimpan beragam koleksi peninggalan sejarah dan budaya Melayu, termasuk naskah kuno, keramik, dan benda-benda pusaka Kesultanan Riau-Lingga.",
          "address": "Jl. Ketapang No.2, Kemboja, Kec. Tanjungpinang Bar., Kota Tanjung Pinang, Kepulauan Riau",
          "phone": "(0771) 21557",
          "openHours": "Senin-Jumat: 08.00-16.00 WIB",
          "rating": 4.6,
          "image": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Museumtanjungpinang.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.2935336726523!2d104.44138007396414!3d0.9293027627853708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98d9a9c9a6511%3A0x5d7f799cc06ba1c2!2sMuseum%20Sultan%20Sulaiman%20Badrul%20Alamsyah!5e0!3m2!1sid!2sid!4v1756699436099!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/i9tFakdXvAYB78LA8",
          "highlights": ["Peninggalan Kesultanan Riau-Lingga", "Koleksi naskah Melayu kuno", "Batik khas Kepri", "Sejarah maritim"]
        },
        {
          "id": "pulau-penyengat",
          "name": "Pulau Penyengat Inderasakti",
          "type": "Situs Bersejarah",
          "description": "Sebuah pulau kecil yang menjadi pusat pemerintahan Kesultanan Johor-Riau. Pulau ini penuh dengan peninggalan sejarah seperti Masjid Raya Sultan Riau, makam raja, dan benteng pertahanan.",
          "address": "Pulau Penyengat, Kota Tanjung Pinang, Kepulauan Riau",
          "phone": "-",
          "openHours": "Setiap Hari, dapat diakses dengan perahu",
          "rating": 4.8,
          "image": "https://assets.pikiran-rakyat.com/crop/0x0:0x0/720x0/webp/photo/2024/03/26/3499159061.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.2934186938965!2d104.4178950739641!3d0.9294045627851083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d973b42377c96f%3A0xe0b6ce35aa671713!2sMasjid%20Raya%20Sultan%20Riau%20Penyengat!5e0!3m2!1sid!2sid!4v1756699294055!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/dPq6BFT3JXSR9UBr6",
          "highlights": ["Masjid Raya Sultan Riau", "Makam Raja Ali Haji", "Benteng Bukit Kursi", "Pusat Bahasa Melayu Klasik"]
        },
        {
          "id": "museum-linggam-cahaya",
          "name": "Museum Linggam Cahaya",
          "type": "Museum Sejarah",
          "description": "Berlokasi di Daik, Lingga, museum ini menampilkan sejarah Kerajaan Melayu Riau-Lingga-Johor-Pahang. Koleksinya mencakup alat-alat kebesaran kerajaan dan foto-foto bersejarah.",
          "address": "Jl. Raja Muhammad Yusuf, Daik, Kec. Lingga, Kabupaten Lingga, Kepulauan Riau",
          "phone": "0812-7013-1991",
          "openHours": "Setiap Hari: 08.00-16.00 WIB",
          "rating": 4.5,
          "image": "https://www.hariankepri.com/wp-content/uploads/2023/03/IMG-20230316-WA0015.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.789939085595!2d104.59828797396823!3d-0.2161111353906822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e27697d49f8245b%3A0x10361dc7529942a0!2sMuseum%20Linggam%20Cahaya!5e0!3m2!1sid!2sid!4v1756698980101!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/U9qYuQsrkfvgarq1A",
          "highlights": ["Sejarah Kesultanan Lingga", "Peralatan upacara adat", "Meriam kuno", "Foto-foto keluarga kerajaan"]
        },
        {
          "id": "vihara-kstigarbha-bodhisattva",
          "name": "Vihara Ksitigarbha Bodhisattva",
          "type": "Situs Religi",
          "description": "Vihara megah yang terkenal dengan julukan Vihara Seribu Patung. Memiliki koleksi patung Lohan (murid Buddha) dalam berbagai ekspresi dan pose yang sangat mengesankan.",
          "address": "Jl. Asia Afrika KM 14, Kijang, Kota Tanjung Pinang, Kepulauan Riau",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-17.00 WIB",
          "rating": 4.7,
          "image": "https://getlost.id/wp-content/uploads/2020/03/Vihara-Ksitigarbha-Bodhisattva_1087706750.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.3213035186454!2d104.5374867739642!3d0.9043803628478635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d96cf29dcc6f57%3A0xe953dcb7b63e97b9!2sVihara%20Ksitigarbha%20Bodhisattva!5e0!3m2!1sid!2sid!4v1756698890068!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/W2rEP79vRbtFE7Xm6",
          "highlights": ["Patung Seribu Wajah", "Patung Dewi Kuan Im", "Arsitektur Tionghoa megah", "Taman dan kolam"]
        },
        {
          "id": "museum-batam-raja-ali-haji",
          "name": "Museum Batam Raja Ali Haji",
          "type": "Museum Sejarah & Budaya",
          "description": "Museum modern yang menampilkan perjalanan sejarah Batam dari masa Kerajaan Riau-Lingga, era Belanda, hingga pembangunan Batam modern saat ini.",
          "address": "Jl. Engku Putri, Dataran Engku Putri, Batam Kota, Kota Batam, Kepulauan Riau",
          "phone": "0811-7762-255",
          "openHours": "Selasa-Minggu: 09.00-16.00 WIB",
          "rating": 4.7,
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Museum_raja_ali_haji_1.jpg/1200px-Museum_raja_ali_haji_1.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0430678237935!2d104.0536735!3d1.129509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d9891767be1ff5%3A0x38ff90b20214d1d6!2sMuseum%20Batam%20Raja%20Ali%20Haji!5e0!3m2!1sid!2sid!4v1756698762227!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/n2uh6qidBJnQTi6aA",
          "highlights": ["Sejarah peradaban Batam", "Galeri Otorita Batam", "Khazanah Melayu", "Teknologi interaktif"]
        }
      ]
    },

    {
      "id": "jambi",
      "name": "Jambi",
      "locations": [
        {
          "id": "museum-siginjei-jambi",
          "name": "Museum Siginjei Jambi",
          "type": "Museum Umum",
          "description": "Museum negeri Provinsi Jambi yang memiliki koleksi beragam, mulai dari benda-benda peninggalan prasejarah, koleksi etnografi budaya Jambi, hingga peninggalan masa kesultanan.",
          "address": "Jl. Urip Sumoharjo No.1, Sungai Putri, Kec. Danau Sipin, Kota Jambi, Jambi",
          "phone": "(0741) 63634",
          "openHours": "Selasa-Minggu: 08.00-16.00 WIB",
          "rating": 4.6,
          "image": "https://cdn.antaranews.com/cache/1200x800/2022/04/05/Museum-Siginjei-jambi.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.2473613289967!2d103.59028607397622!3d-1.6078952360601049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2588f52e97627f%3A0xa9fe255ac7c508d6!2sMuseum%20Siginjei!5e0!3m2!1sid!2sid!4v1756700229715!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/hPmuFbi4xuKCkwLr9",
          "highlights": [
            "Koleksi Arca perunggu",
            "Peninggalan Kesultanan Jambi",
            "Keramik dari Dinasti Song",
            "Etnografi budaya Jambi"
          ]
        },
        {
          "id": "candi-muaro-jambi",
          "name": "Candi Muaro Jambi",
          "type": "Situs Candi",
          "description": "Kompleks percandian Hindu-Buddha terluas di Asia Tenggara, peninggalan Kerajaan Sriwijaya dan Kerajaan Melayu. Dikenal sebagai pusat pendidikan di masa lalu.",
          "address": "Kompleks Candi Muaro Jambi, Maro Sebo, Kabupaten Muaro Jambi, Jambi",
          "phone": "0852-6633-5212",
          "openHours": "Setiap Hari: 08.00-18.00 WIB",
          "rating": 4.7,
          "image": "https://awsimages.detik.net.id/community/media/visual/2023/03/01/candi-muaro-jambi_169.jpeg?w=1200",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4910687859788!2d103.66450887397534!3d-1.4779159358635023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e25f3532e01e437%3A0x9251412ef519ac6f!2sCandi%20Muaro%20Jambi!5e0!3m2!1sid!2sid!4v1756700359298!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/T7hReLVVnDUahMwQA",
          "highlights": [
            "Percandian terluas se-Asia Tenggara",
            "Peninggalan Kerajaan Sriwijaya",
            "Candi Gumpung & Candi Tinggi",
            "Pusat pendidikan kuno"
          ]
        },
        {
          "id": "museum-perjuangan-rakyat-jambi",
          "name": "Museum Perjuangan Rakyat Jambi",
          "type": "Museum Sejarah",
          "description": "Museum yang didedikasikan untuk mengenang perjuangan rakyat Jambi dalam merebut dan mempertahankan kemerdekaan. Koleksinya meliputi senjata, foto, dan diorama.",
          "address": "Jl. Sultan Agung No.12, Murni, Kec. Telanaipura, Kota Jambi, Jambi",
          "phone": "(0741) 23434",
          "openHours": "Setiap Hari: 08.00-14.00 WIB",
          "rating": 4.5,
          "image": "https://simpangkeris.jambikota.go.id/files_simpang_keris/images/95df30bb-993b-4aad-a382-b8c2b6f156b7.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.2699699879!2d103.60429957397616!3d-1.596282436041419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2588e5d0d70cb5%3A0xd51651f58ecc4bf!2sMuseum%20PerJuangan%20Rakyat%20Jambi!5e0!3m2!1sid!2sid!4v1756700477419!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/zqhoEWj3KBBBHnwV8",
          "highlights": [
            "Koleksi senjata tradisional",
            "Diorama pertempuran",
            "Foto-foto pahlawan Jambi",
            "Kendaraan perang"
          ]
        },
        {
          "id": "rumah-batu-olak",
          "name": "Situs Rumah Batu Olak",
          "type": "Situs Bersejarah",
          "description": "Sebuah rumah panggung kuno yang terbuat dari fosil kayu atau kayu yang membatu. Rumah ini diyakini milik seorang saudagar Tionghoa bernama Olai.",
          "address": "Jalan K.H. Hasan Anang, Ulu Gedong, Kec. Olak Kemang, Kota Jambi",
          "phone": "-",
          "openHours": "Dapat dikunjungi setiap saat",
          "rating": 4.3,
          "image": "https://kilasjambi.com/wp-content/uploads/2023/04/rumah-batu-olak-kemang-1024x768.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.2915885673274!2d103.59725512397611!3d-1.5850986360236201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e25891b36a29de9%3A0xb8b345bd9d0b7790!2sCagar%20Budaya%20Rumah%20Batu!5e0!3m2!1sid!2sid!4v1756700722758!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/PQHL1shZ6HfYuFLb9",
          "highlights": [
            "Bangunan dari fosil kayu",
            "Arsitektur Melayu-Tionghoa",
            "Sejarah saudagar Olai",
            "Peninggalan abad ke-19"
          ]
        },
        {
          "id": "geopark-merangin",
          "name": "Taman Bumi Merangin (Geopark)",
          "type": "Situs Geologi",
          "description": "Kawasan taman bumi yang menyimpan fosil-fosil flora dan fauna berusia ratusan juta tahun. Fosil paling terkenal adalah Araucarioxylon atau fosil kayu.",
          "address": "Desa Dusun Baru, Kecamatan Pamenang, Kabupaten Merangin, Jambi",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-17.00 WIB",
          "rating": 4.6,
          "image": "https://awsimages.detik.net.id/community/media/visual/2022/02/21/geopark-merangin-diproyeksikan-jadi-destinasi-wisata-kelas-dunia_169.png?w=1200",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.934656258433!2d102.10822677398039!3d-2.1785100372501174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2e091f13d8f59d%3A0x1e1a297ca06d2880!2sTaman%20Geopark%20Merangin!5e0!3m2!1sid!2sid!4v1756700853954!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/MtYsgJuzZSeakWgy6",
          "highlights": [
            "Fosil flora berusia 350 juta tahun",
            "Batuan purba",
            "Arung jeram di Sungai Batang Merangin",
            "Warisan Dunia UNESCO"
          ]
        }
      ]
    },

    {
      "id": "sumatra-selatan",
      "name": "Sumatra Selatan",
      "locations": [
        {
          "id": "museum-negeri-sumsel-balaputradewa",
          "name": "Museum Negeri Sumatra Selatan Balaputradewa",
          "type": "Museum Arkeologi & Etnografi",
          "description": "Museum terlengkap di Palembang yang menampilkan sejarah Sumatra Selatan mulai dari zaman prasejarah, masa Kerajaan Sriwijaya, Kesultanan Palembang, hingga era kolonial.",
          "address": "Jl. Srijaya No.I, RW.5, Srijaya, Kec. Alang-Alang Lebar, Kota Palembang, Sumatra Selatan",
          "phone": "(0711) 410852",
          "openHours": "Selasa-Minggu: 08.00-15.30 WIB",
          "rating": 4.6,
          "image": "https://indonesiakaya.com/wp-content/uploads/2020/10/2__Museum_yang_memiliki_luas_lahan_sekitar_23_565_m2_ini_menyimpan_10_jenis_koleksi_dengan_jumlah_koleksi_mencapai_3_882_item.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.5277458689734!2d104.72800857398683!3d-2.9509407397094036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b75dda65dcf31%3A0xe3df5bf1ad9ed6c0!2sMuseum%20Negeri%20Sumatera%20Selatan%20%22Balaputera%20Dewa%22!5e0!3m2!1sid!2sid!4v1756713259692!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/udS8CQwYypahjsn67",
          "highlights": ["Peninggalan Kerajaan Sriwijaya", "Rumah Limas asli", "Arca kuno", "Koleksi kain tradisional"]
        },
        {
          "id": "museum-sultan-mahmud-badaruddin-ii",
          "name": "Museum Sultan Mahmud Badaruddin II",
          "type": "Museum Sejarah & Budaya",
          "description": "Berlokasi di bekas bangunan Karesidenan Kolonial, museum ini berfokus pada sejarah Kesultanan Palembang Darussalam, menampilkan koleksi arkeologi, keramik, dan mata uang.",
          "address": "Jl. Sultan Mahmud Badaruddin II No.2, 19 Ilir, Kec. Bukit Kecil, Kota Palembang, Sumatra Selatan",
          "phone": "(0711) 352463",
          "openHours": "Selasa-Minggu: 09.00-16.00 WIB",
          "rating": 4.5,
          "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/6f/14/f3/tampak-luar.jpg?w=900&h=-1&s=1",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.5277458689734!2d104.72800857398683!3d-2.9509407397094036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b75dda65dcf31%3A0xe3df5bf1ad9ed6c0!2sMuseum%20Negeri%20Sumatera%20Selatan%20%22Balaputera%20Dewa%22!5e0!3m2!1sid!2sid!4v1756701235969!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/6Guex2g5m5Mm2btj7",
          "highlights": ["Sejarah Kesultanan Palembang", "Koleksi mata uang kuno", "Bangunan arsitektur kolonial", "Peninggalan budaya Melayu"]
        },
        {
          "id": "taman-purbakala-kerajaan-sriwijaya",
          "name": "Taman Purbakala Kerajaan Sriwijaya",
          "type": "Situs Arkeologi",
          "description": "Kawasan taman arkeologi yang diyakini sebagai sisa-sisa pusat permukiman dan taman dari Kerajaan Sriwijaya. Terdapat museum dan kanal-kanal kuno di area ini.",
          "address": "Jl. Syakhyakirti, Karang Anyar, Kec. Gandus, Kota Palembang, Sumatra Selatan",
          "phone": "0813-6724-4114",
          "openHours": "Setiap Hari: 08.00-18.00 WIB",
          "rating": 4.4,
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Taman_Purbakala_Kerajaan_Sriwijaya_-_Pendopo_Utama.jpg/1200px-Taman_Purbakala_Kerajaan_Sriwijaya_-_Pendopo_Utama.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.295511572278!2d104.73184327398748!3d-3.015026839957302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b9e6cae9eb351%3A0x83f75e4e0e8a569e!2sTaman%20Purbakala%20Kerajaan%20Sriwijaya!5e0!3m2!1sid!2sid!4v1756713486676!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/z7TD655JhcniKqV69",
          "highlights": ["Pusat Kerajaan Sriwijaya", "Museum Sriwijaya", "Kanal-kanal kuno", "Prasasti Kedukan Bukit (replika)"]
        },
        {
          "id": "bukit-siguntang",
          "name": "Bukit Siguntang",
          "type": "Situs Sejarah & Religi",
          "description": "Sebuah bukit yang dianggap sebagai tempat sakral dan kompleks pemakaman bangsawan dari masa Kerajaan Sriwijaya. Tempat ini penting bagi sejarah Melayu di Nusantara.",
          "address": "Jl. Srijaya Negara, Bukit Lama, Kec. Ilir Bar. I, Kota Palembang, Sumatra Selatan",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-17.00 WIB",
          "rating": 4.5,
          "image": "https://indonesiakaya.com/wp-content/uploads/2020/10/1__IMG_4085_Bukit_Siguntang_merupakan_tempat_pemakaman_yang_khusus_diperuntukan_bagi_keturunan_Raja_Sriwijaya_2.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15937.475207471854!2d104.71584392617582!3d-2.994950019471913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b75ea39f9e9bf%3A0xb9b4e243dc7453cb!2sBukit%20Siguntang!5e0!3m2!1sid!2sid!4v1756879897917!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/qUYivvnQM63PBUcBA",
          "highlights": ["Makam bangsawan Sriwijaya", "Pemandangan Kota Palembang", "Tempat sakral", "Situs ziarah dan sejarah"]
        },

        {
          "id": "museum-subkoss-garuda-sriwijaya",
          "name": "Museum Monpera (Monumen Perjuangan Rakyat)",
          "type": "Museum Sejarah Militer",
          "description": "Museum yang didedikasikan untuk mengenang pertempuran lima hari lima malam di Palembang melawan Belanda. Menyimpan koleksi senjata, dokumen, dan diorama perjuangan.",
          "address": "Jl. Merdeka No.1, 19 Ilir, Kec. Bukit Kecil, Kota Palembang, Sumatra Selatan",
          "phone": "(0711) 312232",
          "openHours": "Senin-Jumat: 08.00-15.30 WIB",
          "rating": 4.6,
          "image": "https://indonesiakaya.com/wp-content/uploads/2020/10/3__IMG_3712_Pembangunan_monumen_selesai_pada_1988_dan_diresmikan_oleh_Alamsyah_Ratu_Prawiranegara_Menkokesra_pada_saat_itu_dengan_nama_Monumen_Perjuangan_Rakyat_Monpera.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.389554576545!2d104.7577878739872!3d-2.989240639856755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b76046ede9283%3A0x246dc49ca603989e!2sMONPERA!5e0!3m2!1sid!2sid!4v1756713959616!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/e191HiRw5ZmfjXaF7",
          "highlights": ["Sejarah perjuangan kemerdekaan", "Koleksi senjata perang", "Diorama pertempuran", "Monumen ikonik"]
        }
      ]
    },

    {
      "id": "kepulauan-bangka-belitung",
      "name": "Kepulauan Bangka Belitung",
      "locations": [
        {
          "id": "museum-timah-indonesia-pangkalpinang",
          "name": "Museum Timah Indonesia Pangkalpinang",
          "type": "Museum Sejarah Industri",
          "description": "Museum pertama dan satu-satunya di Asia yang khusus menampilkan sejarah pertimahan di Bangka Belitung, mulai dari era kolonial hingga teknologi modern.",
          "address": "Jl. Jenderal Ahmad Yani No.179, Batin Tikal, Kec. Taman Sari, Kota Pangkal Pinang, Kepulauan Bangka Belitung",
          "phone": "(0717) 421023",
          "openHours": "Setiap Hari: 09.00-16.00 WIB",
          "rating": 4.6,
          "image": "https://www.timah.ubb.ac.id/img/1%20(26).jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d636139.8210853706!2d106.03561066165376!3d-1.866173390983608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e22c12016178f93%3A0x6347a4211f64652d!2sMuseum%20Timah%20Indonesia!5e0!3m2!1sid!2sid!4v1756714373129!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/JEuKC6tzibhNYXBBA",
          "highlights": ["Sejarah pertimahan", "Teknologi penambangan timah", "Diorama tambang", "Bangunan cagar budaya"]
        },
        {
          "id": "museum-kata-andrea-hirata",
          "name": "Museum Kata Andrea Hirata",
          "type": "Museum Sastra",
          "description": "Museum sastra pertama di Indonesia, didirikan oleh penulis novel 'Laskar Pelangi', Andrea Hirata. Museum ini penuh warna dan inspirasi dari dunia literasi.",
          "address": "Jl. Laskar Pelangi No.7, Lenggang, Kec. Gantung, Kabupaten Belitung Timur, Kepulauan Bangka Belitung",
          "phone": "0821-7882-8205",
          "openHours": "Setiap Hari: 09.00-17.00 WIB",
          "rating": 4.5,
          "image": "https://images.tokopedia.net/blog-tokopedia-com/uploads/2018/01/Blog_Judul-Blog-101.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.470024593707!2d108.16153227398702!3d-2.966998339770889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e11292b40f79cd1%3A0x70792b2e73da4e7c!2sMuseum%20Kata%20Andrea%20Hirata!5e0!3m2!1sid!2sid!4v1756714490091!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/ME8rxrVEWrdrzc9PA",
          "highlights": ["Inspirasi 'Laskar Pelangi'", "Kutipan sastra", "Desain interior unik", "Warung kopi tradisional"]
        },
        {
          "id": "rumah-pengasingan-bung-karno",
          "name": "Wisma Ranggam (Rumah Pengasingan Bung Karno)",
          "type": "Situs Bersejarah",
          "description": "Situs bersejarah tempat Presiden Soekarno dan beberapa tokoh bangsa lainnya diasingkan oleh Belanda pada tahun 1948-1949. Kondisi rumah masih terawat seperti aslinya.",
          "address": "Bukit Menumbing, Air Belo, Kec. Mentok, Kabupaten Bangka Barat, Kepulauan Bangka Belitung",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-17.00 WIB",
          "rating": 4.7,
          "image": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Wisma_Ranggam_in_Mentok%2C_Bangka.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.0510646609046!2d102.2587108739951!3d-3.7990277435334594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e36b0228d92444d%3A0x33b291d649b74efe!2sRumah%20Bekas%20Kediaman%20Bung%20Karno!5e0!3m2!1sid!2sid!4v1756714647981!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/CK524uzsN3xNVEgG9",
          "highlights": ["Kamar tidur Bung Karno", "Mobil pengasingan", "Peninggalan tokoh bangsa", "Pemandangan dari Bukit Menumbing"]
        },
        {
          "id": "museum-tanjungpandan",
          "name": "Museum & Kebun Binatang Tanjungpandan",
          "type": "Museum Umum",
          "description": "Museum yang menampilkan koleksi geologi seperti batuan granit, peninggalan Kerajaan Badau, serta berbagai keramik dan benda-benda budaya dari Pulau Belitung.",
          "address": "Jl. Melati No.A41, Parit, Kec. Tj. Pandan, Kabupaten Belitung, Kepulauan Bangka Belitung",
          "phone": "(0719) 21029",
          "openHours": "Setiap Hari: 08.00-16.00 WIB",
          "rating": 4.3,
          "image": "https://cdn.antaranews.com/cache/1200x800/2020/01/06/WhatsApp-Image-2020-01-06-at-16.24.48_1.jpeg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.2568873465284!2d107.62579507398506!3d-2.740016038941009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e171666daec29e1%3A0xa287c2d0637eb1b1!2sMuseum%20Pemkab%20Belitung!5e0!3m2!1sid!2sid!4v1756714785257!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/bjWzmcqwgYQEKKaX69",
          "highlights": ["Peninggalan Kerajaan Badau", "Koleksi geologi Belitung", "Senjata tradisional", "Biota laut yang diawetkan"]
        },
        {
          "id": "replika-sd-laskar-pelangi",
          "name": "Replika SD Muhammadiyah Laskar Pelangi",
          "type": "Situs Budaya",
          "description": "Bangunan replika sekolah yang menjadi latar utama dalam novel dan film 'Laskar Pelangi'. Menjadi simbol semangat pendidikan dan daya tarik wisata populer di Belitung.",
          "address": "Lenggang, Kec. Gantung, Kabupaten Belitung Timur, Kepulauan Bangka Belitung",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-18.00 WIB",
          "rating": 4.4,
          "image": "https://disbudpar.beltim.go.id/sites/default/files/images/berita/replika%20SD%20Laskar%20pelangi%201.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.4814472726707!2d108.14989387398698!3d-2.9638275397587233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e11298d2349b3cd%3A0x1dfedf627563843b!2sReplika%20Sekolah%20Laskar%20Pelangi!5e0!3m2!1sid!2sid!4v1756714955008!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/D65gqgdf1uCzNhZN6",
          "highlights": ["Lokasi syuting film", "Simbol pendidikan", "Suasana pedesaan Belitung", "Dekat dengan Museum Kata"]
        }
      ]
    },

    {
      "id": "bengkulu",
      "name": "Bengkulu",
      "locations": [
        {
          "id": "museum-negeri-bengkulu",
          "name": "Museum Negeri Bengkulu",
          "type": "Museum Umum",
          "description": "Museum ini menyimpan dan memamerkan koleksi benda-benda bersejarah dan budaya yang berkaitan dengan Provinsi Bengkulu, mulai dari koleksi arkeologi, etnografi, hingga naskah kuno.",
          "address": "Jl. Pembangunan No.8, Padang Harapan, Kec. Gading Cemp., Kota Bengkulu, Bengkulu",
          "phone": "(0736) 21194",
          "openHours": "Selasa-Minggu: 08.00-13.00 WIB",
          "rating": 4.5,
          "image": "https://harianbengkuluekspress.bacakoran.co/upload/f7ccf198072c2cc27a5fddfe654ff801.jpeg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.9741763116313!2d102.2849881739953!3d-3.8156561436202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e36b077ddd7f187%3A0x39079f2632f6f29d!2sMuseum%20Bengkulu!5e0!3m2!1sid!2sid!4v1756715226135!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/dxrJzgr6jVYBeVmj7",
          "highlights": [
            "Koleksi Kain Besurek",
            "Naskah kuno aksara Ka-Ga-Nga",
            "Artefak masa prasejarah",
            "Peninggalan era kolonial Inggris"
          ]
        },
        {
          "id": "rumah-pengasingan-bung-karno",
          "name": "Rumah Pengasingan Bung Karno",
          "type": "Situs Bersejarah",
          "description": "Rumah yang menjadi tempat tinggal Soekarno selama masa pengasingannya di Bengkulu dari tahun 1938 hingga 1942. Di sinilah beliau bertemu dengan Fatmawati.",
          "address": "Jl. Soekarno Hatta, Anggut Atas, Kec. Ratu Samban, Kota Bengkulu, Bengkulu",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-17.00 WIB",
          "rating": 4.7,
          "image": "https://awsimages.detik.net.id/community/media/visual/2022/06/06/rumah-pengasingan-bung-karno-di-bengkulu-1_169.jpeg?w=1200",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.0510646609046!2d102.2587108739951!3d-3.7990277435334594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e36b0228d92444d%3A0x33b291d649b74efe!2sRumah%20Bekas%20Kediaman%20Bung%20Karno!5e0!3m2!1sid!2sid!4v1756715354563!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/HuQXgHCWK7P5SU6AA",
          "highlights": [
            "Tempat tinggal Soekarno",
            "Koleksi buku pribadi Bung Karno",
            "Sepeda ontel bersejarah",
            "Peninggalan perabotan asli"
          ]
        },
        {
          "id": "benteng-marlborough",
          "name": "Benteng Marlborough",
          "type": "Benteng / Situs Bersejarah",
          "description": "Benteng pertahanan peninggalan Inggris (EIC) terbesar di Asia Tenggara. Dibangun pada abad ke-18, benteng ini menjadi saksi bisu masa kolonialisme Inggris di Bengkulu.",
          "address": "Jl. Benteng, Kebun Keling, Kec. Teluk Segara, Kota Bengkulu, Bengkulu",
          "phone": "(0736) 21922",
          "openHours": "Selasa-Minggu: 08.00-17.00 WIB",
          "rating": 4.6,
          "image": "https://osccdn.medcom.id/images/content/2021/06/23/b06176227363fe24fdf8c1ac03a6538f.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.105009982447!2d102.24910077399495!3d-3.7873176434726497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e36afd779f07007%3A0x3c0143f4c64a7e4d!2sBenteng%20Marlborough!5e0!3m2!1sid!2sid!4v1756715499979!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/KR4kfZ4xySHLhcPw8",
          "highlights": [
            "Benteng Inggris terbesar di Asia",
            "Makam Residen Inggris",
            "Bastion dan meriam kuno",
            "Pemandangan Samudra Hindia"
          ]
        },
        {
          "id": "rumah-fatmawati",
          "name": "Rumah Fatmawati Soekarno",
          "type": "Situs Bersejarah",
          "description": "Rumah kediaman Ibu Fatmawati, penjahit Bendera Pusaka Merah Putih dan istri ketiga Presiden Soekarno. Rumah panggung ini menyimpan koleksi pribadi dan mesin jahit beliau.",
          "address": "Jl. Fatmawati, Penurunan, Kec. Ratu Samban, Kota Bengkulu, Bengkulu",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-16.00 WIB",
          "rating": 4.6,
          "image": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Rumah_Fatmawati.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.054434282457!2d102.26287287399511!3d-3.7982973435296556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e36b0181a05e735%3A0xd30d930ef44c67ba!2sRumah%20Ibu%20Fatmawati%20Soekarno!5e0!3m2!1sid!2sid!4v1756715653191!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/J1gqy9D3gZL6jozj9",
          "highlights": [
            "Mesin jahit Bendera Pusaka",
            "Koleksi pakaian Fatmawati",
            "Arsitektur rumah khas Bengkulu",
            "Foto-foto bersejarah"
          ]
        },
        {
          "id": "tugu-thomas-parr",
          "name": "Monumen Thomas Parr",
          "type": "Monumen",
          "description": "Sebuah tugu peringatan yang dibangun oleh pemerintah Inggris untuk mengenang Residen Thomas Parr yang tewas dalam sebuah pemberontakan oleh rakyat Bengkulu pada tahun 1807.",
          "address": "Jl. Ahmad Yani, Kp. Cina, Kec. Teluk Segara, Kota Bengkulu, Bengkulu",
          "phone": "-",
          "openHours": "Dapat diakses setiap saat",
          "rating": 4.4,
          "image": "https://upload.wikimedia.org/wikipedia/commons/a/af/Thomas_Parr_Monument%2C_Bengkulu%2C_2015-04-19_01.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.0986107182966!2d102.24812377399498!3d-3.7887086434798736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e36afd9ba8583cf%3A0x90c027e06cf200d5!2sMonumen%20Tugu%20Thomas%20Parr!5e0!3m2!1sid!2sid!4v1756715773971!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/jPxBq1KaSYptXUfy7",
          "highlights": [
            "Peringatan Residen Thomas Parr",
            "Arsitektur neoklasik",
            "Saksi sejarah perlawanan rakyat",
            "Lokasi strategis di pusat kota"
          ]
        }
      ]
    },

    {
      "id": "lampung",
      "name": "Lampung",
      "locations": [
        {
          "id": "museum-negeri-lampung",
          "name": "Museum Negeri Lampung Ruwa Jurai",
          "type": "Museum Umum",
          "description": "Museum terbesar di Lampung yang menyimpan lebih dari 4.000 koleksi bersejarah, mencakup peninggalan arkeologi, etnografi, naskah kuno, dan keramik dari berbagai era.",
          "address": "Jl. ZA. Pagar Alam No.64, Gedong Meneng, Kec. Rajabasa, Kota Bandar Lampung, Lampung",
          "phone": "(0721) 706979",
          "openHours": "Selasa-Minggu: 08.00-14.00 WIB",
          "rating": 4.6,
          "image": "https://indonesiakaya.com/wp-content/uploads/2020/10/Halaman_depan_Gedung_Museum_Negeri_Lampung_yang_terletak_di_Jalan_Zainal_Arifin_Pagar_Alam_No__64_Rajabasa_Bandar_Lampung_2.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.292146906191!2d105.23823032401353!3d-5.372342953741824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40dab5d8b8ddfb%3A0xb2235987d49dad2f!2sMuseum%20Lampung!5e0!3m2!1sid!2sid!4v1756716028558!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/AckHwmjVxNfSteDq5",
          "highlights": [
            "Koleksi kain Tapis",
            "Meriam kuno peninggalan Belanda",
            "Arca Bodhisattwa",
            "Naskah kuno beraksara Lampung"
          ]
        },
        {
          "id": "taman-purbakala-pugung-raharjo",
          "name": "Taman Purbakala Pugung Raharjo",
          "type": "Situs Arkeologi",
          "description": "Situs arkeologi yang menunjukkan peninggalan dari masa prasejarah, klasik (Hindu-Buddha), hingga masa Islam. Terdapat punden berundak, arca, dan benteng tanah.",
          "address": "Pugung Raharjo, Kec. Sekampung Udik, Kabupaten Lampung Timur, Lampung",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-17.00 WIB",
          "rating": 4.5,
          "image": "https://indonesia.go.id/assets/upload/headline/WhatsApp_Image_2023-10-25_at_18_22_45_(1)_thumb.jpeg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.7552312400226!2d105.5686562740126!3d-5.300841253190151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40ee3f7ece482b%3A0xd670ecd545ea7247!2sTaman%20Purbakala%20Pugungraharjo!5e0!3m2!1sid!2sid!4v1756716144044!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/WRWeXRK4uDG63he97",
          "highlights": [
            "Kompleks punden berundak",
            "Benteng parit dan tanah",
            "Menhir dan batu mayat",
            "Arca Bodhisattwa & Ganesha"
          ]
        },
        {
          "id": "menara-siger",
          "name": "Menara Siger",
          "type": "Monumen / Tugu",
          "description": "Bangunan ikonik berwarna kuning yang menjadi simbol dan titik nol kilometer di ujung selatan Pulau Sumatra. Arsitekturnya terinspirasi dari mahkota pengantin wanita Lampung.",
          "address": "Jl. Lintas Sumatra, Bakauheni, Kabupaten Lampung Selatan, Lampung",
          "phone": "-",
          "openHours": "Setiap Hari: 07.00-18.00 WIB",
          "rating": 4.5,
          "image": "https://asset.kompas.com/crops/eGA_3-6OnxGHh5RbyljjqWKamgE=/0x0:1024x683/1200x800/data/photo/2019/05/21/89768046.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.9297878018297!2d105.74715327402012!3d-5.865495357774198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5145028f7488b45%3A0x447d8d74be60c263!2sMenara%20Siger%20Lampung!5e0!3m2!1sid!2sid!4v1756716253136!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/WBxfUuhgARihf3tX6",
          "highlights": [
            "Ikon Provinsi Lampung",
            "Arsitektur mahkota Siger",
            "Pemandangan Selat Sunda",
            "Titik Nol Kilometer Sumatra"
          ]
        },
        {
          "id": "museum-transmigrasi-lampung",
          "name": "Museum Ketransmigrasian Lampung",
          "type": "Museum Sejarah",
          "description": "Satu-satunya museum transmigrasi di Indonesia yang mendokumentasikan sejarah perpindahan penduduk dari Pulau Jawa ke Lampung sejak tahun 1905.",
          "address": "Desa Bagelen, Kec. Gedong Tataan, Kabupaten Pesawaran, Lampung",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-16.00 WIB",
          "rating": 4.7,
          "image": "https://museumtrans.lampungprov.go.id/berkas//photos/4/Museum%20Trans.JPG",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.2571069783626!2d105.10429847401355!3d-5.377714653783591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40d375fe1895bd%3A0xe540a1a260281cd1!2sMuseum%20Nasional%20Transmigrasi!5e0!3m2!1sid!2sid!4v1756716399363!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/cmjuDjseQy7QYDg59",
          "highlights": [
            "Sejarah transmigrasi Indonesia",
            "Anjungan rumah transmigran",
            "Diorama kehidupan transmigran",
            "Perpustakaan dan arsip"
          ]
        },
        {
          "id": "situs-batu-berak",
          "name": "Situs Megalitikum Batu Berak",
          "type": "Situs Purbakala",
          "description": "Kompleks peninggalan zaman megalitikum yang terdiri dari dolmen, menhir, dan batu datar. Situs ini memberikan gambaran tentang kehidupan masyarakat purba di Lampung Barat.",
          "address": "Pekon Purajaya, Kecamatan Kebun Tebu, Kabupaten Lampung Barat, Lampung",
          "phone": "-",
          "openHours": "Dapat diakses setiap saat",
          "rating": 4.6,
          "image": "https://suarasiber.co.id/wp-content/uploads/2024/02/FB_IMG_1708922209856.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.316429713418!2d104.5279943740095!3d-5.052358051337919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4765855cdefeff%3A0xd15db38a4f82733a!2sSitus%20Megalitikum%20Batuberak!5e0!3m2!1sid!2sid!4v1756716487143!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/HF3GBBnojYwe4JEs8",
          "highlights": [
            "Kompleks batu dolmen",
            "Peninggalan zaman megalitikum",
            "Formasi batu-batu purba",
            "Suasana alam pedesaan"
          ]
        }
      ]
    },

    {
      "id": "kalimantan-tengah",
      "name": "Kalimantan Tengah",
      "locations": [
        {
          "id": "museum-balanga",
          "name": "Museum Balanga",
          "type": "Museum Budaya",
          "description": "Museum Provinsi Kalimantan Tengah yang menampilkan berbagai koleksi etnografi mengenai kebudayaan Suku Dayak, seperti peralatan upacara, senjata tradisional, dan miniatur rumah adat.",
          "address": "Jl. Tjilik Riwut Km 2,5, Palangka, Kec. Jekan Raya, Kota Palangka Raya, Kalimantan Tengah",
          "phone": "(0536) 3221912",
          "openHours": "Selasa-Minggu: 08.00-14.00 WIB",
          "rating": 4.6,
          "image": "https://mmc.kalteng.go.id/files/berita/27052018044245_0.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.89003543867!2d113.89963327398056!3d-2.19530213729321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dfcb3ca7698d903%3A0xe3c091ed3068a90!2sMuseum%20Balanga%20Kalimantan%20Tengah!5e0!3m2!1sid!2sid!4v1756717751984!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/ZAPVZsSFFTLNNiWF8",
          "highlights": [
            "Diorama Upacara Tiwah",
            "Senjata Sumpit & Mandau",
            "Koleksi Guci (Balanga)",
            "Miniatur Rumah Betang"
          ]
        },
        {
          "id": "istana-kuning-pangkalan-bun",
          "name": "Istana Kuning Pangkalan Bun",
          "type": "Istana / Museum",
          "description": "Istana peninggalan Kesultanan Kutaringin yang menjadi ikon sejarah di Kotawaringin Barat. Bangunan ini terbuat dari kayu ulin dan menyimpan benda-benda pusaka kerajaan.",
          "address": "Jl. Pangeran Antasari, Raja, Kec. Arut Sel., Kabupaten Kotawaringin Barat, Kalimantan Tengah",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-17.00 WIB",
          "rating": 4.5,
          "image": "https://mmc.kotawaringinbaratkab.go.id/assets/foto_berita/5b6ea4b346a80c6c9c1e213f8a5eaaf5.jpeg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.467354422276!2d111.62973787398448!3d-2.6760448387223494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e08ee428f0a4f53%3A0x30b0af3390d590d!2sIstana%20Kuning!5e0!3m2!1sid!2sid!4v1756725749510!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/yqXo4ovbeDC2tVTA7",
          "highlights": [
            "Arsitektur khas Kutaringin",
            "Peninggalan Kesultanan",
            "Kereta Kencana Kyai Selamet",
            "Taman dan pendopo istana"
          ]
        },
        {
          "id": "rumah-betang-pasir-panjang",
          "name": "Rumah Betang Pasir Panjang",
          "type": "Situs Budaya",
          "description": "Sebuah rumah betang (rumah panjang) tradisional Suku Dayak yang masih dihuni. Pengunjung dapat melihat langsung arsitektur unik dan kehidupan masyarakat adat.",
          "address": "Desa Pasir Panjang, Kecamatan Arut Selatan, Kabupaten Kotawaringin Barat, Kalimantan Tengah",
          "phone": "-",
          "openHours": "Dapat dikunjungi dengan izin tetua adat",
          "rating": 4.7,
          "image": "https://jadesta.kemenparekraf.go.id/imgpost/76102.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.3020356365914!2d111.65310327398488!3d-2.7264196388939608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e08ef53b2df2489%3A0x78e8f6642c34d4b8!2sRumah%20Adat%20Betang%2C%20Pasir%20Panjang!5e0!3m2!1sid!2sid!4v1756725842021!5m2!1sid!2sid",
          "penunjukUrl": "hhttps://maps.app.goo.gl/furtXtKCUwBLrJNV9",
          "highlights": [
            "Arsitektur rumah panjang",
            "Kehidupan asli Suku Dayak",
            "Ukiran dan patung tradisional",
            "Interaksi dengan masyarakat adat"
          ]
        },
        {
          "id": "tugu-soekarno-palangkaraya",
          "name": "Tugu Soekarno Palangkaraya",
          "type": "Monumen",
          "description": "Monumen yang dibangun untuk menandai peresmian Kota Palangka Raya oleh Presiden Soekarno pada tahun 1957. Tugu ini menjadi titik nol kilometer kota.",
          "address": "Jl. S. Parman, Langkai, Kec. Pahandut, Kota Palangka Raya, Kalimantan Tengah",
          "phone": "-",
          "openHours": "Dapat diakses setiap saat",
          "rating": 4.6,
          "image": "https://cdn.rri.co.id/berita/Palangkaraya/o/1724644099913-WhatsApp_Image_2024-08-26_at_10.49.55/3o3jj8yx1qkqsif.jpeg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.8641257641602!2d113.91871187398061!3d-2.204994037318281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dfcb25b26ac18e1%3A0x2fd624aa68047115!2sTugu%20Soekarno!5e0!3m2!1sid!2sid!4v1756726026560!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/TkxQ3X77DxU21tZF8",
          "highlights": [
            "Monumen peresmian kota",
            "Titik Nol Kilometer Palangka Raya",
            "Relief sejarah pembangunan",
            "Taman di tepi Sungai Kahayan"
          ]
        },
        {
          "id": "museum-kayu-sampit",
          "name": "Museum Kayu Sampit",
          "type": "Museum Tematik",
          "description": "Museum yang didedikasikan untuk sejarah dan kekayaan hasil hutan di Kalimantan Tengah, khususnya kayu. Menampilkan berbagai jenis kayu, peralatan penebangan, dan produk olahan kayu.",
          "address": "Jl. S. Parman, Mentawa Baru Hulu, Kec. Mentawa Baru Ketapan, Kabupaten Kotawaringin Timur, Kalimantan Tengah",
          "phone": "(0531) 31447",
          "openHours": "Senin-Jumat: 08.00-15.00 WIB",
          "rating": 4.4,
          "image": "https://www.matakalteng.com/assets/storage/2023/11/08/2022-10-25_9478_750x500.jpg?v=1699408682",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.903860863776!2d112.95639507398327!3d-2.5382388382740175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de2bfb5c41bf075%3A0x43fc63b8542dd31a!2sMuseum%20Kayu%20Sampit!5e0!3m2!1sid!2sid!4v1756726203157!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/VpQS5WkRxznAFXda9",
          "highlights": [
            "Koleksi jenis-jenis kayu",
            "Sejarah industri perkayuan",
            "Peralatan tradisional & modern",
            "Diorama ekosistem hutan"
          ]
        }
      ]
    },


    {
      "id": "kalimantan-barat",
      "name": "Kalimantan Barat",
      "locations": [
        {
          "id": "museum-negeri-kalbar",
          "name": "Museum Negeri Provinsi Kalimantan Barat",
          "type": "Museum Umum",
          "description": "Museum ini menampilkan tiga kebudayaan besar di Kalimantan Barat, yaitu Melayu, Dayak, dan Tionghoa. Koleksinya mencakup artefak arkeologi, etnografi, dan sejarah.",
          "address": "Jl. Jenderal Ahmad Yani, Parit Tokaya, Kec. Pontianak Sel., Kota Pontianak, Kalimantan Barat",
          "phone": "(0561) 736341",
          "openHours": "Selasa-Minggu: 08.00-15.00 WIB",
          "rating": 4.6,
          "image": "https://zjglidcehtsqqqhbdxyp.supabase.co/storage/v1/object/public/atourin/images/destination/pontianak/museum-kalimantan-barat-profile1640519651.jpeg?x-image-process=image/resize,p_100,limit_1/imageslim",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8168984160407!2d109.34023237396745!3d-0.04837263552382142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d59bcaaa2a73b%3A0x1036720635a69b5f!2sMuseum%20Kalimantan%20Barat!5e0!3m2!1sid!2sid!4v1756717023978!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/q25tzF4towHMKREA6",
          "highlights": [
            "Koleksi Meriam Kuno",
            "Artefak Kerajaan Islam",
            "Busana Adat Dayak & Melayu",
            "Keramik dari Dinasti Tang & Ming"
          ]
        },
        {
          "id": "tugu-khatulistiwa",
          "name": "Tugu Khatulistiwa (Equator Monument)",
          "type": "Monumen",
          "description": "Sebuah monumen yang menandai titik lintasan garis khatulistiwa di Kota Pontianak. Menjadi lokasi acara kulminasi matahari di mana bayangan benda akan menghilang.",
          "address": "Jl. Khatulistiwa, Batu Layang, Kec. Pontianak Utara, Kota Pontianak, Kalimantan Barat",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-17.00 WIB",
          "rating": 4.5,
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkoJ21h1Jgkd-3mlDSnkIUSIVI6Aovaz5E4g&s",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8183197295384!2d109.31963027396735!3d0.0010048644282262408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31e2a75b7f18d41d%3A0x959992e0a47ea028!2sTaman%20Khatulistiwa!5e0!3m2!1sid!2sid!4v1756717121722!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/kqdU5kbdsMLGGLfQ9",
          "highlights": [
            "Titik Nol Garis Khatulistiwa",
            "Fenomena hari tanpa bayangan",
            "Sertifikat penanda kunjungan",
            "Duplikat tugu asli di dalam"
          ]
        },
        {
          "id": "keraton-kadriah-pontianak",
          "name": "Keraton Kadriah Pontianak",
          "type": "Istana / Museum",
          "description": "Istana Kesultanan Pontianak yang didirikan oleh Sultan Syarif Abdurrahman Alkadrie. Di dalamnya tersimpan benda pusaka seperti singgasana, cermin seribu, dan meriam.",
          "address": "Jl. Tj. Raya 1, Dalam Bugis, Kec. Pontianak Tim., Kota Pontianak, Kalimantan Barat",
          "phone": "0813-4533-3589",
          "openHours": "Setiap Hari: 09.00-17.00 WIB",
          "rating": 4.6,
          "image": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Keraton_Kadariah_01.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.817816871315!2d109.3472761739675!3d-0.02878383554236823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d58492226606b%3A0x30190f6309dc377c!2sIstana%20Kadriah%20Kesultanan%20Pontianak!5e0!3m2!1sid!2sid!4v1756717252258!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/h3HwF2Znm4qtdqUt8",
          "highlights": [
            "Singgasana Sultan",
            "Peninggalan Kesultanan Pontianak",
            "Al-Qur'an tulisan tangan",
            "Arsitektur khas Melayu"
          ]
        },
        {
          "id": "rumah-radakng",
          "name": "Rumah Radakng",
          "type": "Pusat Kebudayaan",
          "description": "Merupakan replika rumah adat Suku Dayak Kanayatn yang menjadi rumah adat terpanjang di Indonesia. Berfungsi sebagai pusat kegiatan seni dan budaya Dayak.",
          "address": "Jl. Sutan Syahrir, Sungai Bangkong, Kec. Pontianak Kota, Kota Pontianak, Kalimantan Barat",
          "phone": "-",
          "openHours": "Selasa-Minggu: 09.00-16.00 WIB",
          "rating": 4.5,
          "image": "https://pontinesia.com/radakng/2.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.816987193546!2d109.31711357396753!3d-0.046838235525251674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d590e266b7c1b%3A0x2a54516a1a09626b!2sRumah%20Radakng%2C%20Pontianak%20Kalimantan%20Barat!5e0!3m2!1sid!2sid!4v1756717407350!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/U2YWa2oGFFTT4ZWBA",
          "highlights": [
            "Replika rumah adat Dayak",
            "Ukiran khas Dayak",
            "Pusat acara Gawai Dayak",
            "Bangunan kayu yang megah"
          ]
        },
        {
          "id": "istana-amperta-sanggau",
          "name": "Keraton Surya Negara Sanggau",
          "type": "Istana / Museum",
          "description": "Istana Kerajaan Sanggau yang masih terawat dengan baik. Di dalamnya terdapat museum yang menyimpan benda-benda pusaka kerajaan, termasuk Taware (Meriam Nek Sipat).",
          "address": "Jl. Pangeran Mas, Tj. Sekayam, Kec. Kapuas, Kabupaten Sanggau, Kalimantan Barat",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-17.00 WIB",
          "rating": 4.7,
          "image": "https://upload.wikimedia.org/wikipedia/commons/0/06/Istana_Surya_Negara_Sanggau_01.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.809251077847!2d110.6025475239669!3d0.1221651142936818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31fd8e72ad05e8ad%3A0x52622e85dbd2a72e!2sIstana%20Surya%20Negara%20Kesultanan%20Sanggau!5e0!3m2!1sid!2sid!4v1756717512869!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/ECqFYEu3wwzzHNja8",
          "highlights": [
            "Meriam Nek Sipat",
            "Peninggalan Kerajaan Sanggau",
            "Arsitektur rumah panggung",
            "Koleksi guci dan keramik"
          ]
        }
      ]
    },

    {
      "id": "kalimantan-selatan",
      "name": "Kalimantan Selatan",
      "locations": [
        {
          "id": "museum-wasaka",
          "name": "Museum Perjuangan Rakyat Waja Sampai Ka Puting (Wasaka)",
          "type": "Museum Sejarah",
          "description": "Berlokasi di sebuah rumah panggung Banjar, museum ini didedikasikan untuk perjuangan rakyat Kalimantan Selatan melawan penjajah. Koleksinya mencakup senjata, pakaian, dan dokumen bersejarah.",
          "address": "Jl. Sultan Adam, Sungai Jingah, Kec. Banjarmasin Utara, Kota Banjarmasin, Kalimantan Selatan",
          "phone": "(0511) 3305423",
          "openHours": "Selasa-Minggu: 08.30-14.30 WITA",
          "rating": 4.6,
          "image": "https://media-cdn.tripadvisor.com/media/photo-s/0e/2d/70/69/foto-di-depan-museum.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.1867390656043!2d114.60650507399015!3d-3.3039220411581103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de4238fbe7d6c91%3A0x55ec0578a268a5e1!2sMuseum%20WASAKA!5e0!3m2!1sid!2sid!4v1756726579231!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/c558tdVTe9sUw8846",
          "highlights": [
            "Senjata-senjata perjuangan",
            "Naskah proklamasi Gubernur ALRI",
            "Bangunan rumah adat Banjar",
            "Diorama pertempuran"
          ]
        },
        {
          "id": "museum-lambung-mangkurat",
          "name": "Museum Lambung Mangkurat",
          "type": "Museum Umum",
          "description": "Museum negeri terbesar di Kalimantan Selatan. Menyimpan koleksi lengkap mulai dari peninggalan Kesultanan Banjar, artefak Hindu-Buddha, hingga etnografi suku-suku di Kalsel.",
          "address": "Jl. Jenderal Ahmad Yani No.36, Komet, Kec. Banjarbaru Utara, Kota Banjar Baru, Kalimantan Selatan",
          "phone": "(0511) 4772453",
          "openHours": "Selasa-Minggu: 08.30-14.00 WITA",
          "rating": 4.5,
          "image": "https://www.celebes.co/borneo/wp-content/uploads/2022/09/Museum-Sejarah-Lambung-Mangkurat.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.619821035611!2d114.83558357399154!3d-3.4422893417815956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de6810dd27cdb3d%3A0xf5c19d6b3bc3d1c0!2sMuseum%20Lambung%20Mangkurat!5e0!3m2!1sid!2sid!4v1756726707128!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/hTiwRdRcWWxYwsbW7",
          "highlights": [
            "Replika Perahu Tambangan",
            "Peninggalan Kesultanan Banjar",
            "Koleksi Arca Candi Agung",
            "Etnografi budaya Banjar"
          ]
        },
        {
          "id": "rumah-adat-bubungan-tinggi",
          "name": "Rumah Adat Banjar Bubungan Tinggi",
          "type": "Situs Budaya",
          "description": "Rumah tradisional asli Suku Banjar yang menjadi model dasar arsitektur rumah Banjar lainnya. Bangunan ini memiliki atap yang menjulang tinggi dan ukiran yang khas.",
          "address": "Jl. Teluk Selong Ulu, Teluk Selong, Kec. Martapura Bar., Kabupaten Banjar, Kalimantan Selatan",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-17.00 WITA",
          "rating": 4.7,
          "image": "https://upload.wikimedia.org/wikipedia/id/7/76/Fasade_Bubungan_Tinggi_Teluk_Selong_Martapura.JPG",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.602876476266!2d115.0930939739841!3d-2.634031538582356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de51166f16ae643%3A0x1c11febdfc73de8f!2sRumah%20Adat%20Banjar%20Bubungan%20Tinggi!5e0!3m2!1sid!2sid!4v1756726846209!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/xSibRBCFJtNVSENP8",
          "highlights": [
            "Arsitektur asli Banjar",
            "Ukiran Naga Balimbur",
            "Konstruksi kayu ulin",
            "Warisan budaya takbenda"
          ]
        },
        {
          "id": "masjid-sultan-suriansyah",
          "name": "Masjid Sultan Suriansyah",
          "type": "Situs Religi",
          "description": "Masjid tertua di Kalimantan Selatan yang dibangun pada masa pemerintahan Sultan Suriansyah, raja Banjar pertama yang memeluk Islam. Arsitekturnya menampilkan atap tumpang tiga yang unik.",
          "address": "Jl. Kuin Utara, Kuin Utara, Kec. Banjarmasin Utara, Kota Banjarmasin, Kalimantan Selatan",
          "phone": "-",
          "openHours": "Dapat diakses setiap saat untuk beribadah",
          "rating": 4.8,
          "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEirWf4G3x1-RSpGot9Zo1vtuuJ8mN5Qa00Js6zyFqJzu-4dc9DXPwHzJPHY8D5coZOEU4dyCmmZmvSa-ka4XDPW3sSbXLI4YWohEtfN9UdqwKEwjUbYx-Dccw0EPRC9QO9l625FIfz_H50/w0/Masjid_Sultan_Suriansyah-720x540.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.2249984042123!2d114.57610439011825!3d-3.2943750229611326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de423aa7513ac87%3A0xeaf1e9e019cee4f9!2sMasjid%20Bersejarah%20Sultan%20Suriansyah!5e0!3m2!1sid!2sid!4v1756727026745!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/2fMuoxWUAAEejmrR7",
          "highlights": [
            "Masjid tertua di Kalsel",
            "Mihrab dengan ukiran kaligrafi",
            "Arsitektur atap tumpang",
            "Makam Sultan Suriansyah"
          ]
        },
        {
          "id": "candi-agung-amuntai",
          "name": "Candi Agung Amuntai",
          "type": "Situs Candi",
          "description": "Situs candi peninggalan Kerajaan Negara Dipa dari zaman Hindu. Diyakini sebagai cikal bakal dari Kesultanan Banjar. Terbuat dari susunan batu bata merah.",
          "address": "Sungai Malang, Amuntai Tengah, Kabupaten Hulu Sungai Utara, Kalimantan Selatan",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-18.00 WITA",
          "rating": 4.4,
          "image": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Candi_Agung_%285%29.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.278212495424!2d115.24570797398215!3d-2.413800837895888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de538f003c741d5%3A0x57e7538df9488573!2sCandi%20Agung!5e0!3m2!1sid!2sid!4v1756727145788!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/yKfTsrLdtZVQuv4ZA",
          "highlights": [
            "Peninggalan Kerajaan Negara Dipa",
            "Pertapaan Pangeran Suryanata",
            "Tiang dari kayu ulin",
            "Kolam pemandian kuno"
          ]
        }
      ]
    },

    {
      "id": "kalimantan-timur",
      "name": "Kalimantan Timur",
      "locations": [
        {
          "id": "museum-mulawarman",
          "name": "Museum Mulawarman",
          "type": "Museum Sejarah",
          "description": "Berlokasi di bekas istana Kesultanan Kutai Kartanegara, museum ini menyimpan koleksi benda-benda peninggalan kerajaan, seperti singgasana, pakaian kebesaran, dan keramik kuno.",
          "address": "Jl. Diponegoro, Panji, Kec. Tenggarong, Kabupaten Kutai Kartanegara, Kalimantan Timur",
          "phone": "(0541) 661069",
          "openHours": "Selasa-Minggu: 08.00-16.00 WITA",
          "rating": 4.7,
          "image": "https://indonesiakaya.com/wp-content/uploads/2020/10/museum_mulawarman_1200.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7145546354463!2d116.98821447396907!3d-0.41322723529299604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbefd754ca7a261%3A0xcba79091a2b622bd!2sMuseum%20Mulawarman!5e0!3m2!1sid!2sid!4v1756727538276!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/LAJQA7GJq5FsYoEU6",
          "highlights": [
            "Singgasana Sultan Kutai",
            "Kalung Uncal (peninggalan India)",
            "Makam Raja-Raja Kutai",
            "Koleksi keramik Tiongkok"
          ]
        },
        {
          "id": "desa-budaya-pampang",
          "name": "Desa Budaya Pampang",
          "type": "Desa Wisata Budaya",
          "description": "Desa adat Suku Dayak Kenyah yang menampilkan kehidupan tradisional, tarian, dan rumah adat Lamin. Pengunjung dapat berinteraksi langsung dan melihat pertunjukan budaya.",
          "address": "Desa Pampang, Sungai Siring, Kec. Samarinda Utara, Kota Samarinda, Kalimantan Timur",
          "phone": "0812-5331-579",
          "openHours": "Khusus hari Minggu: 14.00-16.00 WITA (untuk pertunjukan)",
          "rating": 4.5,
          "image": "https://kaltim.jadesta.com/imgpost/70224.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7317331925856!2d117.22751677396911!3d-0.3774753353060013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df5d9b0f0b2b7ad%3A0xf30e84b529acc826!2sWisata%20Budaya%20Pampang!5e0!3m2!1sid!2sid!4v1756727710160!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/YG6K1zt15cQUSe5a8",
          "highlights": [
            "Rumah Adat Lamin",
            "Pertunjukan Tari Dayak Kenyah",
            "Suku Dayak bertelinga panjang",
            "Kerajinan manik-manik"
          ]
        },
        {
          "id": "museum-kayu-tuah-himba",
          "name": "Museum Kayu Tuah Himba",
          "type": "Museum Tematik",
          "description": "Museum yang menampilkan kekayaan sumber daya alam kayu di Kutai Kartanegara. Koleksi utamanya adalah buaya muara yang diawetkan dan berbagai jenis kayu khas Kalimantan.",
          "address": "Jl. Pahlawan, Timbau, Kec. Tenggarong, Kabupaten Kutai Kartanegara, Kalimantan Timur",
          "phone": "(0541) 661069",
          "openHours": "Setiap Hari: 08.00-17.00 WITA",
          "rating": 4.4,
          "image": "https://upload.wikimedia.org/wikipedia/commons/2/23/Museum_Kayu_Tuah_Himba.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.718157465973!2d116.96875897396917!3d-0.4059900352954615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df6655027b3b263%3A0x3425cd2e96bc3b7f!2sMuseum%20Kayu!5e0!3m2!1sid!2sid!4v1756727828142!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/tsYoGsw2xeB1QTJJ6",
          "highlights": [
            "Buaya Muara diawetkan",
            "Koleksi beragam jenis kayu",
            "Sejarah perkayuan Kaltim",
            "Lokasi di sebelah Museum Mulawarman"
          ]
        },
        {
          "id": "masjid-agung-samarinda",
          "name": "Masjid Islamic Center Samarinda",
          "type": "Situs Religi",
          "description": "Salah satu masjid termegah dan terbesar kedua di Asia Tenggara setelah Masjid Istiqlal. Memiliki arsitektur yang menawan dengan kubah besar dan menara tinggi.",
          "address": "Jl. Slamet Riyadi No.1, Karang Asam Ulu, Kec. Sungai Kunjang, Kota Samarinda, Kalimantan Timur",
          "phone": "(0541) 274205",
          "openHours": "Dapat diakses setiap saat untuk beribadah",
          "rating": 4.9,
          "image": "https://awsimages.detik.net.id/community/media/visual/2022/12/02/masjid-islamic-center-samarinda-3_169.jpeg?w=1200",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6649953661536!2d117.1175582739696!3d-0.5023066352696874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df67f25f5807583%3A0x7666aadb9294c007!2sMasjid%20Baitul%20Muttaqien%20-%20Islamic%20Center%20Kaltim!5e0!3m2!1sid!2sid!4v1756727934586!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/pwbE7ZaausEWvbao6",
          "highlights": [
            "Arsitektur masjid megah",
            "Menara Asmaul Husna",
            "Pemandangan Sungai Mahakam",
            "Beduk raksasa"
          ]
        },
        {
          "id": "situs-gua-prasejarah",
          "name": "Situs Gua Prasejarah Sangkulirang-Mangkalihat",
          "type": "Situs Arkeologi",
          "description": "Kawasan karst yang memiliki ribuan gambar cadas prasejarah berusia puluhan ribu tahun. Situs ini menjadi bukti kehidupan manusia purba di Kalimantan.",
          "address": "Kawasan Karst Sangkulirang-Mangkalihat, Kabupaten Kutai Timur dan Berau, Kalimantan Timur",
          "phone": "-",
          "openHours": "Memerlukan izin khusus dan pemandu",
          "rating": 4.8,
          "image": "https://cdngnfi2.sgp1.cdn.digitaloceanspaces.com/gnfi/uploads/images/2020/10/0420222020-Bagian-Lain-GUa.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.5980019078647!2d117.2786662739702!3d-0.6021275352589791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df42fa4ec1a0d9b%3A0x10d121192bf7f366!2sSitus%20Goa%20Muara%20Ujung!5e0!3m2!1sid!2sid!4v1756728034368!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/8LvMXUG2KdcqauNTA",
          "highlights": [
            "Gambar cadas prasejarah",
            "Pemandangan karst yang indah",
            "Bukti kehidupan purba",
            "Warisan Dunia UNESCO (nominasi)"
          ]
        }
      ]
    },

    {
      "id": "kalimantan-utara",
      "name": "Kalimantan Utara",
      "locations": [
        {
          "id": "museum-kesultanan-bulungan",
          "name": "Museum Kesultanan Bulungan",
          "type": "Museum Sejarah",
          "description": "Museum ini menempati bangunan replika Istana Kesultanan Bulungan yang terbakar. Menyimpan sisa-sisa koleksi benda pusaka kerajaan, foto bersejarah, dan artefak budaya Bulungan.",
          "address": "Jl. Kasimuddin, Tanjung Palas Tengah, Kec. Tanjung Palas, Kabupaten Bulungan, Kalimantan Utara",
          "phone": "(0552) 2028686",
          "openHours": "Setiap Hari: 08.00-16.00 WITA",
          "rating": 4.5,
          "image": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Museum_Kesultanan_Bulungan.JPG",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.945760780617!2d117.35459797396199!3d2.8319387550227972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3213d1fccb45bc41%3A0xe17af808b6b65870!2sMuseum%20Kesultanan%20Bulungan%201!5e0!3m2!1sid!2sid!4v1756728389953!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/ERmXAeDrFm1aD1dM6",
          "highlights": [
            "Singgasana Sultan",
            "Peninggalan Kesultanan Bulungan",
            "Meriam kuno",
            "Foto dan dokumen sejarah"
          ]
        },
        {
          "id": "rumah-bundar-tarakan",
          "name": "Museum Rumah Bundar Tarakan",
          "type": "Museum Sejarah Perang",
          "description": "Bangunan bersejarah peninggalan Belanda yang menjadi saksi bisu Perang Dunia II di Tarakan. Kini difungsikan sebagai museum yang menyimpan foto dan memorabilia perang.",
          "address": "Jl. Danau Jempang, Pamusian, Kec. Tarakan Tengah, Kota Tarakan, Kalimantan Utara",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-17.00 WITA",
          "rating": 4.6,
          "image": "https://asset.kompas.com/crops/Mjm_4Rjaw-rgrYkr4DH7kVo6qY4=/0x0:714x476/1200x800/data/photo/2018/11/26/1522939075.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.1567172921673!2d117.59216337396238!3d3.3113942521359823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32138a87a351049d%3A0x74d045ea0744ba72!2sRoemah%20Boendar%20Kota%20Tarakan!5e0!3m2!1sid!2sid!4v1756728500489!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/NWHyq3QG3fyD6QXP7",
          "highlights": [
            "Saksi sejarah PD II",
            "Arsitektur unik",
            "Koleksi foto perang",
            "Peninggalan tentara sekutu & Jepang"
          ]
        },
        {
          "id": "baloy-adat-tidung",
          "name": "Baloy Adat Tidung (Rumah Adat Tidung)",
          "type": "Situs Budaya",
          "description": "Rumah adat megah Suku Tidung yang juga berfungsi sebagai pusat kebudayaan dan museum mini. Menampilkan arsitektur khas dan koleksi benda-benda adat Tidung.",
          "address": "Jl. Aki Balak, Karang Harapan, Kec. Tarakan Bar., Kota Tarakan, Kalimantan Utara",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-18.00 WITA",
          "rating": 4.7,
          "image": "https://asset.kompas.com/crops/yKzbIg7wMHP16_q-pOv2gdcZEeQ=/0x0:1000x667/750x500/data/photo/2019/10/28/5db6dd40eae6c.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63730.50167234093!2d117.55353818775579!3d3.3114844402990187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32138a6e2b143b63%3A0x1a7058f321818ba9!2sBaloy%20Adat%20Tidung!5e0!3m2!1sid!2sid!4v1756728613288!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/gSgHfApHjX1LhB1a8",
          "highlights": [
            "Arsitektur Suku Tidung",
            "Koleksi benda adat",
            "Pusat kesenian Tidung",
            "Ukiran kayu yang khas"
          ]
        },
        {
          "id": "museum-perminyakan-tarakan",
          "name": "Situs Sejarah Perminyakan Tarakan",
          "type": "Situs Sejarah Industri",
          "description": "Area bersejarah yang menjadi saksi pentingnya Tarakan sebagai kota minyak. Terdapat tugu peringatan dan sisa-sisa peralatan tambang minyak peninggalan Belanda.",
          "address": "Pamusian, Kecamatan Tarakan Tengah, Kota Tarakan, Kalimantan Utara",
          "phone": "-",
          "openHours": "Dapat diakses setiap saat",
          "rating": 4.4,
          "image": "https://benuanta.co.id/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-08-at-07.53.52-scaled.jpeg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15932.71625195305!2d117.60334713120734!3d3.305834168848728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32138a3ff6aec401%3A0x8799ef9f1f905ee9!2sMuseum%20Sejarah%20Tarakan!5e0!3m2!1sid!2sid!4v1756728733243!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/17PFFkpLDg3KWf4w8",
          "highlights": [
            "Sejarah industri minyak",
            "Tugu peringatan pertempuran",
            "Peralatan tambang kuno",
            "Lokasi strategis PD II"
          ]
        },
        {
          "id": "desa-wisata-setulang",
          "name": "Desa Wisata Setulang (Rumah Adat Dayak Kenyah)",
          "type": "Desa Budaya",
          "description": "Desa adat yang melestarikan budaya Suku Dayak Kenyah. Pengunjung dapat melihat langsung Rumah Panjang (Lamin) dan kehidupan tradisional masyarakat Dayak.",
          "address": "Setulang, Kec. Malinau Selatan Hilir, Kabupaten Malinau, Kalimantan Utara",
          "phone": "-",
          "openHours": "Dapat diakses setiap saat (dianjurkan siang hari)",
          "rating": 4.8,
          "image": "https://kaltara.jadesta.com/imgpost/88449_medium.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1991.2804014519916!2d116.49535314442751!3d3.4563758999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3216d6d967788b4d%3A0xb7e371139443db59!2sDesa%20Wisata%20Setulang!5e0!3m2!1sid!2sid!4v1756728872206!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/8CoVj365fPjQYJqV7",
          "highlights": [
            "Rumah Panjang (Lamin Adat)",
            "Kehidupan Suku Dayak Kenyah",
            "Hutan desa (Tane' Olen)",
            "Kerajinan tangan tradisional"
          ]
        }
      ]
    },

    {
      "id": "sulawesi-utara",
      "name": "Sulawesi Utara",
      "locations": [
        {
          "id": "museum-negeri-sulawesi-utara",
          "name": "Museum Negeri Provinsi Sulawesi Utara",
          "type": "Museum Umum",
          "description": "Museum utama di Manado yang menampilkan kekayaan sejarah dan budaya Sulawesi Utara, mulai dari koleksi arkeologi, etnografi, naskah kuno, hingga peninggalan era perang.",
          "address": "Jl. W.R. Supratman No.72, Lawangirung, Kec. Wenang, Kota Manado, Sulawesi Utara",
          "phone": "(0431) 851206",
          "openHours": "Senin-Jumat: 08.00-16.00 WITA",
          "rating": 4.5,
          "image": "https://www.seputarsulut.com/wp-content/uploads/museum_provinsi_sulawesi_utara.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4724075177787!2d124.84206007396283!3d1.4882700611173887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3287753f5d72d9e1%3A0xe39fdffb28a81e59!2sUPTD%20Museum%20Negeri%20Propinsi%20Sulawesi%20Utara!5e0!3m2!1sid!2sid!4v1756733372831!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/ZATvVEgNHJpDeGmSA",
          "highlights": [
            "Sejarah Minahasa",
            "Koleksi busana adat",
            "Artefak prasejarah",
            "Peninggalan Perang Dunia II"
          ]
        },
        {
          "id": "situs-waruga-sawangan",
          "name": "Taman Purbakala Waruga Sawangan",
          "type": "Situs Arkeologi",
          "description": "Kompleks pemakaman kuno Suku Minahasa yang terdiri dari 'waruga', yaitu kubur batu berbentuk kotak dengan penutup atap. Situs ini memberikan wawasan unik tentang tradisi leluhur Minahasa.",
          "address": "Jl. Waruga, Sawangan, Kec. Airmadidi, Kabupaten Minahasa Utara, Sulawesi Utara",
          "phone": "0852-5688-8058",
          "openHours": "Setiap Hari: 08.00-18.00 WITA",
          "rating": 4.6,
          "image": "https://ik.imagekit.io/goodid/gnfi/uploads/articles/large-waruga-faf6017a98c40548e60c17b65143e982.jpg?tr=w-768,h-576,fo-center",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6398862247597!2d124.96100567396321!3d1.3925936614390657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32870e6c50a3ad4d%3A0x28c56e5abaa48d75!2sTaman%20Purbakala%20Waruga!5e0!3m2!1sid!2sid!4v1756733797983!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/FAcgiPhSwUQYnPaWA",
          "highlights": [
            "Kompleks 144 waruga kuno",
            "Ukiran relief di waruga",
            "Tradisi pemakaman Minahasa",
            "Museum kecil di lokasi"
          ]
        },
        {
          "id": "monumen-yesus-memberkati",
          "name": "Monumen Yesus Memberkati",
          "type": "Monumen Religi",
          "description": "Salah satu patung Yesus tertinggi di Asia, menjadi ikon Kota Manado. Terletak di kawasan perumahan Citraland, monumen ini melambangkan Manado sebagai kota yang religius dan toleran.",
          "address": "Winangun Satu, Kec. Malalayang, Kota Manado, Sulawesi Utara",
          "phone": "-",
          "openHours": "Dapat diakses setiap saat",
          "rating": 4.7,
          "image": "https://indonesiakaya.com/wp-content/uploads/2020/10/HP-PI-04-THUMBNAIL-YESUS.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5618013239796!2d124.84507107396286!3d1.4379937612882816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32877358a15585bb%3A0x9033701afd5bccf6!2sMonumen%20Yesus%20Memberkati!5e0!3m2!1sid!2sid!4v1756733969307!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/J5R2x3Hy4j8kXpjB9",
          "highlights": [
            "Ikon Kota Manado",
            "Salah satu patung Yesus tertinggi di Asia",
            "Pemandangan kota Manado",
            "Simbol kerukunan beragama"
          ]
        },
        {
          "id": "museum-perjuangan-rakyat-sulut",
          "name": "Museum Perjuangan Rakyat Sulut",
          "type": "Museum Sejarah Militer",
          "description": "Museum yang didedikasikan untuk sejarah perjuangan Permesta di Sulawesi Utara. Menyimpan koleksi foto, dokumen, senjata, dan diorama yang berkaitan dengan peristiwa tersebut.",
          "address": "Jl. Sam Ratulangi, Wenang Utara, Kec. Wenang, Kota Manado, Sulawesi Utara",
          "phone": "-",
          "openHours": "Jam kunjung terbatas, biasanya buka di hari kerja",
          "rating": 4.4,
          "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhy6gqBxi-hTQ6VTl-qNnonQxRYkaTu6-ufJjPgVsu1h5wT3t_dDCXM3OQ552Cbi4M2ZqeyvnYXflSwoRhwT1Ex_qRQkLTzxw7jsDo552aYkEubUbRP0hVyz-Wu85qlzXp_ZkQwG3Tpi98/s5000/%255BUNSET%255D",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.468827201473!2d124.83660427396286!3d1.4902483611105806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3287756a68effa9f%3A0xc387a742a490dff9!2sMuseum%20Perjuangan%20Rakyat%20Sulut!5e0!3m2!1sid!2sid!4v1756734327105!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/SQEpbGCLwkD6LtMb9",
          "highlights": [
            "Sejarah perjuangan Permesta",
            "Koleksi senjata dan seragam",
            "Foto-foto dokumentasi",
            "Diorama peristiwa sejarah"
          ]
        },
        {
          "id": "rumah-adat-woloan",
          "name": "Desa Wisata Woloan (Rumah Adat Minahasa)",
          "type": "Desa Budaya",
          "description": "Pusat pembuatan rumah panggung tradisional Minahasa yang dapat dibongkar-pasang. Pengunjung dapat melihat proses pembuatan rumah kayu dan arsitektur khas Minahasa.",
          "address": "Woloan, Kecamatan Tomohon Barat, Kota Tomohon, Sulawesi Utara",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-17.00 WITA",
          "rating": 4.5,
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG1BQvI38-X3iHHKlG2eN5ScRm6zUufk3q3Q&s",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d255289.14893071333!2d124.6564103!3d1.234033!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32876c64db3c7c0d%3A0xadc573b5d87dfa89!2sAmphitheater%20Woloan!5e0!3m2!1sid!2sid!4v1756734662989!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/UJYmTLQTff3JQQ8F9",
          "highlights": [
            "Pusat pembuatan rumah panggung",
            "Arsitektur khas Minahasa",
            "Sistem bongkar-pasang (knock down)",
            "Kerajinan kayu lokal"
          ]
        }
      ]
    },

    {
      "id": "sulawesi-tengah",
      "name": "Sulawesi Tengah",
      "locations": [
        {
          "id": "museum-negeri-sulteng",
          "name": "Museum Negeri Provinsi Sulawesi Tengah",
          "type": "Museum Umum",
          "description": "Museum ini merupakan pusat koleksi dan informasi mengenai sejarah, budaya, dan alam Sulawesi Tengah. Menampilkan artefak dari zaman prasejarah, masa kerajaan, hingga era modern.",
          "address": "Jl. Kemiri No.23, Kamonji, Kec. Palu Bar., Kota Palu, Sulawesi Tengah",
          "phone": "(0451) 422396",
          "openHours": "Selasa-Minggu: 08.00-15.00 WITA",
          "rating": 4.6,
          "image": "https://indonesiakaya.com/wp-content/uploads/2020/10/Museum_Sulawesi_Tengah_berada_di_Jalan_Kemiri_No_23_Kelurahan_Kamonji_Kecamatan_Palu_Barat.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.323503943353!2d119.85129857397175!3d-0.9023761353249576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d8bed95ecd7a6ff%3A0x131767712f28bb94!2sMuseum%20Negeri%20Provinsi%20Sulawesi%20Tengah%20-%20Palu!5e0!3m2!1sid!2sid!4v1756735268636!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/FwJXSWXAjjDzj5S67",
          "highlights": [
            "Koleksi pakaian adat Kaili",
            "Arca megalitikum",
            "Sejarah Kerajaan di Sulteng",
            "Diorama kehidupan tradisional"
          ]
        },
        {
          "id": "situs-megalitikum-lembah-bada",
          "name": "Situs Megalitik Lembah Bada",
          "type": "Situs Arkeologi",
          "description": "Terletak di Taman Nasional Lore Lindu, situs ini terkenal dengan patung-patung batu megalitikum misterius yang usianya mencapai ribuan tahun. Patung Palindo menjadi yang paling ikonik.",
          "address": "Lembah Bada, Taman Nasional Lore Lindu, Kabupaten Poso, Sulawesi Tengah",
          "phone": "-",
          "openHours": "Dapat diakses setiap saat (memerlukan pemandu)",
          "rating": 4.8,
          "image": "https://asset.kompas.com/crops/Nz0NCUGEDJywJa0Sl7nCwDi2cmM=/134x0:843x473/1200x800/data/photo/2022/10/05/633d301a2b352.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1021064.8256978479!2d119.3951252316289!3d-1.4535467582215247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d8e79a96fc56f69%3A0x69dfb3fb9c4e98e9!2sSitus%20Megalitik%20Pokekea!5e0!3m2!1sid!2sid!4v1756735549995!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/k8Dw64JFMS4EjwzT7",
          "highlights": [
            "Patung Megalitik Palindo",
            "Kalamba (wadah batu besar)",
            "Pemandangan lembah yang indah",
            "Bagian dari Taman Nasional Lore Lindu"
          ]
        },
        {
          "id": "souraja-palu",
          "name": "Souraja (Rumah Adat Kaili)",
          "type": "Situs Budaya",
          "description": "Rumah adat atau 'Rumah Besar' peninggalan Kerajaan Palu. Souraja menjadi simbol kebesaran Suku Kaili dan pusat kegiatan adat. Arsitekturnya berbentuk rumah panggung yang khas.",
          "address": "Jl. Pangeran Hidayat, Lolu, Kec. Palu Tim., Kota Palu, Sulawesi Tengah",
          "phone": "-",
          "openHours": "Umumnya buka di jam kerja, kunjungan disarankan dengan konfirmasi",
          "rating": 4.5,
          "image": "https://superlive.id/storage/articles/90ffeb14-d650-4d60-b555-bb9222acf933.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15957.352381980398!2d119.83792755541995!3d-0.8889713000000042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d8bedb5d65c5c15%3A0x91d24fd243131495!2sSou%20Raja%20Cagar%20Budaya%20Banua%20Oge!5e0!3m2!1sid!2sid!4v1756735753967!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/ugSiijA6Lcg68GJR6",
          "highlights": [
            "Rumah adat Kerajaan Palu",
            "Arsitektur Suku Kaili",
            "Struktur rumah panggung",
            "Pusat kegiatan budaya"
          ]
        },
        {
          "id": "pusat-laut-donggala",
          "name": "Pusat Laut Donggala",
          "type": "Situs Alam & Budaya",
          "description": "Sumur raksasa berisi air laut asin yang jernih, meskipun berada di daratan. Tempat ini dipercaya memiliki nilai sejarah dan mitos bagi masyarakat setempat.",
          "address": "Desa Towale, Kecamatan Banawa Tengah, Kabupaten Donggala, Sulawesi Tengah",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-18.00 WITA",
          "rating": 4.4,
          "image": "https://asset.kompas.com/crops/hkTjoFgrJB_ZpdAGw5ra-dneuj4=/41x13:1321x867/1200x800/data/photo/2023/10/14/652a58297c11c.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.049088054193!2d119.6565976313404!3d-0.7096739323288365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d8bbb91647d205f%3A0x7dcd04772e66efbc!2sPusat%20Laut%20Donggala!5e0!3m2!1sid!2sid!4v1756735887588!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/ooxC2ut5o2pd6J7W8",
          "highlights": [
            "Sumur air laut raksasa",
            "Air yang jernih dan biru",
            "Legenda dan cerita rakyat",
            "Wisata alam yang unik"
          ]
        },
        {
          "id": "masjid-arkam-babu-rahman",
          "name": "Masjid Terapung Arkam Babu Rahman (Sisa Puing)",
          "type": "Situs Bersejarah & Religi",
          "description": "Sebelumnya merupakan masjid terapung yang indah, kini menjadi monumen pengingat dahsyatnya tsunami Palu 2018. Sisa-sisa bangunannya menjadi saksi bisu dan pusat refleksi.",
          "address": "Jl. Rono, Lere, Kec. Palu Bar., Kota Palu, Sulawesi Tengah",
          "phone": "-",
          "openHours": "Dapat diakses setiap saat",
          "rating": 4.7,
          "image": "https://awsimages.detik.net.id/community/media/visual/2023/08/18/menelusuri-jejak-bencana-alam-tsunami-likuifaksi-palu-3_169.jpeg?w=700&q=90",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.343387643404!2d119.85131247397165!3d-0.8840593353167063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d8bec4b4d4e52c9%3A0x1e79fd62f359dbf0!2sMasjid%20Apung%20Arqam%20Baburahman%20Palu!5e0!3m2!1sid!2sid!4v1756736052373!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/1w4cdxsCtLYXjEHo8",
          "highlights": [
            "Monumen Tsunami Palu 2018",
            "Sisa-sisa masjid terapung",
            "Simbol keteguhan dan harapan",
            "Lokasi di Teluk Palu"
          ]
        }
      ]
    },

    {
      "id": "sulawesi-barat",
      "name": "Sulawesi Barat",
      "locations": [
        {
          "id": "museum-mandar-mamuju",
          "name": "Museum Mandar Mamuju",
          "type": "Museum Budaya",
          "description": "Museum ini didedikasikan untuk melestarikan sejarah dan budaya Suku Mandar. Koleksinya meliputi pakaian adat, alat musik tradisional, naskah kuno (lontara), dan replika perahu Sandeq.",
          "address": "Jl. Cik Ditiro, Rimuku, Kec. Mamuju, Kabupaten Mamuju, Sulawesi Barat",
          "phone": "(0426) 21762",
          "openHours": "Senin-Jumat: 08.00-16.00 WITA",
          "rating": 4.6,
          "image": "https://i0.wp.com/inisulbar.com/wp-content/uploads/2020/11/IMG_20201118_113858_resize_85.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.478140732535!2d118.90630767398443!3d-2.672725138711168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d92d91cfa4bbddb%3A0xc562b302961dc845!2sKris%20Muda%20Mandar%20Tompora!5e0!3m2!1sid!2sid!4v1756779963527!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/RfUY2UV7MhGuvDuc8",
          "highlights": [
            "Sejarah Kerajaan Mandar",
            "Koleksi naskah Lontara",
            "Replika perahu Sandeq",
            "Pakaian adat dan pusaka"
          ]
        },
        {
          "id": "rumah-adat-mamuju",
          "name": "Rumah Adat Mamuju (Sao Langga)",
          "type": "Situs Budaya",
          "description": "Rumah panggung tradisional khas Mamuju yang menjadi replika istana Kerajaan Mamuju. Bangunan megah ini berfungsi sebagai pusat kegiatan adat dan budaya.",
          "address": "Jl. KS Tubun, Rimuku, Kec. Mamuju, Kabupaten Mamuju, Sulawesi Barat",
          "phone": "-",
          "openHours": "Dapat diakses setiap saat (area luar)",
          "rating": 4.5,
          "image": "https://sulbaronline.com/wp-content/uploads/2022/10/IMG_20221005_103153.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.4663016209256!2d118.88181877398445!3d-2.6763686387234276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d92d9b50c505297%3A0xd18cae426ce9f532!2sRumah%20Adat%20Mamuju!5e0!3m2!1sid!2sid!4v1756780108172!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/CCAoxFzuXKEDTuMVA",
          "highlights": [
            "Arsitektur khas Mamuju",
            "Simbol Kerajaan Mamuju",
            "Ukiran detail dan megah",
            "Pusat acara kebudayaan"
          ]
        },
        {
          "id": "kompleks-makam-raja-balanipa",
          "name": "Kompleks Makam Raja-Raja Balanipa",
          "type": "Situs Sejarah & Arkeologi",
          "description": "Situs pemakaman bersejarah para raja dari Kerajaan Balanipa, salah satu kerajaan terbesar di wilayah Mandar. Menampilkan nisan-nisan kuno dengan berbagai bentuk dan ukuran.",
          "address": "Desa Balanipa, Kecamatan Balanipa, Kabupaten Polewali Mandar, Sulawesi Barat",
          "phone": "-",
          "openHours": "Dapat diakses setiap saat",
          "rating": 4.7,
          "image": "https://awsimages.detik.net.id/community/media/visual/2025/02/15/makam-raja-balanipa-mandar-todzilaling_169.jpeg?w=620",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2038999.5921616626!2d116.74137439374998!3d-3.4894991999999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d94954c47cb84a1%3A0x5f6ffae053bacb04!2sKompleks%20Makam%20Tomatoa%20Cenra%20Balanipa!5e0!3m2!1sid!2sid!4v1756780513482!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/7BEnz8QoCXC65MQVA",
          "highlights": [
            "Makam raja-raja Mandar",
            "Peninggalan Kerajaan Balanipa",
            "Nisan kuno berukir",
            "Situs arkeologi penting"
          ]
        },
        {
          "id": "masjid-agung-majene",
          "name": "Masjid Agung Ilaikal Mashir Majene",
          "type": "Situs Religi & Budaya",
          "description": "Masjid tertua dan bersejarah di Majene yang didirikan oleh Raja Mandar. Selain sebagai tempat ibadah, masjid ini menjadi pusat penyebaran Islam dan budaya di tanah Mandar.",
          "address": "Jl. AP Pettarani, Banggae, Kec. Banggae, Kabupaten Majene, Sulawesi Barat",
          "phone": "-",
          "openHours": "Terbuka untuk umum di luar waktu sholat",
          "rating": 4.8,
          "image": "https://asset-2.tribunnews.com/makassar/foto/bank/images/masjid-agung-3ewd33e.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.1644679655997!2d118.95578377399254!3d-3.5495276422863373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d94bf4c043e4839%3A0xbff3144896820ecf!2sMasjid%20Agung%20Ilaikal%20Mashiir!5e0!3m2!1sid!2sid!4v1756780759226!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/rmiGpRLM2YnfgUqW9",
          "highlights": [
            "Masjid tertua di Majene",
            "Arsitektur gaya Mandar",
            "Pusat sejarah Islam",
            "Didirikan oleh Raja Mandar"
          ]
        },
        {
          "id": "rumah-adat-boyang-polewali",
          "name": "Rumah Adat Boyang (Polewali Mandar)",
          "type": "Situs Budaya",
          "description": "Rumah adat Suku Mandar yang berada di Polewali Mandar. Bangunan ini menampilkan arsitektur tradisional Boyang dengan tiang-tiang tinggi dan atap khas, sering digunakan untuk upacara adat.",
          "address": "Jl. H. Andi Depu, Pekkkabata, Kec. Polewali, Kabupaten Polewali Mandar, Sulawesi Barat",
          "phone": "-",
          "openHours": "Dapat diakses setiap saat (area luar)",
          "rating": 4.5,
          "image": "https://media.suara.com/pictures/970x544/2024/06/16/72606-boyang-kayyang-buttu-ciping-instagramaturi-xoxo.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.3525098444984!2d119.02307227399217!3d-3.5056398420774997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d94bff617db2ca9%3A0xcc6aee3f5e2728ba!2sBOYANG%20KAYYANG%20BUTTU%20CIPING!5e0!3m2!1sid!2sid!4v1756780903413!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/dvHzS12QKGqcoST87",
          "highlights": [
            "Arsitektur khas Mandar",
            "Struktur rumah panggung",
            "Simbol budaya Polewali Mandar",
            "Tempat upacara adat"
          ]
        }
      ]
    },

    {
      "id": "sulawesi-selatan",
      "name": "Sulawesi Selatan",
      "locations": [
        {
          "id": "fort-rotterdam",
          "name": "Benteng Fort Rotterdam",
          "type": "Benteng / Museum",
          "description": "Benteng peninggalan Kerajaan Gowa-Tallo yang kemudian dibangun kembali oleh Belanda. Kini menjadi kompleks budaya yang menaungi Museum La Galigo dengan koleksi sejarah Sulawesi Selatan.",
          "address": "Jl. Ujung Pandang, Bulo Gading, Kec. Ujung Pandang, Kota Makassar, Sulawesi Selatan",
          "phone": "(0411) 3625347",
          "openHours": "Setiap Hari: 08.00-18.00 WITA",
          "rating": 4.7,
          "image": "https://getlost.id/wp-content/uploads/2020/10/fort-rotterdam_143648746.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.811755076278!2d119.40305617401054!3d-5.133995051935334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbf02b011ce37ef%3A0x28ed3928c1b6cf23!2sBenteng%20Rotterdam!5e0!3m2!1sid!2sid!4v1756782769903!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/d4rypJJ8rD5Bndtu8",
          "highlights": [
            "Museum La Galigo",
            "Arsitektur benteng penyu",
            "Ruang Tahanan Pangeran Diponegoro",
            "Pemandangan pelabuhan Makassar"
          ]
        },
        {
          "id": "tana-toraja",
          "name": "Situs Pemakaman Kuno Tana Toraja",
          "type": "Situs Budaya",
          "description": "Kawasan dataran tinggi yang terkenal dengan ritual pemakaman unik. Terdapat kuburan batu di tebing (Lemo), kuburan goa (Londa), dan rumah adat Tongkonan yang ikonik.",
          "address": "Kabupaten Tana Toraja & Toraja Utara, Sulawesi Selatan",
          "phone": "-",
          "openHours": "Dapat diakses setiap saat",
          "rating": 4.9,
          "image": "https://asset.kompas.com/crops/MWwzPHwQ1smI18hf1eFwkP0FUGY=/0x0:1000x667/1200x800/data/photo/2022/02/16/620c7e98a5f33.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254987.67370724175!2d119.71790260421899!3d-3.0457521872806006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d93ec03fae54e77%3A0x678d50ea618b9939!2sKuburan%20Batu%20Lemo!5e0!3m2!1sid!2sid!4v1756782937611!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/WmqxMEBJvTTvf7kN9",
          "highlights": [
            "Kuburan tebing batu Lemo",
            "Rumah adat Tongkonan",
            "Upacara Rambu Solo'",
            "Patung Tau-tau"
          ]
        },
        {
          "id": "museum-balla-lompoa",
          "name": "Museum Balla Lompoa",
          "type": "Istana / Museum",
          "description": "Merupakan rekonstruksi dari Istana Kerajaan Gowa. Museum ini menyimpan koleksi benda-benda pusaka kerajaan, termasuk mahkota, keris, dan singgasana.",
          "address": "Jl. Sultan Hasanuddin No.48, Sungguminasa, Kec. Somba Opu, Kabupaten Gowa, Sulawesi Selatan",
          "phone": "0853-4262-1970",
          "openHours": "Setiap Hari: 08.00-16.00 WITA",
          "rating": 4.6,
          "image": "https://awsimages.detik.net.id/community/media/visual/2022/10/12/museum-balla-lompoa-1_169.jpeg?w=650",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.3547056828675!2d119.45021877401136!3d-5.206826652477495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee225941b2653%3A0x5b47e356d6ab10de!2sMuseum%20Balla%20Lompoa!5e0!3m2!1sid!2sid!4v1756783112317!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/i2Ya5eG7Y7hADF6J7",
          "highlights": [
            "Koleksi Pusaka Kerajaan Gowa",
            "Arsitektur rumah panggung Bugis",
            "Singgasana Kerajaan",
            "Pakaian adat bangsawan"
          ]
        },
        {
          "id": "taman-prasejarah-leang-leang",
          "name": "Taman Prasejarah Leang-Leang",
          "type": "Situs Arkeologi",
          "description": "Kawasan gua prasejarah di perbukitan karst Maros-Pangkep. Terkenal dengan lukisan cap tangan dan babi rusa yang diperkirakan berusia puluhan ribu tahun.",
          "address": "Kel. Leang-Leang, Kec. Bantimurung, Kabupaten Maros, Sulawesi Selatan",
          "phone": "0821-8768-4809",
          "openHours": "Setiap Hari: 08.00-17.00 WITA",
          "rating": 4.6,
          "image": "https://www.arsytours.com/wp-content/uploads/2020/01/Taman-Prasejarah-Leang-Leang-2.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.7679069371356!2d119.67178567400849!3d-4.978194950804629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbe58a1f487be7d%3A0xacf57316e2c82bb0!2sTaman%20Arkeologi%20Leang%20Leang!5e0!3m2!1sid!2sid!4v1756783259900!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/6gMLpwu2JnAXWkvy8",
          "highlights": [
            "Lukisan cap tangan purba",
            "Gambar babi rusa prasejarah",
            "Pemandangan gugusan karst",
            "Bagian dari Geopark Maros-Pangkep"
          ]
        },
        {
          "id": "monumen-mandala",
          "name": "Monumen Mandala Pembebasan Irian Barat",
          "type": "Monumen",
          "description": "Monumen setinggi 75 meter yang dibangun untuk mengenang perjuangan pembebasan Irian Barat (Papua). Pengunjung bisa naik ke puncak untuk melihat panorama Kota Makassar.",
          "address": "Jl. Jend. Sudirman, Baru, Kec. Ujung Pandang, Kota Makassar, Sulawesi Selatan",
          "phone": "(0411) 872856",
          "openHours": "Senin-Jumat: 08.00-16.00 WITA",
          "rating": 4.5,
          "image": "https://cda.1001malam.com/uploads/landmarks/monumenmandala_makassar_484.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.789005711689!2d119.41113837401053!3d-5.137644551962294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbf02a96796aee9%3A0xfb9b9bd5f1cbd913!2sMonumen%20Mandala%20Pembebasan%20Irian%20Barat!5e0!3m2!1sid!2sid!4v1756783413398!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/ghCatp3PmHn4EnXq7",
          "highlights": [
            "Mengenang Trikora",
            "Museum di lantai dasar",
            "Pemandangan 360 derajat Makassar",
            "Arsitektur bambu runcing dan api"
          ]
        }
      ]
    },

    {
      "id": "sulawesi-tenggara",
      "name": "Sulawesi Tenggara",
      "locations": [
        {
          "id": "museum-negeri-sultra",
          "name": "Museum Negeri Provinsi Sulawesi Tenggara",
          "type": "Museum Umum",
          "description": "Museum ini menyimpan dan memamerkan koleksi warisan budaya dari berbagai suku di Sulawesi Tenggara, termasuk Buton, Muna, Tolaki, dan Moronene. Koleksinya mencakup benda etnografi dan peninggalan kesultanan.",
          "address": "Jl. Abunawas No.191, Bende, Kec. Kadia, Kota Kendari, Sulawesi Tenggara",
          "phone": "(0401) 3121932",
          "openHours": "Senin-Jumat: 08.00-15.00 WITA",
          "rating": 4.5,
          "image": "https://images.genpi.co/resize/1280x860-100/uploads/sultra/arsip/watermark/2022/07/02/museum-negeri-sulawesi-tenggara-foto-apriliana-suriyanti-rvzk.webp",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.210476879876!2d122.51517607399705!3d-3.977051544485531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d98f2b8df370149%3A0xa169a85bf79b9cf4!2sMuseum%20Negeri%20Provinsi%20Sulawesi%20Tenggara!5e0!3m2!1sid!2sid!4v1756792661133!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/F6gfyRGVtdtT8jr47",
          "highlights": [
            "Artefak Kerajaan Konawe",
            "Koleksi tenun khas Sultra",
            "Peninggalan Kesultanan Buton",
            "Diorama budaya maritim"
          ]
        },
        {
          "id": "benteng-keraton-buton",
          "name": "Benteng Keraton Buton",
          "type": "Benteng / Situs Sejarah",
          "description": "Salah satu benteng terluas di dunia yang dibangun pada abad ke-16. Di dalam kompleks benteng ini terdapat pemukiman, istana, masjid agung, dan makam sultan-sultan Buton.",
          "address": "Melai, Murhum, Kota Bau-Bau, Sulawesi Tenggara",
          "phone": "-",
          "openHours": "Dapat diakses setiap saat",
          "rating": 4.8,
          "image": "https://jadesta.kemenparekraf.go.id/imgpost/29020.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.623573162081!2d122.59945177401501!3d-5.4739303045400005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2da476cb1ad00583%3A0x8f61b1890873bf91!2sBenteng%20Keraton%20Kesultanan%20Buton%20(Negeri%20Khalifatul%20Khamis)!5e0!3m2!1sid!2sid!4v1756792894186!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/qQyLs4gh2KwPHXDU6",
          "highlights": [
            "Benteng terluas di dunia (MURI)",
            "Masjid Agung Keraton Buton",
            "Makam Sultan Murhum",
            "Arsitektur batu kapur"
          ]
        },
        {
          "id": "istana-malige",
          "name": "Istana Malige",
          "type": "Istana / Situs Budaya",
          "description": "Rumah adat Kesultanan Buton yang dibangun tanpa menggunakan paku. Istana setinggi empat lantai ini merupakan contoh arsitektur tradisional yang megah dan kokoh.",
          "address": "Jl. Sultan Alaudin, Melai, Kec. Murhum, Kota Bau-Bau, Sulawesi Tenggara",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-17.00 WITA",
          "rating": 4.7,
          "image": "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1557035955/seldra1dbyvao4vvoapt.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.7306930702334!2d122.6042370740146!3d-5.457780654411969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2da476956898740b%3A0x1c865c4fe0d19e19!2sIstana%20Malige!5e0!3m2!1sid!2sid!4v1756795285266!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/Nzj1Nqz8Td5wgrwi6",
          "highlights": [
            "Bangunan 4 lantai tanpa paku",
            "Arsitektur tradisional Buton",
            "Pusaka Kesultanan",
            "Berada di dalam Benteng Keraton"
          ]
        },
        {
          "id": "gua-prasejarah-liangkobori",
          "name": "Situs Gua Prasejarah Liangkobori",
          "type": "Situs Arkeologi",
          "description": "Gua purbakala yang dihiasi oleh ratusan lukisan dinding prasejarah. Lukisan-lukisan ini menggambarkan manusia, hewan, dan perahu, memberikan gambaran kehidupan masa lampau.",
          "address": "Desa Liangkobori, Kecamatan Muna Barat, Kabupaten Muna, Sulawesi Tenggara",
          "phone": "-",
          "openHours": "Dapat dikunjungi dengan pemandu lokal",
          "rating": 4.6,
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrDeC1aUTuKV-Oqk5OzMOLYC234UwjKsgbQ&s",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.2431336641794!2d122.65709337400763!3d-4.898920950244556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2da3b42797063b57%3A0x68caf2f442bfdd2d!2sGua%20Liangkobori!5e0!3m2!1sid!2sid!4v1756795408092!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/wk3GJ26aEURXGqu48",
          "highlights": [
            "Lukisan dinding prasejarah",
            "Gambar adegan berburu",
            "Artefak zaman mesolitikum",
            "Pemandangan alam karst"
          ]
        },
        {
          "id": "tugu-persatuan-mtq",
          "name": "Tugu Persatuan (Tugu MTQ)",
          "type": "Monumen",
          "description": "Monumen ikonik Kota Kendari yang dibangun untuk perhelatan MTQ Nasional. Arsitekturnya unik menyerupai kandil raksasa dan menjadi landmark kebanggaan warga.",
          "address": "Jl. H. Abdullah Silondae, Korumba, Kec. Mandonga, Kota Kendari, Sulawesi Tenggara",
          "phone": "-",
          "openHours": "Dapat diakses setiap saat",
          "rating": 4.5,
          "image": "https://awsimages.detik.net.id/community/media/visual/2016/05/11/4fa13f73-3231-425d-b05e-445cd250f3ea_11.jpg?w=1200",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.2170441524167!2d122.51465027399685!3d-3.9756915444780594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d98f2bf29b6d4bb%3A0x62c9a1152fc051dd!2sTugu%20Religi%20Sultra!5e0!3m2!1sid!2sid!4v1756795505479!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/MnDbMyguYRGc63TEA",
          "highlights": [
            "Ikon Kota Kendari",
            "Arsitektur kandil raksasa",
            "Simbol persatuan dan religi",
            "Pusat kegiatan publik"
          ]
        }
      ]
    },

    {
      "id": "gorontalo",
      "name": "Gorontalo",
      "locations": [
        {
          "id": "museum-pendaratan-pesawat-bung-karno",
          "name": "Museum Pendaratan Pesawat Amfibi Bung Karno",
          "type": "Museum Sejarah",
          "description": "Museum ini didirikan di lokasi pendaratan pesawat amfibi yang membawa Presiden Soekarno saat berkunjung ke Gorontalo pada tahun 1950. Menyimpan koleksi foto dan memorabilia kunjungan tersebut.",
          "address": "Jl. Trans Sulawesi, Iluta, Kec. Batudaa, Kabupaten Gorontalo, Gorontalo",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-17.00 WITA",
          "rating": 4.5,
          "image": "https://upload.wikimedia.org/wikipedia/commons/7/76/Museum_Pendaratan_Pesawat_Amfibi_di_Iluta%2C_Gorontalo.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.633428091456!2d122.99238337396525!3d0.5515972636236607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32792bdde3805601%3A0xa6337cdf594bde0c!2sMuseum%20Pedaratan%20Pesawat%20Ampibi!5e0!3m2!1sid!2sid!4v1756799641434!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/V2bSk9BKUSqtTrqt8",
          "highlights": [
            "Monumen pendaratan Soekarno",
            "Sejarah kunjungan presiden",
            "Terletak di tepi Danau Limboto",
            "Koleksi foto dokumentasi"
          ]
        },
        {
          "id": "benteng-otanaha",
          "name": "Benteng Otanaha",
          "type": "Benteng / Situs Sejarah",
          "description": "Kompleks benteng peninggalan bangsa Portugis yang dibangun pada abad ke-15. Terdiri dari tiga benteng (Otanaha, Otahiya, Ulupahu) yang terletak di atas bukit dengan pemandangan Danau Limboto.",
          "address": "Jl. Usman Isa, Dembe I, Kec. Kota Bar., Kota Gorontalo, Gorontalo",
          "phone": "0852-4086-8282",
          "openHours": "Setiap Hari: 08.00-18.00 WITA",
          "rating": 4.4,
          "image": "https://traverse.id/wp-content/uploads/2019/08/Benteng-Otanaha-Saksi-Bisu-Kejayaan-Gorontalo--e1567059623302.jpeg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6356731198016!2d123.00583787396532!3d0.548238163630069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32792bc16bd20cf7%3A0x23cc0495aa68abd0!2sBenteng%20Otanaha!5e0!3m2!1sid!2sid!4v1756799772016!5m2!1sid!2sid",
          "penunjukUrl": "hhttps://maps.app.goo.gl/E5qxtQfs15wmTeoH6",
          "highlights": [
            "Peninggalan Portugis abad ke-15",
            "Pemandangan Danau Limboto",
            "Terdiri dari tiga benteng",
            "Struktur dari batu dan kapur"
          ]
        },
        {
          "id": "rumah-adat-dulohupa",
          "name": "Rumah Adat Dulohupa",
          "type": "Situs Budaya",
          "description": "Rumah adat Gorontalo berbentuk panggung yang menjadi pusat kegiatan adat dan budaya. Arsitekturnya kaya akan filosofi dan ukiran khas Gorontalo.",
          "address": "Jl. Jend. Sudirman, Limba U I, Kec. Kota Sel., Kota Gorontalo, Gorontalo",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-17.00 WITA",
          "rating": 4.6,
          "image": "https://asset.kompas.com/crops/dbNsFe4kOoHsfHK6CgqtBwu-Fa0=/10x0:979x646/1200x800/data/photo/2022/03/17/6233520177ed1.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.632220979449!2d123.02782237396521!3d0.5533949636202227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32792b57e71747e1%3A0x1b4f0afe862db6fc!2sRumah%20Adat%20Li%20Lina!5e0!3m2!1sid!2sid!4v1756800108474!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/hcaqkT4HA4FynSPi9",
          "highlights": [
            "Arsitektur khas Gorontalo",
            "Pusat musyawarah adat",
            "Ukiran dan ornamen unik",
            "Konstruksi kayu panggung"
          ]
        },
        {
          "id": "makam-ju-panggola",
          "name": "Situs Religi Makam Ju Panggola",
          "type": "Situs Religi & Sejarah",
          "description": "Makam keramat dari Ilato (Raja) Ju Panggola, seorang tokoh penyebar agama Islam di Gorontalo. Tempat ini menjadi tujuan wisata ziarah yang penting.",
          "address": "Jl. Raja Eyato, Molosipat U, Kec. Sipatana, Kota Gorontalo, Gorontalo",
          "phone": "-",
          "openHours": "Dapat diakses setiap saat",
          "rating": 4.7,
          "image": "https://buletinindonesia.id/wp-content/uploads/2025/07/Makam-Ju-Panggola.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.633295734095!2d122.99268057396526!3d0.5517946636232838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32792b8d377a7f0f%3A0x959e185d70b0bd1!2smakam%20Ju%20Panggola%20(kubah)!5e0!3m2!1sid!2sid!4v1756800287379!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/mmeftG77xLuhQ4ha6",
          "highlights": [
            "Makam penyebar Islam",
            "Wisata ziarah religi",
            "Sumur tua keramat",
            "Legenda Raja Ju Panggola"
          ]
        },
        {
          "id": "menara-keagungan-limboto",
          "name": "Menara Keagungan Limboto",
          "type": "Monumen",
          "description": "Menara setinggi 65 meter yang menjadi ikon Kabupaten Gorontalo, menyerupai Menara Eiffel. Dari puncaknya, pengunjung bisa melihat pemandangan Danau Limboto dan sekitarnya.",
          "address": "Jl. Jendral Sudirman, Kayubulan, Kec. Limboto, Kabupaten Gorontalo, Gorontalo",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-22.00 WITA",
          "rating": 4.4,
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Menara_Keagungan_Limboto.jpg/2560px-Menara_Keagungan_Limboto.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.5794216242584!2d122.97731327396494!3d0.6270037634749146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32792b4799e5e75d%3A0xc05565aafae3154e!2sMenara%20Keagungan%20Limboto!5e0!3m2!1sid!2sid!4v1756803017569!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/nunikxnGW7JJP2X7A",
          "highlights": [
            "Ikon Kabupaten Gorontalo",
            "Pemandangan 360 derajat",
            "'Eiffel' dari Gorontalo",
            "Lift menuju puncak"
          ]
        }
      ]
    },

    {
      "id": "nusa-tenggara-barat-ntb",
      "name": "Nusa Tenggara Barat (NTB)",
      "locations": [
        {
          "id": "museum-negeri-ntb",
          "name": "Museum Negeri Nusa Tenggara Barat",
          "type": "Museum Umum",
          "description": "Museum ini adalah pusat penyimpanan dan pameran warisan budaya dari suku Sasak, Samawa, dan Mbojo. Koleksinya sangat beragam, mulai dari geologi, etnografi, hingga benda-benda peninggalan kerajaan.",
          "address": "Jl. Panji Tilar Negara No.6, Taman Sari, Kec. Ampenan, Kota Mataram, Nusa Tenggara Bar.",
          "phone": "(0370) 633328",
          "openHours": "Setiap Hari: 08.00-14.00 WITA",
          "rating": 4.6,
          "image": "https://museum.co.id/wp-content/uploads/2020/09/1-2.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.113507590289!2d116.0832956740636!3d-8.585084187137477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdc07e57ab2055%3A0x559532ffe67ed68f!2sMuseum%20Negeri%20Nusa%20Tenggara%20Barat!5e0!3m2!1sid!2sid!4v1756804240819!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/r1KfrFnZrZ7Jfyoo8",
          "highlights": [
            "Naskah Lontar Kuno",
            "Kerajinan Tenun Songket",
            "Koleksi keris dan senjata",
            "Misteri 'Manusia Pohon'"
          ]
        },
        {
          "id": "taman-narmada",
          "name": "Taman Narmada",
          "type": "Taman Bersejarah",
          "description": "Dibangun oleh Raja Anak Agung Gede Ngurah Karangasem sebagai replika dari Gunung Rinjani dan Danau Segara Anak. Taman ini berfungsi sebagai tempat upacara dan peristirahatan kerajaan.",
          "address": "Jl. Ahmad Yani, Lembuak, Kec. Narmada, Kabupaten Lombok Barat, Nusa Tenggara Bar.",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-17.00 WITA",
          "rating": 4.4,
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Narmada_Water_Palace_1.JPG/1200px-Narmada_Water_Palace_1.JPG",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.007885048229!2d116.20197517406379!3d-8.595239087269706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdb86c86247e03%3A0x567bd12fafb3bd15!2sNarmada%20Park!5e0!3m2!1sid!2sid!4v1756804480253!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/G6orpJ62fsQSiUUv8",
          "highlights": [
            "Replika Gunung Rinjani",
            "Balai Petirtaan (Air Awet Muda)",
            "Arsitektur Bali-Lombok",
            "Pura Kalasa"
          ]
        },
        {
          "id": "desa-adat-sade",
          "name": "Desa Adat Sade",
          "type": "Desa Wisata Budaya",
          "description": "Desa tradisional Suku Sasak yang mempertahankan arsitektur dan gaya hidup asli. Rumah-rumahnya terbuat dari anyaman bambu dengan atap ilalang dan lantai dari campuran tanah liat dan kotoran kerbau.",
          "address": "Rambitan, Kec. Pujut, Kabupaten Lombok Tengah, Nusa Tenggara Bar.",
          "phone": "0878-6594-5366",
          "openHours": "Setiap Hari: 08.00-18.00 WITA",
          "rating": 4.5,
          "image": "https://awsimages.detik.net.id/community/media/visual/2019/05/10/e7526592-3c6f-4032-ba43-9e441e3bbde5_169.jpeg?w=1200",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.4320702346645!2d116.28941217406827!3d-8.839302890497759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcda9172d983baf%3A0xfa9eed5a2752a97c!2sSade%20Village!5e0!3m2!1sid!2sid!4v1756804625560!5m2!1sid!2sid\"></iframe>",
          "penunjukUrl": "https://maps.app.goo.gl/rXDEQj3TGahWDcqV6",
          "highlights": [
            "Rumah Adat Suku Sasak",
            "Kerajinan Tenun Ikat",
            "Lumbung Padi (Berugak)",
            "Tradisi dan kehidupan asli"
          ]
        },
        {
          "id": "istana-dalam-loka",
          "name": "Istana Dalam Loka",
          "type": "Istana / Museum",
          "description": "Bekas istana Kesultanan Sumbawa yang merupakan rumah panggung kayu terbesar di dunia. Kini berfungsi sebagai museum yang menyimpan benda-benda pusaka kesultanan.",
          "address": "Jl. Dalam Loka, Seketeng, Kec. Sumbawa, Kabupaten Sumbawa, Nusa Tenggara Bar.",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-17.00 WITA",
          "rating": 4.6,
          "image": "https://indonesiakaya.com/wp-content/uploads/2020/10/Istana_Dalam_Loka_dibangun_pada_tahun_1885_atas_prakarsa_Sultan_Muhammad_Jalaluddin_Syah_III.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.948011364916!2d117.4248505740622!3d-8.504429086093328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcb933eb99e0009%3A0x93d7c6363616745c!2sIstana%20Dalam%20Loka!5e0!3m2!1sid!2sid!4v1756805381863!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/8yQfBBCKwRHSiwee7",
          "highlights": [
            "Rumah panggung kayu terbesar",
            "Pusaka Kesultanan Sumbawa",
            "Arsitektur khas Samawa",
            "Konstruksi tanpa paku"
          ]
        },
        {
          "id": "taman-mayura",
          "name": "Pura & Taman Mayura",
          "type": "Situs Religi & Sejarah",
          "description": "Kompleks taman dan pura peninggalan Kerajaan Bali Karangasem di Lombok. Terkenal dengan 'Bale Kambang', yaitu balai terapung di tengah kolam yang dikelilingi taman asri.",
          "address": "Jl. Purbasari, Mayura, Kec. Cakranegara, Kota Mataram, Nusa Tenggara Bar.",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-17.00 WITA",
          "rating": 4.5,
          "image": "https://image.idntimes.com/post/20211225/taman-mayura-lombok-aafc31b3e318f07a0cddcc9d9b604d7c.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.948011364916!2d117.4248505740622!3d-8.504429086093328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcb933eb99e0009%3A0x93d7c6363616745c!2sIstana%20Dalam%20Loka!5e0!3m2!1sid!2sid!4v1756804786317!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/8yQfBBCKwRHSiwee7",
          "highlights": [
            "Bale Kambang (Balai Terapung)",
            "Peninggalan Kerajaan Bali",
            "Perpaduan nuansa religius dan sejarah",
            "Taman yang asri dan sejuk"
          ]
        }
      ]
    },

    {
      "id": "nusa-tenggara-timur-ntt",
      "name": "Nusa Tenggara Timur (NTT)",
      "locations": [
        {
          "id": "museum-negeri-ntt",
          "name": "Museum Negeri Nusa Tenggara Timur",
          "type": "Museum Umum",
          "description": "Museum ini menjadi pusat koleksi dan informasi tentang keanekaragaman budaya dari berbagai suku di NTT, seperti Timor, Rote, Sabu, Sumba, Flores, dan Alor.",
          "address": "Jl. Raya Eltari No.2, Oebobo, Kec. Oebobo, Kota Kupang, Nusa Tenggara Tim.",
          "phone": "(0380) 833325",
          "openHours": "Senin-Jumat: 08.00-15.00 WITA",
          "rating": 4.5,
          "image": "https://awsimages.detik.net.id/community/media/visual/2022/12/05/museum-di-ntb-dan-ntt.png?w=5184",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.269183903244!2d123.61686412409423!3d-10.158761009625088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c56834b1b8e765b%3A0x9f7edb186bafb422!2sMuseum%20Daerah%20Nusa%20Tenggara%20Timur!5e0!3m2!1sid!2sid!4v1756806024395!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/hSSzEg59obwATLQv5",
          "highlights": [
            "Koleksi Tenun Ikat NTT",
            "Moko dari Alor",
            "Fosil Gajah Purba (Stegodon)",
            "Peralatan upacara adat"
          ]
        },
        {
          "id": "situs-bung-karno-ende",
          "name": "Situs Rumah Pengasingan Bung Karno",
          "type": "Situs Bersejarah",
          "description": "Rumah tempat Soekarno menjalani pengasingan oleh Belanda dari tahun 1934 hingga 1938. Di tempat inilah beliau merenungkan dan merumuskan butir-butir Pancasila.",
          "address": "Jl. Perwira, Kotaraja, Kec. Ende Utara, Kabupaten Ende, Nusa Tenggara Tim.",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-17.00 WITA",
          "rating": 4.7,
          "image": "https://awsimages.detik.net.id/community/media/visual/2022/06/06/rumah-pengasingan-bung-karno-di-bengkulu-1_169.jpeg?w=1200",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16247009.379454715!2d101.25831898518116!3d-6.190246436274884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dad58b39212e73f%3A0x526a432db61777e6!2sRumah%20Pengasingan%20Bung%20Karno!5e0!3m2!1sid!2sid!4v1756806331980!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/YHhnoEqbdpXW6tsB7",
          "highlights": [
            "Tempat lahirnya Pancasila",
            "Perabotan asli peninggalan Soekarno",
            "Naskah drama tulisan tangan",
            "Foto-foto dokumentasi"
          ]
        },
        {
          "id": "desa-adat-bena",
          "name": "Desa Adat Bena",
          "type": "Situs Megalitikum",
          "description": "Perkampungan megalitikum yang terletak di puncak bukit dengan latar belakang Gunung Inerie. Desa ini menjadi representasi budaya zaman batu yang masih lestari hingga kini.",
          "address": "Tiworiwu, Kecamatan Jerebuu, Kabupaten Ngada, Nusa Tenggara Tim.",
          "phone": "-",
          "openHours": "Setiap Hari: 07.00-18.00 WITA",
          "rating": 4.7,
          "image": "https://portal.ngadakab.go.id/wp-content/uploads/2025/07/kampung-adat-bena-1.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2018319.663684722!2d118.67876919374996!3d-8.876743899999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2db2de9fb4132d15%3A0x37927d1166e19c6e!2sDesa%20Bena!5e0!3m2!1sid!2sid!4v1756806454684!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/Q8FdTrfRBgLQ8QfaA",
          "highlights": [
            "Struktur batu megalitikum",
            "Rumah adat (Sa'o)",
            "Upacara dan ritual adat",
            "Kerajinan tenun tangan"
          ]
        },
        {
          "id": "museum-tenun-ikat-lepolorun",
          "name": "Museum Tenun Ikat Lepo Lorun",
          "type": "Museum Kerajinan",
          "description": "Sebuah museum hidup yang didedikasikan untuk melestarikan seni tenun ikat Sikka. Pengunjung dapat melihat koleksi kain, belajar proses menenun, dan berinteraksi dengan para penenun.",
          "address": "Jl. Kimang Buleng, Nita, Kec. Nita, Kabupaten Sikka, Nusa Tenggara Tim.",
          "phone": "0813-3932-8888",
          "openHours": "Senin-Sabtu: 08.00-17.00 WITA",
          "rating": 4.8,
          "image": "https://cdn.antaranews.com/cache/1200x800/2017/02/20170217TENUN_FLORES.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.167065725661!2d122.16809587406523!3d-8.675657488322653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dad17810c4a26d3%3A0xe4fc9369ba9ae656!2sTenun%20Ikat%20Lepo%20Lorun!5e0!3m2!1sid!2sid!4v1756806806690!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/TYc1JEuajTgLNwHF7",
          "highlights": [
            "Proses menenun dari kapas",
            "Pewarnaan alami",
            "Koleksi motif tenun Sikka",
            "Workshop dan sanggar tari"
          ]
        },
        {
          "id": "kampung-adat-wae-rebo",
          "name": "Kampung Adat Wae Rebo",
          "type": "Desa Wisata Budaya",
          "description": "Desa terpencil di atas pegunungan yang terkenal dengan rumah adat Mbaru Niang berbentuk kerucut. Desa ini menawarkan pengalaman hidup bersama masyarakat adat Manggarai.",
          "address": "Satar Lenda, Kecamatan Satar Mese Barat, Kabupaten Manggarai, Nusa Tenggara Tim.",
          "phone": "-",
          "openHours": "Memerlukan perjalanan trekking dan pemandu",
          "rating": 4.9,
          "image": "https://www.masterplandesa.com/wp-content/uploads/2019/05/Rumah-Adat-Desa-Wae-Rebo-a.png",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.1802289304997!2d120.28161137406687!3d-8.76910788955943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2db36459b2e80e9d%3A0xce74c6b87dcb8a88!2sWaerebo%20Village!5e0!3m2!1sid!2sid!4v1756806921410!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/GhQB9MUxo2vZheR46",
          "highlights": [
            "Rumah Adat Mbaru Niang",
            "Desa di atas awan",
            "Kehidupan asli Suku Manggarai",
            "Warisan Dunia UNESCO"
          ]
        }
      ]
    },

    {
      "id": "maluku",
      "name": "Maluku",
      "locations": [
        {
          "id": "museum-siwalima",
          "name": "Museum Negeri Siwalima",
          "type": "Museum Umum",
          "description": "Museum ini menampilkan kekayaan budaya dan sejarah Maluku, 'Tanah Raja-Raja'. Koleksinya terbagi menjadi dua gedung: Museum Kelautan dan Museum Budaya, dengan berbagai artefak etnografi dan sejarah.",
          "address": "Jl. Dr. Malaihollo, Taman Makmur, Kec. Nusaniwe, Kota Ambon, Maluku",
          "phone": "(0911) 361298",
          "openHours": "Selasa-Minggu: 08.00-16.00 WIT",
          "rating": 4.6,
          "image": "https://upload.wikimedia.org/wikipedia/commons/5/50/Museum_Siwalima.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.4413719167055!2d128.1504055739941!3d-3.713470743094342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d6ce80eafbfeb7d%3A0xbf9977619e9db228!2sMuseum%20Siwalima%20Provinsi%20Maluku!5e0!3m2!1sid!2sid!4v1756807281604!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/aSJWtsKXAFPvWFQn7",
          "highlights": [
            "Kerangka Ikan Paus Biru raksasa",
            "Sejarah jalur rempah",
            "Koleksi busana adat Maluku",
            "Peralatan upacara tradisional"
          ]
        },
        {
          "id": "benteng-duurstede",
          "name": "Benteng Duurstede",
          "type": "Benteng / Situs Sejarah",
          "description": "Benteng peninggalan Portugis yang kemudian diambil alih oleh VOC. Benteng ini menjadi saksi bisu perlawanan pahlawan nasional Pattimura dalam merebut benteng dari tangan Belanda.",
          "address": "Saparua, Kabupaten Maluku Tengah, Maluku",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-18.00 WIT",
          "rating": 4.5,
          "image": "https://upload.wikimedia.org/wikipedia/commons/5/54/Duurstede_Fort%2C_Saparua%2C_Ambon_-_Indonesia.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.053376170505!2d128.6565417739929!3d-3.5752029424099705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d6b62a5c58da8c3%3A0x8bcb1aada430e7aa!2sBenteng%20%22%20VOC%20%22%20Duurstede%20Saparua!5e0!3m2!1sid!2sid!4v1756807408400!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/4RQ5pbFF3nzaBq6RA",
          "highlights": [
            "Saksi sejarah Perang Pattimura",
            "Pemandangan Selat Saparua",
            "Arsitektur benteng Eropa",
            "Meriam-meriam kuno"
          ]
        },
        {
          "id": "istana-sultan-ternate",
          "name": "Kedaton Kesultanan Ternate",
          "type": "Istana / Museum",
          "description": "Istana megah berbentuk segi delapan yang merupakan kediaman resmi Sultan Ternate. Di dalamnya terdapat museum yang menyimpan benda pusaka kerajaan, termasuk Mahkota Sultan yang unik.",
          "address": "Jl. Sultan Khairun, Soa Sio, Kec. Ternate Utara, Kota Ternate, Maluku Utara",
          "phone": "-",
          "openHours": "Setiap Hari: 09.00-17.00 WIT",
          "rating": 4.7,
          "image": "https://images.bisnis.com/photos/2024/02/09/199967/antarafoto-wajah-baru-kedaton-kesultanan-ternate-ans-922024-ans-5.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.4288749300895!2d127.38147027396433!3d0.8005489630973006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x329cb16240da5b65%3A0xbea54bb008057830!2sKedaton%20Kesultanan%20Ternate!5e0!3m2!1sid!2sid!4v1756807613451!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/Uk3KadTsHNhP6mgEA",
          "highlights": [
            "Mahkota dengan rambut yang tumbuh",
            "Pusaka Kesultanan Ternate",
            "Arsitektur unik segi delapan",
            "Al-Qur'an tulisan tangan"
          ]
        },
        {
          "id": "benteng-belgica",
          "name": "Benteng Belgica",
          "type": "Benteng / Situs Sejarah",
          "description": "Benteng peninggalan Portugis yang dibangun kembali oleh VOC menjadi benteng pentagon yang kokoh di atas bukit. Benteng ini dibangun untuk memonopoli perdagangan pala di Kepulauan Banda.",
          "address": "Nusantara, Kec. Banda, Kabupaten Maluku Tengah, Maluku",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-18.00 WIT",
          "rating": 4.8,
          "image": "https://asset.kompas.com/crops/P7N1iXPtPkphHPiCUeXTIHGQQxk=/0x0:650x433/1200x800/data/photo/2021/08/27/6128da92606de.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.3759010860936!2d129.89633287400312!3d-4.526123647748338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d15860903e4fb6b%3A0xfabde573db11c1a7!2sBenteng%20Belgica%2C%20Kepulauan%20Banda%20Neira!5e0!3m2!1sid!2sid!4v1756807719143!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/L2ZxNuXv9ZNvS5r26",
          "highlights": [
            "Arsitektur Pentagon (segi lima)",
            "Pusat monopoli pala VOC",
            "Pemandangan Gunung Api Banda",
            "Warisan Dunia UNESCO"
          ]
        },
        {
          "id": "rumah-pengasingan-hatta",
          "name": "Rumah Pengasingan Bung Hatta",
          "type": "Situs Bersejarah",
          "description": "Tempat tinggal Mohammad Hatta dan Sutan Sjahrir selama masa pengasingan mereka di Banda Neira. Di tempat ini, mereka mendirikan sekolah untuk anak-anak setempat.",
          "address": "Jl. Dr. Moh. Hatta, Nusantara, Kec. Banda, Kabupaten Maluku Tengah, Maluku",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-17.00 WIT",
          "rating": 4.7,
          "image": "https://live.staticflickr.com/8118/8609364898_f6dd3424cf_z.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.368591965279!2d129.89721737400302!3d-4.527453547756835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d1587edd04e6201%3A0xa3c7e9dbe463e30c!2sRumah%20Pengasingan%20Bung%20Hatta!5e0!3m2!1sid!2sid!4v1756807850213!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/hweqcNvVXmnK5NDA8",
          "highlights": [
            "Tempat tinggal Bung Hatta & Sjahrir",
            "Peninggalan perabotan asli",
            "Perpustakaan pribadi",
            "Sejarah pergerakan kemerdekaan"
          ]
        }
      ]
    },
    {
      "id": "maluku-utara",
      "name": "Maluku Utara",
      "locations": [
        {
          "id": "kedaton-kesultanan-ternate",
          "name": "Museum Kedaton Kesultanan Ternate",
          "type": "Istana / Museum",
          "description": "Istana megah berbentuk segi delapan yang merupakan kediaman resmi Sultan Ternate. Di dalamnya terdapat museum yang menyimpan benda pusaka kerajaan, termasuk Mahkota Sultan yang unik.",
          "address": "Jl. Sultan Khairun, Soa Sio, Kec. Ternate Utara, Kota Ternate, Maluku Utara",
          "phone": "-",
          "openHours": "Setiap Hari: 09.00-17.00 WIT",
          "rating": 4.7,
          "image": "https://wonderful.ternatekota.go.id//storage/files/uploads/DESTINASI/IMG_0333.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.4288749300895!2d127.38147027396433!3d0.8005489630973006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x329cb16240da5b65%3A0xbea54bb008057830!2sKedaton%20Kesultanan%20Ternate!5e0!3m2!1sid!2sid!4v1756808221616!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/Uk3KadTsHNhP6mgEA",
          "highlights": [
            "Mahkota dengan rambut yang tumbuh",
            "Pusaka Kesultanan Ternate",
            "Arsitektur unik segi delapan",
            "Al-Qur'an tulisan tangan"
          ]
        },
        {
          "id": "benteng-tolukko",
          "name": "Benteng Tolukko",
          "type": "Benteng / Situs Sejarah",
          "description": "Benteng kecil peninggalan Portugis yang dibangun di atas tanjung berbatu. Benteng ini memiliki posisi strategis dengan pemandangan indah ke arah Gunung Gamalama dan laut.",
          "address": "Jl. Benteng Tolukko, Sangaji, Kec. Ternate Utara, Kota Ternate, Maluku Utara",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-18.00 WIT",
          "rating": 4.6,
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Fort_Tolukko_op_Ternate%2C_KITLV_178142.tiff/lossy-page1-1200px-Fort_Tolukko_op_Ternate%2C_KITLV_178142.tiff.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.4158349946993!2d127.38559587396432!3d0.813841363066354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x329cb183e224aec5%3A0x6f64a496870d0188!2sBenteng%20Portugis%20Tolukko!5e0!3m2!1sid!2sid!4v1756819392030!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/RjDGWS8tgd3vcxtg7",
          "highlights": [
            "Peninggalan Portugis",
            "Batu fondasi dari Gunung Gamalama",
            "Pemandangan laut dan gunung",
            "Struktur bastion yang unik"
          ]
        },
        {
          "id": "benteng-klamata",
          "name": "Benteng Kalamata",
          "type": "Benteng / Situs Sejarah",
          "description": "Benteng peninggalan Portugis yang berbentuk bintang empat penjuru. Terletak di tepi pantai, benteng ini dibangun untuk menghadapi serangan dari Kesultanan Tidore.",
          "address": "Jl. Raya Kalamata, Kalamata, Kec. Ternate Sel., Kota Ternate, Maluku Utara",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-18.00 WIT",
          "rating": 4.5,
          "image": "https://asset.kompas.com/crops/BoHdUl3UJ9EiAxio4m7XswKsiJ8=/0x0:720x480/750x500/data/photo/2023/08/01/64c892477e691.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.465258039241!2d127.37048967396464!3d0.7622368631848945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x329cb423414e100f%3A0x4541debcea1259b!2sBenteng%20Kalamata!5e0!3m2!1sid!2sid!4v1756819486773!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/sWo1FF4JC3kZwSEW6",
          "highlights": [
            "Arsitektur bintang empat",
            "Pemandangan Pulau Tidore",
            "Benteng pertahanan tepi laut",
            "Dibangun oleh Portugis"
          ]
        },
        {
          "id": "kedaton-kesultanan-tidore",
          "name": "Museum Kedaton Kesultanan Tidore",
          "type": "Istana / Museum",
          "description": "Pusat pemerintahan Kesultanan Tidore yang telah dibangun kembali. Di dalamnya terdapat museum yang menyimpan peninggalan sejarah dan benda-benda pusaka Kesultanan Tidore.",
          "address": "Soasio, Kec. Tidore, Kota Tidore Kepulauan, Maluku Utara",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-17.00 WIT",
          "rating": 4.7,
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Kadato_Kie.jpg/640px-Kadato_Kie.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127661.7241647357!2d127.23984964335936!3d0.8005436000000233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x329cb16240da5b65%3A0xbea54bb008057830!2sKedaton%20Kesultanan%20Ternate!5e0!3m2!1sid!2sid!4v1756819596686!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/vuMVhHeeuoUJ5Uk99",
          "highlights": [
            "Pusaka Kesultanan Tidore",
            "Mahkota Sultan Tidore",
            "Sejarah persaingan Ternate-Tidore",
            "Arsitektur rumah panggung"
          ]
        },
        {
          "id": "benteng-tahula",
          "name": "Benteng Tahula",
          "type": "Benteng / Situs Sejarah",
          "description": "Benteng peninggalan Spanyol yang terletak di atas bukit di Pulau Tidore. Dari benteng ini, pengunjung bisa melihat pemandangan Kota Tidore dan Pulau Halmahera di kejauhan.",
          "address": "Soasio, Kec. Tidore, Kota Tidore Kepulauan, Maluku Utara",
          "phone": "-",
          "openHours": "Dapat diakses setiap saat",
          "rating": 4.6,
          "image": "https://asset.kompas.com/crops/QLJCZGgPF6rL21jiIdr2wgaHrbE=/0x49:1024x732/1200x800/data/photo/2023/08/04/64cce2c860d1f.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.5630303776416!2d127.439567273965!3d0.6481570634315199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x329ccfaa67137fdf%3A0xdefa5bd4169ae85a!2sBenteng%20Spanyol%20Tahula!5e0!3m2!1sid!2sid!4v1756819795227!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/t7hHm6CRUWS6RL8DA",
          "highlights": [
            "Peninggalan Spanyol",
            "Pemandangan Pulau Halmahera",
            "Struktur benteng di atas bukit",
            "Meriam kuno"
          ]
        }
      ]
    },

    {
      "id": "papua",
      "name": "Papua",
      "locations": [
        {
          "id": "museum-negeri-papua",
          "name": "Museum Negeri Provinsi Papua",
          "type": "Museum Budaya",
          "description": "Museum ini menyimpan koleksi-koleksi etnografi dan antropologi dari berbagai suku di Papua. Pengunjung dapat melihat artefak seperti pakaian adat, alat musik, dan peralatan upacara.",
          "address": "Jl. Raya Abepura, Waena, Kec. Heram, Kota Jayapura, Papua",
          "phone": "(0967) 571216",
          "openHours": "Senin-Jumat: 08.00-15.00 WIT",
          "rating": 4.5,
          "image": "https://fajarpapua.com/wp-content/uploads/2021/08/96be753ade525c3e3f0a92a9bcc1db72.jpeg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.726432685192!2d140.6283052739837!3d-2.595135538455356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x686cf436e8454617%3A0x5e8c8dfc2f236067!2sMuseum%20Negeri%20Provinsi%20Papua!5e0!3m2!1sid!2sid!4v1756820149758!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/ihkUjMDwdiAkbHAe8",
          "highlights": [
            "Koleksi Asmat",
            "Peralatan berburu tradisional",
            "Perahu arwah (Wairon)",
            "Diorama rumah adat"
          ]
        },
        {
          "id": "tugu-macarthur",
          "name": "Monumen Jenderal MacArthur",
          "type": "Monumen Sejarah",
          "description": "Monumen ini didirikan di atas bukit untuk mengenang Jenderal Douglas MacArthur, yang memimpin pasukan sekutu di Pasifik selama Perang Dunia II dari markasnya di Ifar Gunung.",
          "address": "Jl. Ifar Gunung, Sentani, Jayapura, Papua",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-17.00 WIT",
          "rating": 4.6,
          "image": "https://asset-2.tribunnews.com/papua/foto/bank/images/objek-wisata-tugu-macarthur.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.8260339331446!2d140.54103777398345!3d-2.563351338353399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x686cee53fb7fa981%3A0xe07e254d49be784f!2sMonumen%20Mac%20Arthur!5e0!3m2!1sid!2sid!4v1756820237521!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/5X9pVjufxMTwnVtS8",
          "highlights": [
            "Sejarah Perang Dunia II",
            "Pemandangan Danau Sentani",
            "Markas besar pasukan sekutu",
            "Museum kecil di lokasi"
          ]
        },
        {
          "id": "museum-loka-budaya-uncen",
          "name": "Museum Loka Budaya Universitas Cenderawasih",
          "type": "Museum Etnografi",
          "description": "Museum universitas yang memiliki koleksi etnografi terlengkap di Papua, hasil penelitian para akademisi. Koleksinya mencakup artefak dari seluruh wilayah Papua.",
          "address": "Jl. Kampwolker, Waena, Kec. Heram, Kota Jayapura, Papua",
          "phone": "(0967) 572121",
          "openHours": "Senin-Jumat: 08.00-15.00 WIT",
          "rating": 4.7,
          "image": "https://museum.co.id/wp-content/uploads/2020/09/photo1jpg.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.677561754839!2d140.65786577398387!3d-2.610589538505526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x686cf598cdcf080b%3A0x27505ad5e9b0eee!2sMuseum%20Loka%20Budaya%20Universitas%20Cenderawasih!5e0!3m2!1sid!2sid!4v1756820335556!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/mBWCG4CG5z2PUH4s8",
          "highlights": [
            "Koleksi tiang arwah (bisj)",
            "Ukiran dan patung Asmat",
            "Noken aneka suku",
            "Artefak dari Lembah Baliem"
          ]
        },
        {
          "id": "situs-megalitik-tutmari",
          "name": "Situs Megalitik Tutari",
          "type": "Situs Arkeologi",
          "description": "Sebuah situs prasejarah di atas bukit Doyo Lama yang berisi bongkahan-bongkahan batu dengan ukiran purba berupa gambar ikan, penyu, dan manusia.",
          "address": "Doyo Lama, Waibu, Kabupaten Jayapura, Papua",
          "phone": "-",
          "openHours": "Dapat diakses setiap saat",
          "rating": 4.4,
          "image": "https://statik.tempo.co/data/2020/06/14/id_945253/945253_720.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.8113080712837!2d140.4524491739835!3d-2.568075338368456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x686cef7661c6ec6d%3A0xa67e025d6eafe82!2sBUKIT%20TUTARI!5e0!3m2!1sid!2sid!4v1756820434201!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/LrT3P8NFd3bxwH6n9",
          "highlights": [
            "Ukiran batu prasejarah",
            "Pemandangan Danau Sentani",
            "Batu berlukis (Watu Weti)",
            "Tradisi megalitikum Sentani"
          ]
        },
        {
          "id": "lembah-baliem",
          "name": "Lembah Baliem & Desa Adat Suku Dani",
          "type": "Situs Budaya Hidup",
          "description": "Lembah subur yang menjadi tempat tinggal Suku Dani. Pengunjung dapat melihat mumi kuno, rumah adat Honai, dan tradisi bakar batu yang masih dilestarikan.",
          "address": "Lembah Baliem, Kabupaten Jayawijaya, Papua Pegunungan",
          "phone": "-",
          "openHours": "Memerlukan pemandu lokal",
          "rating": 4.8,
          "image": "https://img.inews.co.id/media/600/files/inews_new/2019/05/24/baliem2.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.4425595139796!2d138.86838347399643!3d-3.928704944221853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x683e05004fdf0663%3A0xfd8a119827cb672a!2sFestival%20Budaya%20Lembah%20Baliem!5e0!3m2!1sid!2sid!4v1756820521893!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/HMgycShVia6ZdfaD8",
          "highlights": [
            "Mumi kuno Suku Dani",
            "Rumah adat Honai",
            "Tradisi Bakar Batu",
            "Festival Budaya Lembah Baliem"
          ]
        }
      ]
    },

    {
      "id": "papua-barat",
      "name": "Papua Barat",
      "locations": [
        {
          "id": "museum-mansinam",
          "name": "Museum Peradaban Papua di Pulau Mansinam",
          "type": "Museum Sejarah & Religi",
          "description": "Museum ini terletak di Pulau Mansinam, tempat pertama kali injil masuk ke Tanah Papua. Koleksinya berfokus pada sejarah pekabaran injil dan perkembangan peradaban di Papua.",
          "address": "Pulau Mansinam, Manokwari, Papua Barat",
          "phone": "-",
          "openHours": "Dapat dikunjungi dengan perahu, jam bervariasi",
          "rating": 4.7,
          "image": "https://indonesiakaya.com/wp-content/uploads/2020/10/pulau-mansinam-4.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.335285206286!2d134.08732218885504!3d-0.8915686999999973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d53f52df9efbf29%3A0xbdfa0fb68778181!2sMuseum%20Mansinam!5e0!3m2!1sid!2sid!4v1756821509673!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/TMiommRfMx8L2qP68",
          "highlights": [
            "Sejarah masuknya Injil",
            "Tugu Peringatan Pendaratan Ottow & Geissler",
            "Patung Kristus Raja",
            "Wisata ziarah religi"
          ]
        },
        {
          "id": "situs-purbakala-tapurarang",
          "name": "Situs Purbakala Tapurarang",
          "type": "Situs Arkeologi",
          "description": "Situs prasejarah di Distrik Kokas, Fakfak, yang menampilkan lukisan telapak tangan berwarna merah pada tebing-tebing karst di tepi laut. Dipercaya sebagai peninggalan manusia purba.",
          "address": "Distrik Kokas, Kabupaten Fakfak, Papua Barat",
          "phone": "-",
          "openHours": "Dapat diakses setiap saat dengan perahu",
          "rating": 4.6,
          "image": "https://upload.wikimedia.org/wikipedia/commons/1/17/Situs_Purbakala_Tapurarang_Kokas_di_Distrik_Kokas_Kabupaten_Fakfak%2C_Provinsi_Papua_Barat_Indonesia.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32476072.908745997!2d87.71245376183398!3d-6.4754482607337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x686c583937da5eff%3A0x2f7faf81e28b9d57!2sMonumen%20Tugu%20Pepera!5e0!3m2!1sid!2sid!4v1756821115861!5m2!1sid!2sid",
          "penunjukUrl": "hhttps://maps.app.goo.gl/TMiommRfMx8L2qP68",
          "highlights": [
            "Lukisan cap tangan prasejarah",
            "Pemandangan tebing karst",
            "Disebut juga 'cap tangan berdarah'",
            "Akses melalui laut"
          ]
        },
        {
          "id": "tugu-pepera-sorong",
          "name": "Tugu Peringatan Pepera",
          "type": "Monumen Sejarah",
          "description": "Monumen yang dibangun untuk memperingati Penentuan Pendapat Rakyat (Pepera) tahun 1969, yang menjadi tonggak sejarah bersatunya Papua Barat dengan Indonesia.",
          "address": "Jl. Jenderal Sudirman, Klaligi, Kec. Sorong Manoi, Kota Sorong, Papua Barat Daya",
          "phone": "-",
          "openHours": "Dapat diakses setiap saat",
          "rating": 4.4,
          "image": "https://ik.imagekit.io/goodid/gnfi/uploads/articles/large-goodnewsfromindonesia-gnfi-tugu-pepera-papua-8d64bb5ecb663467ce6bea0879063d17.jpg?tr=w-768,h-576,fo-center",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32476072.908745997!2d87.71245376183398!3d-6.4754482607337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x686c583937da5eff%3A0x2f7faf81e28b9d57!2sMonumen%20Tugu%20Pepera!5e0!3m2!1sid!2sid!4v1756821115861!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/GgqHuGtyZp13TD9H9",
          "highlights": [
            "Sejarah Penentuan Pendapat Rakyat",
            "Simbol integrasi Papua",
            "Landmark Kota Sorong",
            "Lokasi strategis di pusat kota"
          ]
        },
        {
          "id": "masjid-tua-patimburak",
          "name": "Masjid Tua Patimburak",
          "type": "Situs Religi & Sejarah",
          "description": "Salah satu masjid tertua di Papua, dibangun pada abad ke-19. Arsitekturnya sangat unik, memadukan bentuk masjid dengan gaya gereja, sebagai simbol toleransi.",
          "address": "Desa Patimburak, Distrik Kokas, Kabupaten Fakfak, Papua Barat",
          "phone": "-",
          "openHours": "Dapat diakses setiap saat untuk beribadah",
          "rating": 4.8,
          "image": "https://asset-2.tribunnews.com/papuabarat/foto/bank/originals/Masjid-Patumburak.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.314022370621!2d132.42490397398487!3d-2.7227984388814885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d45fd998aac6ed5%3A0x64d15b8f364ab169!2sSitus%20Masjid%20Tua%20Wertuar%20Patimburak!5e0!3m2!1sid!2sid!4v1756821709389!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/sEwyfct617SmPEyMA",
          "highlights": [
            "Masjid tertua di Fakfak",
            "Arsitektur akulturasi budaya",
            "Simbol toleransi beragama",
            "Peninggalan sejarah Islam"
          ]
        },
        {
          "id": "goa-jepang-biak",
          "name": "Monumen Perang Dunia II & Goa Jepang",
          "type": "Situs Sejarah Militer",
          "description": "Goa alami yang dijadikan tempat persembunyian ribuan tentara Jepang saat Perang Dunia II. Kini menjadi monumen untuk mengenang pertempuran sengit antara pasukan Sekutu dan Jepang.",
          "address": "Samofa, Kecamatan Biak Kota, Kabupaten Biak Numfor, Papua",
          "phone": "-",
          "openHours": "Setiap Hari: 08.00-17.00 WIT",
          "rating": 4.5,
          "image": "https://kebudayaan.kemdikbud.go.id/bpnbjayapura/wp-content/uploads/sites/17/2015/04/M2U00801.MPG_snapshot_00.08_2015.04.03_14.06.51.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9539066147827!2d136.15329307397351!3d-1.1926959355289137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x680388eb8447405d%3A0xde8b7bd71953f802!2sMonument%20Perang%20Dunia%20Ke%20II!5e0!3m2!1sid!2sid!4v1756821838224!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/X7pxtDbFUqzNEy4p8",
          "highlights": [
            "Saksi bisu Perang Dunia II",
            "Terowongan bawah tanah",
            "Monumen peringatan perang",
            "Koleksi sisa-sisa persenjataan"
          ]
        }
      ]
    },

    {
      "id": "Papua-Barat-Daya",
      "name": "Papua Barat Daya",
      "locations": [
        {
          "id": "tembok-peringatan-pulau-doom",
          "name": "Tembok Peringatan Perang Dunia II Pulau Doom",
          "type": "Monumen Sejarah",
          "description": "Sebuah tembok bersejarah di Pulau Doom yang berisi tulisan-tulisan tangan tentara sekutu dan Jepang dari era Perang Dunia II. Situs ini menjadi saksi bisu keberadaan tentara asing di Sorong pada masa lampau.",
          "address": "Pulau Doom, Distrik Sorong Kepulauan, Kota Sorong, Papua Barat Daya",
          "phone": "-",
          "openHours": "Dapat diakses setiap saat",
          "rating": 4.5,
          "image": "https://potretmaluku.id/wp-content/uploads/2022/07/ezgif.com-gif-maker-53.webp",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4085085.408782842!2d126.62318498750003!3d-0.8860749999999972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d5eab4b67b528e5%3A0x44d2e89986fe8342!2sPulau%20Doom%20Tanah%20Papua!5e0!3m2!1sid!2sid!4v1756866764523!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/PRMzoqtiP5pKTeZZ6",
          "highlights": [
            "Prasasti tentara PD II",
            "Sejarah Pulau Doom sebagai pusat pemerintahan Belanda",
            "Pemandangan Kota Sorong dari pulau",
            "Jejak peninggalan arsitektur kolonial"
          ]
        },
        {
          "id": "situs-gua-prasejarah-misool",
          "name": "Situs Lukisan Dinding Gua Prasejarah Misool",
          "type": "Situs Arkeologi",
          "description": "Gua-gua di kawasan Misool, Raja Ampat, yang dindingnya dihiasi oleh lukisan cap tangan dan gambar-gambar peninggalan manusia prasejarah. Lukisan ini diperkirakan berusia ribuan tahun dan menjadi bukti peradaban kuno di Raja Ampat.",
          "address": "Kawasan Misool, Kabupaten Raja Ampat, Papua Barat Daya",
          "phone": "-",
          "openHours": "Memerlukan pemandu lokal/tur",
          "rating": 4.8,
          "image": "https://asset.kompas.com/crops/u1v-1Swzw5l2A5mSpUpp5N86Y3s=/0x49:1000x715/1200x800/data/photo/2021/09/24/614d6315c5978.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255205.42936244485!2d130.04874796482403!3d-1.9172246457719073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d42c9ad93601cad%3A0x55c55f538e4c8663!2sPenyebar%20agama%20Islam%20pertama%20di%20pulau%20Misool!5e0!3m2!1sid!2sid!4v1756867076237!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/yDkp9vEvsc7HH3Th9",
          "highlights": [
            "Lukisan cap tangan prasejarah",
            "Gambar ikan dan simbol purba",
            "Berada di tengah gugusan karst yang indah",
            "Bukti jalur migrasi manusia purba"
          ]
        },
        {
          "id": "desa-wisata-arborek",
          "name": "Desa Wisata Arborek",
          "type": "Situs Budaya Hidup",
          "description": "Sebuah desa adat di Raja Ampat yang melestarikan budaya dan kearifan lokal masyarakat Biak. Pengunjung dapat melihat langsung kehidupan sehari-hari, kerajinan tangan Noken dan anyaman daun pandan, serta tarian tradisional.",
          "address": "Pulau Arborek, Meos Mansar, Kabupaten Raja Ampat, Papua Barat Daya",
          "phone": "-",
          "openHours": "Dapat dikunjungi setiap hari",
          "rating": 4.7,
          "image": "https://asset.kompas.com/crops/Jr_m3qCfD04Zyksn7riadiKMteI=/0x0:2048x1365/1200x800/data/photo/2021/11/08/6188f9d05e7e1.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127668.9559029006!2d130.34726950583084!3d-0.5186242976698884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d5e4e80c8caeb63%3A0x939aadb1280a703f!2sArborek%2C%20Meos%20Mansar%2C%20Kabupaten%20Raja%20Ampat%2C%20Papua%20Bar.!5e0!3m2!1sid!2sid!4v1756867199858!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/bRCsSEJpQiUtDLkU6",
          "highlights": [
            "Kerajinan tangan topi Manta",
            "Kehidupan masyarakat lokal",
            "Tarian adat selamat datang",
            "Salah satu pusat konservasi Manta Ray"
          ]
        },
        {
          "id": "kampung-adat-malamooi",
          "name": "Kampung Adat Suku Moi di Malamooi",
          "type": "Situs Budaya Hidup",
          "description": "Sebuah kampung yang didedikasikan untuk melestarikan kebudayaan Suku Moi, salah satu suku asli di wilayah Sorong. Pengunjung dapat melihat rumah adat, mempelajari tradisi, dan berinteraksi langsung dengan masyarakat.",
          "address": "Distrik Malaimsimsa, Kota Sorong, Papua Barat Daya",
          "phone": "-",
          "openHours": "Memerlukan izin atau pendampingan lokal",
          "rating": 4.6,
          "image": "https://images.genpi.co/uploads/news/normal/2019/03/20/fa707a374fbe676b81857bfb930f97d5.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.8260339331446!2d140.54103777398345!3d-2.563351338353399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x686cee53fb7fa981%3A0xe07e254d49be784f!2sMonumen%20Mac%20Arthur!5e0!3m2!1sid!2sid!4v1756820237521!5m2!1sid!2sid4",
          "penunjukUrl": "https://maps.app.goo.gl/D99CyyUU2VaRGwSw7",
          "highlights": [
            "Rumah adat Suku Moi",
            "Tradisi dan tarian lokal",
            "Kerajinan tangan khas",
            "Kearifan lokal tentang alam"
          ]
        },
        {
          "id": "mercusuar-tanjung-kasuari",
          "name": "Mercusuar Peninggalan Belanda Tanjung Kasuari",
          "type": "Bangunan Sejarah",
          "description": "Sebuah mercusuar tua yang dibangun pada masa pemerintahan kolonial Belanda. Bangunan ini tidak hanya berfungsi sebagai penunjuk navigasi laut, tetapi juga menjadi saksi sejarah maritim di pintu masuk perairan Sorong.",
          "address": "Tanjung Kasuari, Distrik Sorong Barat, Kota Sorong, Papua Barat Daya",
          "phone": "-",
          "openHours": "Dapat diakses setiap saat (area luar)",
          "rating": 4.3,
          "image": "https://asset-2.tribunnews.com/belitung/foto/bank/originals/20230106-Mercusuar-Tanjung-Lancur.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31915.275478203424!2d131.20703561083982!3d-0.8202866999999961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d595581fedb13df%3A0xaf710c750e4d97e7!2sPantai%20Tanjung%20Kasuari%2C%20Sorong%2C%20Papua%20Barat!5e0!3m2!1sid!2sid!4v1756867760035!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/WgRvBrgzF7YEmkgCA",
          "highlights": [
            "Arsitektur era kolonial",
            "Pemandangan laut dari atas bukit",
            "Sejarah navigasi dan pelayaran",
            "Dekat dengan Pantai Tanjung Kasuari"
          ]
        }
      ]
    },

    {
      "id": "Papua-Selatan",
      "name": "Papua Selatan",
      "locations": [
        {
          "id": "museum-kebudayaan-asmat",
          "name": "Museum Kebudayaan dan Kemajuan Asmat",
          "type": "Museum Budaya",
          "description": "Sebuah museum yang didedikasikan untuk melestarikan dan memamerkan kekayaan seni ukir dan budaya Suku Asmat. Didirikan oleh misionaris, museum ini memiliki koleksi patung, topeng, perisai, dan artefak Asmat yang sangat berharga.",
          "address": "Jl. Museum, Agats, Kabupaten Asmat, Papua Selatan",
          "phone": "-",
          "openHours": "Senin-Sabtu: 09.00-16.00 WIT (dianjurkan konfirmasi)",
          "rating": 4.8,
          "image": "https://indonesiakaya.com/wp-content/uploads/2020/10/museum_asmat_1200.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.1519858417987!2d138.13230107401571!3d-5.54447025510412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x683a5e395b1bc843%3A0x98eba218eba3216c!2sMuseum%20Kebudayaan%20dan%20Kemajuan%20Asmat!5e0!3m2!1sid!2sid!4v1756868153688!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/P6RVXc7VVsM5prhs9",
          "highlights": [
            "Koleksi ukiran kayu Asmat terlengkap",
            "Tiang arwah (Bisj)",
            "Topeng arwah (Jipai)",
            "Sejarah dan antropologi Suku Asmat"
          ]
        },
        {
          "id": "situs-kamp-tahanan-boven-digoel",
          "name": "Situs Sejarah Kamp Tahanan Boven Digoel",
          "type": "Situs Sejarah",
          "description": "Bekas kamp pengasingan bagi para pejuang kemerdekaan Indonesia pada masa kolonial Belanda. Situs ini meliputi sisa-sisa penjara, rumah sakit, dan pemakaman, menjadi saksi bisu perjuangan tokoh-tokoh bangsa seperti Mohammad Hatta.",
          "address": "Tanah Merah, Kabupaten Boven Digoel, Papua Selatan",
          "phone": "-",
          "openHours": "Dapat diakses setiap saat (dengan pemandu)",
          "rating": 4.7,
          "image": "https://marinews.mahkamahagung.go.id/static/2025/03/05/penjara-boven-digoel-bEObj.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63472.323015425995!2d140.2292111538278!3d-6.127985334659903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x68480d872786c433%3A0xb36db8d75d992066!2sCagar%20Budaya%20Bekas%20Penjara%20Boven%20Digoel!5e0!3m2!1sid!2sid!4v1756868405116!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/SmzeeQrfpLMb59qt5",
          "highlights": [
            "Penjara bawah tanah",
            "Makam Pahlawan",
            "Jejak pengasingan Bung Hatta",
            "Sejarah pergerakan kemerdekaan Indonesia"
          ]
        },
        {
          "id": "monumen-kapsul-waktu-merauke",
          "name": "Monumen Kapsul Waktu Merauke",
          "type": "Monumen Nasional",
          "description": "Sebuah monumen megah dan futuristik yang menyimpan Kapsul Waktu berisi impian anak-anak Indonesia dari Sabang sampai Merauke. Kapsul ini akan dibuka pada tahun 2085. Monumen ini juga menjadi ikon baru kebanggaan Indonesia di ujung timur.",
          "address": "Jl. Poros utama, dekat Bandara Mopah, Merauke, Papua Selatan",
          "phone": "-",
          "openHours": "Dapat diakses setiap saat",
          "rating": 4.8,
          "image": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Monumen_Kapsul_Waktu.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.910626489454!2d140.40927357406215!3d-8.508058586140084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x69b515f49a991fa7%3A0x63ca51db6d66ee84!2sMonumen%20Kapsul%20Waktu!5e0!3m2!1sid!2sid!4v1756868502741!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/DY91WoxY6uAKkBraA",
          "highlights": [
            "Arsitektur modern dan futuristik",
            "Simbol impian bangsa Indonesia",
            "Penyimpanan Kapsul Waktu 2085",
            "Landmark ikonik di Merauke"
          ]
        },
        {
          "id": "tugu-kembaran-sabang-merauke",
          "name": "Tugu Kembaran Sabang-Merauke",
          "type": "Monumen Nasional",
          "description": "Terletak di Distrik Sota, perbatasan RI-Papua Nugini, monumen ini adalah kembaran dari Tugu Nol Kilometer di Sabang. Menjadi simbol persatuan dan penanda geografis titik paling timur wilayah Indonesia.",
          "address": "Distrik Sota, Kabupaten Merauke, Papua Selatan",
          "phone": "-",
          "openHours": "Dapat diakses setiap saat",
          "rating": 4.6,
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Tugu_Kembaran_Sabang_Merauke.jpg/1280px-Tugu_Kembaran_Sabang_Merauke.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.7874156974153!2d140.99579527406064!3d-8.422526985043824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x69b4c811c726b565%3A0x388b9aeda88f783c!2sTugu%20Indonesia!5e0!3m2!1sid!2sid!4v1756868806891!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/rhyAdQozJJCG25y96",
          "highlights": [
            "Titik paling timur Indonesia",
            "Simbol persatuan Sabang-Merauke",
            "Berada di perbatasan negara",
            "Spot foto wajib kenegaraan"
          ]
        },
        {
          "id": "taman-nasional-wasur",
          "name": "Taman Nasional Wasur & Budaya Suku Marind",
          "type": "Situs Budaya Hidup & Alam",
          "description": "Taman Nasional Wasur adalah 'Serengeti'-nya Papua dan merupakan rumah bagi Suku Marind. Pengunjung bisa melihat Musamus (rumah semut raksasa) yang unik dan rumah tinggi tradisional, serta mengenal kearifan lokal Suku Marind dalam menjaga alam.",
          "address": "Kabupaten Merauke, Papua Selatan",
          "phone": "(0971) 325492",
          "openHours": "Memerlukan izin dan pemandu",
          "rating": 4.7,
          "image": "https://witness.tempo.co/source/index.php?image=/1/0/2/8/5/10285.jpg&size=1000&dimension=width&quality=100",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.95175901849!2d140.83110657406374!3d-8.60063038733997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x69b4e631290c67f1%3A0xb755331f65faa39!2sTaman%20Nasional%20Wasur!5e0!3m2!1sid!2sid!4v1756868584773!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/KkBUN2yDZPbVv39L8",
          "highlights": [
            "Musamus (rumah semut raksasa)",
            "Rumah tinggi Suku Marind",
            "Keanekaragaman hayati lahan basah",
            "Interaksi dengan masyarakat adat"
          ]
        }
      ]
    },

    {
      "id": "Papua-Tengah",
      "name": "Papua Tengah",
      "locations": [
        {
          "id": "gedung-eme-neme-yauware",
          "name": "Pusat Budaya Eme Neme Yauware",
          "type": "Pusat Budaya & Museum",
          "description": "Sebagai gedung serbaguna termegah di Timika, Eme Neme Yauware (artinya 'Rumah Kebersamaan') berfungsi sebagai pusat kegiatan budaya. Di dalamnya sering diadakan pameran seni, termasuk pameran Noken, dan menjadi museum hidup bagi kebudayaan Suku Amungme dan Kamoro.",
          "address": "Jl. Budi Utomo, Kwamki, Kec. Mimika Baru, Kabupaten Mimika, Papua Tengah",
          "phone": "-",
          "openHours": "Sesuai jadwal acara (biasanya jam kerja)",
          "rating": 4.7,
          "image": "https://antarpapua.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-14-at-09.26.46.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.259648707766!2d136.88017647400343!3d-4.547229847883602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6823776aa1c561af%3A0xd51d1e7239e2d052!2sGedung%20Eme%20Neme%20Yauware!5e0!3m2!1sid!2sid!4v1756871994372!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/55KhPZvJpCY7Vyd38",
          "highlights": [
            "Arsitektur terinspirasi Honai",
            "Pusat Pameran Budaya Mimika",
            "Galeri Noken Papua",
            "Simbol kebersamaan suku-suku"
          ]
        },
        {
          "id": "pusat-seni-kamoro",
          "name": "Pusat Seni dan Ukiran Suku Kamoro",
          "type": "Galeri Seni & Budaya",
          "description": "Suku Kamoro dikenal dengan seni ukirnya yang luar biasa. Pusat kebudayaan ini didedikasikan untuk melestarikan, mengembangkan, dan memamerkan karya-karya seniman Kamoro, mulai dari patung (mbitoro) hingga perisai (yamate).",
          "address": "Kabupaten Mimika, Papua Tengah (beberapa galeri di sekitar Timika)",
          "phone": "-",
          "openHours": "Bervariasi (memerlukan pengaturan kunjungan)",
          "rating": 4.8,
          "image": "https://assets-a1.kompasiana.com/items/album/2017/07/13/patung-mbotoroi-kamoro-mozes-kilangin-jpg-5967861dde21c755d8076ba2.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.1023211383663!2d136.88506317400376!3d-4.575638748066805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x68237758f862f005%3A0x2c37583c5f5d7b58!2sGaleri%20Seni%20Kamoro!5e0!3m2!1sid!2sid!4v1756872102240!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/DgnQBDpqh1ykhGbM8",
          "highlights": [
            "Ukiran patung arwah (mbitoro)",
            "Topeng dan perisai tradisional",
            "Demonstrasi mengukir oleh seniman lokal",
            "Warisan budaya Suku Kamoro"
          ]
        },
        {
          "id": "monumen-pekabaran-injil-paniai",
          "name": "Monumen Sejarah Pekabaran Injil Enarotali",
          "type": "Monumen Sejarah & Religi",
          "description": "Monumen ini didirikan untuk memperingati masuknya Injil ke wilayah pedalaman Paniai, yang menandai titik balik sejarah dan perubahan sosial-budaya bagi masyarakat Suku Mee dan suku-suku lain di sekitarnya.",
          "address": "Enarotali, Kabupaten Paniai, Papua Tengah",
          "phone": "-",
          "openHours": "Dapat diakses setiap saat",
          "rating": 4.5,
          "image": "https://indonesiakaya.com/wp-content/uploads/2020/10/pulau-mansinam-4.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127613.5864137218!2d136.03139344335943!3d-1.765383200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x68035500283f4fb3%3A0x1b649ea6061f8c0c!2sTUGU%20PEKABARAN%20INJIL!5e0!3m2!1sid!2sid!4v1756872511596!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/oU3KciE9A6oWz8wq9",
          "highlights": [
            "Sejarah masuknya agama Kristen di pegunungan tengah",
            "Perubahan sosial dan budaya",
            "Landmark penting di Enarotali",
            "Pusat kegiatan keagamaan"
          ]
        },

        {
          "id": "danau-paniai",
          "name": "Danau Paniai & Budaya Suku Mee",
          "type": "Situs Budaya Hidup & Alam",
          "description": "Danau Paniai adalah danau indah di pegunungan tengah yang menjadi pusat kehidupan Suku Mee. Danau ini tidak hanya menawarkan pemandangan alam yang memukau, tetapi juga kaya akan cerita rakyat dan tradisi lokal yang masih hidup.",
          "address": "Kabupaten Paniai, Papua Tengah",
          "phone": "-",
          "openHours": "Dapat diakses setiap saat",
          "rating": 4.6,
          "image": "https://statik.tempo.co/data/2016/11/07/id_554055/554055_650.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31844.168695737582!2d136.29662269201174!3d-3.912211331876115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x68221884715c6a27%3A0x3ab182ea3071e7af!2sDanau%20Paniai!5e0!3m2!1sid!2sid!4v1756872645418!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/STZkjXqiJhk2VnYeA",
          "highlights": [
            "Pemandangan danau di dataran tinggi",
            "Kehidupan tradisional Suku Mee",
            "Aktivitas perahu dan memancing lokal",
            "Cerita legenda dan situs-situs keramat"
          ]
        },
        {
          "id": "tambang-grasberg",
          "name": "Situs Sejarah Modern Tambang Grasberg",
          "type": "Situs Sejarah Industri",
          "description": "Meskipun bukan museum tradisional dan aksesnya sangat terbatas, Tambang Grasberg adalah situs sejarah modern paling signifikan di Papua Tengah. Keberadaannya telah mengubah lanskap ekonomi, sosial, dan budaya, terutama bagi Suku Amungme dan Kamoro.",
          "address": "Tembagapura, Kabupaten Mimika, Papua Tengah",
          "phone": "-",
          "openHours": "Tidak terbuka untuk umum (memerlukan izin khusus)",
          "rating": 4.9,
          "image": "https://silo.kompas.id/wp-content/uploads/2019/03/76501258_1552319125.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31838.546761089994!2d137.07647541083983!3d-4.057432299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6822e848a59e5cbf%3A0x4c88967370d74cc6!2sGrasberg%20Copper-Gold%20Mine!5e0!3m2!1sid!2sid!4v1756872752885!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/98j2yqrrjaPd7gg47",
          "highlights": [
            "Salah satu tambang terbuka terbesar di dunia",
            "Sejarah industri pertambangan di Indonesia",
            "Pusat perekonomian Papua Tengah",
            "Kaitan erat dengan sejarah Suku Amungme"
          ]
        }
      ]
    },

    {
      "id": "Papua-Pegunungan",
      "name": "Papua Pegunungan",
      "locations": [
        {
          "id": "lembah-baliem-desa-adat",
          "name": "Lembah Baliem & Desa Adat Suku Dani",
          "type": "Situs Budaya Hidup",
          "description": "Lembah subur yang menjadi rumah bagi Suku Dani, Lani, dan Yali. Pengunjung dapat mengunjungi desa-desa adat seperti Jiwika dan Sumpaima untuk melihat mumi kuno, rumah adat Honai, dan tradisi bakar batu yang masih dilestarikan.",
          "address": "Lembah Baliem, Kabupaten Jayawijaya, Papua Pegunungan",
          "phone": "-",
          "openHours": "Memerlukan pemandu lokal",
          "rating": 4.9,
          "image": "https://cdn.brighton.co.id/Uploads/Images/8156020/UhS4AHQI/Artikel-34.webp",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.4425595139796!2d138.86838347399643!3d-3.928704944221853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x683e05004fdf0663%3A0xfd8a119827cb672a!2sFestival%20Budaya%20Lembah%20Baliem!5e0!3m2!1sid!2sid!4v1756874206580!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/QGQjanr8EF8LnJ3g6",
          "highlights": [
            "Mumi kuno Wimontok Mabel di Jiwika",
            "Rumah adat Honai dan Ebai",
            "Tradisi Bakar Batu",
            "Festival Budaya Lembah Baliem (biasanya bulan Agustus)"
          ]
        },
        {
          "id": "goa-kontilola",
          "name": "Goa Kontilola",
          "type": "Situs Arkeologi & Legenda",
          "description": "Sebuah gua alam yang dihiasi stalaktit dan stalagmit. Keunikannya terletak pada lukisan-lukisan purba di dinding gua yang berbentuk seperti manusia dan hewan, yang oleh masyarakat setempat dipercaya memiliki kaitan dengan makhluk luar angkasa atau roh leluhur.",
          "address": "Dekat Wamena, Kabupaten Jayawijaya, Papua Pegunungan",
          "phone": "-",
          "openHours": "Dapat diakses dengan pemandu lokal",
          "rating": 4.6,
          "image": "https://media.suara.com/pictures/653x366/2019/10/22/95447-gua-kontilola-papua.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.3566844306793!2d138.90012837399664!3d-3.9466630443193607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x683e111de1703c7b%3A0x2cc79afa93314c83!2sWisata%20Alam%20Gua%20Kontilola!5e0!3m2!1sid!2sid!4v1756874339437!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/PDCh7gyv4PKVk8Ud6",
          "highlights": [
            "Lukisan dinding prasejarah",
            "Formasi stalaktit dan stalagmit",
            "Cerita legenda lokal",
            "Pemandangan alam sekitar gua"
          ]
        },
        {
          "id": "pasir-putih-aikima",
          "name": "Pasir Putih Lembah Baliem (Aikima)",
          "type": "Situs Alam & Budaya",
          "description": "Sebuah fenomena alam unik berupa gundukan pasir putih menyerupai bukit di tengah lembah hijau subur. Tempat ini dianggap sakral dan memiliki cerita legenda tersendiri bagi masyarakat lokal, serta menawarkan pemandangan yang kontras dan indah.",
          "address": "Distrik Aikima, Kabupaten Jayawijaya, Papua Pegunungan",
          "phone": "-",
          "openHours": "Dapat diakses setiap saat",
          "rating": 4.5,
          "image": "https://indonesiakaya.com/wp-content/uploads/2020/10/Pasir_putih_lembah_baliem_1200.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.9179957342067!2d138.9485294739977!3d-4.037156944818677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x683e1384f35935b9%3A0xb7451fcd39daf555!2sPasir%20Putih%20Wamena!5e0!3m2!1sid!2sid!4v1756874521090!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/dRqNSM3VaYzYc7Kd9",
          "highlights": [
            "Fenomena geologi unik",
            "Pemandangan kontras pasir putih dan lembah hijau",
            "Nilai sakral dan legenda lokal",
            "Spot fotografi yang menarik"
          ]
        },
        {
          "id": "pasar-jibama-wamena",
          "name": "Pasar Jibama Wamena",
          "type": "Pasar Tradisional & Pusat Budaya",
          "description": "Pasar sentral di Wamena yang menjadi titik pertemuan berbagai suku dari seluruh penjuru pegunungan. Pasar ini adalah museum hidup di mana pengunjung bisa melihat interaksi sosial, aneka hasil bumi, kerajinan tangan, dan kehidupan sehari-hari masyarakat pegunungan.",
          "address": "Jibama, Wamena, Kabupaten Jayawijaya, Papua Pegunungan",
          "phone": "-",
          "openHours": "Setiap Hari: Pagi - Sore",
          "rating": 4.7,
          "image": "https://cdn.antaranews.com/cache/1200x800/2013/08/20130811Pasar-Wamena-Papua-110813-w.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.7593245108264!2d138.937744973998!3d-4.069393344999772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x683e134a0a1daced%3A0x3bb778c3d04a27cf!2sPasar%20Jibama!5e0!3m2!1sid!2sid!4v1756875404941!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/V3EbwiZSGZ7MfQt69",
          "highlights": [
            "Pusat pertemuan suku-suku pegunungan",
            "Melihat Koteka dan pakaian adat",
            "Menjual Noken dan hasil kerajinan",
            "Interaksi budaya yang otentik"
          ]
        },
        {
          "id": "monumen-salib-wamena",
          "name": "Monumen Salib Wamena",
          "type": "Monumen Religi & Sejarah",
          "description": "Sebuah monumen salib raksasa yang berdiri di atas bukit dan menjadi landmark Kota Wamena. Selain sebagai simbol keagamaan yang penting bagi mayoritas penduduk, lokasi ini menawarkan pemandangan terbaik ke seluruh kota Wamena dan Lembah Baliem.",
          "address": "Bukit Sipatnanam, Wamena, Kabupaten Jayawijaya, Papua Pegunungan",
          "phone": "-",
          "openHours": "Dapat diakses setiap saat",
          "rating": 4.6,
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Tugu_Salib_Wamena.jpg/2560px-Tugu_Salib_Wamena.jpg",
          "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.617295363379!2d138.93973727399836!3d-4.098033945162114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x683e6d95d0d92085%3A0x2932df8a1f36ca66!2sPatung%20Salib%20Wamena!5e0!3m2!1sid!2sid!4v1756875480356!5m2!1sid!2sid",
          "penunjukUrl": "https://maps.app.goo.gl/LW5PYxfNAZ6MKaNn6",
          "highlights": [
            "Pemandangan panorama Lembah Baliem",
            "Landmark dan ikon Kota Wamena",
            "Simbol sejarah masuknya agama Kristen",
            "Spot melihat matahari terbenam"
          ]
        }
      ]
    },

  ];


  const currentProvince = provinces.find(prov => prov.id === selectedProvince) || provinces[0];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Lokasi Kebudayaan Indonesia
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Jelajahi museum, situs bersejarah, dan pusat budaya di 38 provinsi Indonesia.
            Temukan lokasi-lokasi yang menyimpan kekayaan warisan budaya Nusantara.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Province List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Pilih Provinsi</h3>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {provinces.map((province) => (
                  <button
                    key={province.id}
                    onClick={() => setSelectedProvince(province.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${selectedProvince === province.id
                      ? 'bg-red-50 text-red-600 border-l-4 border-red-600'
                      : 'hover:bg-gray-50 text-gray-700'
                      }`}
                  >
                    <div className="font-semibold">{province.name}</div>
                    <div className="text-sm text-gray-500">{province.locations.length} lokasi</div>
                  </button>
                ))}
              </div>

            </div>
          </div>

          {/* Locations */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Lokasi Budaya di {currentProvince.name}
              </h2>
              <p className="text-gray-600">
                {currentProvince.locations.length} lokasi kebudayaan ditemukan
              </p>
            </div>

            <div className="space-y-8">
              {currentProvince.locations.map((location) => (
                <div key={location.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="md:flex">
                    {/* Image */}
                    <div className="md:w-1/3">
                      <img
                        src={location.image}
                        alt={location.name}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                          {location.type}
                        </span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="text-sm text-gray-600">{location.rating}/5</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {location.name}
                      </h3>

                      <p className="text-gray-600 leading-relaxed mb-4">
                        {location.description}
                      </p>

                      {/* Highlights */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Koleksi Unggulan:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {location.highlights.map((highlight, index) => (
                            <div key={index} className="bg-green-50 text-green-700 px-2 py-1 rounded text-sm">
                              • {highlight}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Info */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-sm">
                        <div className="flex items-start">
                          <MapPin className="h-4 w-4 text-red-600 mr-2 mt-0.5" />
                          <div>
                            <p className="font-medium text-gray-900">Alamat</p>
                            <p className="text-gray-600">{location.address}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Clock className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                          <div>
                            <p className="font-medium text-gray-900">Jam Buka</p>
                            <p className="text-gray-600">{location.openHours}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Phone className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                          <div>
                            <p className="font-medium text-gray-900">Telepon</p>
                            <p className="text-gray-600">{location.phone}</p>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href={location.penunjukUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
                        >
                          <Navigation className="h-4 w-4 mr-2" />
                          Petunjuk Arah
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Map */}
                  <div className="h-64 w-full">
                    <iframe
                      src={location.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Peta ${location.name}`}
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
          <MapPin className="h-12 w-12 text-green-600 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Jelajahi Seluruh Indonesia
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Kami terus menambahkan lokasi-lokasi budaya dari seluruh Indonesia.
            Temukan museum, situs bersejarah, dan pusat budaya di 38 provinsi.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bol">
                <GradientText
                  colors={["#eab308", "#dc2626 ", "#7f1d1d "]}
                  animationSpeed={3}
                  showBorder={false}
                  className="custom-class"
                >
                  <CountUp
                    from={0}
                    to={38}
                    separator=","
                    direction="up"
                    duration={2}
                    className="count-up-text"
                  />+
                </GradientText>
              </div>
              <div className="text-sm text-gray-600">Provinsi</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">
                <GradientText
                  colors={["#eab308", "#dc2626 ", "#7f1d1d "]}
                  animationSpeed={3}
                  showBorder={false}
                  className="custom-class"
                >
                  <CountUp
                    from={0}
                    to={200}
                    separator=","
                    direction="up"
                    duration={2}
                    className="count-up-text"
                  />+
                </GradientText>
              </div>
              <div className="text-sm text-gray-600">Museum</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">
                <GradientText
                  colors={["#eab308", "#dc2626 ", "#7f1d1d "]}
                  animationSpeed={3}
                  showBorder={false}
                  className="custom-class"
                >
                  <CountUp
                    from={0}
                    to={150}
                    separator=","
                    direction="up"
                    duration={2}
                    className="count-up-text"
                  />+
                </GradientText>
              </div>
              <div className="text-sm text-gray-600">Situs Bersejarah</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">
                <GradientText
                  colors={["#eab308", "#dc2626 ", "#7f1d1d "]}
                  animationSpeed={3}
                  showBorder={false}
                  className="custom-class"
                >
                  <CountUp
                    from={0}
                    to={100}
                    separator=","
                    direction="up"
                    duration={2}
                    className="count-up-text"
                  />+
                </GradientText>
              </div>
              <div className="text-sm text-gray-600">Pusat Budaya</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LokasiKebudayaan;