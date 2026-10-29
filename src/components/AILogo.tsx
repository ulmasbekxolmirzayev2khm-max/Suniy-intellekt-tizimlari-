import React, { useState } from 'react';

interface AILogoProps {
  id: string;
  name: string;
  accentColor: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const AILogo: React.FC<AILogoProps> = ({
  id,
  name,
  accentColor,
  className = '',
  size = 'md',
}) => {
  const [hasError, setHasError] = useState(false);

  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-lg',
    xl: 'w-20 h-20 text-2xl',
  }[size];

  // If error occurred or fallback requested, render custom branded monogram
  if (hasError) {
    return (
      <div
        className={`${sizeClasses} ${className} rounded-2xl flex items-center justify-center font-bold text-white shadow-lg transition-transform`}
        style={{
          background: `linear-gradient(135deg, ${accentColor}, #0f172a)`,
          boxShadow: `0 0 20px ${accentColor}40`,
        }}
        title={name}
      >
        {name.slice(0, 2).toUpperCase()}
      </div>
    );
  }

  // Authentic vector SVG logos for each system
  const renderVector = () => {
    switch (id) {
      case 'chatgpt':
        // OpenAI Rosette
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full p-2 text-[#10a37f]">
            <path d="M21.5 10.4c-.2-.9-.7-1.6-1.5-2.1-.3-.2-.6-.3-.9-.4.1-.7 0-1.4-.4-2.1-.5-.9-1.3-1.6-2.3-1.8-.7-.2-1.4-.1-2.1.2-.4-.6-1-1.1-1.7-1.5-.9-.5-2-.6-3-.3-.8.2-1.5.7-2 1.3-.7-.2-1.5-.2-2.2.1-.9.4-1.6 1.2-1.9 2.1-.3.7-.3 1.5-.1 2.2-.6.4-1.2 1-1.5 1.7-.5 1-.5 2.1-.2 3.1.3.8.8 1.5 1.5 2 .2.9.7 1.6 1.5 2.1.3.2.6.3.9.4-.1.7 0 1.4.4 2.1.5.9 1.3 1.6 2.3 1.8.7.2 1.4.1 2.1-.2.4.6 1 1.1 1.7 1.5.9.5 2 .6 3 .3.8-.2 1.5-.7 2-1.3.7.2 1.5.2 2.2-.1.9-.4 1.6-1.2 1.9-2.1.3-.7.3-1.5.1-2.2.6-.4 1.2-1 1.5-1.7.5-1 .5-2.1.2-3.1-.3-.8-.8-1.5-1.5-2zm-8.8 10.5c-.7 0-1.4-.2-2-.6l3.3-1.9c.2-.1.4-.3.4-.6v-4.6l1.4.8v3.9c0 1.7-1.4 3-3.1 3zm-6.9-4c-.4-.6-.5-1.3-.4-2l3.3 1.9c.2.1.5.1.7 0l4-2.3v1.6l-3.4 2c-1.5.8-3.4.3-4.2-1.2zm-1.1-7.1c.3-.6.9-1.1 1.6-1.3l.1 3.8c0 .2.2.4.4.6l4 2.3-1.4.8-3.4-2c-1.5-.8-2-2.7-1.3-4.2zm11.7 2.3l-4-2.3 1.4-.8 3.4 2c1.5.9 2 2.7 1.3 4.2-.3.6-.9 1.1-1.6 1.3l-.1-3.8c0-.2-.2-.5-.4-.6zm2.3-2.6l-3.3-1.9c-.2-.1-.5-.1-.7 0l-4 2.3v-1.6l3.4-2c1.5-.9 3.4-.3 4.2 1.2.4.6.5 1.3.4 2zm-7.6-1.4l-1.4-.8v-3.9c0-1.7 1.4-3 3.1-3 .7 0 1.4.2 2 .6l-3.3 1.9c-.2.1-.4.4-.4.6v4.6z"/>
          </svg>
        );

      case 'gemini':
        // Google Gemini Sparkle Star
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full p-2" fill="none">
            <path
              d="M12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4771 12 22C12 16.4771 16.4771 12 22 12C16.4771 12 12 7.52285 12 2Z"
              fill="url(#geminiGradient)"
            />
            <defs>
              <linearGradient id="geminiGradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4E82EE" />
                <stop offset="0.5" stopColor="#9B72CF" />
                <stop offset="1" stopColor="#D96570" />
              </linearGradient>
            </defs>
          </svg>
        );

      case 'claude':
        // Anthropic Claude Burst
        return (
          <svg viewBox="0 0 24 24" fill="#D97706" className="w-full h-full p-2">
            <path d="M4.5 10.5C4.2 10.5 4 10.8 4 11.2V12.8C4 13.2 4.2 13.5 4.5 13.5H7.2L5.3 15.4C5.1 15.6 5 15.9 5.1 16.2L5.9 17.6C6.1 17.9 6.4 18 6.7 17.9L9.4 16.3L8.6 19.2C8.5 19.5 8.7 19.8 9 20L10.4 20.8C10.7 21 11.1 20.9 11.2 20.6L12 17.7L12.8 20.6C12.9 20.9 13.3 21 13.6 20.8L15 20C15.3 19.8 15.5 19.5 15.4 19.2L14.6 16.3L17.3 17.9C17.6 18 17.9 17.9 18.1 17.6L18.9 16.2C19 15.9 18.9 15.6 18.7 15.4L16.8 13.5H19.5C19.8 13.5 20 13.2 20 12.8V11.2C20 10.8 19.8 10.5 19.5 10.5H16.8L18.7 8.6C18.9 8.4 19 8.1 18.9 7.8L18.1 6.4C17.9 6.1 17.6 6 17.3 6.1L14.6 7.7L15.4 4.8C15.5 4.5 15.3 4.2 15 4L13.6 3.2C13.3 3 12.9 3.1 12.8 3.4L12 6.3L11.2 3.4C11.1 3.1 10.7 3 10.4 3.2L9 4C8.7 4.2 8.5 4.5 8.6 4.8L9.4 7.7L6.7 6.1C6.4 6 6.1 6.1 5.9 6.4L5.1 7.8C5 8.1 5.1 8.4 5.3 8.6L7.2 10.5H4.5Z" />
          </svg>
        );

      case 'copilot':
        // Microsoft Copilot Ribbon
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full p-2" fill="none">
            <path
              d="M7 6.5C7 4.567 8.567 3 10.5 3H16C17.933 3 19.5 4.567 19.5 6.5V12C19.5 13.933 17.933 15.5 16 15.5H14"
              stroke="#0078D4"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M17 17.5C17 19.433 15.433 21 13.5 21H8C6.067 21 4.5 19.433 4.5 17.5V12C4.5 10.067 6.067 8.5 8 8.5H10"
              stroke="#00B294"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="12" cy="12" r="2.2" fill="#0078D4" />
          </svg>
        );

