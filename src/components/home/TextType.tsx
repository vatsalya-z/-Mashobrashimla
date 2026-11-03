'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';

export interface TextTypeProps {
  text: string | string[];
  typingSpeed?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  deleteMode?: 'backspace' | 'select';
  typeEffect?: 'none' | 'fade' | 'blur' | 'rise';
  mistakes?: number;
  cursorStyle?: 'underscore' | 'bar' | 'block' | 'character';
  cursorGlide?: boolean;
  showCursor?: boolean;
  cursorColor?: string;
  prefixColor?: string;
  cursorBlinkDuration?: number;
  cursorCharacter?: string | React.ReactNode;
  prefix?: string;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
  initialDelay?: number;
  loop?: boolean;
  variableSpeed?: { min: number; max: number };
  onSentenceComplete?: (index: number) => void;
}

export default function TextType({
  text,
  typingSpeed = 75,
  pauseDuration = 1500,
  deletingSpeed = 50,
  deleteMode = 'backspace',
  typeEffect = 'none',
  mistakes = 0,
  cursorStyle = 'underscore',
  cursorGlide = true,
  showCursor = true,
  cursorColor = 'currentColor',
  prefixColor = 'currentColor',
  cursorBlinkDuration = 0.5,
  cursorCharacter = '_',
  prefix = '',
  className = '',
  style,
  as: Component = 'span',
  initialDelay = 0,
  loop = true,
  variableSpeed,
  onSentenceComplete,
}: TextTypeProps) {
  const sentences = useMemo(() => {
    if (Array.isArray(text)) return text.filter((t) => t.length > 0);
    return text ? [text] : [];
  }, [text]);

  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isSelecting, setIsSelecting] = useState(false);

  const onSentenceCompleteRef = useRef(onSentenceComplete);
  useEffect(() => {
    onSentenceCompleteRef.current = onSentenceComplete;
  }, [onSentenceComplete]);

  useEffect(() => {
    if (sentences.length === 0) return;

    const currentSentence = sentences[sentenceIndex] || '';

    const getTypingDelay = () => {
      if (variableSpeed?.min && variableSpeed?.max) {
        return Math.floor(
          Math.random() * (variableSpeed.max - variableSpeed.min + 1) +
            variableSpeed.min
        );
      }
      return typingSpeed;
    };

    let timer: ReturnType<typeof setTimeout>;

    if (isPaused) {
      timer = setTimeout(() => {
        if (!loop && sentenceIndex === sentences.length - 1) {
          return;
        }

        if (deleteMode === 'select') {
          setIsSelecting(true);
          timer = setTimeout(() => {
            setCharIndex(0);
            setIsSelecting(false);
            setIsPaused(false);
            setSentenceIndex((prev) => (prev + 1) % sentences.length);
          }, deletingSpeed * 4);
        } else {
          setIsPaused(false);
          setIsDeleting(true);
        }
      }, pauseDuration);

      return () => clearTimeout(timer);
    }

    if (isDeleting) {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setCharIndex((prev) => prev - 1);
        }, deletingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setSentenceIndex((prev) => (prev + 1) % sentences.length);
        }, 200);
      }

      return () => clearTimeout(timer);
    }

    // Typing mode
    if (charIndex < currentSentence.length) {
      const delay =
        charIndex === 0 && initialDelay > 0 && sentenceIndex === 0
          ? initialDelay
          : getTypingDelay();

      timer = setTimeout(() => {
        setCharIndex((prev) => {
          const next = prev + 1;
          if (next === currentSentence.length) {
            onSentenceCompleteRef.current?.(sentenceIndex);
            setIsPaused(true);
          }
          return next;
        });
      }, delay);

      return () => clearTimeout(timer);
    }

    return undefined;
  }, [
    charIndex,
    isDeleting,
    isPaused,
    sentenceIndex,
    sentences,
    typingSpeed,
    pauseDuration,
    deletingSpeed,
    deleteMode,
    mistakes,
    loop,
    initialDelay,
    variableSpeed,
  ]);

  const currentSentence = sentences[sentenceIndex] || '';
  const displayText = currentSentence.slice(0, charIndex);

  const renderCursorSymbol = () => {
    if (cursorCharacter) return cursorCharacter;
    switch (cursorStyle) {
      case 'underscore':
        return '_';
      case 'bar':
        return '|';
      case 'block':
        return '█';
      case 'character':
      default:
        return cursorCharacter || '_';
    }
  };

  const renderStyledContent = () => {
    if (typeEffect === 'none') {
      return (
        <span
          className={`inline ${
            isSelecting ? 'bg-[#E07A2F]/30 text-white rounded px-0.5' : ''
          }`}
        >
          {displayText}
        </span>
      );
    }

    return (
      <span
        className={`inline ${
          isSelecting ? 'bg-[#E07A2F]/30 text-white rounded px-0.5' : ''
        }`}
      >
        {displayText.split('').map((char, index) => {
          let effectClass = '';
          if (typeEffect === 'fade') {
            effectClass = 'animate-fade-in transition-opacity duration-150';
          } else if (typeEffect === 'blur') {
            effectClass = 'transition-all duration-150 filter-none';
          } else if (typeEffect === 'rise') {
            effectClass = 'inline-block transition-transform duration-150 transform-none';
          }
          return (
            <span key={index} className={effectClass}>
              {char}
            </span>
          );
        })}
      </span>
    );
  };

  const cursorBlinkCycle = Math.max(0.2, cursorBlinkDuration * 2);

  return (
    <Component
      className={`inline-flex items-center flex-wrap justify-center font-inherit ${className}`}
      style={style}
    >
      <style jsx global>{`
        @keyframes textTypeBlinkAnim {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>

      {prefix && (
        <span
          style={{ color: prefixColor }}
          className="mr-1 inline-block select-none font-inherit"
        >
          {prefix}
        </span>
      )}

      {renderStyledContent()}

      {showCursor && (
        <span
          aria-hidden="true"
          className={`inline-block select-none font-inherit leading-none ml-0.5 ${
            cursorGlide ? 'transition-all duration-100 ease-out' : ''
          }`}
          style={{
            color: cursorColor,
            animation: isPaused
              ? `textTypeBlinkAnim ${cursorBlinkCycle}s infinite ease-in-out`
              : 'none',
            opacity: 1,
            fontWeight: 'bold',
          }}
        >
          {renderCursorSymbol()}
        </span>
      )}
    </Component>
  );
}
