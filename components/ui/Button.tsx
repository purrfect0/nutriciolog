import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 whitespace-nowrap';

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2.5 shadow-md hover:shadow-lg',
    lg: 'px-8 py-4 text-lg gap-3 shadow-lg hover:shadow-xl',
  };

  const variantStyles = {
    primary:
      'bg-terracotta text-white hover:bg-terracotta-600 focus:ring-terracotta hover:-translate-y-0.5',
    secondary:
      'bg-burgundy text-white hover:bg-burgundy-900 focus:ring-burgundy hover:-translate-y-0.5',
    outline:
      'border-2 border-terracotta text-terracotta hover:bg-terracotta hover:text-white focus:ring-terracotta',
    gold:
      'bg-gold text-white hover:bg-gold-600 focus:ring-gold hover:-translate-y-0.5',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
