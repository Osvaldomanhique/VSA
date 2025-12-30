
import React, { useState, useEffect } from 'react';
import { Lesson } from '../types';
import { askTutor } from '../services/gemini';

interface PlayerModalProps {
  lesson: Lesson | null;
  onClose: () => void;
}

export const PlayerModal: React.FC<PlayerModalProps> = ({ lesson, onClose }) => {
  const [question, setQuestion] = useState('');
  const [chat, setChat] = useState<{ role: 'user' | 'ai'; text: string }[]>([]);
  const [loading, setLoading] = useState(false);

  if (!lesson) return null;

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    const userMsg = question;
    setQuestion('');
    setChat(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const answer = await askTutor(userMsg, lesson.title);
    setChat(prev => [...prev, { role: 'ai', text: answer }]);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black bg-opacity-95 flex flex-col md:flex-row animate-in fade-in duration-300">
      {/* Back Button */}
      <button 
        onClick={onClose}
        className="absolute top-4 left-4 z-50 p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
      </button>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full">
        <div className="relative w-full aspect-video bg-black shadow-2xl">
          <iframe 
            src={`${lesson.videoUrl}?autoplay=1`}
            title={lesson.title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="p-6 md:p-12 overflow-y-auto flex-1">
          <div className="max-w-4xl mx-auto">
             <div className="flex items-center space-x-4 mb-4">
                <span className="text-green-500 font-bold">98% Match</span>
                <span className="text-zinc-400">2024</span>
                <span className="px-1 border border-zinc-600 text-xs rounded text-zinc-400">14+</span>
                <span className="text-zinc-400">{lesson.duration}</span>
             </div>
             <h1 className="text-3xl md:text-5xl font-bold mb-4">{lesson.title}</h1>
             <p className="text-xl text-zinc-300 mb-8 leading-relaxed font-light">
               {lesson.description}
             </p>
             <div className="grid grid-cols-2 gap-8 text-zinc-400">
                <div>
                   <p className="mb-2"><span className="text-zinc-600">Instrutor:</span> {lesson.instructor}</p>
                   <p><span className="text-zinc-600">Categoria:</span> {lesson.category}</p>
                </div>
                <div>
                   <p className="mb-2"><span className="text-zinc-600">Avaliação:</span> {lesson.rating} / 5.0</p>
                   <p><span className="text-zinc-600">Idioma:</span> Português (Brasil)</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* AI Tutor Sidebar */}
      <div className="w-full md:w-96 bg-zinc-900 border-l border-zinc-800 flex flex-col h-[50vh] md:h-full">
        <div className="p-4 border-b border-zinc-800 bg-zinc-900 flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <h2 className="font-bold text-lg">Tutor AI</h2>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="bg-zinc-800 rounded-lg p-3 text-sm text-zinc-300">
            Olá! Eu sou o assistente virtual da VSA. Ficou com alguma dúvida sobre a aula de "{lesson.title}"? Pode me perguntar!
          </div>
          {chat.map((msg, idx) => (
            <div 
              key={idx} 
              className={`max-w-[85%] p-3 rounded-lg text-sm ${
                msg.role === 'user' 
                  ? 'bg-red-600 ml-auto' 
                  : 'bg-zinc-800 text-zinc-200'
              }`}
            >
              {msg.text}
            </div>
          ))}
          {loading && (
            <div className="bg-zinc-800 rounded-lg p-3 text-sm text-zinc-400 italic flex items-center space-x-2">
              <span className="animate-bounce">●</span>
              <span className="animate-bounce delay-100">●</span>
              <span className="animate-bounce delay-200">●</span>
              <span>Pensando...</span>
            </div>
          )}
        </div>

        <form onSubmit={handleAsk} className="p-4 bg-zinc-900 border-t border-zinc-800">
          <div className="relative">
            <input 
              type="text" 
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Sua dúvida aqui..."
              className="w-full bg-zinc-800 border-none rounded-full py-2 px-4 text-sm focus:ring-1 focus:ring-red-600 outline-none"
            />
            <button 
              type="submit"
              disabled={loading}
              className="absolute right-2 top-1.5 text-zinc-500 hover:text-red-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
