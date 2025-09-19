"use client";

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// components
import Button from "./Button";

function TUUMNotification({
  setClose,
}: {
  setClose: Dispatch<SetStateAction<boolean>>;
}) {
  const DURATION = 10000; // 10 seconds per item

  const [paused, setPaused] = useState<boolean>(false);
  const [remaining, setRemaining] = useState<number>(DURATION);

  const startedAtRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  // Start or resume the timer
  const startTimer = (ms: number) => {
    // record start time
    startedAtRef.current = performance.now();
    // schedule advance
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setClose(true);
      setRemaining(DURATION);
    }, ms);
  };

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

  useEffect(() => {
    if (!paused) startTimer(remaining);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [paused]);

  return (
    <motion.div
      key="notification"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 500, opacity: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative">
        <div className="relative bg-gradient-to-tr from-[#551802] to-[#190601] rounded-[2.3rem] flex flex-col justify-between gap-6 w-85 shadow-[0_1px_16px_rgba(27,5,1,.4)] overflow-hidden">
          <div className="flex justify-end p-4">
            <Button
              props={{
                value: "",
                leftIcon: "close-circle-white",
                rightIcon: "",
                type: "text",
                disabled: false,
                color: "red",
                width: 16,
                height: 16,
                size: "mobile-body-large md:body-large",
                clickHandler: () => setClose(true),
              }}
            />
          </div>

          <div className="space-y-4 px-6 pb-6">
            <p className="mt-2 body-medium text-primary-tints-90">
              Do you want to go to your last class?
            </p>

            {/* Actions */}
            <div className="flex items-center justify-end gap-12">
              <button
                className="body-medium bg-gradient-to-r from-[#F78B5D] to-[#CE6312] bg-clip-text text-transparent cursor-pointer"
                onClick={() => setClose(true)}
              >
                Cancel
              </button>

              <button className="flex items-center gap-1 body-medium bg-gradient-to-r from-[#F78B5D] to-[#CE6312] bg-clip-text text-transparent cursor-pointer">
                Yes. GO!{" "}
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0249 5.44141L17.0832 10.4997L12.0249 15.5581"
                    stroke="#906E3E"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.91675 10.5H16.9417"
                    stroke="#906E3E"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Keyframes for the progress fill */}
          <style jsx>{`
            @keyframes progressFill {
              from {
                width: 0%;
              }
              to {
                width: 100%;
              }
            }
          `}</style>
          <div className="absolute bottom-0 w-full h-1 bg-transparent overflow-hidden">
            <div
              className="h-1 bg-gradient-to-r from-[#F78B5D] to-[#CE6312]"
              style={{
                // Animate width 0 -> 100% over DURATION
                animationName: "progressFill",
                animationDuration: `${DURATION}ms`,
                animationTimingFunction: "linear",
                animationFillMode: "forwards",
                animationPlayState: paused ? "paused" : "running",
                // On initial render, snap to the correct point (prevents a flash when pausing)
                width: `${percent}%`,
              }}
            />
          </div>
        </div>

        {/* tuum logo */}
        <div className="z-50">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 rounded-full">
            {/* glow effect */}
            <div className="absolute -top-[2px] -left-[2px] w-[57.55px] h-[57.55px] rounded-full bg-[#B76929] opacity-16 -z-5" />
            <div className="absolute -top-[2px] -right-[2px] w-[57.55px] h-[57.55px] rounded-full bg-[#B76929] opacity-16 -z-5" />
            <div className="absolute -bottom-[2px] -left-[2px] w-[57.55px] h-[57.55px] rounded-full bg-[#B76929] opacity-16 -z-5" />
            <div className="absolute -bottom-[2px] -right-[2px] w-[57.55px] h-[57.55px] rounded-full bg-[#B76929] opacity-16 -z-5" />

            <div className="bg-[#320E0B] rounded-full flex items-center justify-center w-[47.63px] h-[47.63px]">
              <video
                autoPlay
                loop={true} // set true if you want looping
                muted
                playsInline
                className="rounded-full"
              >
                <source src="/tuum/tuum-animation3.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <h5 className="absolute top-10 left-1/2 -translate-x-1/2 label-medium-db bg-gradient-to-r from-[#F78B5D] to-[#CE6312] bg-clip-text text-transparent">
            TUUM Professor
          </h5>
        </div>
      </div>
    </motion.div>
  );
}

export default TUUMNotification;
