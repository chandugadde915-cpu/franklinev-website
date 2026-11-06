import { memo, type ImgHTMLAttributes } from "react";
import { responsiveImage } from "@/lib/media";

export const ResponsiveImage = memo(function ResponsiveImage({
  src,
  sizes,
  loading = "lazy",
  fetchPriority,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      {...props}
      {...(src ? responsiveImage(src, sizes) : {})}
      loading={fetchPriority === "high" ? "eager" : loading}
      fetchPriority={fetchPriority}
      decoding="async"
    />
  );
});
