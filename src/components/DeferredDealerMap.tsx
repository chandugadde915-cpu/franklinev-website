import { lazy, Suspense, useEffect, useRef, useState } from "react";
const DealerMap = lazy(() => import("./DealerMap"));
export function DeferredDealerMap() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className="min-h-[400px] h-full">
      <Suspense
        fallback={
          <div role="status" className="min-h-[400px] grid place-items-center">
            Loading map…
          </div>
        }
      >
        {visible ? (
          <DealerMap />
        ) : (
          <div className="min-h-[400px] grid place-items-center" role="status">
            Dealer locations map
          </div>
        )}
      </Suspense>
    </div>
  );
}
