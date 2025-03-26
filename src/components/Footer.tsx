import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sobre */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Liga RunSports</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/temporada" className="text-gray-400 hover:text-white transition-colors">Temporada</Link>
              </li>
              <li>
                <Link to="/noticias" className="text-gray-400 hover:text-white transition-colors">Notícias</Link>
              </li>
              <li>
                <Link to="/historico" className="text-gray-400 hover:text-white transition-colors">Histórico</Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@ligarunsports.com</li>
              <li>Telefone: +258 84 123 4567</li>
              <li>Endereço: Maputo, Moçambique</li>
            </ul>
          </div>

          {/* Parceiros */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Nossos Parceiros</h3>
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/partners/thl-white.png" alt="THL" className="h-8 w-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" />
              <img src="/images/partners/imfisio-white.png" alt="IM FISIO" className="h-8 w-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" />
              <img src="/images/partners/tasteat-white.png" alt="Tasteat" className="h-8 w-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" />
              <img src="/images/partners/allinone-white.png" alt="All in One" className="h-8 w-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" />
              <img src="/images/partners/365fitness-white.png" alt="365 Fitness" className="h-8 w-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" />
              <img src="/images/partners/hype-white.png" alt="Hype" className="h-8 w-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Liga RunSports. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
} 