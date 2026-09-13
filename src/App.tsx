import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { QUIZ_QUESTIONS } from './data/quizQuestions';
import { QuizHeader } from './components/QuizHeader';
import { QuizStep } from './components/QuizStep';
import { NewsArticleScreen } from './components/NewsArticleScreen';
import { PresellScreen } from './components/PresellScreen';
import { AnalyzingScreen } from './components/AnalyzingScreen';
import { DiagnosticResult } from './components/DiagnosticResult';
import { ExitIntentModal } from './components/ExitIntentModal';
import { calculateDiagnostic } from './utils/diagnosticCalculator';
import { UserAnswers, DiagnosticData, QuizOption } from './types';
import { ShieldCheck } from 'lucide-react';
import { playSelectSound } from './utils/audio';

export default function App() {
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [showNewsArticle, setShowNewsArticle] = useState<boolean>(false);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [diagnostic, setDiagnostic] = useState<DiagnosticData | null>(null);
  const [showExitModal, setShowExitModal] = useState<boolean>(false);

  // Scroll to top on state/step change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [hasStarted, currentStep, showNewsArticle, isAnalyzing, isCompleted]);

  // Detector de Intenção de Saída - Mobile e Desktop (Dispara TODA VEZ que o lead tentar sair)
  useEffect(() => {
    // 1. Armadilha de histórico contínua (Mobile Back Button / Swipe-back)
    const armHistoryTrap = () => {
      try {
        window.history.pushState({ page: 'quiz-app', trap: Date.now() }, '', window.location.href);
      } catch (e) {}
    };

    // Inicializa a armadilha de histórico
    armHistoryTrap();

    // Dispara toda vez que o botão 'Voltar' ou gesto de voltar for acionado no celular
    const handlePopState = () => {
      armHistoryTrap(); // Rearma imediatamente para interceptar novas tentativas
      setShowExitModal(true);
    };

    // 2. Desktop: Dispara toda vez que o cursor do mouse se mover para fora do topo da tela
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 20 || !e.relatedTarget) {
        setShowExitModal(true);
      }
    };

    // 3. Mobile: Toque no topo da tela (próximo à barra de endereços/abas ou menu do navegador móvel)
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches && e.touches.length > 0) {
        touchStartY = e.touches[0].clientY;
        // Se tocou nos 24px superiores da tela (área da barra de URL no celular)
        if (touchStartY <= 24) {
          setShowExitModal(true);
        }
      }
    };

    // 4. Mobile: Puxar para baixo no topo (gesto comum para revelar a barra de navegação/recarregar/sair)
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches.length > 0) {
        const currentY = e.touches[0].clientY;
        if (window.scrollY <= 0 && currentY - touchStartY > 60 && touchStartY <= 45) {
          setShowExitModal(true);
        }
      }
    };

    // 5. Mudança de Visibilidade / Troca de Aba ou Minimização de App no celular/desktop
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        setShowExitModal(true);
      }
    };

    window.addEventListener('popstate', handlePopState);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Bloqueio rigoroso de cópia, cola, clique direito e atalhos de inspecionar
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    const handleCopyCutPaste = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    const handleSelectStart = (e: Event) => {
      e.preventDefault();
      return false;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Tecla F12
      if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      const isCtrlOrCmd = e.ctrlKey || e.metaKey;
      if (isCtrlOrCmd) {
        const key = (e.key || '').toLowerCase();
        // Inspecionar: Ctrl+Shift+I, J, C, K
        if (e.shiftKey && (key === 'i' || key === 'j' || key === 'c' || key === 'k')) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }

        // Bloquear copiar, colar, recortar, ver fonte, salvar, imprimir, selecionar tudo
        if (
          key === 'c' ||
          key === 'v' ||
          key === 'x' ||
          key === 'u' ||
          key === 's' ||
          key === 'p' ||
          key === 'a'
        ) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      }
    };

    document.addEventListener('contextmenu', handleContextMenu, { capture: true });
    document.addEventListener('copy', handleCopyCutPaste, { capture: true });
    document.addEventListener('cut', handleCopyCutPaste, { capture: true });
    document.addEventListener('paste', handleCopyCutPaste, { capture: true });
    document.addEventListener('selectstart', handleSelectStart, { capture: true });
    document.addEventListener('keydown', handleKeyDown, { capture: true });

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleCopyCutPaste);
      document.removeEventListener('cut', handleCopyCutPaste);
      document.removeEventListener('paste', handleCopyCutPaste);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Precarrega e decodifica as imagens imediatamente para exibição instantânea
  useEffect(() => {
    const assets = [
      '/assets/noticia_etapa_11.webp',
      '/assets/logo_quiz.webp',
      '/assets/bristol_etapa_4.webp',
      '/assets/imagem_etapa_6.webp',
      '/assets/imagem_etapa_13.webp',
      '/assets/logo_quiz.png',
    ];
    assets.forEach((src) => {
      const img = new Image();
      img.src = src;
      if ('decode' in img) {
        img.decode().catch(() => {});
      }
    });
  }, []);

  const currentQuestion = QUIZ_QUESTIONS.find((q) => q.step === currentStep) || QUIZ_QUESTIONS[0];
  const totalSteps = QUIZ_QUESTIONS.length;

  const handleSelectOption = (option: QuizOption) => {
    // Play gentle and subtle click sound
    playSelectSound();

    // Record answer
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: option.id,
    }));

    // Transição imediata sem delay perceptível
    const delay = currentStep === 11 ? 120 : 240;
    setTimeout(() => {
      if (currentStep === 11) {
        // Intercepta logo após responder à Etapa 11 e exibe a NewsArticleScreen antes da Etapa 12
        setShowNewsArticle(true);
      } else if (currentStep < totalSteps) {
        setCurrentStep((prev) => prev + 1);
      } else {
        // Last question answered -> Start analyzing screen
        setIsAnalyzing(true);
      }
    }, delay);
  };

  const handleContinueFromArticle = () => {
    playSelectSound();
    setShowNewsArticle(false);
    setCurrentStep(12);
  };

  const handleBack = () => {
    if (showNewsArticle) {
      setShowNewsArticle(false);
    } else if (currentStep === 12) {
      setShowNewsArticle(true);
      setCurrentStep(11);
    } else if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    } else {
      setHasStarted(false);
    }
  };

  const handleAnalyzingComplete = () => {
    const calculated = calculateDiagnostic(answers);
    setDiagnostic(calculated);
    setIsAnalyzing(false);
    setIsCompleted(true);
  };

  const handleRestart = () => {
    setHasStarted(false);
    setCurrentStep(1);
    setAnswers({});
    setShowNewsArticle(false);
    setIsAnalyzing(false);
    setIsCompleted(false);
    setDiagnostic(null);
  };

  const handleCloseModal = () => {
    setShowExitModal(false);
    try {
      window.history.pushState({ page: 'quiz-app', trap: Date.now() }, '', window.location.href);
    } catch (e) {}
  };

  const handleStay = () => {
    setShowExitModal(false);
    try {
      window.history.pushState({ page: 'quiz-app', trap: Date.now() }, '', window.location.href);
    } catch (e) {}
    if (!hasStarted) {
      setHasStarted(true);
    } else if (isCompleted) {
      const cta = document.getElementById('cta-unlock-protocol-btn') || document.getElementById('cta-section-container');
      if (cta) {
        cta.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FEFEFE] text-stone-900 flex flex-col justify-between selection:bg-emerald-200 overflow-x-hidden w-full">
      {/* Exit Intent Retention Modal */}
      <ExitIntentModal
        isOpen={showExitModal}
        onClose={handleCloseModal}
        onStay={handleStay}
        hasStarted={hasStarted}
        currentStep={currentStep}
        totalSteps={totalSteps}
        isCompleted={isCompleted}
        diagnostic={diagnostic}
      />

      {/* Quiz Header with progress bar (shown during quiz steps) */}
      {hasStarted && !isCompleted && !isAnalyzing && !showNewsArticle && (
        <QuizHeader
          currentStep={currentStep}
          totalSteps={totalSteps}
          onBack={handleBack}
          canGoBack={true}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-center py-2 sm:py-4 w-full">
        {!hasStarted ? (
          <PresellScreen onStart={() => setHasStarted(true)} />
        ) : isAnalyzing ? (
          <AnalyzingScreen onComplete={handleAnalyzingComplete} />
        ) : isCompleted && diagnostic ? (
          <DiagnosticResult
            diagnostic={diagnostic}
            answers={answers}
            onRestart={handleRestart}
          />
        ) : showNewsArticle ? (
          <div className="w-full">
            <AnimatePresence mode="wait">
              <NewsArticleScreen
                key="news-article-screen"
                onContinue={handleContinueFromArticle}
                onBack={handleBack}
              />
            </AnimatePresence>
          </div>
        ) : (
          <div className="w-full">
            <AnimatePresence mode="wait">
              <QuizStep
                key={currentQuestion.id}
                question={currentQuestion}
                selectedOptionId={answers[currentQuestion.id] as string | undefined}
                onSelectOption={handleSelectOption}
                isLastQuestion={currentStep === totalSteps}
              />
            </AnimatePresence>
          </div>
        )}
      </main>

      {/* Footer Disclaimer & Trust Badges */}
      <footer className="w-full border-t border-stone-200 bg-white/70 py-3 sm:py-4 px-3 sm:px-4 text-center text-[10px] sm:text-[11px] text-stone-500">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
          <div className="flex items-center justify-center gap-1.5 text-stone-600">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Cuestionario Confidencial de Motilidad Fecal • Ritual de Limpieza Profunda © 2026</span>
          </div>
          <div className="text-stone-400">
            Contenido educativo basado en fisiología gastrointestinal.
          </div>
        </div>
      </footer>
      {/* Pre-renderização de todas as imagens críticas na GPU para exibição com 0ms de delay */}
      <div
        aria-hidden="true"
        className="fixed pointer-events-none opacity-0 -z-50 overflow-hidden"
        style={{ width: 1, height: 1, top: -9999, left: -9999 }}
      >
        <img
          src="/assets/noticia_etapa_11.webp"
          alt=""
          width={941}
          height={1671}
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        <img
          src="/assets/bristol_etapa_4.webp"
          alt=""
          width={1280}
          height={714}
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        <img
          src="/assets/imagem_etapa_6.webp"
          alt=""
          width={1280}
          height={719}
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        <img
          src="/assets/imagem_etapa_13.webp"
          alt=""
          width={1280}
          height={719}
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        <img
          src="/assets/logo_quiz.webp"
          alt=""
          width={600}
          height={600}
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  );
}
