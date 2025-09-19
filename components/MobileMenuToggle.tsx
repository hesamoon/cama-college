"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

// components
import Navbar from "./Navbar";
import LoginButtons from "./LoginButtons";

function MobileMenuToggle({
  role,
  landingNavbar = false,
}: {
  role: string;
  landingNavbar: boolean;
}) {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // ✅ Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // ✅ Close sidebar on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // ✅ Lock scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(true)}
        className="p-2"
        aria-label="Toggle mobile menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/30 transition-opacity" />
      )}

      {/* Sidebar Drawer */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-50 h-full w-[80%] bg-white border-r border-outline-level0 shadow-md transform transition-transform duration-300 overflow-auto no-scrollbar ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button on the LEFT */}
        <div className="flex justify-start p-4">
          <button
            onClick={() => setOpen(false)}
            aria-label="Close sidebar"
            className="pb-2"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Nav Content */}
        <div className="px-4 space-y-10">
          <Navbar landingNavbar={landingNavbar} />

          {role !== "UNSIGNED" ? (
            <Link
              href="/profile"
              className="rounded-full flex items-center gap-2 p-1 pr-2 cursor-pointer border border-outline1 w-fit"
            >
              <Image
                className="rounded-full"
                src="/profile.jpg"
                alt="profile"
                width={40}
                height={40}
              />
              <Image
                className="rounded-full"
                src="/arrow-down.svg"
                alt="arrow-down"
                width={20}
                height={20}
              />
            </Link>
          ) : (
            <LoginButtons />
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileMenuToggle;
