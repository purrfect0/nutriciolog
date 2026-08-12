import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  highlighted?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  highlighted = false,
}) => {
  return (
    <div
      className={`rounded-2xl p-6 md:p-8 transition-all duration-300 ${
        highlighted
          ? 'bg-white border-2 border-terracotta shadow-card'
          : 'bg-white/80 border border-cream-300 shadow-soft'
      } ${
        hoverEffect
          ? 'hover:-translate-y-1 hover:shadow-card hover:border-terracotta/40'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
