"use client";

import { useEffect, useState } from "react";

const Typewriter = ({ text, sx }: { text: string; sx: string }) => {
  // 👇 text array (each string is a line)
  const aText = [text];

  const iSpeed = 75; // typing speed (ms)
  const [displayedText, setDisplayedText] = useState<string[]>([""]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= aText.length) return; // all lines finished

    if (charIndex < aText[lineIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => {
          const copy = [...prev];
          copy[lineIndex] = aText[lineIndex].substring(0, charIndex + 1);
          return copy;
        });
        setCharIndex((prev) => prev + 1);
      }, iSpeed);

      return () => clearTimeout(timeout);
    } else {
      // line finished → move to next line
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => [...prev, ""]);
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex]);

  return (
    <div className={sx}>
      {displayedText.map((line, i) => (
        <div key={i}>{line}</div>
      ))}
    </div>
  );
};

export default Typewriter;
