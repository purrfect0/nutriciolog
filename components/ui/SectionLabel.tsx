import React from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
  dark?: boolean;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ children, dark = false }) => {
  return (
    <div className="inline-flex items-center gap-2 mb-3">
      <span className={`h-px w-6 ${dark ? 'bg-gold' : 'bg-terracotta'}`}></span>
      <span
        className={`text-xs md:text-sm font-semibold uppercase tracking-widest ${
          dark ? 'text-gold' : 'text-terracotta'
        }`}
      >
        {children}
      </span>
      <span className={`h-px w-6 ${dark ? 'bg-gold' : 'bg-terracotta'}`}></span>
    </div>
  );
};
