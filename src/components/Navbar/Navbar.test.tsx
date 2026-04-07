import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Navbar, NavItem } from './Navbar';

const items: NavItem[] = [
  { label: 'Home', active: true, onClick: jest.fn() },
  { label: 'About', onClick: jest.fn() },
];

describe('Navbar Component', () => {
  beforeEach(() => {
    items.forEach(item => {
      if (item.onClick) {
        (item.onClick as jest.Mock).mockClear();
      }
    });
  });

  test('renders title', () => {
    render(<Navbar title="Test App" items={items} />);
    expect(screen.getByText('Test App')).toBeInTheDocument();
  });

  test('renders nav items', () => {
    render(<Navbar items={items} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  test('calls item click', () => {
    render(<Navbar items={items} />);
    fireEvent.click(screen.getByText('Home'));
    expect(items[0].onClick).toHaveBeenCalledTimes(1);
  });

  test('calls action button click', () => {
    const handleClick = jest.fn();
    render(<Navbar items={items} actionLabel="Login" onActionClick={handleClick} />);
    fireEvent.click(screen.getByText('Login'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

test('toggles mobile menu', () => {
  render(<Navbar items={items} />);
  const menuButton = screen.getByText('Menu');

  // Click to open mobile menu
  fireEvent.click(menuButton);

  // Get mobile menu buttons specifically using getAllByText
  const mobileButtons = screen.getAllByText('Home'); // returns array
  expect(mobileButtons[1]).toBeInTheDocument(); // second one is mobile
  const aboutMobile = screen.getAllByText('About')[1];
  expect(aboutMobile).toBeInTheDocument();
});

test('mobile menu item click calls onClick', () => {
  render(<Navbar items={items} />);
  const menuButton = screen.getByText('Menu');
  fireEvent.click(menuButton);

  const mobileButtons = screen.getAllByText('Home');
  fireEvent.click(mobileButtons[1]); // second one is mobile
  expect(items[0].onClick).toHaveBeenCalledTimes(1);
});
});