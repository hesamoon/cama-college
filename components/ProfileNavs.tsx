"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

// components
import Button from "./Button";

// utils
import { clearCookie } from "@/utilities/cookie";

const navs = [
  {
    id: 0,
    path: "/profile/dashboard",
    val: "Dashboard",
    icon: {
      active: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M7.63232 3.32617C8.71756 2.48638 10.4854 2.44379 11.6138 3.23438L16.4136 6.59277C16.791 6.85702 17.1532 7.29395 17.4214 7.80762C17.6897 8.3215 17.8423 8.86977 17.8423 9.33301V14.9824C17.8423 16.8313 16.3406 18.333 14.4917 18.333H5.5083C3.66109 18.3328 2.15879 16.8247 2.15869 14.9746V9.22461C2.15869 8.79517 2.29609 8.27478 2.54053 7.77832C2.78481 7.28225 3.11447 6.85255 3.45752 6.58496L7.63232 3.32617Z"
            fill="#A91418"
            stroke="#A91418"
          />
          <path
            d="M10 12.875C10.0301 12.875 10.0613 12.8874 10.0869 12.9131C10.1126 12.9387 10.125 12.9699 10.125 13V15.5C10.125 15.5301 10.1126 15.5613 10.0869 15.5869C10.0613 15.6126 10.0301 15.625 10 15.625C9.96985 15.625 9.93873 15.6126 9.91309 15.5869C9.88744 15.5613 9.875 15.5301 9.875 15.5V13C9.875 12.9699 9.88744 12.9387 9.91309 12.9131C9.93873 12.8874 9.96985 12.875 10 12.875Z"
            fill="#A91418"
            stroke="#A91418"
          />
        </svg>
      ),
      inactive: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M7.63232 3.32617C8.71756 2.48638 10.4854 2.44379 11.6138 3.23438L16.4136 6.59277C16.791 6.85702 17.1532 7.29395 17.4214 7.80762C17.6897 8.3215 17.8423 8.86977 17.8423 9.33301V14.9824C17.8423 16.8313 16.3406 18.333 14.4917 18.333H5.5083C3.66109 18.3328 2.15879 16.8247 2.15869 14.9746V9.22461C2.15869 8.79517 2.29609 8.27478 2.54053 7.77832C2.78481 7.28225 3.11447 6.85255 3.45752 6.58496L7.63232 3.32617Z"
            fill="#484647"
            stroke="#484647"
          />
          <path
            d="M10 12.875C10.0301 12.875 10.0613 12.8874 10.0869 12.9131C10.1126 12.9387 10.125 12.9699 10.125 13V15.5C10.125 15.5301 10.1126 15.5613 10.0869 15.5869C10.0613 15.6126 10.0301 15.625 10 15.625C9.96985 15.625 9.93873 15.6126 9.91309 15.5869C9.88744 15.5613 9.875 15.5301 9.875 15.5V13C9.875 12.9699 9.88744 12.9387 9.91309 12.9131C9.93873 12.8874 9.96985 12.875 10 12.875Z"
            fill="#484647"
            stroke="#484647"
          />
        </svg>
      ),
    },
  },
  {
    id: 1,
    path: "/profile/programs",
    val: "Programs",
    icon: {
      active: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.37477 2.60873L3.35811 5.88373C1.74977 6.93373 1.74977 9.28373 3.35811 10.3337L8.37477 13.6087C9.27477 14.2004 10.7581 14.2004 11.6581 13.6087L16.6498 10.3337C18.2498 9.28373 18.2498 6.94206 16.6498 5.89206L11.6581 2.61706C10.7581 2.01706 9.27477 2.01706 8.37477 2.60873Z"
            stroke="#A91418"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.69144 11.4004L4.68311 15.3087C4.68311 16.3671 5.49977 17.5004 6.49977 17.8337L9.15811 18.7171C9.61644 18.8671 10.3748 18.8671 10.8414 18.7171L13.4998 17.8337C14.4998 17.5004 15.3164 16.3671 15.3164 15.3087V11.4421"
            stroke="#A91418"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.8335 13V8"
            stroke="#A91418"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      inactive: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.37477 2.60873L3.35811 5.88373C1.74977 6.93373 1.74977 9.28373 3.35811 10.3337L8.37477 13.6087C9.27477 14.2004 10.7581 14.2004 11.6581 13.6087L16.6498 10.3337C18.2498 9.28373 18.2498 6.94206 16.6498 5.89206L11.6581 2.61706C10.7581 2.01706 9.27477 2.01706 8.37477 2.60873Z"
            stroke="#484647"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.69144 11.4004L4.68311 15.3087C4.68311 16.3671 5.49977 17.5004 6.49977 17.8337L9.15811 18.7171C9.61644 18.8671 10.3748 18.8671 10.8414 18.7171L13.4998 17.8337C14.4998 17.5004 15.3164 16.3671 15.3164 15.3087V11.4421"
            stroke="#484647"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.8335 13V8"
            stroke="#484647"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  },
  {
    id: 2,
    path: "/profile/events",
    val: "Events",
    icon: {
      active: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.2918 11.5417C17.2918 15.5667 14.0252 18.8333 10.0002 18.8333C5.97516 18.8333 2.7085 15.5667 2.7085 11.5417C2.7085 7.51667 5.97516 4.25 10.0002 4.25C14.0252 4.25 17.2918 7.51667 17.2918 11.5417Z"
            stroke="#A91418"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 7.16602V11.3327"
            stroke="#A91418"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.5 2.16602H12.5"
            stroke="#A91418"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      inactive: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.2918 11.5417C17.2918 15.5667 14.0252 18.8333 10.0002 18.8333C5.97516 18.8333 2.7085 15.5667 2.7085 11.5417C2.7085 7.51667 5.97516 4.25 10.0002 4.25C14.0252 4.25 17.2918 7.51667 17.2918 11.5417Z"
            stroke="#484647"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 7.16602V11.3327"
            stroke="#484647"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.5 2.16602H12.5"
            stroke="#484647"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  },
  {
    id: 3,
    path: "/profile/personal-info",
    val: "Personal Info",
    icon: {
      active: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.1331 9.55768C10.0498 9.54935 9.9498 9.54935 9.85814 9.55768C7.8748 9.49102 6.2998 7.86602 6.2998 5.86602C6.2998 3.82435 7.9498 2.16602 9.9998 2.16602C12.0415 2.16602 13.6998 3.82435 13.6998 5.86602C13.6915 7.86602 12.1165 9.49102 10.1331 9.55768Z"
            stroke="#A91418"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.9666 12.634C3.94993 13.984 3.94993 16.184 5.9666 17.5257C8.25827 19.059 12.0166 19.059 14.3083 17.5257C16.3249 16.1757 16.3249 13.9757 14.3083 12.634C12.0249 11.109 8.2666 11.109 5.9666 12.634Z"
            stroke="#A91418"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      inactive: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.1331 9.55768C10.0498 9.54935 9.9498 9.54935 9.85814 9.55768C7.8748 9.49102 6.2998 7.86602 6.2998 5.86602C6.2998 3.82435 7.9498 2.16602 9.9998 2.16602C12.0415 2.16602 13.6998 3.82435 13.6998 5.86602C13.6915 7.86602 12.1165 9.49102 10.1331 9.55768Z"
            stroke="#484647"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.9666 12.634C3.94993 13.984 3.94993 16.184 5.9666 17.5257C8.25827 19.059 12.0166 19.059 14.3083 17.5257C16.3249 16.1757 16.3249 13.9757 14.3083 12.634C12.0249 11.109 8.2666 11.109 5.9666 12.634Z"
            stroke="#484647"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  },
  {
    id: 4,
    path: "/profile/transactions",
    val: "Transactions",
    icon: {
      active: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.6665 9.66732V8.00065C1.6665 5.08398 3.33317 3.83398 5.83317 3.83398H14.1665C16.6665 3.83398 18.3332 5.08398 18.3332 8.00065V13.0007C18.3332 15.9173 16.6665 17.1673 14.1665 17.1673H9.99984"
            stroke="#A91418"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.99984 12.5827C11.1504 12.5827 12.0832 11.6499 12.0832 10.4993C12.0832 9.34876 11.1504 8.41602 9.99984 8.41602C8.84924 8.41602 7.9165 9.34876 7.9165 10.4993C7.9165 11.6499 8.84924 12.5827 9.99984 12.5827Z"
            stroke="#A91418"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.4165 8.41602V12.5827"
            stroke="#A91418"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.6665 13.418H6.11653C6.64986 13.418 7.08317 13.8513 7.08317 14.3846V15.4513"
            stroke="#A91418"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.68315 12.4004L1.6665 13.417L2.68315 14.4337"
            stroke="#A91418"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.08317 17.8165H2.63315C2.09981 17.8165 1.6665 17.3832 1.6665 16.8498V15.7832"
            stroke="#A91418"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.06738 18.8341L7.08402 17.8175L6.06738 16.8008"
            stroke="#A91418"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      inactive: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.6665 9.66732V8.00065C1.6665 5.08398 3.33317 3.83398 5.83317 3.83398H14.1665C16.6665 3.83398 18.3332 5.08398 18.3332 8.00065V13.0007C18.3332 15.9173 16.6665 17.1673 14.1665 17.1673H9.99984"
            stroke="#484647"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.99984 12.5827C11.1504 12.5827 12.0832 11.6499 12.0832 10.4993C12.0832 9.34876 11.1504 8.41602 9.99984 8.41602C8.84924 8.41602 7.9165 9.34876 7.9165 10.4993C7.9165 11.6499 8.84924 12.5827 9.99984 12.5827Z"
            stroke="#484647"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.4165 8.41602V12.5827"
            stroke="#484647"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.6665 13.418H6.11653C6.64986 13.418 7.08317 13.8513 7.08317 14.3846V15.4513"
            stroke="#484647"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.68315 12.4004L1.6665 13.417L2.68315 14.4337"
            stroke="#484647"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.08317 17.8165H2.63315C2.09981 17.8165 1.6665 17.3832 1.6665 16.8498V15.7832"
            stroke="#484647"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.06738 18.8341L7.08402 17.8175L6.06738 16.8008"
            stroke="#484647"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  },
];

function ProfileNavs() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeNav, setActiveNav] = useState(
    navs.find((nav) => nav.path === pathname)?.id
  );

  useEffect(() => {
    setActiveNav(navs.find((nav) => nav.path === pathname)?.id);
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
