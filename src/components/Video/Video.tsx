import React from 'react';

interface VideoProps {
  src: string;
  title?: string;
  poster?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  className?: string;
}

const getYoutubeEmbedUrl = (url: string): string => {
  const youtubeMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
  return youtubeMatch ? `https://www.youtube.com/embed/${youtubeMatch[1]}?rel=0` : url;
};

export const Video: React.FC<VideoProps> = ({
  src,
  title,
  poster,
  autoPlay = false,
  muted = false,
  loop = false,
  className = '',
}) => {
  const isYoutube = src.includes('youtube.com') || src.includes('youtu.be');
  const embedUrl = isYoutube ? getYoutubeEmbedUrl(src) : '';

  if (!src) {
    return (
      <div className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-sm ${className}`}>
        <p className="text-center text-sm text-slate-500">No video source provided.</p>
      </div>
    );
  }

  return (
    <div className={`max-w-4xl rounded-3xl border border-slate-200 bg-slate-950/5 p-6 shadow-xl ${className}`}>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          {title && <h3 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h3>}
          <p className="mt-2 text-sm text-slate-500">Responsive video component for YouTube or direct sources.</p>
        </div>
        {isYoutube && (
          <span className="rounded-full bg-slate-900 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-100">
            YouTube
          </span>
        )}
      </div>

      <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-slate-900 shadow-inner">
        {isYoutube ? (
          <iframe
            src={embedUrl}
            title={title || 'Embedded video'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-[420px] w-full sm:h-[520px]"
          />
        ) : (
          <video
            controls
            poster={poster}
            src={src}
            autoPlay={autoPlay}
            muted={muted}
            loop={loop}
            className="h-[420px] w-full bg-black object-cover"
          />
        )}
      </div>
    </div>
  );
};