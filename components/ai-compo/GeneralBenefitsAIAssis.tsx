"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const benefits = [
  {
    id: 1,
    title: "Summarize",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. ",
  },
  {
    id: 2,
    title: "Ask Questions",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. ",
  },
  {
    id: 3,
    title: "Read more",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. ",
  },
  {
    id: 4,
    title: "Paraphrase",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. ",
  },
];

function GeneralBenefitsAIAssis() {
  const DURATION = 10000; // 10 seconds per item

  const [active, setActive] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);
  const [remaining, setRemaining] = useState<number>(DURATION);

  const startedAtRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Start or resume the timer
  const startTimer = (ms: number) => {
    // record start time
    startedAtRef.current = performance.now();
    // schedule advance
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      // go to next item and reset for the next cycle
      setActive((prev) => (prev + 1) % benefits.length);
      setRemaining(DURATION);
    }, ms);
  };

  // Whenever the active item changes or unpauses, (re)start timer
  useEffect(() => {
    if (!paused) startTimer(remaining);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [active, paused]); // eslint-disable-line react-hooks/exhaustive-deps

  // Pause on hover
  const handleMouseEnter = () => {
    if (paused) return;
    setPaused(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // compute time left
    if (startedAtRef.current != null) {
      const elapsed = performance.now() - startedAtRef.current;
      const left = Math.max(0, remaining - elapsed);
      setRemaining(left);
    }
  };

  // Resume on leave
  const handleMouseLeave = () => {
    if (!paused) return;
    setPaused(false);
    startTimer(remaining);
  };

  //   const jumpTo = (index: number) => {
  //     setActive(index);
  //     setRemaining(DURATION);
  //     // if we were paused, keep paused; if running, restart below via effect
  //   };

  // Progress as a percentage, derived from remaining time.
  // We only need this for instant indicator updates on pause/resume without layout jank.
  const percent = (() => {
    if (!startedAtRef.current) return 0;
    const elapsed = paused
      ? DURATION - remaining
      : Math.min(
          DURATION,
          performance.now() - startedAtRef.current + (DURATION - remaining)
        );
    return Math.min(100, Math.max(0, (elapsed / DURATION) * 100));
  })();

  return (
    <div className="grid grid-cols-2">
      <div className="col-span-1 flex flex-col gap-6">
        {benefits.map((b) => (
          <div
            key={b.id}
            className="cursor-pointer space-y-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
              setActive(benefits.findIndex((i) => i.id === b.id));
              //   setRemaining(DURATION);
            }}
          >
            <h3
              className={`transition-all ease-linear duration-200 title-medium ${
                b.id === benefits[active].id
                  ? "text-background-primary-light"
                  : "text-txt-on-surface-secondary-light"
              }`}
            >
              {b.title}
            </h3>

            {b.id === benefits[active].id && (
              <div className="relative pb-3">
                <div className="absolute top-0 -left-4 h-full w-0.5 bg-outline-level0 overflow-hidden">
                  <div
                    key={active} // <-- forces a fresh animation on each item
                    className="w-0.5 bg-background-primary-light"
                    style={{
                      // Animate height 0 -> 100% over DURATION
                      animationName: "progressFill",
                      animationDuration: `${DURATION}ms`,
                      animationTimingFunction: "linear",
                      animationFillMode: "forwards",
                      animationPlayState: paused ? "paused" : "running",
                      // On initial render, snap to the correct point (prevents a flash when pausing)
                      height: `${percent}%`,
                    }}
                  />
                </div>

                <p className="body-large text-txt-on-surface-secondary-light text-justify">
                  {b.content}
                </p>
              </div>
            )}

            {/* Keyframes for the progress fill */}
            <style jsx>{`
              @keyframes progressFill {
                from {
                  height: 0%;
                }
                to {
                  height: 100%;
                }
              }
            `}</style>
            {/* Global fadeIn animation for image transitions */}
            <style jsx global>{`
              @keyframes fadeIn {
                from {
                  opacity: 0;
                }
                to {
                  opacity: 1;
                }
              }
            `}</style>
          </div>
        ))}
      </div>

      <div className="col-span-1 flex items-center justify-end">
        <div className="relative w-[330px] h-[330px]">
          <Image
            key={active}
            src={
              active === 0
                ? "/tuum/benefits-img/summarize-img.svg"
                : active === 1
                ? "/tuum/benefits-img/ask-question-img.svg"
                : active === 2
                ? "/tuum/benefits-img/read-more-img.svg"
                : active === 3
                ? "/tuum/benefits-img/paraphrase-img.svg"
                : "/tuum/benefits-img/summarize-img.svg"
            }
            alt={benefits[active].title}
            width={330}
            height={330}
            className="object-contain"
            style={{
              animationName: "fadeIn",
              animationDuration: "500ms",
              animationTimingFunction: "ease-in-out",
              animationFillMode: "forwards",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default GeneralBenefitsAIAssis;
