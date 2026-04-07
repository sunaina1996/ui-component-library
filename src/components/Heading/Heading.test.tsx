import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Heading } from './Heading';

describe('Heading Component', () => {
  test('renders title and subtitle', () => {
    render(<Heading title="Hello world" subtitle="A subtitle" />);
    expect(screen.getByText('Hello world')).toBeInTheDocument();
    expect(screen.getByText('A subtitle')).toBeInTheDocument();
  });

  test('renders correct heading level', () => {
    render(<Heading title="Section" level={3} />);
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toHaveTextContent('Section');
  });

  test('applies center alignment class', () => {
    render(<Heading title="Centered" align="center" />);
    const headingContainer = screen.getByText('Centered').closest('div');
    expect(headingContainer).toHaveClass('text-center');
  });
});