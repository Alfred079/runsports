export interface Team {
  position: number;
  name: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}

export interface TopScorer {
  position: number;
  name: string;
  team: string;
  goals: number;
  assists: number;
}

export const standings: Team[] = [
  { position: 1, name: 'Neandertal', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { position: 2, name: 'Ta Cocar', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { position: 3, name: 'Legendary FC', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { position: 4, name: 'Laranja Mecanica', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { position: 5, name: 'Goodboys', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { position: 6, name: 'Uniao de Maputo', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { position: 7, name: 'Nos Deixa', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { position: 8, name: 'Eternal Red', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { position: 9, name: 'Futbol Vivo', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { position: 10, name: 'COOP FC', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 }
];

export const topScorers: TopScorer[] = [
  { position: 1, name: 'João Silva', team: 'Neandertal', goals: 0, assists: 0 },
  { position: 2, name: 'Pedro Santos', team: 'Ta Cocar', goals: 0, assists: 0 },
  { position: 3, name: 'Carlos Oliveira', team: 'Legendary FC', goals: 0, assists: 0 },
  { position: 4, name: 'Miguel Costa', team: 'Laranja Mecanica', goals: 0, assists: 0 },
  { position: 5, name: 'Rui Pereira', team: 'Goodboys', goals: 0, assists: 0 },
  { position: 6, name: 'André Lima', team: 'Uniao de Maputo', goals: 0, assists: 0 },
  { position: 7, name: 'Tiago Ferreira', team: 'Nos Deixa', goals: 0, assists: 0 },
  { position: 8, name: 'Bruno Martins', team: 'Eternal Red', goals: 0, assists: 0 },
  { position: 9, name: 'Diogo Rodrigues', team: 'Futbol Vivo', goals: 0, assists: 0 },
  { position: 10, name: 'Filipe Silva', team: 'COOP FC', goals: 0, assists: 0 }
]; 