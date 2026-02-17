
import React, { useEffect, useState } from 'react';

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

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 bg-black/90 backdrop-blur-sm">
      <div className={`relative w-full h-full ${isFullScreen ? 'max-w-none max-h-none' : 'max-w-6xl max-h-[90vh]'} bg-slate-900 flex flex-col rounded-none sm:rounded-2xl overflow-hidden shadow-2xl`}>
        <div className="flex items-center justify-between px-6 py-4 bg-slate-800/50 border-b border-slate-700">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{game.title}</h2>
              <p className="text-xs text-slate-400">{game.category}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsFullScreen(!isFullScreen)}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-all"
              title="Toggle Cinema Mode"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </button>
            <button 
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-500/10 rounded-lg transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex-1 bg-black relative">
          <iframe 
            src={game.url}
            className="absolute inset-0 w-full h-full border-none"
            title={game.title}
            allowFullScreen
          />
        </div>

        {!isFullScreen && (
          <div className="hidden sm:flex items-center justify-between px-6 py-4 bg-slate-800/30">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
                Rate
              </button>
              <button className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
                Share
              </button>
            </div>
            <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">
              Powered by Nexus Arcade Engine
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameModal;
