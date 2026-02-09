
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
    <div className="glass p-8 md:p-12 rounded-3xl transition-all duration-300 hover:border-white/10 group">
      <h3 className="text-2xl md:text-3xl font-semibold mb-2 leading-tight">
        {config.label}
      </h3>
      {config.sublabel && (
        <p className="text-white/50 text-sm mb-8">{config.sublabel}</p>
      )}

      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={config.placeholder}
          className={`w-full min-h-[160px] bg-black/50 border rounded-2xl p-6 text-white text-lg leading-relaxed focus:outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all placeholder:text-white/20 placeholder:italic resize-none ${
            error ? 'border-red-500/50' : 'border-white/10 focus:border-indigo-500/50'
          }`}
          disabled={isSubmitting}
        />
        <div className="absolute bottom-4 right-4 text-xs font-mono text-white/30">
          {value.length} / {config.maxChars}
        </div>
      </div>

      {error && (
        <p className="mt-4 text-red-400 text-sm flex items-center gap-2 animate-in slide-in-from-top-1 duration-300">
          <span className="text-lg">⚠️</span> {error}
        </p>
      )}

      <div className="mt-10 flex flex-col-reverse sm:flex-row gap-4">
        {onBack && (
          <button
            onClick={onBack}
            disabled={isSubmitting}
            className="flex-1 sm:flex-[0_0_auto] px-8 h-14 border border-white/20 text-white/80 font-medium rounded-xl hover:bg-white/5 transition-all"
          >
            ← Voltar
          </button>
        )}
        <button
          onClick={onNext}
          disabled={!isValid || isSubmitting}
          className={`flex-1 h-14 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
            isLast 
              ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-[0_4px_24px_rgba(99,102,241,0.4)] hover:shadow-[0_8px_32px_rgba(99,102,241,0.6)]' 
              : 'bg-white text-black hover:shadow-[0_4px_24px_rgba(255,255,255,0.2)]'
          } disabled:opacity-30 disabled:cursor-not-allowed`}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
              Enviando...
            </>
          ) : (
            isLast ? '🚀 Enviar e Garantir Vaga' : 'Próxima Pergunta'
          )}
        </button>
      </div>
    </div>
  );
};
