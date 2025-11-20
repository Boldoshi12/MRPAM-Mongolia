import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ElementType;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon: Icon,
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none focus:ring-offset-white dark:focus:ring-offset-slate-900";
  
  const variants = {
    primary: "bg-mrpam-blue text-white hover:bg-[#071F33] focus:ring-mrpam-blue dark:bg-sky-700 dark:hover:bg-sky-600",
    secondary: "bg-mrpam-teal text-white hover:bg-[#0B4A4D] focus:ring-mrpam-teal dark:bg-teal-700 dark:hover:bg-teal-600",
    outline: "border border-mrpam-line text-mrpam-text hover:bg-gray-50 focus:ring-gray-200 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:focus:ring-slate-700",
    ghost: "text-mrpam-blue hover:bg-blue-50/50 dark:text-sky-400 dark:hover:bg-slate-800"
  };

  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {Icon && <Icon className={`mr-2 ${size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'}`} />}
      {children}
    </button>
  );
};

export default Button;