      case 'grok':
        // xAI Grok Minimalist X/Slash
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full p-2.5" fill="none">
            <path d="M4 4L20 20M20 4L13.5 10.5M10.5 13.5L4 20" stroke="#F43F5E" strokeWidth="2.8" strokeLinecap="round" />
            <circle cx="12" cy="12" r="1.5" fill="#FFFFFF" />
          </svg>
        );

      case 'deepseek':
        // DeepSeek Blue Whale/Fin
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full p-2" fill="none">
            <path
              d="M3 13.5C4.5 10 8 7 13 7C18.5 7 21 11.5 21 15C19 14 17 14 15 15C12.5 16.5 10 17 7 16.5L3 17.5V13.5Z"
              fill="#2563EB"
            />
            <path
              d="M13 7C14.5 4.5 17 3.5 19 3C18.5 5 18 6.5 17.5 7.5"
              stroke="#38BDF8"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="8" cy="12" r="1.2" fill="#FFFFFF" />
          </svg>
        );

      case 'perplexity':
        // Perplexity Interwoven Loop / Asterisk
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full p-2" fill="none" stroke="#0D9488" strokeWidth="2.2" strokeLinecap="round">
            <path d="M12 3V21M3 12H21" />
            <path d="M6 6L18 18M6 18L18 6" />
            <rect x="9.5" y="9.5" width="5" height="5" rx="1.5" fill="#0D9488" stroke="none" />
          </svg>
        );

      case 'midjourney':
        // Midjourney Boat / Sail polygon
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full p-2" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinejoin="round">
            <polygon points="12,3 20,18 12,15 4,18" fill="#8B5CF6" fillOpacity="0.25" />
            <polygon points="12,3 12,15 4,18" fill="#8B5CF6" fillOpacity="0.4" />
            <line x1="12" y1="3" x2="12" y2="21" stroke="#A78BFA" strokeWidth="2" />
            <path d="M4 19C7 21 17 21 20 19" stroke="#C4B5FD" strokeWidth="2" />
          </svg>
        );

      case 'meta-llama':
        // Meta Infinity / Llama loop
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full p-2" fill="none">
            <path
              d="M7 16C5 16 3.5 14.5 3.5 12.5C3.5 10 5.5 8 8 8C10.5 8 12 10.5 12 12C12 10.5 13.5 8 16 8C18.5 8 20.5 10 20.5 12.5C20.5 14.5 19 16 17 16C14.5 16 13 13.5 12 12C11 13.5 9.5 16 7 16Z"
              stroke="#0668E1"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <circle cx="8" cy="12" r="1.5" fill="#0668E1" />
            <circle cx="16" cy="12" r="1.5" fill="#0668E1" />
          </svg>
        );

      case 'mistral':
        // Mistral Stepped Orange Blocks
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full p-2" fill="none">
            <rect x="4" y="4" width="4" height="4" rx="1" fill="#FF7000" />
            <rect x="8" y="8" width="4" height="4" rx="1" fill="#FF7000" />
            <rect x="12" y="12" width="4" height="4" rx="1" fill="#FF7000" />
            <rect x="16" y="16" width="4" height="4" rx="1" fill="#FF7000" />
            <rect x="16" y="4" width="4" height="4" rx="1" fill="#FF5000" />
            <rect x="4" y="16" width="4" height="4" rx="1" fill="#FFA000" />
          </svg>
        );

      default:
        return (
          <div className="w-full h-full flex items-center justify-center font-bold text-white">
            {name.slice(0, 2)}
          </div>
        );
    }
  };

  return (
    <div
      className={`${sizeClasses} ${className} relative rounded-2xl flex items-center justify-center backdrop-blur-md shadow-md border transition-all duration-300 group-hover:scale-105`}
      style={{
        backgroundColor: `${accentColor}15`,
        borderColor: `${accentColor}40`,
        boxShadow: `0 8px 24px -4px ${accentColor}30`,
      }}
      onError={() => setHasError(true)}
    >
      {renderVector()}
    </div>
  );
};
