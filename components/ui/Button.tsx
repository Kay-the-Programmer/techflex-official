import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidthOnMobile?: boolean;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  fullWidthOnMobile = false,
  ariaLabel,
}) => {
  const baseStyles = 'font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-techflex-orange focus:ring-offset-2 dark:focus:ring-offset-brand-gray-950 transition-all duration-300 ease-out inline-flex items-center justify-center tracking-tight';
  
  // Adjusted sizes for new hierarchy, especially lg for primary CTAs
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs sm:text-sm', // Adjusted text-xs for sm button
    md: 'px-5 py-2.5 text-sm sm:text-base', // Adjusted text-sm for md button
    lg: 'px-6 py-3 text-base', // Primary CTA size
    icon: 'p-2.5', 
  };

  const variantStyles = {
    primary: `bg-techflex-orange hover:bg-techflex-orange-600 text-white shadow-md hover:shadow-lg ${disabled ? 'opacity-60 cursor-not-allowed' : 'transform hover:scale-105'}`,
    secondary: `bg-techflex-blue hover:bg-techflex-blue-600 text-white focus:ring-techflex-blue shadow-md hover:shadow-lg ${disabled ? 'opacity-60 cursor-not-allowed' : 'transform hover:scale-105'}`,
    outline: `bg-transparent hover:bg-techflex-orange/10 dark:hover:bg-techflex-orange/20 text-techflex-orange border border-techflex-orange ${disabled ? 'opacity-60 cursor-not-allowed' : 'transform hover:scale-105'}`,
    ghost: `bg-transparent hover:bg-brand-gray-100 dark:hover:bg-brand-gray-800 text-brand-gray-700 dark:text-brand-gray-300 ${disabled ? 'opacity-60 cursor-not-allowed' : 'transform hover:scale-105'}`,
  };
  
  const mobileWidthClass = fullWidthOnMobile ? 'w-full sm:w-auto' : '';

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${mobileWidthClass} ${className}`;

  const commonProps = {
    className: combinedClassName,
    onClick: onClick,
    disabled: disabled,
    role: "button",
    'aria-disabled': disabled,
    'aria-label': ariaLabel,
  };

  if (to && !disabled) {
    return (
      <Link to={to} {...commonProps}>
        {children}
      </Link>
    );
  }
  
  if (to && disabled) {
    return (
      <span {...commonProps}>
        {children}
      </span>
    );
  }

  if (href && !disabled) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...commonProps}>
        {children}
      </a>
    );
  }

  if (href && disabled) {
     return (
      <span {...commonProps}>
        {children}
      </span>
    );
  }

  return (
    <button type={type} {...commonProps}>
      {children}
    </button>
  );
};

export default Button;