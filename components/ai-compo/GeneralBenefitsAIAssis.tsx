"use client";

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
          </div>
        ))}
      </div>

      <div className="col-span-1 flex items-center justify-end">
        <svg
          width="354"
          height="321"
          viewBox="0 0 354 321"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1803_53130)">
            <path
              d="M0.525122 31.4556C0.235105 29.2656 1.77536 27.2551 3.96538 26.9651L197.278 1.36539C199.468 1.07537 201.478 2.61563 201.768 4.80565L236.032 263.547C236.322 265.737 234.782 267.747 232.592 268.037L39.2799 293.637C37.0899 293.927 35.0794 292.387 34.7894 290.197L0.525122 31.4556Z"
              fill="#F3F3F3"
            />
            <line
              x1="16.441"
              y1="40.278"
              x2="187.45"
              y2="17.4105"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="17.441"
              y1="47.278"
              x2="188.45"
              y2="24.4105"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="18.441"
              y1="54.278"
              x2="189.45"
              y2="31.4105"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="19.441"
              y1="61.278"
              x2="190.45"
              y2="38.4105"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="20.441"
              y1="68.278"
              x2="191.45"
              y2="45.4105"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="21.441"
              y1="75.278"
              x2="192.45"
              y2="52.4105"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="22.441"
              y1="82.278"
              x2="193.45"
              y2="59.4105"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="23.441"
              y1="89.278"
              x2="194.45"
              y2="66.4105"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="24.441"
              y1="96.278"
              x2="195.45"
              y2="73.4105"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="25.441"
              y1="103.278"
              x2="196.45"
              y2="80.4105"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="26.441"
              y1="110.278"
              x2="197.45"
              y2="87.4105"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="27.441"
              y1="117.278"
              x2="198.45"
              y2="94.4105"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="28.441"
              y1="124.278"
              x2="199.45"
              y2="101.411"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="29.441"
              y1="131.278"
              x2="200.45"
              y2="108.411"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="30.441"
              y1="138.278"
              x2="201.45"
              y2="115.411"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="31.441"
              y1="145.278"
              x2="202.45"
              y2="122.411"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="32.441"
              y1="152.278"
              x2="203.45"
              y2="129.411"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="33.441"
              y1="159.278"
              x2="204.45"
              y2="136.411"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="34.441"
              y1="166.278"
              x2="205.45"
              y2="143.411"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="35.441"
              y1="173.278"
              x2="206.45"
              y2="150.411"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="36.441"
              y1="180.278"
              x2="207.45"
              y2="157.411"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="37.441"
              y1="187.278"
              x2="208.45"
              y2="164.411"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="38.441"
              y1="194.278"
              x2="209.45"
              y2="171.411"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="39.441"
              y1="201.278"
              x2="210.45"
              y2="178.411"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="40.441"
              y1="208.278"
              x2="211.45"
              y2="185.411"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="41.441"
              y1="215.278"
              x2="212.45"
              y2="192.411"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="42.441"
              y1="222.278"
              x2="213.45"
              y2="199.411"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="43.441"
              y1="229.278"
              x2="214.45"
              y2="206.411"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="44.441"
              y1="236.278"
              x2="215.45"
              y2="213.411"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="45.441"
              y1="243.278"
              x2="216.45"
              y2="220.411"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="46.441"
              y1="250.278"
              x2="217.45"
              y2="227.411"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="47.441"
              y1="257.278"
              x2="218.45"
              y2="234.411"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="48.441"
              y1="264.278"
              x2="219.45"
              y2="241.411"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="49.441"
              y1="271.278"
              x2="220.45"
              y2="248.411"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="50.441"
              y1="278.278"
              x2="221.45"
              y2="255.411"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
          </g>
          <g filter="url(#filter0_d_1803_53130)">
            <path
              d="M127 169.84C127 167.631 128.791 165.84 131 165.84H326C328.209 165.84 330 167.631 330 169.84V288.84C330 291.049 328.209 292.84 326 292.84H131C128.791 292.84 127 291.049 127 288.84V169.84Z"
              fill="#F3F3F3"
            />
            <line
              x1="141.499"
              y1="179.56"
              x2="314.03"
              y2="179.341"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="141.499"
              y1="179.56"
              x2="314.03"
              y2="179.341"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="141.57"
              y1="186.63"
              x2="314.101"
              y2="186.411"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="141.644"
              y1="193.701"
              x2="314.175"
              y2="193.481"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="141.714"
              y1="200.773"
              x2="314.245"
              y2="200.553"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="141.788"
              y1="207.843"
              x2="314.319"
              y2="207.624"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="141.859"
              y1="214.913"
              x2="314.39"
              y2="214.694"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="141.933"
              y1="221.984"
              x2="314.464"
              y2="221.764"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="142.007"
              y1="229.054"
              x2="314.538"
              y2="228.835"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="142.077"
              y1="236.126"
              x2="314.608"
              y2="235.907"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="142.152"
              y1="243.197"
              x2="314.683"
              y2="242.977"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="142.222"
              y1="250.267"
              x2="314.753"
              y2="250.048"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="142.296"
              y1="257.337"
              x2="314.827"
              y2="257.118"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="142.367"
              y1="264.408"
              x2="314.897"
              y2="264.188"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="142.441"
              y1="271.48"
              x2="314.972"
              y2="271.26"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
            <line
              x1="142.511"
              y1="278.55"
              x2="315.042"
              y2="278.331"
              stroke="#D7D5D6"
              stroke-linecap="round"
            />
          </g>
          <path
            d="M185.552 106.618C185.495 106.736 185.488 106.873 185.531 106.997C185.574 107.122 185.663 107.224 185.781 107.282C185.898 107.341 186.034 107.35 186.159 107.309C186.284 107.267 186.388 107.179 186.448 107.062C187.907 104.275 189.558 101.403 191.226 98.6355C204.418 78.2634 221.688 51.4101 247.202 53.9254C263.012 57.499 266.928 77.0244 268.712 92.2706C270.339 108.367 269.556 124.706 267.785 140.91C267.42 144.121 267.016 147.308 266.533 150.396C266.405 151.182 266.596 151.982 267.069 152.621C267.543 153.261 268.259 153.688 269.057 153.807C269.854 153.926 270.664 153.728 271.303 153.254C271.943 152.781 272.36 152.072 272.467 151.283C272.898 147.97 273.216 144.781 273.506 141.481C274.886 124.924 275.269 108.318 273.168 91.7415C270.802 76.2543 266.836 54.9505 247.798 50.755C218.532 49.188 203.192 77.3093 190.147 98.0034C188.539 100.834 186.959 103.749 185.552 106.618Z"
            fill="#A91418"
          />
          <path
            d="M268.558 164.868C268.101 165.553 267.058 165.423 266.783 164.646L263.8 156.195C263.552 155.493 264.129 154.777 264.867 154.869L272.826 155.866C273.564 155.958 273.946 156.795 273.533 157.413L268.558 164.868Z"
            fill="#A91418"
          />
          <defs>
            <filter
              id="filter0_d_1803_53130"
              x="103"
              y="145.84"
              width="251"
              height="175"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="12" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1803_53130"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1803_53130"
                result="shape"
              />
            </filter>
            <clipPath id="clip0_1803_53130">
              <path
                d="M0.525122 31.4556C0.235105 29.2656 1.77536 27.2551 3.96538 26.9651L197.278 1.36539C199.468 1.07537 201.478 2.61563 201.768 4.80565L236.032 263.547C236.322 265.737 234.782 267.747 232.592 268.037L39.2799 293.637C37.0899 293.927 35.0794 292.387 34.7894 290.197L0.525122 31.4556Z"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default GeneralBenefitsAIAssis;
