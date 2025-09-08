// components/PriceRangeSlider.tsx
"use client";

import React, { useCallback, useMemo, useState } from "react";

type Props = {
  min?: number;
  max?: number;
  step?: number;
  gap?: number;
  initialMin?: number;
  initialMax?: number;
  onChange?: (minValue: number, maxValue: number) => void;
  className?: string;
};

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));

export default function PriceRangeSlider({
  min = 0,
  max = 10000,
  step = 1,
  gap = 500,
  initialMin = 2500,
  initialMax = 8500,
  onChange,
  className = "",
}: Props) {
  // local state — keep values always valid relative to gap/min/max
  const [minValue, setMinValue] = useState<number>(() =>
    clamp(initialMin, min, max)
  );
  const [maxValue, setMaxValue] = useState<number>(() =>
    clamp(initialMax, min, max)
  );
  const [isMin, setIsMin] = useState(false);

  // Ensure initial values respect gap
  if (maxValue - minValue < gap) {
    // adjust max if possible, otherwise adjust min
    const adjustedMax = clamp(minValue + gap, min, max);
    if (adjustedMax !== maxValue) setMaxValue(adjustedMax);
    else setMinValue(clamp(maxValue - gap, min, max));
  }

  // percentages for active bar
  const { leftPct, rightPct } = useMemo(() => {
    const left = ((minValue - min) / (max - min)) * 100;
    const right = 100 - ((maxValue - min) / (max - min)) * 100;
    return { leftPct: left, rightPct: right };
  }, [minValue, maxValue, min, max]);

  // notify parent only when values actually change
  const emitChange = useCallback(
    (a: number, b: number) => {
      if (onChange) onChange(a, b);
    },
    [onChange]
  );

  // Handlers: enforce gap and clamp
  const handleMinInput = useCallback(
    (next: number) => {
      let v = clamp(next, min, max);
      if (maxValue - v < gap) v = Math.max(min, maxValue - gap);
      if (v === minValue) return;
      setMinValue(v);
      emitChange(v, maxValue);
    },
    [gap, max, maxValue, min, minValue, emitChange]
  );

  const handleMaxInput = useCallback(
    (next: number) => {
      let v = clamp(next, min, max);
      if (v - minValue < gap) v = Math.min(max, minValue + gap);
      if (v === maxValue) return;
      setMaxValue(v);
      emitChange(minValue, v);
    },
    [gap, max, min, minValue, maxValue, emitChange]
  );

  // range handlers (native range inputs)
  const onMinRange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      handleMinInput(Number(e.target.value)),
    [handleMinInput]
  );
  const onMaxRange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      handleMaxInput(Number(e.target.value)),
    [handleMaxInput]
  );

  // number input handlers
  const onMinNumber = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      handleMinInput(Number(e.target.value ?? 0)),
    [handleMinInput]
  );
  const onMaxNumber = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      handleMaxInput(Number(e.target.value ?? 0)),
    [handleMaxInput]
  );

  return (
    <div className={`${className}`}>
      <div className="space-y-8">
        {/* Track + active bar */}
        <div className="">
          <div className="relative h-1 bg-outline-level0 rounded overflow-hidden">
            <div
              aria-hidden
              className="absolute h-full bg-background-primary-light rounded"
              style={{ left: `${leftPct}%`, right: `${rightPct}%` }}
            />
          </div>

          {/* overlapping native ranges (keep native keyboard & accessibility) */}
          <div className="relative">
            <input
              aria-hidden
              className="absolute w-full appearance-none pointer-events-auto"
              type="range"
              min={min}
              max={max}
              step={step}
              value={!isMin ? minValue : maxValue}
              onChange={!isMin ? onMinRange : onMaxRange}
            />
            <input
              aria-hidden
              className="absolute w-full appearance-none pointer-events-auto"
              type="range"
              min={min}
              max={max}
              step={step}
              value={isMin ? minValue : maxValue}
              onChange={isMin ? onMinRange : onMaxRange}
            />
          </div>
        </div>

        {/* Inputs */}
        <div className="flex items-center justify-between gap-4">
          <label className="flex flex-col items-center gap-2">
            <span
              className="body-medium text-on-surface-secondary cursor-pointer"
              onClick={() => setIsMin(true)}
            >
              Minimum
            </span>
            <div className="py-2.5 pl-3 pr-5 rounded-md border border-outline1 body-large text-on_surface-light">
              <span>$</span>
              <input
                aria-label="Minimum"
                type="number"
                inputMode="numeric"
                className="text-center outline-none"
                value={minValue}
                onChange={onMinNumber}
                min={min}
                max={max}
                step={step}
              />
            </div>
          </label>

          <label className="flex flex-col items-center gap-2">
            <span
              className="body-medium text-on-surface-secondary cursor-pointer"
              onClick={() => setIsMin(false)}
            >
              Maximum
            </span>
            <div className="py-2.5 pl-3 pr-5 rounded-md border border-outline1 body-large text-on_surface-light">
              <span>$</span>
              <input
                aria-label="Maximum"
                type="number"
                inputMode="numeric"
                className="text-center outline-none"
                value={maxValue}
                onChange={onMaxNumber}
                min={min}
                max={max}
                step={step}
              />
            </div>
          </label>
        </div>
      </div>

      {/* scoped CSS for range thumbs & removing number spinner */}
      <style jsx>{`
        /* hide number input spinners */
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        /* range base */
        input[type="range"] {
          height: 10px;
          background: transparent;
          margin-top: -7px;
        }

        /* webkit thumb */
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          height: 16px;
          width: 16px;
          border: solid 2px #fff;
          border-radius: 999px;
          background: #a91418;
          box-shadow: 0 0 2px rgba(0, 0, 0, 0.35);
          cursor: pointer;
          //   margin-top: -20px; /* centers thumb on track */
        }

        /* firefox thumb */
        input[type="range"]::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border: none;
          border-radius: 999px;
          background: #555;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
