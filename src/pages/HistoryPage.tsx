import React from 'react';
import { Trophy, Target, Users, Star, Award } from 'lucide-react';

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Histórico das Temporadas</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Temporada 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-4">
              <Trophy className="w-8 h-8 text-orange-600 mr-2" />
              <h3 className="text-xl font-bold">Temporada 1</h3>
            </div>
            <p className="text-gray-600 mb-6">
              A primeira edição da Liga RunSports marcou o início de uma jornada emocionante no futebol amador da nossa região. 
              Realizada em um formato de liga com duas voltas, a competição contou com a participação de quatro equipas determinadas a deixar a sua marca.
            </p>

            {/* Classificação Final */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <Users className="w-5 h-5 text-orange-600 mr-2" />
                <h4 className="font-semibold">Classificação Final</h4>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center border-b pb-2">
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm mr-2">1</span>
                      <img 
                        src="/images/teams/nos-deixa.png" 
                        alt="Nos Deixa" 
                        className="w-6 h-6 rounded-full mr-2"
                      />
                      <span className="font-medium">Nos Deixa</span>
                    </div>
                    <span className="text-orange-600 font-medium">12 pontos</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-gray-300 text-gray-700 rounded-full flex items-center justify-center text-sm mr-2">2</span>
                      <img 
                        src="/images/teams/ta-cocar.png" 
                        alt="Ta Cocar" 
                        className="w-6 h-6 rounded-full mr-2"
                      />
                      <span>Ta Cocar</span>
                    </div>
                    <span>9 pontos</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-gray-300 text-gray-700 rounded-full flex items-center justify-center text-sm mr-2">3</span>
                      <img 
                        src="/images/teams/midnight-fc.png" 
                        alt="Midnight FC" 
                        className="w-6 h-6 rounded-full mr-2"
                      />
                      <span>Midnight FC</span>
                    </div>
                    <span>5 pontos</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-gray-300 text-gray-700 rounded-full flex items-center justify-center text-sm mr-2">4</span>
                      <img 
                        src="/images/teams/laranja-mecanica.png" 
                        alt="Laranja Mecanica" 
                        className="w-6 h-6 rounded-full mr-2"
                      />
                      <span>Laranja Mecanica</span>
                    </div>
                    <span>1 ponto</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Artilheiros */}
            <div>
              <div className="flex items-center mb-2">
                <Target className="w-5 h-5 text-orange-600 mr-2" />
                <h4 className="font-semibold">Artilheiros</h4>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center border-b pb-2">
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm mr-2">1</span>
                      <img 
                        src="/images/players/alen.png" 
                        alt="Alen" 
                        className="w-6 h-6 rounded-full mr-2"
                      />
                      <div>
                        <span className="font-medium">Alen</span>
                        <span className="text-sm text-gray-500 ml-2">Nos Deixa</span>
                      </div>
                    </div>
                    <span className="text-orange-600 font-medium">11 golos</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-gray-300 text-gray-700 rounded-full flex items-center justify-center text-sm mr-2">2</span>
                      <img 
                        src="/images/players/peter.png" 
                        alt="Peter Chissano" 
                        className="w-6 h-6 rounded-full mr-2"
                      />
                      <div>
                        <span className="font-medium">Peter Chissano</span>
                        <span className="text-sm text-gray-500 ml-2">Midnight FC</span>
                      </div>
                    </div>
                    <span>10 golos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Temporada 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-4">
              <Trophy className="w-8 h-8 text-orange-600 mr-2" />
              <h3 className="text-xl font-bold">Temporada 2</h3>
            </div>
            <p className="text-gray-600 mb-6">
              A segunda edição da Liga RunSports elevou a competição a um novo patamar, com mais equipas e um formato ainda mais emocionante, 
              combinando a fase de grupos com o mata-mata.
            </p>

            {/* Fase de Grupos */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <Users className="w-5 h-5 text-orange-600 mr-2" />
                <h4 className="font-semibold">Fase de Grupos</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-medium mb-2">Grupo A</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <img 
                          src="/images/teams/goodboys.png" 
                          alt="Goodboys" 
                          className="w-6 h-6 rounded-full mr-2"
                        />
                        <span>Goodboys</span>
                      </div>
                      <span className="font-medium">6 pts</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <img 
                          src="/images/teams/uniao.png" 
                          alt="Uniao de Maputo" 
                          className="w-6 h-6 rounded-full mr-2"
                        />
                        <span>Uniao de Maputo</span>
                      </div>
                      <span>4 pts</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <img 
                          src="/images/teams/laranja-mecanica.png" 
                          alt="Laranja Mecanica" 
                          className="w-6 h-6 rounded-full mr-2"
                        />
                        <span>Laranja Mecanica</span>
                      </div>
                      <span>4 pts</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <img 
                          src="/images/teams/neandertal.png" 
                          alt="Neandertal" 
                          className="w-6 h-6 rounded-full mr-2"
                        />
                        <span>Neandertal</span>
                      </div>
                      <span>3 pts</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-medium mb-2">Grupo B</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <img 
                          src="/images/teams/eternal-red.png" 
                          alt="Eternal Red" 
                          className="w-6 h-6 rounded-full mr-2"
                        />
                        <span>Eternal Red</span>
                      </div>
                      <span className="font-medium">6 pts</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <img 
                          src="/images/teams/nos-deixa.png" 
                          alt="Nos Deixa" 
                          className="w-6 h-6 rounded-full mr-2"
                        />
                        <span>Nos Deixa</span>
                      </div>
                      <span className="font-medium">6 pts</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <img 
                          src="/images/teams/ta-cocar.png" 
                          alt="Ta Cocar" 
                          className="w-6 h-6 rounded-full mr-2"
                        />
                        <span>Ta Cocar</span>
                      </div>
                      <span className="font-medium">6 pts</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <img 
                          src="/images/teams/midnight-fc.png" 
                          alt="Midnight FC" 
                          className="w-6 h-6 rounded-full mr-2"
                        />
                        <span>Midnight FC</span>
                      </div>
                      <span>0 pts</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mata-Mata */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <Trophy className="w-5 h-5 text-orange-600 mr-2" />
                <h4 className="font-semibold">Mata-Mata</h4>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center border-b pb-2">
                    <div className="flex items-center">
                      <img 
                        src="/images/teams/nos-deixa.png" 
                        alt="Nos Deixa" 
                        className="w-6 h-6 rounded-full mr-2"
                      />
                      <span>Nos Deixa</span>
                    </div>
                    <span className="text-orange-600 font-medium">Venceu</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <img 
                        src="/images/teams/eternal-red.png" 
                        alt="Eternal Red" 
                        className="w-6 h-6 rounded-full mr-2"
                      />
                      <span>Eternal Red</span>
                    </div>
                    <span className="text-orange-600 font-medium">Venceu</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Classificação Final */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <Users className="w-5 h-5 text-orange-600 mr-2" />
                <h4 className="font-semibold">Classificação Final</h4>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center border-b pb-2">
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm mr-2">1</span>
                      <img 
                        src="/images/teams/eternal-red.png" 
                        alt="Eternal Red" 
                        className="w-6 h-6 rounded-full mr-2"
                      />
                      <span className="font-medium">Eternal Red</span>
                    </div>
                    <span className="text-orange-600 font-medium">Campeão</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-gray-300 text-gray-700 rounded-full flex items-center justify-center text-sm mr-2">2</span>
                      <img 
                        src="/images/teams/nos-deixa.png" 
                        alt="Nos Deixa" 
                        className="w-6 h-6 rounded-full mr-2"
                      />
                      <span>Nos Deixa</span>
                    </div>
                    <span>Vice-Campeão</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-gray-300 text-gray-700 rounded-full flex items-center justify-center text-sm mr-2">3</span>
                      <img 
                        src="/images/teams/uniao.png" 
                        alt="Uniao de Maputo" 
                        className="w-6 h-6 rounded-full mr-2"
                      />
                      <span>Uniao de Maputo</span>
                    </div>
                    <span>Terceiro Lugar</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Prémios Individuais */}
            <div>
              <div className="flex items-center mb-2">
                <Award className="w-5 h-5 text-orange-600 mr-2" />
                <h4 className="font-semibold">Prémios Individuais</h4>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <Target className="w-5 h-5 text-orange-600 mr-2" />
                      <h5 className="font-medium">Melhor Marcador</h5>
                    </div>
                    <div className="flex items-center">
                      <img 
                        src="/images/players/danifo.png" 
                        alt="Danifo Chutumia" 
                        className="w-12 h-12 rounded-full mr-3"
                      />
                      <div>
                        <div className="font-medium">Danifo Chutumia</div>
                        <div className="text-sm text-gray-500">Eternal Red - 14 golos</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <Target className="w-5 h-5 text-orange-600 mr-2" />
                      <h5 className="font-medium">Melhor Guarda-Redes</h5>
                    </div>
                    <div className="flex items-center">
                      <img 
                        src="/images/players/dercio.png" 
                        alt="Dércio Sindique" 
                        className="w-12 h-12 rounded-full mr-3"
                      />
                      <div>
                        <div className="font-medium">Dércio Sindique</div>
                        <div className="text-sm text-gray-500">Uniao de Maputo</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 