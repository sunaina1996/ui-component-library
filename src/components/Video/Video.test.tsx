import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Video } from './Video';

describe('Video', () => {
  test('renders YouTube iframe for youtube link', () => {
    render(<Video src="https://youtu.be/dQw4w9WgXcQ" title="Demo video" />);
    const iframe = screen.getByTitle(/demo video/i);
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('src', expect.stringContaining('youtube.com/embed/dQw4w9WgXcQ'));
  });

  test('renders HTML video element for direct src', () => {
    const { container } = render(
      <Video
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        title="Native video"
        poster="https://picsum.photos/seed/video/900/500"
      />
    );
    const video = container.querySelector('video');
    expect(video).toBeInTheDocument();
    expect(video).toHaveAttribute('src', expect.stringContaining('flower.mp4'));
  });
});