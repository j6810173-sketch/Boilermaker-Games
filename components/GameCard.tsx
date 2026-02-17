
import React from 'react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
  onPlay: (game: Game) => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onPlay }) => {
  return (
    <div 
      className="group relative bg-slate-800 rounded-2xl overflow-hidden cursor-pointer transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10"
      onClick={() => onPlay(game)}
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={game.thumbnail} 
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-4 bg-gradient-to-t from-slate-900 to-slate-800">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-slate-100 group-hover:text-indigo-400 transition-colors truncate">
            {game.title}
          </h3>
          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-slate-700 rounded text-slate-300">
            {game.category}
          </span>
        </div>
        <p className="text-sm text-slate-400 line-clamp-2 min-h-[2.5rem]">
          {game.description}
        </p>
        <button 
          className="mt-4 w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-xl transition-all shadow-lg shadow-indigo-500/20 active:scale-95 text-sm"
        >
          PLAY NOW
        </button>
      </div>
    </div>
  );
};

export default GameCard;
