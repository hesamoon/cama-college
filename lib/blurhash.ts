import { decode } from "blurhash";
import { createCanvas } from "canvas";

export function blurhashToDataURL(
  hash: string,
  width = 32,
  height = 32
): string {
  const pixels = decode(hash, width, height);

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");
  const imageData = ctx.createImageData(width, height);
  imageData.data.set(pixels);
  ctx.putImageData(imageData, 0, 0);

  return canvas.toDataURL(); // returns base64 PNG
}
