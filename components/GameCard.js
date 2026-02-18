import React from 'react';
import htm from 'htm';

const html = htm.bind(React.createElement);

const GameCard = ({ game, onPlay }) => {
  return html`
    <div 
      className="group relative bg-zinc-900 rounded-2xl p-6 cursor-pointer transition-all hover:-translate-y-2 border border-white/5 hover:border-purdue-gold/30 hover:shadow-2xl hover:shadow-purdue-gold/5 flex flex-col justify-between min-h-[200px]"
      onClick=${() => onPlay(game)}
    >
      <div>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-purdue-gold transition-colors truncate pr-2">
            ${game.title}
          </h3>
          <span className="shrink-0 text-[10px] uppercase font-black tracking-widest px-2 py-1 bg-purdue-gold text-black rounded font-purdue">
            ${game.category}
          </span>
        </div>
        <p className="text-sm text-slate-400 line-clamp-3 mb-6">
          ${game.description}
        </p>
      </div>
      
      <button 
        className="w-full bg-purdue-gold hover:bg-purdue-goldDark text-black font-black py-3 px-4 rounded-xl transition-all shadow-lg shadow-purdue-gold/10 active:scale-95 text-xs tracking-widest uppercase font-purdue"
      >
        START GAME
      </button>
    </div>
  `;
};

export default GameCard;