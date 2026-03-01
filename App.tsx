
import React, { useState, useMemo, useEffect } from 'react';
import { Gamepad2, Film, Globe, Settings, Search, X, ChevronRight, Share2, Check, ExternalLink, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Game } from './types';
import { Movie } from './src/data/movies';

const App = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [activeTab, setActiveTab] = useState<'games' | 'movies' | 'browser' | 'settings'>('games');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeGame, setActiveGame] = useState<Game | null>(null);
  const [recentlyPlayed, setRecentlyPlayed] = useState<Game[]>([]);
  const [isCopied, setIsCopied] = useState(false);



  useEffect(() => {
    const saved = localStorage.getItem('recentlyPlayed');
    if (saved) {
      try {
        setRecentlyPlayed(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse recently played games', e);
      }
    }
  }, []);

  const addToRecentlyPlayed = (game: Game) => {
    setRecentlyPlayed(prev => {
      const filtered = prev.filter(g => g.id !== game.id);
      const updated = [game, ...filtered].slice(0, 5);
      localStorage.setItem('recentlyPlayed', JSON.stringify(updated));
      return updated;
    });
  };

  useEffect(() => {
    fetch('./games.json')
      .then(res => res.json())
      .then(data => setGames(data))
      .catch(err => console.error('Failed to load games:', err));
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (activeGame && (event.key === 'Escape' || event.key === 'Control')) {
        setActiveGame(null);
        if (document.fullscreenElement) {
          document.exitFullscreen().catch(() => {});
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeGame]);

  const filteredGames = useMemo(() => {
    return games.filter(game => 
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [games, searchQuery]);

  const featuredGame = useMemo(() => {
    return games.find(g => g.id === 'fnae') || games[0];
  }, [games]);



  const renderContent = () => {
    switch (activeTab) {
      case 'games':
        return (
          <div className="p-6">
            <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-4xl font-purdue font-bold text-purdue-gold mb-2 tracking-tight uppercase">Elite Archives</h1>
                <p className="text-slate-400 text-sm uppercase tracking-widest font-medium opacity-60">
                  {games.length}+ High-performance unblocked sessions
                </p>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purdue-gold/50" />
                <input 
                  type="text" 
                  placeholder="SEARCH ARCHIVES..." 
                  className="bg-zinc-900/50 border border-purdue-gold/20 rounded-xl pl-10 pr-4 py-2.5 w-full md:w-64 text-xs font-purdue tracking-widest focus:ring-2 focus:ring-purdue-gold outline-none transition-all text-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Recently Played Section */}
            {!searchQuery && recentlyPlayed.length > 0 && (
              <div className="mb-12">
                <h2 className="text-xs font-bold text-purdue-gold uppercase tracking-[0.3em] mb-4 opacity-60">Recently Played</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
                  {recentlyPlayed.map(game => (
                    <motion.div 
                      key={`recent-${game.id}`}
                      onClick={() => { setActiveGame(game); addToRecentlyPlayed(game); }}
                      className="group relative aspect-[4/3] bg-zinc-900 rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-purdue-gold/40 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-purdue-gold/10"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                      <div className="absolute inset-0 flex items-center justify-center bg-zinc-800 text-purdue-gold/5 text-6xl font-purdue select-none group-hover:scale-110 group-hover:text-purdue-gold/15 transition-all duration-700 ease-out">
                        {game.title.charAt(0)}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                        <h3 className="text-white font-purdue tracking-wider text-sm truncate group-hover:text-purdue-gold transition-colors uppercase">{game.title}</h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Featured Section */}
            {!searchQuery && featuredGame && (
              <div className="mb-12">
                <h2 className="text-xs font-bold text-purdue-gold uppercase tracking-[0.3em] mb-4 opacity-60">Featured Session</h2>
                <motion.div 
                  onClick={() => { setActiveGame(featuredGame); addToRecentlyPlayed(featuredGame); }}
                  className="group relative h-64 md:h-96 bg-zinc-900 rounded-3xl overflow-hidden cursor-pointer border border-purdue-gold/20 hover:border-purdue-gold/50 transition-all duration-500 shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
                  <div className="absolute inset-0 flex items-center justify-center bg-zinc-800 text-purdue-gold/5 text-[20rem] font-purdue select-none group-hover:scale-105 transition-transform duration-1000">
                    {featuredGame.title.charAt(0)}
                  </div>
                  <div className="absolute inset-0 p-8 md:p-12 z-20 flex flex-col justify-center max-w-xl">
                    <span className="text-purdue-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-purdue-gold rounded-full animate-pulse"></span>
                      Priority Access
                    </span>
                    <h3 className="text-4xl md:text-6xl font-purdue font-bold text-white mb-4 tracking-wider uppercase leading-none">
                      {featuredGame.title}
                    </h3>
                    <p className="text-slate-400 text-sm md:text-base font-medium mb-8 line-clamp-2">
                      {featuredGame.description}
                    </p>
                    <button className="w-fit bg-purdue-gold text-black font-purdue font-bold py-4 px-10 rounded-2xl tracking-widest uppercase text-xs hover:scale-105 transition-transform shadow-lg shadow-purdue-gold/20">
                      Launch Session
                    </button>
                  </div>
                </motion.div>
              </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
              {filteredGames.map(game => (
                <motion.div 
                  key={game.id}
                  layoutId={game.id}
                  onClick={() => { setActiveGame(game); addToRecentlyPlayed(game); }}
                  className="group relative aspect-[4/3] bg-zinc-900 rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-purdue-gold/40 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-purdue-gold/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                  <div className="absolute inset-0 flex items-center justify-center bg-zinc-800 text-purdue-gold/5 text-8xl font-purdue select-none group-hover:scale-110 group-hover:text-purdue-gold/15 transition-all duration-700 ease-out">
                    {game.title.charAt(0)}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                    <h3 className="text-white font-purdue tracking-wider text-lg truncate group-hover:text-purdue-gold transition-colors uppercase">{game.title}</h3>
                    <div className="h-0.5 w-8 bg-purdue-gold/30 group-hover:w-16 transition-all duration-500 mt-1"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'movies':
        return (
          <div className="h-full flex flex-col bg-zinc-950">
            <div className="p-4 border-b border-white/5 bg-zinc-950/50 backdrop-blur-md flex items-center justify-between">
              <h1 className="text-2xl font-purdue font-bold text-purdue-gold tracking-tight uppercase">Cinema Portal</h1>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-purdue font-bold text-white/40 uppercase tracking-widest">Live Stream Active</span>
              </div>
            </div>
            <div className="flex-1 bg-black overflow-hidden relative">
              <iframe 
                src="https://hideoutt.vercel.app/movies.html" 
                className="w-full h-full border-none"
                title="Cinema Portal"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media; clipboard-write; accelerometer; gyroscope; web-share"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        );
      case 'browser':
        return (
          <div className="h-full flex flex-col">
            <div className="p-6 border-b border-white/5">
              <h1 className="text-4xl font-purdue font-bold text-purdue-gold mb-2 tracking-tight uppercase">Secure Browser</h1>
              <p className="text-slate-400 text-sm uppercase tracking-widest font-medium opacity-60">Unblocked web access via secure node</p>
            </div>
            <div className="flex-1 bg-white">
              <iframe 
                src="https://learn.texasmath.org/" 
                className="w-full h-full border-none"
                title="Browser"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media; clipboard-write; accelerometer; gyroscope; web-share"
              />
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="p-6 max-w-2xl mx-auto w-full">
            <h1 className="text-4xl font-purdue font-bold text-purdue-gold mb-8 tracking-tight uppercase">System Settings</h1>
            
            <div className="space-y-6">
              <section className="bg-zinc-900/50 border border-white/5 rounded-2xl p-8">
                <h2 className="text-xl font-purdue font-bold text-white mb-6 uppercase tracking-widest">Tab Cloak (Stealth Mode)</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {['Google', 'Classroom', 'Drive', 'Docs'].map(cloak => (
                    <button key={cloak} className="p-4 bg-zinc-800 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-purdue-gold hover:text-black transition-all border border-white/5">
                      {cloak}
                    </button>
                  ))}
                </div>
              </section>

              <section className="bg-zinc-900/50 border border-white/5 rounded-2xl p-8">
                <h2 className="text-xl font-purdue font-bold text-white mb-4 uppercase tracking-widest">About Portal</h2>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  Boilermaker Games is a premium unblocked portal designed for the Purdue community. 
                  High-performance, secure, and always unblocked. 
                  Zero data is stored on our servers. Stay safe.
                </p>
              </section>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-black text-slate-100 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-20 md:w-64 border-r border-white/5 flex flex-col bg-zinc-950 z-50">
        <div className="p-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purdue-gold rounded-xl flex items-center justify-center shadow-lg shadow-purdue-gold/20">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="h-6 w-6">
                <text y=".9em" fontSize="80" fontWeight="bold" fill="black" fontFamily="serif" x="50%" textAnchor="middle">P</text>
              </svg>
            </div>
            <div className="hidden md:flex flex-col">
              <span className="font-purdue font-bold text-xl tracking-wider text-purdue-gold leading-none">BOILERMAKER</span>
              <span className="font-purdue font-bold text-xs tracking-[0.3em] text-white opacity-60">GAMES</span>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          <NavItem 
            icon={<Gamepad2 />} 
            label="GAMES" 
            active={activeTab === 'games'} 
            onClick={() => setActiveTab('games')} 
          />
          <NavItem 
            icon={<Film />} 
            label="MOVIES" 
            active={activeTab === 'movies'} 
            onClick={() => setActiveTab('movies')} 
          />
          <NavItem 
            icon={<Globe />} 
            label="BROWSER" 
            active={activeTab === 'browser'} 
            onClick={() => setActiveTab('browser')} 
          />
        </nav>

        <div className="p-4 space-y-2">
          <button 
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              setIsCopied(true);
              setTimeout(() => setIsCopied(false), 2000);
            }}
            className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all group ${
              isCopied ? 'bg-emerald-500 text-white' : 'text-slate-500 hover:text-white hover:bg-white/5'
            }`}
          >
            <div className={`${isCopied ? 'text-white' : 'group-hover:text-purdue-gold'} transition-colors`}>
              {isCopied ? <Check size={24} /> : <Share2 size={24} />}
            </div>
            <span className="hidden md:block font-purdue font-bold text-sm tracking-widest">
              {isCopied ? 'COPIED!' : 'SHARE'}
            </span>
          </button>
          <NavItem 
            icon={<Settings />} 
            label="SETTINGS" 
            active={activeTab === 'settings'} 
            onClick={() => setActiveTab('settings')} 
          />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative bg-black">
        {renderContent()}
      </main>

      {/* Game Modal */}
      <AnimatePresence>
        {activeGame && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black"
          >
            {/* Ultra-Minimal Close Trigger (Top Right Corner) */}
            <div className="absolute top-4 right-4 z-[120] flex items-center gap-4">
              <span className="text-[10px] font-purdue font-bold text-white/20 uppercase tracking-widest hidden md:block">
                Press ESC or CTRL to Exit
              </span>
              <button 
                onClick={() => setActiveGame(null)}
                className="p-2 bg-black/20 hover:bg-purdue-gold rounded-full transition-all text-white/20 hover:text-black opacity-0 hover:opacity-100 group"
                title="Close Session"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="w-full h-full bg-black overflow-hidden relative">
              <iframe 
                src={activeGame.iframe} 
                className="w-full h-full border-none absolute inset-0 scale-[1.01]" // Slight scale to hide potential edge artifacts
                title={activeGame.title}
                allow="autoplay; gamepad; fullscreen; keyboard; focus-without-user-activation; clipboard-read; clipboard-write; accelerometer; gyroscope; web-share"
                allowFullScreen
                loading="eager"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

const NavItem = ({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all group ${
      active ? 'bg-purdue-gold text-black shadow-lg shadow-purdue-gold/20' : 'text-slate-500 hover:text-white hover:bg-white/5'
    }`}
  >
    <div className={`${active ? 'text-black' : 'group-hover:text-purdue-gold'} transition-colors`}>
      {React.cloneElement(icon as React.ReactElement, { size: 24 })}
    </div>
    <span className="hidden md:block font-purdue font-bold text-sm tracking-widest">{label}</span>
    {active && <ChevronRight className="hidden md:block ml-auto w-4 h-4" />}
  </button>
);

export default App;
