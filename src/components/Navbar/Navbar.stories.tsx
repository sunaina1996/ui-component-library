import type { Meta, StoryObj } from '@storybook/react';
import { Navbar, NavItem } from './Navbar';

const items: NavItem[] = [
  { label: 'Home', active: true, onClick: () => console.log('Home') },
  { label: 'Analytics', onClick: () => console.log('Analytics') },
  { label: 'Settings', onClick: () => console.log('Settings') },
];

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'My Dashboard',
    items,
    actionLabel: 'Login',
    onActionClick: () => console.log('Login'),
  },
};

export const WithLogo: Story = {
  args: {
    logo: 'https://via.placeholder.com/40',
    title: 'Brand',
    items,
    actionLabel: 'Get Started',
  },
};

export const NoAction: Story = {
  args: {
    title: 'Simple Navbar',
    items,
  },
};