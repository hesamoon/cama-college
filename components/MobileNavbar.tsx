"use client";

import React, { useEffect, useRef, useState } from "react";
import { useQueryState } from "nuqs";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

// components
import UserProfile from "./UserProfile";
import ProfileNavs from "./ProfileNavs";
import PoliciesNavs from "./PoliciesNavs";
import LessonesNavs from "./LessonesNavs";

function MobileNavbar() {
  const pathname = usePathname();
  const [queryLesson] = useQueryState("lesson", { defaultValue: "" });

  const [menuName, setMenuName] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsSidebarOpen(false);
    if (pathname.split("/").length >= 3) {
      setMenuName(
        pathname.split("/")[2][0].toUpperCase() +
          pathname.split("/")[2].slice(1)
      );
    }
  }, [pathname, queryLesson]);

  // ✅ Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  // ✅ Lock scroll when open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  if (pathname.includes("/in-progress"))
    return (
      <div className="sticky top-[3.5rem] z-[35] bg-white md:hidden flex items-center gap-2 px-0 py-4">
        <button onClick={() => setIsSidebarOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>

        <h3 className="mobile-body-large text-background-primary-light">
          {queryLesson}
        </h3>

        {/* Overlay */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-40 bg-black/30 transition-opacity" />
        )}

        <div
          ref={sidebarRef}
          className={`fixed top-[3.5rem] left-0 z-50 h-full w-[80%] bg-white border-r border-outline-level0 shadow-md transform transition-transform duration-300 overflow-y-scroll no-scrollbar pb-12 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close btn on mobile */}
          <div className="flex justify-start p-4">
            <button
              onClick={() => setIsSidebarOpen(false)}
              aria-label="Close sidebar"
              className="pb-2"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <LessonesNavs />
        </div>
      </div>
    );

  if (pathname.includes("/policies-and-regulations"))
    return (
      <div className="sticky top-[3.5rem] z-[35] bg-white md:hidden flex items-center gap-2 px-0 py-4">
        <button onClick={() => setIsSidebarOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>

        <h3 className="mobile-body-large text-background-primary-light">
          {menuName}
        </h3>

        {/* Overlay */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-40 bg-black/30 transition-opacity" />
        )}

        <div
          ref={sidebarRef}
          className={`fixed top-[3.5rem] left-0 z-50 h-full w-[80%] bg-white border-r border-outline-level0 shadow-md transform transition-transform duration-300 overflow-y-scroll no-scrollbar ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close btn on mobile */}
          <div className="flex justify-start p-4">
            <button
              onClick={() => setIsSidebarOpen(false)}
              aria-label="Close sidebar"
              className="pb-2"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <PoliciesNavs />
        </div>
      </div>
    );

  return (
    <div className="sticky top-[3.5rem] z-[35] bg-white md:hidden flex items-center gap-6 p-4">
      <button onClick={() => setIsSidebarOpen(true)}>
        <Menu className="w-6 h-6" />
      </button>

      <div className="mobile-body-large text-background-primary-light flex items-center gap-2">
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.2913 11.5417C17.2913 15.5667 14.0247 18.8333 9.99967 18.8333C5.97467 18.8333 2.70801 15.5667 2.70801 11.5417C2.70801 7.51667 5.97467 4.25 9.99967 4.25C14.0247 4.25 17.2913 7.51667 17.2913 11.5417Z"
            stroke="#A91418"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 7.16666V11.3333"
            stroke="#A91418"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 2.16666H12.5"
            stroke="#A91418"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {menuName}
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/30 transition-opacity" />
      )}

      <div
        ref={sidebarRef}
        className={`fixed top-[3.5rem] left-0 z-50 h-full w-[80%] bg-white border-r border-outline-level0 shadow-md transform transition-transform duration-300 overflow-y-scroll no-scrollbar ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close btn on mobile */}
        <div className="flex justify-start p-4">
          <button
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close sidebar"
            className="pb-2"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <UserProfile />

        <div className="border border-outline-level0" />

        <ProfileNavs />
      </div>
    </div>
  );
}

export default MobileNavbar;
