import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, User } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Início' },
    { path: '/temporada', label: 'Temporada' },
    { path: '/noticias', label: 'Notícias' },
    { path: '/multimidia', label: 'Multimídia' },
    { path: '/historico', label: 'Histórico' },
    { path: '/patrocinadores', label: 'Patrocinadores' },
    { path: '/loja', label: 'Loja' }
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed w-full z-50 bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
              <img
                src="/logo.png" 
                alt="Liga RunSports Logo" 
                className="h-10 w-10"
              />
              <span className="text-xl font-bold text-white">
                Liga RunSports
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                  isActive(item.path)
                    ? 'text-orange-600 border-b-2 border-orange-600'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button className="p-2 rounded-full hover:bg-gray-800 transition">
              <Search className="h-5 w-5 text-gray-300" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-800 transition">
              <User className="h-5 w-5 text-gray-300" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 shadow-lg rounded-lg mt-2">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'bg-gray-800 text-orange-600'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-4 px-3 py-2">
              <button className="p-2 rounded-full hover:bg-gray-800 transition">
                <Search className="h-5 w-5 text-gray-300" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-800 transition">
                <User className="h-5 w-5 text-gray-300" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}