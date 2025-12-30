
import { Lesson, Category } from '../types';

export const ALL_LESSONS: Lesson[] = [
  // Módulo 1: O Início de Tudo
  {
    id: 'vsa-1',
    title: '01. Bem-vindo à VSA: O Início da Jornada',
    description: 'Nesta aula inaugural, você entenderá a metodologia VSA e como extrair o máximo proveito da plataforma para acelerar seus resultados.',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '12m',
    category: 'Módulo 1: O Início',
    instructor: 'Equipe VSA',
    rating: 5.0
  },
  {
    id: 'vsa-2',
    title: '02. Mentalidade de Escala (Mindset)',
    description: 'Aprenda a configurar sua mente para o sucesso. O segredo dos grandes players não está apenas nas ferramentas, mas na forma de pensar.',
    thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '25m',
    category: 'Módulo 1: O Início',
    instructor: 'Mentor VSA',
    rating: 4.9
  },

  // Módulo 2: Estratégias de Venda
  {
    id: 'vsa-3',
    title: '03. Estrutura de Vendas Automática',
    description: 'Como montar um funil que trabalha para você 24 horas por dia. O passo a passo para a automação total.',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '45m',
    category: 'Módulo 2: Estratégias',
    instructor: 'Especialista em Funis',
    rating: 4.8
  },
  {
    id: 'vsa-4',
    title: '04. Copywriting: A Arte de Persuadir',
    description: 'Gatilhos mentais e estruturas de texto que convertem cliques em boletos pagos e cartões aprovados.',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '38m',
    category: 'Módulo 2: Estratégias',
    instructor: 'Copywriter Senior',
    rating: 4.9
  },

  // Módulo 3: Tráfego Pago
  {
    id: 'vsa-5',
    title: '05. Contingência Avançada no Facebook',
    description: 'Pare de ter suas contas bloqueadas. Aprenda o sistema de blindagem de BM usado pelos maiores afiliados do Brasil.',
    thumbnail: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '55m',
    category: 'Módulo 3: Tráfego',
    instructor: 'Gestor de Tráfego',
    rating: 5.0
  },
  {
    id: 'vsa-6',
    title: '06. Google Ads para Pesquisa',
    description: 'Como aparecer para quem já quer comprar. Domine a rede de pesquisa e escale suas vendas rapidamente.',
    thumbnail: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '1h 10m',
    category: 'Módulo 3: Tráfego',
    instructor: 'Gestor de Tráfego',
    rating: 4.7
  },

  // Módulo 4: Ferramentas e Design
  {
    id: 'vsa-7',
    title: '07. Criativos que Param o Scroll',
    description: 'Aulas práticas de design focadas em anúncios. Como criar artes que forçam o clique do usuário.',
    thumbnail: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '32m',
    category: 'Módulo 4: Ferramentas',
    instructor: 'Designer VSA',
    rating: 4.9
  },
  {
    id: 'vsa-8',
    title: '08. Landing Pages de Alta Conversão',
    description: 'Crie páginas que carregam em menos de 1 segundo e que são otimizadas para conversão no mobile.',
    thumbnail: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '48m',
    category: 'Módulo 4: Ferramentas',
    instructor: 'Web Designer',
    rating: 4.8
  }
];

export const CATEGORIES: Category[] = [
  {
    id: 'mod-1',
    name: 'Módulo 1: Mentalidade & Boas-Vindas',
    lessons: ALL_LESSONS.filter(l => l.category === 'Módulo 1: O Início')
  },
  {
    id: 'mod-2',
    name: 'Módulo 2: Estratégias de Venda Online',
    lessons: ALL_LESSONS.filter(l => l.category === 'Módulo 2: Estratégias')
  },
  {
    id: 'mod-3',
    name: 'Módulo 3: Dominando o Tráfego Pago',
    lessons: ALL_LESSONS.filter(l => l.category === 'Módulo 3: Tráfego')
  },
  {
    id: 'mod-4',
    name: 'Módulo 4: Design & Ferramentas Pro',
    lessons: ALL_LESSONS.filter(l => l.category === 'Módulo 4: Ferramentas')
  }
];
