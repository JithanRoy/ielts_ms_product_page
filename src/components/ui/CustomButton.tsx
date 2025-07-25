
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {

  const baseStyles =
    'w-full bg-brand-primary text-white font-bold py-3 px-4 rounded-lg text-lg hover:bg-green-700 transition-colors shadow-md';

  return (
    <button className={`${baseStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;