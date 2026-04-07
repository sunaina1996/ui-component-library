import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Carousel } from './Carousel';

describe('Carousel', () => {
  const images = [
    'https://picsum.photos/seed/1/900/500',
    'https://picsum.photos/seed/2/900/500',
  ];

  test('renders image and navigation', () => {
    render(<Carousel images={images} />);
    expect(screen.getByAltText('Slide 1')).toBeInTheDocument();
    expect(screen.getByText('Slide 1 of 2')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Previous' })).toBeInTheDocument();
  });

  test('changes slide when clicking next', () => {
    render(<Carousel images={images} />);
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    expect(screen.getByAltText('Slide 2')).toBeInTheDocument();
    expect(screen.getByText('Slide 2 of 2')).toBeInTheDocument();
  });

  test('changes slide when clicking previous from first slide', () => {
    render(<Carousel images={images} />);
    fireEvent.click(screen.getByRole('button', { name: 'Previous' }));
    expect(screen.getByAltText('Slide 2')).toBeInTheDocument();
    expect(screen.getByText('Slide 2 of 2')).toBeInTheDocument();
  });

  test('shows fallback when no images exist', () => {
    render(<Carousel images={[]} />);
    expect(screen.getByText(/no images available/i)).toBeInTheDocument();
  });
});