import { useEffect, useRef, useState } from "react";

type OnScreenState = {
  isVisible: boolean;
  isAbove: boolean;
  isBelow: boolean;
};

export function useOnScreen<T extends Element>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T | null>(null);
  const [state, setState] = useState<OnScreenState>({
    isVisible: false,
    isAbove: false,
    isBelow: false,
  });

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const rect = entry.boundingClientRect;

        setState({
          isVisible: entry.isIntersecting,
          isAbove: rect.bottom < 0,
          isBelow: rect.top > window.innerHeight,
        });
      },
      options
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [options]);

  return [ref, state] as const;
}
