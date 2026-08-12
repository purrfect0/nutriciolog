import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'terracotta' | 'burgundy' | 'gold' | 'cream';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'terracotta',
  className = '',
}) => {
  const variantStyles = {
    terracotta: 'bg-terracotta/10 text-terracotta border-terracotta/20',
    burgundy: 'bg-burgundy/10 text-burgundy border-burgundy/20',
    gold: 'bg-gold/15 text-gold-600 border-gold/30',
    cream: 'bg-cream-200 text-charcoal border-cream-300',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
