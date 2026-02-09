
import React from 'react';
import { motion } from 'framer-motion';

export const ContextSection: React.FC = () => {
  return (
    <section className="px-6 py-20 w-full flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass w-full max-w-2xl p-10 md:p-12 rounded-3xl text-center flex flex-col items-center"
      >
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent mb-8" />
        
        <motion.span 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="text-4xl mb-6 block"
        >
          📋
        </motion.span>

        <h2 className="text-xl md:text-2xl font-semibold mb-6">Para participar</h2>
        
        <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">
          Responda 3 perguntas rápidas para garantir sua vaga na live. 
          Isso nos ajuda a preparar o conteúdo perfeito para você.
        </p>

        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full text-indigo-400 text-sm font-medium">
          ⏱️ Leva menos de 2 minutos
        </div>
      </motion.div>
    </section>
  );
};
