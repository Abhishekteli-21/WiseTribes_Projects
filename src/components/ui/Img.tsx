"use client";

import { useState } from "react";

/** Plain <img> with a graceful gradient fallback if the URL fails.
 *  (Posters are placeholders the user swaps later.) */
export default function Img({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [ok, setOk] = useState(true);
  return (
    <span className="absolute inset-0 block bg-grad-soft">
      {ok && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setOk(false)}
          className={`h-full w-full object-cover ${className}`}
        />
      )}
    </span>
  );
}
