"use client";

import { useEffect, useState } from "react";

const Typewriter = ({ text, sx }: { text: string; sx: string }) => {
  const words = text.split(' ');
  const [visibleCount, setVisibleCount] = useState(0);
  const iSpeed = 300; // word reveal speed (ms)

  useEffect(() => {
    if (visibleCount < words.length) {
      const timeout = setTimeout(() => {
        setVisibleCount(prev => prev + 1);
      }, iSpeed);

      return () => clearTimeout(timeout);
    }
  }, [visibleCount, words.length]);

  return (
    <div className={sx}>
      <div className="flex items-center justify-center flex-wrap gap-1 overflow-hidden transition-all duration-500 ease-out">
        {words.map((word, idx) => (
          <span
            key={idx}
            className={`transition-all duration-500 ease-out ${
              idx < visibleCount
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
            style={{ transitionDelay: `${idx * 10}ms` }}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Typewriter;
