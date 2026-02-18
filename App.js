import React, { useState, useMemo, useEffect } from 'react';
import htm from 'htm';
import Header from './components/Header.js';
import GameCard from './components/GameCard.js';
import GameModal from './components/GameModal.js';
import Sidebar from './components/Sidebar.js';

const html = htm.bind(React.createElement);

const App = () => {
  const [games, setGames] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeGame, setActiveGame] = useState(null);

  useEffect(() => {
    fetch('./games.json')
      .then(res => res.json())
      .then(data => setGames(data))
      .catch(err => console.error('Failed to load games:', err));
  }, []);

  const filteredGames = useMemo(() => {
    return games.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          game.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || game.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [games, searchQuery, selectedCategory]);

  return html`
    <div className="min-h-screen flex flex-col bg-black text-slate-100">
      <${Header} searchQuery=${searchQuery} setSearchQuery=${setSearchQuery} />

      <div className="flex max-w-7xl mx-auto w-full px-4 sm:px-8 py-8">
        <${Sidebar} 
          selectedCategory=${selectedCategory} 
          setSelectedCategory=${setSelectedCategory} 
        />

        <main className="flex-1 lg:pl-8">
          <div className="flex lg:hidden overflow-x-auto pb-6 gap-2 no-scrollbar">
            ${['All', 'Action', 'Puzzle', 'Strategy', 'Sports', 'Arcade', 'IO'].map(cat => html`
              <button
                key=${cat}
                onClick=${() => setSelectedCategory(cat)}
                className=${`whitespace-nowrap px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest font-purdue transition-all ${
                  selectedCategory === cat ? 'bg-purdue-gold text-black' : 'bg-zinc-900 text-slate-500'
                }`}
              >
                ${cat}
              </button>
            `)}
          </div>

          <div className="mb-10 relative">
            <div className="absolute -left-4 top-0 w-1 h-12 bg-purdue-gold hidden lg:block"></div>
            <h2 className="text-4xl font-purdue font-black text-purdue-gold tracking-tight mb-2 uppercase">
              ${selectedCategory === 'All' ? 'BOILERMAKER PICKS' : `${selectedCategory} CHALLENGES`}
            </h2>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
              Unblocked and high-performance gaming for West Lafayette.
            </p>
          </div>

          ${filteredGames.length > 0 ? html`
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              ${filteredGames.map(game => html`
                <${GameCard} 
                  key=${game.id} 
                  game=${game} 
                  onPlay=${setActiveGame} 
                />
              `)}
            </div>
          ` : html`
            <div className="flex flex-col items-center justify-center py-24 text-center border-2 border-dashed border-purdue-gold/10 rounded-3xl bg-zinc-950">
              <div className="w-16 h-16 bg-purdue-gold/10 rounded-2xl flex items-center justify-center mb-6 text-purdue-gold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-purdue font-black text-purdue-gold uppercase tracking-widest">No Matches Found</h3>
              <p className="text-slate-500 max-w-xs mt-2 text-sm font-medium">
                The Boilermakers couldn't locate any games matching your intel.
              </p>
              <button 
                onClick=${() => {setSearchQuery(''); setSelectedCategory('All');}}
                className="mt-8 text-purdue-gold hover:text-white font-black text-xs uppercase tracking-[0.2em] border-b border-purdue-gold/30 pb-1 transition-all"
              >
                Reset Search Filters
              </button>
            </div>
          `}
        </main>
      </div>

      <footer className="mt-auto border-t border-purdue-gold/10 py-16 px-4 sm:px-8 bg-zinc-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start gap-3">
             <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purdue-gold rounded flex items-center justify-center shadow-lg shadow-purdue-gold/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 15V9h8V4.16L19.84 12 12 19.84V15H4z" />
                </svg>
              </div>
              <span className="font-purdue font-black text-2xl tracking-tight text-purdue-gold">BOILERMAKER GAMES</span>
            </div>
            <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">© 2024 Boilermaker Gaming Syndicate. Not affiliated with Purdue University.</p>
          </div>
          
          <div className="flex gap-10 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-purdue-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-purdue-gold transition-colors">Terms</a>
            <a href="#" className="hover:text-purdue-gold transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      ${activeGame && html`
        <${GameModal} 
          game=${activeGame} 
          onClose=${() => setActiveGame(null)} 
        />
      `}
    </div>
  `;
};

export default App;