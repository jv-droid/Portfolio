"use client";

import { useState } from "react";
import Image from "next/image";

type Item = { type: "image"; src: string } | { type: "video"; src: string };

export default function ProjectCarousel({
  images,
  name,
  itemClass = "w-44 aspect-[9/19.5]",
  video,
}: {
  images: string[];
  name: string;
  itemClass?: string;
  video?: string;
}) {
  const [paused, setPaused] = useState(false);

  const items: Item[] = [
    ...images.map((src) => ({ type: "image" as const, src })),
    ...(video ? [{ type: "video" as const, src: video }] : []),
  ];

  const duration = Math.max(20, items.length * 4);

  // Single item: render static, no marquee.
  if (items.length === 1) {
    const it = items[0];
    return (
      <div className="mt-4 flex justify-center">
        <div
          className={`relative ${itemClass} rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--bg)]`}
        >
          {it.type === "image" ? (
            <Image
              src={it.src}
              alt={`${name} preview`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          ) : (
            <video src={it.src} className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline />
          )}
        </div>
      </div>
    );
  }

  return (
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
            className={`relative shrink-0 ${itemClass} rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--bg)]`}
          >
            {it.type === "image" ? (
              <Image
                src={it.src}
                alt={`${name} screenshot ${(j % items.length) + 1}`}
                fill
                className="object-cover"
                sizes="176px"
              />
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
  );
}
