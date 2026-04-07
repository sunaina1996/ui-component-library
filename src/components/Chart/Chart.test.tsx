import React from 'react';
import { render, screen } from '@testing-library/react';
import { Chart } from './Chart';
import '@testing-library/jest-dom';

describe('Chart', () => {
  const sampleData = [
    { label: 'A', value: 10 },
    { label: 'B', value: 20 },
    { label: 'C', value: 30 },
  ];

  it('renders without crashing', () => {
    render(<Chart data={sampleData} />);
    expect(screen.getByText(/A/i)).toBeInTheDocument();
    expect(screen.getByText(/B/i)).toBeInTheDocument();
    expect(screen.getByText(/C/i)).toBeInTheDocument();
  });

  it('renders bar chart', () => {
    render(<Chart data={sampleData} type="bar" />);
    const bars = document.querySelectorAll('rect');
    expect(bars.length).toBe(3);
  });

  it('renders line chart', () => {
    render(<Chart data={sampleData} type="line" />);
    const path = document.querySelectorAll('path');
    expect(path.length).toBeGreaterThan(0);
  });

  it('renders title', () => {
    render(<Chart data={sampleData} title="Test Chart" />);
    expect(screen.getByText('Test Chart')).toBeInTheDocument();
  });
});