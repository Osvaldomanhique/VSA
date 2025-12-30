
import React, { useRef } from 'react';
import { Lesson } from '../types';

interface LessonRowProps {
  title: string;
  lessons: Lesson[];
  onSelect: (lesson: Lesson) => void;
}

export const LessonRow: React.FC<LessonRowProps> = ({ title, lessons, onSelect }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="my-8 px-4 md:px-12 relative group">
      <h3 className="text-xl md:text-2xl font-bold mb-4 text-zinc-100">{title}</h3>
      
      <div className="relative overflow-hidden">
        {/* Scroll Buttons */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-0 bottom-0 z-20 bg-black bg-opacity-50 w-12 hidden group-hover:flex items-center justify-center hover:bg-opacity-70 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>

        <div 
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto row-scroll-hide pb-4 snap-x snap-mandatory"
        >
          {lessons.map((lesson) => (
            <div 
              key={lesson.id}
              onClick={() => onSelect(lesson)}
              className="flex-none w-48 md:w-80 snap-start cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <div className="relative aspect-video rounded-md overflow-hidden bg-zinc-800">
                <img 
                  src={lesson.thumbnail} 
                  alt={lesson.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all"></div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 px-1 text-[10px] rounded border border-zinc-700">
                  {lesson.duration}
                </div>
              </div>
              <div className="mt-2">
                <h4 className="text-sm font-semibold truncate text-zinc-200">{lesson.title}</h4>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs text-green-500 font-bold">{Math.floor(lesson.rating * 20)}% relevante</span>
                  <span className="text-[10px] px-1 border border-zinc-600 rounded text-zinc-400">4K</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-0 bottom-0 z-20 bg-black bg-opacity-50 w-12 hidden group-hover:flex items-center justify-center hover:bg-opacity-70 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};
