import React from 'react';

export default function Typography({ as: Tag = 'p', children, className = '' }: TypographyProps) {
  return (
    <Tag className={`text-gray-800 ${className}`}>
      {children}
    </Tag>
  );
}

type TypographyProps = {
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div';
  children: React.ReactNode;
  className?: string;
};