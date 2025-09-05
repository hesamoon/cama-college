"use client";

import { useRef, useEffect, ReactNode } from "react";

type DragScrollProps = {
  children: ReactNode;
  className?: string;
};

export default function DragScroll({ children, className = "" }: DragScrollProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let startScrollLeft = 0;
    let dragged = false;
    const DRAG_THRESHOLD = 5; // px

    const onPointerDown = (e: PointerEvent) => {
      isDown = true;
      dragged = false;
      startX = e.clientX;
      startScrollLeft = el.scrollLeft;
      el.style.cursor = "grabbing";
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > DRAG_THRESHOLD) {
        dragged = true;
        e.preventDefault(); // stop text selection
      }
      el.scrollLeft = startScrollLeft - dx;
    };

    const onPointerUpOrLeave = () => {
      isDown = false;
      el.style.cursor = "pointer";
    };

    // Prevent accidental clicks after a drag
    const onClickCapture = (e: Event) => {
      if (dragged) {
        e.preventDefault();
        e.stopPropagation();
        dragged = false;
      }
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUpOrLeave);
    el.addEventListener("pointerleave", onPointerUpOrLeave);
    el.addEventListener("click", onClickCapture, true); // capture phase

    el.style.cursor = "pointer";
    el.style.touchAction = "pan-y"; // allow page to scroll vertically on touch

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUpOrLeave);
      el.removeEventListener("pointerleave", onPointerUpOrLeave);
      el.removeEventListener("click", onClickCapture, true);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`overflow-x-auto scroll-smooth no-scrollbar select-none flex ${className}`}
    >
      {children}
    </div>
  );
}
