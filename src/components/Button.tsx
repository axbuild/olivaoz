import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  as?: 'button' | 'a';
  href?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  as = 'button',
  href,
}) => {
  const styles = `
    bg-brand-olive-dark text-white font-bold py-3 px-6 rounded-lg shadow-md
    hover:bg-brand-olive transform hover:-translate-y-0.5 transition-all
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-olive-dark
    ${className}
  `;

  if (as === 'a') {
    return (
      <a href={href} className={styles} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
};

export default Button;
