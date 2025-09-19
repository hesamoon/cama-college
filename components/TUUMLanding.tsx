"use client";

import { useEffect, useRef, useState } from "react";

// components
import Header from "./Header";
import Typewriter from "./Typewriter";
import AISearchBox from "./AISearchBox";
import MouseTooltipWrapper from "./MouseTooltipWrapper";
import TUUMLanguageDetecter from "./modal/TUUMLanguageDetecter";

function TUUMLanding() {
  const [open, setOpen] = useState(true);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const landingHeight = useRef(0);

  const landingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (landingRef.current) {
      landingHeight.current = landingRef.current.offsetHeight;
    }

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollThreshold = 50; // Add threshold to prevent flickering

      // Scroll down from top → hide immediately
      if (
        currentScroll > lastScrollY.current &&
        currentScroll > scrollThreshold
      ) {
        setHidden(true);
      }
      // Only show when scrolling back to the very top (landing area)
      else if (currentScroll <= scrollThreshold) {
        setHidden(false);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={landingRef}
      className={`fixed top-0 left-0 w-full tuum-landing transition-all duration-400 ease-in-out ${
        hidden ? "-translate-y-full z-0" : "translate-y-0 z-70"
      }`}
    >
      <Header landingHeader={true} />

      <MouseTooltipWrapper message="Hello, Im CAMA College AI assistant">
        <div className="h-screen flex flex-col items-center justify-center mobile-grid-system-level0 md:grid-system-level0">
          <div className="space-y-16 flex flex-col items-center justify-center">
            <div className="space-y-8">
              {/* TUUM Professor AI */}
              <div className="flex flex-col items-center justify-center gap-12">
                <div className="relative rounded-full shadow-[0px_0px_100px_rgba(183,105,41,1)]">
                  {/* glow effect */}
                  <>
                    <div className="absolute -top-[2px] -left-[2px] w-[115.1px] h-[115.1px] rounded-full bg-[#B76929] opacity-16 -z-5" />
                    <div className="absolute -top-[2px] -right-[2px] w-[115.1px] h-[115.1px] rounded-full bg-[#B76929] opacity-16 -z-5" />
                    <div className="absolute -bottom-[2px] -left-[2px] w-[115.1px] h-[115.1px] rounded-full bg-[#B76929] opacity-16 -z-5" />
                    <div className="absolute -bottom-[2px] -right-[2px] w-[115.1px] h-[115.1px] rounded-full bg-[#B76929] opacity-16 -z-5" />
                  </>

                  <div className="bg-[#320E0B] rounded-full flex items-center justify-center w-[95.26px] h-[95.26px]">
                    <video
                      autoPlay
                      loop={true} // set true if you want looping
                      muted
                      playsInline
                      className="rounded-full"
                    >
                      <source
                        src="/tuum/tuum-animation3.webm"
                        type="video/webm"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  <div className="absolute -top-65 -left-50 w-[500px] h-[500px] rounded-full bg-[#B76929] blur-3xl opacity-20 " />
                </div>

                <h5 className="label-large-db bg-gradient-to-r from-[#F78B5D] to-[#CE6312] bg-clip-text text-transparent">
                  TUUM Professor
                </h5>

                {/* <div className="space-y-0.5">
                <h5 className="label-medium-db bg-gradient-to-r from-[#F78B5D] to-[#CE6312] bg-clip-text text-transparent">
                  TUUM Professor
                </h5>
                <h3 className="body-large text-on_surface-light">
                  Hello, Im CAMA College AI assistant
                </h3>
              </div> */}
              </div>

              <div className="space-y-4 flex flex-col items-center justify-center">
                <Typewriter
                  text="With CAMA college, shape your future!"
                  sx="mobile-display-large md:header-small max-w-96 md:max-w-xl text-txt-on-primary-dark"
                />

                <Typewriter
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas"
                  sx="body-large text-txt-on-surface-terriary-light max-w-140"
                />
              </div>
            </div>

            {/* searchbox */}
            <AISearchBox />
          </div>
        </div>
      </MouseTooltipWrapper>

      <TUUMLanguageDetecter open={open} onClose={() => setOpen(false)} />

      <div className="absolute left-0 top-0">
        <svg
          width="100"
          height="768"
          viewBox="0 0 100 768"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.04"
            d="M0 768V0C0 0 98.2203 211.637 99.9769 357.748C101.112 452.157 60.0917 501.708 62.8962 596.075C64.9225 664.254 91.0587 768 91.0587 768H0Z"
            fill="url(#paint0_linear_2339_84511)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2339_84511"
              x1="0"
              y1="384"
              x2="100"
              y2="384"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F78B5D" />
              <stop offset="1" stop-color="#CE6312" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute right-0 top-0">
        <svg
          width="100"
          height="768"
          viewBox="0 0 100 768"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.04"
            d="M100 768V0C100 0 1.77966 211.637 0.0231323 357.748C-1.11184 452.157 39.9083 501.708 37.1038 596.075C35.0775 664.254 8.94126 768 8.94126 768H100Z"
            fill="url(#paint0_linear_2339_84512)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2339_84512"
              x1="100"
              y1="384"
              x2="0"
              y2="384"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F78B5D" />
              <stop offset="1" stop-color="#CE6312" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}

export default TUUMLanding;
