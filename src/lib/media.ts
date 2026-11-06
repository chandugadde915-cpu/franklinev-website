import manifest from "@/data/image-manifest.json";
import videos from "@/data/video-manifest.json";

type ImageAsset = { width: number; height: number; variants: { src: string; width: number }[] };
export function imageAsset(src?: string) {
  const asset = src
    ? (
        manifest as Record<
          string,
          { width: number; height: number; base: string; widths: number[] }
        >
      )[src]
    : undefined;
  return asset
    ? {
        width: asset.width,
        height: asset.height,
        variants: asset.widths.map((width) => ({ width, src: `${asset.base}-${width}.webp` })),
      }
    : undefined;
}
export function imageSource(src: string, width = 1600) {
  const image = imageAsset(src);
  return image?.variants.find((v) => v.width >= width)?.src ?? image?.variants.at(-1)?.src ?? src;
}
export function responsiveImage(src: string, sizes = "(max-width: 767px) 100vw, 50vw") {
  const image = imageAsset(src);
  return image
    ? {
        src: imageSource(src, 960),
        srcSet: image.variants.map((v) => `${v.src} ${v.width}w`).join(", "),
        sizes,
        width: image.width,
        height: image.height,
      }
    : { src };
}
export function videoAsset(src: string) {
  return (
    (videos as Record<string, { src: string; poster: string }>)[src] ?? { src, poster: undefined }
  );
}
