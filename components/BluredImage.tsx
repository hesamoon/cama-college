"use client";

import { useState } from "react";
import Image from "next/image";
import { Blurhash } from "react-blurhash";

function BluredImage({
  url,
  hash = "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
  name,
  cWidth,
  cHeight,
  imgStyle,
  blurhashStyle,
}: {
  url: string;
  hash?: string;
  name: string;
  cWidth: number;
  cHeight: number;
  imgStyle: string;
  blurhashStyle: string;
}) {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <div className="relative">
      {imageLoading && (
        <div
          className={`absolute inset-0 aspect-16-9 rounded-sm object-cover ${blurhashStyle} overflow-hidden`}
        >
          <Blurhash
            hash={hash}
            width="100%"
            height="100%"
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        </div>
      )}

      <Image
        className={`aspect-16-9 rounded-sm object-cover transition-all ease-linear duration-300 ${imgStyle} ${
          imageLoading ? "opacity-0" : "opacity-100"
        }`}
        src={url}
        alt={name}
        width={cWidth}
        height={cHeight}
        onLoad={() => setImageLoading(false)}
        priority={false}
      />
    </div>
  );
}

export default BluredImage;
