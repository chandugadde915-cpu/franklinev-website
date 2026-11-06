import { useEffect, useRef, useState, type VideoHTMLAttributes } from "react";
import { imageSource, videoAsset } from "@/lib/media";

/** Native controls remain available when autoplay is restricted or data saving is enabled. */
export function ViewportVideo({
  src = "",
  poster,
  ...props
}: VideoHTMLAttributes<HTMLVideoElement>) {
  const ref = useRef<HTMLVideoElement>(null);
  const visibleRef = useRef(false);
  const manualRequested = useRef(false);
  const [loaded, setLoaded] = useState(false);
  const [manual, setManual] = useState(false);
  const asset = videoAsset(src);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } })
      .connection;
    let visible = false;
    const update = () => {
      const restricted = reduced.matches || !!connection?.saveData;
      setManual(restricted);
      if (visible && !document.hidden) {
        // Attach a nearby source even in manual mode. preload="none" keeps
        // data-saving playback idle while native controls remain functional.
        setLoaded(true);
        if (!restricted && video.currentSrc) void video.play().catch(() => setManual(true));
        else if (restricted) video.pause();
      } else video.pause();
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = !!entry?.isIntersecting;
        visibleRef.current = visible;
        update();
      },
      { rootMargin: "100px" },
    );
    observer.observe(video);
    document.addEventListener("visibilitychange", update);
    reduced.addEventListener("change", update);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
      reduced.removeEventListener("change", update);
      video.pause();
    };
  }, []);
  return (
    <video
      {...props}
      ref={ref}
      src={loaded ? asset.src : undefined}
      poster={poster ? imageSource(poster, 960) : asset.poster}
      preload="none"
      autoPlay={loaded && !manual}
      controls={manual || props.controls}
      onLoadedData={(event) => {
        props.onLoadedData?.(event);
        if ((visibleRef.current && !document.hidden && !manual) || manualRequested.current) {
          manualRequested.current = false;
          void event.currentTarget.play().catch(() => setManual(true));
        }
      }}
      onPlay={(event) => {
        props.onPlay?.(event);
        setLoaded(true);
      }}
      onClick={(event) => {
        props.onClick?.(event);
        if (manual && event.currentTarget.readyState === 0) {
          manualRequested.current = true;
          setLoaded(true);
          // The first explicit click starts resource selection with preload=none.
          // Later play/pause clicks are left to the native controls.
          if (event.currentTarget.getAttribute("src")) {
            void event.currentTarget.play().catch(() => setManual(true));
          }
        }
      }}
    />
  );
}
