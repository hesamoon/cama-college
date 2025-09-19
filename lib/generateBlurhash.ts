"use server";
import sharp from "sharp";
import { encode } from "blurhash";
import fs from "fs";

export async function encodeURLToBlurhash(path: string): Promise<string> {
  // 1. fetch image from remote API
  const res = await fetch(path);
  const buffer = Buffer.from(await res.arrayBuffer());

  // 2. decode pixels
  const image = await sharp(buffer)
    .raw()
    .ensureAlpha()
    .resize(32, 32, { fit: "inside" })
    .toBuffer({ resolveWithObject: true });

  const { data, info } = image;

  // 3. get blurhash
  const hash = encode(
    new Uint8ClampedArray(data),
    info.width,
    info.height,
    4,
    4
  );

  // 4. convert to blurDataURL for <Image />
  return hash;
}
