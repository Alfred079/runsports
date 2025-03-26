import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Users, Calendar, ChevronRight } from 'lucide-react';
import { standings, topScorers } from '../data/standings';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[300px] sm:h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/hero.jpg")'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6">Liga RunSports</h1>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8">
              A maior liga esportiva do país, promovendo competições e desenvolvendo atletas.
            </p>
            <Link
              to="/temporada"
              className="inline-flex items-center bg-white text-orange-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-orange-50 transition"
            >
              Ver Temporada Atual
              <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Standings Section */}
      <div className="py-8 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Classificação Atual</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm">Pos</th>
                  <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm">Equipe</th>
                  <th className="px-2 sm:px-4 py-2 text-center text-xs sm:text-sm">J</th>
                  <th className="px-2 sm:px-4 py-2 text-center text-xs sm:text-sm">SD</th>
                  <th className="px-2 sm:px-4 py-2 text-center text-xs sm:text-sm">P</th>
                </tr>
              </thead>
              <tbody>
                {standings.map((team) => (
                  <tr key={team.position} className="border-t hover:bg-gray-50">
                    <td className="px-2 sm:px-4 py-2 text-xs sm:text-sm font-bold">{team.position}</td>
                    <td className="px-2 sm:px-4 py-2 text-xs sm:text-sm">
                      <div className="flex items-center space-x-2">
                        {team.name !== 'COOP FC' && (
                          <img 
                            src={`/images/teams/${team.name.toLowerCase().replace(/\s+/g, '-')}.png`}
                            alt={`${team.name} logo`}
                            className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                          />
                        )}
                        <span>{team.name}</span>
                      </div>
                    </td>
                    <td className="px-2 sm:px-4 py-2 text-xs sm:text-sm text-center">{team.played}</td>
                    <td className="px-2 sm:px-4 py-2 text-xs sm:text-sm text-center">{team.goalsFor - team.goalsAgainst}</td>
                    <td className="px-2 sm:px-4 py-2 text-xs sm:text-sm text-center font-bold text-orange-600">{team.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 sm:mt-8 text-center">
            <Link
              to="/temporada"
              className="inline-flex items-center text-orange-600 hover:text-orange-700 text-sm sm:text-base"
            >
              Ver Classificação Completa
              <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Top Scorers Section */}
      <div className="py-8 sm:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Artilheiros</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm">Pos</th>
                  <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm">Jogador</th>
                  <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm">Equipe</th>
                  <th className="px-2 sm:px-4 py-2 text-center text-xs sm:text-sm">Gols</th>
                  <th className="px-2 sm:px-4 py-2 text-center text-xs sm:text-sm">Assistências</th>
                </tr>
              </thead>
              <tbody>
                {topScorers.map((player) => (
                  <tr key={player.position} className="border-t hover:bg-gray-50">
                    <td className="px-2 sm:px-4 py-2 text-xs sm:text-sm font-bold">{player.position}</td>
                    <td className="px-2 sm:px-4 py-2 text-xs sm:text-sm">{player.name}</td>
                    <td className="px-2 sm:px-4 py-2 text-xs sm:text-sm">{player.team}</td>
                    <td className="px-2 sm:px-4 py-2 text-xs sm:text-sm text-center text-orange-600 font-bold">{player.goals}</td>
                    <td className="px-2 sm:px-4 py-2 text-xs sm:text-sm text-center">{player.assists}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 sm:mt-8 text-center">
            <Link
              to="/temporada"
              className="inline-flex items-center text-orange-600 hover:text-orange-700 text-sm sm:text-base"
            >
              Ver Artilheiros Completos
              <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className="py-8 sm:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Últimas Notícias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {/* Notícia 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-40 sm:h-48">
                <img
                  src="/images/Imfisio.png"
                  alt="Fisioterapia Desportiva"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <span className="text-sm text-gray-500">15 de Março, 2024</span>
                <h3 className="text-lg sm:text-xl font-bold mt-2 mb-2 sm:mb-3">Fisioterapia Desportiva</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  Em parceria com a RunSports, especialistas oferecem suporte aos atletas, garantindo um retorno seguro e eficaz ao desporto.
                </p>
                <Link to="/noticias" className="text-orange-600 hover:text-orange-700 font-medium text-sm sm:text-base">
                  Ler mais
                  <ChevronRight className="inline-block ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </div>
            </div>

            {/* Notícia 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-40 sm:h-48">
                <img 
                  src="/images/news/hype.jpg" 
                  alt="Hype Energy Drink" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <span className="text-sm text-gray-500">15 de Março, 2024</span>
                <h3 className="text-lg sm:text-xl font-bold mt-2 mb-2 sm:mb-3">Hype Energy Drink: A Energia da Liga!</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  A Hype Energy Drink é o novo parceiro oficial da Liga RunSports, trazendo energia e adrenalina para os nossos jogos! Preparem-se para sentir a emoção em campo!
                </p>
                <Link to="/noticias" className="text-orange-600 hover:text-orange-700 font-medium text-sm sm:text-base">
                  Ler mais
                  <ChevronRight className="inline-block ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </div>
            </div>

            {/* Notícia 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-40 sm:h-48">
                <img
                  src="/images/news3.jpg"
                  alt="Chuteiras com Pitões"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <span className="text-sm text-gray-500">13 de Março, 2024</span>
                <h3 className="text-lg sm:text-xl font-bold mt-2 mb-2 sm:mb-3">Chuteiras com Pitões Não São Permitidas</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  A organização reforça que, por questões de segurança e preservação do campo, o uso de chuteiras com pitões está proibido. Os jogadores devem utilizar calçado adequado para evitar penalizações.
                </p>
                <Link to="/noticias" className="text-orange-600 hover:text-orange-700 font-medium text-sm sm:text-base">
                  Ler mais
                  <ChevronRight className="inline-block ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}