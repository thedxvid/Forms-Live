
import React from 'react';
import { motion } from 'framer-motion';

interface ToastProps {
  message: string;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0, x: '-50%' }}
      animate={{ y: 0, opacity: 1, x: '-50%' }}
      exit={{ y: -20, opacity: 0, x: '-50%' }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999] w-[90%] max-w-md bg-red-600/95 backdrop-blur-md text-white p-5 rounded-2xl shadow-2xl border border-white/10 text-center"
    >
      <p className="font-bold mb-2">⚠️ Ops! Algo deu errado</p>
      <p className="text-sm opacity-90 mb-4 leading-relaxed">{message}</p>
      <div className="flex gap-2 justify-center">
        <button 
          onClick={onClose}
          className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm transition-colors"
        >
          Ok, entendi
        </button>
      </div>
    </motion.div>
  );
};
