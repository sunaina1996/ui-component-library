import React from 'react';

export interface ChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

export interface ChartProps {
  data: ChartDataPoint[];
  type?: 'bar' | 'line';
  height?: number;
  title?: string;
  className?: string;
}

export const Chart: React.FC<ChartProps> = ({
  data,
  type = 'bar',
  height = 320,
  title,
  className = '',
}) => {
  const maxValue = Math.max(...data.map((point) => point.value), 1);
  const padding = 40;
  const width = 700;
  const innerWidth = width - padding * 2;
  const pointWidth = innerWidth / Math.max(data.length - 1, 1);

  return (
    <div className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-sm ${className}`}>
      {title && <h3 className="mb-4 text-xl font-semibold text-slate-900">{title}</h3>}
      <div className="overflow-hidden rounded-3xl border border-slate-100 bg-slate-50/80 p-4 shadow-sm">
        <svg viewBox={`0 0 ${width} ${height}`} className="h-full w-full">
          <defs>
            <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.12" />
            </linearGradient>
          </defs>
          <g transform={`translate(${padding}, ${padding})`}>
            {Array.from({ length: 5 }).map((_, index) => {
              const y = ((height - padding * 2) / 4) * index;
              return (
                <g key={index}>
                  <line
                    x1={0}
                    y1={y}
                    x2={innerWidth}
                    y2={y}
                    stroke="#e2e8f0"
                    strokeWidth="1"
                  />
                  <text x={-10} y={y + 5} textAnchor="end" fontSize="10" fill="#64748b">
                    {Math.round(maxValue - (maxValue / 4) * index)}
                  </text>
                </g>
              );
            })}

            {type === 'bar'
              ? data.map((point, index) => {
                  const barHeight = ((height - padding * 2) * point.value) / maxValue;
                  const x = index * (pointWidth * 0.9 + 10);
                  return (
                    <g key={point.label}>
                      <rect
                        x={x}
                        y={(height - padding * 2) - barHeight}
                        width={pointWidth * 0.3}
                        height={barHeight}
                        rx="10"
                        fill={point.color || '#0ea5e9'}
                      />
                      <text x={x + pointWidth * 0.15} y={height - padding * 2 + 18} textAnchor="middle" fontSize="10" fill="#334155">
                        {point.label}
                      </text>
                    </g>
                  );
                })
              : (
                <>
                  <path
                    d={data
                      .map((point, index) => {
                        const x = index * pointWidth;
                        const y = (height - padding * 2) - ((height - padding * 2) * point.value) / maxValue;
                        return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
                      })
                      .join(' ')}
                    fill="none"
                    stroke="#0ea5e9"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {data.map((point, index) => {
                    const x = index * pointWidth;
                    const y = (height - padding * 2) - ((height - padding * 2) * point.value) / maxValue;
                    return (
                      <circle
                        key={point.label}
                        cx={x}
                        cy={y}
                        r="6"
                        fill={point.color || '#0ea5e9'}
                        stroke="#ffffff"
                        strokeWidth="2"
                      />
                    );
                  })}
                </>
              )}
          </g>
        </svg>
      </div>
    </div>
  );
};