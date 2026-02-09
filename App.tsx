
import React, { useState, useCallback } from 'react';
import { Hero } from './components/Hero';
import { ContextSection } from './components/ContextSection';
import { FormContainer } from './components/FormContainer';
import { ThankYouPage } from './components/ThankYouPage';
import { AppState, FormData } from './types';
import { Toast } from './components/ui/Toast';

const App: React.FC = () => {
  const [view, setView] = useState<AppState>(AppState.HERO);
  const [error, setError] = useState<string | null>(null);

  const handleStart = useCallback(() => {
    setView(AppState.FORM);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSuccess = useCallback(() => {
    setView(AppState.THANK_YOU);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleError = useCallback((msg: string) => {
    setError(msg);
    setTimeout(() => setError(null), 5000);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Animated Blob */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(99,102,241,0.15)_0%,transparent_70%)] blur-[80px] blob-animation pointer-events-none z-0" 
        aria-hidden="true"
      />

      <div className="relative z-10 w-full">
        {view === AppState.HERO && (
          <div className="flex flex-col items-center">
            <Hero onStart={handleStart} />
            <ContextSection />
          </div>
        )}

        {view === AppState.FORM && (
          <FormContainer onSuccess={handleSuccess} onError={handleError} />
        )}

        {view === AppState.THANK_YOU && (
          <ThankYouPage />
        )}
      </div>

      {error && <Toast message={error} onClose={() => setError(null)} />}
    </main>
  );
};

export default App;
