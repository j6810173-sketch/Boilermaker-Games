
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import GameCard from './components/GameCard';
import GameModal from './components/GameModal';
import Sidebar from './components/Sidebar';
import { GAMES } from './constants';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeGame, setActiveGame] = useState(null);

  const filteredGames = useMemo(() => {
    return GAMES.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          game.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || game.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="flex max-w-7xl mx-auto w-full px-4 sm:px-8 py-8">
        <Sidebar 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
        />

        <main className="flex-1 lg:pl-8">
          <div className="flex lg:hidden overflow-x-auto pb-6 gap-2 no-scrollbar">
            {['All', 'Action', 'Puzzle', 'Strategy', 'Sports', 'Arcade', 'IO'].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-orbitron font-bold text-white mb-2">
              {selectedCategory === 'All' ? 'Trending Games' : `${selectedCategory} Games`}
            </h2>
            <p className="text-slate-400 text-sm">
              Discover the best unblocked games on the web.
            </p>
          </div>

          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredGames.map(game => (
                <GameCard 
                  key={game.id} 
                  game={game} 
                  onPlay={setActiveGame} 
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-4 text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-300">No games found</h3>
              <p className="text-slate-500 max-w-xs mt-2">
                We couldn't find any games matching your current search or filters.
              </p>
              <button 
                onClick={() => {setSearchQuery(''); setSelectedCategory('All');}}
                className="mt-6 text-indigo-400 hover:text-indigo-300 font-bold text-sm underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </main>
      </div>

      <footer className="mt-auto border-t border-slate-900 py-12 px-4 sm:px-8 bg-slate-950/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
             <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-slate-700 rounded flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-orbitron font-bold tracking-tighter text-slate-300">NEXUS ARCADE</span>
            </div>
            <p className="text-slate-500 text-xs">© 2024 Nexus Arcade Portal. All rights reserved.</p>
          </div>
          
          <div className="flex gap-8 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <a href="#" className="hover:text-indigo-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">DMCA</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {activeGame && (
        <GameModal 
          game={activeGame} 
          onClose={() => setActiveGame(null)} 
        />
      )}
    </div>
  );
};

export default App;
