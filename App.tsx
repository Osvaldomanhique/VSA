
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LessonRow } from './components/LessonRow';
import { PlayerModal } from './components/PlayerModal';
import { Login } from './components/Login';
import { ALL_LESSONS, CATEGORIES } from './data/lessons';
import { User, Lesson } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento inicial
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (email: string) => {
    setUser({
      name: email.split('@')[0],
      email: email,
      photo: `https://ui-avatars.com/api/?name=${email}&background=E50914&color=fff`,
      isLoggedIn: true
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#141414] flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-red-600 text-6xl font-black italic mb-8 animate-pulse">VSA</h1>
          <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <Header user={user} onLogout={handleLogout} />
      
      <main>
        {/* Destaque: Sempre a primeira aula ou aula mais relevante */}
        <Hero 
          lesson={ALL_LESSONS[0]} 
          onPlay={setSelectedLesson}
        />

        <div className="pb-20 -mt-20 md:-mt-32 relative z-20">
          {CATEGORIES.map((category) => (
            <LessonRow 
              key={category.id}
              title={category.name}
              lessons={category.lessons}
              onSelect={setSelectedLesson}
            />
          ))}

          {/* Row de Continuação ou Recentes */}
          <LessonRow 
            title="Minha Lista"
            lessons={[...ALL_LESSONS].sort(() => Math.random() - 0.5).slice(0, 4)}
            onSelect={setSelectedLesson}
          />
        </div>
      </main>

      <footer className="px-4 md:px-12 py-16 text-zinc-500 text-sm border-t border-zinc-900 bg-[#141414]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
           <div className="space-y-4">
              <h2 className="text-red-600 text-2xl font-black italic">VSA</h2>
              <p className="max-w-xs">A plataforma definitiva para quem busca escala e profissionalismo no mercado digital.</p>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="flex flex-col space-y-2">
                 <span className="text-zinc-200 font-bold mb-2">Suporte</span>
                 <a href="#" className="hover:underline">WhatsApp</a>
                 <a href="#" className="hover:underline">E-mail</a>
              </div>
              <div className="flex flex-col space-y-2">
                 <span className="text-zinc-200 font-bold mb-2">Comunidade</span>
                 <a href="#" className="hover:underline">Discord</a>
                 <a href="#" className="hover:underline">Instagram</a>
              </div>
              <div className="flex flex-col space-y-2">
                 <span className="text-zinc-200 font-bold mb-2">Legal</span>
                 <a href="#" className="hover:underline">Privacidade</a>
                 <a href="#" className="hover:underline">Termos</a>
              </div>
           </div>
        </div>
        <div className="mt-12 text-center border-t border-zinc-800 pt-8">
           <p>&copy; 2024 VSA Aulas. Desenvolvido para Vencedores.</p>
        </div>
      </footer>

      {selectedLesson && (
        <PlayerModal 
          lesson={selectedLesson}
          onClose={() => setSelectedLesson(null)}
        />
      )}
    </div>
  );
};

export default App;
