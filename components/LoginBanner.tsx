"use client";

import { useEffect, useState } from "react";

// components
import Searchbox from "./Searchbox";
import CourseSlider from "./CourseSlider";

function LoginBanner() {
  const [, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`mt-[8rem] md:mt-[11rem] space-y-6 md:space-y-12`}>
      {/* searchbox */}
      <div className="w-full flex items-center justify-center">
        <div className="md:w-3xl">
          <Searchbox />
        </div>
      </div>

      {/* banner */}
      <div className="">
        <CourseSlider type="Programs" />
      </div>
    </section>
  );
}

export default LoginBanner;
