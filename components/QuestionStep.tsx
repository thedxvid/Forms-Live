
import React, { useState, useEffect } from 'react';
import { QuestionConfig } from '../types';

interface QuestionStepProps {
  config: QuestionConfig;
  value: string;
  onChange: (val: string) => void;
  onNext: () => void;
  onBack?: () => void;
  isLast: boolean;
  isSubmitting: boolean;
}

export const QuestionStep: React.FC<QuestionStepProps> = ({
  config,
  value,
  onChange,
  onNext,
  onBack,
  isLast,
  isSubmitting
}) => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (value.length > 0 && value.length < config.minChars) {
      setError(`Por favor, compartilhe mais detalhes (mínimo ${config.minChars} caracteres)`);
    } else if (value.length > config.maxChars) {
      setError(`Você atingiu o limite de ${config.maxChars} caracteres`);
    } else {
      setError(null);
    }
  }, [value, config]);

  const isValid = value.length >= config.minChars && value.length <= config.maxChars;

  return (
    <div className="glass p-8 md:p-14 rounded-[2rem] transition-all duration-300 hover:border-white/10 group shadow-2xl">
      <h3 className="text-3xl md:text-4xl font-bold mb-3 leading-tight tracking-tight">
        {config.label}
      </h3>
      {config.sublabel && (
        <p className="text-white/50 text-lg mb-10 font-medium">{config.sublabel}</p>
      )}

      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={config.placeholder}
          className={`w-full min-h-[200px] bg-white/[0.03] border-2 rounded-2xl p-6 text-white text-xl leading-relaxed focus:outline-none focus:ring-4 focus:ring-indigo-500/20 transition-all placeholder:text-white/10 placeholder:italic resize-none ${
            error ? 'border-red-500/50' : 'border-white/5 focus:border-indigo-500/50'
          }`}
          disabled={isSubmitting}
        />
        <div className={`absolute bottom-4 right-6 text-sm font-mono transition-colors ${isValid ? 'text-indigo-400' : 'text-white/20'}`}>
          {value.length} / {config.maxChars}
        </div>
      </div>

      {error && (
        <p className="mt-4 text-red-400 text-base flex items-center gap-2 animate-in slide-in-from-top-1 duration-300 font-medium">
          <span className="text-xl">⚠️</span> {error}
        </p>
      )}

      <div className="mt-12 flex flex-col sm:flex-row gap-5">
        {onBack && (
          <button
            onClick={onBack}
            disabled={isSubmitting}
            className="flex-1 sm:flex-[0_0_auto] px-10 h-16 md:h-20 border-2 border-white/10 text-white/60 font-bold text-lg rounded-2xl hover:bg-white/5 hover:text-white transition-all active:scale-95 disabled:opacity-20"
          >
            ← Voltar
          </button>
        )}
        <button
          onClick={onNext}
          disabled={!isValid || isSubmitting}
          className={`flex-1 h-16 md:h-20 rounded-2xl font-black text-xl md:text-2xl transition-all duration-300 flex items-center justify-center gap-3 active:scale-[0.98] ${
            isLast 
              ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-[0_10px_40px_rgba(99,102,241,0.3)] hover:shadow-[0_15px_50px_rgba(99,102,241,0.5)] hover:-translate-y-1' 
              : 'bg-white text-black hover:shadow-[0_10px_40px_rgba(255,255,255,0.2)] hover:-translate-y-1'
          } disabled:opacity-10 disabled:grayscale disabled:cursor-not-allowed`}
        >
          {isSubmitting ? (
            <>
              <div className="w-6 h-6 border-4 border-current border-t-transparent rounded-full animate-spin" />
              Processando...
            </>
          ) : (
            <>
              {isLast ? '🚀 ENVIAR AGORA' : 'PRÓXIMO'}
              {!isLast && <span className="text-2xl opacity-50">→</span>}
            </>
          )}
        </button>
      </div>
    </div>
  );
};
