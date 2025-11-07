"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

// components
import Button from "./Button";

// utils
import { clearCookie } from "@/utilities/cookie";

// data
import { navs } from "@/constants/data";

function ProfileNavs() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeNav, setActiveNav] = useState(
    navs.find((nav) => pathname.includes(nav.path))?.id
  );

  useEffect(() => {
    setActiveNav(navs.find((nav) => pathname.includes(nav.path))?.id);
  }, [pathname]);

  return (
    <div>
      <ul>
        {navs.map((nav) => (
          <Link href={nav.path} key={nav.id}>
            <li
              className={`relative cursor-pointer transition-all ease-in-out duration-300 flex items-center gap-3 p-4 ${
                activeNav === nav.id ? "bg-primary-tints-90" : null
              } rounded-sm`}
              onClick={() => setActiveNav(nav.id)}
            >
              {activeNav === nav.id ? nav.icon.active : nav.icon.inactive}

              <span
                className={`body-large transition-all ease-in-out duration-300 ${
                  activeNav === nav.id
                    ? "text-background-primary-light"
                    : "text-txt-on-surface-secondary-light"
                }`}
              >
                {nav.val}
              </span>

              {activeNav === nav.id && (
                <div className="absolute top-3.5 left-0 w-1.5 h-8 bg-background-primary-light rounded-r-xs" />
              )}
            </li>
          </Link>
        ))}
      </ul>

      <div className="flex items-center justify-center py-16">
        <Button
          props={{
            value: "Logout",
            leftIcon: "login-red",
            rightIcon: "",
            type: "text",
            disabled: false,
            color: "red",
            width: 24,
            height: 24,
            size: "body-large",
            padding: "px-4 py-2 gap-2",
            clickHandler: () => {
              clearCookie();
              router.replace("/");
              router.refresh();
            },
          }}
        />
      </div>
    </div>
  );
}

export default ProfileNavs;
