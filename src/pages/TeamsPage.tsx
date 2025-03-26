import React from 'react';
import { Trophy, Users, Star } from 'lucide-react';

interface TeamCardProps {
  name: string;
  image: string;
  founded: string;
  achievements: string;
  description: string;
}

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function TeamsPage() {
  const teams = [
    {
      name: "FC United",
      image: "https://images.unsplash.com/photo-1577223625816-6500cc0d7247",
      founded: "2015",
      achievements: "League Champions 2023",
      description: "A community-based team with a strong youth development program."
    },
    {
      name: "City Warriors",
      image: "https://images.unsplash.com/photo-1518604666860-9cd6f01d6b42",
      founded: "2012",
      achievements: "Cup Winners 2022",
      description: "Known for their attacking style and passionate supporters."
    },
    {
      name: "Athletic Club",
      image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c",
      founded: "2014",
      achievements: "Most Improved Team 2023",
      description: "A rising force in the league with excellent facilities."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Our Teams</h1>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teams.map((team, index) => (
            <TeamCard key={index} {...team} />
          ))}
        </div>

        {/* League Statistics */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">League Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard
              icon={<Users className="w-8 h-8" />}
              title="24 Teams"
              description="Across 3 divisions"
            />
            <StatCard
              icon={<Trophy className="w-8 h-8" />}
              title="300+ Matches"
              description="Played each season"
            />
            <StatCard
              icon={<Star className="w-8 h-8" />}
              title="500+ Players"
              description="Registered in the league"
            />
          </div>
        </div>

        {/* Join the League */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Join the League</h2>
          <p className="text-gray-600 mb-8">
            Interested in joining the Premier Amateur League? We're always looking for new teams that share our passion for the beautiful game.
          </p>
          <button className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

function TeamCard({ name, image, founded, achievements, description }: TeamCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-orange-600 mb-2">Founded: {founded}</p>
        <p className="text-gray-600 mb-2">{achievements}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function StatCard({ icon, title, description }: StatCardProps) {
  return (
    <div className="flex items-center space-x-4">
      <div className="text-orange-600">{icon}</div>
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}