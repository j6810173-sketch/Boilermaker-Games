
import { Game } from './types';

export const GAMES: Game[] = [
  {
    id: '2048',
    title: '2048',
    category: 'Puzzle',
    url: 'https://play2048.co/',
    thumbnail: 'https://picsum.photos/id/1/400/300',
    description: 'Join the numbers and get to the 2048 tile!'
  },
  {
    id: 'hextris',
    title: 'Hextris',
    category: 'Arcade',
    url: 'https://hextris.io/',
    thumbnail: 'https://picsum.photos/id/2/400/300',
    description: 'Fast-paced puzzle game inspired by Tetris.'
  },
  {
    id: 'cookie-clicker',
    title: 'Cookie Clicker',
    category: 'Strategy',
    url: 'https://orteil.dashnet.org/cookieclicker/',
    thumbnail: 'https://picsum.photos/id/12/400/300',
    description: 'The ultimate idle game. Bake all the cookies!'
  },
  {
    id: 'paper-io-2',
    title: 'Paper.io 2',
    category: 'IO',
    url: 'https://paper-io.com/',
    thumbnail: 'https://picsum.photos/id/4/400/300',
    description: 'Capture as much territory as possible.'
  },
  {
    id: 'moto-x3m',
    title: 'Moto X3M',
    category: 'Sports',
    url: 'https://moto-x3m.io/',
    thumbnail: 'https://picsum.photos/id/5/400/300',
    description: 'Bike racing game with challenging levels and stunts.'
  },
  {
    id: 'flappy-bird',
    title: 'Flappy Bird',
    category: 'Arcade',
    url: 'https://flappybird.io/',
    thumbnail: 'https://picsum.photos/id/6/400/300',
    description: 'Classic bird-flying frustration at its finest.'
  },
  {
    id: 'slope',
    title: 'Slope',
    category: 'Action',
    url: 'https://slope.io/',
    thumbnail: 'https://picsum.photos/id/7/400/300',
    description: 'Endless running game with a neon ball on a slope.'
  },
  {
    id: 'slither-io',
    title: 'Slither.io',
    category: 'IO',
    url: 'https://slither.io/',
    thumbnail: 'https://picsum.photos/id/8/400/300',
    description: 'Eat glowing orbs and grow your snake.'
  },
  {
    id: 'crossy-road',
    title: 'Crossy Road',
    category: 'Arcade',
    url: 'https://www.crossyroad.com/',
    thumbnail: 'https://picsum.photos/id/9/400/300',
    description: 'Why did the chicken cross the road?'
  },
  {
    id: 'tetris',
    title: 'Tetris',
    category: 'Puzzle',
    url: 'https://tetris.com/play-tetris',
    thumbnail: 'https://picsum.photos/id/10/400/300',
    description: 'The original block-stacking puzzle game.'
  },
  {
    id: 'drift-hunters',
    title: 'Drift Hunters',
    category: 'Sports',
    url: 'https://drift-hunters.io/',
    thumbnail: 'https://picsum.photos/id/11/400/300',
    description: 'High-speed drifting simulator.'
  }
];

export const CATEGORIES: string[] = ['All', 'Action', 'Puzzle', 'Strategy', 'Sports', 'Arcade', 'IO'];
