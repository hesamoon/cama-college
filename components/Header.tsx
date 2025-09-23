"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useRef, useState } from "react";

// components
import Navbar from "./Navbar";
import Button from "./Button";
import RoleBaseView from "./RoleBaseView";
import MobileMenuToggle from "./MobileMenuToggle";
import SearchBoxContainer from "./SearchBoxContainer";
import LanguagesListModal from "./modal/LanguagesListModal";

// utils
import { userAttr } from "@/utilities/userAttr";
import { usePathname } from "next/navigation";

function Header() {
  const user = userAttr();
  const pathname = usePathname();

  const [show] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);
  const [open, setOpen] = useState(false);
  const [landingHeader, setLandingHeader] = useState(true);

  const modalRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const header = document.getElementById("site-header");
  //   if (header) {
  //     document.documentElement.style.setProperty(
  //       "--header-height",
  //       `${show ? header.offsetHeight : 0}px`
  //     );
  //   }

  //   const handleScroll = () => {
  //     if (window.scrollY > lastScrollY) {
  //       setShow(false);
  //       setOpen(false);
  //     } else {
  //       setShow(true);
  //     }
  //     setLastScrollY(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [lastScrollY]);

  // useEffect(() => {
  //   function handleClickOutside(event: MouseEvent) {
  //     if (
  //       modalRef.current &&
  //       !modalRef.current.contains(event.target as Node)
  //     ) {
  //       setOpen(false);
  //     }
  //   }

  //   if (open) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === "/") setLandingHeader(window.scrollY < 50);
      else setLandingHeader(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header
      id="site-header"
      className={`${pathname === "/" ? "fixed" : "sticky"} top-0 w-full z-40 ${
        landingHeader
          ? "bg-transparent"
          : "bg-white border-b border-outline-level0"
      } transition-all duration-300 ${show ? "" : "-translate-y-full"}`}
    >
      <div className="relative mobile-grid-system-level0 md:grid-system-level0 flex items-center justify-between py-3 h-[3.75rem] gap-4">
        {/* Left: Logo + Hamburger */}
        <div className="flex items-center gap-2 md:gap-10 flex-shrink-0">
          <Link href="/" className="shrink-0">
            <Image
              src="/cama-college-logo.png"
              alt="logo"
              width={43}
              height={48}
              className="w-[43px] h-[48px]"
            />
          </Link>

          {/* Hamburger menu (mobile only) */}
          <div className="flex md:hidden">
            <MobileMenuToggle role={user.role} landingNavbar={landingHeader} />
          </div>

          {/* Desktop Navbar */}
          <div className="hidden md:block">
            <Navbar landingNavbar={landingHeader} />
          </div>
        </div>

        {/* Center: Search box */}
        <div className="w-full md:flex-1 md:mx-6">
          <Suspense fallback={<p>Loading search info...</p>}>
            <SearchBoxContainer />
          </Suspense>
        </div>

        {/* Right: Auth/Profile buttons */}
        <div className="hidden md:flex items-center flex-shrink-0 gap-2">
          {/* language button */}
          <div ref={modalRef}>
            <Button
              props={{
                value: "",
                leftIcon: open
                  ? landingHeader
                    ? "close-circle-white"
                    : "close-circle"
                  : landingHeader
                  ? "language-circle-white"
                  : "language-circle",
                rightIcon: "",
                type: "outlined",
                disabled: false,
                color: "red",
                width: 24,
                height: 24,
                size: "mobile-body-large md:body-large",
                clickHandler: () => setOpen((prev) => !prev),
              }}
            />

            <LanguagesListModal open={open} onClose={() => setOpen(false)} />
          </div>

          <RoleBaseView role={user.role} landingHeader={landingHeader} />
        </div>
      </div>
    </header>
  );
}

export default Header;
