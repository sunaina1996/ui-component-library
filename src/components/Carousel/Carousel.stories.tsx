import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './Carousel';

const sampleImages = [
  'https://picsum.photos/seed/1/900/500',
  'https://picsum.photos/seed/2/900/500',
  'https://picsum.photos/seed/3/900/500',
];

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'inline-radio' },
      options: ['horizontal', 'vertical'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    images: sampleImages,
    orientation: 'horizontal',
  },
};

export const Vertical: Story = {
  args: {
    images: sampleImages,
    orientation: 'vertical',
  },
};