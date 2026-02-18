import React from 'react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
  onPlay: (game: Game) => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onPlay }) => {
  return (
    <div 
      className="group relative bg-zinc-900 rounded-2xl overflow-hidden cursor-pointer transition-all hover:-translate-y-2 border border-white/5 hover:border-purdue-gold/30 hover:shadow-2xl hover:shadow-purdue-gold/5 flex flex-col h-full min-h-[280px]"
      onClick={() => onPlay(game)}
    >
      <div className="h-32 w-full relative bg-gradient-to-br from-zinc-800 via-zinc-900 to-black flex items-center justify-center border-b border-white/5">
        <div className="font-purdue text-7xl text-purdue-gold/5 select-none group-hover:scale-125 group-hover:text-purdue-gold/20 transition-all duration-700 ease-out">
          {game.title.charAt(0)}
        </div>
        <div className="absolute top-4 right-4">
          <span className="text-[9px] uppercase font-black tracking-[0.2em] px-2 py-1 bg-purdue-gold text-black rounded-sm font-purdue shadow-sm">
            {game.category}
          </span>
        </div>
        <div className="absolute bottom-2 left-4 opacity-20 group-hover:opacity-100 transition-opacity">
           <div className="flex gap-1">
              <div className="w-1 h-1 bg-purdue-gold rounded-full"></div>
              <div className="w-1 h-1 bg-purdue-gold rounded-full opacity-50"></div>
              <div className="w-1 h-1 bg-purdue-gold rounded-full opacity-20"></div>
           </div>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-1 justify-between bg-zinc-900/50 backdrop-blur-sm">
        <div>
          <h3 className="text-2xl font-purdue tracking-wide text-white group-hover:text-purdue-gold transition-colors truncate mb-3 uppercase">
            {game.title}
          </h3>
          <p className="text-[11px] text-slate-500 line-clamp-3 mb-6 font-medium leading-relaxed uppercase tracking-wider">
            {game.description}
          </p>
        </div>
        
        <button 
          className="w-full bg-zinc-800 group-hover:bg-purdue-gold text-slate-400 group-hover:text-black font-black py-3.5 px-4 rounded-xl transition-all shadow-lg active:scale-95 text-[10px] tracking-[0.2em] uppercase font-purdue border border-white/5 group-hover:border-transparent"
        >
          INITIATE SESSION
        </button>
      </div>
    </div>
  );
};

export default GameCard;