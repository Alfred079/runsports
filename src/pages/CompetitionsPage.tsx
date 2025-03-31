import { Calendar, Trophy, Medal } from 'lucide-react';

interface MatchCardProps {
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  venue: string;
}

export default function CompetitionsPage() {
  const upcomingMatches = [
    {
      homeTeam: "FC United",
      awayTeam: "City Warriors",
      date: "March 20, 2024",
      time: "15:00",
      venue: "Central Stadium"
    },
    {
      homeTeam: "Athletic Club",
      awayTeam: "United Stars",
      date: "March 23, 2024",
      time: "16:30",
      venue: "Sports Complex"
    },
    {
      homeTeam: "City Warriors",
      awayTeam: "FC United",
      date: "March 27, 2024",
      time: "19:00",
      venue: "Warriors Arena"
    }
  ];

  const standings = [
    { team: "FC United", played: 15, won: 12, drawn: 2, lost: 1, points: 38 },
    { team: "City Warriors", played: 15, won: 10, drawn: 3, lost: 2, points: 33 },
    { team: "Athletic Club", played: 15, won: 9, drawn: 3, lost: 3, points: 30 }
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Competitions</h1>

        {/* Upcoming Matches */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Calendar className="w-6 h-6 mr-2" />
            Upcoming Matches
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingMatches.map((match, index) => (
              <MatchCard key={index} {...match} />
            ))}
          </div>
        </section>

        {/* League Table */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Trophy className="w-6 h-6 mr-2" />
            League Standings
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-lg">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Played</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Won</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Drawn</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lost</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {standings.map((team, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">{team.team}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{team.played}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{team.won}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{team.drawn}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{team.lost}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-bold">{team.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Competition Format */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Medal className="w-6 h-6 mr-2" />
            Competition Format
          </h2>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4">League Structure</h3>
              <p className="text-gray-600 mb-4">
                The Premier Amateur League consists of three divisions, with promotion and relegation between each division at the end of each season.
              </p>
              <h3 className="text-xl font-semibold mb-4">Match Format</h3>
              <p className="text-gray-600 mb-4">
                Matches are played according to FIFA rules, with two 45-minute halves and a 15-minute halftime break.
              </p>
              <h3 className="text-xl font-semibold mb-4">Points System</h3>
              <p className="text-gray-600">
                Teams receive 3 points for a win, 1 point for a draw, and 0 points for a loss. Final standings are determined by total points, with goal difference as the first tiebreaker.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function MatchCard({ homeTeam, awayTeam, date, time, venue }: MatchCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="text-center mb-4">
        <p className="text-sm text-gray-600">{date}</p>
        <p className="text-sm text-gray-600">{time}</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="font-semibold">{homeTeam}</span>
        <span className="text-gray-600">vs</span>
        <span className="font-semibold">{awayTeam}</span>
      </div>
      <div className="text-center text-sm text-gray-600">
        {venue}
      </div>
    </div>
  );
}