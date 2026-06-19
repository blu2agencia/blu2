"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface ArtistHeroCarouselProps {
  images: string[];
  alt: string;
}

export default function ArtistHeroCarousel({
  images,
  alt,
}: ArtistHeroCarouselProps) {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setCurrent((index + images.length) % images.length);
    },
    [images.length]
  );

  const next = useCallback(() => {
    setCurrent((i) => (i + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <div className="absolute inset-0 z-0">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`${alt} ${index + 1}`}
          fill
          priority={index === 0}
          className={`object-cover transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <button
        type="button"
        onClick={prev}
        aria-label="Imagen anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors hidden md:flex items-center justify-center"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Imagen siguiente"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors hidden md:flex items-center justify-center"
      >
        ›
      </button>

      <div className="absolute bottom-4 right-4 z-10 flex gap-2">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            aria-label={`Ir a imagen ${index + 1}`}
            onClick={() => goTo(index)}
            className={`h-2 rounded-full transition-all ${
              index === current
                ? "w-6 bg-white"
                : "w-2 bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
