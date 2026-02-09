
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onStart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-20 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/30 px-4 py-2 rounded-full mb-8"
      >
        <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
        <span className="text-red-500 text-xs font-bold tracking-widest uppercase">AO VIVO • 20H • YOUTUBE</span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-white/50 text-xs font-medium tracking-[0.2em] uppercase mb-3"
      >
        LIVE EXCLUSIVA COM
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
      >
        <span className="gradient-text">MARCELO</span>
        <br />
        <span className="gradient-text">ANDERS</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl mb-12 font-light leading-relaxed"
      >
        Descubra o que falta para você<br className="hidden md:block" /> multiplicar seu faturamento em 2026
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        onClick={onStart}
        className="w-full max-w-md h-16 md:h-20 bg-white text-black text-xl md:text-2xl font-bold rounded-2xl shadow-[0_4px_24px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.25)] hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center"
      >
        GARANTIR MINHA VAGA (Grátis)
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="mt-6 text-white/40 text-sm font-medium flex items-center gap-2"
      >
        ⚠️ Preencha o formulário em 2 minutos para garantir sua vaga
      </motion.p>
    </section>
  );
};
