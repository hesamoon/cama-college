"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// data
import { headerMenus } from "@/constants/data";

// type
import { HeaderNav, HeaderNavProps, SubMenu } from "@/app/types/types";

function Navbar() {
  const [selNav, setSelNav] = useState<HeaderNav | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setSelNav(null);
  }, [pathname]); // Runs every time the URL path changes

  return (
    <div>
      <ul className="flex items-center gap-2">
        {headerMenus.map((hmnu) => (
          <Nav
            key={hmnu.id}
            selNav={selNav}
            setSelNav={setSelNav}
            hmnu={hmnu}
          />
        ))}
      </ul>
    </div>
  );
}

export default Navbar;

const Nav: React.FC<HeaderNavProps> = ({ selNav, setSelNav, hmnu }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [thisSubMenusHovered, setThisSubMenusHovered] =
    useState<SubMenu | null>(null);

  const ref = useRef<HTMLLIElement | null>(null);

  // handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setSelNav(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <li
      ref={ref}
      className="relative cursor-pointer transition-all ease-linear duration-300"
      onClick={() => setSelNav(hmnu)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        // setThisSubMenusHovered(null);
      }}
    >
      <div className="flex items-center gap-1 rounded-sm hover:bg-surface0-light py-2.5 px-2">
        <span
          className={`body-medium ${
            selNav?.id === hmnu.id
              ? "text-background-primary-light"
              : isHovered
              ? "text-on_surface-light"
              : "text-txt-on-surface-secondary-light"
          }`}
        >
          {hmnu.name}
        </span>

        <div
          className={`transition-all ease-linear duration-300 ${
            isHovered || selNav?.id === hmnu.id ? "rotate-180" : null
          }`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.6004 7.45833L11.1671 12.8917C10.5254 13.5333 9.47539 13.5333 8.83372 12.8917L3.40039 7.45833"
              stroke={
                selNav?.id === hmnu.id
                  ? "#A91418"
                  : isHovered
                  ? "#170304"
                  : "#9B9798"
              }
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {hmnu.subMenus ? (
        hmnu.subMenus.length > 0 ? (
          isHovered || selNav?.id === hmnu.id ? (
            <div
              className={`absolute top-10.5 flex gap-6 min-w-60 body-medium bg-surface0-light rounded-sm p-3 border border-outline-level1 ${
                isHovered ? "z-[999]" : null
              }`}
            >
              <ul className="flex flex-col gap-2 min-w-60 w-full">
                {hmnu.subMenus.map((sm) => (
                  <Link key={sm.id} href={`${sm.href}`}>
                    <li
                      className="whitespace-nowrap flex items-center justify-between gap-3"
                      onMouseEnter={() => setThisSubMenusHovered(sm)}
                      onMouseLeave={() => setThisSubMenusHovered(null)}
                    >
                      <span className={`text-txt-on-surface-secondary-light`}>
                        {sm.name}
                      </span>

                      <div>
                        <svg
                          width="16"
                          height="17"
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.62 4.45331L13.6667 8.49998L9.62 12.5466"
                            stroke="#484647"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M2.33333 8.5H13.5533"
                            stroke="#484647"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </li>
                  </Link>
                ))}
              </ul>

              {thisSubMenusHovered ? (
                thisSubMenusHovered?.desc ? (
                  <div className="flex gap-6 w-full py-2">
                    <div className="border border-outline-level1 h-full" />

                    <div className="space-y-2 min-w-[17.5rem]">
                      <h5
                        className={`title-small ${
                          selNav?.id === hmnu.id
                            ? "text-background-primary-light"
                            : "text-on_surface-light"
                        }`}
                      >
                        {thisSubMenusHovered.desc.title}
                      </h5>
                      <p className="text-justify body-medium text-txt-on-surface-secondary-light">
                        {thisSubMenusHovered.desc.content}
                      </p>
                    </div>
                  </div>
                ) : null
              ) : null}
            </div>
          ) : null
        ) : null
      ) : null}
    </li>
  );
};
