
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  user: { name: string; photo: string } | null;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-colors duration-300 px-4 md:px-12 py-4 flex items-center justify-between ${
        isScrolled ? 'bg-[#141414]' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center space-x-8">
        <h1 className="text-red-600 text-2xl md:text-3xl font-black tracking-tighter uppercase italic">VSA</h1>
        <nav className="hidden md:flex space-x-4 text-sm font-light text-gray-200">
          <a href="#" className="hover:text-white transition-colors">Início</a>
          <a href="#" className="hover:text-white transition-colors">Cursos</a>
          <a href="#" className="hover:text-white transition-colors">Novidades</a>
          <a href="#" className="hover:text-white transition-colors">Minha Lista</a>
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        <button className="text-white hover:opacity-80 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </button>
        {user && (
          <div className="flex items-center space-x-2 group relative cursor-pointer">
            <img 
              src={user.photo} 
              alt={user.name} 
              className="w-8 h-8 rounded-md"
            />
            <div className="hidden group-hover:block absolute top-full right-0 mt-2 w-48 bg-black bg-opacity-90 border border-zinc-800 rounded py-2 shadow-2xl">
              <div className="px-4 py-2 border-b border-zinc-800 text-xs text-zinc-400">Logado como: {user.name}</div>
              <button 
                onClick={onLogout}
                className="w-full text-left px-4 py-2 hover:bg-zinc-800 text-sm"
              >
                Sair da VSA
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
