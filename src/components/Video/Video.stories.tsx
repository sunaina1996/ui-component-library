import type { Meta, StoryObj } from '@storybook/react';
import { Video } from './Video';

const meta: Meta<typeof Video> = {
  title: 'Components/Video',
  component: Video,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    autoPlay: { control: 'boolean' },
    muted: { control: 'boolean' },
    loop: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const YoutubeEmbed: Story = {
  args: {
    title: 'Intro video',
    src: 'https://youtu.be/djV11Xbc914',
  },
};

export const NativeVideo: Story = {
  args: {
    title: 'Sample media',
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    poster: 'https://picsum.photos/seed/video/900/500',
    muted: true,
    loop: false,
  },
};