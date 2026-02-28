export interface Movie {
  id: string;
  title: string;
  poster: string;
  year: string;
  quality: string;
  type: 'movie' | 'tv' | 'youtube';
  customUrl?: string;
}

export const movies: Movie[] = [
  {
    id: 'one-of-them-days',
    title: 'One of Them Days',
    poster: '',
    year: '2024',
    quality: 'HD',
    type: 'movie',
    customUrl: 'https://drive.google.com/file/d/1zTCsFLFGj0B9JvzcHrK9NciBDl9ApxH-/view'
  }
];
