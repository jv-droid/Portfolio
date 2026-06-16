"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

type Item = { type: "image"; src: string } | { type: "video"; src: string };

export default function ProjectCarousel({
  images,
  name,
  itemClass = "w-44 aspect-[9/19.5]",
  video,
  sizes = "176px",
}: {
  images: string[];
  name: string;
  itemClass?: string;
  video?: string;
  sizes?: string;
}) {
  const [paused, setPaused] = useState(false);
  const [zoomed, setZoomed] = useState<string | null>(null);

  const items: Item[] = [
    ...images.map((src) => ({ type: "image" as const, src })),
    ...(video ? [{ type: "video" as const, src: video }] : []),
  ];

  const duration = Math.max(20, items.length * 4);

  const lightbox = (
    <Lightbox src={zoomed} alt={`${name} enlarged`} onClose={() => setZoomed(null)} />
  );

  // Single item: render static, no marquee.
  if (items.length === 1) {
    const it = items[0];
    return (
      <>
        <div className="mt-4 flex justify-center">
          <div
            className={`group relative ${itemClass} rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--bg)]`}
          >
            {it.type === "image" ? (
              <button
                type="button"
                onClick={() => setZoomed(it.src)}
                className="absolute inset-0 cursor-zoom-in"
                aria-label={`Zoom ${name} preview`}
              >
                <Image
                  src={it.src}
                  alt={`${name} preview`}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
              </button>
            ) : (
              <video src={it.src} className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline />
            )}
          </div>
        </div>
        {lightbox}
      </>
    );
  }

  return (
    <>
      <div
        className="overflow-hidden mt-4 -mx-1"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex gap-3 w-max px-1"
          style={{
            animation: `marquee ${duration}s linear infinite`,
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {[...items, ...items].map((it, j) => (
            <div
              key={j}
              className={`group relative shrink-0 ${itemClass} rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--bg)]`}
            >
              {it.type === "image" ? (
                <button
                  type="button"
                  onClick={() => setZoomed(it.src)}
                  className="absolute inset-0 cursor-zoom-in"
                  aria-label={`Zoom ${name} screenshot ${(j % items.length) + 1}`}
                >
                  <Image
                    src={it.src}
                    alt={`${name} screenshot ${(j % items.length) + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes={sizes}
                  />
                </button>
              ) : (
                <video
                  src={it.src}
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              )}
            </div>
          ))}
        </div>
      </div>
      {lightbox}
    </>
  );
}
