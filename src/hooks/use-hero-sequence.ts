import { useEffect, useRef, useState } from "react";
import { imageSource } from "@/lib/media";

type Frame = {
  image: HTMLImageElement;
  sourceWidth: number;
  ready: boolean;
  active: boolean;
  cancelled: boolean;
};

type Connection = EventTarget & { saveData?: boolean; effectiveType?: string };

/** Scroll is the clock: React only handles first-paint readiness and preference changes. */
export function useHeroSequence(
  frames: readonly string[],
  size: { width: number; height: number },
) {
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    const canvas = canvasRef.current;
    const content = contentRef.current;
    const stage = canvas?.parentElement;
    if (!hero || !canvas || !content || !stage) return;
    const context = canvas.getContext("2d", { alpha: false });
    if (!context) return;

    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: Connection }).connection;
    const cache = new Map<number, Frame>();
    let queue: number[] = [];
    let wanted = new Set<number>();
    let active = 0;
    let animationFrame = 0;
    let disposed = false;
    let isCompact = false;
    let hasDrawn = false;
    let target = 0;
    let previousTarget = 0;
    let lastDrawn = -1;
    let lastImage: HTMLImageElement | undefined;
    let lastProgress = -1;
    let lastOffset = -1;
    let heroTop = 0;
    let travel = 1;
    let displayWidth = 1;
    let displayHeight = 1;
    let sourceWidth = size.width;
    let resized = true;

    const schedule = () => {
      if (!disposed && !animationFrame) animationFrame = requestAnimationFrame(update);
    };

    const cancel = (frame: Frame) => {
      frame.cancelled = true;
      frame.image.onload = null;
      frame.image.onerror = null;
      if (frame.active) {
        frame.active = false;
        active--;
      }
      frame.image.removeAttribute("src");
    };

    const load = (index: number) => {
      const image = new Image();
      const frame: Frame = { image, sourceWidth, ready: false, active: true, cancelled: false };
      cache.set(index, frame);
      active++;
      image.decoding = "async";
      image.fetchPriority = index === target ? "high" : "low";
      const settle = () => {
        if (frame.active) {
          frame.active = false;
          active--;
        }
        image.onload = null;
        image.onerror = null;
        if (!disposed && !frame.cancelled) {
          schedule();
          pump();
        }
      };
      image.onload = async () => {
        try {
          // Decode once, after load; neighbors remain decoded until cache eviction.
          if (typeof image.decode === "function") await image.decode();
          if (!disposed && !frame.cancelled) {
            frame.ready = image.naturalWidth > 0;
            frame.sourceWidth = image.naturalWidth;
          }
        } catch {
          // A failed/aborted decode never clears the last good canvas frame.
        } finally {
          settle();
        }
      };
      image.onerror = settle;
      image.src = imageSource(frames[index], sourceWidth);
    };

    const nearHero = () =>
      scrollY + innerHeight >= heroTop - 200 && scrollY <= heroTop + travel + innerHeight + 200;
    const onScroll = () => {
      if (nearHero() || active > 0) schedule();
    };
    const pump = () => {
      if (disposed || isCompact || document.hidden || !nearHero()) return;
      while (active < 3 && queue.length) {
        const index = queue.shift()!;
        if (!cache.has(index)) load(index);
      }
    };

    const draw = () => {
      // Keep the poster until the demanded first frame is decoded; a faster
      // neighbor must not briefly replace it with the wrong opening image.
      if (!hasDrawn && !cache.get(target)?.ready) return;
      const candidates = [...cache].filter(([, frame]) => frame.ready);
      candidates.sort(([a], [b]) => Math.abs(a - target) - Math.abs(b - target));
      const nearest = candidates[0];
      if (!nearest) return;
      const [index, frame] = nearest;
      const image = frame.image;
      if (index === lastDrawn && image === lastImage && !resized) return;

      // Drawing above source resolution adds memory and GPU work, not image detail.
      const ratio = Math.min(
        devicePixelRatio || 1,
        innerWidth <= 768 ? 1.5 : 2,
        image.naturalWidth / displayWidth,
        image.naturalHeight / displayHeight,
      );
      const width = Math.max(1, Math.round(displayWidth * ratio));
      const height = Math.max(1, Math.round(displayHeight * ratio));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
      const cropWidth = width / scale;
      const cropHeight = height / scale;
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      context.drawImage(
        image,
        (image.naturalWidth - cropWidth) / 2,
        (image.naturalHeight - cropHeight) / 2,
        cropWidth,
        cropHeight,
        0,
        0,
        width,
        height,
      );
      lastDrawn = index;
      lastImage = image;
      resized = false;
      if (!hasDrawn) {
        hasDrawn = true;
        setReady(true);
      }
    };

    function update() {
      animationFrame = 0;
      if (disposed || document.hidden) return;
      const progress = isCompact ? 1 : Math.min(Math.max((scrollY - heroTop) / travel, 0), 1);
      const launch = Math.min(progress * 1.05, 1);
      if (launch !== lastProgress) {
        content!.style.setProperty("--launch-progress", String(launch));
        content!.classList.toggle("is-launching", launch > 0.04);
        lastProgress = launch;
      }
      // Keep the control inside the visible viewport even before the stage pins.
      const offset = Math.max(0, heroTop - scrollY);
      if (offset !== lastOffset) {
        hero!.style.setProperty("--hero-viewport-offset", `${offset}px`);
        lastOffset = offset;
      }
      if (isCompact) return;
      if (!nearHero()) {
        queue = [];
        for (const [index, frame] of cache) {
          if (frame.active) {
            cancel(frame);
            cache.delete(index);
          }
        }
        return;
      }
      target = Math.round(progress * (frames.length - 1));
      const direction = target >= previousTarget ? 1 : -1;
      previousTarget = target;
      const offsets =
        progress === 0
          ? [0, 1, 2]
          : [0, direction, -direction, 2 * direction, -2 * direction, 3 * direction];
      const indices = offsets
        .map((offset) => target + offset)
        .filter((index) => index >= 0 && index < frames.length);
      wanted = new Set(indices);
      // Let one in-flight frame finish during continuous fast scrolling. Cancelling
      // every superseded request could otherwise starve decoding until scrolling stops.
      const bridge = [...cache.values()].find((frame) => frame.active);
      for (const [index, frame] of cache) {
        if (
          (frame.active && !wanted.has(index) && frame !== bridge) ||
          frame.sourceWidth < sourceWidth
        ) {
          cancel(frame);
          cache.delete(index);
        }
      }
      const limit = innerWidth <= 768 ? 16 : 28;
      const distant = [...cache.keys()]
        .filter((index) => !wanted.has(index) && cache.get(index) !== bridge)
        .sort((a, b) => Math.abs(b - target) - Math.abs(a - target));
      const missing = indices.filter((index) => !cache.has(index));
      while (cache.size + missing.length > limit && distant.length) {
        const index = distant.shift()!;
        cancel(cache.get(index)!);
        cache.delete(index);
      }
      queue = missing; // Supersede stale requests instead of queuing scroll history.
      const demanded = cache.get(target);
      if (demanded) demanded.image.fetchPriority = "high";
      pump();
      draw();
    }

    const measure = () => {
      // Cache layout coordinates; no getBoundingClientRect/offsetHeight reads on scroll.
      heroTop = 0;
      let element: HTMLElement | null = hero;
      while (element) {
        heroTop += element.offsetTop;
        element = element.offsetParent as HTMLElement | null;
      }
      travel = Math.max(hero.offsetHeight - innerHeight, 1);
      displayWidth = canvas.clientWidth || innerWidth;
      displayHeight = canvas.clientHeight || innerHeight;
      sourceWidth = Math.min(
        size.width,
        Math.ceil(Math.max(displayWidth, (displayHeight * size.width) / size.height)),
      );
      resized = true;
      schedule();
    };

    const preferences = () => {
      isCompact =
        reducedMotion.matches ||
        !!connection?.saveData ||
        /(^|-)2g$/.test(connection?.effectiveType ?? "");
      setCompact(isCompact);
      if (isCompact) {
        queue = [];
        cache.forEach(cancel);
        cache.clear();
        lastImage = undefined;
      }
      measure();
    };
    preferences();
    const observer = new ResizeObserver(measure);
    observer.observe(hero);
    observer.observe(stage);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    document.addEventListener("visibilitychange", schedule);
    reducedMotion.addEventListener("change", preferences);
    connection?.addEventListener("change", preferences);
    return () => {
      disposed = true;
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      document.removeEventListener("visibilitychange", schedule);
      reducedMotion.removeEventListener("change", preferences);
      connection?.removeEventListener("change", preferences);
      cache.forEach(cancel);
      cache.clear();
    };
  }, [frames, size.width, size.height]);

  return { heroRef, canvasRef, contentRef, ready, compact };
}
