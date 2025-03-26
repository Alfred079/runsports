import React from 'react';
import { Calendar, ChevronRight, ChevronLeft } from 'lucide-react';

export default function NewsPage() {
  const news = [
    {
      title: "Season Opening Tournament Success",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c",
      excerpt: "The 2024 season kicked off with an exciting tournament featuring all 24 teams across our three divisions...",
      category: "Events"
    },
    {
      title: "New Teams Join the League",
      date: "March 12, 2024",
      image: "https://images.unsplash.com/photo-1518604666860-9cd6f01d6b42",
      excerpt: "We're excited to welcome three new teams to our growing family of competitive amateur soccer clubs...",
      category: "Announcements"
    },
    {
      title: "Training Camp Highlights",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1577223625816-6500cc0d7247",
      excerpt: "Last weekend's training camp brought together players from across the league for intensive training sessions...",
      category: "Training"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Notícias</h1>
        
        {/* News Grid */}
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
              <h2 className="text-lg sm:text-xl font-bold mt-2 mb-2 sm:mb-3">Fisioterapia Desportiva</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                Em parceria com a RunSports, especialistas oferecem suporte aos atletas, garantindo um retorno seguro e eficaz ao desporto.
              </p>
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
              <span className="text-sm text-gray-500">14 de Março, 2024</span>
              <h2 className="text-lg sm:text-xl font-bold mt-2 mb-2 sm:mb-3">Hype Energy Drink: A Energia da Liga!</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                A Hype Energy Drink é o novo parceiro oficial da Liga RunSports, trazendo energia e adrenalina para os nossos jogos! Preparem-se para sentir a emoção em campo!
              </p>
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
              <h2 className="text-lg sm:text-xl font-bold mt-2 mb-2 sm:mb-3">Chuteiras com Pitões Não São Permitidas</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                A organização reforça que, por questões de segurança e preservação do campo, o uso de chuteiras com pitões está proibido. Os jogadores devem utilizar calçado adequado para evitar penalizações.
              </p>
            </div>
          </div>

          {/* Notícia 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-40 sm:h-48">
              <img
                src="/images/news4.jpg"
                alt="Tasteat"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <span className="text-sm text-gray-500">15 de Março, 2024</span>
              <h2 className="text-lg sm:text-xl font-bold mt-2 mb-2 sm:mb-3">Sabores irresistíveis com a Tasteat!</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                A Tasteat junta-se à Liga RunSports para oferecer lanches à comissão técnica em todos os jogos. Uma parceria que reforça a importância da nutrição e do bem-estar para o sucesso das equipas.
              </p>
            </div>
          </div>

          {/* Notícia 5 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-40 sm:h-48">
              <img
                src="/images/news5.jpg"
                alt="Ginásio 365"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <span className="text-sm text-gray-500">11 de Março, 2024</span>
              <h2 className="text-lg sm:text-xl font-bold mt-2 mb-2 sm:mb-3">Ginásio 365: A Força da Liga</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                Parceria com o Ginásio 365! Treinos semanais para equipas e 1 mês grátis para o melhor jogador do campeonato. Preparem-se para a vitória!
              </p>
            </div>
          </div>

          {/* Notícia 6 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-40 sm:h-48">
              <img
                src="/images/news6.jpg"
                alt="Premiação Surpreendente"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <span className="text-sm text-gray-500">10 de Março, 2024</span>
              <h2 className="text-lg sm:text-xl font-bold mt-2 mb-2 sm:mb-3">Uma Premiação Inesperada!</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                A Liga RunSports anuncia o vencedor do prêmio de melhor jogador da rodada, mas desta vez, a premiação terá um toque especial e surpreendente! Fiquem atentos às nossas redes sociais e ao website para mais informações e surpresas!
              </p>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-8 sm:mt-12 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="p-2 rounded-lg bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="px-3 py-2 rounded-lg bg-orange-600 text-white font-medium">1</button>
            <button className="px-3 py-2 rounded-lg bg-white shadow-sm hover:bg-gray-50">2</button>
            <button className="px-3 py-2 rounded-lg bg-white shadow-sm hover:bg-gray-50">3</button>
            <button className="px-3 py-2 rounded-lg bg-white shadow-sm hover:bg-gray-50">4</button>
            <button className="px-3 py-2 rounded-lg bg-white shadow-sm hover:bg-gray-50">5</button>
            <button className="p-2 rounded-lg bg-white shadow-sm hover:bg-gray-50">
              <ChevronRight className="w-5 h-5" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}

function NewsCard({ title, date, image, excerpt, category }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <span className="text-sm text-orange-600 mb-2 inline-block">{category}</span>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="w-4 h-4 mr-2" />
          {date}
        </div>
      </div>
    </div>
  );
}

function CategoryTag({ name, count }) {
  return (
    <div className="bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition cursor-pointer">
      <span className="font-medium">{name}</span>
      <span className="text-gray-500 ml-2">({count})</span>
    </div>
  );
}