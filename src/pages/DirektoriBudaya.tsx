import React, { useState } from 'react';
import { Search, MapPin, Clock, Users } from 'lucide-react';
import GradientText from '../items/GradientText';



const DirektoriBudaya = () => {
  const [activeTab, setActiveTab] = useState('pakaian-adat');
  const [searchTerm, setSearchTerm] = useState('');

  const tabs = [
    { id: 'pakaian-adat', label: 'Pakaian Adat' },
    { id: 'seni-pertunjukan', label: 'Seni Pertunjukan' },
    { id: 'kuliner', label: 'Kuliner Khas' }
  ];

  const pakaianAdat = [
    {
      "name": "Ulee Balang",
      "province": "Aceh",
      "image": "https://ik.imagekit.io/goodid/gnfi/uploads/articles/large-d4zklyywsaeirm8-1bfe38be58518ad2523736e2b02ae9ee.jpg?tr=w-768,h-576,fo-center",
      "description": "Pakaian adat untuk bangsawan dan upacara penting. Pria (Linto Baro) mengenakan jas meukeutop dengan celana cekak musang. Wanita (Daro Baro) memakai baju kurung dengan hiasan kepala dan perhiasan.",
      "philosophy": "Melambangkan kebesaran, kewibawaan, dan kepemimpinan yang Islami serta menjunjung tinggi nilai-nilai adat dan budaya."
    },
    {
      "name": "Ulos",
      "province": "Sumatera Utara",
      "image": "https://down-id.img.susercontent.com/file/sg-11134201-22120-97czhfzimmkv1d",
      "description": "Kain tenun khas Batak yang sering digunakan sebagai selendang, sarung, atau ikat kepala dalam berbagai upacara adat seperti pernikahan, kelahiran, dan duka cita.",
      "philosophy": "Simbol restu, kasih sayang, dan pemersatu dalam kehidupan masyarakat Batak. Setiap motif ulos memiliki makna dan fungsi yang berbeda-beda."
    },
    {
      "name": "Bundo Kanduang",
      "province": "Sumatera Barat",
      "image": "https://cdn.antaranews.com/cache/1200x800/2018/01/baju_adat_pasaman.jpg",
      "description": "Pakaian adat Minangkabau yang dikenakan oleh perempuan, terdiri dari baju kurung, kain selempang (salempang), dan penutup kepala (tingkuluak tanduak).",
      "philosophy": "Melambangkan peran penting perempuan sebagai 'ibu' dalam masyarakat Minangkabau yang matrilineal, serta simbol kebijaksanaan, kelembutan, dan kekuatan."
    },
    {
      "name": "Teluk Belanga dan Kebaya Laboh",
      "province": "Riau Dan Kepulauan Riau",
      "image": "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1571565096/swbr5vkodo4xq16mghqh.jpg",
      "description": "Pria mengenakan Baju Teluk Belanga (baju kurung leher cekak musang) dengan celana panjang dan kain samping. Wanita memakai Kebaya Laboh yang longgar dan dipadukan dengan kain batik.",
      "philosophy": "Mencerminkan nilai-nilai kesopanan, kelembutan, dan keislaman dalam budaya Melayu."
    },

    {
      "name": "Baju Kurung Tanggung",
      "province": "Jambi",
      "image": "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1628589659/kt9thu9kz8a66t5bhoq6.jpg",
      "description": "Baju kurung dengan lengan yang 'tanggung' atau tidak terlalu panjang, biasanya terbuat dari beludru dan dihiasi dengan sulaman benang emas.",
      "philosophy": "Ukuran lengan yang tanggung melambangkan ketangkasan dan kecepatan dalam bekerja. Hiasan emas mencerminkan kekayaan budaya dan alam Jambi."
    },
    {
      "name": "Aesan Gede",
      "province": "Sumatera Selatan",
      "image": "https://image.idntimes.com/post/20250525/1000185590-679b8fb0461ad11c7448d145cee7fdab-48dab222b21ae963ce0d9213432d0dfb.jpg",
      "description": "Pakaian pengantin yang mewah dan megah, didominasi warna merah dan emas. Terinspirasi dari zaman Kerajaan Sriwijaya.",
      "philosophy": "Melambangkan keagungan, kemewahan, dan kejayaan Kerajaan Sriwijaya di masa lampau."
    },
    {
      "name": "Paksian",
      "province": "Bangka Belitung",
      "image": "https://imgsrv2.voi.id/UH-hg8z0D3cU7E_ai1pTliHK7nN4jLcJkQHErbcPl0Q/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8zNDk2My8yMDIxMDIyMzE0MjItbWFpbi5qcGc.jpg",
      "description": "Pakaian pengantin yang mendapat pengaruh dari budaya Tionghoa dan Melayu. Wanita mengenakan baju kurung merah dengan mahkota 'paksian'.",
      "philosophy": "Mencerminkan akulturasi budaya antara masyarakat Melayu dan Tionghoa yang hidup harmonis di Bangka Belitung."
    },
    {
      "name": "Rejang Lebong",
      "province": "Bengkulu",
      "image": "https://www.garudacitizen.com/wp-content/uploads/2025/02/Pakaian-Adat-Bengkulu.webp",
      "description": "Pakaian adat yang terbuat dari kain beludru dengan sulaman benang emas, biasanya berwarna merah tua, hitam, atau biru tua.",
      "philosophy": "Melambangkan keagungan dan status sosial pemakainya."
    },
    {
      "name": "Tulang Bawang",
      "province": "Lampung",
      "image": "https://seringjalan.com/wp-content/uploads/2020/05/INILAH-PAKAIAN-ADAT-TRADISIONAL-TULANG-BAWANG-reportersatu-com.jpg",
      "description": "Pakaian adat yang didominasi oleh kain tapis, kain tenun tradisional Lampung yang disulam dengan benang emas.",
      "philosophy": "Motif pada kain tapis memiliki makna filosofis yang mendalam, berkaitan dengan kehidupan, alam, dan keyakinan masyarakat Lampung."
    },
    {
      "name": "Kebaya Encim & Sadariah",
      "province": "DKI Jakarta",
      "image": "https://cdn.antaranews.com/cache/1200x800/2020/06/23/Screen-Shot-2020-06-23-at-15.00.37.png",
      "description": "Wanita mengenakan Kebaya Encim yang dipengaruhi budaya Tionghoa. Pria mengenakan Baju Sadariah (baju koko) dengan celana batik dan peci.",
      "philosophy": "Mencerminkan perpaduan berbagai budaya (Betawi, Tionghoa, Arab, dan Eropa) yang membentuk masyarakat Jakarta."
    },
    {
      "name": "Pangsi",
      "province": "Banten",
      "image": "https://blog.knitto.co.id/wp-content/uploads/2024/03/Baju-Pangsi-Sunda.jpg",
      "description": "Pakaian sederhana berwarna hitam yang terdiri dari baju kemeja longgar dan celana longgar. Sering digunakan oleh para jawara dan masyarakat Baduy.",
      "philosophy": "Melambangkan kesederhanaan, kekuatan, dan kesetaraan."
    },
    {
      "name": "Kebaya Sunda",
      "province": "Jawa Barat",
      "image": "https://lh7-us.googleusercontent.com/YGKXpJw8ECutD14OSAwR6pEycSV0ApBCNt89Ro8hc3v0Dpn4LxT0tcMieVkiUG8ULzK5i3IJcv-uS3FQ__fo0dqi9OvTWG85vukG3LuQ5eTogpLfuCWS8F_wyzdYubnKSWgMCNVBsB-9x2iChVA79DA",
      "description": "Kebaya dengan desain yang lebih sederhana dan elegan, seringkali berwarna cerah dan dipadukan dengan kain batik atau samping.",
      "philosophy": "Mencerminkan kesederhanaan, keanggunan, dan kedekatan dengan alam."
    },
    {
      "name": "Kebaya Jawa",
      "province": "Jawa Tengah",
      "image": "https://images.tokopedia.net/img/cache/700/aphluv/1997/1/1/f0d63d5d8f2746a8a8dbfdf5d127513e~.jpeg",
      "description": "Pakaian tradisional yang melambangkan keanggunan dan kesopanan wanita Jawa. Terdiri dari atasan kebaya dan bawahan kain jarik batik.",
      "philosophy": "Melambangkan kehalusan budi pekerti, kesabaran, dan kesederhanaan."
    },
    {
      "name": "Kesatrian Ageng",
      "province": "DI Yogyakarta",
      "image": "https://image.idntimes.com/post/20220906/pakaian-adat-daerah-istimewa-yogyakarta-kesatrian-ageng-a55e57e8ee407309ab0d8bd4ee604afe.jpg",
      "description": "Pakaian adat pria yang terdiri dari surjan (jas lurik), kain batik, dan blangkon. Wanita mengenakan kebaya.",
      "philosophy": "Motif lurik pada surjan melambangkan kesederhanaan dan pengabdian. Pakaian ini mencerminkan nilai-nilai luhur budaya keraton Yogyakarta."
    },
    {
      "name": "Pesa'an",
      "province": "Jawa Timur",
      "image": "https://image.idntimes.com/post/20250219/pesaan-2-waifu2x-photo-noise1-scale-9f072185880fe018f1be4c31590c8ebf-0a07ddae7c0b01eae0386c3ec99ea75d.png",
      "description": "Pakaian adat Madura yang terdiri dari baju hitam longgar, kaos bergaris merah putih, dan celana longgar. Dilengkapi dengan ikat kepala (odheng).",
      "philosophy": "Melambangkan keberanian, ketegasan, dan semangat kerja keras masyarakat Madura."
    },
    {
      "name": "Payas Agung",
      "province": "Bali",
      "image": "https://vncojewellery.com/artikel/wp-content/uploads/2023/12/Kha-Bali-Wedding-4.jpg",
      "description": "Pakaian adat pengantin Bali yang sangat mewah dan penuh hiasan. Didominasi warna-warna cerah dan aksesoris berwarna emas.",
      "philosophy": "Menunjukkan penghormatan kepada Tuhan dan leluhur, serta simbol keagungan dan kemewahan."
    },
    {
      "name": "Lambung",
      "province": "Nusa Tenggara Barat",
      "image": "https://images.genpi.co/resize/1280x860-100/uploads/ntb/arsip/normal/2022/02/03/pakaian-adat-lambung-foto-pariwisataindonesiaid-6f8p.webp",
      "description": "Pakaian adat wanita Suku Sasak berupa baju hitam tanpa lengan dengan kerah berbentuk 'V' dan dihiasi manik-manik.",
      "philosophy": "Melambangkan kesopanan, kesederhanaan, dan ketaatan pada adat istiadat."
    },
    {
      "name": "Pakaian Adat Suku Sabu",
      "province": "Nusa Tenggara Timur",
      "image": "https://indonesiajuara.asia/wp-content/uploads/2023/02/Pakaian-Adat-Suku-Sabu.webp",
      "description": "Pria mengenakan kemeja putih, selendang, dan ikat kepala. Wanita mengenakan kebaya dan kain tenun.",
      "philosophy": "Motif pada kain tenun melambangkan status sosial dan memiliki nilai-nilai spiritual."
    },
    {
      "name": "King Baba & King Bibinge",
      "province": "Kalimantan Barat",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh7P3p3NhrHgV-jUuvt5auj0oD_Egyxcs3Wg&s",
      "description": "Pakaian adat Suku Dayak. King Baba (pria) dan King Bibinge (wanita) terbuat dari kulit kayu dan dihiasi manik-manik serta bulu burung enggang.",
      "philosophy": "Melambangkan kedekatan dengan alam dan roh leluhur, serta keberanian dan kekuatan."
    },
    {
      "name": "Sangkarut",
      "province": "Kalimantan Tengah",
      "image": "https://hypeabis.id/assets/photo/202112051925510000001638688071233.jpg",
      "description": "Baju perang Suku Dayak Ngaju yang terbuat dari kulit kayu atau serat nanas dan dihiasi dengan kerang, manik-manik, dan taring binatang.",
      "philosophy": "Simbol keberanian, kekuatan magis, dan perlindungan dari roh-roh jahat."
    },
    {
      "name": "Babaju Kun Galung Pacinan",
      "province": "Kalimantan Selatan",
      "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixHNHIP6VD-Ay11PhBLFz4IqROqUHfI9rXQExqo74jplG6-sJWa89-TP41RReW0EoPl6pC14PpQxZsU6xzpXAPWRmRMb7metT2ZHGuLeRrWRR7yi-9sMIdsdghSVqeghRF8OmEoTGifEg/w1280-h720-p-k-no-nu/banjar.JPG",
      "description": "Pakaian pengantin Banjar yang mendapat pengaruh budaya Tionghoa dan Timur Tengah. Didominasi warna kuning dan hijau dengan hiasan payet dan manik-manik.",
      "philosophy": "Mencerminkan akulturasi budaya dan nilai-nilai keagamaan."
    },
    {
      "name": "Kustin",
      "province": "Kalimantan Timur",
      "image": "https://pict.sindonews.net/dyn/850/pena/news/2024/08/17/186/1437445/ini-makna-filosofi-baju-adat-kustin-yang-dikenakan-jokowi-di-upacara-hut-ke79-ri-ipo.jpg",
      "description": "Pakaian kebesaran Suku Kutai yang terbuat dari bahan beludru hitam dengan sulaman benang emas.",
      "philosophy": "Melambangkan keagungan, kemewahan, dan status sosial bangsawan Kerajaan Kutai."
    },
    {
      "name": "Ta'a & Sapei Sapaq",
      "province": "Kalimantan Utara",
      "image": "https://genpi.id/wp-content/uploads/2021/07/Pakaian-Adat-Taa-instagram.com-pesonadayakhitz-1.jpg",
      "description": "Pakaian adat Suku Dayak Kenyah. Wanita mengenakan Ta'a (rok dan atasan) dan pria mengenakan Sapei Sapaq (cawat dan rompi). Dihiasi manik-manik dengan motif khas.",
      "philosophy": "Motif manik-manik memiliki makna spiritual dan sosial, seperti status, asal usul, dan penolak bala."
    },
    {
      "name": "Laku Tepu",
      "province": "Sulawesi Utara",
      "image": "https://pariwisataindonesia.id/wp-content/uploads/2020/11/baju-adat-laku-tepu-foto-by-pariwisatasulawesiutaracom.jpg",
      "description": "Pakaian adat dari Sangihe Talaud yang terbuat dari serat kofo (pisang abaka) dengan lengan panjang dan leher yang agak sempit.",
      "philosophy": "Melambangkan kesederhanaan dan kerendahan hati."
    },
    {
      "name": "Biliu & Makuta",
      "province": "Gorontalo",
      "image": "https://img.antarafoto.com/cache/900x1200/2015/06/08/pakaian-adat-gorontalo-axr5-dom.jpg",
      "description": "Pakaian pengantin. Wanita (Biliu) mengenakan baju kurung dengan hiasan kepala dan aksesoris. Pria (Makuta) mengenakan atasan tertutup, celana panjang, dan penutup kepala.",
      "philosophy": "Setiap warna dan aksesoris memiliki makna, seperti kesetiaan, keberanian, dan tanggung jawab."
    },
    {
      "name": "Baju Nggembe",
      "province": "Sulawesi Tengah",
      "image": "https://www.celebes.co/wp-content/uploads/2021/02/Keunikan-yang-Dimiliki-Baju-Adat-Kaili.webp",
      "description": "Baju adat Suku Kaili yang berbentuk segi empat dengan lubang leher di tengah dan lengan yang tidak terlalu panjang. Biasanya berwarna cerah.",
      "philosophy": "Melambangkan kegembiraan dan keterbukaan masyarakat Kaili."
    },
    {
      "name": "Pattuqduq Towaine",
      "province": "Sulawesi Barat",
      "image": "https://cdn1.katadata.co.id/media/images/2024/08/20/Baju_Pattuqduq_Towaine-2024_08_20-17_28_11_919df37bb6c38e0b62745d438b5a9289.jpg",
      "description": "Pakaian adat wanita Mandar yang terdiri dari baju kurung, sarung sutra (lipa' sa'be), dan berbagai aksesoris.",
      "philosophy": "Mencerminkan keanggunan, ketekunan, dan keterampilan wanita Mandar."
    },
    {
      "name": "Baju Bodo",
      "province": "Sulawesi Selatan",
      "image": "https://asset.kompas.com/crops/AmD6p3IH3KuRvG__AMz6x612HxE=/51x58:537x382/750x500/data/photo/2021/02/24/60364762c1b65.jpg",
      "description": "Salah satu pakaian adat tertua di dunia, berbentuk segi empat dan longgar. Warna baju menunjukkan usia dan status sosial pemakainya.",
      "philosophy": "Setiap warna memiliki makna: jingga untuk anak-anak, merah untuk gadis, dan hijau untuk bangsawan."
    },
    {
      "name": "Babu Nggawi",
      "province": "Sulawesi Tenggara",
      "image": "https://awsimages.detik.net.id/community/media/visual/2022/08/17/jokowi-dan-iriana-saat-upacara-hut-ke-77-ri-1_169.jpeg?w=650",
      "description": "Pakaian adat Suku Tolaki yang terbuat dari kulit kayu atau kain dengan hiasan manik-manik dan aksesoris keemasan.",
      "philosophy": "Warna pakaian melambangkan status sosial: hitam dan putih untuk bangsawan, warna lain untuk masyarakat biasa."
    },
    {
      "name": "Cele",
      "province": "Maluku",
      "image": "https://static.cdntap.com/tap-assets-prod/wp-content/uploads/sites/24/2021/11/baju-cele-2-sewa-ajah.jpg",
      "description": "Kain kebaya yang dipadukan dengan sarung tenun. Ciri khasnya adalah motif garis-garis geometris atau kotak-kotak kecil.",
      "philosophy": "Melambangkan keceriaan dan semangat persatuan."
    },
    {
      "name": "Manteren Lamo",
      "province": "Maluku Utara",
      "image": "https://superapp.id/blog/wp-content/uploads/2022/04/1.-The-Asian-Parent.webp",
      "description": "Pakaian kebesaran sultan Ternate dan Tidore, berupa jubah panjang yang dihiasi dengan benang emas dan perak.",
      "philosophy": "Simbol kepemimpinan, kebijaksanaan, dan kebesaran Kesultanan di Maluku Utara."
    },
    {
      "name": "Ewer",
      "province": "Papua Barat",
      "image": "https://cdn.rri.co.id/berita/Bengkalis/o/1716183513711-baju_adat_papua/f7g35dbmlubsoy9.jpeg",
      "description": "Pakaian adat yang terbuat dari serat alam seperti jerami atau daun sagu. Saat ini sering dipadukan dengan atasan kain.",
      "philosophy": "Mencerminkan kedekatan dan keharmonisan masyarakat dengan alam."
    },
    {
      "name": "Pakaian Adat Suku Dani (Holim/Koteka)",
      "province": "Papua Pegunungan",
      "image": "https://pariwisataindonesia.id/wp-content/uploads/2020/07/Koteka-dan-sali-e1593638719677.jpg",
      "description": "Pria mengenakan koteka (penutup kemaluan dari labu air kering). Wanita mengenakan rok dari serat rumput atau daun sagu.",
      "philosophy": "Bentuk dan ukuran koteka dapat melambangkan status sosial, keberanian, dan tingkat kedewasaan."
    },
    {
      "name": "Pakaian Adat Suku Mee (Koteka)",
      "province": "Papua Tengah",
      "image": "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfaD0Gix02J4oRhJ5_X1j-f-5qVFQ5egW2aCjrjijtGdTCYT6RuK4350gUyt6sQ2-C_OFyOgHSrf3WmqR0veIu3eeOTd_Q8XQZNSo5b45JKLWa93G5JN2jRGvMk1vEIxDC5z6VRp-yKhPzWacXeFUS67OlY?key=-JbjMc-c07aHYvX-bsVv-Q",
      "description": "Pria mengenakan koteka, sementara wanita menggunakan rok rumbai. Dilengkapi dengan berbagai hiasan seperti noken, taring babi, dan bulu kasuari.",
      "philosophy": "Melambangkan identitas suku, kedewasaan, dan status dalam komunitas."
    },
    {
      "name": "Pakaian Adat Suku Asmat",
      "province": "Papua Selatan",
      "image": "https://cdn.antaranews.com/cache/1200x800/2022/08/15/antarafoto-hut-ri-agats-150822-as-6.jpg",
      "description": "Terdiri dari rok rumbai yang terbuat dari daun sagu kering, serta berbagai hiasan tubuh seperti lukisan tubuh (body painting) dengan pewarna alami.",
      "philosophy": "Setiap hiasan dan lukisan tubuh memiliki makna spiritual, berhubungan dengan roh nenek moyang dan alam sekitar."
    },
    {
      "name": "Boe & Kuli Bia",
      "province": "Papua Barat Daya",
      "image": "https://asset-2.tstatic.net/manado/foto/bank/images/Pakaian-adat-tradisional-Papua.jpg",
      "description": "Pakaian adat yang terbuat dari kulit kayu (boe) atau kulit kerang (kuli bia). Dilengkapi dengan hiasan kepala dari bulu kasuari dan manik-manik.",
      "philosophy": "Mencerminkan pemanfaatan sumber daya alam dan kedekatan dengan lingkungan laut dan darat."
    },
    {
      "name": "Koteka/Holim",
      "province": "Papua",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLG8DtZCf3bbGrIlQ538f9zXYVUC0d4ijpjw&s",
      "description": "Pakaian tradisional pria untuk menutupi kemaluan, terbuat dari kulit labu air yang dikeringkan. Wanita mengenakan rok rumbai dari daun sagu.",
      "philosophy": "Melambangkan kedewasaan, status sosial, dan identitas suku pemakainya."
    }
  ];

  const seniPertunjukan = [
    {
      "name": "Tari Saman",
      "province": "Aceh",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuYv3OHtXSSS3tqSvBG2CRebU-ILGxRBsjrA&s",
      "description": "Tarian suku Gayo yang menampilkan kekompakan gerakan tangan dan diiringi syair.",
      "origin": "Dikembangkan oleh Syekh Saman, seorang ulama dari Gayo, Aceh Tenggara, sebagai media dakwah. Awalnya merupakan permainan rakyat yang disebut 'pok one'."
    },
    {
      "name": "Tari Tortor",
      "province": "Sumatera Utara",
      "image": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Tor-Tor_Pose.jpg",
      "description": "Tarian persembahan dan ritual adat Batak yang diiringi musik gondang.",
      "origin": "Telah ada sejak zaman purba dan awalnya merupakan bagian dari ritual sakral masyarakat Batak yang dipengaruhi oleh roh leluhur."
    },
    {
      "name": "Tari Piring",
      "province": "Sumatera Barat",
      "image": "https://asset.kompas.com/crops/SQ9F33noGOkAW7rPY2Zy1sAzi5c=/0x0:750x500/1200x800/data/photo/2022/02/05/61fe2cfd8d1cd.jpg",
      "description": "Tarian yang menampilkan atraksi menggunakan piring sebagai properti utama.",
      "origin": "Berasal dari Solok, Sumatera Barat, dan pada awalnya merupakan ritual ucapan syukur masyarakat kepada dewa-dewa atas hasil panen yang melimpah."
    },
    {
      "name": "Tari Zapin",
      "province": "Riau",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZjTxqAJoSPDJhsdS7di5wsYLl26BsIvL3gg&s",
      "description": "Tarian Melayu yang kental dengan pengaruh budaya Arab dan Islam.",
      "origin": "Berasal dari Yaman dan dibawa oleh para pedagang Arab pada awal abad ke-16 ke Riau, kemudian berkembang dengan pengaruh budaya Melayu."
    },
    {
      "name": "Tari Melemang",
      "province": "Kepulauan Riau",
      "image": "https://melayupedia.com/foto_berita/2021/07/2021-07-03-tari-melemang-pentas-kesenian-bagi-keluarga-kerajaan-di-kepri.jpg",
      "description": "Tarian istana yang menceritakan tentang kebesaran dan kemegahan kerajaan.",
      "origin": "Berasal dari Kerajaan Bentan (sekitar abad ke-12) dan ditarikan oleh dayang-dayang istana untuk menghibur raja."
    },
    {
      "name": "Tari Sekapur Sirih",
      "province": "Jambi",
      "image": "https://awsimages.detik.net.id/community/media/visual/2024/01/16/tari-sekapur-sirih_169.jpeg?w=1200",
      "description": "Tarian penyambutan tamu agung dengan menyuguhkan sirih.",
      "origin": "Diciptakan oleh Firdaus Chatab pada tahun 1962 dan ditata ulang oleh O.K. Hendrik untuk menyambut tamu-tamu kehormatan di Jambi."
    },
    {
      "name": "Tari Andun",
      "province": "Bengkulu",
      "image": "https://i0.wp.com/nidianews.com/wp-content/uploads/2024/11/tari-andun.jpg?fit=700%2C437&ssl=1",
      "description": "Tarian rakyat yang dibawakan saat pesta panen sebagai ungkapan rasa syukur.",
      "origin": "Merupakan tarian adat masyarakat Serawai di Bengkulu Selatan yang sudah ada sejak dahulu kala dan digunakan sebagai sarana mencari jodoh."
    },
    {
      "name": "Tari Gending Sriwijaya",
      "province": "Sumatera Selatan",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIJkWCyZK5A1Z9QLsoSwqfgrmNdJaI8UpJMA&s",
      "description": "Tarian kolosal yang menceritakan keagungan Kerajaan Sriwijaya.",
      "origin": "Diciptakan pada tahun 1943-1944 atas permintaan pemerintah Jepang untuk menyambut tamu di Palembang."
    },
    {
      "name": "Tari Campak",
      "province": "Kepulauan Bangka Belitung",
      "image": "https://www.wisatabelitung.net/wp-content/uploads/2024/05/tarian-daerah-kepulauan-bangka-belitung-930x620.jpg",
      "description": "Tarian pergaulan muda-mudi yang ceria dan dinamis.",
      "origin": "Berkembang pada masa pendudukan Portugis di Bangka Belitung, terlihat dari musik akordeon dan kostum penari yang bergaya Eropa."
    },
    {
      "name": "Tari Melinting",
      "province": "Lampung",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWroCQXFmfa3YrEFm4hP_UEh2UTNOJ8PEIJw&s",
      "description": "Tarian adat yang sakral dan hanya ditampilkan oleh keturunan bangsawan.",
      "origin": "Berasal dari Keratuan Melinting di Lampung Timur dan diciptakan oleh Ratu Melinting pada abad ke-16."
    },
    {
      "name": "Debus",
      "province": "Banten",
      "image": "https://alfikr.id/cdn/content/2023/01/22/1ff2d724bd66843d21779aa246fd5ec2.jpg",
      "description": "Seni pertunjukan yang menampilkan kekebalan tubuh terhadap benda tajam.",
      "origin": "Muncul pada abad ke-16 pada masa pemerintahan Sultan Maulana Hasanuddin sebagai sarana penyebaran agama Islam dan membangkitkan semangat melawan penjajah."
    },
    {
      "name": "Ondel-ondel",
      "province": "DKI Jakarta",
      "image": "https://1001indonesia.net/asset/2016/05/Ondel-ondel.jpg",
      "description": "Pertunjukan boneka raksasa khas Betawi yang biasanya ditampilkan berpasangan.",
      "origin": "Dipercaya sudah ada sejak zaman nenek moyang dan berfungsi sebagai penolak bala atau pelindung dari roh-roh jahat."
    },
    {
      "name": "Jaipongan",
      "province": "Jawa Barat",
      "image": "https://upload.wikimedia.org/wikipedia/commons/9/98/Jaipong.jpg",
      "description": "Tarian pergaulan yang enerjik dan dinamis dengan iringan musik kendang yang khas.",
      "origin": "Diciptakan oleh H. Suanda dan Gugum Gumbira sekitar tahun 1976 di Karawang, merupakan pengembangan dari seni tradisi Ketuk Tilu."
    },
    {
      "name": "Tari Gambyong",
      "province": "Jawa Tengah",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/15/Gambyong_Langenkusuma_Pj_DSC_1322.JPG",
      "description": "Tarian penyambutan tamu dengan gerakan yang lemah gemulai.",
      "origin": "Awalnya merupakan tarian rakyat untuk upacara ritual pertanian, kemudian dikembangkan di lingkungan Keraton Surakarta oleh S.N. Pradatmadja."
    },
    {
      "name": "Tari Bedhaya",
      "province": "DI Yogyakarta",
      "image": "https://pariwisataindonesia.id/wp-content/uploads/2020/10/Tari-Bedhaya-foto-by-3.bp_.blogspot.com_.jpg",
      "description": "Tarian istana yang sakral dengan gerakan yang anggun dan meditatif.",
      "origin": "Diciptakan oleh Sultan Agung dari Mataram, terinspirasi dari mimpinya bertemu dengan Kanjeng Ratu Kidul."
    },
    {
      "name": "Reog Ponorogo",
      "province": "Jawa Timur",
      "image": "https://www.situsjatim.com/webmin/images/posts/1/2024/2024-09-02/31a0834cc84e676f0972cffe5d36df16_1.jpg",
      "description": "Pertunjukan seni tradisional dengan topeng singa raksasa yang megah.",
      "origin": "Memiliki beberapa versi cerita, salah satu yang terkenal adalah kisah Ki Ageng Kutu yang menciptakan Reog sebagai sindiran kepada Raja Kertabhumi."
    },
    {
      "name": "Tari Kecak",
      "province": "Bali",
      "image": "https://blog.inivie.com/wp-content/uploads/2025/04/tari-kecak-uluwatu.jpg",
      "description": "Drama tari yang mengisahkan Ramayana dengan iringan paduan suara 'cak-cak'.",
      "origin": "Diciptakan pada tahun 1930-an oleh I Wayan Limbak dan pelukis Jerman Walter Spies, diadaptasi dari ritual Sanghyang."
    },
    {
      "name": "Tari Gandrung",
      "province": "Nusa Tenggara Barat",
      "image": "https://apimice.kemenparekraf.go.id/event-daerah/public/676/813/539/67681353902fa182774471.webp",
      "description": "Tarian pergaulan yang dibawakan oleh penari wanita dengan mengajak penonton untuk menari bersama.",
      "origin": "Awalnya merupakan tarian ritual sebagai ungkapan rasa syukur atas panen yang melimpah, dipengaruhi oleh budaya Hindu-Buddha."
    },
    {
      "name": "Tari Caci",
      "province": "Nusa Tenggara Timur",
      "image": "https://upload.wikimedia.org/wikipedia/commons/7/70/Caci_Dance.jpg",
      "description": "Tarian perang yang merupakan pertarungan antara dua orang laki-laki menggunakan cambuk dan perisai.",
      "origin": "Merupakan tradisi masyarakat Manggarai sebagai ajang pembuktian keberanian dan ketangkasan para pria, sering ditampilkan saat syukuran musim panen."
    },
    {
      "name": "Tari Monong",
      "province": "Kalimantan Barat",
      "image": "https://img.inews.co.id/media/1200/files/inews_new/2022/10/04/Tari_Monong_Kalimantan_Barat.jpg",
      "description": "Tarian penyembuhan yang dilakukan oleh seorang dukun untuk mengusir roh jahat.",
      "origin": "Berasal dari ritual pengobatan suku Dayak, di mana dukun menari sambil membaca mantra untuk menyembuhkan orang yang sakit."
    },
    {
      "name": "Tari Balean Dadas",
      "province": "Kalimantan Tengah",
      "image": "https://mediacenter.palangkaraya.go.id/wp-content/uploads/sites/24/2023/03/img24684das.jpg",
      "description": "Tarian ritual penyembuhan penyakit yang dilakukan oleh dukun wanita.",
      "origin": "Lahir dari tradisi dan kepercayaan suku Dayak Ma'anyan sebagai sarana untuk berkomunikasi dengan roh-roh leluhur dalam proses penyembuhan."
    },
    {
      "name": "Tari Baksa Kembang",
      "province": "Kalimantan Selatan",
      "image": "https://upload.wikimedia.org/wikipedia/commons/f/ff/WikiNusantara_2023%2C_Banjarmasin%2C_20_Mei_2023_%28005%29.jpg",
      "description": "Tarian penyambutan tamu dengan menaburkan bunga sebagai simbol penghormatan.",
      "origin": "Berkembang di lingkungan keraton Banjar sebagai tarian untuk menyambut tamu-tamu agung kerajaan."
    },
    {
      "name": "Tari Hudoq",
      "province": "Kalimantan Timur",
      "image": "https://apimice.kemenparekraf.go.id/event-daerah/public/676/80f/8e9/67680f8e9621e838864468.webp",
      "description": "Tarian ritual suku Dayak yang menggunakan topeng menyerupai burung enggang untuk memohon kesuburan.",
      "origin": "Berasal dari kepercayaan suku Dayak Bahau dan Modang, di mana Hudoq adalah jelmaan roh yang turun ke bumi untuk memberkati hasil panen."
    },
    {
      "name": "Tari Jepen",
      "province": "Kalimantan Utara",
      "image": "https://indonesiakaya.com/wp-content/uploads/2020/10/tari_jepen_genjoh_1200.jpg",
      "description": "Tarian pergaulan yang mendapat pengaruh dari budaya Melayu dan Islam.",
      "origin": "Berkembang dari kesenian suku Kutai yang mendapat pengaruh kuat dari kebudayaan Melayu dan ajaran Islam."
    },
    {
      "name": "Tari Maengket",
      "province": "Sulawesi Utara",
      "image": "https://sultantv.co/wp-content/uploads/2023/09/tari.jpg",
      "description": "Tarian massal yang terdiri dari tiga babak yang menggambarkan kehidupan masyarakat Minahasa.",
      "origin": "Sudah ada sejak masyarakat Minahasa mengenal pertanian dan menjadi bagian dari upacara adat sebagai ucapan syukur kepada Tuhan atas hasil panen."
    },
    {
      "name": "Tari Dana-Dana",
      "province": "Gorontalo",
      "image": "https://www.infopublik.id/resources/album/bulan-oktober-2022/Tari_Dana-Dana.JPG",
      "description": "Tarian pergaulan yang diadaptasi dari tarian Melayu dengan nuansa Islami.",
      "origin": "Berasal dari tradisi Arab yang dibawa oleh para pedagang dan penyebar agama Islam, kemudian diadaptasi dengan budaya lokal Gorontalo."
    },
    {
      "name": "Tari Dero",
      "province": "Sulawesi Tengah",
      "image": "https://image.idntimes.com/post/20231229/358167197-739487011515825-5775336983517216433-n-a61658b270ed6393d191cc28525d5f98-d99cffa568d6e8a9c3938c900a224590.jpeg",
      "description": "Tarian persahabatan yang dilakukan secara massal dengan bergandengan tangan membentuk lingkaran.",
      "origin": "Berasal dari Kabupaten Poso dan merupakan tarian tradisional masyarakat suku Pamona sebagai ungkapan kegembiraan dan persatuan."
    },
    {
      "name": "Tari Pattennung",
      "province": "Sulawesi Barat",
      "image": "https://img.inews.co.id/media/1200/files/inews_new/2023/10/27/tari_pattennung.jpg",
      "description": "Tarian yang menggambarkan kegiatan menenun kain tradisional.",
      "origin": "Terinspirasi dari aktivitas para perempuan suku Mandar yang menenun sarung sutra, mencerminkan ketekunan, kesabaran, dan keindahan."
    },
    {
      "name": "Tari Pakarena",
      "province": "Sulawesi Selatan",
      "image": "https://indonesiakaya.com/wp-content/uploads/2020/10/tari_pakarena_1200.jpg",
      "description": "Tarian yang dibawakan oleh penari wanita dengan gerakan yang sangat lembut dan anggun.",
      "origin": "Bermula dari mitos perpisahan antara penghuni 'botting langi' (negeri khayangan) dan penghuni 'lino' (bumi) di Gowa."
    },
    {
      "name": "Tari Lulo",
      "province": "Sulawesi Tenggara",
      "image": "https://www.kolakadesa.id/wowatamboli.kolakadesa.id/desa/upload/artikel/sedang_1742329392_tari_lulo.jpg",
      "description": "Tarian pergaulan yang dilakukan secara massal dengan bergandengan tangan.",
      "origin": "Merupakan tarian adat suku Tolaki yang dilakukan dalam berbagai upacara adat sebagai simbol persatuan dan kebersamaan."
    },
    {
      "name": "Tari Cakalele",
      "province": "Maluku",
      "image": "https://cdn2.gnfi.net/gnfi/uploads/articles/shutterstock-1973789729-1ea8e880966965b5d2ace25d151c772a.jpg",
      "description": "Tarian perang yang menggambarkan keberanian dan ketangkasan para prajurit.",
      "origin": "Awalnya merupakan tarian untuk menyambut para pahlawan yang pulang dari medan perang atau sebagai bagian dari persiapan perang."
    },
    {
      "name": "Tari Soya-Soya",
      "province": "Maluku Utara",
      "image": "https://indonesiakaya.com/wp-content/uploads/2020/10/tari_soya-soya_1200.jpg",
      "description": "Tarian perang yang menceritakan tentang perebutan kembali takhta Sultan Baabullah.",
      "origin": "Mengisahkan peristiwa penyerbuan pasukan dari Kayoa ke Benteng Portugis untuk menuntut balas atas kematian Sultan Khairun dari Ternate."
    },
    {
      "name": "Tari Suanggi",
      "province": "Papua Barat",
      "image": "https://upload.wikimedia.org/wikipedia/commons/4/4d/Tari_Soanggi.jpg",
      "description": "Tarian ritual yang bersifat magis untuk mengusir roh jahat.",
      "origin": "Berasal dari kisah seorang suami yang istrinya meninggal karena diserang roh jahat (Suanggi), tarian ini merupakan ritual untuk menenangkan arwah."
    },
    {
      "name": "Tari Yospan",
      "province": "Papua",
      "image": "https://www.wonderverseindonesia.com/storage/app/media/uploaded-files/shutterstock_2353474365%20Medium.jpeg.jpg",
      "description": "Tarian pergaulan yang enerjik dan penuh keceriaan.",
      "origin": "Merupakan penggabungan dua tarian rakyat Papua, yaitu Yosim dan Pancar, yang kemudian menjadi populer di kalangan muda-mudi."
    },
    {
      "name": "Tari Perang",
      "province": "Papua Pegunungan",
      "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5xjdC20PyRbBx_6qXGsSmTslNSjydchwUFK8klRnfa0oI4dL3KI5dVti26rRMEtnH08KtPaA6asW1n5U7l1t209tMjxAQCrLZboCU1bafFhXFAugVjA8O2e3KItvOD1UZ8bAXIvE1vqk2SIzNROT1SQbIz8p8UewX_AJpuREATdrKXNVMTs4F7f7n8Q/s700/olop.jpg",
      "description": "Tarian yang menggambarkan semangat dan keberanian para prajurit dalam berperang.",
      "origin": "Dahulu ditarikan untuk mengobarkan semangat para prajurit sebelum berperang melawan suku lain, kini menjadi pertunjukan budaya."
    },
    {
      "name": "Tari Det Pok Mbui",
      "province": "Papua Tengah",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Tari_Det_Pok_Mbui.jpg/960px-Tari_Det_Pok_Mbui.jpg",
      "description": "Tarian upacara adat suku Asmat yang menggunakan topeng arwah.",
      "origin": "Merupakan bagian dari ritual suku Asmat untuk menghormati dan mengantarkan arwah kerabat yang telah meninggal ke alam baka."
    },
    {
      "name": "Tari Gatzi",
      "province": "Papua Selatan",
      "image": "https://cdn.grid.id/crop/0x0:0x0/x/photo/2020/05/16/2617125296.jpg",
      "description": "Tarian ungkapan rasa syukur atas melimpahnya hasil buruan.",
      "origin": "Berasal dari tradisi masyarakat suku Marind Anim sebagai bentuk kegembiraan dan rasa syukur kepada Sang Pencipta setelah berhasil dalam perburuan."
    }
  ];

  const kuliner = [
    {
      "name": "Mie Aceh",
      "province": "Aceh",
      "image": "https://asset.kompas.com/crops/N4mU3wAYoq451W0gb6izP-kmePI=/0x0:968x645/1200x800/data/photo/2021/01/27/6010ce2cc1805.jpg",
      "description": "Hidangan mie pedas dengan kuah kari yang kaya rempah, disajikan dengan daging sapi atau makanan laut.",
      "ingredients": "Mie kuning, daging sapi/udang/cumi, kol, tauge, tomat, bumbu kari, cabai",
      "cookingTime": "45 menit"
    },
    {
      "name": "Bika Ambon",
      "province": "Sumatera Utara",
      "image": "https://asset.kompas.com/crops/VzYx-AkbhGOs5xvoXncObdqgXLA=/142x4:829x462/1200x800/data/photo/2023/04/27/6449e926b9ed3.jpg",
      "description": "Kue berserat dengan rasa manis dan aroma harum dari daun jeruk dan serai.",
      "ingredients": "Tepung tapioka, santan, gula, telur, daun jeruk, serai",
      "cookingTime": "2-3 jam"
    },
    {
      "name": "Rendang",
      "province": "Sumatera Barat",
      "image": "https://indonesiakaya.com/wp-content/uploads/2023/04/ren_Artboard_4.jpg",
      "description": "Masakan daging yang dimasak dengan santan dan rempah-rempah hingga kering.",
      "ingredients": "Daging sapi, santan, cabai, serai, daun jeruk",
      "cookingTime": "4-6 jam"
    },
    {
      "name": "Gulai Ikan Patin",
      "province": "Riau",
      "image": "https://asset-2.tribunnews.com/tribunnews/foto/bank/images/resep-gulai-ikan-patin.jpg",
      "description": "Masakan ikan patin dengan kuah kuning kental yang gurih dan sedikit asam.",
      "ingredients": "Ikan patin, santan, kunyit, asam kandis, serai, daun salam",
      "cookingTime": "1 jam"
    },
    {
      "name": "Otak-otak",
      "province": "Kepulauan Riau",
      "image": "https://i0.wp.com/resepkoki.id/wp-content/uploads/2016/03/Resep-Otak-otak-goreng.jpg?fit=1820%2C1920&ssl=1",
      "description": "Daging ikan tenggiri yang dibumbui, dibungkus daun pisang, lalu dipanggang.",
      "ingredients": "Ikan tenggiri, santan, tepung sagu, bawang merah, bawang putih",
      "cookingTime": "1-2 jam"
    },
    {
      "name": "Tempoyak Ikan Patin",
      "province": "Jambi",
      "image": "https://baradja.jambiprov.go.id/wp-content/uploads/2023/12/Resep-Tempoyak-Ikan-Patin-Khas-Jambi.png",
      "description": "Gulai ikan patin yang dimasak dengan fermentasi durian (tempoyak) yang memiliki rasa asam pedas yang khas.",
      "ingredients": "Ikan patin, tempoyak, santan, cabai, kunyit",
      "cookingTime": "1 jam"
    },
    {
      "name": "Pendap",
      "province": "Bengkulu",
      "image": "https://buckets.sasa.co.id/v1/AUTH_Assets/Assets/p/website/medias/page_medias/image-pendap.png",
      "description": "Ikan yang dibumbui dengan kelapa parut dan rempah-rempah, dibungkus daun talas, dan dikukus.",
      "ingredients": "Ikan, kelapa parut, bawang merah, bawang putih, cabai, daun talas",
      "cookingTime": "8 jam"
    },
    {
      "name": "Pempek",
      "province": "Sumatera Selatan",
      "image": "https://lingkar.news/wp-content/uploads/2023/03/Aneka-Resep-Pempek-Makanan-Tradisional-Khas-Palembang.jpg",
      "description": "Makanan dari adonan ikan dan sagu yang direbus, kemudian digoreng dan disajikan dengan kuah cuka.",
      "ingredients": "Ikan tenggiri, tepung sagu, telur, cuka, gula merah, cabai",
      "cookingTime": "1-2 jam"
    },
    {
      "name": "Mie Bangka",
      "province": "Kepulauan Bangka Belitung",
      "image": "https://akcdn.detik.net.id/visual/2023/10/26/ilustrasi-mi-ayam_169.jpeg?w=1200",
      "description": "Mie yang disajikan dengan suwiran ayam, bakso ikan, dan tauge, dengan kuah terpisah.",
      "ingredients": "Mie kuning, ayam, bakso ikan, tauge, sawi",
      "cookingTime": "30 menit"
    },
    {
      "name": "Seruit",
      "province": "Lampung",
      "image": "https://awsimages.detik.net.id/community/media/visual/2024/06/29/5-tempat-makan-sambal-seruit-yang-enak-dan-bikin-nagih_169.webp?w=1200",
      "description": "Ikan bakar yang dihaluskan bersama sambal terasi, tempoyak, dan mangga.",
      "ingredients": "Ikan, sambal terasi, tempoyak, mangga kweni",
      "cookingTime": "1 jam"
    },
    {
      "name": "Sate Bandeng",
      "province": "Banten",
      "image": "https://ppid.serangkota.go.id/po-content/uploads/img-20210330-wa0039.jpg",
      "description": "Sate yang terbuat dari daging ikan bandeng yang dihaluskan dan dibumbui, kemudian dibakar.",
      "ingredients": "Ikan bandeng, santan, bawang merah, bawang putih, ketumbar",
      "cookingTime": "2-3 jam"
    },
    {
      "name": "Kerak Telor",
      "province": "DKI Jakarta",
      "image": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Kerak_telor_Betawi.jpg",
      "description": "Makanan dari beras ketan dan telur yang dimasak di atas wajan, ditaburi serundeng dan bawang goreng.",
      "ingredients": "Beras ketan, telur bebek, ebi, serundeng, bawang goreng",
      "cookingTime": "20 menit"
    },
    {
      "name": "Karedok",
      "province": "Jawa Barat",
      "image": "https://www.dapurkobe.co.id/wp-content/uploads/karedok.jpg",
      "description": "Salad sayuran mentah yang disiram dengan bumbu kacang.",
      "ingredients": "Kacang panjang, tauge, kol, mentimun, terong, bumbu kacang",
      "cookingTime": "30 menit"
    },
    {
      "name": "Lumpia Semarang",
      "province": "Jawa Tengah",
      "image": "https://visitjawatengah.jatengprov.go.id/assets/images/bafe8254-7059-4ea6-b08f-b941b27aee93.jpg",
      "description": "Lumpia berisi rebung, telur, dan udang atau ayam.",
      "ingredients": "Kulit lumpia, rebung, telur, udang/ayam",
      "cookingTime": "1-2 jam"
    },
    {
      "name": "Gudeg",
      "province": "DI Yogyakarta",
      "image": "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p2/71/2025/06/03/gudeg-2-1775690024.jpg",
      "description": "Masakan manis dari nangka muda yang dimasak dengan santan dan gula kelapa.",
      "ingredients": "Nangka muda, santan, gula kelapa, daun salam, lengkuas",
      "cookingTime": "6-8 jam"
    },
    {
      "name": "Rujak Cingur",
      "province": "Jawa Timur",
      "image": "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/21044422/cara-membuat-rujak-cingur-sederhana-khas-surabaya.jpg",
      "description": "Salad dari irisan mulut sapi (cingur) yang dicampur dengan sayuran dan buah-buahan, disiram bumbu petis.",
      "ingredients": "Cingur sapi, lontong, tahu, tempe, sayuran, buah-buahan, bumbu petis",
      "cookingTime": "2-3 jam"
    },
    {
      "name": "Ayam Betutu",
      "province": "Bali",
      "image": "https://buckets.sasa.co.id/v1/AUTH_Assets/Assets/p/website/medias/page_medias/resep_ayam_betutu.jpg",
      "description": "Ayam utuh yang dimasak dengan bumbu base genep khas Bali, memiliki cita rasa pedas dan kaya rempah.",
      "ingredients": "Ayam, base genep (bumbu khas Bali), daun singkong",
      "cookingTime": "3-4 jam"
    },
    {
      "name": "Ayam Taliwang",
      "province": "Nusa Tenggara Barat",
      "image": "https://www.dapurkobe.co.id/wp-content/uploads/ayam-taliwang.jpg",
      "description": "Ayam bakar dengan bumbu pedas khas Lombok.",
      "ingredients": "Ayam kampung, cabai merah, bawang merah, bawang putih, terasi",
      "cookingTime": "2-3 jam"
    },
    {
      "name": "Se'i Sapi",
      "province": "Nusa Tenggara Timur",
      "image": "https://pariwisataindonesia.id/wp-content/uploads/2023/03/Pariwisata-Indonesia-sei.jpg",
      "description": "Daging sapi yang diasap dengan kayu kosambi hingga matang, disajikan dengan sambal lu'at.",
      "ingredients": "Daging sapi, garam, merica, sambal lu'at",
      "cookingTime": "8-10 jam"
    },
    {
      "name": "Bubur Pedas Sambas",
      "province": "Kalimantan Barat",
      "image": "https://indonesiakaya.com/wp-content/uploads/2023/04/bp_Artboard_1.jpg",
      "description": "Bubur dengan campuran sayur-sayuran seperti kangkung, pakis, dan tauge, serta taburan kacang dan ikan teri.",
      "ingredients": "Beras, kelapa sangrai, kangkung, pakis, tauge, kacang tanah, ikan teri",
      "cookingTime": "1-2 jam"
    },
    {
      "name": "Juhu Singkah",
      "province": "Kalimantan Tengah",
      "image": "https://wanitaindonesia.co/wp-content/uploads/2025/06/Screen-Shot-2025-06-28-at-12.31.29.png",
      "description": "Sayur umbut rotan yang dimasak dengan ikan dan bumbu-bumbu khas Dayak.",
      "ingredients": "Umbut rotan, ikan, bawang merah, bawang putih, terong asam",
      "cookingTime": "1 jam"
    },
    {
      "name": "Soto Banjar",
      "province": "Kalimantan Selatan",
      "image": "https://indonesiakaya.com/wp-content/uploads/2023/04/sb_Artboard_5.jpg",
      "description": "Soto dengan kuah bening yang kaya rempah, disajikan dengan suwiran ayam, perkedel, dan soun.",
      "ingredients": "Ayam, soun, perkedel, telur rebus, seledri, bawang goreng",
      "cookingTime": "2-3 jam"
    },
    {
      "name": "Gangan Haruan",
      "province": "Kalimantan Timur",
      "image": "https://cdn.yummy.co.id/content-images/images/20201103/ne6CRHLbxg00C3CnbQJKgqZZgyVsl5Tl-31363034333833353434d41d8cd98f00b204e9800998ecf8427e.jpg?x-oss-process=image/resize,w_388,h_388,m_fixed,x-oss-process=image/format,webp",
      "description": "Sayur asam ikan gabus dengan kuah kuning yang segar.",
      "ingredients": "Ikan gabus (haruan), kunyit, asam, terong, kacang panjang",
      "cookingTime": "1 jam"
    },
    {
      "name": "Kepiting Soka",
      "province": "Kalimantan Utara",
      "image": "https://image.idntimes.com/post/20240818/food-226069-1280-34ad38a2ffe93ff890d5524b702be458-33ddff67867fd53f828d6a5c4081ff6a.jpg",
      "description": "Kepiting cangkang lunak yang digoreng tepung atau dimasak dengan saus.",
      "ingredients": "Kepiting soka, tepung bumbu, telur, saus (opsional)",
      "cookingTime": "30 menit"
    },
    {
      "name": "Tinutuan",
      "province": "Sulawesi Utara",
      "image": "https://indonesiakaya.com/wp-content/uploads/2023/04/bm_Artboard_1.jpg",
      "description": "Bubur Manado yang terbuat dari campuran berbagai macam sayuran, tanpa daging.",
      "ingredients": "Beras, labu kuning, singkong, bayam, kangkung, jagung, kemangi",
      "cookingTime": "1 jam"
    },
    {
      "name": "Binte Biluhuta",
      "province": "Gorontalo",
      "image": "https://img-global.cpcdn.com/recipes/dd2445c700ca5ad1/680x781f0.5_0.568583_1.0q80/binte-biluhuta-foto-resep-utama.jpg",
      "description": "Sup jagung yang dicampur dengan ikan atau udang, memiliki rasa manis, asin, dan pedas.",
      "ingredients": "Jagung, ikan tongkol/udang, kelapa parut, belimbing wuluh, kemangi",
      "cookingTime": "45 menit"
    },
    {
      "name": "Kaledo",
      "province": "Sulawesi Tengah",
      "image": "https://www.finnafood.com/blog/wp-content/uploads/2024/06/kaledo-palu.jpg",
      "description": "Sup kaki sapi dengan kuah asam pedas yang segar, disajikan dengan ubi.",
      "ingredients": "Kaki sapi, asam jawa, cabai rawit, ubi",
      "cookingTime": "3-4 jam"
    },
    {
      "name": "Jepa",
      "province": "Sulawesi Barat",
      "image": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Jepa_Saluan.jpg",
      "description": "Roti pipih yang terbuat dari sagu, makanan pokok masyarakat Mandar.",
      "ingredients": "Sagu, kelapa parut",
      "cookingTime": "30 menit"
    },
    {
      "name": "Coto Makassar",
      "province": "Sulawesi Selatan",
      "image": "https://indonesiakaya.com/wp-content/uploads/2023/04/cm_Artboard_4.jpg",
      "description": "Soto berkuah kental dari rebusan jeroan sapi yang dicampur kacang tanah, disajikan dengan buras.",
      "ingredients": "Daging sapi, jeroan sapi, kacang tanah, tauco, rempah-rempah",
      "cookingTime": "4-5 jam"
    },
    {
      "name": "Lapa-lapa",
      "province": "Sulawesi Tenggara",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVFy-qInACGflZjP1NfQbnB0ht39ePy6JJOg&s",
      "description": "Nasi yang dimasak dengan santan dan dibungkus janur kelapa, biasanya disantap dengan ikan asin.",
      "ingredients": "Beras, santan, garam, janur kelapa",
      "cookingTime": "2-3 jam"
    },
    {
      "name": "Ikan Kuah Kuning",
      "province": "Maluku",
      "image": "https://asset.kompas.com/crops/NJKYFQA6VyRGLe6fNT8vlhmEdjY=/1x0:1000x666/1200x800/data/photo/2023/07/19/64b73f6366c30.jpeg",
      "description": "Masakan ikan dengan kuah kuning segar dari kunyit dan rempah-rempah, biasanya disantap dengan papeda.",
      "ingredients": "Ikan tongkol/tuna, kunyit, serai, daun kemangi, jeruk nipis",
      "cookingTime": "45 menit"
    },
    {
      "name": "Gohu Ikan",
      "province": "Maluku Utara",
      "image": "https://asset.kompas.com/crops/fUNrqQY_ABvACl9yoim-ESb6QWo=/0x948:2304x2484/1200x800/data/photo/2020/09/14/5f5eda757474c.jpg",
      "description": "Sashimi-nya orang Ternate, terbuat dari ikan tuna mentah yang dipotong dadu dan direndam dalam bumbu.",
      "ingredients": "Ikan tuna, lemon cui, bawang merah, cabai, daun kemangi",
      "cookingTime": "20 menit"
    },
    {
      "name": "Ikan Bakar Manokwari",
      "province": "Papua Barat",
      "image": "https://www.unileverfoodsolutions.co.id/dam/ufs-id/marketo/bango/02_IKAN_BAKAR_MANOKWARI.jpg",
      "description": "Ikan tongkol bakar yang disiram dengan sambal mentah yang digiling kasar.",
      "ingredients": "Ikan tongkol, cabai rawit, bawang merah, garam",
      "cookingTime": "45 menit"
    },
    {
      "name": "Papeda",
      "province": "Papua",
      "image": "https://upload.wikimedia.org/wikipedia/commons/0/01/Papeda%2C_Kuah_Kuning%2C_Ikan_Tude_Bakar_2.jpg",
      "description": "Makanan pokok yang terbuat dari tepung sagu dengan tekstur kenyal.",
      "ingredients": "Tepung sagu, air, garam",
      "cookingTime": "30 menit"
    },
    {
      "name": "Sate Rusa",
      "province": "Papua Selatan",
      "image": "https://awsimages.detik.net.id/customthumb/2012/12/14/1383/134051_aarusa1.jpg?w=600&q=90",
      "description": "Sate yang terbuat dari daging rusa yang dibumbui dan dibakar.",
      "ingredients": "Daging rusa, bawang putih, ketumbar, kecap manis",
      "cookingTime": "1-2 jam"
    },
    {
      "name": "Bakar Batu",
      "province": "Papua Tengah",
      "image": "https://backpackerjakarta.com/wp-content/uploads/2017/03/TRADISI-BAKAR-BATU-2.jpg",
      "description": "Tradisi memasak dengan cara membakar batu hingga panas lalu digunakan untuk memasak daging dan sayuran.",
      "ingredients": "Daging babi/ayam, ubi, singkong, sayur-sayuran",
      "cookingTime": "4-6 jam"
    },
    {
      "name": "Ubi Bakar",
      "province": "Papua Pegunungan",
      "image": "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/8448dfed-5296-416c-beae-4f0e3776f086_Go-Biz_20201222_001015.jpeg",
      "description": "Ubi jalar yang dimasak dengan cara dibakar di atas bara api, menjadi makanan pokok masyarakat pegunungan.",
      "ingredients": "Ubi jalar",
      "cookingTime": "1-2 jam"
    },
    {
      "name": "Ikan Kuah Kuning",
      "province": "Papua Barat Daya",
      "image": "https://asset.kompas.com/crops/NJKYFQA6VyRGLe6fNT8vlhmEdjY=/1x0:1000x666/1200x800/data/photo/2023/07/19/64b73f6366c30.jpeg",
      "description": "Ikan yang dimasak dengan kuah kuning dari kunyit dan rempah-rempah, khas daerah pesisir.",
      "ingredients": "Ikan, kunyit, serai, daun salam, santan (opsional)",
      "cookingTime": "1 jam"
    }
  ];

  const getCurrentData = () => {
    switch (activeTab) {
      case 'pakaian-adat': return pakaianAdat;
      case 'seni-pertunjukan': return seniPertunjukan;
      case 'kuliner': return kuliner;
      default: return pakaianAdat;
    }
  };

  const filteredData = getCurrentData().filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.province.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <GradientText
              colors={["#eab308", "#dc2626 ", "#7f1d1d "]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              Direktori Budaya Indonesia

            </GradientText>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Jelajahi kekayaan budaya Nusantara dari Sabang sampai Merauke.
            Temukan pakaian adat, seni pertunjukan, dan kuliner khas dari berbagai daerah.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Cari budaya berdasarkan nama atau daerah..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg"
          />
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-xl p-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${activeTab === tab.id
                    ? 'bg-white text-red-600 shadow-md'
                    : 'text-gray-600 hover:text-red-600'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <MapPin className="h-4 w-4 text-red-600 mr-2" />
                  <span className="text-red-600 font-semibold text-sm">{item.province}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>

                {activeTab === 'pakaian-adat' && (
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p className="text-sm text-yellow-800 font-medium">Filosofi:</p>
                    <p className="text-sm text-yellow-700">{item.philosophy}</p>
                  </div>
                )}

                {activeTab === 'seni-pertunjukan' && (
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800 font-medium">Asal-usul:</p>
                    <p className="text-sm text-green-700">{item.origin}</p>
                  </div>
                )}

                {activeTab === 'kuliner' && (
                  <div className="space-y-2">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm text-blue-800 font-medium">Bahan Utama:</p>
                      <p className="text-sm text-blue-700">{item.ingredients}</p>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>Waktu Masak: {item.cookingTime}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Tidak ditemukan hasil untuk "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DirektoriBudaya;