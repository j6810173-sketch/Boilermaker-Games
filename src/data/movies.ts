export interface Movie {
  id: string;
  title: string;
  poster: string;
  year: string;
  quality: string;
  type: 'movie' | 'tv' | 'youtube';
  description?: string;
  customUrl?: string;
}

export const movies: Movie[] = [
  {
    id: 'one-of-them-days',
    title: 'One of Them Days',
    poster: 'https://lh3.googleusercontent.com/sitesv/APaQ0STXe8X5TBps6sNKNQzCcu3e90VGDRx5sNGzk1maBPUXEU4rJFB9jT-u3xmQlHSKZbzTZgBRGw3CUFav4_YrPKejUeNgsncX8x1Dv3Lxg2E1VqNhklIVjSzsejmBt_AU4nmBOZLXNtnbj_ttKjHR0DBPPyn6d0mAmbdj1FlN0a5699eUKjV9jq4Fe9eCRsKWK-Stwn0LJG1OZi9VJYYufc1NF2oS8JQLk7gq=w1280',
    year: '2024',
    quality: '4K',
    type: 'movie',
    description: 'A hilarious comedy about the unexpected turns of life.',
    customUrl: 'https://drive.google.com/file/d/1zTCsFLFGj0B9JvzcHrK9NciBDl9ApxH-/preview'
  },
  {
    id: 'toy-story-4',
    title: 'Toy Story 4',
    poster: 'https://lh3.googleusercontent.com/sitesv/APaQ0SQ3uJQ3g7CtmmgennwtXpKFh6iRV_bAsA63MiXkCzTJMITSd29c0op5qW-om07kaxvaRXc4SC9ZwUy4p8OFSQ_UMxvweTgQQxUusxEiTojM1fbDtuEGbsQ11Jr7n9CSjh39-z3pFnp-CdzNxT_DY5t3c7dOyPPV9Sb7wZYLtXauHIYuJx4pjQKmCWtZaank0pSonqdVeYQ7a7YrVgwWzPH0g5nf_aqIfjNFMZU=w1280',
    year: '2019',
    quality: '4K',
    type: 'movie',
    description: 'When a new toy called "Forky" joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.',
    customUrl: 'https://drive.google.com/file/d/1-3BhV5qghqkqn2-xvlawSEvFNLvejMpn/preview'
  },
  {
    id: 'captain-underpants',
    title: 'Captain Underpants',
    poster: 'https://lh3.googleusercontent.com/sitesv/APaQ0SRUyYAhl0fRJzhOdY23EYT5d5htHNWxNRDNU7Xp1hZZ8v1Dt8Ddj9mxeszoni3PAm4R3pBtAmgAHiZH_bIb2AU3DLXxXXXQAMIAZL6lUgx0MS0xW-8pjLDFLkrK97e4AKNbBrtapaAXOWFUVdDQ-ZsEufsadr1fCxXDwRIVhTOprspiFTwYaBJHzUIMh4W_Qe8D0tZZs2LsXa-PkxbBsqsFqIz24h3sltRmMGg=w1280',
    year: '2017',
    quality: '4K',
    type: 'movie',
    description: "Two overly imaginative pranksters hypnotize their principal into thinking he's a ridiculously enthusiastic, incredibly dimwitted superhero named Captain Underpants.",
    customUrl: 'https://drive.google.com/file/d/1zTCsFLFGj0B9JvzcHrK9NciBDl9ApxH-/preview'
  }
];
