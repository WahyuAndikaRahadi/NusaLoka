import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Beranda from './pages/Beranda';
import Tentang from './pages/Tentang';
import DirektoriBudaya from './pages/DirektoriBudaya';
import AssistenAI from './pages/AssistenAI';
import BeritaTerkini from './pages/BeritaTerkini';
import Blog from './pages/Blog';
import BahasaDaerah from './pages/BahasaDaerah';
import LokasiKebudayaan from './pages/LokasiKebudayaan';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/direktori-budaya" element={<DirektoriBudaya />} />
            <Route path="/assisten-ai" element={<AssistenAI />} />
            <Route path="/berita-terkini" element={<BeritaTerkini />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/bahasa-daerah" element={<BahasaDaerah />} />
            <Route path="/lokasi-kebudayaan" element={<LokasiKebudayaan />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;