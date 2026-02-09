
import React from 'react';
import { motion } from 'framer-motion';
import { WHATSAPP_LINK } from '../constants';

export const ThankYouPage: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center max-w-2xl mx-auto">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 15 }}
        className="text-7xl mb-8"
      >
        ✅
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
      >
        Respostas Enviadas!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-white/70 mb-12"
      >
        Sua vaga está garantida na live
      </motion.p>

      <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-red-600/10 border-2 border-red-600/30 rounded-2xl p-8 mb-10 w-full"
      >
        <h2 className="text-red-500 font-bold tracking-widest uppercase text-sm mb-6">
          📱 PRÓXIMO PASSO IMPORTANTE:
        </h2>
        
        <p className="text-left text-white/90 mb-6 leading-relaxed">
          Entre agora no grupo do WhatsApp para receber:
        </p>

        <ul className="text-left space-y-4 mb-8">
          {['Link da live (20h no YouTube)', 'Materiais exclusivos', 'Avisos importantes', 'Conteúdos extras'].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-white/80">
              <span className="text-white/40">•</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-xl text-amber-500 text-xs font-semibold mb-8 text-center">
          ⚠️ Quem não entrar no grupo perde acesso aos materiais exclusivos
        </div>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full h-16 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-lg font-bold rounded-xl shadow-[0_8px_24px_rgba(37,211,102,0.3)] hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all"
        >
          <span>📲</span> ENTRAR NO GRUPO AGORA
        </a>
      </motion.div>

      <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="glass p-6 rounded-2xl w-full"
      >
        <p className="text-white/40 text-xs font-bold uppercase tracking-wider mb-2">📆 Lembrete da Live:</p>
        <p className="text-white font-medium mb-1">Hoje às 20h no YouTube</p>
        <p className="text-white/60 text-sm italic">O link será enviado no grupo!</p>
      </motion.div>
    </section>
  );
};
