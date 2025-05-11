"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

// components
import Button from "./Button";
import { clearCookie } from "@/utilities/cookie";

const navs = [
  { id: 0, val: "Dashboard" },
  { id: 1, val: "Programs" },
  { id: 2, val: "Events" },
  { id: 3, val: "Personal Info" },
  { id: 4, val: "Transactions" },
];

function ProfileNavs() {
  const router = useRouter();
  const [activeNav, setActiveNav] = useState(3);

  return (
    <div>
      <ul>
        {navs.map((nav) => (
          <li
            key={nav.id}
            className={`relative cursor-pointer transition-all ease-in-out duration-300 flex items-center gap-3 p-4 ${
              activeNav === nav.id ? "bg-primary-tints-90" : null
            } rounded-sm`}
            onClick={() => setActiveNav(nav.id)}
          >
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.2913 11.5417C17.2913 15.5667 14.0247 18.8333 9.99967 18.8333C5.97467 18.8333 2.70801 15.5667 2.70801 11.5417C2.70801 7.51667 5.97467 4.25 9.99967 4.25C14.0247 4.25 17.2913 7.51667 17.2913 11.5417Z"
                stroke={activeNav === nav.id ? "#A91418" : "#484647"}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 7.16666V11.3333"
                stroke={activeNav === nav.id ? "#A91418" : "#484647"}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.5 2.16666H12.5"
                stroke={activeNav === nav.id ? "#A91418" : "#484647"}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

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
        ))}
      </ul>

      <div className="flex items-center justify-center py-32">
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
