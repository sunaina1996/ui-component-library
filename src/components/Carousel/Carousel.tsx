import React, { useMemo, useState } from 'react';

interface CarouselProps {
  images: string[];
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export const Carousel: React.FC<CarouselProps> = ({
  images,
  orientation = 'horizontal',
  className = '',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = images.length;
  const activeImage = images[activeIndex];
  const isVertical = orientation === 'vertical';
  const thumbLayout = isVertical ? 'flex-col' : 'flex-row';

  const navigationButtons = useMemo(
    () => (
      <div className={`flex ${isVertical ? 'flex-col gap-3' : 'items-center gap-3'}`}>
        <button
          type="button"
          onClick={() => setActiveIndex((prev) => (prev - 1 + total) % total)}
          className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={() => setActiveIndex((prev) => (prev + 1) % total)}
          className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
        >
          Next
        </button>
      </div>
    ),
    [isVertical, total]
  );

  if (images.length === 0) {
    return (
      <div className={`rounded-3xl border border-slate-200 bg-white p-8 text-center text-slate-500 shadow-sm ${className}`}>
        No images available.
      </div>
    );
  }

  return (
    <div className={`rounded-3xl border border-slate-200 bg-white p-5 shadow-xl ${className}`}>
      <div className={`flex flex-wrap gap-5 ${isVertical ? 'flex-col' : 'flex-row'}`}>
        <div className={`relative overflow-hidden rounded-3xl bg-slate-950 shadow-inner ${isVertical ? 'w-full' : 'flex-1'}`}>
          <img
            src={activeImage}
            alt={`Slide ${activeIndex + 1}`}
            className="h-80 w-full object-cover transition duration-500 ease-out sm:h-[420px]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent px-5 py-4 text-sm text-white">
            <div className="flex items-center justify-between gap-3">
              <span>{`Slide ${activeIndex + 1} of ${total}`}</span>
              <span className="rounded-full bg-slate-900/70 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                {orientation}
              </span>
            </div>
          </div>
        </div>

        <div className={`flex ${isVertical ? 'flex-row flex-wrap justify-center gap-3' : 'flex-col justify-between'} items-center ${isVertical ? '' : 'w-40'}`}>
          {navigationButtons}
          <div className={`flex ${thumbLayout} flex-wrap items-center justify-center gap-3 ${isVertical ? '' : 'mt-4'}`}>
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`overflow-hidden rounded-2xl border shadow-sm transition duration-200 ${
                  index === activeIndex
                    ? 'border-blue-500 ring-2 ring-blue-200'
                    : 'border-slate-200 hover:border-slate-300'
                } ${isVertical ? 'h-20 w-24' : 'h-20 w-full'} `}
              >
                <img src={image} alt={`Preview ${index + 1}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};