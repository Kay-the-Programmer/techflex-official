
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'; // Added ghost variant
  size?: 'sm' | 'md' | 'lg' | 'icon'; // Added icon size
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidthOnMobile?: boolean; // New prop for w-full on mobile
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
}) => {
  const baseStyles = 'font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-brand-gray-900 transition-all duration-300 ease-in-out inline-flex items-center justify-center';
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
    icon: 'p-2.5', // For icon-only buttons
  };

  const variantStyles = {
    primary: `bg-techflex-orange hover:bg-techflex-orange-600 text-white focus:ring-techflex-orange-500 shadow-md hover:shadow-lg ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`,
    secondary: `bg-techflex-blue hover:bg-techflex-blue-600 text-white focus:ring-techflex-blue-500 shadow-md hover:shadow-lg ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`,
    outline: `bg-transparent hover:bg-techflex-orange/10 dark:hover:bg-techflex-orange/20 text-techflex-orange border border-techflex-orange focus:ring-techflex-orange-500 ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`,
    ghost: `bg-transparent hover:bg-brand-gray-100 dark:hover:bg-brand-gray-800 text-brand-gray-700 dark:text-brand-gray-300 focus:ring-techflex-orange-500 ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`,
  };
  
  const mobileWidthClass = fullWidthOnMobile ? 'w-full sm:w-auto' : '';

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${mobileWidthClass} ${className}`;

  const commonProps = {
    className: combinedClassName,
    onClick: onClick,
    disabled: disabled,
    role: "button",
    'aria-disabled': disabled,
  };

  if (to && !disabled) {
    return (
      <Link to={to} {...commonProps}>
        {children}
      </Link>
    );
  }
  
  if (to && disabled) { // Link for disabled state (not clickable but looks like a link)
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

  if (href && disabled) { // Anchor for disabled state
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
