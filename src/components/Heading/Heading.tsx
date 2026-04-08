import React from 'react';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
interface HeadingProps {
  title: string;
  subtitle?: string;
  level?: HeadingLevel | `${HeadingLevel}`;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const headingSizes: Record<HeadingLevel, string> = {
  1: 'text-5xl md:text-6xl',
  2: 'text-4xl md:text-5xl',
  3: 'text-3xl md:text-4xl',
  4: 'text-2xl md:text-3xl',
  5: 'text-xl md:text-2xl',
  6: 'text-lg md:text-xl',
};

const alignStyles: Record<NonNullable<HeadingProps['align']>, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

const normalizeLevel = (level?: HeadingProps['level']): HeadingLevel => {
  if (typeof level === 'number') {
    return level;
  }

  if (typeof level === 'string') {
    const parsed = Number(level);
    if ([1, 2, 3, 4, 5, 6].includes(parsed)) {
      return parsed as HeadingLevel;
    }
  }

  return 1;
};

export const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  level = 1,
  align = 'left',
  className = '',
}) => {
  const safeLevel = normalizeLevel(level);
  const Tag = `h${safeLevel}` as keyof JSX.IntrinsicElements;

  return (
    <div className={`max-w-3xl p-6 ${alignStyles[align]} ${className}`}>
      <Tag className={`${headingSizes[safeLevel]} font-semibold tracking-tight text-slate-900`}>
        {title}
      </Tag>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  );
};