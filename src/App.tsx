import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SeasonPage from './pages/SeasonPage';
import SponsorsPage from './pages/SponsorsPage';
import MultimediaPage from './pages/MultimediaPage';
import ContactPage from './pages/ContactPage';
import StorePage from './pages/StorePage';
import NewsPage from './pages/NewsPage';
import HistoryPage from './pages/HistoryPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/temporada" element={<SeasonPage />} />
            <Route path="/patrocinadores" element={<SponsorsPage />} />
            <Route path="/multimidia" element={<MultimediaPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/loja" element={<StorePage />} />
            <Route path="/noticias" element={<NewsPage />} />
            <Route path="/historico" element={<HistoryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;