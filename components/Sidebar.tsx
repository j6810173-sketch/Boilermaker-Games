
import React from 'react';
import { CATEGORIES } from '../constants';

interface SidebarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <aside className="hidden lg:block w-64 h-[calc(100vh-80px)] sticky top-20 p-4 overflow-y-auto">
      <div className="space-y-6">
        <div>
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 px-4">Categories</h3>
          <div className="space-y-1">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-full flex items-center justify-between px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  selectedCategory === category 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                {category}
                <span className="text-[10px] opacity-50 bg-black/20 px-1.5 rounded">
                   {/* This could be a count dynamic based on games array if needed */}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 bg-gradient-to-br from-indigo-900/40 to-slate-900 rounded-2xl border border-indigo-500/20">
          <h4 className="text-sm font-bold text-indigo-400 mb-2">New Updates</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            We just added 5 new action games! Check them out in the Action category.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
