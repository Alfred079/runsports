import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { standings, topScorers } from '../data/standings';
import { matches, Match } from '../data/matches';

export default function SeasonPage() {
  const [selectedRound, setSelectedRound] = useState(1);

  // Função para verificar se um jogo já aconteceu
  const isMatchPlayed = (matchDate: string) => {
    const today = new Date();
    const match = new Date(matchDate.split('/').reverse().join('-'));
    return match < today;
  };

  // Função para formatar a data do jogo
  const formatMatchDate = (date: string) => {
    const [day, month, year] = date.split('/');
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Temporada 2024</h1>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Total de Equipes</h3>
            <p className="text-3xl font-bold text-orange-600">{standings.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Jogos Realizados</h3>
            <p className="text-3xl font-bold text-orange-600">
              {matches.filter(match => isMatchPlayed(match.date)).length}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Jogos Restantes</h3>
            <p className="text-3xl font-bold text-orange-600">
              {matches.filter(match => !isMatchPlayed(match.date)).length}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Jornada Atual</h3>
            <p className="text-3xl font-bold text-orange-600">{selectedRound}</p>
          </div>
        </div>

        {/* Standings Table */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">Classificação</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left text-sm">Pos</th>
                  <th className="px-4 py-2 text-left text-sm">Equipe</th>
                  <th className="px-4 py-2 text-center text-sm">J</th>
                  <th className="px-4 py-2 text-center text-sm">V</th>
                  <th className="px-4 py-2 text-center text-sm">E</th>
                  <th className="px-4 py-2 text-center text-sm">D</th>
                  <th className="px-4 py-2 text-center text-sm">GP</th>
                  <th className="px-4 py-2 text-center text-sm">GC</th>
                  <th className="px-4 py-2 text-center text-sm">P</th>
                </tr>
              </thead>
              <tbody>
                {standings.map((team) => (
                  <tr key={team.position} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm font-bold">{team.position}</td>
                    <td className="px-4 py-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <img
                          src={`/images/teams/${team.name.toLowerCase().replace(/\s+/g, '-')}.png`}
                          alt={`${team.name} logo`}
                          className="w-6 h-6 object-contain"
                        />
                        <span>{team.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-2 text-sm text-center">{team.played}</td>
                    <td className="px-4 py-2 text-sm text-center text-orange-600">{team.won}</td>
                    <td className="px-4 py-2 text-sm text-center">{team.drawn}</td>
                    <td className="px-4 py-2 text-sm text-center text-red-600">{team.lost}</td>
                    <td className="px-4 py-2 text-sm text-center">{team.goalsFor}</td>
                    <td className="px-4 py-2 text-sm text-center">{team.goalsAgainst}</td>
                    <td className="px-4 py-2 text-sm text-center font-bold text-orange-600">{team.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Scorers */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">Artilheiros</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left text-sm">Pos</th>
                  <th className="px-4 py-2 text-left text-sm">Jogador</th>
                  <th className="px-4 py-2 text-left text-sm">Equipe</th>
                  <th className="px-4 py-2 text-center text-sm">Gols</th>
                  <th className="px-4 py-2 text-center text-sm">Assistências</th>
                </tr>
              </thead>
              <tbody>
                {topScorers.map((player) => (
                  <tr key={player.position} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm font-bold">{player.position}</td>
                    <td className="px-4 py-2 text-sm">{player.name}</td>
                    <td className="px-4 py-2 text-sm">{player.team}</td>
                    <td className="px-4 py-2 text-sm text-center text-orange-600 font-bold">{player.goals}</td>
                    <td className="px-4 py-2 text-sm text-center">{player.assists}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Match Calendar */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <h2 className="text-2xl font-bold mb-4 sm:mb-0">Calendário de Jogos</h2>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSelectedRound(Math.max(1, selectedRound - 1))}
                disabled={selectedRound === 1}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-sm text-gray-600">Jornada {selectedRound} ({matches.filter(m => m.round === selectedRound).length} jogos)</span>
              <button
                onClick={() => setSelectedRound(Math.min(9, selectedRound + 1))}
                disabled={selectedRound === 9}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="space-y-4">
            {matches
              .filter(match => match.round === selectedRound)
              .map((match, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-500 mb-2">{formatMatchDate(match.date)}</div>
                  <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                    <div className="flex items-center space-x-2">
                      <img 
                        src={`/images/teams/${match.homeTeam.toLowerCase().replace(/\s+/g, '-')}.png`}
                        alt={match.homeTeam}
                        className="w-8 h-8 object-contain"
                      />
                      <span className="font-medium text-sm sm:text-base">{match.homeTeam}</span>
                    </div>
                    <div className="px-4 py-2 bg-white rounded-full shadow-sm">
                      {isMatchPlayed(match.date) && match.score ? (
                        <span className="font-bold text-orange-600">
                          {match.score.home} - {match.score.away}
                        </span>
                      ) : (
                        <span className="text-gray-500 font-medium">vs</span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-sm sm:text-base">{match.awayTeam}</span>
                      <img 
                        src={`/images/teams/${match.awayTeam.toLowerCase().replace(/\s+/g, '-')}.png`}
                        alt={match.awayTeam}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-gray-500 text-center">{match.venue}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
} 