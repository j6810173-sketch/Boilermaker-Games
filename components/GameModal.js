import React, { useEffect, useState } from 'react';
import htm from 'htm';

const html = htm.bind(React.createElement);

const GameModal = ({ game, onClose }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    if (game) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [game]);

  if (!game) return null;

  return html`
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 bg-black/95 backdrop-blur-md">
      <div className=${`relative w-full h-full ${isFullScreen ? 'max-w-none max-h-none' : 'max-w-6xl max-h-[90vh]'} bg-zinc-950 flex flex-col rounded-none sm:rounded-2xl overflow-hidden shadow-2xl border border-purdue-gold/20`}>
        <div className="flex items-center justify-between px-6 py-4 bg-zinc-900 border-b border-purdue-gold/10">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-purdue-gold rounded flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 15V9h8V4.16L19.84 12 12 19.84V15H4z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-purdue tracking-wide text-purdue-gold uppercase">${game.title}</h2>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">${game.category} • BOILERMAKER CLASSIC</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick=${() => setIsFullScreen(!isFullScreen)}
              className="p-2 text-slate-400 hover:text-purdue-gold hover:bg-purdue-gold/10 rounded-lg transition-all"
              title="Toggle Cinema Mode"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </button>
            <button 
              onClick=${onClose}
              className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-500/10 rounded-lg transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex-1 bg-black relative">
          <iframe 
            id="userHtmlFrame"
            src=${game.url}
            frameborder="0"
            scrolling="yes"
            style=${{ overflow: 'auto' }}
            className="absolute inset-0 w-full h-full border-none"
            title=${game.title}
            allowFullScreen
            sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox allow-downloads allow-storage-access-by-user-activation"
          />
        </div>

        ${!isFullScreen && html`
          <div className="hidden sm:flex items-center justify-between px-6 py-4 bg-zinc-900">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-purdue-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
                Rate Game
              </button>
            </div>
            <div className="text-[10px] text-purdue-gold/40 uppercase tracking-[0.3em] font-black">
              Property of Boiler Arcade • Boiler Up!
            </div>
          </div>
        `}
      </div>
    </div>
  `;
};

export default GameModal;