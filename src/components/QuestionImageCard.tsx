import React, { useState, useEffect } from 'react';
import { QuestionImageCard as QuestionImageCardType } from '../types';

interface QuestionImageCardProps {
  questionId: number;
  imageCard: QuestionImageCardType;
}

const resolveUrl = (url: string) => {
  if (!url) return '';
  if (url.includes('imgur.com/') && !url.includes('i.imgur.com')) {
    const id = url.split('/').filter(Boolean).pop()?.replace(/\..+$/, '');
    return `https://i.imgur.com/${id}.jpg`;
  }
  return url;
};

// Map each question to its optimized WebP and fallback JPG
const ASSET_MAP: Record<number, { webp: string; fallback: string; imgur: string; width: number; height: number }> = {
  4: {
    webp: '/assets/bristol_etapa_4.webp',
    fallback: '/assets/bristol_etapa_4.jpg',
    imgur: 'https://i.imgur.com/Y7Nw1Hx.png',
    width: 1280,
    height: 714,
  },
  6: {
    webp: '/assets/imagem_etapa_6.webp',
    fallback: '/assets/imagem_etapa_6.jpg',
    imgur: 'https://i.imgur.com/fH9J0ar.jpg',
    width: 1280,
    height: 719,
  },
  13: {
    webp: '/assets/imagem_etapa_13.webp',
    fallback: '/assets/imagem_etapa_13.jpg',
    imgur: 'https://i.imgur.com/PyZIQDB.jpg',
    width: 1280,
    height: 719,
  },
};

// Global cache tracker for zero-delay instant render
const loadedUrls = new Set<string>();

export const QuestionImageCard: React.FC<QuestionImageCardProps> = ({
  questionId,
  imageCard,
}) => {
  const assetConfig = ASSET_MAP[questionId];
  const initialUrl = assetConfig ? assetConfig.webp : resolveUrl(imageCard.imageUrl || '');

  const [currentUrl, setCurrentUrl] = useState<string>(initialUrl);
  const [isLoaded, setIsLoaded] = useState<boolean>(() => {
    return loadedUrls.has(initialUrl);
  });
  const [fallbackStep, setFallbackStep] = useState<number>(0);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const targetUrl = assetConfig ? assetConfig.webp : resolveUrl(imageCard.imageUrl || '');
    setCurrentUrl(targetUrl);
    setFallbackStep(0);
    setHasError(false);

    if (loadedUrls.has(targetUrl)) {
      setIsLoaded(true);
    } else {
      setIsLoaded(false);
      // Pre-decode directly
      const img = new Image();
      img.src = targetUrl;
      if (img.complete) {
        loadedUrls.add(targetUrl);
        setIsLoaded(true);
      } else if ('decode' in img) {
        img.decode().then(() => {
          loadedUrls.add(targetUrl);
          setIsLoaded(true);
        }).catch(() => {});
      }
    }
  }, [questionId, imageCard.imageUrl, assetConfig]);

  const handleImageLoaded = () => {
    loadedUrls.add(currentUrl);
    setIsLoaded(true);
  };

  const handleImageError = () => {
    if (!assetConfig) {
      setHasError(true);
      return;
    }

    if (fallbackStep === 0) {
      setFallbackStep(1);
      setCurrentUrl(assetConfig.fallback);
    } else if (fallbackStep === 1) {
      setFallbackStep(2);
      setCurrentUrl(assetConfig.imgur);
    } else {
      setHasError(true);
    }
  };

  if (!currentUrl || hasError) {
    return null;
  }

  const aspectRatio = assetConfig ? `${assetConfig.width} / ${assetConfig.height}` : undefined;

  return (
    <div
      id={`image-card-step-${questionId}`}
      className="w-full mb-5 sm:mb-6 rounded-2xl border border-stone-200/90 bg-white overflow-hidden shadow-xs relative"
    >
      <div className="relative flex items-center justify-center overflow-hidden bg-white p-1 xs:p-1.5 sm:p-2">
        <picture className="w-full flex items-center justify-center">
          {assetConfig && (
            <source
              type="image/webp"
              srcSet={assetConfig.webp}
            />
          )}
          {assetConfig && (
            <source
              type="image/jpeg"
              srcSet={assetConfig.fallback}
            />
          )}
          <img
            src={currentUrl}
            alt={imageCard.alt || `Ilustración de la pregunta ${questionId}`}
            width={assetConfig?.width}
            height={assetConfig?.height}
            style={aspectRatio ? { aspectRatio } : undefined}
            referrerPolicy="no-referrer"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            onLoad={handleImageLoaded}
            onError={handleImageError}
            className="w-full h-auto max-h-[80vh] sm:max-h-[34rem] object-contain object-center rounded-xl block select-none"
          />
        </picture>
      </div>
    </div>
  );
};
