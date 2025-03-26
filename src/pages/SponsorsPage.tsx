import React from 'react';
import { Award, Star, Target, Users } from 'lucide-react';

interface SponsorCardProps {
  logo: string;
  name: string;
  description: string;
  benefits: string[];
}

interface PackageCardProps {
  title: string;
  price: string;
  description: string;
  benefits: string[];
  isPopular?: boolean;
}

export default function SponsorsPage() {
  const currentPartners: SponsorCardProps[] = [
    {
      logo: "/images/sponsors/im-fisio.png",
      name: "IM FISIO",
      description: "Técnico para primeiros socorros",
      benefits: ["10% desconto na consulta na clínica"]
    },
    {
      logo: "/images/sponsors/tasteat.png",
      name: "TASTEAT",
      description: "Lanches para a equipe de trabalho",
      benefits: []
    },
    {
      logo: "/images/sponsors/allinone.png",
      name: "ALLINONE",
      description: "Patrocinador Principal",
      benefits: ["MZN 25K de investimento"]
    },
    {
      logo: "/images/sponsors/365-fitness.png",
      name: "365 Fitness",
      description: "Treinos para as Teams",
      benefits: [
        "2 treinos por semana (quartas-feiras)",
        "Melhor jogador do campeonato tem 1 mês de borla no gym"
      ]
    },
    {
      logo: "/images/sponsors/hype.png",
      name: "HYPE",
      description: "Energéticos para todas as jornadas",
      benefits: ["Fornecimento até ao fim do Campeonato"]
    }
  ];

  const sponsorshipPackages: PackageCardProps[] = [
    {
      title: "Pacote Standard",
      price: "100.000 MT",
      description: "Visibilidade geral da marca através de materiais de divulgação e plataformas digitais da Liga.",
      benefits: [
        "Logo em materiais gráficos de divulgação da Liga",
        "Menção da marca em todas as publicações nas redes sociais",
        "Banner estático no campo durante os jogos",
        "Artes digitais personalizadas para redes sociais",
        "Inclusão do logo na página oficial da Liga"
      ]
    },
    {
      title: "Pacote Intermediário",
      price: "150.000 MT",
      description: "Visibilidade ampliada com exposição da marca em entrevistas, vídeos e uniformes da comissão técnica.",
      benefits: [
        "Todos os benefícios do Pacote Standard",
        "Banners da empresa no campo durante os jogos",
        "Exposição da marca em entrevistas e vídeos",
        "Uniformes da comissão técnica com o logo da empresa",
        "Conteúdo digital exclusivo para redes sociais"
      ],
      isPopular: true
    },
    {
      title: "Pacote Naming Rights",
      price: "600.000 MT",
      description: "Exposição máxima da marca com associação total à Liga, incluindo naming rights e cobertura completa do evento.",
      benefits: [
        "Naming rights da Liga",
        "Logo em todos os materiais de comunicação",
        "Uniformes das equipas com o logo da empresa",
        "Banners e placas publicitárias em destaque",
        "Exposição em todas as entrevistas e eventos",
        "Cobertura completa da Liga",
        "Arbitragem dos jogos",
        "Conteúdo digital personalizado"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Patrocinadores</h1>

        {/* Current Partners Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Nossos Parceiros Atuais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center mb-4 h-32">
                  <img 
                    src={partner.logo} 
                    alt={`Logo ${partner.name}`}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = 'w-full h-full flex items-center justify-center bg-gray-100 rounded-lg';
                      fallback.innerHTML = `<span class="text-gray-400 text-lg">${partner.name}</span>`;
                      target.parentNode?.appendChild(fallback);
                    }}
                  />
                </div>
                <p className="text-gray-600 mb-4 text-center text-sm">{partner.description}</p>
                {partner.benefits.length > 0 && (
                  <ul className="space-y-2">
                    {partner.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sponsorship Packages Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Pacotes de Patrocínio</h2>
          <p className="text-gray-600 mb-8">
            A Liga RunSports oferece três pacotes de patrocínio distintos, projetados para atender às necessidades e objetivos de diferentes empresas. Cada pacote proporciona oportunidades únicas de visibilidade e associação com um evento desportivo de destaque.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsorshipPackages.map((pkg, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-lg p-6 border-2 ${
                  pkg.isPopular 
                    ? 'border-orange-600 transform hover:scale-105 transition-transform duration-300' 
                    : 'border-gray-200'
                }`}
              >
                {pkg.isPopular && (
                  <div className="bg-orange-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Mais Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                <p className="text-2xl font-bold text-orange-600 mb-4">{pkg.price}</p>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <ul className="space-y-3">
                  {pkg.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button className={`mt-6 w-full py-2 px-4 rounded-md font-medium transition-colors duration-200 ${
                  pkg.isPopular
                    ? 'bg-orange-600 text-white hover:bg-orange-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}>
                  Contactar Agora
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Observações Gerais</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 mr-2"></span>
              Os valores dos pacotes são referenciais e podem ser negociados.
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 mr-2"></span>
              Oferecemos a possibilidade de criar pacotes personalizados, com benefícios e serviços específicos para atender às demandas de cada patrocinador.
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 mr-2"></span>
              Aceitamos patrocínio em espécie, como fornecimento de materiais desportivos, alimentos, bebidas ou serviços.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}