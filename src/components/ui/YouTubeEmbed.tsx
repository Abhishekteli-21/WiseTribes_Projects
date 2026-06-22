"use client";

import { useState } from "react";
import Icon from "./Icon";

/** Click-to-load YouTube facade. Shows the poster until played
 *  so the page stays fast on mobile (students open on phones). */
export default function YouTubeEmbed({
  id,
  title,
  poster: customPoster,
}: {
  id: string;
  title: string;
  poster?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const poster = customPoster ?? `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-ink">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full"
          aria-label={`Play ${title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={poster}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
            }}
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
          <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-grad text-white shadow-2xl transition-transform duration-300 group-hover:scale-110">
            <Icon name="play" className="ml-1 h-8 w-8" />
            <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-violet-brand/40" />
          </span>
        </button>
      )}
    </div>
  );
}
