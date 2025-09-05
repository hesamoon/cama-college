"use client";

import React, { useEffect, useRef, useState } from "react";

interface Item {
  id: number;
  text: string;
}

const items: Item[] = [
  { id: 1, text: "Item One" },
  { id: 2, text: "Item Two" },
  { id: 3, text: "Item Three" },
];

export default function SmoothTimerCarousel() {
  const DURATION = 5000; // milliseconds per item

  const [active, setActive] = useState<Item>(items[0]);
  const [paused, setPaused] = useState<boolean>(false);

  // Refs for DOM and animation bookkeeping
  const progressEl = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(0); // performance.now() when current run started
  const elapsedBeforeRef = useRef<number>(0); // accumulated elapsed time before current run

  // Helper: set transform smoothly by directly mutating DOM
  const setProgress = (fraction: number) => {
    const clamped = Math.max(0, Math.min(1, fraction));
    if (progressEl.current) {
      progressEl.current.style.transform = `scaleX(${clamped})`;
    }
  };

  // Step function called on each animation frame
  const step = () => {
    const now = performance.now();
    const elapsedTotal = elapsedBeforeRef.current + (now - startRef.current);
    const fraction = Math.min(1, elapsedTotal / DURATION);
    setProgress(fraction);

    if (fraction >= 1) {
      // finished this item: advance to next and reset. Use setTimeout(0) to avoid potential rAF/setState interleaving.
      cancelCurrentRAF();
      setTimeout(() => {
        const idx = items.findIndex((i) => i.id === active.id);
        const next = items[(idx + 1) % items.length];
        // reset bookkeeping for next item
        elapsedBeforeRef.current = 0;
        startRef.current = performance.now();
        setProgress(0);
        setActive(next);
      }, 0);
      return;
    }

    rafRef.current = requestAnimationFrame(step);
  };

  // start animation loop (resume)
  const startRAF = () => {
    if (rafRef.current != null) return; // already running
    startRef.current = performance.now();
    rafRef.current = requestAnimationFrame(step);
  };

  // stop animation loop (pause) and accumulate elapsed time
  const cancelCurrentRAF = () => {
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  const pause = () => {
    if (rafRef.current == null) return;
    // accumulate elapsed so far
    const now = performance.now();
    elapsedBeforeRef.current += now - startRef.current;
    cancelCurrentRAF();
  };

  // Reset progress when jumping to an item (manual click)
  const resetForItem = (item: Item) => {
    cancelCurrentRAF();
    elapsedBeforeRef.current = 0;
    setProgress(0);
    setActive(item);
    // if not paused, start immediately
    if (!paused) {
      startRef.current = performance.now();
      rafRef.current = requestAnimationFrame(step);
    }
  };

  // Effects:
  // 1) when active changes, reset bookkeeping and start if not paused
  useEffect(() => {
    elapsedBeforeRef.current = 0;
    setProgress(0);

    // small microtask delay to ensure DOM reset happens before RAF
    if (!paused) {
      startRef.current = performance.now();
      rafRef.current = requestAnimationFrame(step);
    }

    return () => {
      cancelCurrentRAF();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]); // only when active item changes

  // 2) pause/resume watcher
  useEffect(() => {
    if (paused) {
      // pause: accumulate elapsed and cancel RAF
      pause();
    } else {
      // resume: start RAF picking up elapsedBeforeRef
      startRef.current = performance.now();
      // avoid double-start
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(step);
      }
    }
    return () => {
      // Nothing special
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused]);

  // cleanup on unmount
  useEffect(() => {
    return () => {
      cancelCurrentRAF();
    };
  }, []);

  // Handlers
  const handleMouseEnter = () => {
    setPaused(true);
  };
  const handleMouseLeave = () => {
    setPaused(false);
  };
  const handleClickAdvance = () => {
    // go to next
    const idx = items.findIndex((i) => i.id === active.id);
    const next = items[(idx + 1) % items.length];
    resetForItem(next);
  };
  const jumpTo = (item: Item) => resetForItem(item);

  return (
    <div className="w-full max-w-md mx-auto">
      <div
        className="relative h-40 flex items-center justify-center rounded-xl bg-gray-100 shadow cursor-pointer select-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClickAdvance}
      >
        <p className="text-lg font-semibold">{active.text}</p>

        {/* Progress bar: we use transform: scaleX for smooth GPU-accelerated animation */}
        <div className="absolute bottom-0 left-0 h-1 w-full bg-gray-300 overflow-hidden">
          <div
            ref={progressEl}
            className="h-1 bg-red-500"
            style={{
              transform: "scaleX(0)", // initial
              transformOrigin: "left center",
              willChange: "transform",
            }}
          />
        </div>
      </div>

      {/* Dots navigation */}
      <div className="flex gap-2 justify-center mt-4">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => jumpTo(item)}
            className={`w-3 h-3 rounded-full transition-colors ${
              active.id === item.id ? "bg-red-500" : "bg-gray-400"
            }`}
            aria-label={`Go to ${item.text}`}
          />
        ))}
      </div>
    </div>
  );
}
