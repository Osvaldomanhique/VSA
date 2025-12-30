
import React, { useState } from 'react';

interface LoginProps {
  onLogin: (email: string) => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) onLogin(email);
  };

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center p-4">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/bgvsa/1920/1080)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 w-full max-w-md bg-black bg-opacity-75 p-8 md:p-16 rounded-lg">
        <h1 className="text-red-600 text-4xl font-black tracking-tighter mb-8 uppercase italic text-center">VSA</h1>
        
        <h2 className="text-3xl font-bold mb-8">Entrar</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="email" 
            placeholder="E-mail"
            required
            className="w-full bg-zinc-800 border-none rounded py-3 px-4 focus:ring-1 focus:ring-red-600 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Senha"
            required
            className="w-full bg-zinc-800 border-none rounded py-3 px-4 focus:ring-1 focus:ring-red-600 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            type="submit"
            className="w-full bg-red-600 text-white font-bold py-3 rounded mt-4 hover:bg-red-700 transition-colors"
          >
            Entrar agora
          </button>
        </form>

        <div className="mt-8">
           <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-zinc-700"></div>
              <span className="flex-shrink mx-4 text-zinc-500 text-sm">OU</span>
              <div className="flex-grow border-t border-zinc-700"></div>
           </div>

           <button 
             onClick={() => onLogin('aluno@google.com')}
             className="w-full bg-white text-zinc-900 font-bold py-3 rounded flex items-center justify-center space-x-3 hover:bg-opacity-90 transition-all"
           >
             <svg viewBox="0 0 24 24" className="w-6 h-6">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
             </svg>
             <span>Acessar com Google</span>
           </button>
        </div>

        <div className="mt-8 text-zinc-500 text-sm">
           <p>Novo por aqui? <a href="#" className="text-white hover:underline">Assine agora.</a></p>
           <p className="mt-4 text-xs leading-tight">Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.</p>
        </div>
      </div>
    </div>
  );
};
