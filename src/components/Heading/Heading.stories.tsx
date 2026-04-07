import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
    },
    align: {
      control: { type: 'inline-radio' },
      options: ['left', 'center', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Create clean, consistent headings',
    subtitle: 'A simple heading component for titles and section labels.',
    level: 1,
    align: 'left',
  },
};

export const Centered: Story = {
  args: {
    title: 'Centered heading style',
    subtitle: 'Use align to position the heading for any layout.',
    level: 2,
    align: 'center',
  },
};