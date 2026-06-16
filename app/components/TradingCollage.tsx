"use client";

import { useState } from "react";
import Lightbox from "./Lightbox";

export default function TradingCollage({ images }: { images: string[] }) {
  const [zoomed, setZoomed] = useState<string | null>(null);

  return (
    <>
      <div className="columns-2 sm:columns-3 gap-3">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setZoomed(src)}
            aria-label={`Zoom trading certificate ${i + 1}`}
            className="group mb-3 block w-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] cursor-zoom-in break-inside-avoid"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`Trading certificate ${i + 1}`}
              loading="lazy"
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>
      <Lightbox src={zoomed} alt="Trading certificate" onClose={() => setZoomed(null)} />
    </>
  );
}
