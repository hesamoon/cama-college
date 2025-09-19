"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// data
import { headerMenus } from "@/constants/data";

// types
import { HeaderNav, SubMenu } from "@/app/types/types";

// hooks
import useIsMobile from "@/hooks/useIsMobile";

function Navbar({ landingNavbar = false }: { landingNavbar: boolean }) {
  const isMobile = useIsMobile();

  return (
    <nav>
      {isMobile ? <MobileNav /> : <DesktopNav landingNavbar={landingNavbar} />}
    </nav>
  );
}

export default Navbar;

function MobileNav() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-4">
      {headerMenus.map((menu) => {
        // Check if any submenu href matches current pathname
        const isOpen = menu.subMenus?.some((sm) => sm.href === pathname);

        return (
          <li key={menu.id}>
            {menu.subMenus?.length ? (
              <details className="group" open={isOpen}>
                <summary className="cursor-pointer list-none font-semibold text-base flex justify-between items-center">
                  {menu.name}
                  <svg
                    className="transition-transform group-open:rotate-180"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6004 7.45833L11.1671 12.8917C10.5254 13.5333 9.47539 13.5333 8.83372 12.8917L3.40039 7.45833"
                      stroke="#9B9798"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <ul className="ml-4 mt-2 space-y-2">
                  {menu.subMenus.map((sm) => (
                    <li key={sm.id}>
                      <Link
                        href={sm.href}
                        className="text-sm text-gray-600 hover:text-black block"
                      >
                        {sm.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ) : (
              <Link
                href={menu.href}
                className="text-base font-semibold hover:text-black block"
              >
                {menu.name}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function DesktopNav({ landingNavbar }: { landingNavbar: boolean }) {
  const [selNav, setSelNav] = useState<HeaderNav | null>(null);

  return (
    <ul className="flex items-center gap-1">
      {headerMenus.map((hmnu) => (
        <DesktopNavItem
          key={hmnu.id}
          hmnu={hmnu}
          selNav={selNav}
          setSelNav={setSelNav}
          landingNavbar={landingNavbar}
        />
      ))}
    </ul>
  );
}

const DesktopNavItem = ({
  hmnu,
  selNav,
  setSelNav,
  landingNavbar,
}: {
  hmnu: HeaderNav;
  selNav: HeaderNav | null;
  setSelNav: (val: HeaderNav | null) => void;
  landingNavbar: boolean;
}) => {
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <li
      ref={ref}
      className="relative cursor-pointer transition-all ease-linear duration-300"
      onClick={() => setSelNav(hmnu)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setThisSubMenusHovered(null);
      }}
    >
      {hmnu.id !== 2 ? (
        <div
          className={`flex items-center gap-1 rounded-sm ${
            landingNavbar
              ? "hover:bg-background-primary-light/20"
              : "hover:bg-surface0-light"
          } py-2.5 px-2`}
        >
          <span
            className={`body-medium ${
              landingNavbar
                ? "text-txt-on-primary-dark"
                : selNav?.id === hmnu.id
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
              isHovered || selNav?.id === hmnu.id ? "rotate-180" : ""
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
                  landingNavbar
                    ? "#F3F3F3"
                    : selNav?.id === hmnu.id
                    ? "#A91418"
                    : isHovered
                    ? "#170304"
                    : "#9B9798"
                }
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      ) : (
        <Link
          href={hmnu.href}
          className={`flex items-center gap-1 rounded-sm ${
            landingNavbar
              ? "hover:bg-background-primary-light/20"
              : "hover:bg-surface0-light"
          } py-2.5 px-2`}
        >
          <span
            className={`body-medium ${
              landingNavbar
                ? "text-txt-on-primary-dark"
                : selNav?.id === hmnu.id
                ? "text-background-primary-light"
                : isHovered
                ? "text-on_surface-light"
                : "text-txt-on-surface-secondary-light"
            }`}
          >
            {hmnu.name}
          </span>
        </Link>
      )}

      {hmnu.subMenus?.length && (isHovered || selNav?.id === hmnu.id) ? (
        <div className="absolute top-10.5 flex gap-6 min-w-60 body-medium bg-surface0-light rounded-sm p-3 border border-outline-level1 z-[999]">
          <ul className="flex flex-col gap-2 min-w-60 w-full">
            {hmnu.subMenus.map((sm) => (
              <Link key={sm.id} href={sm.href}>
                <li
                  className="whitespace-nowrap flex items-center justify-between gap-3"
                  onMouseEnter={() => setThisSubMenusHovered(sm)}
                  onMouseLeave={() => setThisSubMenusHovered(null)}
                >
                  <span className="text-txt-on-surface-secondary-light">
                    {sm.name}
                  </span>
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.33333 8.5H13.5533"
                      stroke="#484647"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </li>
              </Link>
            ))}
          </ul>

          {thisSubMenusHovered?.desc && (
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
          )}
        </div>
      ) : null}
    </li>
  );
};
