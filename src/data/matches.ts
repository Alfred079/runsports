export interface Match {
  id: string;
  round: number;
  date: string;
  homeTeam: string;
  awayTeam: string;
  venue: string;
  score?: {
    home: number;
    away: number;
  };
}

export const matches: Match[] = [
  // Jornada 1 - 13 de Abril
  { id: '1-1', round: 1, date: '13/04/2024', homeTeam: 'Neandertal', awayTeam: 'Ta Cocar', venue: 'Campo 1' },
  { id: '1-2', round: 1, date: '13/04/2024', homeTeam: 'Legendary FC', awayTeam: 'Laranja Mecanica', venue: 'Campo 2' },
  { id: '1-3', round: 1, date: '13/04/2024', homeTeam: 'Goodboys', awayTeam: 'Uniao de Maputo', venue: 'Campo 3' },
  { id: '1-4', round: 1, date: '13/04/2024', homeTeam: 'Nos Deixa', awayTeam: 'Eternal Red', venue: 'Campo 4' },
  { id: '1-5', round: 1, date: '13/04/2024', homeTeam: 'Futbol Vivo', awayTeam: 'COOP FC', venue: 'Campo 5' },

  // Jornada 2 - 20 de Abril
  { id: '2-1', round: 2, date: '20/04/2024', homeTeam: 'Ta Cocar', awayTeam: 'Legendary FC', venue: 'Campo 1' },
  { id: '2-2', round: 2, date: '20/04/2024', homeTeam: 'Laranja Mecanica', awayTeam: 'Goodboys', venue: 'Campo 2' },
  { id: '2-3', round: 2, date: '20/04/2024', homeTeam: 'Uniao de Maputo', awayTeam: 'Nos Deixa', venue: 'Campo 3' },
  { id: '2-4', round: 2, date: '20/04/2024', homeTeam: 'Eternal Red', awayTeam: 'Futbol Vivo', venue: 'Campo 4' },
  { id: '2-5', round: 2, date: '20/04/2024', homeTeam: 'COOP FC', awayTeam: 'Neandertal', venue: 'Campo 5' },

  // Jornada 3 - 27 de Abril
  { id: '3-1', round: 3, date: '27/04/2024', homeTeam: 'Legendary FC', awayTeam: 'Laranja Mecanica', venue: 'Campo 1' },
  { id: '3-2', round: 3, date: '27/04/2024', homeTeam: 'Goodboys', awayTeam: 'Uniao de Maputo', venue: 'Campo 2' },
  { id: '3-3', round: 3, date: '27/04/2024', homeTeam: 'Nos Deixa', awayTeam: 'Eternal Red', venue: 'Campo 3' },
  { id: '3-4', round: 3, date: '27/04/2024', homeTeam: 'Futbol Vivo', awayTeam: 'COOP FC', venue: 'Campo 4' },
  { id: '3-5', round: 3, date: '27/04/2024', homeTeam: 'Neandertal', awayTeam: 'Ta Cocar', venue: 'Campo 5' },

  // Jornada 4 - 4 de Maio
  { id: '4-1', round: 4, date: '04/05/2024', homeTeam: 'Laranja Mecanica', awayTeam: 'Goodboys', venue: 'Campo 1' },
  { id: '4-2', round: 4, date: '04/05/2024', homeTeam: 'Uniao de Maputo', awayTeam: 'Nos Deixa', venue: 'Campo 2' },
  { id: '4-3', round: 4, date: '04/05/2024', homeTeam: 'Eternal Red', awayTeam: 'Futbol Vivo', venue: 'Campo 3' },
  { id: '4-4', round: 4, date: '04/05/2024', homeTeam: 'COOP FC', awayTeam: 'Neandertal', venue: 'Campo 4' },
  { id: '4-5', round: 4, date: '04/05/2024', homeTeam: 'Ta Cocar', awayTeam: 'Legendary FC', venue: 'Campo 5' },

  // Jornada 5 - 11 de Maio
  { id: '5-1', round: 5, date: '11/05/2024', homeTeam: 'Goodboys', awayTeam: 'Uniao de Maputo', venue: 'Campo 1' },
  { id: '5-2', round: 5, date: '11/05/2024', homeTeam: 'Nos Deixa', awayTeam: 'Eternal Red', venue: 'Campo 2' },
  { id: '5-3', round: 5, date: '11/05/2024', homeTeam: 'Futbol Vivo', awayTeam: 'COOP FC', venue: 'Campo 3' },
  { id: '5-4', round: 5, date: '11/05/2024', homeTeam: 'Neandertal', awayTeam: 'Ta Cocar', venue: 'Campo 4' },
  { id: '5-5', round: 5, date: '11/05/2024', homeTeam: 'Legendary FC', awayTeam: 'Laranja Mecanica', venue: 'Campo 5' },

  // Jornada 6 - 18 de Maio
  { id: '6-1', round: 6, date: '18/05/2024', homeTeam: 'Uniao de Maputo', awayTeam: 'Nos Deixa', venue: 'Campo 1' },
  { id: '6-2', round: 6, date: '18/05/2024', homeTeam: 'Eternal Red', awayTeam: 'Futbol Vivo', venue: 'Campo 2' },
  { id: '6-3', round: 6, date: '18/05/2024', homeTeam: 'COOP FC', awayTeam: 'Neandertal', venue: 'Campo 3' },
  { id: '6-4', round: 6, date: '18/05/2024', homeTeam: 'Ta Cocar', awayTeam: 'Legendary FC', venue: 'Campo 4' },
  { id: '6-5', round: 6, date: '18/05/2024', homeTeam: 'Laranja Mecanica', awayTeam: 'Goodboys', venue: 'Campo 5' },

  // Jornada 7 - 25 de Maio
  { id: '7-1', round: 7, date: '25/05/2024', homeTeam: 'Nos Deixa', awayTeam: 'Eternal Red', venue: 'Campo 1' },
  { id: '7-2', round: 7, date: '25/05/2024', homeTeam: 'Futbol Vivo', awayTeam: 'COOP FC', venue: 'Campo 2' },
  { id: '7-3', round: 7, date: '25/05/2024', homeTeam: 'Neandertal', awayTeam: 'Ta Cocar', venue: 'Campo 3' },
  { id: '7-4', round: 7, date: '25/05/2024', homeTeam: 'Legendary FC', awayTeam: 'Laranja Mecanica', venue: 'Campo 4' },
  { id: '7-5', round: 7, date: '25/05/2024', homeTeam: 'Goodboys', awayTeam: 'Uniao de Maputo', venue: 'Campo 5' },

  // Jornada 8 - 1 de Junho
  { id: '8-1', round: 8, date: '01/06/2024', homeTeam: 'Eternal Red', awayTeam: 'Futbol Vivo', venue: 'Campo 1' },
  { id: '8-2', round: 8, date: '01/06/2024', homeTeam: 'COOP FC', awayTeam: 'Neandertal', venue: 'Campo 2' },
  { id: '8-3', round: 8, date: '01/06/2024', homeTeam: 'Ta Cocar', awayTeam: 'Legendary FC', venue: 'Campo 3' },
  { id: '8-4', round: 8, date: '01/06/2024', homeTeam: 'Laranja Mecanica', awayTeam: 'Goodboys', venue: 'Campo 4' },
  { id: '8-5', round: 8, date: '01/06/2024', homeTeam: 'Uniao de Maputo', awayTeam: 'Nos Deixa', venue: 'Campo 5' },

  // Jornada 9 - 8 de Junho
  { id: '9-1', round: 9, date: '08/06/2024', homeTeam: 'Futbol Vivo', awayTeam: 'COOP FC', venue: 'Campo 1' },
  { id: '9-2', round: 9, date: '08/06/2024', homeTeam: 'Neandertal', awayTeam: 'Ta Cocar', venue: 'Campo 2' },
  { id: '9-3', round: 9, date: '08/06/2024', homeTeam: 'Legendary FC', awayTeam: 'Laranja Mecanica', venue: 'Campo 3' },
  { id: '9-4', round: 9, date: '08/06/2024', homeTeam: 'Goodboys', awayTeam: 'Uniao de Maputo', venue: 'Campo 4' },
  { id: '9-5', round: 9, date: '08/06/2024', homeTeam: 'Nos Deixa', awayTeam: 'Eternal Red', venue: 'Campo 5' }
]; 