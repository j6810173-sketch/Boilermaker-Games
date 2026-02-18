import React from 'react';
import htm from 'htm';

const html = htm.bind(React.createElement);

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  const CATEGORIES = ['All', 'Action', 'Puzzle', 'Strategy', 'Sports', 'Arcade', 'IO'];
  
  return html`
    <aside className="hidden lg:block w-64 h-[calc(100vh-80px)] sticky top-20 p-4 overflow-y-auto">
      <div className="space-y-8">
        <div>
          <h3 className="text-[10px] font-black text-purdue-gold/60 uppercase tracking-[0.2em] mb-4 px-4">Game Categories</h3>
          <div className="space-y-1">
            ${CATEGORIES.map((category) => html`
              <button
                key=${category}
                onClick=${() => setSelectedCategory(category)}
                className=${`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-black tracking-widest uppercase font-purdue transition-all ${
                  selectedCategory === category 
                    ? 'bg-purdue-gold text-black shadow-lg shadow-purdue-gold/20' 
                    : 'text-slate-500 hover:bg-zinc-900 hover:text-purdue-gold'
                }`}
              >
                ${category}
              </button>
            `)}
          </div>
        </div>

        <div className="p-5 bg-gradient-to-br from-purdue-gold/10 to-transparent rounded-2xl border border-purdue-gold/10">
          <h4 className="text-xs font-black text-purdue-gold mb-2 uppercase tracking-widest font-purdue">Boiler Up!</h4>
          <p className="text-xs text-slate-500 leading-relaxed font-medium">
            Join the Purdue gaming community. High scores are reset weekly. Hammermaker!
          </p>
          <div className="mt-4 pt-4 border-t border-purdue-gold/10">
             <div className="flex items-center gap-2 text-[10px] font-bold text-purdue-gold uppercase">
               <span className="w-1.5 h-1.5 rounded-full bg-purdue-gold animate-pulse"></span>
               1,248 Players Online
             </div>
          </div>
        </div>
      </div>
    </aside>
  `;
};

export default Sidebar;