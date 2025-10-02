"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

// components
import Button from "./Button";
import Navbar from "./Navbar";
import BluredImage from "./BluredImage";
import AuthenticationModal from "./modal/AuthenticationModal";

// api
import { getCarts } from "@/lib/api/cart";

function MobileMenuToggle({
  role,
  landingNavbar = false,
}: {
  role: string;
  landingNavbar: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  //GET
  const { data: cartsData, isLoading: isLoadingCarts } = useQuery({
    queryKey: ["carts"],
    queryFn: getCarts,
  });

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
    <>
      <div className="relative">
        {/* Toggle Button */}
        <button
          onClick={() => setOpen(true)}
          className="p-2"
          aria-label="Toggle mobile menu"
        >
          <Menu className="w-6 h-6" color={landingNavbar ? "white" : "black"} />
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
              <div className="flex items-center gap-2">
                <Link href="/checkout" className="relative">
                  <Button
                    props={{
                      value: "",
                      leftIcon: "shopping-cart-black",
                      rightIcon: "",
                      type: "outlined",
                      disabled: false,
                      color: "red",
                      width: 24,
                      height: 24,
                      size: "mobile-body-large md:body-large",
                    }}
                  />

                  {cartsData?.data.data.length > 0 && (
                    <div
                      className={`absolute -top-1 -right-1 p-1 flex items-center justify-center rounded-full bg-orange-400 w-5 h-5 ${
                        isLoadingCarts ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      <span className="text-white text-xs">
                        {cartsData?.data.data.length}
                      </span>
                    </div>
                  )}
                </Link>

                <Link
                  href="/profile"
                  className="rounded-full flex items-center gap-2 p-1 pr-2 cursor-pointer border border-outline1"
                >
                  <BluredImage
                    url="/profile.jpg"
                    name="profile"
                    imgStyle="!rounded-full w-10 h-10"
                    blurhashStyle="!rounded-full w-10 h-10"
                    cWidth={40}
                    cHeight={40}
                  />

                  <Image
                    className="rounded-full"
                    src="/arrow-down.svg"
                    alt="arrow-down"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            ) : (
              <Button
                props={{
                  value: "Login | Signup",
                  leftIcon: "login",
                  rightIcon: "",
                  type: "outlined",
                  disabled: false,
                  color: "black",
                  width: 24,
                  height: 24,
                  size: "mobile-body-large md:body-large",
                  padding: "px-4 py-2",
                  clickHandler: () => setOpenModal(true),
                }}
              />
            )}
          </div>
        </div>
      </div>

      <AuthenticationModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}

export default MobileMenuToggle;
