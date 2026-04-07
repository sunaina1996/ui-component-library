import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, title }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm">
      {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
      <div>
        {children}
      </div>
    </div>
  );
};