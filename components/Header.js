import React from 'react';
import htm from 'htm';

const html = htm.bind(React.createElement);

const Header = ({ searchQuery, setSearchQuery }) => {
  return html`
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-purdue-gold/20 px-4 py-3 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purdue-gold rounded-lg flex items-center justify-center shadow-lg shadow-purdue-gold/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 15V9h8V4.16L19.84 12 12 19.84V15H4z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-purdue text-purdue-gold leading-none">
              BOILERMAKER GAMES
            </h1>
            <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">Purdue Unblocked Portal</span>
          </div>
        </div>
        
        <div className="relative w-full sm:w-96">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="h-5 w-5 text-purdue-gold/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input
            type="text"
            className="w-full bg-slate-900 border border-purdue-gold/10 text-slate-100 pl-10 pr-4 py-2 rounded-xl focus:ring-2 focus:ring-purdue-gold/50 transition-all outline-none text-sm placeholder-slate-600"
            placeholder="Search unblocked games..."
            value=${searchQuery}
            onChange=${(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-slate-400">
          <!-- Links removed per user request -->
        </div>
      </div>
    </nav>
  `;
};

export default Header;