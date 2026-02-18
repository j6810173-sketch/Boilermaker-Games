export interface Game {
  id: string;
  title: string;
  category: string;
  url: string;
  description: string;
  rating?: number;
}

export type Category = 'All' | 'Action' | 'Puzzle' | 'Strategy' | 'Sports' | 'Arcade' | 'IO';