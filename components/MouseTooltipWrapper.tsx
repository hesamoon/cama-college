"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface MouseTooltipWrapperProps {
  children: React.ReactNode;
  message: string;
  className?: string;
}

export default function MouseTooltipWrapper({
  children,
  message,
  className = "",
}: MouseTooltipWrapperProps) {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [visibleCount, setVisibleCount] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [visibleWidth, setVisibleWidth] = useState<number>(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const words = message.trim().split(" ");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  // Show tooltip with 5-second timer
  useEffect(() => {
    if (hovered) {
      setShowTooltip(true);
      setIsAnimatingOut(false);
      // Start slide-out animation after 5 seconds
      const hideTimer = setTimeout(() => {
        setIsAnimatingOut(true);
        // Hide completely after animation duration
        const finalHideTimer = setTimeout(() => {
          setShowTooltip(false);
          setHovered(false);
          setIsAnimatingOut(false);
        }, 500); // Match transition duration

        return () => clearTimeout(finalHideTimer);
      }, 5000);

      return () => clearTimeout(hideTimer);
    } else {
      setShowTooltip(false);
      setIsAnimatingOut(false);
    }
  }, [hovered]);

  // Animate words one by one
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showTooltip) {
      setVisibleCount(1); // show first word immediately
      let i = 1;
      timer = setInterval(() => {
        if (i < words.length) {
          setVisibleCount((prev) => prev + 1);
          i++;
        } else {
          clearInterval(timer);
        }
      }, 300);
    } else {
      setVisibleCount(0);
    }
    return () => clearInterval(timer);
  }, [showTooltip, message]);

  // Measure width of currently visible words and animate container growth
  useEffect(() => {
    if (!showTooltip) {
      setVisibleWidth(0);
      return;
    }
    if (measureRef.current) {
      setVisibleWidth(measureRef.current.offsetWidth);
    }
  }, [showTooltip, visibleCount, message]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className={`relative ${className}`}
    >
      {children}

      {showTooltip && (
        <div
          className="fixed pointer-events-none z-50 transition-all ease-out"
          style={{
            left: mousePos.x + 10,
            top: mousePos.y - 25,
            transform: isAnimatingOut ? 'translateY(20px)' : 'translateY(0)',
            opacity: isAnimatingOut ? 0 : 1,
          }}
        >
          <div className="bg-primary-tints-90 rounded-tl-4xl rounded-bl-xs rounded-r-lg py-2 px-4 flex items-center gap-2 shadow-lg">
            <Image
              className="h-4 w-4 shrink-0"
              src="/tuum/tuum-logo.svg"
              alt="tuum logo"
              width={16}
              height={16}
            />

            {/* Text container auto-sizes to content */}
            <div
              ref={textRef}
              className="flex gap-1 whitespace-nowrap overflow-hidden transition-all duration-500 ease-out"
              style={visibleWidth ? { width: visibleWidth + 10 } : undefined}
            >
              {words.map((word, idx) => (
                <span
                  key={idx}
                  className={`inline-block transition-all duration-500 ease-out bg-gradient-to-r from-[#F78B5D] to-[#CE6312] bg-clip-text text-transparent label-small ${
                    idx < visibleCount
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }`}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  {word}
                </span>
              ))}
            </div>
            {/* Hidden measurer for currently visible text width */}
            <div
              ref={measureRef}
              className="absolute -z-10 opacity-0 pointer-events-none whitespace-nowrap label-small"
            >
              {words.slice(0, Math.max(visibleCount, 0)).join(" ")}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
