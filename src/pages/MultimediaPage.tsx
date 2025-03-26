import React, { useState } from 'react';
import { Play, Image, Video, FileText } from 'lucide-react';

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  text: string;
}

interface VideoCardProps {
  thumbnail: string;
  title: string;
  duration: string;
}

export default function MultimediaPage() {
  const [activeTab, setActiveTab] = useState('photos');

  const photos = [
    {
      url: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c",
      title: "Match Day Highlights",
      description: "Exciting moments from our latest tournament"
    },
    {
      url: "https://images.unsplash.com/photo-1518604666860-9cd6f01d6b42",
      title: "Training Session",
      description: "Players working hard during practice"
    },
    {
      url: "https://images.unsplash.com/photo-1577223625816-6500cc0d7247",
      title: "Team Celebration",
      description: "Victory celebrations after the final whistle"
    },
    {
      url: "https://images.unsplash.com/photo-1517466787929-bc90951d0974",
      title: "Stadium Atmosphere",
      description: "Fans creating an amazing atmosphere"
    },
    {
      url: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12",
      title: "Youth Development",
      description: "Young talents in action"
    },
    {
      url: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55",
      title: "Community Event",
      description: "Bringing soccer to the community"
    }
  ];

  const videos = [
    {
      thumbnail: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c",
      title: "Match Highlights: FC United vs City Warriors",
      duration: "5:23"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1518604666860-9cd6f01d6b42",
      title: "Season Opening Ceremony",
      duration: "12:45"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1577223625816-6500cc0d7247",
      title: "Player Interview: John Smith",
      duration: "8:30"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Multimedia Gallery</h1>

        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <TabButton
            active={activeTab === 'photos'}
            onClick={() => setActiveTab('photos')}
            icon={<Image className="w-5 h-5" />}
            text="Photos"
          />
          <TabButton
            active={activeTab === 'videos'}
            onClick={() => setActiveTab('videos')}
            icon={<Play className="w-5 h-5" />}
            text="Videos"
          />
        </div>

        {/* Content */}
        {activeTab === 'photos' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {photos.map((photo, index) => (
              <PhotoCard key={index} {...photo} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {videos.map((video, index) => (
              <VideoCard key={index} {...video} />
            ))}
          </div>
        )}

        {/* Upload Section */}
        <div className="bg-gray-50 rounded-lg p-8 text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Share Your Moments</h2>
          <p className="text-gray-600 mb-6">
            Got some great photos or videos from our matches? Share them with the community!
          </p>
          <button className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition">
            Upload Media
          </button>
        </div>
      </div>
    </div>
  );
}

function TabButton({ active, onClick, icon, text }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-6 py-3 rounded-lg transition ${
        active
          ? 'bg-orange-600 text-white'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {icon}
      <span className="ml-2">{text}</span>
    </button>
  );
}

function PhotoCard({ url, title, description }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
      <div className="relative">
        <img src={url} alt={title} className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function VideoCard({ thumbnail, title, duration }: VideoCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
      <div className="relative">
        <img src={thumbnail} alt={title} className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <Play className="w-8 h-8 text-orange-600 ml-1" />
          </div>
        </div>
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
          {duration}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
    </div>
  );
}