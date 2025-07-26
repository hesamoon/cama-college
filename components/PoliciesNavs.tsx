"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// data
import { policiesMenu } from "@/constants/data";

function PoliciesNavs() {
  const pathname = usePathname();
  const [activeNav, setActiveNav] = useState(
    policiesMenu.find((nav) => nav.path === pathname)?.id
  );

  useEffect(() => {
    setActiveNav(policiesMenu.find((nav) => nav.path === pathname)?.id);
  }, [pathname]);

  return (
    <ul className="md:sticky md:top-[6rem]">
      {policiesMenu.map((nav) => (
        <Link href={nav.path} key={nav.id}>
          <li
            className={`relative cursor-pointer transition-all ease-in-out duration-300 flex items-center gap-3 p-4 ${
              activeNav === nav.id
                ? "bg-primary-tints-90 rounded-sm"
                : "border-b border-outline-level0"
            }`}
            onClick={() => setActiveNav(nav.id)}
          >
            <span
              className={`title-medium transition-all ease-in-out duration-300 ${
                activeNav === nav.id
                  ? "text-background-primary-light"
                  : "text-txt-on-surface-secondary-light"
              }`}
            >
              {nav.title}
            </span>

            {activeNav === nav.id && (
              <div className="absolute top-3.5 left-0 w-1.5 h-8 bg-background-primary-light rounded-r-xs" />
            )}
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default PoliciesNavs;
