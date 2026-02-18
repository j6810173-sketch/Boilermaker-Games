
import React, { useState } from 'react';
import htm from 'htm';

const html = htm.bind(React.createElement);

const Header = ({ searchQuery, setSearchQuery }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
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

          <button 
            onClick=${handleCopyLink}
            className=${`hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl border border-purdue-gold/30 font-purdue text-xs font-black tracking-widest transition-all hover:bg-purdue-gold hover:text-black ${copied ? 'bg-purdue-gold text-black' : 'text-purdue-gold bg-transparent'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            ${copied ? 'COPIED!' : 'SHARE'}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-slate-400">
          <!-- Links removed per user request -->
        </div>
      </div>
    </nav>
  `;
};

export default Header;
