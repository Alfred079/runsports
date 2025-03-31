import React from 'react';
import { Target, Users, Trophy } from 'lucide-react';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TeamMemberCardProps {
  image: string;
  name: string;
  role: string;
  bio: string;
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Sobre a Liga RunSports</h1>
        
        {/* Mission and Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">A Nossa Missão</h2>
          <div className="prose max-w-none mb-8">
            <p className="text-gray-600 mb-4">
              Nossa missão é ir além do desporto. Queremos criar uma comunidade vibrante onde a paixão pelo futebol amador se une à busca pela excelência. Os nossos pilares são:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={<Users className="w-8 h-8" />}
              title="Comunidade"
              description="Acreditamos no poder do desporto para unir pessoas. Queremos criar um espaço inclusivo onde jogadores, equipas e adeptos se sintam parte de uma família. Valorizamos o espírito de equipa, o respeito e a amizade, dentro e fora de campo."
            />
            <ValueCard
              icon={<Trophy className="w-8 h-8" />}
              title="Excelência"
              description="Buscamos a qualidade em tudo o que fazemos, desde a organização dos jogos até à produção de conteúdo digital. Incentivamos o desenvolvimento dos jogadores, oferecendo oportunidades de treino e competição de alto nível."
            />
            <ValueCard
              icon={<Target className="w-8 h-8" />}
              title="Missão"
              description="Queremos promover o futebol amador e seus valores. Queremos gerar entretenimento e competição saudavel. Queremos ser o melhor campeonato amador da regiao."
            />
          </div>
        </div>

        {/* History Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">A Nossa História</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              A Liga RunSports nasceu da paixão de um grupo de entusiastas do futebol amador, que sentiam a necessidade de uma competição organizada e de qualidade na região. Desde a nossa primeira edição, temos crescido em número de equipas, jogadores e adeptos, tornando-nos uma referência no futebol amador local.
            </p>
            <p className="text-gray-600">
              Ao longo dos anos, temos vivido momentos emocionantes, com jogos memoráveis, rivalidades intensas e histórias de superação. Mantemos o compromisso de evoluir e inovar, buscando sempre oferecer a melhor experiência para todos os envolvidos na Liga RunSports.
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Nossa Equipa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMemberCard
              image="/images/team/mateus-kida.jpg"
              name="Mateus Kida"
              role="Diretor da Liga"
              bio="Com uma visão estratégica e liderança inspiradora, Mateus Kida dirige a Liga RunSports, garantindo o bom funcionamento de todas as áreas e a excelência da competição."
            />
            <TeamMemberCard
              image="/images/team/hugo-sousa.jpg"
              name="Hugo Sousa"
              role="Diretor Técnico"
              bio="Hugo Sousa é o responsável pela área técnica da Liga, garantindo a qualidade dos jogos, a aplicação das regras e o desenvolvimento dos jogadores."
            />
            <TeamMemberCard
              image="/images/team/radek-buanali.jpg"
              name="Radek Buanali"
              role="Gestor de Marketing"
              bio="Radek Buanali é o responsável por promover a Liga RunSports, criar conteúdo digital envolvente e atrair patrocinadores e adeptos."
            />
            <TeamMemberCard
              image="/images/team/alfredo-leopoldo.jpg"
              name="Alfredo Leopoldo"
              role="Gestor de Marketing"
              bio="Alfredo Leopoldo contribui para as estratégias de marketing da Liga, com um foco especial na gravação e produção de vídeos que destacam os melhores momentos da competição e envolvem o público."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="text-orange-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TeamMemberCard({ image, name, role, bio }: TeamMemberCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-orange-600 font-medium mb-2">{role}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  );
}