
import React from 'react';
import { Lesson } from '../types';

interface HeroProps {
  lesson: Lesson;
  onPlay: (lesson: Lesson) => void;
}

export const Hero: React.FC<HeroProps> = ({ lesson, onPlay }) => {
  return (
    <section className="relative h-[85vh] w-full flex items-center px-4 md:px-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={lesson.thumbnail} 
          alt={lesson.title} 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-transparent to-transparent"></div>
        <div className="absolute inset-0 netflix-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mt-20">
        <span className="inline-block px-2 py-1 bg-zinc-800 text-xs font-bold rounded mb-4 uppercase tracking-widest text-zinc-300 border border-zinc-700">
          Aula em Destaque
        </span>
        <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg leading-tight">
          {lesson.title}
        </h2>
        <p className="text-lg text-gray-200 mb-8 line-clamp-3 drop-shadow-md font-light leading-relaxed">
          {lesson.description}
        </p>

        <div className="flex space-x-4">
          <button 
            onClick={() => onPlay(lesson)}
            className="flex items-center space-x-2 bg-white text-black px-8 py-3 rounded hover:bg-opacity-80 transition-all font-semibold text-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.522-2.333 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.257.69-2.78-.217-2.78-1.644V5.653Z" clipRule="evenodd" />
            </svg>
            <span>Assistir Agora</span>
          </button>
          <button className="flex items-center space-x-2 bg-gray-500 bg-opacity-50 text-white px-8 py-3 rounded hover:bg-opacity-40 transition-all font-semibold text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
            <span>Saiba Mais</span>
          </button>
        </div>
      </div>
    </section>
  );
};
